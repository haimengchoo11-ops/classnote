
const fs = require("fs"), path = require("path");
const WS = "C:/Users/ROG STRIX/Desktop/classnote";
const sub = process.argv[2];
const manifest = JSON.parse(fs.readFileSync(path.join(WS, "data/manifest.json"), "utf8"));
const file = path.join(WS, "data/quiz", sub + ".js");
if (!fs.existsSync(file)) { console.log("MISSING " + file); process.exit(2); }
global.window = {};
require(file);
const Q = global.window.CN_QUIZ && global.window.CN_QUIZ[sub];
if (!Q) { console.log("!! window.CN_QUIZ['" + sub + "'] not set"); process.exit(2); }
const errs = [], warns = [];
const TYPES = { mcq: 5, multi: 1, tf: 1, fill: 1 };
const chs = manifest[sub];
const ids = new Set();
const tri = (o, w, minLen) => {
  if (!o || typeof o !== "object") { errs.push(w + ": not trilingual"); return; }
  ["zh","en","ms"].forEach(l => {
    if (!o[l] || !String(o[l]).trim()) errs.push(w + ": missing " + l);
    else if (minLen && String(o[l]).trim().length < minLen) warns.push(w + "." + l + " short");
  });
};
let total = 0; const typeCount = {};
for (const m of chs) {
  const arr = Q.chapters[m.id];
  if (!Array.isArray(arr)) { errs.push(m.id + ": missing chapter"); continue; }
  if (arr.length !== 8) errs.push(m.id + ": has " + arr.length + " questions (need 8)");
  const localTypes = {};
  arr.forEach((q, i) => {
    total++;
    const w = m.id + "[" + i + "]";
    if (!q.id) errs.push(w + ": missing id");
    else if (ids.has(q.id)) errs.push(w + ": duplicate id " + q.id);
    else ids.add(q.id);
    if (!TYPES.hasOwnProperty(q.type)) { errs.push(w + ": bad type " + q.type); return; }
    localTypes[q.type] = (localTypes[q.type] || 0) + 1;
    typeCount[q.type] = (typeCount[q.type] || 0) + 1;
    tri(q.q, w + ".q", 10);
    tri(q.explain, w + ".explain", 15);
    if (q.diff !== 1 && q.diff !== 2 && q.diff !== 3) errs.push(w + ": diff must be 1/2/3");
    if (q.type === "mcq") {
      if (!Array.isArray(q.opts) || q.opts.length !== 4) errs.push(w + ": mcq needs 4 opts");
      else q.opts.forEach((o, j) => tri(o, w + ".opts[" + j + "]"));
      if (typeof q.answer !== "number") errs.push(w + ": mcq answer must be a number");
      else if (q.answer < 0 || q.answer > 3) errs.push(w + ": mcq answer out of range");
    }
    if (q.type === "multi") {
      if (!Array.isArray(q.opts) || q.opts.length < 4 || q.opts.length > 5) errs.push(w + ": multi needs 4-5 opts");
      else q.opts.forEach((o, j) => tri(o, w + ".opts[" + j + "]"));
      if (!Array.isArray(q.answer) || q.answer.length < 2) errs.push(w + ": multi answer must be array of >=2");
      else if (q.answer.some(a => typeof a !== "number" || a < 0 || a >= (q.opts||[]).length)) errs.push(w + ": multi answer index bad");
      else if (new Set(q.answer).size !== q.answer.length) errs.push(w + ": multi duplicate answer index");
    }
    if (q.type === "tf") {
      if (typeof q.answer !== "boolean") errs.push(w + ": tf answer must be boolean");
      if (q.opts) errs.push(w + ": tf must not have opts");
    }
    if (q.type === "fill") {
      if (!Array.isArray(q.answer) || q.answer.length < 2) errs.push(w + ": fill answer needs >=2 accepted strings");
      else q.answer.forEach(a => { if (typeof a !== "string" || !a.trim()) errs.push(w + ": fill answer empty"); });
      if (q.opts) errs.push(w + ": fill must not have opts");
    }
  });
  const want = Object.keys(TYPES);
  for (const t of want) {
    if ((localTypes[t] || 0) !== TYPES[t]) errs.push(m.id + ": " + t + " count " + (localTypes[t]||0) + " (need " + TYPES[t] + ")");
  }
}
if (Q.id !== sub) errs.push("Q.id mismatch");
const tfTrue = Object.values(Q.chapters).flat().filter(q => q.type === "tf" && q.answer === true).length;
const tfAll = Object.values(Q.chapters).flat().filter(q => q.type === "tf").length;
console.log("=== quiz " + sub + " ===");
console.log("chapters:" + Object.keys(Q.chapters).length + "/" + chs.length + "  questions:" + total + "  size:" + Math.round(fs.statSync(file).size/1024) + "KB");
console.log("types:", JSON.stringify(typeCount), " tf true/false:", tfTrue + "/" + (tfAll - tfTrue));
if (errs.length) { console.log("\nERRORS (" + errs.length + "):"); errs.slice(0,40).forEach(e => console.log("  x " + e)); }
if (warns.length) { console.log("warnings (" + warns.length + ")"); }
if (!errs.length) console.log("\nPASS");
process.exit(errs.length ? 1 : 0);
