# 题库数据规范 (Quiz Bank Schema)

你要为**一个科目**生成 \`data/quiz/<subject>.js\`。文件是一个纯 JS 赋值语句：

\`\`\`js
window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["<subject>"] = { id: "<subject>", chapters: { "<章节id>": [ /* 题目数组 */ ] } };
\`\`\`

不要用 import/export/require。必须能被浏览器 \`<script src>\` 直接加载。

---

## 题目对象

\`\`\`js
{
  id: "cs-01-q01",                 // 必填，全局唯一：章节id + "-q" + 两位序号
  type: "mcq",                     // mcq | multi | tf | fill
  q: { zh: "…", en: "…", ms: "…" },        // 题干，三语
  opts: [ { zh:"…", en:"…", ms:"…" }, … ],  // 选项，mcq 需 4 个，multi 需 4-5 个；tf/fill 不要这个字段
  answer: 1,                       // 见下方
  explain: { zh: "…", en: "…", ms: "…" },   // 解析，三语，2-3 句，讲清为什么
  diff: 2,                         // 难度 1=易 2=中 3=难
  topic: { zh: "…", en: "…", ms: "…" }       // 可选：考点标签，三语短语
}
\`\`\`

### 四种题型的 answer 写法

| type | 说明 | answer 格式 |
|---|---|---|
| \`mcq\` | 单选，4 个选项 | 正确选项的**下标数字**（0 开始），如 \`2\` |
| \`multi\` | 多选，4-5 个选项 | 正确选项**下标数组**，升序，如 \`[0, 2]\`，至少 2 个正确 |
| \`tf\` | 判断对错（无 opts） | \`true\` 或 \`false\` |
| \`fill\` | 填空，用户输入（无 opts） | **可接受答案字符串数组**，如 \`["死锁","deadlock","Buntu Lesu"]\` |

**fill 题要求**：每题给 2-5 个可接受答案，覆盖中文 / 英文 / 马来文常见写法；
答案要短（1-3 个词），不要出一句话的长答案；不要出有多种合理写法的开放题。

---

## 每章题量与配比（严格执行）

每章 **8 题**，配比固定：

- \`mcq\` **5 题**
- \`multi\` **1 题**
- \`tf\` **1 题**
- \`fill\` **1 题**

\`id\` 在该章内按 q01…q08 顺序编号。

---

## 出题质量要求（最重要）

1. **必须基于该章讲义原文**。读 \`_extract/txt/<subject>/<章节id>.txt\`（\`----- [n] -----\` 分隔每页幻灯片）。
2. **题干要有信息量**，不要「以下哪个是操作系统」这种空题。优先考：
   - 概念之间的区别（如 FCFS 与 SJF 的差别）
   - 具体数值/公式的计算（如平均等待时间、子网可用主机数）
   - 容易混淆的细节（如 \`ElseIf\` 是一个词、\`End If\` 是两个词）
   - 定义中的关键限定条件
3. **错误选项必须是"合理但错误"的**，不要出现明显荒谬的凑数选项。四个选项长度、风格尽量接近。
4. **单选答案不能被两个选项同时满足**。多选必须有且只有标注的那些正确。
5. **判断题**：一半左右出 \`true\`，一半出 \`false\`；错误的陈述要错在关键处（改一个词，而不是整句胡说）。
6. **解析**要讲清楚「为什么对」以及「干扰项为什么错」，不能只重复题干。
7. 同一章 8 题**考点不要重复**，覆盖该章不同小节。
8. 三语必须严格对应：中文、英文、马来文说的是同一道题、同一组选项、同一个答案。
9. **术语三语翻译**要与站点已有术语表一致（可用 \`data/<subject>.js\` 里的 terms 作参考）。

---

## 语言要求

- **zh**：简体中文，大陆通用译法。
- **en**：学术英文，沿用讲义原术语。
- **ms**：标准马来文（马来西亚用法，**不是印尼语**）。
  参考：Security=Keselamatan, Network=Rangkaian, Database=Pangkalan Data, Process=Proses,
  Memory=Ingatan, Scheduling=Penjadualan, Deadlock=Buntu Lesu, Thread=Benang,
  Encryption=Penyulitan, Protocol=Protokol, Layer=Lapisan, Object=Objek, Class=Kelas,
  Inheritance=Pewarisan, Requirement=Keperluan, Design=Reka Bentuk, Testing=Pengujian,
  Variable=Pemboleh ubah, Constant=Pemalar, Array=Tatasusunan, Loop=Gelung,
  Statement=Pernyataan, Property=Sifat, Method=Kaedah, Event=Peristiwa.

---

## 硬性约束

1. \`chapters\` 的键必须与 \`data/manifest.json\` 中该科目的章节 id **完全一致**，且**每章都要有**（包括 sadm 的 sadm-10/11/12 这种跳号）。
2. 每题必须有三语 \`q\`、三语 \`explain\`。
3. \`mcq\`/\`multi\` 的每个选项都必须三语齐全。
4. 文件末尾不要有多余内容。
5. 写完后必须通过：
   - \`node --check data/quiz/<subject>.js\`
   - \`node _tools/validate-quiz.js <subject>\` —— 必须显示 \`✓ PASS\`

---

## 输出位置

写到 \`C:\Users\ROG STRIX\Desktop\classnote\data\quiz\<subject>.js\`（\`data/quiz\` 目录需要先建）
