/* Diagram engine — renders trilingual concept diagrams as responsive SVG.
   Labels re-render on language switch, so nothing is baked at build time. */
(function () {
  "use strict";
  var LANGS = ["zh", "en", "ms"];
  var ACC = ["a1", "a2", "a3", "a4", "a5", "a6"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function isWide(ch) { var c = ch.codePointAt(0); return c > 0x1100 && (c <= 0x115f || (c >= 0x2e80 && c <= 0xa4cf) || (c >= 0xac00 && c <= 0xd7a3) || (c >= 0xf900 && c <= 0xfaff) || (c >= 0xfe30 && c <= 0xfe6f) || (c >= 0xff00 && c <= 0xff60) || (c >= 0xffe0 && c <= 0xffe6)); }
  function tw(s, fs) { var w = 0; for (var i = 0; i < s.length; i++) w += isWide(s[i]) ? fs : fs * 0.535; return w; }
  function wrap(text, maxW, fs) {
    text = String(text == null ? "" : text);
    var out = [], cur = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === "\n") { out.push(cur); cur = ""; continue; }
      if (tw(cur + ch, fs) > maxW && cur) {
        // prefer breaking at last space for latin runs
        var sp = cur.lastIndexOf(" ");
        if (sp > 0 && !isWide(ch) && cur.length - sp < 22) { out.push(cur.slice(0, sp)); cur = cur.slice(sp + 1) + ch; }
        else { out.push(cur); cur = ch; }
      } else cur += ch;
    }
    if (cur) out.push(cur);
    return out.length ? out : [""];
  }

  /* ---- language-aware label layout ---------------------------------- */
  /* returns { lines:[{t,fs,cls}], h } for a label + optional note */
  function labelLines(L, note, opt) {
    opt = opt || {};
    var lang = opt.lang || "tri";
    var base = opt.fs || 12.5, noteFs = opt.noteFs || 10.5;
    var maxW = opt.maxW || 160;
    var lines = [];
    var main = lang === "tri" ? "en" : lang;
    var seq = lang === "tri" ? ["en", "zh", "ms"] : [lang];
    for (var i = 0; i < seq.length; i++) {
      var k = seq[i];
      var v = L && L[k]; if (!v) continue;
      var fs = (i === 0 ? base + (lang === "tri" ? 1 : 0) : base - 1.6);
      var ls = wrap(v, maxW, fs);
      for (var j = 0; j < ls.length; j++) lines.push({ t: ls[j], fs: fs, cls: j === 0 && i === 0 ? "dg-t" : (i === 0 ? "dg-t" : "dg-s") });
    }
    if (note && note[lang === "tri" ? "en" : lang]) {
      var nl = wrap(note[lang === "tri" ? "en" : lang], maxW, noteFs);
      // notes stay single-language to keep boxes legible; show zh too in tri mode
      for (var m = 0; m < nl.length; m++) lines.push({ t: nl[m], fs: noteFs, cls: "dg-s" });
      if (lang === "tri") {
        var extra = note.zh && note.zh !== note.en ? wrap(note.zh, maxW, noteFs - 0.5) : null;
        if (extra) for (var n = 0; n < extra.length; n++) lines.push({ t: extra[n], fs: noteFs - 0.5, cls: "dg-s" });
      }
    }
    var lh = 15.2, h = 0;
    for (var q = 0; q < lines.length; q++) h += lines[q].fs + (q ? 3.2 : 0);
    return { lines: lines, h: Math.max(h, 15) , lh: lh};
  }
  function drawLines(cx, cy, lab) {
    var out = [], y = cy - lab.h / 2;
    for (var i = 0; i < lab.lines.length; i++) {
      var l = lab.lines[i];
      y += l.fs;
      out.push('<text class="' + l.cls + '" x="' + cx.toFixed(1) + '" y="' + y.toFixed(1) +
        '" font-size="' + l.fs.toFixed(1) + '" text-anchor="middle">' + esc(l.t) + "</text>");
      y += 3.2;
    }
    return out.join("");
  }
  function arrowDefs() {
    return '<defs><marker id="dgAh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" class="dg-head"/></marker></defs>';
  }

  /* ---- renderers ---------------------------------------------------- */
  var R = {};

  R.layers = function (d, lang, W) {
    var pad = 6, gap = 8, bw = W - pad * 2;
    var labs = [], total = pad;
    (d.layers || []).forEach(function (l, i) {
      var lab = labelLines(l.label, l.note, { lang: lang, maxW: bw - 84, fs: 13, noteFs: 10.6 });
      labs.push(lab); total += lab.h + 20 + (i ? gap : 0);
    });
    var H = total + pad;
    var out = [arrowDefs()], y = pad;
    (d.layers || []).forEach(function (l, i) {
      var lab = labs[i], bh = lab.h + 20, c = l.color || ACC[i % 6];
      out.push('<rect class="dg-box ' + c + '" x="' + pad + '" y="' + y.toFixed(1) + '" width="' + bw + '" height="' + bh.toFixed(1) + '" rx="9"/>');
      out.push('<rect x="' + pad + '" y="' + y.toFixed(1) + '" width="4" height="' + bh.toFixed(1) + '" rx="2" fill="currentColor" opacity=".25"/>');
      out.push(drawLines(pad + bw / 2, y + bh / 2, lab));
      y += bh + gap;
    });
    return { svg: out.join(""), h: H };
  };

  R.flow = function (d, lang, W) {
    var steps = d.steps || [], dir = d.dir || "h", pad = 6;
    if (dir === "v") {
      var bw = W - pad * 2, gapv = 26;
      var labs = steps.map(function (s) { return labelLines(s.label, s.note, { lang: lang, maxW: bw - 32, fs: 13 }); });
      var H = pad * 2 + labs.reduce(function (a, l) { return a + l.h + 18; }, 0) + gapv * (steps.length - 1);
      var out = [arrowDefs()], y = pad;
      labs.forEach(function (lab, i) {
        var bh = lab.h + 18;
        out.push('<rect class="dg-box ' + ACC[i % 6] + '" x="' + pad + '" y="' + y.toFixed(1) + '" width="' + bw + '" height="' + bh.toFixed(1) + '" rx="9"/>');
        out.push(drawLines(pad + bw / 2, y + bh / 2, lab));
        y += bh;
        if (i < steps.length - 1) {
          out.push('<path class="dg-ar" marker-end="url(#dgAh)" d="M' + (pad + bw / 2) + ',' + (y + 4) + ' L' + (pad + bw / 2) + ',' + (y + gapv - 6) + '"/>');
          y += gapv;
        }
      });
      return { svg: out.join(""), h: H };
    }
    var n = Math.max(steps.length, 1), gap = 30, bw2 = Math.floor((W - pad * 2 - gap * (n - 1)) / n);
    var labs2 = steps.map(function (s) { return labelLines(s.label, s.note, { lang: lang, maxW: bw2 - 18, fs: 12.5 }); });
    var maxh = Math.max.apply(null, labs2.map(function (l) { return l.h; }));
    var H2 = maxh + 30 + pad * 2;
    var o2 = [arrowDefs()], x = pad;
    labs2.forEach(function (lab, i) {
      var bh = maxh + 22;
      o2.push('<rect class="dg-box ' + ACC[i % 6] + '" x="' + x + '" y="' + (pad + 4) + '" width="' + bw2 + '" height="' + bh.toFixed(1) + '" rx="9"/>');
      o2.push(drawLines(x + bw2 / 2, pad + 4 + bh / 2, lab));
      x += bw2;
      if (i < n - 1) {
        o2.push('<path class="dg-ar" marker-end="url(#dgAh)" d="M' + (x + 5) + ',' + (pad + 4 + bh / 2) + ' L' + (x + gap - 6) + ',' + (pad + 4 + bh / 2) + '"/>');
        x += gap;
      }
    });
    return { svg: o2.join(""), h: H2 };
  };

  R.cycle = function (d, lang, W) {
    var steps = d.steps || [], n = steps.length || 1;
    var R0 = Math.min(W * 0.33, 205), pad = 8;
    var nodeW = Math.min(190, Math.max(120, W / 3.4));
    var labs = steps.map(function (s) { return labelLines(s.label, s.note, { lang: lang, maxW: nodeW - 20, fs: 12.5 }); });
    var maxh = Math.max.apply(null, labs.map(function (l) { return l.h; }));
    var bh = maxh + 20, cx = W / 2, cy = R0 + bh / 2 + pad + 8;
    var H = cy * 2;
    var out = [arrowDefs()];
    var pts = [];
    for (var i = 0; i < n; i++) {
      var a = -Math.PI / 2 + i * 2 * Math.PI / n;
      pts.push({ x: cx + R0 * Math.cos(a), y: cy + R0 * Math.sin(a), a: a });
    }
    // ring arrows, trimmed to node edges
    for (var k = 0; k < n; k++) {
      var p1 = pts[k], p2 = pts[(k + 1) % n];
      var dx = p2.x - p1.x, dy = p2.y - p1.y, L = Math.sqrt(dx * dx + dy * dy) || 1;
      var ux = dx / L, uy = dy / L;
      var trimA = Math.min(L * 0.36, 62), trimB = Math.min(L * 0.36, 62);
      var ax = p1.x + ux * trimA, ay = p1.y + uy * trimA;
      var bx = p2.x - ux * trimB, by = p2.y - uy * trimB;
      var mx = (ax + bx) / 2 + (-uy) * 20, my = (ay + by) / 2 + (ux) * 20;
      out.push('<path class="dg-ar" marker-end="url(#dgAh)" d="M' + ax.toFixed(1) + ',' + ay.toFixed(1) + ' Q' + mx.toFixed(1) + ',' + my.toFixed(1) + ' ' + bx.toFixed(1) + ',' + by.toFixed(1) + '"/>');
    }
    pts.forEach(function (p, i) {
      out.push('<rect class="dg-box ' + ACC[i % 6] + '" x="' + (p.x - nodeW / 2).toFixed(1) + '" y="' + (p.y - bh / 2).toFixed(1) + '" width="' + nodeW + '" height="' + bh.toFixed(1) + '" rx="10"/>');
      out.push(drawLines(p.x, p.y, labs[i]));
    });
    return { svg: out.join(""), h: H };
  };

  R.tree = function (d, lang, W) {
    var br = d.branches || [], nb = Math.max(br.length, 1), pad = 8;
    var colW = (W - pad * 2) / nb;
    var rootLab = labelLines(d.root && d.root.label, null, { lang: lang, maxW: Math.min(W - 40, 320), fs: 13.5 });
    var rootH = rootLab.h + 20, rootW = Math.min(W - 30, Math.max(200, tw((d.root && d.root.label && (d.root.label[lang === "tri" ? "en" : lang] || d.root.label.en)) || "", 13.5) + 46));
    var maxLeafH = 0, branchLabs = [], leafLabs = [];
    br.forEach(function (b, i) {
      var bl = labelLines(b.label, b.note, { lang: lang, maxW: colW - 24, fs: 12.5 });
      branchLabs.push(bl);
      var lf = (b.leaves || []).map(function (lf0) { return labelLines(lf0.label, lf0.note, { lang: lang, maxW: colW / Math.max((b.leaves || []).length, 1) - 18, fs: 11.5 }); });
      leafLabs.push(lf);
      lf.forEach(function (l) { maxLeafH = Math.max(maxLeafH, l.h + 16); });
    });
    var maxBrH = Math.max.apply(null, branchLabs.map(function (l) { return l.h + 18; }));
    var y0 = pad, y1 = y0 + rootH + 34, y2 = y1 + maxBrH + 34, y3 = y2 + maxLeafH;
    var cx = W / 2;
    var out = [arrowDefs()];
    out.push('<rect class="dg-box a5" x="' + (cx - rootW / 2).toFixed(1) + '" y="' + y0 + '" width="' + rootW.toFixed(1) + '" height="' + rootH.toFixed(1) + '" rx="10"/>');
    out.push(drawLines(cx, y0 + rootH / 2, rootLab));
    br.forEach(function (b, i) {
      var bx = pad + colW * i + colW / 2;
      out.push('<path class="dg-ln" d="M' + cx + ',' + (y0 + rootH) + ' L' + cx + ',' + (y0 + rootH + 17) + ' L' + bx.toFixed(1) + ',' + (y0 + rootH + 17) + ' L' + bx.toFixed(1) + ',' + y1 + '"/>');
      out.push('<rect class="dg-box ' + ACC[i % 6] + '" x="' + (bx - (colW - 16) / 2).toFixed(1) + '" y="' + y1 + '" width="' + (colW - 16).toFixed(1) + '" height="' + (branchLabs[i].h + 18).toFixed(1) + '" rx="9"/>');
      out.push(drawLines(bx, y1 + (branchLabs[i].h + 18) / 2, branchLabs[i]));
      var lv = b.leaves || [];
      lv.forEach(function (lf, j) {
        var lw = (colW - 22) / lv.length, lx = pad + colW * i + 11 + lw * j + lw / 2;
        out.push('<path class="dg-ln" d="M' + bx.toFixed(1) + ',' + (y1 + branchLabs[i].h + 18) + ' L' + bx.toFixed(1) + ',' + (y1 + branchLabs[i].h + 26) + ' L' + lx.toFixed(1) + ',' + (y1 + branchLabs[i].h + 26) + ' L' + lx.toFixed(1) + ',' + y2 + '"/>');
        out.push('<rect class="dg-box" x="' + (lx - (lw - 8) / 2).toFixed(1) + '" y="' + y2 + '" width="' + (lw - 8).toFixed(1) + '" height="' + (leafLabs[i][j].h + 16).toFixed(1) + '" rx="8"/>');
        out.push(drawLines(lx, y2 + (leafLabs[i][j].h + 16) / 2, leafLabs[i][j]));
      });
    });
    return { svg: out.join(""), h: y3 + pad + 6 };
  };

  R.compare = function (d, lang, W) {
    var cols = d.cols || [], nc = Math.max(cols.length, 1), pad = 8, gap = 14;
    var colW = (W - pad * 2 - gap * (nc - 1)) / nc;
    var out = [arrowDefs()], y = pad, maxH = 0;
    var heads = cols.map(function (c) { return labelLines(c.head, null, { lang: lang, maxW: colW - 22, fs: 13 }); });
    var headH = Math.max.apply(null, heads.map(function (h) { return h.h + 18; }));
    cols.forEach(function (c, i) {
      var x = pad + i * (colW + gap);
      out.push('<rect class="dg-box ' + ACC[i % 6] + '" x="' + x.toFixed(1) + '" y="' + y + '" width="' + colW.toFixed(1) + '" height="' + headH.toFixed(1) + '" rx="9"/>');
      out.push(drawLines(x + colW / 2, y + headH / 2, heads[i]));
    });
    y += headH + 10;
    var colY = [];
    cols.forEach(function (c, i) {
      var x = pad + i * (colW + gap), cy = y;
      if (c.layers) {
        c.layers.forEach(function (l, j) {
          var lab = labelLines(l.label, l.note, { lang: lang, maxW: colW - 22, fs: 11.5, noteFs: 10 });
          var bh = lab.h + 14;
          out.push('<rect class="dg-box ' + ACC[(i + j) % 6] + '" x="' + x.toFixed(1) + '" y="' + cy.toFixed(1) + '" width="' + colW.toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="8"/>');
          out.push(drawLines(x + colW / 2, cy + bh / 2, lab));
          cy += bh + 6;
        });
      } else {
        (c.items || []).forEach(function (it, j) {
          var lab = labelLines(it.label || it, it.note, { lang: lang, maxW: colW - 34, fs: 11.8, noteFs: 10.2 });
          var bh = lab.h + 16;
          out.push('<circle cx="' + (x + 13) + '" cy="' + (cy + bh / 2) + '" r="2.6" fill="currentColor" opacity=".45"/>');
          out.push('<rect x="' + (x + 23) + '" y="' + cy.toFixed(1) + '" width="' + (colW - 23).toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="7" fill="none" stroke="var(--line)" stroke-width="1"/>');
          out.push(drawLines(x + 23 + (colW - 23) / 2, cy + bh / 2, lab));
          cy += bh + 6;
        });
      }
      colY.push(cy);
      maxH = Math.max(maxH, cy);
    });
    return { svg: out.join(""), h: maxH + pad };
  };

  R.matrix = function (d, lang, W) {
    var cols = d.cols || [], rows = d.rows || [], nc = cols.length, pad = 8;
    var headW = Math.min(190, W * 0.26), cellW = (W - pad * 2 - headW) / Math.max(nc, 1);
    var headLabs = cols.map(function (c) { return labelLines(c, null, { lang: lang, maxW: cellW - 16, fs: 11.8 }); });
    var rowLabs = rows.map(function (r) { return labelLines(r.head, null, { lang: lang, maxW: headW - 16, fs: 11.8 }); });
    var headH = Math.max(34, Math.max.apply(null, headLabs.map(function (h) { return h.h + 14; })));
    var out = [arrowDefs()], y = pad;
    out.push('<rect class="dg-box a5" x="' + pad + '" y="' + y + '" width="' + headW.toFixed(1) + '" height="' + headH.toFixed(1) + '" rx="8"/>');
    headLabs.forEach(function (h, i) {
      var x = pad + headW + i * cellW;
      out.push('<rect class="dg-box a5" x="' + x.toFixed(1) + '" y="' + y + '" width="' + cellW.toFixed(1) + '" height="' + headH.toFixed(1) + '" rx="8"/>');
      out.push(drawLines(x + cellW / 2, y + headH / 2, h));
    });
    y += headH + 5;
    var H = y;
    rows.forEach(function (r, ri) {
      var rh = Math.max(34, rowLabs[ri].h + 14);
      out.push('<rect class="dg-box" x="' + pad + '" y="' + y.toFixed(1) + '" width="' + headW.toFixed(1) + '" height="' + rh.toFixed(1) + '" rx="8"/>');
      out.push(drawLines(pad + headW / 2, y + rh / 2, rowLabs[ri]));
      (r.cells || []).forEach(function (c, ci) {
        var x = pad + headW + ci * cellW;
        var lab = labelLines(c, null, { lang: lang, maxW: cellW - 16, fs: 11.2 });
        out.push('<rect class="dg-box" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + cellW.toFixed(1) + '" height="' + rh.toFixed(1) + '" rx="8"/>');
        out.push(drawLines(x + cellW / 2, y + rh / 2, lab));
      });
      y += rh + 5; H = y;
    });
    if (d.legend && d.legend.length) {
      var lg = d.legend.map(function (t) { return labelLines(t, null, { lang: lang, maxW: W - 30, fs: 11 }); });
      H = y + 4;
      lg.forEach(function (l) { H += l.h + 3; });
      var ly = y + 4;
      out.push('<line class="dg-ln" x1="' + pad + '" y1="' + ly + '" x2="' + (W - pad) + '" y2="' + ly + '"/>');
      ly += 6;
      lg.forEach(function (l) { out.push(drawLines(W / 2, ly + l.h / 2, l)); ly += l.h + 3; });
    }
    return { svg: out.join(""), h: H + pad };
  };

  R.timeline = function (d, lang, W) {
    var bars = d.bars || [], pad = 8;
    var labW = Math.min(200, W * 0.28), axisW = W - pad * 2 - labW;
    var max = d.max || Math.max.apply(null, bars.map(function (b) { return (b.start || 0) + (b.len || 1); })) || 1;
    var unit = max <= 30 ? 1 : Math.ceil(max / 24);
    var barH = 30, gap = 9, y = pad + 26;
    var out = [arrowDefs()];
    // axis
    out.push('<line class="dg-ln" x1="' + (pad + labW) + '" y1="' + (pad + 20) + '" x2="' + (W - pad) + '" y2="' + (pad + 20) + '"/>');
    for (var t = 0; t <= max; t += unit) {
      var x = pad + labW + axisW * (t / max);
      out.push('<line class="dg-ln" x1="' + x.toFixed(1) + '" y1="' + (pad + 15) + '" x2="' + x.toFixed(1) + '" y2="' + (pad + 20) + '"/>');
      out.push('<text class="dg-s" x="' + x.toFixed(1) + '" y="' + (pad + 11) + '" text-anchor="middle" font-size="10">' + t + "</text>");
    }
    bars.forEach(function (b, i) {
      var lab = labelLines(b.label, null, { lang: lang, maxW: labW - 16, fs: 11.5 });
      var bh = Math.max(barH, lab.h + 12);
      var bx = pad + labW + axisW * ((b.start || 0) / max);
      var bwid = Math.max(3, axisW * ((b.len || 1) / max));
      out.push('<rect class="dg-box" x="' + pad + '" y="' + y.toFixed(1) + '" width="' + (labW - 8).toFixed(1) + '" height="' + bh.toFixed(1) + '" rx="8"/>');
      out.push(drawLines(pad + (labW - 8) / 2, y + bh / 2, lab));
      out.push('<rect class="dg-box ' + (b.color || ACC[i % 6]) + '" x="' + bx.toFixed(1) + '" y="' + (y + 6).toFixed(1) + '" width="' + bwid.toFixed(1) + '" height="' + (bh - 12).toFixed(1) + '" rx="6"/>');
      if (bwid > 44) out.push('<text class="dg-t" x="' + (bx + bwid / 2).toFixed(1) + '" y="' + (y + bh / 2 + 4).toFixed(1) + '" text-anchor="middle" font-size="10.5">' + esc((b.start || 0) + "–" + ((b.start || 0) + (b.len || 1))) + "</text>");
      y += bh + gap;
    });
    return { svg: out.join(""), h: y + pad };
  };

  /* ---- public API --------------------------------------------------- */
  var DG = {
    lang: "tri",
    render: function (d) {
      if (!d || !R[d.type]) return "";
      var W = 760;
      var lang = this.lang;
      var body = R[d.type](d, lang, W);
      var title = d.title ? (d.title[lang === "tri" ? "en" : lang] || d.title.en || d.title.zh || "") : "";
      var sub = d.title && lang === "tri" ? [d.title.zh, d.title.ms].filter(Boolean).join("  ·  ") : "";
      var cap = d.caption ? (d.caption[lang === "tri" ? "en" : lang] || "") : "";
      var capExtra = d.caption && lang === "tri" ? [d.caption.zh, d.caption.ms].filter(Boolean).join("  ·  ") : "";
      var head = "";
      if (title) head += '<div class="dia-title">' + esc(title) + (sub ? ' <span class="muted small">' + esc(sub) + "</span>" : "") + "</div>";
      var h = body.h;
      return '<div class="dia-wrap">' + head +
        '<svg viewBox="0 0 ' + W + " " + Math.ceil(h) + '" preserveAspectRatio="xMidYMin meet" role="img" aria-label="' + esc(title) + '">' +
        "<style>.dg-wrap{color:var(--accent)}</style>" +
        '<g class="dg-wrap">' + body.svg + "</g></svg>" +
        (cap ? '<div class="dia-cap">' + esc(cap) + (capExtra ? " — " + esc(capExtra) : "") + "</div>" : "") +
        "</div>";
    }
  };
  window.DG = DG;
})();
