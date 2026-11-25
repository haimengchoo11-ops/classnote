window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["oop"] = {
  "id": "oop",
  "chapters": {
    "oop-01": [
      {
        "id": "oop-01-q01",
        "type": "mcq",
        "q": {
          "zh": "讲义把 OOAD 分为两个阶段。下列哪一项是 OOD（面向对象设计）阶段的工作重点？",
          "en": "The lecture divides OOAD into two stages. Which of the following is the focus of the OOD (object-oriented design) stage?",
          "ms": "Kuliah membahagikan OOAD kepada dua peringkat. Antara berikut, yang manakah fokus peringkat OOD (reka bentuk berorientasikan objek)?"
        },
        "opts": [
          {
            "zh": "找出并描述问题域中的概念或对象，例如图书馆系统中的 Book、Librarian 和 Borrower",
            "en": "Finding and describing the concepts or objects in the problem domain, such as Book, Librarian and Borrower in a library system",
            "ms": "Mencari dan menerangkan konsep atau objek dalam domain masalah, seperti Book, Librarian dan Borrower dalam sistem perpustakaan"
          },
          {
            "zh": "定义软件对象以及它们如何协作满足需求，例如给 Book 加上 title 属性和 getChapter 方法",
            "en": "Defining software objects and how they collaborate to fulfil the requirements, such as giving Book a title attribute and a getChapter method",
            "ms": "Mentakrifkan objek perisian dan cara objek itu bekerjasama memenuhi keperluan, seperti memberikan Book atribut title dan kaedah getChapter"
          },
          {
            "zh": "对小型问题先用伪代码写出解决步骤，然后才开始编码",
            "en": "Writing pseudo code for small problems before starting to code",
            "ms": "Menulis pseudokod bagi masalah kecil sebelum mula menulis kod"
          },
          {
            "zh": "把每个类单独测试，以便更容易发现错误",
            "en": "Testing each class independently so that errors are easier to find",
            "ms": "Menguji setiap kelas secara berasingan supaya ralat lebih mudah ditemui"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "OOD 的重点是定义软件对象以及它们如何协作满足需求，讲义中的例子就是 Book 软件对象拥有 title 属性和 getChapter 方法。选项 0 描述的是 OOA（找出并描述问题域中的概念）；选项 2 只是讲义对小型问题提出的做法，不构成 OOD 阶段；选项 3 属于面向对象更易调试的优点，不是 OOD 的定义。",
          "en": "OOD focuses on defining software objects and how they collaborate to fulfil the requirements; the lecture's example is a Book software object with a title attribute and a getChapter method. Option 0 describes OOA (finding the concepts in the problem domain), option 2 is only the lecture's remark about small problems, and option 3 is the easier-debugging advantage of OOP rather than a definition of OOD.",
          "ms": "OOD menumpukan kepada mentakrifkan objek perisian dan cara objek itu bekerjasama memenuhi keperluan; contoh dalam kuliah ialah objek perisian Book yang mempunyai atribut title dan kaedah getChapter. Pilihan 0 menerangkan OOA (mencari konsep dalam domain masalah), pilihan 2 hanyalah catatan kuliah tentang masalah kecil, dan pilihan 3 ialah faedah penyahpepijatan yang lebih mudah, bukan takrif OOD."
        },
        "diff": 1,
        "topic": {
          "zh": "OOA 与 OOD 的区别",
          "en": "OOA versus OOD",
          "ms": "Perbezaan OOA dan OOD"
        }
      },
      {
        "id": "oop-01-q02",
        "type": "mcq",
        "q": {
          "zh": "讲义指出 Ali 和 Siti 是 Student 类中两个不同的对象。下列哪项说法正确？",
          "en": "The lecture notes that Ali and Siti are two different objects of the Student class. Which statement is correct?",
          "ms": "Kuliah menyatakan bahawa Ali dan Siti ialah dua objek berbeza daripada kelas Student. Pernyataan manakah yang betul?"
        },
        "opts": [
          {
            "zh": "它们其实是同一个对象，因为它们都来自 Student 类",
            "en": "They are actually the same object because both come from the Student class",
            "ms": "Kedua-duanya sebenarnya objek yang sama kerana kedua-duanya berasal daripada kelas Student"
          },
          {
            "zh": "它们拥有相同的数据项和方法，但各自的状态值可以不同",
            "en": "They have the same data elements and methods, but their state values can differ",
            "ms": "Kedua-duanya mempunyai elemen data dan kaedah yang sama, tetapi nilai keadaan masing-masing boleh berbeza"
          },
          {
            "zh": "它们的方法相同，但数据项必须完全不同",
            "en": "Their methods are the same, but their data elements must be completely different",
            "ms": "Kaedah kedua-duanya sama, tetapi elemen data mereka mesti sama sekali berbeza"
          },
          {
            "zh": "它们之间不能互相发送消息，只有类与类之间才能发送消息",
            "en": "They cannot send messages to each other; only classes can send messages",
            "ms": "Kedua-duanya tidak boleh menghantar mesej antara satu sama lain; hanya kelas boleh menghantar mesej"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "同一类的对象拥有相同的数据项和方法，但每个对象有自己的状态值，所以 Ali 和 Siti 虽然是两个 Student 对象，name 和 cpa 的取值可以不同。选项 0 混淆了类与对象；选项 2 说数据项必须完全不同，与“同一类的对象有相同数据项”相矛盾；选项 3 与讲义“对象发送和接收消息来调用操作”相反。",
          "en": "Objects of the same class have the same data elements and methods, but each object keeps its own state values, so Ali and Siti are two Student objects whose name and cpa can differ. Option 0 confuses a class with an object, option 2 contradicts the rule that objects of one class share the same data elements, and option 3 contradicts the lecture's statement that objects send and receive messages to invoke actions.",
          "ms": "Objek daripada kelas yang sama mempunyai elemen data dan kaedah yang sama, tetapi setiap objek menyimpan nilai keadaan sendiri, jadi Ali dan Siti ialah dua objek Student yang nilai name dan cpa boleh berbeza. Pilihan 0 mengelirukan kelas dengan objek, pilihan 2 bercanggah dengan peraturan bahawa objek satu kelas berkongsi elemen data yang sama, dan pilihan 3 bercanggah dengan kenyataan kuliah bahawa objek menghantar dan menerima mesej untuk menjalankan tindakan."
        },
        "diff": 1,
        "topic": {
          "zh": "类与对象、对象的状态",
          "en": "Class, object and state",
          "ms": "Kelas, objek dan keadaan"
        }
      },
      {
        "id": "oop-01-q03",
        "type": "mcq",
        "q": {
          "zh": "讲义把“被重用的对象已经过测试”作为哪一项优点的依据？",
          "en": "The lecture justifies which advantage with the fact that reused objects have already been tested?",
          "ms": "Kuliah menggunakan fakta bahawa objek yang diguna semula telah pun diuji untuk menyokong faedah yang manakah?"
        },
        "opts": [
          {
            "zh": "可重用性",
            "en": "Reusability",
            "ms": "Kebolehgunaan semula"
          },
          {
            "zh": "可靠性",
            "en": "Reliability",
            "ms": "Kebolehpercayaan"
          },
          {
            "zh": "可扩展性",
            "en": "Extensibility",
            "ms": "Kebolehlanjutan"
          },
          {
            "zh": "更容易调试",
            "en": "Easier debugging",
            "ms": "Penyahpepijatan lebih mudah"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义在“可靠性的理由”中写明：被重用的对象已经过测试。可重用性指一个类可以用于其他应用；可扩展性指可以从已有类派生出新类；更容易调试指类可以被单独测试，三者都不是“已经过测试”所支撑的优点。",
          "en": "The lecture gives the reason for reliability as reused objects having already been tested. Reusability means a class can be used in other applications, extensibility means a new class can be derived from an existing one, and easier debugging means classes can be tested independently, so none of them is the advantage justified by the tested-object argument.",
          "ms": "Kuliah menyatakan alasan bagi kebolehpercayaan ialah objek yang diguna semula telah pun diuji. Kebolehgunaan semula bermaksud kelas boleh digunakan dalam aplikasi lain, kebolehlanjutan bermaksud kelas baharu boleh diterbitkan daripada kelas sedia ada, dan penyahpepijatan lebih mudah bermaksud kelas boleh diuji secara berasingan, jadi tiada satu pun daripadanya faedah yang disokong oleh hujah objek yang telah diuji itu."
        },
        "diff": 2,
        "topic": {
          "zh": "面向对象的优点",
          "en": "Advantages of OOP",
          "ms": "Faedah OOP"
        }
      },
      {
        "id": "oop-01-q04",
        "type": "mcq",
        "q": {
          "zh": "关于抽象（abstraction）与封装（encapsulation），下列哪项符合讲义的说明？",
          "en": "Which statement about abstraction and encapsulation matches the lecture?",
          "ms": "Pernyataan manakah tentang pengabstrakan dan enkapsulasi yang menepati kuliah?"
        },
        "opts": [
          {
            "zh": "抽象把数据封闭在对象内部，封装强调“做什么”而不是“怎么做”",
            "en": "Abstraction encloses data inside an object, while encapsulation stresses what is done rather than how",
            "ms": "Pengabstrakan menyimpan data di dalam objek, manakala enkapsulasi menekankan apa yang dilakukan dan bukan bagaimana"
          },
          {
            "zh": "抽象强调简化的外部视图，封装把数据封闭在对象内部并提供数据安全",
            "en": "Abstraction stresses a simplified outside view, while encapsulation encloses data inside an object and provides data security",
            "ms": "Pengabstrakan menekankan pandangan luar yang dipermudahkan, manakala enkapsulasi menyimpan data di dalam objek dan memberikan keselamatan data"
          },
          {
            "zh": "两者都只是隐藏实现细节，因此可以互换使用",
            "en": "Both merely hide implementation details, so the two terms can be used interchangeably",
            "ms": "Kedua-duanya hanya menyembunyikan butiran pelaksanaan, jadi kedua-dua istilah boleh digunakan secara bertukar ganti"
          },
          {
            "zh": "抽象要求把数据声明为 private，封装要求所有方法都声明为 public",
            "en": "Abstraction requires data to be declared private, while encapsulation requires every method to be public",
            "ms": "Pengabstrakan memerlukan data diisytiharkan private, manakala enkapsulasi memerlukan setiap kaedah diisytiharkan public"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义把抽象定义为“简化的外部视图，关注做什么而不是怎么做”，把封装定义为“把数据封闭在对象内部、外部不能直接访问，从而提供数据安全”，也称数据隐藏。选项 0 把两者对调；选项 2 忽略了只有封装才被称为数据隐藏；选项 3 编造了讲义没有的规则，抽象并不要求数据必须是 private，封装也不要求所有方法都是 public。",
          "en": "The lecture defines abstraction as a simplified outside view of behaviour (what versus how) and encapsulation as enclosing data inside an object so that it cannot be accessed directly, which provides data security and is also called data hiding. Option 0 swaps the two, option 2 ignores that only encapsulation is called data hiding, and option 3 invents rules the lecture never states: abstraction does not require private data, and encapsulation does not require every method to be public.",
          "ms": "Kuliah mentakrifkan pengabstrakan sebagai pandangan luar yang dipermudahkan tentang tingkah laku (apa berbanding bagaimana) dan enkapsulasi sebagai menyimpan data di dalam objek sehingga tidak boleh dicapai secara langsung, yang memberikan keselamatan data dan juga dipanggil penyembunyian data. Pilihan 0 menukar kedua-duanya, pilihan 2 mengabaikan bahawa hanya enkapsulasi dipanggil penyembunyian data, dan pilihan 3 mencipta peraturan yang tidak dinyatakan dalam kuliah: pengabstrakan tidak mewajibkan data private, dan enkapsulasi tidak mewajibkan setiap kaedah public."
        },
        "diff": 2,
        "topic": {
          "zh": "抽象与封装",
          "en": "Abstraction and encapsulation",
          "ms": "Pengabstrakan dan enkapsulasi"
        }
      },
      {
        "id": "oop-01-q05",
        "type": "mcq",
        "q": {
          "zh": "讲义用 Student 与 Person 说明继承。下列哪项正确描述继承的作用？",
          "en": "The lecture uses Student and Person to explain inheritance. Which statement correctly describes what inheritance does?",
          "ms": "Kuliah menggunakan Student dan Person untuk menerangkan pewarisan. Pernyataan manakah yang betul tentang fungsi pewarisan?"
        },
        "opts": [
          {
            "zh": "子类必须重新声明父类的每一个属性，不能直接使用",
            "en": "A subclass must redeclare every attribute of the parent class and cannot use them directly",
            "ms": "Subkelas mesti mengisytiharkan semula setiap atribut kelas induk dan tidak boleh menggunakannya secara langsung"
          },
          {
            "zh": "子类可以继承父类的属性，因此不必每次从零开始建立新类",
            "en": "A subclass inherits the attributes of the parent class, so a new class need not be built from scratch every time",
            "ms": "Subkelas mewarisi atribut kelas induk, jadi kelas baharu tidak perlu dibina dari awal setiap kali"
          },
          {
            "zh": "必须先创建父类的对象，子类才能被定义",
            "en": "An object of the parent class must be created before the subclass can be defined",
            "ms": "Objek kelas induk mesti dicipta sebelum subkelas boleh ditakrifkan"
          },
          {
            "zh": "继承只能在同一包内的类之间使用",
            "en": "Inheritance can only be used between classes in the same package",
            "ms": "Pewarisan hanya boleh digunakan antara kelas dalam pakej yang sama"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义说明继承让新类扩展已有类，子类继承父类的属性，从而不必每次从零开始创建类；Student 继承 Person 就是例子。选项 0 与继承的作用相反；选项 2 不需要，因为定义子类并不要求先有父类对象；选项 3 添加了讲义没有提到的包限制。",
          "en": "The lecture explains that inheritance lets a new class extend an existing class and inherit its attributes, so classes can be built as extensions without starting fresh each time; Student inheriting Person is the example. Option 0 says the opposite of inheritance, option 2 is unnecessary because defining a subclass does not require a parent object, and option 3 adds a package restriction that the lecture never mentions.",
          "ms": "Kuliah menerangkan bahawa pewarisan membolehkan kelas baharu mengembangkan kelas sedia ada dan mewarisi atributnya, jadi kelas boleh dibina sebagai lanjutan tanpa bermula dari awal setiap kali; Student mewarisi Person ialah contohnya. Pilihan 0 menyatakan sebaliknya, pilihan 2 tidak perlu kerana mentakrif subkelas tidak memerlukan objek induk, dan pilihan 3 menambah sekatan pakej yang tidak disebut dalam kuliah."
        },
        "diff": 1,
        "topic": {
          "zh": "继承的概念",
          "en": "Concept of inheritance",
          "ms": "Konsep pewarisan"
        }
      },
      {
        "id": "oop-01-q06",
        "type": "multi",
        "q": {
          "zh": "讲义指出面向对象程序设计有四项主要原则。下列哪些属于这四项原则？（多选）",
          "en": "The lecture states that object-oriented programming has four main principles. Which of the following belong to these four principles? (Select all that apply)",
          "ms": "Kuliah menyatakan bahawa pengaturcaraan berorientasikan objek mempunyai empat prinsip utama. Yang manakah antara berikut tergolong dalam empat prinsip itu? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "抽象",
            "en": "Abstraction",
            "ms": "Pengabstrakan"
          },
          {
            "zh": "封装",
            "en": "Encapsulation",
            "ms": "Enkapsulasi"
          },
          {
            "zh": "继承",
            "en": "Inheritance",
            "ms": "Pewarisan"
          },
          {
            "zh": "多态",
            "en": "Polymorphism",
            "ms": "Polimorfisme"
          },
          {
            "zh": "迭代",
            "en": "Iteration",
            "ms": "Lelaran"
          }
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explain": {
          "zh": "四项原则是抽象、封装、继承和多态，讲义第 23 页明确列出。迭代（重复执行，如 while 和 for 循环）属于后面 Java 基础章节的控制语句概念，不是面向对象的四项原则之一。",
          "en": "The four principles are abstraction, encapsulation, inheritance and polymorphism, as listed explicitly on slide 23. Iteration (repetition, such as while and for loops) is a control-statement idea from the later Java basics chapter, not one of the four OO principles.",
          "ms": "Empat prinsip itu ialah pengabstrakan, enkapsulasi, pewarisan dan polimorfisme, seperti yang disenaraikan dengan jelas pada slaid 23. Lelaran (pengulangan, seperti gelung while dan for) ialah idea pernyataan kawalan dalam bab asas Java yang kemudian, bukan salah satu daripada empat prinsip OO."
        },
        "diff": 1,
        "topic": {
          "zh": "面向对象四原则",
          "en": "Four OO principles",
          "ms": "Empat prinsip OO"
        }
      },
      {
        "id": "oop-01-q07",
        "type": "tf",
        "q": {
          "zh": "对于小型问题，OOAD 并不需要进行详尽完整的流程；在开始写代码之前写出伪代码就足够了。",
          "en": "For small problems OOAD does not require an exhaustive process; writing pseudo code before starting to code is sufficient.",
          "ms": "Bagi masalah kecil, OOAD tidak memerlukan proses yang lengkap dan menyeluruh; menulis pseudokod sebelum mula menulis kod sudah memadai."
        },
        "answer": true,
        "explain": {
          "zh": "讲义指出，小问题不需要详尽的流程，写代码前用伪代码说明思路就够了；只有当问题规模变大时，OOAD 的方法才真正介入。这个陈述与原文一致，并没有说大型系统也不需要 OOAD。",
          "en": "The lecture says small problems do not need an exhaustive process and pseudo code written before coding is sufficient, while the methods of OOAD become involved as the problem grows in size. The statement matches the original and does not claim that large systems can skip OOAD.",
          "ms": "Kuliah menyatakan masalah kecil tidak memerlukan proses yang menyeluruh dan pseudokod yang ditulis sebelum menulis kod sudah memadai, manakala kaedah OOAD mula digunakan apabila saiz masalah bertambah. Pernyataan ini menepati teks asal dan tidak mengatakan sistem besar boleh mengabaikan OOAD."
        },
        "diff": 1,
        "topic": {
          "zh": "OOAD 的适用范围",
          "en": "When OOAD is needed",
          "ms": "Bila OOAD diperlukan"
        }
      },
      {
        "id": "oop-01-q08",
        "type": "fill",
        "q": {
          "zh": "讲义以图书馆信息系统为例说明 OOA。除 Book 和 Librarian 外，讲义还列出哪个问题域概念？______",
          "en": "The lecture uses a library information system to illustrate OOA. Besides Book and Librarian, which problem-domain concept does it list? ______",
          "ms": "Kuliah menggunakan sistem maklumat perpustakaan untuk menerangkan OOA. Selain Book dan Librarian, konsep domain masalah manakah yang turut disenaraikan? ______"
        },
        "answer": [
          "Borrower",
          "Peminjam",
          "借阅者",
          "借款人",
          "borrower"
        ],
        "explain": {
          "zh": "讲义在 OOA 部分给出的图书馆概念是 Book、Librarian 和 Borrower，因为分析阶段要找出并描述问题域中的概念。题目已给出 Book 和 Librarian，所以缺少的是 Borrower（马来文 Peminjam）。",
          "en": "The OOA example lists Book, Librarian and Borrower, because the analysis stage finds and describes the concepts in the problem domain. Since Book and Librarian are already given, the missing concept is Borrower (Peminjam in Malay).",
          "ms": "Contoh OOA menyenaraikan Book, Librarian dan Borrower, kerana peringkat analisis mencari dan menerangkan konsep dalam domain masalah. Oleh sebab Book dan Librarian sudah diberikan, konsep yang tinggal ialah Borrower (Peminjam dalam bahasa Melayu)."
        },
        "diff": 1,
        "topic": {
          "zh": "OOA 中的问题域概念",
          "en": "Problem-domain concepts in OOA",
          "ms": "Konsep domain masalah dalam OOA"
        }
      }
    ],
    "oop-02": [
      {
        "id": "oop-02-q01",
        "type": "mcq",
        "q": {
          "zh": "UML 在哪一年被 OMG（Object Management Group）采纳为面向对象系统建模的标准？",
          "en": "In which year was UML adopted by the OMG (Object Management Group) as the standard for modelling object-oriented systems?",
          "ms": "Pada tahun manakah UML diterima oleh OMG (Object Management Group) sebagai piawaian pemodelan sistem berorientasikan objek?"
        },
        "opts": [
          {
            "zh": "1991 年",
            "en": "1991",
            "ms": "1991"
          },
          {
            "zh": "1995 年",
            "en": "1995",
            "ms": "1995"
          },
          {
            "zh": "1997 年",
            "en": "1997",
            "ms": "1997"
          },
          {
            "zh": "2004 年",
            "en": "2004",
            "ms": "2004"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义明确写出 UML 于 1997 年被 OMG 采纳为面向对象系统建模的标准。1991 年是 Java 前身 Oak 诞生的年份，1995 年是 Oak 改名为 Java 的年份，2004 年是 JDK 1.5 发布的年份，三者都是 Java 的里程碑而不是 UML 的采纳年份。",
          "en": "The lecture states that the UML was adopted in 1997 by the OMG as the standard for modelling object-oriented systems. 1991 is when Java's predecessor Oak appeared, 1995 is when Oak was renamed Java, and 2004 is when JDK 1.5 was released, so all three are Java milestones rather than the year UML was adopted.",
          "ms": "Kuliah menyatakan UML diterima pada tahun 1997 oleh OMG sebagai piawaian pemodelan sistem berorientasikan objek. Tahun 1991 ialah tahun kemunculan Oak, pendahulu Java, 1995 ialah tahun Oak ditukar nama kepada Java, dan 2004 ialah tahun JDK 1.5 dikeluarkan, jadi ketiga-tiganya peristiwa penting Java dan bukan tahun UML diterima."
        },
        "diff": 1,
        "topic": {
          "zh": "UML 的历史",
          "en": "History of UML",
          "ms": "Sejarah UML"
        }
      },
      {
        "id": "oop-02-q02",
        "type": "mcq",
        "q": {
          "zh": "下列哪项准确描述 UML 的定位？",
          "en": "Which statement accurately describes what UML is?",
          "ms": "Pernyataan manakah menerangkan kedudukan UML dengan tepat?"
        },
        "opts": [
          {
            "zh": "UML 是一种面向对象编程语言，可以直接编译成字节码",
            "en": "UML is an object-oriented programming language that can be compiled directly into bytecode",
            "ms": "UML ialah bahasa pengaturcaraan berorientasikan objek yang boleh dikompil terus menjadi kod bait"
          },
          {
            "zh": "UML 是一种可视化建模语言，但不是编程语言、CASE 工具或开发方法",
            "en": "UML is a visual modelling language, but it is not a programming language, a CASE tool or a development method",
            "ms": "UML ialah bahasa pemodelan visual, tetapi bukan bahasa pengaturcaraan, alat CASE atau kaedah pembangunan"
          },
          {
            "zh": "UML 是一种软件开发过程，与瀑布模型类似",
            "en": "UML is a software development process similar to the waterfall model",
            "ms": "UML ialah proses pembangunan perisian yang serupa dengan model air terjun"
          },
          {
            "zh": "UML 是一种 CASE 工具，可以自动生成 Java 代码",
            "en": "UML is a CASE tool that can generate Java code automatically",
            "ms": "UML ialah alat CASE yang boleh menjana kod Java secara automatik"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义指出 UML 是可视化的建模语言，有词汇和规则，并特别列出它不是什么：不是编程语言、不是 CASE 工具、也不是方法或软件开发过程。选项 0 和 3 重复了这三种误解，选项 2 把 UML 与瀑布模型这类过程混为一谈。",
          "en": "The lecture presents UML as a visual modelling language with vocabulary and rules and explicitly lists what it is not: not a programming language, not a CASE tool and not a method or software development process. Options 0 and 3 repeat those misunderstandings, and option 2 confuses UML with a process such as the waterfall model.",
          "ms": "Kuliah memperkenalkan UML sebagai bahasa pemodelan visual yang mempunyai kosa kata dan peraturan serta menyenaraikan dengan jelas apa yang bukan UML: bukan bahasa pengaturcaraan, bukan alat CASE dan bukan kaedah atau proses pembangunan perisian. Pilihan 0 dan 3 mengulangi salah faham itu, manakala pilihan 2 mengelirukan UML dengan proses seperti model air terjun."
        },
        "diff": 1,
        "topic": {
          "zh": "UML 是什么、不是什么",
          "en": "What UML is and is not",
          "ms": "Apa itu UML dan apa yang bukan"
        }
      },
      {
        "id": "oop-02-q03",
        "type": "mcq",
        "q": {
          "zh": "按讲义对 UML 模型的划分，下列哪一项属于动态模型（dynamic model）？",
          "en": "According to the lecture's division of UML models, which of the following belongs to the dynamic model?",
          "ms": "Menurut pembahagian model UML dalam kuliah, yang manakah tergolong dalam model dinamik?"
        },
        "opts": [
          {
            "zh": "类图",
            "en": "Class diagram",
            "ms": "Gambar rajah kelas"
          },
          {
            "zh": "用例图",
            "en": "Use case diagram",
            "ms": "Gambar rajah kes penggunaan"
          },
          {
            "zh": "顺序图",
            "en": "Sequence diagram",
            "ms": "Gambar rajah jujukan"
          },
          {
            "zh": "部署图",
            "en": "Deployment diagram",
            "ms": "Gambar rajah penempatan"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义把静态模型列为用例图、类图、包图、对象图、构件图和部署图，把动态模型列为顺序图、协作图、状态图和活动图。因此顺序图属于动态模型，而类图、用例图和部署图都是静态模型。",
          "en": "The lecture lists the static models as use case, class, package, object, component and deployment diagrams, and the dynamic models as sequence, collaboration, statechart and activity diagrams. A sequence diagram is therefore dynamic, while the class, use case and deployment diagrams are all static.",
          "ms": "Kuliah menyenaraikan model statik sebagai gambar rajah kes penggunaan, kelas, pakej, objek, komponen dan penempatan, manakala model dinamik sebagai gambar rajah jujukan, kerjasama, carta keadaan dan aktiviti. Oleh itu gambar rajah jujukan bersifat dinamik, manakala gambar rajah kelas, kes penggunaan dan penempatan semuanya statik."
        },
        "diff": 2,
        "topic": {
          "zh": "静态模型与动态模型",
          "en": "Static and dynamic models",
          "ms": "Model statik dan dinamik"
        }
      },
      {
        "id": "oop-02-q04",
        "type": "mcq",
        "q": {
          "zh": "在 UML 类图中，属性或操作前面的符号 # 表示哪种可见性？",
          "en": "In a UML class diagram, which visibility does the symbol # before an attribute or operation denote?",
          "ms": "Dalam gambar rajah kelas UML, simbol # di hadapan atribut atau operasi menandakan kebolehlihatan yang manakah?"
        },
        "opts": [
          {
            "zh": "public（所有人可访问）",
            "en": "public (accessible by everyone)",
            "ms": "public (boleh dicapai oleh semua)"
          },
          {
            "zh": "private（仅类内部可访问）",
            "en": "private (accessible only inside the class)",
            "ms": "private (hanya dalam kelas)"
          },
          {
            "zh": "protected（类及其子类可访问）",
            "en": "protected (accessible by the class and its subclasses)",
            "ms": "protected (kelas dan subkelasnya)"
          },
          {
            "zh": "package（仅同一包内可访问）",
            "en": "package (accessible only within the same package)",
            "ms": "package (hanya dalam pakej yang sama)"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义的符号表给出：+ 表示 public，- 表示 private，# 表示 protected（类及其子类），~ 表示 package（仅同一包）。因此 # 对应 protected，其余三个选项分别对应 +、- 和 ~。",
          "en": "The lecture's symbol table gives plus for public, minus for private, hash for protected (the class and its subclasses) and tilde for package (the same package only). The symbol # is therefore protected, and the other three options correspond to plus, minus and tilde.",
          "ms": "Jadual simbol dalam kuliah memberikan tambah bagi public, tolak bagi private, pagar bagi protected (kelas dan subkelasnya) dan tilde bagi package (pakej yang sama sahaja). Simbol # ialah protected, dan tiga pilihan lain masing-masing merujuk kepada tambah, tolak dan tilde."
        },
        "diff": 1,
        "topic": {
          "zh": "类图的可见性符号",
          "en": "Visibility symbols in class diagrams",
          "ms": "Simbol kebolehlihatan gambar rajah kelas"
        }
      },
      {
        "id": "oop-02-q05",
        "type": "mcq",
        "q": {
          "zh": "Department 与 Lecturer 之间是 has-a 关系，但讲师离开该系后仍然存在。按讲义的判断表，这属于哪种关系？",
          "en": "Department and Lecturer have a has-a relationship, but a lecturer still exists after leaving the department. According to the lecture's relationship table, which relationship is this?",
          "ms": "Department dan Lecturer mempunyai hubungan has-a, tetapi pensyarah masih wujud selepas meninggalkan jabatan itu. Menurut jadual hubungan dalam kuliah, hubungan apakah ini?"
        },
        "opts": [
          {
            "zh": "组合（composition）",
            "en": "Composition",
            "ms": "Komposisi"
          },
          {
            "zh": "聚合（aggregation）",
            "en": "Aggregation",
            "ms": "Pengagregatan"
          },
          {
            "zh": "泛化（generalization）",
            "en": "Generalization",
            "ms": "Pengitlakan"
          },
          {
            "zh": "依赖（dependency）",
            "en": "Dependency",
            "ms": "Kebergantungan"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义把“has-a 但部分可以独立存在”的例子写成 Department has Lecturers，对应聚合；组合则要求部分被独占、不能独立存在，例如 House has Rooms。泛化回答“是不是一种”，依赖指临时使用，例如 Student uses Printer。",
          "en": "The lecture's example of has-a where the part can exist separately is Department has Lecturers, which is aggregation. Composition requires the part to be exclusively owned and unable to exist separately, as in House has Rooms; generalization answers is it a type of, and dependency means temporary use, as in Student uses Printer.",
          "ms": "Contoh kuliah bagi has-a yang bahagiannya boleh wujud secara berasingan ialah Department has Lecturers, iaitu pengagregatan. Komposisi memerlukan bahagian itu dimiliki secara eksklusif dan tidak boleh wujud berasingan, seperti House has Rooms; pengitlakan menjawab adakah ia sejenis, dan kebergantungan bermaksud penggunaan sementara, seperti Student uses Printer."
        },
        "diff": 2,
        "topic": {
          "zh": "聚合与组合",
          "en": "Aggregation and composition",
          "ms": "Pengagregatan dan komposisi"
        }
      },
      {
        "id": "oop-02-q06",
        "type": "multi",
        "q": {
          "zh": "讲义指出 UML 是用于下列哪些目的的语言？（多选）",
          "en": "The lecture says UML is a language for which of the following purposes? (Select all that apply)",
          "ms": "Kuliah menyatakan UML ialah bahasa untuk tujuan yang manakah antara berikut? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "可视化（visualizing）",
            "en": "Visualizing",
            "ms": "Memvisualkan"
          },
          {
            "zh": "说明（specifying）",
            "en": "Specifying",
            "ms": "Menyatakan"
          },
          {
            "zh": "构造（constructing）",
            "en": "Constructing",
            "ms": "Membina"
          },
          {
            "zh": "文档化（documenting）",
            "en": "Documenting",
            "ms": "Mendokumenkan"
          },
          {
            "zh": "执行（executing）",
            "en": "Executing",
            "ms": "Melaksanakan"
          }
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explain": {
          "zh": "讲义把 UML 定义为用于可视化、说明、构造和文档化软件系统制品的语言；构造指把模型映射成 Java 或 C++ 等编程语言。执行不在其中，UML 模型本身不能直接运行，必须由编程语言实现后才能执行。",
          "en": "The lecture defines UML as a language for visualizing, specifying, constructing and documenting the artifacts of a software system; constructing means mapping the model directly into a programming language such as Java or C++. Executing is not one of the four purposes, because a UML model cannot run by itself and must be realized in a programming language.",
          "ms": "Kuliah mentakrifkan UML sebagai bahasa untuk memvisualkan, menyatakan, membina dan mendokumenkan artifak sistem perisian; membina bermaksud memetakan model terus ke dalam bahasa pengaturcaraan seperti Java atau C++. Melaksanakan bukan salah satu daripada empat tujuan itu, kerana model UML tidak boleh berjalan sendiri dan mesti dilaksanakan dalam bahasa pengaturcaraan."
        },
        "diff": 1,
        "topic": {
          "zh": "UML 的四个用途",
          "en": "Four purposes of UML",
          "ms": "Empat tujuan UML"
        }
      },
      {
        "id": "oop-02-q07",
        "type": "tf",
        "q": {
          "zh": "在类图中，类名写在中间的分隔栏，属性写在最上面的分隔栏。",
          "en": "In a class diagram the class name is written in the middle compartment and the attributes in the top compartment.",
          "ms": "Dalam gambar rajah kelas, nama kelas ditulis di petak tengah dan atribut di petak atas."
        },
        "answer": false,
        "explain": {
          "zh": "类图自上而下依次是：类名在最上面的分隔栏，属性在中间的分隔栏，操作（方法）在最下面的分隔栏。题干把前两个分隔栏对调了，所以是错误的。",
          "en": "The compartments of a class run from top to bottom as name in the top compartment, attributes in the middle compartment and operations (methods) in the bottom compartment. The statement swaps the first two compartments, so it is false.",
          "ms": "Petak sesuatu kelas tersusun dari atas ke bawah iaitu nama di petak atas, atribut di petak tengah dan operasi (kaedah) di petak bawah. Pernyataan ini menukar dua petak yang pertama, jadi ia palsu."
        },
        "diff": 1,
        "topic": {
          "zh": "类的三个分隔栏",
          "en": "The three class compartments",
          "ms": "Tiga petak kelas"
        }
      },
      {
        "id": "oop-02-q08",
        "type": "fill",
        "q": {
          "zh": "类图中表示一个类继承另一个类、可用“is kind of”描述的关系称为 ______。",
          "en": "In a class diagram, the relationship in which one class inherits from another and which can be described with is kind of is called ______.",
          "ms": "Dalam gambar rajah kelas, hubungan apabila satu kelas mewarisi daripada kelas lain dan boleh diterangkan dengan is kind of dipanggil ______."
        },
        "answer": [
          "generalization",
          "generalisation",
          "pengitlakan",
          "泛化",
          "generalization relationship"
        ],
        "explain": {
          "zh": "泛化（generalization）表示子类继承父类，用于可以说“is kind of”的场合，例如 Student is a Person。关联回答“它们有联系吗”，聚合与组合回答 has-a，依赖表示临时使用。",
          "en": "Generalization shows that a subclass inherits from a superclass and is used when the relationship can be described as is kind of, for example Student is a Person. Association asks whether the classes are connected, aggregation and composition describe has-a, and dependency means temporary use.",
          "ms": "Pengitlakan menunjukkan bahawa subkelas mewarisi daripada superkelas dan digunakan apabila hubungan itu boleh diterangkan sebagai sejenis, contohnya Student is a Person. Perkaitan bertanya sama ada kelas itu berkaitan, pengagregatan dan komposisi menerangkan has-a, dan kebergantungan bermaksud penggunaan sementara."
        },
        "diff": 1,
        "topic": {
          "zh": "泛化关系",
          "en": "Generalization relationship",
          "ms": "Hubungan pengitlakan"
        }
      }
    ],
    "oop-03": [
      {
        "id": "oop-03-q01",
        "type": "mcq",
        "q": {
          "zh": "Java 最初由 James Gosling 在 Sun Microsystems 开发时叫什么名字？它在哪一年改名为 Java？",
          "en": "What was Java originally called when James Gosling developed it at Sun Microsystems, and in which year was it renamed Java?",
          "ms": "Apakah nama asal Java ketika James Gosling membangunkannya di Sun Microsystems, dan pada tahun manakah ia ditukar nama kepada Java?"
        },
        "opts": [
          {
            "zh": "Oak，1991 年改名为 Java",
            "en": "Oak, renamed Java in 1991",
            "ms": "Oak, ditukar nama kepada Java pada 1991"
          },
          {
            "zh": "Oak，1995 年改名为 Java",
            "en": "Oak, renamed Java in 1995",
            "ms": "Oak, ditukar nama kepada Java pada 1995"
          },
          {
            "zh": "HotJava，1995 年改名为 Java",
            "en": "HotJava, renamed Java in 1995",
            "ms": "HotJava, ditukar nama kepada Java pada 1995"
          },
          {
            "zh": "Green，1997 年改名为 Java",
            "en": "Green, renamed Java in 1997",
            "ms": "Green, ditukar nama kepada Java pada 1997"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义指出 Java 最初叫 Oak（1991 年），用于消费电子设备中的嵌入式芯片，1995 年改名为 Java，转向开发互联网应用。HotJava 是第一个支持 Java 的 Web 浏览器，不是语言最初的名字；1997 年是 UML 被 OMG 采纳的年份，与 Java 改名无关。",
          "en": "The lecture says Java was originally called Oak (1991), was intended for embedded chips in consumer electronic appliances, and was renamed Java in 1995 for developing internet applications. HotJava was the first Java-enabled web browser rather than the language's original name, and 1997 is the year UML was adopted by the OMG, not a Java rename year.",
          "ms": "Kuliah menyatakan Java pada asalnya dipanggil Oak (1991), bertujuan untuk cip terbenam dalam peralatan elektronik pengguna, dan ditukar nama kepada Java pada 1995 untuk membangunkan aplikasi internet. HotJava ialah pelayar web pertama yang menyokong Java dan bukan nama asal bahasa itu, manakala 1997 ialah tahun UML diterima oleh OMG, bukan tahun Java ditukar nama."
        },
        "diff": 1,
        "topic": {
          "zh": "Java 的历史",
          "en": "History of Java",
          "ms": "Sejarah Java"
        }
      },
      {
        "id": "oop-03-q02",
        "type": "mcq",
        "q": {
          "zh": "若要开发运行在服务器端的 Java Servlet 和 Java Server Pages，应使用哪个 Java API 版本？",
          "en": "To develop server-side Java servlets and Java Server Pages, which edition of the Java API should be used?",
          "ms": "Untuk membangunkan servlet Java dan Java Server Pages di bahagian pelayan, edisi Java API yang manakah patut digunakan?"
        },
        "opts": [
          {
            "zh": "J2SE（Standard Edition）",
            "en": "J2SE (Standard Edition)",
            "ms": "J2SE (Edisi Standard)"
          },
          {
            "zh": "J2EE（Enterprise Edition）",
            "en": "J2EE (Enterprise Edition)",
            "ms": "J2EE (Edisi Perusahaan)"
          },
          {
            "zh": "J2ME（Micro Edition）",
            "en": "J2ME (Micro Edition)",
            "ms": "J2ME (Edisi Mikro)"
          },
          {
            "zh": "JDK（Java Development Kit）",
            "en": "JDK (Java Development Kit)",
            "ms": "JDK (Kit Pembangunan Java)"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义把 J2EE 对应到服务器端应用，例如 Java Servlet 和 JSP：J2SE 用于客户端独立应用或 applet，J2ME 用于手机等移动设备。JDK 是开发工具包而不是 API 版本，因此不能作为“版本”的答案。",
          "en": "The lecture maps J2EE to server-side applications such as Java servlets and Java Server Pages, while J2SE is for client-side standalone applications or applets and J2ME is for mobile devices such as cell phones. The JDK is a development kit rather than an edition of the API, so it cannot be the answer to an edition question.",
          "ms": "Kuliah memetakan J2EE kepada aplikasi bahagian pelayan seperti servlet Java dan Java Server Pages, manakala J2SE untuk aplikasi berdiri sendiri atau applet di bahagian klien dan J2ME untuk peranti mudah alih seperti telefon bimbit. JDK ialah kit pembangunan dan bukan edisi API, jadi ia tidak boleh menjadi jawapan bagi soalan edisi."
        },
        "diff": 1,
        "topic": {
          "zh": "Java API 的三个版本",
          "en": "Three editions of the Java API",
          "ms": "Tiga edisi Java API"
        }
      },
      {
        "id": "oop-03-q03",
        "type": "mcq",
        "q": {
          "zh": "执行下面的代码片段后，sum 的值是多少？\nint sum = 0, num = 0;\nwhile (num < 20) {\n  num++;\n  if (num == 10 || num == 11) continue;\n  sum = sum + num;\n}",
          "en": "What is the value of sum after the following code fragment runs?\nint sum = 0, num = 0;\nwhile (num < 20) {\n  num++;\n  if (num == 10 || num == 11) continue;\n  sum = sum + num;\n}",
          "ms": "Apakah nilai sum selepas coretan kod berikut dilaksanakan?\nint sum = 0, num = 0;\nwhile (num < 20) {\n  num++;\n  if (num == 10 || num == 11) continue;\n  sum = sum + num;\n}"
        },
        "opts": [
          {
            "zh": "189",
            "en": "189",
            "ms": "189"
          },
          {
            "zh": "190",
            "en": "190",
            "ms": "190"
          },
          {
            "zh": "210",
            "en": "210",
            "ms": "210"
          },
          {
            "zh": "168",
            "en": "168",
            "ms": "168"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "循环把 num 从 1 加到 20，本来总和是 210，但 num 等于 10 或 11 时 continue 跳过本次累加，所以 210 − 10 − 11 = 189。continue 只结束当前这一次迭代，不会结束整个循环，因此 20 仍然会被累加。",
          "en": "The loop increments num from 1 up to 20, so the total would be 210, but continue skips the addition when num is 10 or 11, giving 210 minus 10 minus 11, which is 189. continue ends only the current iteration rather than the whole loop, so 20 is still added.",
          "ms": "Gelung menambah num dari 1 hingga 20, jadi jumlah asalnya 210, tetapi continue melangkau penambahan apabila num ialah 10 atau 11, menghasilkan 210 tolak 10 tolak 11, iaitu 189. continue hanya menamatkan lelaran semasa dan bukan seluruh gelung, jadi 20 masih ditambah."
        },
        "diff": 3,
        "topic": {
          "zh": "continue 的作用",
          "en": "Effect of continue",
          "ms": "Kesan continue"
        }
      },
      {
        "id": "oop-03-q04",
        "type": "mcq",
        "q": {
          "zh": "执行 boolean[] flags = new boolean[3]; String[] names = new String[3]; 之后，数组元素的值分别是什么？",
          "en": "After boolean[] flags = new boolean[3]; String[] names = new String[3]; what are the values of the array elements?",
          "ms": "Selepas boolean[] flags = new boolean[3]; String[] names = new String[3]; apakah nilai elemen tatasusunan itu?"
        },
        "opts": [
          {
            "zh": "flags 全为 false，names 全为 null",
            "en": "flags are all false and names are all null",
            "ms": "flags semuanya false dan names semuanya null"
          },
          {
            "zh": "flags 全为 true，names 全为空字符串",
            "en": "flags are all true and names are all empty strings",
            "ms": "flags semuanya true dan names semuanya rentetan kosong"
          },
          {
            "zh": "flags 全为 false，names 全为空字符串",
            "en": "flags are all false and names are all empty strings",
            "ms": "flags semuanya false dan names semuanya rentetan kosong"
          },
          {
            "zh": "flags 全为 null，names 全为 null",
            "en": "flags are all null and names are all null",
            "ms": "flags semuanya null dan names semuanya null"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义给出的数组默认值是：数值类型为 0，char 为 '\\u0000'，boolean 为 false，String（引用类型）为 null。因此新建的 boolean 数组元素为 false，String 数组元素为 null，而不是空字符串。",
          "en": "The lecture's array default values are 0 for numeric types, '\\u0000' for char, false for boolean and null for String (a reference type). A new boolean array therefore holds false and a new String array holds null, not empty strings.",
          "ms": "Nilai lalai tatasusunan dalam kuliah ialah 0 bagi jenis numerik, '\\u0000' bagi char, false bagi boolean dan null bagi String (jenis rujukan). Oleh itu tatasusunan boolean baharu mengandungi false dan tatasusunan String baharu mengandungi null, bukan rentetan kosong."
        },
        "diff": 2,
        "topic": {
          "zh": "数组元素的默认值",
          "en": "Default values of array elements",
          "ms": "Nilai lalai elemen tatasusunan"
        }
      },
      {
        "id": "oop-03-q05",
        "type": "mcq",
        "q": {
          "zh": "下列哪一组方法构成讲义所说的“方法重载”（overloading）？",
          "en": "Which pair of methods forms method overloading as described in the lecture?",
          "ms": "Pasangan kaedah yang manakah membentuk beban lampau kaedah seperti yang diterangkan dalam kuliah?"
        },
        "opts": [
          {
            "zh": "int max(int a, int b) 与 double max(double a, double b)",
            "en": "int max(int a, int b) and double max(double a, double b)",
            "ms": "int max(int a, int b) dan double max(double a, double b)"
          },
          {
            "zh": "int max(int a, int b) 与 void max(int a, int b)",
            "en": "int max(int a, int b) and void max(int a, int b)",
            "ms": "int max(int a, int b) dan void max(int a, int b)"
          },
          {
            "zh": "int max(int a, int b) 与 int max(int x, int y)",
            "en": "int max(int a, int b) and int max(int x, int y)",
            "ms": "int max(int a, int b) dan int max(int x, int y)"
          },
          {
            "zh": "int max(int a, int b) 与 int min(int a, int b)",
            "en": "int max(int a, int b) and int min(int a, int b)",
            "ms": "int max(int a, int b) dan int min(int a, int b)"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "方法重载指两个或多个方法同名但参数列表不同，编译器根据方法签名（方法名加参数列表）决定调用哪一个；max(int, int) 与 max(double, double) 的参数类型不同，构成重载。选项 1 和 2 的参数列表完全相同，仅返回类型或参数名不同，不构成重载；选项 3 的方法名不同，是普通的不同方法。",
          "en": "Overloading means two or more methods share the same name but have different parameter lists, and the compiler chooses the method from its signature (name plus parameter list), so max(int, int) and max(double, double) are overloaded. Options 1 and 2 have identical parameter lists and differ only in return type or parameter names, which is not overloading, while option 3 uses a different method name.",
          "ms": "Beban lampau bermaksud dua atau lebih kaedah mempunyai nama yang sama tetapi senarai parameter berbeza, dan pengkompil memilih kaedah berdasarkan tandatangan (nama bersama senarai parameter), jadi max(int, int) dan max(double, double) ialah beban lampau. Pilihan 1 dan 2 mempunyai senarai parameter yang sama dan hanya berbeza dari segi jenis pulangan atau nama parameter, jadi bukan beban lampau, manakala pilihan 3 menggunakan nama kaedah yang berbeza."
        },
        "diff": 2,
        "topic": {
          "zh": "方法重载与方法签名",
          "en": "Method overloading and signatures",
          "ms": "Beban lampau dan tandatangan kaedah"
        }
      },
      {
        "id": "oop-03-q06",
        "type": "multi",
        "q": {
          "zh": "关于局部变量（local variable），下列哪些说法符合讲义？（多选）",
          "en": "Which statements about local variables match the lecture? (Select all that apply)",
          "ms": "Pernyataan manakah tentang pemboleh ubah setempat yang menepati kuliah? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "作用域从声明处开始，直到包含它的块结束",
            "en": "Its scope starts at its declaration and continues to the end of the block that contains it",
            "ms": "Skopnya bermula pada pengisytiharan dan berterusan hingga hujung blok yang mengandunginya"
          },
          {
            "zh": "局部变量在声明时会自动获得 0 或 false 等默认值",
            "en": "A local variable automatically receives a default value such as 0 or false when it is declared",
            "ms": "Pemboleh ubah setempat secara automatik menerima nilai lalai seperti 0 atau false apabila diisytiharkan"
          },
          {
            "zh": "局部变量必须先声明才能使用",
            "en": "A local variable must be declared before it can be used",
            "ms": "Pemboleh ubah setempat mesti diisytiharkan sebelum boleh digunakan"
          },
          {
            "zh": "可以在两个不嵌套的块中分别声明同名变量 i",
            "en": "The same variable name i may be declared in two non-nesting blocks",
            "ms": "Nama pemboleh ubah i yang sama boleh diisytiharkan dalam dua blok yang tidak bersarang"
          },
          {
            "zh": "局部变量可以在声明它的方法之外被引用",
            "en": "A local variable can be referenced outside the method where it is declared",
            "ms": "Pemboleh ubah setempat boleh dirujuk di luar kaedah tempat ia diisytiharkan"
          }
        ],
        "answer": [
          0,
          2,
          3
        ],
        "explain": {
          "zh": "讲义指出局部变量的作用域从声明处到包含它的块末尾，必须先声明后使用，并明确说明在两个不嵌套的块中可以分别声明 i。局部变量没有默认值，使用未赋值的局部变量会出错；它也不能在方法之外被引用，所以选项 1 和 4 错误。",
          "en": "The lecture says a local variable's scope runs from its declaration to the end of its block, that it must be declared before use, and that i can be declared separately in two non-nesting blocks. Local variables receive no default value, so using an unassigned one is an error, and they cannot be referenced outside their method, which makes options 1 and 4 wrong.",
          "ms": "Kuliah menyatakan skop pemboleh ubah setempat bermula pada pengisytiharan hingga hujung bloknya, ia mesti diisytiharkan sebelum digunakan, dan i boleh diisytiharkan secara berasingan dalam dua blok yang tidak bersarang. Pemboleh ubah setempat tiada nilai lalai, jadi menggunakannya tanpa nilai ialah ralat, dan ia tidak boleh dirujuk di luar kaedahnya, menyebabkan pilihan 1 dan 4 salah."
        },
        "diff": 2,
        "topic": {
          "zh": "局部变量的作用域",
          "en": "Scope of local variables",
          "ms": "Skop pemboleh ubah setempat"
        }
      },
      {
        "id": "oop-03-q07",
        "type": "tf",
        "q": {
          "zh": "语句 double[] myList; myList = {1.9, 2.9, 3.4, 3.5}; 是合法的，因为数组的简写初始化可以拆成两条语句。",
          "en": "The statements double[] myList; myList = {1.9, 2.9, 3.4, 3.5}; are legal because the array shorthand initializer can be split into two statements.",
          "ms": "Pernyataan double[] myList; myList = {1.9, 2.9, 3.4, 3.5}; ialah sah kerana penginisial ringkas tatasusunan boleh dipecahkan kepada dua pernyataan."
        },
        "answer": false,
        "explain": {
          "zh": "使用简写初始化时，声明、创建和初始化必须写在同一条语句中，拆开会产生语法错误；讲义明确把这种写法列为错误。若要分开写，应使用 myList = new double[]{1.9, 2.9, 3.4, 3.5};，因为单独的 {…} 不能被识别为数组。",
          "en": "With the shorthand notation the declaration, creation and initialization must all appear in one statement, and splitting them causes a syntax error; the lecture gives exactly this as the wrong example. To assign separately you must write myList = new double[]{1.9, 2.9, 3.4, 3.5}; because a bare {…} is not recognized as an array.",
          "ms": "Dengan notasi ringkas, pengisytiharan, penciptaan dan penginisialan mesti berada dalam satu pernyataan, dan memecahkannya menyebabkan ralat sintaks; kuliah memberikan contoh ini sebagai contoh yang salah. Untuk menetapkannya secara berasingan, tulis myList = new double[]{1.9, 2.9, 3.4, 3.5}; kerana {…} sahaja tidak dikenali sebagai tatasusunan."
        },
        "diff": 2,
        "topic": {
          "zh": "数组简写初始化",
          "en": "Array shorthand initialization",
          "ms": "Penginisialan ringkas tatasusunan"
        }
      },
      {
        "id": "oop-03-q08",
        "type": "fill",
        "q": {
          "zh": "编译器把 Java 源代码编译成由 JVM 读取和解释的中间代码，这种代码称为 ______。",
          "en": "The compiler turns Java source code into intermediate code that the JVM reads and interprets; this code is called ______.",
          "ms": "Pengkompil menukar kod sumber Java kepada kod perantaraan yang dibaca dan ditafsir oleh JVM; kod ini dipanggil ______."
        },
        "answer": [
          "bytecode",
          "byte code",
          "kod bait",
          "字节码",
          "kod byte"
        ],
        "explain": {
          "zh": "讲义的程序流程是：编写 Welcome.java 源代码，用 javac 编译成字节码（Welcome.class），再由 JVM 读取和解释执行。字节码不是给人直接阅读的，也不是机器码，它是面向 JVM 的中间代码。",
          "en": "The lecture's flow is: write the source code Welcome.java, compile it with javac into bytecode (Welcome.class), then let the JVM read and interpret it to produce the result. Bytecode is not meant for programmers to read and is not native machine code; it is intermediate code for the JVM.",
          "ms": "Aliran dalam kuliah ialah: tulis kod sumber Welcome.java, kompil dengan javac menjadi kod bait (Welcome.class), kemudian JVM membacanya dan mentafsirnya untuk menghasilkan keputusan. Kod bait bukan untuk dibaca oleh pengaturcara dan bukan kod mesin asli; ia kod perantaraan untuk JVM."
        },
        "diff": 1,
        "topic": {
          "zh": "字节码",
          "en": "Bytecode",
          "ms": "Kod bait"
        }
      }
    ],
    "oop-04": [
      {
        "id": "oop-04-q01",
        "type": "mcq",
        "q": {
          "zh": "讲义列出构造方法与普通方法的三个区别。下列哪项是其中之一？",
          "en": "The lecture lists three differences between constructors and ordinary methods. Which of the following is one of them?",
          "ms": "Kuliah menyenaraikan tiga perbezaan antara pembina dan kaedah biasa. Yang manakah antara berikut merupakan salah satu daripadanya?"
        },
        "opts": [
          {
            "zh": "构造方法必须声明返回类型 void",
            "en": "A constructor must declare the return type void",
            "ms": "Pembina mesti mengisytiharkan jenis pulangan void"
          },
          {
            "zh": "构造方法没有返回类型，连 void 也没有",
            "en": "A constructor has no return type, not even void",
            "ms": "Pembina tiada jenis pulangan, bukan void pun tidak"
          },
          {
            "zh": "构造方法的名字可以与类名不同",
            "en": "A constructor may have a name different from the class name",
            "ms": "Nama pembina boleh berbeza daripada nama kelas"
          },
          {
            "zh": "构造方法用对象名调用，而不是用 new",
            "en": "A constructor is invoked through an object name rather than with new",
            "ms": "Pembina dipanggil melalui nama objek dan bukan dengan new"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义列出构造方法的三个特点：名字必须与类名相同、没有返回类型（连 void 也没有）、用 new 运算符在创建对象时调用。因此选项 1 正确；选项 0 和 2 与这三个特点直接矛盾，选项 3 说用对象名调用也不符合“用 new 调用”的规则。",
          "en": "The lecture gives three characteristics of constructors: the name must be the same as the class, there is no return type (not even void), and it is invoked with the new operator when an object is created. Option 1 is therefore correct, while options 0 and 2 contradict those characteristics and option 3 contradicts the rule that a constructor is invoked with new.",
          "ms": "Kuliah memberikan tiga ciri pembina: namanya mesti sama dengan nama kelas, tiada jenis pulangan (bukan void pun tidak), dan ia dipanggil dengan pengendali new apabila objek dicipta. Oleh itu pilihan 1 betul, manakala pilihan 0 dan 2 bercanggah dengan ciri tersebut dan pilihan 3 bercanggah dengan peraturan bahawa pembina dipanggil dengan new."
        },
        "diff": 1,
        "topic": {
          "zh": "构造方法的特点",
          "en": "Characteristics of constructors",
          "ms": "Ciri-ciri pembina"
        }
      },
      {
        "id": "oop-04-q02",
        "type": "mcq",
        "q": {
          "zh": "讲义 Circle 类的两个构造方法都会执行 numOfObject++，且 numOfObject 是 static 变量。执行 Circle c1 = new Circle(); Circle c2 = new Circle(9.0); 之后，Circle.getNumOfObject() 返回什么？",
          "en": "Both constructors of the lecture's Circle class execute numOfObject++, and numOfObject is a static variable. After Circle c1 = new Circle(); Circle c2 = new Circle(9.0); what does Circle.getNumOfObject() return?",
          "ms": "Kedua-dua pembina kelas Circle dalam kuliah melaksanakan numOfObject++, dan numOfObject ialah pemboleh ubah static. Selepas Circle c1 = new Circle(); Circle c2 = new Circle(9.0); apakah yang dikembalikan oleh Circle.getNumOfObject()?"
        },
        "opts": [
          {
            "zh": "0",
            "en": "0",
            "ms": "0"
          },
          {
            "zh": "1",
            "en": "1",
            "ms": "1"
          },
          {
            "zh": "2",
            "en": "2",
            "ms": "2"
          },
          {
            "zh": "9",
            "en": "9",
            "ms": "9"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "static 变量由该类的所有实例共享，只有一份；每执行一次构造方法就加一，创建两个对象后 numOfObject 为 2。9.0 只是第二个对象的 radius，不参与计数；0 和 1 分别对应没有创建对象和只创建一个对象的情况。",
          "en": "A static variable is shared by all instances of the class and exists only once; each constructor call increments it, so after two objects are created numOfObject is 2. The value 9.0 is only the radius of the second object and does not affect the counter, while 0 and 1 would correspond to creating no object and only one object.",
          "ms": "Pemboleh ubah static dikongsi oleh semua instans kelas dan hanya wujud sekali; setiap panggilan pembina menambahnya, jadi selepas dua objek dicipta numOfObject ialah 2. Nilai 9.0 hanyalah radius objek kedua dan tidak mempengaruhi pembilang, manakala 0 dan 1 sepadan dengan tiada objek dan hanya satu objek dicipta."
        },
        "diff": 2,
        "topic": {
          "zh": "static 变量的共享",
          "en": "Sharing of static variables",
          "ms": "Perkongsian pemboleh ubah static"
        }
      },
      {
        "id": "oop-04-q03",
        "type": "mcq",
        "q": {
          "zh": "已知 main 中有 int x = 1; int[] y = new int[10]; 并调用 m(x, y);，方法 m 把参数 number 赋值为 1001、把 numbers[0] 赋值为 5555。程序输出的两行是什么？",
          "en": "In main, int x = 1; int[] y = new int[10]; and m(x, y); is called. Method m assigns 1001 to its parameter number and 5555 to numbers[0]. What two lines does the program print?",
          "ms": "Dalam main, int x = 1; int[] y = new int[10]; dan m(x, y); dipanggil. Kaedah m menetapkan 1001 kepada parameter number dan 5555 kepada numbers[0]. Dua baris apakah yang dicetak oleh atur cara?"
        },
        "opts": [
          {
            "zh": "x is 1 与 y[0] is 5555",
            "en": "x is 1 and y[0] is 5555",
            "ms": "x is 1 dan y[0] is 5555"
          },
          {
            "zh": "x is 1001 与 y[0] is 5555",
            "en": "x is 1001 and y[0] is 5555",
            "ms": "x is 1001 dan y[0] is 5555"
          },
          {
            "zh": "x is 1 与 y[0] is 0",
            "en": "x is 1 and y[0] is 0",
            "ms": "x is 1 dan y[0] is 0"
          },
          {
            "zh": "x is 1001 与 y[0] is 0",
            "en": "x is 1001 and y[0] is 0",
            "ms": "x is 1001 dan y[0] is 0"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "Java 按值传递：基本类型传入的是数值副本，方法内把 number 改成 1001 不影响 main 中的 x；对象类型传入的是引用的副本，方法通过这个引用修改 numbers[0]，原数组的元素也随之变成 5555。因此 x 仍为 1，而 y[0] 为 5555。",
          "en": "Java passes by value: for a primitive the value is copied, so assigning 1001 to number does not change x in main, while for an object the reference is copied, so changing numbers[0] through that reference also changes the original array to 5555. x therefore stays 1 while y[0] becomes 5555.",
          "ms": "Java menghantar secara nilai: bagi jenis primitif nilai disalin, jadi menetapkan 1001 kepada number tidak mengubah x dalam main, manakala bagi objek rujukan disalin, jadi mengubah numbers[0] melalui rujukan itu turut mengubah tatasusunan asal kepada 5555. Oleh itu x kekal 1 manakala y[0] menjadi 5555."
        },
        "diff": 3,
        "topic": {
          "zh": "向方法传递对象",
          "en": "Passing objects to methods",
          "ms": "Menghantar objek kepada kaedah"
        }
      },
      {
        "id": "oop-04-q04",
        "type": "mcq",
        "q": {
          "zh": "执行 CircleCopy c1 = new CircleCopy(5); CircleCopy c2 = new CircleCopy(9); c1 = c2; c2.radius = 100; 之后，c1.radius 与 c2.radius 分别是多少？",
          "en": "After CircleCopy c1 = new CircleCopy(5); CircleCopy c2 = new CircleCopy(9); c1 = c2; c2.radius = 100; what are c1.radius and c2.radius?",
          "ms": "Selepas CircleCopy c1 = new CircleCopy(5); CircleCopy c2 = new CircleCopy(9); c1 = c2; c2.radius = 100; apakah nilai c1.radius dan c2.radius?"
        },
        "opts": [
          {
            "zh": "5 和 100",
            "en": "5 and 100",
            "ms": "5 dan 100"
          },
          {
            "zh": "100 和 100",
            "en": "100 and 100",
            "ms": "100 dan 100"
          },
          {
            "zh": "9 和 100",
            "en": "9 and 100",
            "ms": "9 dan 100"
          },
          {
            "zh": "5 和 9",
            "en": "5 and 9",
            "ms": "5 dan 9"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "对象变量保存的是引用，c1 = c2 让两个变量指向同一个对象，原先 radius 为 5 的对象不再被引用而成为垃圾，由 JVM 回收。此后通过 c2 把 radius 改成 100，c1 看到的是同一个对象，所以两者都是 100。",
          "en": "An object variable holds a reference, so c1 = c2 makes both variables point to the same object; the object with radius 5 is no longer referenced and becomes garbage that the JVM collects. Changing radius to 100 through c2 therefore changes the shared object, so both c1.radius and c2.radius are 100.",
          "ms": "Pemboleh ubah objek menyimpan rujukan, jadi c1 = c2 menjadikan kedua-dua pemboleh ubah menunjuk objek yang sama; objek dengan radius 5 tidak lagi dirujuk dan menjadi sampah yang dikutip oleh JVM. Mengubah radius kepada 100 melalui c2 mengubah objek yang dikongsi itu, jadi c1.radius dan c2.radius kedua-duanya 100."
        },
        "diff": 2,
        "topic": {
          "zh": "对象引用的赋值",
          "en": "Reference assignment for objects",
          "ms": "Penetapan rujukan objek"
        }
      },
      {
        "id": "oop-04-q05",
        "type": "mcq",
        "q": {
          "zh": "在 main 方法中声明 int x; 后直接执行 System.out.println(x);，为什么会出错？",
          "en": "Why does System.out.println(x); fail after int x; is declared inside the main method?",
          "ms": "Mengapakah System.out.println(x); gagal selepas int x; diisytiharkan di dalam kaedah main?"
        },
        "opts": [
          {
            "zh": "因为 int 不能与字符串拼接",
            "en": "Because an int cannot be concatenated with a string",
            "ms": "Kerana int tidak boleh dicantumkan dengan rentetan"
          },
          {
            "zh": "因为 Java 不为方法内的局部变量赋默认值，使用前必须显式赋值",
            "en": "Because Java assigns no default value to a local variable inside a method, so it must be assigned explicitly before use",
            "ms": "Kerana Java tidak memberikan nilai lalai kepada pemboleh ubah setempat dalam kaedah, jadi ia mesti diberi nilai secara tersurat sebelum digunakan"
          },
          {
            "zh": "因为 x 必须声明为 static 才能被 println 输出",
            "en": "Because x must be declared static before println can print it",
            "ms": "Kerana x mesti diisytiharkan static sebelum println boleh mencetaknya"
          },
          {
            "zh": "因为 println 只能输出对象，不能输出基本类型",
            "en": "Because println can print objects only and cannot print primitive types",
            "ms": "Kerana println hanya boleh mencetak objek dan tidak boleh mencetak jenis primitif"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义用这个例子说明：字段（实例变量）才有 String 为 null、数值为 0、boolean 为 false 等默认值，而 Java 不为方法内的局部变量赋默认值，程序员必须自己初始化。int 与字符串拼接是合法的，println 也能输出基本类型，所以其他选项都不成立。",
          "en": "The lecture uses this example to show that fields receive defaults such as null for String, 0 for numeric types and false for boolean, but Java assigns no default value to a local variable inside a method, so the programmer must initialize it. Concatenating an int with a string is legal and println can print primitives, so the other options do not hold.",
          "ms": "Kuliah menggunakan contoh ini untuk menunjukkan bahawa medan menerima nilai lalai seperti null bagi String, 0 bagi jenis numerik dan false bagi boolean, tetapi Java tidak memberikan nilai lalai kepada pemboleh ubah setempat dalam kaedah, jadi pengaturcara mesti menginisialisasikannya. Mencantum int dengan rentetan ialah sah dan println boleh mencetak jenis primitif, jadi pilihan lain tidak benar."
        },
        "diff": 1,
        "topic": {
          "zh": "局部变量没有默认值",
          "en": "No default value for local variables",
          "ms": "Tiada nilai lalai bagi pemboleh ubah setempat"
        }
      },
      {
        "id": "oop-04-q06",
        "type": "multi",
        "q": {
          "zh": "关于 this 引用，下列哪些说法符合讲义？（多选）",
          "en": "Which statements about the this reference match the lecture? (Select all that apply)",
          "ms": "Pernyataan manakah tentang rujukan this yang menepati kuliah? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "this 是指向对象自身的一个引用",
            "en": "this is a reference that refers to the object itself",
            "ms": "this ialah rujukan yang merujuk objek itu sendiri"
          },
          {
            "zh": "this 常用于引用被参数遮蔽的类数据字段",
            "en": "this is commonly used to refer to a class data field that is hidden by a parameter",
            "ms": "this biasa digunakan untuk merujuk medan data kelas yang dilindungi oleh parameter"
          },
          {
            "zh": "可以用 this(...) 在一个构造方法中调用同类的另一个构造方法",
            "en": "this(...) can be used in one constructor to invoke another constructor of the same class",
            "ms": "this(...) boleh digunakan dalam satu pembina untuk memanggil pembina lain kelas yang sama"
          },
          {
            "zh": "在 static 方法中可以用 this 引用当前对象",
            "en": "A static method can use this to refer to the current object",
            "ms": "Kaedah static boleh menggunakan this untuk merujuk objek semasa"
          },
          {
            "zh": "this 只能在子类中使用，父类中不能使用",
            "en": "this can be used only in a subclass and never in a superclass",
            "ms": "this hanya boleh digunakan dalam subkelas dan tidak dalam superkelas"
          }
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": {
          "zh": "讲义把 this 定义为指向对象自身的引用，并列出两种常见用法：引用被参数遮蔽的数据字段（如 this.radius = radius），以及让一个构造方法调用同类的另一个构造方法（如 this(1.0)）。static 方法不属于任何具体对象，所以不能使用 this；this 在任何类中都能使用，并不限于子类，因此后两项错误。",
          "en": "The lecture defines this as a reference to the object itself and gives two common uses: referring to a data field hidden by a parameter, as in this.radius = radius, and letting one constructor invoke another constructor of the same class, as in this(1.0). A static method is not tied to any object, so it cannot use this, and this is available in every class rather than only in subclasses, which makes the last two options wrong.",
          "ms": "Kuliah mentakrifkan this sebagai rujukan kepada objek itu sendiri dan memberikan dua kegunaan biasa: merujuk medan data yang dilindungi oleh parameter, seperti this.radius = radius, dan membenarkan satu pembina memanggil pembina lain kelas yang sama, seperti this(1.0). Kaedah static tidak terikat pada mana-mana objek, jadi ia tidak boleh menggunakan this, dan this boleh digunakan dalam setiap kelas dan bukan hanya subkelas, menyebabkan dua pilihan terakhir salah."
        },
        "diff": 2,
        "topic": {
          "zh": "this 引用",
          "en": "The this reference",
          "ms": "Rujukan this"
        }
      },
      {
        "id": "oop-04-q07",
        "type": "tf",
        "q": {
          "zh": "执行 Circle[] obArray = new Circle[10]; 之后，数组元素仍然是 null，必须再对每个元素执行 new Circle() 才能使用。",
          "en": "After Circle[] obArray = new Circle[10]; the array elements are still null, and each element must be assigned new Circle() before it can be used.",
          "ms": "Selepas Circle[] obArray = new Circle[10]; elemen tatasusunan masih null, dan setiap elemen mesti diberi new Circle() sebelum boleh digunakan."
        },
        "answer": true,
        "explain": {
          "zh": "讲义指出对象数组实际上是引用变量的数组：创建数组只为引用分配了位置，元素还没有指向任何对象，因此默认值是 null。必须先初始化，例如用 for 循环执行 obArray[i] = new Circle();，之后才能通过 obArray[i] 调用方法；直接使用未初始化的元素会导致运行时错误。",
          "en": "The lecture explains that an array of objects is really an array of reference variables: creating the array only allocates slots for references, and the elements do not point to any object yet, so their default value is null. They must be initialized first, for example with a for loop that executes obArray[i] = new Circle();, before methods can be called through obArray[i]; using an uninitialized element causes a runtime error.",
          "ms": "Kuliah menerangkan bahawa tatasusunan objek sebenarnya ialah tatasusunan pemboleh ubah rujukan: mencipta tatasusunan hanya memperuntukkan ruang untuk rujukan, dan elemennya belum menunjuk mana-mana objek, jadi nilai lalainya null. Elemen mesti diinisialisasi dahulu, contohnya dengan gelung for yang melaksanakan obArray[i] = new Circle();, sebelum kaedah boleh dipanggil melalui obArray[i]; menggunakan elemen yang belum diinisialisasi menyebabkan ralat masa larian."
        },
        "diff": 2,
        "topic": {
          "zh": "对象数组",
          "en": "Arrays of objects",
          "ms": "Tatasusunan objek"
        }
      },
      {
        "id": "oop-04-q08",
        "type": "fill",
        "q": {
          "zh": "类中用于读取 private 数据字段值的方法（例如 getRadius()）称为 ______ 方法。",
          "en": "A method that reads the value of a private data field, such as getRadius(), is called a(n) ______ method.",
          "ms": "Kaedah yang membaca nilai medan data peribadi, seperti getRadius(), dipanggil ______."
        },
        "answer": [
          "accessor",
          "getter",
          "kaedah pengakses",
          "pengakses",
          "访问器"
        ],
        "explain": {
          "zh": "讲义把读取 private 数据的方法称为 accessor method（访问器，例如 getRadius()），把修改 private 数据的方法称为 mutator method（修改器，例如 setRadius()）。两者配合 private 字段实现数据字段封装，使外部只能通过方法访问数据。",
          "en": "The lecture calls a method that retrieves private data an accessor method (for example getRadius()) and a method that modifies private data a mutator method (for example setRadius()). Together with private fields they implement data-field encapsulation, so outside code can reach the data only through methods.",
          "ms": "Kuliah memanggil kaedah yang mengambil data peribadi sebagai kaedah pengakses (contohnya getRadius()) dan kaedah yang mengubah data peribadi sebagai kaedah pengubah (contohnya setRadius()). Bersama medan peribadi, kedua-duanya melaksanakan enkapsulasi medan data, jadi kod luar hanya boleh mencapai data melalui kaedah."
        },
        "diff": 1,
        "topic": {
          "zh": "访问器与修改器",
          "en": "Accessor and mutator methods",
          "ms": "Kaedah pengakses dan pengubah"
        }
      }
    ],
    "oop-05": [
      {
        "id": "oop-05-q01",
        "type": "mcq",
        "q": {
          "zh": "执行下面的代码后，两行输出分别是什么？\nString s1 = \"Welcome to Java\";\nString s2 = new String(\"Welcome to Java\");\nString s3 = \"Welcome to Java\";\nSystem.out.println(s1 == s2);\nSystem.out.println(s1 == s3);",
          "en": "What are the two output lines after this code runs?\nString s1 = \"Welcome to Java\";\nString s2 = new String(\"Welcome to Java\");\nString s3 = \"Welcome to Java\";\nSystem.out.println(s1 == s2);\nSystem.out.println(s1 == s3);",
          "ms": "Apakah dua baris keluaran selepas kod ini dilaksanakan?\nString s1 = \"Welcome to Java\";\nString s2 = new String(\"Welcome to Java\");\nString s3 = \"Welcome to Java\";\nSystem.out.println(s1 == s2);\nSystem.out.println(s1 == s3);"
        },
        "opts": [
          {
            "zh": "false 与 true",
            "en": "false and true",
            "ms": "false dan true"
          },
          {
            "zh": "true 与 true",
            "en": "true and true",
            "ms": "true dan true"
          },
          {
            "zh": "false 与 false",
            "en": "false and false",
            "ms": "false dan false"
          },
          {
            "zh": "true 与 false",
            "en": "true and false",
            "ms": "true dan false"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "使用 new String(...) 一定会创建一个新的 String 对象，所以 s1 与 s2 的引用不同，s1 == s2 为 false；s1 和 s3 都是字面量，JVM 对相同字符序列只保留一个 interned 实例，所以 s1 == s3 为 true。== 比较的是引用而不是内容，比较内容应使用 equals()。",
          "en": "Using new String(...) always creates a new String object, so s1 and s2 hold different references and s1 == s2 is false. Both s1 and s3 are literals, and the JVM keeps a single interned instance for the same character sequence, so s1 == s3 is true. The == operator compares references rather than contents; equals() should be used for contents.",
          "ms": "Menggunakan new String(...) sentiasa mencipta objek String baharu, jadi s1 dan s2 memegang rujukan berbeza dan s1 == s2 ialah false. Kedua-dua s1 dan s3 ialah literal, dan JVM menyimpan satu instans terintern bagi jujukan aksara yang sama, jadi s1 == s3 ialah true. Pengendali == membandingkan rujukan dan bukan kandungan; equals() patut digunakan untuk kandungan."
        },
        "diff": 3,
        "topic": {
          "zh": "interned 字符串与 ==",
          "en": "Interned strings and ==",
          "ms": "Rentetan terintern dan =="
        }
      },
      {
        "id": "oop-05-q02",
        "type": "mcq",
        "q": {
          "zh": "String message = \"Welcome to Java\"; String r = message.substring(0, 11) + \"HTML\"; 执行后 r 是什么？",
          "en": "String message = \"Welcome to Java\"; String r = message.substring(0, 11) + \"HTML\"; what is r after this code runs?",
          "ms": "String message = \"Welcome to Java\"; String r = message.substring(0, 11) + \"HTML\"; apakah r selepas kod ini dilaksanakan?"
        },
        "opts": [
          {
            "zh": "\"Welcome to HTML\"",
            "en": "\"Welcome to HTML\"",
            "ms": "\"Welcome to HTML\""
          },
          {
            "zh": "\"Welcome to JavaHTML\"",
            "en": "\"Welcome to JavaHTML\"",
            "ms": "\"Welcome to JavaHTML\""
          },
          {
            "zh": "\"Welcome to Java\"",
            "en": "\"Welcome to Java\"",
            "ms": "\"Welcome to Java\""
          },
          {
            "zh": "\"Welcome to JHTML\"",
            "en": "\"Welcome to JHTML\"",
            "ms": "\"Welcome to JHTML\""
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "substring(0, 11) 取下标 0 到 10 的字符，正好是 \"Welcome to \"（含第 10 位的空格），不包含下标 11 的 J；再拼接 \"HTML\" 就得到 \"Welcome to HTML\"。因此选项 1 多保留了 Java，选项 2 没有做任何替换，选项 3 从下标 12 才开始替换而留下了 J。",
          "en": "substring(0, 11) takes the characters at indices 0 to 10, which is exactly \"Welcome to \" including the space at index 10 and excluding the J at index 11; concatenating \"HTML\" then gives \"Welcome to HTML\". Option 1 keeps Java as well, option 2 performs no replacement at all, and option 3 starts replacing at index 12 and leaves the J behind.",
          "ms": "substring(0, 11) mengambil aksara pada indeks 0 hingga 10, iaitu tepat \"Welcome to \" termasuk ruang pada indeks 10 dan tidak termasuk J pada indeks 11; mencantumkan \"HTML\" kemudian menghasilkan \"Welcome to HTML\". Pilihan 1 masih menyimpan Java, pilihan 2 tidak membuat penggantian langsung, dan pilihan 3 mula menggantikan pada indeks 12 sehingga J tertinggal."
        },
        "diff": 2,
        "topic": {
          "zh": "substring 的区间",
          "en": "The substring range",
          "ms": "Julat substring"
        }
      },
      {
        "id": "oop-05-q03",
        "type": "mcq",
        "q": {
          "zh": "\"Welcome to Java\".indexOf('o', 5) 的结果是什么？",
          "en": "What is the result of \"Welcome to Java\".indexOf('o', 5)?",
          "ms": "Apakah hasil \"Welcome to Java\".indexOf('o', 5)?"
        },
        "opts": [
          {
            "zh": "4",
            "en": "4",
            "ms": "4"
          },
          {
            "zh": "9",
            "en": "9",
            "ms": "9"
          },
          {
            "zh": "10",
            "en": "10",
            "ms": "10"
          },
          {
            "zh": "-1",
            "en": "-1",
            "ms": "-1"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "indexOf(ch, fromIndex) 从 fromIndex 开始向后查找第一次出现的字符；从下标 5 开始，第一个 'o' 出现在下标 9（\"Welcome to Java\" 中的 to 的 o）。下标 4 的 'o' 在起始位置之前，所以被跳过；只有找不到时才返回 -1。",
          "en": "indexOf(ch, fromIndex) searches forward from fromIndex for the first occurrence; starting at index 5 the first 'o' is at index 9, the o of to in \"Welcome to Java\". The 'o' at index 4 lies before the starting position and is skipped, and -1 is returned only when the character is not found at all.",
          "ms": "indexOf(ch, fromIndex) mencari ke hadapan bermula dari fromIndex bagi kemunculan pertama; bermula pada indeks 5, 'o' pertama berada pada indeks 9, iaitu o dalam to pada \"Welcome to Java\". 'o' pada indeks 4 terletak sebelum kedudukan mula dan dilangkau, manakala -1 hanya dikembalikan apabila aksara itu langsung tidak ditemui."
        },
        "diff": 2,
        "topic": {
          "zh": "indexOf 的起始位置",
          "en": "indexOf with a start index",
          "ms": "indexOf dengan indeks mula"
        }
      },
      {
        "id": "oop-05-q04",
        "type": "mcq",
        "q": {
          "zh": "\"Welcome\".replaceFirst(\"e\", \"AB\") 的结果是什么？",
          "en": "What is the result of \"Welcome\".replaceFirst(\"e\", \"AB\")?",
          "ms": "Apakah hasil \"Welcome\".replaceFirst(\"e\", \"AB\")?"
        },
        "opts": [
          {
            "zh": "\"WABlcomAB\"",
            "en": "\"WABlcomAB\"",
            "ms": "\"WABlcomAB\""
          },
          {
            "zh": "\"WABlcome\"",
            "en": "\"WABlcome\"",
            "ms": "\"WABlcome\""
          },
          {
            "zh": "\"WAlcomA\"",
            "en": "\"WAlcomA\"",
            "ms": "\"WAlcomA\""
          },
          {
            "zh": "\"WABcome\"",
            "en": "\"WABcome\"",
            "ms": "\"WABcome\""
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "replaceFirst 只替换第一次出现的子串，\"Welcome\" 中第一个 e 在下标 1，替换后得到 \"WABlcome\"。replace(\"e\", \"AB\") 会替换所有 e，得到 \"WABlcomAB\"；replace('e', 'A') 则把每个 e 换成单个字符 A，得到 \"WAlcomA\"。",
          "en": "replaceFirst replaces only the first occurrence of the substring, and the first e in \"Welcome\" is at index 1, so the result is \"WABlcome\". replace(\"e\", \"AB\") would replace every e and give \"WABlcomAB\", while replace('e', 'A') would replace each e with the single character A and give \"WAlcomA\".",
          "ms": "replaceFirst hanya menggantikan kemunculan pertama subrentetan, dan e pertama dalam \"Welcome\" berada pada indeks 1, jadi hasilnya \"WABlcome\". replace(\"e\", \"AB\") akan menggantikan setiap e dan menghasilkan \"WABlcomAB\", manakala replace('e', 'A') menggantikan setiap e dengan aksara tunggal A dan menghasilkan \"WAlcomA\"."
        },
        "diff": 2,
        "topic": {
          "zh": "replaceFirst 与 replace 的区别",
          "en": "replaceFirst versus replace",
          "ms": "Perbezaan replaceFirst dan replace"
        }
      },
      {
        "id": "oop-05-q05",
        "type": "mcq",
        "q": {
          "zh": "StringBuffer strBuf = new StringBuffer(\"Welcome to Java\"); strBuf.replace(11, 15, \"HTML\"); 之后 strBuf 的内容是什么？",
          "en": "StringBuffer strBuf = new StringBuffer(\"Welcome to Java\"); strBuf.replace(11, 15, \"HTML\"); what is the content of strBuf afterwards?",
          "ms": "StringBuffer strBuf = new StringBuffer(\"Welcome to Java\"); strBuf.replace(11, 15, \"HTML\"); apakah kandungan strBuf selepas itu?"
        },
        "opts": [
          {
            "zh": "\"Welcome to HTML\"",
            "en": "\"Welcome to HTML\"",
            "ms": "\"Welcome to HTML\""
          },
          {
            "zh": "\"Welcome to JavaHTML\"",
            "en": "\"Welcome to JavaHTML\"",
            "ms": "\"Welcome to JavaHTML\""
          },
          {
            "zh": "\"Welcome HTML\"",
            "en": "\"Welcome HTML\"",
            "ms": "\"Welcome HTML\""
          },
          {
            "zh": "\"Welcome to HTMLJava\"",
            "en": "\"Welcome to HTMLJava\"",
            "ms": "\"Welcome to HTMLJava\""
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "replace(startIndex, endIndex, s) 用新字符串替换从 startIndex 到 endIndex 之前（不含 endIndex）的字符；下标 11 到 14 正好是 \"Java\"，被替换为 \"HTML\"，结果是 \"Welcome to HTML\"。endIndex 不包含在替换范围内，所以不会残留最后一个 a。",
          "en": "replace(startIndex, endIndex, s) replaces the characters from startIndex up to but not including endIndex; indices 11 to 14 are exactly \"Java\" and are replaced by \"HTML\", giving \"Welcome to HTML\". Because endIndex is exclusive, no trailing a is left behind.",
          "ms": "replace(startIndex, endIndex, s) menggantikan aksara dari startIndex sehingga tidak termasuk endIndex; indeks 11 hingga 14 ialah tepat \"Java\" dan digantikan dengan \"HTML\", menghasilkan \"Welcome to HTML\". Oleh sebab endIndex tidak termasuk, tiada a yang tertinggal di hujung."
        },
        "diff": 3,
        "topic": {
          "zh": "StringBuffer 的 replace",
          "en": "replace in StringBuffer",
          "ms": "replace dalam StringBuffer"
        }
      },
      {
        "id": "oop-05-q06",
        "type": "multi",
        "q": {
          "zh": "关于 Character 类，下列哪些说法符合讲义？（多选）",
          "en": "Which statements about the Character class match the lecture? (Select all that apply)",
          "ms": "Pernyataan manakah tentang kelas Character yang menepati kuliah? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "Character.isDigit('7') 返回 true",
            "en": "Character.isDigit('7') returns true",
            "ms": "Character.isDigit('7') mengembalikan true"
          },
          {
            "zh": "Character.isLetter('A') 返回 true",
            "en": "Character.isLetter('A') returns true",
            "ms": "Character.isLetter('A') mengembalikan true"
          },
          {
            "zh": "Character.toUpperCase('a') 返回 'A'",
            "en": "Character.toUpperCase('a') returns 'A'",
            "ms": "Character.toUpperCase('a') mengembalikan 'A'"
          },
          {
            "zh": "Character.isLetterOrDigit('#') 返回 true",
            "en": "Character.isLetterOrDigit('#') returns true",
            "ms": "Character.isLetterOrDigit('#') mengembalikan true"
          },
          {
            "zh": "Character 位于 java.lang 包，它的对象包装一个 char 值",
            "en": "Character is in the java.lang package and its object wraps a char value",
            "ms": "Character berada dalam pakej java.lang dan objeknya membungkus nilai char"
          }
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explain": {
          "zh": "Character 类的 isDigit 判断字符是否为 0 到 9 的数字，isLetter 判断是否为字母，toUpperCase 把字符转换成大写，这些方法分别使前三项成立；Character 属于 java.lang，构造时包装一个 char。字符 # 既不是字母也不是数字，所以 isLetterOrDigit('#') 返回 false，选项 3 错误。",
          "en": "Character.isDigit tests whether a character is a digit from 0 to 9, isLetter tests whether it is a letter, and toUpperCase converts a character to uppercase, so the first three statements hold; Character belongs to java.lang and wraps a char value. The character # is neither a letter nor a digit, so isLetterOrDigit('#') returns false and option 3 is wrong.",
          "ms": "Character.isDigit menguji sama ada aksara itu digit dari 0 hingga 9, isLetter menguji sama ada ia huruf, dan toUpperCase menukar aksara kepada huruf besar, jadi tiga pernyataan pertama benar; Character tergolong dalam java.lang dan membungkus nilai char. Aksara # bukan huruf dan bukan digit, jadi isLetterOrDigit('#') mengembalikan false dan pilihan 3 salah."
        },
        "diff": 2,
        "topic": {
          "zh": "Character 类的方法",
          "en": "Methods of the Character class",
          "ms": "Kaedah kelas Character"
        }
      },
      {
        "id": "oop-05-q07",
        "type": "tf",
        "q": {
          "zh": "执行 String s = \"Java\"; s = \"HTML\"; 之后，原来保存 \"Java\" 的 String 对象的内容被改成了 \"HTML\"。",
          "en": "After String s = \"Java\"; s = \"HTML\"; the String object that held \"Java\" has had its contents changed to \"HTML\".",
          "ms": "Selepas String s = \"Java\"; s = \"HTML\"; objek String yang menyimpan \"Java\" telah diubah kandungannya kepada \"HTML\"."
        },
        "answer": false,
        "explain": {
          "zh": "String 对象不可变，s = \"HTML\" 只是让引用 s 指向一个新的 String 对象，原来保存 \"Java\" 的对象内容没有改变，只是不再被引用。讲义用“从一个盒子搬到另一个盒子，原来的盒子仍然存在”来说明这一点。",
          "en": "String objects are immutable: s = \"HTML\" only makes the reference s point to a new String object, while the object holding \"Java\" keeps its contents and simply becomes unreferenced. The lecture illustrates this as moving to another box while the first box still exists.",
          "ms": "Objek String tidak boleh ubah: s = \"HTML\" hanya menjadikan rujukan s menunjuk objek String baharu, manakala objek yang menyimpan \"Java\" mengekalkan kandungannya dan hanya tidak lagi dirujuk. Kuliah mengibaratkan ini seperti berpindah ke kotak lain sedangkan kotak pertama masih wujud."
        },
        "diff": 2,
        "topic": {
          "zh": "String 的不可变性",
          "en": "Immutability of String",
          "ms": "Ketidakbolehubahan String"
        }
      },
      {
        "id": "oop-05-q08",
        "type": "fill",
        "q": {
          "zh": "Java 中用于创建可修改字符串、支持 append()、insert()、delete() 的类是 ______。",
          "en": "The Java class used to create modifiable strings and supporting append(), insert() and delete() is ______.",
          "ms": "Kelas Java yang digunakan untuk mencipta rentetan yang boleh diubah dan menyokong append(), insert() serta delete() ialah ______."
        },
        "answer": [
          "StringBuffer",
          "StringBuilder",
          "kelas StringBuffer",
          "String Buffer",
          "字符串缓冲区"
        ],
        "explain": {
          "zh": "讲义把 StringBuffer 作为 String 的替代方案：String 创建后内容不能改变，而 StringBuffer 支持 append、insert、delete、replace、reverse 等修改操作。题目描述的是可变字符串，所以答案是 StringBuffer（现代 Java 中功能相同的 StringBuilder 也可接受）。",
          "en": "The lecture presents StringBuffer as the alternative to String: a String cannot be changed after creation, whereas StringBuffer supports modifications such as append, insert, delete, replace and reverse. The question describes a modifiable string, so the answer is StringBuffer (StringBuilder, which offers the same operations in modern Java, is also accepted).",
          "ms": "Kuliah memperkenalkan StringBuffer sebagai alternatif kepada String: String tidak boleh diubah selepas dicipta, manakala StringBuffer menyokong pengubahsuaian seperti append, insert, delete, replace dan reverse. Soalan menerangkan rentetan yang boleh diubah, jadi jawapannya StringBuffer (StringBuilder yang menawarkan operasi sama dalam Java moden juga diterima)."
        },
        "diff": 1,
        "topic": {
          "zh": "StringBuffer 类",
          "en": "The StringBuffer class",
          "ms": "Kelas StringBuffer"
        }
      }
    ],
    "oop-06": [
      {
        "id": "oop-06-q01",
        "type": "mcq",
        "q": {
          "zh": "讲义中 Faculty extends Employee、Employee extends Person。执行 new Faculty() 时，三个构造方法体的执行顺序是什么？",
          "en": "In the lecture, Faculty extends Employee and Employee extends Person. When new Faculty() is executed, in what order do the three constructor bodies run?",
          "ms": "Dalam kuliah, Faculty extends Employee dan Employee extends Person. Apabila new Faculty() dilaksanakan, apakah susunan badan tiga pembina itu dijalankan?"
        },
        "opts": [
          {
            "zh": "Faculty → Employee → Person",
            "en": "Faculty, then Employee, then Person",
            "ms": "Faculty, kemudian Employee, kemudian Person"
          },
          {
            "zh": "Person → Employee → Faculty",
            "en": "Person, then Employee, then Faculty",
            "ms": "Person, kemudian Employee, kemudian Faculty"
          },
          {
            "zh": "Employee → Person → Faculty",
            "en": "Employee, then Person, then Faculty",
            "ms": "Employee, kemudian Person, kemudian Faculty"
          },
          {
            "zh": "Person → Faculty → Employee",
            "en": "Person, then Faculty, then Employee",
            "ms": "Person, kemudian Faculty, kemudian Employee"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "子类构造方法如果没有显式调用 super，编译器会把 super() 放在第一句，因此创建 Faculty 对象时先从最顶层的 Person 开始，再 Employee，最后才执行 Faculty 的构造方法体。实际输出顺序是 Person、Emp、Faculty 三条信息。",
          "en": "If a subclass constructor does not call super explicitly, the compiler places super() as its first statement, so creating a Faculty object starts at the topmost Person, then runs Employee, and only then the body of Faculty. The printed order is Person, Emp and Faculty.",
          "ms": "Jika pembina subkelas tidak memanggil super secara tersurat, pengkompil meletakkan super() sebagai pernyataan pertama, jadi mencipta objek Faculty bermula dari Person yang paling atas, kemudian Employee, dan barulah badan pembina Faculty dijalankan. Susunan cetakan ialah Person, Emp dan Faculty."
        },
        "diff": 2,
        "topic": {
          "zh": "构造方法链",
          "en": "Constructor chaining",
          "ms": "Rantaian pembina"
        }
      },
      {
        "id": "oop-06-q02",
        "type": "mcq",
        "q": {
          "zh": "关于方法重写（overriding），下列哪项符合讲义的说明？",
          "en": "Which statement about method overriding matches the lecture?",
          "ms": "Pernyataan manakah tentang penggantian kaedah yang menepati kuliah?"
        },
        "opts": [
          {
            "zh": "子类重写方法时可以把返回类型改成任意类型",
            "en": "A subclass may change the return type to any type when overriding a method",
            "ms": "Subkelas boleh menukar jenis pulangan kepada apa-apa jenis semasa menggantikan kaedah"
          },
          {
            "zh": "父类的 private 方法不能被子类重写，两个同名方法完全无关",
            "en": "A private method of the superclass cannot be overridden; two methods with the same name are completely unrelated",
            "ms": "Kaedah peribadi superkelas tidak boleh digantikan; dua kaedah dengan nama yang sama sama sekali tidak berkaitan"
          },
          {
            "zh": "static 方法可以像实例方法一样被重写",
            "en": "A static method can be overridden just like an instance method",
            "ms": "Kaedah static boleh digantikan seperti kaedah instans"
          },
          {
            "zh": "子类重写方法时必须使用 super 关键字",
            "en": "A subclass must use the super keyword when overriding a method",
            "ms": "Subkelas mesti menggunakan kata kunci super semasa menggantikan kaedah"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "重写要求子类方法与父类方法具有相同的签名和返回类型；private 方法在类外不可访问，所以子类中的同名方法只是另一个方法，不构成重写。改变返回类型、把 static 方法当作可重写、以及强制使用 super，都不符合讲义：static 方法只能被隐藏，super 只在需要调用父类版本时才用。",
          "en": "Overriding requires the same signature and return type as the superclass method; a private method is not accessible outside its own class, so a same-named method in the subclass is simply another method, not an override. Changing the return type, treating a static method as overridable and requiring super all contradict the lecture: a static method is hidden rather than overridden, and super is needed only to call the superclass version.",
          "ms": "Penggantian memerlukan tandatangan dan jenis pulangan yang sama dengan kaedah superkelas; kaedah peribadi tidak boleh dicapai di luar kelasnya, jadi kaedah bernama sama dalam subkelas hanyalah kaedah lain dan bukan penggantian. Menukar jenis pulangan, menganggap kaedah static boleh digantikan dan mewajibkan super semuanya bercanggah dengan kuliah: kaedah static hanya disembunyikan dan super hanya perlu untuk memanggil versi superkelas."
        },
        "diff": 2,
        "topic": {
          "zh": "方法重写的条件",
          "en": "Conditions for overriding",
          "ms": "Syarat penggantian kaedah"
        }
      },
      {
        "id": "oop-06-q03",
        "type": "mcq",
        "q": {
          "zh": "若 Cylinder 类没有重写 toString()，执行 System.out.println(myCylinder.toString()); 最可能输出什么？",
          "en": "If the Cylinder class does not override toString(), what is System.out.println(myCylinder.toString()); most likely to print?",
          "ms": "Jika kelas Cylinder tidak menggantikan toString(), apakah yang paling mungkin dicetak oleh System.out.println(myCylinder.toString());?"
        },
        "opts": [
          {
            "zh": "对象的全部属性值，例如 length 和 radius",
            "en": "All the attribute values of the object, such as length and radius",
            "ms": "Semua nilai atribut objek, seperti length dan radius"
          },
          {
            "zh": "类似 Cylinder@15037e5 的字符串",
            "en": "A string such as Cylinder@15037e5",
            "ms": "Rentetan seperti Cylinder@15037e5"
          },
          {
            "zh": "空字符串",
            "en": "An empty string",
            "ms": "Rentetan kosong"
          },
          {
            "zh": "编译错误，因为 Object 没有 toString()",
            "en": "A compilation error because Object has no toString()",
            "ms": "Ralat kompilasi kerana Object tiada toString()"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "Object 类默认的 toString() 返回“类名 + @ + 表示该对象的数字”，例如 Cylinder@15037e5，这种信息对使用者没有帮助。它不会自动列出属性值，也不是空字符串；Object 本身定义了 toString()，所以不会编译错误，讲义建议重写它以返回可读的内容。",
          "en": "The default toString() in Object returns the class name, an at sign and a number representing the object, for example Cylinder@15037e5, which is not helpful to users. It does not list attribute values automatically and is not empty, and because Object itself defines toString() there is no compilation error; the lecture recommends overriding it to return readable content.",
          "ms": "toString() lalai dalam Object mengembalikan nama kelas, tanda at dan nombor yang mewakili objek, contohnya Cylinder@15037e5, yang tidak membantu pengguna. Ia tidak menyenaraikan nilai atribut secara automatik dan bukan rentetan kosong, dan kerana Object sendiri mentakrifkan toString() tiada ralat kompilasi; kuliah mengesyorkan menggantikannya supaya kandungan yang mudah dibaca dikembalikan."
        },
        "diff": 1,
        "topic": {
          "zh": "Object 的 toString()",
          "en": "toString() in Object",
          "ms": "toString() dalam Object"
        }
      },
      {
        "id": "oop-06-q04",
        "type": "mcq",
        "q": {
          "zh": "设对象 o 是 C1 的实例，C1 是 C2 的子类，依此类推直到最一般的类 Cn（Object）。当 o 调用方法 p 时，JVM 如何查找实现？",
          "en": "Suppose o is an instance of C1, C1 is a subclass of C2, and so on up to the most general class Cn (Object). When o invokes method p, how does the JVM search for the implementation?",
          "ms": "Katakan o ialah instans C1, C1 ialah subkelas C2, dan seterusnya sehingga kelas paling umum Cn (Object). Apabila o memanggil kaedah p, bagaimanakah JVM mencari pelaksanaannya?"
        },
        "opts": [
          {
            "zh": "从 Cn 开始向下查到 C1，使用最后一个实现",
            "en": "Start at Cn and search down to C1, using the last implementation found",
            "ms": "Bermula di Cn dan mencari ke bawah hingga C1, menggunakan pelaksanaan terakhir"
          },
          {
            "zh": "从 C1 开始向上查到 C2…Cn，使用第一个找到的实现",
            "en": "Start at C1 and search upward through C2 to Cn, using the first implementation found",
            "ms": "Bermula di C1 dan mencari ke atas melalui C2 hingga Cn, menggunakan pelaksanaan pertama yang ditemui"
          },
          {
            "zh": "在编译时由编译器固定选择 C1 的实现",
            "en": "The compiler fixes the choice of C1's implementation at compile time",
            "ms": "Pengkompil menetapkan pilihan pelaksanaan C1 pada masa kompilasi"
          },
          {
            "zh": "在 C1 到 Cn 中随机选择一个实现",
            "en": "Pick one implementation between C1 and Cn at random",
            "ms": "Memilih satu pelaksanaan antara C1 dan Cn secara rawak"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "动态绑定从最具体的类 C1 开始，沿 C2、…、Cn 向上查找方法 p 的实现，找到第一个就停止并调用它。编译器只在编译时根据参数类型、个数和顺序匹配方法签名，具体实现由 JVM 在运行时决定，并不会随机选择。",
          "en": "Dynamic binding starts from the most specific class C1 and searches upward through C2 up to Cn, stopping at and invoking the first implementation of p that it finds. The compiler only matches the method signature from the parameter types, number and order at compile time; the JVM decides the implementation at runtime and never picks one at random.",
          "ms": "Pengikatan dinamik bermula dari kelas paling spesifik C1 dan mencari ke atas melalui C2 hingga Cn, berhenti dan memanggil pelaksanaan p yang pertama ditemui. Pengkompil hanya memadankan tandatangan kaedah berdasarkan jenis, bilangan dan susunan parameter pada masa kompilasi; JVM menentukan pelaksanaan pada masa larian dan tidak pernah memilih secara rawak."
        },
        "diff": 3,
        "topic": {
          "zh": "动态绑定的查找顺序",
          "en": "Search order of dynamic binding",
          "ms": "Susunan carian pengikatan dinamik"
        }
      },
      {
        "id": "oop-06-q05",
        "type": "mcq",
        "q": {
          "zh": "讲义给出四个访问修饰符的可见性顺序。下列哪一项按可见性从低到高排列？",
          "en": "The lecture gives the order of visibility of the four access modifiers. Which sequence lists them from least to most visible?",
          "ms": "Kuliah memberikan susunan kebolehlihatan empat pengubah suai capaian. Urutan manakah menyenaraikannya dari paling rendah ke paling tinggi?"
        },
        "opts": [
          {
            "zh": "private → 默认（无修饰符）→ protected → public",
            "en": "private, default (no modifier), protected, public",
            "ms": "private, lalai (tanpa pengubah suai), protected, public"
          },
          {
            "zh": "private → protected → 默认（无修饰符）→ public",
            "en": "private, protected, default (no modifier), public",
            "ms": "private, protected, lalai (tanpa pengubah suai), public"
          },
          {
            "zh": "默认（无修饰符）→ private → protected → public",
            "en": "default (no modifier), private, protected, public",
            "ms": "lalai (tanpa pengubah suai), private, protected, public"
          },
          {
            "zh": "protected → private → 默认（无修饰符）→ public",
            "en": "protected, private, default (no modifier), public",
            "ms": "protected, private, lalai (tanpa pengubah suai), public"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义写明可见性按 private、默认（无修饰符）、protected、public 的顺序递增：private 仅在类内，默认再加同包，protected 再加子类，public 对所有类开放。其他三个选项都把 protected 与默认或 private 的先后顺序弄错了。",
          "en": "The lecture states that visibility increases in the order private, default (no modifier), protected, public: private only inside the class, default adds the same package, protected adds subclasses, and public is open to all classes. The other options all place protected before default or private incorrectly.",
          "ms": "Kuliah menyatakan kebolehlihatan meningkat mengikut susunan private, lalai (tanpa pengubah suai), protected, public: private hanya dalam kelas, lalai menambah pakej yang sama, protected menambah subkelas, dan public terbuka kepada semua kelas. Tiga pilihan lain meletakkan protected sebelum lalai atau private secara salah."
        },
        "diff": 1,
        "topic": {
          "zh": "访问修饰符的可见性顺序",
          "en": "Visibility order of access modifiers",
          "ms": "Susunan kebolehlihatan pengubah suai capaian"
        }
      },
      {
        "id": "oop-06-q06",
        "type": "multi",
        "q": {
          "zh": "关于继承，下列哪些说法正确？（多选）",
          "en": "Which statements about inheritance are correct? (Select all that apply)",
          "ms": "Pernyataan manakah tentang pewarisan yang betul? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "Java 中每个类都直接或间接继承 java.lang.Object",
            "en": "Every class in Java inherits java.lang.Object directly or indirectly",
            "ms": "Setiap kelas dalam Java mewarisi java.lang.Object secara langsung atau tidak langsung"
          },
          {
            "zh": "父类的构造方法不会被子类继承",
            "en": "A superclass constructor is not inherited by the subclass",
            "ms": "Pembina superkelas tidak diwarisi oleh subkelas"
          },
          {
            "zh": "子类可以重写父类的方法",
            "en": "A subclass can override the methods of its superclass",
            "ms": "Subkelas boleh menggantikan kaedah superkelasnya"
          },
          {
            "zh": "子类重写 public 方法时可以把它改成 protected 以降低可见性",
            "en": "When overriding a public method, a subclass may reduce its visibility to protected",
            "ms": "Semasa menggantikan kaedah public, subkelas boleh mengurangkan kebolehlihatannya kepada protected"
          },
          {
            "zh": "final 类不能被继承",
            "en": "A final class cannot be extended",
            "ms": "Kelas final tidak boleh diwarisi"
          }
        ],
        "answer": [
          0,
          1,
          2,
          4
        ],
        "explain": {
          "zh": "讲义说明所有类都直接或间接继承 Object、构造方法不被继承但会被调用、子类可以重写父类方法、final 类不能被继承。子类不能削弱父类方法的可访问性，public 方法重写后仍必须是 public，改成 protected 是非法削弱，所以选项 3 错误。",
          "en": "The lecture says every class inherits Object directly or indirectly, constructors are not inherited but are invoked, a subclass may override superclass methods, and a final class cannot be extended. A subclass cannot weaken the accessibility of a superclass method, so a public method must remain public when overridden; reducing it to protected is illegal, which makes option 3 wrong.",
          "ms": "Kuliah menyatakan setiap kelas mewarisi Object secara langsung atau tidak langsung, pembina tidak diwarisi tetapi dipanggil, subkelas boleh menggantikan kaedah superkelas, dan kelas final tidak boleh diwarisi. Subkelas tidak boleh melemahkan kebolehcapaian kaedah superkelas, jadi kaedah public mesti kekal public apabila digantikan; mengurangkannya kepada protected tidak sah, menyebabkan pilihan 3 salah."
        },
        "diff": 2,
        "topic": {
          "zh": "继承与访问权限",
          "en": "Inheritance and access rules",
          "ms": "Pewarisan dan peraturan capaian"
        }
      },
      {
        "id": "oop-06-q07",
        "type": "tf",
        "q": {
          "zh": "static 方法可以像实例方法一样被子类重写（override）。",
          "en": "A static method can be overridden by a subclass just like an instance method.",
          "ms": "Kaedah static boleh digantikan oleh subkelas seperti kaedah instans."
        },
        "answer": false,
        "explain": {
          "zh": "讲义特别指出：static 方法可以被子类继承，但不能被重写；如果子类重新定义了父类的 static 方法，父类的方法只是被隐藏（hidden），而不是被覆盖。实例方法才需要满足相同签名和返回类型来进行重写。",
          "en": "The lecture points out that a static method can be inherited but cannot be overridden; if a subclass redefines the superclass static method, the superclass version is merely hidden rather than overridden. Only instance methods are overridden, and they require the same signature and return type.",
          "ms": "Kuliah menegaskan bahawa kaedah static boleh diwarisi tetapi tidak boleh digantikan; jika subkelas mentakrif semula kaedah static superkelas, versi superkelas hanya disembunyikan dan bukan digantikan. Hanya kaedah instans yang digantikan, dan ia memerlukan tandatangan serta jenis pulangan yang sama."
        },
        "diff": 2,
        "topic": {
          "zh": "static 方法的隐藏",
          "en": "Hiding of static methods",
          "ms": "Penyembunyian kaedah static"
        }
      },
      {
        "id": "oop-06-q08",
        "type": "fill",
        "q": {
          "zh": "在把父类引用转换为子类类型之前，常用哪个 Java 关键字判断该对象是否为某个类的实例？______",
          "en": "Which Java keyword is commonly used to test whether an object is an instance of a class before casting a superclass reference to a subclass type? ______",
          "ms": "Kata kunci Java manakah yang biasa digunakan untuk menguji sama ada sesuatu objek ialah instans bagi sesuatu kelas sebelum mengacukan rujukan superkelas kepada jenis subkelas? ______"
        },
        "answer": [
          "instanceof",
          "instanceof operator",
          "pengendali instanceof",
          "instanceof 运算符",
          "实例运算符"
        ],
        "explain": {
          "zh": "instanceof 是 Java 关键字，用来测试对象是否为某个类的实例，讲义给出的安全写法是先判断再转换：if (myCircle instanceof Cylinder) { Cylinder myCylinder = (Cylinder) myCircle; }。因为 Object 不一定是 Student，直接把父类引用赋给子类变量会编译错误，必须先显式转换并最好先用 instanceof 检查。",
          "en": "instanceof is a Java keyword that tests whether an object is an instance of a class, and the lecture's safe pattern checks before casting: if (myCircle instanceof Cylinder) { Cylinder myCylinder = (Cylinder) myCircle; }. Because an Object is not necessarily a Student, assigning a superclass reference directly to a subclass variable is a compilation error, so an explicit cast is required and an instanceof check is recommended first.",
          "ms": "instanceof ialah kata kunci Java yang menguji sama ada objek ialah instans bagi sesuatu kelas, dan corak selamat dalam kuliah menyemak sebelum mengacukan: if (myCircle instanceof Cylinder) { Cylinder myCylinder = (Cylinder) myCircle; }. Kerana Object tidak semestinya Student, menetapkan rujukan superkelas terus kepada pemboleh ubah subkelas ialah ralat kompilasi, jadi pengacuan tersurat diperlukan dan semakan instanceof digalakkan terlebih dahulu."
        },
        "diff": 2,
        "topic": {
          "zh": "instanceof 运算符",
          "en": "The instanceof operator",
          "ms": "Pengendali instanceof"
        }
      }
    ],
    "oop-07": [
      {
        "id": "oop-07-q01",
        "type": "mcq",
        "q": {
          "zh": "已知 abstract class GeometricObject 和 class Circle extends GeometricObject。下列哪条语句可以编译通过？",
          "en": "Given abstract class GeometricObject and class Circle extends GeometricObject, which statement compiles?",
          "ms": "Diberi abstract class GeometricObject dan class Circle extends GeometricObject, pernyataan manakah boleh dikompil?"
        },
        "opts": [
          {
            "zh": "GeometricObject g = new GeometricObject();",
            "en": "GeometricObject g = new GeometricObject();",
            "ms": "GeometricObject g = new GeometricObject();"
          },
          {
            "zh": "GeometricObject g = new Circle();",
            "en": "GeometricObject g = new Circle();",
            "ms": "GeometricObject g = new Circle();"
          },
          {
            "zh": "Circle c = new GeometricObject();",
            "en": "Circle c = new GeometricObject();",
            "ms": "Circle c = new GeometricObject();"
          },
          {
            "zh": "GeometricObject g = new GeometricObject(5.0);",
            "en": "GeometricObject g = new GeometricObject(5.0);",
            "ms": "GeometricObject g = new GeometricObject(5.0);"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "抽象类不能用 new 实例化，但可以作为数据类型，因此可以用父类类型的变量引用子类对象，GeometricObject g = new Circle(); 合法。选项 0 和 3 直接 new 抽象类，选项 2 把父类对象赋给子类变量却没有显式转换，三者都会编译失败。",
          "en": "An abstract class cannot be instantiated with new, but it can be used as a data type, so a variable of the superclass type may refer to a subclass object, which makes GeometricObject g = new Circle(); legal. Options 0 and 3 instantiate the abstract class directly, and option 2 assigns a superclass object to a subclass variable without an explicit cast, so all three fail to compile.",
          "ms": "Kelas abstrak tidak boleh diinstansiasi dengan new, tetapi boleh digunakan sebagai jenis data, jadi pemboleh ubah jenis superkelas boleh merujuk objek subkelas, menjadikan GeometricObject g = new Circle(); sah. Pilihan 0 dan 3 menginstansiasi kelas abstrak secara terus, dan pilihan 2 menetapkan objek superkelas kepada pemboleh ubah subkelas tanpa pengacuan tersurat, jadi ketiga-tiganya gagal dikompil."
        },
        "diff": 2,
        "topic": {
          "zh": "抽象类的实例化限制",
          "en": "Instantiation of abstract classes",
          "ms": "Instansiasi kelas abstrak"
        }
      },
      {
        "id": "oop-07-q02",
        "type": "mcq",
        "q": {
          "zh": "关于抽象类，下列哪项正确？",
          "en": "Which statement about abstract classes is correct?",
          "ms": "Pernyataan manakah tentang kelas abstrak yang betul?"
        },
        "opts": [
          {
            "zh": "抽象类不能有构造方法",
            "en": "An abstract class cannot have constructors",
            "ms": "Kelas abstrak tidak boleh mempunyai pembina"
          },
          {
            "zh": "抽象类的构造方法可以在其子类的构造方法中被调用",
            "en": "An abstract class's constructors can be invoked in the constructors of its subclasses",
            "ms": "Pembina kelas abstrak boleh dipanggil dalam pembina subkelasnya"
          },
          {
            "zh": "抽象类中的所有方法都必须是抽象方法",
            "en": "All methods in an abstract class must be abstract",
            "ms": "Semua kaedah dalam kelas abstrak mesti abstrak"
          },
          {
            "zh": "只要不调用抽象方法，就可以用 new 创建抽象类的对象",
            "en": "As long as no abstract method is called, an abstract class can be instantiated with new",
            "ms": "Selagi tiada kaedah abstrak dipanggil, kelas abstrak boleh diinstansiasi dengan new"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义说明抽象类不能用 new 实例化，但它的构造方法可以在子类的构造方法中被调用，用来初始化从父类继承的部分；抽象类也可以有具体方法和数据字段。因此“不能有构造方法”“所有方法都必须抽象”“可以不调用抽象方法就 new”都不符合讲义。",
          "en": "The lecture says an abstract class cannot be instantiated with new, but its constructors can be invoked in the constructors of its subclasses to initialize the inherited part; it may also contain concrete methods and data fields. Statements that it cannot have constructors, that all its methods must be abstract, or that it can be instantiated as long as no abstract method is called all contradict the lecture.",
          "ms": "Kuliah menyatakan kelas abstrak tidak boleh diinstansiasi dengan new, tetapi pembinanya boleh dipanggil dalam pembina subkelas untuk menginisialisasi bahagian yang diwarisi; ia juga boleh mengandungi kaedah konkrit dan medan data. Pernyataan bahawa ia tidak boleh mempunyai pembina, semua kaedahnya mesti abstrak, atau ia boleh diinstansiasi asalkan tiada kaedah abstrak dipanggil, semuanya bercanggah dengan kuliah."
        },
        "diff": 2,
        "topic": {
          "zh": "抽象类的构造方法与成员",
          "en": "Constructors and members of abstract classes",
          "ms": "Pembina dan ahli kelas abstrak"
        }
      },
      {
        "id": "oop-07-q03",
        "type": "mcq",
        "q": {
          "zh": "在接口中写 int K = 1;，这个字段实际隐含的修饰符是什么？",
          "en": "When int K = 1; is written in an interface, which modifiers does this field implicitly have?",
          "ms": "Apabila int K = 1; ditulis dalam antara muka, pengubah suai manakah yang tersirat pada medan ini?"
        },
        "opts": [
          {
            "zh": "private final",
            "en": "private final",
            "ms": "private final"
          },
          {
            "zh": "public static final",
            "en": "public static final",
            "ms": "public static final"
          },
          {
            "zh": "protected static",
            "en": "protected static",
            "ms": "protected static"
          },
          {
            "zh": "public static，但不是 final",
            "en": "public static, but not final",
            "ms": "public static, tetapi bukan final"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义指出接口中的所有数据字段都是 public static final，也就是常量；因为这些修饰符总是相同，所以可以省略不写。接口字段因此必须初始化且不能修改，private、protected 或“不是 final”都不符合这一规则。",
          "en": "The lecture states that all data fields in an interface are public static final, that is constants; because the modifiers are always the same they may be omitted. Interface fields must therefore be initialized and cannot be changed, so private, protected or not-final alternatives all violate the rule.",
          "ms": "Kuliah menyatakan semua medan data dalam antara muka ialah public static final, iaitu pemalar; kerana pengubah suai itu sentiasa sama, ia boleh ditinggalkan. Medan antara muka mesti diinisialisasi dan tidak boleh diubah, jadi pilihan private, protected atau bukan final semuanya melanggar peraturan itu."
        },
        "diff": 2,
        "topic": {
          "zh": "接口中的常量",
          "en": "Constants in interfaces",
          "ms": "Pemalar dalam antara muka"
        }
      },
      {
        "id": "oop-07-q04",
        "type": "mcq",
        "q": {
          "zh": "讲义 TestEdible 的数组为 {new Tiger(), new Chicken(), new Apple()}，showObject 只在 object instanceof Edible 时输出 howToEat() 的结果。程序输出什么？",
          "en": "The TestEdible array in the lecture is {new Tiger(), new Chicken(), new Apple()}, and showObject prints the result of howToEat() only when object instanceof Edible. What does the program output?",
          "ms": "Tatasusunan TestEdible dalam kuliah ialah {new Tiger(), new Chicken(), new Apple()}, dan showObject mencetak hasil howToEat() hanya apabila object instanceof Edible. Apakah keluaran atur cara?"
        },
        "opts": [
          {
            "zh": "Fry it，然后 Make apple cider",
            "en": "Fry it, then Make apple cider",
            "ms": "Fry it, kemudian Make apple cider"
          },
          {
            "zh": "Fry it、Eat it fresh、Make apple cider",
            "en": "Fry it, Eat it fresh, then Make apple cider",
            "ms": "Fry it, Eat it fresh, kemudian Make apple cider"
          },
          {
            "zh": "Make apple cider，然后 Fry it",
            "en": "Make apple cider, then Fry it",
            "ms": "Make apple cider, kemudian Fry it"
          },
          {
            "zh": "程序不输出任何内容",
            "en": "The program prints nothing",
            "ms": "Atur cara tidak mencetak apa-apa"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "Tiger 没有实现 Edible，被 instanceof 判断跳过；Chicken 实现 Edible 并返回 Fry it；Apple 继承 Fruit 并重写了 howToEat()，返回 Make apple cider，因此不会输出父类的 Eat it fresh。数组顺序是 Tiger、Chicken、Apple，所以输出顺序是 Fry it 之后 Make apple cider。",
          "en": "Tiger does not implement Edible, so the instanceof test skips it; Chicken implements Edible and returns Fry it; Apple extends Fruit and overrides howToEat() to return Make apple cider, so the parent's Eat it fresh is not printed. The array order is Tiger, Chicken, Apple, so the output is Fry it followed by Make apple cider.",
          "ms": "Tiger tidak melaksanakan Edible, jadi ujian instanceof melangkaunya; Chicken melaksanakan Edible dan mengembalikan Fry it; Apple mewarisi Fruit dan menggantikan howToEat() untuk mengembalikan Make apple cider, jadi Eat it fresh daripada kelas induk tidak dicetak. Susunan tatasusunan ialah Tiger, Chicken, Apple, jadi keluarannya Fry it diikuti Make apple cider."
        },
        "diff": 3,
        "topic": {
          "zh": "Edible 接口与 instanceof",
          "en": "The Edible interface and instanceof",
          "ms": "Antara muka Edible dan instanceof"
        }
      },
      {
        "id": "oop-07-q05",
        "type": "mcq",
        "q": {
          "zh": "按讲义对接口与抽象类的对比，下列哪项正确？",
          "en": "According to the lecture's comparison of interfaces and abstract classes, which statement is correct?",
          "ms": "Menurut perbandingan antara muka dan kelas abstrak dalam kuliah, pernyataan manakah yang betul?"
        },
        "opts": [
          {
            "zh": "一个类可以实现多个接口，但只能继承一个抽象类",
            "en": "A class can implement several interfaces but can extend only one abstract class",
            "ms": "Satu kelas boleh melaksanakan beberapa antara muka tetapi hanya boleh mewarisi satu kelas abstrak"
          },
          {
            "zh": "一个类可以继承多个抽象类，但只能实现一个接口",
            "en": "A class can extend several abstract classes but can implement only one interface",
            "ms": "Satu kelas boleh mewarisi beberapa kelas abstrak tetapi hanya boleh melaksanakan satu antara muka"
          },
          {
            "zh": "接口和抽象类都可以用 new 直接实例化",
            "en": "Both interfaces and abstract classes can be instantiated directly with new",
            "ms": "Kedua-dua antara muka dan kelas abstrak boleh diinstansiasi terus dengan new"
          },
          {
            "zh": "接口可以包含实例变量，抽象类只能包含常量",
            "en": "An interface can contain instance variables, while an abstract class can contain only constants",
            "ms": "Antara muka boleh mengandungi pemboleh ubah instans, manakala kelas abstrak hanya boleh mengandungi pemalar"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义明确对比：一个类可以实现多个接口（例如 implements Edible, Flyer），但只能 extend 一个抽象类；接口和抽象类都不能用 new 实例化。变量方面恰好相反：接口只有常量，抽象类可以有各种实例变量，所以后三个选项都错误。",
          "en": "The lecture contrasts them clearly: a class may implement multiple interfaces (for example implements Edible, Flyer) but may extend only one abstract class, and neither interfaces nor abstract classes can be instantiated with new. The variable rule is the opposite of option 3: an interface has only constants, while an abstract class can have instance variables, so the other three options are wrong.",
          "ms": "Kuliah membandingkannya dengan jelas: satu kelas boleh melaksanakan beberapa antara muka (contohnya implements Edible, Flyer) tetapi hanya boleh extend satu kelas abstrak, dan kedua-dua antara muka serta kelas abstrak tidak boleh diinstansiasi dengan new. Peraturan pemboleh ubah adalah sebaliknya: antara muka hanya mempunyai pemalar, manakala kelas abstrak boleh mempunyai pemboleh ubah instans, jadi tiga pilihan lain salah."
        },
        "diff": 2,
        "topic": {
          "zh": "接口与抽象类的区别",
          "en": "Interface versus abstract class",
          "ms": "Antara muka berbanding kelas abstrak"
        }
      },
      {
        "id": "oop-07-q06",
        "type": "multi",
        "q": {
          "zh": "关于类实现接口，下列哪些说法符合讲义？（多选）",
          "en": "Which statements about a class implementing an interface match the lecture? (Select all that apply)",
          "ms": "Pernyataan manakah tentang kelas yang melaksanakan antara muka yang menepati kuliah? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "类用 implements 关键字实现接口",
            "en": "A class implements an interface with the implements keyword",
            "ms": "Kelas melaksanakan antara muka dengan kata kunci implements"
          },
          {
            "zh": "具体类实现接口时必须实现接口中声明的抽象方法",
            "en": "A concrete class that implements an interface must implement the abstract methods declared in it",
            "ms": "Kelas konkrit yang melaksanakan antara muka mesti melaksanakan kaedah abstrak yang diisytiharkan di dalamnya"
          },
          {
            "zh": "只要 Student 实现了 Comparable，Comparable ob = new Student(); 就是合法的",
            "en": "Comparable ob = new Student(); is legal as long as Student implements Comparable",
            "ms": "Comparable ob = new Student(); ialah sah asalkan Student melaksanakan Comparable"
          },
          {
            "zh": "Comparable ob = new Comparable(); 是合法的",
            "en": "Comparable ob = new Comparable(); is legal",
            "ms": "Comparable ob = new Comparable(); ialah sah"
          },
          {
            "zh": "一个类最多只能实现一个接口",
            "en": "A class can implement at most one interface",
            "ms": "Satu kelas hanya boleh melaksanakan paling banyak satu antara muka"
          }
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": {
          "zh": "讲义用 class Dog implements Animal 说明 implements 的用法，并要求实现类提供接口中所有方法；接口类型的变量可以引用实现该接口的类的实例，所以 Comparable ob = new Student(); 合法。接口不能用 new 实例化，而且一个类可以实现多个接口（这正是 Java 实现多重继承效果的方式），因此后两项错误。",
          "en": "The lecture uses class Dog implements Animal to show the implements keyword and requires the implementing class to provide all the interface methods; a variable of an interface type can refer to an instance of a class that implements it, so Comparable ob = new Student(); is legal. An interface cannot be instantiated with new, and a class can implement several interfaces, which is how Java achieves the effect of multiple inheritance, so the last two options are wrong.",
          "ms": "Kuliah menggunakan class Dog implements Animal untuk menunjukkan kata kunci implements dan mewajibkan kelas pelaksana menyediakan semua kaedah antara muka; pemboleh ubah jenis antara muka boleh merujuk instans kelas yang melaksanakannya, jadi Comparable ob = new Student(); ialah sah. Antara muka tidak boleh diinstansiasi dengan new, dan satu kelas boleh melaksanakan beberapa antara muka, iaitu cara Java mencapai kesan pewarisan berganda, jadi dua pilihan terakhir salah."
        },
        "diff": 2,
        "topic": {
          "zh": "实现接口的规则",
          "en": "Rules for implementing interfaces",
          "ms": "Peraturan melaksanakan antara muka"
        }
      },
      {
        "id": "oop-07-q07",
        "type": "tf",
        "q": {
          "zh": "接口没有单一的根，接口不继承 Object 类；但实现接口的类的对象仍然是 Object 的实例。",
          "en": "Interfaces have no single root and do not inherit from the Object class, yet an object of a class that implements an interface is still an instance of Object.",
          "ms": "Antara muka tiada akar tunggal dan tidak mewarisi kelas Object, tetapi objek kelas yang melaksanakan antara muka itu masih merupakan instans Object."
        },
        "answer": true,
        "explain": {
          "zh": "讲义对比指出：所有类共享唯一的根 Object，但接口没有单一的根，也不继承 Object；同时，如果 c 是 Class2 的实例，它同时也是 Object、Class1 以及各个接口的实例。两句话并不矛盾：接口本身不在类的继承树中，而实现接口的类的对象仍然是 Object 的子类实例。",
          "en": "The lecture notes that all classes share the single root Object, whereas interfaces have no single root and do not inherit Object; at the same time, if c is an instance of Class2 it is also an instance of Object, Class1 and the various interfaces. The two ideas are consistent: an interface is not part of the class inheritance tree, but an object of a class that implements it is still an instance of a subclass of Object.",
          "ms": "Kuliah menyatakan semua kelas berkongsi akar tunggal Object, manakala antara muka tiada akar tunggal dan tidak mewarisi Object; pada masa yang sama, jika c ialah instans Class2, ia juga instans Object, Class1 dan pelbagai antara muka. Kedua-dua idea ini konsisten: antara muka bukan sebahagian daripada pokok pewarisan kelas, tetapi objek kelas yang melaksanakannya masih instans subkelas Object."
        },
        "diff": 3,
        "topic": {
          "zh": "接口与 Object 根类",
          "en": "Interfaces and the Object root",
          "ms": "Antara muka dan akar Object"
        }
      },
      {
        "id": "oop-07-q08",
        "type": "fill",
        "q": {
          "zh": "只有方法签名、没有方法体的方法称为 ______ 方法。",
          "en": "A method that has only a signature and no body is called a(n) ______ method.",
          "ms": "Kaedah yang hanya mempunyai tandatangan dan tiada badan dipanggil kaedah ______."
        },
        "answer": [
          "abstract",
          "abstract method",
          "kaedah abstrak",
          "抽象",
          "abstrak"
        ],
        "explain": {
          "zh": "讲义把没有实现、连大括号都没有的方法称为抽象方法，每个子类都必须提供自己的版本；只要类中含有抽象方法，该类就必须声明为抽象类。抽象方法只规定“做什么”，具体实现留给子类，这也是抽象类不能被实例化的原因之一。",
          "en": "The lecture calls a method with no implementation, not even braces, an abstract method, and every subclass must provide its own version; a class that contains abstract methods must itself be declared abstract. An abstract method states only what is to be done and leaves the implementation to subclasses, which is one reason an abstract class cannot be instantiated.",
          "ms": "Kuliah memanggil kaedah tanpa pelaksanaan, bukan kurungan kurawal pun tidak, sebagai kaedah abstrak, dan setiap subkelas mesti menyediakan versinya sendiri; kelas yang mengandungi kaedah abstrak mesti diisytiharkan abstrak. Kaedah abstrak hanya menyatakan apa yang perlu dilakukan dan menyerahkan pelaksanaan kepada subkelas, iaitu salah satu sebab kelas abstrak tidak boleh diinstansiasi."
        },
        "diff": 1,
        "topic": {
          "zh": "抽象方法",
          "en": "Abstract methods",
          "ms": "Kaedah abstrak"
        }
      }
    ],
    "oop-08": [
      {
        "id": "oop-08-q01",
        "type": "mcq",
        "q": {
          "zh": "讲义列出的 Java 并行编程常用库或框架是哪一组？",
          "en": "Which pair of libraries or frameworks for parallel programming in Java does the lecture list?",
          "ms": "Pasangan pustaka atau rangka kerja pengaturcaraan selari dalam Java yang manakah disenaraikan dalam kuliah?"
        },
        "opts": [
          {
            "zh": "OpenMP 与 MPI",
            "en": "OpenMP and MPI",
            "ms": "OpenMP dan MPI"
          },
          {
            "zh": "java.util.concurrent 与 ForkJoin 框架",
            "en": "java.util.concurrent and the ForkJoin framework",
            "ms": "java.util.concurrent dan rangka kerja ForkJoin"
          },
          {
            "zh": "multiprocessing 与 threading",
            "en": "multiprocessing and threading",
            "ms": "multiprocessing dan threading"
          },
          {
            "zh": "Task Parallel Library (TPL)",
            "en": "Task Parallel Library (TPL)",
            "ms": "Task Parallel Library (TPL)"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义按语言列出并行编程工具：C/C++ 用 OpenMP、MPI、CUDA，Java 用 java.util.concurrent 和 ForkJoin 框架，Python 用 multiprocessing、threading、concurrent.futures，C# 用 Task Parallel Library。因此只有选项 1 对应 Java，其余分别是 C/C++、Python 和 C# 的工具。",
          "en": "The lecture lists parallel tools by language: C/C++ uses OpenMP, MPI and CUDA; Java uses java.util.concurrent and the ForkJoin framework; Python uses multiprocessing, threading and concurrent.futures; and C# uses the Task Parallel Library. Only option 1 belongs to Java, while the others are the C/C++, Python and C# tools.",
          "ms": "Kuliah menyenaraikan alat selari mengikut bahasa: C/C++ menggunakan OpenMP, MPI dan CUDA; Java menggunakan java.util.concurrent dan rangka kerja ForkJoin; Python menggunakan multiprocessing, threading dan concurrent.futures; dan C# menggunakan Task Parallel Library. Hanya pilihan 1 milik Java, manakala yang lain ialah alat C/C++, Python dan C#."
        },
        "diff": 1,
        "topic": {
          "zh": "各语言的并行库",
          "en": "Parallel libraries by language",
          "ms": "Pustaka selari mengikut bahasa"
        }
      },
      {
        "id": "oop-08-q02",
        "type": "mcq",
        "q": {
          "zh": "讲义举例说，某任务在单个处理器上需要 10 小时。若该任务能平均分割，使用 10 个处理器约需多久？",
          "en": "The lecture gives an example in which a task takes 10 hours on a single processor. If the task can be divided equally, about how long does it take with 10 processors?",
          "ms": "Kuliah memberikan contoh bahawa sesuatu tugas mengambil masa 10 jam pada satu pemproses. Jika tugas itu boleh dibahagi sama rata, kira-kira berapa lama masa yang diambil dengan 10 pemproses?"
        },
        "opts": [
          {
            "zh": "约 1 小时",
            "en": "About 1 hour",
            "ms": "Kira-kira 1 jam"
          },
          {
            "zh": "约 10 小时",
            "en": "About 10 hours",
            "ms": "Kira-kira 10 jam"
          },
          {
            "zh": "约 100 小时",
            "en": "About 100 hours",
            "ms": "Kira-kira 100 jam"
          },
          {
            "zh": "约 0.1 小时",
            "en": "About 0.1 hour",
            "ms": "Kira-kira 0.1 jam"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义用 10 小时除以 10 个处理器说明加速效果，前提是任务可以被平均分割，得到约 1 小时。10 小时是没有并行时的原时间，100 小时和 0.1 小时都不是把工作量平均分给 10 个处理器的结果。",
          "en": "The lecture divides 10 hours by 10 processors to illustrate speedup, assuming the task can be divided equally, which gives about 1 hour. 10 hours is the original sequential time, and neither 100 hours nor 0.1 hour results from splitting the work equally across 10 processors.",
          "ms": "Kuliah membahagikan 10 jam dengan 10 pemproses untuk menggambarkan peningkatan kelajuan, dengan andaian tugas boleh dibahagi sama rata, menghasilkan kira-kira 1 jam. 10 jam ialah masa asal tanpa keselarian, dan sama ada 100 jam atau 0.1 jam bukan hasil pembahagian kerja secara sama rata kepada 10 pemproses."
        },
        "diff": 1,
        "topic": {
          "zh": "并行加速的估算",
          "en": "Estimating parallel speedup",
          "ms": "Anggaran peningkatan kelajuan selari"
        }
      },
      {
        "id": "oop-08-q03",
        "type": "mcq",
        "q": {
          "zh": "讲义列出并行编程的若干挑战。下列哪一项是其中之一？",
          "en": "The lecture lists several challenges of parallel programming. Which of the following is one of them?",
          "ms": "Kuliah menyenaraikan beberapa cabaran pengaturcaraan selari. Yang manakah antara berikut merupakan salah satu daripadanya?"
        },
        "opts": [
          {
            "zh": "并行程序在只有一个处理器核心的机器上无法运行",
            "en": "A parallel program cannot run on a machine with only one processor core",
            "ms": "Atur cara selari tidak boleh berjalan pada mesin yang hanya mempunyai satu teras pemproses"
          },
          {
            "zh": "任务之间可能需要共享结果，必须小心管理",
            "en": "Tasks may need to share results, which must be managed carefully",
            "ms": "Tugas mungkin perlu berkongsi hasil, yang mesti diurus dengan teliti"
          },
          {
            "zh": "并行程序的设计难度与顺序程序完全相同",
            "en": "Designing a parallel program is exactly as easy as designing a sequential one",
            "ms": "Mereka bentuk atur cara selari sama mudahnya dengan atur cara berjujukan"
          },
          {
            "zh": "只要处理器足够多，任何问题都能获得线性加速",
            "en": "With enough processors, any problem achieves linear speedup",
            "ms": "Dengan pemproses yang cukup, mana-mana masalah mendapat peningkatan kelajuan secara linear"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义列出的挑战包括：更难设计、任务之间需要共享结果并小心管理、有些问题无法分割因而收益很小、任务互相干扰产生的错误更难发现。选项 0、2、3 与讲义相反：并行程序仍可在单核上运行（只是没有真正的同时执行），设计并不与顺序程序同样简单，而且不可分割的问题无法靠增加处理器获得线性加速。",
          "en": "The lecture's challenges include being harder to design, the need to manage results shared between tasks, the fact that some problems cannot be divided and gain little, and bugs from tasks interfering with each other being harder to find. Options 0, 2 and 3 contradict the lecture: a parallel program can still run on a single core (without real simultaneous execution), design is not as easy as for a sequential program, and an indivisible problem cannot achieve linear speedup by adding processors.",
          "ms": "Cabaran dalam kuliah termasuk lebih sukar direka, keperluan mengurus hasil yang dikongsi antara tugas, hakikat bahawa sesetengah masalah tidak boleh dibahagi dan hanya mendapat sedikit faedah, serta pepijat akibat tugas saling mengganggu yang lebih sukar ditemui. Pilihan 0, 2 dan 3 bercanggah dengan kuliah: atur cara selari masih boleh berjalan pada satu teras (tanpa pelaksanaan serentak sebenar), reka bentuknya tidak semudah atur cara berjujukan, dan masalah yang tidak boleh dibahagi tidak mendapat peningkatan kelajuan linear dengan menambah pemproses."
        },
        "diff": 2,
        "topic": {
          "zh": "并行编程的挑战",
          "en": "Challenges of parallel programming",
          "ms": "Cabaran pengaturcaraan selari"
        }
      },
      {
        "id": "oop-08-q04",
        "type": "mcq",
        "q": {
          "zh": "天气预报系统用数千个处理器同时运行庞大的数学模型。按讲义，这属于哪一类并行编程应用？",
          "en": "A weather forecasting system runs huge mathematical models on thousands of processors at the same time. According to the lecture, which kind of parallel application is this?",
          "ms": "Sistem ramalan cuaca menjalankan model matematik yang besar pada beribu-ribu pemproses secara serentak. Menurut kuliah, ini tergolong dalam aplikasi selari yang manakah?"
        },
        "opts": [
          {
            "zh": "图像与视频处理",
            "en": "Image and video processing",
            "ms": "Pemprosesan imej dan video"
          },
          {
            "zh": "搜索引擎",
            "en": "Search engines",
            "ms": "Enjin carian"
          },
          {
            "zh": "科学模拟",
            "en": "Scientific simulations",
            "ms": "Simulasi saintifik"
          },
          {
            "zh": "大数据分析",
            "en": "Big data analytics",
            "ms": "Analitik data besar"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义把天气预报作为科学模拟（scientific simulations）的例子：它用数千个处理器同时运行庞大的数学模型。图像与视频处理的例子是 Photoshop 和 Premiere Pro，搜索引擎是 Google 和 Bing，大数据分析是 Hadoop 和 Spark。",
          "en": "The lecture uses weather forecasting as its example of scientific simulations, which run massive mathematical models on thousands of processors at once. The image and video example is Photoshop and Premiere Pro, the search engine example is Google and Bing, and the big data example is Hadoop and Spark.",
          "ms": "Kuliah menggunakan ramalan cuaca sebagai contoh simulasi saintifik, yang menjalankan model matematik besar pada beribu-ribu pemproses serentak. Contoh imej dan video ialah Photoshop dan Premiere Pro, contoh enjin carian ialah Google dan Bing, dan contoh data besar ialah Hadoop dan Spark."
        },
        "diff": 1,
        "topic": {
          "zh": "并行编程的应用",
          "en": "Applications of parallel programming",
          "ms": "Aplikasi pengaturcaraan selari"
        }
      },
      {
        "id": "oop-08-q05",
        "type": "mcq",
        "q": {
          "zh": "按讲义的顺序编程与并行编程对比表，下列哪项正确描述顺序编程？",
          "en": "According to the lecture's sequential-versus-parallel comparison table, which statement correctly describes sequential programming?",
          "ms": "Menurut jadual perbandingan pengaturcaraan berjujukan dan selari dalam kuliah, pernyataan manakah betul tentang pengaturcaraan berjujukan?"
        },
        "opts": [
          {
            "zh": "任务同时执行，使用多个处理器核心",
            "en": "Tasks run at the same time on multiple processor cores",
            "ms": "Tugas dijalankan serentak pada berbilang teras pemproses"
          },
          {
            "zh": "任务按顺序逐个执行，使用单个处理器核心，编写和理解较简单",
            "en": "Tasks run one by one in order on a single processor core, and it is simpler to write and understand",
            "ms": "Tugas dijalankan satu demi satu mengikut urutan pada satu teras pemproses, dan ia lebih mudah ditulis serta difahami"
          },
          {
            "zh": "任务按顺序执行，但对大型任务比并行更快",
            "en": "Tasks run in order, but it is faster than parallel for large tasks",
            "ms": "Tugas dijalankan mengikut urutan, tetapi lebih cepat daripada selari bagi tugas besar"
          },
          {
            "zh": "任务同时执行，但只使用一个处理器核心",
            "en": "Tasks run at the same time, but only one processor core is used",
            "ms": "Tugas dijalankan serentak, tetapi hanya satu teras pemproses digunakan"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义的对比表写明顺序编程的任务逐个按顺序执行、使用单个处理器或核心、对大型任务较慢，但编写和理解比较简单。选项 0 和 3 描述的是并行（或自相矛盾的组合），选项 2 把速度关系说反了。",
          "en": "The lecture's table says sequential programming runs tasks one by one in order, uses a single processor or core, is slower for large or complex work, but is simple to write and understand. Options 0 and 3 describe parallel execution or a contradictory mix, and option 2 reverses the speed comparison.",
          "ms": "Jadual kuliah menyatakan pengaturcaraan berjujukan menjalankan tugas satu demi satu mengikut urutan, menggunakan satu pemproses atau teras, lebih perlahan bagi kerja besar atau kompleks, tetapi mudah ditulis dan difahami. Pilihan 0 dan 3 menerangkan pelaksanaan selari atau gabungan yang bercanggah, dan pilihan 2 membalikkan perbandingan kelajuan."
        },
        "diff": 1,
        "topic": {
          "zh": "顺序与并行的对比",
          "en": "Sequential versus parallel",
          "ms": "Berjujukan berbanding selari"
        }
      },
      {
        "id": "oop-08-q06",
        "type": "multi",
        "q": {
          "zh": "讲义给出使用并行编程的哪些理由？（多选）",
          "en": "Which reasons for using parallel programming does the lecture give? (Select all that apply)",
          "ms": "Apakah alasan menggunakan pengaturcaraan selari yang diberikan dalam kuliah? (Pilih semua yang berkenaan)"
        },
        "opts": [
          {
            "zh": "提高速度与效率",
            "en": "Increased speed and efficiency",
            "ms": "Peningkatan kelajuan dan kecekapan"
          },
          {
            "zh": "解决单处理器难以处理的复杂问题",
            "en": "Solving complex problems that a single processor cannot handle",
            "ms": "Menyelesaikan masalah kompleks yang tidak dapat ditangani satu pemproses"
          },
          {
            "zh": "高效利用多核硬件资源",
            "en": "Efficient utilisation of multi-core hardware resources",
            "ms": "Penggunaan cekap sumber perkakasan berbilang teras"
          },
          {
            "zh": "可扩展性，通过增加处理单元处理更大工作负载",
            "en": "Scalability by distributing the workload across more processing units",
            "ms": "Kebolehlanjutan dengan mengagihkan beban kerja kepada lebih banyak unit pemprosesan"
          },
          {
            "zh": "减少程序源代码的行数",
            "en": "Reducing the number of lines of source code",
            "ms": "Mengurangkan bilangan baris kod sumber"
          }
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "explain": {
          "zh": "讲义列出的四个理由是：提高速度与效率、解决复杂问题、高效利用资源、可扩展性。并行编程通常需要拆分任务和协调共享数据，反而使代码更复杂，并不会以减少代码行数为目的，所以最后一项不是讲义给出的理由。",
          "en": "The lecture gives four reasons: increased speed and efficiency, solving complex problems, efficient resource utilisation and scalability. Parallel programming usually requires splitting tasks and coordinating shared data, which makes code more complex, so reducing lines of code is not one of the lecture's reasons.",
          "ms": "Kuliah memberikan empat alasan: peningkatan kelajuan dan kecekapan, menyelesaikan masalah kompleks, penggunaan sumber yang cekap dan kebolehlanjutan. Pengaturcaraan selari biasanya memerlukan pemecahan tugas dan penyelarasan data dikongsi, yang menjadikan kod lebih kompleks, jadi mengurangkan baris kod bukan salah satu alasan dalam kuliah."
        },
        "diff": 1,
        "topic": {
          "zh": "使用并行的理由",
          "en": "Reasons for parallelism",
          "ms": "Alasan keselarian"
        }
      },
      {
        "id": "oop-08-q07",
        "type": "tf",
        "q": {
          "zh": "并行程序不一定总比顺序程序快，因为有些问题无法拆分，几乎得不到加速。",
          "en": "A parallel program is not always faster than a sequential one, because some problems cannot be divided and gain little speedup.",
          "ms": "Atur cara selari tidak semestinya sentiasa lebih cepat daripada atur cara berjujukan, kerana sesetengah masalah tidak boleh dibahagikan dan hampir tidak mendapat peningkatan kelajuan."
        },
        "answer": true,
        "explain": {
          "zh": "讲义在挑战部分明确指出：有些问题无法拆分，因此从并行中获益很小；并行还需要正确拆分工作并管理任务间共享的结果，这些都有额外开销。因此不能说并行程序一定更快，这一陈述正确。",
          "en": "In its challenges section the lecture states clearly that some problems cannot be divided and therefore gain little from parallelism, and that parallel code needs correct partitioning and careful management of shared results, which add overhead. It is therefore wrong to claim that a parallel program is always faster, so the statement is true.",
          "ms": "Dalam bahagian cabaran, kuliah menyatakan dengan jelas bahawa sesetengah masalah tidak boleh dibahagikan dan oleh itu hanya mendapat sedikit faedah daripada keselarian, dan kod selari memerlukan pemecahan yang betul serta pengurusan hasil dikongsi yang teliti, yang menambah overhed. Oleh itu adalah salah untuk mendakwa atur cara selari sentiasa lebih cepat, jadi pernyataan ini benar."
        },
        "diff": 2,
        "topic": {
          "zh": "并行并非总是更快",
          "en": "Parallelism is not always faster",
          "ms": "Keselarian tidak sentiasa lebih cepat"
        }
      },
      {
        "id": "oop-08-q08",
        "type": "fill",
        "q": {
          "zh": "Java 的 java.util.concurrent 中，用于把任务拆分并行执行再合并结果的框架是 ______ 框架。",
          "en": "In Java's java.util.concurrent, the framework that splits a task, runs the parts in parallel and combines the results is the ______ framework.",
          "ms": "Dalam java.util.concurrent bagi Java, rangka kerja yang memecahkan tugas, menjalankan bahagiannya secara selari dan menggabungkan hasilnya ialah rangka kerja ______."
        },
        "answer": [
          "ForkJoin",
          "Fork-Join",
          "Fork/Join",
          "rangka kerja ForkJoin",
          "ForkJoin framework"
        ],
        "explain": {
          "zh": "讲义在列举 Java 并行工具时给出 java.util.concurrent 和 ForkJoin 框架，后者负责把任务拆分、并行执行并合并结果。OpenMP、MPI、CUDA 属于 C/C++，TPL 属于 C#，都不是 Java 的框架。",
          "en": "When listing Java's parallel tools the lecture gives java.util.concurrent and the ForkJoin framework, which splits a task, executes the parts in parallel and combines the results. OpenMP, MPI and CUDA belong to C/C++, and TPL belongs to C#, so none of them is the Java framework.",
          "ms": "Semasa menyenaraikan alat selari Java, kuliah memberikan java.util.concurrent dan rangka kerja ForkJoin, yang memecahkan tugas, melaksanakan bahagiannya secara selari dan menggabungkan hasilnya. OpenMP, MPI dan CUDA milik C/C++, dan TPL milik C#, jadi tiada satu pun daripadanya rangka kerja Java."
        },
        "diff": 1,
        "topic": {
          "zh": "ForkJoin 框架",
          "en": "ForkJoin framework",
          "ms": "Rangka kerja ForkJoin"
        }
      }
    ]
  }
};
