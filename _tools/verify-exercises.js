const http = require("http");
function call(p, body) {
  return new Promise(function (res2, rej) {
    const d = JSON.stringify(body);
    const q = http.request({ host: "127.0.0.1", port: 8777, path: p, method: "POST",
      headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(d) } },
      function (r) { let s = ""; r.on("data", c => s += c); r.on("end", () => res2(JSON.parse(s))); });
    q.on("error", rej); q.write(d); q.end();
  });
}
global.window = {};
require("C:/Users/ROG STRIX/Desktop/classnote/data/code/oop.js");
require("C:/Users/ROG STRIX/Desktop/classnote/data/code/vb.js");
const ALL = global.window.CN_CODE;
(async function () {
  let pass = 0, fail = 0, starterOk = 0, starterBad = 0;
  for (const sub of Object.keys(ALL)) {
    console.log("\n===== " + sub + " (" + ALL[sub].exercises.length + " exercises) =====");
    for (const ex of ALL[sub].exercises) {
      const r = await call("/api/run", { lang: ex.lang, code: ex.solution, tests: ex.tests });
      const allMatch = r.ok && r.runs.length === ex.tests.length && r.runs.every(x => x.match);
      if (allMatch) { pass++; console.log("  PASS " + ex.id + "  (" + r.ms + "ms, " + ex.tests.length + " tests)"); }
      else {
        fail++;
        console.log("  FAIL " + ex.id + "  compileOk=" + r.ok + " ms=" + r.ms);
        if (!r.ok) console.log("    log: " + String(r.compile.log).split("\n").slice(0, 4).join(" | "));
        (r.runs || []).forEach(x => { if (!x.match) console.log("    [" + x.name + "] got=" + JSON.stringify(x.stdout) + " want=" + JSON.stringify(x.expected)); });
      }
      const s = await call("/api/run", { lang: ex.lang, code: ex.starter, tests: [] });
      if (s.ok) starterOk++; else { starterBad++; console.log("    (starter does not compile: " + String(s.compile.log).split("\n")[0] + ")"); }
    }
  }
  console.log("\nSOLUTIONS: " + pass + " pass / " + fail + " fail");
  console.log("STARTERS : " + starterOk + " compile / " + starterBad + " broken");
})();