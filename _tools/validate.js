
/* Validate a subject data file against the schema. Usage: node validate.js <subject> */
const fs = require("fs"), path = require("path");
const WS = "C:/Users/ROG STRIX/Desktop/classnote";
const sub = process.argv[2];
const manifest = JSON.parse(fs.readFileSync(path.join(WS, "data/manifest.json"), "utf8"));
const file = path.join(WS, "data", sub + ".js");
if (!fs.existsSync(file)) { console.log("MISSING " + file); process.exit(2); }
global.window = {};
require(file);
const D = global.window.CN_DATA && global.window.CN_DATA[sub];
if (!D) { console.log("!! window.CN_DATA['" + sub + "'] not set"); process.exit(2); }
const errs = [], warns = [];
const need = (o, k, where) => { if (o[k] === undefined || o[k] === null || o[k] === "") errs.push(where + ": missing " + k); };
const tri = (o, where, minLen) => {
  if (!o || typeof o !== "object") { errs.push(where + ": not a trilingual object"); return; }
  ["zh","en","ms"].forEach(l => {
    if (!o[l] || !String(o[l]).trim()) errs.push(where + ": missing " + l);
    else if (minLen && String(o[l]).trim().length < minLen) warns.push(where + "." + l + ": short (" + String(o[l]).length + ")");
  });
};
need(D,"id","root"); need(D,"name","root"); need(D,"desc","root"); need(D,"chapters","root");
tri(D.name,"name"); tri(D.desc,"desc");
if (D.id !== sub) errs.push("root.id " + D.id + " !== " + sub);
const mf = manifest[sub] || [];
if (D.chapters.length !== mf.length) errs.push("chapter count " + D.chapters.length + " !== manifest " + mf.length);
const byId = {}; mf.forEach(m => byId[m.id] = m);
const diagTypes = {};
D.chapters.forEach(c => {
  const w = "ch " + c.id;
  need(c,"id",w); need(c,"num",w); need(c,"title",w); need(c,"file",w);
  tri(c.title, w+".title");
  const m = byId[c.id];
  if (!m) { errs.push(w + ": id not in manifest"); return; }
  if (c.file !== m.file) errs.push(w + ".file '" + c.file + "' !== manifest '" + m.file + "'");
  if (Number(c.pages) !== Number(m.count)) errs.push(w + ".pages " + c.pages + " !== manifest " + m.count);
  tri(c.summary, w+".summary", 40);
  if (!Array.isArray(c.points) || c.points.length < 6) errs.push(w + ": points < 6 (" + ((c.points||[]).length) + ")");
  else c.points.forEach((p,i) => { tri(p, w+".points["+i+"]", 12); if(!p.ms) errs.push(w+".points["+i+"] missing ms"); });
  if (!Array.isArray(c.terms) || c.terms.length < 8) errs.push(w + ": terms < 8 (" + ((c.terms||[]).length) + ")");
  else c.terms.forEach((t,i) => { need(t,"en",w+".terms["+i+"]"); need(t,"zh",w+".terms["+i+"]"); need(t,"ms",w+".terms["+i+"]"); tri(t.def, w+".terms["+i+"].def", 8); });
  if (!Array.isArray(c.diagrams) || c.diagrams.length < 1) errs.push(w + ": diagrams < 1");
  else c.diagrams.forEach((d,i) => {
    const WT = ["layers","flow","cycle","tree","compare","matrix","timeline"];
    if (WT.indexOf(d.type) < 0) errs.push(w+".diagrams["+i+"]: bad type '" + d.type + "'");
    else diagTypes[d.type] = (diagTypes[d.type]||0)+1;
    tri(d.title, w+".diagrams["+i+"].title");
    if (d.type==="layers" && !(d.layers||[]).length) errs.push(w+".diagrams["+i+"]: empty layers");
    if (d.type==="flow" && (d.steps||[]).length < 2) errs.push(w+".diagrams["+i+"]: flow needs >=2 steps");
    if (d.type==="cycle" && (d.steps||[]).length < 3) errs.push(w+".diagrams["+i+"]: cycle needs >=3 steps");
    if (d.type==="tree" && !(d.branches||[]).length) errs.push(w+".diagrams["+i+"]: tree needs branches");
    if (d.type==="compare" && (d.cols||[]).length < 2) errs.push(w+".diagrams["+i+"]: compare needs >=2 cols");
    if (d.type==="matrix") { if(!(d.cols||[]).length) errs.push(w+".diagrams["+i+"]: matrix needs cols"); (d.rows||[]).forEach((r,j)=>{ if((r.cells||[]).length !== (d.cols||[]).length) errs.push(w+".diagrams["+i+"].rows["+j+"]: cells != cols"); }); }
    if (d.type==="timeline" && !(d.bars||[]).length) errs.push(w+".diagrams["+i+"]: timeline needs bars");
  });
  if (!Array.isArray(c.exam) || c.exam.length < 2) errs.push(w + ": exam < 2");
  else c.exam.forEach((p,i) => tri(p, w+".exam["+i+"]", 10));
});
const terms = D.chapters.reduce((a,c)=>a+(c.terms||[]).length,0);
const dias  = D.chapters.reduce((a,c)=>a+(c.diagrams||[]).length,0);
console.log("=== " + sub + " ===");
console.log("chapters:" + D.chapters.length + "  terms:" + terms + "  diagrams:" + dias + "  size:" + Math.round(fs.statSync(file).size/1024) + "KB");
console.log("diagram types:", JSON.stringify(diagTypes));
if (errs.length) { console.log("\nERRORS (" + errs.length + "):"); errs.slice(0,40).forEach(e=>console.log("  ✗ " + e)); }
if (warns.length) { console.log("\nwarnings (" + warns.length + "):"); warns.slice(0,12).forEach(e=>console.log("  ! " + e)); }
if (!errs.length) console.log("\n✓ PASS");
process.exit(errs.length ? 1 : 0);
