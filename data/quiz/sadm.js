window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["sadm"] = {
  id: "sadm",
  chapters: {
    "sadm-01": [
      {
        id: "sadm-01-q01", type: "mcq", diff: 1,
        topic: { zh: "信息系统组成", en: "Components of an information system", ms: "Komponen sistem maklumat" },
        q: {
          zh: "按本章的划分，信息系统的五个关键组成部分是什么？",
          en: "According to the chapter, what are the five key components of an information system?",
          ms: "Menurut bab ini, apakah lima komponen utama sesebuah sistem maklumat?"
        },
        opts: [
          { zh: "硬件、软件、网络、数据和用户", en: "Hardware, software, networks, data and users", ms: "Perkakasan, perisian, rangkaian, data dan pengguna" },
          { zh: "输入、输出、处理、反馈和控制", en: "Inputs, outputs, processing, feedback and control", ms: "Input, output, pemprosesan, maklum balas dan kawalan" },
          { zh: "硬件、软件、数据、过程和人", en: "Hardware, software, data, processes and people", ms: "Perkakasan, perisian, data, proses dan manusia" },
          { zh: "数据、信息、知识、智慧和决策", en: "Data, information, knowledge, wisdom and decisions", ms: "Data, maklumat, pengetahuan, kebijaksanaan dan keputusan" }
        ],
        answer: 2,
        explain: {
          zh: "讲义第 9 页明确列出五个组成部分：硬件、软件、数据、过程和人。把过程换成网络、或把人换成用户，都改变了这份清单；输入／输出／反馈属于一般系统理论，数据—信息—知识—智慧是另一套层次模型，都不是本章的五要素。",
          en: "The chapter lists exactly five components: hardware, software, data, processes and people. Replacing processes with networks, or people with users, changes that list; input-output-feedback belongs to general systems theory, and data-information-knowledge-wisdom is a different hierarchy that the chapter does not use here.",
          ms: "Bab ini menyenaraikan tepat lima komponen: perkakasan, perisian, data, proses dan manusia. Menggantikan proses dengan rangkaian atau manusia dengan pengguna mengubah senarai itu; input-output-maklum balas ialah teori sistem am, manakala data-maklumat-pengetahuan-kebijaksanaan ialah hierarki lain yang tidak digunakan dalam bab ini."
        }
      },
      {
        id: "sadm-01-q02", type: "mcq", diff: 2,
        topic: { zh: "数据与信息", en: "Data versus information", ms: "Data berbanding maklumat" },
        q: {
          zh: "本章如何区分数据与信息？",
          en: "How does the chapter distinguish data from information?",
          ms: "Bagaimanakah bab ini membezakan data daripada maklumat?"
        },
        opts: [
          { zh: "信息是转换后对用户有价值的输出，数据是系统的基本事实原料", en: "Information is data transformed into output that is valuable to users, while data consists of basic facts that are the system's raw material", ms: "Maklumat ialah data yang telah diubah menjadi output bernilai kepada pengguna, manakala data ialah fakta asas yang menjadi bahan mentah sistem" },
          { zh: "数据是转换后对用户有价值的输出，信息是系统尚未加工的原料", en: "Data is transformed output of value to users, while information is the raw material the system has not processed yet", ms: "Data ialah output bernilai yang telah diubah, manakala maklumat ialah bahan mentah yang belum diproses oleh sistem" },
          { zh: "数据是系统的物理层，信息是系统的软件层", en: "Data is the physical layer of the system, while information is its software layer", ms: "Data ialah lapisan fizikal sistem, manakala maklumat ialah lapisan perisiannya" },
          { zh: "数据存放在链接表中，信息存放在单个表中", en: "Data is kept in linked tables, while information is kept in a single table", ms: "Data disimpan dalam jadual berpaut, manakala maklumat disimpan dalam satu jadual" }
        ],
        answer: 0,
        explain: {
          zh: "第 9 页把数据定义为构成系统原材料的基本事实，把信息定义为经过转换、对用户有价值的输出。把两个定义对调的选项、把硬件层与软件层混为一谈的选项，以及把讲义中“表存储数据、链接表共同提供数据”改造成信息与数据对立的选项，都不是本章的区分。",
          en: "Page 9 defines data as the basic facts that are the system's raw material, and information as data transformed into output that is valuable to users. An option that swaps the two definitions, one that confuses the hardware layer with the software layer, and one that turns the chapter's note that tables store data into a false contrast all miss the chapter's distinction.",
          ms: "Halaman 9 mentakrifkan data sebagai fakta asas yang menjadi bahan mentah sistem, dan maklumat sebagai data yang telah diubah menjadi output bernilai kepada pengguna. Pilihan yang menyongsangkan kedua-dua takrif, pilihan yang mengelirukan lapisan perkakasan dengan lapisan perisian, dan pilihan yang memutarbelitkan kenyataan bahawa jadual menyimpan data semuanya tersasar daripada perbezaan yang dinyatakan bab ini."
        }
      },
      {
        id: "sadm-01-q03", type: "mcq", diff: 2,
        topic: { zh: "事务处理系统", en: "Transaction processing systems", ms: "Sistem pemprosesan transaksi" },
        q: {
          zh: "哪一类业务信息系统涉及大量数据、属于关键任务系统，并把一组与交易相关的命令作为一个整体来处理，而不是逐条处理？",
          en: "Which type of business information system involves large amounts of data, is mission-critical, and processes a set of transaction-related commands as a group rather than individually?",
          ms: "Jenis sistem maklumat perniagaan yang manakah melibatkan jumlah data yang besar, bersifat misi kritikal, dan memproses satu set arahan berkaitan transaksi secara berkumpulan dan bukan satu demi satu?"
        },
        opts: [
          { zh: "管理信息系统", en: "Management information system", ms: "Sistem maklumat pengurusan" },
          { zh: "知识管理系统", en: "Knowledge management system", ms: "Sistem pengurusan pengetahuan" },
          { zh: "用户生产力系统", en: "User productivity system", ms: "Sistem produktiviti pengguna" },
          { zh: "事务处理系统", en: "Transaction processing system", ms: "Sistem pemprosesan transaksi" }
        ],
        answer: 3,
        explain: {
          zh: "第 19 页把“涉及大量数据、属于关键任务、把交易相关命令成组处理”这组特征明确归给事务处理系统。管理信息系统属于业务支持系统，提供报表与 what-if 分析；知识管理系统结合知识库与推理规则来模拟人的推理；用户生产力系统靠群件等工具提高效率。",
          en: "Page 19 attaches exactly these traits, large amounts of data, mission-critical status, and grouping transaction-related commands, to the transaction processing system. A management information system sits under business support and provides reports and what-if analysis; knowledge management combines a knowledge base with inference rules; user productivity systems rely on tools such as groupware.",
          ms: "Halaman 19 memberikan ciri-ciri itu, iaitu data yang banyak, status misi kritikal dan pemprosesan arahan berkaitan transaksi secara berkumpulan, kepada sistem pemprosesan transaksi. Sistem maklumat pengurusan tergolong dalam sistem sokongan perniagaan yang menyediakan laporan dan analisis bagaimana jika; sistem pengurusan pengetahuan menggabungkan pangkalan pengetahuan dengan peraturan inferens; sistem produktiviti pengguna bergantung pada alat seperti groupware."
        }
      },
      {
        id: "sadm-01-q04", type: "mcq", diff: 1,
        topic: { zh: "SDLC 交付成果", en: "SDLC deliverables", ms: "Hasil serahan SDLC" },
        q: {
          zh: "在 SDLC 的五个阶段中，哪一个阶段的交付成果是系统需求文档？",
          en: "In the five SDLC phases, which phase has the system requirements document as its deliverable?",
          ms: "Dalam lima fasa SDLC, fasa manakah yang hasil serahannya ialah dokumen keperluan sistem?"
        },
        opts: [
          { zh: "系统规划", en: "Systems planning", ms: "Perancangan sistem" },
          { zh: "系统分析", en: "Systems analysis", ms: "Analisis sistem" },
          { zh: "系统设计", en: "Systems design", ms: "Reka bentuk sistem" },
          { zh: "系统实施", en: "Systems implementation", ms: "Pelaksanaan sistem" }
        ],
        answer: 1,
        explain: {
          zh: "第 29 至 32 页依次给出各阶段产出：规划阶段完成初步调查与可行性研究，分析阶段的交付成果是系统需求文档，设计阶段的交付成果是系统设计规格说明书，实施阶段则构造新系统。因此问“系统需求文档”只能对应系统分析。",
          en: "Pages 29 to 32 assign each phase its product: planning performs the preliminary investigation and feasibility study, analysis delivers the system requirements document, design delivers the system design specification, and implementation constructs the new system. The system requirements document therefore belongs to systems analysis.",
          ms: "Halaman 29 hingga 32 memberikan hasil bagi setiap fasa: fasa perancangan menjalankan penyiasatan awal dan kajian kebolehlaksanaan, fasa analisis menyerahkan dokumen keperluan sistem, fasa reka bentuk menyerahkan spesifikasi reka bentuk sistem, dan fasa pelaksanaan membina sistem baharu. Oleh itu dokumen keperluan sistem tergolong dalam fasa analisis sistem."
        }
      },
      {
        id: "sadm-01-q05", type: "mcq", diff: 2,
        topic: { zh: "瀑布模型的缺点", en: "Weakness of the waterfall model", ms: "Kelemahan model air terjun" },
        q: {
          zh: "本章指出，结构化分析所用的瀑布模型受到的主要批评是什么？",
          en: "What is the main criticism of the waterfall model used in structured analysis, according to the chapter?",
          ms: "Apakah kritikan utama terhadap model air terjun yang digunakan dalam analisis berstruktur menurut bab ini?"
        },
        opts: [
          { zh: "瀑布模型无法为任何一个阶段提供交付成果", en: "The waterfall model cannot produce a deliverable for any phase", ms: "Model air terjun tidak dapat menghasilkan hasil serahan bagi mana-mana fasa" },
          { zh: "瀑布模型要求用户逐行审批程序代码", en: "The waterfall model requires users to approve every line of program code", ms: "Model air terjun memerlukan pengguna meluluskan setiap baris kod program" },
          { zh: "瀑布模型不能与原型法或 CASE 工具一起使用", en: "The waterfall model cannot be used together with prototyping or CASE tools", ms: "Model air terjun tidak boleh digunakan bersama prototaip atau alat CASE" },
          { zh: "瀑布模型不强调各阶段之间的互动", en: "The waterfall model does not emphasize interactivity among the phases", ms: "Model air terjun tidak menekankan interaksi antara fasa" }
        ],
        answer: 3,
        explain: {
          zh: "第 28 页说缺点来自 SDLC 的内置结构：瀑布模型不强调阶段之间的互动；这一批评只有在各阶段被过于僵硬地遵循时才成立，因为相邻阶段通常是相互作用的。其余三项都不是讲义的说法：每个阶段都有交付成果，逐行审批代码不是这里讨论的问题，原型法与 CASE 工具也是本书推荐的工具。",
          en: "Page 28 traces the weakness to the built-in structure of the SDLC: the waterfall model does not emphasize interactivity among the phases, and the criticism is valid only when the phases are followed too rigidly, since adjacent phases usually interact. The other options are not in the chapter: every phase has a deliverable, line-by-line code approval is not discussed here, and prototyping and CASE tools are recommended elsewhere in the book.",
          ms: "Halaman 28 menyatakan kelemahan itu berpunca daripada struktur SDLC terbina dalam, iaitu model air terjun tidak menekankan interaktiviti antara fasa; kritikan tersebut hanya sah apabila fasa diikuti terlalu tegar kerana fasa bersebelahan biasanya berinteraksi. Pilihan lain tidak terdapat dalam bab ini: setiap fasa mempunyai hasil serahan, kelulusan kod baris demi baris tidak dibincangkan, dan prototaip serta alat CASE memang disyorkan dalam buku ini."
        }
      },
      {
        id: "sadm-01-q06", type: "multi", diff: 2,
        topic: { zh: "信息系统的分类", en: "Classification of information systems", ms: "Klasifikasi sistem maklumat" },
        q: {
          zh: "本章说今天人们按功能与特性、而不是按使用者来识别系统。下列哪些属于这种新的分类？",
          en: "The chapter says systems today are identified by their functions and features rather than by their users. Which of the following belong to this newer classification?",
          ms: "Bab ini menyatakan sistem hari ini dikenal pasti melalui fungsi dan cirinya, bukan melalui penggunanya. Antara berikut, yang manakah tergolong dalam klasifikasi baharu ini?"
        },
        opts: [
          { zh: "事务处理系统", en: "Transaction processing systems", ms: "Sistem pemprosesan transaksi" },
          { zh: "知识管理系统", en: "Knowledge management systems", ms: "Sistem pengurusan pengetahuan" },
          { zh: "办公系统", en: "Office systems", ms: "Sistem pejabat" },
          { zh: "高层管理信息系统", en: "Executive information systems", ms: "Sistem maklumat eksekutif" },
          { zh: "企业计算系统", en: "Enterprise computing systems", ms: "Sistem pengkomputeran perusahaan" }
        ],
        answer: [0,1,4],
        explain: {
          zh: "新的分类包括企业计算系统、事务处理系统、业务支持系统、知识管理系统和用户生产力系统。办公系统与高层管理信息系统属于旧分类，即过去按使用者群体划分的 office、operational、decision support、executive information 四类，因此不能算作新分类。",
          en: "The new classification covers enterprise computing systems, transaction processing systems, business support systems, knowledge management systems and user productivity systems. Office systems and executive information systems belong to the old user-group division into office, operational, decision support and executive information systems.",
          ms: "Klasifikasi baharu merangkumi sistem pengkomputeran perusahaan, sistem pemprosesan transaksi, sistem sokongan perniagaan, sistem pengurusan pengetahuan dan sistem produktiviti pengguna. Sistem pejabat dan sistem maklumat eksekutif tergolong dalam pembahagian lama mengikut kumpulan pengguna, iaitu sistem pejabat, sistem operasi, sistem sokongan keputusan dan sistem maklumat eksekutif."
        }
      },
      {
        id: "sadm-01-q07", type: "tf", diff: 2,
        topic: { zh: "对象、方法与消息", en: "Objects, methods and messages", ms: "Objek, kaedah dan mesej" },
        q: {
          zh: "在面向对象分析中，方法会改变对象的属性，而消息是向另一个对象请求特定的行为或信息。",
          en: "In object-oriented analysis, a method changes an object's properties, while a message requests specific behavior or information from another object.",
          ms: "Dalam analisis berorientasikan objek, kaedah mengubah atribut objek, manakala mesej meminta tingkah laku atau maklumat tertentu daripada objek lain."
        },
        answer: true,
        explain: {
          zh: "讲义把对象比作名词、属性比作形容词、方法比作动词：方法定义对象能执行的具体任务并改变其属性，消息则请求另一个对象提供行为或信息。对象是某个类的成员，这一点属于类与实例的区分，并不影响本题说法。",
          en: "The chapter likens objects to nouns, attributes to adjectives and methods to verbs: a method defines tasks the object performs and changes its properties, while a message asks another object for behavior or information. That an object is a member of a class is a separate point about classes and instances and does not affect this statement.",
          ms: "Bab ini mengibaratkan objek seperti kata nama, atribut seperti kata sifat dan kaedah seperti kata kerja: kaedah mentakrifkan tugas yang boleh dilaksanakan oleh objek dan mengubah atributnya, manakala mesej meminta tingkah laku atau maklumat daripada objek lain. Fakta bahawa objek ialah anggota sesuatu kelas ialah perkara berasingan tentang kelas dan instans yang tidak mengubah pernyataan ini."
        }
      },
      {
        id: "sadm-01-q08", type: "fill", diff: 1,
        topic: { zh: "系统规划阶段", en: "Systems planning phase", ms: "Fasa perancangan sistem" },
        q: {
          zh: "SDLC 五阶段模型的第一阶段从系统请求开始，并进行初步调查与可行性研究，这一阶段叫______。",
          en: "The first phase of the five-step SDLC model begins with a systems request and performs a preliminary investigation with a feasibility study. This phase is called ______.",
          ms: "Fasa pertama model SDLC lima langkah bermula dengan permintaan sistem dan menjalankan penyiasatan awal berserta kajian kebolehlaksanaan. Fasa ini dipanggil ______."
        },
        answer: ["systems planning","system planning","perancangan sistem","系统规划","系统规划阶段"],
        explain: {
          zh: "第 30 页把这一步称为 systems planning：它由系统请求启动，目的是做初步调查，而初步调查的关键部分是可行性研究。系统分析、系统设计、系统实施与系统支持及安全是其后四个阶段，因此空里只能填“系统规划”。",
          en: "Page 30 names this step systems planning: it is triggered by a systems request, its purpose is a preliminary investigation, and a key part of that investigation is a feasibility study. Systems analysis, design, implementation, and support and security are the four later phases, so only systems planning fits.",
          ms: "Halaman 30 menamakan langkah ini perancangan sistem: ia dimulakan oleh permintaan sistem, tujuannya ialah penyiasatan awal, dan bahagian penting penyiasatan itu ialah kajian kebolehlaksanaan. Analisis sistem, reka bentuk, pelaksanaan, serta sokongan dan keselamatan ialah empat fasa berikutnya, jadi hanya perancangan sistem yang sesuai."
        }
      }
    ],
    "sadm-02": [
      {
        id: "sadm-02-q01", type: "mcq", diff: 2,
        topic: { zh: "经济可行性", en: "Economic feasibility", ms: "Kebolehlaksanaan ekonomi" },
        q: {
          zh: "哪一种可行性研究用总拥有成本（TCO）以及有形与无形收益来判断项目是否值得做？",
          en: "Which type of feasibility study judges whether a project is worthwhile by using total cost of ownership (TCO) together with tangible and intangible benefits?",
          ms: "Jenis kajian kebolehlaksanaan yang manakah menilai sama ada projek berbaloi dengan menggunakan jumlah kos pemilikan (TCO) serta faedah ketara dan tidak ketara?"
        },
        opts: [
          { zh: "运行可行性", en: "Operational feasibility", ms: "Kebolehlaksanaan operasi" },
          { zh: "经济可行性", en: "Economic feasibility", ms: "Kebolehlaksanaan ekonomi" },
          { zh: "技术可行性", en: "Technical feasibility", ms: "Kebolehlaksanaan teknikal" },
          { zh: "进度可行性", en: "Schedule feasibility", ms: "Kebolehlaksanaan jadual" }
        ],
        answer: 1,
        explain: {
          zh: "第 18 页把 TCO、有形收益与无形收益放在经济可行性之下。运行可行性关心系统在组织中能否被接受、能否真正解决业务问题；技术可行性看现有技术与人员能否实现；进度可行性看能否在可接受的时间内完成。凡涉及成本与收益的权衡都属于经济范畴。",
          en: "Page 18 places TCO, tangible benefits and intangible benefits under economic feasibility. Operational feasibility asks whether the system will be accepted and will actually solve the business problem; technical feasibility asks whether current technology and staff can build it; schedule feasibility asks whether it can be finished in an acceptable time. Cost-benefit trade-offs are therefore economic.",
          ms: "Halaman 18 meletakkan TCO, faedah ketara dan faedah tidak ketara di bawah kebolehlaksanaan ekonomi. Kebolehlaksanaan operasi menilai sama ada sistem boleh diterima dan benar-benar menyelesaikan masalah perniagaan; kebolehlaksanaan teknikal menilai sama ada teknologi dan kakitangan sedia ada mampu membinanya; kebolehlaksanaan jadual menilai sama ada ia dapat disiapkan dalam tempoh yang boleh diterima. Oleh itu pertimbangan kos dan faedah tergolong dalam bidang ekonomi."
        }
      },
      {
        id: "sadm-02-q02", type: "mcq", diff: 1,
        topic: { zh: "自主决定项目", en: "Discretionary projects", ms: "Projek budi bicara" },
        q: {
          zh: "管理层可以选择是否实施的项目称为什么？",
          en: "Projects that management has a choice whether to implement are called ______.",
          ms: "Projek yang pengurusan mempunyai pilihan sama ada untuk melaksanakannya dipanggil ______."
        },
        opts: [
          { zh: "自主决定项目（discretionary）", en: "Discretionary projects", ms: "Projek budi bicara" },
          { zh: "非自主决定项目（nondiscretionary）", en: "Nondiscretionary projects", ms: "Projek bukan budi bicara" },
          { zh: "强制性约束（mandatory constraint）", en: "Mandatory constraints", ms: "Kekangan wajib" },
          { zh: "无形收益项目", en: "Intangible benefit projects", ms: "Projek faedah tidak ketara" }
        ],
        answer: 0,
        explain: {
          zh: "第 23 页把“管理层有选择”的项目叫 discretionary，“没有选择”的叫 nondiscretionary。 constraint 是项目范围里的限制条件，可分为现在／未来、内部／外部、强制／期望，它并不是项目类型；无形收益是一种收益，也不能用来命名项目类别。",
          en: "Page 23 calls projects where management has a choice discretionary, and those where no choice exists nondiscretionary. A constraint is a limit on project scope, classified as present versus future, internal versus external, mandatory versus desirable, and is not a project type; intangible benefit is a kind of benefit, not a project category.",
          ms: "Halaman 23 memanggil projek yang mempunyai pilihan sebagai projek budi bicara dan projek tanpa pilihan sebagai projek bukan budi bicara. Kekangan ialah had dalam skop projek yang terbahagi kepada sekarang berbanding masa hadapan, dalaman berbanding luaran, serta wajib berbanding wajar, dan ia bukan jenis projek; faedah tidak ketara pula ialah sejenis faedah, bukan kategori projek."
        }
      },
      {
        id: "sadm-02-q03", type: "mcq", diff: 1,
        topic: { zh: "鱼骨图", en: "Fishbone diagram", ms: "Gambar rajah tulang ikan" },
        q: {
          zh: "在初步调查的第 1 步“理解问题或机会”中，讲义推荐用哪种图来调查原因与结果？",
          en: "In Step 1 of the preliminary investigation, understanding the problem or opportunity, which diagram does the chapter recommend for investigating causes and effects?",
          ms: "Dalam Langkah 1 penyiasatan awal, iaitu memahami masalah atau peluang, gambar rajah manakah yang disyorkan oleh bab ini untuk menyiasat punca dan kesan?"
        },
        opts: [
          { zh: "甘特图", en: "Gantt chart", ms: "Carta Gantt" },
          { zh: "数据流图", en: "Data flow diagram", ms: "Gambar rajah aliran data" },
          { zh: "鱼骨图（石川图）", en: "Fishbone diagram (Ishikawa diagram)", ms: "Gambar rajah tulang ikan (gambar rajah Ishikawa)" },
          { zh: "PERT/CPM 图", en: "PERT/CPM chart", ms: "Carta PERT/CPM" }
        ],
        answer: 2,
        explain: {
          zh: "第 26 页把鱼骨图与石川图当作同一工具，用于调查原因与结果（因果）。甘特图和 PERT/CPM 图是第 3 章的项目进度工具，数据流图是第 5 章的数据与过程建模工具，三者都不用来做因果分析。",
          en: "Page 26 treats the fishbone diagram and the Ishikawa diagram as the same tool for investigating causes and effects. Gantt and PERT/CPM charts are project scheduling tools from Chapter 3, and data flow diagrams are data and process modeling tools from Chapter 5, so none of them serves cause-and-effect analysis.",
          ms: "Halaman 26 menganggap gambar rajah tulang ikan dan gambar rajah Ishikawa sebagai alat yang sama untuk menyiasat punca dan kesan. Carta Gantt dan carta PERT/CPM ialah alat jadual projek dalam Bab 3, manakala gambar rajah aliran data ialah alat pemodelan data dan proses dalam Bab 5, jadi ketiganya bukan alat analisis sebab-akibat."
        }
      },
      {
        id: "sadm-02-q04", type: "mcq", diff: 2,
        topic: { zh: "项目范围与蠕变", en: "Project scope and creep", ms: "Skop dan penyusupan projek" },
        q: {
          zh: "项目范围不断超出原定边界、越做越大的现象，讲义称为什么？",
          en: "What does the chapter call the situation in which a project's scope keeps growing beyond its original boundaries?",
          ms: "Apakah istilah yang digunakan dalam bab ini apabila skop projek terus berkembang melebihi sempadan asalnya?"
        },
        opts: [
          { zh: "项目约束", en: "Project constraint", ms: "Kekangan projek" },
          { zh: "项目里程碑", en: "Project milestone", ms: "Tonggak projek" },
          { zh: "项目蠕变（范围蔓延）", en: "Project creep", ms: "Penyusupan projek" },
          { zh: "项目基线", en: "Project baseline", ms: "Garis dasar projek" }
        ],
        answer: 2,
        explain: {
          zh: "第 27 页在“确定项目范围与约束”一步中并列 project scope、project creep、constraint 三个概念，creep 指范围不受控地扩张。constraint 是必须遵守的限制；milestone 与 baseline 分别属于进度控制和配置管理，前者是检查点，后者是记录功能与性能的标尺。",
          en: "Page 27 lists project scope, project creep and constraint together in the scope-and-constraints step, where creep means scope expanding beyond control. A constraint is a limit that must be respected; a milestone is a schedule checkpoint, and a baseline is a yardstick for features and performance in configuration management.",
          ms: "Halaman 27 menyenaraikan skop projek, penyusupan projek dan kekangan dalam langkah skop dan kekangan, dan penyusupan bermaksud skop yang membengkak tanpa kawalan. Kekangan ialah had yang mesti dipatuhi; tonggak ialah titik semakan dalam jadual, manakala garis dasar ialah penanda ciri dan prestasi dalam pengurusan konfigurasi."
        }
      },
      {
        id: "sadm-02-q05", type: "mcq", diff: 1,
        topic: { zh: "商业论证", en: "Business case", ms: "Kes perniagaan" },
        q: {
          zh: "讲义所说的 business case 指的是什么？",
          en: "What does the chapter mean by a business case?",
          ms: "Apakah yang dimaksudkan dengan kes perniagaan dalam bab ini?"
        },
        opts: [
          { zh: "提出某项方案的理由或论证依据", en: "The reasons, or justification, for a proposal", ms: "Sebab atau justifikasi bagi sesuatu cadangan" },
          { zh: "系统上线后提交的财务决算报告", en: "The financial report submitted after the system goes live", ms: "Laporan kewangan yang dikemukakan selepas sistem beroperasi" },
          { zh: "公司与软件供应商签订的许可合同", en: "The licence contract signed with a software vendor", ms: "Kontrak lesen yang ditandatangani dengan pembekal perisian" },
          { zh: "列出全部任务与里程碑的进度表", en: "The schedule listing every task and milestone", ms: "Jadual yang menyenaraikan setiap tugas dan tonggak" }
        ],
        answer: 0,
        explain: {
          zh: "第 5 页说 business case 是方案的理由或正当性，强的 business case 说明公司应优先选择该方案；它还应当全面但易懂，清楚描述项目、给出继续的理由并估算财务影响。上线后的决算报告、许可证和进度表分别是项目收尾、采购和进度管理的产物，都不是 business case。",
          en: "Page 5 says a business case is the reasons, or justification, for a proposal, and a strong one shows the company should pursue that alternative above others; it should also be comprehensive yet easy to understand, describe the project, justify proceeding and estimate the financial impact. A post-launch financial report, a licence and a task schedule are outputs of project closing, procurement and scheduling.",
          ms: "Halaman 5 menyatakan kes perniagaan ialah sebab atau justifikasi bagi sesuatu cadangan, dan kes yang kukuh menunjukkan syarikat patut memilih alternatif itu berbanding pilihan lain; ia juga perlu menyeluruh tetapi mudah difahami, menerangkan projek, memberikan justifikasi untuk meneruskan dan menganggar kesan kewangan. Laporan kewangan selepas pelancaran, lesen dan jadual tugas bukanlah kes perniagaan."
        }
      },
      {
        id: "sadm-02-q06", type: "multi", diff: 2,
        topic: { zh: "系统项目的理由", en: "Reasons for systems projects", ms: "Sebab projek sistem" },
        q: {
          zh: "下列哪些属于讲义列出的系统项目主要理由？",
          en: "Which of the following are among the main reasons for systems projects listed in the chapter?",
          ms: "Antara berikut, yang manakah termasuk sebab utama projek sistem seperti yang disenaraikan dalam bab ini?"
        },
        opts: [
          { zh: "加强控制", en: "Strengthen controls", ms: "Memperkukuh kawalan" },
          { zh: "一年内替换所有遗留系统", en: "Replace all legacy systems within one year", ms: "Menggantikan semua sistem warisan dalam tempoh setahun" },
          { zh: "缩减 IT 部门的人员编制", en: "Reduce the headcount of the IT department", ms: "Mengurangkan bilangan kakitangan jabatan IT" },
          { zh: "提供更多信息", en: "Provide more information", ms: "Menyediakan lebih banyak maklumat" },
          { zh: "降低成本", en: "Reduce costs", ms: "Mengurangkan kos" }
        ],
        answer: [0,3,4],
        explain: {
          zh: "章末总结把系统项目的理由归纳为：改善绩效、提供更多信息、降低成本、加强控制、提供更好的服务。替换遗留系统与裁减 IT 人员是具体举措或组织目标，本身不是启动项目的“理由”，而且替换全部遗留系统通常本身就是多年期的多个项目。",
          en: "The chapter summary reduces the reasons to improving performance, providing more information, reducing costs, strengthening controls and providing better service. Replacing legacy systems and cutting IT headcount are actions or organizational goals rather than reasons, and replacing every legacy system would itself be a multi-year programme.",
          ms: "Rumusan bab menyenaraikan sebab projek sistem sebagai meningkatkan prestasi, menyediakan lebih banyak maklumat, mengurangkan kos, memperkukuh kawalan dan memberikan perkhidmatan yang lebih baik. Menggantikan sistem warisan dan mengurangkan kakitangan IT ialah tindakan atau sasaran organisasi, bukan sebab, dan menggantikan semua sistem warisan itu sendiri merupakan program bertahun-tahun."
        }
      },
      {
        id: "sadm-02-q07", type: "tf", diff: 2,
        topic: { zh: "可行性分析的持续性", en: "Feasibility as an ongoing task", ms: "Kebolehlaksanaan sebagai tugas berterusan" },
        q: {
          zh: "讲义认为可行性分析只在初步调查结束时做一次，此后在系统开发过程中不再重复。",
          en: "The chapter treats feasibility analysis as a one-time task performed at the end of the preliminary investigation and never repeated during systems development.",
          ms: "Bab ini menganggap analisis kebolehlaksanaan sebagai tugas sekali sahaja yang dilakukan pada akhir penyiasatan awal dan tidak diulang sepanjang pembangunan sistem."
        },
        answer: false,
        explain: {
          zh: "第 19 页明确说 feasibility analysis 是一项 ongoing task，必须在整个系统开发过程中反复进行；初步调查第 5 步的评估只是其中一次。把它说成“只做一次”，正好去掉了讲义强调的持续性，因此是错的。",
          en: "Page 19 states plainly that feasibility analysis is an ongoing task that must be performed throughout the systems development process; the Step 5 evaluation in the preliminary investigation is only one instance. Calling it a one-time task removes the continuity the chapter insists on, so the statement is false.",
          ms: "Halaman 19 menyatakan dengan jelas bahawa analisis kebolehlaksanaan ialah tugas berterusan yang mesti dilaksanakan sepanjang proses pembangunan sistem; penilaian dalam Langkah 5 penyiasatan awal hanyalah salah satu daripadanya. Menyifatkannya sebagai tugas sekali sahaja menghapuskan sifat berterusan yang ditekankan bab ini, jadi pernyataan itu salah."
        }
      },
      {
        id: "sadm-02-q08", type: "fill", diff: 1,
        topic: { zh: "系统请求", en: "Systems request", ms: "Permintaan sistem" },
        q: {
          zh: "启动整个开发过程、描述存在的问题或期望改变的文件，称为系统______。",
          en: "The document that begins the development process and describes the problems or desired changes is called a systems ______.",
          ms: "Dokumen yang memulakan proses pembangunan dan menerangkan masalah atau perubahan yang diingini dipanggil ______ sistem."
        },
        answer: ["systems request","system request","permintaan sistem","系统请求","系统申请"],
        explain: {
          zh: "第 5 页与第 30 页都说系统开发通常由 systems request 开始，随后是初步调查与可行性研究；这份请求描述的是问题或期望的改变。它不是需求文档（分析阶段的产物），也不是项目章程，后者在讲义中并未出现。",
          en: "Pages 5 and 30 both say systems development typically starts with a systems request, followed by a preliminary investigation that includes a feasibility study; the request describes a problem or a desired change. It is not the requirements document, which is produced later in analysis, nor a project charter, which the chapter does not mention.",
          ms: "Halaman 5 dan 30 menyatakan pembangunan sistem biasanya bermula dengan permintaan sistem, diikuti penyiasatan awal yang merangkumi kajian kebolehlaksanaan; permintaan itu menerangkan masalah atau perubahan yang diingini. Ia bukan dokumen keperluan yang dihasilkan kemudian dalam fasa analisis, dan bukan piagam projek yang tidak disebut dalam bab ini."
        }
      }
    ],
    "sadm-03": [
      {
        id: "sadm-03-q01", type: "mcq", diff: 2,
        topic: { zh: "加权工期估算", en: "Weighted duration estimate", ms: "Anggaran tempoh berwajaran" },
        q: {
          zh: "某任务最佳情况估计 4 天、最可能情况 6 天、最坏情况 14 天，按加权公式 (B+4P+W)/6 计算，估计工期是多少？",
          en: "A task has a best-case estimate of 4 days, a probable-case estimate of 6 days and a worst-case estimate of 14 days. Using the weighted formula (B+4P+W)/6, what is the estimated duration?",
          ms: "Sesuatu tugas mempunyai anggaran kes terbaik 4 hari, kes berkemungkinan 6 hari dan kes terburuk 14 hari. Dengan formula berwajaran (B+4P+W)/6, apakah anggaran tempohnya?"
        },
        opts: [
          { zh: "8 天", en: "8 days", ms: "8 hari" },
          { zh: "6 天", en: "6 days", ms: "6 hari" },
          { zh: "9 天", en: "9 days", ms: "9 hari" },
          { zh: "7 天", en: "7 days", ms: "7 hari" }
        ],
        answer: 3,
        explain: {
          zh: "(4 + 4×6 + 14) / 6 = 42/6 = 7 天。加权公式给最可能情况 4 倍权重，所以结果偏向 6 而不是三个数的简单平均；把 (4+6+14)/3 算成 8 天正是漏掉加权，把 P 当成 2 倍权重则会算出 5 天。",
          en: "(4 + 4x6 + 14) / 6 = 42/6 = 7 days. The weighted formula gives the probable estimate four times the weight, so the result leans toward 6 instead of the simple average; (4+6+14)/3 = 8 days drops the weighting, and treating P as having double weight would give 5 days.",
          ms: "(4 + 4x6 + 14) / 6 = 42/6 = 7 hari. Formula berwajaran memberi anggaran berkemungkinan pemberat empat kali ganda, jadi hasilnya condong ke arah 6 dan bukan purata mudah; (4+6+14)/3 = 8 hari mengabaikan pemberat itu, manakala memberi P pemberat dua kali ganda akan menghasilkan 5 hari."
        }
      },
      {
        id: "sadm-03-q02", type: "mcq", diff: 2,
        topic: { zh: "甘特图与 PERT 图", en: "Gantt versus PERT charts", ms: "Carta Gantt berbanding PERT" },
        q: {
          zh: "关于甘特图与 PERT/CPM 图，哪一种说法符合讲义？",
          en: "Which statement about Gantt charts and PERT/CPM charts matches the chapter?",
          ms: "Pernyataan manakah tentang carta Gantt dan carta PERT/CPM yang menepati bab ini?"
        },
        opts: [
          { zh: "甘特图比 PERT 图更能控制实际工作，但不能用来显示任务组", en: "A Gantt chart controls the actual work better than PERT, but cannot show task groups", ms: "Carta Gantt mengawal kerja sebenar lebih baik daripada PERT, tetapi tidak boleh menunjukkan kumpulan tugas" },
          { zh: "甘特图提供有价值的概览，但 PERT 图在安排、监控和控制实际工作方面更有用", en: "A Gantt chart offers a valuable overview, but PERT charts are more useful for scheduling, monitoring and controlling the actual work", ms: "Carta Gantt memberikan gambaran keseluruhan yang berguna, tetapi carta PERT lebih berguna untuk menjadual, memantau dan mengawal kerja sebenar" },
          { zh: "PERT 与甘特图互斥，项目经理只能二选一", en: "PERT and Gantt charts are mutually exclusive, so a project manager must choose one", ms: "Carta PERT dan Gantt saling eksklusif, jadi pengurus projek mesti memilih satu sahaja" },
          { zh: "甘特图是自下而上的技术，而 PERT/CPM 是自上而下的概览", en: "A Gantt chart is a bottom-up technique, while PERT/CPM is a top-down overview", ms: "Carta Gantt ialah teknik dari bawah ke atas, manakala PERT/CPM ialah gambaran keseluruhan dari atas ke bawah" }
        ],
        answer: 1,
        explain: {
          zh: "第 9 至 12 页说甘特图能给出项目状态概览，但对复杂项目缺少必要细节；PERT 图更适合安排、监控与控制实际工作；两者并不互斥，项目经理常同时使用；而且 PERT/CPM 被称为自下而上的技术。其余三项都把讲义的说法颠倒或张冠李戴。",
          en: "Pages 9 to 12 say a Gantt chart gives an overview but lacks the detail needed for a complex project, PERT charts are more useful for scheduling, monitoring and controlling the actual work, the two are not mutually exclusive and managers often use both, and PERT/CPM is called a bottom-up technique. The other options reverse or misassign these claims.",
          ms: "Halaman 9 hingga 12 menyatakan carta Gantt memberi gambaran keseluruhan tetapi kurang butiran untuk projek kompleks, carta PERT lebih berguna untuk menjadual, memantau dan mengawal kerja sebenar, kedua-duanya tidak saling eksklusif dan sering digunakan bersama, serta PERT/CPM dipanggil teknik dari bawah ke atas. Pilihan lain menyongsangkan atau menyalah tempat kenyataan tersebut."
        }
      },
      {
        id: "sadm-03-q03", type: "mcq", diff: 2,
        topic: { zh: "进度维护与关键路径", en: "Maintaining a schedule", ms: "Mengekalkan jadual" },
        q: {
          zh: "在维护进度时，讲义说项目经理大部分时间花在哪里？",
          en: "When maintaining a schedule, where does the chapter say project managers often spend most of their time?",
          ms: "Semasa mengekalkan jadual, di manakah bab ini menyatakan pengurus projek sering menghabiskan sebahagian besar masa mereka?"
        },
        opts: [
          { zh: "为每个新任务重写工作分解结构", en: "Rewriting the work breakdown structure for every new task", ms: "Menulis semula struktur pecahan kerja bagi setiap tugas baharu" },
          { zh: "就新需求访谈用户", en: "Interviewing users about new requirements", ms: "Menemu bual pengguna tentang keperluan baharu" },
          { zh: "编写给管理层的最终报告", en: "Preparing the final report to management", ms: "Menyediakan laporan akhir kepada pengurusan" },
          { zh: "跟踪关键路径上的任务", en: "Tracking the tasks along the critical path", ms: "Menjejaki tugas di sepanjang laluan kritikal" }
        ],
        answer: 3,
        explain: {
          zh: "第 27 页说计划越好，控制越容易；若有足够的里程碑与检查点，问题能被迅速发现；项目经理常把大部分时间用于跟踪关键路径上的任务。重写 WBS 属于计划、访谈用户属于需求获取、最终报告属于收尾，都不是日常的进度维护重点。",
          en: "Page 27 says the better the original plan, the easier control becomes, frequent milestones and checkpoints let problems surface quickly, and project managers often spend most of their time tracking the tasks along the critical path. Rewriting the WBS is planning, interviewing users is requirements work, and the final report belongs to project closing.",
          ms: "Halaman 27 menyatakan semakin baik pelan asal, semakin mudah kawalan; dengan tonggak dan titik semakan yang mencukupi, masalah dapat dikesan dengan cepat; pengurus projek sering menghabiskan sebahagian besar masa menjejaki tugas di sepanjang laluan kritikal. Menulis semula WBS ialah perancangan, menemu bual pengguna ialah kerja keperluan, dan laporan akhir ialah kerja penutupan projek."
        }
      },
      {
        id: "sadm-03-q04", type: "mcq", diff: 2,
        topic: { zh: "风险管理步骤", en: "Risk management steps", ms: "Langkah pengurusan risiko" },
        q: {
          zh: "下列哪一项正确排列了讲义给出的风险管理步骤？",
          en: "Which option correctly orders the risk management steps given in the chapter?",
          ms: "Pilihan manakah yang menyusun langkah pengurusan risiko dalam bab ini dengan betul?"
        },
        opts: [
          { zh: "识别风险 → 监控风险 → 制定风险管理计划 → 分析风险 → 制定风险应对计划", en: "Identify risks, monitor risks, develop a risk management plan, analyze risks, create a risk response plan", ms: "Kenal pasti risiko, pantau risiko, bina pelan pengurusan risiko, analisis risiko, bina pelan tindak balas risiko" },
          { zh: "制定风险管理计划 → 识别风险 → 分析风险 → 制定风险应对计划 → 监控风险", en: "Develop a risk management plan, identify risks, analyze risks, create a risk response plan, monitor risks", ms: "Bina pelan pengurusan risiko, kenal pasti risiko, analisis risiko, bina pelan tindak balas risiko, pantau risiko" },
          { zh: "制定风险管理计划 → 分析风险 → 监控风险 → 识别风险 → 制定风险应对计划", en: "Develop a risk management plan, analyze risks, monitor risks, identify risks, create a risk response plan", ms: "Bina pelan pengurusan risiko, analisis risiko, pantau risiko, kenal pasti risiko, bina pelan tindak balas risiko" },
          { zh: "分析风险 → 识别风险 → 制定风险管理计划 → 制定风险应对计划 → 监控风险", en: "Analyze risks, identify risks, develop a risk management plan, create a risk response plan, monitor risks", ms: "Analisis risiko, kenal pasti risiko, bina pelan pengurusan risiko, bina pelan tindak balas risiko, pantau risiko" }
        ],
        answer: 1,
        explain: {
          zh: "第 33 至 34 页的顺序是先制定风险管理计划，再识别风险（risk identification），接着分析风险（定性、定量），然后制定风险应对计划，最后监控风险。没有计划就先识别、或还没识别就分析，都会打乱“先定框架、再找风险、再评估”的逻辑。",
          en: "Pages 33 and 34 order the steps as: develop a risk management plan, identify the risks, analyze them qualitatively and quantitatively, create a risk response plan, and monitor risks. Identifying without a plan, or analyzing before identification, breaks the logic of setting the framework, finding the risks, then evaluating them.",
          ms: "Halaman 33 dan 34 menyusun langkahnya: bina pelan pengurusan risiko, kenal pasti risiko, analisis secara kualitatif dan kuantitatif, bina pelan tindak balas risiko, dan pantau risiko. Mengenal pasti tanpa pelan, atau menganalisis sebelum mengenal pasti, merosakkan logik menetapkan kerangka, mencari risiko kemudian menilainya."
        }
      },
      {
        id: "sadm-03-q05", type: "mcq", diff: 2,
        topic: { zh: "削减需求以按期交付", en: "Trimming requirements", ms: "Memangkas keperluan" },
        q: {
          zh: "当项目出现延误或成本超支时，讲义说在什么情况下系统仍能按时、按预算交付？",
          en: "When a project suffers delays or cost overruns, the chapter says the system still can be delivered on time and within budget if ______.",
          ms: "Apabila projek mengalami kelewatan atau lebihan kos, bab ini menyatakan sistem masih boleh diserahkan tepat pada masa dan dalam bajet jika ______."
        },
        opts: [
          { zh: "削减若干不太关键的需求", en: "several less critical requirements are trimmed", ms: "beberapa keperluan yang kurang kritikal dipangkas" },
          { zh: "团队在不改变范围的前提下长期加班", en: "the team works overtime without any change to scope", ms: "pasukan bekerja lebih masa tanpa mengubah skop" },
          { zh: "项目经理更换整个开发团队", en: "the project manager replaces the whole development team", ms: "pengurus projek menggantikan seluruh pasukan pembangunan" },
          { zh: "把所有文档工作推迟到下一个版本", en: "all documentation work is postponed to the next release", ms: "semua kerja dokumentasi ditangguhkan ke keluaran berikutnya" }
        ],
        answer: 0,
        explain: {
          zh: "第 41 页说，项目延误或超支时，如果削减几个不太关键的需求，系统仍可能按时、按预算交付；这一段紧接 Brooks 定律。长期加班不改变工作量，换团队会带来新的学习成本，推迟文档会损害质量，都不是讲义给出的办法。",
          en: "Page 41 says that when a project is delayed or over budget, the system can still be delivered on time and within budget if several less critical requirements are trimmed, and the page then raises Brooks' Law. Overtime adds no capacity, swapping the team adds a learning cost, and postponing documentation harms quality.",
          ms: "Halaman 41 menyatakan apabila projek mengalami kelewatan atau melebihi bajet, sistem masih boleh diserahkan tepat pada masa dan dalam bajet jika beberapa keperluan yang kurang kritikal dipangkas, dan halaman itu kemudian menyebut Hukum Brooks. Bekerja lebih masa tidak menambah kapasiti, menukar pasukan menambah kos pembelajaran, dan menangguhkan dokumentasi merosakkan kualiti."
        }
      },
      {
        id: "sadm-03-q06", type: "multi", diff: 3,
        topic: { zh: "成本超支的原因", en: "Causes of cost overruns", ms: "Punca lebihan kos" },
        q: {
          zh: "下列哪些是讲义列出的成本超支典型原因？",
          en: "Which of the following are typical causes of cost overruns listed in the chapter?",
          ms: "Antara berikut, yang manakah punca biasa lebihan kos seperti yang disenaraikan dalam bab ini?"
        },
        opts: [
          { zh: "人员流动、培训不足与激励问题", en: "Human resource issues such as turnover, inadequate training and motivation", ms: "Isu sumber manusia seperti pusing ganti kakitangan, latihan tidak mencukupi dan motivasi" },
          { zh: "把努力（effort）与进展（progress）混为一谈", en: "Confusing effort with progress", ms: "Mengelirukan usaha dengan kemajuan" },
          { zh: "不切实际的估算", en: "Unrealistic estimates", ms: "Anggaran yang tidak realistik" },
          { zh: "未能预测项目全生命周期的所有成本", en: "Failure to forecast all costs over the life of the project", ms: "Kegagalan meramal semua kos sepanjang hayat projek" },
          { zh: "对进展监控不力、对早期警号反应迟缓", en: "Poor monitoring of progress and slow response to early warning signs", ms: "Pemantauan kemajuan yang lemah dan tindak balas lambat terhadap tanda awal" }
        ],
        answer: [0,2,3,4],
        explain: {
          zh: "第 37 至 38 页把不切实际的估算、未预测全生命周期成本、监控不力与反应迟缓、不可预见的进度延误，以及人员流动、培训不足、激励等人力资源问题列为成本超支来源。把努力与进展混淆则出现在第 39 页的进度问题清单里，是进度失控的原因，不是成本超支的直接原因。",
          en: "Pages 37 and 38 list unrealistic estimates, failure to forecast all costs over the project's life, poor monitoring and slow response, unforeseen schedule delays, and human resource problems such as turnover, inadequate training and motivation. Confusing effort with progress appears on page 39 among schedule issues, so it is not a direct cause of cost overruns.",
          ms: "Halaman 37 dan 38 menyenaraikan anggaran tidak realistik, kegagalan meramal semua kos sepanjang hayat projek, pemantauan lemah dan tindak balas lambat, kelewatan jadual yang tidak dijangka, serta masalah sumber manusia seperti pusing ganti, latihan tidak mencukupi dan motivasi. Mengelirukan usaha dengan kemajuan tersenarai pada halaman 39 dalam isu jadual, bukan punca langsung lebihan kos."
        }
      },
      {
        id: "sadm-03-q07", type: "tf", diff: 1,
        topic: { zh: "结构化走查", en: "Structured walkthrough", ms: "Semakan berstruktur" },
        q: {
          zh: "结构化走查（structured walkthrough）也叫设计评审、代码评审或测试评审，是项目监控与控制的一种手段。",
          en: "A structured walkthrough, also called a design review, code review or testing review, is a project monitoring and control technique.",
          ms: "Semakan berstruktur, yang juga dipanggil semakan reka bentuk, semakan kod atau semakan pengujian, ialah teknik pemantauan dan kawalan projek."
        },
        answer: true,
        explain: {
          zh: "第 26 页在“监控与控制技术”下列出 structured walkthrough，并注明它也被称为 design review、code review 或 testing review；同一页还要求项目经理跟踪任务、比较实际进展与计划、核实里程碑是否完成。因此该说法与讲义一致。",
          en: "Page 26 lists the structured walkthrough under monitoring and control techniques and notes that it is also called a design review, code review or testing review; the same page requires the project manager to track tasks, compare actual progress with the plan and verify milestones. The statement therefore matches the chapter.",
          ms: "Halaman 26 menyenaraikan semakan berstruktur di bawah teknik pemantauan dan kawalan serta menyatakan ia juga dipanggil semakan reka bentuk, semakan kod atau semakan pengujian; halaman yang sama memerlukan pengurus projek menjejak tugas, membandingkan kemajuan sebenar dengan pelan dan mengesahkan tonggak. Pernyataan ini menepati bab tersebut."
        }
      },
      {
        id: "sadm-03-q08", type: "fill", diff: 1,
        topic: { zh: "前置任务", en: "Predecessor task", ms: "Tugas pendahulu" },
        q: {
          zh: "在工作分解结构中，必须先完成、之后另一个任务才能开始的任务，称为______任务。",
          en: "In a work breakdown structure, a task that must be completed before another task can begin is called a ______ task.",
          ms: "Dalam struktur pecahan kerja, tugas yang mesti disiapkan sebelum tugas lain boleh bermula dipanggil tugas ______."
        },
        answer: ["predecessor","predecessor task","predecessor tasks","pendahulu","前置任务"],
        explain: {
          zh: "第 14 页要求任务表包含任务编号、说明、工期和前置任务四列；第 21 页把这种关系称为 predecessor task，与之相对的是 successor task。工期估计里的 B、P、W 是三种估算值，与任务顺序无关，不能填在这里。",
          en: "Page 14 requires the task table to have columns for task number, description, duration and predecessor tasks, and page 21 calls this relationship the predecessor task, opposed to the successor task. The B, P and W values are duration estimates and have nothing to do with task order.",
          ms: "Halaman 14 memerlukan jadual tugas mengandungi nombor tugas, keterangan, tempoh dan tugas pendahulu, manakala halaman 21 memanggil hubungan ini tugas pendahulu, berlawanan dengan tugas pengganti. Nilai B, P dan W ialah anggaran tempoh dan tidak berkaitan dengan urutan tugas."
        }
      }
    ],
    "sadm-04": [
      {
        id: "sadm-04-q01", type: "mcq", diff: 2,
        topic: { zh: "性能需求", en: "Performance requirements", ms: "Keperluan prestasi" },
        q: {
          zh: "下列哪一条属于讲义系统需求清单中的性能（performance）需求？",
          en: "Which of the following is a performance requirement in the chapter's system requirements checklist?",
          ms: "Antara berikut, yang manakah keperluan prestasi dalam senarai keperluan sistem bab ini?"
        },
        opts: [
          { zh: "工资系统必须在年终处理时更新工资、奖金与福利", en: "The payroll system must update salaries, bonuses and benefits during year-end processing", ms: "Sistem gaji mesti mengemas kini gaji, bonus dan faedah semasa pemprosesan akhir tahun" },
          { zh: "库存系统必须按零件号排序生成每日报告", en: "The inventory system must produce a daily report sorted by part number", ms: "Sistem inventori mesti menghasilkan laporan harian yang diisih mengikut nombor bahagian" },
          { zh: "系统必须同时支持 25 个在线用户", en: "The system must support 25 users online simultaneously", ms: "Sistem mesti menyokong 25 pengguna dalam talian serentak" },
          { zh: "员工记录只能由人力资源部成员删除", en: "An employee record may be deleted only by a member of the human resources department", ms: "Rekod pekerja hanya boleh dipadam oleh ahli jabatan sumber manusia" }
        ],
        answer: 2,
        explain: {
          zh: "讲义把“同时支持 25 个用户”“响应时间不超过 4 秒”列为性能需求，约束的是容量与速度。涉及计算并更新数据的那一项是 processes，每日报表及其排序是 outputs，删除权限是 controls。判断关键是看它约束的是速度容量、处理逻辑、输出格式还是访问权限。",
          en: "The chapter lists supporting 25 simultaneous users and a response time of no more than four seconds as performance requirements, because they constrain capacity and speed. The option about calculating and updating data is a process, the daily sorted report is an output, and the deletion rule is a control. The test is whether the statement constrains speed and capacity, processing logic, output format or access rights.",
          ms: "Bab ini menyenaraikan sokongan 25 pengguna serentak dan masa tindak balas tidak melebihi empat saat sebagai keperluan prestasi kerana ia mengehadkan kapasiti dan kelajuan. Pilihan tentang pengiraan dan pengemaskinian data ialah proses, laporan harian yang diisih ialah output, dan peraturan pemadaman ialah kawalan. Ujiannya ialah sama ada pernyataan itu mengehadkan kelajuan dan kapasiti, logik pemprosesan, format output atau hak akses."
        }
      },
      {
        id: "sadm-04-q02", type: "mcq", diff: 2,
        topic: { zh: "可扩展性", en: "Scalability", ms: "Kebolehlanjutan" },
        q: {
          zh: "讲义如何描述可扩展性（scalability）？",
          en: "How does the chapter describe scalability?",
          ms: "Bagaimanakah bab ini menerangkan kebolehlanjutan?"
        },
        opts: [
          { zh: "可扩展的系统需要更少带宽，评估时只需知道程序员的数目", en: "A scalable system needs less bandwidth, and evaluating it only requires the number of programmers", ms: "Sistem yang boleh dilanjutkan memerlukan lebih sedikit jalur lebar, dan penilaiannya hanya memerlukan bilangan pengaturcara" },
          { zh: "可扩展的系统不需要数据字典，评估时只需看遗留系统的年限", en: "A scalable system does not need a data dictionary, and evaluating it only requires the age of the legacy systems", ms: "Sistem yang boleh dilanjutkan tidak memerlukan kamus data, dan penilaiannya hanya memerlukan usia sistem warisan" },
          { zh: "可扩展的系统带来更好的初始投资回报，评估时需要所有输出、输入和过程的未来业务量预测", en: "A scalable system offers a better return on the initial investment, and evaluating it requires projected future volume for all outputs, inputs and processes", ms: "Sistem yang boleh dilanjutkan memberikan pulangan lebih baik atas pelaburan awal, dan penilaiannya memerlukan unjuran jumlah masa hadapan bagi semua output, input dan proses" },
          { zh: "可扩展的系统能降低初始成本，评估时只看供应商的许可模式", en: "A scalable system lowers the initial cost, and evaluating it only requires the vendor's licence model", ms: "Sistem yang boleh dilanjutkan merendahkan kos awal, dan penilaiannya hanya memerlukan model lesen pembekal" }
        ],
        answer: 2,
        explain: {
          zh: "第 26 页说可扩展系统对初始投资有更好的回报；要评估可扩展性，必须掌握所有 output、input 与 process 的未来业务量预测。其余选项把可扩展性与带宽、文档、许可价格混在一起：这些因素可以影响选型，但不是讲义定义可扩展性与评估方法时的依据。",
          en: "Page 26 says a scalable system offers a better return on the initial investment, and that evaluating scalability requires projected future volume for all outputs, inputs and processes. The other options mix scalability with bandwidth, documentation and licence prices, which may influence a purchase but are not how the chapter defines or evaluates scalability.",
          ms: "Halaman 26 menyatakan sistem yang boleh dilanjutkan memberikan pulangan lebih baik atas pelaburan awal, dan penilaiannya memerlukan unjuran jumlah masa hadapan bagi semua output, input dan proses. Pilihan lain mencampurkan kebolehlanjutan dengan jalur lebar, dokumentasi dan harga lesen, yang mungkin mempengaruhi pembelian tetapi bukan cara bab ini mentakrif atau menilainya."
        }
      },
      {
        id: "sadm-04-q03", type: "mcq", diff: 2,
        topic: { zh: "JAD 的缺点", en: "JAD disadvantages", ms: "Kelemahan JAD" },
        q: {
          zh: "讲义指出的 JAD 缺点是什么？",
          en: "What disadvantage of JAD does the chapter point out?",
          ms: "Apakah kelemahan JAD yang dinyatakan dalam bab ini?"
        },
        opts: [
          { zh: "相对于项目规模而言小组过大时，成本更高且变得笨重", en: "It is more expensive and becomes cumbersome when the group is too large relative to the project", ms: "Ia lebih mahal dan menjadi janggal apabila kumpulan terlalu besar berbanding saiz projek" },
          { zh: "它阻止关键用户有效参与需求工作", en: "It prevents key users from participating effectively in requirements work", ms: "Ia menghalang pengguna utama daripada melibatkan diri secara berkesan dalam kerja keperluan" },
          { zh: "它总是产生更不准确的系统需求说明", en: "It always produces a less accurate statement of system requirements", ms: "Ia sentiasa menghasilkan pernyataan keperluan sistem yang kurang tepat" },
          { zh: "它使开发过程失去管理层的支持", en: "It removes management support from the development process", ms: "Ia menghilangkan sokongan pengurusan daripada proses pembangunan" }
        ],
        answer: 0,
        explain: {
          zh: "第 13 页说 JAD 更贵，若小组相对项目规模过大就会变得 cumbersome；但用得当时，它能带来更准确的需求说明、对共同目标更好的理解，以及对新系统更强的承诺。其余三项恰好把 JAD 的优点说反了，因此不是讲义指出的缺点。",
          en: "Page 13 says JAD is more expensive and can be cumbersome if the group is too large relative to the project, yet when used properly it yields a more accurate statement of requirements, a better understanding of common goals and a stronger commitment to the new system. The other options reverse those advantages.",
          ms: "Halaman 13 menyatakan JAD lebih mahal dan boleh menjadi janggal jika kumpulan terlalu besar berbanding projek, tetapi apabila digunakan dengan betul ia menghasilkan pernyataan keperluan yang lebih tepat, pemahaman yang lebih baik tentang matlamat bersama dan komitmen yang lebih kukuh terhadap sistem baharu. Pilihan lain menyongsangkan kelebihan tersebut."
        }
      },
      {
        id: "sadm-04-q04", type: "mcq", diff: 2,
        topic: { zh: "RAD 的局限", en: "RAD limitations", ms: "Kekangan RAD" },
        q: {
          zh: "讲义对 RAD 提出的批评是什么？",
          en: "What criticism of RAD does the chapter make?",
          ms: "Apakah kritikan terhadap RAD yang dinyatakan dalam bab ini?"
        },
        opts: [
          { zh: "RAD 无法用于用户界面高度交互或复杂的系统", en: "RAD cannot be used for systems with a highly interactive or complex user interface", ms: "RAD tidak boleh digunakan untuk sistem dengan antara muka pengguna yang sangat interaktif atau kompleks" },
          { zh: "RAD 要求用户在开发的每个阶段都不得参与", en: "RAD requires users to stay out of every phase of development", ms: "RAD mewajibkan pengguna tidak terlibat dalam setiap fasa pembangunan" },
          { zh: "RAD 一定会延长开发时间并增加费用", en: "RAD always increases development time and expense", ms: "RAD sentiasa memanjangkan masa pembangunan dan menambah kos" },
          { zh: "RAD 强调系统本身的机制，却不重视公司的战略业务需求", en: "RAD stresses the mechanics of the system itself and does not emphasize the company's strategic business needs", ms: "RAD menekankan mekanik sistem itu sendiri dan tidak menekankan keperluan perniagaan strategik syarikat" }
        ],
        answer: 3,
        explain: {
          zh: "第 16 页说 RAD 能更快、更省地开发系统，但它 stresses the mechanics of the system itself，不强调公司的战略业务需求，也可能没有足够时间建立质量、一致性与设计标准。RAD 的目标正是让用户参与每个阶段，并擅长高度交互的界面，所以其余三项与讲义相反。",
          en: "Page 16 says RAD can develop systems more quickly with significant cost savings, but it stresses the mechanics of the system itself, does not emphasize the company's strategic business needs and may allow too little time for quality, consistency and design standards. RAD aims to involve users in every phase and suits highly interactive interfaces, so the other options contradict it.",
          ms: "Halaman 16 menyatakan RAD boleh membangunkan sistem dengan lebih cepat dan menjimatkan kos, tetapi ia menekankan mekanik sistem itu sendiri, tidak menekankan keperluan perniagaan strategik syarikat dan mungkin tidak memberi cukup masa untuk kualiti, konsistensi dan piawaian reka bentuk. RAD bertujuan melibatkan pengguna dalam setiap fasa dan sesuai untuk antara muka yang sangat interaktif."
        }
      },
      {
        id: "sadm-04-q05", type: "mcq", diff: 1,
        topic: { zh: "访谈的准备", en: "Preparing an interview", ms: "Persediaan temu bual" },
        q: {
          zh: "讲义对“准备访谈”这一步给出了哪条规则？",
          en: "Which rule does the chapter give for preparing an interview?",
          ms: "Peraturan manakah yang diberikan dalam bab ini untuk persediaan temu bual?"
        },
        opts: [
          { zh: "一次同时访谈至少十个人以节省时间", en: "Interview at least ten people at the same time to save time", ms: "Temu bual sekurang-kurangnya sepuluh orang serentak untuk menjimatkan masa" },
          { zh: "访谈时间控制在一小时以内", en: "Limit the interview to no more than one hour", ms: "Hadkan temu bual kepada tidak lebih daripada satu jam" },
          { zh: "为节省时间多问引导性问题", en: "Ask leading questions to save time", ms: "Tanya soalan yang mengarah untuk menjimatkan masa" },
          { zh: "绝不提前把话题清单发给受访者", en: "Never send the interviewee a list of topics in advance", ms: "Jangan sekali-kali menghantar senarai topik kepada orang yang ditemu bual lebih awal" }
        ],
        answer: 1,
        explain: {
          zh: "第 32 页要求认真准备，把访谈限制在不超过一小时，提前发送话题清单，并请受访者准备样本。第 31 页还明确要求避免引导性问题。因此“一次访谈十个人”“为省时间多问引导性问题”“绝不提前发话题清单”这三种做法都与讲义相反：讲义要求提前发送话题清单，并明确要求避免引导性问题。",
          en: "Page 32 requires careful preparation, limits the interview to no more than one hour, tells you to send a list of topics and to ask the interviewee to have samples available. Page 31 explicitly says to avoid leading questions, so interviewing ten people at once, asking leading questions to save time and never sending a topic list all contradict the chapter, which requires an advance topic list and warns against leading questions.",
          ms: "Halaman 32 menekankan persediaan rapi, mengehadkan temu bual kepada satu jam, menghantar senarai topik lebih awal dan meminta orang yang ditemu bual menyediakan sampel. Halaman 31 pula menyatakan dengan jelas supaya mengelakkan soalan yang mengarah, jadi menemu bual sepuluh orang serentak, bertanya soalan yang mengarah dan tidak menghantar senarai topik semuanya bercanggah dengan bab ini, yang memerlukan senarai topik dihantar lebih awal dan melarang soalan yang mengarah."
        }
      },
      {
        id: "sadm-04-q06", type: "multi", diff: 2,
        topic: { zh: "Scrum 的角色", en: "Scrum roles", ms: "Peranan Scrum" },
        q: {
          zh: "在讲义对 Scrum 的说明中，下列哪些角色属于“猪”（pigs）？",
          en: "In the chapter's description of Scrum, which of the following belong to the pigs?",
          ms: "Dalam penerangan bab ini tentang Scrum, yang manakah tergolong sebagai babi (pigs)?"
        },
        opts: [
          { zh: "管理者", en: "Managers", ms: "Pengurus" },
          { zh: "产品负责人", en: "The product owner", ms: "Pemilik produk" },
          { zh: "促进者（主持人）", en: "The facilitator", ms: "Fasilitator" },
          { zh: "开发团队", en: "The development team", ms: "Pasukan pembangunan" },
          { zh: "用户与其他利益相关者", en: "Users and other stakeholders", ms: "Pengguna dan pihak berkepentingan lain" }
        ],
        answer: [1,2,3],
        explain: {
          zh: "第 18 页把 pigs 列为 product owner、facilitator 与 development team；chickens 则是 users、其他 stakeholders 与 managers。Scrum 一词来自橄榄球，这些角色划分配合以时间盒、互动和团队活动为重点的 Scrum 会议，最后产出可交付的软件。",
          en: "Page 18 lists the pigs as the product owner, the facilitator and the development team, while the chickens are users, other stakeholders and managers. Scrum is a rugby term, and these roles work with Scrum sessions that emphasize time blocks, interaction and team-based activities that produce deliverable software.",
          ms: "Halaman 18 menyenaraikan babi sebagai pemilik produk, fasilitator dan pasukan pembangunan, manakala ayam ialah pengguna, pihak berkepentingan lain dan pengurus. Scrum ialah istilah ragbi, dan peranan ini berpadanan dengan sesi Scrum yang menekankan blok masa, interaksi dan aktiviti berpasukan yang menghasilkan perisian boleh serah."
        }
      },
      {
        id: "sadm-04-q07", type: "tf", diff: 1,
        topic: { zh: "抽样", en: "Sampling", ms: "Pensampelan" },
        q: {
          zh: "抽样的主要目标是确保样本能准确代表总体。",
          en: "The main objective of a sample is to ensure that it represents the overall population accurately.",
          ms: "Objektif utama sesuatu sampel ialah memastikan ia mewakili keseluruhan populasi dengan tepat."
        },
        answer: true,
        explain: {
          zh: "第 38 页在列举 systematic、stratified、random 三种抽样之后指出，抽样的主要目标就是确保样本准确代表总体。若样本不能代表总体，据此得出的访谈或问卷结论就会失真，因此这句话与讲义一致。",
          en: "Page 38 first distinguishes systematic, stratified and random samples and then states that the main objective of a sample is to ensure that it represents the overall population accurately. If the sample does not represent the population, conclusions drawn from interviews or questionnaires will be distorted, so the statement matches the chapter.",
          ms: "Halaman 38 membezakan sampel sistematik, berstrata dan rawak, kemudian menyatakan objektif utama sampel ialah memastikan ia mewakili keseluruhan populasi dengan tepat. Jika sampel tidak mewakili populasi, kesimpulan daripada temu bual atau soal selidik akan tersasar, jadi pernyataan ini menepati bab tersebut."
        }
      },
      {
        id: "sadm-04-q08", type: "fill", diff: 2,
        topic: { zh: "Zachman 框架", en: "Zachman Framework", ms: "Kerangka Zachman" },
        q: {
          zh: "用于企业架构、帮助管理者与用户理解模型并确保整体业务目标转化为成功 IT 项目的框架是______框架。",
          en: "The framework for enterprise architecture that helps managers and users understand the model and ensures overall business goals translate into successful IT projects is the ______ Framework.",
          ms: "Kerangka bagi seni bina perusahaan yang membantu pengurus dan pengguna memahami model serta memastikan matlamat perniagaan keseluruhan diterjemahkan kepada projek IT yang berjaya ialah Kerangka ______."
        },
        answer: ["Zachman","Zachman Framework","kerangka Zachman","扎克曼框架","扎克曼"],
        explain: {
          zh: "第 29 页介绍 Zachman Framework for Enterprise Architecture，说它帮助管理者与用户理解模型，并确保整体业务目标转化为成功的 IT 项目。框架名来自人名，不能换成 Fishbone、Ishikawa 等其它框架名。",
          en: "Page 29 introduces the Zachman Framework for Enterprise Architecture, saying it helps managers and users understand the model and ensures overall business goals translate into successful IT projects. The name comes from a person and cannot be replaced by other frameworks such as fishbone or Ishikawa.",
          ms: "Halaman 29 memperkenalkan Kerangka Zachman bagi Seni Bina Perusahaan, yang membantu pengurus dan pengguna memahami model serta memastikan matlamat perniagaan keseluruhan diterjemahkan kepada projek IT yang berjaya. Nama kerangka ini berasal daripada nama seseorang dan tidak boleh diganti dengan kerangka lain seperti tulang ikan atau Ishikawa."
        }
      }
    ],
    "sadm-05": [
      {
        id: "sadm-05-q01", type: "mcq", diff: 2,
        topic: { zh: "DFD 的用途", en: "Purpose of a DFD", ms: "Tujuan DFD" },
        q: {
          zh: "数据流图（DFD）显示什么、不显示什么？",
          en: "What does a data flow diagram (DFD) show, and what does it not show?",
          ms: "Apakah yang ditunjukkan oleh gambar rajah aliran data (DFD), dan apakah yang tidak ditunjukkannya?"
        },
        opts: [
          { zh: "既显示数据流动，也显示每个进程内部的程序逻辑", en: "It shows both the movement of data and the program logic inside each process", ms: "Ia menunjukkan kedua-dua pergerakan data dan logik program di dalam setiap proses" },
          { zh: "显示系统使用的物理存储设备及其容量", en: "It shows the physical storage devices the system uses and their capacity", ms: "Ia menunjukkan peranti storan fizikal yang digunakan sistem dan kapasitinya" },
          { zh: "显示对象之间按时间顺序交换的消息", en: "It shows the messages exchanged between objects in time order", ms: "Ia menunjukkan mesej yang ditukar antara objek mengikut urutan masa" },
          { zh: "显示数据如何在系统中流动，但不显示程序逻辑或处理步骤", en: "It shows how data moves through the system, but not program logic or processing steps", ms: "Ia menunjukkan bagaimana data bergerak melalui sistem, tetapi tidak menunjukkan logik program atau langkah pemprosesan" }
        ],
        answer: 3,
        explain: {
          zh: "第 6 页说 DFD 显示数据如何流经信息系统，但不显示 program logic 或 processing steps；一组 DFD 构成逻辑模型，说明系统做什么而不是怎么做。说 DFD 显示物理存储设备及其容量的选项，错在物理特征对逻辑模型并不重要；说它显示对象间按时间顺序交换的消息，描述的其实是 UML 顺序图。",
          en: "Page 6 says a DFD shows how data moves through an information system but does not show program logic or processing steps; a set of DFDs provides a logical model of what the system does, not how it does it. Physical storage details are unimportant in a logical model, and the time-ordered messages describe a UML sequence diagram.",
          ms: "Halaman 6 menyatakan DFD menunjukkan bagaimana data bergerak melalui sistem maklumat tetapi tidak menunjukkan logik program atau langkah pemprosesan; satu set DFD membentuk model logik tentang apa yang dilakukan sistem, bukan bagaimana ia melakukannya. Butiran storan fizikal tidak penting dalam model logik, manakala mesej mengikut urutan masa ialah gambar rajah jujukan UML."
        }
      },
      {
        id: "sadm-05-q02", type: "mcq", diff: 2,
        topic: { zh: "上下文图的规则", en: "Context diagram rules", ms: "Peraturan gambar rajah konteks" },
        q: {
          zh: "讲义对绘制上下文图（context diagram）给出了哪条准则？",
          en: "Which guideline does the chapter give for drawing a context diagram?",
          ms: "Garis panduan manakah yang diberikan dalam bab ini untuk melukis gambar rajah konteks?"
        },
        opts: [
          { zh: "在上下文图中画出系统内部的每一个数据存储", en: "Show every internal data store of the system inside the context diagram", ms: "Tunjukkan setiap stor data dalaman sistem di dalam gambar rajah konteks" },
          { zh: "用信息系统的名称作为上下文图中进程的名称", en: "Use the name of the information system as the process name in the context diagram", ms: "Gunakan nama sistem maklumat sebagai nama proses dalam gambar rajah konteks" },
          { zh: "把上下文图画得尽量大，占满多页纸", en: "Draw the context diagram as large as possible so that it fills several pages", ms: "Lukis gambar rajah konteks sebesar mungkin sehingga memenuhi beberapa halaman" },
          { zh: "让上下文图中的每个进程使用相同的名称", en: "Give every process in the context diagram the same name", ms: "Beri setiap proses dalam gambar rajah konteks nama yang sama" }
        ],
        answer: 1,
        explain: {
          zh: "第 13 页的三条准则是：上下文图要能画在一页纸上、用信息系统的名称作为进程名、同一组符号内使用唯一名称；同页还要求不交叉线、每个进程有唯一名称与编号。上下文图把整个系统画成单一进程，只与外部实体交换数据流，所以把内部数据存储全部塞进去的选项不符合它的用途；把图画成多页违反“一页”准则，给所有进程取同名则违反唯一命名。",
          en: "Page 13 gives three guidelines: make the context diagram fit on one page, use the information system's name as the process name, and use unique names within each set of symbols; the same page also forbids crossing lines and requires a unique name and reference number for each process. A context diagram shows the whole system as one process and does not expand internal data stores, so listing every data store inside it is not part of this diagram, while a multi-page drawing violates the one-page rule and identical process names violate unique naming.",
          ms: "Halaman 13 memberikan tiga garis panduan: pastikan gambar rajah konteks muat pada satu halaman, gunakan nama sistem maklumat sebagai nama proses, dan gunakan nama unik dalam setiap set simbol; halaman yang sama juga melarang garis bersilang dan memerlukan nama serta nombor rujukan unik bagi setiap proses. Gambar rajah konteks menunjukkan keseluruhan sistem sebagai satu proses dan tidak memperincikan stor data dalaman, jadi menyenaraikan setiap stor data di dalamnya tidak menepati gambar rajah ini, manakala lukisan berbilang halaman melanggar peraturan satu halaman dan nama proses yang serupa melanggar penamaan unik."
        }
      },
      {
        id: "sadm-05-q03", type: "mcq", diff: 3,
        topic: { zh: "四模型法", en: "Four-model approach", ms: "Pendekatan empat model" },
        q: {
          zh: "关于四模型法（four-model approach），哪种说法正确？",
          en: "Which statement about the four-model approach is correct?",
          ms: "Pernyataan manakah tentang pendekatan empat model yang betul?"
        },
        opts: [
          { zh: "它分别建立现行系统的物理模型与逻辑模型、新系统的逻辑模型与物理模型，唯一缺点是增加了时间与成本", en: "It builds a physical model of the current system, a logical model of the current system, a logical model of the new system and a physical model of the new system, and its only disadvantage is added time and cost", ms: "Ia membina model fizikal sistem semasa, model logik sistem semasa, model logik sistem baharu dan model fizikal sistem baharu, dan satu-satunya kelemahannya ialah tambahan masa dan kos" },
          { zh: "它为新系统建立四个逻辑模型，并且不会增加时间与成本", en: "It builds four logical models of the new system and does not add time or cost", ms: "Ia membina empat model logik bagi sistem baharu dan tidak menambah masa atau kos" },
          { zh: "它取代了数据字典与过程描述的作用", en: "It replaces the role of the data dictionary and process descriptions", ms: "Ia menggantikan peranan kamus data dan penerangan proses" },
          { zh: "只要建立了新系统的物理模型，就必须采用四模型法", en: "Whenever a physical model of the new system is built, the four-model approach must be used", ms: "Setiap kali model fizikal sistem baharu dibina, pendekatan empat model mesti digunakan" }
        ],
        answer: 0,
        explain: {
          zh: "第 41 页：四模型法是现行系统的物理模型与逻辑模型、新系统的逻辑模型与物理模型共四个，唯一缺点是 added time and cost。多走这一步能更透彻地理解现行系统，但它并不取代数据字典或过程描述，也不是强制要求，所以其余三项都不成立。",
          en: "Page 41 describes four models, the current physical, current logical, new logical and new physical, and says the only disadvantage is the added time and cost. The extra step gives analysts a better understanding of the current system, but it neither replaces the data dictionary or process descriptions nor is it mandatory.",
          ms: "Halaman 41 menerangkan empat model, iaitu fizikal semasa, logik semasa, logik baharu dan fizikal baharu, dan menyatakan satu-satunya kelemahannya ialah tambahan masa dan kos. Langkah tambahan ini memberi pemahaman lebih mendalam tentang sistem semasa, tetapi ia tidak menggantikan kamus data atau penerangan proses dan tidak wajib."
        }
      },
      {
        id: "sadm-05-q04", type: "mcq", diff: 2,
        topic: { zh: "决策表规则数", en: "Number of decision table rules", ms: "Bilangan peraturan jadual keputusan" },
        q: {
          zh: "一个有三个条件的决策表，若每个条件都只有真、假两种可能，共有多少条规则？",
          en: "A decision table with three conditions, each of which can only be true or false, has how many rules?",
          ms: "Sesuatu jadual keputusan dengan tiga syarat, yang setiap satunya hanya boleh benar atau palsu, mempunyai berapa peraturan?"
        },
        opts: [
          { zh: "6 条", en: "6 rules", ms: "6 peraturan" },
          { zh: "9 条", en: "9 rules", ms: "9 peraturan" },
          { zh: "8 条", en: "8 rules", ms: "8 peraturan" },
          { zh: "12 条", en: "12 rules", ms: "12 peraturan" }
        ],
        answer: 2,
        explain: {
          zh: "第 37 页说每增加一个条件，规则数就翻倍：一个条件 2 条，两个条件 4 条，三个条件 8 条，即 2 的 3 次方。6、9、12 都不是 2 的幂，无法穷尽三个二值条件的全部组合，所以不能覆盖所有可能结果。",
          en: "Page 37 says the number of rules doubles each time a condition is added: 2 rules for one condition, 4 for two and 8 for three, which is 2 to the power 3. Values such as 6, 9 and 12 are not powers of two and cannot cover every combination of three binary conditions.",
          ms: "Halaman 37 menyatakan bilangan peraturan berganda setiap kali satu syarat ditambah: 2 peraturan untuk satu syarat, 4 untuk dua dan 8 untuk tiga, iaitu 2 kuasa 3. Nilai seperti 6, 9 dan 12 bukan kuasa dua dan tidak dapat meliputi setiap gabungan tiga syarat binari."
        }
      },
      {
        id: "sadm-05-q05", type: "mcq", diff: 1,
        topic: { zh: "数据元素", en: "Data element", ms: "Elemen data" },
        q: {
          zh: "在数据字典中，具有意义的最小数据单位叫什么？",
          en: "In a data dictionary, what is the smallest piece of data that has meaning called?",
          ms: "Dalam kamus data, apakah unit data terkecil yang mempunyai makna dipanggil?"
        },
        opts: [
          { zh: "记录", en: "A record", ms: "Rekod" },
          { zh: "数据存储", en: "A data store", ms: "Stor data" },
          { zh: "数据元素", en: "A data element", ms: "Elemen data" },
          { zh: "功能原语", en: "A functional primitive", ms: "Primitif fungsi" }
        ],
        answer: 2,
        explain: {
          zh: "第 21 页：data element（又称 data item 或 field）是具有意义的最小数据片段；数据元素组合成 record（data structure），记录是相关数据元素的有意义组合。data store 是 DFD 中的存储符号，functional primitive 则是需要用过程描述工具说明的最底层进程。",
          en: "Page 21 defines the data element, also called a data item or field, as the smallest piece of data that has meaning, and says data elements combine into records, also called data structures. A data store is a DFD symbol, and a functional primitive is a lowest-level process described with process description tools.",
          ms: "Halaman 21 mentakrifkan elemen data, yang juga dipanggil item data atau medan, sebagai kepingan data terkecil yang mempunyai makna, dan menyatakan elemen data bergabung menjadi rekod yang juga dipanggil struktur data. Stor data ialah simbol DFD, manakala primitif fungsi ialah proses peringkat terbawah yang diterangkan dengan alat penerangan proses."
        }
      },
      {
        id: "sadm-05-q06", type: "multi", diff: 2,
        topic: { zh: "结构化英语规则", en: "Rules for structured English", ms: "Peraturan Bahasa Inggeris berstruktur" },
        q: {
          zh: "下列哪些是讲义对结构化英语（structured English）提出的规则？",
          en: "Which of the following are rules for structured English given in the chapter?",
          ms: "Antara berikut, yang manakah peraturan bagi Bahasa Inggeris berstruktur dalam bab ini?"
        },
        opts: [
          { zh: "只使用顺序、选择、迭代三种基本结构", en: "Use only the three building blocks of sequence, selection and iteration", ms: "Gunakan hanya tiga blok binaan iaitu urutan, pemilihan dan lelaran" },
          { zh: "用缩进提高可读性", en: "Use indentation for readability", ms: "Gunakan inden untuk kebolehbacaan" },
          { zh: "使用有限词汇，包括数据字典中的标准术语", en: "Use a limited vocabulary, including standard terms from the data dictionary", ms: "Gunakan kosa kata terhad, termasuk istilah piawai daripada kamus data" },
          { zh: "尽量多用同义词，让文字更有变化", en: "Use as many synonyms as possible so that the text varies", ms: "Gunakan sebanyak mungkin sinonim supaya teks lebih pelbagai" },
          { zh: "写入变量声明等详细编程语法", en: "Include detailed programming syntax such as variable declarations", ms: "Sertakan sintaks pengaturcaraan terperinci seperti pengisytiharan pemboleh ubah" }
        ],
        answer: [0,1,2],
        explain: {
          zh: "第 34 页的三条规则是：只用 sequence、selection、iteration 三种 building blocks；用缩进提高可读性；使用有限词汇，即数据字典中的标准术语加上描述处理规则的特定词。结构化英语像伪代码，目的是描述业务逻辑，因此要避免同义词泛滥和具体编程语法。",
          en: "Page 34 gives three rules: use only the building blocks of sequence, selection and iteration; use indentation for readability; and use a limited vocabulary of data dictionary terms plus specific words describing the processing rules. Structured English resembles pseudocode but aims to describe business logic, so synonyms and programming syntax are out of place.",
          ms: "Halaman 34 memberikan tiga peraturan: gunakan hanya blok binaan urutan, pemilihan dan lelaran; gunakan inden untuk kebolehbacaan; dan gunakan kosa kata terhad daripada kamus data serta perkataan khusus yang menerangkan peraturan pemprosesan. Bahasa Inggeris berstruktur menyerupai pseudokod tetapi bertujuan menerangkan logik perniagaan, jadi sinonim berlebihan dan sintaks pengaturcaraan tidak sesuai."
        }
      },
      {
        id: "sadm-05-q07", type: "tf", diff: 2,
        topic: { zh: "DFD 的层次", en: "Levels of DFDs", ms: "Tahap DFD" },
        q: {
          zh: "在一组 DFD 中，上下文图是最详细的图，位于金字塔的底部。",
          en: "In a set of DFDs, the context diagram is the most detailed diagram and sits at the bottom of the pyramid.",
          ms: "Dalam satu set DFD, gambar rajah konteks ialah gambar rajah paling terperinci dan terletak di dasar piramid."
        },
        answer: false,
        explain: {
          zh: "第 43 页把一组 DFD 比作金字塔，context diagram 位于顶端；Diagram 0 是对进程 0 的展开，越往下层越详细，最底层才是 functional primitive。因此上下文图是最不详细的概览图，说它“最详细、在底部”正好颠倒。",
          en: "Page 43 likens a set of DFDs to a pyramid with the context diagram at the top; Diagram 0 explodes process 0, and each lower level is more detailed until functional primitives appear at the bottom. The context diagram is therefore the least detailed overview, so the statement reverses its position.",
          ms: "Halaman 43 mengibaratkan satu set DFD seperti piramid dengan gambar rajah konteks di puncaknya; Diagram 0 memperincikan proses 0, dan setiap tahap yang lebih rendah lebih terperinci sehingga primitif fungsi muncul di dasar. Oleh itu gambar rajah konteks ialah gambaran keseluruhan paling kurang terperinci, dan pernyataan itu menyongsangkan kedudukannya."
        }
      },
      {
        id: "sadm-05-q08", type: "fill", diff: 2,
        topic: { zh: "平衡", en: "Balancing", ms: "Pengimbangan" },
        q: {
          zh: "确保父 DFD 的输入与输出数据流在子 DFD 中得到保持的技术，称为______。",
          en: "The technique that ensures the input and output data flows of a parent DFD are maintained on its child DFD is called ______.",
          ms: "Teknik yang memastikan aliran data input dan output bagi DFD induk dikekalkan pada DFD anaknya dipanggil ______."
        },
        answer: ["balancing","balancing technique","pengimbangan","平衡","平衡原则"],
        explain: {
          zh: "第 19 页把 balancing 定义为确保父 DFD 的输入与输出数据流在子 DFD 上得以保持；与它并列的是 leveling，即用一系列越来越详细的 DFD 来描述系统（也叫 exploding、partitioning、decomposing）。两者都是画低层图时必须使用的技术，但关注点不同。",
          en: "Page 19 defines balancing as ensuring that the input and output data flows of the parent DFD are maintained on the child DFD. Leveling, the companion technique, uses a series of increasingly detailed DFDs and is also called exploding, partitioning or decomposing. Both are required when drawing lower-level diagrams but address different concerns.",
          ms: "Halaman 19 mentakrifkan pengimbangan sebagai memastikan aliran data input dan output DFD induk dikekalkan pada DFD anak. Penyelarasan peringkat, teknik pasangannya, menggunakan siri DFD yang semakin terperinci dan juga dipanggil pengeksploitan, pempartisian atau penguraian. Kedua-duanya diperlukan semasa melukis gambar rajah peringkat rendah tetapi menangani perkara berbeza."
        }
      }
    ],
    "sadm-06": [
      {
        id: "sadm-06-q01", type: "mcq", diff: 1,
        topic: { zh: "对象、属性与方法的类比", en: "Object, attribute and method analogy", ms: "Analogi objek, atribut dan kaedah" },
        q: {
          zh: "按讲义的类比，对象类似名词，属性类似______，方法则类似______。",
          en: "In the chapter's analogy, objects are like nouns, attributes are like ______, and methods resemble ______.",
          ms: "Dalam analogi bab ini, objek seperti kata nama, atribut seperti ______, dan kaedah menyerupai ______."
        },
        opts: [
          { zh: "形容词；动词", en: "adjectives; verbs", ms: "kata sifat; kata kerja" },
          { zh: "动词；形容词", en: "verbs; adjectives", ms: "kata kerja; kata sifat" },
          { zh: "副词；名词", en: "adverbs; nouns", ms: "kata adverba; kata nama" },
          { zh: "代词；介词", en: "pronouns; prepositions", ms: "kata ganti nama; kata sendi nama" }
        ],
        answer: 0,
        explain: {
          zh: "讲义说对象像名词，属性像形容词，用来描述对象的特征；方法像动词，说明对象做什么、怎么做。把两者对调的选项，以及使用副词、代词、介词等讲义并未涉及的词类的选项，都不能替换。",
          en: "The chapter says objects are like nouns, attributes are like adjectives that describe an object's characteristics, and methods resemble verbs describing what an object does and how. An option that swaps the two roles, and options using word classes such as adverbs, pronouns and prepositions that never appear in this analogy, cannot replace them.",
          ms: "Bab ini menyatakan objek seperti kata nama, atribut seperti kata sifat yang menerangkan ciri objek, dan kaedah menyerupai kata kerja yang menerangkan apa dan bagaimana objek melakukannya. Pilihan yang menyongsangkan kedua-duanya, dan pilihan yang menggunakan kelas kata seperti adverba, kata ganti nama dan kata sendi nama yang tidak terdapat dalam analogi ini, tidak boleh menggantikannya."
        }
      },
      {
        id: "sadm-06-q02", type: "mcq", diff: 2,
        topic: { zh: "类与实例", en: "Classes and instances", ms: "Kelas dan instans" },
        q: {
          zh: "关于类（class），讲义的说法是什么？",
          en: "What does the chapter say about a class?",
          ms: "Apakah yang dinyatakan dalam bab ini tentang kelas?"
        },
        opts: [
          { zh: "同一类中的所有对象必须拥有与父类完全相同数量的属性", en: "All objects in a class must have exactly the same number of attributes as their parent class", ms: "Semua objek dalam sesuatu kelas mesti mempunyai bilangan atribut yang sama dengan kelas induknya" },
          { zh: "一个类不能再细分为子类", en: "A class can never be divided into subclasses", ms: "Sesuatu kelas tidak boleh dibahagikan kepada subkelas" },
          { zh: "同一类的对象必须存放在同一台服务器的同一个数据存储中", en: "Objects of the same class must be stored in one data store on a single server", ms: "Objek dalam kelas yang sama mesti disimpan dalam satu stor data pada satu pelayan" },
          { zh: "同一类中的所有对象共享共同的属性与方法", en: "All objects within a class share common attributes and methods", ms: "Semua objek dalam sesuatu kelas berkongsi atribut dan kaedah yang sama" }
        ],
        answer: 3,
        explain: {
          zh: "第 15 页：对象属于某个 group 或 category，称为 class；同一类中的所有对象共享共同的属性与方法；类可再分为 subclass，也可有 superclass。认为类不能再细分、或必须与父类属性数量相同的选项，与“类可有子类”矛盾；要求同类对象存放在同一数据存储的选项，则把逻辑上的类与物理存储位置混为一谈。",
          en: "Page 15 says an object belongs to a group or category called a class, all objects within a class share common attributes and methods, and classes may have subclasses and a superclass. Claiming that a class cannot be subdivided or must have the same attribute count as its parent contradicts the existence of subclasses, and requiring all objects of a class to share one data store confuses a logical class with physical storage.",
          ms: "Halaman 15 menyatakan objek tergolong dalam kumpulan atau kategori yang dipanggil kelas, semua objek dalam kelas berkongsi atribut dan kaedah yang sama, dan kelas boleh mempunyai subkelas serta kelas induk. Dakwaan bahawa kelas tidak boleh dibahagikan atau mesti mempunyai bilangan atribut yang sama dengan kelas induk bercanggah dengan kewujudan subkelas, manakala keperluan semua objek dalam satu kelas berkongsi satu stor data mengelirukan kelas logik dengan storan fizikal."
        }
      },
      {
        id: "sadm-06-q03", type: "mcq", diff: 1,
        topic: { zh: "用例的符号", en: "Use case symbol", ms: "Simbol kes penggunaan" },
        q: {
          zh: "在 UML 用例建模中，用例（use case）用什么符号表示？",
          en: "In UML use case modeling, how is a use case represented?",
          ms: "Dalam pemodelan kes penggunaan UML, bagaimanakah kes penggunaan diwakili?"
        },
        opts: [
          { zh: "一个顶部写类名的矩形", en: "A rectangle with the class name at the top", ms: "Sebuah segi empat tepat dengan nama kelas di bahagian atas" },
          { zh: "一个带标签的椭圆，标签描述动作或事件", en: "An oval with a label that describes the action or event", ms: "Sebuah bujur dengan label yang menerangkan tindakan atau peristiwa" },
          { zh: "一条转移线左端的小实心圆", en: "A small solid circle at the left end of a transition line", ms: "Sebuah bulatan pejal kecil di hujung kiri garis peralihan" },
          { zh: "一个把流程分成两条路径的菱形", en: "A diamond that splits the flow into two paths", ms: "Sebuah rombus yang memecahkan aliran kepada dua laluan" }
        ],
        answer: 1,
        explain: {
          zh: "第 21 页说明用例的符号是带标签的 oval，标签描述动作或事件，用例还可以与其他用例交互。矩形加类名、属性和方法是类图；转移线左端的实心小圆是状态转移图的初始状态；菱形在活动图中表示分支判断，都不是用例。",
          en: "Page 21 says the symbol for a use case is an oval with a label describing the action or event, and use cases can interact with other use cases. A rectangle with the class name, attributes and methods is a class diagram, the small solid circle is an initial state in a state transition diagram, and a diamond branches the flow in an activity diagram.",
          ms: "Halaman 21 menyatakan simbol kes penggunaan ialah bujur dengan label yang menerangkan tindakan atau peristiwa, dan kes penggunaan boleh berinteraksi dengan kes penggunaan lain. Segi empat tepat dengan nama kelas, atribut dan kaedah ialah gambar rajah kelas, bulatan pejal kecil ialah keadaan awal dalam gambar rajah peralihan keadaan, dan rombus mencabang aliran dalam gambar rajah aktiviti."
        }
      },
      {
        id: "sadm-06-q04", type: "mcq", diff: 2,
        topic: { zh: "类图的内容", en: "Class diagram contents", ms: "Kandungan gambar rajah kelas" },
        q: {
          zh: "在 UML 类图中，每个类画成一个矩形，其中内容如何排列？",
          en: "In a UML class diagram, each class appears as a rectangle. How is its content arranged?",
          ms: "Dalam gambar rajah kelas UML, setiap kelas muncul sebagai segi empat tepat. Bagaimanakah kandungannya disusun?"
        },
        opts: [
          { zh: "顶部是方法，下面是类名，最后是属性", en: "The methods at the top, then the class name, and finally the attributes", ms: "Kaedah di bahagian atas, kemudian nama kelas, dan akhir sekali atribut" },
          { zh: "用生命线和控制焦点代替类名", en: "Use lifelines and focuses of control instead of a class name", ms: "Gunakan garis hayat dan fokus kawalan menggantikan nama kelas" },
          { zh: "写出演员的名字和系统边界", en: "Show the actor names and the system boundary", ms: "Tunjukkan nama aktor dan sempadan sistem" },
          { zh: "顶部是类名，下面是该类的属性，再下面是方法", en: "The class name at the top, followed by the class's attributes and then its methods", ms: "Nama kelas di bahagian atas, diikuti atribut kelas dan kemudian kaedahnya" }
        ],
        answer: 3,
        explain: {
          zh: "第 33 页：每个类是一个矩形，顶部是 class name，随后是 class 的 attributes 与 methods；类图最终演化为物理模型并成为可运行的系统。生命线与控制焦点属于顺序图，演员与系统边界属于用例图，都不是类图矩形的内部结构。",
          en: "Page 33 says each class appears as a rectangle with the class name at the top, followed by the class's attributes and methods, and that the class diagram evolves into a physical model and finally a functioning system. Lifelines and focuses belong to sequence diagrams, while actors and the system boundary belong to use case diagrams.",
          ms: "Halaman 33 menyatakan setiap kelas muncul sebagai segi empat tepat dengan nama kelas di atas, diikuti atribut dan kaedahnya, dan gambar rajah kelas akhirnya berkembang menjadi model fizikal serta sistem yang berfungsi. Garis hayat dan fokus kawalan tergolong dalam gambar rajah jujukan, manakala aktor dan sempadan sistem dalam gambar rajah kes penggunaan."
        }
      },
      {
        id: "sadm-06-q05", type: "mcq", diff: 2,
        topic: { zh: "状态转移图的符号", en: "State transition symbols", ms: "Simbol peralihan keadaan" },
        q: {
          zh: "在状态转移图中，左侧的小圆圈与右侧带空心边框的圆圈分别表示什么？",
          en: "In a state transition diagram, what do the small circle on the left and the circle with a hollow border on the right represent?",
          ms: "Dalam gambar rajah peralihan keadaan, apakah yang diwakili oleh bulatan kecil di sebelah kiri dan bulatan bertepi kosong di sebelah kanan?"
        },
        opts: [
          { zh: "最终状态；初始状态", en: "The final state; the initial state", ms: "Keadaan akhir; keadaan awal" },
          { zh: "初始状态；最终状态", en: "The initial state; the final state", ms: "Keadaan awal; keadaan akhir" },
          { zh: "演员；用例", en: "An actor; a use case", ms: "Aktor; kes penggunaan" },
          { zh: "消息；生命线", en: "A message; a lifeline", ms: "Mesej; garis hayat" }
        ],
        answer: 1,
        explain: {
          zh: "第 46 页：左边的小圆是 initial state，即对象第一次与系统交互的点；从左到右的线表示方向，并说明引起状态转移的动作或事件；右边空心边框的圆是 final state。其余选项把不同 UML 图的符号混了进来。",
          en: "Page 46 explains that the small circle on the left is the initial state, the point where the object first interacts with the system, the lines read left to right show direction and the action or event causing each transition, and the circle with a hollow border on the right is the final state.",
          ms: "Halaman 46 menerangkan bulatan kecil di kiri ialah keadaan awal, iaitu titik objek mula berinteraksi dengan sistem, garis dari kiri ke kanan menunjukkan arah serta tindakan atau peristiwa yang menyebabkan peralihan, dan bulatan bertepi kosong di kanan ialah keadaan akhir."
        }
      },
      {
        id: "sadm-06-q06", type: "multi", diff: 2,
        topic: { zh: "动态建模工具", en: "Dynamic modeling tools", ms: "Alat pemodelan dinamik" },
        q: {
          zh: "下列哪些属于讲义所说的动态建模工具？",
          en: "Which of the following are dynamic modeling tools according to the chapter?",
          ms: "Antara berikut, yang manakah alat pemodelan dinamik menurut bab ini?"
        },
        opts: [
          { zh: "状态转移图", en: "State transition diagram", ms: "Gambar rajah peralihan keadaan" },
          { zh: "活动图", en: "Activity diagram", ms: "Gambar rajah aktiviti" },
          { zh: "类图", en: "Class diagram", ms: "Gambar rajah kelas" },
          { zh: "数据流图", en: "Data flow diagram", ms: "Gambar rajah aliran data" },
          { zh: "顺序图", en: "Sequence diagram", ms: "Gambar rajah jujukan" }
        ],
        answer: [0,1,4],
        explain: {
          zh: "第 51 页明确把 sequence diagram、state transition diagram、activity diagram 列为 dynamic modeling tools，用来理解对象如何行为与交互。类图描述静态结构并最终演化为物理模型；数据流图属于结构化分析工具，根本不是 UML 的动态图。",
          en: "Page 51 names the sequence diagram, state transition diagram and activity diagram as dynamic modeling tools that help an analyst understand how objects behave and interact. A class diagram describes static structure and evolves into a physical model, while a data flow diagram is a structured analysis tool, not a UML dynamic diagram.",
          ms: "Halaman 51 menamakan gambar rajah jujukan, gambar rajah peralihan keadaan dan gambar rajah aktiviti sebagai alat pemodelan dinamik untuk memahami tingkah laku dan interaksi objek. Gambar rajah kelas menerangkan struktur statik dan berkembang menjadi model fizikal, manakala gambar rajah aliran data ialah alat analisis berstruktur, bukan gambar rajah dinamik UML."
        }
      },
      {
        id: "sadm-06-q07", type: "tf", diff: 1,
        topic: { zh: "UML 的用途", en: "Purpose of UML", ms: "Tujuan UML" },
        q: {
          zh: "UML 主要用于支持面向对象的系统分析并建立对象模型。",
          en: "The UML is mainly used to support object-oriented systems analysis and to develop object models.",
          ms: "UML terutamanya digunakan untuk menyokong analisis sistem berorientasikan objek dan membangunkan model objek."
        },
        answer: true,
        explain: {
          zh: "第 19 页说 UML 用一套符号图形化地表示系统中的各种组件与关系，主要用于支持面向对象的系统分析并建立对象模型。同一章随后用用例图、类图、顺序图、状态转移图和活动图展开这些模型，正说明这一用途。",
          en: "Page 19 says the UML uses a set of symbols to represent graphically the components and relationships within a system and is mainly used to support object-oriented systems analysis and to develop object models. The chapter then applies it through use case, class, sequence, state transition and activity diagrams.",
          ms: "Halaman 19 menyatakan UML menggunakan satu set simbol untuk mewakili komponen dan hubungan dalam sistem secara grafik dan terutamanya digunakan untuk menyokong analisis sistem berorientasikan objek serta membangunkan model objek. Bab ini kemudian menggunakannya melalui gambar rajah kes penggunaan, kelas, jujukan, peralihan keadaan dan aktiviti."
        }
      },
      {
        id: "sadm-06-q08", type: "fill", diff: 2,
        topic: { zh: "演员", en: "Actor", ms: "Aktor" },
        q: {
          zh: "在 UML 用例建模中，位于系统边界之外、与系统交互的人或外部系统称为______。",
          en: "In UML use case modeling, a person or external system outside the system boundary that interacts with the system is called an ______.",
          ms: "Dalam pemodelan kes penggunaan UML, seseorang atau sistem luar di luar sempadan sistem yang berinteraksi dengan sistem dipanggil ______."
        },
        answer: ["actor","aktor","pelaku","参与者","角色"],
        explain: {
          zh: "第 21 与 23 页把 actor 与用例、系统边界并列：先确定系统边界，再把用例放到图上，加入 actors，并画出它们与用例的关系。因此演员是站在系统之外与系统交互的角色，不是系统内部的类或对象。",
          en: "Pages 21 and 23 place actors alongside use cases and the system boundary: after identifying the system boundary, you place the use cases on the diagram, add the actors and show the relationships. An actor is therefore a role outside the system that interacts with it, not an internal class or object.",
          ms: "Halaman 21 dan 23 meletakkan aktor bersama kes penggunaan dan sempadan sistem: selepas mengenal pasti sempadan sistem, kes penggunaan diletakkan pada gambar rajah, aktor ditambah dan hubungan ditunjukkan. Oleh itu aktor ialah peranan di luar sistem yang berinteraksi dengannya, bukan kelas atau objek dalaman."
        }
      }
    ],
    "sadm-07": [
      {
        id: "sadm-07-q01", type: "mcq", diff: 2,
        topic: { zh: "外包收费模式", en: "Outsourcing fee models", ms: "Model bayaran penyumberan luar" },
        q: {
          zh: "供应商按应用程序处理的事务或操作量收费，这种外包收费模式叫什么？",
          en: "A vendor charges a fee based on the volume of transactions or operations performed by the application. What is this outsourcing fee model called?",
          ms: "Pembekal mengenakan bayaran berdasarkan jumlah transaksi atau operasi yang diproses oleh aplikasi. Apakah nama model bayaran penyumberan luar ini?"
        },
        opts: [
          { zh: "按使用量（交易）收费模式", en: "Usage (transaction) model", ms: "Model penggunaan (transaksi)" },
          { zh: "固定收费模式", en: "Fixed fee model", ms: "Model bayaran tetap" },
          { zh: "订阅收费模式", en: "Subscription model", ms: "Model langganan" },
          { zh: "站点许可模式", en: "Site licence model", ms: "Model lesen tapak" }
        ],
        answer: 0,
        explain: {
          zh: "第 12 页区分三种模式：fixed fee 是按约定服务水平与用户支持的固定费用；subscription 按可访问应用的用户数或工作站数变动；usage 或 transaction 才按交易量或操作量收费。按站点收取许可费的模式不在讲义列出的三种模式之内。",
          en: "Page 12 distinguishes three models: a fixed fee based on a specified level of service and user support, a subscription fee that varies with the number of users or workstations, and a usage or transaction model charged by transaction volume. A site licence is not one of the three models listed.",
          ms: "Halaman 12 membezakan tiga model: bayaran tetap berdasarkan tahap perkhidmatan dan sokongan pengguna yang ditetapkan, bayaran langganan yang berubah mengikut bilangan pengguna atau stesen kerja, dan model penggunaan atau transaksi yang dikenakan mengikut jumlah transaksi. Lesen tapak bukan salah satu daripada tiga model itu."
        }
      },
      {
        id: "sadm-07-q02", type: "mcq", diff: 2,
        topic: { zh: "评估与选择团队", en: "Evaluation and selection team", ms: "Pasukan penilaian dan pemilihan" },
        q: {
          zh: "评估与选择团队的首要目标是什么？",
          en: "What is the primary objective of the evaluation and selection team?",
          ms: "Apakah objektif utama pasukan penilaian dan pemilihan?"
        },
        opts: [
          { zh: "为推荐的产品包设计用户界面", en: "Design the user interface for the recommended package", ms: "Reka bentuk antara muka pengguna bagi pakej yang disyorkan" },
          { zh: "与每个供应商谈判尽可能低的价格", en: "Negotiate the lowest possible price with every vendor", ms: "Rundingkan harga serendah mungkin dengan setiap pembekal" },
          { zh: "排除不满足需求的方案，给可行方案排序，并把可行方案提交管理层做最终决定", en: "Eliminate alternatives that will not meet requirements, rank the feasible ones, and present the viable alternatives to management for a final decision", ms: "Hapuskan alternatif yang tidak memenuhi keperluan, susun kedudukan alternatif yang boleh dilaksanakan, dan kemukakan alternatif yang berdaya maju kepada pengurusan untuk keputusan akhir" },
          { zh: "为定制方案编写程序代码", en: "Write the program code for the custom solution", ms: "Tulis kod program bagi penyelesaian tersuai" }
        ],
        answer: 2,
        explain: {
          zh: "第 20 页：团队的首要目标是排除不能满足需求的替代方案、给可行方案排序，再把可行的备选方案提交管理层做最终决定。设计界面和编写代码属于后续设计与实施阶段，压价是采购谈判，都不是该团队的首要目标。",
          en: "Page 20 says the primary objective is to eliminate alternatives that will not meet requirements, rank the feasible ones and present the viable alternatives to management for a final decision. Interface design and coding belong to later design and implementation, and price negotiation is procurement, not this team's primary objective.",
          ms: "Halaman 20 menyatakan objektif utama ialah menghapuskan alternatif yang tidak memenuhi keperluan, menyusun kedudukan alternatif yang boleh dilaksanakan dan mengemukakannya kepada pengurusan untuk keputusan akhir. Reka bentuk antara muka dan penulisan kod tergolong dalam fasa reka bentuk dan pelaksanaan kemudian, manakala rundingan harga ialah perolehan."
        }
      },
      {
        id: "sadm-07-q03", type: "mcq", diff: 2,
        topic: { zh: "系统需求文档", en: "System requirements document", ms: "Dokumen keperluan sistem" },
        q: {
          zh: "系统需求文档（又称软件需求规格说明书）为什么被比作合同？",
          en: "Why is the system requirements document, also called the software requirements specification, described as being like a contract?",
          ms: "Mengapakah dokumen keperluan sistem, yang juga dipanggil spesifikasi keperluan perisian, disifatkan seperti kontrak?"
        },
        opts: [
          { zh: "因为它是一个用户可以在设计开始前试用的可运行原型", en: "Because it is a working prototype that users can try before design begins", ms: "Kerana ia ialah prototaip berfungsi yang boleh dicuba pengguna sebelum reka bentuk bermula" },
          { zh: "因为它是系统实施完成后才提交的最终报告", en: "Because it is the final report submitted only after implementation is complete", ms: "Kerana ia ialah laporan akhir yang dikemukakan hanya selepas pelaksanaan selesai" },
          { zh: "因为它包含新系统的需求、考虑过的替代方案，并向管理层提出明确建议", en: "Because it contains the requirements, describes the alternatives considered and makes a specific recommendation to management", ms: "Kerana ia mengandungi keperluan, menerangkan alternatif yang dipertimbangkan dan membuat cadangan khusus kepada pengurusan" },
          { zh: "因为它是列明允许使用软件的用户数的法律许可", en: "Because it is a legal licence stating how many users may run the software", ms: "Kerana ia ialah lesen sah yang menyatakan berapa banyak pengguna boleh menjalankan perisian" }
        ],
        answer: 2,
        explain: {
          zh: "第 30 页：该文档包含新系统的需求、描述考虑过的替代方案并给出具体建议，因此像一份合同；它还要组织得便于阅读和使用。原型是可运行模型，最终报告出现在实施之后，用户许可属于软件许可协议，三者都不是它。",
          en: "Page 30 says the document contains the requirements, describes the alternatives considered and makes a specific recommendation, which is why it is like a contract; its format should also make it easy to read and use. A prototype is a working model, the final report comes after implementation, and a user licence is a separate licence agreement.",
          ms: "Halaman 30 menyatakan dokumen itu mengandungi keperluan, menerangkan alternatif yang dipertimbangkan dan membuat cadangan khusus, sebab itulah ia seperti kontrak; formatnya juga perlu mudah dibaca dan digunakan. Prototaip ialah model berfungsi, laporan akhir muncul selepas pelaksanaan, dan lesen pengguna ialah perjanjian lesen berasingan."
        }
      },
      {
        id: "sadm-07-q04", type: "mcq", diff: 2,
        topic: { zh: "系统设计的可靠性", en: "Reliability in design", ms: "Kebolehpercayaan reka bentuk" },
        q: {
          zh: "讲义认为系统在什么情况下才算可靠（reliable）？",
          en: "When does the chapter consider a system reliable?",
          ms: "Bilakah sesuatu sistem dianggap boleh dipercayai menurut bab ini?"
        },
        opts: [
          { zh: "能处理输入错误、处理错误、硬件故障和人为失误", en: "It handles input errors, processing errors, hardware failures and human mistakes", ms: "Ia mengendalikan ralat input, ralat pemprosesan, kegagalan perkakasan dan kesilapan manusia" },
          { zh: "能支持业务需求并满足用户需要", en: "It supports business requirements and meets user needs", ms: "Ia menyokong keperluan perniagaan dan memenuhi keperluan pengguna" },
          { zh: "灵活、可扩展且易于修改", en: "It is flexible, scalable and easily modified", ms: "Ia fleksibel, boleh dilanjutkan dan mudah diubah suai" },
          { zh: "采用模块化设计，每个模块只执行单一功能", en: "It uses a modular design in which each module performs a single function", ms: "Ia menggunakan reka bentuk modular yang setiap modul melaksanakan satu fungsi" }
        ],
        answer: 0,
        explain: {
          zh: "第 34 页给出三个定义：effective 是支持业务需求并满足用户需要；reliable 是能处理输入错误、处理错误、硬件故障或人为失误；maintainable 是灵活、可扩展、易于修改。模块化设计属于架构上的建议，不能等同于可靠。",
          en: "Page 34 gives three definitions: a system is effective if it supports business requirements and meets user needs, reliable if it handles input errors, processing errors, hardware failures or human mistakes, and maintainable if it is flexible, scalable and easily modified. The modular design option is an architecture guideline, not the definition of reliability.",
          ms: "Halaman 34 memberikan tiga takrif: sistem berkesan jika menyokong keperluan perniagaan dan memenuhi keperluan pengguna, boleh dipercayai jika mengendalikan ralat input, ralat pemprosesan, kegagalan perkakasan atau kesilapan manusia, dan mudah diselenggara jika fleksibel, boleh dilanjutkan serta mudah diubah suai. Reka bentuk modular ialah garis panduan seni bina, bukan takrif kebolehpercayaan."
        }
      },
      {
        id: "sadm-07-q05", type: "mcq", diff: 2,
        topic: { zh: "数据设计准则", en: "Data design guidelines", ms: "Garis panduan data" },
        q: {
          zh: "讲义在系统设计准则中对数据提出了哪一条要求？",
          en: "Which data guideline does the chapter give for systems design?",
          ms: "Garis panduan data manakah yang diberikan dalam bab ini untuk reka bentuk sistem?"
        },
        opts: [
          { zh: "每周集中批量录入一次数据以减少网络流量", en: "Enter data once a week in large batches to reduce network traffic", ms: "Masukkan data sekali seminggu secara kelompok besar untuk mengurangkan trafik rangkaian" },
          { zh: "允许任何用户修改关键值，只要每月汇报一次", en: "Allow any user to change critical values as long as the change is reported monthly", ms: "Benarkan mana-mana pengguna mengubah nilai kritikal asalkan perubahan dilaporkan setiap bulan" },
          { zh: "在每个模块中保存全部数据的重复副本以避免共享", en: "Keep duplicate copies of all data in every module to avoid sharing", ms: "Simpan salinan pendua semua data dalam setiap modul untuk mengelakkan perkongsian" },
          { zh: "尽早录入数据、录入时即校验，并记录对关键值的每次录入或修改（审计线索）", en: "Enter data as soon as possible, verify it as it is entered, and log every entry or change to critical values as an audit trail", ms: "Masukkan data secepat mungkin, sahkan semasa dimasukkan, dan catat setiap kemasukan atau perubahan nilai kritikal sebagai jejak audit" }
        ],
        answer: 3,
        explain: {
          zh: "第 36 至 37 页的数据准则包括：尽早录入、录入时校验、尽量自动录入、控制录入权限并用 audit trail 记录关键值的每次改变、只录入一次、避免数据重复。其余三项分别违反及时性、权限控制和“只录入一次、避免重复”的要求。",
          en: "Pages 36 and 37 list entering data as soon as possible, verifying it on entry, using automated entry, controlling access and logging changes to critical values as an audit trail, entering data once and avoiding duplication. The other options violate timeliness, access control and the enter-once, avoid-duplication rules.",
          ms: "Halaman 36 dan 37 menyenaraikan kemasukan data secepat mungkin, pengesahan semasa kemasukan, kemasukan automatik, kawalan akses serta pencatatan perubahan nilai kritikal sebagai jejak audit, kemasukan sekali sahaja dan pengelakan pertindihan. Pilihan lain melanggar ketepatan masa, kawalan akses dan peraturan masuk sekali sahaja."
        }
      },
      {
        id: "sadm-07-q06", type: "multi", diff: 2,
        topic: { zh: "购买软件包的优点", en: "Advantages of a software package", ms: "Kelebihan pakej perisian" },
        q: {
          zh: "与自行开发相比，下列哪些是购买软件包的优点？",
          en: "Compared with in-house development, which of the following are advantages of purchasing a software package?",
          ms: "Berbanding pembangunan dalaman, yang manakah kelebihan membeli pakej perisian?"
        },
        opts: [
          { zh: "未来的升级由供应商提供", en: "Future upgrades are provided by the vendor", ms: "Peningkatan pada masa hadapan disediakan oleh pembekal" },
          { zh: "可以完全控制源代码和每一个功能", en: "Complete control over the source code and every feature", ms: "Kawalan penuh ke atas kod sumber dan setiap ciri" },
          { zh: "软件包一定能完全匹配企业的独特需求", en: "The package always matches the company's unique requirements exactly", ms: "Pakej sentiasa menepati keperluan unik syarikat dengan tepat" },
          { zh: "成本更低、实施所需时间更少", en: "Lower costs and less time to implement", ms: "Kos lebih rendah dan masa pelaksanaan lebih singkat" },
          { zh: "有经过验证的可靠性与性能基准", en: "Proven reliability and performance benchmarks", ms: "Kebolehpercayaan dan penanda aras prestasi yang telah terbukti" }
        ],
        answer: [0,3,4],
        explain: {
          zh: "第 17 页列出的优点包括成本更低、实施更快、有经过验证的可靠性与性能基准、所需技术人员更少、供应商提供升级，以及可以参考其他公司的使用经验，供应商提供升级也是其中一项。完全控制源代码是自研的优点；而“软件包天然匹配独特需求”与自研的首要理由——满足独特业务需求——正好相反。",
          en: "Page 17 lists lower costs, less implementation time, proven reliability and performance benchmarks, fewer technical staff, vendor-provided upgrades and input from other companies. Complete control of the source code is an in-house advantage, and the claim that a package always matches unique requirements contradicts in-house development's goal of satisfying unique business requirements.",
          ms: "Halaman 17 menyenaraikan kos lebih rendah, masa pelaksanaan lebih singkat, kebolehpercayaan dan penanda aras prestasi yang terbukti, keperluan kakitangan teknikal yang lebih sedikit, peningkatan daripada pembekal dan input daripada syarikat lain. Kawalan penuh kod sumber ialah kelebihan pembangunan dalaman, manakala dakwaan pakej sentiasa menepati keperluan unik bercanggah dengan justifikasi utama pembangunan dalaman."
        }
      },
      {
        id: "sadm-07-q07", type: "tf", diff: 2,
        topic: { zh: "离岸外包的风险", en: "Risks of offshore outsourcing", ms: "Risiko penyumberan luar luar pesisir" },
        q: {
          zh: "讲义认为离岸外包之所以被采用，主要是因为它消除了国内外包特有的所有风险。",
          en: "The chapter says offshore outsourcing is chosen mainly because it removes all the unique risks that domestic outsourcing carries.",
          ms: "Bab ini menyatakan penyumberan luar luar pesisir dipilih terutamanya kerana ia menghapuskan semua risiko unik yang dibawa oleh penyumberan luar domestik."
        },
        answer: false,
        explain: {
          zh: "第 14 页说离岸外包的主要理由与国内外包相同，都是降低底线成本；但离岸外包同时带来一些独特的风险与顾虑。因此它既不是为了消除风险，也不可能消除全部风险，这句话把“带来独特风险”错说成“消除风险”。",
          en: "Page 14 says the main reason for offshore outsourcing is the same as for domestic outsourcing, lower bottom-line costs, but offshore outsourcing also involves some unique risks and concerns. It neither aims to remove risk nor can it remove all risk, so the statement inverts the chapter's point.",
          ms: "Halaman 14 menyatakan sebab utama penyumberan luar luar pesisir sama dengan penyumberan luar domestik, iaitu kos garis bawah yang lebih rendah, tetapi ia juga membawa risiko dan kebimbangan unik. Ia bukan bertujuan menghapuskan risiko dan tidak mungkin menghapuskan semua risiko, jadi pernyataan itu menyongsangkan maksud bab."
        }
      },
      {
        id: "sadm-07-q08", type: "fill", diff: 1,
        topic: { zh: "软件即服务", en: "Software as a Service", ms: "Perisian sebagai perkhidmatan" },
        q: {
          zh: "把软件当作服务、通过互联网交付而不是作为产品出售的模式，英文缩写是______。",
          en: "The model that delivers software as a service over the Internet rather than selling it as a product is abbreviated ______.",
          ms: "Model yang menyampaikan perisian sebagai perkhidmatan melalui Internet dan bukan menjualnya sebagai produk disingkatkan sebagai ______."
        },
        answer: ["SaaS","saas","software as a service","perisian sebagai perkhidmatan","软件即服务"],
        explain: {
          zh: "第 7 页以 Software as a Service（SaaS）作为互联网影响下的第一种开发策略，并给出到 2011 年 25% 的新商业软件将以服务方式部署、SaaS 产业价值将增至 400 亿美元的数字。它强调的是把软件当作服务而不是产品。",
          en: "Page 7 introduces Software as a Service (SaaS) as the first development strategy shaped by the Internet, with the projection that 25 percent of new business software would be deployed as a service by 2011 and the SaaS industry would grow to 40 billion dollars. The point is software as a service, not as a product.",
          ms: "Halaman 7 memperkenalkan Perisian sebagai Perkhidmatan (SaaS) sebagai strategi pembangunan pertama yang dibentuk oleh Internet, dengan unjuran bahawa 25 peratus perisian perniagaan baharu akan dilaksanakan sebagai perkhidmatan menjelang 2011 dan industri SaaS akan berkembang kepada 40 bilion dolar. Intinya ialah perisian sebagai perkhidmatan, bukan produk."
        }
      }
    ],
    "sadm-10": [
      {
        id: "sadm-10-q01", type: "mcq", diff: 1,
        topic: { zh: "可扩展性的别称", en: "Extensibility", ms: "Kebolehlanjutan" },
        q: {
          zh: "讲义把可扩展性（scalability）又称为什么？",
          en: "What else does the chapter call scalability?",
          ms: "Apakah nama lain bagi kebolehlanjutan dalam bab ini?"
        },
        opts: [
          { zh: "可用性（availability）", en: "Availability", ms: "Ketersediaan" },
          { zh: "可延伸性（extensibility）", en: "Extensibility", ms: "Kebolehlanjutan (extensibility)" },
          { zh: "可维护性（maintainability）", en: "Maintainability", ms: "Kebolehselenggaraan" },
          { zh: "可靠性（reliability）", en: "Reliability", ms: "Kebolehpercayaan" }
        ],
        answer: 1,
        explain: {
          zh: "第 7 页：scalability 又称 extensibility，指系统能容易地扩展、改变或缩减规模以适应企业不断变化的需要，对按量计费的交易处理系统尤其重要。其余三个词分别指持续可用、易于维护和稳定可靠，不是 scalability 的同义词。",
          en: "Page 7 says scalability, also called extensibility, refers to a system's ability to expand, change or downsize easily to meet changing business needs, and is especially important for volume-rated systems such as transaction processing. Availability, maintainability and reliability are different qualities.",
          ms: "Halaman 7 menyatakan kebolehlanjutan, yang juga dipanggil extensibility, merujuk keupayaan sistem untuk berkembang, berubah atau mengecil dengan mudah bagi memenuhi keperluan perniagaan yang berubah, dan amat penting bagi sistem berkadar isipadu seperti pemprosesan transaksi. Ketersediaan, kebolehselenggaraan dan kebolehpercayaan ialah sifat yang berbeza."
        }
      },
      {
        id: "sadm-10-q02", type: "mcq", diff: 2,
        topic: { zh: "批处理", en: "Batch processing", ms: "Pemprosesan kelompok" },
        q: {
          zh: "关于批处理（batch processing），哪种说法符合讲义？",
          en: "Which statement about batch processing matches the chapter?",
          ms: "Pernyataan manakah tentang pemprosesan kelompok yang menepati bab ini?"
        },
        opts: [
          { zh: "批处理在用户与系统之间保持持续的交互对话", en: "Batch processing keeps a constant interactive dialog between the user and the system", ms: "Pemprosesan kelompok mengekalkan dialog interaktif yang berterusan antara pengguna dan sistem" },
          { zh: "批处理不能在正常营业时间内运行", en: "Batch processing cannot run during regular business hours", ms: "Pemprosesan kelompok tidak boleh berjalan pada waktu perniagaan biasa" },
          { zh: "批处理所需的网络资源比在线处理更多", en: "Batch processing requires more network resources than online processing", ms: "Pemprosesan kelompok memerlukan lebih banyak sumber rangkaian daripada pemprosesan dalam talian" },
          { zh: "批处理程序按预定时间表运行、无需用户参与，所需网络资源明显少于在线系统", en: "Batch programs run on a predetermined schedule without user involvement and require significantly fewer network resources than online systems", ms: "Program kelompok berjalan mengikut jadual yang telah ditetapkan tanpa penglibatan pengguna dan memerlukan sumber rangkaian yang jauh lebih sedikit daripada sistem dalam talian" }
        ],
        answer: 3,
        explain: {
          zh: "第 26 页：IT 运行组可按预定时间表运行批处理程序，无需用户参与，可在营业时间、夜间或周末执行，并且比在线系统需要明显更少的网络资源。持续的交互对话是 online processing 的特征，说批处理需要更多网络资源也与“明显更少”相反；说它不能在营业时间运行，则与讲义明确列出的营业时间、夜间、周末都可执行相矛盾。",
          en: "Page 26 says the IT operations group can run batch programs on a predetermined schedule without user involvement, during business hours, at night or at weekends, and that they require significantly fewer network resources than online systems. The constant interactive dialog belongs to online processing, claiming that batch needs more network resources contradicts the significantly fewer resources stated, and denying that batch can run during business hours contradicts the chapter.",
          ms: "Halaman 26 menyatakan kumpulan operasi IT boleh menjalankan program kelompok mengikut jadual yang ditetapkan tanpa penglibatan pengguna, pada waktu perniagaan, malam atau hujung minggu, dan ia memerlukan sumber rangkaian jauh lebih sedikit daripada sistem dalam talian. Dialog interaktif berterusan ialah ciri pemprosesan dalam talian, dakwaan bahawa kelompok memerlukan lebih banyak sumber rangkaian bercanggah dengan kenyataan sumber yang jauh lebih sedikit, dan penafian bahawa kelompok boleh berjalan pada waktu perniagaan bercanggah dengan bab ini."
        }
      },
      {
        id: "sadm-10-q03", type: "mcq", diff: 2,
        topic: { zh: "环形网络的缺点", en: "Ring network disadvantage", ms: "Kelemahan rangkaian cincin" },
        q: {
          zh: "环形网络的缺点是什么？",
          en: "What is a disadvantage of a ring network?",
          ms: "Apakah kelemahan rangkaian cincin?"
        },
        opts: [
          { zh: "整个网络完全依赖中央交换机", en: "The entire network depends completely on a central switch", ms: "Seluruh rangkaian bergantung sepenuhnya pada suis pusat" },
          { zh: "若某个设备（如 PC 或服务器）故障，其下游设备将无法与网络通信", en: "If a device such as a PC or server fails, devices downstream from it cannot communicate with the network", ms: "Jika sesuatu peranti seperti PC atau pelayan gagal, peranti di hilirnya tidak dapat berkomunikasi dengan rangkaian" },
          { zh: "增加处理层级会使网络更复杂、运维更贵", en: "Adding processing levels makes the network more complex and more expensive to operate", ms: "Menambah tahap pemprosesan menjadikan rangkaian lebih kompleks dan lebih mahal untuk dikendalikan" },
          { zh: "设备不能在不影响网络其余部分的情况下接入或断开", en: "Devices cannot be attached or detached without disturbing the rest of the network", ms: "Peranti tidak boleh dipasang atau ditanggalkan tanpa mengganggu bahagian lain rangkaian" }
        ],
        answer: 1,
        explain: {
          zh: "第 32 页：环形网络中某个设备故障时，下游设备无法与网络通信，这也是多站接入单元（MAU）存在的原因。依赖中央交换机是星形网络的缺点，增加处理层级会变复杂、变贵是层次网络的缺点，而认为设备不能随时接入或断开，恰好把总线网络的优点说反了。",
          en: "Page 32 says that when a device fails in a ring network, devices downstream cannot communicate with the network, which is why multistation access units exist. The central-switch dependency belongs to a star, the added-levels problem to a hierarchical network, and the claim that devices cannot be attached or detached reverses the bus network's advantage.",
          ms: "Halaman 32 menyatakan apabila peranti gagal dalam rangkaian cincin, peranti di hilirnya tidak dapat berkomunikasi dengan rangkaian, dan itulah sebabnya unit akses berbilang stesen wujud. Kebergantungan pada suis pusat ialah kelemahan rangkaian bintang, masalah tahap tambahan ialah kelemahan rangkaian hierarki, dan dakwaan bahawa peranti tidak boleh dipasang atau ditanggalkan menyongsangkan kelebihan rangkaian bas."
        }
      },
      {
        id: "sadm-10-q04", type: "mcq", diff: 2,
        topic: { zh: "路由器与交换机", en: "Routers versus switches", ms: "Penghala berbanding suis" },
        q: {
          zh: "路由器与交换机有何不同？",
          en: "How do routers differ from switches?",
          ms: "Bagaimanakah penghala berbeza daripada suis?"
        },
        opts: [
          { zh: "路由器工作在更高的 OSI 层次，可以连接到更大、异构的网络（如互联网）", en: "They work at a higher OSI level and can connect to a larger, dissimilar network such as the Internet", ms: "Ia berfungsi pada tahap OSI yang lebih tinggi dan boleh menyambung ke rangkaian yang lebih besar dan berbeza seperti Internet" },
          { zh: "路由器工作在更低的 OSI 层次，只能连接同一网段内的设备", en: "They work at a lower OSI level and can only connect devices within one network segment", ms: "Ia berfungsi pada tahap OSI yang lebih rendah dan hanya boleh menyambung peranti dalam satu segmen rangkaian" },
          { zh: "路由器只用于无线网络，用来替代接入点", en: "They are used only in wireless networks to replace access points", ms: "Ia hanya digunakan dalam rangkaian wayarles untuk menggantikan titik akses" },
          { zh: "路由器永久保存数据并提供文件级安全", en: "They store data permanently and provide file-level security", ms: "Ia menyimpan data secara kekal dan menyediakan keselamatan peringkat fail" }
        ],
        answer: 0,
        explain: {
          zh: "第 35 页：router 与 switch 的区别在于它工作在更高的 OSI 层次，因而能连接到更大、异构的网络，例如 Internet；网关与代理服务器是相关但不同的设备。说路由器处在更低层次、只能连接同一网段的选项把高低层次说反；说它只用于无线网络、或永久保存数据并提供文件级安全，则分别混淆了接入点与存储／文件系统的职责。",
          en: "Page 35 says routers differ from switches because they work at a higher OSI level and can connect to a larger, dissimilar network such as the Internet, while gateways and proxy servers are related but different devices. The option that places routers at a lower level and limits them to one segment reverses the level, while the wireless-only and permanent-storage claims describe access points and storage or file systems.",
          ms: "Halaman 35 menyatakan penghala berbeza daripada suis kerana ia berfungsi pada tahap OSI yang lebih tinggi dan boleh menyambung ke rangkaian yang lebih besar dan berbeza seperti Internet, manakala get laluan dan pelayan proksi ialah peranti berkaitan tetapi berbeza. Pilihan yang meletakkan penghala pada tahap lebih rendah dan mengehadkannya kepada satu segmen menyongsangkan tahap, manakala dakwaan hanya wayarles dan storan kekal menerangkan titik akses serta storan atau sistem fail."
        }
      },
      {
        id: "sadm-10-q05", type: "mcq", diff: 2,
        topic: { zh: "设计规格说明的汇报顺序", en: "Presentation order", ms: "Urutan pembentangan" },
        q: {
          zh: "系统设计规格说明的三场汇报中，最后一场向谁汇报？",
          en: "Of the three presentations of the system design specification, who receives the final one?",
          ms: "Antara tiga pembentangan spesifikasi reka bentuk sistem, siapakah yang menerima pembentangan terakhir?"
        },
        opts: [
          { zh: "系统分析师、程序员与技术支援人员", en: "Systems analysts, programmers and technical support staff", ms: "Penganalisis sistem, pengaturcara dan kakitangan sokongan teknikal" },
          { zh: "受影响部门的经理与用户", en: "Department managers and users from affected departments", ms: "Pengurus jabatan dan pengguna dari jabatan terlibat" },
          { zh: "公司管理层", en: "Company management", ms: "Pihak pengurusan syarikat" },
          { zh: "外部软件供应商与顾问", en: "External software vendors and consultants", ms: "Pembekal perisian dan perunding luar" }
        ],
        answer: 2,
        explain: {
          zh: "第 43 页的顺序是：第一场给系统分析师、程序员与技术支援人员，第二场给受影响部门的经理与用户，最后一场给公司管理层。管理层随后可能决定继续开发、补充设计工作或终止项目。外部供应商不在这个汇报序列中。",
          en: "Page 43 orders the presentations as follows: the first is for systems analysts, programmers and technical support staff, the next for department managers and users of affected departments, and the final one for company management, who then decide to proceed, do more design work or terminate the project. Vendors are not in this sequence.",
          ms: "Halaman 43 menyusun pembentangan seperti berikut: pertama untuk penganalisis sistem, pengaturcara dan kakitangan sokongan teknikal, seterusnya untuk pengurus jabatan dan pengguna jabatan terlibat, dan terakhir untuk pihak pengurusan syarikat yang kemudian memutuskan untuk meneruskan, menambah kerja reka bentuk atau menamatkan projek. Pembekal luar tiada dalam urutan ini."
        }
      },
      {
        id: "sadm-10-q06", type: "multi", diff: 2,
        topic: { zh: "客户端／服务器的优点", en: "Client/server benefits", ms: "Kelebihan klien/pelayan" },
        q: {
          zh: "下列哪些是讲义列出的客户端／服务器架构的优点？",
          en: "Which of the following are benefits of client/server architecture listed in the chapter?",
          ms: "Antara berikut, yang manakah kelebihan seni bina klien/pelayan seperti yang disenaraikan dalam bab ini?"
        },
        opts: [
          { zh: "使企业能在快速变化的环境中扩展系统", en: "It enables the firm to scale the system in a rapidly changing environment", ms: "Ia membolehkan firma melanjutkan sistem dalam persekitaran yang berubah dengan pantas" },
          { zh: "可以把应用从昂贵的大型机迁移到较便宜的客户端平台", en: "It allows applications to be transferred from expensive mainframes to less expensive client platforms", ms: "Ia membolehkan aplikasi dipindahkan daripada kerangka utama yang mahal ke platform klien yang lebih murah" },
          { zh: "降低网络负载并改善响应时间", en: "It reduces network load and improves response times", ms: "Ia mengurangkan beban rangkaian dan memperbaiki masa tindak balas" },
          { zh: "使各层之间不再需要中间件", en: "It removes the need for middleware between the tiers", ms: "Ia menghapuskan keperluan perisian tengah antara lapisan" },
          { zh: "保证灾难性故障永远不会发生", en: "It guarantees that catastrophic failure can never occur", ms: "Ia menjamin kegagalan bencana tidak akan berlaku" }
        ],
        answer: [0,1,2],
        explain: {
          zh: "第 19 页列出：client/server 让企业能在快速变化的环境中 scale、可把应用从昂贵的主机转到较便宜的 client 平台，并能 reduce network load 与改善响应时间。中间件正是让各层通信的必需品；而分布式设计只是 less likely 发生灾难性故障，不是保证不会发生。",
          en: "Page 19 lists scaling in a rapidly changing environment, transferring applications from expensive mainframes to cheaper client platforms, and reducing network load and improving response times. Middleware is exactly what lets the tiers communicate, and a distributed design makes catastrophic failure less likely, not impossible.",
          ms: "Halaman 19 menyenaraikan keupayaan melonjak dalam persekitaran yang berubah pantas, pemindahan aplikasi daripada kerangka utama mahal ke platform klien lebih murah, serta pengurangan beban rangkaian dan penambahbaikan masa tindak balas. Perisian tengah justeru diperlukan untuk komunikasi antara lapisan, dan reka bentuk teragih hanya menjadikan kegagalan bencana kurang berkemungkinan, bukan mustahil."
        }
      },
      {
        id: "sadm-10-q07", type: "tf", diff: 1,
        topic: { zh: "OSI 的层次数", en: "Number of OSI layers", ms: "Bilangan lapisan OSI" },
        q: {
          zh: "OSI 参考模型由五个层次组成，每一层执行特定功能。",
          en: "The OSI reference model consists of five layers, each of which performs a specific function.",
          ms: "Model rujukan OSI terdiri daripada lima lapisan, dan setiap lapisan melaksanakan fungsi tertentu."
        },
        answer: false,
        explain: {
          zh: "第 28 页说 OSI 模型由七个层次组成，每一层执行特定功能，并提供一套设计标准。本题把七层改成五层，所以是错的；五个是 SDLC 的阶段数，不要与网络层次数混淆。",
          en: "Page 28 says the OSI model consists of seven layers, each performing a specific function, and offers a set of design standards. Changing seven to five makes the statement false; five is the number of SDLC phases and should not be confused with the number of network layers.",
          ms: "Halaman 28 menyatakan model OSI terdiri daripada tujuh lapisan, setiap lapisan melaksanakan fungsi tertentu, dan ia menawarkan satu set piawaian reka bentuk. Menukar tujuh kepada lima menjadikan pernyataan itu salah; lima ialah bilangan fasa SDLC dan tidak patut dikelirukan dengan bilangan lapisan rangkaian."
        }
      },
      {
        id: "sadm-10-q08", type: "fill", diff: 2,
        topic: { zh: "中间件", en: "Middleware", ms: "Perisian tengah" },
        q: {
          zh: "中间件让客户端／服务器各层能够通信并来回传递数据，它提供的是一个______接口。",
          en: "Middleware enables the tiers of a client/server design to communicate and pass data back and forth, providing a ______ interface.",
          ms: "Perisian tengah membolehkan lapisan seni bina klien/pelayan berkomunikasi dan menghantar data ke sana ke mari dengan menyediakan antara muka yang ______."
        },
        answer: ["transparent","transparent interface","lutsinar","透明","透明的"],
        explain: {
          zh: "第 18 页列出中间件的三点作用：让各层互相通信并来回传递数据、提供 transparent interface、并能整合遗留系统与基于 Web 的应用。因此要填的词是“透明”，它强调的是各层之间的差异对使用者不可见。",
          en: "Page 18 gives three roles of middleware: enabling the tiers to communicate and pass data back and forth, providing a transparent interface, and integrating legacy systems with Web-based applications. The missing word is therefore transparent, meaning the differences between tiers stay invisible to users.",
          ms: "Halaman 18 menyenaraikan tiga peranan perisian tengah: membolehkan lapisan berkomunikasi dan menghantar data ke sana ke mari, menyediakan antara muka yang lutsinar, serta menyepadukan sistem warisan dengan aplikasi berasaskan Web. Oleh itu perkataan yang hilang ialah lutsinar, yang bermaksud perbezaan antara lapisan tidak kelihatan kepada pengguna."
        }
      }
    ],
    "sadm-11": [
      {
        id: "sadm-11-q01", type: "mcq", diff: 2,
        topic: { zh: "试点运行", en: "Pilot operation", ms: "Operasi perintis" },
        q: {
          zh: "哪一种切换方式是并行运行与直接切换的结合？",
          en: "Which changeover method is a combination of parallel operation and direct cutover?",
          ms: "Kaedah peralihan manakah yang merupakan gabungan operasi selari dan peralihan langsung?"
        },
        opts: [
          { zh: "分阶段运行", en: "Phased operation", ms: "Operasi berperingkat" },
          { zh: "直接切换", en: "Direct cutover", ms: "Peralihan langsung" },
          { zh: "试点运行", en: "Pilot operation", ms: "Operasi perintis" },
          { zh: "并行运行", en: "Parallel operation", ms: "Operasi selari" }
        ],
        answer: 2,
        explain: {
          zh: "第 41 页：pilot operation 先让一个 pilot site 使用新系统，旧系统在全组织继续运行；试点成功后通常用 direct cutover 推广到其余部门，所以它是 parallel 与 direct cutover 的结合。phased 是把系统的一部分给所有用户，direct cutover 是一次性替换，parallel 是两套系统同时运行。",
          en: "Page 41 describes pilot operation as one pilot site using the new system while the old system keeps running for the whole organization, then a direct cutover to the rest once the pilot succeeds, so it combines parallel operation and direct cutover. Phased gives part of the system to all users, direct cutover switches at once, and parallel runs both systems.",
          ms: "Halaman 41 menerangkan operasi perintis sebagai satu tapak perintis menggunakan sistem baharu sementara sistem lama terus beroperasi untuk seluruh organisasi, kemudian peralihan langsung kepada bahagian lain selepas kejayaan, jadi ia menggabungkan operasi selari dan peralihan langsung. Operasi berperingkat memberi sebahagian sistem kepada semua pengguna, peralihan langsung bertukar serentak, dan operasi selari menjalankan kedua-dua sistem."
        }
      },
      {
        id: "sadm-11-q02", type: "mcq", diff: 2,
        topic: { zh: "数据转换", en: "Data conversion", ms: "Penukaran data" },
        q: {
          zh: "如果旧系统无法按 ASCII 或 ODBC 等标准格式导出数据，讲义要求分析师怎么做？",
          en: "If the old system cannot export data in a standard format such as ASCII or ODBC, what does the chapter say the analyst must do?",
          ms: "Jika sistem lama tidak dapat mengeksport data dalam format piawai seperti ASCII atau ODBC, apakah yang perlu dilakukan oleh penganalisis menurut bab ini?"
        },
        opts: [
          { zh: "开发一个程序来抽取数据并转换它", en: "Develop a program to extract the data and convert it", ms: "Bangunkan program untuk mengekstrak data dan menukarnya" },
          { zh: "完全靠人工重新录入全部数据，不使用任何程序", en: "Re-enter all data by hand without using any program", ms: "Masukkan semula semua data secara manual tanpa menggunakan sebarang program" },
          { zh: "放弃转换，让旧系统继续运行", en: "Abandon the conversion and keep the old system running", ms: "Tinggalkan penukaran dan biarkan sistem lama terus beroperasi" },
          { zh: "请供应商重写新系统的数据库设计", en: "Ask the vendor to rewrite the new system's database design", ms: "Minta pembekal menulis semula reka bentuk pangkalan data sistem baharu" }
        ],
        answer: 0,
        explain: {
          zh: "第 36 页：旧系统若能把数据导出为可接受格式或 ASCII、ODBC 等标准格式最好；若没有标准格式，就必须开发程序抽取并转换数据；转换常常还需要额外数据项，可能需手工录入。因此不是“完全不用程序”，更不该放弃转换或改数据库设计来回避问题。",
          en: "Page 36 says the old system may export data in an acceptable or standard format such as ASCII or ODBC; if no standard format is available, you must develop a program to extract and convert the data, and conversion often needs extra data items entered by hand. Giving up the conversion or redesigning the database does not solve the problem.",
          ms: "Halaman 36 menyatakan sistem lama mungkin mengeksport data dalam format yang boleh diterima atau format piawai seperti ASCII atau ODBC; jika tiada format piawai, anda mesti membangunkan program untuk mengekstrak dan menukar data, dan penukaran sering memerlukan item data tambahan yang dimasukkan secara manual. Membatalkan penukaran atau mereka semula pangkalan data tidak menyelesaikan masalah."
        }
      },
      {
        id: "sadm-11-q03", type: "mcq", diff: 2,
        topic: { zh: "内聚", en: "Cohesion", ms: "Kesepaduan" },
        q: {
          zh: "按讲义，如果想让一个模块更具内聚性（more cohesive），应该怎么做？",
          en: "According to the chapter, if you need to make a module more cohesive, what should you do?",
          ms: "Menurut bab ini, jika anda perlu menjadikan sesuatu modul lebih berpadu, apakah yang patut anda lakukan?"
        },
        opts: [
          { zh: "增加数据耦合，让它与更多模块共享数据", en: "Add data couples so that it shares data with more modules", ms: "Tambah gandingan data supaya ia berkongsi data dengan lebih banyak modul" },
          { zh: "把它与所有调用它的模块合并成一个模块", en: "Merge it with every module that calls it", ms: "Gabungkan ia dengan setiap modul yang memanggilnya" },
          { zh: "增加它使用的控制耦合数量", en: "Increase the number of control couples it uses", ms: "Tambah bilangan gandingan kawalan yang digunakannya" },
          { zh: "把它拆分成若干只执行单一功能的独立单元", en: "Split it into separate units, each with a single function", ms: "Pecahkannya kepada unit berasingan yang setiap satunya mempunyai satu fungsi" }
        ],
        answer: 3,
        explain: {
          zh: "第 14 页：若要让模块更 cohesive，可以把它拆成各自只有一个功能的独立单元；与此相应，模块之间应当 loosely coupled 而不是 tightly coupled。增加耦合、合并模块或增加控制耦合都会降低模块的独立性，与讲义的建议相反。",
          en: "Page 14 says that to make a module more cohesive you can split it into separate units, each with a single function, and that modules should be loosely coupled rather than tightly coupled. Adding couples, merging modules or adding control couples all reduce independence, contrary to the chapter's advice.",
          ms: "Halaman 14 menyatakan untuk menjadikan modul lebih berpadu anda boleh memecahkannya kepada unit berasingan yang setiap satunya mempunyai satu fungsi, dan modul sepatutnya bergandingan longgar dan bukan rapat. Menambah gandingan, menggabungkan modul atau menambah gandingan kawalan mengurangkan kebebasan modul, bertentangan dengan nasihat bab ini."
        }
      },
      {
        id: "sadm-11-q04", type: "mcq", diff: 2,
        topic: { zh: "面向对象的耦合与内聚", en: "OO coupling and cohesion", ms: "Gandingan dan kesepaduan OO" },
        q: {
          zh: "对面向对象设计，讲义对类与方法的耦合、内聚提出了什么要求？",
          en: "For object-oriented designs, what does the chapter require of classes and methods in terms of coupling and cohesion?",
          ms: "Bagi reka bentuk berorientasikan objek, apakah keperluan bab ini terhadap kelas dan kaedah dari segi gandingan dan kesepaduan?"
        },
        opts: [
          { zh: "类应紧密耦合；方法应紧密耦合且内聚度低", en: "Classes should be tightly coupled, and methods should be tightly coupled and low in cohesion", ms: "Kelas hendaklah bergandingan rapat, dan kaedah hendaklah bergandingan rapat serta kurang berpadu" },
          { zh: "类应松散耦合；方法应松散耦合且高度内聚", en: "Classes should be loosely coupled, and methods should be loosely coupled and highly cohesive", ms: "Kelas hendaklah bergandingan longgar, dan kaedah hendaklah bergandingan longgar serta sangat berpadu" },
          { zh: "类应高度内聚；方法只需松散耦合", en: "Classes should be highly cohesive, and methods need only be loosely coupled", ms: "Kelas hendaklah sangat berpadu, dan kaedah hanya perlu bergandingan longgar" },
          { zh: "耦合与内聚不适用于面向对象设计", en: "Coupling and cohesion do not apply to object-oriented designs", ms: "Gandingan dan kesepaduan tidak terpakai pada reka bentuk berorientasikan objek" }
        ],
        answer: 1,
        explain: {
          zh: "第 18 页在 Object-Oriented Cohesion and Coupling 下给出的结论是：classes 应 loosely coupled，methods 应 loosely coupled and highly cohesive。这与结构化设计中“模块高内聚、低耦合”的目标一致，所以其余选项都违背这一原则。",
          en: "Page 18, under object-oriented cohesion and coupling, concludes that classes should be loosely coupled and methods should be loosely coupled and highly cohesive. This matches the structured design goal of high cohesion and low coupling, so the other options violate the principle.",
          ms: "Halaman 18 di bawah kesepaduan dan gandingan berorientasikan objek menyimpulkan bahawa kelas hendaklah bergandingan longgar dan kaedah hendaklah bergandingan longgar serta sangat berpadu. Ini selaras dengan matlamat reka bentuk berstruktur, iaitu kesepaduan tinggi dan gandingan rendah, jadi pilihan lain melanggar prinsip itu."
        }
      },
      {
        id: "sadm-11-q05", type: "mcq", diff: 2,
        topic: { zh: "CMMI 的成熟度层级", en: "CMMI maturity layers", ms: "Lapisan kematangan CMMI" },
        q: {
          zh: "能力成熟度模型集成（CMMI）用什么来跟踪组织的流程？",
          en: "What does the Capability Maturity Model Integration (CMMI) use to track an organization's processes?",
          ms: "Apakah yang digunakan oleh Integrasi Model Kematangan Keupayaan (CMMI) untuk menjejak proses sesebuah organisasi?"
        },
        opts: [
          { zh: "七个成熟度层级", en: "Seven maturity layers", ms: "Tujuh lapisan kematangan" },
          { zh: "三个成熟度层级", en: "Three maturity layers", ms: "Tiga lapisan kematangan" },
          { zh: "四个成熟度层级", en: "Four maturity layers", ms: "Empat lapisan kematangan" },
          { zh: "五个成熟度层级", en: "Five maturity layers", ms: "Lima lapisan kematangan" }
        ],
        answer: 3,
        explain: {
          zh: "第 7 页：CMM 与 CMMI 用于 process improvement，CMMI 用五个成熟度层级跟踪组织流程。七层是 OSI 网络模型，四个是第 5 章的四模型法，三个是顺序、选择、迭代三种基本结构，都与 CMMI 的层级数无关。",
          en: "Page 7 says the CMM and CMMI support process improvement, and the CMMI tracks an organization's processes using five maturity layers. Seven belongs to the OSI network model, four to the four-model approach in Chapter 5, and three to the sequence, selection and iteration structures.",
          ms: "Halaman 7 menyatakan CMM dan CMMI menyokong penambahbaikan proses, dan CMMI menjejak proses organisasi menggunakan lima lapisan kematangan. Tujuh merujuk model rangkaian OSI, empat merujuk pendekatan empat model dalam Bab 5, dan tiga merujuk struktur urutan, pemilihan dan lelaran."
        }
      },
      {
        id: "sadm-11-q06", type: "multi", diff: 1,
        topic: { zh: "培训的三大群体", en: "Three training groups", ms: "Tiga kumpulan latihan" },
        q: {
          zh: "讲义指出培训的三大对象群体是哪些？",
          en: "Which are the three main groups for training according to the chapter?",
          ms: "Yang manakah tiga kumpulan utama untuk latihan menurut bab ini?"
        },
        opts: [
          { zh: "管理者", en: "Managers", ms: "Pengurus" },
          { zh: "IT 人员", en: "IT staff", ms: "Kakitangan IT" },
          { zh: "软件供应商", en: "Software vendors", ms: "Pembekal perisian" },
          { zh: "外部审计人员", en: "External auditors", ms: "Juruaudit luar" },
          { zh: "用户", en: "Users", ms: "Pengguna" }
        ],
        answer: [0,1,4],
        explain: {
          zh: "第 30 页明确说培训的三个主要群体是 users、managers 与 IT staff。供应商可以提供培训，而且 vendor training 常带来最好的培训回报，但供应商本身不是受训群体；外部审计人员也不在讲义列出的三类之中。",
          en: "Page 30 states that the three main groups for training are users, managers and IT staff. Vendors may deliver training, and vendor training often gives the best return on training dollars, but vendors are not a trainee group; external auditors are not one of the three either.",
          ms: "Halaman 30 menyatakan tiga kumpulan utama latihan ialah pengguna, pengurus dan kakitangan IT. Pembekal boleh menyediakan latihan, dan latihan daripada pembekal sering memberi pulangan terbaik bagi wang latihan, tetapi pembekal bukan kumpulan pelatih; juruaudit luar juga bukan salah satu daripada tiga kumpulan itu."
        }
      },
      {
        id: "sadm-11-q07", type: "tf", diff: 2,
        topic: { zh: "极限编程的实践", en: "Extreme Programming practices", ms: "Amalan Pengaturcaraan Ekstrem" },
        q: {
          zh: "极限编程（XP）使用用户故事、发布计划、迭代周期与迭代计划会议，并采用测试驱动设计。",
          en: "Extreme Programming (XP) uses user stories, release plans, iteration cycles and iteration planning meetings, and applies test-driven design.",
          ms: "Pengaturcaraan Ekstrem (XP) menggunakan cerita pengguna, pelan keluaran, kitaran lelaran dan mesyuarat perancangan lelaran, serta mengamalkan reka bentuk berteraskan ujian."
        },
        answer: true,
        explain: {
          zh: "第 20 页在 XP 的例子中列出 user story、release plan、iteration cycle、iteration planning meeting、parallel programming 与 test-driven design，与本题一致。XP 是较新的敏捷方法之一，强调小团队、密集沟通与快速迭代。",
          en: "Page 20 lists user story, release plan, iteration cycle, iteration planning meeting, parallel programming and test-driven design in the XP example, matching the statement. XP is one of the newest agile methods, focusing on small teams, intense communication and rapid development iterations.",
          ms: "Halaman 20 menyenaraikan cerita pengguna, pelan keluaran, kitaran lelaran, mesyuarat perancangan lelaran, pengaturcaraan selari dan reka bentuk berteraskan ujian dalam contoh XP, selaras dengan pernyataan itu. XP ialah salah satu kaedah tangkas terbaharu yang menekankan pasukan kecil, komunikasi intensif dan lelaran pembangunan pantas."
        }
      },
      {
        id: "sadm-11-q08", type: "fill", diff: 1,
        topic: { zh: "控制模块", en: "Control module", ms: "Modul kawalan" },
        q: {
          zh: "在结构图中，位于顶层、调用下层模块的模块称为______模块。",
          en: "In a structure chart, the module at the top that calls the modules below it is called the ______ module.",
          ms: "Dalam carta struktur, modul di bahagian atas yang memanggil modul di bawahnya dipanggil modul ______."
        },
        answer: ["control","control module","kawalan","控制","控制模块"],
        explain: {
          zh: "第 13 页在结构图要素中并列 control module 与 subordinate modules：顶层那个负责协调和调用的是控制模块，被它调用的叫下级模块。数据耦合、控制耦合、条件与循环是模块之间传递或控制的标记，不是顶层模块的名称。",
          en: "Page 13 lists the control module together with subordinate modules among structure chart elements: the top module that coordinates and calls the others is the control module, and the ones it calls are subordinate modules. Data couples, control couples, conditions and loops are markers on the connections, not the name of the top module.",
          ms: "Halaman 13 menyenaraikan modul kawalan bersama modul bawahan dalam elemen carta struktur: modul di atas yang menyelaras dan memanggil modul lain ialah modul kawalan, manakala modul yang dipanggil ialah modul bawahan. Gandingan data, gandingan kawalan, syarat dan gelung ialah penanda pada sambungan, bukan nama modul teratas."
        }
      }
    ],
    "sadm-12": [
      {
        id: "sadm-12-q01", type: "mcq", diff: 2,
        topic: { zh: "完善性维护", en: "Perfective maintenance", ms: "Penyelenggaraan penyempurnaan" },
        q: {
          zh: "哪一种维护把运行中的系统改得更高效、更可靠、更易维护，并且在系统生命周期中期最具成本效益？",
          en: "Which type of maintenance changes an operational system to make it more efficient, reliable and maintainable, and is most cost-effective in the middle of the system's operational life?",
          ms: "Jenis penyelenggaraan manakah yang mengubah sistem yang sedang beroperasi supaya lebih cekap, boleh dipercayai dan mudah diselenggara, serta paling berbaloi pada pertengahan hayat operasi sistem?"
        },
        opts: [
          { zh: "纠正性维护", en: "Corrective maintenance", ms: "Penyelenggaraan pembetulan" },
          { zh: "完善性维护", en: "Perfective maintenance", ms: "Penyelenggaraan penyempurnaan" },
          { zh: "适应性维护", en: "Adaptive maintenance", ms: "Penyelenggaraan penyesuaian" },
          { zh: "预防性维护", en: "Preventive maintenance", ms: "Penyelenggaraan pencegahan" }
        ],
        answer: 1,
        explain: {
          zh: "第 14 页：perfective maintenance 改变运行中的系统，使其更高效、可靠、易维护，在系统生命周期中期最具成本效益；需要大量维护改动的程序适合 reengineering。纠正性维护处理错误，适应性维护增加增强功能并让系统更好用，预防性维护针对可能出问题的领域。",
          en: "Page 14 says perfective maintenance changes an operational system to make it more efficient, reliable and maintainable and is cost-effective in the middle of its operational life, and that heavily modified programs are good candidates for reengineering. Corrective maintenance fixes errors, adaptive maintenance adds enhancements, and preventive maintenance targets likely trouble areas.",
          ms: "Halaman 14 menyatakan penyelenggaraan penyempurnaan mengubah sistem yang beroperasi supaya lebih cekap, boleh dipercayai dan mudah diselenggara serta berbaloi pada pertengahan hayat operasinya, dan program yang banyak diubah sesuai untuk kejuruteraan semula. Penyelenggaraan pembetulan membaiki ralat, penyesuaian menambah peningkatan, dan pencegahan menyasarkan kawasan yang mungkin bermasalah."
        }
      },
      {
        id: "sadm-12-q02", type: "mcq", diff: 2,
        topic: { zh: "性能度量指标", en: "Performance metrics", ms: "Metrik prestasi" },
        q: {
          zh: "IT 部门常用哪些指标在系统或业务需求改变前后评估系统性能？",
          en: "Which measures does the IT department often use to evaluate system performance before and after changes to the system or business information requirements?",
          ms: "Ukuran manakah yang sering digunakan jabatan IT untuk menilai prestasi sistem sebelum dan selepas perubahan pada sistem atau keperluan maklumat perniagaan?"
        },
        opts: [
          { zh: "响应时间、带宽、吞吐量与周转时间", en: "Response time, bandwidth, throughput and turnaround time", ms: "Masa tindak balas, jalur lebar, daya pemprosesan dan masa pusingan" },
          { zh: "内聚度、耦合度与模块数", en: "Cohesion, coupling and the number of modules", ms: "Kesepaduan, gandingan dan bilangan modul" },
          { zh: "页数、打印速度与键盘布局", en: "Page counts, printing speed and keyboard layout", ms: "Bilangan halaman, kelajuan percetakan dan susun atur papan kekunci" },
          { zh: "用户满意度、培训时数与审计线索长度", en: "User satisfaction, training hours and audit trail length", ms: "Kepuasan pengguna, jam latihan dan panjang jejak audit" }
        ],
        answer: 0,
        explain: {
          zh: "第 24 页：IT 部门常测 response time、bandwidth、throughput 与 turnaround time，用来评估系统或业务信息需求改变前后的性能，这些数据也是 capacity planning 的输入。内聚与耦合是设计质量概念，其余指标都不在讲义的性能度量清单中。",
          en: "Page 24 says the IT department often measures response time, bandwidth, throughput and turnaround time to evaluate performance before and after changes, and that management uses this data as input to capacity planning. Cohesion and coupling are design quality concepts, and the other measures are not in the chapter's list.",
          ms: "Halaman 24 menyatakan jabatan IT sering mengukur masa tindak balas, jalur lebar, daya pemprosesan dan masa pusingan untuk menilai prestasi sebelum dan selepas perubahan, dan data ini menjadi input kepada perancangan kapasiti. Kesepaduan dan gandingan ialah konsep kualiti reka bentuk, manakala ukuran lain tiada dalam senarai bab ini."
        }
      },
      {
        id: "sadm-12-q03", type: "mcq", diff: 2,
        topic: { zh: "风险控制方式", en: "Risk control options", ms: "Pilihan kawalan risiko" },
        q: {
          zh: "讲义列出的四种风险控制方式是什么？",
          en: "What are the four risk control options listed in the chapter?",
          ms: "Apakah empat pilihan kawalan risiko yang disenaraikan dalam bab ini?"
        },
        opts: [
          { zh: "识别、评估、规避、监控", en: "Identification, assessment, avoidance and monitoring", ms: "Pengenalpastian, penilaian, pengelakan dan pemantauan" },
          { zh: "预防、检测、纠正、恢复", en: "Prevention, detection, correction and recovery", ms: "Pencegahan, pengesanan, pembetulan dan pemulihan" },
          { zh: "规避、缓解、转移、接受", en: "Avoidance, mitigation, transference and acceptance", ms: "Pengelakan, pengurangan, pemindahan dan penerimaan" },
          { zh: "物理、网络、应用、文件", en: "Physical, network, application and file", ms: "Fizikal, rangkaian, aplikasi dan fail" }
        ],
        answer: 2,
        explain: {
          zh: "第 28 页：风险管理包括 risk identification、risk assessment 与 risk control，而 risk control 的四种方式是 avoidance、mitigation、transference、acceptance。把识别、评估、规避、监控并列的选项，把风险管理的活动与控制方式混在一起；预防、检测、纠正、恢复是通用的控制流程；物理、网络、应用、文件则只是六个安全层级中的四个。",
          en: "Page 28 describes risk management as risk identification, risk assessment and risk control, and lists avoidance, mitigation, transference and acceptance as the control options. The option listing identification, assessment, avoidance and monitoring mixes management activities with control options, prevention-detection-correction-recovery is a generic control cycle, and physical, network, application and file are only four of the six security levels.",
          ms: "Halaman 28 menerangkan pengurusan risiko sebagai pengenalpastian risiko, penilaian risiko dan kawalan risiko, serta menyenaraikan pengelakan, pengurangan, pemindahan dan penerimaan sebagai pilihan kawalan. Pilihan yang menyenaraikan pengenalpastian, penilaian, pengelakan dan pemantauan mencampurkan aktiviti pengurusan dengan pilihan kawalan, pencegahan-pengesanan-pembetulan-pemulihan ialah kitaran kawalan am, dan fizikal, rangkaian, aplikasi serta fail hanyalah empat daripada enam tahap keselamatan."
        }
      },
      {
        id: "sadm-12-q04", type: "mcq", diff: 2,
        topic: { zh: "基线", en: "Baselines", ms: "Garis dasar" },
        q: {
          zh: "讲义提到的三种基线（baselines）是什么？",
          en: "What are the three baselines mentioned in the chapter?",
          ms: "Apakah tiga garis dasar yang dinyatakan dalam bab ini?"
        },
        opts: [
          { zh: "运行基线、技术基线、维护基线", en: "Operational baseline, technical baseline and maintenance baseline", ms: "Garis dasar operasi, garis dasar teknikal dan garis dasar penyelenggaraan" },
          { zh: "需求基线、设计基线、测试基线", en: "Requirements baseline, design baseline and testing baseline", ms: "Garis dasar keperluan, garis dasar reka bentuk dan garis dasar pengujian" },
          { zh: "功能基线、分配基线、产品基线", en: "Functional baseline, allocated baseline and product baseline", ms: "Garis dasar fungsi, garis dasar diperuntukkan dan garis dasar produk" },
          { zh: "硬件基线、软件基线、网络基线", en: "Hardware baseline, software baseline and network baseline", ms: "Garis dasar perkakasan, garis dasar perisian dan garis dasar rangkaian" }
        ],
        answer: 2,
        explain: {
          zh: "第 21 页：分析人员用 baselines 作为标尺，记录系统开发过程中的功能与性能，三种是 functional、allocated 与 product baseline；基线也配合配置管理来组织和处理文档。其余组合都是按阶段或按技术层面拼出来的名称，不是讲义列出的基线类型。",
          en: "Page 21 says analysts use baselines as yardsticks to document features and performance during systems development, and names functional, allocated and product baselines; baselines also work with configuration management to organize documentation. The other combinations are invented from phases or technology layers.",
          ms: "Halaman 21 menyatakan penganalisis menggunakan garis dasar sebagai penanda untuk mendokumenkan ciri dan prestasi sepanjang pembangunan sistem, dan menamakan garis dasar fungsi, diperuntukkan dan produk; garis dasar juga berpadanan dengan pengurusan konfigurasi untuk menyusun dokumentasi. Gabungan lain ialah nama ciptaan berdasarkan fasa atau lapisan teknologi."
        }
      },
      {
        id: "sadm-12-q05", type: "mcq", diff: 2,
        topic: { zh: "系统过时的征兆", en: "Signs of obsolescence", ms: "Tanda keusangan" },
        q: {
          zh: "下列哪一项表明系统已接近其使用寿命的终点？",
          en: "Which of the following indicates that a system is reaching the end of its useful life?",
          ms: "Antara berikut, yang manakah menunjukkan sistem hampir sampai ke penghujung hayat penggunaannya?"
        },
        opts: [
          { zh: "维护成本开始上升，用户开始要求更多功能，新的系统请求被提交", en: "Maintenance costs start to increase, users begin to ask for more features, and new systems requests are submitted", ms: "Kos penyelenggaraan mula meningkat, pengguna mula meminta lebih banyak ciri, dan permintaan sistem baharu dikemukakan" },
          { zh: "响应时间比约定基准低几毫秒", en: "Response time is a few milliseconds below the agreed benchmark", ms: "Masa tindak balas beberapa milisaat di bawah penanda aras yang dipersetujui" },
          { zh: "供应商为操作系统发布了新的服务包", en: "The vendor releases a new service pack for the operating system", ms: "Pembekal mengeluarkan pek perkhidmatan baharu untuk sistem pengendalian" },
          { zh: "一个月内服务台只收到一次重置密码请求", en: "The help desk receives only one password reset request in a month", ms: "Meja bantuan hanya menerima satu permintaan set semula kata laluan dalam sebulan" }
        ],
        answer: 0,
        explain: {
          zh: "第 41 页：系统运行到某个阶段，maintenance costs 开始上升、用户开始要求更多功能与能力、新的系统请求被提交，于是 SDLC 重新开始，这标志着系统走向 obsolete。偶发的性能波动、供应商更新或个别服务台请求都不构成系统过时的信号。",
          en: "Page 41 says that at some point maintenance costs start to increase, users ask for more features and capability, and new systems requests are submitted, so the SDLC begins again and the system is obsolete. Occasional performance variation, vendor updates or a single help desk request are not signs of obsolescence.",
          ms: "Halaman 41 menyatakan pada satu peringkat kos penyelenggaraan mula meningkat, pengguna meminta lebih banyak ciri dan keupayaan, dan permintaan sistem baharu dikemukakan, lalu SDLC bermula semula dan sistem menjadi usang. Turun naik prestasi sekali-sekala, kemas kini pembekal atau satu permintaan meja bantuan bukan tanda keusangan."
        }
      },
      {
        id: "sadm-12-q06", type: "multi", diff: 2,
        topic: { zh: "六个安全层级", en: "Six security levels", ms: "Enam tahap keselamatan" },
        q: {
          zh: "下列哪些属于讲义列出的六个安全层级？",
          en: "Which of the following are among the six security levels listed in the chapter?",
          ms: "Antara berikut, yang manakah termasuk dalam enam tahap keselamatan yang disenaraikan dalam bab ini?"
        },
        opts: [
          { zh: "程序性安全", en: "Procedural security", ms: "Keselamatan prosedur" },
          { zh: "数据库安全", en: "Database security", ms: "Keselamatan pangkalan data" },
          { zh: "操作系统安全", en: "Operating system security", ms: "Keselamatan sistem pengendalian" },
          { zh: "物理安全", en: "Physical security", ms: "Keselamatan fizikal" },
          { zh: "网络安全", en: "Network security", ms: "Keselamatan rangkaian" }
        ],
        answer: [0,3,4],
        explain: {
          zh: "第 30 页说必须考虑六个既独立又相互关联的层级：physical、network、application、file、user、procedural security。数据库安全与操作系统安全虽然重要，但不在这个六层清单里；相关内容分散在 application、file 与 network 层的讨论中。",
          en: "Page 30 says six separate but interrelated levels must be considered: physical, network, application, file, user and procedural security. Database and operating system security matter but are not on that list; related concerns appear within the application, file and network levels.",
          ms: "Halaman 30 menyatakan enam tahap yang berasingan tetapi berkait mesti dipertimbangkan: keselamatan fizikal, rangkaian, aplikasi, fail, pengguna dan prosedur. Keselamatan pangkalan data dan sistem pengendalian penting tetapi tiada dalam senarai enam itu; perkara berkaitan dibincangkan dalam tahap aplikasi, fail dan rangkaian."
        }
      },
      {
        id: "sadm-12-q07", type: "tf", diff: 1,
        topic: { zh: "绝对安全", en: "Absolute security", ms: "Keselamatan mutlak" },
        q: {
          zh: "讲义认为绝对安全是可以实现的实际目标，组织应把它作为安全规划的前提。",
          en: "The chapter holds that absolute security is a realistic goal that an organization should adopt as the basis of security planning.",
          ms: "Bab ini berpendapat bahawa keselamatan mutlak ialah matlamat realistik yang patut dijadikan asas perancangan keselamatan organisasi."
        },
        answer: false,
        explain: {
          zh: "第 28 页开头就明确说 absolute security is not a realistic goal，因此组织要做的是风险管理：识别风险、评估风险，再用规避、缓解、转移、接受四种方式控制风险。把绝对安全当成可实现目标，会误导安全投入的优先级。",
          en: "Page 28 states at the outset that absolute security is not a realistic goal, so organizations practise risk management: identify risks, assess them, then control them through avoidance, mitigation, transference or acceptance. Treating absolute security as achievable would distort security priorities and spending.",
          ms: "Halaman 28 menyatakan sejak awal bahawa keselamatan mutlak bukan matlamat realistik, jadi organisasi mengamalkan pengurusan risiko: mengenal pasti risiko, menilainya, kemudian mengawalnya melalui pengelakan, pengurangan, pemindahan atau penerimaan. Menganggap keselamatan mutlak boleh dicapai akan menyelewengkan keutamaan dan perbelanjaan keselamatan."
        }
      },
      {
        id: "sadm-12-q08", type: "fill", diff: 2,
        topic: { zh: "权限提升", en: "Privilege escalation", ms: "Peningkatan keistimewaan" },
        q: {
          zh: "用户设法获得高于其应有权限的访问级别，这种攻击称为______。",
          en: "An attack in which a user manages to gain a higher level of access than intended is called a ______ attack.",
          ms: "Serangan di mana pengguna berjaya memperoleh tahap akses yang lebih tinggi daripada yang sepatutnya dipanggil serangan ______."
        },
        answer: ["privilege escalation","privilege escalation attack","peningkatan keistimewaan","权限提升","提权"],
        explain: {
          zh: "第 36 页在用户安全（user security）下列出 privilege escalation attack，与身份管理、口令保护、社会工程并列。它指的是用户突破原有权限获得更高访问级别的攻击，因此要和物理安全、网络安全中的防火墙或加密等概念区分开。",
          en: "Page 36 lists the privilege escalation attack under user security, alongside identity management, password protection and social engineering. It is an attack in which a user breaks out of the intended permission level to obtain higher access, so it belongs to user security rather than to firewalls or encryption.",
          ms: "Halaman 36 menyenaraikan serangan peningkatan keistimewaan di bawah keselamatan pengguna, bersama pengurusan identiti, perlindungan kata laluan dan kejuruteraan sosial. Ia ialah serangan di mana pengguna melepasi tahap kebenaran yang dimaksudkan untuk memperoleh akses lebih tinggi, jadi ia tergolong dalam keselamatan pengguna dan bukan tembok api atau penyulitan."
        }
      }
    ]
  }
};
