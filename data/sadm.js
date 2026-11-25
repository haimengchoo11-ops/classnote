window.CN_DATA = window.CN_DATA || {};
window.CN_DATA["sadm"] = {
  id: "sadm",
  code: "DSPD2453",
  name: {
    zh: "系统分析与设计方法",
    en: "Systems Analysis and Design Methods",
    ms: "Kaedah Analisis dan Reka Bentuk Sistem"
  },
  desc: {
    zh: "本课程完整讲解信息系统的开发流程：从系统分析基础、商业论证与项目管理，到需求建模、数据与过程分析、对象分析、开发方案选择、系统构建规划、上线实施，最后到系统运维与安全。学生要掌握结构化分析、面向对象分析和敏捷方法三大流派，并会用 DFD、UML、WBS、甘特图与 PERT/CPM 等工具，把业务需求转化为可落地的设计方案。",
    en: "This course covers the full systems development process: from systems analysis fundamentals, business justification and project management, through requirements modeling, data and process analysis, object analysis, development options, system construction planning and implementation, to systems operation, support and security. Students learn the three main approaches - structured analysis, object-oriented analysis and agile methods - and use tools such as DFDs, UML, WBS, Gantt and PERT/CPM charts to turn business requirements into a workable design.",
    ms: "Kursus ini merangkumi keseluruhan proses pembangunan sistem maklumat: daripada asas analisis sistem, justifikasi perniagaan dan pengurusan projek, kepada pemodelan keperluan, analisis data dan proses, analisis objek, pilihan pembangunan, perancangan pembinaan sistem dan pelaksanaannya, sehingga operasi, sokongan dan keselamatan sistem. Pelajar menguasai tiga pendekatan utama - analisis berstruktur, analisis berorientasikan objek dan kaedah tangkas - serta menggunakan alat seperti DFD, UML, WBS, carta Gantt dan PERT/CPM untuk menukar keperluan perniagaan menjadi reka bentuk yang boleh dilaksanakan."
  },
  icon: "🧩",
  color: "#3b7dd8",
  chapters: [
    {
      id: "sadm-01",
      num: 1,
      title: { zh: "系统分析基础", en: "Systems Analysis Fundamentals", ms: "Asas Analisis Sistem" },
      file: "sadm/CHAP1_SADM.pdf",
      pages: 45,
      summary: {
        zh: "本章是整门课的入门：先说明信息技术（IT）如何影响企业战略与成败，再定义什么是信息系统以及它的五个组成部分——硬件、软件、数据、过程和人。接着讲解企业如何用业务模型、业务轮廓来描述自身运作，互联网又如何催生 B2C、B2B 等新的经营方式与新型公司。最后比较结构化分析、面向对象分析与敏捷方法三大开发方法，给出五条系统开发准则，并介绍 IT 部门与系统分析师的角色。",
        en: "This opening chapter explains how information technology affects business strategy and success, then defines an information system and its five key components: hardware, software, data, processes and people. It shows how companies use business profiles and business models to describe their operations, and how the Internet has produced new kinds of companies and e-commerce models such as B2C and B2B. It closes by comparing structured analysis, object-oriented analysis and agile methods, listing five guidelines for systems development, and describing the role of the IT department and the systems analyst.",
        ms: "Bab pembuka ini menerangkan bagaimana teknologi maklumat mempengaruhi strategi dan kejayaan perniagaan, kemudian mentakrifkan sistem maklumat serta lima komponen utamanya: perkakasan, perisian, data, proses dan manusia. Bab ini juga menunjukkan bagaimana syarikat menggunakan profil perniagaan dan model perniagaan untuk menggambarkan operasi mereka, dan bagaimana Internet melahirkan jenis syarikat baharu serta model e-dagang seperti B2C dan B2B. Akhir sekali, bab ini membandingkan analisis berstruktur, analisis berorientasikan objek dan kaedah tangkas, menyenaraikan lima garis panduan pembangunan sistem, serta menerangkan peranan jabatan IT dan penganalisis sistem."
      },
      points: [
        {
          zh: "信息技术（IT）是企业用来管理、存取、沟通与共享信息的硬件、软件产品与服务的组合，它往往决定了一家企业是成功还是失败。",
          en: "Information technology (IT) is the combination of hardware and software products and services that companies use to manage, access, communicate and share information, and it can mean the difference between success and failure.",
          ms: "Teknologi maklumat (IT) ialah gabungan produk dan perkhidmatan perkakasan serta perisian yang digunakan oleh syarikat untuk mengurus, mengakses, berkomunikasi dan berkongsi maklumat, dan ia boleh menentukan sama ada sesebuah perniagaan berjaya atau gagal."
        },
        {
          zh: "系统是一组相互关联、能产生特定结果的组件；如果这个系统对公司的日常运作至关重要，就称为关键任务系统（mission-critical system）。",
          en: "A system is a set of related components that produces specific results, and a mission-critical system is one that is vital to a company's daily operations.",
          ms: "Sistem ialah satu set komponen yang saling berkaitan dan menghasilkan hasil tertentu, manakala sistem misi kritikal ialah sistem yang sangat penting kepada operasi harian sesebuah syarikat."
        },
        {
          zh: "信息系统有五个关键组成部分：硬件、软件、数据、过程和人员，缺一不可。",
          en: "An information system has five key components: hardware, software, data, processes and people, and none of them can be left out.",
          ms: "Sistem maklumat mempunyai lima komponen utama: perkakasan, perisian, data, proses dan manusia, dan kesemuanya tidak boleh ditinggalkan."
        },
        {
          zh: "数据是系统最基本的原始事实，信息则是经过加工、对用户有价值的输出，两者的区别是必考点。",
          en: "Data consists of basic facts that are the raw material of the system, while information is data that has been transformed into output valuable to users; the difference between them is a favourite exam point.",
          ms: "Data terdiri daripada fakta asas yang menjadi bahan mentah sistem, manakala maklumat ialah data yang telah diproses menjadi output yang bernilai kepada pengguna; perbezaan antara keduanya sering diuji dalam peperiksaan."
        },
        {
          zh: "结构化分析是一种以过程为中心、可预测的方法，它用系统开发生命周期（SDLC）和瀑布模型来描述系统，交付物是各阶段的文档。",
          en: "Structured analysis is a process-centred, predictive approach that uses the systems development life cycle (SDLC) and the waterfall model to describe a system, and each phase produces a deliverable.",
          ms: "Analisis berstruktur ialah pendekatan berpusatkan proses dan bersifat ramalan yang menggunakan kitaran hayat pembangunan sistem (SDLC) dan model air terjun untuk menggambarkan sistem, dan setiap fasa menghasilkan satu hasil serahan."
        },
        {
          zh: "面向对象分析把数据与作用于数据的处理过程合并成对象，对象是类的成员，拥有属性，方法可以改变对象的属性，整体是一个交互式模型。",
          en: "Object-oriented analysis combines data and the processes that act on the data into objects; an object is a member of a class, objects possess properties, methods change an object's properties, and the model is interactive.",
          ms: "Analisis berorientasikan objek menggabungkan data dengan proses yang bertindak ke atas data itu menjadi objek; objek ialah anggota sesuatu kelas, objek mempunyai sifat, kaedah mengubah sifat objek, dan model ini bersifat interaktif."
        },
        {
          zh: "敏捷方法是最新的开发方法，强调持续反馈与迭代开发，敏捷社区发布了《敏捷宣言》，螺旋模型以及 Scrum、极限编程（XP）都是常见实践。",
          en: "Agile methods are the newest development approach and emphasize continuous feedback and iterative development; the agile community published the Agile Manifesto, and the spiral model, Scrum and Extreme Programming (XP) are common practices.",
          ms: "Kaedah tangkas ialah pendekatan pembangunan paling baharu dan menekankan maklum balas berterusan serta pembangunan berulang; komuniti tangkas menerbitkan Manifesto Tangkas, manakala model pilin, Scrum dan Pengaturcaraan Ekstrem (XP) ialah amalan yang biasa."
        },
        {
          zh: "本章给出五条开发准则：制定项目计划；让用户参与并认真倾听；用项目管理工具确定任务与里程碑；准备准确的成本效益信息；始终保持灵活。",
          en: "The chapter gives five guidelines for systems development: develop a project plan; involve users and listen carefully to them; use project management tools to identify tasks and milestones; develop accurate cost and benefit information; and remain flexible.",
          ms: "Bab ini memberikan lima garis panduan pembangunan sistem: sediakan pelan projek; libatkan pengguna dan dengar mereka dengan teliti; gunakan alat pengurusan projek untuk mengenal pasti tugas dan pencapaian; sediakan maklumat kos dan faedah yang tepat; dan sentiasa kekal fleksibel."
        },
        {
          zh: "今天的商业信息系统按功能而非用户群来分类，包括企业计算系统、事务处理系统、业务支持系统、知识管理系统和用户生产力系统，大型企业往往把它们集成起来使用。",
          en: "Business information systems today are identified by their functions rather than by their users: enterprise computing systems, transaction processing systems, business support systems, knowledge management systems and user productivity systems, and large firms usually integrate them.",
          ms: "Sistem maklumat perniagaan hari ini dikenal pasti melalui fungsinya dan bukan melalui kumpulan penggunanya: sistem pengkomputeran perusahaan, sistem pemprosesan transaksi, sistem sokongan perniagaan, sistem pengurusan pengetahuan dan sistem produktiviti pengguna, dan syarikat besar biasanya mengintegrasikannya."
        },
        {
          zh: "系统分析师负责把业务需求翻译成 IT 项目，因此既要有技术知识，也要有口头与书面沟通能力、分析能力、对业务运作的理解和批判性思维。",
          en: "A systems analyst translates business requirements into IT projects, so the job requires technical knowledge plus strong oral and written communication skills, analytic ability, an understanding of business operations and critical thinking skills.",
          ms: "Penganalisis sistem menterjemah keperluan perniagaan kepada projek IT, jadi jawatan ini memerlukan pengetahuan teknikal serta kemahiran komunikasi lisan dan bertulis yang kukuh, keupayaan analitik, kefahaman tentang operasi perniagaan dan kemahiran berfikir secara kritis."
        }
      ],
      terms: [
        { en: "Information Technology (IT)", zh: "信息技术", ms: "Teknologi Maklumat",
          def: { zh: "企业用来管理、存取、沟通和共享信息的硬件、软件产品与服务的组合。", en: "The combination of hardware and software products and services that a company uses to manage, access, communicate and share information.", ms: "Gabungan produk dan perkhidmatan perkakasan serta perisian yang digunakan syarikat untuk mengurus, mengakses, berkomunikasi dan berkongsi maklumat." } },
        { en: "Information System", zh: "信息系统", ms: "Sistem Maklumat",
          def: { zh: "由硬件、软件、数据、过程和人员五个部分组成，用来收集、处理并输出有价值信息的系统。", en: "A system made up of hardware, software, data, processes and people that collects, processes and produces valuable information.", ms: "Sistem yang terdiri daripada perkakasan, perisian, data, proses dan manusia yang mengumpul, memproses dan menghasilkan maklumat bernilai." } },
        { en: "Mission-critical system", zh: "关键任务系统", ms: "Sistem misi kritikal",
          def: { zh: "对公司日常运作生死攸关、一旦停摆业务就无法继续的信息系统。", en: "A system that is vital to a company's operations, so the business cannot continue if it stops working.", ms: "Sistem yang sangat penting kepada operasi syarikat sehingga perniagaan tidak dapat diteruskan jika ia berhenti berfungsi." } },
        { en: "Data", zh: "数据", ms: "Data",
          def: { zh: "构成系统原材料的基本事实，本身还没有经过加工。", en: "Basic facts that are the raw material of the system and have not yet been processed.", ms: "Fakta asas yang menjadi bahan mentah sistem dan belum diproses." } },
        { en: "Information", zh: "信息", ms: "Maklumat",
          def: { zh: "经过加工转换后对用户有价值的输出。", en: "Data that has been transformed into output that is valuable to users.", ms: "Data yang telah diproses menjadi output yang bernilai kepada pengguna." } },
        { en: "Stakeholder", zh: "利益相关者", ms: "Pihak berkepentingan",
          def: { zh: "在公司业务中有利害关系的人，包括管理层、员工、客户、供应商与股东。", en: "Anyone with a stake in the company's business, including managers, employees, customers, suppliers and shareholders.", ms: "Sesiapa yang mempunyai kepentingan dalam perniagaan syarikat, termasuk pengurusan, pekerja, pelanggan, pembekal dan pemegang saham." } },
        { en: "Systems Development Life Cycle (SDLC)", zh: "系统开发生命周期", ms: "Kitaran Hayat Pembangunan Sistem (SDLC)",
          def: { zh: "结构化分析所遵循的五阶段框架：系统规划、系统分析、系统设计、系统实施、系统支持与安全。", en: "The five-phase framework used in structured analysis: systems planning, systems analysis, systems design, systems implementation, and systems support and security.", ms: "Kerangka lima fasa dalam analisis berstruktur: perancangan sistem, analisis sistem, reka bentuk sistem, pelaksanaan sistem, serta sokongan dan keselamatan sistem." } },
        { en: "Waterfall model", zh: "瀑布模型", ms: "Model air terjun",
          def: { zh: "按顺序从一个阶段流向下一阶段的传统开发模型，缺点是各阶段之间缺乏互动。", en: "The traditional model in which one phase flows into the next in sequence; its weakness is the lack of interaction among phases.", ms: "Model tradisional yang mengalirkan satu fasa ke fasa berikutnya secara berurutan; kelemahannya ialah kurang interaksi antara fasa." } },
        { en: "Object-Oriented Analysis", zh: "面向对象分析", ms: "Analisis Berorientasikan Objek",
          def: { zh: "把数据与作用于数据的处理过程合并为对象，再从对象的角度描述系统的方法。", en: "An approach that combines data and the processes acting on it into objects, then describes the system from the viewpoint of those objects.", ms: "Pendekatan yang menggabungkan data dengan proses yang bertindak ke atasnya menjadi objek, kemudian menggambarkan sistem dari sudut objek tersebut." } },
        { en: "Agile Methods", zh: "敏捷方法", ms: "Kaedah Tangkas",
          def: { zh: "最新的开发方法，强调持续反馈、迭代开发和用户全程参与，如 Scrum 与极限编程。", en: "The newest development approach, emphasizing continuous feedback, iterative development and full user involvement, as in Scrum and Extreme Programming.", ms: "Pendekatan pembangunan terbaharu yang menekankan maklum balas berterusan, pembangunan berulang dan penglibatan penuh pengguna, seperti Scrum dan Pengaturcaraan Ekstrem." } },
        { en: "Prototyping", zh: "原型法", ms: "Pembinaan prototaip",
          def: { zh: "先做一个可运行的原型给用户看，以加快开发并澄清需求，但过早定型也可能带来风险。", en: "Building a working prototype for users to see, which speeds up development and clarifies requirements, though deciding too early carries risk.", ms: "Membina prototaip yang boleh dijalankan untuk dilihat pengguna, yang mempercepat pembangunan dan menjelaskan keperluan, walaupun membuat keputusan terlalu awal menimbulkan risiko." } },
        { en: "CASE Tools", zh: "计算机辅助系统工程工具", ms: "Alat CASE",
          def: { zh: "计算机辅助系统工程（或软件工程）工具，能帮助建模、记录文档，甚至自动生成程序代码。", en: "Computer-aided systems engineering (or software engineering) tools that help analysts model and document systems and can even generate program code.", ms: "Alat kejuruteraan sistem (atau perisian) berbantukan komputer yang membantu penganalisis memodel dan mendokumenkan sistem serta boleh menjana kod program." } },
        { en: "Business Process Reengineering (BPR)", zh: "业务流程重组", ms: "Kejuruteraan Semula Proses Perniagaan",
          def: { zh: "对关键业务流程作根本性的重新思考与彻底重新设计，以大幅改善成本、质量、服务与速度。", en: "Radical rethinking and redesign of key business processes to achieve dramatic improvements in cost, quality, service and speed.", ms: "Pemikiran semula dan reka bentuk semula proses perniagaan utama secara radikal untuk mencapai penambahbaikan besar dalam kos, kualiti, perkhidmatan dan kepantasan." } },
        { en: "Systems Analyst", zh: "系统分析师", ms: "Penganalisis Sistem",
          def: { zh: "负责规划、开发与维护信息系统，并在业务人员与技术团队之间充当翻译的人。", en: "The person who plans, develops and maintains information systems and acts as the translator between business people and the technical team.", ms: "Individu yang merancang, membangun dan menyelenggara sistem maklumat serta menjadi penghubung antara kakitangan perniagaan dengan pasukan teknikal." } }
      ],
      diagrams: [
        {
          type: "compare",
          title: { zh: "三大系统开发方法对比", en: "Three Systems Development Approaches Compared", ms: "Perbandingan Tiga Pendekatan Pembangunan Sistem" },
          caption: { zh: "结构化、面向对象与敏捷方法在关注点、模型与迭代程度上的差别。", en: "How structured, object-oriented and agile approaches differ in focus, model and degree of iteration.", ms: "Perbezaan pendekatan berstruktur, berorientasikan objek dan tangkas dari segi fokus, model dan tahap lelaran." },
          cols: [
            {
              head: { zh: "结构化分析", en: "Structured Analysis", ms: "Analisis Berstruktur" },
              items: [
                { label: { zh: "以过程为中心", en: "Process-centred", ms: "Berpusatkan proses" } },
                { label: { zh: "可预测方法（predictive）", en: "Predictive approach", ms: "Pendekatan bersifat ramalan" } },
                { label: { zh: "用 SDLC / 瀑布模型", en: "Uses SDLC / waterfall model", ms: "Menggunakan SDLC / model air terjun" } },
                { label: { zh: "五阶段顺序推进", en: "Five phases in sequence", ms: "Lima fasa mengikut urutan" } },
                { label: { zh: "缺点是阶段之间互动不足", en: "Weakness: little interaction between phases", ms: "Kelemahan: kurang interaksi antara fasa" } }
              ]
            },
            {
              head: { zh: "面向对象分析", en: "Object-Oriented Analysis", ms: "Analisis Berorientasikan Objek" },
              items: [
                { label: { zh: "以对象为中心", en: "Object-centred", ms: "Berpusatkan objek" } },
                { label: { zh: "数据与过程合并成对象", en: "Combines data and processes into objects", ms: "Menggabungkan data dan proses menjadi objek" } },
                { label: { zh: "交互式模型", en: "Interactive model", ms: "Model interaktif" } },
                { label: { zh: "对象属于某个类，拥有属性", en: "Objects belong to a class and have properties", ms: "Objek tergolong dalam sesuatu kelas dan mempunyai sifat" } },
                { label: { zh: "方法改变对象属性，消息请求行为", en: "Methods change properties, messages request behaviour", ms: "Kaedah mengubah sifat, mesej meminta tingkah laku" } }
              ]
            },
            {
              head: { zh: "敏捷方法", en: "Agile Methods", ms: "Kaedah Tangkas" },
              items: [
                { label: { zh: "最新出现的方法", en: "The newest approach", ms: "Pendekatan paling baharu" } },
                { label: { zh: "强调持续反馈", en: "Emphasizes continuous feedback", ms: "Menekankan maklum balas berterusan" } },
                { label: { zh: "迭代开发，过程决定结果", en: "Iterative; the process determines the result", ms: "Pembangunan berulang; proses menentukan hasil" } },
                { label: { zh: "《敏捷宣言》", en: "Agile Manifesto", ms: "Manifesto Tangkas" } },
                { label: { zh: "螺旋模型、Scrum、XP", en: "Spiral model, Scrum, XP", ms: "Model pilin, Scrum, XP" } }
              ]
            }
          ]
        },
        {
          type: "flow",
          dir: "h",
          title: { zh: "系统开发生命周期（SDLC）的五个阶段", en: "The Five Phases of the SDLC", ms: "Lima Fasa Kitaran Hayat Pembangunan Sistem" },
          caption: { zh: "每一阶段都有明确的交付物，前一阶段的成果是后一阶段的输入。", en: "Each phase has a clear deliverable, and the output of one phase becomes the input of the next.", ms: "Setiap fasa mempunyai hasil serahan yang jelas, dan output satu fasa menjadi input fasa berikutnya." },
          steps: [
            { label: { zh: "系统规划", en: "Systems Planning", ms: "Perancangan Sistem" }, note: { zh: "提出系统请求，做初步调查与可行性研究", en: "Systems request, preliminary investigation, feasibility study", ms: "Permintaan sistem, siasatan awal, kajian kebolehlaksanaan" } },
            { label: { zh: "系统分析", en: "Systems Analysis", ms: "Analisis Sistem" }, note: { zh: "交付系统需求文档", en: "Deliverable: system requirements document", ms: "Hasil serahan: dokumen keperluan sistem" } },
            { label: { zh: "系统设计", en: "Systems Design", ms: "Reka Bentuk Sistem" }, note: { zh: "交付系统设计说明书", en: "Deliverable: system design specification", ms: "Hasil serahan: spesifikasi reka bentuk sistem" } },
            { label: { zh: "系统实施", en: "Systems Implementation", ms: "Pelaksanaan Sistem" }, note: { zh: "构建并测试新系统", en: "The new system is constructed and tested", ms: "Sistem baharu dibina dan diuji" } },
            { label: { zh: "系统支持与安全", en: "Systems Support and Security", ms: "Sokongan dan Keselamatan Sistem" }, note: { zh: "系统必须安全、可靠、可维护、可扩展", en: "The system must be secure, reliable, maintainable, scalable", ms: "Sistem mesti selamat, boleh dipercayai, boleh diselenggara dan boleh diskalakan" } }
          ]
        }
      ],
      exam: [
        {
          zh: "常考：数据（data）与信息（information）的区别——数据是原始事实，信息是加工后对用户有价值的输出，选择题喜欢拿两者互换来设陷阱。",
          en: "Frequently tested: the difference between data and information - data are raw facts, information is transformed output valuable to users; multiple-choice questions often swap the two definitions to trap you.",
          ms: "Kerap diuji: perbezaan antara data dan maklumat - data ialah fakta mentah, maklumat ialah output yang telah diproses dan bernilai kepada pengguna; soalan objektif sering menukar kedua-dua takrif ini sebagai perangkap."
        },
        {
          zh: "必背：SDLC 五个阶段的名称与顺序（规划→分析→设计→实施→支持与安全），并记住每阶段的交付物，尤其是系统分析阶段的系统需求文档与设计阶段的系统设计说明书。",
          en: "Must memorize: the five SDLC phases in order (planning, analysis, design, implementation, support and security) and each phase's deliverable, especially the system requirements document in analysis and the system design specification in design.",
          ms: "Wajib hafal: lima fasa SDLC mengikut urutan (perancangan, analisis, reka bentuk, pelaksanaan, sokongan dan keselamatan) serta hasil serahan setiap fasa, terutamanya dokumen keperluan sistem dalam fasa analisis dan spesifikasi reka bentuk sistem dalam fasa reka bentuk."
        },
        {
          zh: "易错点：把结构化分析说成“以数据为中心”或把面向对象分析说成“以过程为中心”——正确说法是结构化分析以过程为中心，面向对象分析把数据与过程合并成对象。",
          en: "Common mistake: calling structured analysis 'data-centred' or object-oriented analysis 'process-centred' - structured analysis is process-centred, while O-O analysis combines data and processes into objects.",
          ms: "Kesilapan biasa: menyatakan analisis berstruktur 'berpusatkan data' atau analisis berorientasikan objek 'berpusatkan proses' - analisis berstruktur berpusatkan proses, manakala analisis berorientasikan objek menggabungkan data dan proses menjadi objek."
        },
        {
          zh: "案例分析题常问：五条系统开发准则是什么，以及为什么“让用户参与”和“保持灵活”在真实项目中如此重要。",
          en: "Case questions often ask for the five systems development guidelines and why 'involve users' and 'remain flexible' matter so much in real projects.",
          ms: "Soalan kes sering meminta lima garis panduan pembangunan sistem dan sebab 'libatkan pengguna' serta 'kekal fleksibel' begitu penting dalam projek sebenar."
        }
      ],
      mnemonic: {
        zh: "信息系统五部件记成“硬软数人过”——硬件、软件、数据、人员、过程。",
        en: "Remember the five components as 'HaS-Da-Pe-Pe': Hardware, Software, Data, People, Processes.",
        ms: "Ingat lima komponen sebagai 'KePe-Data-Pro-Ma': Perkakasan, Perisian, Data, Proses, Manusia."
      }
    },
    {
      id: "sadm-02",
      num: 2,
      title: { zh: "商业论证", en: "Business Justification", ms: "Justifikasi Perniagaan" },
      file: "sadm/CHAP2_SADM.pdf",
      pages: 41,
      summary: {
        zh: "本章讲一个系统项目“该不该做、值不值得做”。先介绍商业论证（business case）的概念与战略规划框架，包括 SWOT 分析、使命宣言、目标与目的。然后说明系统请求如何由系统评审委员会评估，以及可行性研究的四个方面：操作可行性、技术可行性、经济可行性和进度可行性。最后详细拆解初步调查的六个步骤与最终提交给管理层的报告结构。",
        en: "This chapter answers two questions about any systems project: should it be done, and is it worth doing? It introduces the business case and the strategic planning framework, including SWOT analysis, the mission statement, goals and objectives. It then shows how systems requests are evaluated by a systems review committee and explains the four feasibility tests: operational, technical, economic and schedule feasibility. Finally it breaks down the six steps of a preliminary investigation and the report that is presented to management.",
        ms: "Bab ini menjawab dua soalan tentang mana-mana projek sistem: patutkah ia dilaksanakan, dan adakah ia berbaloi? Bab ini memperkenalkan konsep justifikasi perniagaan serta kerangka perancangan strategik, termasuk analisis SWOT, pernyataan misi, matlamat dan objektif. Seterusnya, ia menunjukkan bagaimana permintaan sistem dinilai oleh jawatankuasa semakan sistem dan menerangkan empat ujian kebolehlaksanaan: kebolehlaksanaan operasi, teknikal, ekonomi dan jadual. Akhir sekali, ia menghuraikan enam langkah siasatan awal dan laporan yang dibentangkan kepada pihak pengurusan."
      },
      points: [
        {
          zh: "商业论证（business case）指的是支持一个提案的理由与依据；一份有力的商业论证应当说明为什么这个方案比其他方案更符合公司的最佳利益。",
          en: "A business case refers to the reasons, or justification, for a proposal; a strong business case shows why the alternative should be pursued above other options because it is in the firm's best interest.",
          ms: "Justifikasi perniagaan merujuk kepada sebab atau alasan bagi sesuatu cadangan; justifikasi yang kukuh menunjukkan mengapa sesuatu alternatif patut dipilih berbanding pilihan lain kerana ia memberi faedah terbaik kepada syarikat."
        },
        {
          zh: "系统开发通常从一个系统请求开始，接着是初步调查，而初步调查的核心内容之一就是可行性研究。",
          en: "Systems development typically starts with a systems request, followed by a preliminary investigation, and a feasibility study is a key part of that investigation.",
          ms: "Pembangunan sistem biasanya bermula dengan permintaan sistem, diikuti siasatan awal, dan kajian kebolehlaksanaan merupakan bahagian penting dalam siasatan tersebut."
        },
        {
          zh: "战略规划让公司审视自己的宗旨、愿景与价值观，先形成使命宣言，再层层落实为目标、目的、日常运作与业务成果。",
          en: "Strategic planning lets a company examine its purpose, vision and values, producing a mission statement that leads to goals, objectives, day-to-day operations and business results.",
          ms: "Perancangan strategik membolehkan syarikat meneliti tujuan, visi dan nilainya, lalu menghasilkan pernyataan misi yang membawa kepada matlamat, objektif, operasi harian dan hasil perniagaan."
        },
        {
          zh: "SWOT 分析从四个因素入手：优势（Strengths）、劣势（Weaknesses）、机会（Opportunities）和威胁（Threats），前两者来自内部，后两者来自外部。",
          en: "SWOT analysis looks at four factors: Strengths, Weaknesses, Opportunities and Threats, with the first two coming from inside the firm and the last two from the external environment.",
          ms: "Analisis SWOT meneliti empat faktor: Kekuatan, Kelemahan, Peluang dan Ancaman, dengan dua yang pertama datang dari dalam syarikat manakala dua yang terakhir dari persekitaran luar."
        },
        {
          zh: "系统请求一般由系统评审委员会（或计算机资源委员会）评估，目标是评估请求并排定优先级；小公司则可能只由一个人负责。",
          en: "Systems requests are usually evaluated by a systems review committee (or computer resources committee) whose goal is to evaluate the requests and set priorities; smaller companies may rely on one person instead.",
          ms: "Permintaan sistem biasanya dinilai oleh jawatankuasa semakan sistem (atau jawatankuasa sumber komputer) yang bertujuan menilai permintaan dan menetapkan keutamaan; syarikat kecil mungkin bergantung pada seorang individu sahaja."
        },
        {
          zh: "可行性研究包含四个方面：操作可行性看系统能否真正被用户接受和使用，技术可行性看现有技术与人手能否做到。",
          en: "A feasibility study has four parts: operational feasibility asks whether the system will really be accepted and used, and technical feasibility asks whether current technology and staff can build it.",
          ms: "Kajian kebolehlaksanaan mempunyai empat bahagian: kebolehlaksanaan operasi menilai sama ada sistem benar-benar diterima dan digunakan, manakala kebolehlaksanaan teknikal menilai sama ada teknologi dan kakitangan sedia ada mampu membinanya."
        },
        {
          zh: "经济可行性用总拥有成本（TCO）以及有形效益和无形效益来判断项目是否划算，分析师应尽量用可量化的金额来评估。",
          en: "Economic feasibility uses total cost of ownership (TCO) together with tangible and intangible benefits to judge whether the project pays off, and analysts should quantify costs and benefits in dollar values whenever possible.",
          ms: "Kebolehlaksanaan ekonomi menggunakan jumlah kos pemilikan (TCO) serta faedah nyata dan tidak nyata untuk menilai sama ada projek berbaloi, dan penganalisis harus mengira kos dan faedah dalam nilai wang jika boleh."
        },
        {
          zh: "进度可行性判断项目能否在合理的时间内完成；可行性分析不是一次性工作，而要在整个开发过程中持续进行。",
          en: "Schedule feasibility asks whether the project can be completed in a reasonable time, and feasibility analysis is an ongoing task that must be performed throughout the systems development process.",
          ms: "Kebolehlaksanaan jadual menilai sama ada projek dapat disiapkan dalam tempoh yang munasabah, dan analisis kebolehlaksanaan ialah tugas berterusan sepanjang proses pembangunan sistem."
        },
        {
          zh: "初步调查分六步：理解问题或机会、界定项目范围与约束、开展事实收集、分析可用性/成本/效益/进度数据、评估可行性，最后向管理层提交结果与建议。",
          en: "The preliminary investigation has six steps: understand the problem or opportunity; define the project scope and constraints; perform fact-finding; analyze usability, cost, benefit and schedule data; evaluate feasibility; and present results and recommendations to management.",
          ms: "Siasatan awal mempunyai enam langkah: fahami masalah atau peluang; tetapkan skop dan kekangan projek; jalankan pencarian fakta; analisis data kebolehgunaan, kos, faedah dan jadual; nilai kebolehlaksanaan; dan bentangkan hasil serta cadangan kepada pengurusan."
        },
        {
          zh: "调查问题成因时常用鱼骨图（Ishikawa 图）；界定范围时要防止“项目蔓延”（project creep），并尽早识别所有约束以免日后出现意外。",
          en: "A fishbone (Ishikawa) diagram is a popular technique for investigating causes and effects; when defining scope, guard against project creep and identify all constraints as early as possible to avoid future surprises.",
          ms: "Gambar rajah tulang ikan (Ishikawa) ialah teknik popular untuk menyiasat punca dan kesan; semasa menetapkan skop, elakkan 'perembetan projek' dan kenal pasti semua kekangan seawal mungkin untuk mengelakkan kejutan pada masa hadapan."
        }
      ],
      terms: [
        { en: "Business Case", zh: "商业论证", ms: "Justifikasi Perniagaan",
          def: { zh: "支持某个提案的理由与依据，通常要说明项目效益、成本与财务影响。", en: "The reasons or justification for a proposal, usually describing the project's benefits, costs and financial impact.", ms: "Sebab atau alasan bagi sesuatu cadangan, biasanya menerangkan faedah, kos dan kesan kewangan projek." } },
        { en: "Strategic Planning", zh: "战略规划", ms: "Perancangan Strategik",
          def: { zh: "公司审视自身宗旨、愿景与价值观，并据此制定使命、目标与目的的过程。", en: "The process in which a company examines its purpose, vision and values and sets its mission, goals and objectives.", ms: "Proses syarikat meneliti tujuan, visi dan nilainya lalu menetapkan misi, matlamat dan objektifnya." } },
        { en: "SWOT Analysis", zh: "SWOT 分析", ms: "Analisis SWOT",
          def: { zh: "从优势、劣势、机会、威胁四个方面评估公司处境的分析方法。", en: "An analysis that assesses a firm's situation through Strengths, Weaknesses, Opportunities and Threats.", ms: "Analisis yang menilai kedudukan syarikat melalui Kekuatan, Kelemahan, Peluang dan Ancaman." } },
        { en: "Mission Statement", zh: "使命宣言", ms: "Pernyataan Misi",
          def: { zh: "用一段话说明公司存在的原因、服务对象与核心价值，是战略规划的起点。", en: "A statement of why the company exists, whom it serves and its core values; it is the starting point of strategic planning.", ms: "Pernyataan tentang sebab syarikat wujud, siapa yang dilayaninya dan nilai terasnya; ia menjadi titik permulaan perancangan strategik." } },
        { en: "Systems Request", zh: "系统请求", ms: "Permintaan Sistem",
          def: { zh: "由用户或管理层提出、描述现有问题或期望改变的正式请求，标志项目启动。", en: "A formal request from users or management describing a problem or desired change; it begins the project.", ms: "Permintaan rasmi daripada pengguna atau pengurusan yang menerangkan masalah atau perubahan yang diingini; ia memulakan projek." } },
        { en: "Systems Review Committee", zh: "系统评审委员会", ms: "Jawatankuasa Semakan Sistem",
          def: { zh: "负责评估系统请求并为其排定优先级的委员会，大公司几乎都设有。", en: "A committee that evaluates systems requests and sets their priorities; most large companies have one.", ms: "Jawatankuasa yang menilai permintaan sistem dan menetapkan keutamaannya; hampir semua syarikat besar mempunyainya." } },
        { en: "Operational Feasibility", zh: "操作可行性", ms: "Kebolehlaksanaan Operasi",
          def: { zh: "判断新系统能否被用户接受、是否真正符合业务运作需要。", en: "Whether the new system will be accepted by users and will genuinely fit the way the business operates.", ms: "Sama ada sistem baharu akan diterima pengguna dan benar-benar menepati cara perniagaan beroperasi." } },
        { en: "Technical Feasibility", zh: "技术可行性", ms: "Kebolehlaksanaan Teknikal",
          def: { zh: "判断公司现有的技术、人员与经验能否在可接受的条件下实现该项目。", en: "Whether the company's existing technology, staff and experience can deliver the project under acceptable conditions.", ms: "Sama ada teknologi, kakitangan dan pengalaman sedia ada syarikat mampu melaksanakan projek itu dalam keadaan yang boleh diterima." } },
        { en: "Economic Feasibility", zh: "经济可行性", ms: "Kebolehlaksanaan Ekonomi",
          def: { zh: "通过总拥有成本与有形/无形效益判断项目在经济上是否值得做。", en: "Judging whether the project is financially worthwhile through total cost of ownership and tangible or intangible benefits.", ms: "Menilai sama ada projek berbaloi dari segi kewangan melalui jumlah kos pemilikan serta faedah nyata atau tidak nyata." } },
        { en: "Schedule Feasibility", zh: "进度可行性", ms: "Kebolehlaksanaan Jadual",
          def: { zh: "判断项目能否在合理且可接受的期限内完成。", en: "Whether the project can be completed within a reasonable and acceptable time period.", ms: "Sama ada projek dapat disiapkan dalam tempoh yang munasabah dan boleh diterima." } },
        { en: "Total Cost of Ownership (TCO)", zh: "总拥有成本", ms: "Jumlah Kos Pemilikan (TCO)",
          def: { zh: "除购置成本外，还包括维护、支持、培训和运行等全部生命周期成本。", en: "The full life-cycle cost of a system, including not only acquisition but also maintenance, support, training and operation.", ms: "Kos penuh sepanjang kitaran hayat sistem, termasuk bukan sahaja perolehan tetapi juga penyelenggaraan, sokongan, latihan dan operasi." } },
        { en: "Tangible Benefit", zh: "有形效益", ms: "Faedah Nyata",
          def: { zh: "可以用金额衡量的效益，例如减少人力成本或降低库存费用。", en: "A benefit that can be measured in money, such as lower labour or inventory costs.", ms: "Faedah yang boleh diukur dengan wang, contohnya pengurangan kos buruh atau kos inventori." } },
        { en: "Intangible Benefit", zh: "无形效益", ms: "Faedah Tidak Nyata",
          def: { zh: "难以用金额衡量但确实存在的效益，例如客户满意度提升或员工士气改善。", en: "A benefit that is difficult to measure in money but is real, such as higher customer satisfaction or better staff morale.", ms: "Faedah yang sukar diukur dengan wang tetapi nyata, seperti kepuasan pelanggan yang meningkat atau semangat pekerja yang lebih baik." } },
        { en: "Discretionary Project", zh: "可自由裁量项目", ms: "Projek Budi Bicara",
          def: { zh: "管理层可以选择做或不做的项目；与其相对的是别无选择、必须做的非自由裁量项目。", en: "A project that management has a choice about implementing; the opposite is a nondiscretionary project, where no choice exists.", ms: "Projek yang pelaksanaannya boleh dipilih oleh pengurusan; lawannya ialah projek bukan budi bicara, iaitu projek yang wajib dilaksanakan." } },
        { en: "Preliminary Investigation", zh: "初步调查", ms: "Siasatan Awal",
          def: { zh: "在系统规划阶段对系统请求所做的调查，包括理解问题、界定范围、事实收集、数据分析、可行性评估与提交报告。", en: "The investigation of a systems request during systems planning, covering problem understanding, scope definition, fact-finding, data analysis, feasibility evaluation and the report to management.", ms: "Siasatan terhadap permintaan sistem dalam fasa perancangan, merangkumi kefahaman masalah, penetapan skop, pencarian fakta, analisis data, penilaian kebolehlaksanaan dan laporan kepada pengurusan." } }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "v",
          title: { zh: "初步调查的六个步骤", en: "The Six Steps of a Preliminary Investigation", ms: "Enam Langkah Siasatan Awal" },
          caption: { zh: "步骤 1-3 先弄清问题与范围，步骤 4-5 分析数据并评估可行性，步骤 6 面向管理层汇报。", en: "Steps 1-3 clarify the problem and scope, steps 4-5 analyse the data and evaluate feasibility, and step 6 reports to management.", ms: "Langkah 1-3 menjelaskan masalah dan skop, langkah 4-5 menganalisis data dan menilai kebolehlaksanaan, manakala langkah 6 melaporkan kepada pengurusan." },
          steps: [
            { label: { zh: "1 理解问题或机会", en: "1 Understand the problem or opportunity", ms: "1 Fahami masalah atau peluang" }, note: { zh: "常用鱼骨图分析成因", en: "Often uses a fishbone diagram", ms: "Selalunya menggunakan gambar rajah tulang ikan" } },
            { label: { zh: "2 界定项目范围与约束", en: "2 Define project scope and constraints", ms: "2 Tetapkan skop dan kekangan projek" }, note: { zh: "警惕项目蔓延", en: "Beware of project creep", ms: "Berhati-hati dengan perembetan projek" } },
            { label: { zh: "3 开展事实收集", en: "3 Perform fact-finding", ms: "3 Jalankan pencarian fakta" }, note: { zh: "访谈、查文档、现场观察、问卷调查", en: "Interviews, documentation review, observation, surveys", ms: "Temu bual, semakan dokumen, pemerhatian, tinjauan" } },
            { label: { zh: "4 分析可用性/成本/效益/进度数据", en: "4 Analyze usability, cost, benefit and schedule data", ms: "4 Analisis data kebolehgunaan, kos, faedah dan jadual" }, note: { zh: "为可行性评估准备数据", en: "Prepares data for feasibility evaluation", ms: "Menyediakan data untuk penilaian kebolehlaksanaan" } },
            { label: { zh: "5 评估可行性", en: "5 Evaluate feasibility", ms: "5 Nilai kebolehlaksanaan" }, note: { zh: "操作、技术、经济、进度", en: "Operational, technical, economic, schedule", ms: "Operasi, teknikal, ekonomi, jadual" } },
            { label: { zh: "6 向管理层提交结果与建议", en: "6 Present results and recommendations to management", ms: "6 Bentangkan hasil dan cadangan kepada pengurusan" }, note: { zh: "报告含引言、发现、行动理由、估算与附录", en: "Report: introduction, findings, case for action, estimates, appendix", ms: "Laporan: pengenalan, penemuan, hujah tindakan, anggaran, lampiran" } }
          ]
        },
        {
          type: "tree",
          title: { zh: "可行性研究的四个方面", en: "The Four Feasibility Tests", ms: "Empat Ujian Kebolehlaksanaan" },
          caption: { zh: "任何系统请求都必须通过这四道测试才值得继续投入。", en: "A systems request must pass all four tests before further investment is worthwhile.", ms: "Permintaan sistem mesti lulus keempat-empat ujian ini sebelum pelaburan lanjut berbaloi." },
          root: { label: { zh: "可行性研究", en: "Feasibility Study", ms: "Kajian Kebolehlaksanaan" } },
          branches: [
            { label: { zh: "操作可行性", en: "Operational Feasibility", ms: "Kebolehlaksanaan Operasi" }, leaves: [
              { label: { zh: "用户能否接受", en: "Will users accept it?", ms: "Adakah pengguna menerimanya?" } },
              { label: { zh: "是否符合业务运作", en: "Does it fit business operations?", ms: "Adakah ia menepati operasi perniagaan?" } }
            ] },
            { label: { zh: "技术可行性", en: "Technical Feasibility", ms: "Kebolehlaksanaan Teknikal" }, leaves: [
              { label: { zh: "技术是否成熟可用", en: "Is the technology available?", ms: "Adakah teknologi tersedia?" } },
              { label: { zh: "人员与经验是否足够", en: "Are staff and skills sufficient?", ms: "Adakah kakitangan dan kemahiran mencukupi?" } }
            ] },
            { label: { zh: "经济可行性", en: "Economic Feasibility", ms: "Kebolehlaksanaan Ekonomi" }, leaves: [
              { label: { zh: "总拥有成本 TCO", en: "Total cost of ownership", ms: "Jumlah kos pemilikan" } },
              { label: { zh: "有形与无形效益", en: "Tangible and intangible benefits", ms: "Faedah nyata dan tidak nyata" } }
            ] },
            { label: { zh: "进度可行性", en: "Schedule Feasibility", ms: "Kebolehlaksanaan Jadual" }, leaves: [
              { label: { zh: "能否在合理时间内完成", en: "Can it finish in reasonable time?", ms: "Bolehkah siap dalam masa munasabah?" } },
              { label: { zh: "成果能维持多久", en: "How long will the results last?", ms: "Berapa lama hasilnya bertahan?" } }
            ] }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：四种可行性的定义与识别场景。题目常给一段案例，让你判断它属于操作、技术、经济还是进度可行性。",
          en: "A must: the definitions of the four feasibility types and how to recognise them. Questions often give a scenario and ask whether it is operational, technical, economic or schedule feasibility.",
          ms: "Wajib: takrif empat jenis kebolehlaksanaan dan cara mengenal pastinya. Soalan sering memberikan senario dan meminta anda menentukan sama ada ia kebolehlaksanaan operasi, teknikal, ekonomi atau jadual."
        },
        {
          zh: "易混淆：有形效益与无形效益。能折算成金额的（如节省人力成本）是有形效益，难以量化的（如客户满意度）是无形效益。",
          en: "Easily confused: tangible versus intangible benefits. Anything convertible to money (such as labour savings) is tangible; things hard to quantify (such as customer satisfaction) are intangible.",
          ms: "Mudah keliru: faedah nyata berbanding faedah tidak nyata. Apa-apa yang boleh ditukar kepada wang (seperti penjimatan buruh) ialah faedah nyata; perkara yang sukar diukur (seperti kepuasan pelanggan) ialah faedah tidak nyata."
        },
        {
          zh: "简答题高频：初步调查六个步骤的顺序，以及最后那份报告应包含哪些内容（引言、系统请求摘要、发现、行动理由、项目角色、时间与成本估算、预期效益、附录）。",
          en: "Frequent short-answer question: the order of the six preliminary investigation steps, and what the final report must contain (introduction, systems request summary, findings, case for action, project roles, time and cost estimates, expected benefits, appendix).",
          ms: "Soalan jawapan pendek yang kerap: urutan enam langkah siasatan awal, dan kandungan laporan akhir (pengenalan, ringkasan permintaan sistem, penemuan, hujah tindakan, peranan projek, anggaran masa dan kos, faedah yang dijangka, lampiran)."
        },
        {
          zh: "注意区分“可自由裁量项目”和“非自由裁量项目”：前者管理层可以选做不做，后者是法规、合同或生存所迫、别无选择必须做。",
          en: "Be careful to distinguish discretionary from nondiscretionary projects: management may choose whether to do the former, while the latter must be done because of law, contract or survival.",
          ms: "Bezakan projek budi bicara daripada projek bukan budi bicara: pengurusan boleh memilih untuk projek pertama, manakala projek kedua wajib dilaksanakan kerana undang-undang, kontrak atau keperluan untuk terus hidup."
        }
      ],
      mnemonic: {
        zh: "SWOT 记成“优劣势机危”，初步调查六步记成“题-围-事-数-可-报”。",
        en: "SWOT stands for Strengths, Weaknesses, Opportunities, Threats; the six preliminary investigation steps are 'Problem, Scope, Facts, Data, Feasibility, Report'.",
        ms: "SWOT ialah Kekuatan, Kelemahan, Peluang, Ancaman; enam langkah siasatan awal ialah 'Masalah, Skop, Fakta, Data, Kebolehlaksanaan, Laporan'."
      }
    },
    {
      id: "sadm-03",
      num: 3,
      title: { zh: "项目管理", en: "Project Management", ms: "Pengurusan Projek" },
      file: "sadm/CHP3_SADM.pdf",
      pages: 44,
      summary: {
        zh: "本章讲如何让一个信息系统项目按时、按预算、按质量完成。核心内容是项目管理的四大活动——计划、排程、监控与汇报，以及三个关键步骤：建立工作分解结构（WBS）、识别任务模式、计算关键路径。本章还介绍了甘特图与 PERT/CPM 图的用途差别、时间与成本的估算方法（含三点加权估算公式）、项目监控与结构化走查、项目状态报告，以及风险管理的五个步骤和项目失败（成本超支、进度延误）的常见原因。",
        en: "This chapter is about delivering an information systems project on time, within budget and at the required quality. Its core is the four project management activities - planning, scheduling, monitoring and controlling, and reporting - and three key steps: creating a work breakdown structure (WBS), identifying task patterns, and calculating the critical path. It also covers when to use a Gantt chart versus a PERT/CPM chart, how to estimate task duration (including the weighted three-point formula) and cost, project monitoring with structured walkthroughs, project status reports, the five steps of risk management, and the usual causes of project failure such as cost overruns and schedule delays.",
        ms: "Bab ini membincangkan cara menyiapkan projek sistem maklumat tepat pada masa, dalam bajet dan pada kualiti yang dikehendaki. Terasnya ialah empat aktiviti pengurusan projek - perancangan, penjadualan, pemantauan dan kawalan, serta pelaporan - dan tiga langkah utama: membina struktur pecahan kerja (WBS), mengenal pasti corak tugas, dan mengira laluan kritikal. Bab ini juga merangkumi penggunaan carta Gantt berbanding carta PERT/CPM, cara menganggar tempoh tugas (termasuk formula pemberat tiga titik) dan kos, pemantauan projek melalui semakan berstruktur, laporan status projek, lima langkah pengurusan risiko, serta punca biasa kegagalan projek seperti lebihan kos dan kelewatan jadual."
      },
      points: [
        {
          zh: "项目管理就是对信息系统的开发进行计划、排程、监控与控制以及汇报；一个成功的项目必须按时完成、不超预算，并交付满足用户需求与系统需求的高质量产品。",
          en: "Project management is the process of planning, scheduling, monitoring and controlling, and reporting on the development of an information system; a successful project must be completed on time, within budget, and deliver a quality product that satisfies users and meets requirements.",
          ms: "Pengurusan projek ialah proses merancang, menjadual, memantau dan mengawal, serta melaporkan pembangunan sistem maklumat; projek yang berjaya mesti disiapkan tepat pada masa, dalam bajet, dan menghasilkan produk berkualiti yang memenuhi keperluan pengguna."
        },
        {
          zh: "步骤一建立工作分解结构（WBS）：把项目逐层拆成更小的任务，并区分任务（task/activity）与事件或里程碑（event/milestone）；通常用一张含任务编号、描述、工期和前驱任务的表格来列出任务。",
          en: "Step 1 is to create a work breakdown structure (WBS) by breaking the project down into smaller tasks, distinguishing a task or activity from an event or milestone, and usually listing them in a table with task number, description, duration and predecessor tasks.",
          ms: "Langkah 1 ialah membina struktur pecahan kerja (WBS) dengan memecahkan projek kepada tugas yang lebih kecil, membezakan tugas atau aktiviti daripada peristiwa atau pencapaian, dan biasanya menyenaraikannya dalam jadual yang mengandungi nombor tugas, keterangan, tempoh dan tugas pendahulu."
        },
        {
          zh: "估算工期时可用人日（person-days），并采用三点加权公式：(B + 4P + W) / 6，其中 B 是最乐观估计、P 是最可能估计、W 是最悲观估计。",
          en: "Task duration can be estimated in person-days using the weighted three-point formula (B + 4P + W) / 6, where B is the best-case estimate, P the probable-case estimate and W the worst-case estimate.",
          ms: "Tempoh tugas boleh dianggar dalam unit hari-orang menggunakan formula pemberat tiga titik (B + 4P + W) / 6, dengan B ialah anggaran kes terbaik, P anggaran kes berkemungkinan dan W anggaran kes terburuk."
        },
        {
          zh: "步骤二识别任务模式：任务之间相互依赖、必须按顺序执行，常见模式有依赖任务、多个后继任务（并发任务）和多个前驱任务，任务描述里的 then、when、and 等词往往暗示了先后顺序。",
          en: "Step 2 is to identify task patterns: tasks depend on each other and must be performed in sequence, and the common patterns are dependent tasks, multiple successor tasks (concurrent tasks) and multiple predecessor tasks; words such as then, when and and in the task statement signal that sequence.",
          ms: "Langkah 2 ialah mengenal pasti corak tugas: tugas saling bergantung dan mesti dilaksanakan mengikut urutan, dan corak biasa ialah tugas bersandar, berbilang tugas pengganti (tugas serentak) serta berbilang tugas pendahulu; perkataan seperti then, when dan and dalam pernyataan tugas menandakan urutan itu."
        },
        {
          zh: "步骤三计算关键路径：先复核任务模式，再确定每个任务的开始与完成日期，从而找出项目的关键路径；关键路径上的任务一旦延误就会拖累整个项目，非关键路径上的任务则有浮动时间（slack time）。",
          en: "Step 3 is to calculate the critical path: review the task patterns, determine start and finish dates for each task, and so identify the project's critical path; a delay on the critical path delays the whole project, while tasks off the critical path have slack time.",
          ms: "Langkah 3 ialah mengira laluan kritikal: semak semula corak tugas, tentukan tarikh mula dan tamat setiap tugas, lalu kenal pasti laluan kritikal projek; kelewatan pada laluan kritikal melambatkan seluruh projek, manakala tugas di luar laluan kritikal mempunyai masa lapang (slack time)."
        },
        {
          zh: "甘特图能给出项目状态的整体快照，但管理复杂项目时信息不够细；PERT/CPM 属于自下而上的技术，更适合排程、监控与控制实际工作，两种图并不互斥，项目经理常常同时使用。",
          en: "A Gantt chart gives a valuable snapshot of project status but not enough detail for managing a complex project, whereas PERT/CPM is a bottom-up technique that is more useful for scheduling, monitoring and controlling the actual work; the two are not mutually exclusive and managers often use both.",
          ms: "Carta Gantt memberikan gambaran keseluruhan status projek tetapi tidak cukup terperinci untuk mengurus projek kompleks, manakala PERT/CPM ialah teknik dari bawah ke atas yang lebih berguna untuk penjadualan, pemantauan dan kawalan kerja sebenar; kedua-duanya tidak saling mengecualikan dan pengurus sering menggunakan kedua-duanya."
        },
        {
          zh: "监控与控制要求项目经理跟踪任务与成员进度、把实际进度与计划比较、核实里程碑是否完成、制定标准并确保标准被遵守；结构化走查（structured walkthrough）就是其中一种手段，也叫设计评审、代码评审或测试评审。",
          en: "Monitoring and control require the project manager to keep track of tasks and team progress, compare actual progress with the plan, verify completion of milestones, and set and enforce standards; a structured walkthrough - also called a design, code or testing review - is one such technique.",
          ms: "Pemantauan dan kawalan menuntut pengurus projek menjejak tugas dan kemajuan ahli pasukan, membandingkan kemajuan sebenar dengan pelan, mengesahkan pencapaian pencapaian penting, serta menetapkan dan memastikan piawaian dipatuhi; semakan berstruktur - juga dikenali sebagai semakan reka bentuk, kod atau pengujian - ialah salah satu tekniknya."
        },
        {
          zh: "汇报包括项目状态会议与定期的项目状态报告，项目经理要向上级主管、高层管理者和用户汇报；大多数管理者都知道项目出问题是常态，所以越早通报越好，而不是拖到最后。",
          en: "Reporting includes project status meetings and regular project status reports to the immediate supervisor, upper management and users; most managers accept that problems occur on most projects, so it is better to alert them sooner rather than later.",
          ms: "Pelaporan merangkumi mesyuarat status projek dan laporan status projek yang berkala kepada penyelia langsung, pengurusan atasan dan pengguna; kebanyakan pengurus menerima hakikat bahawa masalah memang berlaku dalam kebanyakan projek, jadi lebih baik dimaklumkan lebih awal daripada terlambat."
        },
        {
          zh: "风险管理的五个步骤是：制定风险管理计划、识别风险、分析风险（定性分析与定量分析）、制定风险应对计划、监控风险；最终是否接受风险往往由管理层决定。",
          en: "The five steps in risk management are: develop a risk management plan, identify the risks, analyze the risks (qualitative and quantitative analysis), create a risk response plan, and monitor risks; the final decision on accepting a risk is often made by management.",
          ms: "Lima langkah pengurusan risiko ialah: sediakan pelan pengurusan risiko, kenal pasti risiko, analisis risiko (analisis kualitatif dan kuantitatif), sediakan pelan tindak balas risiko, dan pantau risiko; keputusan akhir untuk menerima sesuatu risiko selalunya dibuat oleh pihak pengurusan."
        },
        {
          zh: "成本超支通常源于：估算不切实际、没有准确预估项目全生命周期的所有成本、进度监控不力且对早期警号反应太慢、不可预见的进度延误，以及人员流失、培训不足和士气问题等人力资源因素。",
          en: "Cost overruns typically result from unrealistic estimates, failure to forecast all costs over the life of the project, poor monitoring and slow response to early warning signs, unforeseen schedule delays, and human resource issues such as turnover, inadequate training and motivation.",
          ms: "Lebihan kos biasanya berpunca daripada anggaran yang tidak realistik, kegagalan meramal semua kos sepanjang hayat projek, pemantauan yang lemah dan tindak balas lewat terhadap tanda amaran awal, kelewatan jadual yang tidak dijangka, serta isu sumber manusia seperti pusing ganti pekerja, latihan yang tidak mencukupi dan motivasi."
        }
      ],
      terms: [
        { en: "Project Management", zh: "项目管理", ms: "Pengurusan Projek",
          def: { zh: "对信息系统的开发进行计划、排程、监控与控制并定期汇报的全过程。", en: "The process of planning, scheduling, monitoring and controlling, and reporting on the development of an information system.", ms: "Proses merancang, menjadual, memantau dan mengawal, serta melaporkan pembangunan sistem maklumat." } },
        { en: "Work Breakdown Structure (WBS)", zh: "工作分解结构", ms: "Struktur Pecahan Kerja (WBS)",
          def: { zh: "把项目逐层拆解为可管理的小任务所形成的清单或结构。", en: "The list or structure created by breaking a project down into smaller, manageable tasks.", ms: "Senarai atau struktur yang terhasil apabila projek dipecahkan kepada tugas kecil yang boleh diurus." } },
        { en: "Task (Activity)", zh: "任务（活动）", ms: "Tugas (Aktiviti)",
          def: { zh: "WBS 中需要投入时间与资源去完成的具体工作单元。", en: "A specific unit of work in the WBS that requires time and resources to complete.", ms: "Unit kerja tertentu dalam WBS yang memerlukan masa dan sumber untuk disiapkan." } },
        { en: "Event or Milestone", zh: "事件（里程碑）", ms: "Peristiwa atau Pencapaian Penting",
          def: { zh: "项目中没有工期、用于标示重要节点的时点，如设计完成或系统上线。", en: "A point in the project with no duration that marks an important stage, such as design completion or go-live.", ms: "Titik dalam projek tanpa tempoh yang menandakan peringkat penting, seperti selesainya reka bentuk atau pelancaran sistem." } },
        { en: "Gantt Chart", zh: "甘特图", ms: "Carta Gantt",
          def: { zh: "用横向条形表示各任务起止时间的排程图，能快速展示项目整体状态。", en: "A scheduling chart with horizontal bars showing each task's start and end time, giving a quick overview of project status.", ms: "Carta penjadualan dengan bar mendatar yang menunjukkan masa mula dan tamat setiap tugas, memberikan gambaran keseluruhan status projek." } },
        { en: "PERT/CPM", zh: "计划评审技术/关键路径法", ms: "PERT/CPM",
          def: { zh: "Program Evaluation Review Technique 与 Critical Path Method 的合称，是一种自下而上的网络分析技术。", en: "The Program Evaluation Review Technique and Critical Path Method, used together as a bottom-up network analysis technique.", ms: "Gabungan Program Evaluation Review Technique dan Critical Path Method yang digunakan sebagai teknik analisis rangkaian dari bawah ke atas." } },
        { en: "Critical Path", zh: "关键路径", ms: "Laluan Kritikal",
          def: { zh: "项目中耗时最长的一串任务，它决定项目的最短完成时间，任何延误都会推迟整个项目。", en: "The longest sequence of tasks in a project; it determines the shortest possible completion time, and any delay postpones the whole project.", ms: "Urutan tugas terpanjang dalam projek; ia menentukan masa siap terpendek, dan sebarang kelewatan akan melambatkan seluruh projek." } },
        { en: "Slack Time", zh: "浮动时间（时差）", ms: "Masa Lapang",
          def: { zh: "非关键路径任务可以推迟而不影响项目完成日期的余量。", en: "The amount by which a non-critical task can be delayed without affecting the project completion date.", ms: "Jumlah kelewatan yang dibenarkan bagi tugas bukan kritikal tanpa menjejaskan tarikh siap projek." } },
        { en: "Task Pattern", zh: "任务模式", ms: "Corak Tugas",
          def: { zh: "任务之间依赖关系的类型，包括依赖任务、多后继任务和多前驱任务。", en: "The type of dependency among tasks, including dependent tasks, multiple successor tasks and multiple predecessor tasks.", ms: "Jenis kebergantungan antara tugas, termasuk tugas bersandar, berbilang tugas pengganti dan berbilang tugas pendahulu." } },
        { en: "Successor / Predecessor Task", zh: "后继任务 / 前驱任务", ms: "Tugas Pengganti / Tugas Pendahulu",
          def: { zh: "后继任务必须等前驱任务完成后才能开始；前驱任务则是它必须等待的那个任务。", en: "A successor task cannot start until its predecessor task is finished; the predecessor is the task it must wait for.", ms: "Tugas pengganti tidak boleh bermula sebelum tugas pendahulu selesai; tugas pendahulu ialah tugas yang perlu ditunggu." } },
        { en: "Structured Walkthrough", zh: "结构化走查", ms: "Semakan Berstruktur",
          def: { zh: "由团队按既定流程对设计、代码或测试成果进行同行评审，也叫设计评审、代码评审或测试评审。", en: "A formal peer review of designs, code or test results, also called a design review, code review or testing review.", ms: "Semakan rakan setara secara formal terhadap reka bentuk, kod atau hasil pengujian, juga dikenali sebagai semakan reka bentuk, kod atau pengujian." } },
        { en: "Risk Management", zh: "风险管理", ms: "Pengurusan Risiko",
          def: { zh: "制定风险计划、识别、分析、制定应对计划并持续监控风险的整套做法。", en: "The practice of planning for, identifying, analyzing, responding to and continuously monitoring project risks.", ms: "Amalan merancang, mengenal pasti, menganalisis, bertindak balas dan memantau risiko projek secara berterusan." } },
        { en: "Brooks' Law", zh: "布鲁克斯法则", ms: "Hukum Brooks",
          def: { zh: "向已经延误的项目增加人手只会让它更晚完成，因为沟通与培训成本随之上升。", en: "Adding manpower to a late project only makes it later, because communication and training overhead grows.", ms: "Menambah tenaga kerja kepada projek yang sudah lewat hanya melambatkannya lagi, kerana kos komunikasi dan latihan meningkat." } },
        { en: "Project Creep", zh: "项目蔓延", ms: "Perembetan Projek",
          def: { zh: "项目范围在未经批准的情况下不断扩张，导致预算与工期失控。", en: "The uncontrolled expansion of project scope without approval, which pushes budget and schedule out of control.", ms: "Peluasan skop projek tanpa kelulusan yang menyebabkan bajet dan jadual hilang kawalan." } }
      ],
      diagrams: [
        {
          type: "timeline",
          title: { zh: "甘特图示例：系统开发项目的任务排程", en: "Gantt Chart Example: Task Schedule of a Systems Project", ms: "Contoh Carta Gantt: Jadual Tugas Projek Sistem" },
          caption: { zh: "横条的长度代表任务工期，重叠部分表示任务可以并发进行。", en: "Bar length shows task duration, and overlapping bars mean the tasks run concurrently.", ms: "Panjang bar menunjukkan tempoh tugas, dan bar yang bertindih bermaksud tugas berjalan serentak." },
          unit: { zh: "工作日", en: "Working days", ms: "Hari bekerja" },
          max: 20,
          bars: [
            { label: { zh: "1 项目启动与范围界定", en: "1 Project initiation and scope", ms: "1 Permulaan projek dan skop" }, start: 0, len: 2, color: "a1" },
            { label: { zh: "2 事实收集（访谈）", en: "2 Fact-finding (interviews)", ms: "2 Pencarian fakta (temu bual)" }, start: 2, len: 4, color: "a2" },
            { label: { zh: "3 需求建模", en: "3 Requirements modeling", ms: "3 Pemodelan keperluan" }, start: 6, len: 5, color: "a3" },
            { label: { zh: "4 数据与过程建模", en: "4 Data and process modeling", ms: "4 Pemodelan data dan proses" }, start: 6, len: 5, color: "a4" },
            { label: { zh: "5 编写系统需求文档", en: "5 System requirements document", ms: "5 Dokumen keperluan sistem" }, start: 11, len: 3, color: "a5" },
            { label: { zh: "6 里程碑：需求评审通过", en: "6 Milestone: requirements review", ms: "6 Pencapaian: semakan keperluan" }, start: 14, len: 1, color: "a6" }
          ]
        },
        {
          type: "matrix",
          title: { zh: "三种主要任务模式及其识别", en: "Three Main Task Patterns and How to Spot Them", ms: "Tiga Corak Tugas Utama dan Cara Mengenal Pastinya" },
          cols: [
            { zh: "任务模式", en: "Task pattern", ms: "Corak tugas" },
            { zh: "含义", en: "Meaning", ms: "Maksud" },
            { zh: "识别线索", en: "How to spot it", ms: "Petunjuk mengenal pasti" }
          ],
          rows: [
            { head: { zh: "依赖任务", en: "Dependent tasks", ms: "Tugas bersandar" },
              cells: [
                { zh: "后一个任务必须等前一个完成后才开始", en: "The later task cannot start until the earlier one finishes", ms: "Tugas kemudian tidak boleh bermula sebelum tugas awal selesai" },
                { zh: "任务描述里出现 then（然后）", en: "The wording uses then", ms: "Pernyataan tugas menggunakan perkataan then" },
                { zh: "形成一条直线式的任务链", en: "Forms a straight chain of tasks", ms: "Membentuk rantaian tugas yang lurus" }
              ] },
            { head: { zh: "多后继任务", en: "Multiple successor tasks", ms: "Berbilang tugas pengganti" },
              cells: [
                { zh: "一个任务完成后，多个任务可以并发开始", en: "After one task finishes, several tasks can start concurrently", ms: "Selepas satu tugas selesai, beberapa tugas boleh bermula serentak" },
                { zh: "出现 when（当……时）或 and（并且）", en: "Signalled by when or and", ms: "Ditandai oleh when atau and" },
                { zh: "一个前驱任务分叉出多条并行的线", en: "One predecessor fans out into parallel lines", ms: "Satu tugas pendahulu bercabang kepada beberapa baris selari" }
              ] },
            { head: { zh: "多前驱任务", en: "Multiple predecessor tasks", ms: "Berbilang tugas pendahulu" },
              cells: [
                { zh: "一个任务必须等多个前置任务全部完成后才开始", en: "A task cannot start until several earlier tasks have all finished", ms: "Sesuatu tugas hanya boleh bermula selepas beberapa tugas terdahulu semuanya selesai" },
                { zh: "多条任务线汇聚到同一个任务", en: "Several task lines converge on one task", ms: "Beberapa baris tugas bertemu pada satu tugas" },
                { zh: "常见于测试、集成等收尾环节", en: "Common in testing or integration steps", ms: "Biasa dalam langkah pengujian atau integrasi" }
              ] },
            { head: { zh: "复杂组合", en: "Complex combination", ms: "Gabungan kompleks" },
              cells: [
                { zh: "同时包含依赖、多后继与多前驱关系", en: "Combines dependent, multiple-successor and multiple-predecessor relations", ms: "Menggabungkan hubungan bersandar, berbilang pengganti dan berbilang pendahulu" },
                { zh: "必须逐条研究事实陈述才能理清逻辑顺序", en: "The facts must be studied carefully to work out the logical sequence", ms: "Fakta perlu dikaji dengan teliti untuk memahami urutan logiknya" },
                { zh: "关键路径往往出现在这类网络中", en: "The critical path usually emerges from such a network", ms: "Laluan kritikal biasanya muncul daripada rangkaian sebegini" }
              ] }
          ]
        }
      ],
      exam: [
        {
          zh: "计算题高频：给定任务清单、工期与依赖关系，要求画出 PERT/CPM 网络图并找出关键路径与浮动时间。这类题一定要先理清任务模式再算日期。",
          en: "A favourite calculation question: given a task list with durations and dependencies, draw the PERT/CPM network and find the critical path and slack time. Always work out the task patterns before computing the dates.",
          ms: "Soalan pengiraan kegemaran: diberi senarai tugas dengan tempoh dan kebergantungan, lukis rangkaian PERT/CPM dan cari laluan kritikal serta masa lapang. Tentukan corak tugas dahulu sebelum mengira tarikh."
        },
        {
          zh: "必背公式：三点加权工期估算 (B + 4P + W) / 6 中，B 是最乐观、P 是最可能、W 是最悲观；考试常把它与简单的算术平均混在一起考。",
          en: "Must-know formula: in the weighted estimate (B + 4P + W) / 6, B is best case, P probable case and W worst case; exams often mix it up with a plain arithmetic average.",
          ms: "Formula wajib: dalam anggaran pemberat (B + 4P + W) / 6, B ialah kes terbaik, P kes berkemungkinan dan W kes terburuk; peperiksaan sering mengelirukannya dengan purata aritmetik biasa."
        },
        {
          zh: "对比题：甘特图与 PERT/CPM 图各自的优缺点。要点是甘特图擅长展示整体状态，PERT/CPM 更利于排程、监控与控制，二者可同时使用。",
          en: "Comparison question: the pros and cons of Gantt charts versus PERT/CPM charts. The key point is that Gantt charts show overall status well, while PERT/CPM is better for scheduling, monitoring and control, and the two can be used together.",
          ms: "Soalan perbandingan: kebaikan dan keburukan carta Gantt berbanding carta PERT/CPM. Pokoknya, carta Gantt menunjukkan status keseluruhan dengan baik manakala PERT/CPM lebih baik untuk penjadualan, pemantauan dan kawalan, dan kedua-duanya boleh digunakan bersama."
        },
        {
          zh: "案例题常问成本超支与进度延误的成因（估算不实、监控不力、需求蔓延、人员流失等），以及风险管理五个步骤的顺序。",
          en: "Case questions often ask for the causes of cost overruns and schedule delays (unrealistic estimates, poor monitoring, project creep, staff turnover) and the order of the five risk management steps.",
          ms: "Soalan kes sering meminta punca lebihan kos dan kelewatan jadual (anggaran tidak realistik, pemantauan lemah, perembetan projek, pusing ganti pekerja) serta urutan lima langkah pengurusan risiko."
        }
      ],
      mnemonic: {
        zh: "项目管理四活动：计（计划）、排（排程）、控（监控）、报（汇报）；风险管理五步：计-识-析-应-监。",
        en: "Four project management activities: Plan, Schedule, Monitor/Control, Report; five risk management steps: Plan, Identify, Analyze, Respond, Monitor.",
        ms: "Empat aktiviti pengurusan projek: Rancang, Jadual, Pantau/Kawal, Lapor; lima langkah pengurusan risiko: Rancang, Kenal pasti, Analisis, Tindak balas, Pantau."
      }
    },
    {
      id: "sadm-04",
      num: 4,
      title: { zh: "需求建模", en: "Requirements Modeling", ms: "Pemodelan Keperluan" },
      file: "sadm/CHP4_SADM.pdf",
      pages: 45,
      summary: {
        zh: "本章进入系统开发生命周期的第二个阶段——系统分析。学生要了解系统分析的三大活动（需求建模、数据与过程建模、开发策略选择）及其交付物系统需求文档，掌握 JAD、RAD 与敏捷方法这些团队式技术。本章还讲解功能分解图（FDD）与 UML 中的用例图、顺序图，给出系统需求清单的五个类别（输出、输入、处理、性能、控制）与可扩展性、总拥有成本的概念，并系统介绍事实收集技术：访谈七步法、文档审阅、观察、问卷与抽样、研究等。",
        en: "This chapter moves into systems analysis, the second SDLC phase. Students learn the three systems analysis activities (requirements modeling, data and process modeling, and choosing development strategies), the deliverable of the phase - the system requirements document - and team-based techniques such as JAD, RAD and agile methods. It also explains the functional decomposition diagram (FDD) and UML tools including use case and sequence diagrams, gives the five categories of the system requirements checklist (outputs, inputs, processes, performance, controls), introduces scalability and total cost of ownership, and surveys fact-finding techniques: the seven-step interview, document review, observation, questionnaires and sampling, and research.",
        ms: "Bab ini memasuki analisis sistem, iaitu fasa kedua SDLC. Pelajar mempelajari tiga aktiviti analisis sistem (pemodelan keperluan, pemodelan data dan proses, serta pemilihan strategi pembangunan), hasil serahan fasa ini iaitu dokumen keperluan sistem, dan teknik berpasukan seperti JAD, RAD dan kaedah tangkas. Bab ini juga menerangkan gambar rajah penguraian fungsi (FDD) dan alat UML termasuk gambar rajah kes penggunaan serta gambar rajah jujukan, memberikan lima kategori senarai semak keperluan sistem (output, input, proses, prestasi, kawalan), memperkenalkan kebolehlaksanaan penskalaan dan jumlah kos pemilikan, serta meninjau teknik pencarian fakta: temu bual tujuh langkah, semakan dokumen, pemerhatian, soal selidik dan persampelan, serta penyelidikan."
      },
      points: [
        {
          zh: "系统分析是 SDLC 的第二个阶段，总体目标是理解拟建项目、确保它能支持业务需求，并为后续的系统设计打下扎实基础；这一阶段用模型和文档把新系统可视化地描述出来。",
          en: "Systems analysis is the second of the five SDLC phases; its overall objective is to understand the proposed project, ensure that it supports business requirements and build a solid foundation for systems design, using models and documentation to visualize the new system.",
          ms: "Analisis sistem ialah fasa kedua daripada lima fasa SDLC; objektif utamanya ialah memahami projek yang dicadangkan, memastikan ia menyokong keperluan perniagaan dan membina asas kukuh untuk reka bentuk sistem, dengan menggunakan model dan dokumentasi untuk menggambarkan sistem baharu."
        },
        {
          zh: "系统分析阶段包含三项活动：需求建模、数据与过程建模、对象建模，并要考虑各种开发策略，最终交付系统需求文档。",
          en: "The systems analysis phase includes three activities - requirements modeling, data and process modeling, and object modeling - together with consideration of development strategies, and its end product is the system requirements document.",
          ms: "Fasa analisis sistem merangkumi tiga aktiviti - pemodelan keperluan, pemodelan data dan proses, serta pemodelan objek - di samping pertimbangan strategi pembangunan, dan hasil akhirnya ialah dokumen keperluan sistem."
        },
        {
          zh: "系统需求清单分为五类：输出（outputs）、输入（inputs）、处理（processes）、性能（performance）和控制（controls），需求必须写得具体、可检验，例如“系统必须支持 25 个用户同时在线，响应时间不超过 4 秒”。",
          en: "The system requirements checklist has five categories: outputs, inputs, processes, performance and controls, and requirements must be specific and testable, for example 'the system must support 25 users online simultaneously and response time must not exceed four seconds'.",
          ms: "Senarai semak keperluan sistem mempunyai lima kategori: output, input, proses, prestasi dan kawalan, dan keperluan mesti khusus serta boleh diuji, contohnya 'sistem mesti menyokong 25 pengguna dalam talian serentak dan masa tindak balas tidak boleh melebihi empat saat'."
        },
        {
          zh: "JAD（联合应用开发）让关键用户全程深度参与：用得当可以获得更准确的需求陈述、对共同目标更好的理解以及对新系统更强的承诺；缺点是费用较高，若小组相对于项目规模过大还会变得笨重低效。",
          en: "Joint application development (JAD) involves key users deeply: used properly it produces a more accurate statement of requirements, a better understanding of common goals and a stronger commitment to the new system; its drawbacks are higher cost and, if the group is too large for the project, a cumbersome process.",
          ms: "Pembangunan aplikasi bersama (JAD) melibatkan pengguna utama secara mendalam: jika digunakan dengan betul, ia menghasilkan pernyataan keperluan yang lebih tepat, kefahaman yang lebih baik tentang matlamat bersama dan komitmen yang lebih kukuh terhadap sistem baharu; kelemahannya ialah kos yang lebih tinggi dan proses yang menyusahkan jika kumpulan terlalu besar berbanding projek."
        },
        {
          zh: "RAD（快速应用开发）的目标是通过让用户参与开发的每个阶段来缩短时间与降低成本，团队需要 IT 资源、技能与管理层支持，特别适合交互性强或界面复杂的系统；但 RAD 偏重系统机制本身，容易忽略公司的战略业务需求，也可能压缩制定质量与设计标准的时间。",
          en: "Rapid application development (RAD) aims to cut development time and expense by involving users in every phase; the team needs IT resources, skills and management support, and RAD suits systems with a highly interactive or complex user interface, but it stresses the mechanics of the system rather than strategic business needs and may leave too little time for quality, consistency and design standards.",
          ms: "Pembangunan aplikasi pantas (RAD) bertujuan memendekkan masa dan mengurangkan kos pembangunan dengan melibatkan pengguna dalam setiap fasa; pasukan memerlukan sumber IT, kemahiran dan sokongan pengurusan, dan RAD sesuai untuk sistem yang sangat interaktif atau mempunyai antara muka kompleks, tetapi ia menekankan mekanisme sistem dan bukan keperluan strategik perniagaan serta mungkin menyediakan terlalu sedikit masa untuk kualiti, keseragaman dan piawaian reka bentuk."
        },
        {
          zh: "敏捷方法采用增量式开发；Scrum 一词来自橄榄球，其中“猪”（产品负责人、引导者、开发团队）全身投入，“鸡”（用户、其他利益相关者与管理者）只是参与；敏捷应对变化灵活高效、频繁交付可不断验证项目并降低风险，但要求成员具备很高的技术与人际技能，且范围容易发生较大变动。",
          en: "Agile methods develop a system incrementally; Scrum comes from rugby, where the pigs (product owner, facilitator and development team) are committed while the chickens (users, other stakeholders and managers) are merely involved; agile is flexible and efficient in dealing with change and frequent deliverables validate the project and reduce risk, but team members need a high level of technical and interpersonal skills and scope may change significantly.",
          ms: "Kaedah tangkas membangunkan sistem secara berperingkat; Scrum berasal daripada sukan ragbi, di mana 'babi' (pemilik produk, pemudah cara dan pasukan pembangunan) komited sepenuhnya manakala 'ayam' (pengguna, pihak berkepentingan lain dan pengurus) hanya terlibat; kaedah tangkas fleksibel dan cekap menangani perubahan serta penghasilan kerap mengesahkan projek dan mengurangkan risiko, tetapi ahli pasukan memerlukan kemahiran teknikal dan interpersonal yang tinggi dan skop boleh berubah dengan ketara."
        },
        {
          zh: "功能分解图（FDD）用自上而下的树状结构表示业务功能与流程，帮助分析员和用户看清系统由哪些功能组成、各功能又如何细分。",
          en: "A functional decomposition diagram (FDD) represents business functions and processes in a top-down, tree-like structure, helping analysts and users see which functions make up the system and how each function breaks down.",
          ms: "Gambar rajah penguraian fungsi (FDD) mewakili fungsi dan proses perniagaan dalam struktur pokok dari atas ke bawah, membantu penganalisis dan pengguna melihat fungsi yang membentuk sistem dan cara setiap fungsi dipecahkan."
        },
        {
          zh: "可扩展性（scalability）指系统在业务量增长时能否方便地扩充、改变或缩减；要评估可扩展性，必须掌握所有输出、输入与处理在未来的预计业务量，而总拥有成本（TCO）在比较多个方案时尤为重要，因为成本估算往往低估了间接成本。",
          en: "Scalability is a system's ability to expand, change or downsize easily; to evaluate it you need projected future volumes for all outputs, inputs and processes, and total cost of ownership (TCO) matters especially when comparing several alternatives because cost estimates tend to understate indirect costs.",
          ms: "Kebolehlaksanaan penskalaan ialah keupayaan sistem untuk dikembangkan, diubah atau dikecilkan dengan mudah; untuk menilainya, anda memerlukan unjuran volum masa hadapan bagi semua output, input dan proses, dan jumlah kos pemilikan (TCO) amat penting apabila membandingkan beberapa alternatif kerana anggaran kos cenderung meremehkan kos tidak langsung."
        },
        {
          zh: "事实收集技术包括访谈、文档审阅、观察、问卷与调查、抽样和研究；抽样又分系统抽样、分层抽样与随机抽样，其首要目标是保证样本能准确代表整体。",
          en: "Fact-finding techniques include interviews, document review, observation, questionnaires and surveys, sampling and research; sampling can be systematic, stratified or random, and its main objective is to ensure the sample accurately represents the overall population.",
          ms: "Teknik pencarian fakta merangkumi temu bual, semakan dokumen, pemerhatian, soal selidik dan tinjauan, persampelan serta penyelidikan; persampelan boleh bersifat sistematik, berstrata atau rawak, dan objektif utamanya ialah memastikan sampel mewakili keseluruhan populasi dengan tepat."
        },
        {
          zh: "访谈要按七个步骤进行：确定访谈对象、设定访谈目标、设计问题、做好准备、实施访谈、记录访谈、评估访谈；问题要避免诱导性提问，可用开放式、封闭式和范围式问题，每次访谈最好不超过一小时，并注意观察中可能出现的霍桑效应。",
          en: "An interview follows seven steps: determine the people to interview, establish objectives, develop questions, prepare for the interview, conduct it, document it and evaluate it; avoid leading questions, use open-ended, closed-ended and range-of-response questions, keep the interview to no more than one hour, and watch for the Hawthorne Effect during observation.",
          ms: "Temu bual mengikut tujuh langkah: tentukan orang yang hendak ditemu bual, tetapkan objektif, sediakan soalan, buat persiapan, jalankan temu bual, dokumenkan dan nilai hasilnya; elakkan soalan yang mengarah, gunakan soalan terbuka, tertutup dan berskala jawapan, bataskan temu bual kepada tidak lebih satu jam, dan berhati-hati dengan Kesan Hawthorne semasa pemerhatian."
        }
      ],
      terms: [
        { en: "Requirements Modeling", zh: "需求建模", ms: "Pemodelan Keperluan",
          def: { zh: "用模型、图表等工具把新系统需要做什么描述清楚的活动，是系统分析阶段的首要工作。", en: "The activity of describing what the new system must do using models and diagrams; it is the first task of the systems analysis phase.", ms: "Aktiviti menerangkan apa yang perlu dilakukan oleh sistem baharu melalui model dan gambar rajah; ia merupakan tugas pertama fasa analisis sistem." } },
        { en: "System Requirements Document", zh: "系统需求文档", ms: "Dokumen Keperluan Sistem",
          def: { zh: "系统分析阶段的交付物，完整记录新系统必须满足的各项需求。", en: "The deliverable of the systems analysis phase, recording all the requirements the new system must satisfy.", ms: "Hasil serahan fasa analisis sistem yang merekodkan semua keperluan yang mesti dipenuhi oleh sistem baharu." } },
        { en: "Joint Application Development (JAD)", zh: "联合应用开发", ms: "Pembangunan Aplikasi Bersama (JAD)",
          def: { zh: "让关键用户与 IT 人员组成团队、共同定义需求的团队式技术。", en: "A team-based technique in which key users and IT staff work together to define requirements.", ms: "Teknik berpasukan yang menggabungkan pengguna utama dan kakitangan IT untuk mentakrifkan keperluan." } },
        { en: "Rapid Application Development (RAD)", zh: "快速应用开发", ms: "Pembangunan Aplikasi Pantas (RAD)",
          def: { zh: "通过让用户参与每个阶段来压缩开发时间与成本的开发策略，适合交互性强的系统。", en: "A development strategy that compresses time and cost by involving users in every phase, suited to highly interactive systems.", ms: "Strategi pembangunan yang memendekkan masa dan kos dengan melibatkan pengguna dalam setiap fasa, sesuai untuk sistem yang sangat interaktif." } },
        { en: "Agile Methods", zh: "敏捷方法", ms: "Kaedah Tangkas",
          def: { zh: "以增量方式反复交付可用软件的开发方法，能灵活应对需求变化。", en: "Development approaches that deliver working software incrementally and repeatedly, responding flexibly to changing requirements.", ms: "Pendekatan pembangunan yang menghasilkan perisian berfungsi secara berperingkat dan berulang, serta fleksibel terhadap perubahan keperluan." } },
        { en: "Scrum", zh: "Scrum 框架", ms: "Scrum",
          def: { zh: "源自橄榄球术语的敏捷框架，强调时间盒、互动与团队活动，成员分“猪”与“鸡”两类角色。", en: "An agile framework named after a rugby term that emphasizes time blocks, interaction and team activities, with 'pigs' and 'chickens' roles.", ms: "Kerangka tangkas yang diambil daripada istilah ragbi dan menekankan blok masa, interaksi serta aktiviti berpasukan, dengan peranan 'babi' dan 'ayam'." } },
        { en: "Functional Decomposition Diagram (FDD)", zh: "功能分解图", ms: "Gambar Rajah Penguraian Fungsi (FDD)",
          def: { zh: "自上而下展示业务功能及其细分结构的图，用于梳理系统要实现的各项功能。", en: "A top-down diagram showing business functions and their subdivisions, used to lay out the functions the system must provide.", ms: "Gambar rajah dari atas ke bawah yang menunjukkan fungsi perniagaan dan pecahannya, digunakan untuk menyusun fungsi yang perlu disediakan sistem." } },
        { en: "Unified Modeling Language (UML)", zh: "统一建模语言", ms: "Unified Modeling Language (UML)",
          def: { zh: "面向对象分析的标准建模符号体系，包括用例图、类图、顺序图、状态转换图与活动图等。", en: "The standard notation for object-oriented modeling, including use case, class, sequence, state transition and activity diagrams.", ms: "Notasi piawai untuk pemodelan berorientasikan objek, termasuk gambar rajah kes penggunaan, kelas, jujukan, peralihan keadaan dan aktiviti." } },
        { en: "Use Case Diagram", zh: "用例图", ms: "Gambar Rajah Kes Penggunaan",
          def: { zh: "描述参与者（actor）与系统之间功能交互的 UML 图。", en: "A UML diagram that shows the functional interaction between actors and the system.", ms: "Gambar rajah UML yang menunjukkan interaksi fungsi antara pelaku dengan sistem." } },
        { en: "Sequence Diagram", zh: "顺序图", ms: "Gambar Rajah Jujukan",
          def: { zh: "按时间顺序展示对象之间消息传递的 UML 图，用于描述一次交互的细节。", en: "A UML diagram showing the messages passed between objects in time order, used to detail one interaction.", ms: "Gambar rajah UML yang menunjukkan mesej antara objek mengikut urutan masa, digunakan untuk memperincikan satu interaksi." } },
        { en: "Scalability", zh: "可扩展性", ms: "Kebolehlaksanaan Penskalaan",
          def: { zh: "系统随业务量变化而方便扩充、改变或缩减的能力，可扩展的系统投资回报更好。", en: "A system's ability to expand, change or downsize easily as business volume changes; a scalable system gives a better return on investment.", ms: "Keupayaan sistem untuk dikembangkan, diubah atau dikecilkan dengan mudah mengikut perubahan volum perniagaan; sistem yang boleh diskalakan memberi pulangan pelaburan yang lebih baik." } },
        { en: "Total Cost of Ownership (TCO)", zh: "总拥有成本", ms: "Jumlah Kos Pemilikan (TCO)",
          def: { zh: "系统全生命周期的总成本，评估多个方案时尤其重要，因为估算常低估间接成本。", en: "The full life-cycle cost of a system, especially important when evaluating alternatives because estimates often understate indirect costs.", ms: "Kos penuh sepanjang kitaran hayat sistem, penting terutamanya semasa menilai alternatif kerana anggaran sering meremehkan kos tidak langsung." } },
        { en: "Fact-Finding", zh: "事实收集", ms: "Pencarian Fakta",
          def: { zh: "通过访谈、文档审阅、观察、问卷、抽样和研究等手段收集真实信息的过程。", en: "The process of gathering information through interviews, document review, observation, questionnaires, sampling and research.", ms: "Proses mengumpul maklumat melalui temu bual, semakan dokumen, pemerhatian, soal selidik, persampelan dan penyelidikan." } },
        { en: "Hawthorne Effect", zh: "霍桑效应", ms: "Kesan Hawthorne",
          def: { zh: "被观察者因为知道自己正在被观察而改变行为的现象，会干扰观察结果的真实性。", en: "The tendency of people being observed to change their behaviour because they know they are watched, which distorts observation results.", ms: "Kecenderungan orang yang diperhatikan mengubah tingkah laku kerana mereka tahu sedang diperhati, sehingga menjejaskan ketepatan hasil pemerhatian." } },
        { en: "Stratified Sample", zh: "分层抽样", ms: "Persampelan Berstrata",
          def: { zh: "先把总体按特征分成若干层，再从每层中抽取样本的抽样方法。", en: "A sampling method that first divides the population into strata by characteristic and then draws samples from each stratum.", ms: "Kaedah persampelan yang membahagikan populasi kepada strata mengikut ciri, kemudian mengambil sampel daripada setiap strata." } }
      ],
      diagrams: [
        {
          type: "tree",
          title: { zh: "功能分解图（FDD）示例：订单处理系统", en: "Functional Decomposition Diagram (FDD) Example: Order Processing System", ms: "Contoh Gambar Rajah Penguraian Fungsi (FDD): Sistem Pemprosesan Pesanan" },
          caption: { zh: "FDD 自上而下逐层展开业务功能，顶层是系统，下面是各项功能及其子功能。", en: "An FDD breaks business functions down from the top; the system is at the root, with functions and sub-functions below.", ms: "FDD menguraikan fungsi perniagaan dari atas ke bawah; sistem berada di akar, diikuti fungsi dan sub-fungsi di bawahnya." },
          root: { label: { zh: "订单处理系统", en: "Order Processing System", ms: "Sistem Pemprosesan Pesanan" } },
          branches: [
            { label: { zh: "订单管理", en: "Order Management", ms: "Pengurusan Pesanan" }, leaves: [
              { label: { zh: "录入订单", en: "Enter order", ms: "Masukkan pesanan" } },
              { label: { zh: "修改订单", en: "Modify order", ms: "Ubah pesanan" } },
              { label: { zh: "取消订单", en: "Cancel order", ms: "Batalkan pesanan" } }
            ] },
            { label: { zh: "库存检查", en: "Inventory Check", ms: "Semakan Inventori" }, leaves: [
              { label: { zh: "查询可用数量", en: "Check quantity available", ms: "Semak kuantiti tersedia" } },
              { label: { zh: "预留库存", en: "Allocate stock", ms: "Peruntukkan stok" } }
            ] },
            { label: { zh: "收款处理", en: "Payment Processing", ms: "Pemprosesan Pembayaran" }, leaves: [
              { label: { zh: "计算总额与折扣", en: "Calculate total and discount", ms: "Kira jumlah dan diskaun" } },
              { label: { zh: "生成发票", en: "Generate invoice", ms: "Jana invois" } }
            ] },
            { label: { zh: "报表输出", en: "Reporting", ms: "Penjanaan Laporan" }, leaves: [
              { label: { zh: "每日销售报表", en: "Daily sales report", ms: "Laporan jualan harian" } },
              { label: { zh: "库存状态报表", en: "Inventory status report", ms: "Laporan status inventori" } }
            ] }
          ]
        },
        {
          type: "matrix",
          title: { zh: "系统需求清单的五个类别", en: "The Five Categories of the System Requirements Checklist", ms: "Lima Kategori Senarai Semak Keperluan Sistem" },
          cols: [
            { zh: "要问的问题", en: "Question to ask", ms: "Soalan yang perlu ditanya" },
            { zh: "讲义中的例子", en: "Example from the lecture", ms: "Contoh daripada kuliah" }
          ],
          rows: [
            { head: { zh: "输出 Outputs", en: "Outputs", ms: "Output" },
              cells: [
                { zh: "系统要产生哪些报表、屏幕或文件？", en: "What reports, screens or documents must the system produce?", ms: "Laporan, skrin atau dokumen apa yang perlu dihasilkan sistem?" },
                { zh: "网站每四小时报告一次在线流量，高峰期每小时一次", en: "The Web site must report online volume statistics every four hours and hourly during peak periods", ms: "Laman web mesti melaporkan statistik volum dalam talian setiap empat jam dan setiap jam pada waktu puncak" }
              ] },
            { head: { zh: "输入 Inputs", en: "Inputs", ms: "Input" },
              cells: [
                { zh: "数据从哪里、以什么形式进入系统？", en: "Where and in what form does data enter the system?", ms: "Dari mana dan dalam bentuk apa data masuk ke dalam sistem?" },
                { zh: "生产员工必须刷工号卡录入工时与产量效率数据", en: "Manufacturing employees must swipe ID cards into terminals that record labour costs and calculate production efficiency", ms: "Pekerja pengeluaran mesti mengesek kad ID untuk merekod kos buruh dan mengira kecekapan pengeluaran" }
              ] },
            { head: { zh: "处理 Processes", en: "Processes", ms: "Proses" },
              cells: [
                { zh: "系统要对数据做哪些计算、转换与更新？", en: "What calculations, transformations and updates must the system perform?", ms: "Pengiraan, pengubahan dan pengemaskinian apa yang perlu dilakukan sistem?" },
                { zh: "学生成绩系统必须在每学期末计算 GPA", en: "The student records system must calculate the GPA at the end of each semester", ms: "Sistem rekod pelajar mesti mengira GPA pada hujung setiap semester" }
              ] },
            { head: { zh: "性能 Performance", en: "Performance", ms: "Prestasi" },
              cells: [
                { zh: "系统要支持多少用户、响应多快、吞吐量多大？", en: "How many users, how fast a response and how much throughput must it support?", ms: "Berapa ramai pengguna, berapa pantas tindak balas dan berapa besar daya pemprosesan yang perlu disokong?" },
                { zh: "必须支持 25 个用户同时在线，响应时间不超过 4 秒", en: "Must support 25 users online simultaneously and response time must not exceed four seconds", ms: "Mesti menyokong 25 pengguna serentak dan masa tindak balas tidak melebihi empat saat" }
              ] },
            { head: { zh: "控制 Controls", en: "Controls", ms: "Kawalan" },
              cells: [
                { zh: "有哪些安全、权限与审计方面的要求？", en: "What security, access and audit requirements apply?", ms: "Apakah keperluan keselamatan, hak akses dan audit?" },
                { zh: "必须在操作系统层与应用层都提供登录安全，员工记录只有人力资源部才能增删改", en: "Logon security is required at both operating system and application level, and only HR staff may add, change or delete an employee record", ms: "Keselamatan log masuk diperlukan pada peringkat sistem pengendalian dan aplikasi, dan hanya kakitangan HR boleh menambah, mengubah atau menghapus rekod pekerja" }
              ] }
          ],
          legend: [
            { zh: "需求写得越具体可测，后面的设计和验收就越省事。", en: "The more specific and testable a requirement is, the easier design and acceptance become.", ms: "Semakin khusus dan boleh diuji sesuatu keperluan, semakin mudah reka bentuk dan penerimaannya." }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：系统需求清单的五个类别（输出、输入、处理、性能、控制）。题目常给一句需求描述，让你判断它属于哪一类。",
          en: "A certainty: the five categories of the system requirements checklist (outputs, inputs, processes, performance, controls). Questions often give one requirement and ask which category it belongs to.",
          ms: "Hampir pasti keluar: lima kategori senarai semak keperluan sistem (output, input, proses, prestasi, kawalan). Soalan sering memberikan satu keperluan dan meminta anda menentukan kategorinya."
        },
        {
          zh: "对比题：JAD、RAD 与敏捷方法各自的特点、优点与缺点。JAD 强调用户深度参与，RAD 强调压缩时间，敏捷强调增量与持续反馈。",
          en: "Comparison question: the features, advantages and disadvantages of JAD, RAD and agile methods. JAD stresses deep user involvement, RAD stresses compressed time, and agile stresses increments and continuous feedback.",
          ms: "Soalan perbandingan: ciri, kebaikan dan keburukan JAD, RAD serta kaedah tangkas. JAD menekankan penglibatan mendalam pengguna, RAD menekankan pemendekan masa, dan kaedah tangkas menekankan penghasilan berperingkat serta maklum balas berterusan."
        },
        {
          zh: "易错点：不要在访谈中提诱导性问题（leading question），也别把开放式问题与封闭式问题搞混；访谈七步的顺序和“时长不超过一小时”都是常见考点。",
          en: "Common trap: never ask leading questions in an interview, and do not mix up open-ended and closed-ended questions; the order of the seven interview steps and the 'no more than one hour' rule are frequently examined.",
          ms: "Perangkap biasa: jangan sekali-kali mengemukakan soalan yang mengarah dalam temu bual, dan jangan keliru antara soalan terbuka dengan soalan tertutup; urutan tujuh langkah temu bual dan peraturan 'tidak lebih satu jam' kerap diuji."
        },
        {
          zh: "名词解释常考：可扩展性、总拥有成本（TCO）、霍桑效应，以及系统抽样/分层抽样/随机抽样三者的区别。",
          en: "Term explanations often asked: scalability, total cost of ownership (TCO), the Hawthorne Effect, and the difference between systematic, stratified and random sampling.",
          ms: "Penjelasan istilah yang kerap ditanya: kebolehlaksanaan penskalaan, jumlah kos pemilikan (TCO), Kesan Hawthorne, dan perbezaan antara persampelan sistematik, berstrata dan rawak."
        }
      ]
    },
    {
      id: "sadm-05",
      num: 5,
      title: { zh: "数据与过程分析", en: "Data and Process Analysis", ms: "Analisis Data dan Proses" },
      file: "sadm/CHP5_SADM.pdf",
      pages: 45,
      summary: {
        zh: "本章讲解如何用图形工具建立系统的逻辑模型，回答“系统必须做什么”。核心工具是数据流图（DFD）、数据字典和过程说明。学生要学会 DFD 的四个符号（过程、数据流、数据存储、实体）及其使用规则，掌握从上下文图到 0 层图再到下层图的画图顺序，以及分层（leveling）与平衡（balancing）技术。本章还介绍数据字典记录哪些属性，以及用结构化英语、判定表和判定树描述功能原语的方法，最后区分逻辑模型与物理模型并给出四模型法。",
        en: "This chapter shows how to build a logical model of the system with graphical tools, answering the question 'what must the system do?'. The core tools are the data flow diagram (DFD), the data dictionary and process descriptions. Students must learn the four DFD symbols (process, data flow, data store, entity) and the rules for using them, the order of drawing from the context diagram to Diagram 0 and then to lower-level diagrams, and the leveling and balancing techniques. The chapter also explains what attributes a data dictionary records and how structured English, decision tables and decision trees describe a functional primitive, and it ends by distinguishing logical from physical models and presenting the four-model approach.",
        ms: "Bab ini menunjukkan cara membina model logik sistem dengan alat grafik, iaitu menjawab soalan 'apa yang perlu dilakukan oleh sistem?'. Alat terasnya ialah gambar rajah aliran data (DFD), kamus data dan penerangan proses. Pelajar mesti menguasai empat simbol DFD (proses, aliran data, stor data, entiti) serta peraturan penggunaannya, urutan melukis daripada gambar rajah konteks kepada Gambar Rajah 0 dan seterusnya gambar rajah peringkat bawah, serta teknik pempelbagaian peringkat (leveling) dan pengimbangan (balancing). Bab ini juga menerangkan atribut yang direkodkan dalam kamus data dan cara bahasa Inggeris berstruktur, jadual keputusan serta pokok keputusan menerangkan sesuatu primitif fungsi, dan diakhiri dengan perbezaan antara model logik dan model fizikal serta pendekatan empat model."
      },
      points: [
        {
          zh: "逻辑模型说明系统必须做什么（what），物理模型说明系统将如何构建（how）；第 5、6 章的任务是为新系统建立逻辑模型并记录系统需求。",
          en: "A logical model shows what the system must do, while a physical model describes how the system will be constructed; Chapters 5 and 6 build the logical model of the new system and document its requirements.",
          ms: "Model logik menunjukkan apa yang perlu dilakukan oleh sistem, manakala model fizikal menerangkan bagaimana sistem akan dibina; Bab 5 dan 6 membina model logik sistem baharu dan merekodkan keperluannya."
        },
        {
          zh: "数据流图（DFD）展示数据如何在信息系统中流动以及系统如何把输入数据转换成有用的信息，但它不显示程序逻辑或具体的处理步骤。",
          en: "A data flow diagram (DFD) shows how data moves through an information system and how the system transforms input data into useful information, but it does not show program logic or processing steps.",
          ms: "Gambar rajah aliran data (DFD) menunjukkan pergerakan data dalam sistem maklumat dan cara sistem menukar data input menjadi maklumat berguna, tetapi ia tidak menunjukkan logik program atau langkah pemprosesan."
        },
        {
          zh: "DFD 只有四个符号：过程（接收输入并产生内容或形式不同的输出，内含业务逻辑，被视为黑箱）、数据流（一个或多个数据项，用带单箭头或双箭头的线表示）、数据存储（系统保存的数据，其物理特性并不重要）和实体（数据的来源或去向，也叫终止符）。",
          en: "A DFD uses only four symbols: the process (receives input and produces output with different content, form or both; it contains the business logic and is treated as a black box), the data flow (one or more data items, drawn as a line with a single or double arrowhead), the data store (data the system keeps, whose physical characteristics are unimportant) and the entity (a source or sink of data, also called a terminator).",
          ms: "DFD hanya menggunakan empat simbol: proses (menerima input dan menghasilkan output dengan kandungan, bentuk atau kedua-duanya berbeza; ia mengandungi logik perniagaan dan dianggap kotak hitam), aliran data (satu atau lebih item data, dilukis sebagai garisan dengan satu atau dua mata panah), stor data (data yang disimpan sistem, ciri fizikalnya tidak penting) dan entiti (sumber atau destinasi data, juga dipanggil terminator)."
        },
        {
          zh: "画 DFD 要遵守规则：上下文图必须能放在一页纸上；上下文图中的过程名就用信息系统本身的名称；同一组符号中名称必须唯一；不要交叉线；每个过程都要有唯一名称与参考编号；尽量多征求用户意见。",
          en: "Guidelines for drawing DFDs: the context diagram must fit on one page; the process name in the context diagram is the name of the information system itself; use unique names within each set of symbols; do not cross lines; give every process a unique name and reference number; and obtain as much user input and feedback as possible.",
          ms: "Garis panduan melukis DFD: gambar rajah konteks mesti muat pada satu halaman; nama proses dalam gambar rajah konteks ialah nama sistem maklumat itu sendiri; gunakan nama yang unik dalam setiap set simbol; jangan silangkan garisan; berikan setiap proses nama dan nombor rujukan yang unik; dan dapatkan sebanyak mungkin maklum balas pengguna."
        },
        {
          zh: "建立 DFD 集合分三步：先画上下文图，再画 0 层图（它是过程 0 的展开视图，形成父图与子图关系），最后画下层图；只有功能原语（functional primitive）才不需要继续分解。",
          en: "A set of DFDs is created in three steps: draw the context diagram, then Diagram 0 (an exploded view of process 0, creating parent and child diagrams), then the lower-level diagrams; only a functional primitive needs no further decomposition.",
          ms: "Satu set DFD dibina dalam tiga langkah: lukis gambar rajah konteks, kemudian Gambar Rajah 0 (pandangan terkembang bagi proses 0 yang mewujudkan gambar rajah induk dan anak), kemudian gambar rajah peringkat bawah; hanya primitif fungsi tidak perlu diuraikan lagi."
        },
        {
          zh: "分层（leveling）就是用一系列越来越详细的 DFD 描述系统；平衡（balancing）则保证父 DFD 的输入与输出数据流在子 DFD 中依然保持，两者的目的是让整套图前后一致。",
          en: "Leveling uses a series of increasingly detailed DFDs to describe the system, while balancing ensures that the input and output data flows of the parent DFD are maintained on the child DFD; together they keep the whole set of diagrams consistent.",
          ms: "Pempelbagaian peringkat menggunakan siri DFD yang semakin terperinci untuk menggambarkan sistem, manakala pengimbangan memastikan aliran data input dan output gambar rajah induk dikekalkan dalam gambar rajah anak; kedua-duanya memastikan keseluruhan set gambar rajah konsisten."
        },
        {
          zh: "数据流图常见的三个逻辑错误是：自发产生（spontaneous generation，过程凭空产出没有输入的数据）、黑洞（black hole，有输入却没有输出）和灰洞（gray hole，输入不足以产生所显示的输出）。",
          en: "Three common DFD logic errors are spontaneous generation (a process produces output with no input), the black hole (a process has input but no output) and the gray hole (the input is insufficient to produce the output shown).",
          ms: "Tiga kesalahan logik DFD yang biasa ialah penjanaan spontan (proses menghasilkan output tanpa input), lohong hitam (proses mempunyai input tetapi tiada output) dan lohong kelabu (input tidak mencukupi untuk menghasilkan output yang ditunjukkan)."
        },
        {
          zh: "数据字典（又称数据仓库）集中存放系统数据的各种信息，用来收集、记录和组织关于数据与过程的具体事实；数据元素是仍具有意义的最小数据单位，多个数据元素组合成记录（数据结构）。",
          en: "A data dictionary, or data repository, is a central storehouse of information about the system's data, used to collect, document and organize specific facts about the data and processes; a data element is the smallest piece of data that still has meaning, and data elements combine into records, also called data structures.",
          ms: "Kamus data, atau repositori data, ialah pusat penyimpanan maklumat tentang data sistem yang digunakan untuk mengumpul, mendokumenkan dan menyusun fakta khusus tentang data dan proses; elemen data ialah unit data terkecil yang masih bermakna, dan beberapa elemen data bergabung menjadi rekod, juga dipanggil struktur data."
        },
        {
          zh: "结构化英语有严格规则：只能用顺序、选择和迭代三种积木，用缩进提高可读性，词汇受限于数据字典中的标准术语和描述处理规则的特定词；它很像伪代码，主要目的是描述背后的业务逻辑。",
          en: "Structured English follows strict rules: use only the three building blocks of sequence, selection and iteration, use indentation for readability, and keep a limited vocabulary of data dictionary terms plus specific words describing the processing rules; it resembles pseudocode and its primary purpose is to describe the underlying business logic.",
          ms: "Bahasa Inggeris berstruktur mematuhi peraturan ketat: gunakan hanya tiga blok binaan iaitu jujukan, pemilihan dan lelaran, gunakan indentasi untuk kebolehbacaan, dan hadkan kosa kata kepada istilah kamus data serta perkataan khusus yang menerangkan peraturan pemprosesan; ia menyerupai pseudokod dan tujuan utamanya ialah menerangkan logik perniagaan."
        },
        {
          zh: "四模型法要求依次建立现有系统的物理模型、现有系统的逻辑模型、新系统的逻辑模型和新系统的物理模型；它唯一的缺点是增加时间与成本，但能让分析员更透彻地理解现有系统。",
          en: "The four-model approach develops a physical model of the current system, a logical model of the current system, a logical model of the new system and a physical model of the new system; its only disadvantage is the added time and cost, but it gives analysts a much better understanding of the current system.",
          ms: "Pendekatan empat model membina model fizikal sistem semasa, model logik sistem semasa, model logik sistem baharu dan model fizikal sistem baharu; satu-satunya kelemahannya ialah tambahan masa dan kos, tetapi ia memberi penganalisis kefahaman yang lebih mendalam tentang sistem semasa."
        }
      ],
      terms: [
        { en: "Data Flow Diagram (DFD)", zh: "数据流图", ms: "Gambar Rajah Aliran Data (DFD)",
          def: { zh: "用符号展示数据在系统中如何流动与被转换的图形工具，只描述做什么，不描述怎么做。", en: "A graphical tool that shows how data moves and is transformed in a system, describing what the system does and not how.", ms: "Alat grafik yang menunjukkan pergerakan dan pengubahan data dalam sistem, menerangkan apa yang dilakukan dan bukan bagaimana." } },
        { en: "Process Symbol", zh: "过程符号", ms: "Simbol Proses",
          def: { zh: "DFD 中表示接收输入并产生不同内容或形式输出的符号，内含业务逻辑，被视为黑箱。", en: "The DFD symbol for a step that receives input and produces output of different content or form; it holds the business logic and is a black box.", ms: "Simbol DFD bagi langkah yang menerima input dan menghasilkan output berbeza kandungan atau bentuk; ia mengandungi logik perniagaan dan merupakan kotak hitam." } },
        { en: "Data Flow Symbol", zh: "数据流符号", ms: "Simbol Aliran Data",
          def: { zh: "用带单箭头或双箭头的线表示一个或多个数据项的符号。", en: "A line with a single or double arrowhead that represents one or more data items.", ms: "Garisan dengan satu atau dua mata panah yang mewakili satu atau lebih item data." } },
        { en: "Data Store Symbol", zh: "数据存储符号", ms: "Simbol Stor Data",
          def: { zh: "表示系统所保存数据的符号，其物理存储特征在逻辑模型中并不重要。", en: "The symbol for data the system stores; its physical storage characteristics do not matter in a logical model.", ms: "Simbol bagi data yang disimpan sistem; ciri storan fizikalnya tidak penting dalam model logik." } },
        { en: "Entity (Terminator)", zh: "实体（终止符）", ms: "Entiti (Terminator)",
          def: { zh: "系统之外与系统交换数据的人、部门或外部系统，是数据的来源（source）或去向（sink）。", en: "A person, department or external system outside the system that exchanges data with it, acting as a source or sink of data.", ms: "Individu, jabatan atau sistem luar yang bertukar data dengan sistem, berperanan sebagai sumber atau destinasi data." } },
        { en: "Context Diagram", zh: "上下文图", ms: "Gambar Rajah Konteks",
          def: { zh: "只含一个过程（即整个信息系统）与外部实体的顶层 DFD，必须能放在一页纸上。", en: "The top-level DFD containing a single process (the whole information system) and the external entities; it must fit on one page.", ms: "DFD peringkat tertinggi yang mengandungi satu proses sahaja (keseluruhan sistem maklumat) dan entiti luar; ia mesti muat pada satu halaman." } },
        { en: "Diagram 0", zh: "0 层图", ms: "Gambar Rajah 0",
          def: { zh: "上下文图中过程 0 的展开视图，展示主要过程、数据存储与数据流。", en: "The exploded view of process 0 from the context diagram, showing the main processes, data stores and data flows.", ms: "Pandangan terkembang bagi proses 0 daripada gambar rajah konteks yang menunjukkan proses utama, stor data dan aliran data." } },
        { en: "Leveling", zh: "分层", ms: "Pempelbagaian Peringkat",
          def: { zh: "用一系列越来越详细的 DFD 逐层描述同一个系统的做法。", en: "The practice of describing the same system with a series of increasingly detailed DFDs.", ms: "Amalan menggambarkan sistem yang sama melalui siri DFD yang semakin terperinci." } },
        { en: "Balancing", zh: "平衡", ms: "Pengimbangan",
          def: { zh: "保证父 DFD 的输入输出数据流在子 DFD 中完整保留的一致性检查。", en: "The consistency check that ensures the input and output data flows of a parent DFD are maintained on the child DFD.", ms: "Semakan keseragaman yang memastikan aliran data input dan output gambar rajah induk dikekalkan dalam gambar rajah anak." } },
        { en: "Functional Primitive", zh: "功能原语", ms: "Primitif Fungsi",
          def: { zh: "已经足够具体、不需要再分解的过程，其细节用过程说明来描述。", en: "A process that is detailed enough to need no further decomposition; its details are documented in a process description.", ms: "Proses yang cukup terperinci sehingga tidak perlu diuraikan lagi; butirannya didokumenkan dalam penerangan proses." } },
        { en: "Data Dictionary", zh: "数据字典", ms: "Kamus Data",
          def: { zh: "集中存放系统数据信息的仓库，记录数据元素、数据流、数据存储、过程、实体与记录的各项属性。", en: "A central storehouse of information about the system's data, recording the attributes of data elements, flows, stores, processes, entities and records.", ms: "Pusat penyimpanan maklumat tentang data sistem yang merekodkan atribut elemen data, aliran, stor, proses, entiti dan rekod." } },
        { en: "Data Element", zh: "数据元素", ms: "Elemen Data",
          def: { zh: "仍然具有意义的最小数据单位，也叫数据项或字段。", en: "The smallest piece of data that still has meaning, also called a data item or field.", ms: "Unit data terkecil yang masih bermakna, juga dipanggil item data atau medan." } },
        { en: "Record (Data Structure)", zh: "记录（数据结构）", ms: "Rekod (Struktur Data)",
          def: { zh: "若干相关数据元素的有意义组合，出现在数据流中或保存在数据存储里。", en: "A meaningful combination of related data elements that appears in a data flow or is kept in a data store.", ms: "Gabungan bermakna beberapa elemen data yang muncul dalam aliran data atau disimpan dalam stor data." } },
        { en: "Structured English", zh: "结构化英语", ms: "Bahasa Inggeris Berstruktur",
          def: { zh: "只用顺序、选择、迭代三种结构并借助缩进与有限词汇描述业务逻辑的伪代码式工具。", en: "A pseudocode-like tool that describes business logic using only sequence, selection and iteration, with indentation and a limited vocabulary.", ms: "Alat seperti pseudokod yang menerangkan logik perniagaan menggunakan hanya jujukan, pemilihan dan lelaran, dengan indentasi dan kosa kata terhad." } },
        { en: "Decision Table", zh: "判定表", ms: "Jadual Keputusan",
          def: { zh: "列出条件的所有可能组合及对应动作的表格，每加一个条件规则数翻倍。", en: "A table listing all possible combinations of conditions and the resulting actions; each added condition doubles the number of rules.", ms: "Jadual yang menyenaraikan semua gabungan keadaan dan tindakan yang terhasil; setiap keadaan tambahan menggandakan bilangan peraturan." } }
      ],
      diagrams: [
        {
          type: "layers",
          title: { zh: "DFD 集合的层次结构（像一座金字塔）", en: "The Layered Structure of a DFD Set (a Pyramid)", ms: "Struktur Berlapis Satu Set DFD (Seperti Piramid)" },
          caption: { zh: "上下文图在最上面，往下逐层展开，越往下细节越多，父图与子图之间必须保持平衡。", en: "The context diagram sits at the top and each lower level adds detail; parent and child diagrams must stay balanced.", ms: "Gambar rajah konteks berada di atas dan setiap peringkat bawah menambah butiran; gambar rajah induk dan anak mesti kekal seimbang." },
          layers: [
            { label: { zh: "上下文图（Context Diagram）", en: "Context Diagram", ms: "Gambar Rajah Konteks" }, note: { zh: "只有一个过程 = 整个信息系统，外加外部实体，必须一页画完", en: "One process = the whole system, plus external entities; must fit on one page", ms: "Satu proses = keseluruhan sistem, serta entiti luar; mesti muat satu halaman" } },
            { label: { zh: "0 层图（Diagram 0）", en: "Diagram 0", ms: "Gambar Rajah 0" }, note: { zh: "过程 0 的展开视图，也称父图，显示主要过程与数据存储", en: "Exploded view of process 0, also the parent diagram, showing main processes and data stores", ms: "Pandangan terkembang proses 0, juga gambar rajah induk, menunjukkan proses utama dan stor data" } },
            { label: { zh: "下层图（Lower-Level Diagrams）", en: "Lower-Level Diagrams", ms: "Gambar Rajah Peringkat Bawah" }, note: { zh: "子图，逐层分解过程，需要 leveling 与 balancing", en: "Child diagrams that decompose processes, requiring leveling and balancing", ms: "Gambar rajah anak yang menguraikan proses, memerlukan pempelbagaian dan pengimbangan" } },
            { label: { zh: "功能原语（Functional Primitive）", en: "Functional Primitive", ms: "Primitif Fungsi" }, note: { zh: "无法再分解的最低层过程，用结构化英语、判定表、判定树描述", en: "The lowest-level process that cannot be decomposed further; described with structured English, decision tables and decision trees", ms: "Proses peringkat terendah yang tidak boleh diuraikan lagi; diterangkan dengan bahasa Inggeris berstruktur, jadual dan pokok keputusan" } }
          ]
        },
        {
          type: "matrix",
          title: { zh: "DFD 的四个符号与使用要点", en: "The Four DFD Symbols and Key Rules", ms: "Empat Simbol DFD dan Peraturan Pentingnya" },
          cols: [
            { zh: "代表什么", en: "What it represents", ms: "Apa yang diwakilinya" },
            { zh: "使用要点", en: "Key rules", ms: "Peraturan penting" }
          ],
          rows: [
            { head: { zh: "过程 Process", en: "Process", ms: "Proses" },
              cells: [
                { zh: "接收输入、产生内容或形式不同的输出的处理步骤", en: "A step that receives input and produces output with different content or form", ms: "Langkah yang menerima input dan menghasilkan output berbeza kandungan atau bentuk" },
                { zh: "包含业务逻辑（业务规则），被当作黑箱；必须有唯一名称与参考编号", en: "Contains the business logic (business rules) and is a black box; must have a unique name and reference number", ms: "Mengandungi logik perniagaan (peraturan perniagaan) dan dianggap kotak hitam; mesti mempunyai nama dan nombor rujukan yang unik" }
              ] },
            { head: { zh: "数据流 Data Flow", en: "Data Flow", ms: "Aliran Data" },
              cells: [
                { zh: "一个或多个在系统内移动的数据项", en: "One or more data items moving through the system", ms: "Satu atau lebih item data yang bergerak dalam sistem" },
                { zh: "画成带单箭头或双箭头的线；检查是否有自发产生、黑洞、灰洞", en: "Drawn as a line with a single or double arrowhead; check for spontaneous generation, black holes and gray holes", ms: "Dilukis sebagai garisan dengan satu atau dua mata panah; periksa penjanaan spontan, lohong hitam dan lohong kelabu" }
              ] },
            { head: { zh: "数据存储 Data Store", en: "Data Store", ms: "Stor Data" },
              cells: [
                { zh: "系统保存起来、供以后使用的数据", en: "Data that the system stores for later use", ms: "Data yang disimpan sistem untuk kegunaan kemudian" },
                { zh: "其物理特性不重要，因为建的是逻辑模型", en: "Its physical characteristics are unimportant because only a logical model is being built", ms: "Ciri fizikalnya tidak penting kerana hanya model logik dibina" }
              ] },
            { head: { zh: "实体 Entity", en: "Entity", ms: "Entiti" },
              cells: [
                { zh: "系统之外的数据来源或去向，也叫终止符", en: "A source or sink of data outside the system, also called a terminator", ms: "Sumber atau destinasi data di luar sistem, juga dipanggil terminator" },
                { zh: "名称写在符号内部；同一组符号中名称必须唯一", en: "Its name appears inside the symbol; names must be unique within each set of symbols", ms: "Namanya ditulis di dalam simbol; nama mesti unik dalam setiap set simbol" }
              ] }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：四个 DFD 符号的名称、图形与含义，以及画图规则（上下文图一页、过程名用系统名、名称唯一、不交叉线、过程要有编号）。",
          en: "A certainty: the name, shape and meaning of the four DFD symbols, plus the drawing rules (one-page context diagram, system name as the process name, unique names, no crossing lines, numbered processes).",
          ms: "Hampir pasti keluar: nama, bentuk dan maksud empat simbol DFD, serta peraturan melukis (gambar rajah konteks satu halaman, nama sistem sebagai nama proses, nama unik, tiada garisan bersilang, proses bernombor)."
        },
        {
          zh: "易错点：分层（leveling）与平衡（balancing）不要混淆。分层是画出一系列越来越详细的图，平衡是检查父子图之间的输入输出数据流是否一致。",
          en: "Common trap: do not confuse leveling with balancing. Leveling produces a series of increasingly detailed diagrams, while balancing checks that input and output data flows agree between parent and child diagrams.",
          ms: "Perangkap biasa: jangan keliru antara pempelbagaian peringkat dengan pengimbangan. Pempelbagaian menghasilkan siri gambar rajah yang semakin terperinci, manakala pengimbangan menyemak aliran data input dan output antara gambar rajah induk dan anak."
        },
        {
          zh: "计算题：判定表的规则数。每增加一个条件规则数翻一倍，n 个二值条件就是 2 的 n 次方条规则，题目常让你补全缺失的动作列。",
          en: "Calculation question: the number of rules in a decision table. Each added condition doubles the rules, so n two-valued conditions give 2 to the power of n rules; questions often ask you to fill in the missing action columns.",
          ms: "Soalan pengiraan: bilangan peraturan dalam jadual keputusan. Setiap keadaan tambahan menggandakan peraturan, jadi n keadaan dua nilai menghasilkan 2 kuasa n peraturan; soalan sering meminta anda melengkapkan lajur tindakan yang tertinggal."
        },
        {
          zh: "名词解释常考：功能原语、数据元素与记录的区别、逻辑模型与物理模型的分工，以及数据字典要记录哪些属性。",
          en: "Frequent term questions: functional primitive, the difference between a data element and a record, the division of labour between logical and physical models, and which attributes a data dictionary records.",
          ms: "Soalan istilah yang kerap: primitif fungsi, perbezaan antara elemen data dengan rekod, pembahagian tugas antara model logik dan fizikal, serta atribut yang direkodkan oleh kamus data."
        }
      ],
      mnemonic: {
        zh: "DFD 四符号记成“过-流-存-实”；过程说明三工具记成“英语、表、树”。",
        en: "The four DFD symbols are Process, Flow, Store, Entity; the three process description tools are Structured English, decision tables and decision trees.",
        ms: "Empat simbol DFD ialah Proses, Aliran, Stor, Entiti; tiga alat penerangan proses ialah bahasa Inggeris berstruktur, jadual keputusan dan pokok keputusan."
      }
    },
    {
      id: "sadm-06",
      num: 6,
      title: { zh: "对象分析", en: "Object Analysis", ms: "Analisis Objek" },
      file: "sadm/CHP6_SADM revised from me.pdf",
      pages: 55,
      summary: {
        zh: "本章介绍面向对象分析，即从对象本身如何运作与交互的角度来观察和建模系统。学生要掌握对象、属性、方法、消息、类、实例这六个核心概念，理解对象之间的继承关系与对象关系图的作用。本章后半部分集中讲解 UML 工具：用例与用例图、类图、顺序图、状态转换图和活动图，并说明 CASE 工具在对象建模中的价值，以及如何把对象模型组织成一套前后衔接、便于维护的文档。",
        en: "This chapter introduces object-oriented analysis, which views and models a system from the viewpoint of the objects themselves as they function and interact. Students learn the six core concepts - object, attribute, method, message, class and instance - plus inheritance among objects and the role of the object relationship diagram. The second half focuses on UML tools: use cases and use case diagrams, class diagrams, sequence diagrams, state transition diagrams and activity diagrams, and it explains the value of CASE tools in object modeling and how to organize an object model into a coherent, maintainable set of documents.",
        ms: "Bab ini memperkenalkan analisis berorientasikan objek, iaitu melihat dan memodelkan sistem dari sudut objek itu sendiri semasa ia berfungsi dan berinteraksi. Pelajar mempelajari enam konsep teras - objek, atribut, kaedah, mesej, kelas dan instans - serta pewarisan antara objek dan peranan gambar rajah hubungan objek. Separuh kedua bab tertumpu pada alat UML: kes penggunaan dan gambar rajahnya, gambar rajah kelas, jujukan, peralihan keadaan dan aktiviti, di samping menerangkan nilai alat CASE dalam pemodelan objek dan cara menyusun model objek menjadi dokumen yang tersusun dan mudah diselenggara."
      },
      points: [
        {
          zh: "面向对象（O-O）分析是一种流行的建模思路：把系统看成一群对象，关注它们各自如何运作、如何相互作用，由此得到的模型称为对象模型。",
          en: "Object-oriented (O-O) analysis is a popular approach that sees a system from the viewpoint of the objects themselves as they function and interact, and the resulting model is called the object model.",
          ms: "Analisis berorientasikan objek ialah pendekatan popular yang melihat sistem dari sudut objek itu sendiri semasa ia berfungsi dan berinteraksi, dan model yang terhasil dipanggil model objek."
        },
        {
          zh: "如果对象像名词，属性就像形容词，用来描述对象的特征；一个对象的属性值组合起来就构成它的状态（state）。",
          en: "If objects are like nouns, attributes are like adjectives that describe an object's characteristics, and the values of an object's attributes together make up its state.",
          ms: "Jika objek diibaratkan kata nama, atribut ialah kata sifat yang menerangkan ciri sesuatu objek, dan nilai atribut sesuatu objek membentuk keadaannya (state)."
        },
        {
          zh: "方法定义对象可以完成的特定任务，就像动词；消息则是一个对象向另一个对象发出的请求，要求它执行某个行为或返回某项信息。",
          en: "A method defines the specific tasks an object can perform and resembles a verb, while a message is a request from one object to another asking it to perform behaviour or return information.",
          ms: "Kaedah mentakrifkan tugas khusus yang boleh dilakukan oleh sesuatu objek dan menyerupai kata kerja, manakala mesej ialah permintaan daripada satu objek kepada objek lain untuk melaksanakan tingkah laku atau memulangkan maklumat."
        },
        {
          zh: "对象属于某个类（class），同一个类中的所有对象共享共同的属性与方法；类的具体成员叫实例（instance），类还可以派生出子类（subclass）与父类（superclass）。",
          en: "An object belongs to a group or category called a class, and all objects within a class share common attributes and methods; a specific member is an instance, and classes can have subclasses and superclasses.",
          ms: "Objek tergolong dalam kumpulan atau kategori yang dipanggil kelas, dan semua objek dalam satu kelas berkongsi atribut serta kaedah yang sama; anggota tertentu dipanggil instans, dan kelas boleh mempunyai subkelas serta superkelas."
        },
        {
          zh: "继承（inheritance）指子类自动获得父类的属性与方法，这是面向对象复用代码、减少重复定义的关键机制。",
          en: "Inheritance means a child class automatically acquires the attributes and methods of its parent class, and it is the key mechanism that lets object-oriented designs reuse code and avoid redefining the same things.",
          ms: "Pewarisan bermaksud subkelas secara automatik memperoleh atribut dan kaedah kelas induknya, dan ia merupakan mekanisme utama yang membolehkan reka bentuk berorientasikan objek menggunakan semula kod tanpa mentakrif semula perkara yang sama."
        },
        {
          zh: "对象关系图给出整个系统的概览，是组织对象模型时的第一张图，后续的用例图、类图、顺序图、状态转换图与活动图都应与它相互衔接。",
          en: "An object relationship diagram provides an overview of the whole system and is the first diagram when organizing an object model; the later use case, class, sequence, state transition and activity diagrams should all link back to it.",
          ms: "Gambar rajah hubungan objek memberikan gambaran keseluruhan sistem dan menjadi gambar rajah pertama ketika menyusun model objek; gambar rajah kes penggunaan, kelas, jujukan, peralihan keadaan dan aktiviti yang kemudiannya harus berkait dengannya."
        },
        {
          zh: "用例建模把系统功能与外部参与者（actor）联系起来：用例符号是带标签的椭圆，先确定系统边界（system boundary），再放用例、加参与者、画关系；当一个用例的结果被另一个用例采用时，就说后者 uses 前者。",
          en: "Use case modeling links system functions to external actors: the use case symbol is a labelled oval, and you first identify the system boundary, then place the use cases, add the actors and show the relationships; when the outcome of one use case is incorporated by another, the second case uses the first.",
          ms: "Pemodelan kes penggunaan menghubungkan fungsi sistem dengan pelaku luar: simbol kes penggunaan ialah bujur berlabel, dan anda perlu menentukan sempadan sistem terlebih dahulu, kemudian meletakkan kes penggunaan, menambah pelaku dan menunjukkan hubungan; apabila hasil satu kes penggunaan digunakan oleh kes penggunaan lain, kes kedua itu 'uses' kes pertama."
        },
        {
          zh: "类图中每个类画成一个矩形，顶部是类名，下面列出属性与方法；类与类之间的数量对应关系叫基数（cardinality），类图最终会演化成物理模型并成为可运行的信息系统。",
          en: "In a class diagram each class appears as a rectangle with the class name at the top, followed by the class's attributes and methods; the numeric relationship between classes is called cardinality, and the class diagram eventually evolves into a physical model and finally a functioning information system.",
          ms: "Dalam gambar rajah kelas, setiap kelas dipaparkan sebagai segi empat tepat dengan nama kelas di bahagian atas, diikuti atribut dan kaedahnya; hubungan bilangan antara kelas dipanggil kardinaliti, dan gambar rajah kelas akhirnya berkembang menjadi model fizikal dan seterusnya sistem maklumat yang berfungsi."
        },
        {
          zh: "顺序图用类、生命线（lifeline）、消息和聚焦（focus）等符号，按时间顺序展示对象之间如何互发消息；状态转换图则用左侧小圆表示初始状态、带标签的连线表示触发转换的动作或事件、右侧空心圆表示最终状态。",
          en: "A sequence diagram uses symbols for classes, lifelines, messages and focuses to show, in time order, how objects send messages to each other, while a state transition diagram uses a small circle on the left as the initial state, labelled lines showing the action or event that causes each transition, and a hollow circle on the right as the final state.",
          ms: "Gambar rajah jujukan menggunakan simbol kelas, garis hayat (lifeline), mesej dan fokus untuk menunjukkan urutan masa pertukaran mesej antara objek, manakala gambar rajah peralihan keadaan menggunakan bulatan kecil di kiri sebagai keadaan awal, garisan berlabel yang menunjukkan tindakan atau peristiwa pencetus peralihan, dan bulatan berongga di kanan sebagai keadaan akhir."
        },
        {
          zh: "顺序图、状态转换图和活动图都属于动态建模工具，用来帮助分析员理解对象的行为以及对象与系统之间的交互；对象建模图种类多，手工绘制费时乏味，所以分析员依赖 CASE 工具来提速并提供统一的文档框架。",
          en: "Sequence, state transition and activity diagrams are dynamic modeling tools that help analysts understand how objects behave and interact with the system; because object modeling needs many kinds of diagrams and drawing them by hand is tedious, analysts rely on CASE tools to speed up the work and provide a framework for documentation.",
          ms: "Gambar rajah jujukan, peralihan keadaan dan aktiviti ialah alat pemodelan dinamik yang membantu penganalisis memahami tingkah laku objek serta interaksinya dengan sistem; kerana pemodelan objek memerlukan banyak jenis gambar rajah dan melukisnya secara manual amat meletihkan, penganalisis bergantung pada alat CASE untuk mempercepat kerja dan menyediakan kerangka dokumentasi."
        }
      ],
      terms: [
        { en: "Object", zh: "对象", ms: "Objek",
          def: { zh: "把数据与作用于数据的操作封装在一起的实体，是面向对象分析的基本单位。", en: "An entity that encapsulates data together with the operations acting on it; it is the basic unit of object-oriented analysis.", ms: "Entiti yang mengenkapsulasi data bersama operasi yang bertindak ke atasnya; ia unit asas analisis berorientasikan objek." } },
        { en: "Attribute", zh: "属性", ms: "Atribut",
          def: { zh: "描述对象特征的数据项，作用类似形容词；属性的取值组合构成对象的状态。", en: "A data item describing a characteristic of an object, like an adjective; the values of attributes make up the object's state.", ms: "Item data yang menerangkan ciri sesuatu objek, seperti kata sifat; nilai atributnya membentuk keadaan objek." } },
        { en: "Method", zh: "方法", ms: "Kaedah",
          def: { zh: "对象可以执行的特定任务，作用类似动词，用来改变对象的属性。", en: "A specific task an object can perform, like a verb, used to change the object's attributes.", ms: "Tugas khusus yang boleh dilaksanakan oleh objek, seperti kata kerja, digunakan untuk mengubah atributnya." } },
        { en: "Message", zh: "消息", ms: "Mesej",
          def: { zh: "一个对象向另一个对象发出、请求执行某行为或取得某信息的通信。", en: "A communication from one object to another requesting specific behaviour or information.", ms: "Komunikasi daripada satu objek kepada objek lain yang meminta tingkah laku atau maklumat tertentu." } },
        { en: "Class", zh: "类", ms: "Kelas",
          def: { zh: "一组共享相同属性与方法的对象的集合，对象是类的成员。", en: "A group or category whose objects share common attributes and methods; an object is a member of a class.", ms: "Kumpulan atau kategori yang objeknya berkongsi atribut dan kaedah yang sama; objek ialah anggota sesuatu kelas." } },
        { en: "Instance", zh: "实例", ms: "Instans",
          def: { zh: "某个类中一个具体的对象，拥有自己的属性取值。", en: "A specific object of a class that holds its own attribute values.", ms: "Objek tertentu bagi sesuatu kelas yang mempunyai nilai atributnya sendiri." } },
        { en: "Inheritance", zh: "继承", ms: "Pewarisan",
          def: { zh: "子类自动获得父类属性与方法的机制，使设计更简洁、代码可复用。", en: "The mechanism by which a child class automatically acquires the attributes and methods of its parent, making designs simpler and code reusable.", ms: "Mekanisme yang membolehkan subkelas memperoleh atribut dan kaedah kelas induk secara automatik, menjadikan reka bentuk lebih ringkas dan kod boleh diguna semula." } },
        { en: "Encapsulation", zh: "封装", ms: "Enkapsulasi",
          def: { zh: "把数据与操作数据的方法包在一起，对外只暴露接口，使对象表现为黑箱。", en: "Wrapping data together with the methods that operate on it and exposing only an interface, so the object appears as a black box.", ms: "Membungkus data bersama kaedah yang mengendalikannya dan hanya mendedahkan antara muka, sehingga objek kelihatan sebagai kotak hitam." } },
        { en: "Polymorphism", zh: "多态", ms: "Polimorfisme",
          def: { zh: "同一条消息可以由不同类的对象以各自的方式响应，从而产生不同行为。", en: "The ability of the same message to be handled differently by objects of different classes.", ms: "Keupayaan mesej yang sama dikendalikan secara berbeza oleh objek daripada kelas yang berlainan." } },
        { en: "Use Case", zh: "用例", ms: "Kes Penggunaan",
          def: { zh: "用椭圆表示、描述参与者与系统之间某项功能交互的建模单元。", en: "A modelling unit drawn as an oval that describes one functional interaction between an actor and the system.", ms: "Unit pemodelan berbentuk bujur yang menerangkan satu interaksi fungsi antara pelaku dengan sistem." } },
        { en: "Actor", zh: "参与者", ms: "Pelaku",
          def: { zh: "在系统之外与系统交互以完成用例的人或外部系统。", en: "A person or external system outside the system that interacts with it to accomplish a use case.", ms: "Individu atau sistem luar yang berinteraksi dengan sistem untuk melaksanakan sesuatu kes penggunaan." } },
        { en: "Class Diagram", zh: "类图", ms: "Gambar Rajah Kelas",
          def: { zh: "用矩形表示类（顶部为类名，下面为属性与方法），并标出类之间基数关系的 UML 图。", en: "A UML diagram in which each class is a rectangle (class name on top, then attributes and methods) and the cardinality between classes is shown.", ms: "Gambar rajah UML yang memaparkan setiap kelas sebagai segi empat tepat (nama kelas di atas, diikuti atribut dan kaedah) serta kardinaliti antara kelas." } },
        { en: "Cardinality", zh: "基数", ms: "Kardinaliti",
          def: { zh: "类图中表示两个类之间数量对应关系（如一对多）的标记。", en: "The notation in a class diagram showing how many objects of one class relate to objects of another, such as one-to-many.", ms: "Notasi dalam gambar rajah kelas yang menunjukkan bilangan objek satu kelas yang berkaitan dengan kelas lain, seperti satu-ke-banyak." } },
        { en: "Sequence Diagram", zh: "顺序图", ms: "Gambar Rajah Jujukan",
          def: { zh: "按时间顺序展示对象之间消息传递的 UML 动态图，含类、生命线、消息与聚焦符号。", en: "A dynamic UML diagram showing the messages passed between objects over time, using symbols for classes, lifelines, messages and focuses.", ms: "Gambar rajah UML dinamik yang menunjukkan mesej antara objek mengikut masa, menggunakan simbol kelas, garis hayat, mesej dan fokus." } },
        { en: "State Transition Diagram", zh: "状态转换图", ms: "Gambar Rajah Peralihan Keadaan",
          def: { zh: "描述对象在生命周期中状态如何随事件改变的图，左侧小圆为初始状态，右侧空心圆为最终状态。", en: "A diagram showing how an object's states change with events during its lifetime; the small circle on the left is the initial state and the hollow circle on the right the final state.", ms: "Gambar rajah yang menunjukkan perubahan keadaan objek akibat peristiwa sepanjang hayatnya; bulatan kecil di kiri ialah keadaan awal dan bulatan berongga di kanan keadaan akhir." } }
      ],
      diagrams: [
        {
          type: "tree",
          title: { zh: "类的继承层次示例：银行账户", en: "Class Inheritance Hierarchy Example: Bank Accounts", ms: "Contoh Hierarki Pewarisan Kelas: Akaun Bank" },
          caption: { zh: "子类自动继承父类的属性与方法，还可以增加自己特有的属性与方法。", en: "A subclass inherits the attributes and methods of its parent and can add attributes and methods of its own.", ms: "Subkelas mewarisi atribut dan kaedah kelas induk serta boleh menambah atribut dan kaedah sendiri." },
          root: { label: { zh: "父类：账户 Account（属性：账号、余额；方法：存款、取款）", en: "Superclass: Account (attributes: number, balance; methods: deposit, withdraw)", ms: "Superkelas: Akaun (atribut: nombor, baki; kaedah: deposit, pengeluaran)" } },
          branches: [
            { label: { zh: "子类：储蓄账户 Savings Account", en: "Subclass: Savings Account", ms: "Subkelas: Akaun Simpanan" }, leaves: [
              { label: { zh: "属性：利率", en: "Attribute: interest rate", ms: "Atribut: kadar faedah" } },
              { label: { zh: "方法：计算利息", en: "Method: calculate interest", ms: "Kaedah: kira faedah" } }
            ] },
            { label: { zh: "子类：支票账户 Current Account", en: "Subclass: Current Account", ms: "Subkelas: Akaun Semasa" }, leaves: [
              { label: { zh: "属性：透支额度", en: "Attribute: overdraft limit", ms: "Atribut: had overdraf" } },
              { label: { zh: "方法：处理透支", en: "Method: process overdraft", ms: "Kaedah: proses overdraf" } }
            ] },
            { label: { zh: "子类：定期账户 Fixed Deposit", en: "Subclass: Fixed Deposit", ms: "Subkelas: Deposit Tetap" }, leaves: [
              { label: { zh: "属性：到期日", en: "Attribute: maturity date", ms: "Atribut: tarikh matang" } },
              { label: { zh: "方法：到期结算", en: "Method: settle at maturity", ms: "Kaedah: selesaikan pada tarikh matang" } }
            ] }
          ]
        },
        {
          type: "matrix",
          title: { zh: "常用 UML 图及其用途", en: "Common UML Diagrams and Their Purposes", ms: "Gambar Rajah UML yang Biasa dan Kegunaannya" },
          cols: [
            { zh: "主要用途", en: "Main purpose", ms: "Tujuan utama" },
            { zh: "静态 / 动态", en: "Static / dynamic", ms: "Statik / dinamik" }
          ],
          rows: [
            { head: { zh: "用例图 Use case diagram", en: "Use case diagram", ms: "Gambar rajah kes penggunaan" },
              cells: [
                { zh: "显示参与者与系统边界内各用例之间的关系", en: "Shows the relationships between actors and the use cases inside the system boundary", ms: "Menunjukkan hubungan antara pelaku dengan kes penggunaan dalam sempadan sistem" },
                { zh: "偏静态，描述功能范围", en: "Mainly static; describes functional scope", ms: "Lebih statik; menerangkan skop fungsi" }
              ] },
            { head: { zh: "类图 Class diagram", en: "Class diagram", ms: "Gambar rajah kelas" },
              cells: [
                { zh: "显示类、类的属性与方法以及类之间的基数关系，最终演化成物理模型", en: "Shows classes, their attributes and methods and the cardinality between them; it eventually evolves into the physical model", ms: "Menunjukkan kelas, atribut dan kaedahnya serta kardinaliti antara kelas; akhirnya berkembang menjadi model fizikal" }
              ,
                { zh: "静态结构", en: "Static structure", ms: "Struktur statik" }
              ] },
            { head: { zh: "顺序图 Sequence diagram", en: "Sequence diagram", ms: "Gambar rajah jujukan" },
              cells: [
                { zh: "按时间顺序显示对象之间传递的消息，含生命线与聚焦", en: "Shows the messages passed between objects in time order, with lifelines and focuses", ms: "Menunjukkan mesej antara objek mengikut urutan masa, dengan garis hayat dan fokus" },
                { zh: "动态", en: "Dynamic", ms: "Dinamik" }
              ] },
            { head: { zh: "状态转换图 State transition diagram", en: "State transition diagram", ms: "Gambar rajah peralihan keadaan" },
              cells: [
                { zh: "显示对象状态如何被动作或事件触发而改变，从初始状态到最终状态", en: "Shows how an object's states change when triggered by actions or events, from the initial to the final state", ms: "Menunjukkan perubahan keadaan objek akibat tindakan atau peristiwa, daripada keadaan awal hingga keadaan akhir" },
                { zh: "动态", en: "Dynamic", ms: "Dinamik" }
              ] },
            { head: { zh: "活动图 Activity diagram", en: "Activity diagram", ms: "Gambar rajah aktiviti" },
              cells: [
                { zh: "描述业务流程或用例内部的活动流程与判断分支", en: "Describes the flow of activities and decision branches inside a business process or use case", ms: "Menerangkan aliran aktiviti dan cabang keputusan dalam sesuatu proses perniagaan atau kes penggunaan" },
                { zh: "动态", en: "Dynamic", ms: "Dinamik" }
              ] }
          ],
          legend: [
            { zh: "顺序图、状态转换图与活动图都是动态建模工具，用来理解对象的行为与交互。", en: "Sequence, state transition and activity diagrams are dynamic modeling tools used to understand how objects behave and interact.", ms: "Gambar rajah jujukan, peralihan keadaan dan aktiviti ialah alat pemodelan dinamik untuk memahami tingkah laku dan interaksi objek." }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：对象、属性、方法、消息、类、实例六个概念的区分，尤其要能判断“某事物是类还是实例”“这句话描述的是属性还是方法”。",
          en: "A certainty: distinguishing object, attribute, method, message, class and instance, especially deciding whether something is a class or an instance, and whether a statement describes an attribute or a method.",
          ms: "Hampir pasti keluar: membezakan objek, atribut, kaedah, mesej, kelas dan instans, terutamanya menentukan sama ada sesuatu itu kelas atau instans, dan sama ada pernyataan itu menerangkan atribut atau kaedah."
        },
        {
          zh: "高频对比：静态图（用例图、类图）与动态图（顺序图、状态转换图、活动图）的用途区别，以及用例图中 actor、系统边界与用例之间关系的画法。",
          en: "Frequent comparison: static diagrams (use case, class) versus dynamic diagrams (sequence, state transition, activity), and how to draw actors, the system boundary and the relationships among use cases.",
          ms: "Perbandingan kerap: gambar rajah statik (kes penggunaan, kelas) berbanding dinamik (jujukan, peralihan keadaan, aktiviti), serta cara melukis pelaku, sempadan sistem dan hubungan antara kes penggunaan."
        },
        {
          zh: "名词解释：继承、封装、多态、基数（cardinality）。要注意继承描述的是类之间的关系，不是对象之间的消息传递。",
          en: "Term explanations: inheritance, encapsulation, polymorphism and cardinality. Remember that inheritance describes a relationship between classes, not a message between objects.",
          ms: "Penjelasan istilah: pewarisan, enkapsulasi, polimorfisme dan kardinaliti. Ingat bahawa pewarisan menerangkan hubungan antara kelas, bukan pemindahan mesej antara objek."
        },
        {
          zh: "易错点：顺序图的符号包括类、生命线、消息与聚焦，别与状态转换图的初始状态/最终状态符号混淆；状态图左侧小圆是初始状态，右侧空心圆是最终状态。",
          en: "Common trap: sequence diagram symbols are classes, lifelines, messages and focuses - do not confuse them with the initial and final state symbols of a state transition diagram, where the small circle on the left is the initial state and the hollow circle on the right is the final state.",
          ms: "Perangkap biasa: simbol gambar rajah jujukan ialah kelas, garis hayat, mesej dan fokus - jangan keliru dengan simbol keadaan awal dan akhir dalam gambar rajah peralihan keadaan, iaitu bulatan kecil di kiri ialah keadaan awal dan bulatan berongga di kanan keadaan akhir."
        }
      ],
      mnemonic: {
        zh: "对象六概念：对象、属性、方法、消息、类、实例；动态三图：顺序、状态、活动。",
        en: "Six object concepts: object, attribute, method, message, class, instance; three dynamic diagrams: sequence, state transition, activity.",
        ms: "Enam konsep objek: objek, atribut, kaedah, mesej, kelas, instans; tiga gambar rajah dinamik: jujukan, peralihan keadaan, aktiviti."
      }
    },
    {
      id: "sadm-07",
      num: 7,
      title: { zh: "开发方案选择", en: "Options for Development", ms: "Pilihan Pembangunan" },
      file: "sadm/CHP7_SADM.pdf",
      pages: 47,
      summary: {
        zh: "本章处理系统分析阶段剩下的工作：为项目挑选最合适的开发路径。首先要考虑互联网的影响（软件即服务 SaaS、传统开发与基于 Web 的开发、Web 2.0 与云计算）、外包选项（服务提供商、ASP、固定费用/订阅/按量计费三种收费模式、离岸外包）以及自行开发的替代方案（自建、购买软件包、定制软件包）。随后讲解成本效益分析与回收期、投资回报率、净现值等财务工具，软件采购的六个步骤，系统需求文档与向管理层汇报的方式，最后过渡到系统设计阶段的逻辑设计与物理设计、设计准则、设计取舍与原型法。",
        en: "This chapter covers the remaining work of the systems analysis phase: choosing the best development path for the project. It first considers the impact of the Internet (Software as a Service, traditional versus Web-based development, Web 2.0 and cloud computing), outsourcing options (service providers, ASPs, the fixed-fee, subscription and usage fee models, and offshore outsourcing) and in-house alternatives (build, buy a package, or customize a package). It then explains cost-benefit analysis and financial tools such as payback analysis, return on investment and net present value, the six steps of the software acquisition process, the system requirements document and the presentation to management, before moving on to the transition to systems design with logical and physical design, design guidelines, design trade-offs and prototyping.",
        ms: "Bab ini merangkumi kerja yang tinggal dalam fasa analisis sistem: memilih laluan pembangunan terbaik untuk projek. Pertama, ia menimbangkan kesan Internet (Perisian sebagai Perkhidmatan, pembangunan tradisional berbanding berasaskan web, Web 2.0 dan pengkomputeran awan), pilihan penyumberan luar (pembekal perkhidmatan, ASP, model yuran tetap, langganan dan penggunaan, serta penyumberan luar luar pesisir) dan alternatif dalaman (bina sendiri, beli pakej, atau ubah suai pakej). Seterusnya, bab ini menerangkan analisis kos-faedah dan alat kewangan seperti analisis tempoh pulang modal, pulangan atas pelaburan dan nilai kini bersih, enam langkah proses perolehan perisian, dokumen keperluan sistem dan pembentangan kepada pengurusan, sebelum beralih kepada reka bentuk sistem dengan reka bentuk logik dan fizikal, garis panduan reka bentuk, pertimbangan trade-off serta pembinaan prototaip."
      },
      points: [
        {
          zh: "软件即服务（SaaS）把软件当作服务而不是产品来交付，讲义指出到 2011 年将有 25% 的新商业软件以服务方式部署，SaaS 产业价值将增长到 400 亿美元。",
          en: "Software as a Service (SaaS) delivers software as a service rather than a product; the lecture notes that by 2011, 25% of all new business software would be deployed as a service and the value of the SaaS industry would grow to 40 billion dollars.",
          ms: "Perisian sebagai Perkhidmatan (SaaS) menyampaikan perisian sebagai perkhidmatan dan bukan produk; kuliah menyatakan menjelang 2011, 25% daripada semua perisian perniagaan baharu akan dilaksanakan sebagai perkhidmatan dan nilai industri SaaS akan meningkat kepada 40 bilion dolar."
        },
        {
          zh: "传统开发受兼容性问题影响，系统设计成在公司局域网与广域网上运行，互联网只是增强而非设计核心；基于 Web 的开发则在 .NET、WebSphere 这类互联网框架中开发与交付，尽管 Web 架构是大趋势，许多公司仍依赖传统系统。",
          en: "Traditional development is influenced by compatibility issues and designs systems to run on local and wide-area company networks, treating the Internet as an enhancement rather than a core element; Web-based development builds and delivers systems inside an Internet-based framework such as .NET or WebSphere, and although Web architecture is a major trend, many firms still rely on traditional systems.",
          ms: "Pembangunan tradisional dipengaruhi isu keserasian dan mereka bentuk sistem untuk berjalan pada rangkaian tempatan serta kawasan luas syarikat, dengan Internet dianggap sebagai penambah baik dan bukan elemen teras; pembangunan berasaskan web membina dan menyampaikan sistem dalam kerangka Internet seperti .NET atau WebSphere, dan walaupun seni bina web menjadi trend utama, banyak firma masih bergantung pada sistem tradisional."
        },
        {
          zh: "提供外包解决方案的公司叫做服务提供商，常见形式有应用服务提供商（ASP）与互联网商业服务（IBS，也叫托管主机）；外包收费分固定费用模式、订阅模式和按量（事务）模式三种。",
          en: "A firm that offers outsourcing solutions is called a service provider, and common forms include application service providers (ASP) and Internet business services (IBS), also called managed hosting; outsourcing fees follow a fixed fee model, a subscription model or a usage (transaction) model.",
          ms: "Firma yang menawarkan penyelesaian penyumberan luar dipanggil pembekal perkhidmatan, dan bentuk biasanya termasuk pembekal perkhidmatan aplikasi (ASP) serta perkhidmatan perniagaan Internet (IBS), juga dipanggil pengehosan terurus; yuran penyumberan luar mengikut model yuran tetap, model langganan atau model penggunaan (transaksi)."
        },
        {
          zh: "购买软件包的好处是成本更低、实施时间更短、有经过验证的可靠性与性能基准、所需技术开发人员更少、由供应商提供未来升级，还能借鉴其他公司的使用经验；软件包也可以通过供应商定制、付费请供应商增强，或在许可允许时自行修改三种方式定制。",
          en: "Purchasing a software package lowers costs, shortens implementation time, offers proven reliability and performance benchmarks, needs fewer technical development staff, provides future upgrades from the vendor and brings in input from other companies; a package can be customized in three ways - the vendor customizes it, you pay the vendor for enhancements, or you modify it yourself if the licence permits.",
          ms: "Membeli pakej perisian mengurangkan kos, memendekkan masa pelaksanaan, menawarkan kebolehpercayaan dan penanda aras prestasi yang terbukti, memerlukan kakitangan pembangunan teknikal yang lebih sedikit, menyediakan peningkatan masa hadapan daripada pembekal serta membawa masuk pengalaman syarikat lain; pakej boleh diubah suai melalui tiga cara - pembekal menyesuaikannya, anda membayar pembekal untuk penambahbaikan, atau anda mengubahnya sendiri jika lesen membenarkan."
        },
        {
          zh: "财务分析工具有回收期分析（payback analysis）、投资回报率（ROI）和净现值（NPV）；成本效益分析清单要求列出每个开发策略、识别全部成本与效益及其发生时点、考虑未来增长与可扩展性、计入软硬件支持成本并分析各种软件许可方案。",
          en: "Financial analysis tools include payback analysis, return on investment (ROI) and net present value (NPV); the cost-benefit analysis checklist requires you to list each development strategy, identify all costs and benefits with their timing, consider future growth and scalability, include hardware and software support costs and analyze the various software licensing options.",
          ms: "Alat analisis kewangan termasuk analisis tempoh pulang modal, pulangan atas pelaburan (ROI) dan nilai kini bersih (NPV); senarai semak analisis kos-faedah menuntut anda menyenaraikan setiap strategi pembangunan, mengenal pasti semua kos dan faedah serta masa berlakunya, menimbangkan pertumbuhan masa hadapan dan kebolehlaksanaan penskalaan, memasukkan kos sokongan perkakasan dan perisian serta menganalisis pelbagai pilihan lesen perisian."
        },
        {
          zh: "软件采购分六步：评估信息系统需求并准备 RFP 或 RFQ、寻找潜在供应商或外包选项、评估各方案（参考现有用户、应用测试与基准测试 benchmarking）、做成本效益分析、准备推荐建议、实施解决方案。",
          en: "The software acquisition process has six steps: evaluate the information system requirements and prepare a request for proposal (RFP) or quotation (RFQ); identify potential vendors or outsourcing options; evaluate the alternatives using existing users, application testing and benchmarking; perform a cost-benefit analysis; prepare a recommendation; and implement the solution.",
          ms: "Proses perolehan perisian mempunyai enam langkah: nilai keperluan sistem maklumat dan sediakan permintaan cadangan (RFP) atau sebut harga (RFQ); kenal pasti pembekal berpotensi atau pilihan penyumberan luar; nilai alternatif melalui pengguna sedia ada, pengujian aplikasi dan penanda aras; jalankan analisis kos-faedah; sediakan cadangan; dan laksanakan penyelesaian."
        },
        {
          zh: "系统需求文档（也叫软件需求规格说明）写明新系统的需求、描述考虑过的替代方案并向管理层提出具体建议，作用类似一份合同；向管理层汇报时要概括可行的主要方案、解释推荐理由、留出讨论与问答时间，并取得最终决定或下一步时间表。",
          en: "The system requirements document, also called the software requirements specification, contains the requirements of the new system, describes the alternatives considered and makes a specific recommendation to management, and it acts like a contract; the presentation to management should summarize the main viable alternatives, explain why the team chose the recommended one, allow time for discussion and questions, and obtain a final decision or a timetable for the next step.",
          ms: "Dokumen keperluan sistem, juga dipanggil spesifikasi keperluan perisian, mengandungi keperluan sistem baharu, menerangkan alternatif yang dipertimbangkan dan mengemukakan cadangan khusus kepada pengurusan, dan ia berperanan seperti kontrak; pembentangan kepada pengurusan harus merumuskan alternatif utama yang berdaya maju, menjelaskan sebab pasukan memilih cadangan itu, memberi masa untuk perbincangan dan soal jawab, serta memperoleh keputusan akhir atau jadual masa langkah seterusnya."
        },
        {
          zh: "逻辑设计界定系统的功能、特性以及各组件之间的关系，物理设计则是系统实际实施的计划；系统设计准则要求系统有效（支持业务需求并满足用户需要）、可靠（能处理输入错误、处理错误、硬件故障和人为失误）且可维护（灵活、可扩展、易修改）。",
          en: "Logical design defines the functions and features of the system and the relationships among its components, while physical design is the plan for the actual implementation; design guidelines require a system to be effective (supporting business requirements and user needs), reliable (handling input errors, processing errors, hardware failures and human mistakes) and maintainable (flexible, scalable and easily modified).",
          ms: "Reka bentuk logik mentakrifkan fungsi dan ciri sistem serta hubungan antara komponennya, manakala reka bentuk fizikal ialah pelan pelaksanaan sebenar; garis panduan reka bentuk menuntut sistem bersifat berkesan (menyokong keperluan perniagaan dan keperluan pengguna), boleh dipercayai (mengendalikan ralat input, ralat pemprosesan, kegagalan perkakasan dan kesilapan manusia) serta boleh diselenggara (fleksibel, boleh diskalakan dan mudah diubah)."
        },
        {
          zh: "数据处理方面的设计准则包括：尽早录入数据、录入时即校验、尽量采用自动化录入、控制数据录入权限并记录关键值的所有改动（审计线索）、记录每一次录入与修改、数据只录入一次并避免重复存储；架构方面则提倡模块化设计，让每个模块只完成单一功能，便于理解、实现与维护；设计目标之间常常互相冲突，多数设计取舍最终归结为质量与成本的权衡，要避免为短期省钱而付出更高的长期代价。",
          en: "Data design guidelines include entering data as soon as possible, verifying it as it is entered, using automated data entry whenever possible, controlling data entry access and reporting all entries or changes to critical values (audit trail), logging every instance of data entry and change, entering data once and avoiding duplication; for architecture, use a modular design in which each module performs a single function so it is easier to understand, implement and maintain; design goals often conflict, and most trade-offs come down to quality versus cost, so avoid decisions that save money now but cost more later.",
          ms: "Garis panduan reka bentuk data termasuk memasukkan data secepat mungkin, mengesahkannya semasa dimasukkan, menggunakan kaedah kemasukan data automatik bila boleh, mengawal hak akses kemasukan data dan melaporkan semua kemasukan atau perubahan nilai kritikal (jejak audit), merekod setiap kemasukan dan perubahan data, memasukkan data sekali sahaja dan mengelakkan pertindihan; dari segi seni bina, gunakan reka bentuk bermodul yang setiap modulnya melakukan satu fungsi supaya lebih mudah difahami, dilaksanakan dan diselenggara; matlamat reka bentuk sering bercanggah, dan kebanyakan trade-off berpunca daripada konflik kualiti dengan kos, jadi elakkan keputusan yang menjimatkan sekarang tetapi menelan kos lebih tinggi kemudian."
        },
        {
          zh: "原型法有系统原型、设计原型和抛弃型原型三种做法，工具包括 CASE 工具、应用生成器、报表生成器、屏幕生成器和第四代语言（4GL）；原型是能运行的系统，但效率不如完整开发的系统，可以补齐功能升级为最终系统，否则就丢弃。",
          en: "Prototyping methods include system prototyping, design prototyping and throwaway prototyping, and the tools include CASE tools, application generators, report generators, screen generators and fourth-generation languages (4GL); a prototype is a functioning system but is less efficient than a fully developed one, and developers either upgrade it into the final system by adding the necessary capability or discard it.",
          ms: "Kaedah pembinaan prototaip termasuk prototaip sistem, prototaip reka bentuk dan prototaip buang, dan alatnya termasuk alat CASE, penjana aplikasi, penjana laporan, penjana skrin serta bahasa generasi keempat (4GL); prototaip ialah sistem yang berfungsi tetapi kurang cekap berbanding sistem yang dibangunkan sepenuhnya, dan pembangun sama ada meningkatkannya menjadi sistem akhir dengan menambah keupayaan yang perlu atau membuangnya."
        }
      ],
      terms: [
        { en: "Software as a Service (SaaS)", zh: "软件即服务", ms: "Perisian sebagai Perkhidmatan (SaaS)",
          def: { zh: "把软件当作服务而非产品交付给用户使用的模式，用户无需自行安装维护。", en: "A model that delivers software as a service rather than a product, so users need not install or maintain it themselves.", ms: "Model yang menyampaikan perisian sebagai perkhidmatan dan bukan produk, jadi pengguna tidak perlu memasang atau menyelenggaranya sendiri." } },
        { en: "Web 2.0", zh: "Web 2.0", ms: "Web 2.0",
          def: { zh: "强调协作、互动与信息共享的第二代互联网平台，典型应用有 wiki、博客与社交网络。", en: "The second-generation web platform emphasizing collaboration, interaction and information sharing, with wikis, blogs and social networking as typical applications.", ms: "Platform web generasi kedua yang menekankan kerjasama, interaksi dan perkongsian maklumat, dengan wiki, blog dan rangkaian sosial sebagai aplikasi tipikal." } },
        { en: "Cloud Computing", zh: "云计算", ms: "Pengkomputeran Awan",
          def: { zh: "把强大的计算能力通过网络按需提供给企业与个人用户的计算模式。", en: "A computing model that delivers powerful computing capacity to business and personal users over the network on demand.", ms: "Model pengkomputeran yang membekalkan kuasa pengkomputeran secara atas permintaan melalui rangkaian kepada pengguna perniagaan dan peribadi." } },
        { en: "Outsourcing", zh: "外包", ms: "Penyumberan Luar",
          def: { zh: "把系统的开发或运行交给外部公司负责，提供这类方案的公司称为服务提供商。", en: "Transferring the development or operation of a system to an outside firm; the firm offering such solutions is a service provider.", ms: "Menyerahkan pembangunan atau operasi sistem kepada firma luar; firma yang menawarkan penyelesaian itu dipanggil pembekal perkhidmatan." } },
        { en: "Application Service Provider (ASP)", zh: "应用服务提供商", ms: "Pembekal Perkhidmatan Aplikasi (ASP)",
          def: { zh: "通过互联网向客户提供应用软件使用服务的外部公司。", en: "An outside company that provides access to application software over the Internet.", ms: "Syarikat luar yang menyediakan akses kepada perisian aplikasi melalui Internet." } },
        { en: "Offshore Outsourcing", zh: "离岸外包", ms: "Penyumberan Luar Luar Pesisir",
          def: { zh: "把 IT 工作送到海外完成，主要动机是降低最终成本，但风险也更独特。", en: "Sending IT work overseas, mainly to lower bottom-line costs, though it brings unique risks.", ms: "Menghantar kerja IT ke luar negara, terutamanya untuk menurunkan kos keseluruhan, walaupun ia membawa risiko tersendiri." } },
        { en: "Make or Buy Decision", zh: "自制或购买决策", ms: "Keputusan Bina atau Beli",
          def: { zh: "在自行开发软件与购买现成软件包之间作选择的决策。", en: "The choice between developing software in-house and purchasing a software package.", ms: "Pilihan antara membangunkan perisian sendiri dengan membeli pakej perisian sedia ada." } },
        { en: "Request for Proposal (RFP)", zh: "征求建议书", ms: "Permintaan Cadangan (RFP)",
          def: { zh: "发给潜在供应商、说明需求并要求其提交方案与报价的正式文件。", en: "A formal document sent to potential vendors stating the requirements and asking them to submit a proposal and price.", ms: "Dokumen rasmi yang dihantar kepada pembekal berpotensi, menyatakan keperluan dan meminta mereka mengemukakan cadangan serta harga." } },
        { en: "Request for Quotation (RFQ)", zh: "询价书", ms: "Permintaan Sebut Harga (RFQ)",
          def: { zh: "需求已很明确时用来向供应商索取具体报价的文件，比 RFP 更简单直接。", en: "A document used to obtain specific price quotations when the requirements are already clear; it is simpler and more direct than an RFP.", ms: "Dokumen untuk mendapatkan sebut harga khusus apabila keperluan sudah jelas; ia lebih ringkas dan langsung berbanding RFP." } },
        { en: "Payback Analysis", zh: "回收期分析", ms: "Analisis Tempoh Pulang Modal",
          def: { zh: "计算系统产生的效益需要多久才能抵回开发与运行成本的方法。", en: "A method that calculates how long it takes for the benefits of a system to cover its development and operating costs.", ms: "Kaedah mengira berapa lama faedah sesuatu sistem mengambil masa untuk menampung kos pembangunan dan operasinya." } },
        { en: "Return on Investment (ROI)", zh: "投资回报率", ms: "Pulangan atas Pelaburan (ROI)",
          def: { zh: "用百分比衡量项目收益相对于投入成本的财务指标。", en: "A financial measure, expressed as a percentage, of a project's return relative to its cost.", ms: "Ukuran kewangan dalam bentuk peratus bagi pulangan sesuatu projek berbanding kosnya." } },
        { en: "Net Present Value (NPV)", zh: "净现值", ms: "Nilai Kini Bersih (NPV)",
          def: { zh: "把未来各年的现金流折算成现值后与初始投资比较，用来判断项目是否值得投资。", en: "The comparison of future cash flows discounted to present value against the initial investment, used to judge whether a project is worthwhile.", ms: "Perbandingan aliran tunai masa hadapan yang didiskaunkan kepada nilai kini dengan pelaburan awal, digunakan untuk menilai sama ada projek berbaloi." } },
        { en: "Benchmarking", zh: "基准测试", ms: "Penanda Aras",
          def: { zh: "用标准测试来测量软件包性能，并与其他方案或业界基准比较的做法。", en: "Measuring a package's performance with standard tests and comparing it against other alternatives or industry benchmarks.", ms: "Mengukur prestasi sesuatu pakej dengan ujian piawai dan membandingkannya dengan alternatif lain atau penanda aras industri." } },
        { en: "Logical Design", zh: "逻辑设计", ms: "Reka Bentuk Logik",
          def: { zh: "界定系统应具备的功能、特性以及各组件之间关系的设计。", en: "The design that defines the functions and features of the system and the relationships among its components.", ms: "Reka bentuk yang mentakrifkan fungsi dan ciri sistem serta hubungan antara komponennya." } },
        { en: "Prototype", zh: "原型", ms: "Prototaip",
          def: { zh: "拟建系统的一个可运行模型，用于验证需求与设计，效率通常低于最终系统。", en: "A working model of the proposed system used to validate requirements and design; it is usually less efficient than the final system.", ms: "Model berfungsi bagi sistem yang dicadangkan untuk mengesahkan keperluan dan reka bentuk; biasanya kurang cekap berbanding sistem akhir." } }
      ],
      diagrams: [
        {
          type: "compare",
          title: { zh: "自行开发、购买软件包与外包的比较", en: "In-House Development, Software Package and Outsourcing Compared", ms: "Perbandingan Pembangunan Dalaman, Pakej Perisian dan Penyumberan Luar" },
          caption: { zh: "选择开发策略时最重要的判断依据是总拥有成本（TCO）。", en: "The most important factor when choosing a development strategy is total cost of ownership (TCO).", ms: "Faktor terpenting ketika memilih strategi pembangunan ialah jumlah kos pemilikan (TCO)." },
          cols: [
            {
              head: { zh: "自行开发 In-house", en: "In-House Development", ms: "Pembangunan Dalaman" },
              items: [
                { label: { zh: "能满足独特的业务需求", en: "Satisfies unique business requirements", ms: "Memenuhi keperluan perniagaan yang unik" } },
                { label: { zh: "减少业务流程与政策的变动", en: "Minimizes changes in procedures and policies", ms: "Mengurangkan perubahan prosedur dan dasar" } },
                { label: { zh: "迁就现有系统与技术的限制", en: "Meets constraints of existing systems and technology", ms: "Menepati kekangan sistem dan teknologi sedia ada" } },
                { label: { zh: "培养公司内部资源与能力", en: "Develops internal resources and capabilities", ms: "Membangunkan sumber dan keupayaan dalaman" } }
              ]
            },
            {
              head: { zh: "购买软件包 Package", en: "Purchasing a Package", ms: "Membeli Pakej" },
              items: [
                { label: { zh: "成本更低、实施更快", en: "Lower cost, faster to implement", ms: "Kos lebih rendah, pelaksanaan lebih pantas" } },
                { label: { zh: "可靠性与性能有现成基准", en: "Proven reliability and performance benchmarks", ms: "Kebolehpercayaan dan penanda aras prestasi terbukti" } },
                { label: { zh: "所需技术开发人员更少", en: "Needs fewer technical development staff", ms: "Memerlukan kakitangan teknikal yang lebih sedikit" } },
                { label: { zh: "升级由供应商提供，可借鉴同行经验", en: "Vendor provides upgrades; input from other companies", ms: "Peningkatan disediakan pembekal; pengalaman syarikat lain" } }
              ]
            },
            {
              head: { zh: "外包 Outsourcing", en: "Outsourcing", ms: "Penyumberan Luar" },
              items: [
                { label: { zh: "由服务提供商负责开发或运行", en: "A service provider develops or runs it", ms: "Pembekal perkhidmatan membangun atau mengendalikannya" } },
                { label: { zh: "收费方式：固定费用、订阅、按量计费", en: "Fees: fixed, subscription or usage model", ms: "Yuran: tetap, langganan atau model penggunaan" } },
                { label: { zh: "离岸外包可进一步降低成本", en: "Offshore outsourcing lowers costs further", ms: "Penyumberan luar luar pesisir mengurangkan kos lagi" } },
                { label: { zh: "关键任务系统须谨慎，注意长期战略契合度", en: "Be careful with mission-critical systems and long-term strategic fit", ms: "Berhati-hati dengan sistem misi kritikal dan kesesuaian strategi jangka panjang" } }
              ]
            }
          ]
        },
        {
          type: "flow",
          dir: "v",
          title: { zh: "软件采购流程的六个步骤", en: "The Six Steps of the Software Acquisition Process", ms: "Enam Langkah Proses Perolehan Perisian" },
          caption: { zh: "每一步都有明确产出，第 1 步产出 RFP 或 RFQ，第 5 步产出推荐建议。", en: "Each step has a clear output: step 1 produces an RFP or RFQ, and step 5 produces the recommendation.", ms: "Setiap langkah mempunyai output yang jelas: langkah 1 menghasilkan RFP atau RFQ, dan langkah 5 menghasilkan cadangan." },
          steps: [
            { label: { zh: "1 评估系统需求", en: "1 Evaluate the information system requirements", ms: "1 Nilai keperluan sistem maklumat" }, note: { zh: "确定关键功能、网络与 Web 议题、估算业务量与增长、写清约束，准备 RFP/RFQ", en: "Identify key features, network and Web issues, estimate volume and growth, specify constraints, prepare the RFP/RFQ", ms: "Kenal pasti ciri utama, isu rangkaian dan web, anggar volum dan pertumbuhan, nyatakan kekangan, sediakan RFP/RFQ" } },
            { label: { zh: "2 寻找潜在供应商或外包选项", en: "2 Identify potential vendors or outsourcing options", ms: "2 Kenal pasti pembekal berpotensi atau pilihan penyumberan luar" }, note: { zh: "互联网是主要市场，也可借助咨询公司与新闻组", en: "The Internet is the primary marketplace; consulting firms and newsgroups also help", ms: "Internet ialah pasaran utama; firma perunding dan kumpulan berita juga membantu" } },
            { label: { zh: "3 评估各备选方案", en: "3 Evaluate the alternatives", ms: "3 Nilai alternatif" }, note: { zh: "访问现有用户、做应用测试与基准测试，再按 RFP 功能逐项打分排序", en: "Talk to existing users, run application testing and benchmarking, then rank each package against the RFP features", ms: "Temu pengguna sedia ada, jalankan pengujian aplikasi dan penanda aras, kemudian susun kedudukan setiap pakej mengikut ciri RFP" } },
            { label: { zh: "4 进行成本效益分析", en: "4 Perform cost-benefit analysis", ms: "4 Jalankan analisis kos-faedah" }, note: { zh: "计算每个方案的 TCO；购买软件实际买的是软件许可，可考虑补充维护协议", en: "Calculate TCO for each option; buying software means buying a licence, and a supplemental maintenance agreement may be wise", ms: "Kira TCO setiap pilihan; membeli perisian bermakna membeli lesen, dan perjanjian penyelenggaraan tambahan mungkin wajar" } },
            { label: { zh: "5 准备推荐建议", en: "5 Prepare a recommendation", ms: "5 Sediakan cadangan" }, note: { zh: "评估并描述各方案的成本、效益、优缺点，可能需要提交系统需求文档并做演示", en: "Evaluate and describe each alternative's costs, benefits, advantages and disadvantages; you may need to submit the system requirements document and present", ms: "Nilai dan terangkan kos, faedah, kebaikan dan keburukan setiap alternatif; anda mungkin perlu mengemukakan dokumen keperluan sistem dan membentangkannya" } },
            { label: { zh: "6 实施解决方案", en: "6 Implement the solution", ms: "6 Laksanakan penyelesaian" }, note: { zh: "装载、配置、测试软件，培训用户，并把数据文件转换成新格式", en: "Load, configure and test the software, train users and convert data files to the new format", ms: "Muat, konfigurasi dan uji perisian, latih pengguna dan tukar fail data kepada format baharu" } }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：RFP 与 RFQ 的区别。需求尚未明确、要供应商提方案时用 RFP；需求已经清楚、只要报价时用 RFQ。",
          en: "A certainty: the difference between an RFP and an RFQ. Use an RFP when requirements are not yet clear and you want vendors to propose solutions; use an RFQ when requirements are clear and you only need price quotations.",
          ms: "Hampir pasti keluar: perbezaan antara RFP dengan RFQ. Gunakan RFP apabila keperluan belum jelas dan anda mahu pembekal mencadangkan penyelesaian; gunakan RFQ apabila keperluan sudah jelas dan anda hanya perlukan sebut harga."
        },
        {
          zh: "对比题：自行开发与购买软件包的优缺点，以及外包（含离岸外包）的收益与风险；答题时要提到 TCO 是选型最重要的判断依据。",
          en: "Comparison question: the pros and cons of in-house development versus buying a package, and the benefits and risks of outsourcing including offshore outsourcing; mention that TCO is the most important factor in the decision.",
          ms: "Soalan perbandingan: kebaikan dan keburukan pembangunan dalaman berbanding membeli pakej, serta faedah dan risiko penyumberan luar termasuk luar pesisir; sebut bahawa TCO ialah faktor terpenting dalam keputusan itu."
        },
        {
          zh: "计算题：回收期、ROI 与 NPV 三种财务工具的应用。要能看懂给定现金流，算出回收期或判断项目是否值得投资，并记住它们都属于成本效益分析。",
          en: "Calculation question: applying payback analysis, ROI and NPV. Be able to read given cash flows, work out the payback period or judge whether a project is worthwhile, and remember that all three belong to cost-benefit analysis.",
          ms: "Soalan pengiraan: menggunakan analisis tempoh pulang modal, ROI dan NPV. Anda perlu membaca aliran tunai yang diberi, mengira tempoh pulang modal atau menilai sama ada projek berbaloi, dan ingat ketiga-tiganya tergolong dalam analisis kos-faedah."
        },
        {
          zh: "名词解释常考：SaaS、Web 2.0、云计算、逻辑设计与物理设计的区别，以及有效（effective）、可靠（reliable）、可维护（maintainable）三个设计准则的含义。",
          en: "Frequent term questions: SaaS, Web 2.0, cloud computing, the difference between logical and physical design, and what the three design guidelines - effective, reliable and maintainable - mean.",
          ms: "Soalan istilah yang kerap: SaaS, Web 2.0, pengkomputeran awan, perbezaan antara reka bentuk logik dan fizikal, serta maksud tiga garis panduan reka bentuk iaitu berkesan, boleh dipercayai dan boleh diselenggara."
        }
      ],
      mnemonic: {
        zh: "软件采购六步：需-商-评-算-荐-施；设计三准则：有效、可靠、可维护。",
        en: "Six acquisition steps: Requirements, Vendors, Evaluate, Cost-benefit, Recommend, Implement; three design criteria: effective, reliable, maintainable.",
        ms: "Enam langkah perolehan: Keperluan, Pembekal, Nilai, Kos-faedah, Cadang, Laksana; tiga kriteria reka bentuk: berkesan, boleh dipercayai, boleh diselenggara."
      }
    },
    {
      id: "sadm-10",
      num: 10,
      title: { zh: "系统构建规划", en: "System Construction Planning", ms: "Perancangan Pembinaan Sistem" },
      file: "sadm/CHP10_SADM.pptx.pdf",
      pages: 46,
      summary: {
        zh: "本章讲如何把系统的逻辑设计转化为物理架构。首先要按一份清单逐项检查：企业资源规划（ERP）、初始成本与 TCO、可扩展性、Web 集成、遗留系统接口、处理方式（在线或批处理）以及安全问题。接着介绍服务器与客户端、客户端/服务器架构的层次（两层与三层）、中间件、成本效益与性能问题，以及基于互联网的架构、企业内部门户、云计算与 Web 2.0。本章还讲解网络模型（OSI 七层、协议、层次/总线/环/星/网状拓扑、路由器）、无线网络标准与拓扑，最后给出系统设计说明书的六部分结构与用户审批、三次汇报的流程。",
        en: "This chapter shows how to turn the logical design of a system into a physical architecture. It begins with a checklist of issues: enterprise resource planning (ERP), initial cost and TCO, scalability, Web integration, legacy system interfaces, processing options (online or batch) and security. It then covers servers and clients, client/server architecture with its tiers (two-tier and three-tier), middleware, cost-benefit and performance issues, and Internet-based architecture with corporate portals, cloud computing and Web 2.0. Network models are also explained (the seven-layer OSI model, protocols, hierarchical, bus, ring, star and mesh topologies, and routers), along with wireless standards and topologies, before the chapter ends with the six-part structure of the system design specification, user approval and the three presentations.",
        ms: "Bab ini menunjukkan cara menukar reka bentuk logik sistem kepada seni bina fizikal. Ia bermula dengan senarai semak isu: perancangan sumber perusahaan (ERP), kos awal dan TCO, kebolehlaksanaan penskalaan, integrasi web, antara muka sistem warisan, pilihan pemprosesan (dalam talian atau kelompok) dan keselamatan. Seterusnya, bab ini merangkumi pelayan dan klien, seni bina klien/pelayan dengan peringkatnya (dua peringkat dan tiga peringkat), perisian tengah, isu kos-faedah dan prestasi, serta seni bina berasaskan Internet dengan portal korporat, pengkomputeran awan dan Web 2.0. Model rangkaian juga diterangkan (model OSI tujuh lapisan, protokol, topologi hierarki, bas, gelang, bintang dan jaring, serta penghala), di samping piawaian dan topologi rangkaian tanpa wayar, sebelum bab ini diakhiri dengan struktur enam bahagian spesifikasi reka bentuk sistem, kelulusan pengguna dan tiga pembentangan."
      },
      points: [
        {
          zh: "选择架构时的检查清单包括：企业资源规划（ERP，目标是建立全公司使用 IT 资源的策略，并涉及供应链管理 SCM）、初始成本与总拥有成本、可扩展性、Web 集成、遗留系统接口需求、处理方式选项以及安全问题。",
          en: "The architecture checklist includes enterprise resource planning (ERP, whose objective is a company-wide strategy for using IT resources and which relates to supply chain management), initial cost and TCO, scalability, Web integration, legacy system interface requirements, processing options and security issues.",
          ms: "Senarai semak seni bina termasuk perancangan sumber perusahaan (ERP, yang bertujuan mewujudkan strategi penggunaan sumber IT seluruh syarikat dan berkait dengan pengurusan rantaian bekalan), kos awal dan TCO, kebolehlaksanaan penskalaan, integrasi web, keperluan antara muka sistem warisan, pilihan pemprosesan serta isu keselamatan."
        },
        {
          zh: "客户端/服务器架构分两层设计与三层设计，并区分胖客户端与瘦客户端；中间件让各层能够互相通信、来回传递数据，提供透明的接口，还能把遗留系统与基于 Web 的应用集成起来。",
          en: "Client/server architecture has two-tier and three-tier designs and distinguishes fat clients from thin clients; middleware enables the tiers to communicate and pass data back and forth, provides a transparent interface and can integrate legacy systems and Web-based applications.",
          ms: "Seni bina klien/pelayan mempunyai reka bentuk dua peringkat dan tiga peringkat serta membezakan klien gemuk daripada klien nipis; perisian tengah membolehkan peringkat-peringkat berkomunikasi dan memindahkan data, menyediakan antara muka telus dan boleh mengintegrasikan sistem warisan dengan aplikasi berasaskan web."
        },
        {
          zh: "客户端/服务器的成本效益在于能快速扩展、把应用从昂贵的大型机迁移到较便宜的客户端平台、降低网络负载并改善响应时间；性能上它把应用与数据分离，可用分布式数据库管理系统（DDBMS），新增数据站点无需重做设计，也不易发生灾难性故障。",
          en: "The cost-benefit case for client/server is that firms can scale the system rapidly, transfer applications from expensive mainframes to cheaper client platforms, reduce network load and improve response times; on performance, it separates applications from data, can use a distributed database management system (DDBMS), allows new data sites to be added without reworking the design and is less likely to suffer catastrophic failure.",
          ms: "Faedah kos klien/pelayan ialah firma dapat menskalakan sistem dengan pantas, memindahkan aplikasi daripada kerangka utama yang mahal ke platform klien yang lebih murah, mengurangkan beban rangkaian dan memperbaiki masa tindak balas; dari segi prestasi, ia memisahkan aplikasi daripada data, boleh menggunakan sistem pengurusan pangkalan data teragih (DDBMS), membenarkan tapak data baharu ditambah tanpa mereka semula reka bentuk dan kurang berkemungkinan mengalami kegagalan bencana."
        },
        {
          zh: "基于互联网的架构有三种落地方式：自行开发电子商务方案、采用供应商的交钥匙（turnkey）打包方案或 ASP/托管主机服务；企业门户为客户、员工、供应商与公众提供统一入口。",
          en: "Internet-based architecture can be delivered in three ways: developing the e-commerce solution in-house, buying a turnkey packaged solution from a vendor, or using an ASP or managed hosting; a corporate portal provides a single entrance for customers, employees, suppliers and the public.",
          ms: "Seni bina berasaskan Internet boleh dilaksanakan melalui tiga cara: membangunkan penyelesaian e-dagang sendiri, membeli penyelesaian pakej turnkey daripada pembekal, atau menggunakan ASP atau pengehosan terurus; portal korporat menyediakan satu pintu masuk untuk pelanggan, pekerja, pembekal dan orang awam."
        },
        {
          zh: "在线处理是交互式的，可以避免延误，让用户与系统保持持续对话；批处理则按预定时间表、不需要用户参与即可运行，占用的网络资源明显更少，两者也可以结合使用。",
          en: "Online processing is interactive, avoids delays and allows a constant dialog between the user and the system, while batch processing runs on a predetermined schedule without user involvement and requires significantly fewer network resources; the two can also be combined.",
          ms: "Pemprosesan dalam talian bersifat interaktif, mengelakkan kelewatan dan membolehkan dialog berterusan antara pengguna dengan sistem, manakala pemprosesan kelompok berjalan mengikut jadual yang telah ditetapkan tanpa penglibatan pengguna dan memerlukan sumber rangkaian yang jauh lebih sedikit; kedua-duanya juga boleh digabungkan."
        },
        {
          zh: "网络拓扑决定网络如何配置：层次型网络映照组织的实际运作流程，但增加处理层级后会更复杂、更贵；总线型可以随时接入或移除设备，但用户越多性能越差，今天已不流行。",
          en: "Network topology is the way a network is configured: a hierarchical network mirrors the actual operational flow of the organization but becomes more complex and expensive to operate and maintain as processing levels are added, while a bus network lets devices be attached or detached at any point without disturbing the rest, though performance declines as more users are added and it is much less popular today.",
          ms: "Topologi rangkaian ialah cara rangkaian dikonfigurasikan: rangkaian hierarki mencerminkan aliran operasi sebenar organisasi tetapi menjadi lebih kompleks dan mahal untuk dikendalikan serta diselenggara apabila peringkat pemprosesan ditambah, manakala rangkaian bas membolehkan peranti disambung atau ditanggalkan pada bila-bila masa tanpa mengganggu yang lain, namun prestasinya menurun apabila lebih ramai pengguna ditambah dan ia kurang popular hari ini."
        },
        {
          zh: "环型网络中一个设备（如 PC 或服务器）故障，会让下游设备无法与网络通信，所以要用多站接入单元（MAU）；星型网络完全依赖交换机，但大型星型网络通常会准备备用交换机；网状网络极其可靠却安装维护昂贵，最初用于军事。",
          en: "In a ring network, the failure of one device such as a PC or server stops the devices downstream from communicating with the network, which is why a multistation access unit (MAU) is used; a star network depends entirely on the switch, although most large star networks keep backup switches ready; a mesh network is extremely reliable but expensive to install and maintain and was originally developed for military use.",
          ms: "Dalam rangkaian gelang, kegagalan satu peranti seperti PC atau pelayan menyebabkan peranti di hilirnya tidak dapat berkomunikasi dengan rangkaian, sebab itulah unit akses berbilang stesen (MAU) digunakan; rangkaian bintang bergantung sepenuhnya pada suis, walaupun kebanyakan rangkaian bintang besar menyediakan suis sandaran; rangkaian jaring sangat boleh dipercayai tetapi mahal untuk dipasang dan diselenggara serta pada asalnya dibangunkan untuk kegunaan tentera."
        },
        {
          zh: "无线局域网（WLAN）以 IEEE 802.11 系列标准为基础，包括 802.11g、采用 MIMO 与多径设计的 802.11n 以及 802.11y；拓扑上分为基础设施模式的基本服务集（BSS，通过接入点）、支持漫游的扩展服务集（ESS）和对等模式的独立服务集（ISS）。",
          en: "Wireless local area networks (WLANs) are based on the IEEE 802.11 family, including 802.11g, 802.11n with MIMO and multipath design, and 802.11y; their topologies are the Basic Service Set (BSS) in infrastructure mode with an access point, the Extended Service Set (ESS) which supports roaming, and the Independent Service Set (ISS) in peer-to-peer mode.",
          ms: "Rangkaian kawasan tempatan tanpa wayar (WLAN) berasaskan keluarga IEEE 802.11, termasuk 802.11g, 802.11n dengan MIMO dan reka bentuk berbilang laluan, serta 802.11y; topologinya ialah Set Perkhidmatan Asas (BSS) dalam mod infrastruktur dengan titik akses, Set Perkhidmatan Lanjutan (ESS) yang menyokong perayauan, dan Set Perkhidmatan Bebas (ISS) dalam mod rakan ke rakan."
        },
        {
          zh: "系统设计说明书一般由六部分组成：管理摘要、系统组件、系统环境、实施需求、时间与成本估算以及其他附加材料；完成后要让用户审阅并批准界面、报表、菜单、录入屏幕与源文档等与他们相关的设计。",
          en: "A typical system design specification has six parts: management summary, system components, system environment, implementation requirements, time and cost estimates and additional material; when complete, users must review and approve the interface design, report and menu designs, data entry screens, source documents and other areas that affect them.",
          ms: "Spesifikasi reka bentuk sistem biasanya mempunyai enam bahagian: ringkasan pengurusan, komponen sistem, persekitaran sistem, keperluan pelaksanaan, anggaran masa dan kos serta bahan tambahan; setelah siap, pengguna mesti menyemak dan meluluskan reka bentuk antara muka, reka bentuk laporan dan menu, skrin kemasukan data, dokumen sumber serta bahagian lain yang menjejaskan mereka."
        },
        {
          zh: "设计方案要分三次汇报：先向系统分析师、程序员与技术支援人员，再向受影响的部门经理与用户，最后向公司管理层；管理层可能决定继续开发、再做设计阶段的工作，或者终止项目。",
          en: "The design is presented three times: first to systems analysts, programmers and technical support staff; next to department managers and users from affected departments; and finally to company management, which may decide to proceed with systems development, perform additional work on the design phase, or terminate the project.",
          ms: "Reka bentuk dibentangkan tiga kali: pertama kepada penganalisis sistem, pengaturcara dan kakitangan sokongan teknikal; kemudian kepada pengurus jabatan serta pengguna jabatan terlibat; dan akhirnya kepada pengurusan syarikat, yang boleh memutuskan untuk meneruskan pembangunan sistem, melakukan kerja tambahan dalam fasa reka bentuk, atau menamatkan projek."
        }
      ],
      terms: [
        { en: "System Architecture", zh: "系统架构", ms: "Seni Bina Sistem",
          def: { zh: "把逻辑设计转化为包含硬件、软件、网络支持与处理方法的物理结构。", en: "The physical structure that translates the logical design into hardware, software, network support and processing methods.", ms: "Struktur fizikal yang menukar reka bentuk logik kepada perkakasan, perisian, sokongan rangkaian dan kaedah pemprosesan." } },
        { en: "Enterprise Resource Planning (ERP)", zh: "企业资源规划", ms: "Perancangan Sumber Perusahaan (ERP)",
          def: { zh: "以全公司统一策略使用 IT 资源为目标的企业级系统，常与供应链管理配合。", en: "An enterprise-wide system whose objective is a company-wide strategy for using IT resources, usually working with supply chain management.", ms: "Sistem seluruh perusahaan yang bertujuan mewujudkan strategi penggunaan sumber IT seluruh syarikat, biasanya bersama pengurusan rantaian bekalan." } },
        { en: "Scalability (Extensibility)", zh: "可扩展性", ms: "Kebolehlaksanaan Penskalaan",
          def: { zh: "系统随企业需求变化而方便扩充、改变或缩减的能力，对按业务量计费的系统尤其重要。", en: "A system's ability to expand, change or downsize easily as business needs change; especially important for volume-rated systems.", ms: "Keupayaan sistem untuk dikembangkan, diubah atau dikecilkan dengan mudah mengikut perubahan keperluan perniagaan; amat penting bagi sistem yang dinilai mengikut volum." } },
        { en: "Legacy System", zh: "遗留系统", ms: "Sistem Warisan",
          def: { zh: "公司里仍在运行的老系统，新系统常常必须与它在数据格式上兼容。", en: "An older system still running in the company that a new system often has to remain compatible with in terms of data formats.", ms: "Sistem lama yang masih beroperasi dalam syarikat dan sering perlu diserasikan dari segi format data dengan sistem baharu." } },
        { en: "Two-Tier / Three-Tier Design", zh: "两层 / 三层设计", ms: "Reka Bentuk Dua / Tiga Peringkat",
          def: { zh: "两层设计把界面与数据放在两端，三层设计再加入一层处理业务逻辑的应用服务器。", en: "A two-tier design puts the interface and the data at the two ends, while a three-tier design adds an application server layer that holds the business logic.", ms: "Reka bentuk dua peringkat meletakkan antara muka dan data di kedua-dua hujung, manakala reka bentuk tiga peringkat menambah lapisan pelayan aplikasi yang memegang logik perniagaan." } },
        { en: "Middleware", zh: "中间件", ms: "Perisian Tengah",
          def: { zh: "让各层之间能够通信并来回传递数据的软件，提供透明接口并可集成遗留系统与 Web 应用。", en: "Software that lets the tiers communicate and pass data back and forth, providing a transparent interface and integrating legacy and Web applications.", ms: "Perisian yang membolehkan peringkat berkomunikasi dan memindahkan data, menyediakan antara muka telus serta mengintegrasikan sistem warisan dengan aplikasi web." } },
        { en: "Distributed Database Management System (DDBMS)", zh: "分布式数据库管理系统", ms: "Sistem Pengurusan Pangkalan Data Teragih (DDBMS)",
          def: { zh: "管理分布在多个站点上的数据库的软件，使新增数据站点无需重做系统设计。", en: "Software that manages databases spread across several sites, letting new data sites be added without reworking the system design.", ms: "Perisian yang mengurus pangkalan data yang tersebar di beberapa tapak, membolehkan tapak data baharu ditambah tanpa mereka semula reka bentuk." } },
        { en: "Online Processing", zh: "在线处理", ms: "Pemprosesan Dalam Talian",
          def: { zh: "用户与系统实时交互、即时得到响应的处理方式，可以避免延误。", en: "Processing in which the user interacts with the system in real time and gets immediate responses, avoiding delays.", ms: "Pemprosesan yang pengguna berinteraksi dengan sistem secara masa nyata dan menerima tindak balas segera, seterusnya mengelakkan kelewatan." } },
        { en: "Batch Processing", zh: "批处理", ms: "Pemprosesan Kelompok",
          def: { zh: "按预定时间表、无需用户参与即可运行的处理方式，占用的网络资源明显更少。", en: "Processing that runs on a predetermined schedule without user involvement and needs significantly fewer network resources.", ms: "Pemprosesan yang berjalan mengikut jadual ditetapkan tanpa penglibatan pengguna dan memerlukan sumber rangkaian yang jauh lebih sedikit." } },
        { en: "Network Topology", zh: "网络拓扑", ms: "Topologi Rangkaian",
          def: { zh: "网络中设备与线路的配置方式，常见有层次型、总线型、环型、星型与网状。", en: "The way the devices and links of a network are configured, commonly hierarchical, bus, ring, star or mesh.", ms: "Cara peranti dan pautan rangkaian dikonfigurasikan, biasanya hierarki, bas, gelang, bintang atau jaring." } },
        { en: "Protocol", zh: "协议", ms: "Protokol",
          def: { zh: "网络通信必须遵守的规则集合，最常见的例子是 TCP/IP 与 FTP。", en: "The set of rules that network communication must follow, with TCP/IP and FTP as the most common examples.", ms: "Set peraturan yang mesti dipatuhi oleh komunikasi rangkaian, dengan TCP/IP dan FTP sebagai contoh yang paling biasa." } },
        { en: "OSI Reference Model", zh: "OSI 参考模型", ms: "Model Rujukan OSI",
          def: { zh: "把网络通信划分为七层的设计标准模型，每层执行特定功能。", en: "A design standard that divides network communication into seven layers, each performing a specific function.", ms: "Piawaian reka bentuk yang membahagikan komunikasi rangkaian kepada tujuh lapisan, setiap satu melaksanakan fungsi tertentu." } },
        { en: "Router", zh: "路由器", ms: "Penghala",
          def: { zh: "工作在比交换机更高的 OSI 层次、能连接更大且异构网络（如互联网）的设备。", en: "A device that works at a higher OSI level than a switch and can connect to larger, dissimilar networks such as the Internet.", ms: "Peranti yang berfungsi pada peringkat OSI lebih tinggi daripada suis dan boleh menyambung ke rangkaian yang lebih besar serta berbeza seperti Internet." } },
        { en: "Wireless LAN (WLAN)", zh: "无线局域网", ms: "Rangkaian Kawasan Tempatan Tanpa Wayar (WLAN)",
          def: { zh: "基于 IEEE 802.11 标准、用无线电波代替线缆连接设备的局域网。", en: "A local area network based on the IEEE 802.11 standards that connects devices by radio waves instead of cables.", ms: "Rangkaian kawasan tempatan berasaskan piawaian IEEE 802.11 yang menghubungkan peranti melalui gelombang radio dan bukan kabel." } },
        { en: "System Design Specification", zh: "系统设计说明书", ms: "Spesifikasi Reka Bentuk Sistem",
          def: { zh: "完整呈现系统设计的文档，含管理摘要、系统组件、系统环境、实施需求、时间与成本估算及附加材料。", en: "The document presenting the complete systems design: management summary, system components, system environment, implementation requirements, time and cost estimates and additional material.", ms: "Dokumen yang membentangkan reka bentuk sistem secara lengkap: ringkasan pengurusan, komponen sistem, persekitaran sistem, keperluan pelaksanaan, anggaran masa dan kos serta bahan tambahan." } }
      ],
      diagrams: [
        {
          type: "layers",
          title: { zh: "三层客户端/服务器架构", en: "Three-Tier Client/Server Architecture", ms: "Seni Bina Klien/Pelayan Tiga Peringkat" },
          caption: { zh: "每一层各司其职，中间件负责层级之间的通信与数据传递。", en: "Each tier has its own job, and middleware handles communication and data passing between the tiers.", ms: "Setiap peringkat mempunyai tugasnya sendiri, dan perisian tengah mengendalikan komunikasi serta pemindahan data antara peringkat." },
          layers: [
            { label: { zh: "表示层（客户端）", en: "Presentation tier (client)", ms: "Peringkat persembahan (klien)" }, note: { zh: "用户界面与输入输出，胖客户端分担更多处理，瘦客户端几乎只做显示", en: "User interface and input/output; a fat client shares more processing, a thin client mainly displays", ms: "Antara muka pengguna serta input/output; klien gemuk berkongsi lebih banyak pemprosesan, klien nipis kebanyakannya memaparkan" } },
            { label: { zh: "中间件（Middleware）", en: "Middleware", ms: "Perisian tengah" }, note: { zh: "让各层互相通信、来回传递数据，提供透明接口，可集成遗留系统与 Web 应用", en: "Lets the tiers communicate and pass data, provides a transparent interface and integrates legacy and Web applications", ms: "Membolehkan peringkat berkomunikasi dan memindahkan data, menyediakan antara muka telus serta mengintegrasikan sistem warisan dan aplikasi web" } },
            { label: { zh: "业务逻辑层（应用服务器）", en: "Business logic tier (application server)", ms: "Peringkat logik perniagaan (pelayan aplikasi)" }, note: { zh: "执行处理规则，把应用与数据分离，使系统更易扩展", en: "Runs the processing rules, separates applications from data and makes the system easier to scale", ms: "Menjalankan peraturan pemprosesan, memisahkan aplikasi daripada data dan menjadikan sistem lebih mudah diskalakan" } },
            { label: { zh: "数据层（数据库服务器）", en: "Data tier (database server)", ms: "Peringkat data (pelayan pangkalan data)" }, note: { zh: "由 DDBMS 管理，可在不重做设计的情况下增加新的数据站点", en: "Managed by a DDBMS so new data sites can be added without reworking the design", ms: "Diuruskan oleh DDBMS supaya tapak data baharu boleh ditambah tanpa mereka semula reka bentuk" } }
          ]
        },
        {
          type: "compare",
          title: { zh: "在线处理与批处理的比较", en: "Online Processing versus Batch Processing", ms: "Perbandingan Pemprosesan Dalam Talian dengan Kelompok" },
          cols: [
            {
              head: { zh: "在线处理 Online", en: "Online Processing", ms: "Pemprosesan Dalam Talian" },
              items: [
                { label: { zh: "交互式，用户与系统持续对话", en: "Interactive, with a constant dialog between user and system", ms: "Interaktif, dengan dialog berterusan antara pengguna dan sistem" } },
                { label: { zh: "即时响应，避免延误", en: "Immediate response, avoiding delays", ms: "Tindak balas segera, mengelakkan kelewatan" } },
                { label: { zh: "也可用于面向文件的系统", en: "Can also be used with file-oriented systems", ms: "Boleh juga digunakan dengan sistem berorientasikan fail" } },
                { label: { zh: "占用的网络资源较多", en: "Uses more network resources", ms: "Menggunakan lebih banyak sumber rangkaian" } }
              ]
            },
            {
              head: { zh: "批处理 Batch", en: "Batch Processing", ms: "Pemprosesan Kelompok" },
              items: [
                { label: { zh: "按预定时间表运行，无需用户参与", en: "Runs on a predetermined schedule without user involvement", ms: "Berjalan mengikut jadual ditetapkan tanpa penglibatan pengguna" } },
                { label: { zh: "可在上班时间、夜间或周末执行", en: "Can run during business hours, at night or at weekends", ms: "Boleh dijalankan pada waktu bekerja, malam atau hujung minggu" } },
                { label: { zh: "网络资源需求明显更少", en: "Requires significantly fewer network resources", ms: "Memerlukan sumber rangkaian yang jauh lebih sedikit" } },
                { label: { zh: "可以与在线处理结合使用", en: "Can be combined with online processing", ms: "Boleh digabungkan dengan pemprosesan dalam talian" } }
              ]
            }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：网络拓扑的优缺点对比。层次型随层级增加变复杂、总线型用户越多性能越差、环型一处故障影响下游、星型依赖交换机、网状可靠但昂贵。",
          en: "A certainty: comparing the advantages and disadvantages of network topologies - hierarchical grows complex with more levels, bus performance drops as users are added, a ring failure blocks downstream devices, star depends on the switch, and mesh is reliable but expensive.",
          ms: "Hampir pasti keluar: perbandingan kebaikan dan keburukan topologi rangkaian - hierarki menjadi kompleks dengan lebih banyak peringkat, prestasi bas menurun apabila pengguna bertambah, kegagalan gelang menghalang peranti di hilir, bintang bergantung pada suis, dan jaring boleh dipercayai tetapi mahal."
        },
        {
          zh: "对比题：在线处理与批处理的差别，以及各自适用的业务场景；答题时要提到批处理网络资源需求更少、在线处理是交互式的。",
          en: "Comparison question: how online and batch processing differ and when each is suitable; mention that batch processing needs fewer network resources while online processing is interactive.",
          ms: "Soalan perbandingan: perbezaan pemprosesan dalam talian dengan kelompok serta situasi yang sesuai untuk setiap satu; sebut bahawa pemprosesan kelompok memerlukan sumber rangkaian yang lebih sedikit manakala pemprosesan dalam talian bersifat interaktif."
        },
        {
          zh: "高频考点：三层客户端/服务器架构中每一层的作用与中间件的功能；还要知道路由器与交换机的区别在于路由器工作在更高的 OSI 层次。",
          en: "Frequent question: the role of each tier in three-tier client/server architecture and the function of middleware; also know that a router differs from a switch by working at a higher OSI level.",
          ms: "Soalan kerap: peranan setiap peringkat dalam seni bina klien/pelayan tiga peringkat dan fungsi perisian tengah; ketahui juga bahawa penghala berbeza daripada suis kerana berfungsi pada peringkat OSI yang lebih tinggi."
        },
        {
          zh: "易错点：系统设计说明书的六个组成部分顺序要记牢（管理摘要、系统组件、系统环境、实施需求、时间与成本估算、附加材料），并且三次汇报的对象是逐级上升的。",
          en: "Common trap: memorize the six parts of the system design specification in order (management summary, system components, system environment, implementation requirements, time and cost estimates, additional material), and remember that the three presentations move up the hierarchy.",
          ms: "Perangkap biasa: hafal enam bahagian spesifikasi reka bentuk sistem mengikut urutan (ringkasan pengurusan, komponen sistem, persekitaran sistem, keperluan pelaksanaan, anggaran masa dan kos, bahan tambahan), dan ingat bahawa tiga pembentangan itu bergerak ke peringkat yang lebih tinggi."
        }
      ],
      mnemonic: {
        zh: "架构检查清单七件事：ERP、成本、扩展、Web、遗留、处理、安全。",
        en: "Seven architecture checklist items: ERP, cost, scalability, Web integration, legacy systems, processing options, security.",
        ms: "Tujuh item senarai semak seni bina: ERP, kos, kebolehlaksanaan penskalaan, integrasi web, sistem warisan, pilihan pemprosesan, keselamatan."
      }
    },
    {
      id: "sadm-11",
      num: 11,
      title: { zh: "系统上线实施", en: "Making the System Operational", ms: "Menjadikan Sistem Beroperasi" },
      file: "sadm/CHAP11_SADM.pdf",
      pages: 48,
      summary: {
        zh: "系统实施是 SDLC 的第四个阶段，交付物是一个完全可运行的信息系统。本章涵盖实施阶段的全部工作：软件质量保证与软件工程（CMM/CMMI、ISO 90003）、应用程序开发（结构化方法的结构图、内聚与耦合，面向对象方法与敏捷方法及极限编程）、编码、单元/集成/系统测试、四类文档、运行环境与测试环境的搭建、用户培训、数据转换，以及直接切换、并行运行、试点运行和分阶段切换四种转换方式。最后讲解实施后评估与提交给管理层的最终报告。",
        en: "Systems implementation is the fourth SDLC phase, and its deliverable is a completely functioning information system. This chapter covers all the work of the phase: software quality assurance and software engineering (CMM/CMMI, ISO 90003), application development (structure charts with cohesion and coupling for structured methods, object-oriented development and agile methods including Extreme Programming), coding, unit, integration and system testing, the four kinds of documentation, setting up operational and test environments, user training, data conversion, and the four changeover methods - direct cutover, parallel operation, pilot operation and phased operation. It ends with post-implementation evaluation and the final report to management.",
        ms: "Pelaksanaan sistem ialah fasa keempat SDLC, dan hasil serahannya ialah sistem maklumat yang berfungsi sepenuhnya. Bab ini merangkumi keseluruhan kerja fasa tersebut: jaminan kualiti perisian dan kejuruteraan perisian (CMM/CMMI, ISO 90003), pembangunan aplikasi (carta struktur dengan kohesi dan gandingan untuk kaedah berstruktur, pembangunan berorientasikan objek serta kaedah tangkas termasuk Pengaturcaraan Ekstrem), pengekodan, pengujian unit, integrasi dan sistem, empat jenis dokumentasi, penyediaan persekitaran operasi dan pengujian, latihan pengguna, penukaran data, dan empat kaedah pertukaran sistem - potong terus, operasi selari, operasi perintis dan operasi berperingkat. Bab ini diakhiri dengan penilaian selepas pelaksanaan dan laporan akhir kepada pengurusan."
      },
      points: [
        {
          zh: "结构化开发用结构图（structure chart）表示模块层次：控制模块调用下级模块，模块之间传递数据耦合（data couple）与控制耦合（control couple），并可以带条件（condition）与循环（loop）。",
          en: "Structured development uses a structure chart to show the module hierarchy: a control module calls subordinate modules, modules pass data couples and control couples, and the chart can include conditions and loops.",
          ms: "Pembangunan berstruktur menggunakan carta struktur untuk menunjukkan hierarki modul: modul kawalan memanggil modul bawahan, modul memindahkan gandingan data dan gandingan kawalan, dan carta itu boleh mengandungi keadaan serta gelung."
        },
        {
          zh: "内聚（cohesion）指一个模块内部各部分的关联程度，要提高内聚可以把模块拆成各司单一功能的独立单元；耦合（coupling）指模块之间的依赖程度，设计应追求松散耦合（loosely coupled），避免紧密耦合（tightly coupled）。",
          en: "Cohesion measures how closely the parts inside one module belong together, and a module can be made more cohesive by splitting it into separate units that each perform a single function; coupling measures the dependency between modules, and designs should aim for loose coupling rather than tight coupling.",
          ms: "Kohesi mengukur sejauh mana bahagian dalam sesuatu modul saling berkaitan, dan kohesi boleh ditingkatkan dengan memecahkan modul kepada unit berasingan yang masing-masing melakukan satu fungsi; gandingan mengukur kebergantungan antara modul, dan reka bentuk harus menyasarkan gandingan longgar dan bukan gandingan ketat."
        },
        {
          zh: "面向对象开发中，应用程序的结构由对象模型本身表示；主要目标是把对象方法翻译成程序代码模块，并确定由哪个事件或消息触发每个模块执行，实现时要求类之间松散耦合、方法既松散耦合又高度内聚。",
          en: "In object-oriented development the application's structure is represented by the object model itself; the main objective is to translate object methods into program code modules and determine which event or message triggers each module, and the implementation should keep classes loosely coupled and methods both loosely coupled and highly cohesive.",
          ms: "Dalam pembangunan berorientasikan objek, struktur aplikasi diwakili oleh model objek itu sendiri; objektif utamanya ialah menterjemah kaedah objek menjadi modul kod program dan menentukan peristiwa atau mesej yang mencetuskan setiap modul, dan pelaksanaannya perlu memastikan kelas bergandingan longgar serta kaedah bergandingan longgar dan berkohesi tinggi."
        },
        {
          zh: "敏捷开发让开发团队与客户持续沟通，强调小团队、密集沟通与快速迭代；极限编程（XP）的实践包括用户故事、发布计划、迭代周期、迭代计划会议、并行编程和测试驱动设计，但批评者认为它缺乏纪律、质量难以保证，所以没有放之四海而皆准的方案。",
          en: "Agile development keeps the team in constant communication with the customer and focuses on small teams, intense communication and rapid development iterations; Extreme Programming (XP) practices include user stories, release plans, iteration cycles, iteration planning meetings, parallel programming and test-driven design, but critics claim it lacks discipline and produces systems of questionable quality, so there is no one-size-fits-all solution.",
          ms: "Pembangunan tangkas memastikan pasukan sentiasa berkomunikasi dengan pelanggan dan menekankan pasukan kecil, komunikasi intensif serta lelaran pembangunan yang pantas; amalan Pengaturcaraan Ekstrem (XP) termasuk cerita pengguna, pelan pelepasan, kitaran lelaran, mesyuarat perancangan lelaran, pengaturcaraan selari dan reka bentuk dipacu ujian, tetapi pengkritik menyatakan ia kurang disiplin dan menghasilkan sistem yang kualitinya dipertikaikan, jadi tiada penyelesaian yang sesuai untuk semua."
        },
        {
          zh: "测试分三个层次：单元测试检查单个模块，集成测试检查模块之间能否协同工作，系统测试检查整个系统是否满足需求；充分的测试应当被视为提供高质量产品的省钱手段。",
          en: "Testing has three levels: unit testing checks individual modules, integration testing checks whether modules work together, and system testing checks whether the whole system meets requirements; thorough testing should be regarded as a cost-effective means of providing a quality product.",
          ms: "Pengujian mempunyai tiga peringkat: pengujian unit menyemak modul individu, pengujian integrasi menyemak sama ada modul boleh bekerjasama, dan pengujian sistem menyemak sama ada keseluruhan sistem memenuhi keperluan; pengujian menyeluruh harus dianggap sebagai cara berpatutan untuk menghasilkan produk berkualiti."
        },
        {
          zh: "文档分四类：程序文档、系统文档、运行文档和用户文档，其中用户文档通常由系统分析师负责准备，良好的在线文档是重要的生产力工具。",
          en: "There are four kinds of documentation: program documentation, system documentation, operations documentation and user documentation; systems analysts are usually responsible for preparing user documentation, and effective online documentation is an important productivity tool.",
          ms: "Terdapat empat jenis dokumentasi: dokumentasi program, dokumentasi sistem, dokumentasi operasi dan dokumentasi pengguna; penganalisis sistem biasanya bertanggungjawab menyediakan dokumentasi pengguna, dan dokumentasi dalam talian yang berkesan ialah alat produktiviti yang penting."
        },
        {
          zh: "系统测试完成后要向管理层汇报结果，若没有技术、经济或运行问题，管理层就确定系统安装与评估的时间表；实施阶段还要准备独立的运行环境与测试环境，运行环境包括软硬件配置与设置、系统工具、通信资源等。",
          en: "After system testing is complete the results are presented to management, and if there are no technical, economical or operational problems management sets a schedule for system installation and evaluation; the phase also requires a separate operational environment and test environment, where the operational environment includes hardware and software configurations and settings, system utilities and telecommunications resources.",
          ms: "Selepas pengujian sistem selesai, hasilnya dibentangkan kepada pengurusan, dan jika tiada masalah teknikal, ekonomi atau operasi, pengurusan menetapkan jadual pemasangan dan penilaian sistem; fasa ini juga memerlukan persekitaran operasi dan persekitaran pengujian yang berasingan, dengan persekitaran operasi merangkumi konfigurasi serta tetapan perkakasan dan perisian, utiliti sistem dan sumber telekomunikasi."
        },
        {
          zh: "培训对象分三类：用户、管理者和 IT 人员；供应商培训往往最划算，可以在 RFP/RFQ 中要求；此外还有网络研讨会、播客、教程和外部培训机构；有效做法包括分组培训、选对场地、兼顾听觉/视觉/动手三种学习方式、准备含互动教程的材料并借助老学员。",
          en: "Training has three main groups - users, managers and IT staff; vendor training often gives the best return on your training dollars and should be requested in the RFP or RFQ; webinars, podcasts, tutorials and outside training resources are also available, and effective practices include training people in groups, choosing the right place, providing for learning by hearing, seeing and doing, preparing materials with interactive tutorials, and relying on previous trainees.",
          ms: "Latihan mempunyai tiga kumpulan utama - pengguna, pengurus dan kakitangan IT; latihan daripada pembekal selalunya memberi pulangan terbaik dan patut diminta dalam RFP atau RFQ; webinar, podcast, tutorial dan pusat latihan luar juga tersedia, dan amalan berkesan termasuk melatih secara berkumpulan, memilih tempat yang sesuai, menyediakan pembelajaran melalui pendengaran, penglihatan dan perbuatan, menyediakan bahan dengan tutorial interaktif, serta bergantung pada pelatih terdahulu."
        },
        {
          zh: "系统切换有四种方式：直接切换风险最大，常用于商业软件包和按季度/年度开始的周期性系统；并行运行最容易验证新系统是否正确，但会加重运行环境负担、造成处理延迟；试点运行先在一个试点站点上线、其余部门继续用旧系统，成功后再用直接切换推广；分阶段切换把系统的一部分先给所有用户使用，风险仅限该模块，但系统必须能拆成逻辑模块才行。",
          en: "There are four changeover methods: direct cutover carries the most risk and is often used for commercial packages and cyclical systems converted at the start of a quarter or year; parallel operation makes it easiest to verify that the new system works properly but burdens the operating environment and causes processing delays; pilot operation runs the new system first at a pilot site while the rest of the organization keeps the old system, then uses direct cutover to roll it out; phased operation gives part of the system to all users, limiting risk to that module, but it is impossible if the system cannot be separated into logical modules.",
          ms: "Terdapat empat kaedah pertukaran: potong terus membawa risiko paling tinggi dan sering digunakan untuk pakej komersial serta sistem berkitar yang ditukar pada awal suku tahun atau tahun; operasi selari paling mudah untuk mengesahkan sistem baharu berfungsi dengan betul tetapi membebankan persekitaran operasi dan menyebabkan kelewatan pemprosesan; operasi perintis menjalankan sistem baharu di tapak perintis sementara seluruh organisasi terus menggunakan sistem lama, kemudian menggunakan potong terus untuk pelaksanaan menyeluruh; operasi berperingkat memberikan sebahagian sistem kepada semua pengguna, mengehadkan risiko kepada modul itu sahaja, tetapi mustahil jika sistem tidak boleh dipisahkan kepada modul logik."
        },
        {
          zh: "实施后评估要检查开发工作与最终系统的方方面面，可以使用与分析阶段相同的事实收集技术；最终报告要包含全部系统文档的最终版本、已识别的未来改进项、开发成本与进度的回顾、实际与原始估算的对比以及实施后评估结果，它标志着开发工作的结束与新系统运行生命的开始。",
          en: "A post-implementation evaluation examines all aspects of the development effort and the end product, and it can use the same fact-finding techniques applied during systems analysis; the final report to management includes the final versions of all system documentation, planned modifications and enhancements, a recap of all development costs and schedules, a comparison of actual costs and schedules with the original estimates and the post-implementation evaluation, and it marks the end of the development effort and the beginning of the system's operational life.",
          ms: "Penilaian selepas pelaksanaan meneliti semua aspek usaha pembangunan dan produk akhir, dan ia boleh menggunakan teknik pencarian fakta yang sama seperti dalam fasa analisis sistem; laporan akhir kepada pengurusan mengandungi versi akhir semua dokumentasi sistem, pengubahsuaian dan penambahbaikan yang dirancang, ringkasan kos serta jadual pembangunan, perbandingan kos dan jadual sebenar dengan anggaran asal, serta penilaian selepas pelaksanaan, dan ia menandakan berakhirnya usaha pembangunan serta permulaan hayat operasi sistem."
        }
      ],
      terms: [
        { en: "Systems Implementation", zh: "系统实施", ms: "Pelaksanaan Sistem",
          def: { zh: "SDLC 的第四个阶段，交付物是一个完全可运行的信息系统。", en: "The fourth SDLC phase, whose deliverable is a completely functioning information system.", ms: "Fasa keempat SDLC yang hasil serahannya ialah sistem maklumat yang berfungsi sepenuhnya." } },
        { en: "Software Quality Assurance", zh: "软件质量保证", ms: "Jaminan Kualiti Perisian",
          def: { zh: "通过软件工程、CMM/CMMI 流程成熟度与 ISO 标准来保证软件质量的整套做法。", en: "The practices that assure software quality through software engineering, CMM/CMMI process maturity and ISO standards.", ms: "Amalan yang menjamin kualiti perisian melalui kejuruteraan perisian, kematangan proses CMM/CMMI dan piawaian ISO." } },
        { en: "Structure Chart", zh: "结构图", ms: "Carta Struktur",
          def: { zh: "用层次结构表示模块调用关系、数据耦合、控制耦合、条件与循环的图。", en: "A hierarchical diagram showing module calls, data couples, control couples, conditions and loops.", ms: "Gambar rajah hierarki yang menunjukkan panggilan modul, gandingan data, gandingan kawalan, keadaan dan gelung." } },
        { en: "Cohesion", zh: "内聚", ms: "Kohesi",
          def: { zh: "一个模块内部各部分功能相关的紧密程度，高内聚的模块只做一件事。", en: "How closely the parts of one module belong together; a highly cohesive module performs a single function.", ms: "Sejauh mana bahagian dalam sesuatu modul saling berkaitan; modul berkohesi tinggi melakukan satu fungsi sahaja." } },
        { en: "Coupling", zh: "耦合", ms: "Gandingan",
          def: { zh: "模块之间的依赖程度，设计追求松散耦合以降低修改的连锁影响。", en: "The degree of dependency between modules; designs aim for loose coupling to reduce the ripple effect of changes.", ms: "Tahap kebergantungan antara modul; reka bentuk menyasarkan gandingan longgar untuk mengurangkan kesan rantaian perubahan." } },
        { en: "Unit Testing", zh: "单元测试", ms: "Pengujian Unit",
          def: { zh: "对单个程序模块进行的测试，通常由程序员在编码过程中完成。", en: "Testing of an individual program module, usually performed by the programmer during coding.", ms: "Pengujian sesuatu modul program secara individu, biasanya dilakukan oleh pengaturcara semasa pengekodan." } },
        { en: "Integration Testing", zh: "集成测试", ms: "Pengujian Integrasi",
          def: { zh: "检查多个模块组合在一起能否正确协同工作的测试。", en: "Testing that checks whether several modules work correctly together.", ms: "Pengujian yang menyemak sama ada beberapa modul berfungsi dengan betul apabila digabungkan." } },
        { en: "System Testing", zh: "系统测试", ms: "Pengujian Sistem",
          def: { zh: "对完整系统进行测试，确认它满足全部需求并可交付管理层审批。", en: "Testing the complete system to confirm it meets all requirements before management approval.", ms: "Pengujian sistem lengkap untuk mengesahkan ia memenuhi semua keperluan sebelum kelulusan pengurusan." } },
        { en: "User Documentation", zh: "用户文档", ms: "Dokumentasi Pengguna",
          def: { zh: "帮助用户学会使用系统的说明材料，通常由系统分析师负责准备。", en: "Material that helps users learn the system; systems analysts are usually responsible for preparing it.", ms: "Bahan yang membantu pengguna mempelajari sistem; penganalisis sistem biasanya bertanggungjawab menyediakannya." } },
        { en: "Data Conversion", zh: "数据转换", ms: "Penukaran Data",
          def: { zh: "把旧系统的数据导出、转换并载入新系统的过程，必要时需人工补充新数据项。", en: "The process of exporting, converting and loading old system data into the new system, with manual entry of new data items if needed.", ms: "Proses mengeksport, menukar dan memuatkan data sistem lama ke dalam sistem baharu, dengan kemasukan manual bagi item data baharu jika perlu." } },
        { en: "Direct Cutover", zh: "直接切换", ms: "Potong Terus",
          def: { zh: "在某一时点完全停用旧系统、启用新系统的切换方式，风险最大但成本最低。", en: "A changeover that stops the old system and starts the new one at a single point in time; it carries the most risk.", ms: "Pertukaran yang menghentikan sistem lama dan memulakan sistem baharu pada satu titik masa; ia membawa risiko paling tinggi." } },
        { en: "Parallel Operation", zh: "并行运行", ms: "Operasi Selari",
          def: { zh: "新旧系统同时运行一段时间以便比对结果的切换方式，最安全但负担与成本最高。", en: "Running the old and new systems at the same time so results can be compared; it is the safest but the most burdensome option.", ms: "Menjalankan sistem lama dan baharu serentak supaya hasil boleh dibandingkan; ia paling selamat tetapi paling membebankan." } },
        { en: "Pilot Operation", zh: "试点运行", ms: "Operasi Perintis",
          def: { zh: "先在一个试点站点使用新系统、其他部门继续用旧系统，成功后再全面推广的切换方式。", en: "A changeover in which one pilot site uses the new system while the rest of the organization keeps the old one, followed by a full rollout.", ms: "Pertukaran yang mana satu tapak perintis menggunakan sistem baharu sementara bahagian lain terus menggunakan sistem lama, diikuti pelaksanaan menyeluruh." } },
        { en: "Phased Operation", zh: "分阶段切换", ms: "Operasi Berperingkat",
          def: { zh: "把系统的一部分先交付给所有用户使用的切换方式，风险只限于该模块。", en: "A changeover that gives part of the system to all users, limiting the risk to that module.", ms: "Pertukaran yang memberikan sebahagian sistem kepada semua pengguna, mengehadkan risiko kepada modul itu sahaja." } },
        { en: "Post-Implementation Evaluation", zh: "实施后评估", ms: "Penilaian Selepas Pelaksanaan",
          def: { zh: "在系统上线后对开发过程与最终系统进行回顾评估，可沿用事实收集技术。", en: "A review of the development effort and the finished system after go-live, using the same fact-finding techniques.", ms: "Semakan terhadap usaha pembangunan dan sistem yang siap selepas pelancaran, menggunakan teknik pencarian fakta yang sama." } }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: { zh: "三个层次的测试", en: "The Three Levels of Testing", ms: "Tiga Peringkat Pengujian" },
          caption: { zh: "从单个模块到模块组合再到整个系统，测试范围逐级扩大，通过后才提交管理层审批。", en: "Testing widens from a single module, to groups of modules, to the whole system, and only then goes to management for approval.", ms: "Pengujian meluas daripada satu modul, kepada kumpulan modul, kemudian keseluruhan sistem, dan hanya selepas itu dibentangkan kepada pengurusan." },
          steps: [
            { label: { zh: "单元测试 Unit Testing", en: "Unit Testing", ms: "Pengujian Unit" }, note: { zh: "检查单个模块的逻辑是否正确", en: "Checks the logic of an individual module", ms: "Menyemak logik sesuatu modul" } },
            { label: { zh: "集成测试 Integration Testing", en: "Integration Testing", ms: "Pengujian Integrasi" }, note: { zh: "检查模块之间能否正确传递数据、协同工作", en: "Checks that modules pass data and work together correctly", ms: "Menyemak modul memindahkan data dan bekerjasama dengan betul" } },
            { label: { zh: "系统测试 System Testing", en: "System Testing", ms: "Pengujian Sistem" }, note: { zh: "检查整个系统是否满足全部需求，然后向管理层汇报", en: "Checks the whole system against all requirements, then reports to management", ms: "Menyemak keseluruhan sistem terhadap semua keperluan, kemudian melapor kepada pengurusan" } }
          ]
        },
        {
          type: "matrix",
          title: { zh: "四种系统切换方式对比", en: "Comparing the Four System Changeover Methods", ms: "Perbandingan Empat Kaedah Pertukaran Sistem" },
          cols: [
            { zh: "做法", en: "How it works", ms: "Cara pelaksanaan" },
            { zh: "风险与适用场合", en: "Risk and when to use it", ms: "Risiko dan kesesuaian" }
          ],
          rows: [
            { head: { zh: "直接切换 Direct cutover", en: "Direct cutover", ms: "Potong terus" },
              cells: [
                { zh: "在某一时点停用旧系统，直接启用新系统", en: "The old system stops at one point and the new one starts immediately", ms: "Sistem lama dihentikan pada satu titik dan sistem baharu terus dimulakan" },
                { zh: "风险最大；常用于商业软件包，以及按季度、日历年或财年开始的周期性系统", en: "Highest risk; often used for commercial packages and cyclical systems converted at the start of a quarter, calendar or fiscal year", ms: "Risiko paling tinggi; sering digunakan untuk pakej komersial dan sistem berkitar yang ditukar pada awal suku tahun, tahun kalendar atau tahun fiskal" }
              ] },
            { head: { zh: "并行运行 Parallel operation", en: "Parallel operation", ms: "Operasi selari" },
              cells: [
                { zh: "新旧系统同时运行一段时间，比对两者输出", en: "Old and new systems run together for a period so outputs can be compared", ms: "Sistem lama dan baharu berjalan serentak untuk satu tempoh supaya output boleh dibandingkan" },
                { zh: "最容易验证新系统是否正确，但加重运行环境负担、造成处理延迟；技术不兼容或功能不同时不适用", en: "Easiest way to verify the new system, but burdens the operating environment and causes delays; impractical if the systems are technically incompatible or perform different functions", ms: "Cara paling mudah untuk mengesahkan sistem baharu, tetapi membebankan persekitaran operasi dan menyebabkan kelewatan; tidak praktikal jika sistem tidak serasi dari segi teknikal atau berfungsi berbeza" }
              ] },
            { head: { zh: "试点运行 Pilot operation", en: "Pilot operation", ms: "Operasi perintis" },
              cells: [
                { zh: "先在一个试点站点使用新系统，其余部门继续用旧系统，成功后再用直接切换推广", en: "One pilot site runs the new system while the rest keeps the old one; after success, direct cutover rolls it out", ms: "Satu tapak perintis menggunakan sistem baharu sementara yang lain kekal dengan sistem lama; selepas berjaya, potong terus digunakan untuk pelaksanaan menyeluruh" }
              ,
                { zh: "并行运行与直接切换的组合，风险可控", en: "A combination of parallel operation and direct cutover, with contained risk", ms: "Gabungan operasi selari dan potong terus, dengan risiko yang terkawal" }
              ] },
            { head: { zh: "分阶段切换 Phased operation", en: "Phased operation", ms: "Operasi berperingkat" },
              cells: [
                { zh: "把系统的一部分先给所有用户使用", en: "Part of the system is given to all users first", ms: "Sebahagian sistem diberikan kepada semua pengguna terlebih dahulu" },
                { zh: "错误风险只限于已实施的模块，比全面并行便宜；但系统无法拆成逻辑模块时不可行", en: "The risk of errors is limited to the implemented module and it is cheaper than full parallel operation, but it is impossible if the system cannot be separated into logical modules", ms: "Risiko kesilapan terhad kepada modul yang dilaksanakan dan lebih murah daripada operasi selari penuh, tetapi mustahil jika sistem tidak boleh dipisahkan kepada modul logik" }
              ] }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：四种系统切换方式的名称、风险高低与适用场合。题目常给一个情景（如银行核心系统、商业软件包、无法拆分的大型系统）让你选择最合适的切换方式。",
          en: "A certainty: the names, risk levels and suitable situations of the four changeover methods. Questions often give a scenario (a bank core system, a commercial package, a system that cannot be split) and ask you to choose the best method.",
          ms: "Hampir pasti keluar: nama, tahap risiko dan kesesuaian empat kaedah pertukaran. Soalan sering memberikan senario (sistem teras bank, pakej komersial, sistem besar yang tidak boleh dipecahkan) dan meminta anda memilih kaedah terbaik."
        },
        {
          zh: "易混：内聚（cohesion）与耦合（coupling）。内聚讲模块内部是否只做一件事，耦合讲模块之间依赖多不多；好的设计是高内聚、低耦合。",
          en: "Easily confused: cohesion versus coupling. Cohesion is about how well the parts inside a module belong together, coupling is about how dependent modules are on each other; good design means high cohesion and low coupling.",
          ms: "Mudah keliru: kohesi berbanding gandingan. Kohesi berkaitan kesepadanan bahagian dalam sesuatu modul, manakala gandingan berkaitan kebergantungan antara modul; reka bentuk yang baik bermaksud kohesi tinggi dan gandingan rendah."
        },
        {
          zh: "简答题：单元测试、集成测试、系统测试的先后顺序与各自目的，以及四类文档（程序、系统、运行、用户）分别由谁编写、给谁看。",
          en: "Short-answer question: the order and purpose of unit, integration and system testing, and who writes and who reads the four kinds of documentation (program, system, operations, user).",
          ms: "Soalan jawapan pendek: urutan dan tujuan pengujian unit, integrasi dan sistem, serta siapa menulis dan siapa membaca empat jenis dokumentasi (program, sistem, operasi, pengguna)."
        },
        {
          zh: "实施后任务常考：实施后评估用哪些事实收集技术，最终报告必须包含哪五项内容，以及报告为何标志着开发结束、运行开始。",
          en: "Post-implementation tasks are often examined: which fact-finding techniques a post-implementation evaluation uses, the five items the final report must contain, and why the report marks the end of development and the start of operation.",
          ms: "Tugas selepas pelaksanaan kerap diuji: teknik pencarian fakta yang digunakan dalam penilaian selepas pelaksanaan, lima item yang mesti ada dalam laporan akhir, dan sebab laporan itu menandakan berakhirnya pembangunan serta permulaan operasi."
        }
      ],
      mnemonic: {
        zh: "切换四法：直、并、试、分（直接、并行、试点、分阶段）；测试三级：单元、集成、系统。",
        en: "Four changeover methods: Direct, Parallel, Pilot, Phased; three test levels: Unit, Integration, System.",
        ms: "Empat kaedah pertukaran: Terus, Selari, Perintis, Berperingkat; tiga peringkat pengujian: Unit, Integrasi, Sistem."
      }
    },
    {
      id: "sadm-12",
      num: 12,
      title: { zh: "系统安全与运维支持", en: "Securing and Supporting the System", ms: "Mengamankan dan Menyokong Sistem" },
      file: "sadm/CHP12_SADM.pptx.pdf",
      pages: 47,
      summary: {
        zh: "系统运行、支持与安全是 SDLC 的最后一个阶段，交付物是一个得到妥善维护、支持与保护的可运行系统。本章先讲用户支持（用户培训、帮助台、外包呼叫中心）与四类维护：纠正性、适应性、完善性和预防性维护，以及维护管理中的请求流程、优先级、配置管理、版本控制与基线。随后介绍系统性能管理（故障管理、性能与负载测量、容量规划）、安全总览（CIA 三角、风险管理、攻击者），并逐层剖析安全的六个层面：物理、网络、应用、文件、用户与程序安全。最后讨论备份与灾难恢复、业务连续性、系统过时，以及 IT 从业者的职业规划与认证。",
        en: "Systems operation, support and security is the final SDLC phase, and its deliverable is an operational system that is properly maintained, supported and secured. The chapter first covers user support (user training, help desks, outsourced call centres) and the four types of maintenance: corrective, adaptive, perfective and preventive, together with maintenance management through requests, priorities, configuration management, version control and baselines. It then explains system performance management (fault management, performance and workload measurement, capacity planning) and security concepts (the CIA triangle, risk management and attacker profiles), before working through the six levels of security: physical, network, application, file, user and procedural. It closes with backup and disaster recovery, business continuity, system obsolescence, and career planning and certification for IT professionals.",
        ms: "Operasi, sokongan dan keselamatan sistem ialah fasa terakhir SDLC, dan hasil serahannya ialah sistem yang beroperasi serta diselenggara, disokong dan dilindungi dengan baik. Bab ini bermula dengan sokongan pengguna (latihan pengguna, meja bantuan, pusat panggilan penyumberan luar) dan empat jenis penyelenggaraan: pemulihan, penyesuaian, penyempurnaan dan pencegahan, bersama pengurusan penyelenggaraan melalui permintaan, keutamaan, pengurusan konfigurasi, kawalan versi dan garis dasar. Seterusnya, ia menerangkan pengurusan prestasi sistem (pengurusan kerosakan, pengukuran prestasi dan beban kerja, perancangan kapasiti) serta konsep keselamatan (segitiga CIA, pengurusan risiko dan profil penyerang), sebelum meneliti enam peringkat keselamatan: fizikal, rangkaian, aplikasi, fail, pengguna dan prosedur. Bab ini diakhiri dengan sandaran dan pemulihan bencana, kesinambungan perniagaan, keusangan sistem, serta perancangan kerjaya dan pensijilan untuk profesional IT."
      },
      points: [
        {
          zh: "用户支持包括用户培训与帮助台：新员工必须接受信息系统培训，系统变更时的培训与初次培训类似，目标是让用户看到系统如何帮助他们完成工作；帮助台是所有 IT 维护活动的中央联络点，能提高生产力与信息资源利用率。",
          en: "User support includes user training and help desks: new employees must be trained on the company's information systems, training users about system changes is similar to initial training, and the objective is to show users how the system helps them perform their jobs; a help desk is the central contact point for all IT maintenance activities and can enhance productivity and the utilization of information resources.",
          ms: "Sokongan pengguna merangkumi latihan pengguna dan meja bantuan: pekerja baharu mesti dilatih tentang sistem maklumat syarikat, latihan tentang perubahan sistem menyerupai latihan permulaan, dan objektifnya ialah menunjukkan kepada pengguna bagaimana sistem membantu mereka menjalankan tugas; meja bantuan ialah titik hubungan utama bagi semua aktiviti penyelenggaraan IT dan boleh meningkatkan produktiviti serta penggunaan sumber maklumat."
        },
        {
          zh: "纠正性维护用于诊断并修正运行中系统的错误，最坏情况是系统故障；系统恢复后维护团队要查明原因、分析问题并设计永久解决方案。",
          en: "Corrective maintenance diagnoses and corrects errors in an operational system, with a system failure as the worst case; once the system is operational again the maintenance team determines the cause, analyzes the problem and designs a permanent solution.",
          ms: "Penyelenggaraan pemulihan mendiagnosis dan membetulkan ralat dalam sistem yang beroperasi, dengan kegagalan sistem sebagai kes terburuk; selepas sistem beroperasi semula, pasukan penyelenggaraan menentukan puncanya, menganalisis masalah dan mereka bentuk penyelesaian kekal."
        },
        {
          zh: "适应性维护为运行中的系统增加增强功能、让系统更易使用；它可能比开发新系统更困难，因为增强必须在现有系统的约束之内实现。",
          en: "Adaptive maintenance adds enhancements to an operational system and makes it easier to use; it can be more difficult than new systems development because the enhancements must work within the constraints of the existing system.",
          ms: "Penyelenggaraan penyesuaian menambah penambahbaikan pada sistem yang beroperasi dan menjadikannya lebih mudah digunakan; ia boleh menjadi lebih sukar daripada pembangunan sistem baharu kerana penambahbaikan mesti berfungsi dalam kekangan sistem sedia ada."
        },
        {
          zh: "完善性维护通过改变系统让它更高效、更可靠、更易维护，在系统生命周期的中期做最划算；经常需要大量修改的程序适合重构，而程序改得越多就越容易变得低效、难维护。",
          en: "Perfective maintenance changes an operational system to make it more efficient, reliable and maintainable, and it is most cost-effective in the middle of the system's operational life; programs needing many maintenance changes are good candidates for reengineering, and the more a program changes the more likely it is to become inefficient and hard to maintain.",
          ms: "Penyelenggaraan penyempurnaan mengubah sistem yang beroperasi supaya lebih cekap, boleh dipercayai dan mudah diselenggara, dan ia paling berbaloi pada pertengahan hayat operasi sistem; program yang memerlukan banyak perubahan penyelenggaraan sesuai untuk kejuruteraan semula, dan semakin banyak program diubah, semakin besar kemungkinannya menjadi tidak cekap dan sukar diselenggara."
        },
        {
          zh: "预防性维护要求分析可能出问题的环节，通常由 IT 部门主动发起；它能提高用户满意度、减少停机时间并降低总拥有成本，但常常没有得到应有的高优先级。",
          en: "Preventive maintenance requires analysis of areas where trouble is likely to occur and is normally initiated by the IT department; it often results in increased user satisfaction, decreased downtime and reduced TCO, yet it sometimes does not receive the high priority it deserves.",
          ms: "Penyelenggaraan pencegahan memerlukan analisis kawasan yang berkemungkinan bermasalah dan biasanya dimulakan oleh jabatan IT; ia sering meningkatkan kepuasan pengguna, mengurangkan masa henti dan menurunkan TCO, namun kadangkala ia tidak diberi keutamaan yang sewajarnya."
        },
        {
          zh: "维护管理包括：由系统管理员、系统分析师和程序员组成维护团队；所有维护工作都必须有正式的维护请求（含初步判定、系统评审委员会审批、任务完成与通知用户）；在优先级上要平衡新系统开发与必要的维护工作，并做好配置管理、维护版本发布（如服务包）与版本控制。",
          en: "Maintenance management includes a maintenance team of system administrators, systems analysts and programmers; a formal maintenance request process for all work (initial determination, systems review committee, task completion and user notification); balancing new development against necessary maintenance when setting priorities; and configuration management, maintenance releases such as service packs, and version control.",
          ms: "Pengurusan penyelenggaraan merangkumi pasukan penyelenggaraan yang terdiri daripada pentadbir sistem, penganalisis sistem dan pengaturcara; proses permintaan penyelenggaraan yang formal untuk semua kerja (penentuan awal, jawatankuasa semakan sistem, penyiapan tugas dan pemberitahuan kepada pengguna); mengimbangi pembangunan baharu dengan penyelenggaraan yang perlu semasa menetapkan keutamaan; serta pengurusan konfigurasi, pelepasan penyelenggaraan seperti pek perkhidmatan, dan kawalan versi."
        },
        {
          zh: "安全的核心概念是 CIA 三角：机密性、完整性与可用性；企业还要制定安全政策。绝对安全是不现实的目标，因此要做风险管理：识别风险（exploit）、评估风险并控制风险，控制手段有规避、缓解、转移和接受四种。",
          en: "The core security concepts form the CIA triangle - confidentiality, integrity and availability - and every organization needs a security policy; absolute security is not a realistic goal, so risk management is required: identify the risk and its exploit, assess it and control it through avoidance, mitigation, transference or acceptance.",
          ms: "Konsep teras keselamatan membentuk segitiga CIA - kerahsiaan, integriti dan ketersediaan - dan setiap organisasi memerlukan dasar keselamatan; keselamatan mutlak bukan matlamat yang realistik, jadi pengurusan risiko diperlukan: kenal pasti risiko dan eksploitnya, nilai dan kawalnya melalui pengelakan, pengurangan, pemindahan atau penerimaan."
        },
        {
          zh: "评估系统安全必须考虑六个相互独立又彼此关联的层面：物理安全（运行中心、服务器与桌面电脑、笔记本电脑，物理接触就是进入系统的入口）、网络安全、应用安全、文件安全、用户安全和程序安全。",
          en: "Assessing system security requires considering six separate but interrelated levels: physical security (operations centre, servers and desktop computers, notebooks, since physical access to a computer is an entry point into the system), network security, application security, file security, user security and procedural security.",
          ms: "Menilai keselamatan sistem memerlukan pertimbangan enam peringkat yang berasingan tetapi saling berkait: keselamatan fizikal (pusat operasi, pelayan dan komputer meja, komputer riba, kerana akses fizikal kepada komputer ialah pintu masuk ke sistem), keselamatan rangkaian, keselamatan aplikasi, keselamatan fail, keselamatan pengguna dan keselamatan prosedur."
        },
        {
          zh: "备份与灾难恢复要有备份政策（备份介质、轮换时间表、异地存放、备份类型与保留期限）以及业务连续性计划：包括测试计划、热站点（hot site）与数据复制，确保关键业务在灾难后仍能继续。",
          en: "Backup and disaster recovery require a backup policy (backup media, a rotation schedule, offsiting, backup types and retention periods) and business continuity planning: a test plan, a business continuity plan (BCP), a hot site and data replication, so that critical business operations can continue after a disaster.",
          ms: "Sandaran dan pemulihan bencana memerlukan dasar sandaran (media sandaran, jadual pusingan, penyimpanan di luar tapak, jenis sandaran dan tempoh penyimpanan) serta perancangan kesinambungan perniagaan: pelan ujian, pelan kesinambungan perniagaan (BCP), tapak panas dan replikasi data, supaya operasi perniagaan kritikal dapat diteruskan selepas bencana."
        },
        {
          zh: "任何系统最终都会过时：维护成本开始上升、用户要求更多功能、新的系统请求被提交，于是 SDLC 又重新开始；IT 从业者应像管理 IT 项目一样制定职业战略规划，设定长期目标与中间里程碑，并考取 Microsoft、Cisco、Novell、Oracle、Sun 等认证以及批判性思维（软技能）方面的证书。",
          en: "Every system eventually becomes obsolete: maintenance costs start to rise, users ask for more features, new systems requests are submitted and the SDLC begins again; IT professionals should plan their careers strategically like an IT project, setting long-term goals and intermediate milestones, and earn credentials and certifications from Microsoft, Cisco, Novell, Oracle and Sun as well as critical thinking (soft skills) certification.",
          ms: "Setiap sistem akhirnya menjadi usang: kos penyelenggaraan mula meningkat, pengguna meminta lebih banyak ciri, permintaan sistem baharu dikemukakan dan SDLC bermula semula; profesional IT harus merancang kerjaya secara strategik seperti mengurus projek IT, menetapkan matlamat jangka panjang dan pencapaian perantaraan, serta memperoleh kelayakan dan pensijilan daripada Microsoft, Cisco, Novell, Oracle dan Sun, termasuk pensijilan kemahiran berfikir secara kritis."
        }
      ],
      terms: [
        { en: "Corrective Maintenance", zh: "纠正性维护", ms: "Penyelenggaraan Pemulihan",
          def: { zh: "诊断并修正运行中系统的错误，故障排除后还要查明原因并设计永久解决方案。", en: "Diagnosing and correcting errors in an operational system, and after a failure determining the cause and designing a permanent solution.", ms: "Mendiagnosis dan membetulkan ralat dalam sistem yang beroperasi, dan selepas kegagalan, menentukan punca serta mereka bentuk penyelesaian kekal." } },
        { en: "Adaptive Maintenance", zh: "适应性维护", ms: "Penyelenggaraan Penyesuaian",
          def: { zh: "为运行中的系统增加增强功能、使其更易使用，但必须迁就现有系统的约束。", en: "Adding enhancements to an operational system to make it easier to use, while working within the constraints of the existing system.", ms: "Menambah penambahbaikan pada sistem yang beroperasi supaya lebih mudah digunakan, dalam kekangan sistem sedia ada." } },
        { en: "Perfective Maintenance", zh: "完善性维护", ms: "Penyelenggaraan Penyempurnaan",
          def: { zh: "让系统更高效、可靠、易维护，在系统生命周期中期最划算。", en: "Making the system more efficient, reliable and maintainable; most cost-effective in the middle of the system's life.", ms: "Menjadikan sistem lebih cekap, boleh dipercayai dan mudah diselenggara; paling berbaloi pada pertengahan hayat sistem." } },
        { en: "Preventive Maintenance", zh: "预防性维护", ms: "Penyelenggaraan Pencegahan",
          def: { zh: "分析可能出问题的环节并提前处理，能提高满意度、减少停机并降低 TCO。", en: "Analyzing areas where trouble is likely and acting in advance, which raises satisfaction, cuts downtime and lowers TCO.", ms: "Menganalisis kawasan yang berkemungkinan bermasalah dan bertindak lebih awal, yang meningkatkan kepuasan, mengurangkan masa henti dan menurunkan TCO." } },
        { en: "Help Desk", zh: "帮助台", ms: "Meja Bantuan",
          def: { zh: "所有 IT 维护活动的中央联络点，向用户提供支持并提高信息资源利用率。", en: "The central contact point for all IT maintenance activities, supporting users and improving the use of information resources.", ms: "Titik hubungan utama bagi semua aktiviti penyelenggaraan IT, menyokong pengguna dan meningkatkan penggunaan sumber maklumat." } },
        { en: "Version Control", zh: "版本控制", ms: "Kawalan Versi",
          def: { zh: "对系统的各个版本进行编号、归档与追踪，是系统文档必不可少的部分。", en: "Numbering, archiving and tracking versions of the system; it is an essential part of system documentation.", ms: "Menomborkan, mengarkib dan menjejak versi sistem; ia bahagian penting dokumentasi sistem." } },
        { en: "Capacity Planning", zh: "容量规划", ms: "Perancangan Kapasiti",
          def: { zh: "用 what-if 分析和未来业务预测来决定系统需要多少处理与存储能力，并制定应急计划。", en: "Using what-if analysis and forecasts of future business activity to decide how much processing and storage capacity is needed, with contingency plans.", ms: "Menggunakan analisis what-if dan ramalan aktiviti perniagaan untuk menentukan keperluan kapasiti pemprosesan dan storan, beserta pelan kontingensi." } },
        { en: "CIA Triangle", zh: "CIA 三角", ms: "Segitiga CIA",
          def: { zh: "信息安全的三个核心目标：机密性（Confidentiality）、完整性（Integrity）与可用性（Availability）。", en: "The three core goals of information security: confidentiality, integrity and availability.", ms: "Tiga matlamat teras keselamatan maklumat: kerahsiaan, integriti dan ketersediaan." } },
        { en: "Risk Control", zh: "风险控制", ms: "Kawalan Risiko",
          def: { zh: "对已识别的风险采取规避、缓解、转移或接受四种应对方式之一。", en: "Responding to an identified risk by avoidance, mitigation, transference or acceptance.", ms: "Bertindak balas terhadap risiko yang dikenal pasti melalui pengelakan, pengurangan, pemindahan atau penerimaan." } },
        { en: "Firewall", zh: "防火墙", ms: "Firewall",
          def: { zh: "控制网络端口与服务访问、过滤进出网络流量的安全设备或软件。", en: "A device or software that controls access to network ports and services and filters traffic entering and leaving the network.", ms: "Peranti atau perisian yang mengawal akses ke port dan perkhidmatan rangkaian serta menapis trafik yang masuk dan keluar." } },
        { en: "Encryption", zh: "加密", ms: "Penyulitan",
          def: { zh: "把网络流量或文件内容转换成密文，使未授权者无法读取。", en: "Converting network traffic or file contents into cipher text so unauthorized parties cannot read it.", ms: "Menukar trafik rangkaian atau kandungan fail menjadi teks sifer supaya pihak tanpa kebenaran tidak dapat membacanya." } },
        { en: "Social Engineering", zh: "社会工程", ms: "Kejuruteraan Sosial",
          def: { zh: "通过欺骗、冒充等手段诱使人员泄露口令或敏感信息的攻击方式。", en: "An attack that tricks people into revealing passwords or sensitive information through deception or impersonation.", ms: "Serangan yang memperdaya orang supaya mendedahkan kata laluan atau maklumat sensitif melalui penipuan atau penyamaran." } },
        { en: "Privilege Escalation", zh: "特权提升", ms: "Peningkatan Keistimewaan",
          def: { zh: "攻击者利用漏洞获得本不该拥有的更高访问权限的攻击。", en: "An attack in which the attacker exploits a weakness to gain higher access rights than they should have.", ms: "Serangan yang memanfaatkan kelemahan untuk memperoleh hak akses lebih tinggi daripada yang sepatutnya." } },
        { en: "Business Continuity Plan (BCP)", zh: "业务连续性计划", ms: "Pelan Kesinambungan Perniagaan (BCP)",
          def: { zh: "在灾难发生后维持关键业务运作的计划，通常包含测试计划、热站点与数据复制。", en: "A plan for keeping critical business operations running after a disaster, usually including a test plan, a hot site and data replication.", ms: "Pelan untuk mengekalkan operasi perniagaan kritikal selepas bencana, biasanya merangkumi pelan ujian, tapak panas dan replikasi data." } },
        { en: "Hot Site", zh: "热站点", ms: "Tapak Panas",
          def: { zh: "配备完整设备、可在灾难后立即接管处理的备用数据中心。", en: "A fully equipped backup data centre that can take over processing immediately after a disaster.", ms: "Pusat data sandaran yang lengkap peralatannya dan boleh mengambil alih pemprosesan sebaik sahaja selepas bencana." } }
      ],
      diagrams: [
        {
          type: "layers",
          title: { zh: "系统安全的六个层面", en: "The Six Levels of System Security", ms: "Enam Peringkat Keselamatan Sistem" },
          caption: { zh: "六个层面相互独立又彼此关联，攻击者往往从最薄弱的一层突破。", en: "The six levels are separate but interrelated, and attackers usually break through the weakest one.", ms: "Enam peringkat ini berasingan tetapi saling berkait, dan penyerang biasanya menembusi peringkat yang paling lemah." },
          layers: [
            { label: { zh: "1 物理安全 Physical Security", en: "1 Physical Security", ms: "1 Keselamatan Fizikal" }, note: { zh: "运行中心、服务器与桌面电脑、笔记本电脑；物理接触就是系统入口", en: "Operations centre, servers and desktops, notebooks; physical access is an entry point", ms: "Pusat operasi, pelayan dan komputer meja, komputer riba; akses fizikal ialah pintu masuk" } },
            { label: { zh: "2 网络安全 Network Security", en: "2 Network Security", ms: "2 Keselamatan Rangkaian" }, note: { zh: "加密网络流量、无线网络、专用网与 VPN、端口与服务、防火墙", en: "Encrypting traffic, wireless networks, private networks and VPNs, ports and services, firewalls", ms: "Penyulitan trafik, rangkaian tanpa wayar, rangkaian persendirian dan VPN, port dan perkhidmatan, firewall" } },
            { label: { zh: "3 应用安全 Application Security", en: "3 Application Security", ms: "3 Keselamatan Aplikasi" }, note: { zh: "加固、应用权限、输入校验、补丁与更新、软件日志", en: "Hardening, application permissions, input validation, patches and updates, software logs", ms: "Pengerasan, kebenaran aplikasi, pengesahan input, tampung dan kemas kini, log perisian" } },
            { label: { zh: "4 文件安全 File Security", en: "4 File Security", ms: "4 Keselamatan Fail" }, note: { zh: "读写执行文件与读写目录的权限，配合用户组管理", en: "Permissions to read, write and execute files and to read and write directories, managed with user groups", ms: "Kebenaran membaca, menulis dan melaksanakan fail serta membaca dan menulis direktori, diurus dengan kumpulan pengguna" } },
            { label: { zh: "5 用户安全 User Security", en: "5 User Security", ms: "5 Keselamatan Pengguna" }, note: { zh: "防止特权提升攻击，做好身份管理、口令保护，警惕社会工程与用户抵触", en: "Guarding against privilege escalation, managing identities and passwords, and watching for social engineering and user resistance", ms: "Melindungi daripada peningkatan keistimewaan, mengurus identiti dan kata laluan, serta berhati-hati dengan kejuruteraan sosial dan penentangan pengguna" } },
            { label: { zh: "6 程序安全 Procedural Security", en: "6 Procedural Security", ms: "6 Keselamatan Prosedur" }, note: { zh: "运行层面的安全，防止从垃圾中翻找机密文件，使用碎纸机销毁纸质资料", en: "Operational security: preventing dumpster diving and using paper shredders to destroy paper records", ms: "Keselamatan operasi: menghalang kegiatan mencari dalam tong sampah dan menggunakan penghancur kertas untuk memusnahkan rekod bercetak" } }
          ]
        },
        {
          type: "matrix",
          title: { zh: "四类系统维护对比", en: "Comparing the Four Types of Maintenance", ms: "Perbandingan Empat Jenis Penyelenggaraan" },
          cols: [
            { zh: "做什么", en: "What it does", ms: "Apa yang dilakukan" },
            { zh: "要点", en: "Key point", ms: "Perkara penting" }
          ],
          rows: [
            { head: { zh: "纠正性 Corrective", en: "Corrective", ms: "Pemulihan" },
              cells: [
                { zh: "诊断并修正运行中系统的错误", en: "Diagnoses and corrects errors in an operational system", ms: "Mendiagnosis dan membetulkan ralat dalam sistem yang beroperasi" },
                { zh: "最坏情况是系统故障；恢复后要查明原因、分析问题并设计永久解决方案", en: "The worst case is a system failure; afterwards determine the cause, analyze the problem and design a permanent solution", ms: "Kes terburuk ialah kegagalan sistem; selepas itu tentukan punca, analisis masalah dan reka penyelesaian kekal" }
              ] },
            { head: { zh: "适应性 Adaptive", en: "Adaptive", ms: "Penyesuaian" },
              cells: [
                { zh: "为系统增加增强功能，让系统更易使用", en: "Adds enhancements that make the system easier to use", ms: "Menambah penambahbaikan yang menjadikan sistem lebih mudah digunakan" },
                { zh: "可能比开发新系统更难，因为必须在现有系统的约束内实现", en: "Can be harder than new development because enhancements must fit the existing system's constraints", ms: "Boleh lebih sukar daripada pembangunan baharu kerana penambahbaikan mesti menepati kekangan sistem sedia ada" }
              ] },
            { head: { zh: "完善性 Perfective", en: "Perfective", ms: "Penyempurnaan" },
              cells: [
                { zh: "让系统更高效、更可靠、更易维护", en: "Makes the system more efficient, reliable and maintainable", ms: "Menjadikan sistem lebih cekap, boleh dipercayai dan mudah diselenggara" },
                { zh: "在系统生命周期中期最划算；改动太多的程序适合重构", en: "Most cost-effective in mid-life; heavily changed programs are candidates for reengineering", ms: "Paling berbaloi pada pertengahan hayat; program yang banyak diubah sesuai untuk kejuruteraan semula" }
              ] },
            { head: { zh: "预防性 Preventive", en: "Preventive", ms: "Pencegahan" },
              cells: [
                { zh: "分析可能出问题的环节并提前处理", en: "Analyzes areas where trouble is likely and acts in advance", ms: "Menganalisis kawasan yang berkemungkinan bermasalah dan bertindak lebih awal" },
                { zh: "通常由 IT 部门主动发起；提高满意度、减少停机、降低 TCO，却常被低估优先级", en: "Normally initiated by IT; raises satisfaction, cuts downtime and lowers TCO, yet is often under-prioritized", ms: "Biasanya dimulakan oleh IT; meningkatkan kepuasan, mengurangkan masa henti dan menurunkan TCO, namun sering kurang diberi keutamaan" }
              ] }
          ]
        }
      ],
      exam: [
        {
          zh: "必考：四类维护的定义与举例。要能判断“修正学生成绩系统的计算错误”属于纠正性，“为新政策增加报表”属于适应性。",
          en: "A certainty: the definitions and examples of the four maintenance types. Be able to tell that fixing a calculation error in a student records system is corrective while adding a report for a new policy is adaptive.",
          ms: "Hampir pasti keluar: takrif dan contoh empat jenis penyelenggaraan. Anda perlu dapat menilai bahawa membetulkan ralat pengiraan dalam sistem rekod pelajar ialah pemulihan manakala menambah laporan untuk dasar baharu ialah penyesuaian."
        },
        {
          zh: "必背：安全六个层面（物理、网络、应用、文件、用户、程序）各自的重点，考试常给一个安全漏洞情景让你判断属于哪一层。",
          en: "Must memorize: the focus of each of the six security levels (physical, network, application, file, user, procedural); exams often describe a vulnerability and ask which level it belongs to.",
          ms: "Wajib hafal: fokus setiap enam peringkat keselamatan (fizikal, rangkaian, aplikasi, fail, pengguna, prosedur); peperiksaan sering menerangkan sesuatu kelemahan dan meminta anda menentukan peringkatnya."
        },
        {
          zh: "名词解释常考：CIA 三角（机密性、完整性、可用性）、风险控制的四种手段（规避、缓解、转移、接受）、社会工程、特权提升攻击与热站点。",
          en: "Frequent term questions: the CIA triangle (confidentiality, integrity, availability), the four risk control options (avoidance, mitigation, transference, acceptance), social engineering, privilege escalation and the hot site.",
          ms: "Soalan istilah yang kerap: segitiga CIA (kerahsiaan, integriti, ketersediaan), empat pilihan kawalan risiko (pengelakan, pengurangan, pemindahan, penerimaan), kejuruteraan sosial, peningkatan keistimewaan dan tapak panas."
        },
        {
          zh: "易错点：把“预防性维护”与“完善性维护”搞混。预防性维护是分析隐患、防患于未然（由 IT 主动发起）；完善性维护是让现有系统更高效、可靠与易维护。",
          en: "Common trap: confusing preventive with perfective maintenance. Preventive maintenance analyzes likely trouble and acts in advance, and is initiated by IT; perfective maintenance makes the existing system more efficient, reliable and maintainable.",
          ms: "Perangkap biasa: mengelirukan penyelenggaraan pencegahan dengan penyempurnaan. Penyelenggaraan pencegahan menganalisis kemungkinan masalah dan bertindak lebih awal, dimulakan oleh IT; penyelenggaraan penyempurnaan menjadikan sistem sedia ada lebih cekap, boleh dipercayai dan mudah diselenggara."
        }
      ],
      mnemonic: {
        zh: "维护四类：纠、适、完、防；安全六层：物、网、应、文、用、程。",
        en: "Four maintenance types: Corrective, Adaptive, Perfective, Preventive; six security levels: Physical, Network, Application, File, User, Procedural.",
        ms: "Empat jenis penyelenggaraan: Pemulihan, Penyesuaian, Penyempurnaan, Pencegahan; enam peringkat keselamatan: Fizikal, Rangkaian, Aplikasi, Fail, Pengguna, Prosedur."
      }
    }

  ]
};
