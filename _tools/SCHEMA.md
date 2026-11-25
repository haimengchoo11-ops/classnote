# 三语学习网站 · 内容数据规范 (CN/EN/MS Trilingual Content Schema)

你要为**一个科目**生成 \`data/<subject>.js\`。文件是一个纯 JS 赋值语句，**必须**长这样：

\`\`\`js
window.CN_DATA = window.CN_DATA || {};
window.CN_DATA["<subject>"] = { /* 见下方结构 */ };
\`\`\`

不要用 \`import\`/\`export\`/\`require\`。不要写 TypeScript。文件必须能被浏览器 \`<script src>\` 直接加载（file:// 协议）。

---

## 1. 科目对象结构

\`\`\`js
{
  id: "cs",                                  // 必填，与文件名一致
  code: "DDWC 3343",                         // 课程代码（可留空字符串）
  name: { zh: "计算机安全", en: "Computer Security", ms: "Keselamatan Komputer" },
  desc: { zh: "…", en: "…", ms: "…" },        // 2-3 句课程简介
  icon: "🔐",                                 // 单个 emoji
  color: "#e0533d",                          // 主题色 hex
  chapters: [ /* 章节对象数组，顺序与 manifest 一致 */ ]
}
\`\`\`

## 2. 章节对象结构

\`\`\`js
{
  id: "cs-01",                       // 必填，必须与 manifest.json 中的 id 完全一致
  num: 1,                            // 章节号（整数）
  title: { zh: "…", en: "…", ms: "…" },
  file: "cs/CHAPTER 1 - INTRODUCTION.pdf",   // 必须与 manifest.json 的 file 完全一致
  pages: 51,                         // 必须与 manifest.json 的 count 一致

  // ① 概述：每语 3-5 句，讲清本章讲什么、为什么重要
  summary: { zh: "…", en: "…", ms: "…" },

  // ② 核心要点：6-10 条。每条是一句完整的话（不要只有名词），三语一一对应
  points: [
    { zh: "…", en: "…", ms: "…" },
    ...
  ],

  // ③ 术语表：8-15 个关键术语。en 是原术语，zh 中文译名，ms 马来文译名
  //    def = 一句话解释（三语）
  terms: [
    { en: "Confidentiality", zh: "机密性", ms: "Kerahsiaan",
      def: { zh: "…", en: "…", ms: "…" } },
    ...
  ],

  // ④ 图解：1-2 个。见第 3 节 DSL
  diagrams: [ { /* diagram */ } ],

  // ⑤ 考点/易错点：2-4 条，三语。告诉学生考试会怎么考、哪里最容易错
  exam: [ { zh: "…", en: "…", ms: "…" }, ... ],

  // ⑥ 记忆口诀（可选，没有就省略）：一句话，三语
  mnemonic: { zh: "…", en: "…", ms: "…" }
}
\`\`\`

## 3. 图解 DSL（极其重要，必须严格遵守）

图解**不是** SVG，是 JSON 描述，由网站前端的渲染器画成 SVG。语言切换时会自动重画，所以**每个 label 都必须三语齐全**。

所有 label 字段统一为 \`{ zh, en, ms }\` 对象。

可用类型共 7 种：

### 3.1 \`layers\` — 层叠结构（协议栈、存储层次、安全层次）
\`\`\`js
{ type: "layers",
  title: { zh:"OSI 七层模型", en:"OSI Seven-Layer Model", ms:"Model Tujuh Lapisan OSI" },
  layers: [ { label:{zh:"应用层",en:"Application",ms:"Aplikasi"}, note:{zh:"面向用户服务",en:"User services",ms:"Perkhidmatan pengguna"} }, ... ]
}
\`\`\`
- 2-8 层，**从上到下**排列（第一项画在最上面）。

### 3.2 \`flow\` — 流程 / 步骤链（算法步骤、处理流程）
\`\`\`js
{ type: "flow", dir: "h",   // "h" 横向 | "v" 纵向，默认 "h"
  title: {...},
  steps: [ { label:{...}, note:{...} }, ... ]   // 2-6 步
}
\`\`\`

### 3.3 \`cycle\` — 循环过程（生命周期、状态机、SDLC）
\`\`\`js
{ type: "cycle", title: {...},
  steps: [ { label:{...} }, ... ]   // 3-8 个节点，自动环形排布
}
\`\`\`

### 3.4 \`tree\` — 层次 / 分类 / 继承
\`\`\`js
{ type: "tree", title: {...},
  root: { label:{...} },
  branches: [ { label:{...}, leaves: [ {label:{...}}, ... ] }, ... ]   // 1-4 个分支，每支 0-4 个叶子
}
\`\`\`

### 3.5 \`compare\` — 对比（两种方案/两个模型/优缺点）
\`\`\`js
{ type: "compare", title: {...},
  cols: [ { head:{...}, items: [ {label:{...}}, ... ] }, ... ]   // 2-3 列
}
\`\`\`
- 也支持 \`col.layers\`（层叠列表）替代 \`col.items\`，用于 OSI vs TCP/IP 这种层数不同的对比：
  \`{ head:{...}, layers:[ {label:{...}, note:{...}}, ... ] }\`

### 3.6 \`matrix\` — 表格 / 矩阵（访问控制矩阵、真值表、对比表）
\`\`\`js
{ type: "matrix", title: {...},
  cols: [ {zh:"…",en:"…",ms:"…"}, ... ],       // 列头 2-5 个
  rows: [ { head:{...}, cells: [ {zh:"…",en:"…",ms:"…"}, ... ] }, ... ],  // 每行 cells 数量 = cols 数量
  legend: [ {zh:"…",en:"…",ms:"…"} ]            // 可选
}
\`\`\`

### 3.7 \`timeline\` — 甘特图 / 时序（CPU 调度、进度计划）
\`\`\`js
{ type: "timeline", title: {...},
  unit: { zh:"时间单位", en:"Time unit", ms:"Unit masa" },
  max: 20,                                       // 横轴最大值
  bars: [ { label:{...}, start: 0, len: 5, color: "a1" }, ... ]   // color 可选: a1 a2 a3 a4 a5 a6
}
\`\`\`

**每个 diagram 对象都可选加 \`caption: {zh,en,ms}\`** 作为图注。

## 4. 语言质量要求

- **zh（中文）**：简体中文，术语用大陆通用译法（如 Cache→高速缓存、Deadlock→死锁、Polymorphism→多态）。表达自然，像老师讲课，不要机翻腔。
- **en（英文）**：直接沿用原始讲义里的英文术语和表述，保持学术准确。
- **ms（马来文）**：标准马来文（Bahasa Melayu baku），技术术语用马来西亚高教通用译法（如 Security→Keselamatan、Network→Rangkaian、Database→Pangkalan Data、Process→Proses、Memory→Ingatan、Scheduling→Penjadualan、Deadlock→Buntu Lesu / Kebuntuan）。**不要**用印尼语拼写。
- 三语必须**语义一一对应**，不能中文说了一件事、英文说了另一件事。
- 每条 points / exam 都要言之有物，基于讲义原文，不要空话。

## 5. 硬性约束

1. \`id\`/\`file\`/\`pages\` 必须与 \`data/manifest.json\` 完全一致（区分大小写）。
2. 每个章节必须有 \`summary\`、\`points\`（≥6）、\`terms\`（≥8）、\`diagrams\`（≥1）、\`exam\`（≥2）。
3. 文件末尾不要有多余内容，整个文件就是一个赋值语句。
4. 字符串里的双引号请转义，或改用单引号。不要出现未转义的换行符（用 \n 或直接用空格连接）。
5. 写完后自检：\`node --check data/<subject>.js\` 必须通过。

## 6. 输出位置

写到 \`C:\Users\ROG STRIX\Desktop\classnote\data\<subject>.js\`
