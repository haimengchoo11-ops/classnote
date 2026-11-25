/* ClassNote — quiz engine (中 / EN / BM).
   Language switching is pure CSS (body[data-lang]), so switching never loses the session. */
(function () {
  "use strict";
  var DATA = window.CN_DATA || {};
  var QUIZ = window.CN_QUIZ || {};
  var ORDER = window.CN_SUBJECT_ORDER || Object.keys(DATA);
  var LS = "classnote.quiz.v1";

  var store = { best: {}, wrong: {}, answered: 0, correct: 0, lastSub: "all" };
  try { var raw = JSON.parse(localStorage.getItem(LS) || "{}"); for (var k in raw) store[k] = raw[k]; } catch (e) { }
  function save() { try { localStorage.setItem(LS, JSON.stringify(store)); } catch (e) { } }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function lang() { return document.body.getAttribute("data-lang") || "tri"; }
  function subj(id) { return DATA[id]; }
  function subjName(S) { var lg = lang(); if (lg === "tri") return S.name.en; return S.name[lg] || S.name.en; }

  /* trilingual inline text: three spans, CSS picks */
  function TL(o, cls) {
    if (!o) return "";
    if (o.zh === o.en && o.en === o.ms) return '<span class="triplain">' + esc(o.en) + "</span>";
    return '<span class="tridge ' + (cls || "") + '">' +
      '<span class="ql l-zh">' + esc(o.zh) + "</span>" +
      '<span class="ql l-en">' + esc(o.en) + "</span>" +
      '<span class="ql l-ms">' + esc(o.ms) + "</span></span>";
  }

  /* ---------- question access ---------- */
  function chaptersOf(sub) { return (DATA[sub] && DATA[sub].chapters) || []; }
  function chapterTitle(sub, cid) {
    var cs = chaptersOf(sub);
    for (var i = 0; i < cs.length; i++) if (cs[i].id === cid) return cs[i].title;
    return { zh: cid, en: cid, ms: cid };
  }
  function qOf(sub, cid) {
    var bank = QUIZ[sub];
    if (!bank || !bank.chapters) return [];
    return bank.chapters[cid] || [];
  }
  function allQ(sub) {
    var out = [];
    chaptersOf(sub).forEach(function (c) { qOf(sub, c.id).forEach(function (q) { out.push({ q: q, sub: sub, cid: c.id }); }); });
    return out;
  }
  function totalQ() {
    var n = 0; ORDER.forEach(function (s) { if (QUIZ[s]) n += allQ(s).length; }); return n;
  }
  function hasQuiz(sub) { return !!(QUIZ[sub] && QUIZ[sub].chapters); }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---------- answer checking ---------- */
  function norm(s) {
    return String(s == null ? "" : s).toLowerCase().trim()
      .replace(/[\s\u3000]+/g, "")
      .replace(/[.,;:!?。，；：！？、'"()\[\]{}（）【】]/g, "");
  }
  function isCorrect(q, given) {
    if (q.type === "mcq") return given === q.answer;
    if (q.type === "tf") return given === q.answer;
    if (q.type === "multi") {
      if (!Array.isArray(given)) return false;
      var a = given.slice().sort(function (x, y) { return x - y; }).join(",");
      var b = q.answer.slice().sort(function (x, y) { return x - y; }).join(",");
      return a === b;
    }
    if (q.type === "fill") {
      var g = norm(given);
      if (!g) return false;
      for (var i = 0; i < q.answer.length; i++) if (norm(q.answer[i]) === g) return true;
      return false;
    }
    return false;
  }
  function answered(q, given) {
    if (q.type === "multi") return Array.isArray(given) && given.length > 0;
    if (q.type === "fill") return typeof given === "string" && given.trim() !== "";
    return given !== undefined && given !== null;
  }

  /* ---------- session ---------- */
  var S = null;

  function buildSession(opts) {
    var pool = [];
    if (opts.sub === "all") {
      ORDER.forEach(function (s) { if (hasQuiz(s)) pool = pool.concat(allQ(s)); });
    } else if (opts.cid) {
      qOf(opts.sub, opts.cid).forEach(function (q) { pool.push({ q: q, sub: opts.sub, cid: opts.cid }); });
    } else {
      pool = allQ(opts.sub);
    }
    if (opts.onlyWrong) pool = pool.filter(function (x) { return store.wrong[x.q.id]; });
    if (!pool.length) return null;
    var items = shuffle(pool);
    if (opts.limit && items.length > opts.limit) items = items.slice(0, opts.limit);
    S = {
      items: items.map(function (x) { return { q: x.q, sub: x.sub, cid: x.cid, given: undefined, checked: false, ok: null }; }),
      idx: 0, title: opts.title || "", done: false, started: Date.now()
    };
    return S;
  }

  /* ---------- views ---------- */
  function statBar() {
    var pct = store.answered ? Math.round(store.correct / store.answered * 100) : 0;
    return '<div class="qstats">' +
      '<div><b>' + totalQ() + "</b><span>" + T("bank") + "</span></div>" +
      '<div><b>' + store.answered + "</b><span>" + T("attempted") + "</span></div>" +
      '<div><b>' + (store.answered ? pct + "%" : "—") + "</b><span>" + T("accuracy") + "</span></div>" +
      '<div><b>' + Object.keys(store.wrong).length + "</b><span>" + T("wrongbank") + "</span></div>" +
      "</div>";
  }

  var UL = {
    bank: { zh: "题库总数", en: "Questions", ms: "Jumlah soalan" },
    attempted: { zh: "已作答", en: "Answered", ms: "Dijawab" },
    accuracy: { zh: "正确率", en: "Accuracy", ms: "Ketepatan" },
    wrongbank: { zh: "错题数", en: "In wrong box", ms: "Dalam kotak salah" },
    start: { zh: "开始练习", en: "Start practice", ms: "Mula latihan" },
    quiz: { zh: "练习", en: "Practice", ms: "Latihan" },
    quizhub: { zh: "题库练习", en: "Practice Centre", ms: "Pusat Latihan" },
    allsubj: { zh: "全科随机", en: "All subjects", ms: "Semua subjek" },
    chapters: { zh: "章节", en: "Chapters", ms: "Bab" },
    q: { zh: "题", en: "questions", ms: "soalan" },
    check: { zh: "确认答案", en: "Check answer", ms: "Semak jawapan" },
    next: { zh: "下一题", en: "Next", ms: "Seterusnya" },
    finish: { zh: "提交并看结果", en: "Finish & see result", ms: "Tamat & lihat hasil" },
    prev: { zh: "上一题", en: "Previous", ms: "Sebelum" },
    correct: { zh: "回答正确", en: "Correct", ms: "Betul" },
    wrong: { zh: "回答错误", en: "Incorrect", ms: "Salah" },
    explain: { zh: "解析", en: "Explanation", ms: "Penjelasan" },
    youranswer: { zh: "你的答案", en: "Your answer", ms: "Jawapan anda" },
    rightanswer: { zh: "正确答案", en: "Correct answer", ms: "Jawapan betul" },
    score: { zh: "得分", en: "Score", ms: "Skor" },
    again: { zh: "再练一次", en: "Practice again", ms: "Latih semula" },
    retrywrong: { zh: "只练错题", en: "Retry wrong only", ms: "Ulang yang salah" },
    back: { zh: "返回题库", en: "Back to practice centre", ms: "Kembali ke pusat latihan" },
    resume: { zh: "继续作答", en: "Resume", ms: "Sambung" },
    review: { zh: "逐题回顾", en: "Review answers", ms: "Semak semula" },
    true: { zh: "正确", en: "True", ms: "Betul" },
    false: { zh: "错误", en: "False", ms: "Salah" },
    fillhint: { zh: "输入答案后按确认（可用中/英/马任一语言）", en: "Type your answer then check (any of ZH/EN/MS)", ms: "Taip jawapan kemudian semak (mana-mana ZH/EN/MS)" },
    question: { zh: "第", en: "Question", ms: "Soalan" },
    of: { zh: "题，共", en: "of", ms: "daripada" },
    welcome: { zh: "选一个科目开始，或直接全科随机抽题。答错会自动进入错题本，可随时重练。", en: "Pick a subject, or start a random set across all subjects. Wrong answers go to your wrong-answer box automatically.", ms: "Pilih subjek, atau mula set rawak merentas semua subjek. Jawapan salah dimasukkan ke kotak salah secara automatik." },
    empty: { zh: "这个科目还没有题目", en: "No questions for this subject yet", ms: "Tiada soalan untuk subjek ini" },
    nocorrect: { zh: "没有作答", en: "Not answered", ms: "Tidak dijawab" },
    best: { zh: "最好成绩", en: "Best", ms: "Terbaik" },
    mnemonic: { zh: "提示", en: "Hint", ms: "Petunjuk" }
  };
  function T(k) { var o = UL[k]; return o ? (o[lang() === "tri" ? "en" : lang()] || o.en) : k; }

  function viewHub() {
    var h = '<h1>📝 ' + esc(T("quizhub")) + "</h1><p class=\"muted\">" + esc(T("welcome")) + "</p>";
    h += statBar();
    h += '<div class="grid g3" style="margin-top:18px">';
    h += '<div class="subj-card" style="--sc:#3b5bdb" onclick="CNQ.start(\'all\',null,20)">' +
      '<div class="top"><div class="ico">🎲</div><div><h3>' + esc(T("allsubj")) + "</h3>" +
      '<div class="code">' + totalQ() + " " + esc(T("q")) + "</div></div></div>" +
      '<div class="desc">' + esc(T("start")) + " · 20 " + esc(T("q")) + "</div></div>";

    ORDER.forEach(function (id) {
      var S = subj(id); if (!S) return;
      var n = allQ(id).length;
      var worst = "";
      if (!n) worst = '<div class="desc">' + esc(T("empty")) + "</div>";
      h += '<div class="subj-card" style="--sc:' + esc(S.color || "#3b5bdb") + '" onclick="location.hash=\'#/quiz/' + id + '\'">' +
        '<div class="top"><div class="ico">' + (S.icon || "📘") + "</div><div><h3>" + esc(subjName(S)) + "</h3>" +
        '<div class="code">' + esc(S.code || "") + "</div></div></div>" +
        '<div class="desc">' + n + " " + esc(T("q")) + "</div>" +
        '<div class="foot"><span>' + chaptersOf(id).length + " " + esc(T("chapters")) +
        '</span><div class="bar"><i style="width:' + (n ? Math.min(100, n / 8) : 0) + '%"></i></div></div></div>';
    });
    h += "</div>";
    var wrongN = Object.keys(store.wrong).length;
    if (wrongN) {
      h += '<div class="card" style="margin-top:20px"><div class="section"><div class="head"><span class="ico">🔁</span><h2>' +
        esc(T("retrywrong")) + "</h2><div class=\"hint\">" + wrongN + " " + esc(T("q")) + "</div></div>" +
        '<button class="btn primary" onclick="CNQ.start(\'all\',null,20,true)">' + esc(T("retrywrong")) + "</button></div></div>";
    }
    return h;
  }

  function viewSubject(sub) {
    var S = subj(sub); if (!S) return '<div class="empty">not found</div>';
    var h = '<h1>' + (S.icon || "") + " " + esc(subjName(S)) + " · " + esc(T("quiz")) + "</h1>";
    h += '<div class="grid g2" style="margin-bottom:18px">' +
      '<div class="card tight"><b>' + allQ(sub).length + "</b> " + esc(T("q")) + "</div></div>";
    h += '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-bottom:18px">' +
      '<button class="btn primary" onclick="CNQ.start(\'' + sub + "',null,15)\">🎲 " + esc(T("start")) + " · 15 " + esc(T("q")) + "</button>" +
      '<button class="btn" onclick="CNQ.start(\'' + sub + "',null,0)\">📚 " + esc(T("start")) + " · " + allQ(sub).length + " " + esc(T("q")) + "</button>" +
      '<a class="btn" href="#/quiz">← ' + esc(T("back")) + "</a></div>";
    chaptersOf(sub).forEach(function (c) {
      var n = qOf(sub, c.id).length;
      var best = store.best[c.id];
      h += '<div class="chap-row" onclick="location.hash=\'#/quiz/' + sub + "/" + c.id + "'\">" +
        '<div class="num">' + c.num + "</div>" +
        '<div class="mid"><div class="t">' + esc(c.title[lang() === "tri" ? "en" : lang()] || c.title.en) + "</div>" +
        '<div class="s">' + (best ? esc(T("best")) + ": " + best.score + "/" + best.total : "—") + "</div></div>" +
        '<div class="tags"><span class="chip plain">' + n + " " + esc(T("q")) + "</span></div></div>";
    });
    return h;
  }

  function typeLabel(t) {
    return { mcq: "单选", multi: "多选", tf: "判断", fill: "填空" }[t] || t;
  }
  function typeLabelLang(t, lg) {
    var m = {
      mcq: { zh: "单选", en: "Single choice", ms: "Pilihan tunggal" },
      multi: { zh: "多选", en: "Multiple answers", ms: "Pelbagai jawapan" },
      tf: { zh: "判断", en: "True / False", ms: "Betul / Salah" },
      fill: { zh: "填空", en: "Fill in", ms: "Isi tempat kosong" }
    };
    return (m[t] && (m[t][lg === "tri" ? "en" : lg] || m[t].en)) || t;
  }

  function optionsHtml(item) {
    var q = item.q, i = item.checked, given = item.given;
    var h = "";
    if (q.type === "mcq" || q.type === "multi") {
      h += '<div class="qopts">';
      q.opts.forEach(function (o, j) {
        var cls = "qopt";
        var isSel = q.type === "multi" ? (given || []).indexOf(j) >= 0 : given === j;
        var isAns = q.type === "multi" ? q.answer.indexOf(j) >= 0 : q.answer === j;
        if (isSel) cls += " sel";
        if (i) { if (isAns) cls += " ok"; else if (isSel) cls += " no"; }
        h += '<div class="' + cls + '" onclick="CNQ.pick(' + j + ')">' +
          '<span class="mk">' + String.fromCharCode(65 + j) + "</span>" +
          '<span class="tx">' + TL(o) + "</span></div>";
      });
      h += "</div>";
    } else if (q.type === "tf") {
      h += '<div class="qopts qopts-tf">';
      [true, false].forEach(function (v) {
        var cls = "qopt";
        var isSel = given === v;
        var isAns = q.answer === v;
        if (isSel) cls += " sel";
        if (i) { if (isAns) cls += " ok"; else if (isSel) cls += " no"; }
        h += '<div class="' + cls + '" onclick="CNQ.pick(' + v + ')">' +
          '<span class="mk">' + (v ? "✓" : "✗") + "</span>" +
          '<span class="tx">' + esc(v ? T("true") : T("false")) + "</span></div>";
      });
      h += "</div>";
    } else if (q.type === "fill") {
      var disabled = i ? " disabled" : "";
      h += '<div class="qfill"><input id="qfillinput" type="text" autocomplete="off" ' +
        'value="' + esc(given || "") + '"' + disabled + ' oninput="CNQ.setFill(this.value)"' +
        ' onkeydown="if(event.key===\'Enter\')CNQ.check()" ' +
        'placeholder="' + esc(T("fillhint")) + '"></div>';

    }
    return h;
  }

  function runHtml() {
    if (!S) return "";
    if (S.done) return resultHtml();
    var it = S.items[S.idx], q = it.q;
    var n = S.items.length, pct = Math.round((S.idx) / n * 100);
    var h = '<div class="qwrap">';
    h += '<div class="qhead">' +
      '<div class="qbar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="qmeta"><span>' + esc(S.title) + "</span>" +
      "<span>" + esc(T("question")) + " " + (S.idx + 1) + " / " + n + "</span>" +
      '<span class="chip plain">' + esc(typeLabelLang(q.type, lang())) + "</span>" +
      '<button class="btn" onclick="CNQ.quit()">✕</button></div></div>';

    h += '<div class="qbody"><div class="qq">' + TL(q.q) + "</div>";
    h += optionsHtml(it);

    if (it.checked) {
      h += '<div class="qverdict ' + (it.ok ? "ok" : "no") + '">' +
        (it.ok ? "✓ " + esc(T("correct")) : "✗ " + esc(T("wrong"))) + "</div>";
      if (!it.ok) {
        h += '<div class="qansline"><span class="lbl">' + esc(T("rightanswer")) + ":</span> " + answerText(q) + "</div>";
      }
      h += '<div class="qexplain"><div class="lbl">' + esc(T("explain")) + "</div>" + TL(q.explain) + "</div>";
    }
    h += "</div>";

    h += '<div class="qfoot">';
    if (!it.checked) {
      h += '<button class="btn primary" ' + (answered(q, it.given) ? "" : "disabled") + ' onclick="CNQ.check()">' + esc(T("check")) + "</button>";
    } else if (S.idx < n - 1) {
      h += '<button class="btn primary" onclick="CNQ.next()">' + esc(T("next")) + " →</button>";
    } else {
      h += '<button class="btn primary" onclick="CNQ.finish()">' + esc(T("finish")) + "</button>";
    }
    h += "</div></div>";
    return h;
  }

  function answerText(q) {
    if (q.type === "mcq") return '<b>' + String.fromCharCode(65 + q.answer) + "</b>. " + TL(q.opts[q.answer]);
    if (q.type === "multi") return q.answer.map(function (i) { return String.fromCharCode(65 + i) + ". " + TL(q.opts[i]); }).join("<br>");
    if (q.type === "tf") return esc(q.answer ? T("true") : T("false"));
    return esc(q.answer.join("  /  "));
  }

  function resultHtml() {
    var n = S.items.length, ok = S.items.filter(function (x) { return x.ok; }).length;
    var pct = Math.round(ok / n * 100);
    var h = '<div class="qresult">';
    h += '<div class="qscore"><div class="big">' + ok + " / " + n + "</div>" +
      '<div class="pct">' + pct + "%</div></div>";
    h += '<div class="qscorebar"><i style="width:' + pct + '%"></i></div>';
    h += '<h2 style="margin-top:20px">' + esc(T("review")) + "</h2>";
    S.items.forEach(function (it, i) {
      var q = it.q;
      h += '<div class="qrev ' + (it.ok ? "ok" : "no") + '">' +
        '<div class="qh"><span class="rn">' + (i + 1) + "</span>" +
        '<span class="chip plain">' + esc(typeLabelLang(q.type, lang())) + "</span>" +
        (it.ok ? '<span class="chip en">✓</span>' : '<span class="chip zh">✗</span>') + "</div>" +
        '<div class="qq">' + TL(q.q) + "</div>" +
        '<div class="qansline"><span class="lbl">' + esc(T("youranswer")) + ":</span> " + (it.given === undefined || it.given === "" ? esc(T("nocorrect")) : givenText(q, it.given)) + "</div>" +
        '<div class="qansline"><span class="lbl">' + esc(T("rightanswer")) + ":</span> " + answerText(q) + "</div>" +
        '<div class="qexplain"><div class="lbl">' + esc(T("explain")) + "</div>" + TL(q.explain) + "</div></div>";
    });
    h += '<div class="qfoot" style="justify-content:center">' +
      '<button class="btn primary" onclick="CNQ.restart()">' + esc(T("again")) + "</button>" +
      (S.items.some(function (x) { return !x.ok; }) ? '<button class="btn" onclick="CNQ.retryWrong()">🔁 ' + esc(T("retrywrong")) + "</button>" : "") +
      '<a class="btn" href="#/quiz">' + esc(T("back")) + "</a></div>";
    h += "</div>";
    return h;
  }
  function givenText(q, given) {
    if (q.type === "mcq") return String.fromCharCode(65 + given) + ". " + TL(q.opts[given]);
    if (q.type === "multi") return (given || []).map(function (i) { return String.fromCharCode(65 + i) + ". " + TL(q.opts[i]); }).join("<br>") || esc(T("nocorrect"));
    if (q.type === "tf") return esc(given ? T("true") : T("false"));
    return esc(String(given));
  }

  /* ---------- painting ---------- */
  function root() { return document.getElementById("view"); }
  function paintRun() {
    var r = root(); if (!r) return;
    r.innerHTML = runHtml();
    var inp = document.getElementById("qfillinput");
    if (inp && !inp.disabled) inp.focus();
  }

  /* ---------- public ---------- */
  var lastOpts = null;

  var CNQ = {
    view: function (p) {
      /* p = ["quiz"], ["quiz", sub], ["quiz", sub, cid] */
      if (p.length >= 3) {
        var sub = p[1], cid = p[2];
        if (!hasQuiz(sub)) return viewSubject(sub);
        if (!S || S.done || S.items.length === 0 || S.items[0].cid !== cid || S.items[0].sub !== sub) {
          CNQ.start(sub, cid, 0);
          return runHtml();
        }
        return runHtml();
      }
      if (p.length === 2) {
        var s2 = p[1];
        if (!hasQuiz(s2)) return viewSubject(s2);
        if (S && !S.done) return runHtml();
        return viewSubject(s2);
      }
      return viewHub();
    },
    hub: viewHub,
    subject: viewSubject,

    start: function (sub, cid, limit, onlyWrong) {
      var ttl = "";
      if (sub === "all") ttl = T("allsubj");
      else if (cid) ttl = (subj(sub) ? subjName(subj(sub)) : sub) + " · " + T("chapters") + " " + (function () {
        var cs = chaptersOf(sub);
        for (var i = 0; i < cs.length; i++) if (cs[i].id === cid) return cs[i].num;
        return "";
      })();
      else ttl = subj(sub) ? subjName(subj(sub)) : sub;
      lastOpts = { sub: sub, cid: cid, limit: limit || 0, onlyWrong: !!onlyWrong, title: ttl };
      S = buildSession(lastOpts);
      if (!S) { alert(T("empty")); return; }
      paintRun();
      window.scrollTo(0, 0);
    },

    setFill: function (v) {
      if (!S || S.done) return;
      var it = S.items[S.idx];
      if (it.checked) return;
      it.given = v;
      var btn = document.querySelector(".qfoot .btn.primary");
      if (btn) btn.disabled = !answered(it.q, v);
    },

    pick: function (v) {
      if (!S || S.done) return;
      var it = S.items[S.idx];
      if (it.checked) return;
      if (it.q.type === "multi") {
        var arr = it.given || [];
        var at = arr.indexOf(v);
        if (at >= 0) arr.splice(at, 1); else arr.push(v);
        it.given = arr;
        paintRun();
      } else {
        it.given = v;
        paintRun();
      }
    },

    check: function () {
      if (!S || S.done) return;
      var it = S.items[S.idx];
      if (it.q.type === "fill" && !it.checked) {
        var inp = document.getElementById("qfillinput");
        if (inp) it.given = inp.value;
      }
      if (!answered(it.q, it.given)) return;
      it.checked = true;
      it.ok = isCorrect(it.q, it.given);
      store.answered++;
      if (it.ok) store.correct++;
      if (it.ok) { delete store.wrong[it.q.id]; }
      else { store.wrong[it.q.id] = 1; }
      save();
      paintRun();
    },

    next: function () {
      if (!S) return;
      if (S.idx < S.items.length - 1) { S.idx++; paintRun(); window.scrollTo(0, 0); }
    },
    prev: function () {
      if (!S) return;
      if (S.idx > 0) { S.idx--; paintRun(); window.scrollTo(0, 0); }
    },
    finish: function () {
      if (!S) return;
      S.done = true;
      var ok = S.items.filter(function (x) { return x.ok; }).length;
      var key = S.items.length && S.items[0].sub !== "all" && S.items.every(function (x) { return x.cid === S.items[0].cid; })
        ? S.items[0].cid : null;
      if (key) {
        var prev = store.best[key];
        if (!prev || ok / S.items.length > prev.score / prev.total) {
          store.best[key] = { score: ok, total: S.items.length, at: Date.now() };
        }
      }
      save();
      paintRun();
      window.scrollTo(0, 0);
    },
    quit: function () {
      S = null;
      location.hash = "#/quiz";
    },
    restart: function () {
      if (!lastOpts) { location.hash = "#/quiz"; return; }
      CNQ.start(lastOpts.sub, lastOpts.cid, lastOpts.limit, lastOpts.onlyWrong);
      window.scrollTo(0, 0);
    },
    retryWrong: function () {
      if (!S) return;
      var wrongItems = S.items.filter(function (x) { return !x.ok; });
      if (!wrongItems.length) return;
      S = {
        items: shuffle(wrongItems.map(function (x) {
          return { q: x.q, sub: x.sub, cid: x.cid, given: undefined, checked: false, ok: null };
        })),
        idx: 0, title: T("retrywrong"), done: false, started: Date.now()
      };
      paintRun();
      window.scrollTo(0, 0);
    },
    resetStats: function () {
      if (!confirm("Reset all practice statistics?")) return;
      store = { best: {}, wrong: {}, answered: 0, correct: 0, lastSub: "all" };
      save(); location.reload();
    },
    /* used by chapter pages */
    practiceChapter: function (sub, cid) { location.hash = "#/quiz/" + sub + "/" + cid; },
    countFor: function (sub, cid) { return qOf(sub, cid).length; },
    totalQ: totalQ,
    totalFor: function (sub) { return allQ(sub).length; }
  };
  window.CNQ = CNQ;
})();
