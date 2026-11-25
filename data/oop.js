window.CN_DATA = window.CN_DATA || {};
window.CN_DATA["oop"] = {
  id: "oop",
  code: "DSPD 2623",
  name: {
    zh: "面向对象程序设计（Java 与 UML）",
    en: "Object-Oriented Programming (Java & UML)",
    ms: "Pengaturcaraan Berorientasikan Objek (Java & UML)"
  },
  desc: {
    zh: "本课程以 Java 语言和 UML 建模为主线，讲解面向对象分析与设计、类与对象、字符串、继承与多态、抽象类与接口，以及并行编程入门；适合作为学习 Java 面向对象编程的第一门课。",
    en: "This course teaches object-oriented analysis and design, classes and objects, strings, inheritance and polymorphism, abstract classes and interfaces, and an introduction to parallel programming, using Java and UML; it is designed as a first course in object-oriented programming with Java.",
    ms: "Kursus ini mengajarkan analisis dan reka bentuk berorientasikan objek, kelas dan objek, rentetan aksara, pewarisan dan polimorfisme, kelas abstrak dan antara muka, serta pengenalan kepada pengaturcaraan selari dengan menggunakan Java dan UML; kursus ini direka sebagai kursus pertama dalam pengaturcaraan berorientasikan objek dengan Java."
  },
  icon: "☕",
  color: "#3f7fd6",
  chapters: [
    {
      id: "oop-01",
      num: 1,
      title: {
        zh: "面向对象分析与设计导论",
        en: "Introduction to Object-Oriented Analysis and Design",
        ms: "Pengenalan kepada Analisis dan Reka Bentuk Berorientasikan Objek"
      },
      file: "00p/SESSION 20262027_CHAPTER1.pptx",
      pages: 29,
      summary: {
        zh: "本章介绍面向对象分析与设计（OOAD）的基本思想：从对象（事物、概念或实体）的角度去分析问题并设计逻辑解决方案。讲义区分了面向对象分析（OOA，找出并描述问题域中的对象）与面向对象设计（OOD，定义软件对象以及它们如何协作满足需求），并说明面向对象程序由对象组成，对象把数据与操作组合成模块化的单元。本章还对比结构化程序设计与面向对象程序设计，并系统讲解抽象、封装、继承和多态四大原则。最后说明面向对象带来的可重用性、可靠性、可扩展性等好处。",
        en: "This chapter introduces the basic ideas of object-oriented analysis and design (OOAD): analysing a problem and developing a logical solution from the perspective of objects (things, concepts or entities). It distinguishes object-oriented analysis (OOA), which finds and describes the objects in the problem domain, from object-oriented design (OOD), which defines software objects and how they collaborate to fulfil the requirements, and explains that an object-oriented program is made up of objects that group data and operations into modular units. The chapter also contrasts structured programming with the object-oriented approach and explains the four main principles of OOP: abstraction, encapsulation, inheritance and polymorphism. It ends with the advantages of object orientation such as reusability, reliability and extensibility.",
        ms: "Bab ini memperkenalkan idea asas analisis dan reka bentuk berorientasikan objek (OOAD), iaitu menganalisis masalah dan membina penyelesaian logik dari sudut objek (benda, konsep atau entiti). Bab ini membezakan analisis berorientasikan objek (OOA) yang mencari dan menerangkan objek dalam domain masalah dengan reka bentuk berorientasikan objek (OOD) yang mentakrifkan objek perisian serta cara objek itu bekerjasama memenuhi keperluan, dan menjelaskan bahawa atur cara berorientasikan objek terdiri daripada objek yang mengumpulkan data dan operasi menjadi unit modular. Bab ini juga membandingkan pengaturcaraan berstruktur dengan pendekatan berorientasikan objek serta menerangkan empat prinsip utama OOP: pengabstrakan, enkapsulasi, pewarisan dan polimorfisme. Akhir sekali, bab ini menyenaraikan faedah pendekatan berorientasikan objek seperti kebolehgunaan semula, kebolehpercayaan dan kebolehlanjutan."
      },
      points: [
        {
          zh: "OOAD 是一个通用术语，指我们从对象（事物、概念或实体）的角度分析问题并开发逻辑解决方案的一整套想法。",
          en: "OOAD is a generic term for the ideas behind the process of analysing a problem and developing a logical solution from the perspective of objects (things, concepts or entities).",
          ms: "OOAD ialah istilah umum bagi idea di sebalik proses menganalisis sesuatu masalah dan membina penyelesaian logik dari sudut objek (benda, konsep atau entiti)."
        },
        {
          zh: "在面向对象分析（OOA）阶段，重点是找出并描述问题域中的概念或对象，例如图书馆系统中的 Book、Librarian 和 Borrower。",
          en: "During object-oriented analysis (OOA), the emphasis is on finding and describing the concepts or objects in the problem domain, such as Book, Librarian and Borrower in a library system.",
          ms: "Dalam analisis berorientasikan objek (OOA), penekanan diberikan kepada mencari dan menerangkan konsep atau objek dalam domain masalah, contohnya Book, Librarian dan Borrower dalam sistem perpustakaan."
        },
        {
          zh: "在面向对象设计（OOD）阶段，重点是定义软件对象以及它们如何协作以满足需求，例如 Book 软件对象可以有 title 属性和 getChapter 方法。",
          en: "During object-oriented design (OOD), the emphasis is on defining software objects and how they collaborate to fulfil the requirements; for example, a Book software object may have a title attribute and a getChapter method.",
          ms: "Dalam reka bentuk berorientasikan objek (OOD), penekanan diberikan kepada mentakrifkan objek perisian dan cara objek itu bekerjasama untuk memenuhi keperluan; sebagai contoh, objek perisian Book boleh mempunyai atribut title dan kaedah getChapter."
        },
        {
          zh: "面向对象程序由对象组成，它把操作和数据组合成称为对象的模块化单元，对象之间通过发送和接收消息来调用操作。",
          en: "An object-oriented program is made up of objects that group operations and data into modular units, and objects send and receive messages to invoke actions.",
          ms: "Atur cara berorientasikan objek terdiri daripada objek yang mengumpulkan operasi dan data menjadi unit modular, dan objek menghantar serta menerima mesej untuk menjalankan tindakan."
        },
        {
          zh: "每个对象都有状态（数据或属性）和行为（操作或函数）；同一类的对象拥有相同的数据项和方法，例如 Ali 和 Siti 是 Student 类中两个不同的对象。",
          en: "Every object has both state (data or attributes) and behaviour (operations or functions); objects of the same class have the same data elements and methods, so Ali and Siti are two different objects of the same Student class.",
          ms: "Setiap objek mempunyai keadaan (data atau atribut) dan tingkah laku (operasi atau fungsi); objek daripada kelas yang sama mempunyai elemen data dan kaedah yang sama, jadi Ali dan Siti ialah dua objek berbeza daripada kelas Student yang sama."
        },
        {
          zh: "结构化程序设计（如 C 和 Pascal）把程序划分为模块和函数，数据通常集中存放并被多个函数共享；面向对象方法则把数据和函数一起放进每个对象内部。",
          en: "Structured programming (for example C and Pascal) divides a program into modules and functions whose data is usually stored separately and shared, whereas the object-oriented approach keeps data and functions together inside each object.",
          ms: "Pengaturcaraan berstruktur (contohnya C dan Pascal) membahagikan atur cara kepada modul dan fungsi yang datanya biasanya disimpan berasingan dan dikongsi, manakala pendekatan berorientasikan objek menyimpan data dan fungsi bersama-sama di dalam setiap objek."
        },
        {
          zh: "面向对象程序设计有四大原则：抽象、封装、继承和多态。",
          en: "There are four main principles of object-oriented programming: abstraction, encapsulation, inheritance and polymorphism.",
          ms: "Terdapat empat prinsip utama pengaturcaraan berorientasikan objek: pengabstrakan, enkapsulasi, pewarisan dan polimorfisme."
        },
        {
          zh: "抽象关注简化的外部视图，强调“做什么”而不是“怎么做”，就像打电话时不必了解信号如何传输；封装把数据封闭在对象内部，外部不能直接访问，从而提供数据安全性，也称为数据隐藏。",
          en: "Abstraction focuses on a simplified outside view of behaviour rather than implementation (what versus how), just as you can talk on a phone without considering how the signals are transmitted, while encapsulation encloses data inside an object so that it cannot be accessed directly from outside; this provides data security and is also known as data hiding.",
          ms: "Pengabstrakan menumpukan pandangan luar yang dipermudahkan tentang tingkah laku dan bukan pelaksanaannya (apa berbanding bagaimana), seperti bercakap melalui telefon tanpa memikirkan cara isyarat dihantar, manakala enkapsulasi menyimpan data di dalam objek sehingga tidak boleh dicapai secara langsung dari luar; ini memberikan keselamatan data dan dikenali sebagai penyembunyian data."
        },
        {
          zh: "继承让我们可以创建扩展已有父类的新类，子类继承父类的属性，使类可重用、可扩展；多态则指不同对象对同一条消息作出各自的响应，即“一个接口，多种方法”，例如 getArea() 在 Triangle 和 Rectangle 中的实现不同。",
          en: "Inheritance lets you create new classes that extend existing (parent) classes and inherit their attributes, which makes classes reusable and extensible; polymorphism is the ability of different objects to respond, each in its own way, to identical messages, that is one interface with multiple methods, for example getArea() is implemented differently in Triangle and in Rectangle.",
          ms: "Pewarisan membolehkan kita mencipta kelas baharu yang mengembangkan kelas induk sedia ada dan mewarisi atributnya, sekali gus menjadikan kelas boleh diguna semula dan boleh dikembangkan; polimorfisme pula ialah keupayaan objek yang berbeza memberi respons dengan caranya sendiri terhadap mesej yang sama, iaitu satu antara muka dengan banyak kaedah, contohnya getArea() dilaksanakan secara berbeza dalam Triangle dan Rectangle."
        },
        {
          zh: "面向对象的主要优点包括可重用性（已创建的类可用于其他应用）、可靠性（重用对象已经过测试）、可扩展性、更贴近现实世界、节省开发时间与成本，以及更易于调试。",
          en: "The main advantages of object orientation are reusability (a class can be used in other applications), reliability (reused objects have already been tested), extensibility, a closer reflection of the real world, savings in development time and cost, and easier debugging.",
          ms: "Faedah utama pendekatan berorientasikan objek termasuk kebolehgunaan semula (kelas boleh digunakan dalam aplikasi lain), kebolehpercayaan (objek yang diguna semula telah diuji), kebolehlanjutan, model yang lebih menyerupai dunia sebenar, penjimatan masa dan kos pembangunan, serta penyahpepijatan yang lebih mudah."
        }
      ],
      terms: [
        {
          en: "Object",
          zh: "对象",
          ms: "Objek",
          def: {
            zh: "对象是相关变量（数据）和方法捆绑在一起的实体，用来为现实世界的事物建模，也是某个类的实例。",
            en: "An object is a bundle of related variables and methods that models a real-world thing; every object is an instance of a class.",
            ms: "Objek ialah himpunan pemboleh ubah (data) dan kaedah yang berkaitan yang memodelkan sesuatu dalam dunia sebenar; setiap objek ialah instans bagi sesuatu kelas."
          }
        },
        {
          en: "Class",
          zh: "类",
          ms: "Kelas",
          def: {
            zh: "类是对某一类对象共同的变量和方法进行定义的蓝图或模板，例如 Student 类。",
            en: "A class is a blueprint or prototype that defines the variables and methods common to all objects of a certain kind, for example the Student class.",
            ms: "Kelas ialah pelan induk atau prototaip yang mentakrifkan pemboleh ubah dan kaedah yang sama bagi semua objek dalam sesuatu jenis, contohnya kelas Student."
          }
        },
        {
          en: "Attribute",
          zh: "属性",
          ms: "Atribut",
          def: {
            zh: "属性是类中对对象的描述，也称为状态或数据，例如 Student 类的 name 和 cpa。",
            en: "An attribute is a description of an object in a class, also known as its state or data, such as name and cpa in a Student class.",
            ms: "Atribut ialah keterangan tentang objek dalam sesuatu kelas, juga dikenali sebagai keadaan atau data, contohnya name dan cpa dalam kelas Student."
          }
        },
        {
          en: "Method",
          zh: "方法",
          ms: "Kaedah",
          def: {
            zh: "方法是对象执行的操作，也称为函数或操作，例如 registerSubject() 和 calculateCPA()。",
            en: "A method is an action performed by an object, also known as a function or operation, for example registerSubject() or calculateCPA().",
            ms: "Kaedah ialah tindakan yang dilakukan oleh objek, juga dikenali sebagai fungsi atau operasi, contohnya registerSubject() atau calculateCPA()."
          }
        },
        {
          en: "Message",
          zh: "消息",
          ms: "Mesej",
          def: {
            zh: "消息是对象之间用来请求执行操作的通信方式，发送消息会调用接收对象的方法。",
            en: "A message is how objects communicate to request an action; sending a message invokes a method on the receiving object.",
            ms: "Mesej ialah cara objek berkomunikasi untuk meminta sesuatu tindakan; menghantar mesej akan memanggil kaedah pada objek penerima."
          }
        },
        {
          en: "OOAD",
          zh: "面向对象分析与设计",
          ms: "Analisis dan Reka Bentuk Berorientasikan Objek",
          def: {
            zh: "OOAD 是从对象角度分析问题并设计逻辑解决方案的通用术语，包含 OOA 与 OOD 两个阶段。",
            en: "OOAD is the generic term for analysing a problem and developing a logical solution from the perspective of objects; it covers the OOA and OOD stages.",
            ms: "OOAD ialah istilah umum bagi menganalisis masalah dan membina penyelesaian logik dari sudut objek; ia merangkumi peringkat OOA dan OOD."
          }
        },
        {
          en: "Object-Oriented Analysis (OOA)",
          zh: "面向对象分析",
          ms: "Analisis Berorientasikan Objek",
          def: {
            zh: "OOA 是找出并描述问题域中的概念或对象的阶段，例如找出 Book、Librarian、Borrower。",
            en: "OOA is the stage of finding and describing the concepts or objects in the problem domain, for example Book, Librarian and Borrower.",
            ms: "OOA ialah peringkat mencari dan menerangkan konsep atau objek dalam domain masalah, contohnya Book, Librarian dan Borrower."
          }
        },
        {
          en: "Object-Oriented Design (OOD)",
          zh: "面向对象设计",
          ms: "Reka Bentuk Berorientasikan Objek",
          def: {
            zh: "OOD 是定义软件对象以及它们如何协作满足需求的阶段，例如为 Book 定义 title 属性和 getChapter 方法。",
            en: "OOD is the stage of defining software objects and how they collaborate to fulfil the requirements, for example giving Book a title attribute and a getChapter method.",
            ms: "OOD ialah peringkat mentakrifkan objek perisian dan cara objek itu bekerjasama memenuhi keperluan, contohnya memberikan Book atribut title dan kaedah getChapter."
          }
        },
        {
          en: "Abstraction",
          zh: "抽象",
          ms: "Pengabstrakan",
          def: {
            zh: "抽象关注简化的外部行为视图，只让使用者知道做什么，而隐藏怎么做。",
            en: "Abstraction focuses on a simplified outside view of behaviour, telling the user what is done while hiding how it is done.",
            ms: "Pengabstrakan menumpukan pandangan luar yang dipermudahkan tentang tingkah laku, memberitahu pengguna apa yang dilakukan sambil menyembunyikan caranya."
          }
        },
        {
          en: "Encapsulation",
          zh: "封装",
          ms: "Enkapsulasi",
          def: {
            zh: "封装把数据封闭在对象内部，外部不能直接访问，从而保护数据，也称为数据隐藏。",
            en: "Encapsulation encloses data inside an object so that it cannot be accessed directly from outside, protecting the data; it is also known as data hiding.",
            ms: "Enkapsulasi menyimpan data di dalam objek supaya tidak boleh dicapai secara langsung dari luar, sekali gus melindungi data; ia juga dikenali sebagai penyembunyian data."
          }
        },
        {
          en: "Inheritance",
          zh: "继承",
          ms: "Pewarisan",
          def: {
            zh: "继承允许创建扩展已有类的新类，子类继承父类的属性，因此不必每次都从头写起。",
            en: "Inheritance allows new classes to be created that extend existing classes, and the descendant class inherits the attributes of the origin class instead of starting fresh.",
            ms: "Pewarisan membolehkan kelas baharu dicipta dengan mengembangkan kelas sedia ada, dan kelas keturunan mewarisi atribut kelas asal tanpa perlu bermula dari awal."
          }
        },
        {
          en: "Polymorphism",
          zh: "多态",
          ms: "Polimorfisme",
          def: {
            zh: "多态指不同对象对同一条消息作出各自的响应，即一个接口多种方法。",
            en: "Polymorphism is the ability of different objects to respond, each in its own way, to identical messages, that is one interface with multiple methods.",
            ms: "Polimorfisme ialah keupayaan objek yang berbeza memberi respons dengan caranya sendiri terhadap mesej yang sama, iaitu satu antara muka dengan banyak kaedah."
          }
        },
        {
          en: "Instance",
          zh: "实例",
          ms: "Instans",
          def: {
            zh: "实例是由类创建出来的具体对象，例如 Ali 是 Student 类的一个实例。",
            en: "An instance is a concrete object created from a class; for example, Ali is an instance of the Student class.",
            ms: "Instans ialah objek konkrit yang dicipta daripada sesuatu kelas; contohnya Ali ialah instans bagi kelas Student."
          }
        }
      ],
      diagrams: [
        {
          type: "tree",
          title: {
            zh: "面向对象程序设计的四大原则",
            en: "The Four Principles of Object-Oriented Programming",
            ms: "Empat Prinsip Pengaturcaraan Berorientasikan Objek"
          },
          root: {
            label: {
              zh: "面向对象",
              en: "Object Orientation",
              ms: "Berorientasikan Objek"
            }
          },
          branches: [
            {
              label: {
                zh: "抽象",
                en: "Abstraction",
                ms: "Pengabstrakan"
              },
              leaves: [
                {
                  label: {
                    zh: "关注做什么",
                    en: "Focus on what",
                    ms: "Fokus pada apa"
                  }
                },
                {
                  label: {
                    zh: "隐藏实现细节",
                    en: "Hide implementation details",
                    ms: "Sembunyikan butiran pelaksanaan"
                  }
                }
              ]
            },
            {
              label: {
                zh: "封装",
                en: "Encapsulation",
                ms: "Enkapsulasi"
              },
              leaves: [
                {
                  label: {
                    zh: "数据私有",
                    en: "Private data",
                    ms: "Data peribadi"
                  }
                },
                {
                  label: {
                    zh: "通过方法访问",
                    en: "Accessed through methods",
                    ms: "Dicapai melalui kaedah"
                  }
                }
              ]
            },
            {
              label: {
                zh: "继承",
                en: "Inheritance",
                ms: "Pewarisan"
              },
              leaves: [
                {
                  label: {
                    zh: "子类复用父类",
                    en: "Subclass reuses the superclass",
                    ms: "Subkelas mengguna semula superkelas"
                  }
                },
                {
                  label: {
                    zh: "使用 extends 关键字",
                    en: "Uses the extends keyword",
                    ms: "Menggunakan kata kunci extends"
                  }
                }
              ]
            },
            {
              label: {
                zh: "多态",
                en: "Polymorphism",
                ms: "Polimorfisme"
              },
              leaves: [
                {
                  label: {
                    zh: "一个接口多种方法",
                    en: "One interface, multiple methods",
                    ms: "Satu antara muka, banyak kaedah"
                  }
                },
                {
                  label: {
                    zh: "getArea() 各自实现",
                    en: "getArea() implemented differently",
                    ms: "getArea() dilaksana secara berbeza"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "四大原则是本章及后续各章的核心考点。",
            en: "These four principles are the core examinable ideas of this and later chapters.",
            ms: "Empat prinsip ini ialah idea teras yang diuji dalam bab ini dan bab seterusnya."
          }
        },
        {
          type: "compare",
          title: {
            zh: "结构化程序设计 vs 面向对象程序设计",
            en: "Structured Programming vs Object-Oriented Programming",
            ms: "Pengaturcaraan Berstruktur berbanding Pengaturcaraan Berorientasikan Objek"
          },
          cols: [
            {
              head: {
                zh: "结构化程序设计",
                en: "Structured Programming",
                ms: "Pengaturcaraan Berstruktur"
              },
              items: [
                {
                  label: {
                    zh: "数据与函数分开存放",
                    en: "Data and functions are stored separately",
                    ms: "Data dan fungsi disimpan berasingan"
                  }
                },
                {
                  label: {
                    zh: "全局数据被多个函数共享",
                    en: "Global data is shared by many functions",
                    ms: "Data global dikongsi oleh banyak fungsi"
                  }
                },
                {
                  label: {
                    zh: "程序按模块或函数划分",
                    en: "The program is divided into modules or functions",
                    ms: "Atur cara dibahagikan kepada modul atau fungsi"
                  }
                },
                {
                  label: {
                    zh: "例子：C、Pascal",
                    en: "Examples: C, Pascal",
                    ms: "Contoh: C, Pascal"
                  }
                }
              ]
            },
            {
              head: {
                zh: "面向对象程序设计",
                en: "Object-Oriented Programming",
                ms: "Pengaturcaraan Berorientasikan Objek"
              },
              items: [
                {
                  label: {
                    zh: "数据与函数放在同一个对象里",
                    en: "Data and functions live together inside an object",
                    ms: "Data dan fungsi berada bersama di dalam satu objek"
                  }
                },
                {
                  label: {
                    zh: "对象通过消息互相通信",
                    en: "Objects communicate by sending messages",
                    ms: "Objek berkomunikasi dengan menghantar mesej"
                  }
                },
                {
                  label: {
                    zh: "类是创建对象的模板",
                    en: "A class is the template for creating objects",
                    ms: "Kelas ialah pelan induk untuk mencipta objek"
                  }
                },
                {
                  label: {
                    zh: "例子：Java、C++、Smalltalk",
                    en: "Examples: Java, C++, Smalltalk",
                    ms: "Contoh: Java, C++, Smalltalk"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "讲义图 1.2：功能/数据方法对比面向对象方法。",
            en: "Figure 1.2 of the lecture: the functional/data approach versus the object-oriented approach.",
            ms: "Rajah 1.2 kuliah: pendekatan fungsi/data berbanding pendekatan berorientasikan objek."
          }
        }
      ],
      exam: [
        {
          zh: "常考：解释类与对象的区别，并要求各举三个对象的例子（如 Ali、Myvi、iPhone）。答题时要说清“类是模板，对象是由类创建的具体实例”。",
          en: "A common question asks you to explain the difference between a class and an object and to give three examples of objects (such as Ali, Myvi, iPhone). Your answer must state clearly that a class is a blueprint and an object is a concrete instance created from it.",
          ms: "Soalan biasa meminta anda menjelaskan perbezaan antara kelas dengan objek serta memberikan tiga contoh objek (seperti Ali, Myvi, iPhone). Jawapan anda mesti menyatakan dengan jelas bahawa kelas ialah pelan induk manakala objek ialah instans konkrit yang dicipta daripadanya."
        },
        {
          zh: "用 Student 与 Person 说明继承、用 getArea() 说明多态是本章的经典问答题，注意多态要提到“同一个方法名、不同的实现”。",
          en: "Explaining inheritance with Student and Person, and polymorphism with getArea(), are the classic questions of this chapter; for polymorphism remember to mention the same method name with different implementations.",
          ms: "Menjelaskan pewarisan dengan Student dan Person serta polimorfisme dengan getArea() ialah soalan klasik bab ini; bagi polimorfisme, ingat untuk menyebut nama kaedah yang sama dengan pelaksanaan yang berbeza."
        },
        {
          zh: "易错点：把抽象和封装混为一谈——抽象是隐藏实现、只露出接口，封装是保护数据不被直接访问；另外要能列出 OOP 的三大优点（可重用性、可靠性、可扩展性）。",
          en: "A common mistake is to confuse abstraction with encapsulation: abstraction hides the implementation and exposes the interface, while encapsulation protects data from direct access. Be ready to list three advantages of OOP: reusability, reliability and extensibility.",
          ms: "Kesilapan biasa ialah mengelirukan pengabstrakan dengan enkapsulasi: pengabstrakan menyembunyikan pelaksanaan dan hanya mendedahkan antara muka, manakala enkapsulasi melindungi data daripada capaian langsung. Bersedia menyenaraikan tiga faedah OOP: kebolehgunaan semula, kebolehpercayaan dan kebolehlanjutan."
        }
      ],
      mnemonic: {
        zh: "抽象露外表，封装护数据，继承传家业，多态各显神通。",
        en: "Abstraction shows the outside, encapsulation guards the data, inheritance passes the family trade on, polymorphism lets each object do it its own way.",
        ms: "Pengabstrakan menunjuk di luar, enkapsulasi menjaga data, pewarisan mewariskan kemahiran, polimorfisme membenarkan setiap objek bertindak dengan caranya."
      }
    },
    {
      id: "oop-02",
      num: 2,
      title: {
        zh: "使用 UML 进行面向对象设计",
        en: "Object-Oriented Design Using UML",
        ms: "Reka Bentuk Berorientasikan Objek Menggunakan UML"
      },
      file: "00p/SESSION 20262027_CHAPTER2 (2).pptx",
      pages: 36,
      summary: {
        zh: "本章先回顾软件开发过程的主要阶段（需求规格说明、系统分析、系统设计、实现、测试、部署与维护），再引入统一建模语言 UML：它是用于可视化、规格说明、构造和文档化软件系统的标准建模语言，但本身不是编程语言、不是 CASE 工具，也不是开发方法。讲义把 UML 模型分为静态模型（用例图、类图、包图、对象图、组件图、部署图）与动态模型（顺序图、协作图、状态图、活动图），并重点讲解用例图和类图的元素与画法。最后讲解如何发现类之间的关系：关联、泛化、聚合、组合与依赖，并给出设计类的四个步骤。",
        en: "This chapter first reviews the main stages of the software development process (requirement specification, system analysis, system design, implementation, testing, deployment and maintenance) and then introduces the Unified Modeling Language: the standard language for specifying, visualizing, constructing and documenting software systems, which is nevertheless not a programming language, not a CASE tool and not a development method. It divides UML models into static models (use case, class, package, object, component and deployment diagrams) and dynamic models (sequence, collaboration, statechart and activity diagrams), and explains the elements of use case and class diagrams in detail. Finally it shows how to discover relationships among classes, namely association, generalization, aggregation, composition and dependency, and lists the four steps of designing a class.",
        ms: "Bab ini mula-mula mengimbas peringkat utama proses pembangunan perisian (spesifikasi keperluan, analisis sistem, reka bentuk sistem, pelaksanaan, pengujian, penggunaan dan penyelenggaraan) dan kemudian memperkenalkan Bahasa Pemodelan Bersepadu (UML), iaitu bahasa piawai untuk menyatakan, memvisualkan, membina dan mendokumentasikan sistem perisian, namun UML bukan bahasa pengaturcaraan, bukan alat CASE dan bukan kaedah pembangunan. Bab ini membahagikan model UML kepada model statik (gambar rajah kes penggunaan, kelas, pakej, objek, komponen dan penggunaan) dan model dinamik (gambar rajah jujukan, kolaborasi, keadaan dan aktiviti), serta menerangkan elemen gambar rajah kes penggunaan dan gambar rajah kelas dengan terperinci. Akhir sekali, bab ini menunjukkan cara mengenal pasti hubungan antara kelas, iaitu perkaitan, pengitlakan, pengagregatan, komposisi dan kebergantungan, dan menyenaraikan empat langkah mereka bentuk kelas."
      },
      points: [
        {
          zh: "软件开发过程通常包括需求规格说明、系统分析、系统设计、实现、测试、部署与维护等阶段；例如订餐系统在分析阶段确定需要哪些信息，在设计阶段画出界面和 UML 图，在实现阶段才编写 Java 代码。",
          en: "The software development process usually includes requirement specification, system analysis, system design, implementation, testing, deployment and maintenance; for a food ordering system, analysis decides what information is needed, design draws the screens and UML diagrams, and implementation writes the Java code.",
          ms: "Proses pembangunan perisian biasanya merangkumi spesifikasi keperluan, analisis sistem, reka bentuk sistem, pelaksanaan, pengujian, penggunaan dan penyelenggaraan; bagi sistem pesanan makanan, analisis menentukan maklumat yang diperlukan, reka bentuk melukis skrin dan gambar rajah UML, dan pelaksanaan menulis kod Java."
        },
        {
          zh: "UML 的全称是统一建模语言（Unified Modeling Language），1997 年被对象管理组织（OMG）采纳为面向对象系统建模的行业标准。",
          en: "UML stands for Unified Modeling Language; it was adopted in 1997 by the Object Management Group (OMG) as the industry standard for modelling object-oriented systems.",
          ms: "UML ialah singkatan bagi Unified Modeling Language; ia diterima pakai pada tahun 1997 oleh Object Management Group (OMG) sebagai piawaian industri untuk memodelkan sistem berorientasikan objek."
        },
        {
          zh: "UML 是一种可视化语言，也是一种建模语言：它有自己的一套词汇和规则，并用一组图形表示来为系统建模，方便沟通。",
          en: "UML is a visual language and a modelling language: it has its own vocabulary and rules and models the system as a set of graphical representations for the purpose of communication.",
          ms: "UML ialah bahasa visual dan juga bahasa pemodelan: ia mempunyai kosa kata dan peraturan tersendiri serta memodelkan sistem sebagai satu set perwakilan grafik untuk tujuan komunikasi."
        },
        {
          zh: "UML 不是编程语言、不是 CASE 工具，也不是一种方法或软件开发过程；它只是一种语言，帮助我们（主要在设计阶段）为系统建模。",
          en: "UML is not a programming language, not a CASE tool, and not a method or software development process; it is only a language that helps us model the system, mainly during the design phase.",
          ms: "UML bukan bahasa pengaturcaraan, bukan alat CASE, dan bukan kaedah atau proses pembangunan perisian; ia hanya bahasa yang membantu kita memodelkan sistem, terutamanya pada fasa reka bentuk."
        },
        {
          zh: "UML 有四种用途：可视化（编码之前先看到系统）、规格说明（说明系统需要什么、可以如何实现）、构造（把模型直接映射到 Java、C++ 等编程语言）和文档化（记录需求、架构、设计、源代码、项目计划、测试、原型与发布等制品）。",
          en: "UML is used for four purposes: visualizing (seeing the system before it is realized), specifying (communicating what is required of a system and how it may be realized), constructing (mapping the model directly into a programming language such as Java or C++), and documenting the artifacts of a software-intensive system, including requirements, architecture, design, source code, project plans, tests, prototypes and releases.",
          ms: "UML digunakan untuk empat tujuan: memvisualkan (melihat sistem sebelum ia dibina), menyatakan (menyampaikan apa yang diperlukan dan bagaimana ia boleh direalisasikan), membina (memetakan model terus ke bahasa pengaturcaraan seperti Java atau C++), dan mendokumentasikan artifak sistem intensif perisian termasuk keperluan, seni bina, reka bentuk, kod sumber, pelan projek, pengujian, prototaip dan keluaran."
        },
        {
          zh: "UML 重要有四方面原因：它已成为面向对象建模事实上的行业标准；它把不同作者的方法统一成一套记法；它可以扩展应用到特定领域；它得到统一软件开发过程的支持，后者给出了应用 UML 的过程模型。",
          en: "UML is important for four reasons: it has become the de facto industry standard for object-oriented modelling, it unifies the approaches of different authors in a single notation, it can be extended to apply to specific domains, and it is supported by the Unified Software Development Process, which provides a process model for applying it.",
          ms: "UML penting atas empat sebab: ia telah menjadi piawaian industri de facto bagi pemodelan berorientasikan objek, ia menyatukan pendekatan penulis yang berbeza dalam satu notasi, ia boleh diperluas kepada domain tertentu, dan ia disokong oleh Unified Software Development Process yang menyediakan model proses penggunaannya."
        },
        {
          zh: "UML 建模分为静态模型（用例图、类图、包图、对象图、组件图、部署图）与动态模型（顺序图、协作图、状态图、活动图）；建模的理由是光靠语言不够、能更好地理解问题、帮助用户与开发人员沟通，并提前规划设计。",
          en: "UML modelling consists of static models (use case, class, package, object, component and deployment diagrams) and dynamic models (sequence, collaboration, statechart and activity diagrams); we build models because language alone is not enough, to understand the problem better, to help users and developers communicate, and to plan out the design.",
          ms: "Pemodelan UML terdiri daripada model statik (gambar rajah kes penggunaan, kelas, pakej, objek, komponen dan penggunaan) dan model dinamik (gambar rajah jujukan, kolaborasi, keadaan dan aktiviti); kita membina model kerana bahasa semata-mata tidak mencukupi, untuk memahami masalah dengan lebih baik, untuk membantu pengguna dan pembangun berkomunikasi, serta untuk merancang reka bentuk."
        },
        {
          zh: "用例图显示一组用例、参与者及其关系，用很简单的方式说明系统的主要功能以及会与系统交互的不同类型用户，通常在 SDLC 早期绘制；它的元素包括参与者（位于系统边界之外、以角色命名）、用例（用动词加名词的短语命名并放在边界内）、关联、扩展、包含和系统边界。",
          en: "A use case diagram shows a set of use cases and actors and their relationships; it illustrates at a very high level the main functions of the system and the different kinds of users that will interact with it, and it is drawn early in the SDLC. Its elements are the actor (placed outside the system boundary and labelled with its role), the use case (a major piece of functionality labelled with a descriptive verb-noun phrase and placed inside the boundary), association, extends, includes and the system boundary.",
          ms: "Gambar rajah kes penggunaan menunjukkan satu set kes penggunaan dan aktor serta hubungan antara mereka; ia menerangkan pada tahap tinggi fungsi utama sistem dan jenis pengguna yang berinteraksi dengannya, dan dilukis pada peringkat awal SDLC. Elemennya ialah aktor (di luar sempadan sistem dan dilabel dengan peranannya), kes penggunaan (bahagian fungsi utama yang dilabel dengan frasa kata kerja-nama dan diletakkan di dalam sempadan), perkaitan, extends, includes dan sempadan sistem."
        },
        {
          zh: "类图显示类以及类之间随时间保持不变的关系，与实体关系图（ERD）非常相似；一个类分为三格：类名在上、属性在中、操作在下；可见性符号为 public、private、protected 和 package，关联关系用动词短语标注并带有多重性（1 表示恰好一个，0..1 表示零或一个，星号表示多个，1..* 表示一个或多个，0..* 表示零或多个）。",
          en: "A class diagram shows the classes and the relationships among classes that remain constant in the system over time and is very similar to an entity relationship diagram (ERD); a class has its name in the top compartment, its attributes in the middle and its operations at the bottom, with visibility symbols for public, private, protected and package. An association is labelled with a verb phrase and carries multiplicities such as 1 (exactly one), 0..1 (zero or one), star (many), 1..* (one or more) and 0..* (zero or more).",
          ms: "Gambar rajah kelas menunjukkan kelas dan hubungan antara kelas yang kekal sepanjang masa dan sangat menyerupai gambar rajah hubungan entiti (ERD); sesuatu kelas mempunyai nama di petak atas, atribut di tengah dan operasi di bawah, dengan simbol kebolehlihatan bagi public, private, protected dan package. Perkaitan dilabel dengan frasa kata kerja dan membawa kepelbagaian seperti 1 (tepat satu), 0..1 (sifar atau satu), bintang (banyak), 1..* (satu atau lebih) dan 0..* (sifar atau lebih)."
        },
        {
          zh: "发现类之间关系时可以问几个问题：泛化对应“是一种”，聚合与组合对应“是一部分”或“由……组成”，其中组合表示被拥有的对象不能独立存在；关联回答“它们有联系吗”（如 Student enrolls in Course），依赖回答“只是临时使用吗”（如 Student uses Printer）；设计类的四个步骤是识别类、描述每个类的属性与方法、建立类之间的关系、创建类。",
          en: "To discover relationships among classes, ask: generalization corresponds to is kind of, aggregation and composition correspond to is part of or is made of, where composition means the owned object cannot exist separately; association asks are they connected (Student enrolls in Course) and dependency asks is it used only temporarily (Student uses Printer). The four steps of designing a class are to identify classes for the system, describe the attributes and methods in each class, establish relationships among classes, and create the classes.",
          ms: "Untuk mengenal pasti hubungan antara kelas, tanyakan: pengitlakan bersamaan sejenis, pengagregatan dan komposisi bersamaan sebahagian daripada atau diperbuat daripada, dengan komposisi bermaksud objek yang dimiliki tidak boleh wujud secara berasingan; perkaitan bertanya adakah mereka berkaitan (Student enrolls in Course) dan kebergantungan bertanya adakah ia digunakan sementara sahaja (Student uses Printer). Empat langkah mereka bentuk kelas ialah mengenal pasti kelas bagi sistem, menerangkan atribut dan kaedah setiap kelas, mewujudkan hubungan antara kelas, dan mencipta kelas tersebut."
        }
      ],
      terms: [
        {
          en: "Unified Modeling Language (UML)",
          zh: "统一建模语言",
          ms: "Bahasa Pemodelan Bersepadu (UML)",
          def: {
            zh: "UML 是 1997 年由 OMG 采纳的面向对象系统建模标准语言，用图形化方式可视化、规格说明、构造和文档化软件系统。",
            en: "UML is the standard language adopted by the OMG in 1997 for modelling object-oriented systems; it is used to visualize, specify, construct and document a software system graphically.",
            ms: "UML ialah bahasa piawai yang diterima pakai oleh OMG pada tahun 1997 untuk memodelkan sistem berorientasikan objek; ia digunakan untuk memvisualkan, menyatakan, membina dan mendokumentasikan sistem perisian secara grafik."
          }
        },
        {
          en: "Use Case Diagram",
          zh: "用例图",
          ms: "Gambar Rajah Kes Penggunaan",
          def: {
            zh: "用例图显示一组用例、参与者及其关系，用来在高层理解系统的功能，通常在 SDLC 早期绘制。",
            en: "A use case diagram shows a set of use cases, actors and their relationships, and is used to understand system functionality at a high level; it is drawn early in the SDLC.",
            ms: "Gambar rajah kes penggunaan menunjukkan satu set kes penggunaan, aktor dan hubungannya, serta digunakan untuk memahami fungsi sistem pada tahap tinggi; ia dilukis pada peringkat awal SDLC."
          }
        },
        {
          en: "Actor",
          zh: "参与者",
          ms: "Aktor",
          def: {
            zh: "参与者是与系统交互并从中获得价值的人或系统，以角色命名，画在系统边界之外，也可以与其他参与者有泛化关系。",
            en: "An actor is a person or system that interacts with and derives value from the system; it is labelled with its role, placed outside the system boundary and may be associated with other actors by generalization.",
            ms: "Aktor ialah orang atau sistem yang berinteraksi dengan sistem dan memperoleh nilai daripadanya; ia dilabel dengan peranannya, diletakkan di luar sempadan sistem dan boleh dikaitkan dengan aktor lain melalui pengitlakan."
          }
        },
        {
          en: "Use Case",
          zh: "用例",
          ms: "Kes Penggunaan",
          def: {
            zh: "用例代表系统的一大块功能，用动词加名词的短语命名，放在系统边界内，可以扩展或使用另一个用例。",
            en: "A use case represents a major piece of system functionality, is labelled with a descriptive verb-noun phrase, is placed inside the system boundary and can extend or use another use case.",
            ms: "Kes penggunaan mewakili bahagian fungsi sistem yang utama, dilabel dengan frasa kata kerja-nama, diletakkan di dalam sempadan sistem dan boleh meluaskan atau menggunakan kes penggunaan lain."
          }
        },
        {
          en: "Class Diagram",
          zh: "类图",
          ms: "Gambar Rajah Kelas",
          def: {
            zh: "类图显示类以及类之间随时间保持不变的关系，类分为类名、属性、操作三格，与 ERD 很相似。",
            en: "A class diagram shows the classes and the relationships among classes that remain constant over time; a class has three compartments for its name, attributes and operations and is very similar to an ERD.",
            ms: "Gambar rajah kelas menunjukkan kelas dan hubungan antara kelas yang kekal sepanjang masa; sesuatu kelas mempunyai tiga petak untuk nama, atribut dan operasi dan sangat menyerupai ERD."
          }
        },
        {
          en: "Association",
          zh: "关联",
          ms: "Perkaitan",
          def: {
            zh: "关联表示多个类之间（或类与自身之间）的一般二元关系，用动词短语标注，并可以带多重性。",
            en: "An association represents a general binary relationship between classes, or between a class and itself; it is labelled with a verb phrase and may carry multiplicities.",
            ms: "Perkaitan mewakili hubungan binari umum antara kelas, atau antara kelas dengan dirinya sendiri; ia dilabel dengan frasa kata kerja dan boleh membawa kepelbagaian."
          }
        },
        {
          en: "Multiplicity",
          zh: "多重性",
          ms: "Kepelbagaian",
          def: {
            zh: "多重性说明关联两端允许的最小和最大实例数，例如 1、0..1、星号、1..*、0..* 或 2..4 这样的范围。",
            en: "Multiplicity denotes the minimum and maximum number of instances that can be related through an association, for example 1, 0..1, star, 1..*, 0..* or a range such as 2..4.",
            ms: "Kepelbagaian menyatakan bilangan minimum dan maksimum instans yang boleh dikaitkan melalui sesuatu perkaitan, contohnya 1, 0..1, bintang, 1..*, 0..* atau julat seperti 2..4."
          }
        },
        {
          en: "Generalization",
          zh: "泛化（继承关系）",
          ms: "Pengitlakan",
          def: {
            zh: "泛化表示一个类（子类）继承另一个类（父类），用“是一种（is kind of）”来描述这种关系。",
            en: "Generalization shows that one class (the subclass) inherits from another class (the superclass); it is used when the relationship can be described with the words is kind of.",
            ms: "Pengitlakan menunjukkan bahawa satu kelas (subkelas) mewarisi daripada kelas lain (superkelas); ia digunakan apabila hubungan itu boleh diterangkan dengan perkataan sejenis."
          }
        },
        {
          en: "Aggregation",
          zh: "聚合",
          ms: "Pengagregatan",
          def: {
            zh: "聚合用在类实际上由其他类组成的时候，用“是一部分”或“由……组成”来描述，部分可以独立存在（如 Department has Lecturers）。",
            en: "Aggregation is used when classes actually comprise other classes, described with the words is part of or is made of; the part can exist on its own, as in Department has Lecturers.",
            ms: "Pengagregatan digunakan apabila sesuatu kelas sebenarnya terdiri daripada kelas lain, diterangkan dengan perkataan sebahagian daripada atau diperbuat daripada; bahagian itu boleh wujud sendiri, seperti Department has Lecturers."
          }
        },
        {
          en: "Composition",
          zh: "组合",
          ms: "Komposisi",
          def: {
            zh: "组合是聚合的一种特例：被拥有的对象被聚合对象独占，不能独立存在，例如 House has Rooms。",
            en: "Composition is a special case of aggregation in which an object is exclusively owned by the aggregated object and cannot exist separately, for example House has Rooms.",
            ms: "Komposisi ialah kes khas pengagregatan apabila sesuatu objek dimiliki secara eksklusif oleh objek agregat dan tidak boleh wujud secara berasingan, contohnya House has Rooms."
          }
        },
        {
          en: "Dependency",
          zh: "依赖",
          ms: "Kebergantungan",
          def: {
            zh: "依赖表示一个类只是临时使用另一个类，例如 Student uses Printer。",
            en: "Dependency means that one class uses another class only temporarily, for example Student uses Printer.",
            ms: "Kebergantungan bermaksud satu kelas menggunakan kelas lain secara sementara sahaja, contohnya Student uses Printer."
          }
        },
        {
          en: "System Boundary",
          zh: "系统边界",
          ms: "Sempadan Sistem",
          def: {
            zh: "系统边界表示系统的范围，用例画在边界内，参与者画在边界外，系统名称写在边界上或其内部。",
            en: "The system boundary represents the scope of the system: use cases are placed inside it, actors outside it, and the system name is written on or inside it.",
            ms: "Sempadan sistem mewakili skop sistem: kes penggunaan diletakkan di dalamnya, aktor di luarnya, dan nama sistem ditulis pada atau di dalam sempadan itu."
          }
        },
        {
          en: "Visibility Modifier (UML)",
          zh: "可见性修饰符",
          ms: "Pengubah Suai Kebolehlihatan",
          def: {
            zh: "类图中的可见性符号：加号表示 public（所有人可访问）、减号表示 private（仅类内）、井号表示 protected（类与子类）、波浪号表示 package（同一个包）。",
            en: "The visibility symbols in a class diagram are plus for public (accessible by everyone), minus for private (only inside the class), hash for protected (class and subclasses) and tilde for package (same package only).",
            ms: "Simbol kebolehlihatan dalam gambar rajah kelas ialah tambah bagi public (boleh dicapai semua), tolak bagi private (dalam kelas sahaja), pagar bagi protected (kelas dan subkelas) dan tilde bagi package (pakej yang sama sahaja)."
          }
        }
      ],
      diagrams: [
        {
          type: "cycle",
          title: {
            zh: "软件开发生命周期（SDLC）的主要阶段",
            en: "Main Stages of the Software Development Life Cycle",
            ms: "Peringkat Utama Kitaran Hayat Pembangunan Perisian"
          },
          steps: [
            {
              label: {
                zh: "需求规格说明",
                en: "Requirement Specification",
                ms: "Spesifikasi Keperluan"
              }
            },
            {
              label: {
                zh: "系统分析",
                en: "System Analysis",
                ms: "Analisis Sistem"
              }
            },
            {
              label: {
                zh: "系统设计（画 UML 图）",
                en: "System Design (draw UML)",
                ms: "Reka Bentuk Sistem (lukis UML)"
              }
            },
            {
              label: {
                zh: "实现（编写代码）",
                en: "Implementation (write code)",
                ms: "Pelaksanaan (tulis kod)"
              }
            },
            {
              label: {
                zh: "测试",
                en: "Testing",
                ms: "Pengujian"
              }
            },
            {
              label: {
                zh: "部署",
                en: "Deployment",
                ms: "Penggunaan"
              }
            },
            {
              label: {
                zh: "维护",
                en: "Maintenance",
                ms: "Penyelenggaraan"
              }
            }
          ],
          caption: {
            zh: "维护阶段的反馈会把过程带回需求与分析。",
            en: "Feedback from maintenance takes the process back to requirements and analysis.",
            ms: "Maklum balas daripada penyelenggaraan membawa proses kembali kepada keperluan dan analisis."
          }
        },
        {
          type: "matrix",
          title: {
            zh: "类之间五种关系的判断方法",
            en: "How to Identify the Five Relationships Among Classes",
            ms: "Cara Mengenal Pasti Lima Hubungan Antara Kelas"
          },
          cols: [
            {
              zh: "要问的问题",
              en: "Question to Ask",
              ms: "Soalan untuk Ditanya"
            },
            {
              zh: "例子",
              en: "Example",
              ms: "Contoh"
            }
          ],
          rows: [
            {
              head: {
                zh: "关联",
                en: "Association",
                ms: "Perkaitan"
              },
              cells: [
                {
                  zh: "它们有联系吗？",
                  en: "Are they connected?",
                  ms: "Adakah mereka berkaitan?"
                },
                {
                  zh: "Student 注册 Course",
                  en: "Student enrolls in Course",
                  ms: "Student mendaftar Course"
                }
              ]
            },
            {
              head: {
                zh: "继承（泛化）",
                en: "Inheritance",
                ms: "Pewarisan"
              },
              cells: [
                {
                  zh: "它是一种……吗？",
                  en: "Is it a type of ...?",
                  ms: "Adakah ia sejenis ...?"
                },
                {
                  zh: "Student 是一种 Person",
                  en: "Student is a Person",
                  ms: "Student ialah sejenis Person"
                }
              ]
            },
            {
              head: {
                zh: "聚合",
                en: "Aggregation",
                ms: "Pengagregatan"
              },
              cells: [
                {
                  zh: "是“有-a”关系，但可以独立存在吗？",
                  en: "Has-a, but can exist separately?",
                  ms: "Hubungan has-a, tetapi boleh wujud berasingan?"
                },
                {
                  zh: "Department 拥有 Lecturers",
                  en: "Department has Lecturers",
                  ms: "Department mempunyai Lecturers"
                }
              ]
            },
            {
              head: {
                zh: "组合",
                en: "Composition",
                ms: "Komposisi"
              },
              cells: [
                {
                  zh: "是“有-a”关系，且不能独立存在吗？",
                  en: "Has-a, and cannot exist separately?",
                  ms: "Hubungan has-a, dan tidak boleh wujud berasingan?"
                },
                {
                  zh: "House 拥有 Rooms",
                  en: "House has Rooms",
                  ms: "House mempunyai Rooms"
                }
              ]
            },
            {
              head: {
                zh: "依赖",
                en: "Dependency",
                ms: "Kebergantungan"
              },
              cells: [
                {
                  zh: "只是临时使用吗？",
                  en: "Uses temporarily?",
                  ms: "Digunakan sementara sahaja?"
                },
                {
                  zh: "Student 使用 Printer",
                  en: "Student uses Printer",
                  ms: "Student menggunakan Printer"
                }
              ]
            }
          ],
          legend: [
            {
              zh: "组合比聚合更强：部分不能脱离整体存在。",
              en: "Composition is stronger than aggregation: the part cannot exist without the whole.",
              ms: "Komposisi lebih kuat daripada pengagregatan: bahagian tidak boleh wujud tanpa keseluruhannya."
            }
          ]
        }
      ],
      exam: [
        {
          zh: "常考：区分用例图与类图——用例图回答“系统为谁做什么”（参与者与用例分居系统边界内外），类图回答“系统由哪些类构成、它们如何关联”（类名、属性、操作三格加上关系与多重性）。",
          en: "A typical question asks you to distinguish a use case diagram from a class diagram: the use case diagram answers who does what with the system (actors and use cases inside or outside the boundary), while the class diagram answers which classes the system is made of and how they relate (three compartments plus relationships and multiplicities).",
          ms: "Soalan lazim meminta anda membezakan gambar rajah kes penggunaan dengan gambar rajah kelas: gambar rajah kes penggunaan menjawab siapa melakukan apa dengan sistem (aktor dan kes penggunaan di luar atau di dalam sempadan), manakala gambar rajah kelas menjawab kelas apa yang membentuk sistem dan bagaimana ia berhubung (tiga petak beserta hubungan dan kepelbagaian)."
        },
        {
          zh: "易错点：把聚合和组合搞混——聚合时部分可以独立存在（Department has Lecturers），组合时部分不能独立存在（House has Rooms）；另外要记住 <<include>> 是每次都会用到的功能，<<extend>> 是可选的扩展。",
          en: "A common mistake is confusing aggregation with composition: in aggregation the part can exist on its own (Department has Lecturers), while in composition it cannot (House has Rooms). Also remember that <<include>> is functionality that is always used, whereas <<extend>> is an optional extension.",
          ms: "Kesilapan biasa ialah mengelirukan pengagregatan dengan komposisi: dalam pengagregatan bahagian boleh wujud sendiri (Department has Lecturers), manakala dalam komposisi ia tidak boleh (House has Rooms). Ingat juga bahawa <<include>> ialah fungsi yang sentiasa digunakan, manakala <<extend>> ialah lanjutan pilihan."
        },
        {
          zh: "要能默写可见性符号（+ - # ~）与多重性记法（1、0..1、*、1..*、0..*），并能说明 UML 不是什么：不是编程语言、不是 CASE 工具、也不是软件开发方法。",
          en: "Be ready to write the visibility symbols (+ - # ~) and the multiplicity notations (1, 0..1, *, 1..*, 0..*) from memory, and to state what UML is not: it is not a programming language, not a CASE tool and not a software development method.",
          ms: "Bersedia menulis simbol kebolehlihatan (+ - # ~) dan notasi kepelbagaian (1, 0..1, *, 1..*, 0..*) dari ingatan, serta menyatakan apa yang UML bukan: bukan bahasa pengaturcaraan, bukan alat CASE dan bukan kaedah pembangunan perisian."
        }
      ],
      mnemonic: {
        zh: "用例看功能，类图看结构；is-a 是继承，has-a 是聚合。",
        en: "Use cases show functions, class diagrams show structure; is-a is inheritance, has-a is aggregation.",
        ms: "Kes penggunaan menunjukkan fungsi, gambar rajah kelas menunjukkan struktur; is-a ialah pewarisan, has-a ialah pengagregatan."
      }
    },
    {
      id: "oop-03",
      num: 3,
      title: {
        zh: "Java 基础：控制语句、方法与数组",
        en: "Java Basics: Control Statements, Methods and Arrays",
        ms: "Asas Java: Penyataan Kawalan, Kaedah dan Tatasusunan"
      },
      file: "00p/SESSION 20262027_CHAPTER3 (6).pptx",
      pages: 56,
      summary: {
        zh: "本章介绍 Java 语言的基本语法与程序结构。首先回顾 Java 的历史（James Gosling 在 Sun 公司开发，1991 年名为 Oak，1995 年改名为 Java）、语言特性、J2SE/J2EE/J2ME 三种版本，以及 JDK、JRE、JVM 之间的关系和从源代码到字节码再到运行结果的编译执行流程。接着讲解输入输出（Scanner、JOptionPane、DecimalFormat）、选择结构（if、if-else、嵌套 if、else-if、switch、条件运算符）与循环结构（while、do-while、for）以及 break 和 continue 的作用。最后讲解方法的定义与调用、参数传递、方法重载、局部变量作用域、方法抽象，以及数组的声明、创建、初始化、处理、传参与复制。",
        en: "This chapter covers the basic syntax and program structure of Java. It reviews the history of Java (developed by James Gosling at Sun Microsystems, called Oak in 1991 and renamed Java in 1995), the characteristics of the language, the three Java API editions (J2SE, J2EE and J2ME), the relationship between the JDK, the JRE and the JVM, and the compile-and-run flow from source code to bytecode to result. It then explains input and output (Scanner, JOptionPane, DecimalFormat), selection statements (if, if-else, nested if, else-if, switch and the conditional operator), loops (while, do-while and for) and the effect of break and continue. Finally it explains how to define and call methods, pass parameters, overload methods, the scope of local variables, method abstraction, and how to declare, create, initialize, process, pass and copy arrays.",
        ms: "Bab ini merangkumi sintaks asas dan struktur atur cara Java. Ia mengimbas sejarah Java (dibangunkan oleh James Gosling di Sun Microsystems, dinamakan Oak pada tahun 1991 dan ditukar nama kepada Java pada tahun 1995), ciri-ciri bahasa ini, tiga edisi Java API (J2SE, J2EE dan J2ME), hubungan antara JDK, JRE dan JVM, serta aliran kompilasi dan pelaksanaan daripada kod sumber kepada kod bait sehingga hasilnya. Seterusnya bab ini menerangkan input dan output (Scanner, JOptionPane, DecimalFormat), penyataan pemilihan (if, if-else, if bersarang, else-if, switch dan pengendali bersyarat), gelung (while, do-while dan for) serta kesan break dan continue. Akhir sekali, bab ini menerangkan cara mentakrif dan memanggil kaedah, menghantar parameter, membebankan kaedah, skop pemboleh ubah setempat, pengabstrakan kaedah, dan cara mengisytiharkan, mencipta, memulakan, memproses, menghantar serta menyalin tatasusunan."
      },
      points: [
        {
          zh: "Java 由 Sun Microsystems 的 James Gosling 开发，1991 年原名 Oak，最初用于消费电子产品的嵌入式芯片，1995 年改名为 Java 并转向开发互联网应用，HotJava 是第一个支持 Java 的 Web 浏览器。",
          en: "Java was developed by James Gosling at Sun Microsystems; it was originally called Oak (1991) and intended for embedded chips in consumer electronic appliances, and it was renamed Java in 1995 for developing internet applications, with HotJava as the first Java-enabled web browser.",
          ms: "Java dibangunkan oleh James Gosling di Sun Microsystems; ia pada mulanya dipanggil Oak (1991) untuk cip terbenam dalam peralatan elektronik pengguna, kemudian dinamakan semula Java pada tahun 1995 untuk membangunkan aplikasi internet, dengan HotJava sebagai pelayar web pertama yang menyokong Java."
        },
        {
          zh: "Java 的特性包括简单、面向对象、可移植、平台无关、安全、健壮、体系结构中立、解释型、高性能、多线程、分布式和动态。",
          en: "Java is simple, object-oriented, portable, platform independent, secured, robust, architecture neutral, interpreted, high performance, multithreaded, distributed and dynamic.",
          ms: "Java bersifat mudah, berorientasikan objek, mudah alih, bebas platform, selamat, teguh, neutral dari segi seni bina, ditafsir, berprestasi tinggi, berbilang benang, teragih dan dinamik."
        },
        {
          zh: "Java API 有三种版本：J2SE 用于开发客户端独立应用程序或小程序（applet），J2EE 用于开发 Java Servlet、Java Server Pages 等服务器端应用，J2ME 用于手机等移动设备上的应用。",
          en: "There are three editions of the Java API: J2SE for client-side standalone applications or applets, J2EE for server-side applications such as Java servlets and Java Server Pages, and J2ME for applications on mobile devices such as cell phones.",
          ms: "Terdapat tiga edisi Java API: J2SE untuk aplikasi berdiri sendiri atau applet di pihak klien, J2EE untuk aplikasi pihak pelayan seperti servlet Java dan Java Server Pages, dan J2ME untuk aplikasi pada peranti mudah alih seperti telefon bimbit."
        },
        {
          zh: "JVM 负责读取并解释字节码来运行 Java 程序，JRE 包含 JVM 和运行应用所需的库，JDK 在 JRE 之外还提供编译器、调试器等开发工具，所以要编写、编译和运行 Java 程序需要安装 JDK。",
          en: "The JVM runs Java programs by reading and interpreting bytecode, the JRE contains the JVM plus the libraries needed to run applications, and the JDK adds development tools such as a compiler and debugger, so writing, compiling and running Java programs requires the JDK.",
          ms: "JVM menjalankan atur cara Java dengan membaca dan mentafsir kod bait, JRE mengandungi JVM serta pustaka yang diperlukan untuk menjalankan aplikasi, manakala JDK menambah alat pembangunan seperti pengkompil dan penyahpepijat, jadi menulis, mengkompil dan menjalankan atur cara Java memerlukan JDK."
        },
        {
          zh: "Java 程序的执行流程是：编写或修改源代码（Welcome.java），用 javac 编译成字节码（Welcome.class），再由 JVM 运行字节码并得到结果；编译错误在编译期发现，运行错误或结果不正确则在运行期出现。",
          en: "A Java program runs in these steps: create or modify the source code (Welcome.java), compile it with javac into bytecode (Welcome.class), then run the bytecode with java so that the JVM interprets it and produces the result; compilation errors appear at compile time while runtime errors or incorrect results appear when the program runs.",
          ms: "Atur cara Java dilaksanakan melalui langkah berikut: tulis atau ubah kod sumber (Welcome.java), kompil dengan javac menjadi kod bait (Welcome.class), kemudian jalankan kod bait dengan java supaya JVM mentafsirnya dan menghasilkan output; ralat kompilasi muncul pada masa kompilasi manakala ralat masa larian atau hasil yang salah muncul semasa atur cara berjalan."
        },
        {
          zh: "输入可以用 Scanner 类从控制台读取（nextInt、nextDouble、next、nextLine、nextBoolean），也可以用 JOptionPane 的输入对话框再配合 Double.parseDouble 转换；输出可以用 System.out.println，或者用 DecimalFormat 按指定模式格式化小数。",
          en: "Input can be read from the console with the Scanner class (nextInt, nextDouble, next, nextLine, nextBoolean) or from an input dialog using JOptionPane followed by Double.parseDouble, while output can be printed with System.out.println or formatted with the DecimalFormat class.",
          ms: "Input boleh dibaca dari konsol dengan kelas Scanner (nextInt, nextDouble, next, nextLine, nextBoolean) atau melalui dialog input JOptionPane yang diikuti dengan Double.parseDouble, manakala output boleh dicetak dengan System.out.println atau diformat dengan kelas DecimalFormat."
        },
        {
          zh: "选择结构包括单分支 if、if-else、嵌套 if、else-if 多分支、switch 和条件运算符（condition ? value1 : value2），其中 switch 的每个 case 通常要用 break 结束，否则会继续执行下一个 case。",
          en: "Selection statements include the simple if, if-else, nested if, the else-if ladder, switch and the conditional operator (condition ? value1 : value2); each case in a switch normally ends with break, otherwise execution falls through to the next case.",
          ms: "Penyataan pemilihan merangkumi if mudah, if-else, if bersarang, tangga else-if, switch dan pengendali bersyarat (condition ? value1 : value2); setiap case dalam switch biasanya diakhiri dengan break, jika tidak kawalan akan terus masuk ke case seterusnya."
        },
        {
          zh: "循环有三种：while 每次迭代前判断条件，do-while 至少执行一次循环体后再判断条件，for 适合重复次数已知的情况；break 立即结束最内层循环，continue 只结束当前这一次迭代并跳到循环体末尾。",
          en: "There are three loops: while tests the condition before each iteration, do-while executes the body at least once before testing the condition, and for is suitable when the number of repetitions is known; break immediately ends the innermost loop, while continue only ends the current iteration and jumps to the end of the loop body.",
          ms: "Terdapat tiga gelung: while menguji syarat sebelum setiap lelaran, do-while melaksanakan badan gelung sekurang-kurangnya sekali sebelum menguji syarat, dan for sesuai apabila bilangan ulangan diketahui; break menamatkan gelung paling dalam serta-merta, manakala continue hanya menamatkan lelaran semasa dan melompat ke hujung badan gelung."
        },
        {
          zh: "方法是一组为完成某个操作而组合在一起的语句，方法签名由方法名和参数列表组成；调用方法时实参的值被传给形参，Java 一律按值传递，void 方法不返回任何值。",
          en: "A method is a collection of statements grouped together to perform an operation, and its signature is the combination of the method name and the parameter list; when a method is invoked the values of the actual parameters are passed to the formal parameters, Java always passes by value, and a void method returns no value.",
          ms: "Kaedah ialah himpunan penyataan yang dikumpulkan untuk melaksanakan sesuatu operasi, dan tandatangan kaedah ialah gabungan nama kaedah dengan senarai parameter; apabila kaedah dipanggil, nilai parameter sebenar dihantar kepada parameter formal, Java sentiasa menghantar secara nilai, dan kaedah void tidak mengembalikan nilai."
        },
        {
          zh: "方法重载指两个或多个方法同名但参数列表不同，编译器根据方法签名决定调用哪一个；局部变量的作用域从声明处开始到包含它的代码块结束，并且必须先声明后使用。",
          en: "Method overloading means that two or more methods have the same name but different parameter lists, and the Java compiler determines which method is used based on the method signature; the scope of a local variable starts from its declaration and continues to the end of the block that contains it, and it must be declared before it can be used.",
          ms: "Beban lampau kaedah bermaksud dua atau lebih kaedah mempunyai nama yang sama tetapi senarai parameter yang berbeza, dan pengkompil Java menentukan kaedah mana yang digunakan berdasarkan tandatangan kaedah; skop pemboleh ubah setempat bermula pada pengisytiharannya dan berakhir pada penghujung blok yang mengandunginya, dan ia mesti diisytiharkan sebelum digunakan."
        }
      ],
      terms: [
        {
          en: "Bytecode",
          zh: "字节码",
          ms: "Kod Bait",
          def: {
            zh: "字节码是编译器为 JVM 生成、由 JVM 读取和解释的中间代码，不是给程序员直接阅读的。",
            en: "Bytecode is the intermediate code generated by the compiler for the JVM to read and interpret; it is not meant for programmers to read directly.",
            ms: "Kod bait ialah kod perantaraan yang dijana oleh pengkompil untuk dibaca dan ditafsir oleh JVM; ia bukan untuk dibaca terus oleh pengatur cara."
          }
        },
        {
          en: "JDK (Java Development Kit)",
          zh: "Java 开发工具包",
          ms: "Kit Pembangunan Java (JDK)",
          def: {
            zh: "JDK 是用于开发 Java 应用程序的软件开发环境，包含编写、编译和运行程序所需的工具、库与文档。",
            en: "The JDK is the software development environment used to develop Java applications; it includes the tools, libraries and documentation needed to write, compile and run programs.",
            ms: "JDK ialah persekitaran pembangunan perisian untuk membangunkan aplikasi Java; ia merangkumi alat, pustaka dan dokumentasi yang diperlukan untuk menulis, mengkompil dan menjalankan atur cara."
          }
        },
        {
          en: "JRE (Java Runtime Environment)",
          zh: "Java 运行环境",
          ms: "Persekitaran Masa Larian Java (JRE)",
          def: {
            zh: "JRE 包含 JVM 和其他库，是运行 Java 应用所需要的一切。",
            en: "The JRE contains the JVM together with other libraries; it is everything needed to run Java applications.",
            ms: "JRE mengandungi JVM bersama pustaka lain; ia ialah segala yang diperlukan untuk menjalankan aplikasi Java."
          }
        },
        {
          en: "JVM (Java Virtual Machine)",
          zh: "Java 虚拟机",
          ms: "Mesin Maya Java (JVM)",
          def: {
            zh: "JVM 读取字节码并执行 Java 程序，是 Java 平台无关性的关键。",
            en: "The JVM reads bytecode and executes Java programs, and it is the key to the platform independence of Java.",
            ms: "JVM membaca kod bait dan melaksanakan atur cara Java, dan ia merupakan kunci kepada kebebasan platform Java."
          }
        },
        {
          en: "IDE",
          zh: "集成开发环境",
          ms: "Persekitaran Pembangunan Bersepadu (IDE)",
          def: {
            zh: "IDE 把常用的开发工具集成到一个图形界面中，例如 NetBeans、Eclipse、JBuilder。",
            en: "An IDE integrates popular developer tools into a single graphical user interface, for example NetBeans, Eclipse or JBuilder.",
            ms: "IDE mengintegrasikan alat pembangun yang biasa ke dalam satu antara muka grafik, contohnya NetBeans, Eclipse atau JBuilder."
          }
        },
        {
          en: "Scanner class",
          zh: "Scanner 类",
          ms: "Kelas Scanner",
          def: {
            zh: "Scanner 位于 java.util 包中，用来从键盘读取输入，例如 s.nextInt() 读整数、s.nextDouble() 读小数、s.nextLine() 读整行。",
            en: "The Scanner class, provided in java.util, reads input from the keyboard, for example s.nextInt() for an integer, s.nextDouble() for a decimal and s.nextLine() for a full line.",
            ms: "Kelas Scanner dalam java.util membaca input dari papan kekunci, contohnya s.nextInt() untuk integer, s.nextDouble() untuk perpuluhan dan s.nextLine() untuk satu baris penuh."
          }
        },
        {
          en: "Method signature",
          zh: "方法签名",
          ms: "Tandatangan Kaedah",
          def: {
            zh: "方法签名是方法名与参数列表的组合，编译器用它来判断调用的是哪一个方法。",
            en: "The method signature is the combination of the method name and the parameter list, and the compiler uses it to decide which method is being called.",
            ms: "Tandatangan kaedah ialah gabungan nama kaedah dengan senarai parameter, dan pengkompil menggunakannya untuk menentukan kaedah yang dipanggil."
          }
        },
        {
          en: "Method overloading",
          zh: "方法重载",
          ms: "Beban Lampau Kaedah",
          def: {
            zh: "方法重载指两个或多个方法同名但参数列表不同，例如 max(int, int) 与 max(double, double)。",
            en: "Method overloading means that two or more methods have the same name but different parameter lists, for example max(int, int) and max(double, double).",
            ms: "Beban lampau kaedah bermaksud dua atau lebih kaedah mempunyai nama yang sama tetapi senarai parameter yang berbeza, contohnya max(int, int) dan max(double, double)."
          }
        },
        {
          en: "Local variable",
          zh: "局部变量",
          ms: "Pemboleh Ubah Setempat",
          def: {
            zh: "局部变量是在方法内部定义的变量，作用域从声明处到包含它的代码块末尾，而且必须先赋值才能使用。",
            en: "A local variable is a variable defined inside a method; its scope runs from its declaration to the end of the block that contains it and it must be assigned before it can be used.",
            ms: "Pemboleh ubah setempat ialah pemboleh ubah yang ditakrifkan di dalam kaedah; skopnya bermula pada pengisytiharan sehingga penghujung blok yang mengandunginya dan ia mesti diberi nilai sebelum digunakan."
          }
        },
        {
          en: "Array",
          zh: "数组",
          ms: "Tatasusunan",
          def: {
            zh: "数组是表示同一类型数据集合的数据结构，例如 double[] myList = new double[10]，通过下标访问元素。",
            en: "An array is a data structure that represents a collection of data of the same type, for example double[] myList = new double[10], and its elements are accessed by index.",
            ms: "Tatasusunan ialah struktur data yang mewakili himpunan data daripada jenis yang sama, contohnya double[] myList = new double[10], dan elemennya dicapai melalui indeks."
          }
        },
        {
          en: "Index",
          zh: "下标（索引）",
          ms: "Indeks",
          def: {
            zh: "下标用来定位数组元素，Java 数组的下标从 0 开始，最后一个元素的下标是数组长度减一。",
            en: "An index locates an element of an array; Java array indices start from 0, so the last element has index length minus one.",
            ms: "Indeks digunakan untuk mencari elemen tatasusunan; indeks tatasusunan Java bermula dari 0, jadi elemen terakhir mempunyai indeks panjang tolak satu."
          }
        },
        {
          en: "Default value",
          zh: "默认值",
          ms: "Nilai Lalai",
          def: {
            zh: "数组创建后元素会被赋予默认值：数值类型为 0，char 为 '\\u0000'，boolean 为 false，String 为 null。",
            en: "When an array is created its elements receive default values: 0 for numeric types, '\\u0000' for char, false for boolean and null for String.",
            ms: "Apabila tatasusunan dicipta, elemennya menerima nilai lalai: 0 bagi jenis numerik, '\\u0000' bagi char, false bagi boolean dan null bagi String."
          }
        },
        {
          en: "Conditional operator",
          zh: "条件运算符",
          ms: "Pengendali Bersyarat",
          def: {
            zh: "条件运算符用 condition ? value1 : value2 的形式代替简单的 if-else，条件为真取第一个值，否则取第二个值。",
            en: "The conditional operator uses the form condition ? value1 : value2 instead of a simple if-else: it yields the first value when the condition is true and the second when it is false.",
            ms: "Pengendali bersyarat menggunakan bentuk condition ? value1 : value2 sebagai ganti if-else yang mudah: ia menghasilkan nilai pertama apabila syarat benar dan nilai kedua apabila syarat palsu."
          }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: {
            zh: "Java 程序的编译与运行流程",
            en: "Compiling and Running a Java Program",
            ms: "Aliran Kompilasi dan Pelaksanaan Atur Cara Java"
          },
          steps: [
            {
              label: {
                zh: "编写源代码",
                en: "Write source code",
                ms: "Tulis kod sumber"
              },
              note: {
                zh: "Welcome.java",
                en: "Welcome.java",
                ms: "Welcome.java"
              }
            },
            {
              label: {
                zh: "编译",
                en: "Compile",
                ms: "Kompil"
              },
              note: {
                zh: "javac Welcome.java",
                en: "javac Welcome.java",
                ms: "javac Welcome.java"
              }
            },
            {
              label: {
                zh: "生成字节码",
                en: "Bytecode produced",
                ms: "Kod bait dihasilkan"
              },
              note: {
                zh: "Welcome.class，由编译器生成",
                en: "Welcome.class generated by the compiler",
                ms: "Welcome.class dijana oleh pengkompil"
              }
            },
            {
              label: {
                zh: "运行字节码",
                en: "Run the bytecode",
                ms: "Jalankan kod bait"
              },
              note: {
                zh: "java Welcome，由 JVM 解释执行",
                en: "java Welcome, interpreted by the JVM",
                ms: "java Welcome, ditafsir oleh JVM"
              }
            },
            {
              label: {
                zh: "输出结果",
                en: "Result",
                ms: "Hasil"
              },
              note: {
                zh: "或在运行期出现错误",
                en: "Or a runtime error appears",
                ms: "Atau ralat masa larian muncul"
              }
            }
          ],
          caption: {
            zh: "编译错误在编译期发现，运行错误或结果不正确在运行期出现。",
            en: "Compilation errors appear at compile time; runtime errors or incorrect results appear at run time.",
            ms: "Ralat kompilasi muncul pada masa kompilasi; ralat masa larian atau hasil yang salah muncul pada masa larian."
          }
        },
        {
          type: "matrix",
          title: {
            zh: "三种循环的比较",
            en: "Comparison of the Three Loops",
            ms: "Perbandingan Tiga Gelung"
          },
          cols: [
            {
              zh: "何时判断条件",
              en: "When the condition is tested",
              ms: "Bila syarat diuji"
            },
            {
              zh: "最少执行次数",
              en: "Minimum iterations",
              ms: "Bilangan lelaran minimum"
            }
          ],
          rows: [
            {
              head: {
                zh: "while",
                en: "while",
                ms: "while"
              },
              cells: [
                {
                  zh: "每次迭代之前判断",
                  en: "Before each iteration",
                  ms: "Sebelum setiap lelaran"
                },
                {
                  zh: "可能一次都不执行",
                  en: "May run zero times",
                  ms: "Mungkin sifar kali"
                }
              ]
            },
            {
              head: {
                zh: "do-while",
                en: "do-while",
                ms: "do-while"
              },
              cells: [
                {
                  zh: "执行完循环体之后判断",
                  en: "After the body has executed",
                  ms: "Selepas badan gelung dilaksanakan"
                },
                {
                  zh: "至少执行一次",
                  en: "At least once",
                  ms: "Sekurang-kurangnya sekali"
                }
              ]
            },
            {
              head: {
                zh: "for",
                en: "for",
                ms: "for"
              },
              cells: [
                {
                  zh: "每次迭代之前判断，适合次数已知",
                  en: "Before each iteration; good when the count is known",
                  ms: "Sebelum setiap lelaran; sesuai apabila bilangan diketahui"
                },
                {
                  zh: "可能一次都不执行",
                  en: "May run zero times",
                  ms: "Mungkin sifar kali"
                }
              ]
            }
          ],
          legend: [
            {
              zh: "break 结束整个循环，continue 只跳过本次迭代。",
              en: "break ends the whole loop, while continue skips only the current iteration.",
              ms: "break menamatkan seluruh gelung, manakala continue melangkau lelaran semasa sahaja."
            }
          ]
        }
      ],
      exam: [
        {
          zh: "常考：给出一个循环或选择结构的代码片段，要求写出输出结果，或者问 do-while 与 while 的区别（do-while 至少执行一次循环体）。",
          en: "A typical question gives a code fragment with a loop or a selection statement and asks for the output, or asks for the difference between do-while and while (do-while executes the body at least once).",
          ms: "Soalan lazim memberikan cebisan kod dengan gelung atau penyataan pemilihan dan meminta outputnya, atau meminta perbezaan antara do-while dengan while (do-while melaksanakan badan gelung sekurang-kurangnya sekali)."
        },
        {
          zh: "易错点：局部变量没有默认值，未初始化就使用会编译错误；int x = 10.5 也是编译错误，必须写 double 或强制转换；数组的简写初始化 double[] a = {1,2} 必须和声明写在同一条语句里。",
          en: "Common mistakes: a local variable has no default value, so using it before initialisation is a compilation error; int x = 10.5 is also a compilation error unless the type is double or a cast is used; and the shorthand array initialiser double[] a = {1,2} must appear in the same statement as the declaration.",
          ms: "Kesilapan biasa: pemboleh ubah setempat tiada nilai lalai, jadi menggunakannya sebelum diinisialisasi ialah ralat kompilasi; int x = 10.5 juga ralat kompilasi melainkan jenisnya double atau digunakan pengacuan; dan pemula tatasusunan ringkas double[] a = {1,2} mesti berada dalam penyataan yang sama dengan pengisytiharannya."
        },
        {
          zh: "常考：说明把数组传给方法时发生什么——基本类型参数改不到原来的变量，但数组参数通过引用可以改变元素的值；复制数组要用循环或 System.arraycopy，int[] b = a 只是复制引用。",
          en: "A typical question asks what happens when an array is passed to a method: a primitive parameter cannot change the caller variable, but an array parameter can change element values through the reference; copying an array requires a loop or System.arraycopy, because int[] b = a only copies the reference.",
          ms: "Soalan lazim menanyakan apa yang berlaku apabila tatasusunan dihantar kepada kaedah: parameter jenis primitif tidak boleh mengubah pemboleh ubah pemanggil, tetapi parameter tatasusunan boleh mengubah nilai elemen melalui rujukan; menyalin tatasusunan memerlukan gelung atau System.arraycopy kerana int[] b = a hanya menyalin rujukan."
        }
      ],
      mnemonic: {
        zh: "先判断用 while，先跑一次用 do-while，次数已知用 for。",
        en: "Test first with while, run once with do-while, use for when the count is known.",
        ms: "Uji dahulu dengan while, jalankan sekali dengan do-while, guna for apabila bilangan diketahui."
      }
    },
    {
      id: "oop-04",
      num: 4,
      title: {
        zh: "类与对象",
        en: "Classes and Objects",
        ms: "Kelas dan Objek"
      },
      file: "00p/SESSION 20262027_CHAPTER4.pptx",
      pages: 44,
      summary: {
        zh: "本章讲解如何用 Java 定义类、创建对象并使用对象。内容包括对象的基本概念（对象具有身份、状态和行为）、定义数据字段和方法、构造方法（默认构造方法与带参构造方法）、引用变量与引用类型、使用 Java 库中的类、可见性修饰符与数据字段封装、static 变量/常量/方法、把对象传给方法、对象数组、变量作用域、this 引用，以及类抽象与封装。学习重点是理解对象引用、按值传递和封装对程序设计的影响，并能写出符合 UML 记法的 Circle 类。",
        en: "This chapter explains how to define classes, create objects and use objects in Java. It covers the basic concepts of objects (an object has identity, state and behaviour), defining data fields and methods, constructors (default and parameterized), reference variables and reference types, using classes from the Java library, visibility modifiers and data field encapsulation, static variables, constants and methods, passing objects to methods, arrays of objects, the scope of variables, the this reference, and class abstraction and encapsulation. The focus is on understanding object references, pass-by-value and how encapsulation affects program design, and on writing a Circle class that matches its UML notation.",
        ms: "Bab ini menerangkan cara mentakrif kelas, mencipta objek dan menggunakan objek dalam Java. Ia merangkumi konsep asas objek (objek mempunyai identiti, keadaan dan tingkah laku), pendefinisian medan data dan kaedah, pembina (pembina lalai dan pembina berparameter), pemboleh ubah rujukan dan jenis rujukan, penggunaan kelas daripada pustaka Java, pengubah suai kebolehlihatan dan enkapsulasi medan data, pemboleh ubah, pemalar dan kaedah statik, penghantaran objek kepada kaedah, tatasusunan objek, skop pemboleh ubah, rujukan this, serta pengabstrakan dan enkapsulasi kelas. Tumpuannya ialah memahami rujukan objek, penghantaran secara nilai dan kesan enkapsulasi terhadap reka bentuk atur cara, serta menulis kelas Circle yang menepati notasi UMLnya."
      },
      points: [
        {
          zh: "面向对象编程使用对象来编程，对象把数据与操作放在同一个实体里；每个对象都有唯一的身份、状态（一组数据字段及其当前值）和行为（一组方法）。",
          en: "Object-oriented programming programs with objects, and an object places data and operations within a single entity; every object has a unique identity, a state (a set of data fields with their current values) and behaviours (a set of methods).",
          ms: "Pengaturcaraan berorientasikan objek menggunakan objek, dan objek meletakkan data serta operasi dalam satu entiti; setiap objek mempunyai identiti unik, keadaan (satu set medan data dengan nilai semasanya) dan tingkah laku (satu set kaedah)."
        },
        {
          zh: "类是定义同一类型对象的构造，Java 类用变量定义数据字段、用方法定义行为；类是创建对象的模板，例如 Circle 类可以创建 radius 为 10、25、125 的多个对象。",
          en: "A class is a construct that defines objects of the same type: a Java class uses variables to define data fields and methods to define behaviours, and the class is the template for creating objects, so the Circle class can create objects with radius 10, 25 or 125.",
          ms: "Kelas ialah konstruk yang mentakrifkan objek daripada jenis yang sama: kelas Java menggunakan pemboleh ubah untuk medan data dan kaedah untuk tingkah laku, dan kelas itu ialah pelan induk untuk mencipta objek, jadi kelas Circle boleh mencipta objek dengan radius 10, 25 atau 125."
        },
        {
          zh: "构造方法是一种特殊方法，它与类同名、没有返回类型（连 void 也没有）、用 new 运算符调用；默认构造方法没有参数，带参构造方法在创建对象时初始化数据字段，例如 new Circle() 与 new Circle(5.0)。",
          en: "A constructor is a special kind of method that has the same name as the class, has no return type (not even void) and is invoked with the new operator; a default constructor takes no arguments while a parameterized constructor initialises the data fields when the object is created, for example new Circle() and new Circle(5.0).",
          ms: "Pembina ialah kaedah istimewa yang mempunyai nama sama dengan kelas, tiada jenis pulangan (bukan void pun tidak) dan dipanggil dengan pengendali new; pembina lalai tidak menerima argumen manakala pembina berparameter menginisialisasi medan data apabila objek dicipta, contohnya new Circle() dan new Circle(5.0)."
        },
        {
          zh: "访问器方法（getter，如 getRadius()）用来读取私有数据，修改器方法（setter，如 setRadius()）用来修改私有数据；this 引用指向对象本身，常用来引用被参数隐藏的数据字段，也可以用 this(1.0) 在构造方法中调用同一个类的另一个构造方法。",
          en: "Accessor methods (getters such as getRadius()) retrieve private data and mutator methods (setters such as setRadius()) modify private data; the this reference refers to the object itself, is commonly used to reference a data field hidden by a parameter, and can call another constructor of the same class as in this(1.0).",
          ms: "Kaedah pengakses (getter seperti getRadius()) mengambil data peribadi dan kaedah pengubah (setter seperti setRadius()) mengubah data peribadi; rujukan this merujuk kepada objek itu sendiri, biasa digunakan untuk merujuk medan data yang dilindungi oleh parameter, dan boleh memanggil pembina lain dalam kelas yang sama seperti this(1.0)."
        },
        {
          zh: "引用变量用 ClassName objectRefVar 声明（如 Circle ob1），也可以用 Circle ob1 = new Circle() 一步完成声明与创建，再通过点号访问数据（ob1.radius）和调用方法（ob1.findArea()）；对象的数据字段有默认值——String 为 null、数值类型为 0、boolean 为 false、char 为 '\\u0000'，但方法内部的局部变量没有默认值，必须先初始化才能使用。",
          en: "A reference variable is declared as ClassName objectRefVar (for example Circle ob1) and can be declared and created in one step with Circle ob1 = new Circle(), after which data is accessed with dot notation (ob1.radius) and methods are invoked as ob1.findArea(); data fields of an object have default values — null for String, 0 for numeric types, false for boolean and '\\u0000' for char — but local variables inside a method have no default value and must be initialised before use.",
          ms: "Pemboleh ubah rujukan diisytiharkan sebagai ClassName objectRefVar (contohnya Circle ob1) dan boleh diisytiharkan serta dicipta dalam satu langkah dengan Circle ob1 = new Circle(), kemudian data dicapai dengan notasi titik (ob1.radius) dan kaedah dipanggil sebagai ob1.findArea(); medan data objek mempunyai nilai lalai — null bagi String, 0 bagi jenis numerik, false bagi boolean dan '\\u0000' bagi char — tetapi pemboleh ubah setempat di dalam kaedah tiada nilai lalai dan mesti diinisialisasi sebelum digunakan."
        },
        {
          zh: "基本类型变量存放实际的值，对象类型变量存放对象的引用；基本类型赋值复制值，而对象变量赋值（c1 = c2）使两个变量指向同一个对象，原来被 c1 引用的对象变成垃圾，由 JVM 自动回收。",
          en: "A primitive variable stores the actual value while an object variable stores a reference to an object; assigning a primitive copies the value, whereas assigning an object variable (c1 = c2) makes both variables refer to the same object, and the object previously referenced by c1 becomes garbage that the JVM collects automatically.",
          ms: "Pemboleh ubah primitif menyimpan nilai sebenar manakala pemboleh ubah objek menyimpan rujukan kepada objek; pemberian nilai primitif menyalin nilainya, manakala pemberian nilai pemboleh ubah objek (c1 = c2) menjadikan kedua-dua pemboleh ubah merujuk objek yang sama, dan objek yang sebelum ini dirujuk c1 menjadi sampah yang dikumpul JVM secara automatik."
        },
        {
          zh: "可见性修饰符决定访问权限：默认（无修饰符）允许同一个包内的类访问，public 允许任何包的类访问，private 只允许声明它的类访问；因此数据字段应声明为 private，并通过 public 的 get 和 set 方法访问，这就是数据字段封装，目的是保护数据并使类易于维护。",
          en: "Visibility modifiers control access: the default (no modifier) allows access from any class in the same package, public allows access from any class in any package, and private allows access only from the declaring class; data fields should therefore be private and reached through public get and set methods, which is data field encapsulation, done to protect the data and make the class easy to maintain.",
          ms: "Pengubah suai kebolehlihatan mengawal capaian: lalai (tanpa pengubah suai) membenarkan capaian daripada mana-mana kelas dalam pakej yang sama, public membenarkan capaian daripada mana-mana kelas dalam mana-mana pakej, dan private hanya membenarkan capaian daripada kelas yang mengisytiharkannya; oleh itu medan data hendaklah private dan dicapai melalui kaedah get dan set yang public, iaitu enkapsulasi medan data, bertujuan melindungi data dan memudahkan penyelenggaraan kelas."
        },
        {
          zh: "实例变量属于某个具体对象，每个对象各有一份；static 变量被类的所有实例共享，static 方法不绑定到具体对象（用 ClassName.method() 调用），static 常量是被所有实例共享的 final 变量，例如用 numOfObject 统计创建了多少个 Circle 对象。",
          en: "An instance variable belongs to a specific object and each object has its own copy, while a static variable is shared by all instances of the class, a static method is not tied to a specific object (it is invoked as ClassName.method()) and a static constant is a final variable shared by all instances, for example using numOfObject to count how many Circle objects have been created.",
          ms: "Pemboleh ubah instans dimiliki oleh objek tertentu dan setiap objek mempunyai salinannya sendiri, manakala pemboleh ubah statik dikongsi oleh semua instans kelas, kaedah statik tidak terikat pada objek tertentu (dipanggil sebagai ClassName.method()) dan pemalar statik ialah pemboleh ubah final yang dikongsi semua instans, contohnya menggunakan numOfObject untuk mengira bilangan objek Circle yang dicipta."
        },
        {
          zh: "把对象传给方法时传递的是引用的值（按值传递），所以方法内部修改对象的字段会影响原来的对象（如 changeRadius(c1) 把 radius 改成 100）；对象数组实际上是引用变量数组，Circle[] obArray = new Circle[3] 创建后每个元素仍是 null，必须逐个用 new Circle() 初始化才能调用方法。",
          en: "Passing an object to a method passes the value of the reference (pass by value), so changing a field of the object inside the method affects the original object, as when changeRadius(c1) sets radius to 100; an array of objects is really an array of reference variables, so after Circle[] obArray = new Circle[3] each element is still null and must be initialised with new Circle() before its methods can be called.",
          ms: "Menghantar objek kepada kaedah menghantar nilai rujukan (hantar secara nilai), jadi mengubah medan objek di dalam kaedah akan menjejaskan objek asal, seperti apabila changeRadius(c1) menetapkan radius kepada 100; tatasusunan objek sebenarnya ialah tatasusunan pemboleh ubah rujukan, jadi selepas Circle[] obArray = new Circle[3] setiap elemen masih null dan mesti diinisialisasi dengan new Circle() sebelum kaedahnya boleh dipanggil."
        },
        {
          zh: "类抽象把类的实现与类的使用分开：类的创建者提供类的说明（public 方法的签名和 public 常量，即类契约），客户端通过契约使用类，而不需要知道实现细节，实现被封装在类中如同一个黑盒。",
          en: "Class abstraction separates the implementation of a class from its use: the creator of the class provides a description of the class (the signatures of public methods and public constants, that is the class contract) and clients use the class through that contract without needing to know the implementation, which is encapsulated and hidden like a black box.",
          ms: "Pengabstrakan kelas memisahkan pelaksanaan sesuatu kelas daripada penggunaannya: pencipta kelas menyediakan keterangan kelas (tandatangan kaedah public dan pemalar public, iaitu kontrak kelas) dan klien menggunakan kelas itu melalui kontrak tersebut tanpa perlu mengetahui butiran pelaksanaan, yang dienkapsulasi dan disembunyikan seperti kotak hitam."
        }
      ],
      terms: [
        {
          en: "Object",
          zh: "对象",
          ms: "Objek",
          def: {
            zh: "对象是类的一个实例，具有身份、状态（数据字段）和行为（方法），例如 radius 为 10 的一个 Circle。",
            en: "An object is an instance of a class with identity, state (data fields) and behaviour (methods), for example a Circle whose radius is 10.",
            ms: "Objek ialah instans bagi sesuatu kelas yang mempunyai identiti, keadaan (medan data) dan tingkah laku (kaedah), contohnya Circle dengan radius 10."
          }
        },
        {
          en: "Class",
          zh: "类",
          ms: "Kelas",
          def: {
            zh: "类是定义同一类型对象的构造，用变量定义数据字段、用方法定义行为，是创建对象的模板。",
            en: "A class is a construct that defines objects of the same type; it uses variables for data fields and methods for behaviours and is the template for creating objects.",
            ms: "Kelas ialah konstruk yang mentakrifkan objek daripada jenis yang sama; ia menggunakan pemboleh ubah bagi medan data dan kaedah bagi tingkah laku serta menjadi pelan induk untuk mencipta objek."
          }
        },
        {
          en: "Constructor",
          zh: "构造方法",
          ms: "Pembina",
          def: {
            zh: "构造方法是与类同名、没有返回类型、用 new 调用的特殊方法，用于初始化对象的数据字段。",
            en: "A constructor is a special method with the same name as the class and no return type, invoked with new, that initialises the data fields of an object.",
            ms: "Pembina ialah kaedah istimewa yang sama nama dengan kelas dan tiada jenis pulangan, dipanggil dengan new, untuk menginisialisasi medan data objek."
          }
        },
        {
          en: "Reference variable",
          zh: "引用变量",
          ms: "Pemboleh Ubah Rujukan",
          def: {
            zh: "引用变量存放对象的引用而不是对象本身，例如 Circle ob1 = new Circle()，通过 ob1 用点号访问对象的成员。",
            en: "A reference variable stores a reference to an object rather than the object itself, for example Circle ob1 = new Circle(), and its members are accessed with dot notation.",
            ms: "Pemboleh ubah rujukan menyimpan rujukan kepada objek dan bukan objek itu sendiri, contohnya Circle ob1 = new Circle(), dan ahlinya dicapai dengan notasi titik."
          }
        },
        {
          en: "Accessor method",
          zh: "访问器方法（getter）",
          ms: "Kaedah Pengakses (getter)",
          def: {
            zh: "访问器方法用来读取私有数据字段，例如 public double getRadius() 返回 radius 的值。",
            en: "An accessor method retrieves a private data field, for example public double getRadius() returns the value of radius.",
            ms: "Kaedah pengakses mengambil medan data peribadi, contohnya public double getRadius() mengembalikan nilai radius."
          }
        },
        {
          en: "Mutator method",
          zh: "修改器方法（setter）",
          ms: "Kaedah Pengubah (setter)",
          def: {
            zh: "修改器方法用来修改私有数据字段，例如 public void setRadius(double radius) 在检查数值合法后才赋值。",
            en: "A mutator method modifies a private data field, for example public void setRadius(double radius), which can validate the value before assigning it.",
            ms: "Kaedah pengubah mengubah medan data peribadi, contohnya public void setRadius(double radius), yang boleh menyemak nilai sebelum memberikannya."
          }
        },
        {
          en: "Default value",
          zh: "默认值",
          ms: "Nilai Lalai",
          def: {
            zh: "对象的数据字段若未初始化会有默认值：数值为 0、boolean 为 false、char 为 '\\u0000'、对象引用为 null；局部变量没有默认值。",
            en: "Data fields of an object receive default values if not initialised: 0 for numbers, false for boolean, '\\u0000' for char and null for object references; local variables have no default value.",
            ms: "Medan data objek menerima nilai lalai jika tidak diinisialisasi: 0 bagi nombor, false bagi boolean, '\\u0000' bagi char dan null bagi rujukan objek; pemboleh ubah setempat tiada nilai lalai."
          }
        },
        {
          en: "Garbage collection",
          zh: "垃圾回收",
          ms: "Pengumpulan Sampah",
          def: {
            zh: "当对象不再被任何引用变量指向时，它就变成垃圾，由 JVM 自动回收内存，例如 c1 = c2 之后原来 c1 指向的对象。",
            en: "When an object is no longer referenced by any variable it becomes garbage and the JVM collects it automatically, for example the object that c1 pointed to before the assignment c1 = c2.",
            ms: "Apabila sesuatu objek tidak lagi dirujuk oleh mana-mana pemboleh ubah, ia menjadi sampah dan dikumpul JVM secara automatik, contohnya objek yang dirujuk c1 sebelum pemberian nilai c1 = c2."
          }
        },
        {
          en: "Visibility modifier",
          zh: "可见性修饰符",
          ms: "Pengubah Suai Kebolehlihatan",
          def: {
            zh: "可见性修饰符决定类、变量或方法能被谁访问：默认同包可访问，public 任何包都可访问，private 只有声明它的类可访问。",
            en: "A visibility modifier decides who can access a class, variable or method: the default allows the same package, public allows any package and private allows only the declaring class.",
            ms: "Pengubah suai kebolehlihatan menentukan siapa boleh mencapai kelas, pemboleh ubah atau kaedah: lalai membenarkan pakej yang sama, public membenarkan mana-mana pakej dan private hanya kelas yang mengisytiharkannya."
          }
        },
        {
          en: "Data field encapsulation",
          zh: "数据字段封装",
          ms: "Enkapsulasi Medan Data",
          def: {
            zh: "数据字段封装指把数据字段声明为 private，并提供 public 的 get 和 set 方法访问，从而保护数据并便于维护。",
            en: "Data field encapsulation means declaring data fields private and providing public get and set methods, so that the data is protected and the class is easy to maintain.",
            ms: "Enkapsulasi medan data bermaksud mengisytiharkan medan data sebagai private dan menyediakan kaedah get dan set yang public, supaya data dilindungi dan kelas mudah diselenggara."
          }
        },
        {
          en: "Instance variable",
          zh: "实例变量",
          ms: "Pemboleh Ubah Instans",
          def: {
            zh: "实例变量属于某个具体对象，每个对象各有一份，例如每个 Circle 对象都有自己的 radius。",
            en: "An instance variable belongs to a specific object and every object has its own copy, for example each Circle object has its own radius.",
            ms: "Pemboleh ubah instans dimiliki oleh objek tertentu dan setiap objek mempunyai salinannya sendiri, contohnya setiap objek Circle mempunyai radius sendiri."
          }
        },
        {
          en: "Static variable",
          zh: "静态变量",
          ms: "Pemboleh Ubah Statik",
          def: {
            zh: "静态变量用 static 声明，被类的所有实例共享，只有一份，例如统计对象数目的 numOfObject。",
            en: "A static variable is declared with static and is shared by all instances of the class; there is only one copy, for example numOfObject counting the objects created.",
            ms: "Pemboleh ubah statik diisytiharkan dengan static dan dikongsi oleh semua instans kelas; hanya ada satu salinan, contohnya numOfObject yang mengira objek yang dicipta."
          }
        },
        {
          en: "this reference",
          zh: "this 引用",
          ms: "Rujukan this",
          def: {
            zh: "this 是指向对象自身的一个引用，常用来引用被参数隐藏的数据字段，也可以调用同一个类的另一个构造方法。",
            en: "this is a reference that refers to the object itself; it is commonly used to reference a data field hidden by a parameter and can also invoke another constructor of the same class.",
            ms: "this ialah rujukan kepada objek itu sendiri; ia biasa digunakan untuk merujuk medan data yang dilindungi oleh parameter dan juga boleh memanggil pembina lain dalam kelas yang sama."
          }
        },
        {
          en: "Array of objects",
          zh: "对象数组",
          ms: "Tatasusunan Objek",
          def: {
            zh: "对象数组实际上是引用变量数组，创建后元素仍为 null，必须逐个用 new 初始化才能使用。",
            en: "An array of objects is really an array of reference variables; after creation its elements are still null and each must be initialised with new before use.",
            ms: "Tatasusunan objek sebenarnya ialah tatasusunan pemboleh ubah rujukan; selepas dicipta elemennya masih null dan setiap satu mesti diinisialisasi dengan new sebelum digunakan."
          }
        },
        {
          en: "Class abstraction",
          zh: "类抽象",
          ms: "Pengabstrakan Kelas",
          def: {
            zh: "类抽象把类的实现与类的使用分开，客户端只需通过类契约（public 方法签名和常量）使用类，不必了解实现细节。",
            en: "Class abstraction separates the implementation of a class from its use; clients use the class through its contract (public method signatures and constants) without knowing the implementation details.",
            ms: "Pengabstrakan kelas memisahkan pelaksanaan kelas daripada penggunaannya; klien menggunakan kelas melalui kontraknya (tandatangan kaedah public dan pemalar) tanpa mengetahui butiran pelaksanaan."
          }
        }
      ],
      diagrams: [
        {
          type: "tree",
          title: {
            zh: "一个类由哪些部分组成（以 Circle 为例）",
            en: "The Parts of a Class (Using Circle as an Example)",
            ms: "Bahagian-bahagian Sesuatu Kelas (Menggunakan Circle sebagai Contoh)"
          },
          root: {
            label: {
              zh: "类 Circle",
              en: "Class Circle",
              ms: "Kelas Circle"
            }
          },
          branches: [
            {
              label: {
                zh: "数据字段",
                en: "Data field",
                ms: "Medan data"
              },
              leaves: [
                {
                  label: {
                    zh: "private double radius",
                    en: "private double radius",
                    ms: "private double radius"
                  }
                },
                {
                  label: {
                    zh: "又称属性或状态",
                    en: "Also called attribute or state",
                    ms: "Juga dipanggil atribut atau keadaan"
                  }
                }
              ]
            },
            {
              label: {
                zh: "构造方法",
                en: "Constructor",
                ms: "Pembina"
              },
              leaves: [
                {
                  label: {
                    zh: "默认构造方法 Circle()",
                    en: "Default constructor Circle()",
                    ms: "Pembina lalai Circle()"
                  }
                },
                {
                  label: {
                    zh: "带参构造方法 Circle(radius)",
                    en: "Parameterized constructor Circle(radius)",
                    ms: "Pembina berparameter Circle(radius)"
                  }
                }
              ]
            },
            {
              label: {
                zh: "方法",
                en: "Method",
                ms: "Kaedah"
              },
              leaves: [
                {
                  label: {
                    zh: "访问器 getRadius()",
                    en: "Accessor getRadius()",
                    ms: "Pengakses getRadius()"
                  }
                },
                {
                  label: {
                    zh: "修改器 setRadius()",
                    en: "Mutator setRadius()",
                    ms: "Pengubah setRadius()"
                  }
                },
                {
                  label: {
                    zh: "findArea() 与 toString()",
                    en: "findArea() and toString()",
                    ms: "findArea() dan toString()"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "UML 记法中，数据字段与 static 成员在图中带下划线或加减号。",
            en: "In UML notation data fields are listed in the middle compartment and static members are underlined.",
            ms: "Dalam notasi UML, medan data disenaraikan di petak tengah dan ahli statik digariskan."
          }
        },
        {
          type: "compare",
          title: {
            zh: "基本类型变量 vs 对象类型变量",
            en: "Primitive Variable vs Object Variable",
            ms: "Pemboleh Ubah Primitif berbanding Pemboleh Ubah Objek"
          },
          cols: [
            {
              head: {
                zh: "基本类型（int）",
                en: "Primitive type (int)",
                ms: "Jenis primitif (int)"
              },
              items: [
                {
                  label: {
                    zh: "存放实际的值",
                    en: "Stores the actual value",
                    ms: "Menyimpan nilai sebenar"
                  }
                },
                {
                  label: {
                    zh: "赋值时复制出一个新值 i = j",
                    en: "Assignment copies a new value, i = j",
                    ms: "Pemberian nilai menyalin nilai baharu, i = j"
                  }
                },
                {
                  label: {
                    zh: "例子：int x = 5;",
                    en: "Example: int x = 5;",
                    ms: "Contoh: int x = 5;"
                  }
                }
              ]
            },
            {
              head: {
                zh: "对象类型（Circle）",
                en: "Object type (Circle)",
                ms: "Jenis objek (Circle)"
              },
              items: [
                {
                  label: {
                    zh: "存放对象的引用",
                    en: "Stores a reference to an object",
                    ms: "Menyimpan rujukan kepada objek"
                  }
                },
                {
                  label: {
                    zh: "赋值时共享同一个对象 c1 = c2",
                    en: "Assignment shares the same object, c1 = c2",
                    ms: "Pemberian nilai berkongsi objek yang sama, c1 = c2"
                  }
                },
                {
                  label: {
                    zh: "例子：Circle c = new Circle();",
                    en: "Example: Circle c = new Circle();",
                    ms: "Contoh: Circle c = new Circle();"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "改 c2.radius 也会改变 c1.radius，因为两者指向同一个对象。",
            en: "Changing c2.radius also changes c1.radius because both refer to the same object.",
            ms: "Mengubah c2.radius turut mengubah c1.radius kerana kedua-duanya merujuk objek yang sama."
          }
        }
      ],
      exam: [
        {
          zh: "常考：按 UML 记法写出 Circle 类的完整 Java 代码（private 数据字段、默认与带参构造方法、get/set 方法、findArea），并说明构造方法与普通方法的三点区别。",
          en: "A typical question asks you to write the complete Java code of the Circle class following its UML notation (private data field, default and parameterized constructors, get and set methods, findArea) and to state the three differences between a constructor and an ordinary method.",
          ms: "Soalan lazim meminta anda menulis kod Java lengkap bagi kelas Circle mengikut notasi UMLnya (medan data private, pembina lalai dan berparameter, kaedah get dan set, findArea) serta menyatakan tiga perbezaan antara pembina dengan kaedah biasa."
        },
        {
          zh: "易错点：局部变量没有默认值，未初始化就使用会编译错误；对象赋值 c1 = c2 不是复制对象，之后修改 c2.radius 会同时影响 c1，原来的对象则被 JVM 回收。",
          en: "Common mistakes: a local variable has no default value, so using it before initialisation is a compilation error; the object assignment c1 = c2 does not copy the object, so changing c2.radius afterwards also changes c1, while the original object is collected by the JVM.",
          ms: "Kesilapan biasa: pemboleh ubah setempat tiada nilai lalai, jadi menggunakannya sebelum diinisialisasi ialah ralat kompilasi; pemberian nilai c1 = c2 tidak menyalin objek, jadi mengubah c2.radius selepas itu turut mengubah c1, manakala objek asal dikumpul oleh JVM."
        },
        {
          zh: "常考：解释为什么要封装数据字段（保护数据、使类易于维护），并说明 private 与 get/set 如何配合；同时要能区分实例变量与 static 变量（一份还是每个对象各一份）。",
          en: "A typical question asks why data fields should be encapsulated (to protect the data and make the class easy to maintain) and how private works together with get and set; you should also be able to distinguish an instance variable from a static variable (one copy versus one copy per object).",
          ms: "Soalan lazim menanyakan mengapa medan data perlu dienkapsulasi (untuk melindungi data dan memudahkan penyelenggaraan kelas) dan bagaimana private berfungsi bersama get dan set; anda juga perlu membezakan pemboleh ubah instans dengan pemboleh ubah statik (satu salinan berbanding satu salinan bagi setiap objek)."
        }
      ],
      mnemonic: {
        zh: "类像模具，对象是成品；私有数据靠 get/set 进出。",
        en: "A class is the mould and an object is the product; private data goes in and out through get and set.",
        ms: "Kelas ialah acuan dan objek ialah hasilnya; data peribadi masuk dan keluar melalui get dan set."
      }
    },
    {
      id: "oop-05",
      num: 5,
      title: {
        zh: "字符串",
        en: "Strings",
        ms: "Rentetan Aksara"
      },
      file: "00p/SESSION 20262027_CHAPTER5.pptx",
      pages: 33,
      summary: {
        zh: "本章介绍 Java 中字符串的处理。字符串是一串字符，在 Java 中字符串是对象，Java 提供 String、StringBuffer 和 StringTokenizer 三个类来处理字符串，其中 String 对象不可修改，而 StringBuffer 可以修改。本章详细讲解 String 类的常用操作：构造字符串、求长度、取单个字符、拼接、取子串、比较（== 与 equals 以及 compareTo）、查找字符或子串、大小写转换、替换与去除空白，以及数值与字符串之间的转换。接着介绍 Character 类用于判断和转换字符、StringBuffer 类的 append、insert、delete、replace、reverse 等修改方法，最后附上 ASCII 表帮助理解 compareTo 的比较结果。",
        en: "This chapter introduces string processing in Java. A string is a sequence of characters, and in Java a string is an object; Java provides the String, StringBuffer and StringTokenizer classes, where a String object cannot be changed while a StringBuffer can be modified. The chapter explains the common String operations in detail: constructing strings, obtaining the length, retrieving individual characters, concatenation, substrings, comparison (== versus equals and compareTo), finding a character or substring, case conversion, replacement and trimming, and conversion between numeric values and strings. It then presents the Character class for testing and converting characters and the StringBuffer class with its append, insert, delete, replace and reverse methods, and ends with the ASCII table that explains the results of compareTo.",
        ms: "Bab ini memperkenalkan pemprosesan rentetan aksara dalam Java. Rentetan aksara ialah jujukan aksara, dan dalam Java rentetan aksara ialah objek; Java menyediakan kelas String, StringBuffer dan StringTokenizer, dengan objek String tidak boleh diubah manakala StringBuffer boleh diubah suai. Bab ini menerangkan operasi String yang biasa dengan terperinci: membina rentetan, mendapatkan panjang, mengambil aksara individu, penggabungan, subrentetan, perbandingan (== berbanding equals dan compareTo), mencari aksara atau subrentetan, penukaran huruf besar atau kecil, penggantian dan pemangkasan ruang, serta penukaran antara nilai numerik dengan rentetan. Bab ini kemudian memperkenalkan kelas Character untuk menguji dan menukar aksara serta kelas StringBuffer dengan kaedah append, insert, delete, replace dan reverse, dan diakhiri dengan jadual ASCII yang menjelaskan hasil compareTo."
      },
      points: [
        {
          zh: "字符串是一串字符，在其他语言中常被当作字符数组，但在 Java 中字符串是对象；Java 提供 String、StringBuffer 和 StringTokenizer 三个类来存储和处理字符串。",
          en: "A string is a sequence of characters; many languages treat strings as arrays of characters, but in Java a string is an object, and Java provides the String, StringBuffer and StringTokenizer classes for storing and processing strings.",
          ms: "Rentetan aksara ialah jujukan aksara; banyak bahasa menganggap rentetan sebagai tatasusunan aksara, tetapi dalam Java rentetan ialah objek, dan Java menyediakan kelas String, StringBuffer serta StringTokenizer untuk menyimpan dan memproses rentetan."
        },
        {
          zh: "String 类适合存储和处理字符串，但用它创建的对象不可修改（immutable）：执行 s = \"HTML\" 并不是改变原来对象的内容，而是让 s 指向一个新的字符串对象，原来的对象变成未被引用的对象。",
          en: "The String class is efficient for storing and processing strings, but the objects it creates cannot be changed (they are immutable): executing s = \"HTML\" does not change the contents of the old object, it makes s refer to a new string object while the old object becomes unreferenced.",
          ms: "Kelas String cekap untuk menyimpan dan memproses rentetan, tetapi objek yang diciptanya tidak boleh diubah (tidak boleh ubah): melaksanakan s = \"HTML\" tidak mengubah kandungan objek lama, sebaliknya menjadikan s merujuk objek rentetan baharu manakala objek lama menjadi tidak dirujuk."
        },
        {
          zh: "因为字符串不可变又经常使用，JVM 为相同字符序列的字面量只保留一个实例，称为 interned 字符串；因此 s1 == s3 为 true，而用 new String(...) 创建的 s2 会另建对象，使 s1 == s2 为 false。",
          en: "Because strings are immutable and frequently used, the JVM keeps a unique instance for string literals with the same character sequence, called an interned string; therefore s1 == s3 is true, while s2 created with new String(...) is a separate object, so s1 == s2 is false.",
          ms: "Kerana rentetan tidak boleh ubah dan kerap digunakan, JVM menyimpan satu instans unik bagi literal rentetan dengan jujukan aksara yang sama, yang dipanggil rentetan terintern; oleh itu s1 == s3 adalah benar, manakala s2 yang dicipta dengan new String(...) ialah objek berasingan, jadi s1 == s2 adalah palsu."
        },
        {
          zh: "比较字符串时，== 只检查两个引用是否指向同一个对象，equals() 检查内容是否相同，equalsIgnoreCase() 忽略大小写；compareTo() 按字典序返回正数、0 或负数，大写字母排在相应小写字母之前（可用 ASCII 表理解）。",
          en: "When comparing strings, == only checks whether two references point to the same object, equals() checks whether the contents are the same and equalsIgnoreCase() ignores case; compareTo() returns a positive number, zero or a negative number according to alphabetical order, with uppercase letters coming before lowercase ones (the ASCII table explains this).",
          ms: "Semasa membandingkan rentetan, == hanya menyemak sama ada dua rujukan menunjuk objek yang sama, equals() menyemak sama ada kandungannya sama dan equalsIgnoreCase() mengabaikan huruf besar atau kecil; compareTo() mengembalikan nombor positif, sifar atau negatif mengikut susunan abjad, dengan huruf besar mendahului huruf kecil yang sepadan (jadual ASCII menjelaskannya)."
        },
        {
          zh: "length() 返回字符串中的字符个数，charAt(index) 取出指定下标的字符；下标从 0 开始，所以最后一个字符的下标是 length() - 1，而且不能用 message[0] 这种数组写法。",
          en: "length() returns the number of characters in a string and charAt(index) retrieves the character at a given index; indices start from 0, so the last character has index length() - 1, and the array notation message[0] cannot be used.",
          ms: "length() mengembalikan bilangan aksara dalam rentetan dan charAt(index) mengambil aksara pada indeks tertentu; indeks bermula dari 0, jadi aksara terakhir mempunyai indeks length() - 1, dan notasi tatasusunan message[0] tidak boleh digunakan."
        },
        {
          zh: "拼接字符串可以用 concat() 或加号，例如 s1.concat(s2) 等价于 s1 + s2；substring(beginIndex, endIndex) 取从 beginIndex 到 endIndex 减一 的子串，也就是不包含 endIndex 那个字符。",
          en: "Strings can be concatenated with concat() or the plus operator, for example s1.concat(s2) is equivalent to s1 + s2; substring(beginIndex, endIndex) returns the substring from beginIndex up to but not including endIndex.",
          ms: "Rentetan boleh digabungkan dengan concat() atau pengendali tambah, contohnya s1.concat(s2) bersamaan s1 + s2; substring(beginIndex, endIndex) mengembalikan subrentetan daripada beginIndex sehingga tidak termasuk endIndex."
        },
        {
          zh: "indexOf() 和 lastIndexOf() 返回字符或子串第一次（最后一次）出现的下标，找不到时返回 -1；此外还有 replace()/replaceFirst() 替换、trim() 去掉两端空白、toUpperCase()/toLowerCase() 转换大小写。",
          en: "indexOf() and lastIndexOf() return the index of the first (or last) occurrence of a character or substring and return -1 when it is not found; there are also replace() and replaceFirst() for replacement, trim() to remove blank characters at both ends, and toUpperCase() and toLowerCase() for case conversion.",
          ms: "indexOf() dan lastIndexOf() mengembalikan indeks kemunculan pertama (atau terakhir) sesuatu aksara atau subrentetan dan mengembalikan -1 apabila tidak ditemui; terdapat juga replace() dan replaceFirst() untuk penggantian, trim() untuk membuang ruang di kedua-dua hujung, serta toUpperCase() dan toLowerCase() untuk penukaran huruf besar atau kecil."
        },
        {
          zh: "数值与字符串之间可以互相转换：用 String.valueOf(num) 或 Double.toString(num) 把数值转成字符串，用 Double.parseDouble(input) 或 Integer.parseInt(input) 把字符串转成数值；注意对 null 对象调用方法会抛出 NullPointerException。",
          en: "Numeric values and strings can be converted into each other: String.valueOf(num) or Double.toString(num) converts a value into a string, while Double.parseDouble(input) or Integer.parseInt(input) converts a string into a value; note that calling a method on a null object throws a NullPointerException.",
          ms: "Nilai numerik dan rentetan boleh ditukar antara satu sama lain: String.valueOf(num) atau Double.toString(num) menukar nilai kepada rentetan, manakala Double.parseDouble(input) atau Integer.parseInt(input) menukar rentetan kepada nilai; ambil perhatian bahawa memanggil kaedah pada objek null akan melontar NullPointerException."
        },
        {
          zh: "Character 类用于处理单个字符：isDigit()、isLetter()、isLetterOrDigit()、isUpperCase()、isLowerCase() 用来判断，toUpperCase()、toLowerCase() 用来转换，compareTo() 与 equals() 用来比较。",
          en: "The Character class handles individual characters: isDigit(), isLetter(), isLetterOrDigit(), isUpperCase() and isLowerCase() test a character, toUpperCase() and toLowerCase() convert it, and compareTo() and equals() compare characters.",
          ms: "Kelas Character mengendalikan aksara tunggal: isDigit(), isLetter(), isLetterOrDigit(), isUpperCase() dan isLowerCase() menguji sesuatu aksara, toUpperCase() dan toLowerCase() menukarnya, manakala compareTo() dan equals() membandingkan aksara."
        },
        {
          zh: "StringBuffer（以及 StringBuilder）比 String 更灵活，可以在字符串中加入、插入或追加新内容，常用方法有 append()、insert()、delete()、deleteCharAt()、replace()、reverse() 和 setCharAt()。",
          en: "StringBuffer (and StringBuilder) is more flexible than String: new contents can be added, inserted or appended, and its common methods are append(), insert(), delete(), deleteCharAt(), replace(), reverse() and setCharAt().",
          ms: "StringBuffer (dan StringBuilder) lebih fleksibel daripada String: kandungan baharu boleh ditambah, disisip atau dilampirkan, dan kaedah biasanya ialah append(), insert(), delete(), deleteCharAt(), replace(), reverse() dan setCharAt()."
        }
      ],
      terms: [
        {
          en: "String",
          zh: "字符串类",
          ms: "String",
          def: {
            zh: "String 是 Java 中表示字符串的类，用 String message = new String(\"text\") 或简写 String message = \"text\" 创建。",
            en: "String is the Java class that represents a string, created with String message = new String(\"text\") or the shorthand String message = \"text\".",
            ms: "String ialah kelas Java yang mewakili rentetan aksara, dicipta dengan String message = new String(\"text\") atau bentuk ringkas String message = \"text\"."
          }
        },
        {
          en: "Immutable",
          zh: "不可变",
          ms: "Tidak Boleh Ubah",
          def: {
            zh: "不可变指 String 对象一旦创建，其内容就不能被改变；看起来像修改的语句其实是创建了新的字符串对象。",
            en: "Immutable means that once a String object is created its contents cannot be changed; a statement that looks like a modification actually creates a new string object.",
            ms: "Tidak boleh ubah bermaksud apabila objek String dicipta, kandungannya tidak boleh diubah; penyataan yang kelihatan seperti pengubahsuaian sebenarnya mencipta objek rentetan baharu."
          }
        },
        {
          en: "Interned string",
          zh: "驻留字符串",
          ms: "Rentetan Terintern",
          def: {
            zh: "JVM 对字符序列相同的字符串字面量只使用一个唯一实例，这个实例称为 interned；所以两个字面量用 == 比较为 true。",
            en: "The JVM uses a unique instance for string literals with the same character sequence; this instance is called interned, so two literals compare equal with ==.",
            ms: "JVM menggunakan satu instans unik bagi literal rentetan dengan jujukan aksara yang sama; instans ini dipanggil terintern, jadi dua literal adalah sama dengan ==."
          }
        },
        {
          en: "equals()",
          zh: "equals() 方法",
          ms: "equals()",
          def: {
            zh: "equals() 比较两个字符串的内容是否相同，与 == 只比较引用不同，判断文本相等应该用它。",
            en: "equals() compares whether two strings have the same contents; unlike ==, which compares references only, it should be used to test text equality.",
            ms: "equals() membandingkan sama ada dua rentetan mempunyai kandungan yang sama; berbeza daripada == yang hanya membandingkan rujukan, ia patut digunakan untuk menguji kesamaan teks."
          }
        },
        {
          en: "compareTo()",
          zh: "compareTo() 方法",
          ms: "compareTo()",
          def: {
            zh: "compareTo() 按字典序比较两个字符串，返回正数表示当前字符串较大、0 表示相同、负数表示较小。",
            en: "compareTo() compares two strings in alphabetical order; a positive result means this string is greater, 0 means they are the same and a negative result means it is smaller.",
            ms: "compareTo() membandingkan dua rentetan mengikut susunan abjad; hasil positif bermaksud rentetan ini lebih besar, 0 bermaksud sama dan hasil negatif bermaksud lebih kecil."
          }
        },
        {
          en: "charAt()",
          zh: "charAt() 方法",
          ms: "charAt()",
          def: {
            zh: "charAt(index) 返回字符串中指定下标的字符，例如 \"Welcome to Java\".charAt(0) 得到 W。",
            en: "charAt(index) returns the character at the specified index, for example \"Welcome to Java\".charAt(0) gives W.",
            ms: "charAt(index) mengembalikan aksara pada indeks yang dinyatakan, contohnya \"Welcome to Java\".charAt(0) menghasilkan W."
          }
        },
        {
          en: "substring()",
          zh: "substring() 方法",
          ms: "substring()",
          def: {
            zh: "substring(begin, end) 返回从 begin 到 end 减一 的子串，substring(begin) 返回从 begin 到末尾的子串。",
            en: "substring(begin, end) returns the substring from begin up to end minus one, while substring(begin) returns the substring from begin to the end.",
            ms: "substring(begin, end) mengembalikan subrentetan daripada begin sehingga end tolak satu, manakala substring(begin) mengembalikan subrentetan daripada begin hingga hujung."
          }
        },
        {
          en: "Concatenation",
          zh: "拼接",
          ms: "Penggabungan",
          def: {
            zh: "拼接把两个字符串接在一起，可以用 concat() 或加号，例如 s1.concat(s2) 得到 Welcome to Java and HTML。",
            en: "Concatenation joins two strings, either with concat() or the plus operator, for example s1.concat(s2) gives Welcome to Java and HTML.",
            ms: "Penggabungan mencantumkan dua rentetan, sama ada dengan concat() atau pengendali tambah, contohnya s1.concat(s2) menghasilkan Welcome to Java and HTML."
          }
        },
        {
          en: "indexOf()",
          zh: "indexOf() 方法",
          ms: "indexOf()",
          def: {
            zh: "indexOf() 返回字符或子串第一次出现的下标，找不到时返回 -1，例如 \"Welcome to Java\".indexOf(\"come\") 得到 3。",
            en: "indexOf() returns the index of the first occurrence of a character or substring, or -1 if it is not found; for example \"Welcome to Java\".indexOf(\"come\") gives 3.",
            ms: "indexOf() mengembalikan indeks kemunculan pertama sesuatu aksara atau subrentetan, atau -1 jika tidak ditemui; contohnya \"Welcome to Java\".indexOf(\"come\") menghasilkan 3."
          }
        },
        {
          en: "Character class",
          zh: "Character 类",
          ms: "Kelas Character",
          def: {
            zh: "Character 类把单个字符包装成对象，并提供 isDigit()、isLetter()、toUpperCase() 等静态方法。",
            en: "The Character class wraps a single char value as an object and provides static methods such as isDigit(), isLetter() and toUpperCase().",
            ms: "Kelas Character membalut satu nilai char sebagai objek dan menyediakan kaedah statik seperti isDigit(), isLetter() dan toUpperCase()."
          }
        },
        {
          en: "StringBuffer",
          zh: "StringBuffer 类",
          ms: "StringBuffer",
          def: {
            zh: "StringBuffer 表示可以修改的字符串，支持 append()、insert()、delete()、reverse() 等操作，适合需要频繁修改文本的场合。",
            en: "StringBuffer represents a modifiable string and supports operations such as append(), insert(), delete() and reverse(); it suits situations where text is modified frequently.",
            ms: "StringBuffer mewakili rentetan yang boleh diubah dan menyokong operasi seperti append(), insert(), delete() dan reverse(); ia sesuai apabila teks kerap diubah suai."
          }
        },
        {
          en: "NullPointerException",
          zh: "空指针异常",
          ms: "NullPointerException",
          def: {
            zh: "对一个值为 null 的对象调用方法时会抛出 NullPointerException，例如对没有内容的字符串引用调用 length()。",
            en: "Calling a method on an object whose value is null throws a NullPointerException, for example calling length() on a string reference that holds nothing.",
            ms: "Memanggil kaedah pada objek yang nilainya null akan melontar NullPointerException, contohnya memanggil length() pada rujukan rentetan yang kosong."
          }
        },
        {
          en: "ASCII",
          zh: "ASCII 码",
          ms: "ASCII",
          def: {
            zh: "ASCII 表给每个字符一个数字编码，compareTo() 正是按这些编码值比较字符，所以大写字母排在小写字母之前。",
            en: "The ASCII table gives every character a numeric code; compareTo() compares characters by these code values, which is why uppercase letters come before lowercase letters.",
            ms: "Jadual ASCII memberikan setiap aksara satu kod nombor; compareTo() membandingkan aksara mengikut nilai kod ini, sebab itulah huruf besar mendahului huruf kecil."
          }
        }
      ],
      diagrams: [
        {
          type: "matrix",
          title: {
            zh: "String 常用方法速查（以 \"Welcome to Java\" 为例）",
            en: "Quick Reference of Common String Methods (using \"Welcome to Java\")",
            ms: "Rujukan Pantas Kaedah String Biasa (menggunakan \"Welcome to Java\")"
          },
          cols: [
            {
              zh: "作用",
              en: "Purpose",
              ms: "Tujuan"
            },
            {
              zh: "示例结果",
              en: "Example result",
              ms: "Contoh hasil"
            }
          ],
          rows: [
            {
              head: {
                zh: "length()",
                en: "length()",
                ms: "length()"
              },
              cells: [
                {
                  zh: "返回字符个数",
                  en: "Returns the number of characters",
                  ms: "Mengembalikan bilangan aksara"
                },
                {
                  zh: "15",
                  en: "15",
                  ms: "15"
                }
              ]
            },
            {
              head: {
                zh: "charAt(0)",
                en: "charAt(0)",
                ms: "charAt(0)"
              },
              cells: [
                {
                  zh: "取出指定下标的字符",
                  en: "Retrieves the character at an index",
                  ms: "Mengambil aksara pada indeks tertentu"
                },
                {
                  zh: "'W'",
                  en: "'W'",
                  ms: "'W'"
                }
              ]
            },
            {
              head: {
                zh: "substring(0, 11)",
                en: "substring(0, 11)",
                ms: "substring(0, 11)"
              },
              cells: [
                {
                  zh: "取从 begin 到 end 减一 的子串",
                  en: "Substring from begin up to end minus one",
                  ms: "Subrentetan daripada begin sehingga end tolak satu"
                },
                {
                  zh: "\"Welcome to \"",
                  en: "\"Welcome to \"",
                  ms: "\"Welcome to \""
                }
              ]
            },
            {
              head: {
                zh: "indexOf(\"come\")",
                en: "indexOf(\"come\")",
                ms: "indexOf(\"come\")"
              },
              cells: [
                {
                  zh: "首次出现的下标，找不到返回 -1",
                  en: "Index of the first occurrence, -1 if not found",
                  ms: "Indeks kemunculan pertama, -1 jika tidak ditemui"
                },
                {
                  zh: "3",
                  en: "3",
                  ms: "3"
                }
              ]
            },
            {
              head: {
                zh: "replace('e','A')",
                en: "replace('e','A')",
                ms: "replace('e','A')"
              },
              cells: [
                {
                  zh: "把所有 e 换成 A",
                  en: "Replaces every e with A",
                  ms: "Menggantikan setiap e dengan A"
                },
                {
                  zh: "\"WAlcomA\"",
                  en: "\"WAlcomA\"",
                  ms: "\"WAlcomA\""
                }
              ]
            },
            {
              head: {
                zh: "trim()",
                en: "trim()",
                ms: "trim()"
              },
              cells: [
                {
                  zh: "去掉两端的空白字符",
                  en: "Removes blank characters at both ends",
                  ms: "Membuang aksara ruang di kedua-dua hujung"
                },
                {
                  zh: "\" Welcome \" 变成 \"Welcome\"",
                  en: "\" Welcome \" becomes \"Welcome\"",
                  ms: "\" Welcome \" menjadi \"Welcome\""
                }
              ]
            }
          ],
          legend: [
            {
              zh: "字符串下标从 0 开始，length() 返回字符个数而不是最后一个下标。",
              en: "String indices start from 0, and length() returns the number of characters, not the last index.",
              ms: "Indeks rentetan bermula dari 0, dan length() mengembalikan bilangan aksara, bukan indeks terakhir."
            }
          ]
        },
        {
          type: "compare",
          title: {
            zh: "String 与 StringBuffer 的对比",
            en: "String versus StringBuffer",
            ms: "String berbanding StringBuffer"
          },
          cols: [
            {
              head: {
                zh: "String",
                en: "String",
                ms: "String"
              },
              items: [
                {
                  label: {
                    zh: "内容不可修改",
                    en: "The contents cannot be changed",
                    ms: "Kandungan tidak boleh diubah"
                  }
                },
                {
                  label: {
                    zh: "字面量相同则共享 interned 对象",
                    en: "Identical literals share an interned object",
                    ms: "Literal yang sama berkongsi objek terintern"
                  }
                },
                {
                  label: {
                    zh: "用 == 比较引用、用 equals() 比较内容",
                    en: "Uses == for references and equals() for contents",
                    ms: "Menggunakan == bagi rujukan dan equals() bagi kandungan"
                  }
                },
                {
                  label: {
                    zh: "适合存放不需改动的文本",
                    en: "Good for text that does not change",
                    ms: "Sesuai untuk teks yang tidak berubah"
                  }
                }
              ]
            },
            {
              head: {
                zh: "StringBuffer",
                en: "StringBuffer",
                ms: "StringBuffer"
              },
              items: [
                {
                  label: {
                    zh: "内容可以修改（可增、可插、可删）",
                    en: "The contents can be modified (add, insert, delete)",
                    ms: "Kandungan boleh diubah (tambah, sisip, hapus)"
                  }
                },
                {
                  label: {
                    zh: "每次修改在同一个对象上进行",
                    en: "Every modification happens on the same object",
                    ms: "Setiap pengubahsuaian berlaku pada objek yang sama"
                  }
                },
                {
                  label: {
                    zh: "常用 append()、insert()、delete()、reverse()",
                    en: "Commonly uses append(), insert(), delete() and reverse()",
                    ms: "Biasa menggunakan append(), insert(), delete() dan reverse()"
                  }
                },
                {
                  label: {
                    zh: "适合频繁修改字符串的场合",
                    en: "Good when a string is modified frequently",
                    ms: "Sesuai apabila rentetan kerap diubah suai"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "讲义指出 String 效率高但不可改，StringBuffer 更灵活。",
            en: "The lecture notes that String is efficient but unchangeable, while StringBuffer is more flexible.",
            ms: "Kuliah menyatakan String cekap tetapi tidak boleh diubah, manakala StringBuffer lebih fleksibel."
          }
        }
      ],
      exam: [
        {
          zh: "常考：解释 == 与 equals() 的区别，并预测 s1 == s2、s1.equals(s2) 的结果，关键是要提到用 new String(...) 会创建新对象，而字面量共享 interned 实例。",
          en: "A typical question asks you to explain the difference between == and equals() and to predict the results of s1 == s2 and s1.equals(s2); the key point is that new String(...) creates a new object while literals share the interned instance.",
          ms: "Soalan lazim meminta anda menjelaskan perbezaan antara == dengan equals() dan meramalkan hasil s1 == s2 serta s1.equals(s2); perkara penting ialah new String(...) mencipta objek baharu manakala literal berkongsi instans terintern."
        },
        {
          zh: "易错点：substring(start, end) 不包含 end 位置的字符；indexOf() 找不到时返回 -1 而不是 0；charAt() 不能用 message[0]；字符串长度用 length() 方法而不是属性。",
          en: "Common mistakes: substring(start, end) excludes the character at end; indexOf() returns -1 instead of 0 when the text is not found; charAt() must be used instead of message[0]; and the length of a string is obtained with the length() method, not a field.",
          ms: "Kesilapan biasa: substring(start, end) tidak memasukkan aksara pada kedudukan end; indexOf() mengembalikan -1 dan bukan 0 apabila teks tidak ditemui; charAt() mesti digunakan dan bukan message[0]; dan panjang rentetan diperoleh dengan kaedah length(), bukan medan."
        },
        {
          zh: "常考：写出把数字转成字符串、把输入对话框读到的字符串转成 double 的语句（String.valueOf / Double.parseDouble），并说明 String 不可变而 StringBuffer 可以修改，各自适合什么场合。",
          en: "A typical question asks you to write the statements that convert a number into a string and convert a string read from an input dialog into a double (String.valueOf and Double.parseDouble), and to explain that String is immutable while StringBuffer can be modified and when each is appropriate.",
          ms: "Soalan lazim meminta anda menulis penyataan untuk menukar nombor kepada rentetan dan menukar rentetan daripada dialog input kepada double (String.valueOf dan Double.parseDouble), serta menerangkan bahawa String tidak boleh ubah manakala StringBuffer boleh diubah suai dan bila setiap satu sesuai digunakan."
        }
      ],
      mnemonic: {
        zh: "String 不可改，Buffer 可增删；== 看地址，equals 看内容。",
        en: "String cannot change, Buffer can add and delete; == checks the address, equals checks the contents.",
        ms: "String tidak boleh berubah, Buffer boleh tambah dan hapus; == memeriksa alamat, equals memeriksa kandungan."
      }
    },
    {
      id: "oop-06",
      num: 6,
      title: {
        zh: "继承与多态",
        en: "Inheritance and Polymorphism",
        ms: "Pewarisan dan Polimorfisme"
      },
      file: "00p/SESSION 20262027_CHAPTER6.pptx",
      pages: 37,
      summary: {
        zh: "本章讲解 Java 的继承与多态。继承让新类可以从已有类派生出来，派生类称为子类，被继承的类称为父类（基类），子类继承父类所有可访问的数据字段和方法，还可以增加新属性、新方法或重写父类的方法。讲义用 Circle 与 Cylinder 的例子说明 extends 关键字、super 关键字、构造方法链以及方法重写与重载的区别，并解释为什么父类的构造方法不会被继承但一定会被调用。接着讲解 Object 类及其 toString() 与 equals() 方法、多态与动态绑定、泛型编程、对象的强制类型转换与 instanceof 运算符，最后说明 protected 修饰符、四种可见性的强弱顺序以及 final 修饰符的用法。",
        en: "This chapter explains inheritance and polymorphism in Java. Inheritance allows a new class to be derived from an existing class: the derived class is the subclass and the inherited class is the superclass (also called the parent or base class), and a subclass inherits all accessible data fields and methods of its superclass while it may also add new properties, add new methods or override the methods of the superclass. Using the Circle and Cylinder example, the chapter explains the extends keyword, the super keyword, constructor chaining and the difference between method overriding and overloading, and why a superclass constructor is not inherited but is always invoked. It then covers the Object class with its toString() and equals() methods, polymorphism and dynamic binding, generic programming, casting objects with the instanceof operator, and finally the protected modifier, the order of visibility of the four access levels and the final modifier.",
        ms: "Bab ini menerangkan pewarisan dan polimorfisme dalam Java. Pewarisan membolehkan kelas baharu diterbitkan daripada kelas sedia ada: kelas terbitan dipanggil subkelas manakala kelas yang diwarisi dipanggil superkelas (kelas induk atau asas), dan subkelas mewarisi semua medan data serta kaedah superkelas yang boleh dicapai, di samping boleh menambah sifat baharu, menambah kaedah baharu atau menggantikan kaedah superkelas. Dengan contoh Circle dan Cylinder, bab ini menerangkan kata kunci extends, kata kunci super, rangkaian pembina serta perbezaan antara penggantian kaedah dengan beban lampau kaedah, dan sebab pembina superkelas tidak diwarisi tetapi sentiasa dipanggil. Seterusnya bab ini merangkumi kelas Object dengan kaedah toString() dan equals(), polimorfisme dan pengikatan dinamik, pengaturcaraan generik, penukaran jenis objek dengan pengendali instanceof, dan akhir sekali pengubah suai protected, susunan kebolehlihatan empat tahap capaian serta penggunaan pengubah suai final."
      },
      points: [
        {
          zh: "面向对象允许从已有类派生出新类，这称为继承；Java 中每个类都直接或间接继承自 java.lang.Object，如果没有写 extends，编译器就默认继承 Object。",
          en: "Object-oriented programming allows new classes to be derived from existing classes, which is called inheritance; every class in Java inherits from java.lang.Object either explicitly or implicitly, so if no extends clause is written the class inherits Object by default.",
          ms: "Pengaturcaraan berorientasikan objek membolehkan kelas baharu diterbitkan daripada kelas sedia ada, dan ini dipanggil pewarisan; setiap kelas dalam Java mewarisi java.lang.Object sama ada secara tersurat atau tersirat, jadi jika tiada klausa extends ditulis, kelas itu mewarisi Object secara lalai."
        },
        {
          zh: "继承的术语：从另一个类派生出来的类 C1 称为子类，被继承的类 C2 称为父类，父类也叫基类，子类也叫子类、扩展类或派生类。",
          en: "In inheritance terminology, a class C1 derived from another class C2 is called the subclass and C2 is the superclass; a superclass is also known as a parent class or base class, and a subclass is also called a child class, extended class or derived class.",
          ms: "Dalam istilah pewarisan, kelas C1 yang diterbitkan daripada kelas C2 dipanggil subkelas dan C2 dipanggil superkelas; superkelas juga dikenali sebagai kelas induk atau kelas asas, manakala subkelas juga dipanggil kelas anak, kelas lanjutan atau kelas terbitan."
        },
        {
          zh: "子类可以继承父类所有可访问的数据字段和方法，还可以增加新的属性、增加新的方法或者重写父类的方法，例如 Cylinder 继承 Circle 的 radius，再增加自己的 length。",
          en: "A subclass inherits all accessible data fields and methods of its superclass, and it can also add new properties, add new methods or override the methods of the superclass; for example Cylinder inherits radius from Circle and adds its own length.",
          ms: "Subkelas mewarisi semua medan data dan kaedah superkelas yang boleh dicapai, dan ia juga boleh menambah sifat baharu, menambah kaedah baharu atau menggantikan kaedah superkelas; contohnya Cylinder mewarisi radius daripada Circle dan menambah length sendiri."
        },
        {
          zh: "super 关键字指向父类，有两种用法：super() 或 super(参数) 调用父类构造方法，super.method(参数) 调用父类的方法；父类的构造方法不会被继承，但子类构造方法总会先调用它（构造方法链），例如 new Faculty() 会依次调用 Person、Employee、Faculty 的构造方法。",
          en: "The super keyword refers to the superclass and has two uses: super() or super(parameters) calls a superclass constructor, and super.method(parameters) calls a superclass method; superclass constructors are not inherited, but a subclass constructor always invokes one first (constructor chaining), so new Faculty() invokes the Person, then Employee, then Faculty constructors in that order.",
          ms: "Kata kunci super merujuk kepada superkelas dan mempunyai dua kegunaan: super() atau super(parameter) memanggil pembina superkelas, dan super.method(parameter) memanggil kaedah superkelas; pembina superkelas tidak diwarisi, tetapi pembina subkelas sentiasa memanggilnya dahulu (rangkaian pembina), jadi new Faculty() memanggil pembina Person, kemudian Employee, kemudian Faculty mengikut urutan itu."
        },
        {
          zh: "方法重写指子类用相同的签名和返回类型重新定义父类的方法，例如 Cylinder 重写 findArea() 来计算圆柱的表面积；私有方法不能被重写，静态方法是隐藏而不是重写。",
          en: "Method overriding means a subclass redefines a method of its superclass with the same signature and return type, for example Cylinder overrides findArea() to compute the surface area of a cylinder; a private method cannot be overridden and a redefined static method hides rather than overrides the superclass method.",
          ms: "Penggantian kaedah bermaksud subkelas mentakrif semula kaedah superkelas dengan tandatangan dan jenis pulangan yang sama, contohnya Cylinder menggantikan findArea() untuk mengira luas permukaan silinder; kaedah peribadi tidak boleh digantikan dan kaedah statik yang ditakrif semula menyembunyikan kaedah superkelas dan bukan menggantikannya."
        },
        {
          zh: "Object 类是所有类的根，其中最常用的两个方法是 equals() 和 toString()；toString() 的默认实现返回类名、@ 和一个表示对象的数字（如 Cylinder@15037e5），信息量很低，所以通常要重写它以返回可读的字符串。",
          en: "The Object class is the root of all classes and its two most frequently used methods are equals() and toString(); the default toString() returns the class name, an at sign and a number representing the object (for example Cylinder@15037e5), which is not informative, so it should usually be overridden to return a readable string.",
          ms: "Kelas Object ialah akar bagi semua kelas dan dua kaedahnya yang paling kerap digunakan ialah equals() dan toString(); toString() lalai mengembalikan nama kelas, tanda @ dan satu nombor yang mewakili objek (contohnya Cylinder@15037e5) yang tidak begitu informatif, jadi ia biasanya perlu digantikan untuk mengembalikan rentetan yang mudah dibaca."
        },
        {
          zh: "多态指父类型的变量可以引用子类型的对象，所以把参数声明为 Object 的方法 m(Object x) 可以接收任何对象，这种让一个方法适用于多种类型的方式称为泛型编程。",
          en: "Polymorphism means that a variable of a supertype can refer to an object of a subtype, so a method m(Object x) whose parameter is declared as Object can accept any object; using one method for a wide range of argument types in this way is called generic programming.",
          ms: "Polimorfisme bermaksud pemboleh ubah jenis super boleh merujuk objek jenis sub, jadi kaedah m(Object x) yang parameternya diisytiharkan sebagai Object boleh menerima sebarang objek; menggunakan satu kaedah bagi pelbagai jenis argumen dengan cara ini dipanggil pengaturcaraan generik."
        },
        {
          zh: "动态绑定指 JVM 在运行时才决定调用哪个实现：假设对象 o 是 C1 的实例，而 C1 是 C2 的子类、……、Cn（Object）是最一般的类，JVM 会从最具体的 C1 开始向上查找该方法，找到第一个实现就停止并调用它。",
          en: "Dynamic binding means the JVM decides at runtime which implementation to use: if an object o is an instance of C1, where C1 is a subclass of C2 and so on up to the most general class Cn (Object), the JVM searches for the method from the most specific class C1 upwards, stops at the first implementation it finds and invokes it.",
          ms: "Pengikatan dinamik bermaksud JVM menentukan pada masa larian pelaksanaan mana yang digunakan: jika objek o ialah instans C1, dengan C1 ialah subkelas C2 dan seterusnya sehingga kelas paling umum Cn (Object), JVM mencari kaedah itu bermula dari kelas paling khusus C1 ke atas, berhenti pada pelaksanaan pertama yang ditemui dan memanggilnya."
        },
        {
          zh: "对象可以在继承层次中转换类型：把子类对象赋给父类变量是隐式转换（Object o = new Student()），把父类变量赋给子类变量必须显式转换（Student b = (Student)o），而且最好先用 instanceof 检查对象是否属于该类再转换。",
          en: "Objects can be cast within an inheritance hierarchy: assigning a subclass object to a superclass variable is implicit casting (Object o = new Student()), while assigning a superclass variable to a subclass variable requires explicit casting (Student b = (Student)o), and it is best to test the object with instanceof before casting.",
          ms: "Objek boleh diacukan dalam hierarki pewarisan: memberikan objek subkelas kepada pemboleh ubah superkelas ialah pengacuan tersirat (Object o = new Student()), manakala memberikan pemboleh ubah superkelas kepada pemboleh ubah subkelas memerlukan pengacuan tersurat (Student b = (Student)o), dan sebaiknya uji objek dengan instanceof sebelum mengacukannya."
        },
        {
          zh: "protected 修饰符允许同一个包的类和任何包中的子类访问；可见性由弱到强依次是 private、默认（无修饰符）、protected、public，子类重写方法时不能削弱可访问性；final 类不能被继承，final 变量是常量，final 方法不能被重写。",
          en: "The protected modifier allows access from classes in the same package and from subclasses in any package; visibility increases in the order private, default (no modifier), protected, public, and a subclass cannot weaken the accessibility of an overridden method; a final class cannot be extended, a final variable is a constant and a final method cannot be overridden.",
          ms: "Pengubah suai protected membenarkan capaian daripada kelas dalam pakej yang sama dan daripada subkelas dalam mana-mana pakej; kebolehlihatan meningkat mengikut susunan private, lalai (tanpa pengubah suai), protected, public, dan subkelas tidak boleh melemahkan kebolehtujuan capaian kaedah yang digantikan; kelas final tidak boleh dikembangkan, pemboleh ubah final ialah pemalar dan kaedah final tidak boleh digantikan."
        }
      ],
      terms: [
        {
          en: "Inheritance",
          zh: "继承",
          ms: "Pewarisan",
          def: {
            zh: "继承让新类可以从已有类派生，从而复用父类的数据字段与方法，用 extends 关键字实现。",
            en: "Inheritance lets a new class be derived from an existing class so that it reuses the superclass data fields and methods; it is implemented with the extends keyword.",
            ms: "Pewarisan membolehkan kelas baharu diterbitkan daripada kelas sedia ada supaya ia menggunakan semula medan data dan kaedah superkelas; ia dilaksanakan dengan kata kunci extends."
          }
        },
        {
          en: "Superclass",
          zh: "父类（超类）",
          ms: "Superkelas",
          def: {
            zh: "父类是被其他类继承的类，也叫基类或父类，例如 Circle 是 Cylinder 的父类。",
            en: "A superclass is the class that other classes inherit from; it is also called the parent or base class, for example Circle is the superclass of Cylinder.",
            ms: "Superkelas ialah kelas yang diwarisi oleh kelas lain; ia juga dipanggil kelas induk atau kelas asas, contohnya Circle ialah superkelas bagi Cylinder."
          }
        },
        {
          en: "Subclass",
          zh: "子类",
          ms: "Subkelas",
          def: {
            zh: "子类是从另一个类派生出来的类，也叫子类、扩展类或派生类，例如 Cylinder 是 Circle 的子类。",
            en: "A subclass is a class derived from another class; it is also called a child, extended or derived class, for example Cylinder is a subclass of Circle.",
            ms: "Subkelas ialah kelas yang diterbitkan daripada kelas lain; ia juga dipanggil kelas anak, kelas lanjutan atau kelas terbitan, contohnya Cylinder ialah subkelas bagi Circle."
          }
        },
        {
          en: "super keyword",
          zh: "super 关键字",
          ms: "Kata kunci super",
          def: {
            zh: "super 指向所在类的父类，用 super()/super(参数) 调用父类构造方法，用 super.method() 调用父类方法。",
            en: "super refers to the superclass of the class in which it appears; super() or super(parameters) calls a superclass constructor and super.method() calls a superclass method.",
            ms: "super merujuk kepada superkelas bagi kelas yang menggunakannya; super() atau super(parameter) memanggil pembina superkelas dan super.method() memanggil kaedah superkelas."
          }
        },
        {
          en: "Method overriding",
          zh: "方法重写",
          ms: "Penggantian Kaedah",
          def: {
            zh: "方法重写指子类用与父类相同的签名和返回类型重新定义方法，从而改变该方法的实现。",
            en: "Method overriding means a subclass redefines a method with the same signature and return type as in the superclass, thus changing its implementation.",
            ms: "Penggantian kaedah bermaksud subkelas mentakrif semula sesuatu kaedah dengan tandatangan dan jenis pulangan yang sama seperti dalam superkelas, sekali gus mengubah pelaksanaannya."
          }
        },
        {
          en: "Constructor chaining",
          zh: "构造方法链",
          ms: "Rangkaian Pembina",
          def: {
            zh: "构造方法链指创建子类对象时，编译器会先调用父类的构造方法，再执行子类构造方法体，顺序是从最上层的父类开始。",
            en: "Constructor chaining means that when a subclass object is created, the superclass constructor is invoked before the subclass constructor body runs, starting from the topmost superclass.",
            ms: "Rangkaian pembina bermaksud apabila objek subkelas dicipta, pembina superkelas dipanggil sebelum badan pembina subkelas dilaksanakan, bermula daripada superkelas paling atas."
          }
        },
        {
          en: "Object class",
          zh: "Object 类",
          ms: "Kelas Object",
          def: {
            zh: "java.lang.Object 是所有 Java 类的根，每个类都直接或间接继承它，其中定义了 toString() 和 equals() 等方法。",
            en: "java.lang.Object is the root of all Java classes; every class inherits from it directly or indirectly, and it defines methods such as toString() and equals().",
            ms: "java.lang.Object ialah akar bagi semua kelas Java; setiap kelas mewarisinya secara langsung atau tidak langsung, dan ia mentakrifkan kaedah seperti toString() dan equals()."
          }
        },
        {
          en: "toString()",
          zh: "toString() 方法",
          ms: "toString()",
          def: {
            zh: "toString() 返回对象的字符串表示；默认实现只给出类名和哈希码，通常要重写成有意义的内容。",
            en: "toString() returns a string representation of an object; the default implementation gives only the class name and a hash code, so it is usually overridden with meaningful content.",
            ms: "toString() mengembalikan perwakilan rentetan bagi objek; pelaksanaan lalai hanya memberikan nama kelas dan kod cincang, jadi ia biasanya digantikan dengan kandungan yang bermakna."
          }
        },
        {
          en: "Polymorphism",
          zh: "多态",
          ms: "Polimorfisme",
          def: {
            zh: "多态指父类型的变量可以引用子类型的对象，同一个方法调用会因为对象的实际类型而执行不同的实现。",
            en: "Polymorphism means a variable of a supertype can refer to an object of a subtype, and the same method call executes a different implementation depending on the actual type of the object.",
            ms: "Polimorfisme bermaksud pemboleh ubah jenis super boleh merujuk objek jenis sub, dan panggilan kaedah yang sama melaksanakan pelaksanaan berbeza bergantung pada jenis sebenar objek itu."
          }
        },
        {
          en: "Dynamic binding",
          zh: "动态绑定",
          ms: "Pengikatan Dinamik",
          def: {
            zh: "动态绑定指 JVM 在运行时才决定调用哪一个方法实现，从最具体的类开始向上查找，找到第一个实现就调用它。",
            en: "Dynamic binding means the JVM decides at runtime which method implementation to call; it searches upwards from the most specific class and invokes the first implementation found.",
            ms: "Pengikatan dinamik bermaksud JVM menentukan pada masa larian pelaksanaan kaedah yang hendak dipanggil; ia mencari ke atas daripada kelas paling khusus dan memanggil pelaksanaan pertama yang ditemui."
          }
        },
        {
          en: "Generic programming",
          zh: "泛型编程",
          ms: "Pengaturcaraan Generik",
          def: {
            zh: "泛型编程指把方法参数声明为父类型（如 Object），从而用一个方法处理多种子类型对象。",
            en: "Generic programming means declaring a method parameter as a supertype (such as Object) so that one method can handle objects of many subtypes.",
            ms: "Pengaturcaraan generik bermaksud mengisytiharkan parameter kaedah sebagai jenis super (seperti Object) supaya satu kaedah boleh mengendalikan objek pelbagai subjenis."
          }
        },
        {
          en: "Casting",
          zh: "强制类型转换",
          ms: "Pengacuan Jenis",
          def: {
            zh: "类型转换把对象在继承层次中转换类型：向上转换是隐式且安全的，向下转换必须显式写出 (Student)o。",
            en: "Casting converts an object to another type within an inheritance hierarchy: upcasting is implicit and safe, while downcasting must be written explicitly as (Student)o.",
            ms: "Pengacuan menukar objek kepada jenis lain dalam hierarki pewarisan: pengacuan ke atas bersifat tersirat dan selamat, manakala pengacuan ke bawah mesti ditulis secara tersurat sebagai (Student)o."
          }
        },
        {
          en: "instanceof operator",
          zh: "instanceof 运算符",
          ms: "Pengendali instanceof",
          def: {
            zh: "instanceof 是 Java 关键字，用来判断对象是否是某个类的实例，常在强制转换之前做安全检查。",
            en: "instanceof is a Java keyword that tests whether an object is an instance of a class; it is often used as a safety check before casting.",
            ms: "instanceof ialah kata kunci Java yang menguji sama ada sesuatu objek ialah instans bagi sesuatu kelas; ia sering digunakan sebagai semakan keselamatan sebelum pengacuan."
          }
        },
        {
          en: "protected",
          zh: "protected 修饰符",
          ms: "protected",
          def: {
            zh: "protected 修饰的数据和方法可以被同一个包的类以及任何包中的子类访问，比默认修饰符更开放、比 public 更严格。",
            en: "Data and methods declared protected can be accessed by classes in the same package and by subclasses in any package; it is more open than the default modifier and stricter than public.",
            ms: "Data dan kaedah yang diisytiharkan protected boleh dicapai oleh kelas dalam pakej yang sama dan oleh subkelas dalam mana-mana pakej; ia lebih terbuka daripada pengubah suai lalai dan lebih ketat daripada public."
          }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "v",
          title: {
            zh: "动态绑定：JVM 如何在运行时查找方法实现",
            en: "Dynamic Binding: How the JVM Finds the Method Implementation at Runtime",
            ms: "Pengikatan Dinamik: Cara JVM Mencari Pelaksanaan Kaedah pada Masa Larian"
          },
          steps: [
            {
              label: {
                zh: "从最具体的类 C1 开始",
                en: "Start from the most specific class C1",
                ms: "Mula daripada kelas paling khusus C1"
              },
              note: {
                zh: "对象的实际类型",
                en: "The actual type of the object",
                ms: "Jenis sebenar objek"
              }
            },
            {
              label: {
                zh: "依次向上查找 C2、…、Cn",
                en: "Search upwards through C2, ..., Cn",
                ms: "Cari ke atas melalui C2, ..., Cn"
              },
              note: {
                zh: "Cn 是最一般的类 Object",
                en: "Cn is the most general class, Object",
                ms: "Cn ialah kelas paling umum, Object"
              }
            },
            {
              label: {
                zh: "找到第一个实现就停止",
                en: "Stop at the first implementation found",
                ms: "Berhenti pada pelaksanaan pertama yang ditemui"
              },
              note: {
                zh: "先找到的先使用",
                en: "The first one found is used",
                ms: "Yang pertama ditemui akan digunakan"
              }
            },
            {
              label: {
                zh: "调用该实现",
                en: "Invoke that implementation",
                ms: "Panggil pelaksanaan tersebut"
              },
              note: {
                zh: "编译期只匹配方法签名",
                en: "Compile time only matches the signature",
                ms: "Masa kompilasi hanya memadankan tandatangan"
              }
            }
          ],
          caption: {
            zh: "编译期确定调用哪个签名，运行期才绑定具体实现。",
            en: "The compiler decides which signature is called; the runtime binds the actual implementation.",
            ms: "Pengkompil menentukan tandatangan yang dipanggil; masa larian mengikat pelaksanaan sebenar."
          }
        },
        {
          type: "matrix",
          title: {
            zh: "四种访问修饰符的可访问性",
            en: "Accessibility of the Four Access Modifiers",
            ms: "Kebolehtujuan Capaian Empat Pengubah Suai"
          },
          cols: [
            {
              zh: "同类中",
              en: "Same class",
              ms: "Kelas sama"
            },
            {
              zh: "同一个包中",
              en: "Same package",
              ms: "Pakej sama"
            },
            {
              zh: "子类中",
              en: "Subclass",
              ms: "Subkelas"
            },
            {
              zh: "不同包的非子类",
              en: "Different package, not a subclass",
              ms: "Pakej berbeza, bukan subkelas"
            }
          ],
          rows: [
            {
              head: {
                zh: "public",
                en: "public",
                ms: "public"
              },
              cells: [
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                }
              ]
            },
            {
              head: {
                zh: "protected",
                en: "protected",
                ms: "protected"
              },
              cells: [
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "不可以",
                  en: "No",
                  ms: "Tidak"
                }
              ]
            },
            {
              head: {
                zh: "默认（无修饰符）",
                en: "Default (no modifier)",
                ms: "Lalai (tanpa pengubah suai)"
              },
              cells: [
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "不可以",
                  en: "No",
                  ms: "Tidak"
                },
                {
                  zh: "不可以",
                  en: "No",
                  ms: "Tidak"
                }
              ]
            },
            {
              head: {
                zh: "private",
                en: "private",
                ms: "private"
              },
              cells: [
                {
                  zh: "可以",
                  en: "Yes",
                  ms: "Boleh"
                },
                {
                  zh: "不可以",
                  en: "No",
                  ms: "Tidak"
                },
                {
                  zh: "不可以",
                  en: "No",
                  ms: "Tidak"
                },
                {
                  zh: "不可以",
                  en: "No",
                  ms: "Tidak"
                }
              ]
            }
          ],
          legend: [
            {
              zh: "可见性由弱到强：private、默认、protected、public；子类重写时不能把 public 改成 protected。",
              en: "Visibility increases from private, default, protected to public; a subclass cannot weaken a public method to protected when overriding.",
              ms: "Kebolehlihatan meningkat daripada private, lalai, protected kepada public; subkelas tidak boleh melemahkan kaedah public kepada protected semasa menggantikannya."
            }
          ]
        }
      ],
      exam: [
        {
          zh: "常考：区分重载与重写——重载在同一个类中方法名相同、参数列表不同；重写在子类中方法签名与返回类型都和父类相同，并说明 private 方法不能被重写、static 方法是被隐藏而不是被重写。",
          en: "A typical question asks you to distinguish overloading from overriding: overloading has the same method name but different parameter lists in the same class, whereas overriding redefines a method in a subclass with the same signature and return type; you should add that a private method cannot be overridden and a static method is hidden rather than overridden.",
          ms: "Soalan lazim meminta anda membezakan beban lampau dengan penggantian: beban lampau mempunyai nama kaedah yang sama tetapi senarai parameter berbeza dalam kelas yang sama, manakala penggantian mentakrif semula kaedah dalam subkelas dengan tandatangan dan jenis pulangan yang sama; anda perlu menambah bahawa kaedah private tidak boleh digantikan dan kaedah statik disembunyikan dan bukan digantikan."
        },
        {
          zh: "常考：给出 Person 到 Student 的继承链，问 new Student() 时构造方法的调用顺序（先 Object，再 Person，最后 Student），以及 super() 与 this() 的区别。",
          en: "A typical question gives an inheritance chain from Person to Student and asks for the order in which constructors are invoked by new Student() (Object first, then Person, then Student) and for the difference between super() and this().",
          ms: "Soalan lazim memberikan rantaian pewarisan daripada Person kepada Student dan meminta urutan pembina yang dipanggil oleh new Student() (Object dahulu, kemudian Person, kemudian Student) serta perbezaan antara super() dengan this()."
        },
        {
          zh: "易错点：Object o = new Student() 是合法的隐式向上转换，但 Student b = o 会编译错误，必须先做 instanceof 检查再强制转换；另外记住多态与动态绑定是在运行时才决定调用哪个实现。",
          en: "Common mistakes: Object o = new Student() is legal implicit upcasting, but Student b = o causes a compilation error and must be preceded by an instanceof check and an explicit cast; also remember that polymorphism and dynamic binding decide the implementation only at runtime.",
          ms: "Kesilapan biasa: Object o = new Student() ialah pengacuan ke atas secara tersirat yang sah, tetapi Student b = o menyebabkan ralat kompilasi dan mesti didahului dengan semakan instanceof serta pengacuan tersurat; ingat juga bahawa polimorfisme dan pengikatan dinamik menentukan pelaksanaan hanya pada masa larian."
        }
      ],
      mnemonic: {
        zh: "子类继承父类，super 调父构造；编译看左边，运行看右边。",
        en: "A subclass inherits from its superclass and super calls the parent constructor; the compiler looks at the left, the runtime looks at the right.",
        ms: "Subkelas mewarisi superkelas dan super memanggil pembina induk; pengkompil melihat sebelah kiri, masa larian melihat sebelah kanan."
      }
    },
    {
      id: "oop-07",
      num: 7,
      title: {
        zh: "抽象类与接口",
        en: "Abstract Classes and Interfaces",
        ms: "Kelas Abstrak dan Antara Muka"
      },
      file: "00p/SESSION 20262027_CHAPTER7.pptx",
      pages: 23,
      summary: {
        zh: "本章介绍抽象类与接口这两个用于描述共性需求与能力的机制。抽象类是不能直接创建对象的类，它可以包含只声明不实现的抽象方法，必须由子类继承并实现；同时抽象类仍然可以有构造方法、数据字段和具体方法，也可以作为数据类型使用。接口只包含常量和抽象方法（字段默认是 public static final，方法默认是 public abstract），一个类可以实现多个接口，从而在 Java 中达到多重继承的效果。讲义用 GeometricObject、Circle 与 Rectangle 说明抽象类的用法，用 java.lang.Comparable 和自定义接口 Edible 说明接口的实现与 instanceof 的应用，并对比接口与抽象类在方法、变量、继承和概念上的差别，最后给出一个对象同时属于某个类和多个接口的层次图。",
        en: "This chapter introduces abstract classes and interfaces, the two mechanisms for describing shared requirements and abilities. An abstract class cannot be instantiated directly and may contain abstract methods that are declared without an implementation and must be implemented by subclasses, yet it can still have constructors, data fields and concrete methods and can be used as a data type. An interface contains only constants and abstract methods (its fields are implicitly public static final and its methods public abstract), and a class can implement several interfaces, which achieves the effect of multiple inheritance in Java. The lecture uses GeometricObject, Circle and Rectangle to illustrate abstract classes, java.lang.Comparable and the custom interface Edible to illustrate implementing interfaces and using instanceof, compares interfaces with abstract classes in terms of methods, variables, inheritance and concept, and ends with a hierarchy diagram of an object that is an instance of a class and several interfaces at the same time.",
        ms: "Bab ini memperkenalkan kelas abstrak dan antara muka, iaitu dua mekanisme untuk menerangkan keperluan dan keupayaan yang dikongsi bersama. Kelas abstrak tidak boleh diinstansiasi secara langsung dan boleh mengandungi kaedah abstrak yang diisytiharkan tanpa pelaksanaan serta mesti dilaksanakan oleh subkelas, namun ia masih boleh mempunyai pembina, medan data dan kaedah konkrit serta boleh digunakan sebagai jenis data. Antara muka hanya mengandungi pemalar dan kaedah abstrak (medannya secara tersirat public static final dan kaedahnya public abstract), dan sesuatu kelas boleh melaksanakan beberapa antara muka, yang mencapai kesan pewarisan berbilang dalam Java. Kuliah ini menggunakan GeometricObject, Circle dan Rectangle untuk menggambarkan kelas abstrak, java.lang.Comparable dan antara muka tersuai Edible untuk menggambarkan pelaksanaan antara muka serta penggunaan instanceof, membandingkan antara muka dengan kelas abstrak dari segi kaedah, pemboleh ubah, pewarisan dan konsep, serta diakhiri dengan gambar rajah hierarki objek yang merupakan instans bagi sesuatu kelas dan beberapa antara muka serentak."
      },
      points: [
        {
          zh: "抽象类是不能创建具体实例的父类，例如可以写 abstract class Animal {}，但不能写 Animal a = new Animal()；只有像 class Cat extends Animal 这样的子类才能创建对象 Cat c = new Cat()。",
          en: "An abstract class is a superclass from which no specific instance can be created: abstract class Animal {} is allowed, but Animal a = new Animal() is not permitted; only a subclass such as class Cat extends Animal can create an object with Cat c = new Cat().",
          ms: "Kelas abstrak ialah superkelas yang tidak boleh menghasilkan instans khusus: abstract class Animal {} dibenarkan, tetapi Animal a = new Animal() tidak dibenarkan; hanya subkelas seperti class Cat extends Animal boleh mencipta objek dengan Cat c = new Cat()."
        },
        {
          zh: "抽象方法只有方法签名而没有实现（没有方法体、连花括号都没有），每一个子类都必须提供自己的版本；含有抽象方法的类必须声明为抽象类。",
          en: "An abstract method has only a method signature and no implementation (no body, not even braces), and every child class must provide its own version; a class that contains abstract methods must be declared abstract.",
          ms: "Kaedah abstrak hanya mempunyai tandatangan tanpa pelaksanaan (tiada badan, malah tiada pendakap), dan setiap kelas anak mesti menyediakan versinya sendiri; kelas yang mengandungi kaedah abstrak mesti diisytiharkan sebagai abstrak."
        },
        {
          zh: "抽象类不能使用 new 运算符实例化，但它的构造方法可以在子类的构造方法中被调用；子类即使父类是具体类也可以声明为抽象类；抽象类还可以作为数据类型使用，所以 GeometricObject geo1 = new Circle() 是正确的，而 new GeometricObject() 是错误的。",
          en: "An abstract class cannot be instantiated with the new operator, but its constructors can be invoked in the constructors of its subclasses; a subclass may be abstract even if its superclass is concrete; and an abstract class can be used as a data type, so GeometricObject geo1 = new Circle() is correct while new GeometricObject() is not.",
          ms: "Kelas abstrak tidak boleh diinstansiasi dengan pengendali new, tetapi pembinanya boleh dipanggil dalam pembina subkelas; subkelas boleh bersifat abstrak walaupun superkelasnya konkrit; dan kelas abstrak boleh digunakan sebagai jenis data, jadi GeometricObject geo1 = new Circle() adalah betul manakala new GeometricObject() tidak."
        },
        {
          zh: "在抽象类与接口之间选择时：当几个类关系密切、需要共享共同的属性或方法时用抽象类（extends）；当你想描述一种能力或一项要求时用接口（implements），因为它表达的是“你能做这件事”。",
          en: "When choosing between an abstract class and an interface: use an abstract class (extends) when the classes are closely related and should share common properties or methods, and use an interface (implements) when you want to describe an ability or a requirement, because it expresses that you can do this.",
          ms: "Semasa memilih antara kelas abstrak dengan antara muka: gunakan kelas abstrak (extends) apabila kelas-kelas itu berkait rapat dan perlu berkongsi sifat atau kaedah yang sama, dan gunakan antara muka (implements) apabila anda ingin menerangkan sesuatu keupayaan atau keperluan, kerana ia menyatakan bahawa anda boleh melakukan perkara itu."
        },
        {
          zh: "接口只包含常量和抽象方法，而抽象类还可以有变量和具体方法；每个接口会被编译成一个独立的字节码文件，接口中的字段默认是 public static final，方法默认是 public abstract，所以这些修饰符可以省略。",
          en: "An interface contains only constants and abstract methods, whereas an abstract class can also contain variables and concrete methods; each interface is compiled into a separate bytecode file, and the data fields in an interface are implicitly public static final while the methods are public abstract, so these modifiers may be omitted.",
          ms: "Antara muka hanya mengandungi pemalar dan kaedah abstrak, manakala kelas abstrak juga boleh mengandungi pemboleh ubah dan kaedah konkrit; setiap antara muka dikompil menjadi fail kod bait yang berasingan, dan medan data dalam antara muka secara tersirat public static final manakala kaedahnya public abstract, jadi pengubah suai itu boleh diabaikan."
        },
        {
          zh: "Java 提供的 java.lang.Comparable 接口用来给用户自定义类的对象排序：由于不同对象的比较方式不同，需要在类中实现 public int compareTo(Object o)，用学生编号、半径或体积等作为比较的键。",
          en: "The java.lang.Comparable interface provided by Java is used to order objects of user-defined classes: because the comparison differs for different types of objects, a class implements public int compareTo(Object o) and uses a key such as a student ID, a radius or a volume.",
          ms: "Antara muka java.lang.Comparable yang disediakan Java digunakan untuk menyusun objek kelas takrifan pengguna: kerana perbandingan berbeza bagi jenis objek yang berbeza, sesuatu kelas melaksanakan public int compareTo(Object o) dan menggunakan kunci seperti nombor pelajar, radius atau isi padu."
        },
        {
          zh: "接口不能用 new 创建实例，但可以用作变量的数据类型或类型转换的结果，例如 Comparable ob = new Student() 合法，而 Comparable ob = new Comparable() 不合法。",
          en: "An instance cannot be created from an interface with the new operator, but an interface can be used as the data type of a variable or the result of casting, for example Comparable ob = new Student() is legal while Comparable ob = new Comparable() is illegal.",
          ms: "Instans tidak boleh dicipta daripada antara muka dengan pengendali new, tetapi antara muka boleh digunakan sebagai jenis data pemboleh ubah atau hasil pengacuan, contohnya Comparable ob = new Student() sah manakala Comparable ob = new Comparable() tidak sah."
        },
        {
          zh: "自定义接口的例子：Edible 接口声明 howToEat()，Chicken 继承 Animal 并实现 Edible，Apple 继承 Fruit 并实现 Edible；测试程序用 if (object instanceof Edible) 先判断再强制转换，最后调用 howToEat() 得到不同结果。",
          en: "A custom interface example: the Edible interface declares howToEat(), Chicken extends Animal and implements Edible, and Apple extends Fruit and implements Edible; the test program uses if (object instanceof Edible) to check before casting, then calls howToEat() and gets different results.",
          ms: "Contoh antara muka tersuai: antara muka Edible mengisytiharkan howToEat(), Chicken mengembangkan Animal dan melaksanakan Edible, dan Apple mengembangkan Fruit serta melaksanakan Edible; atur cara ujian menggunakan if (object instanceof Edible) untuk menyemak sebelum mengacukan, kemudian memanggil howToEat() dan memperoleh hasil yang berbeza."
        },
        {
          zh: "所有类共享唯一的根类 Object，但接口没有单一的根，接口并不继承 Object 类；不过接口类型的变量可以引用任何实现了该接口的类的实例，例如 Flyable bird = new Duck()。",
          en: "All classes share a single root, the Object class, but interfaces have no single root and do not inherit from Object; nevertheless a variable of an interface type can reference any instance of a class that implements the interface, for example Flyable bird = new Duck().",
          ms: "Semua kelas berkongsi satu akar, iaitu kelas Object, tetapi antara muka tiada akar tunggal dan tidak mewarisi Object; namun pemboleh ubah jenis antara muka boleh merujuk mana-mana instans kelas yang melaksanakan antara muka itu, contohnya Flyable bird = new Duck()."
        },
        {
          zh: "接口与抽象类的核心概念不同：接口建立的是“能做（can-do）”的能力契约，一个类可以实现多个接口；抽象类建立的是“是一种（is-a）”的身份关系，一个类只能继承一个抽象类。",
          en: "The core concepts differ: an interface establishes a can-do capability contract and a class may implement multiple interfaces, whereas an abstract class establishes an is-a identity relationship and a class may extend only one abstract class.",
          ms: "Konsep terasnya berbeza: antara muka membentuk kontrak keupayaan can-do dan sesuatu kelas boleh melaksanakan beberapa antara muka, manakala kelas abstrak membentuk hubungan identiti is-a dan sesuatu kelas hanya boleh mengembangkan satu kelas abstrak."
        }
      ],
      terms: [
        {
          en: "Abstract class",
          zh: "抽象类",
          ms: "Kelas Abstrak",
          def: {
            zh: "抽象类是用 abstract 声明的类，不能直接用 new 创建对象，必须由子类继承并实现其中的抽象方法。",
            en: "An abstract class is declared with abstract and cannot be instantiated with new; it must be extended by a subclass that implements its abstract methods.",
            ms: "Kelas abstrak diisytiharkan dengan abstract dan tidak boleh diinstansiasi dengan new; ia mesti dikembangkan oleh subkelas yang melaksanakan kaedah abstraknya."
          }
        },
        {
          en: "Abstract method",
          zh: "抽象方法",
          ms: "Kaedah Abstrak",
          def: {
            zh: "抽象方法只有方法签名，没有实现（没有方法体），每个子类都必须提供自己的实现版本。",
            en: "An abstract method has only a method signature and no implementation; every subclass must provide its own version of the method.",
            ms: "Kaedah abstrak hanya mempunyai tandatangan tanpa pelaksanaan; setiap subkelas mesti menyediakan versinya sendiri."
          }
        },
        {
          en: "Interface",
          zh: "接口",
          ms: "Antara Muka",
          def: {
            zh: "接口只包含常量和抽象方法，用 interface 关键字声明，用来描述一种能力或要求。",
            en: "An interface contains only constants and abstract methods, is declared with the interface keyword, and describes an ability or a requirement.",
            ms: "Antara muka hanya mengandungi pemalar dan kaedah abstrak, diisytiharkan dengan kata kunci interface, dan menerangkan sesuatu keupayaan atau keperluan."
          }
        },
        {
          en: "implements",
          zh: "implements 关键字",
          ms: "Kata kunci implements",
          def: {
            zh: "implements 用来让一个类实现接口，例如 class Dog implements Animal，此时类必须实现接口中所有方法。",
            en: "implements is used by a class to implement an interface, for example class Dog implements Animal; the class must then implement all the methods of the interface.",
            ms: "implements digunakan oleh sesuatu kelas untuk melaksanakan antara muka, contohnya class Dog implements Animal; kelas itu kemudian mesti melaksanakan semua kaedah antara muka tersebut."
          }
        },
        {
          en: "Multiple inheritance",
          zh: "多重继承",
          ms: "Pewarisan Berbilang",
          def: {
            zh: "多重继承指一个子类从多个父类派生；Java 不支持类的多重继承，但可以通过实现多个接口达到类似效果。",
            en: "Multiple inheritance means a subclass is derived from several classes; Java does not support multiple inheritance of classes but achieves a similar effect by implementing several interfaces.",
            ms: "Pewarisan berbilang bermaksud subkelas diterbitkan daripada beberapa kelas; Java tidak menyokong pewarisan berbilang bagi kelas tetapi mencapai kesan serupa dengan melaksanakan beberapa antara muka."
          }
        },
        {
          en: "Comparable",
          zh: "Comparable 接口",
          ms: "Antara Muka Comparable",
          def: {
            zh: "java.lang.Comparable 是 Java 提供的接口，用来为用户自定义类的对象排序，需要实现 compareTo 方法。",
            en: "java.lang.Comparable is the interface provided by Java for ordering objects of user-defined classes; implementing it requires a compareTo method.",
            ms: "java.lang.Comparable ialah antara muka yang disediakan Java untuk menyusun objek kelas takrifan pengguna; melaksanakannya memerlukan kaedah compareTo."
          }
        },
        {
          en: "compareTo()",
          zh: "compareTo() 方法",
          ms: "compareTo()",
          def: {
            zh: "compareTo(o) 根据指定的键比较两个对象，返回正数、0 或负数，用来判断哪个对象更大。",
            en: "compareTo(o) compares two objects using a chosen key and returns a positive number, zero or a negative number to indicate which object is larger.",
            ms: "compareTo(o) membandingkan dua objek menggunakan kunci yang dipilih dan mengembalikan nombor positif, sifar atau negatif untuk menunjukkan objek mana yang lebih besar."
          }
        },
        {
          en: "public static final",
          zh: "public static final",
          ms: "public static final",
          def: {
            zh: "接口中的所有数据字段默认都是 public static final，也就是常量，因此必须初始化并且不能被修改。",
            en: "All data fields in an interface are implicitly public static final, that is constants, so they must be initialised and cannot be changed.",
            ms: "Semua medan data dalam antara muka secara tersirat public static final, iaitu pemalar, jadi ia mesti diinisialisasi dan tidak boleh diubah."
          }
        },
        {
          en: "Instantiation",
          zh: "实例化",
          ms: "Penginstansian",
          def: {
            zh: "实例化指用 new 创建对象；抽象类和接口都不能被实例化，只能通过具体子类或实现类创建对象。",
            en: "Instantiation is the creation of an object with new; neither an abstract class nor an interface can be instantiated, only their concrete subclasses or implementing classes can create objects.",
            ms: "Penginstansian ialah penciptaan objek dengan new; sama ada kelas abstrak atau antara muka tidak boleh diinstansiasi, hanya subkelas konkrit atau kelas pelaksana boleh mencipta objek."
          }
        },
        {
          en: "Can-do contract",
          zh: "能做（can-do）契约",
          ms: "Kontrak Can-Do",
          def: {
            zh: "接口建立的是 can-do 契约，说明实现它的类具备某种能力，例如 Edible 表示“可以吃”。",
            en: "An interface establishes a can-do contract: it states that the implementing class has a certain ability, for example Edible means it can be eaten.",
            ms: "Antara muka membentuk kontrak can-do: ia menyatakan bahawa kelas pelaksana mempunyai keupayaan tertentu, contohnya Edible bermaksud ia boleh dimakan."
          }
        },
        {
          en: "Is-a relationship",
          zh: "是一种（is-a）关系",
          ms: "Hubungan Is-A",
          def: {
            zh: "抽象类建立的是 is-a 身份关系，例如 Circle 是一种 GeometricObject，因此 Circle 继承 GeometricObject。",
            en: "An abstract class establishes an is-a identity relationship, for example a Circle is a GeometricObject, so Circle extends GeometricObject.",
            ms: "Kelas abstrak membentuk hubungan identiti is-a, contohnya Circle ialah sejenis GeometricObject, jadi Circle mengembangkan GeometricObject."
          }
        },
        {
          en: "GeometricObject",
          zh: "GeometricObject 类",
          ms: "Kelas GeometricObject",
          def: {
            zh: "GeometricObject 是讲义中的抽象类例子，它有 color、filled、dateCreated 等属性以及抽象的 findArea() 和 findPerimeter()，由 Circle 和 Rectangle 实现。",
            en: "GeometricObject is the abstract class used in the lecture; it has attributes such as color, filled and dateCreated plus the abstract methods findArea() and findPerimeter(), which Circle and Rectangle implement.",
            ms: "GeometricObject ialah kelas abstrak dalam kuliah; ia mempunyai atribut seperti color, filled dan dateCreated serta kaedah abstrak findArea() dan findPerimeter() yang dilaksanakan oleh Circle dan Rectangle."
          }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: {
            zh: "接口与抽象类的对比",
            en: "Interface versus Abstract Class",
            ms: "Antara Muka berbanding Kelas Abstrak"
          },
          cols: [
            {
              head: {
                zh: "接口（interface）",
                en: "Interface",
                ms: "Antara muka"
              },
              items: [
                {
                  label: {
                    zh: "传统上只有方法签名（抽象方法）",
                    en: "Traditionally only method signatures (abstract methods)",
                    ms: "Secara tradisinya hanya tandatangan kaedah (kaedah abstrak)"
                  }
                },
                {
                  label: {
                    zh: "只能有常量（public static final）",
                    en: "Only constants (public static final)",
                    ms: "Hanya pemalar (public static final)"
                  }
                },
                {
                  label: {
                    zh: "一个类可以实现多个接口",
                    en: "A class can implement several interfaces",
                    ms: "Satu kelas boleh implements beberapa antara muka"
                  }
                },
                {
                  label: {
                    zh: "建立 can-do 能力契约",
                    en: "Establishes a can-do capability contract",
                    ms: "Membentuk kontrak keupayaan can-do"
                  }
                }
              ]
            },
            {
              head: {
                zh: "抽象类（abstract class）",
                en: "Abstract class",
                ms: "Kelas abstrak"
              },
              items: [
                {
                  label: {
                    zh: "可以同时有抽象方法和具体方法",
                    en: "Can have both abstract and concrete methods",
                    ms: "Boleh mempunyai kaedah abstrak dan konkrit sekali gus"
                  }
                },
                {
                  label: {
                    zh: "可以有实例变量（private、protected、public）",
                    en: "Can have instance variables (private, protected, public)",
                    ms: "Boleh mempunyai pemboleh ubah instans (private, protected, public)"
                  }
                },
                {
                  label: {
                    zh: "一个类只能继承一个抽象类",
                    en: "A class can extend only one abstract class",
                    ms: "Satu kelas hanya boleh extends satu kelas abstrak"
                  }
                },
                {
                  label: {
                    zh: "建立 is-a 身份关系",
                    en: "Establishes an is-a identity relationship",
                    ms: "Membentuk hubungan identiti is-a"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "接口没有单一根，不继承 Object；但实现它的类仍然是 Object 的子类。",
            en: "Interfaces have no single root and do not inherit Object, but the classes that implement them are still subclasses of Object.",
            ms: "Antara muka tiada akar tunggal dan tidak mewarisi Object, tetapi kelas yang melaksanakannya masih subkelas bagi Object."
          }
        },
        {
          type: "tree",
          title: {
            zh: "自定义接口 Edible 与实现它的类",
            en: "The Custom Interface Edible and the Classes that Implement It",
            ms: "Antara Muka Tersuai Edible dan Kelas yang Melaksanakannya"
          },
          root: {
            label: {
              zh: "接口 Edible：howToEat()",
              en: "Interface Edible: howToEat()",
              ms: "Antara Muka Edible: howToEat()"
            }
          },
          branches: [
            {
              label: {
                zh: "Animal 的子类",
                en: "Subclasses of Animal",
                ms: "Subkelas Animal"
              },
              leaves: [
                {
                  label: {
                    zh: "Chicken：实现 Edible，返回 Fry it",
                    en: "Chicken: implements Edible, returns Fry it",
                    ms: "Chicken: implements Edible, memulangkan Fry it"
                  }
                },
                {
                  label: {
                    zh: "Tiger：未实现 Edible",
                    en: "Tiger: does not implement Edible",
                    ms: "Tiger: tidak implements Edible"
                  }
                }
              ]
            },
            {
              label: {
                zh: "Fruit 类：实现 Edible",
                en: "Class Fruit: implements Edible",
                ms: "Kelas Fruit: implements Edible"
              },
              leaves: [
                {
                  label: {
                    zh: "Apple：重写 howToEat()",
                    en: "Apple: overrides howToEat()",
                    ms: "Apple: menggantikan howToEat()"
                  }
                },
                {
                  label: {
                    zh: "Orange：重写 howToEat()",
                    en: "Orange: overrides howToEat()",
                    ms: "Orange: menggantikan howToEat()"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "测试程序用 instanceof 判断对象是否实现 Edible，再强制转换后调用 howToEat()。",
            en: "The test program uses instanceof to check whether an object implements Edible, then casts it and calls howToEat().",
            ms: "Atur cara ujian menggunakan instanceof untuk menyemak sama ada objek melaksanakan Edible, kemudian mengacukannya dan memanggil howToEat()."
          }
        }
      ],
      exam: [
        {
          zh: "常考：列出接口与抽象类的四点区别（方法、变量、继承数量、概念是 can-do 还是 is-a），并能写出两者的 Java 语法与实现方式。",
          en: "A typical question asks you to list the four differences between an interface and an abstract class (methods, variables, number of inherited types, and whether the concept is can-do or is-a) and to write the Java syntax of both.",
          ms: "Soalan lazim meminta anda menyenaraikan empat perbezaan antara antara muka dengan kelas abstrak (kaedah, pemboleh ubah, bilangan jenis yang diwarisi, dan sama ada konsepnya can-do atau is-a) serta menulis sintaks Java bagi kedua-duanya."
        },
        {
          zh: "易错点：抽象类不能 new，但可以有构造方法并由子类构造方法通过 super() 调用；接口中的字段默认是 public static final，所以必须初始化；接口也不能用 new 创建实例。",
          en: "Common mistakes: an abstract class cannot be instantiated with new but may have constructors invoked by subclass constructors through super(); fields in an interface are implicitly public static final and must therefore be initialised; and an interface cannot be instantiated with new either.",
          ms: "Kesilapan biasa: kelas abstrak tidak boleh diinstansiasi dengan new tetapi boleh mempunyai pembina yang dipanggil oleh pembina subkelas melalui super(); medan dalam antara muka secara tersirat public static final dan mesti diinisialisasi; dan antara muka juga tidak boleh diinstansiasi dengan new."
        },
        {
          zh: "常考：写出实现 Comparable 接口的 compareTo 方法，或用 instanceof 判断对象是否实现某个接口后再强制转换并调用方法（例如 showObject 中的 ((Edible)object).howToEat()）。",
          en: "A typical question asks you to write the compareTo method that implements the Comparable interface, or to use instanceof to test whether an object implements an interface, then cast it and call the method, as in ((Edible)object).howToEat() inside showObject.",
          ms: "Soalan lazim meminta anda menulis kaedah compareTo yang melaksanakan antara muka Comparable, atau menggunakan instanceof untuk menyemak sama ada objek melaksanakan sesuatu antara muka, kemudian mengacukannya dan memanggil kaedahnya, seperti ((Edible)object).howToEat() dalam showObject."
        }
      ],
      mnemonic: {
        zh: "抽象类是身份（is-a），接口是能力（can-do）；一个类只能继承一个父类，却能实现多个接口。",
        en: "An abstract class is an identity (is-a) and an interface is an ability (can-do); a class extends only one superclass but can implement many interfaces.",
        ms: "Kelas abstrak ialah identiti (is-a) dan antara muka ialah keupayaan (can-do); sesuatu kelas hanya boleh extends satu superkelas tetapi boleh implements banyak antara muka."
      }
    },
    {
      id: "oop-08",
      num: 8,
      title: {
        zh: "并行编程入门",
        en: "Introduction to Parallel Programming",
        ms: "Pengenalan kepada Pengaturcaraan Selari"
      },
      file: "00p/SESSION 20262027_CHAPTER8 (2).pptx",
      pages: 10,
      summary: {
        zh: "本章介绍并行编程的基本概念：并行编程让程序的多个任务或部分同时执行，而不是一个接一个地执行，目的是加快计算速度并更好地利用计算机资源，尤其是在处理大型或复杂问题时。讲义对比了顺序编程与并行编程（单核逐个执行与多核同时执行），并介绍常见语言与库，如 C/C++ 的 OpenMP、MPI、CUDA，Java 的 java.util.concurrent 与 ForkJoin 框架，Python 的 multiprocessing、threading，以及 C# 的 Task Parallel Library。本章还解释了为什么要使用并行编程（速度与效率、解决复杂问题、资源利用率、可扩展性），列举了图像视频处理、搜索引擎、科学模拟、机器学习、大数据分析、游戏开发、自动驾驶和数学计算等真实应用。最后指出并行编程的优势与挑战，提醒学生并行并不总是更容易。",
        en: "This chapter introduces the basic ideas of parallel programming: parallel programming lets multiple tasks or parts of a program be executed simultaneously instead of one after another, in order to speed up computation and make better use of computer resources, especially for large or complex problems. It contrasts sequential programming (tasks done one by one on a single core) with parallel programming (tasks done at the same time on multiple cores) and lists common languages and libraries such as OpenMP, MPI and CUDA for C/C++, java.util.concurrent and the ForkJoin framework for Java, multiprocessing and threading for Python, and the Task Parallel Library for C#. It then explains why we use parallel programming (speed and efficiency, solving complex problems, efficient resource utilisation and scalability) and gives real-world applications such as image and video processing, search engines, scientific simulations, machine learning, big data analytics, game development, autonomous vehicles and mathematical computation. Finally it discusses the advantages and challenges of parallel programming, reminding students that parallel code is not automatically easier.",
        ms: "Bab ini memperkenalkan idea asas pengaturcaraan selari: pengaturcaraan selari membolehkan beberapa tugasan atau bahagian atur cara dilaksanakan secara serentak dan bukan satu demi satu, dengan tujuan mempercepat pengiraan dan menggunakan sumber komputer dengan lebih baik, terutamanya bagi masalah besar atau kompleks. Bab ini membandingkan pengaturcaraan berjujukan (tugasan dilakukan satu demi satu pada satu teras) dengan pengaturcaraan selari (tugasan dilakukan serentak pada beberapa teras) dan menyenaraikan bahasa serta pustaka yang biasa seperti OpenMP, MPI dan CUDA bagi C/C++, java.util.concurrent dan rangka kerja ForkJoin bagi Java, multiprocessing dan threading bagi Python, serta Task Parallel Library bagi C#. Seterusnya bab ini menerangkan sebab pengaturcaraan selari digunakan (kelajuan dan kecekapan, menyelesaikan masalah kompleks, penggunaan sumber yang cekap dan kebolehskalaan) dan memberikan aplikasi dunia sebenar seperti pemprosesan imej dan video, enjin carian, simulasi saintifik, pembelajaran mesin, analitik data raya, pembangunan permainan, kenderaan autonomi dan pengiraan matematik. Akhir sekali, bab ini membincangkan kelebihan dan cabaran pengaturcaraan selari sambil mengingatkan pelajar bahawa kod selari tidak semestinya lebih mudah."
      },
      points: [
        {
          zh: "并行编程是一种让程序的多个任务或部分同时执行而不是依次执行的编程方式，用来加快计算速度并更好地利用计算机资源，特别是在处理大型或复杂问题时。",
          en: "Parallel programming is a type of programming in which multiple tasks or parts of a program are executed simultaneously instead of one after another; it is used to speed up computation and make better use of computer resources, especially when working with large or complex problems.",
          ms: "Pengaturcaraan selari ialah sejenis pengaturcaraan yang melaksanakan beberapa tugasan atau bahagian atur cara secara serentak dan bukan satu demi satu; ia digunakan untuk mempercepat pengiraan dan menggunakan sumber komputer dengan lebih baik, terutamanya bagi masalah besar atau kompleks."
        },
        {
          zh: "顺序编程把任务一个一个按顺序完成，只使用一个处理器或核心，处理大型复杂工作时较慢但容易编写和理解；并行编程让任务同时进行，使用多个处理器或核心，速度更快但设计起来更难。",
          en: "Sequential programming completes tasks one by one in order, uses a single processor or core and is slower for large or complex work although it is simple to write and understand; parallel programming does the tasks at the same time, uses multiple processors or cores, is much faster but a bit harder to design.",
          ms: "Pengaturcaraan berjujukan menyelesaikan tugasan satu demi satu mengikut urutan, menggunakan satu pemproses atau teras dan lebih perlahan bagi kerja besar atau kompleks walaupun mudah ditulis dan difahami; pengaturcaraan selari melakukan tugasan secara serentak, menggunakan beberapa pemproses atau teras, jauh lebih pantas tetapi lebih sukar direka bentuk."
        },
        {
          zh: "常见支持并行编程的语言与库包括：C/C++ 的 OpenMP、MPI、CUDA，Java 的 java.util.concurrent 与 ForkJoin 框架，Python 的 multiprocessing、threading、concurrent.futures，以及 C# 的 Task Parallel Library。",
          en: "Common languages and libraries for parallel programming include OpenMP, MPI and CUDA for C/C++, java.util.concurrent and the ForkJoin framework for Java, multiprocessing, threading and concurrent.futures for Python, and the Task Parallel Library for C#.",
          ms: "Bahasa dan pustaka yang biasa menyokong pengaturcaraan selari termasuk OpenMP, MPI dan CUDA bagi C/C++, java.util.concurrent dan rangka kerja ForkJoin bagi Java, multiprocessing, threading dan concurrent.futures bagi Python, serta Task Parallel Library bagi C#."
        },
        {
          zh: "使用并行编程的四个理由：提高速度与效率（原本单处理器要 10 小时的任务，如果能平均分配，用 10 个处理器可能只需 1 小时）、解决单处理器无法处理的复杂问题、充分利用现代多核硬件的资源，以及通过增加处理单元来轻松扩展规模。",
          en: "There are four reasons for using parallel programming: increased speed and efficiency (a task that takes 10 hours on a single processor might take 1 hour with 10 processors if it can be divided equally), solving complex problems that a single processor cannot handle, efficient utilisation of modern multi-core hardware, and scalability by simply distributing the workload across more processing units.",
          ms: "Terdapat empat sebab penggunaan pengaturcaraan selari: kelajuan dan kecekapan yang meningkat (tugasan yang mengambil masa 10 jam pada satu pemproses mungkin hanya mengambil 1 jam dengan 10 pemproses jika boleh dibahagikan sama rata), menyelesaikan masalah kompleks yang tidak mampu dikendalikan satu pemproses, penggunaan cekap perkakasan berbilang teras moden, dan kebolehskalaan dengan mengagihkan beban kerja kepada lebih banyak unit pemprosesan."
        },
        {
          zh: "图像与视频处理（Photoshop、Premiere Pro 把滤镜和渲染分到多个 CPU/GPU 核心）以及搜索引擎（Google、Bing 在多台服务器上并行搜索不同部分的网页）都是并行编程的典型应用。",
          en: "Image and video processing (Photoshop and Premiere Pro split filters and rendering across many CPU or GPU cores) and search engines (Google and Bing search different parts of the web in parallel across many servers) are typical applications of parallel programming.",
          ms: "Pemprosesan imej dan video (Photoshop dan Premiere Pro membahagikan penapis dan penyampaian imej kepada banyak teras CPU atau GPU) serta enjin carian (Google dan Bing mencari bahagian web yang berbeza secara selari pada banyak pelayan) ialah aplikasi biasa bagi pengaturcaraan selari."
        },
        {
          zh: "科学模拟（天气预报用数千个处理器同时运行庞大的数学模型）、机器学习与人工智能（在 GPU 集群上训练 ChatGPT 等大型模型）、大数据分析（Hadoop 与 Spark 把数据集分给多个节点并行处理）都依赖并行计算。",
          en: "Scientific simulations (weather forecasting runs huge mathematical models on thousands of processors at once), machine learning and AI (large models such as ChatGPT are trained on GPU clusters) and big data analytics (Hadoop and Spark split datasets across multiple nodes) all rely on parallel computing.",
          ms: "Simulasi saintifik (ramalan cuaca menjalankan model matematik yang besar pada ribuan pemproses serentak), pembelajaran mesin dan AI (model besar seperti ChatGPT dilatih pada kelompok GPU) serta analitik data raya (Hadoop dan Spark membahagikan set data kepada beberapa nod) semuanya bergantung pada pengkomputeran selari."
        },
        {
          zh: "游戏开发中渲染、物理和音频等多个任务同时运行（Unity 或 Unreal Engine 用不同线程处理玩家输入、图形渲染和声音），自动驾驶汽车则并行处理摄像头、雷达和激光雷达的传感器数据以实时决策。",
          en: "In game development several tasks such as rendering, physics and audio run together (Unity or Unreal Engine use separate threads for player input, graphics rendering and sound), while an autonomous vehicle processes sensor data from cameras, radar and LiDAR in parallel for real-time decisions.",
          ms: "Dalam pembangunan permainan, beberapa tugasan seperti penyampaian imej, fizik dan audio berjalan serentak (Unity atau Unreal Engine menggunakan benang berasingan bagi input pemain, penyampaian grafik dan bunyi), manakala kenderaan autonomi memproses data sensor daripada kamera, radar dan LiDAR secara selari untuk membuat keputusan masa nyata."
        },
        {
          zh: "数学与科学计算（矩阵乘法、数值模拟、加密）也可以用多个核心加速，例如 MATLAB Parallel Toolbox 或 NVIDIA CUDA 进行基于 GPU 的计算。",
          en: "Scientific and mathematical computation (matrix multiplication, numerical simulation and encryption) can also be accelerated with multiple cores, for example the MATLAB Parallel Toolbox or NVIDIA CUDA for GPU-based computation.",
          ms: "Pengiraan saintifik dan matematik (pendaraban matriks, simulasi berangka dan penyulitan) juga boleh dipercepat dengan beberapa teras, contohnya MATLAB Parallel Toolbox atau NVIDIA CUDA bagi pengiraan berasaskan GPU."
        },
        {
          zh: "并行编程的优点是速度快、能充分利用多核硬件、可以解决非常大的问题并且容易通过增加处理器来扩展；挑战则是设计更难（工作必须正确拆分）、任务之间共享结果需要小心管理、有些问题无法拆分因而收益很小，而且任务互相干扰产生的 bug 更难发现。",
          en: "The advantages of parallel programming are that it is much faster for large tasks, makes full use of modern multi-core hardware, can solve very big or complex problems and scales up easily by adding more processors; the challenges are that it is harder to design (the work must be split correctly), shared results between tasks must be managed carefully, some problems cannot be divided and gain little, and bugs caused by tasks interfering with each other are harder to find.",
          ms: "Kelebihan pengaturcaraan selari ialah ia jauh lebih pantas bagi tugasan besar, menggunakan sepenuhnya perkakasan berbilang teras moden, boleh menyelesaikan masalah yang sangat besar atau kompleks dan mudah diskalakan dengan menambah pemproses; cabarannya pula ialah ia lebih sukar direka bentuk (kerja mesti dibahagikan dengan betul), hasil yang dikongsi antara tugasan mesti diurus dengan hati-hati, sesetengah masalah tidak boleh dibahagikan dan memberi manfaat yang kecil, serta pepijat akibat tugasan saling mengganggu lebih sukar ditemui."
        }
      ],
      terms: [
        {
          en: "Parallel programming",
          zh: "并行编程",
          ms: "Pengaturcaraan Selari",
          def: {
            zh: "并行编程让程序的多个任务或部分同时执行，以加快计算并更好地利用多核资源。",
            en: "Parallel programming executes multiple tasks or parts of a program at the same time to speed up computation and use multi-core resources better.",
            ms: "Pengaturcaraan selari melaksanakan beberapa tugasan atau bahagian atur cara pada masa yang sama untuk mempercepat pengiraan dan menggunakan sumber berbilang teras dengan lebih baik."
          }
        },
        {
          en: "Sequential programming",
          zh: "顺序编程",
          ms: "Pengaturcaraan Berjujukan",
          def: {
            zh: "顺序编程按顺序一个接一个地完成任务，只使用一个处理器或核心，编写和理解都比较简单。",
            en: "Sequential programming completes tasks one by one in order using a single processor or core; it is simpler to write and understand.",
            ms: "Pengaturcaraan berjujukan menyelesaikan tugasan satu demi satu mengikut urutan menggunakan satu pemproses atau teras; ia lebih mudah ditulis dan difahami."
          }
        },
        {
          en: "Processor / core",
          zh: "处理器 / 核心",
          ms: "Pemproses / Teras",
          def: {
            zh: "处理器是执行指令的硬件单元，现代处理器通常有多个核心，可以真正同时执行多个任务。",
            en: "A processor is the hardware unit that executes instructions; modern processors usually have several cores so that multiple tasks can really run at the same time.",
            ms: "Pemproses ialah unit perkakasan yang melaksanakan arahan; pemproses moden biasanya mempunyai beberapa teras supaya beberapa tugasan benar-benar boleh berjalan serentak."
          }
        },
        {
          en: "Task",
          zh: "任务",
          ms: "Tugasan",
          def: {
            zh: "任务是可以独立执行的一段工作，并行编程就是把一个大任务拆成多个任务分给不同的处理器或核心。",
            en: "A task is a unit of work that can be executed independently; parallel programming splits a large job into several tasks for different processors or cores.",
            ms: "Tugasan ialah unit kerja yang boleh dilaksanakan secara berasingan; pengaturcaraan selari membahagikan kerja besar kepada beberapa tugasan untuk pemproses atau teras yang berbeza."
          }
        },
        {
          en: "Speedup",
          zh: "加速比",
          ms: "Peningkatan Kelajuan",
          def: {
            zh: "加速比指并行后运行时间相对顺序执行的缩短程度，例如 10 小时的任务用 10 个处理器降到 1 小时。",
            en: "Speedup is how much the running time is reduced compared with sequential execution, for example a 10-hour task dropping to 1 hour with 10 processors.",
            ms: "Peningkatan kelajuan ialah kadar pengurangan masa larian berbanding pelaksanaan berjujukan, contohnya tugasan 10 jam turun kepada 1 jam dengan 10 pemproses."
          }
        },
        {
          en: "Scalability",
          zh: "可扩展性",
          ms: "Kebolehskalaan",
          def: {
            zh: "可扩展性指并行程序可以通过增加更多处理单元来处理更大的数据集或更复杂的计算。",
            en: "Scalability means a parallel program can handle larger datasets or more complex computations by distributing the workload across more processing units.",
            ms: "Kebolehskalaan bermaksud atur cara selari boleh mengendalikan set data yang lebih besar atau pengiraan yang lebih kompleks dengan mengagihkan beban kerja kepada lebih banyak unit pemprosesan."
          }
        },
        {
          en: "Resource utilisation",
          zh: "资源利用率",
          ms: "Penggunaan Sumber",
          def: {
            zh: "资源利用率指充分利用现代计算机的多个核心，让全部处理能力同时工作。",
            en: "Resource utilisation means making full use of the multiple cores of a modern computer so that all its processing power works at once.",
            ms: "Penggunaan sumber bermaksud menggunakan sepenuhnya beberapa teras komputer moden supaya seluruh kuasa pemprosesannya bekerja serentak."
          }
        },
        {
          en: "Thread",
          zh: "线程",
          ms: "Benang",
          def: {
            zh: "线程是程序内部可以独立执行的执行流，游戏开发常用不同线程分别处理输入、渲染和声音。",
            en: "A thread is a flow of execution inside a program that can run independently; game development often uses separate threads for input, rendering and sound.",
            ms: "Benang ialah aliran pelaksanaan dalam sesuatu atur cara yang boleh berjalan secara berasingan; pembangunan permainan sering menggunakan benang berasingan bagi input, penyampaian imej dan bunyi."
          }
        },
        {
          en: "Concurrency",
          zh: "并发",
          ms: "Keserentakan",
          def: {
            zh: "并发指多个任务在时间上重叠进行，并行编程的核心困难之一就是管理并发任务对共享数据的使用。",
            en: "Concurrency means several tasks progressing in overlapping time; managing the use of shared data by concurrent tasks is one of the core difficulties of parallel programming.",
            ms: "Keserentakan bermaksud beberapa tugasan berjalan dalam tempoh yang bertindih; mengurus penggunaan data yang dikongsi oleh tugasan serentak ialah salah satu kesukaran utama pengaturcaraan selari."
          }
        },
        {
          en: "ForkJoin framework",
          zh: "ForkJoin 框架",
          ms: "Rangka Kerja ForkJoin",
          def: {
            zh: "ForkJoin 是 Java 提供的并行框架，属于 java.util.concurrent 的一部分，用来把任务拆分后并行执行再合并结果。",
            en: "ForkJoin is the parallel framework provided by Java as part of java.util.concurrent; it splits a task, executes the parts in parallel and combines the results.",
            ms: "ForkJoin ialah rangka kerja selari yang disediakan Java sebagai sebahagian daripada java.util.concurrent; ia membahagikan tugasan, melaksanakan bahagiannya secara selari dan menggabungkan hasilnya."
          }
        },
        {
          en: "GPU",
          zh: "图形处理器",
          ms: "GPU",
          def: {
            zh: "GPU 拥有大量并行计算单元，机器学习训练和 CUDA 计算都把工作分配给 GPU，每个 GPU 处理一部分数据。",
            en: "A GPU has a large number of parallel computing units; machine learning training and CUDA computation distribute work to GPUs so that each GPU handles part of the data.",
            ms: "GPU mempunyai banyak unit pengkomputeran selari; latihan pembelajaran mesin dan pengiraan CUDA mengagihkan kerja kepada GPU supaya setiap GPU mengendalikan sebahagian data."
          }
        },
        {
          en: "Big data analytics",
          zh: "大数据分析",
          ms: "Analitik Data Raya",
          def: {
            zh: "大数据分析把巨大的数据集分开交给多个节点同时处理，例如 Apache Hadoop 或 Apache Spark。",
            en: "Big data analytics splits huge datasets so that multiple nodes process them at the same time, for example Apache Hadoop or Apache Spark.",
            ms: "Analitik data raya membahagikan set data yang besar supaya beberapa nod memprosesnya pada masa yang sama, contohnya Apache Hadoop atau Apache Spark."
          }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: {
            zh: "顺序编程与并行编程的对比",
            en: "Sequential Programming versus Parallel Programming",
            ms: "Pengaturcaraan Berjujukan berbanding Pengaturcaraan Selari"
          },
          cols: [
            {
              head: {
                zh: "顺序编程",
                en: "Sequential Programming",
                ms: "Pengaturcaraan Berjujukan"
              },
              items: [
                {
                  label: {
                    zh: "任务按顺序一个一个完成",
                    en: "Tasks are done one by one, in order",
                    ms: "Tugasan dilakukan satu demi satu mengikut urutan"
                  }
                },
                {
                  label: {
                    zh: "只使用一个处理器或核心",
                    en: "Uses a single processor or core",
                    ms: "Menggunakan satu pemproses atau teras"
                  }
                },
                {
                  label: {
                    zh: "处理大型复杂工作时较慢",
                    en: "Slower for large or complex work",
                    ms: "Lebih perlahan bagi kerja besar atau kompleks"
                  }
                },
                {
                  label: {
                    zh: "容易编写和理解",
                    en: "Simple to write and understand",
                    ms: "Mudah ditulis dan difahami"
                  }
                }
              ]
            },
            {
              head: {
                zh: "并行编程",
                en: "Parallel Programming",
                ms: "Pengaturcaraan Selari"
              },
              items: [
                {
                  label: {
                    zh: "任务同时完成",
                    en: "Tasks are done at the same time",
                    ms: "Tugasan dilakukan pada masa yang sama"
                  }
                },
                {
                  label: {
                    zh: "使用多个处理器或核心",
                    en: "Uses multiple processors or cores",
                    ms: "Menggunakan beberapa pemproses atau teras"
                  }
                },
                {
                  label: {
                    zh: "处理大型复杂工作时快得多",
                    en: "Much faster for large or complex work",
                    ms: "Jauh lebih pantas bagi kerja besar atau kompleks"
                  }
                },
                {
                  label: {
                    zh: "设计稍难但功能强大",
                    en: "A bit harder to design but very powerful",
                    ms: "Sedikit lebih sukar direka tetapi sangat berkuasa"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "并行不等于一定更快：有些问题无法拆分。",
            en: "Parallel does not always mean faster: some problems cannot be divided.",
            ms: "Selari tidak semestinya lebih pantas: sesetengah masalah tidak boleh dibahagikan."
          }
        },
        {
          type: "timeline",
          title: {
            zh: "并行加速示意：一个原本需要 10 小时的任务",
            en: "Parallel Speedup: A Task that Takes 10 Hours on One Processor",
            ms: "Peningkatan Kelajuan Selari: Tugasan yang Mengambil 10 Jam pada Satu Pemproses"
          },
          unit: {
            zh: "小时",
            en: "Hours",
            ms: "Jam"
          },
          max: 12,
          bars: [
            {
              label: {
                zh: "1 个处理器（顺序执行）",
                en: "1 processor (sequential)",
                ms: "1 pemproses (berjujukan)"
              },
              start: 0,
              len: 10,
              color: "a1"
            },
            {
              label: {
                zh: "10 个处理器（并行执行）",
                en: "10 processors (parallel)",
                ms: "10 pemproses (selari)"
              },
              start: 0,
              len: 1,
              color: "a2"
            }
          ],
          caption: {
            zh: "前提是任务能够被平均拆分。",
            en: "This assumes the task can be divided equally.",
            ms: "Ini mengandaikan tugasan boleh dibahagikan sama rata."
          }
        }
      ],
      exam: [
        {
          zh: "常考：用表格对比顺序编程与并行编程，从执行方式、使用的处理器数量、处理大型任务的速度和编写难度四个方面作答。",
          en: "A typical question asks you to compare sequential programming with parallel programming in a table, covering how tasks are executed, the number of processors used, the speed for large tasks and the difficulty of writing the code.",
          ms: "Soalan lazim meminta anda membandingkan pengaturcaraan berjujukan dengan pengaturcaraan selari dalam bentuk jadual, merangkumi cara tugasan dilaksanakan, bilangan pemproses yang digunakan, kelajuan bagi tugasan besar dan kesukaran menulis kodnya."
        },
        {
          zh: "常考：列举使用并行编程的四个理由（速度与效率、解决复杂问题、资源利用率、可扩展性），并为每个理由举一个真实应用的例子。",
          en: "A typical question asks you to list four reasons for using parallel programming (speed and efficiency, solving complex problems, resource utilisation and scalability) and to give a real-world application for each reason.",
          ms: "Soalan lazim meminta anda menyenaraikan empat sebab penggunaan pengaturcaraan selari (kelajuan dan kecekapan, menyelesaikan masalah kompleks, penggunaan sumber dan kebolehskalaan) serta memberikan satu aplikasi dunia sebenar bagi setiap sebab."
        },
        {
          zh: "易错点：不要以为并行一定更快——有些问题无法拆分，收益很小；并行程序更难设计，任务之间共享结果必须小心管理，而且任务互相干扰造成的 bug 更难发现。",
          en: "A common mistake is to assume that parallel is always faster: some problems cannot be divided and gain little; parallel programs are harder to design, shared results between tasks must be managed carefully, and bugs caused by tasks interfering with each other are harder to find.",
          ms: "Kesilapan biasa ialah menganggap selari sentiasa lebih pantas: sesetengah masalah tidak boleh dibahagikan dan memberi manfaat yang kecil; atur cara selari lebih sukar direka, hasil yang dikongsi antara tugasan mesti diurus dengan hati-hati, dan pepijat akibat tugasan saling mengganggu lebih sukar ditemui."
        }
      ],
      mnemonic: {
        zh: "一个任务切几块，多核同时干得快，但更难设计和排错。",
        en: "Split one task into parts and let many cores work at once: faster, but harder to design and debug.",
        ms: "Bahagikan satu tugasan kepada beberapa bahagian dan biarkan banyak teras bekerja serentak: lebih pantas, tetapi lebih sukar direka dan dinyahpepijat."
      }
    }
  ]
};
