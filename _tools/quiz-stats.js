
const fs = require("fs"), path = require("path");
const WS = "C:/Users/ROG STRIX/Desktop/classnote";
const SUBJ = ["oop","cs","dcn","os","sadm","vb"];
global.window = {};
const manifest = JSON.parse(fs.readFileSync(path.join(WS,"data/manifest.json"),"utf8"));
let gt = 0, types = {}, ids = new Map(), dupes = [], bad = [];
for (const s of SUBJ) {
  const f = path.join(WS, "data/quiz", s + ".js");
  if (!fs.existsSync(f)) { console.log(s.padEnd(6), "MISSING"); continue; }
  require(f);
  const Q = window.CN_QUIZ && window.CN_QUIZ[s];
  if (!Q) { console.log(s.padEnd(6), "NO DATA"); continue; }
  let n = 0, chs = 0;
  for (const c of Object.keys(Q.chapters)) {
    chs++;
    for (const q of Q.chapters[c]) {
      n++;
      types[q.type] = (types[q.type]||0)+1;
      if (ids.has(q.id)) dupes.push(q.id + " (" + s + " / " + ids.get(q.id) + ")"); else ids.set(q.id, s);
      // sanity: mcq answer must be unique-ish / in range
      if (q.type === "mcq" && (q.answer < 0 || q.answer > 3)) bad.push(q.id + " mcq range");
      if (q.type === "multi" && !Array.isArray(q.answer)) bad.push(q.id + " multi type");
      if (q.type === "fill" && (!Array.isArray(q.answer) || q.answer.length < 2)) bad.push(q.id + " fill arr");
      if (q.type === "tf" && typeof q.answer !== "boolean") bad.push(q.id + " tf type");
    }
  }
  const want = (manifest[s]||[]).length;
  console.log(s.padEnd(6), String(chs+"/"+want).padEnd(7), String(n).padStart(3), "questions", chs===want ? "OK" : "CHAPTER MISMATCH", "size " + Math.round(fs.statSync(f).size/1024) + "KB");
  gt += n;
}
console.log("\nTOTAL:", gt, "questions");
console.log("types:", JSON.stringify(types));
console.log("duplicate ids:", dupes.length ? dupes.slice(0,10).join(", ") : "none");
console.log("bad:", bad.length ? bad.slice(0,10).join("; ") : "none");

// duplicate stems within a subject
for (const s of SUBJ) {
  const f = path.join(WS, "data/quiz", s + ".js");
  if (!fs.existsSync(f)) continue;
  const Q = window.CN_QUIZ[s];
  const seen = new Map(); let dup = 0;
  for (const c of Object.keys(Q.chapters)) for (const q of Q.chapters[c]) {
    const k = q.q.en.toLowerCase().replace(/[^a-z0-9]/g,"").slice(0,80);
    if (seen.has(k)) dup++; else seen.set(k, q.id);
  }
  if (dup) console.log(s, "duplicate stems:", dup);
}
