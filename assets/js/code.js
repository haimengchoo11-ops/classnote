/* ClassNote Code Lab — editor + real compiler bridge (Java / VB.NET). */
(function () {
  "use strict";
  var CODE = window.CN_CODE || {};
  var DATA = window.CN_DATA || {};
  var ORDER = window.CN_SUBJECT_ORDER || Object.keys(CODE);
  var API = (location.protocol === "file:") ? "http://127.0.0.1:8777" : "";
  var LSKEY = "classnote.codes.v1";
  var health = null, probed = false, probeFailed = false;
  var busy = false, lastResult = null, showHint = false, showSol = false;
  var customIn = "";

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function lang() { return document.body.getAttribute("data-lang") || "tri"; }
  function pick(o) { if (!o) return ""; if (typeof o === "string") return o; var l = lang(); return (l === "tri" ? o.en : o[l]) || o.en || o.zh || o.ms || ""; }
  function TL(o) {
    if (!o) return "";
    if (o.zh === o.en && o.en === o.ms) return '<span class="triplain">' + esc(o.en) + "</span>";
    return '<span class="tridge">' +
      '<span class="ql l-zh">' + esc(o.zh) + "</span>" +
      '<span class="ql l-en">' + esc(o.en) + "</span>" +
      '<span class="ql l-ms">' + esc(o.ms) + "</span></span>";
  }
  function exList() {
    var out = [];
    ORDER.forEach(function (sid) {
      var S = CODE[sid]; if (!S) return;
      (S.exercises || []).forEach(function (e) { out.push({ sub: sid, ex: e }); });
    });
    return out;
  }
  function findEx(sub, id) {
    var S = CODE[sub]; if (!S) return null;
    for (var i = 0; i < S.exercises.length; i++) if (S.exercises[i].id === id) return S.exercises[i];
    return null;
  }
  function chapterTitle(sub, cid) {
    var S = DATA[sub]; if (!S) return { en: cid };
    for (var i = 0; i < S.chapters.length; i++) if (S.chapters[i].id === cid) return S.chapters[i].title;
    return { en: cid };
  }
  function store() {
    try { return JSON.parse(localStorage.getItem(LSKEY) || "{}"); } catch (e) { return {}; }
  }
  function saveCode(id, code) {
    var s = store(); s[id] = code;
    try { localStorage.setItem(LSKEY, JSON.stringify(s)); } catch (e) { }
  }
  function getCode(ex) {
    var s = store();
    return (s[ex.id] !== undefined && s[ex.id] !== "") ? s[ex.id] : ex.starter;
  }

  var T = {
    lab: { zh: "编程实验室", en: "Code Lab", ms: "Makmal Kod" },
    runCheck: { zh: "运行并检查", en: "Run & Check", ms: "Jalan & Semak" },
    runOnly: { zh: "仅运行", en: "Run only", ms: "Jalan sahaja" },
    reset: { zh: "重置代码", en: "Reset code", ms: "Set semula kod" },
    hint: { zh: "提示", en: "Hint", ms: "Petunjuk" },
    solution: { zh: "参考解", en: "Solution", ms: "Penyelesaian" },
    tests: { zh: "测试用例", en: "Test cases", ms: "Kes ujian" },
    output: { zh: "运行输出", en: "Output", ms: "Output" },
    compile: { zh: "编译", en: "Compile", ms: "Kompil" },
    compileErr: { zh: "编译错误", en: "Compile error", ms: "Ralat kompil" },
    allPass: { zh: "全部通过", en: "All passed", ms: "Semua lulus" },
    someFail: { zh: "有未通过", en: "Some failed", ms: "Ada yang gagal" },
    task: { zh: "题目", en: "Task", ms: "Tugasan" },
    editor: { zh: "编辑器", en: "Editor", ms: "Penyunting" },
    stdin: { zh: "自定义输入（仅运行模式）", en: "Custom input (Run only)", ms: "Input tersuai (Jalan sahaja)" },
    needServer: { zh: "需要启动本地编译服务", en: "Local compiler service required", ms: "Perkhidmatan pengkompil setempat diperlukan" },
    retry: { zh: "重新检测", en: "Check again", ms: "Semak semula" },
    noServerBody: {
      zh: "编程题要真正编译运行，浏览器做不到，需要本机启动一个小服务。双击项目文件夹里的「启动练习环境.bat」即可（它会自动打开浏览器）。",
      en: "Real compilation cannot happen inside a browser, so a tiny local service is needed. Double-click 启动练习环境.bat in the project folder - it starts the service and opens the browser for you.",
      ms: "Pengkompilan sebenar tidak boleh berlaku dalam pelayar, jadi perkhidmatan setempat kecil diperlukan. Klik dua kali 启动练习环境.bat dalam folder projek - ia memulakan perkhidmatan dan membuka pelayar."
    },
    ready: { zh: "编译服务已连接", en: "Compiler service connected", ms: "Perkhidmatan pengkompil disambungkan" },
    expected: { zh: "期望输出", en: "Expected", ms: "Dijangka" },
    actual: { zh: "实际输出", en: "Actual", ms: "Sebenar" },
    ms: { zh: "耗时", en: "took", ms: "ambil masa" },
    pickEx: { zh: "选一道题开始", en: "Pick an exercise", ms: "Pilih latihan" }
  };
  function t(k) { var o = T[k]; return o ? (o[lang() === "tri" ? "en" : lang()] || o.en) : k; }

  /* ---------------- server probe ---------------- */
  function probe(cb) {
    if (probed && !probeFailed) return cb(health);
    probed = true;
    var done = false;
    var timer = setTimeout(function () { if (!done) { done = true; probeFailed = true; cb(null); } }, 4000);
    fetch(API + "/api/health", { method: "GET" })
      .then(function (r) { return r.json(); })
      .then(function (j) { if (done) return; done = true; clearTimeout(timer); health = j; probeFailed = false; cb(j); })
      .catch(function () { if (done) return; done = true; clearTimeout(timer); probeFailed = true; cb(null); });
  }

  function serverPanel() {
    return '<div class="card lab-offline">' +
      '<div style="font-size:34px;margin-bottom:8px">⚙️</div>' +
      "<h2>" + esc(t("needServer")) + "</h2>" +
      '<p class="muted">' + esc(t("noServerBody")) + "</p>" +
      '<pre class="lab-cmd">node server.js</pre>' +
      '<p class="small muted">然后访问 http://127.0.0.1:8777/#/code</p>' +
      '<button class="btn primary" onclick="CNL.recheck()">🔄 ' + esc(t("retry")) + "</button>" +
      "</div>";
  }

  function statusBar() {
    if (!health) return "";
    var parts = [];
    if (health.java) parts.push("☕ Java");
    if (health.vb) parts.push("🟣 VB.NET");
    return '<div class="lab-status"><span class="dot"></span>' + esc(t("ready")) +
      ' <span class="muted">· ' + esc(parts.join("  ·  ")) + "</span></div>";
  }

  /* ---------------- views ---------------- */
  function viewHub() {
    var h = '<h1>⌨️ ' + esc(t("lab")) + "</h1>";
    h += '<p class="muted">' + esc(lang() === "zh" ? "写出代码，点一下就能用真正的编译器编译并跑测试用例，编译器报错也会原样显示。"
      : lang() === "ms" ? "Tulis kod, klik sekali untuk mengkompil dengan pengkompil sebenar dan jalankan kes ujian; ralat pengkompil dipaparkan seperti asalnya."
        : "Write code, click once to compile with the real toolchain and run the test cases; compiler errors are shown verbatim.") + "</p>";
    if (!health) { h += serverPanel(); return h; }
    h += statusBar();

    ORDER.forEach(function (sid) {
      var S = CODE[sid]; if (!S) return;
      var meta = DATA[sid] || {};
      h += '<div class="section"><div class="head"><span class="ico">' + (meta.icon || "💻") + "</span><h2>" +
        esc(pick(meta.name) || sid) + ' <span class="small muted">' + esc(S.lang.toUpperCase()) + "</span></h2>" +
        '<div class="hint">' + S.exercises.length + "</div></div>";
      S.exercises.forEach(function (e) {
        var saved = store()[e.id];
        h += '<div class="chap-row" onclick="location.hash=&#39;#/code/' + sid + "/" + e.id + '&#39;">' +
          '<div class="num">' + (e.diff || 1) + "</div>" +
          '<div class="mid"><div class="t">' + esc(pick(e.title)) + "</div>" +
          '<div class="s">' + esc(pick(chapterTitle(sid, e.chapter))) + " · " + e.tests.length + " " + esc(t("tests")) + "</div></div>" +
          '<div class="tags">' + (saved ? '<span class="chip plain">✎</span>' : "") + "</div></div>";
      });
      h += "</div>";
    });
    return h;
  }

  function editorHtml(ex) {
    var codeVal = getCode(ex);
    return '<div class="editor-wrap">' +
      '<div class="ed-bar"><span class="ttl">' + esc(t("editor")) + " · " + esc(ex.lang.toUpperCase()) + "</span>" +
      '<span class="sp"></span>' +
      '<button class="btn small" onclick="CNL.resetCode()">↺ ' + esc(t("reset")) + "</button></div>" +
      '<div class="ed-body"><div class="ed-gutter" id="gutter"></div>' +
      '<textarea id="ed" spellcheck="false" autocapitalize="off" autocomplete="off" wrap="off">' + esc(codeVal) + "</textarea></div>" +
      "</div>";
  }

  function viewExercise(sub, id) {
    var ex = findEx(sub, id);
    if (!ex) return '<div class="empty">Exercise not found</div>';
    if (!health) return '<h1>⌨️ ' + esc(t("lab")) + "</h1>" + serverPanel();

    var h = '<div class="lab-head"><div class="kicker">' + esc(pick(chapterTitle(sub, ex.chapter))) + "</div>" +
      "<h1>" + esc(pick(ex.title)) + '</h1><div class="meta">' +
      '<span class="chip plain">' + esc(ex.lang.toUpperCase()) + "</span>" +
      '<span class="chip plain">' + ex.tests.length + " " + esc(t("tests")) + "</span></div></div>";

    h += '<div class="lab-grid">';
    /* left: task */
    h += '<div class="lab-task"><div class="section"><div class="head"><span class="ico">📋</span><h2>' + esc(t("task")) + "</h2></div>" +
      '<div class="task-body">' + TL(ex.prompt) + "</div>";
    h += '<div class="task-tests"><div class="lbl">' + esc(t("tests")) + "</div>";
    ex.tests.forEach(function (tc, i) {
      h += '<div class="tcase"><div class="tc-h">' + esc(tc.name || ("Test " + (i + 1))) + "</div>" +
        '<div class="tc-row"><span class="k">stdin</span><code>' + esc(tc.stdin || "(empty)") + "</code></div>" +
        '<div class="tc-row"><span class="k">out</span><code>' + esc(tc.out) + "</code></div></div>";
    });
    h += "</div>";
    h += '<div class="task-actions">' +
      '<button class="btn" onclick="CNL.toggleHint()">💡 ' + esc(t("hint")) + "</button>" +
      '<button class="btn" onclick="CNL.toggleSol()">🔓 ' + esc(t("solution")) + "</button></div>";
    if (showHint) h += '<div class="lab-hint">' + TL(ex.hint) + "</div>";
    if (showSol) h += '<pre class="lab-sol">' + esc(ex.solution) + "</pre>";
    h += "</div></div>";

    /* right: editor + output */
    h += '<div class="lab-right">' + editorHtml(ex);
    h += '<div class="lab-actions">' +
      '<button class="btn primary" id="btnRun" onclick="CNL.run(true)">▶ ' + esc(t("runCheck")) + "</button>" +
      '<button class="btn" id="btnOnly" onclick="CNL.run(false)">⏵ ' + esc(t("runOnly")) + "</button>" +
      '<span class="grow"></span><span class="small muted" id="elapsed"></span></div>';
    h += '<details class="lab-customin"><summary>' + esc(t("stdin")) + "</summary>" +
      '<textarea id="stdin" spellcheck="false" placeholder="5&#10;or several lines…"></textarea></details>';
    h += '<div id="result"></div>';
    h += "</div></div>";
    return h;
  }

  function resultHtml(r) {
    var h = '<div class="lab-result">';
    if (!r.ok) {
      h += '<div class="res-head bad">✗ ' + esc(t("compileErr")) + "</div>";
      h += '<pre class="res-log">' + esc(r.compile.log || "(no output)") + "</pre>";
    } else {
      var runs = r.runs || [];
      var withExpected = runs.filter(function (x) { return x.expected != null; });
      var allPass = withExpected.length > 0 && withExpected.every(function (x) { return x.match; });
      var hasTests = withExpected.length > 0;
      h += '<div class="res-head ' + (hasTests ? (allPass ? "good" : "warn") : "neutral") + '">' +
        (hasTests ? (allPass ? "✓ " + esc(t("allPass")) : "✗ " + esc(t("someFail"))) : "▶ " + esc(t("output"))) + "</div>";
      runs.forEach(function (x, i) {
        if (x.expected != null) {
          h += '<div class="tres ' + (x.match ? "good" : "bad") + '">' +
            '<div class="tres-h"><span class="mk">' + (x.match ? "✓" : "✗") + "</span>" + esc(x.name) + "</div>";
          if (!x.match) {
            h += '<div class="tres-body"><div><span class="k">' + esc(t("expected")) + '</span><pre>' + esc(x.expected) + "</pre></div>" +
              '<div><span class="k">' + esc(t("actual")) + '</span><pre>' + esc(x.stdout || "(no output)") + "</pre></div></div>";
          }
          if (x.status !== 0) h += '<div class="tres-note">exit code: ' + x.status + (x.timedOut ? " · timed out" : "") + "</div>";
          h += "</div>";
        } else {
          h += '<pre class="res-log">' + esc(x.stdout || "(no output)") + "</pre>";
          if (x.status !== 0) h += '<div class="tres-note">exit code: ' + x.status + "</div>";
        }
      });
    }
    h += '<div class="res-meta">' + esc(t("ms")) + " " + r.ms + " ms</div></div>";
    return h;
  }

  /* ---------------- editor plumbing ---------------- */
  function syncGutter() {
    var ed = document.getElementById("ed"), g = document.getElementById("gutter");
    if (!ed || !g) return;
    var lines = ed.value.split("\n").length;
    var cur = g.children.length;
    if (cur !== lines) {
      var s = "";
      for (var i = 1; i <= lines; i++) s += "<i>" + i + "</i>";
      g.innerHTML = s;
    }
    g.scrollTop = ed.scrollTop;
  }

  function bindEditor(ex) {
    var ed = document.getElementById("ed");
    if (!ed) return;
    var saveTimer = null;
    ed.addEventListener("input", function () {
      syncGutter();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { saveCode(ex.id, ed.value); }, 400);
    });
    ed.addEventListener("scroll", function () {
      var g = document.getElementById("gutter");
      if (g) g.scrollTop = ed.scrollTop;
    });
    ed.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        var s = ed.selectionStart, en = ed.selectionEnd;
        ed.value = ed.value.slice(0, s) + "    " + ed.value.slice(en);
        ed.selectionStart = ed.selectionEnd = s + 4;
        syncGutter();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); CNL.run(true); }
    });
    syncGutter();
  }

  /* ---------------- public ---------------- */
  var current = null;

  var CNL = {
    view: function (p) {
      probe(function () { });
      if (p.length >= 3) {
        current = { sub: p[1], id: p[2] };
        var ex = findEx(p[1], p[2]);
        if (ex) setTimeout(function () { bindEditor(ex); }, 0);
        return viewExercise(p[1], p[2]);
      }
      current = null;
      return viewHub();
    },
    recheck: function () { probed = false; probeFailed = false; health = null; probe(function () { if (window.CN) CN.render(); }); },
    toggleHint: function () { showHint = !showHint; if (window.CN) CN.render(); },
    toggleSol: function () { showSol = !showSol; if (window.CN) CN.render(); },
    resetCode: function () {
      if (!current) return;
      var ex = findEx(current.sub, current.id);
      if (!ex) return;
      if (!confirm("Reset to the starter code?")) return;
      var s = store(); delete s[ex.id];
      try { localStorage.setItem(LSKEY, JSON.stringify(s)); } catch (e) { }
      if (window.CN) CN.render();
    },
    run: function (withTests) {
      if (busy || !current) return;
      var ex = findEx(current.sub, current.id);
      var ed = document.getElementById("ed");
      if (!ex || !ed) return;
      busy = true;
      saveCode(ex.id, ed.value);
      var btn = document.getElementById("btnRun"), btn2 = document.getElementById("btnOnly");
      if (btn) { btn.disabled = true; btn.textContent = "⏳ …"; }
      if (btn2) btn2.disabled = true;
      var res = document.getElementById("result");
      if (res) res.innerHTML = '<div class="lab-busy"><span class="spin"></span> ' + esc(ex.lang === "java" ? "javac / java" : "vbc / dotnet") + " …</div>";

      var stdinEl = document.getElementById("stdin");
      var payload = { lang: ex.lang, code: ed.value };
      if (withTests) payload.tests = ex.tests;
      else payload.stdin = stdinEl ? stdinEl.value : "";

      var t0 = Date.now();
      fetch(API + "/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          busy = false;
          if (btn) { btn.disabled = false; btn.textContent = "▶ " + t("runCheck"); }
          if (btn2) btn2.disabled = false;
          var el = document.getElementById("elapsed");
          if (el) el.textContent = "";
          if (j.unavailable) { if (res) res.innerHTML = serverPanel(); return; }
          lastResult = j;
          if (res) res.innerHTML = resultHtml(j);
        })
        .catch(function (e) {
          busy = false;
          if (btn) { btn.disabled = false; btn.textContent = "▶ " + t("runCheck"); }
          if (btn2) btn2.disabled = false;
          probeFailed = true; probed = false;
          if (res) res.innerHTML = '<div class="lab-result bad-box">连接编译服务失败：' + esc(String(e && e.message)) +
            '<br><button class="btn" onclick="CNL.recheck()">重试</button></div>';
        });
    },
    count: function () { return exList().length; }
  };
  window.CNL = CNL;
})();
