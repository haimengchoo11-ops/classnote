const fs = require("fs");
const WS = "C:/Users/ROG STRIX/Desktop/classnote";

// ---- minimal DOM stub ----
const listeners = {};
function mkEl(id) {
  return { id: id, value: "", textContent: "", innerHTML: "", disabled: false, dataset: {},
    classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
    style: {}, children: [], scrollTop: 0,
    addEventListener(){}, appendChild(){}, remove(){},
    setAttribute(k,v){ this[k]=v; }, getAttribute(k){ return this[k] || null; },
    querySelector(){ return mkEl("q"); } };
}
const els = {};
global.document = {
  body: { getAttribute: () => "tri", setAttribute(){}, classList: { add(){}, remove(){}, toggle(){} }, dataset: {} },
  documentElement: { setAttribute(){} },
  getElementById(id) { return els[id] || (els[id] = mkEl(id)); },
  querySelector() { return mkEl("q"); },
  querySelectorAll() { return []; },
  addEventListener(){},
  createElement() { return mkEl("new"); },
  readyState: "complete"
};
global.window = global;
global.localStorage = { getItem: () => null, setItem(){}, removeItem(){} };
global.location = { protocol: "http:", hash: "#/code", href: "http://127.0.0.1:8777/" };
global.fetch = function () { return Promise.resolve({ json: () => Promise.resolve({ java: true, vb: true }) }); };
global.alert = () => {}; global.confirm = () => true;
global.navigator = { userAgent: "node" };

// ---- load data + module ----
require(WS + "/data/oop.js");
require(WS + "/data/code/oop.js");
require(WS + "/data/code/vb.js");
require(WS + "/assets/js/code.js");
console.log("CN_CODE subjects:", Object.keys(global.CN_CODE).join(", "));
console.log("exercises:", Object.keys(global.CN_CODE).reduce((a,k)=>a+global.CN_CODE[k].exercises.length,0));

// ---- exercise every view path ----
const CNL = global.CNL;
function check(label, fn) {
  try { const out = fn(); const len = String(out).length;
    if (len < 20) throw new Error("suspiciously short output");
    console.log("  OK   " + label + "  (" + len + " chars)"); return out; }
  catch (e) { console.log("  FAIL " + label + " -> " + e.message); }
}
console.log("\nview rendering:");
check("hub (offline probe)", () => CNL.view(["code"]));
check("exercise page (offline)", () => CNL.view(["code","oop","oop-04-e1"]));

// simulate health resolved then re-render
setTimeout(function () {
  console.log("\nwith server probe resolved:");
  global.fetch = function (u) {
    return Promise.resolve({ json: () => Promise.resolve({ java: true, vb: true, notes: [] }) });
  };
  CNL.recheck();
  setTimeout(function () {
  check("hub (online)", () => CNL.view(["code"]));
  for (const sub of Object.keys(global.CN_CODE)) {
    for (const ex of global.CN_CODE[sub].exercises) {
      const html = CNL.view(["code", sub, ex.id]);
      const missing = [];
      if (html.indexOf(ex.id) < 0 && html.indexOf("editor-wrap") < 0) missing.push("editor");
      if (html.indexOf("lab-task") < 0) missing.push("task-panel");
      if (html.indexOf("btnRun") < 0 && html.indexOf("Run") < 0) missing.push("run-button");
      if (html.indexOf(ex.tests.length + "") < 0) missing.push("test-count");
      console.log("  " + (missing.length ? "WARN " : "OK   ") + sub + "/" + ex.id + (missing.length ? "  missing: " + missing.join(",") : ""));
    }
  }
  console.log("\nunknown exercise:", String(CNL.view(["code","oop","nope"])).slice(0, 60));
  }, 120);
}, 100);