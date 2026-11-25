#!/usr/bin/env node
/**
 * ClassNote Code Lab — local compile & run service (zero dependencies).
 *
 *   node server.js [port]
 *
 * Serves the static site AND exposes POST /api/run which really compiles
 * Java (javac) and Visual Basic (.NET / Roslyn vbc) and runs the result.
 *
 * Design notes:
 *  - child stdout/stderr go to FILES via file descriptors, never pipes, so this
 *    works in restricted shells and keeps logs inspectable.
 *  - every request gets its own temp folder, removed afterwards.
 *  - compile and run are time-boxed; runaway code is killed.
 */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = __dirname;
const PORT = Number(process.argv[2] || process.env.PORT || 8777);
const WORK = path.join(ROOT, ".codelab");
const TMP = path.join(WORK, "tmp");
const CACHE = path.join(WORK, "cache");

const COMPILE_TIMEOUT = 25000;
const RUN_TIMEOUT = 6000;
const MAX_BODY = 512 * 1024;

fs.mkdirSync(TMP, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

const TOOLS = { java: null, vb: null, checked: false, notes: [] };

function run(cmd, args, opts) {
  opts = opts || {};
  const ownFd = opts.outFd == null;
  const outFdPath = ownFd
    ? path.join(TMP, "probe-" + process.pid + "-" + (run._n = (run._n || 0) + 1) + ".log")
    : null;
  let fd = opts.outFd;
  if (ownFd) {
    try { fd = fs.openSync(outFdPath, "w"); } catch (e) { return { status: -1, out: "" }; }
  }
  try {
    const r = spawnSync(cmd, args, {
      cwd: opts.cwd || TMP,
      stdio: [opts.stdinFd != null ? opts.stdinFd : "ignore", fd, fd],
      timeout: opts.timeout || 10000,
      env: Object.assign({}, process.env, opts.env || {})
    });
    let out = "";
    if (ownFd) {
      fs.closeSync(fd); fd = null;
      try { out = fs.readFileSync(outFdPath, "utf8"); } catch (e) { }
      try { fs.unlinkSync(outFdPath); } catch (e) { }
    }
    return { status: r.status, signal: r.signal, out, error: r.error && r.error.code };
  } catch (e) {
    if (ownFd && fd != null) { try { fs.closeSync(fd); } catch (e2) { } }
    return { status: -1, out: String(e && e.message) };
  }
}

function byVersion(a, b) {
  const pa = a.split(".").map(Number), pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] || 0, y = pb[i] || 0;
    if (x !== y) return x - y;
  }
  return 0;
}

function findDotnetSdk() {
  const roots = [process.env.DOTNET_ROOT, "C:\\Program Files\\dotnet", "C:\\Program Files (x86)\\dotnet"].filter(Boolean);
  for (const r of roots) {
    const sdkDir = path.join(r, "sdk");
    if (!fs.existsSync(sdkDir)) continue;
    const vers = fs.readdirSync(sdkDir).filter(v => /^\d+\./.test(v)).sort(byVersion).reverse();
    for (const v of vers) {
      const vbc = path.join(sdkDir, v, "Roslyn", "bincore", "vbc.dll");
      if (fs.existsSync(vbc)) return { root: r, vbc, sdk: v };
    }
  }
  return null;
}

function findRefPack(root) {
  const packs = path.join(root, "packs", "Microsoft.NETCore.App.Ref");
  if (!fs.existsSync(packs)) return null;
  const vers = fs.readdirSync(packs).filter(v => /^\d+\./.test(v)).sort(byVersion).reverse();
  for (const v of vers) {
    const refRoot = path.join(packs, v, "ref");
    if (!fs.existsSync(refRoot)) continue;
    const tfms = fs.readdirSync(refRoot).filter(t => /^net\d/.test(t)).sort().reverse();
    for (const t of tfms) {
      const dir = path.join(refRoot, t);
      if (fs.existsSync(path.join(dir, "Microsoft.VisualBasic.dll"))) return { dir, tfm: t, version: v };
    }
  }
  return null;
}

function findRuntimeVersion(root) {
  const shared = path.join(root, "shared", "Microsoft.NETCore.App");
  if (!fs.existsSync(shared)) return null;
  const vers = fs.readdirSync(shared).filter(v => /^\d+\./.test(v)).sort(byVersion);
  return vers.length ? vers[vers.length - 1] : null;
}

function detect() {
  if (TOOLS.checked) return TOOLS;
  TOOLS.checked = true;

  const jp = run("javac", ["-version"], { timeout: 15000 });
  if (jp.status === 0) {
    TOOLS.java = { javac: "javac", java: "java" };
    TOOLS.notes.push("Java: " + jp.out.trim().split("\n")[0]);
  } else if (process.env.JAVA_HOME) {
    const jc = path.join(process.env.JAVA_HOME, "bin", "javac.exe");
    const jv = path.join(process.env.JAVA_HOME, "bin", "java.exe");
    if (fs.existsSync(jc) && fs.existsSync(jv)) {
      TOOLS.java = { javac: jc, java: jv };
      TOOLS.notes.push("Java: " + process.env.JAVA_HOME);
    }
  }
  if (!TOOLS.java) TOOLS.notes.push("Java: javac 未找到");

  const sdk = findDotnetSdk();
  const ref = sdk && findRefPack(sdk.root);
  const rt = sdk && findRuntimeVersion(sdk.root);
  if (sdk && ref && rt) {
    const rsp = path.join(CACHE, "refs-" + sdk.sdk + "-" + ref.version + ".rsp");
    if (!fs.existsSync(rsp)) {
      const refs = fs.readdirSync(ref.dir).filter(f => f.endsWith(".dll"))
        .map(f => '/r:"' + path.join(ref.dir, f) + '"');
      fs.writeFileSync(rsp, refs.join("\r\n"), "utf8");
    }
    TOOLS.vb = {
      vbc: sdk.vbc, rsp, tfm: ref.tfm, runtime: rt,
      vbRuntime: path.join(ref.dir, "Microsoft.VisualBasic.dll")
    };
    TOOLS.notes.push("VB.NET: SDK " + sdk.sdk + " / " + ref.tfm);
  } else {
    TOOLS.notes.push("VB.NET: 未找到 .NET SDK");
  }
  return TOOLS;
}

function norm(s) {
  return String(s == null ? "" : s).replace(/\r\n/g, "\n").replace(/[ \t]+$/gm, "").replace(/\n+$/, "").trim();
}
function escapeRx(s) { return s.replace(/[.*+?^$|{}\[\]()\\]/g, "\\$&"); }
function cleanLog(s) {
  const noise = /^\s*(MSBuild version|Determining projects to restore|正在确定要还原的项目|已还原 |Restored |All projects are up-to-date|所有项目均是最新的|\d+ 个警告|\d+ 个错误|生成失败|生成成功|Build FAILED|Build succeeded|已用时间|Time Elapsed)/i;
  const seen = new Set();
  const lines = [];
  String(s || "").replace(new RegExp(escapeRx(TMP), "g"), "").replace(/\r\n/g, "\n").split("\n").forEach(function (l) {
    if (noise.test(l)) return;
    const t = l.replace(/\s*\[[^\]\\]*\.vbproj\]\s*$/, "").replace(/\s+$/, "");
    if (!t.trim()) { if (lines.length && lines[lines.length - 1] !== "") lines.push(""); return; }
    if (seen.has(t)) return;
    seen.add(t);
    lines.push(t);
  });
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function execAll(dir, tests, extraStdin, launcher) {
  const list = (tests && tests.length) ? tests : [{ stdin: extraStdin || "", out: null }];
  const results = [];
  const stdinPath = path.join(dir, "stdin.txt");
  const outPath = path.join(dir, "out.txt");

  for (let i = 0; i < list.length; i++) {
    const tc = list[i];
    fs.writeFileSync(stdinPath, tc.stdin || "", "utf8");
    let fdIn = -1, fdOut = -1;
    try {
      fdIn = fs.openSync(stdinPath, "r");
      fdOut = fs.openSync(outPath, "w");
      const r = launcher(fdIn, fdOut);
      try { fs.closeSync(fdIn); } catch (e) { } fdIn = -1;
      try { fs.closeSync(fdOut); } catch (e) { } fdOut = -1;
      let stdout = "";
      try { stdout = fs.readFileSync(outPath, "utf8"); } catch (e) { }
      results.push({
        ok: r.status === 0,
        status: r.status,
        signal: r.signal,
        stdout: norm(stdout),
        expected: tc.out != null ? norm(tc.out) : null,
        match: tc.out != null ? norm(stdout) === norm(tc.out) : null,
        name: tc.name || ("Test " + (i + 1)),
        timedOut: r.signal === "SIGTERM"
      });
    } finally {
      if (fdIn >= 0) { try { fs.closeSync(fdIn); } catch (e) { } }
      if (fdOut >= 0) { try { fs.closeSync(fdOut); } catch (e) { } }
    }
  }
  return results;
}

function javaProgram(dir, code, tests, extraStdin) {
  const src = path.join(dir, "Main.java");
  fs.writeFileSync(src, code, "utf8");
  const classes = path.join(dir, "classes");
  fs.mkdirSync(classes, { recursive: true });

  const c = run("javac", ["-encoding", "UTF-8", "-d", classes, src], { cwd: dir, timeout: COMPILE_TIMEOUT });
  if (c.status !== 0) return { compile: { ok: false, log: cleanLog(c.out) }, runs: [] };

  return {
    compile: { ok: true, log: cleanLog(c.out) },
    runs: execAll(dir, tests, extraStdin, (fdIn, fdOut) =>
      run("java", ["-Dfile.encoding=UTF-8", "-Dstdout.encoding=UTF-8", "-cp", classes, "Main"],
        { cwd: dir, timeout: RUN_TIMEOUT, stdinFd: fdIn, outFd: fdOut }))
  };
}

const VB_IMPORTS = "/imports:Microsoft.VisualBasic,System,System.Collections,System.Collections.Generic,System.Linq,System.IO,System.Text,System.Diagnostics";

function vbProgram(dir, code, tests, extraStdin) {
  const t = detect().vb;
  if (!t) return { compile: { ok: false, log: "未检测到 .NET SDK。" }, runs: [] };

  const src = path.join(dir, "Program.vb");
  fs.writeFileSync(src, code, "utf8");
  const outDll = path.join(dir, "Program.dll");

  const args = [
    t.vbc, "/nologo", "/target:exe", "/langversion:latest",
    "/out:" + outDll,
    "/vbruntime:" + t.vbRuntime,
    '/define:_MYTYPE="Empty"',
    VB_IMPORTS,
    "@" + t.rsp,
    src
  ];
  const c = run("dotnet", args, { cwd: dir, timeout: COMPILE_TIMEOUT });
  if (c.status !== 0 || !fs.existsSync(outDll))
    return { compile: { ok: false, log: cleanLog(c.out) }, runs: [] };

  fs.writeFileSync(path.join(dir, "Program.runtimeconfig.json"),
    JSON.stringify({ runtimeOptions: { tfm: t.tfm, framework: { name: "Microsoft.NETCore.App", version: t.runtime } } }), "utf8");

  return {
    compile: { ok: true, log: "" },
    runs: execAll(dir, tests, extraStdin, (fdIn, fdOut) =>
      run("dotnet", [outDll], { cwd: dir, timeout: RUN_TIMEOUT, stdinFd: fdIn, outFd: fdOut }))
  };
}

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml",
  ".pdf": "application/pdf", ".ico": "image/x-icon",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".txt": "text/plain; charset=utf-8", ".md": "text/markdown; charset=utf-8"
};

function send(res, code, body, type) {
  res.writeHead(code, {
    "Content-Type": type || "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Private-Network": "true",
    "Cache-Control": "no-store"
  });
  res.end(body);
}

let seq = 0;

function handleRun(req, res) {
  let body = "";
  req.on("data", c => { body += c; if (body.length > MAX_BODY) req.destroy(); });
  req.on("end", () => {
    let payload;
    try { payload = JSON.parse(body || "{}"); }
    catch (e) { return send(res, 400, JSON.stringify({ error: "bad json" })); }

    const lang = payload.lang === "vb" ? "vb" : "java";
    const code = String(payload.code || "");
    if (!code.trim()) return send(res, 400, JSON.stringify({ error: "empty code" }));
    if (code.length > MAX_BODY) return send(res, 413, JSON.stringify({ error: "code too large" }));

    const t = detect();
    if ((lang === "java" && !t.java) || (lang === "vb" && !t.vb))
      return send(res, 200, JSON.stringify({ ok: false, unavailable: true, notes: t.notes }));

    const dir = path.join(TMP, "run-" + Date.now() + "-" + (seq++));
    fs.mkdirSync(dir, { recursive: true });
    const started = Date.now();
    let out;
    try {
      out = lang === "java" ? javaProgram(dir, code, payload.tests, payload.stdin)
        : vbProgram(dir, code, payload.tests, payload.stdin);
    } catch (e) {
      out = { compile: { ok: false, log: "内部错误: " + (e && e.message) }, runs: [] };
    }
    out.ok = out.compile.ok;
    out.lang = lang;
    out.ms = Date.now() - started;

    setTimeout(() => { try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) { } }, 50);
    send(res, 200, JSON.stringify(out));
  });
}

const server = http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  if (req.method === "OPTIONS") return send(res, 204, "");
  if (url === "/api/health") {
    const t = detect();
    return send(res, 200, JSON.stringify({ ok: true, java: !!t.java, vb: !!t.vb, notes: t.notes, port: PORT }));
  }
  if (url === "/api/run" && req.method === "POST") return handleRun(req, res);

  let rel = url === "/" ? "index.html" : url.replace(/^\/+/, "");
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT)) return send(res, 403, "forbidden", "text/plain");
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      if (!path.extname(rel)) return send(res, 200, fs.readFileSync(path.join(ROOT, "index.html")), MIME[".html"]);
      return send(res, 404, "not found", "text/plain");
    }
    const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" });
    fs.createReadStream(file).pipe(res);
  });
});

detect();
server.listen(PORT, "127.0.0.1", () => {
  console.log("");
  console.log("  ClassNote Code Lab");
  console.log("  ----------------------------------------");
  console.log("  http://127.0.0.1:" + PORT + "/#/code");
  console.log("");
  TOOLS.notes.forEach(n => console.log("  " + n));
  console.log("  ----------------------------------------");
  console.log("  关闭此窗口即停止服务。");
  console.log("");
});
