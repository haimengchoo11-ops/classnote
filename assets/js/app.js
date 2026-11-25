/* ClassNote — trilingual study site (ZH / EN / MS) */
(function () {
  "use strict";
  var D = window.CN_DATA || {}, RAW = window.CN_RAW || {};
  var SUBJ_ORDER = (window.CN_SUBJECT_ORDER || Object.keys(D));
  var LANGS = ["zh", "en", "ms"];
  var LS = "classnote.v1";

  var store = { lang: "tri", theme: "light", done: {} };
  try { var s = JSON.parse(localStorage.getItem(LS) || "{}"); for (var k in s) store[k] = s[k]; } catch (e) {}
  function save() { try { localStorage.setItem(LS, JSON.stringify(store)); } catch (e) {} }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function L(o) { if (!o) return ""; if (typeof o === "string") return o; return o[store.lang === "tri" ? "en" : store.lang] || o.en || o.zh || o.ms || ""; }
  function el(id) { return document.getElementById(id); }
  function qs(sel) { return document.querySelector(sel); }

  var UI = {
    home: { zh: "首页", en: "Home", ms: "Utama" },
    subjects: { zh: "科目", en: "Subjects", ms: "Subjek" },
    chapters: { zh: "章节", en: "Chapters", ms: "Bab" },
    chapter: { zh: "章", en: "Chapter", ms: "Bab" },
    overview: { zh: "本章概述", en: "Chapter Overview", ms: "Gambaran Bab" },
    keypoints: { zh: "核心要点", en: "Key Points", ms: "Poin Utama" },
    terms: { zh: "术语对照表", en: "Terminology", ms: "Terminologi" },
    diagrams: { zh: "图解", en: "Diagrams", ms: "Rajah" },
    exam: { zh: "考点与易错点", en: "Exam Focus", ms: "Fokus Peperiksaan" },
    mnemonic: { zh: "记忆口诀", en: "Memory Aid", ms: "Mnemonik" },
    source: { zh: "原始资料", en: "Original Material", ms: "Bahan Asal" },
    openfile: { zh: "打开原文件", en: "Open original file", ms: "Buka fail asal" },
    slides: { zh: "页幻灯片", en: "slides/pages", ms: "slaid/halaman" },
    expand: { zh: "展开全部", en: "Expand all", ms: "Kembangkan" },
    collapse: { zh: "收起", en: "Collapse", ms: "Runtuhkan" },
    search: { zh: "搜索", en: "Search", ms: "Cari" },
    searchph: { zh: "搜索章节、术语、知识点…", en: "Search chapters, terms, concepts…", ms: "Cari bab, istilah, konsep…" },
    glossary: { zh: "三语术语总表", en: "Trilingual Glossary", ms: "Glosari Tiga Bahasa" },
    materials: { zh: "资料库", en: "Materials", ms: "Bahan" },
    allsubj: { zh: "全部科目", en: "All subjects", ms: "Semua subjek" },
    noresult: { zh: "没有找到匹配内容", en: "No matching content", ms: "Tiada hasil" },
    results: { zh: "条结果", en: "results", ms: "hasil" },
    prev: { zh: "上一章", en: "Previous", ms: "Sebelum" },
    next: { zh: "下一章", en: "Next", ms: "Seterusnya" },
    backsubj: { zh: "返回科目", en: "Back to subject", ms: "Kembali" },
    done: { zh: "已掌握", en: "Mastered", ms: "Dikuasai" },
    progress: { zh: "进度", en: "Progress", ms: "Kemajuan" },
    notrans: { zh: "对照", en: "Parallel", ms: "Selari" },
    print: { zh: "打印/PDF", en: "Print", ms: "Cetak" },
    quick: { zh: "快速进入", en: "Quick access", ms: "Akses pantas" },
    quiz: { zh: "题库练习", en: "Quiz", ms: "Kuiz" },
    codelab: { zh: "编程实验室", en: "Code Lab", ms: "Makmal Kod" },
    codePractice: { zh: "编程题", en: "Coding tasks", ms: "Tugasan kod" },
    practice: { zh: "本章练习", en: "Practice this chapter", ms: "Latihan bab ini" }
  };
  function t(key) { var o = UI[key]; return o ? (o[store.lang === "tri" ? "en" : store.lang] || o.en) : key; }

  function subjList() { return SUBJ_ORDER.filter(function (id) { return D[id]; }).map(function (id) { return D[id]; }); }
  function findChapter(sub, cid) {
    var S = D[sub]; if (!S) return null;
    for (var i = 0; i < S.chapters.length; i++) if (S.chapters[i].id === cid) return { s: S, c: S.chapters[i], i: i };
    return null;
  }
  function totalChapters() { return subjList().reduce(function (a, x) { return a + x.chapters.length; }, 0); }
  function totalTerms() { return subjList().reduce(function (a, x) { return a + x.chapters.reduce(function (b, c) { return b + ((c.terms || []).length); }, 0); }, 0); }
  function totalDiagrams() { return subjList().reduce(function (a, x) { return a + x.chapters.reduce(function (b, c) { return b + ((c.diagrams || []).length); }, 0); }, 0); }

  function applyLang() {
    document.body.setAttribute("data-lang", store.lang);
    var seg = el("langseg");
    if (seg) [].forEach.call(seg.children, function (b) { b.classList.toggle("on", b.dataset.lang === store.lang); });
    DG.lang = store.lang;
    [].forEach.call(document.querySelectorAll("[data-dia]"), function (node) {
      var d = node.__dia; if (d) node.innerHTML = DG.render(d);
    });
    [].forEach.call(document.querySelectorAll("[data-i18n]"), function (n) { n.textContent = t(n.dataset.i18n); });
  }
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", store.theme);
    var b = el("themebtn"); if (b) b.textContent = store.theme === "dark" ? "☀" : "☾";
  }
  function setLang(l) { store.lang = l; save(); applyLang(); }
  function toggleTheme() { store.theme = store.theme === "dark" ? "light" : "dark"; save(); applyTheme(); }
  function toggleDone(cid) { store.done[cid] = !store.done[cid]; save(); render(); }

  function triBlock(o) {
    var h = "";
    LANGS.forEach(function (lg) {
      var v = o && o[lg]; if (!v) return;
      h += '<div class="L l-' + lg + '" data-l="' + lg.toUpperCase() + '">' +
        '<span class="chip ' + lg + '">' + (lg === "zh" ? "中文" : lg === "en" ? "EN" : "BM") + "</span>" +
        '<div class="t">' + esc(v) + "</div></div>";
    });
    return '<div class="tri cols">' + h + "</div>";
  }

  var INDEX = null;
  function buildIndex() {
    if (INDEX) return INDEX;
    INDEX = [];
    subjList().forEach(function (S) {
      (S.chapters || []).forEach(function (c) {
        var text = [];
        LANGS.forEach(function (lg) {
          if (c.title[lg]) text.push(c.title[lg]);
          if (c.summary && c.summary[lg]) text.push(c.summary[lg]);
          (c.points || []).forEach(function (p) { if (p[lg]) text.push(p[lg]); });
          (c.exam || []).forEach(function (p) { if (p[lg]) text.push(p[lg]); });
          (c.terms || []).forEach(function (tm) { if (tm[lg]) text.push(tm[lg]); if (tm.def && tm.def[lg]) text.push(tm.def[lg]); });
        });
        INDEX.push({ kind: "chapter", sub: S.id, id: c.id, S: S, c: c, text: text.join(" \n ") });
        (c.terms || []).forEach(function (tm) {
          var tt = [tm.en, tm.zh, tm.ms, tm.def && tm.def.zh, tm.def && tm.def.en, tm.def && tm.def.ms].filter(Boolean).join(" \n ");
          INDEX.push({ kind: "term", sub: S.id, id: c.id, S: S, c: c, term: tm, text: tt });
        });
      });
    });
    return INDEX;
  }
  var RX = new RegExp("[.*+?^$|{}\\[\\]()\\\\]", "g");
  function hl(text, q) {
    if (!q) return esc(text);
    try {
      var re = new RegExp("(" + String(q).replace(RX, "\\$&") + ")", "gi");
      return esc(text).replace(re, "<mark>$1</mark>");
    } catch (e) { return esc(text); }
  }
  function doSearch(q) {
    q = (q || "").trim(); if (!q) return [];
    var ql = q.toLowerCase(), out = [];
    buildIndex().forEach(function (r) {
      var p = r.text.toLowerCase().indexOf(ql);
      if (p < 0) return;
      var title = L(r.c.title);
      var snippet = r.kind === "term"
        ? (r.term.en + " · " + r.term.zh + " · " + r.term.ms)
        : r.text.slice(Math.max(0, p - 70), p + 130);
      out.push({ r: r, score: (title.toLowerCase().indexOf(ql) >= 0 ? 0 : 1) + (r.kind === "term" ? 0 : 0.4), title: title, snippet: snippet });
    });
    out.sort(function (a, b) { return a.score - b.score; });
    return out.slice(0, 60);
  }

  function viewHome() {
    var h = '<div class="hero"><h1>ClassNote · 三语学习中心</h1>' +
      '<p>' + esc("六门课程 · 中英马三语对照 · 图解 + 术语 + 原始资料一站式调用。Trilingual study hub for six courses — parallel ZH / EN / MS text, concept diagrams, glossary, and one-click access to every original file.") + "</p>" +
      '<div class="stats">' +
      "<div><b>" + subjList().length + "</b>" + esc(t("subjects")) + "</div>" +
      "<div><b>" + totalChapters() + "</b>" + esc(t("chapters")) + "</div>" +
      "<div><b>" + totalTerms() + "</b>" + esc(t("terms")) + "</div>" +
      "<div><b>" + totalDiagrams() + "</b>" + esc(t("diagrams")) + "</div>" +
      "<div><b>" + (window.CNQ && CNQ.totalQ ? CNQ.totalQ() : 0) + "</b>" + esc(t("quiz")) + "</div>" +
      "</div></div>";
    h += '<div class="grid g3">';
    subjList().forEach(function (S) {
      var done = S.chapters.filter(function (c) { return store.done[c.id]; }).length;
      var pct = Math.round(done / S.chapters.length * 100);
      h += '<div class="subj-card" style="--sc:' + esc(S.color || "#3b5bdb") + '" onclick="location.hash=&#39;#/s/' + S.id + '&#39;">' +
        '<div class="top"><div class="ico">' + (S.icon || "📘") + "</div><div>" +
        "<h3>" + esc(L(S.name)) + '</h3><div class="code">' + esc(S.code || "") + "</div></div></div>" +
        '<div class="desc">' + esc(L(S.desc)) + "</div>" +
        '<div class="foot"><span>' + S.chapters.length + " " + esc(t("chapters")) + "</span>" +
        '<div class="bar"><i style="width:' + pct + '%"></i></div><span>' + pct + "%</span></div></div>";
    });
    h += "</div>";
    h += '<div class="card" style="margin-top:20px"><div class="section"><div class="head"><span class="ico">⚡</span><h2>' + esc(t("quick")) + "</h2></div>" +
      '<div class="toc-mini">' +
      '<a href="#/terms">📖 ' + esc(t("glossary")) + "</a>" +
      '<a href="#/materials">🗂 ' + esc(t("materials")) + '</a>' +
      '<a href="#/quiz">📝 ' + esc(t("quiz")) + '</a>' +
      '<a href="#/code">⌨️ ' + esc(t("codelab")) + "</a>" +
      subjList().map(function (S) { return '<a href="#/s/' + S.id + '">' + (S.icon || "") + " " + esc(L(S.name)) + "</a>"; }).join("") +
      "</div></div></div>";
    return h;
  }

  function viewSubject(sub) {
    var S = D[sub]; if (!S) return '<div class="empty">Not found</div>';
    var done = S.chapters.filter(function (c) { return store.done[c.id]; }).length;
    var h = '<div class="chap-head" style="--sc:' + esc(S.color || "#3b5bdb") + '">' +
      '<div class="kicker">' + esc(S.code || "") + "</div>" +
      "<h1>" + (S.icon || "") + " " + esc(L(S.name)) + "</h1>" +
      '<div class="meta"><span>' + S.chapters.length + " " + esc(t("chapters")) + "</span><span>" +
      esc(t("progress")) + ": " + done + "/" + S.chapters.length + "</span><span>" +
      S.chapters.reduce(function (a, c) { return a + (c.terms || []).length; }, 0) + " " + esc(t("terms")) + "</span></div></div>";
    h += '<div class="card">' + triBlock(S.desc) + "</div>";
    if (S.id === "vb") {
      h += '<div class="card" style="margin-top:14px;border-left:4px solid #7c3aed">' +
        '<div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap">' +
        '<div style="flex:1;min-width:240px">' +
        '<div class="small muted" style="font-weight:700;letter-spacing:.06em">FE SPRINT PACK · 27 PAGES</div>' +
        '<h3 style="margin:2px 0 4px">🎯 FE 特化题型 · VB.NET</h3>' +
        '<div class="small muted">15 MCQ + 4 Structured + 2 Programming；含预测题干、标准答案、完整代码与评分点。</div>' +
        "</div>" +
        '<a class="btn" href="vb/FE_VBNet_Targeted_Question_Pack.pdf" target="_blank">📄 打开 PDF</a>' +
        '<a class="btn" href="vb/FE_VBNet_Targeted_Question_Pack.docx">📝 DOCX</a>' +
        "</div></div>";
    }
    h += '<div class="section"><div class="head"><span class="ico">📚</span><h2>' + esc(t("chapters")) + "</h2></div>";
    S.chapters.forEach(function (c) {
      h += '<div class="chap-row" onclick="location.hash=&#39;#/c/' + S.id + "/" + c.id + '&#39;">' +
        '<div class="num">' + c.num + "</div>" +
        '<div class="mid"><div class="t">' + esc(L(c.title)) + "</div>" +
        '<div class="s">' + esc(L(c.summary).slice(0, 130)) + "…</div></div>" +
        '<div class="tags"><span class="chip plain">' + (c.terms || []).length + " " + esc(t("terms")) + "</span>" +
        '<span class="chip plain">' + (c.diagrams || []).length + " " + esc(t("diagrams")) + "</span>" +
        (store.done[c.id] ? '<span class="chip en">✓</span>' : "") + "</div></div>";
    });
    h += "</div>";
    return h;
  }

  function viewChapter(sub, cid) {
    var f = findChapter(sub, cid); if (!f) return '<div class="empty">Not found</div>';
    var S = f.s, c = f.c, i = f.i;
    window.scrollTo(0, 0);
    var h = '<div class="chap-head" style="--sc:' + esc(S.color || "#3b5bdb") + '">' +
      '<div class="kicker">' + esc((S.icon || "") + " " + L(S.name)) + " · " + esc(t("chapter")) + " " + c.num + "</div>" +
      "<h1>" + esc(L(c.title)) + "</h1>" +
      '<div class="meta"><span>' + esc(c.file || "") + "</span><span>" + (c.pages || "") + " " + esc(t("slides")) + "</span>" +
      "<span>" + (c.terms || []).length + " " + esc(t("terms")) + "</span>" +
      '<span><a href="' + esc(c.file || "#") + '" target="_blank" style="color:#fff;text-decoration:underline">' + esc(t("openfile")) + " ↗</a></span></div></div>";

    h += '<div class="section"><div class="head"><span class="ico">🎯</span><h2>' + esc(t("overview")) + "</h2>" +
      '<div class="hint" style="display:flex;gap:8px;align-items:center">' +
      (window.CNQ && CNQ.countFor && CNQ.countFor(S.id, c.id) ? '<a class="btn" href="#/quiz/' + S.id + "/" + c.id + '">📝 ' + esc(t("practice")) + " (" + CNQ.countFor(S.id, c.id) + ")</a>" : "") +
      ((function () {
        if (!window.CN_CODE || !CN_CODE[S.id]) return "";
        var n = 0;
        CN_CODE[S.id].exercises.forEach(function (e) { if (e.chapter === c.id) n++; });
        return n ? '<a class="btn" href="#/code/' + S.id + "/" + CN_CODE[S.id].exercises.filter(function (e) { return e.chapter === c.id; })[0].id + '">⌨️ ' + esc(t("codePractice")) + " (" + n + ")</a>" : "";
      })()) +
      '<button class="btn" onclick="CN.toggleDone(&#39;' + c.id + '&#39;)">' +
      (store.done[c.id] ? "✓ " + esc(t("done")) : "○ " + esc(t("done"))) + "</button></div></div>" +
      triBlock(c.summary) + "</div>";

    if ((c.points || []).length) {
      h += '<div class="section"><div class="head"><span class="ico">🔑</span><h2>' + esc(t("keypoints")) + '</h2></div><ol class="pt-list">';
      c.points.forEach(function (p) { h += "<li>" + triBlock(p) + "</li>"; });
      h += "</ol></div>";
    }

    if ((c.diagrams || []).length) {
      h += '<div class="section"><div class="head"><span class="ico">📊</span><h2>' + esc(t("diagrams")) + "</h2></div>";
      c.diagrams.forEach(function (d) { h += '<div data-dia="1">' + DG.render(d) + "</div>"; });
      h += "</div>";
    }

    if ((c.terms || []).length) {
      h += '<div class="section"><div class="head"><span class="ico">📖</span><h2>' + esc(t("terms")) + "</h2></div>" +
        '<div style="overflow-x:auto"><table class="terms"><thead><tr>' +
        '<th class="c-en">English</th><th class="c-zh">中文</th><th class="c-ms">Bahasa Melayu</th><th>Definition / 释义 / Definisi</th>' +
        "</tr></thead><tbody>";
      c.terms.forEach(function (tm) {
        h += "<tr>" +
          '<td class="c-en"><span class="k en">' + esc(tm.en) + "</span></td>" +
          '<td class="c-zh"><span class="k zh">' + esc(tm.zh) + "</span></td>" +
          '<td class="c-ms"><span class="k ms">' + esc(tm.ms) + "</span></td>" +
          '<td><div class="defs">' +
          (tm.def && tm.def.en ? '<div class="d" data-l="en"><b>EN</b><span>' + esc(tm.def.en) + "</span></div>" : "") +
          (tm.def && tm.def.zh ? '<div class="d" data-l="zh"><b>中</b><span>' + esc(tm.def.zh) + "</span></div>" : "") +
          (tm.def && tm.def.ms ? '<div class="d" data-l="ms"><b>BM</b><span>' + esc(tm.def.ms) + "</span></div>" : "") +
          "</div></td></tr>";
      });
      h += "</tbody></table></div></div>";
    }

    if ((c.exam || []).length) {
      h += '<div class="section"><div class="head"><span class="ico">⚠️</span><h2>' + esc(t("exam")) + '</h2></div><ul class="exam-list">';
      c.exam.forEach(function (p) { h += "<li>" + triBlock(p) + "</li>"; });
      h += "</ul></div>";
    }

    if (c.mnemonic) {
      h += '<div class="section"><div class="mnemonic"><span class="ico">💡</span><div style="flex:1">' +
        '<div class="small muted" style="font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin-bottom:4px">' + esc(t("mnemonic")) + "</div>" +
        triBlock(c.mnemonic) + "</div></div></div>";
    }

    var raw = (RAW[sub] || {})[cid];
    h += '<div class="section"><div class="head"><span class="ico">🗂</span><h2>' + esc(t("source")) + "</h2>" +
      '<div class="hint"><a class="btn" href="' + esc(c.file || "#") + '" target="_blank">' + esc(t("openfile")) + " ↗</a></div></div>";
    if (raw && raw.length) {
      h += '<div class="raw-box"><div class="raw-bar"><span class="ttl">' + esc(c.file) + "</span>" +
        '<span class="small muted">' + raw.length + " " + esc(t("slides")) + '</span><span class="sp"></span>' +
        '<button class="btn" id="rawtoggle" onclick="CN.toggleRaw()">' + esc(t("expand")) + "</button></div>" +
        '<div class="raw-list compact" id="rawlist">';
      raw.forEach(function (p) {
        h += '<div class="raw-item"><span class="pn">' + p.n + '</span><span class="tx">' + esc(p.t) + "</span></div>";
      });
      h += "</div></div>";
    } else h += '<div class="empty small">' + esc(t("noresult")) + "</div>";
    h += "</div>";

    var prev = S.chapters[i - 1], next = S.chapters[i + 1];
    h += '<div class="pager no-print">' +
      (prev ? '<a href="#/c/' + S.id + "/" + prev.id + '"><span class="k">← ' + esc(t("prev")) + '</span><span class="t">' + esc(L(prev.title)) + "</span></a>" : '<span style="flex:1"></span>') +
      '<a href="#/s/' + S.id + '" style="flex:0 0 auto;justify-content:center"><span class="k">' + esc(t("backsubj")) + '</span><span class="t">' + esc(L(S.name)) + "</span></a>" +
      (next ? '<a class="next" href="#/c/' + S.id + "/" + next.id + '"><span class="k">' + esc(t("next")) + ' →</span><span class="t">' + esc(L(next.title)) + "</span></a>" : '<span style="flex:1"></span>') +
      "</div>";
    return h;
  }

  function defsHtml(tm, query) {
    return '<div class="defs">' +
      (tm.def && tm.def.en ? '<div class="d" data-l="en"><b>EN</b><span>' + hl(tm.def.en, query) + "</span></div>" : "") +
      (tm.def && tm.def.zh ? '<div class="d" data-l="zh"><b>中</b><span>' + hl(tm.def.zh, query) + "</span></div>" : "") +
      (tm.def && tm.def.ms ? '<div class="d" data-l="ms"><b>BM</b><span>' + hl(tm.def.ms, query) + "</span></div>" : "") +
      "</div>";
  }

  function viewTerms(filterSub, query) {
    var rows = [];
    subjList().forEach(function (S) {
      if (filterSub && filterSub !== "all" && S.id !== filterSub) return;
      S.chapters.forEach(function (c) { (c.terms || []).forEach(function (tm) { rows.push({ S: S, c: c, tm: tm }); }); });
    });
    var qq = (query || "").trim().toLowerCase();
    if (qq) rows = rows.filter(function (r) {
      return [r.tm.en, r.tm.zh, r.tm.ms, r.tm.def && r.tm.def.zh, r.tm.def && r.tm.def.en, r.tm.def && r.tm.def.ms]
        .filter(Boolean).join(" ").toLowerCase().indexOf(qq) >= 0;
    });
    var h = '<h1>📖 ' + esc(t("glossary")) + '</h1><p class="muted">' + esc("全部科目的关键术语三语对照，可按科目筛选或直接检索。") + "</p>";
    h += '<div class="search-big"><input id="termq" placeholder="' + esc(t("searchph")) + '" value="' + esc(query || "") + '" oninput="CN.termSearch(this.value)"></div>';
    h += '<div class="filter-bar"><button class="' + (!filterSub || filterSub === "all" ? "on" : "") + '" onclick="CN.termFilter(&#39;all&#39;)">' + esc(t("allsubj")) + "</button>";
    subjList().forEach(function (S) {
      h += '<button class="' + (filterSub === S.id ? "on" : "") + '" onclick="CN.termFilter(&#39;' + S.id + '&#39;)">' + (S.icon || "") + " " + esc(L(S.name)) + "</button>";
    });
    h += "</div>";
    h += '<div class="small muted" style="margin-bottom:10px">' + rows.length + " " + esc(t("terms")) + "</div>";
    h += '<div style="overflow-x:auto"><table class="terms"><thead><tr><th class="c-en">English</th><th class="c-zh">中文</th><th class="c-ms">Bahasa Melayu</th><th>Definition / 释义 / Definisi</th><th>' + esc(t("chapter")) + "</th></tr></thead><tbody>";
    rows.forEach(function (r) {
      h += "<tr>" +
        '<td class="c-en"><span class="k en">' + hl(r.tm.en, query) + "</span></td>" +
        '<td class="c-zh"><span class="k zh">' + hl(r.tm.zh, query) + "</span></td>" +
        '<td class="c-ms"><span class="k ms">' + hl(r.tm.ms, query) + "</span></td>" +
        "<td>" + defsHtml(r.tm, query) + "</td>" +
        '<td class="small"><a href="#/c/' + r.S.id + "/" + r.c.id + '">' + esc(L(r.S.name)) + " · " + r.c.num + "</a></td></tr>";
    });
    h += "</tbody></table></div>";
    if (!rows.length) h += '<div class="empty">' + esc(t("noresult")) + "</div>";
    return h;
  }

  function viewMaterials(filterSub) {
    var h = '<h1>🗂 ' + esc(t("materials")) + '</h1><p class="muted">' + esc("全部原始讲义文件，点击即可打开；对应的站内三语整理见各章页面。") + "</p>";
    h += '<div class="filter-bar"><button class="' + (!filterSub || filterSub === "all" ? "on" : "") + '" onclick="CN.matFilter(&#39;all&#39;)">' + esc(t("allsubj")) + "</button>";
    subjList().forEach(function (S) {
      h += '<button class="' + (filterSub === S.id ? "on" : "") + '" onclick="CN.matFilter(&#39;' + S.id + '&#39;)">' + (S.icon || "") + " " + esc(L(S.name)) + "</button>";
    });
    h += "</div>";
    subjList().forEach(function (S) {
      if (filterSub && filterSub !== "all" && S.id !== filterSub) return;
      h += '<div class="section"><div class="head"><span class="ico">' + (S.icon || "📘") + "</span><h2>" + esc(L(S.name)) +
        ' <span class="small muted">' + esc(S.code || "") + "</span></h2></div>";
      S.chapters.forEach(function (c) {
        var ext = (c.file || "").split(".").pop().toUpperCase();
        h += '<div class="mat-row"><div class="ico">' + (ext === "PDF" ? "📕" : "📊") + "</div>" +
          '<div class="mid"><div class="t">' + esc(L(c.title)) + "</div>" +
          '<div class="s">' + esc(c.file) + " · " + (c.pages || "") + " " + esc(t("slides")) + "</div></div>" +
          '<a class="btn" href="#/c/' + S.id + "/" + c.id + '">📖 ' + esc(t("chapter")) + "</a>" +
          '<a class="btn" href="' + esc(c.file) + '" target="_blank">↗ ' + esc(t("openfile")) + "</a></div>";
      });
      h += "</div>";
    });
    return h;
  }

  function viewSearch(query) {
    var h = '<h1>🔍 ' + esc(t("search")) + "</h1>";
    h += '<div class="search-big"><input id="sq" placeholder="' + esc(t("searchph")) + '" value="' + esc(query || "") + '" oninput="CN.liveSearch(this.value)"></div>';
    if (!query) { h += '<div class="empty">' + esc(t("searchph")) + "</div>"; return h; }
    var res = doSearch(query);
    h += '<div class="small muted" style="margin-bottom:12px">' + res.length + " " + esc(t("results")) + "</div>";
    if (!res.length) { h += '<div class="empty">' + esc(t("noresult")) + "</div>"; return h; }
    res.forEach(function (r) {
      var rr = r.r;
      h += '<div class="res" onclick="location.hash=&#39;#/c/' + rr.S.id + "/" + rr.c.id + '&#39;">' +
        '<div class="h"><span class="chip plain">' + (rr.S.icon || "") + " " + esc(L(rr.S.name)) + "</span>" +
        "<span>" + hl(r.title, query) + "</span>" +
        (rr.kind === "term" ? '<span class="chip plain">' + esc(t("terms")) + "</span>" : "") + "</div>" +
        '<div class="w">' + esc(t("chapter")) + " " + rr.c.num + "</div>" +
        '<div class="sn">' + hl(r.snippet, query) + "</div></div>";
    });
    return h;
  }

  var curTerms = { sub: "all", q: "" }, curMats = { sub: "all" };
  function parseHash() {
    return location.hash.replace(/^#\/?/, "").split("/").filter(function (x) { return x !== ""; });
  }
  function render() {
    var p = parseHash(), html = "", crumb = "", navSub = null;
    if (!p.length) { html = viewHome(); crumb = "<strong>" + esc(t("home")) + "</strong>"; }
    else if (p[0] === "s" && p[1]) {
      html = viewSubject(p[1]); navSub = p[1];
      crumb = '<a href="#/">' + esc(t("home")) + '</a><span class="sep">/</span><strong>' + esc(L(D[p[1]] && D[p[1]].name)) + "</strong>";
    } else if (p[0] === "c" && p[1] && p[2]) {
      html = viewChapter(p[1], p[2]); navSub = p[1];
      var f = findChapter(p[1], p[2]);
      crumb = '<a href="#/">' + esc(t("home")) + '</a><span class="sep">/</span><a href="#/s/' + p[1] + '">' +
        esc(L(D[p[1]] && D[p[1]].name)) + '</a><span class="sep">/</span><strong>' + esc(f ? t("chapter") + " " + f.c.num : "") + "</strong>";
    } else if (p[0] === "terms") { html = viewTerms(curTerms.sub, curTerms.q); crumb = "<strong>" + esc(t("glossary")) + "</strong>"; }
    else if (p[0] === "materials") { html = viewMaterials(curMats.sub); crumb = "<strong>" + esc(t("materials")) + "</strong>"; }
    else if (p[0] === "code") {
      html = window.CNL ? window.CNL.view(p) : '<div class="empty">Code Lab module not loaded.</div>';
      crumb = '<a href="#/">' + esc(t("home")) + '</a><span class="sep">/</span><strong>' + esc(t("codelab")) + "</strong>";
    }
    else if (p[0] === "quiz") {
      html = window.CNQ ? window.CNQ.view(p) : '<div class="empty">Quiz module not loaded.</div>';
      crumb = '<a href="#/">' + esc(t("home")) + '</a><span class="sep">/</span>' +
        (p.length > 1 && D[p[1]] ? '<a href="#/quiz">' + esc(t("quiz")) + '</a><span class="sep">/</span><strong>' + esc(L(D[p[1]].name)) + "</strong>"
          : "<strong>" + esc(t("quiz")) + "</strong>");
    }
    else if (p[0] === "q") { html = viewSearch(decodeURIComponent(p.slice(1).join("/") || "")); crumb = "<strong>" + esc(t("search")) + "</strong>"; }
    else { html = viewHome(); crumb = "<strong>" + esc(t("home")) + "</strong>"; }

    el("view").innerHTML = html;
    el("crumbs").innerHTML = crumb;
    buildNav(navSub);
    applyLang();
  }

  function buildNav(activeSub) {
    var h = "";
    subjList().forEach(function (S) {
      var open = activeSub === S.id || document.body.dataset.openSub === S.id;
      h += '<div class="nav-group' + (open ? " open" : "") + '" data-sub="' + S.id + '">' +
        '<div class="nav-subj' + (activeSub === S.id ? " active" : "") + '" onclick="CN.navClick(&#39;' + S.id + '&#39;,event)">' +
        '<span class="ico">' + (S.icon || "📘") + "</span><span>" + esc(L(S.name)) + '</span>' +
        '<span class="cnt">' + S.chapters.length + '</span><span class="caret">▶</span></div>' +
        '<div class="nav-chaps">';
      S.chapters.forEach(function (c) {
        h += '<div class="nav-chap" onclick="location.hash=&#39;#/c/' + S.id + "/" + c.id + '&#39;">' +
          '<span class="n">' + c.num + "</span><span>" + esc(L(c.title)) + "</span></div>";
      });
      h += "</div></div>";
    });
    el("nav").innerHTML = h;
  }
  function navClick(sub, ev) {
    var g = ev.currentTarget.parentNode;
    var isOpen = g.classList.contains("open");
    [].forEach.call(document.querySelectorAll(".nav-group"), function (x) { x.classList.remove("open"); });
    if (!isOpen) { g.classList.add("open"); document.body.dataset.openSub = sub; }
    else { document.body.dataset.openSub = ""; location.hash = "#/s/" + sub; }
  }

  function start() {
    applyTheme();
    document.body.setAttribute("data-lang", store.lang);
    var seg = el("langseg");
    if (seg) {
      seg.innerHTML = [["tri", t("notrans")], ["zh", "中文"], ["en", "EN"], ["ms", "BM"]]
        .map(function (x) { return '<button data-lang="' + x[0] + '" class="' + (store.lang === x[0] ? "on" : "") + '">' + x[1] + "</button>"; }).join("");
      seg.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return; setLang(b.dataset.lang);
      });
    }
    el("themebtn").addEventListener("click", toggleTheme);
    el("menubtn").addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    document.addEventListener("click", function (e) {
      if (e.target.classList && e.target.classList.contains("nav-chap")) document.body.classList.remove("nav-open");
    });
    /* Android app: tap outside the drawer (and any in-app navigation) closes it */
    document.addEventListener("click", function (e) {
      if (!document.body.classList.contains("nav-open")) return;
      var sb = document.querySelector(".sidebar");
      if (sb && !sb.contains(e.target)) document.body.classList.remove("nav-open");
    }, true);
    var gs = el("globalsearch");
    gs.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && gs.value.trim()) { location.hash = "#/q/" + encodeURIComponent(gs.value.trim()); document.body.classList.remove("nav-open"); }
    });
    window.addEventListener("hashchange", function () {
      document.body.classList.remove("nav-open");
      render();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); gs.focus(); }
    });
    render();
  }

  window.CN = {
    toggleDone: toggleDone, setLang: setLang, toggleTheme: toggleTheme, navClick: navClick, render: render,
    termSearch: function (v) { curTerms.q = v; render(); var i = el("termq"); if (i) { i.focus(); i.setSelectionRange(v.length, v.length); } },
    termFilter: function (v) { curTerms.sub = v; curTerms.q = ""; render(); },
    matFilter: function (v) { curMats.sub = v; render(); },
    liveSearch: function (v) {
      var res = doSearch(v), host = qs(".search-big");
      host = host && host.parentNode; if (!host) return;
      var old = el("liveres"); if (old) old.remove();
      var box = document.createElement("div"); box.id = "liveres";
      box.innerHTML = '<div class="small muted" style="margin-bottom:10px">' + res.length + " " + esc(t("results")) + "</div>" +
        res.slice(0, 40).map(function (r) {
          var rr = r.r;
          return '<div class="res" onclick="location.hash=&#39;#/c/' + rr.S.id + "/" + rr.c.id + '&#39;">' +
            '<div class="h"><span class="chip plain">' + (rr.S.icon || "") + " " + esc(L(rr.S.name)) + "</span><span>" + hl(r.title, v) + "</span></div>" +
            '<div class="sn">' + hl(r.snippet, v) + "</div></div>";
        }).join("");
      host.appendChild(box);
    },
    toggleRaw: function () {
      var l = el("rawlist"), b = el("rawtoggle"); if (!l) return;
      var c = l.classList.toggle("compact");
      b.textContent = c ? t("expand") : t("collapse");
    }
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start); else start();
})();
