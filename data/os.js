window.CN_DATA = window.CN_DATA || {};
window.CN_DATA["os"] = {
  "id": "os",
  "code": "DDWD 2663",
  "name": {
    "zh": "操作系统",
    "en": "Operating Systems",
    "ms": "Sistem Pengendalian"
  },
  "desc": {
    "zh": "本课程介绍操作系统的基本原理与实现技术：从操作系统的作用、计算机系统结构与操作系统服务讲起，深入进程与线程、CPU 调度、进程同步与死锁，再进入内存管理、虚拟内存以及文件系统与设备管理。学习后应能解释操作系统如何分配 CPU、内存与 I/O 资源，并能对调度、同步与页面置换等算法进行计算与分析。",
    "en": "This course introduces the principles and implementation techniques of operating systems, starting from the role of the OS, computer-system organisation and operating-system services, and going on to processes and threads, CPU scheduling, process synchronisation and deadlocks, before covering memory management, virtual memory, and file-system and device management. On completion you should be able to explain how an operating system allocates CPU, memory and I/O resources, and to compute and analyse algorithms for scheduling, synchronisation and page replacement.",
    "ms": "Kursus ini memperkenalkan prinsip dan teknik pelaksanaan sistem pengendalian, bermula dengan peranan sistem pengendalian, organisasi sistem komputer dan perkhidmatan sistem pengendalian, kemudian proses dan benang, penjadualan CPU, penyegerakan proses serta buntu lesu, sebelum merangkumi pengurusan ingatan, ingatan maya, dan pengurusan sistem fail serta peranti. Setelah selesai anda sepatutnya boleh menerangkan cara sistem pengendalian mengagihkan sumber CPU, ingatan dan I/O, serta mengira dan menganalisis algoritma penjadualan, penyegerakan dan penggantian halaman."
  },
  "icon": "🖥️",
  "color": "#2f6fdb",
  "chapters": [
    {
      "id": "os-01",
      "num": 1,
      "title": {
        "zh": "操作系统导论",
        "en": "Introduction to Operating Systems",
        "ms": "Pengenalan kepada Sistem Pengendalian"
      },
      "file": "os/CHAPTER 1 DDWD 2663.pptx",
      "pages": 77,
      "summary": {
        "zh": "本章回答“操作系统是什么、做什么”：操作系统是用户与计算机硬件之间的中介程序，目标是执行用户程序、让系统便于使用并高效利用硬件。计算机系统由硬件、操作系统、应用程序和用户四部分组成，操作系统既是资源分配器，也是控制程序。本章继而讲解中断驱动的 I/O 与设备控制器、存储层次与缓存、双模式运行与定时器，最后介绍多处理机与集群结构、虚拟化、分布式系统和各种计算环境。",
        "en": "This chapter answers what an operating system is and what it does: it is a program that acts as an intermediary between the user and the computer hardware, with the goals of executing user programs, making the system convenient to use and using the hardware efficiently. A computer system is divided into four components, namely hardware, the operating system, application programs and users, and the OS acts both as a resource allocator and as a control program. The chapter then explains interrupt-driven I/O and device controllers, the storage hierarchy and caching, dual-mode operation with the timer, and finally multiprocessor and clustered architectures, virtualisation, distributed systems and modern computing environments.",
        "ms": "Bab ini menjawab apa itu sistem pengendalian dan apa yang dilakukannya: ia ialah program perantara antara pengguna dengan perkakasan komputer, dengan matlamat melaksanakan program pengguna, memudahkan penggunaan sistem dan menggunakan perkakasan dengan cekap. Sistem komputer terbahagi kepada empat komponen, iaitu perkakasan, sistem pengendalian, program aplikasi dan pengguna, dan sistem pengendalian bertindak sebagai pengagih sumber serta program kawalan. Bab ini seterusnya menerangkan I/O yang dipacu selangan dan pengawal peranti, hierarki storan dan cache, operasi dwi-mod dengan pemasa, dan akhir sekali seni bina berbilang pemproses serta berkelompok, virtualisasi, sistem teragih dan persekitaran pengkomputeran moden."
      },
      "points": [
        {
          "zh": "操作系统是用户与计算机硬件之间的中介程序，它的三个目标是：执行用户程序并让用户更易解决问题、使计算机系统便于使用、以及高效地使用硬件。",
          "en": "An operating system is a program that acts as an intermediary between the user of a computer and the computer hardware; its goals are to execute user programs and make solving user problems easier, to make the computer system convenient to use and to use the hardware efficiently.",
          "ms": "Sistem pengendalian ialah program yang menjadi perantara antara pengguna komputer dengan perkakasan komputer; matlamatnya ialah melaksanakan program pengguna dan memudahkan penyelesaian masalah pengguna, menjadikan sistem komputer mudah digunakan serta menggunakan perkakasan dengan cekap."
        },
        {
          "zh": "计算机系统可分成四个组成部分：硬件提供基本的计算资源（CPU、内存、I/O 设备），操作系统控制和协调硬件在多个应用程序与用户之间的使用，应用程序定义资源被如何使用，用户则包括人、机器和其他计算机。",
          "en": "A computer system can be divided into four components: hardware provides the basic computing resources (CPU, memory, I/O devices), the operating system controls and coordinates the use of hardware among the various applications and users, application programs define the ways in which resources are used, and users include people, machines and other computers.",
          "ms": "Sistem komputer boleh dibahagikan kepada empat komponen: perkakasan menyediakan sumber pengkomputeran asas (CPU, ingatan, peranti I/O), sistem pengendalian mengawal dan menyelaras penggunaan perkakasan antara pelbagai aplikasi dan pengguna, program aplikasi menentukan cara sumber digunakan, dan pengguna merangkumi manusia, mesin serta komputer lain."
        },
        {
          "zh": "操作系统的角色取决于观察角度：普通用户只想要方便、易用和良好性能，并不关心资源利用率；而大型共享主机必须让所有用户都满意，因此操作系统同时是资源分配器，也是管理用户程序执行的控制程序。",
          "en": "What an operating system does depends on the point of view: ordinary users want convenience, ease of use and good performance and do not care about resource utilisation, whereas a shared mainframe must keep all users happy, so the OS is both a resource allocator and a control program that manages the execution of user programs.",
          "ms": "Peranan sistem pengendalian bergantung pada sudut pandangan: pengguna biasa mahukan kemudahan, kebolehgunaan dan prestasi yang baik serta tidak mengambil berat tentang penggunaan sumber, manakala kerangka utama yang dikongsi mesti memuaskan semua pengguna, jadi sistem pengendalian ialah pengagih sumber dan juga program kawalan yang mengurus pelaksanaan program pengguna."
        },
        {
          "zh": "操作系统没有普遍接受的定义，但“计算机上始终运行的那一个程序”就是内核，它属于操作系统；随操作系统发布但不属于内核的是系统程序，其余与操作系统无关的程序都是应用程序，现代通用系统还包含中间件框架。",
          "en": "There is no universally accepted definition of an operating system, but 'the one program running at all times on the computer' is the kernel, which is part of the operating system; system programs ship with the OS but are not part of the kernel, all other programs are application programs, and modern general-purpose systems also include middleware frameworks.",
          "ms": "Tiada takrif sistem pengendalian yang diterima sejagat, tetapi 'satu program yang sentiasa berjalan pada komputer' ialah kernel, yang merupakan sebahagian daripada sistem pengendalian; program sistem dihantar bersama sistem pengendalian tetapi bukan sebahagian daripada kernel, semua program lain ialah program aplikasi, dan sistem tujuan umum moden juga merangkumi rangka kerja perisian tengah."
        },
        {
          "zh": "I/O 设备与 CPU 可以并发执行：每个设备控制器负责一类设备并带有本地缓冲区，由相应的设备驱动程序管理；控制器完成操作后通过产生中断通知 CPU，所以操作系统是中断驱动的。",
          "en": "I/O devices and the CPU can execute concurrently: each device controller is in charge of a particular device type and has a local buffer managed by a device driver, and the controller informs the CPU that it has finished by causing an interrupt, which is why an operating system is interrupt driven.",
          "ms": "Peranti I/O dan CPU boleh melaksanakan secara serentak: setiap pengawal peranti bertanggungjawab atas satu jenis peranti dan mempunyai penimbal setempat yang diurus oleh pemacu peranti, dan pengawal memberitahu CPU bahawa operasi telah selesai dengan menjana selangan, sebab itulah sistem pengendalian dipacu oleh selangan."
        },
        {
          "zh": "中断通过中断向量把控制权转交给中断服务例程，中断机制必须保存被中断指令的地址；由错误或用户请求产生的软件中断称为陷阱或异常，操作系统在处理中断时会保存 CPU 寄存器和程序计数器。",
          "en": "An interrupt transfers control to the interrupt service routine generally through the interrupt vector, and the interrupt architecture must save the address of the interrupted instruction; a trap or exception is a software-generated interrupt caused by an error or a user request, and the OS preserves the CPU state by storing the registers and the program counter.",
          "ms": "Selangan memindahkan kawalan kepada rutin perkhidmatan selangan biasanya melalui vektor selangan, dan seni bina selangan mesti menyimpan alamat arahan yang diselangi; perangkap atau pengecualian ialah selangan yang dijana oleh perisian akibat ralat atau permintaan pengguna, dan sistem pengendalian memelihara keadaan CPU dengan menyimpan daftar dan pembilang program."
        },
        {
          "zh": "存储系统按速度、成本和易失性组织成层次结构：主存是 CPU 唯一能直接访问的大容量存储，通常是易失的 DRAM；辅存（硬盘、非易失存储器）扩展主存并提供大容量非易失存储。",
          "en": "Storage systems are organised in a hierarchy according to speed, cost and volatility: main memory is the only large storage media that the CPU can access directly and is typically volatile DRAM, while secondary storage such as hard disks and non-volatile memory extends main memory and provides large non-volatile capacity.",
          "ms": "Sistem storan disusun dalam hierarki mengikut kelajuan, kos dan sifat meruap: ingatan utama ialah satu-satunya media storan besar yang boleh dicapai terus oleh CPU dan biasanya DRAM yang meruap, manakala storan sekunder seperti cakera keras dan ingatan tidak meruap memperluas ingatan utama dan menyediakan kapasiti tidak meruap yang besar."
        },
        {
          "zh": "高速缓存是把正在使用的信息从较慢存储临时复制到较快存储的原则，硬件、操作系统和软件中都在使用；先检查缓存，命中则直接使用，未命中就复制进来，缓存大小与替换策略是重要的设计问题。",
          "en": "Caching is the principle of copying information in use from slower to faster storage temporarily, and it is performed at many levels in hardware, the operating system and software; the cache is checked first, a hit is used directly, a miss causes the data to be copied in, and cache size and replacement policy are important design problems.",
          "ms": "Cache ialah prinsip menyalin maklumat yang sedang digunakan daripada storan yang lebih perlahan ke storan yang lebih pantas buat sementara, dan ia dilaksanakan pada banyak peringkat dalam perkakasan, sistem pengendalian dan perisian; cache diperiksa dahulu, jika hit maklumat terus digunakan, jika tidak data disalin masuk, dan saiz cache serta dasar penggantian ialah masalah reka bentuk yang penting."
        },
        {
          "zh": "双模式运行让操作系统保护自身和其他系统组件：硬件提供模式位区分用户模式与内核模式，系统调用把模式切换为内核，返回时恢复为用户模式，特权指令只能在内核模式执行；定时器则防止进程无限循环或长期霸占资源。",
          "en": "Dual-mode operation allows the OS to protect itself and other system components: a hardware mode bit distinguishes user mode from kernel mode, a system call changes the mode to kernel and the return from the call resets it to user, privileged instructions execute only in kernel mode, and the timer prevents an infinite loop or a process hogging resources.",
          "ms": "Operasi dwi-mod membolehkan sistem pengendalian melindungi dirinya dan komponen sistem yang lain: bit mod daripada perkakasan membezakan mod pengguna daripada mod kernel, panggilan sistem menukar mod kepada kernel dan pemulangan daripada panggilan menetapkannya semula kepada pengguna, arahan istimewa hanya dilaksanakan dalam mod kernel, dan pemasa menghalang gelung tak terhingga atau proses merampas sumber."
        },
        {
          "zh": "多处理机系统又称并行系统或紧耦合系统，优点是提高吞吐量、获得规模经济并增强可靠性（优雅降级或容错），可分为非对称多处理（每个处理器分配特定任务）与对称多处理（每个处理器执行所有任务）；集群系统则由多台机器共享存储协同工作，提供高可用性服务。",
          "en": "Multiprocessor systems, also known as parallel or tightly coupled systems, offer increased throughput, economy of scale and increased reliability through graceful degradation or fault tolerance, and come in two types: asymmetric multiprocessing, where each processor is assigned a specific task, and symmetric multiprocessing, where each processor performs all tasks; clustered systems instead let multiple machines work together, usually sharing storage, to provide high-availability service.",
          "ms": "Sistem berbilang pemproses, juga dikenali sebagai sistem selari atau berganding rapat, menawarkan daya pemprosesan yang lebih tinggi, ekonomi bidangan dan kebolehpercayaan yang meningkat melalui degradasi anggun atau toleransi kesalahan, dan terbahagi kepada dua jenis: multipemprosesan tak simetri, iaitu setiap pemproses diberi tugas tertentu, dan multipemprosesan simetri, iaitu setiap pemproses melaksanakan semua tugas; sistem berkelompok pula membolehkan beberapa mesin bekerja bersama, biasanya berkongsi storan, untuk menyediakan perkhidmatan ketersediaan tinggi."
        }
      ],
      "terms": [
        {
          "en": "Operating System",
          "zh": "操作系统",
          "ms": "Sistem Pengendalian",
          "def": {
            "zh": "在用户与计算机硬件之间起中介作用的程序，负责执行用户程序、管理资源并控制系统运行。",
            "en": "A program that acts as an intermediary between the user and the computer hardware, executing user programs and managing resources.",
            "ms": "Program perantara antara pengguna dengan perkakasan komputer yang melaksanakan program pengguna dan mengurus sumber."
          }
        },
        {
          "en": "Kernel",
          "zh": "内核",
          "ms": "Kernel",
          "def": {
            "zh": "计算机上始终运行的那个程序，属于操作系统的一部分，直接管理硬件。",
            "en": "The one program running at all times on the computer; it is part of the operating system and manages the hardware directly.",
            "ms": "Satu program yang sentiasa berjalan pada komputer; ia sebahagian daripada sistem pengendalian dan mengurus perkakasan secara langsung."
          }
        },
        {
          "en": "Interrupt",
          "zh": "中断",
          "ms": "Selangan",
          "def": {
            "zh": "设备控制器完成操作后向 CPU 发出的信号，把控制权转交给中断服务例程。",
            "en": "A signal from a device controller to the CPU that transfers control to the interrupt service routine.",
            "ms": "Isyarat daripada pengawal peranti kepada CPU yang memindahkan kawalan kepada rutin perkhidmatan selangan."
          }
        },
        {
          "en": "Trap / Exception",
          "zh": "陷阱 / 异常",
          "ms": "Perangkap / Pengecualian",
          "def": {
            "zh": "由错误（如除零）或用户请求产生的软件中断，例如系统调用。",
            "en": "A software-generated interrupt caused by an error such as division by zero or by a user request such as a system call.",
            "ms": "Selangan yang dijana oleh perisian akibat ralat seperti pembahagian dengan sifar atau permintaan pengguna seperti panggilan sistem."
          }
        },
        {
          "en": "Bootstrap Program",
          "zh": "引导程序",
          "ms": "Program But",
          "def": {
            "zh": "开机或重启时首先运行的简单程序，通常存放在 ROM 固件中，负责初始化系统并装入内核。",
            "en": "Simple code loaded at power-up or reboot, typically stored in ROM firmware, that initialises the system and loads the kernel.",
            "ms": "Kod ringkas yang dimuatkan semasa dihidupkan atau but semula, biasanya disimpan dalam perisian tegar ROM, yang memulakan sistem dan memuatkan kernel."
          }
        },
        {
          "en": "Device Driver",
          "zh": "设备驱动程序",
          "ms": "Pemacu Peranti",
          "def": {
            "zh": "操作系统中管理某类设备控制器的模块，为控制器与内核之间提供统一接口。",
            "en": "The OS module that manages a particular type of device controller and provides a uniform interface between the controller and the kernel.",
            "ms": "Modul sistem pengendalian yang mengurus satu jenis pengawal peranti dan menyediakan antara muka seragam antara pengawal dengan kernel."
          }
        },
        {
          "en": "Direct Memory Access (DMA)",
          "zh": "直接内存访问",
          "ms": "Akses Ingatan Terus (DMA)",
          "def": {
            "zh": "高速 I/O 设备在无需 CPU 干预的情况下把数据块直接从缓冲区送入主存，每个数据块只产生一次中断。",
            "en": "A scheme in which a high-speed device controller transfers blocks of data directly to main memory without CPU intervention, generating one interrupt per block.",
            "ms": "Skim yang membolehkan pengawal peranti berkelajuan tinggi memindahkan blok data terus ke ingatan utama tanpa campur tangan CPU, dengan satu selangan bagi setiap blok."
          }
        },
        {
          "en": "Cache",
          "zh": "高速缓存",
          "ms": "Cache",
          "def": {
            "zh": "比被缓存对象更小但更快的存储，保存正在使用的信息副本以减少访问较慢存储的次数。",
            "en": "A smaller, faster storage that holds a copy of information in use so that the slower storage is accessed less often.",
            "ms": "Storan yang lebih kecil tetapi lebih pantas yang menyimpan salinan maklumat yang sedang digunakan supaya storan yang lebih perlahan jarang dicapai."
          }
        },
        {
          "en": "Dual-mode Operation",
          "zh": "双模式运行",
          "ms": "Operasi Dwi-mod",
          "def": {
            "zh": "用硬件模式位区分用户模式与内核模式的机制，使操作系统能保护自身与其他系统组件。",
            "en": "A hardware mode bit that distinguishes user mode from kernel mode so that the OS can protect itself and other system components.",
            "ms": "Bit mod perkakasan yang membezakan mod pengguna daripada mod kernel supaya sistem pengendalian dapat melindungi dirinya dan komponen lain."
          }
        },
        {
          "en": "Privileged Instruction",
          "zh": "特权指令",
          "ms": "Arahan Istimewa",
          "def": {
            "zh": "只能在内核模式执行的指令，例如设置定时器计数器，防止用户程序破坏系统。",
            "en": "An instruction that can be executed only in kernel mode, such as setting the timer counter, so that user programs cannot harm the system.",
            "ms": "Arahan yang hanya boleh dilaksanakan dalam mod kernel, seperti menetapkan pembilang pemasa, supaya program pengguna tidak merosakkan sistem."
          }
        },
        {
          "en": "Multiprogramming",
          "zh": "多道程序设计",
          "ms": "Pengaturcaraan Berbilang",
          "def": {
            "zh": "把多个作业组织在内存中，使 CPU 总有活可干；当某作业等待 I/O 时切换到另一个作业。",
            "en": "Organising several jobs in memory so that the CPU always has one to execute, switching to another job when one must wait for I/O.",
            "ms": "Menyusun beberapa kerja dalam ingatan supaya CPU sentiasa ada kerja untuk dilaksanakan, dan bertukar kepada kerja lain apabila satu kerja menunggu I/O."
          }
        },
        {
          "en": "Virtualization",
          "zh": "虚拟化",
          "ms": "Virtualisasi",
          "def": {
            "zh": "让操作系统在另一个操作系统之内运行应用的技术，由虚拟机管理器（VMM）提供虚拟化服务。",
            "en": "A technique that allows operating systems to run applications within other operating systems, with a virtual machine manager (VMM) providing the virtualisation services.",
            "ms": "Teknik yang membolehkan sistem pengendalian menjalankan aplikasi di dalam sistem pengendalian lain, dengan pengurus mesin maya (VMM) menyediakan perkhidmatan virtualisasi."
          }
        }
      ],
      "diagrams": [
        {
          "type": "layers",
          "title": {
            "zh": "计算机系统的四个组成部分",
            "en": "Four Components of a Computer System",
            "ms": "Empat Komponen Sistem Komputer"
          },
          "caption": {
            "zh": "自上而下：用户提出需求，应用程序使用资源，操作系统分配与控制，硬件提供计算能力。",
            "en": "From top to bottom: users make requests, applications use resources, the OS allocates and controls, and hardware provides the computing power.",
            "ms": "Dari atas ke bawah: pengguna membuat permintaan, aplikasi menggunakan sumber, sistem pengendalian mengagih dan mengawal, dan perkakasan menyediakan kuasa pengkomputeran."
          },
          "layers": [
            {
              "label": {
                "zh": "用户",
                "en": "Users",
                "ms": "Pengguna"
              },
              "note": {
                "zh": "人、机器和其他计算机",
                "en": "People, machines, other computers",
                "ms": "Manusia, mesin, komputer lain"
              }
            },
            {
              "label": {
                "zh": "应用程序",
                "en": "Application Programs",
                "ms": "Program Aplikasi"
              },
              "note": {
                "zh": "字处理、编译器、浏览器、数据库、游戏",
                "en": "Word processors, compilers, browsers, databases, games",
                "ms": "Pemproses perkataan, penyusun, pelayar, pangkalan data, permainan"
              }
            },
            {
              "label": {
                "zh": "操作系统",
                "en": "Operating System",
                "ms": "Sistem Pengendalian"
              },
              "note": {
                "zh": "控制并协调硬件在各种应用与用户间的使用",
                "en": "Controls and coordinates hardware use among applications and users",
                "ms": "Mengawal dan menyelaras penggunaan perkakasan antara aplikasi dan pengguna"
              }
            },
            {
              "label": {
                "zh": "硬件",
                "en": "Hardware",
                "ms": "Perkakasan"
              },
              "note": {
                "zh": "CPU、内存、I/O 设备",
                "en": "CPU, memory, I/O devices",
                "ms": "CPU, ingatan, peranti I/O"
              }
            }
          ]
        },
        {
          "type": "tree",
          "title": {
            "zh": "计算环境分类",
            "en": "Classification of Computing Environments",
            "ms": "Pengelasan Persekitaran Pengkomputeran"
          },
          "root": {
            "label": {
              "zh": "计算环境",
              "en": "Computing Environments",
              "ms": "Persekitaran Pengkomputeran"
            }
          },
          "branches": [
            {
              "label": {
                "zh": "传统与移动",
                "en": "Traditional and Mobile",
                "ms": "Tradisional dan Mudah Alih"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "传统独立通用机",
                    "en": "Traditional stand-alone machines",
                    "ms": "Mesin tradisional berdiri sendiri"
                  }
                },
                {
                  "label": {
                    "zh": "手机与平板（IEEE 802.11 / 蜂窝网络）",
                    "en": "Smartphones and tablets (IEEE 802.11 / cellular)",
                    "ms": "Telefon pintar dan tablet (IEEE 802.11 / selular)"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "客户机-服务器与对等",
                "en": "Client-Server and Peer-to-Peer",
                "ms": "Klien-Pelayan dan Rakan-ke-Rakan"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "计算服务器与文件服务器",
                    "en": "Compute-server and file-server",
                    "ms": "Pelayan pengiraan dan pelayan fail"
                  }
                },
                {
                  "label": {
                    "zh": "P2P：所有节点地位平等",
                    "en": "P2P: all nodes are peers",
                    "ms": "P2P: semua nod setaraf"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "云计算与实时嵌入式",
                "en": "Cloud and Real-Time Embedded",
                "ms": "Awan dan Terbenam Masa Nyata"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "SaaS / PaaS / IaaS",
                    "en": "SaaS / PaaS / IaaS",
                    "ms": "SaaS / PaaS / IaaS"
                  }
                },
                {
                  "label": {
                    "zh": "固定时间约束的实时系统",
                    "en": "Real-time systems with fixed time constraints",
                    "ms": "Sistem masa nyata dengan kekangan masa tetap"
                  }
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "常考“操作系统是什么、做什么”，以及系统调用如何从用户模式切换到内核模式；注意模式位由硬件提供，用户程序不能自己把模式位设成内核模式。",
          "en": "A standard question asks what an operating system is and does, and how a system call moves the system from user mode to kernel mode; remember that the mode bit is provided by hardware and user code cannot set it to kernel by itself.",
          "ms": "Soalan lazim menanyakan apa itu sistem pengendalian dan apa yang dilakukannya, serta bagaimana panggilan sistem menukar sistem daripada mod pengguna ke mod kernel; ingat bit mod disediakan oleh perkakasan dan kod pengguna tidak boleh menetapkannya sendiri kepada kernel."
        },
        {
          "zh": "要能区分中断（硬件产生）、陷阱/异常（软件产生）与系统调用（用户请求操作系统服务），并说清中断处理保存的是 CPU 寄存器和程序计数器（含被中断指令的地址）。",
          "en": "You must be able to distinguish an interrupt (generated by hardware), a trap or exception (generated by software) and a system call (a user request for an OS service), and state that interrupt handling saves the CPU registers and the program counter, including the address of the interrupted instruction.",
          "ms": "Anda mesti boleh membezakan selangan (dijana oleh perkakasan), perangkap atau pengecualian (dijana oleh perisian) dan panggilan sistem (permintaan pengguna terhadap perkhidmatan sistem pengendalian), serta menyatakan bahawa pengendalian selangan menyimpan daftar CPU dan pembilang program, termasuk alamat arahan yang diselangi."
        },
        {
          "zh": "易错点：把存储层次的顺序写反，或把“易失/非易失”与“快慢”混为一谈。正确顺序是寄存器 → 高速缓存 → 主存 → 辅存；主存易失但 CPU 可直接访问，辅存非易失但更慢。",
          "en": "A common mistake is reversing the storage hierarchy or confusing volatility with speed. The correct order is registers, cache, main memory, secondary storage; main memory is volatile but directly accessible by the CPU, while secondary storage is non-volatile but slower.",
          "ms": "Kesilapan biasa ialah menyongsangkan hierarki storan atau mengelirukan sifat meruap dengan kelajuan. Susunan yang betul ialah daftar, cache, ingatan utama, storan sekunder; ingatan utama meruap tetapi boleh dicapai terus oleh CPU, manakala storan sekunder tidak meruap tetapi lebih perlahan."
        },
        {
          "zh": "多处理机与集群常以选择题出现：非对称多处理是“每个处理器分配特定任务”，对称多处理是“每个处理器执行所有任务”，不要写反。",
          "en": "Multiprocessors and clusters often appear as multiple-choice items: in asymmetric multiprocessing each processor is assigned a specific task, whereas in symmetric multiprocessing every processor performs all tasks — do not swap the two.",
          "ms": "Multipemproses dan kelompok sering muncul sebagai soalan objektif: dalam multipemprosesan tak simetri setiap pemproses diberi tugas tertentu, manakala dalam multipemprosesan simetri setiap pemproses melaksanakan semua tugas — jangan tertukar keduanya."
        }
      ],
      "mnemonic": {
        "zh": "四层夹心记心间：硬件—系统—应用—用户；再加一句：没有中断，就没有操作系统。",
        "en": "Remember the four layers: hardware, operating system, applications, users — and one more line: no interrupts, no operating system.",
        "ms": "Ingat empat lapisan: perkakasan, sistem pengendalian, aplikasi, pengguna — dan satu lagi: tiada selangan, tiada sistem pengendalian."
      }
    },
    {
      "id": "os-02",
      "num": 2,
      "title": {
        "zh": "计算机系统与操作系统结构",
        "en": "Computer System and OS Structures",
        "ms": "Struktur Sistem Komputer dan Sistem Pengendalian"
      },
      "file": "os/CHAPTER 2 DDWD 2663.pptx",
      "pages": 64,
      "summary": {
        "zh": "本章先看现代操作系统如何运转：它由中断驱动，支持多任务与多线程，并在用户模式与内核模式之间切换以保护系统。接着介绍操作系统提供给用户的服务（用户界面、程序执行、I/O、文件操作、通信、错误检测）以及为系统效率而设的服务（资源分配、记账、保护与安全）。然后讲解系统调用、API 与参数传递方式，以及系统程序的分类，最后比较简单结构、分层、微内核、模块化与混合等操作系统结构，并说明系统引导、调试与性能调优。",
        "en": "This chapter first looks at how a modern operating system operates: it is interrupt driven, supports multitasking and multithreading, and switches between user mode and kernel mode to protect the system. It then presents the services an OS provides to users, such as the user interface, program execution, I/O operations, file-system manipulation, communications and error detection, together with the services that ensure efficient system operation, namely resource allocation, logging, and protection and security. The chapter continues with system calls, APIs and parameter-passing methods, the categories of system programs, and finally compares simple, layered, microkernel, modular and hybrid operating-system structures, ending with system boot, debugging and performance tuning.",
        "ms": "Bab ini mula-mula melihat cara sistem pengendalian moden beroperasi: ia dipacu oleh selangan, menyokong multitugas dan berbilang benang, serta bertukar antara mod pengguna dengan mod kernel untuk melindungi sistem. Seterusnya dibincangkan perkhidmatan yang disediakan sistem pengendalian kepada pengguna seperti antara muka pengguna, pelaksanaan program, operasi I/O, manipulasi sistem fail, komunikasi dan pengesanan ralat, bersama perkhidmatan untuk kecekapan sistem iaitu pengagihan sumber, perekodan, serta perlindungan dan keselamatan. Bab ini kemudian membincangkan panggilan sistem, API dan kaedah penghantaran parameter, kategori program sistem, dan akhir sekali membandingkan struktur sistem pengendalian ringkas, berlapis, mikrokernel, bermodul dan hibrid, diakhiri dengan but sistem, nyahpepijat dan penalaan prestasi."
      },
      "points": [
        {
          "zh": "现代操作系统是管理计算机硬件、软件资源并为程序提供公共服务的复杂软件，其关键特征包括中断驱动、多任务与多线程、资源管理、用户/内核双模式、安全与保护、网络能力、虚拟化、可伸缩性以及对云计算与人工智能等高级特性的支持。",
          "en": "A modern operating system is sophisticated software that manages computer hardware and software resources and provides common services for programs; its key features include being interrupt driven, multitasking and multithreading, resource management, user and kernel modes, security and protection, networking capabilities, virtualisation, scalability and support for advanced features such as cloud computing and AI.",
          "ms": "Sistem pengendalian moden ialah perisian canggih yang mengurus perkakasan dan sumber perisian komputer serta menyediakan perkhidmatan umum kepada program; ciri utamanya termasuk dipacu selangan, multitugas dan berbilang benang, pengurusan sumber, mod pengguna dan kernel, keselamatan dan perlindungan, keupayaan rangkaian, virtualisasi, kebolehskalaan serta sokongan ciri lanjutan seperti pengkomputeran awan dan AI."
        },
        {
          "zh": "硬件用模式位区分执行模式：用户模式时模式位为 1，内核模式（又称监督模式、系统模式、特权模式）时为 0；当系统调用、陷阱或中断发生时，硬件把模式位改为 0 进入内核模式，返回用户程序时再改回用户模式。",
          "en": "Hardware uses a mode bit to distinguish execution modes: the mode bit is 1 in user mode and 0 in kernel mode, which is also called supervisor, system or privileged mode; whenever a system call, trap or interrupt occurs the hardware sets the mode bit to 0 and enters kernel mode, and it is reset to user mode when control returns to the application.",
          "ms": "Perkakasan menggunakan bit mod untuk membezakan mod pelaksanaan: bit mod bernilai 1 dalam mod pengguna dan 0 dalam mod kernel, yang juga dikenali sebagai mod penyelia, mod sistem atau mod istimewa; apabila panggilan sistem, perangkap atau selangan berlaku, perkakasan menetapkan bit mod kepada 0 dan masuk ke mod kernel, dan ia ditetapkan semula kepada mod pengguna apabila kawalan kembali kepada aplikasi."
        },
        {
          "zh": "为防止用户程序破坏系统，会把可能造成危害的机器指令设计为特权指令，只在内核模式运行；若用户模式试图执行特权指令，硬件不会执行，而是视为非法并陷入操作系统处理。",
          "en": "To prevent improper users from harming the system, machine instructions that could cause harm are designed as privileged instructions that run only in kernel mode; if user mode attempts to execute a privileged instruction, the hardware does not execute it but treats it as illegal and traps it to the operating system.",
          "ms": "Untuk menghalang pengguna yang tidak sepatutnya merosakkan sistem, arahan mesin yang boleh mendatangkan mudarat direka sebagai arahan istimewa yang hanya berjalan dalam mod kernel; jika mod pengguna cuba melaksanakan arahan istimewa, perkakasan tidak melaksanakannya tetapi menganggapnya haram dan memerangkapnya kepada sistem pengendalian."
        },
        {
          "zh": "面向用户的操作系统服务包括：用户界面（CLI、GUI、触摸屏、批处理）、程序执行（把程序装入内存并运行、正常或异常结束）、I/O 操作、文件系统操作（读写、创建删除、检索、权限管理）、通信（共享内存或消息传递）以及错误检测与调试支持。另一组服务用于保证系统本身的高效运行：资源分配（在多个用户或作业并发时为每个分配 CPU 周期、主存、文件存储和 I/O 设备）、记账（记录哪些用户使用了多少何种资源）以及保护与安全（控制对系统资源的一切访问、用用户认证抵御外部入侵）。",
          "en": "The operating-system services helpful to the user are the user interface (CLI, GUI, touch screen or batch), program execution (loading a program into memory, running it and ending it normally or abnormally), I/O operations, file-system manipulation (reading and writing, creating and deleting, searching and permission management), communications through shared memory or message passing, and error detection with debugging facilities. Another set of services exists to ensure the efficient operation of the system itself: resource allocation, which gives each concurrent user or job CPU cycles, main memory, file storage and I/O devices; logging, which keeps track of which users use how much and what kinds of resources; and protection and security, which controls all access to system resources and uses user authentication against outsiders.",
          "ms": "Perkhidmatan sistem pengendalian yang membantu pengguna ialah antara muka pengguna (CLI, GUI, skrin sentuh atau kelompok), pelaksanaan program (memuatkan program ke dalam ingatan, menjalankannya dan menamatkannya secara normal atau abnormal), operasi I/O, manipulasi sistem fail (membaca dan menulis, mencipta dan memadam, mencari serta mengurus kebenaran), komunikasi melalui ingatan dikongsi atau penghantaran mesej, dan pengesanan ralat dengan kemudahan nyahpepijat. Satu set perkhidmatan lain wujud untuk memastikan operasi sistem yang cekap: pengagihan sumber, yang memberikan setiap pengguna atau kerja serentak kitaran CPU, ingatan utama, storan fail dan peranti I/O; perekodan, yang menjejaki pengguna mana menggunakan berapa banyak dan jenis sumber apa; serta perlindungan dan keselamatan, yang mengawal semua akses kepada sumber sistem dan menggunakan pengesahan pengguna untuk menangkis penceroboh luar."
        },
        {
          "zh": "系统调用是程序请求操作系统服务的接口，通常用 C 或 C++ 编写，程序多半通过高级 API 而非直接调用，最常见的三种 API 是 Windows 的 Win32 API、POSIX 系统的 POSIX API 和 Java 虚拟机的 Java API；每个系统调用有一个编号，系统调用接口用按编号索引的表调用内核中的相应例程，细节由运行时支持库隐藏，程序员只需遵守 API。",
          "en": "A system call is the interface for programs to request services from the OS, typically written in C or C++, and programs usually access it through a high-level API rather than calling it directly; the three most common APIs are the Win32 API for Windows, the POSIX API for POSIX-based systems and the Java API for the JVM. Each system call has a number, the system-call interface uses a table indexed by these numbers to invoke the intended routine in the kernel, and the details are hidden from the programmer by the API and the run-time support library.",
          "ms": "Panggilan sistem ialah antara muka untuk program meminta perkhidmatan daripada sistem pengendalian, biasanya ditulis dalam C atau C++, dan program lazimnya mengaksesnya melalui API peringkat tinggi dan bukan memanggilnya secara langsung; tiga API yang paling biasa ialah Win32 API untuk Windows, POSIX API untuk sistem berasaskan POSIX dan Java API untuk JVM. Setiap panggilan sistem mempunyai nombor, antara muka panggilan sistem menggunakan jadual yang diindeks mengikut nombor ini untuk memanggil rutin yang dikehendaki dalam kernel, dan butirannya disembunyikan daripada pengaturcara oleh API serta pustaka sokongan masa larian."
        },
        {
          "zh": "向操作系统传递参数有三种通用方法：最简单的是把参数放在寄存器中（但寄存器数量有限）；也可以把参数存入内存中的块或表，再把块的地址放入寄存器（Linux 和 Solaris 采用此法）；或者由程序把参数压入栈、由操作系统弹出。块与栈方法都不限制参数的个数和长度。",
          "en": "There are three general methods of passing parameters to the OS: the simplest passes parameters in registers, although there may be more parameters than registers; parameters may be stored in a block or table in memory with the address of the block passed in a register, the approach taken by Linux and Solaris; or the program may push the parameters onto the stack and the OS pops them off. The block and stack methods do not limit the number or length of the parameters passed.",
          "ms": "Terdapat tiga kaedah umum untuk menghantar parameter kepada sistem pengendalian: yang paling mudah ialah meletakkan parameter dalam daftar, walaupun parameter mungkin lebih banyak daripada daftar; parameter boleh disimpan dalam blok atau jadual di dalam ingatan dan alamat blok itu dihantar dalam daftar, iaitu pendekatan Linux dan Solaris; atau program menolak parameter ke dalam tindanan dan sistem pengendalian mengeluarkannya. Kaedah blok dan tindanan tidak mengehadkan bilangan atau panjang parameter."
        },
        {
          "zh": "系统调用按功能分为进程控制、文件管理、设备管理、信息维护、通信和保护六大类；例如 FreeBSD 中 shell 用 fork() 创建进程、用 exec() 装入程序、等待进程结束（返回码 0 表示无错，大于 0 表示出错），而 Arduino 是单任务、无操作系统的例子，程序通过 USB 装入闪存、运行结束后重新载入 shell。",
          "en": "System calls are grouped into six categories: process control, file management, device management, information maintenance, communications and protection. In FreeBSD, for instance, the shell executes fork() to create a process, exec() to load a program and then waits for the process to terminate (exit code 0 means no error, a code greater than 0 is an error), whereas Arduino is a single-tasking example with no operating system in which a sketch is loaded into flash memory over USB and the shell is reloaded when the program exits.",
          "ms": "Panggilan sistem dikelompokkan kepada enam kategori: kawalan proses, pengurusan fail, pengurusan peranti, penyelenggaraan maklumat, komunikasi dan perlindungan. Dalam FreeBSD misalnya, shell melaksanakan fork() untuk mencipta proses, exec() untuk memuatkan program dan kemudian menunggu proses tamat (kod keluar 0 bermaksud tiada ralat, kod lebih besar daripada 0 bermaksud ralat), manakala Arduino ialah contoh satu tugas tanpa sistem pengendalian yang programnya dimuatkan ke dalam memori kilat melalui USB dan shell dimuatkan semula apabila program tamat."
        },
        {
          "zh": "系统程序为程序开发和执行提供方便的环境，可分为文件操作、状态信息、文件修改、编程语言支持、程序装入与执行、通信、后台服务和应用程序；后台服务在引导时启动，运行在用户上下文而非内核上下文，被称为服务、子系统或守护进程；大多数用户眼中的操作系统其实是系统程序，而不是真正的系统调用。",
          "en": "System programs provide a convenient environment for program development and execution and can be divided into file manipulation, status information, file modification, programming-language support, program loading and execution, communications, background services and application programs; background services launch at boot time, run in user context rather than kernel context and are known as services, subsystems or daemons. Most users' view of the operating system is defined by system programs, not by the actual system calls.",
          "ms": "Program sistem menyediakan persekitaran yang memudahkan pembangunan dan pelaksanaan program dan boleh dibahagikan kepada manipulasi fail, maklumat status, pengubahsuaian fail, sokongan bahasa pengaturcaraan, pemuatan dan pelaksanaan program, komunikasi, perkhidmatan latar belakang serta program aplikasi; perkhidmatan latar belakang dilancarkan semasa but, berjalan dalam konteks pengguna dan bukan konteks kernel, dan dikenali sebagai perkhidmatan, subsistem atau daemon. Pandangan kebanyakan pengguna tentang sistem pengendalian ditentukan oleh program sistem, bukan oleh panggilan sistem sebenar."
        },
        {
          "zh": "通用操作系统是很大的程序，常见结构有：简单结构（MS-DOS，模块间无严格分离，一个错误可能影响整个系统）、传统 UNIX（比简单结构进一步但未完全分层，内核在内核态提供文件系统、CPU 调度、内存管理）、整体式内核（Linux，单体内核加上模块化设计）、分层法（第 0 层是硬件，第 N 层是用户界面，每层只使用更低层的功能）、微内核（如 Mach，把尽量多的功能移出内核到用户空间，用消息传递通信，易扩展、易移植、更可靠更安全，但用户态与内核态通信有性能开销）、可加载内核模块 LKM（面向对象、各组件通过已知接口通信、可按需装入内核）以及混合系统（如 macOS 结合 Mach 微内核与 BSD UNIX 部分）。",
          "en": "A general-purpose OS is a very large program, and the common structures are: the simple structure of MS-DOS, with no strict separation between modules so that a single error can affect the whole system; original UNIX, beyond simple but not fully layered, whose kernel provides the file system, CPU scheduling and memory management below the system-call interface; the monolithic kernel of Linux combined with modular design; the layered approach, where layer 0 is the hardware and layer N the user interface and each layer uses only lower-level functions; microkernels such as Mach, which move as much as possible from the kernel into user space and communicate by message passing, being easier to extend and port and more reliable and secure but paying a performance overhead for user-to-kernel communication; loadable kernel modules, which use an object-oriented approach in which each core component is separate and talks to the others over known interfaces and can be loaded into the kernel as needed; and hybrid systems such as macOS, which combines the Mach microkernel with BSD UNIX parts.",
          "ms": "Sistem pengendalian tujuan umum ialah program yang sangat besar, dan struktur yang biasa ialah: struktur ringkas MS-DOS tanpa pemisahan ketat antara modul sehingga satu ralat boleh menjejaskan seluruh sistem; UNIX asal, iaitu melebihi struktur ringkas tetapi tidak berlapis sepenuhnya, dengan kernel menyediakan sistem fail, penjadualan CPU dan pengurusan ingatan di bawah antara muka panggilan sistem; kernel monolitik Linux yang digabungkan dengan reka bentuk bermodul; pendekatan berlapis, iaitu lapisan 0 ialah perkakasan dan lapisan N ialah antara muka pengguna, dan setiap lapisan hanya menggunakan fungsi lapisan bawah; mikrokernel seperti Mach yang memindahkan sebanyak mungkin fungsi keluar daripada kernel ke ruang pengguna dan berkomunikasi melalui penghantaran mesej, lebih mudah diperluas dan dipindahkan serta lebih boleh dipercayai dan selamat tetapi menanggung overhed prestasi untuk komunikasi pengguna ke kernel; modul kernel boleh dimuat (LKM) yang menggunakan pendekatan berorientasikan objek dengan setiap komponen terpisah dan berkomunikasi melalui antara muka yang diketahui serta boleh dimuatkan ke dalam kernel mengikut keperluan; dan sistem hibrid seperti macOS yang menggabungkan mikrokernel Mach dengan bahagian BSD UNIX."
        },
        {
          "zh": "启动时执行从固定内存位置开始，硬件需要一小段代码才能装入操作系统：引导装入程序（BIOS，现代系统用 UEFI 取代）存放在 ROM 或 EEPROM 中，它定位内核、把内核装入内存并启动；有时是两步过程，先由 ROM 代码装入固定位置的引导块，再由引导块从磁盘装入引导装入程序，常见的 GRUB 允许从多个磁盘、多个版本和不同内核选项中选择内核。调试与性能调优方面，操作系统产生日志文件，应用失败产生核心转储、系统失败产生崩溃转储，跟踪工具（strace、gdb、perf、tcpdump、BCC/BPF）可记录系统调用等活动用于分析。",
          "en": "At boot time execution starts at a fixed memory location and the operating system must be made available to the hardware by a small piece of code: the bootstrap loader, with BIOS in ROM or EEPROM and UEFI replacing BIOS in modern systems, locates the kernel, loads it into memory and starts it. Sometimes it is a two-step process in which ROM code loads a boot block at a fixed location, which then loads the bootstrap loader from disk, and the common loader GRUB allows selection of the kernel from multiple disks, versions and kernel options. For debugging and performance tuning, the OS generates log files, an application failure can generate a core dump and an OS failure a crash dump, and tracing tools such as strace, gdb, perf, tcpdump and BCC/BPF record activities such as system-call invocation for analysis.",
          "ms": "Semasa but, pelaksanaan bermula pada lokasi ingatan yang tetap dan sistem pengendalian mesti disediakan kepada perkakasan oleh sekeping kod kecil: pemuat but, dengan BIOS dalam ROM atau EEPROM dan UEFI menggantikan BIOS dalam sistem moden, mencari kernel, memuatkannya ke dalam ingatan dan memulakannya. Kadangkala ia proses dua langkah, iaitu kod ROM memuatkan blok but pada lokasi tetap, yang kemudian memuatkan pemuat but daripada cakera, dan pemuat lazim GRUB membolehkan pemilihan kernel daripada pelbagai cakera, versi dan pilihan kernel. Untuk nyahpepijat dan penalaan prestasi, sistem pengendalian menghasilkan fail log, kegagalan aplikasi boleh menghasilkan core dump dan kegagalan sistem menghasilkan crash dump, serta alat pengesanan seperti strace, gdb, perf, tcpdump dan BCC/BPF merekod aktiviti seperti seruan panggilan sistem untuk analisis."
        }
      ],
      "terms": [
        {
          "en": "System Call",
          "zh": "系统调用",
          "ms": "Panggilan Sistem",
          "def": {
            "zh": "程序请求操作系统服务的接口，通常通过高级 API 间接使用，内核用编号索引的表来分派。",
            "en": "The interface through which a program requests services from the OS, usually used indirectly via a high-level API and dispatched by a table indexed by call number.",
            "ms": "Antara muka yang digunakan program untuk meminta perkhidmatan sistem pengendalian, biasanya melalui API peringkat tinggi dan diagihkan oleh jadual yang diindeks mengikut nombor panggilan."
          }
        },
        {
          "en": "Application Programming Interface (API)",
          "zh": "应用程序接口",
          "ms": "Antara Muka Pengaturcaraan Aplikasi (API)",
          "def": {
            "zh": "程序员调用系统功能所遵循的一组函数约定，如 Win32 API、POSIX API 和 Java API，隐藏系统调用细节。",
            "en": "A set of function conventions programmers use to access system functions, such as the Win32, POSIX and Java APIs, hiding the details of system calls.",
            "ms": "Satu set konvensyen fungsi yang digunakan pengaturcara untuk mengakses fungsi sistem, seperti API Win32, POSIX dan Java, yang menyembunyikan butiran panggilan sistem."
          }
        },
        {
          "en": "Privileged Instruction",
          "zh": "特权指令",
          "ms": "Arahan Istimewa",
          "def": {
            "zh": "只允许在内核模式执行的机器指令，用户模式执行会被视为非法并陷入操作系统。",
            "en": "A machine instruction that may be executed only in kernel mode; an attempt in user mode is treated as illegal and traps to the OS.",
            "ms": "Arahan mesin yang hanya boleh dilaksanakan dalam mod kernel; percubaan dalam mod pengguna dianggap haram dan diperangkap kepada sistem pengendalian."
          }
        },
        {
          "en": "System Program",
          "zh": "系统程序",
          "ms": "Program Sistem",
          "def": {
            "zh": "随操作系统提供、但不属于内核的程序，为用户提供开发与执行程序的方便环境。",
            "en": "A program that ships with the operating system but is not part of the kernel, providing a convenient environment for program development and execution.",
            "ms": "Program yang dihantar bersama sistem pengendalian tetapi bukan sebahagian daripada kernel, menyediakan persekitaran yang memudahkan pembangunan dan pelaksanaan program."
          }
        },
        {
          "en": "Daemon",
          "zh": "守护进程",
          "ms": "Daemon",
          "def": {
            "zh": "在引导时启动的后台服务进程，运行在用户上下文，如磁盘检查、进程调度、错误日志和打印。",
            "en": "A background service process launched at boot time that runs in user context, providing facilities such as disk checking, process scheduling, error logging and printing.",
            "ms": "Proses perkhidmatan latar belakang yang dilancarkan semasa but dan berjalan dalam konteks pengguna, menyediakan kemudahan seperti pemeriksaan cakera, penjadualan proses, perekodan ralat dan pencetakan."
          }
        },
        {
          "en": "Simple Structure",
          "zh": "简单结构",
          "ms": "Struktur Ringkas",
          "def": {
            "zh": "模块之间没有严格分离的操作系统结构，如 MS-DOS，容易实现但缺乏模块化与安全性。",
            "en": "An OS structure with no strict separation between system modules, such as MS-DOS; it is easy to implement but lacks modularity and security.",
            "ms": "Struktur sistem pengendalian tanpa pemisahan ketat antara modul sistem, seperti MS-DOS; mudah dilaksanakan tetapi kurang modulariti dan keselamatan."
          }
        },
        {
          "en": "Layered Approach",
          "zh": "分层法",
          "ms": "Pendekatan Berlapis",
          "def": {
            "zh": "把操作系统分成若干层，第 0 层是硬件，第 N 层是用户界面，每层只使用更低层提供的功能和服务。",
            "en": "Dividing the OS into layers, with layer 0 the hardware and layer N the user interface, where each layer uses only the functions and services of lower layers.",
            "ms": "Membahagikan sistem pengendalian kepada lapisan, dengan lapisan 0 ialah perkakasan dan lapisan N ialah antara muka pengguna, dan setiap lapisan hanya menggunakan fungsi serta perkhidmatan lapisan bawah."
          }
        },
        {
          "en": "Microkernel",
          "zh": "微内核",
          "ms": "Mikrokernel",
          "def": {
            "zh": "把尽可能多的功能从内核移到用户空间的结构，用户模块之间用消息传递通信，如 Mach。",
            "en": "A structure that moves as much functionality as possible from the kernel into user space, with user modules communicating by message passing, as in Mach.",
            "ms": "Struktur yang memindahkan sebanyak mungkin fungsi daripada kernel ke ruang pengguna, dengan modul pengguna berkomunikasi melalui penghantaran mesej, seperti dalam Mach."
          }
        },
        {
          "en": "Loadable Kernel Module (LKM)",
          "zh": "可加载内核模块",
          "ms": "Modul Kernel Boleh Dimuat (LKM)",
          "def": {
            "zh": "采用面向对象方法、可按需装入内核的核心组件，各组件通过已知接口通信，比分层更灵活。",
            "en": "A core component implemented with an object-oriented approach that can be loaded into the kernel as needed and talks to others over known interfaces, more flexible than layering.",
            "ms": "Komponen teras yang dilaksanakan dengan pendekatan berorientasikan objek dan boleh dimuatkan ke dalam kernel mengikut keperluan serta berkomunikasi melalui antara muka yang diketahui, lebih fleksibel daripada pendekatan berlapis."
          }
        },
        {
          "en": "Hybrid System",
          "zh": "混合系统",
          "ms": "Sistem Hibrid",
          "def": {
            "zh": "结合多种结构（整体式、微内核、分层等）以兼顾性能、灵活性与安全的现代操作系统结构。",
            "en": "A modern OS structure that combines features of several structures such as monolithic, microkernel and layered to balance performance, flexibility and security.",
            "ms": "Struktur sistem pengendalian moden yang menggabungkan ciri beberapa struktur seperti monolitik, mikrokernel dan berlapis untuk mengimbangi prestasi, fleksibiliti dan keselamatan."
          }
        },
        {
          "en": "Bootstrap Loader",
          "zh": "引导装入程序",
          "ms": "Pemuat But",
          "def": {
            "zh": "存放在 ROM 或 EEPROM 中的一小段代码，负责定位内核、把它装入内存并启动系统。",
            "en": "A small piece of code stored in ROM or EEPROM that locates the kernel, loads it into memory and starts it.",
            "ms": "Sekeping kod kecil yang disimpan dalam ROM atau EEPROM yang mencari kernel, memuatkannya ke dalam ingatan dan memulakannya."
          }
        },
        {
          "en": "UEFI / GRUB",
          "zh": "统一可扩展固件接口 / GRUB",
          "ms": "UEFI / GRUB",
          "def": {
            "zh": "UEFI 是现代系统取代 BIOS 的固件接口；GRUB 是常见的引导装入程序，允许从多个磁盘、版本和内核选项中选择内核。",
            "en": "UEFI is the firmware interface that replaces BIOS in modern systems, while GRUB is a common bootstrap loader that allows selection of a kernel from multiple disks, versions and kernel options.",
            "ms": "UEFI ialah antara muka perisian tegar yang menggantikan BIOS dalam sistem moden, manakala GRUB ialah pemuat but lazim yang membolehkan pemilihan kernel daripada pelbagai cakera, versi dan pilihan kernel."
          }
        },
        {
          "en": "Core Dump / Crash Dump",
          "zh": "核心转储 / 崩溃转储",
          "ms": "Core Dump / Crash Dump",
          "def": {
            "zh": "应用失败时产生的、捕捉该进程内存的文件；系统失败时则产生包含内核内存的崩溃转储，用于调试。",
            "en": "A file capturing the memory of a process when an application fails, while an operating-system failure generates a crash dump containing kernel memory, both used for debugging.",
            "ms": "Fail yang menangkap ingatan sesuatu proses apabila aplikasi gagal, manakala kegagalan sistem pengendalian menghasilkan crash dump yang mengandungi ingatan kernel, kedua-duanya digunakan untuk nyahpepijat."
          }
        }
      ],
      "diagrams": [
        {
          "type": "flow",
          "dir": "v",
          "title": {
            "zh": "应用程序、API、系统调用与内核的关系",
            "en": "Relationship of Application, API, System Call and Kernel",
            "ms": "Hubungan Aplikasi, API, Panggilan Sistem dan Kernel"
          },
          "caption": {
            "zh": "程序员只面对 API；系统调用接口按编号查表调用内核例程，再返回状态与返回值。",
            "en": "The programmer only sees the API; the system-call interface looks up the number in a table, invokes the kernel routine and returns status and values.",
            "ms": "Pengaturcara hanya berurusan dengan API; antara muka panggilan sistem mencari nombor dalam jadual, memanggil rutin kernel dan memulangkan status serta nilai."
          },
          "steps": [
            {
              "label": {
                "zh": "应用程序调用 API（如 printf）",
                "en": "Application calls the API (e.g. printf)",
                "ms": "Aplikasi memanggil API (cth. printf)"
              },
              "note": {
                "zh": "程序不直接使用系统调用",
                "en": "Programs do not use system calls directly",
                "ms": "Program tidak menggunakan panggilan sistem secara langsung"
              }
            },
            {
              "label": {
                "zh": "运行时支持库发起系统调用",
                "en": "Run-time support library issues the system call",
                "ms": "Pustaka sokongan masa larian mengeluarkan panggilan sistem"
              },
              "note": {
                "zh": "库函数把 API 翻译成系统调用编号",
                "en": "The library translates the API into a system-call number",
                "ms": "Pustaka menterjemah API kepada nombor panggilan sistem"
              }
            },
            {
              "label": {
                "zh": "系统调用接口按编号查表",
                "en": "System-call interface indexes the table",
                "ms": "Antara muka panggilan sistem mengindeks jadual"
              },
              "note": {
                "zh": "表中存放各服务例程的地址",
                "en": "The table holds the addresses of the service routines",
                "ms": "Jadual menyimpan alamat rutin perkhidmatan"
              }
            },
            {
              "label": {
                "zh": "内核执行对应例程",
                "en": "Kernel executes the intended routine",
                "ms": "Kernel melaksanakan rutin yang dikehendaki"
              },
              "note": {
                "zh": "此时系统处于内核模式",
                "en": "The system is in kernel mode at this point",
                "ms": "Sistem berada dalam mod kernel pada ketika ini"
              }
            },
            {
              "label": {
                "zh": "返回状态与返回值给调用者",
                "en": "Status and return values go back to the caller",
                "ms": "Status dan nilai pulangan kembali kepada pemanggil"
              },
              "note": {
                "zh": "模式位恢复为用户模式",
                "en": "The mode bit is reset to user mode",
                "ms": "Bit mod ditetapkan semula kepada mod pengguna"
              }
            }
          ]
        },
        {
          "type": "tree",
          "title": {
            "zh": "操作系统结构的几种策略",
            "en": "Strategies for Structuring an Operating System",
            "ms": "Strategi Struktur Sistem Pengendalian"
          },
          "root": {
            "label": {
              "zh": "操作系统结构",
              "en": "OS Structure",
              "ms": "Struktur Sistem Pengendalian"
            }
          },
          "branches": [
            {
              "label": {
                "zh": "简单/整体式",
                "en": "Simple / Monolithic",
                "ms": "Ringkas / Monolitik"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "MS-DOS：模块无严格分离",
                    "en": "MS-DOS: no strict separation",
                    "ms": "MS-DOS: tiada pemisahan ketat"
                  }
                },
                {
                  "label": {
                    "zh": "UNIX / Linux：单体内核 + 模块化",
                    "en": "UNIX / Linux: monolithic plus modular",
                    "ms": "UNIX / Linux: monolitik dan bermodul"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "分层与模块",
                "en": "Layered and Modular",
                "ms": "Berlapis dan Bermodul"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "第 0 层硬件，第 N 层用户界面",
                    "en": "Layer 0 hardware, layer N user interface",
                    "ms": "Lapisan 0 perkakasan, lapisan N antara muka pengguna"
                  }
                },
                {
                  "label": {
                    "zh": "可加载内核模块（LKM）",
                    "en": "Loadable kernel modules (LKM)",
                    "ms": "Modul kernel boleh dimuat (LKM)"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "微内核",
                "en": "Microkernel",
                "ms": "Mikrokernel"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "Mach：功能移到用户空间",
                    "en": "Mach: functionality moved to user space",
                    "ms": "Mach: fungsi dipindahkan ke ruang pengguna"
                  }
                },
                {
                  "label": {
                    "zh": "消息传递通信，扩展与移植更容易",
                    "en": "Message passing, easier to extend and port",
                    "ms": "Penghantaran mesej, lebih mudah diperluas dan dipindah"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "混合系统",
                "en": "Hybrid Systems",
                "ms": "Sistem Hibrid"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "macOS：Mach 微内核 + BSD UNIX",
                    "en": "macOS: Mach microkernel plus BSD UNIX",
                    "ms": "macOS: mikrokernel Mach dan BSD UNIX"
                  }
                },
                {
                  "label": {
                    "zh": "Windows：整体式为主 + 微内核子系统",
                    "en": "Windows: mostly monolithic plus microkernel subsystems",
                    "ms": "Windows: kebanyakannya monolitik dan subsistem mikrokernel"
                  }
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必考：系统调用如何工作（API → 运行时库 → 系统调用接口按编号查表 → 内核例程 → 返回状态），以及模式位的取值方向（用户模式 = 1，内核模式 = 0），很多人会写反。",
          "en": "A guaranteed question is how a system call works (API, run-time library, system-call interface indexing a table by number, kernel routine, return status), and the value of the mode bit, where user mode is 1 and kernel mode is 0 — many students reverse these.",
          "ms": "Soalan yang pasti keluar ialah bagaimana panggilan sistem berfungsi (API, pustaka masa larian, antara muka panggilan sistem yang mengindeks jadual mengikut nombor, rutin kernel, status pulangan), dan nilai bit mod, iaitu mod pengguna ialah 1 dan mod kernel ialah 0 — ramai pelajar menyongsangkannya."
        },
        {
          "zh": "会比较题：分层法（每层只用更低层功能，调试容易但效率较低）与微内核（内核只留最基本功能、用消息传递，易扩展易移植更可靠更安全，代价是用户态与内核态通信开销大），要各写出一条优点和一条缺点。",
          "en": "A comparison question: the layered approach, where each layer uses only lower layers and debugging is easier but efficiency suffers, versus the microkernel, which keeps only the minimum in the kernel and uses message passing, being easier to extend and port and more reliable and secure at the cost of user-to-kernel communication overhead; give at least one advantage and one drawback of each.",
          "ms": "Soalan perbandingan: pendekatan berlapis, iaitu setiap lapisan hanya menggunakan lapisan bawah dan nyahpepijat lebih mudah tetapi kecekapan berkurang, berbanding mikrokernel yang hanya menyimpan fungsi minimum dalam kernel dan menggunakan penghantaran mesej, lebih mudah diperluas dan dipindah serta lebih boleh dipercayai dan selamat tetapi menanggung overhed komunikasi pengguna ke kernel; berikan sekurang-kurangnya satu kelebihan dan satu kelemahan bagi setiap satu."
        },
        {
          "zh": "易错点：把“系统程序”与“系统调用”混为一谈。系统调用是内核提供的编程接口，系统程序是随操作系统发布、运行在用户上下文的程序（如 shell、编译器、守护进程），用户看到的“操作系统”多数是系统程序。",
          "en": "A common confusion is mixing up system programs and system calls. A system call is a programming interface provided by the kernel, whereas a system program is a program that ships with the OS and runs in user context, such as a shell, compiler or daemon; most of what users see as the operating system is system programs.",
          "ms": "Kekeliruan biasa ialah mencampuradukkan program sistem dengan panggilan sistem. Panggilan sistem ialah antara muka pengaturcaraan yang disediakan kernel, manakala program sistem ialah program yang dihantar bersama sistem pengendalian dan berjalan dalam konteks pengguna, seperti shell, penyusun atau daemon; apa yang dilihat pengguna sebagai sistem pengendalian kebanyakannya ialah program sistem."
        },
        {
          "zh": "引导过程是高频考点：引导装入程序存在 ROM/EEPROM，负责定位并装入内核；现代系统用 UEFI 取代 BIOS，GRUB 可以选择内核；不要漏掉“执行从固定内存位置开始”这一步。",
          "en": "The boot process is frequently examined: the bootstrap loader is stored in ROM or EEPROM and locates and loads the kernel; UEFI replaces BIOS in modern systems and GRUB allows kernel selection; do not omit the step that execution begins at a fixed memory location.",
          "ms": "Proses but sering diuji: pemuat but disimpan dalam ROM atau EEPROM dan bertugas mencari serta memuatkan kernel; UEFI menggantikan BIOS dalam sistem moden dan GRUB membolehkan pemilihan kernel; jangan tertinggal langkah bahawa pelaksanaan bermula pada lokasi ingatan yang tetap."
        }
      ],
      "mnemonic": {
        "zh": "系统调用六类记：进程、文件、设备、信息、通信、保护；结构演化记：简单—UNIX—整体—分层—微内核—模块—混合。",
        "en": "Six categories of system calls: process, file, device, information, communication, protection. Structure evolution: simple, UNIX, monolithic, layered, microkernel, modular, hybrid.",
        "ms": "Enam kategori panggilan sistem: proses, fail, peranti, maklumat, komunikasi, perlindungan. Evolusi struktur: ringkas, UNIX, monolitik, berlapis, mikrokernel, bermodul, hibrid."
      }
    },
    {
      "id": "os-03",
      "num": 3,
      "title": {
        "zh": "进程管理：进程与线程",
        "en": "Process Management: Processes and Threads",
        "ms": "Pengurusan Proses: Proses dan Benang"
      },
      "file": "os/CHAPTER 3 DDWD 2663.pptx",
      "pages": 81,
      "summary": {
        "zh": "本章从“程序是被动实体、进程是执行中的程序”出发，讲解进程的状态（新建、就绪、运行、等待、终止，以及挂起就绪与挂起等待）和进程在内存中的组成部分（代码段、数据段、堆、栈）。接着介绍进程控制块 PCB 记录哪些信息，以及进程的创建、终止、父子进程树与 fork()/exec()/wait()、僵尸与孤儿进程。之后讨论上下文切换的开销与线程这一轻量级进程及其四大好处，最后讲进程间通信的共享内存与消息传递两种模型、生产者—消费者问题与竞态条件，以及管道、套接字和远程过程调用。",
        "en": "This chapter starts from the idea that a program is a passive entity while a process is a program in execution, and explains the process states (new, ready, running, waiting and terminated, plus suspend ready and suspend wait) and the parts of a process in memory (text, data, heap and stack). It then describes what the process control block records, how processes are created and terminated, the tree of parent and child processes with fork(), exec() and wait(), and zombie and orphan processes. Next comes the overhead of a context switch and threads as lightweight processes with their four benefits, and finally interprocess communication through shared memory and message passing, the producer-consumer problem and race conditions, and pipes, sockets and remote procedure calls.",
        "ms": "Bab ini bermula dengan idea bahawa program ialah entiti pasif manakala proses ialah program yang sedang dilaksanakan, dan menerangkan keadaan proses (baharu, sedia, berjalan, menunggu dan tamat, serta sedia tergantung dan menunggu tergantung) dan bahagian proses dalam ingatan (teks, data, timbunan dan tindanan). Seterusnya diterangkan apa yang direkodkan oleh blok kawalan proses, cara proses dicipta dan ditamatkan, pokok proses induk dan anak dengan fork(), exec() dan wait(), serta proses zombie dan yatim. Selepas itu dibincangkan overhed pertukaran konteks dan benang sebagai proses ringan dengan empat faedahnya, dan akhir sekali komunikasi antara proses melalui ingatan dikongsi dan penghantaran mesej, masalah pengeluar-pengguna serta keadaan perlumbaan, dan paip, soket serta panggilan prosedur jauh."
      },
      "points": [
        {
          "zh": "程序是被动实体，存放在磁盘上（可执行文件）；进程是执行中的程序，是系统中的工作单位，属于主动实体。当可执行文件被装入内存时程序就变成进程，同一个程序可以由多个用户运行而成为多个不同的进程。",
          "en": "A program is a passive entity stored on disk as an executable file, whereas a process is a program in execution and is the unit of work within the system, so it is an active entity. A program becomes a process when its executable file is loaded into memory, and one program can correspond to several processes, for example when multiple users execute the same program.",
          "ms": "Program ialah entiti pasif yang disimpan pada cakera sebagai fail boleh laksana, manakala proses ialah program yang sedang dilaksanakan dan merupakan unit kerja dalam sistem, jadi ia entiti aktif. Program menjadi proses apabila fail boleh laksananya dimuatkan ke dalam ingatan, dan satu program boleh menjadi beberapa proses, contohnya apabila beberapa pengguna melaksanakan program yang sama."
        },
        {
          "zh": "进程在执行过程中改变状态：新建（进程正在被创建）、就绪（已装入主存、等待分配处理器）、运行（指令正在被执行）、等待/阻塞（等待某事件，如 I/O 完成或收到信号）、终止（执行完毕）；此外还有挂起就绪与挂起等待，指进程被调度程序换出主存放到外部存储。系统用就绪队列保存所有已在主存、准备执行的进程，用等待队列保存等待某事件（如 I/O）的进程；进程调度程序从可用进程中挑选下一个在 CPU 核上执行的进程，目标是最大化 CPU 使用率并快速切换进程。",
          "en": "A process changes state as it executes: new (the process is being created), ready (loaded into main memory and waiting to be assigned to a processor), running (instructions are being executed), waiting or blocked (waiting for an event such as I/O completion or a signal), and terminated (execution has finished); there are also suspend ready and suspend wait, in which the scheduler has swapped the process out of main memory onto external storage. The system keeps a ready queue holding all processes that reside in main memory and are ready to execute, and wait queues holding processes waiting for an event such as I/O; the process scheduler selects among the available processes the next one to execute on a CPU core, with the goal of maximising CPU use and switching processes onto the core quickly.",
          "ms": "Proses menukar keadaan semasa dilaksanakan: baharu (proses sedang dicipta), sedia (dimuatkan ke ingatan utama dan menunggu untuk diberi pemproses), berjalan (arahan sedang dilaksanakan), menunggu atau tersekat (menunggu peristiwa seperti I/O selesai atau isyarat), dan tamat (pelaksanaan telah selesai); terdapat juga sedia tergantung dan menunggu tergantung, iaitu penjadual telah menukar proses keluar daripada ingatan utama ke storan luar. Sistem menyimpan baris gilir sedia yang mengandungi semua proses yang berada dalam ingatan utama dan sedia untuk dilaksanakan, serta baris gilir menunggu yang mengandungi proses yang menunggu sesuatu peristiwa seperti I/O; penjadual proses memilih antara proses yang tersedia untuk dilaksanakan seterusnya pada teras CPU, dengan matlamat memaksimumkan penggunaan CPU dan menukar proses ke teras dengan cepat."
        },
        {
          "zh": "一个进程由多个部分组成：程序代码（正文段）、当前活动（程序计数器和处理器寄存器）、栈（临时数据、函数参数、返回地址、局部变量）、数据段（全局变量）以及堆（运行时动态分配的内存）。",
          "en": "A process consists of several parts: the program code, also called the text section; the current activity including the program counter and processor registers; the stack containing temporary data such as function parameters, return addresses and local variables; the data section containing global variables; and the heap containing memory allocated dynamically during run time.",
          "ms": "Sesuatu proses terdiri daripada beberapa bahagian: kod program yang juga dipanggil bahagian teks; aktiviti semasa termasuk pembilang program dan daftar pemproses; tindanan yang mengandungi data sementara seperti parameter fungsi, alamat pulangan dan pemboleh ubah setempat; bahagian data yang mengandungi pemboleh ubah global; dan timbunan yang mengandungi ingatan yang diperuntukkan secara dinamik semasa masa larian."
        },
        {
          "zh": "每个进程在操作系统中的信息保存在进程控制块 PCB（又称任务控制块）中，内容包括进程状态、程序计数器、CPU 寄存器、CPU 调度信息（优先级、队列指针）、内存管理信息、记账信息（已用 CPU 时间、时间限制）和 I/O 状态信息（分配的设备、打开的文件表）；Linux 用 C 结构 task_struct 表示进程，其中的 pid、state、parent、files、mm 分别对应这些信息。",
          "en": "The information associated with each process is kept in a process control block (PCB), also called a task control block, and includes the process state, program counter, CPU registers, CPU-scheduling information such as priority and queue pointers, memory-management information, accounting information such as CPU used and time limits, and I/O status information such as allocated devices and the list of open files; Linux represents a process with the C structure task_struct, whose pid, state, parent, files and mm fields correspond to these items.",
          "ms": "Maklumat yang berkaitan dengan setiap proses disimpan dalam blok kawalan proses (PCB), yang juga dipanggil blok kawalan tugas, dan merangkumi keadaan proses, pembilang program, daftar CPU, maklumat penjadualan CPU seperti keutamaan dan penunjuk baris gilir, maklumat pengurusan ingatan, maklumat perakaunan seperti penggunaan CPU dan had masa, serta maklumat status I/O seperti peranti yang diperuntukkan dan senarai fail terbuka; Linux mewakili proses dengan struktur C task_struct, yang medan pid, state, parent, files dan mm sepadan dengan perkara-perkara ini."
        },
        {
          "zh": "进程创建时父进程创建子进程，子进程又可创建更多进程，形成进程树，进程用进程标识符 pid 来识别和管理；资源可以父子的全部共享、子进程共享父进程资源的子集、或完全不共享，执行上可以并发执行或父进程等待子进程结束，地址空间可以是父进程的副本或装入新程序。",
          "en": "When a process is created, a parent process creates children processes which in turn create other processes, forming a tree of processes, and each process is identified and managed by a process identifier (pid); resources may be shared fully between parent and child, shared as a subset of the parent's resources, or not shared at all, execution may be concurrent or the parent may wait until the children terminate, and the address space may be a duplicate of the parent or have a new program loaded into it.",
          "ms": "Apabila sesuatu proses dicipta, proses induk mencipta proses anak yang seterusnya mencipta proses lain sehingga membentuk pokok proses, dan setiap proses dikenal pasti serta diurus melalui pengecam proses (pid); sumber boleh dikongsi sepenuhnya antara induk dan anak, dikongsi sebagai subset sumber induk, atau tidak dikongsi langsung, pelaksanaan boleh serentak atau induk menunggu anak tamat, dan ruang alamat boleh menjadi pendua induk atau dimuatkan dengan program baharu."
        },
        {
          "zh": "UNIX 用 fork() 创建新进程、用 exec() 在 fork() 之后用新程序替换进程的内存空间、父进程用 wait() 等待子进程结束并取得状态信息；进程执行完最后一条语句后用 exit() 请求操作系统删除自己，资源被回收。父进程可用 abort() 终止子进程（子进程超出分配的资源、任务不再需要、或父进程即将退出）；若子进程结束而父进程未 wait()，它就是僵尸进程，若父进程先终止而没有 wait()，子进程就是孤儿进程；有些系统采用级联终止。",
          "en": "In UNIX, fork() creates a new process, exec() is used after fork() to replace the process memory space with a new program, and the parent uses wait() to wait for the child to terminate and obtain status information; a process that executes its last statement asks the OS to delete it with exit(), and its resources are deallocated. A parent may terminate a child with abort(), for example when the child has exceeded its allocated resources, the task is no longer required, or the parent is exiting, and if a child finishes without the parent calling wait() it becomes a zombie, while a child whose parent terminated without calling wait() is an orphan; some systems use cascading termination.",
          "ms": "Dalam UNIX, fork() mencipta proses baharu, exec() digunakan selepas fork() untuk menggantikan ruang ingatan proses dengan program baharu, dan induk menggunakan wait() untuk menunggu anak tamat dan memperoleh maklumat status; proses yang melaksanakan pernyataan terakhirnya meminta sistem pengendalian memadamkannya dengan exit(), dan sumbernya dilepaskan. Induk boleh menamatkan anak dengan abort(), contohnya apabila anak melebihi sumber yang diperuntukkan, tugasan tidak lagi diperlukan, atau induk akan keluar, dan jika anak tamat tanpa induk memanggil wait() ia menjadi zombie, manakala anak yang induknya tamat tanpa memanggil wait() ialah yatim; sesetengah sistem menggunakan penamatan melata."
        },
        {
          "zh": "上下文切换发生在 CPU 从一个进程切换到另一个进程时：系统必须保存旧进程的状态并装入新进程已保存的状态，这些状态表示在 PCB 中；切换时间是纯粹的开销，切换期间系统不做有用工作，操作系统和 PCB 越复杂切换越久，时间长短还取决于硬件支持（例如某些硬件为每个 CPU 提供多组寄存器，可一次装入多个上下文）。",
          "en": "A context switch occurs when the CPU switches from one process to another: the system must save the state of the old process and load the saved state of the new one, and this context is represented in the PCB; context-switch time is pure overhead because the system does no useful work while switching, the more complex the OS and the PCB the longer the switch, and the time also depends on hardware support, since some hardware provides multiple sets of registers per CPU so that multiple contexts can be loaded at once.",
          "ms": "Pertukaran konteks berlaku apabila CPU bertukar daripada satu proses kepada proses lain: sistem mesti menyimpan keadaan proses lama dan memuatkan keadaan proses baharu yang telah disimpan, dan konteks ini diwakili dalam PCB; masa pertukaran konteks ialah overhed semata-mata kerana sistem tidak melakukan kerja berguna semasa bertukar, semakin kompleks sistem pengendalian dan PCB semakin lama pertukaran, dan masa itu juga bergantung pada sokongan perkakasan kerana sesetengah perkakasan menyediakan beberapa set daftar bagi setiap CPU supaya beberapa konteks boleh dimuatkan sekali gus."
        },
        {
          "zh": "线程是 CPU 利用的基本单位，是轻量级进程，包含线程 ID、程序计数器、寄存器组和栈；同一进程内的线程共享该进程的资源（代码、数据、打开的文件）但独立执行，因此 PCB 中需要为每个线程保存各自的程序计数器和线程信息。多线程编程有四大好处：响应性（交互式程序即使某部分被阻塞或做长时间操作仍能继续运行）、资源共享（线程默认共享所属进程的内存和资源，可在同一地址空间内有多个活动）、经济性（创建和切换线程比进程更省资源）、可伸缩性（在多处理器结构上线程可在不同核上并行运行，而单线程进程只能用到一个处理器）。以 Web 服务器为例，多线程服务器创建一个线程监听请求、收到请求再创建线程处理并继续监听，比每次都创建进程更高效。",
          "en": "A thread is the basic unit of CPU utilisation and is a lightweight process that includes a thread ID, a program counter, a register set and a stack; threads within the same process share the resources of that process, such as code, data and open files, but execute independently, so storage for thread details and multiple program counters must be provided in the PCB. Multithreaded programming brings four major benefits: responsiveness, since an interactive application can keep running even if part of it is blocked or performing a lengthy operation; resource sharing, because threads share the memory and resources of their process by default, allowing several threads of activity in one address space; economy, because creating and context-switching threads costs less than processes; and scalability, because on a multiprocessor architecture threads can run in parallel on different cores whereas a single-threaded process can use only one processor. In a web server, for example, a multithreaded server creates a thread that listens for requests and creates a new thread to service each request while it resumes listening, which is more efficient than creating a process each time.",
          "ms": "Benang ialah unit asas penggunaan CPU dan merupakan proses ringan yang merangkumi ID benang, pembilang program, set daftar dan tindanan; benang dalam proses yang sama berkongsi sumber proses tersebut seperti kod, data dan fail terbuka tetapi melaksanakan secara bebas, jadi storan untuk butiran benang dan beberapa pembilang program perlu disediakan dalam PCB. Pengaturcaraan berbilang benang memberikan empat faedah utama: responsif, kerana aplikasi interaktif boleh terus berjalan walaupun sebahagiannya tersekat atau melakukan operasi panjang; perkongsian sumber, kerana benang berkongsi ingatan dan sumber prosesnya secara lalai sehingga beberapa aktiviti boleh berjalan dalam satu ruang alamat; ekonomi, kerana mencipta dan menukar konteks benang lebih murah daripada proses; dan kebolehskalaan, kerana pada seni bina berbilang pemproses benang boleh berjalan selari pada teras berbeza manakala proses satu benang hanya boleh menggunakan satu pemproses. Dalam pelayan web misalnya, pelayan berbilang benang mencipta satu benang untuk mendengar permintaan dan mencipta benang baharu bagi setiap permintaan sambil menyambung pendengaran, lebih cekap daripada mencipta proses setiap kali."
        },
        {
          "zh": "进程之间可以是独立的或协作的，协作进程需要进程间通信 IPC，原因是信息共享、加快计算、模块化和方便；IPC 有两种模型：共享内存（通信由用户进程控制，操作系统只提供同步机制）与消息传递（进程通过 send/receive 交换消息，无需共享变量）。生产者—消费者问题是有界缓冲区的经典范例：缓冲区满时生产者等待、空时消费者等待。共享内存方案中若用计数器统计缓冲区满的个数会出现竞态条件：counter++ 和 counter-- 在机器级由多条指令实现（取数、加/减、存回），若两个进程交错执行，如初值 5 时最终可能变成 4 或 6 而不是 5，说明必须对共享数据做同步。",
          "en": "Processes within a system may be independent or cooperating, and cooperating processes need interprocess communication (IPC) for information sharing, computation speedup, modularity and convenience; there are two IPC models, shared memory, where communication is under the control of the user processes and the OS only provides synchronisation mechanisms, and message passing, where processes exchange messages via send and receive without shared variables. The producer-consumer problem with a bounded buffer is the classic paradigm: the producer must wait when all buffers are full and the consumer waits when there is no buffer to consume. In the shared-memory solution, using a counter to track how many buffers are full creates a race condition: counter++ and counter-- are implemented at machine level by several instructions (load, increment or decrement, store), and if two processes interleave, an initial value of 5 can end up as 4 or 6 instead of 5, showing that concurrent access to shared data must be synchronised.",
          "ms": "Proses dalam sesuatu sistem boleh bersifat bebas atau bekerjasama, dan proses yang bekerjasama memerlukan komunikasi antara proses (IPC) atas sebab perkongsian maklumat, mempercepat pengiraan, modulariti dan kemudahan; terdapat dua model IPC, iaitu ingatan dikongsi, yang komunikasinya dikawal oleh proses pengguna dan sistem pengendalian hanya menyediakan mekanisme penyegerakan, dan penghantaran mesej, yang prosesnya bertukar mesej melalui send dan receive tanpa pemboleh ubah dikongsi. Masalah pengeluar-pengguna dengan penimbal terbatas ialah paradigma klasik: pengeluar mesti menunggu apabila semua penimbal penuh dan pengguna menunggu apabila tiada penimbal untuk digunakan. Dalam penyelesaian ingatan dikongsi, penggunaan pembilang untuk menjejaki bilangan penimbal penuh menimbulkan keadaan perlumbaan: counter++ dan counter-- dilaksanakan pada peringkat mesin oleh beberapa arahan (muat, tambah atau tolak, simpan), dan jika dua proses berselang-seli, nilai awal 5 boleh menjadi 4 atau 6 dan bukan 5, membuktikan bahawa akses serentak kepada data dikongsi mesti disegerakkan."
        },
        {
          "zh": "消息传递系统提供 send(message) 与 receive(message) 两种操作：通信链路可以是直接的（必须显式指名对方，一条链路恰好对应一对进程）或间接的（通过邮箱/端口，只有共享同一邮箱的进程才能通信，一条链路可关联多个进程）；同步方式分为阻塞（同步，阻塞发送要等消息被接收，阻塞接收要等消息到达，两者都阻塞称为会合）与非阻塞（异步）；链路缓冲有零容量、有界容量和无界容量三种。此外还有管道（普通管道单向、需父子关系；命名管道双向、无需父子关系）、套接字（IP 地址加端口，如 161.25.19.8:1625，1024 以下为知名端口，127.0.0.1 是回送地址）以及远程过程调用 RPC（用客户/服务器桩进行参数打包与解包，处理不同结构的数据表示）。",
          "en": "A message-passing system provides two operations, send(message) and receive(message): the communication link may be direct, where processes must name each other explicitly and a link is associated with exactly one pair of processes, or indirect, where messages go through mailboxes or ports and processes can communicate only if they share a mailbox, so one link may be associated with many processes; synchronisation may be blocking, which is synchronous, where a blocking send waits until the message is received and a blocking receive waits until a message is available, with blocking on both sides called a rendezvous, or non-blocking, which is asynchronous; buffering may have zero, bounded or unbounded capacity. Related mechanisms are pipes, where ordinary pipes are unidirectional and require a parent-child relationship while named pipes are bidirectional and need no such relationship, sockets, which combine an IP address and a port such as 161.25.19.8:1625 with ports below 1024 reserved as well-known ports and 127.0.0.1 as the loopback address, and remote procedure calls, in which client and server stubs marshal and unmarshal parameters and data representation is handled for different architectures.",
          "ms": "Sistem penghantaran mesej menyediakan dua operasi, iaitu send(message) dan receive(message): pautan komunikasi boleh bersifat langsung, iaitu proses mesti menamakan satu sama lain secara nyata dan satu pautan dikaitkan dengan tepat satu pasangan proses, atau tak langsung, iaitu mesej dihantar melalui peti mel atau port dan proses hanya boleh berkomunikasi jika berkongsi peti mel yang sama, jadi satu pautan boleh dikaitkan dengan banyak proses; penyegerakan boleh bersifat menyekat, iaitu segerak, di mana penghantaran menyekat menunggu sehingga mesej diterima dan penerimaan menyekat menunggu sehingga mesej tersedia, dan sekiranya kedua-duanya menyekat ia dipanggil pertemuan, atau tidak menyekat, iaitu tak segerak; penimbalan pula boleh berkapasiti sifar, terbatas atau tidak terbatas. Mekanisme berkaitan termasuk paip, iaitu paip biasa bersifat sehala dan memerlukan hubungan induk-anak manakala paip bernama bersifat dua hala dan tidak memerlukannya, soket, yang menggabungkan alamat IP dengan port seperti 161.25.19.8:1625 dengan port di bawah 1024 dikhaskan sebagai port terkenal dan 127.0.0.1 sebagai alamat gelung balik, serta panggilan prosedur jauh, iaitu stub klien dan pelayan melakukan pemadanan dan penyahpadanan parameter serta perwakilan data untuk seni bina yang berbeza."
        }
      ],
      "terms": [
        {
          "en": "Process",
          "zh": "进程",
          "ms": "Proses",
          "def": {
            "zh": "执行中的程序，是系统内的工作单位，属于主动实体，需要 CPU、内存、I/O 和文件等资源。",
            "en": "A program in execution; it is the unit of work within the system, an active entity that needs resources such as CPU, memory, I/O and files.",
            "ms": "Program yang sedang dilaksanakan; ia unit kerja dalam sistem, entiti aktif yang memerlukan sumber seperti CPU, ingatan, I/O dan fail."
          }
        },
        {
          "en": "Process Control Block (PCB)",
          "zh": "进程控制块",
          "ms": "Blok Kawalan Proses (PCB)",
          "def": {
            "zh": "操作系统保存单个进程全部信息的结构，包含进程状态、程序计数器、寄存器、调度信息、内存信息、记账与 I/O 状态。",
            "en": "The OS structure holding all information about a single process, including its state, program counter, registers, scheduling information, memory information, accounting and I/O status.",
            "ms": "Struktur sistem pengendalian yang menyimpan semua maklumat satu proses, termasuk keadaan, pembilang program, daftar, maklumat penjadualan, maklumat ingatan, perakaunan dan status I/O."
          }
        },
        {
          "en": "Process State",
          "zh": "进程状态",
          "ms": "Keadaan Proses",
          "def": {
            "zh": "进程当前活动所决定的状态：新建、就绪、运行、等待（阻塞）和终止，另有挂起就绪与挂起等待。",
            "en": "The state defined by the current activity of a process: new, ready, running, waiting or blocked, and terminated, plus suspend ready and suspend wait.",
            "ms": "Keadaan yang ditentukan oleh aktiviti semasa proses: baharu, sedia, berjalan, menunggu atau tersekat, dan tamat, serta sedia tergantung dan menunggu tergantung."
          }
        },
        {
          "en": "Context Switch",
          "zh": "上下文切换",
          "ms": "Pertukaran Konteks",
          "def": {
            "zh": "CPU 从一个进程切换到另一个进程时保存旧进程状态并装入新进程状态的过程，其时间是纯粹的开销。",
            "en": "The act of saving the state of the old process and loading the saved state of the new one when the CPU switches processes; its time is pure overhead.",
            "ms": "Tindakan menyimpan keadaan proses lama dan memuatkan keadaan proses baharu yang disimpan apabila CPU bertukar proses; masanya ialah overhed semata-mata."
          }
        },
        {
          "en": "fork() / exec()",
          "zh": "fork() / exec()",
          "ms": "fork() / exec()",
          "def": {
            "zh": "UNIX 中创建新进程的系统调用；exec() 在 fork() 之后用新程序替换该进程的内存空间。",
            "en": "The UNIX system call that creates a new process; exec() is used after fork() to replace the process memory space with a new program.",
            "ms": "Panggilan sistem UNIX yang mencipta proses baharu; exec() digunakan selepas fork() untuk menggantikan ruang ingatan proses dengan program baharu."
          }
        },
        {
          "en": "Zombie / Orphan Process",
          "zh": "僵尸进程 / 孤儿进程",
          "ms": "Proses Zombie / Yatim",
          "def": {
            "zh": "子进程已终止而父进程未调用 wait() 时是僵尸进程；父进程先终止而没有 wait() 时子进程成为孤儿进程。",
            "en": "A child that has terminated while its parent has not invoked wait() is a zombie; a child whose parent terminated without calling wait() is an orphan.",
            "ms": "Anak yang telah tamat sedangkan induknya belum memanggil wait() ialah zombie; anak yang induknya tamat tanpa memanggil wait() ialah yatim."
          }
        },
        {
          "en": "Thread",
          "zh": "线程",
          "ms": "Benang",
          "def": {
            "zh": "CPU 利用的基本单位、轻量级进程，含线程 ID、程序计数器、寄存器组和栈，同进程的线程共享资源。",
            "en": "The basic unit of CPU utilisation and a lightweight process, comprising a thread ID, program counter, register set and stack, with threads of a process sharing resources.",
            "ms": "Unit asas penggunaan CPU dan proses ringan, yang terdiri daripada ID benang, pembilang program, set daftar dan tindanan, dengan benang dalam satu proses berkongsi sumber."
          }
        },
        {
          "en": "Multithreading",
          "zh": "多线程",
          "ms": "Berbilang Benang",
          "def": {
            "zh": "在一个进程内使用多个线程的技术，带来响应性、资源共享、经济性和可伸缩性四大好处。",
            "en": "The technique of using several threads within one process, giving the four benefits of responsiveness, resource sharing, economy and scalability.",
            "ms": "Teknik menggunakan beberapa benang dalam satu proses, memberikan empat faedah iaitu responsif, perkongsian sumber, ekonomi dan kebolehskalaan."
          }
        },
        {
          "en": "Interprocess Communication (IPC)",
          "zh": "进程间通信",
          "ms": "Komunikasi Antara Proses (IPC)",
          "def": {
            "zh": "协作进程之间交换数据与信息的机制，主要有共享内存和消息传递两种模型。",
            "en": "The mechanism by which cooperating processes exchange data and information; its two main models are shared memory and message passing.",
            "ms": "Mekanisme yang membolehkan proses bekerjasama bertukar data dan maklumat; dua model utamanya ialah ingatan dikongsi dan penghantaran mesej."
          }
        },
        {
          "en": "Shared Memory",
          "zh": "共享内存",
          "ms": "Ingatan Dikongsi",
          "def": {
            "zh": "在希望通信的进程之间共享的一块内存区域，通信由用户进程控制，操作系统只负责提供同步机制。",
            "en": "An area of memory shared among processes that wish to communicate; the communication is controlled by the user processes and the OS only provides synchronisation mechanisms.",
            "ms": "Kawasan ingatan yang dikongsi antara proses yang ingin berkomunikasi; komunikasi dikawal oleh proses pengguna dan sistem pengendalian hanya menyediakan mekanisme penyegerakan."
          }
        },
        {
          "en": "Message Passing",
          "zh": "消息传递",
          "ms": "Penghantaran Mesej",
          "def": {
            "zh": "进程不共享变量、而是用 send/receive 交换消息的通信方式，链路可间接通过邮箱或端口，可有缓冲。",
            "en": "A communication scheme in which processes exchange messages with send and receive instead of shared variables, possibly through mailboxes or ports and with buffering.",
            "ms": "Skim komunikasi yang prosesnya bertukar mesej melalui send dan receive tanpa pemboleh ubah dikongsi, mungkin melalui peti mel atau port dan dengan penimbalan."
          }
        },
        {
          "en": "Race Condition",
          "zh": "竞态条件",
          "ms": "Keadaan Perlumbaan",
          "def": {
            "zh": "多个进程并发访问并操作同一数据、结果取决于访问发生的顺序时出现的情况，例如 counter++ 与 counter-- 交错执行。",
            "en": "A situation in which several processes access and manipulate the same data concurrently and the outcome depends on the order of access, as when counter++ and counter-- interleave.",
            "ms": "Keadaan apabila beberapa proses mengakses dan memanipulasi data yang sama secara serentak sehingga hasilnya bergantung pada urutan akses, seperti apabila counter++ dan counter-- berselang-seli."
          }
        },
        {
          "en": "Pipe",
          "zh": "管道",
          "ms": "Paip",
          "def": {
            "zh": "允许两个进程通信的通道：普通管道单向且需要父子关系，命名管道双向且不需要父子关系。",
            "en": "A conduit allowing two processes to communicate: ordinary pipes are unidirectional and need a parent-child relationship, while named pipes are bidirectional and need none.",
            "ms": "Saluran yang membolehkan dua proses berkomunikasi: paip biasa bersifat sehala dan memerlukan hubungan induk-anak, manakala paip bernama bersifat dua hala dan tidak memerlukannya."
          }
        },
        {
          "en": "Socket",
          "zh": "套接字",
          "ms": "Soket",
          "def": {
            "zh": "通信的端点，由 IP 地址与端口号拼接而成，如 161.25.19.8:1625；1024 以下的端口是知名端口。",
            "en": "An endpoint for communication formed by concatenating an IP address and a port, such as 161.25.19.8:1625, with ports below 1024 reserved as well-known ports.",
            "ms": "Titik hujung komunikasi yang terbentuk daripada gabungan alamat IP dan port, seperti 161.25.19.8:1625, dengan port di bawah 1024 dikhaskan sebagai port terkenal."
          }
        },
        {
          "en": "Remote Procedure Call (RPC)",
          "zh": "远程过程调用",
          "ms": "Panggilan Prosedur Jauh (RPC)",
          "def": {
            "zh": "把网络系统中进程之间的过程调用抽象出来的机制，客户桩负责定位服务器并打包参数，服务器桩解包并执行过程。",
            "en": "A mechanism that abstracts procedure calls between processes on networked systems; the client stub locates the server and marshals the parameters, and the server stub unpacks them and performs the procedure.",
            "ms": "Mekanisme yang mengabstrakkan panggilan prosedur antara proses dalam sistem berangkaian; stub klien mencari pelayan dan memadankan parameter, manakala stub pelayan menyahpadankan dan melaksanakan prosedur itu."
          }
        }
      ],
      "diagrams": [
        {
          "type": "cycle",
          "title": {
            "zh": "进程状态转换",
            "en": "Process State Transitions",
            "ms": "Peralihan Keadaan Proses"
          },
          "caption": {
            "zh": "新建进入就绪；被调度后运行；等待事件转入等待；事件完成回到就绪；运行结束进入终止。",
            "en": "New goes to ready; the scheduler admits it to running; waiting for an event moves it to waiting; the event moves it back to ready; and completion leads to terminated.",
            "ms": "Baharu masuk ke sedia; penjadual menerimanya ke berjalan; menunggu peristiwa memindahkannya ke menunggu; peristiwa memindahkannya kembali ke sedia; dan selesai membawa kepada tamat."
          },
          "steps": [
            {
              "label": {
                "zh": "新建",
                "en": "New",
                "ms": "Baharu"
              }
            },
            {
              "label": {
                "zh": "就绪",
                "en": "Ready",
                "ms": "Sedia"
              }
            },
            {
              "label": {
                "zh": "运行",
                "en": "Running",
                "ms": "Berjalan"
              }
            },
            {
              "label": {
                "zh": "等待（阻塞）",
                "en": "Waiting (Blocked)",
                "ms": "Menunggu (Tersekat)"
              }
            },
            {
              "label": {
                "zh": "终止",
                "en": "Terminated",
                "ms": "Tamat"
              }
            }
          ]
        },
        {
          "type": "compare",
          "title": {
            "zh": "进程与线程的对比",
            "en": "Process versus Thread",
            "ms": "Perbandingan Proses dengan Benang"
          },
          "cols": [
            {
              "head": {
                "zh": "进程",
                "en": "Process",
                "ms": "Proses"
              },
              "items": [
                {
                  "label": {
                    "zh": "程序执行的重型单位",
                    "en": "Heavyweight unit of execution",
                    "ms": "Unit pelaksanaan berat"
                  }
                },
                {
                  "label": {
                    "zh": "有独立的地址空间",
                    "en": "Has its own address space",
                    "ms": "Mempunyai ruang alamat sendiri"
                  }
                },
                {
                  "label": {
                    "zh": "创建与切换开销大",
                    "en": "Expensive to create and switch",
                    "ms": "Mahal untuk dicipta dan ditukar"
                  }
                },
                {
                  "label": {
                    "zh": "进程间通信需要 IPC 机制",
                    "en": "Needs IPC to communicate",
                    "ms": "Memerlukan IPC untuk berkomunikasi"
                  }
                }
              ]
            },
            {
              "head": {
                "zh": "线程",
                "en": "Thread",
                "ms": "Benang"
              },
              "items": [
                {
                  "label": {
                    "zh": "轻量级进程，CPU 利用的基本单位",
                    "en": "Lightweight process, basic unit of CPU utilisation",
                    "ms": "Proses ringan, unit asas penggunaan CPU"
                  }
                },
                {
                  "label": {
                    "zh": "共享所属进程的地址空间",
                    "en": "Shares the address space of its process",
                    "ms": "Berkongsi ruang alamat prosesnya"
                  }
                },
                {
                  "label": {
                    "zh": "创建与切换更经济",
                    "en": "Cheaper to create and switch",
                    "ms": "Lebih murah untuk dicipta dan ditukar"
                  }
                },
                {
                  "label": {
                    "zh": "各自有线程 ID、程序计数器、寄存器与栈",
                    "en": "Each has a thread ID, program counter, registers and stack",
                    "ms": "Setiap satu mempunyai ID benang, pembilang program, daftar dan tindanan"
                  }
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必考：画出并解释进程状态转换图（新建→就绪→运行→等待→就绪→终止），并说明每一步由什么事件触发，特别是“运行→等待”是进程自己请求 I/O，“等待→就绪”是 I/O 完成。",
          "en": "A standard question asks you to draw and explain the process state diagram (new to ready to running to waiting back to ready and finally terminated) and to state what event triggers each transition, especially that running to waiting happens when the process itself requests I/O and waiting to ready happens when the I/O completes.",
          "ms": "Soalan lazim meminta anda melukis dan menerangkan rajah keadaan proses (baharu ke sedia ke berjalan ke menunggu kembali ke sedia dan akhirnya tamat) serta menyatakan peristiwa yang mencetuskan setiap peralihan, terutamanya peralihan berjalan ke menunggu berlaku apabila proses sendiri meminta I/O dan menunggu ke sedia berlaku apabila I/O selesai."
        },
        {
          "zh": "易错点：僵尸进程与孤儿进程写反。记住“僵尸”是子进程已死但父进程还没 wait()（尸体没人收），“孤儿”是父进程先死而子进程还活着（孩子没爹娘）。",
          "en": "A frequent mistake is swapping zombie and orphan processes. Remember that a zombie is a child that has already terminated while its parent has not called wait(), whereas an orphan is a child that is still alive after its parent has terminated.",
          "ms": "Kesilapan biasa ialah menukar proses zombie dengan yatim. Ingat bahawa zombie ialah anak yang telah tamat sedangkan induknya belum memanggil wait(), manakala yatim ialah anak yang masih hidup selepas induknya tamat."
        },
        {
          "zh": "经常考上下文切换的开销：切换期间系统不做有用工作，所以它是纯粹的开销；PCB 越大、操作系统越复杂，切换时间越长，并且需要硬件支持（如多组寄存器）。",
          "en": "The cost of a context switch is frequently examined: the system does no useful work while switching, so the time is pure overhead; the larger the PCB and the more complex the OS, the longer the switch, and hardware support such as multiple register sets helps.",
          "ms": "Kos pertukaran konteks sering diuji: sistem tidak melakukan kerja berguna semasa bertukar, jadi masanya overhed semata-mata; semakin besar PCB dan semakin kompleks sistem pengendalian, semakin lama pertukaran, dan sokongan perkakasan seperti berbilang set daftar membantu."
        },
        {
          "zh": "会算竞态条件：初值 counter = 5 时，生产者执行 counter++ 与消费者执行 counter-- 若按 S0–S5 交错，最终 counter 会变成 4 或 6 而不是 5；答题时要写出三条机器指令（取、加/减、存回）来说明为什么。",
          "en": "You may have to compute a race condition: with counter = 5 initially, if the producer's counter++ and the consumer's counter-- interleave as in steps S0 to S5 the final value becomes 4 or 6 instead of 5; in your answer write the three machine instructions (load, increment or decrement, store) that explain why.",
          "ms": "Anda mungkin perlu mengira keadaan perlumbaan: dengan counter = 5 pada mulanya, jika counter++ pengeluar dan counter-- pengguna berselang-seli seperti langkah S0 hingga S5 nilai akhir menjadi 4 atau 6 dan bukan 5; dalam jawapan tulis tiga arahan mesin (muat, tambah atau tolak, simpan) yang menjelaskan sebabnya."
        }
      ],
      "mnemonic": {
        "zh": "五态一转：新建—就绪—运行—等待—终止；线程四好：响应、共享、经济、可伸缩。",
        "en": "Five states, one cycle: new, ready, running, waiting, terminated. Four thread benefits: responsiveness, sharing, economy, scalability.",
        "ms": "Lima keadaan, satu kitaran: baharu, sedia, berjalan, menunggu, tamat. Empat faedah benang: responsif, perkongsian, ekonomi, kebolehskalaan."
      }
    },
    {
      "id": "os-04",
      "num": 4,
      "title": {
        "zh": "进程管理：CPU 调度",
        "en": "Process Management: CPU Scheduling",
        "ms": "Pengurusan Proses: Penjadualan CPU"
      },
      "file": "os/CHAPTER 4 DDWD 2663.pptx",
      "pages": 81,
      "summary": {
        "zh": "本章讨论多道程序设计下 CPU 如何在多个进程之间分配。先建立基本概念：进程执行由 CPU 执行与 I/O 等待交替组成的 CPU–I/O 突发周期构成，调度发生在进程终止、运行转等待、运行转就绪、等待转就绪四种时机，由此区分抢占式与非抢占式调度。接着给出评价调度算法的五个准则（CPU 利用率、吞吐量、周转时间、等待时间、响应时间），并逐一分析 FCFS、SJF/SRTF、轮转、优先级、多级队列与多级反馈队列等算法及其优缺点（护航效应、饥饿与老化）。最后讨论线程调度（PCS/SCS）、多处理器与多核调度（负载均衡、处理器亲和性、NUMA）、实时调度（速率单调、最早截止期优先）以及 Linux、Windows、Solaris 的实际调度策略和算法评估方法。",
        "en": "This chapter examines how the CPU is shared among processes under multiprogramming. It begins with the basic concepts: process execution consists of a cycle of CPU execution and I/O wait known as the CPU-I/O burst cycle, and scheduling decisions are made when a process terminates, switches from running to waiting, from running to ready, or from waiting to ready, which distinguishes preemptive from nonpreemptive scheduling. It then presents the five scheduling criteria (CPU utilisation, throughput, turnaround time, waiting time and response time) and analyses FCFS, SJF/SRTF, round robin, priority, multilevel queue and multilevel feedback queue scheduling together with their drawbacks such as the convoy effect, starvation and aging. The chapter closes with thread scheduling (PCS and SCS), multiprocessor and multicore scheduling including load balancing, processor affinity and NUMA, real-time scheduling such as rate monotonic and earliest deadline first, the schedulers used by Linux, Windows and Solaris, and methods for evaluating scheduling algorithms.",
        "ms": "Bab ini mengkaji cara CPU dikongsi antara proses di bawah pengaturcaraan berbilang. Ia bermula dengan konsep asas: pelaksanaan proses terdiri daripada kitaran pelaksanaan CPU dan penantian I/O yang dikenali sebagai kitaran letusan CPU-I/O, dan keputusan penjadualan dibuat apabila proses tamat, bertukar daripada berjalan ke menunggu, daripada berjalan ke sedia, atau daripada menunggu ke sedia, yang membezakan penjadualan preemptif daripada bukan preemptif. Seterusnya dibentangkan lima kriteria penjadualan (penggunaan CPU, daya pemprosesan, masa pusingan, masa menunggu dan masa tindak balas) dan dianalisis algoritma FCFS, SJF/SRTF, putaran berjadual, keutamaan, baris gilir berbilang peringkat serta baris gilir maklum balas berbilang peringkat berserta kelemahannya seperti kesan konvoi, kebuluran dan penuaan. Bab ini diakhiri dengan penjadualan benang (PCS dan SCS), penjadualan berbilang pemproses dan berbilang teras termasuk pengimbangan beban, afiniti pemproses dan NUMA, penjadualan masa nyata seperti monoton kadar dan tarikh akhir terawal, penjadual yang digunakan Linux, Windows dan Solaris, serta kaedah menilai algoritma penjadualan."
      },
      "points": [
        {
          "zh": "多道程序设计使 CPU 利用率最大化，因为进程执行由 CPU 执行与 I/O 等待交替组成的 CPU–I/O 突发周期构成；CPU 突发时间的分布很关键，通常大量是短突发、少量是长突发，短突发居多这一点决定了调度算法要照顾交互式进程。",
          "en": "Multiprogramming maximises CPU utilisation because process execution consists of a cycle of CPU execution and I/O wait called the CPU-I/O burst cycle; the distribution of CPU bursts is of main concern, and it typically shows a large number of short bursts and a small number of longer bursts, which is why scheduling algorithms must favour interactive processes.",
          "ms": "Pengaturcaraan berbilang memaksimumkan penggunaan CPU kerana pelaksanaan proses terdiri daripada kitaran pelaksanaan CPU dan penantian I/O yang dipanggil kitaran letusan CPU-I/O; taburan letusan CPU amat penting dan biasanya menunjukkan banyak letusan pendek serta sedikit letusan panjang, sebab itulah algoritma penjadualan mesti mengutamakan proses interaktif."
        },
        {
          "zh": "CPU 调度程序从就绪队列中选出一个进程并分配 CPU 核；调度决策可以在四种时机发生：进程从运行转为等待、从运行转为就绪、从等待转为就绪、以及进程终止。情况 1 和 4 没有选择余地，必须另选一个进程执行；情况 2 和 3 才有选择。若只在情况 1 和 4 调度就是非抢占式（进程一旦获得 CPU 就一直占用直到终止或转入等待），否则是抢占式；现代操作系统（Windows、macOS、Linux、UNIX）几乎都用抢占式，但抢占式在共享数据时可能导致竞态条件。分派程序（dispatcher）把 CPU 的控制权交给调度程序选中的进程，其工作包括切换上下文、切换到用户模式、跳转到用户程序中合适的位置继续执行；分派延迟是分派程序停止一个进程并启动另一个进程所花的时间。",
          "en": "The CPU scheduler selects a process from the ready queue and allocates a CPU core to it, and scheduling decisions may take place in four situations: when a process switches from running to waiting, from running to ready, from waiting to ready, and when it terminates. In situations 1 and 4 there is no choice and another process must be selected, whereas in situations 2 and 3 there is a choice. If scheduling takes place only in situations 1 and 4 the scheme is nonpreemptive, meaning a process keeps the CPU until it releases it by terminating or switching to waiting; otherwise it is preemptive, and virtually all modern operating systems such as Windows, macOS, Linux and UNIX use preemptive scheduling, which can however cause race conditions when data are shared. The dispatcher module gives control of the CPU to the process selected by the CPU scheduler, which involves switching context, switching to user mode and jumping to the proper location in the user program to restart it; dispatch latency is the time it takes for the dispatcher to stop one process and start another running.",
          "ms": "Penjadual CPU memilih proses daripada baris gilir sedia dan memperuntukkan teras CPU kepadanya, dan keputusan penjadualan boleh berlaku dalam empat keadaan: apabila proses bertukar daripada berjalan ke menunggu, daripada berjalan ke sedia, daripada menunggu ke sedia, dan apabila ia tamat. Dalam keadaan 1 dan 4 tiada pilihan dan proses lain mesti dipilih, manakala dalam keadaan 2 dan 3 ada pilihan. Jika penjadualan hanya berlaku dalam keadaan 1 dan 4, skim itu bukan preemptif, iaitu proses mengekalkan CPU sehingga ia melepaskannya dengan tamat atau bertukar ke menunggu; sebaliknya ia preemptif, dan hampir semua sistem pengendalian moden seperti Windows, macOS, Linux dan UNIX menggunakan penjadualan preemptif, yang bagaimanapun boleh menyebabkan keadaan perlumbaan apabila data dikongsi. Modul penyebar memberikan kawalan CPU kepada proses yang dipilih oleh penjadual CPU, yang melibatkan pertukaran konteks, bertukar ke mod pengguna dan melompat ke lokasi yang betul dalam program pengguna untuk menyambung semula; kependaman penyebaran ialah masa yang diambil oleh penyebar untuk memberhentikan satu proses dan memulakan proses lain."
        },
        {
          "zh": "评价调度算法有五个准则：CPU 利用率（让 CPU 尽可能忙）、吞吐量（单位时间内完成执行的进程数）、周转时间（某个进程从提交到完成的总时间）、等待时间（进程在就绪队列中等待的总时间）、响应时间（从提交请求到产生第一个响应的时间）；优化目标是最大化 CPU 利用率和吞吐量，最小化周转时间、等待时间和响应时间。",
          "en": "There are five scheduling criteria: CPU utilisation, keeping the CPU as busy as possible; throughput, the number of processes that complete their execution per time unit; turnaround time, the amount of time to execute a particular process; waiting time, the amount of time a process spends waiting in the ready queue; and response time, the time from when a request was submitted until the first response is produced. The optimisation criteria are to maximise CPU utilisation and throughput and to minimise turnaround time, waiting time and response time.",
          "ms": "Terdapat lima kriteria penjadualan: penggunaan CPU, iaitu memastikan CPU sibuk sepanjang masa; daya pemprosesan, iaitu bilangan proses yang tamat dilaksanakan per unit masa; masa pusingan, iaitu jumlah masa untuk melaksanakan sesuatu proses; masa menunggu, iaitu jumlah masa proses menunggu dalam baris gilir sedia; dan masa tindak balas, iaitu masa dari permintaan dikemukakan sehingga tindak balas pertama dihasilkan. Kriteria pengoptimuman ialah memaksimumkan penggunaan CPU dan daya pemprosesan serta meminimumkan masa pusingan, masa menunggu dan masa tindak balas."
        },
        {
          "zh": "先来先服务 FCFS 按到达顺序分配 CPU。以 P1 突发 24、P2 与 P3 各为 3 为例：若顺序为 P1、P2、P3，等待时间为 0、24、27，平均等待时间 (0+24+27)/3 = 17；若顺序改为 P2、P3、P1，等待时间为 6、0、3，平均只有 3，说明 FCFS 的平均等待时间会因顺序而差很多，并会出现护航效应——短进程排在一个长进程后面的情况。",
          "en": "First-come, first-served (FCFS) allocates the CPU in arrival order. With P1 having a burst of 24 and P2 and P3 bursts of 3, if the order is P1, P2, P3 the waiting times are 0, 24 and 27 giving an average of (0+24+27)/3 = 17, whereas if the order is P2, P3, P1 the waiting times are 6, 0 and 3 giving an average of only 3; this shows that the average waiting time under FCFS depends heavily on the order, and that the convoy effect occurs when short processes queue behind a long one.",
          "ms": "Dahulu datang dahulu dilayan (FCFS) memperuntukkan CPU mengikut urutan ketibaan. Dengan P1 mempunyai letusan 24 dan P2 serta P3 letusan 3, jika urutannya P1, P2, P3 masa menunggunya ialah 0, 24 dan 27 dengan purata (0+24+27)/3 = 17, manakala jika urutannya P2, P3, P1 masa menunggunya ialah 6, 0 dan 3 dengan purata hanya 3; ini menunjukkan purata masa menunggu dalam FCFS sangat bergantung pada urutan, dan kesan konvoi berlaku apabila proses pendek berbaris di belakang proses panjang."
        },
        {
          "zh": "最短作业优先 SJF 把下一个 CPU 突发最短的进程先调度，对给定的一组进程能给出最小的平均等待时间，因此是最优的；其抢占版本称为最短剩余时间优先 SRTF，每当新进程到达就绪队列就重新决策。由于下一个突发的长度无法预知，只能用指数平均来估计（α 通常取 1/2）：α = 0 时完全忽略近期历史，α = 1 时只考虑上一次实际突发，越早的项权重越小。",
          "en": "Shortest-job-first (SJF) associates with each process the length of its next CPU burst and schedules the process with the shortest time; it is optimal because it gives the minimum average waiting time for a given set of processes, and its preemptive version is called shortest-remaining-time-first (SRTF), where the decision is redone whenever a new process arrives in the ready queue. Since the length of the next burst cannot be known, it can only be estimated by exponential averaging with alpha commonly set to one half: when alpha is 0 recent history does not count, when alpha is 1 only the actual last CPU burst counts, and each older term carries less weight.",
          "ms": "Kerja terpendek dahulu (SJF) mengaitkan setiap proses dengan panjang letusan CPU seterusnya dan menjadualkan proses dengan masa terpendek; ia optimum kerana memberikan purata masa menunggu yang minimum bagi satu set proses, dan versi preemptifnya dipanggil masa baki terpendek dahulu (SRTF), iaitu keputusan dibuat semula setiap kali proses baharu tiba dalam baris gilir sedia. Oleh sebab panjang letusan seterusnya tidak dapat diketahui, ia hanya boleh dianggarkan melalui purata eksponen dengan alpha biasanya ditetapkan satu perdua: apabila alpha 0 sejarah terkini tidak dikira, apabila alpha 1 hanya letusan CPU terakhir dikira, dan setiap sebutan yang lebih lama mempunyai pemberat yang lebih kecil."
        },
        {
          "zh": "轮转法 RR 给每个进程一小段 CPU 时间即时间片 q（通常 10–100 毫秒），时间片用完就被抢占并放回就绪队列末尾，定时器每个时间片中断一次；若就绪队列中有 n 个进程，每个进程一次最多获得 q 个时间单位，任何进程等待都不超过 (n-1)q。q 很大时退化为 FCFS，q 很小时切换开销过大，所以 q 必须相对上下文切换时间足够大（上下文切换通常小于 10 微秒）；RR 的周转时间一般比 SJF 差，但响应时间更好，约 80% 的 CPU 突发应短于 q。",
          "en": "Round robin (RR) gives each process a small unit of CPU time called the time quantum q, usually 10 to 100 milliseconds, after which the process is preempted and added to the end of the ready queue, with a timer interrupt every quantum; with n processes in the ready queue and quantum q each process gets 1/n of the CPU in chunks of at most q time units and no process waits more than (n-1)q time units. A large q degenerates to FCFS while a small q makes the overhead too high, so q must be large with respect to context-switch time, which is typically under 10 microseconds; RR usually gives higher average turnaround time than SJF but better response time, and about 80 percent of CPU bursts should be shorter than q.",
          "ms": "Putaran berjadual (RR) memberikan setiap proses satu unit masa CPU yang kecil dipanggil kuantum masa q, biasanya 10 hingga 100 milisaat, selepas itu proses diambil alih dan diletakkan di hujung baris gilir sedia, dengan selangan pemasa pada setiap kuantum; jika terdapat n proses dalam baris gilir sedia dan kuantumnya q, setiap proses mendapat 1/n masa CPU dalam ketulan paling banyak q unit masa dan tiada proses menunggu lebih daripada (n-1)q unit masa. Kuantum q yang besar merosot menjadi FCFS manakala q yang kecil menjadikan overhed terlalu tinggi, jadi q mesti besar berbanding masa pertukaran konteks yang biasanya di bawah 10 mikrosaat; RR biasanya memberikan purata masa pusingan yang lebih tinggi daripada SJF tetapi masa tindak balas yang lebih baik, dan kira-kira 80 peratus letusan CPU sepatutnya lebih pendek daripada q."
        },
        {
          "zh": "优先级调度给每个进程一个优先级整数，CPU 分配给优先级最高的进程（数值越小优先级越高），可以是抢占式或非抢占式；SJF 就是优先级等于预测的下一个 CPU 突发长度倒数的优先级调度。其问题是饥饿——低优先级进程可能永远得不到执行，解决办法是老化，即随时间推移提高进程的优先级。多级队列把就绪队列分成多个队列，每个队列有自己的算法并按优先级调度；多级反馈队列允许进程在队列之间移动，例如 Q0 用 8 毫秒时间片 RR、Q1 用 16 毫秒时间片 RR、Q2 用 FCFS，新进程进入 Q0，8 毫秒内没完成就降入 Q1，再不行就降入 Q2，老化也可以用多级反馈队列实现。",
          "en": "Priority scheduling associates an integer priority with each process and allocates the CPU to the process with the highest priority, where a smaller integer means higher priority; it may be preemptive or nonpreemptive, and SJF is simply priority scheduling in which priority is the inverse of the predicted next CPU burst. Its problem is starvation, since low-priority processes may never execute, and the solution is aging, which increases the priority of a process as time progresses. A multilevel queue partitions the ready queue into several queues, each with its own algorithm and scheduled by priority, while a multilevel feedback queue allows a process to move between queues: for example Q0 uses RR with a quantum of 8 milliseconds, Q1 uses RR with 16 milliseconds and Q2 uses FCFS, a new process enters Q0, and if it does not finish within 8 milliseconds it is moved to Q1 and eventually to Q2, and aging can be implemented with a multilevel feedback queue.",
          "ms": "Penjadualan keutamaan mengaitkan integer keutamaan dengan setiap proses dan memperuntukkan CPU kepada proses berkeutamaan tertinggi, iaitu integer yang lebih kecil bermaksud keutamaan yang lebih tinggi; ia boleh preemptif atau bukan preemptif, dan SJF hanyalah penjadualan keutamaan yang keutamaannya ialah songsangan letusan CPU seterusnya yang diramalkan. Masalahnya ialah kebuluran kerana proses berkeutamaan rendah mungkin tidak pernah dilaksanakan, dan penyelesaiannya ialah penuaan, iaitu meningkatkan keutamaan proses seiring masa. Baris gilir berbilang peringkat membahagikan baris gilir sedia kepada beberapa baris gilir, masing-masing dengan algoritma sendiri dan dijadualkan mengikut keutamaan, manakala baris gilir maklum balas berbilang peringkat membenarkan proses berpindah antara baris gilir: contohnya Q0 menggunakan RR dengan kuantum 8 milisaat, Q1 menggunakan RR dengan 16 milisaat dan Q2 menggunakan FCFS, proses baharu memasuki Q0, dan jika ia tidak selesai dalam 8 milisaat ia dipindahkan ke Q1 dan akhirnya ke Q2, dan penuaan boleh dilaksanakan dengan baris gilir maklum balas berbilang peringkat."
        },
        {
          "zh": "支持线程时调度的是线程而不是进程：用户级线程由线程库调度到轻量级进程上运行，称为进程竞争范围 PCS，竞争只发生在进程内部；内核线程被调度到可用 CPU 上，称为系统竞争范围 SCS，竞争发生在系统中所有线程之间。Pthread API 在创建线程时可用 PTHREAD_SCOPE_PROCESS 指定 PCS、用 PTHREAD_SCOPE_SYSTEM 指定 SCS，但 Linux 和 macOS 只允许 PTHREAD_SCOPE_SYSTEM。多处理器调度更复杂：对称多处理 SMP 中每个处理器自行调度，所有线程可以放在一个公共就绪队列，也可以每个处理器各有私有队列；多核处理器把多个核放在同一芯片上，更快更省电，多线程核（芯片多线程 CMT，Intel 称为超线程）给每个核多个硬件线程，四核每核两个硬件线程时操作系统看到 8 个逻辑处理器，因此有两级调度。为效率需要负载均衡：推送迁移由周期性任务把任务从过载 CPU 推到其他 CPU，拉取迁移由空闲处理器从忙碌处理器取任务；但迁移会影响处理器亲和性（线程缓存内容丢失），软亲和性只尽量保持线程在同一处理器，硬亲和性允许进程指定可运行的处理器集合；若操作系统支持 NUMA，会把内存分配给线程所在 CPU 附近。",
          "en": "When threads are supported it is threads rather than processes that are scheduled: user-level threads are scheduled by the thread library onto a lightweight process, which is known as process-contention scope (PCS) because competition is within the process, while a kernel thread is scheduled onto an available CPU, which is system-contention scope (SCS) because competition is among all threads in the system. The Pthread API allows PTHREAD_SCOPE_PROCESS for PCS and PTHREAD_SCOPE_SYSTEM for SCS when a thread is created, but Linux and macOS allow only PTHREAD_SCOPE_SYSTEM. Multiprocessor scheduling is more complex: in symmetric multiprocessing (SMP) each processor is self-scheduling and all threads may be in a common ready queue or each processor may keep a private queue; multicore processors place several cores on the same physical chip, being faster and consuming less power, and multithreaded cores, called chip multithreading (CMT) and known as hyperthreading in Intel terminology, give each core more than one hardware thread, so a quad-core system with two hardware threads per core appears to the OS as eight logical processors and two levels of scheduling are needed. Efficiency requires load balancing: push migration has a periodic task move tasks from an overloaded CPU to others, while pull migration has an idle processor take a waiting task from a busy one; migration however affects processor affinity because a thread loses the cache contents of the processor it left, so soft affinity only attempts to keep a thread on the same processor while hard affinity lets a process specify the set of processors it may run on; a NUMA-aware operating system assigns memory close to the CPU on which the thread is running.",
          "ms": "Apabila benang disokong, yang dijadualkan ialah benang dan bukan proses: benang peringkat pengguna dijadualkan oleh pustaka benang ke atas proses ringan, yang dikenali sebagai skop pertikaian proses (PCS) kerana persaingan berlaku dalam proses, manakala benang kernel dijadualkan ke CPU yang tersedia, yang dikenali sebagai skop pertikaian sistem (SCS) kerana persaingan berlaku antara semua benang dalam sistem. API Pthread membenarkan PTHREAD_SCOPE_PROCESS untuk PCS dan PTHREAD_SCOPE_SYSTEM untuk SCS semasa benang dicipta, tetapi Linux dan macOS hanya membenarkan PTHREAD_SCOPE_SYSTEM. Penjadualan berbilang pemproses lebih kompleks: dalam multipemprosesan simetri (SMP) setiap pemproses menjadualkan dirinya sendiri dan semua benang boleh berada dalam satu baris gilir sedia yang sama atau setiap pemproses menyimpan baris gilir persendirian; pemproses berbilang teras meletakkan beberapa teras pada cip fizikal yang sama, lebih pantas dan menjimatkan kuasa, dan teras berbilang benang, yang dipanggil multibenang cip (CMT) dan dikenali sebagai hiperbenang dalam istilah Intel, memberikan setiap teras lebih daripada satu benang perkakasan, jadi sistem empat teras dengan dua benang perkakasan setiap teras kelihatan kepada sistem pengendalian sebagai lapan pemproses logik dan dua peringkat penjadualan diperlukan. Kecekapan memerlukan pengimbangan beban: migrasi tolak mempunyai tugas berkala yang memindahkan tugas daripada CPU yang terbeban kepada CPU lain, manakala migrasi tarik mempunyai pemproses melahu yang mengambil tugas menunggu daripada pemproses sibuk; migrasi bagaimanapun menjejaskan afiniti pemproses kerana benang kehilangan kandungan cache pemproses yang ditinggalkannya, jadi afiniti lembut hanya cuba mengekalkan benang pada pemproses yang sama manakala afiniti keras membenarkan proses menetapkan set pemproses yang boleh digunakannya; sistem pengendalian yang sedar NUMA memperuntukkan ingatan berhampiran CPU tempat benang itu berjalan."
        },
        {
          "zh": "实时调度分为软实时（关键实时任务优先级最高，但不保证何时被调度）和硬实时（任务必须在截止期前得到服务）；事件延迟指事件发生到被服务之间的时间，包括中断延迟（中断到达到服务例程开始）和分派延迟（调度程序把当前进程换下并换入另一个进程的时间，其冲突阶段包括抢占内核模式的进程、以及低优先级进程释放高优先级进程所需的资源）。周期性任务有处理时间 t、截止期 d 和周期 p，满足 0 ≤ t ≤ d ≤ p，速率为 1/p；速率单调调度按周期倒数分配优先级，周期越短优先级越高；最早截止期优先 EDF 按截止期分配优先级，截止期越早优先级越高；比例份额调度把总共 T 份份额分给进程，应用得到 N 份就获得 N/T 的处理器时间。POSIX.1b 定义了 SCHED_FIFO（同优先级按 FCFS，不做时间片轮转）和 SCHED_RR（同优先级做时间片轮转）两种实时调度类。",
          "en": "Real-time scheduling is divided into soft real-time, where critical real-time tasks have the highest priority but there is no guarantee as to when they will be scheduled, and hard real-time, where a task must be serviced by its deadline; event latency is the time from the occurrence of an event to when it is serviced and includes interrupt latency, the time from the arrival of an interrupt to the start of the routine that services it, and dispatch latency, the time for the scheduler to take the current process off the CPU and switch to another, whose conflict phase involves preempting any process running in kernel mode and the release by low-priority processes of resources needed by high-priority processes. A periodic task has processing time t, deadline d and period p with 0 <= t <= d <= p and rate 1/p; rate monotonic scheduling assigns priority based on the inverse of the period so that shorter periods get higher priority; earliest deadline first (EDF) assigns priorities according to deadlines, the earlier the deadline the higher the priority; and proportional share scheduling allocates T shares among all processes so that an application receiving N shares gets N/T of the total processor time. POSIX.1b defines two real-time scheduling classes, SCHED_FIFO, which uses FCFS with no time slicing for threads of equal priority, and SCHED_RR, which adds time slicing for threads of equal priority.",
          "ms": "Penjadualan masa nyata terbahagi kepada masa nyata lembut, iaitu tugas masa nyata kritikal diberi keutamaan tertinggi tetapi tiada jaminan bila ia dijadualkan, dan masa nyata keras, iaitu tugas mesti dilayan sebelum tarikh akhirnya; kependaman peristiwa ialah masa dari berlakunya peristiwa sehingga ia dilayan dan merangkumi kependaman selangan, iaitu masa dari ketibaan selangan hingga permulaan rutin yang melayaninya, dan kependaman penyebaran, iaitu masa penjadual mengeluarkan proses semasa daripada CPU dan menukar kepada proses lain, yang fasa konfliknya melibatkan pengambilalihan mana-mana proses yang berjalan dalam mod kernel dan pelepasan sumber yang diperlukan oleh proses berkeutamaan tinggi oleh proses berkeutamaan rendah. Tugas berkala mempunyai masa pemprosesan t, tarikh akhir d dan tempoh p dengan 0 <= t <= d <= p dan kadarnya 1/p; penjadualan monoton kadar memberikan keutamaan berdasarkan songsangan tempoh supaya tempoh yang lebih pendek mendapat keutamaan lebih tinggi; tarikh akhir terawal dahulu (EDF) memberikan keutamaan mengikut tarikh akhir, semakin awal tarikh akhir semakin tinggi keutamaan; dan penjadualan bahagian berkadar mengagihkan T bahagian antara semua proses supaya aplikasi yang menerima N bahagian mendapat N/T daripada jumlah masa pemproses. POSIX.1b menakrifkan dua kelas penjadualan masa nyata, iaitu SCHED_FIFO yang menggunakan FCFS tanpa pembahagian masa bagi benang berkeutamaan sama, dan SCHED_RR yang menambah pembahagian masa bagi benang berkeutamaan sama."
        },
        {
          "zh": "实际系统中的调度：Linux 2.5 之前使用标准 UNIX 调度的变体，2.5 版改为 O(1) 抢占式优先级调度（实时范围 0–99，nice 值 100–140），2.6.23 以后采用完全公平调度 CFS，按 CPU 时间比例而非固定时间片，用 vruntime 最小的任务优先（nice 值越小优先级越高），并支持调度类与调度域；Windows 使用基于优先级的抢占式调度，32 级优先级方案（可变类 1–15，实时类 16–31，优先级 0 留给内存管理线程），线程运行直到阻塞、用完时间片或被更高优先级线程抢占，时间片用完会降优先级但不低于基优先级，等待后会提升优先级，前台窗口获得 3 倍提升；Solaris 有六个调度类（分时、交互、实时、系统、公平份额、固定优先级），把类优先级转换成每线程的全局优先级。算法评估方法有确定性建模（对给定工作负载计算各算法的平均等待时间，简单快速但只适用于给定输入）、排队模型（用概率描述到达与突发，服从指数分布，可用 Little 公式 n = λ × W 计算平均队列长度与等待时间）、模拟（用时钟变量和数据驱动，数据可来自随机数生成器或真实系统记录的 trace）以及最终在真实系统上实现测试（成本高风险大）。",
          "en": "Scheduling in real systems: before version 2.5 Linux ran a variation of the standard UNIX scheduler, version 2.5 moved to O(1) preemptive priority scheduling with real-time priorities from 0 to 99 and nice values from 100 to 140, and from 2.6.23 the completely fair scheduler (CFS) uses a proportion of CPU time rather than fixed time slices and picks the task with the lowest vruntime, with lower nice values meaning higher priority, supported by scheduling classes and scheduling domains. Windows uses priority-based preemptive scheduling with a 32-level priority scheme, where the variable class is 1 to 15, the real-time class is 16 to 31 and priority 0 is reserved for the memory-management thread; a thread runs until it blocks, uses its time slice or is preempted by a higher-priority thread, its priority is lowered when the quantum expires but never below the base priority, is boosted after a wait and is boosted threefold for the foreground window. Solaris offers six classes, namely time sharing, interactive, real time, system, fair share and fixed priority, and converts class-specific priorities into a per-thread global priority. Algorithms can be evaluated by deterministic modelling, which computes the average waiting time of each algorithm for a predetermined workload and is simple and fast but applies only to those inputs; by queueing models, which describe arrivals and bursts probabilistically, commonly exponentially, and use Little's formula n = lambda times W for average queue length and waiting time; by simulation, which uses a clock variable and data from a random-number generator or from trace tapes of real systems; and finally by implementing the scheduler and testing it on real systems at high cost and risk.",
          "ms": "Penjadualan dalam sistem sebenar: sebelum versi 2.5 Linux menjalankan variasi penjadual UNIX standard, versi 2.5 beralih kepada penjadualan keutamaan preemptif O(1) dengan keutamaan masa nyata 0 hingga 99 dan nilai nice 100 hingga 140, dan mulai 2.6.23 penjadual adil sepenuhnya (CFS) menggunakan perkadaran masa CPU dan bukan kepingan masa tetap serta memilih tugas dengan vruntime terendah, dengan nilai nice yang lebih kecil bermaksud keutamaan lebih tinggi, disokong oleh kelas penjadualan dan domain penjadualan. Windows menggunakan penjadualan preemptif berasaskan keutamaan dengan skema 32 aras, iaitu kelas boleh ubah 1 hingga 15, kelas masa nyata 16 hingga 31 dan keutamaan 0 dikhaskan untuk benang pengurusan ingatan; benang berjalan sehingga tersekat, menghabiskan kepingan masanya atau diambil alih oleh benang berkeutamaan lebih tinggi, keutamaannya diturunkan apabila kuantum tamat tetapi tidak pernah di bawah keutamaan asas, dinaikkan selepas menunggu dan dinaikkan tiga kali ganda bagi tetingkap latar depan. Solaris menawarkan enam kelas iaitu perkongsian masa, interaktif, masa nyata, sistem, perkongsian adil dan keutamaan tetap, dan menukar keutamaan khusus kelas kepada keutamaan global setiap benang. Algoritma boleh dinilai melalui pemodelan deterministik yang mengira purata masa menunggu setiap algoritma bagi beban kerja yang telah ditetapkan, mudah dan pantas tetapi hanya terpakai pada input tersebut; melalui model baris gilir yang menerangkan ketibaan dan letusan secara kebarangkalian, biasanya eksponen, dan menggunakan formula Little n = lambda darab W untuk panjang baris gilir dan masa menunggu purata; melalui simulasi yang menggunakan pemboleh ubah jam dan data daripada penjana nombor rawak atau pita jejak sistem sebenar; dan akhirnya dengan melaksanakan penjadual serta mengujinya pada sistem sebenar dengan kos dan risiko yang tinggi."
        }
      ],
      "terms": [
        {
          "en": "CPU-I/O Burst Cycle",
          "zh": "CPU–I/O 突发周期",
          "ms": "Kitaran Letusan CPU-I/O",
          "def": {
            "zh": "进程执行由 CPU 执行与 I/O 等待交替构成的循环，CPU 突发分布通常是大量短突发、少量长突发。",
            "en": "The cycle of CPU execution alternating with I/O wait in process execution; the CPU burst distribution typically has many short bursts and few long ones.",
            "ms": "Kitaran pelaksanaan CPU yang berselang-seli dengan penantian I/O; taburan letusan CPU biasanya banyak letusan pendek dan sedikit letusan panjang."
          }
        },
        {
          "en": "Preemptive Scheduling",
          "zh": "抢占式调度",
          "ms": "Penjadualan Preemptif",
          "def": {
            "zh": "允许在运行转就绪或等待转就绪时强行切换 CPU 的调度方式；只在进程终止或转入等待时切换的是非抢占式调度。",
            "en": "Scheduling in which the CPU may be taken away when a process moves from running to ready or from waiting to ready; switching only at termination or when a process moves to waiting is nonpreemptive.",
            "ms": "Penjadualan yang membenarkan CPU diambil semula apabila proses beralih daripada berjalan ke sedia atau daripada menunggu ke sedia; pertukaran hanya semasa tamat atau peralihan ke menunggu ialah bukan preemptif."
          }
        },
        {
          "en": "Dispatcher / Dispatch Latency",
          "zh": "分派程序 / 分派延迟",
          "ms": "Penyebar / Kependaman Penyebaran",
          "def": {
            "zh": "把 CPU 控制权交给调度程序所选进程的模块，负责切换上下文、切换到用户模式并跳到用户程序的正确位置。分派程序停止一个进程并启动另一个进程所花的时间，是调度开销的一部分。",
            "en": "The module that gives control of the CPU to the process selected by the scheduler, involving context switching, switching to user mode and jumping to the proper location in the program. The time it takes for the dispatcher to stop one process and start another running; it is part of the scheduling overhead.",
            "ms": "Modul yang memberikan kawalan CPU kepada proses yang dipilih penjadual, melibatkan pertukaran konteks, bertukar ke mod pengguna dan melompat ke lokasi yang betul dalam program. Masa yang diambil penyebar untuk memberhentikan satu proses dan memulakan proses lain; ia sebahagian daripada overhed penjadualan."
          }
        },
        {
          "en": "Throughput",
          "zh": "吞吐量",
          "ms": "Daya Pemprosesan",
          "def": {
            "zh": "单位时间内完成执行的进程数量，是调度准则之一。",
            "en": "The number of processes that complete their execution per time unit, one of the scheduling criteria.",
            "ms": "Bilangan proses yang tamat dilaksanakan per unit masa, salah satu kriteria penjadualan."
          }
        },
        {
          "en": "Turnaround Time",
          "zh": "周转时间",
          "ms": "Masa Pusingan",
          "def": {
            "zh": "从进程提交到完成为止的总时间，包括等待、在 CPU 上执行和做 I/O 的时间。",
            "en": "The total time from submission of a process to its completion, including waiting, executing on the CPU and performing I/O.",
            "ms": "Jumlah masa dari proses dikemukakan sehingga selesai, termasuk menunggu, melaksanakan pada CPU dan melakukan I/O."
          }
        },
        {
          "en": "Waiting Time",
          "zh": "等待时间",
          "ms": "Masa Menunggu",
          "def": {
            "zh": "进程在就绪队列中等待所花的总时间，是评价调度算法最常用的指标。",
            "en": "The total amount of time a process spends waiting in the ready queue, the measure most often used to compare scheduling algorithms.",
            "ms": "Jumlah masa proses menunggu dalam baris gilir sedia, ukuran yang paling kerap digunakan untuk membandingkan algoritma penjadualan."
          }
        },
        {
          "en": "Response Time",
          "zh": "响应时间",
          "ms": "Masa Tindak Balas",
          "def": {
            "zh": "从提交请求到产生第一个响应之间的时间，交互式系统特别关注这一指标。",
            "en": "The time from when a request was submitted until the first response is produced, a measure especially important in interactive systems.",
            "ms": "Masa dari permintaan dikemukakan sehingga tindak balas pertama dihasilkan, ukuran yang amat penting dalam sistem interaktif."
          }
        },
        {
          "en": "Convoy Effect",
          "zh": "护航效应",
          "ms": "Kesan Konvoi",
          "def": {
            "zh": "FCFS 中短进程排在一个长 CPU 突发进程之后，导致平均等待时间大幅增加的现象。",
            "en": "The situation under FCFS in which short processes queue behind one long CPU-bound process, greatly increasing the average waiting time.",
            "ms": "Keadaan dalam FCFS apabila proses pendek berbaris di belakang satu proses panjang yang terikat CPU, sehingga purata masa menunggu meningkat dengan banyak."
          }
        },
        {
          "en": "Time Quantum",
          "zh": "时间片",
          "ms": "Kuantum Masa",
          "def": {
            "zh": "轮转法中每个进程一次获得的 CPU 时间单位，通常为 10–100 毫秒，必须远大于上下文切换时间。",
            "en": "The unit of CPU time a process receives at once in round robin, usually 10 to 100 milliseconds, which must be much larger than the context-switch time.",
            "ms": "Unit masa CPU yang diterima sesuatu proses sekali gus dalam putaran berjadual, biasanya 10 hingga 100 milisaat, yang mesti jauh lebih besar daripada masa pertukaran konteks."
          }
        },
        {
          "en": "Starvation / Aging",
          "zh": "饥饿 / 老化",
          "ms": "Kebuluran / Penuaan",
          "def": {
            "zh": "饥饿指低优先级进程可能永远得不到 CPU；老化是随时间提高进程优先级以解决饥饿的办法。",
            "en": "Starvation is the situation in which a low-priority process may never execute, while aging is the solution of increasing a process's priority as time progresses.",
            "ms": "Kebuluran ialah keadaan apabila proses berkeutamaan rendah mungkin tidak pernah dilaksanakan, manakala penuaan ialah penyelesaian dengan meningkatkan keutamaan proses seiring masa."
          }
        },
        {
          "en": "Multilevel Feedback Queue",
          "zh": "多级反馈队列",
          "ms": "Baris Gilir Maklum Balas Berbilang Peringkat",
          "def": {
            "zh": "允许进程在多个队列之间移动的调度结构，可用来实现老化，参数包括队列数、各队列算法与升降级规则。",
            "en": "A scheduling structure that allows a process to move between several queues and can implement aging; its parameters include the number of queues, the algorithm of each queue and the promotion and demotion rules.",
            "ms": "Struktur penjadualan yang membenarkan proses berpindah antara beberapa baris gilir dan boleh melaksanakan penuaan; parameternya termasuk bilangan baris gilir, algoritma setiap baris gilir serta peraturan naik dan turun taraf."
          }
        },
        {
          "en": "Processor Affinity",
          "zh": "处理器亲和性",
          "ms": "Afiniti Pemproses",
          "def": {
            "zh": "线程倾向于继续在同一处理器上运行（以保留其高速缓存内容）的性质；软亲和性只是尽量保持，硬亲和性允许进程指定可运行的处理器集合。",
            "en": "The tendency of a thread to keep running on the same processor so as to retain its cache contents; soft affinity only attempts to keep it there while hard affinity lets a process specify the set of processors it may run on.",
            "ms": "Kecenderungan benang untuk terus berjalan pada pemproses yang sama bagi mengekalkan kandungan cachenya; afiniti lembut hanya cuba mengekalkannya manakala afiniti keras membenarkan proses menetapkan set pemproses yang boleh digunakan."
          }
        },
        {
          "en": "Rate Monotonic Scheduling",
          "zh": "速率单调调度",
          "ms": "Penjadualan Monoton Kadar",
          "def": {
            "zh": "按周期倒数给周期性任务分配优先级的实时调度算法，周期越短优先级越高。",
            "en": "A real-time scheduling algorithm that assigns priority to periodic tasks based on the inverse of their period, so shorter periods get higher priority.",
            "ms": "Algoritma penjadualan masa nyata yang memberikan keutamaan kepada tugas berkala berdasarkan songsangan tempohnya, jadi tempoh lebih pendek mendapat keutamaan lebih tinggi."
          }
        },
        {
          "en": "Earliest Deadline First (EDF)",
          "zh": "最早截止期优先",
          "ms": "Tarikh Akhir Terawal Dahulu (EDF)",
          "def": {
            "zh": "按截止期分配优先级的实时调度算法，截止期越早优先级越高，越晚优先级越低。",
            "en": "A real-time scheduling algorithm that assigns priority according to deadlines: the earlier the deadline the higher the priority and the later the deadline the lower the priority.",
            "ms": "Algoritma penjadualan masa nyata yang memberikan keutamaan mengikut tarikh akhir: semakin awal tarikh akhir semakin tinggi keutamaan dan semakin lewat semakin rendah keutamaan."
          }
        },
        {
          "en": "Little's Formula",
          "zh": "Little 公式",
          "ms": "Formula Little",
          "def": {
            "zh": "排队模型中 n = λ × W，即平均队列长度等于平均到达率乘以平均等待时间，适用于任何调度算法与到达分布。",
            "en": "In queueing models, n = lambda times W, meaning the average queue length equals the average arrival rate multiplied by the average waiting time; it is valid for any scheduling algorithm and arrival distribution.",
            "ms": "Dalam model baris gilir, n = lambda darab W, iaitu panjang baris gilir purata sama dengan kadar ketibaan purata didarab masa menunggu purata; sah untuk sebarang algoritma penjadualan dan taburan ketibaan."
          }
        }
      ],
      "diagrams": [
        {
          "type": "timeline",
          "title": {
            "zh": "FCFS 调度的甘特图（P1=24，P2=3，P3=3）",
            "en": "Gantt Chart for FCFS Scheduling (P1=24, P2=3, P3=3)",
            "ms": "Carta Gantt bagi Penjadualan FCFS (P1=24, P2=3, P3=3)"
          },
          "caption": {
            "zh": "按 P1、P2、P3 到达时平均等待时间为 (0+24+27)/3 = 17；若改为 P2、P3、P1 只需 (6+0+3)/3 = 3。",
            "en": "With arrival order P1, P2, P3 the average waiting time is (0+24+27)/3 = 17, whereas with P2, P3, P1 it is only (6+0+3)/3 = 3.",
            "ms": "Dengan urutan ketibaan P1, P2, P3 purata masa menunggu ialah (0+24+27)/3 = 17, manakala dengan P2, P3, P1 hanya (6+0+3)/3 = 3."
          },
          "unit": {
            "zh": "时间单位（毫秒）",
            "en": "Time unit (ms)",
            "ms": "Unit masa (ms)"
          },
          "max": 30,
          "bars": [
            {
              "label": {
                "zh": "P1（等待 0）",
                "en": "P1 (waits 0)",
                "ms": "P1 (menunggu 0)"
              },
              "start": 0,
              "len": 24,
              "color": "a1"
            },
            {
              "label": {
                "zh": "P2（等待 24）",
                "en": "P2 (waits 24)",
                "ms": "P2 (menunggu 24)"
              },
              "start": 24,
              "len": 3,
              "color": "a2"
            },
            {
              "label": {
                "zh": "P3（等待 27）",
                "en": "P3 (waits 27)",
                "ms": "P3 (menunggu 27)"
              },
              "start": 27,
              "len": 3,
              "color": "a3"
            }
          ]
        },
        {
          "type": "matrix",
          "title": {
            "zh": "常见 CPU 调度算法对比",
            "en": "Comparison of Common CPU Scheduling Algorithms",
            "ms": "Perbandingan Algoritma Penjadualan CPU yang Biasa"
          },
          "cols": [
            {
              "zh": "抢占式？",
              "en": "Preemptive?",
              "ms": "Preemptif?"
            },
            {
              "zh": "优点",
              "en": "Advantage",
              "ms": "Kelebihan"
            },
            {
              "zh": "缺点",
              "en": "Drawback",
              "ms": "Kelemahan"
            }
          ],
          "rows": [
            {
              "head": {
                "zh": "FCFS",
                "en": "FCFS",
                "ms": "FCFS"
              },
              "cells": [
                {
                  "zh": "非抢占",
                  "en": "Nonpreemptive",
                  "ms": "Bukan preemptif"
                },
                {
                  "zh": "实现最简单",
                  "en": "Simplest to implement",
                  "ms": "Paling mudah dilaksanakan"
                },
                {
                  "zh": "护航效应，平均等待时间长",
                  "en": "Convoy effect, long average waiting time",
                  "ms": "Kesan konvoi, purata masa menunggu panjang"
                }
              ]
            },
            {
              "head": {
                "zh": "SJF / SRTF",
                "en": "SJF / SRTF",
                "ms": "SJF / SRTF"
              },
              "cells": [
                {
                  "zh": "SRTF 抢占",
                  "en": "SRTF is preemptive",
                  "ms": "SRTF preemptif"
                },
                {
                  "zh": "平均等待时间最小（最优）",
                  "en": "Minimum average waiting time, optimal",
                  "ms": "Purata masa menunggu minimum, optimum"
                },
                {
                  "zh": "下一突发长度只能估计，长作业可能饥饿",
                  "en": "Next burst length must be estimated, long jobs may starve",
                  "ms": "Panjang letusan seterusnya hanya boleh dianggar, kerja panjang mungkin kebuluran"
                }
              ]
            },
            {
              "head": {
                "zh": "轮转 RR",
                "en": "Round Robin",
                "ms": "Putaran Berjadual"
              },
              "cells": [
                {
                  "zh": "抢占（按时间片）",
                  "en": "Preemptive by quantum",
                  "ms": "Preemptif mengikut kuantum"
                },
                {
                  "zh": "响应时间好，公平",
                  "en": "Good response time, fair",
                  "ms": "Masa tindak balas baik, adil"
                },
                {
                  "zh": "周转时间一般比 SJF 差，q 太小开销大",
                  "en": "Higher turnaround than SJF, small q raises overhead",
                  "ms": "Masa pusingan lebih tinggi daripada SJF, q kecil menambah overhed"
                }
              ]
            },
            {
              "head": {
                "zh": "优先级",
                "en": "Priority",
                "ms": "Keutamaan"
              },
              "cells": [
                {
                  "zh": "可抢占也可非抢占",
                  "en": "Both possible",
                  "ms": "Kedua-duanya boleh"
                },
                {
                  "zh": "可体现进程重要性",
                  "en": "Can reflect process importance",
                  "ms": "Boleh mencerminkan kepentingan proses"
                },
                {
                  "zh": "低优先级进程饥饿，需用老化解决",
                  "en": "Low-priority processes starve, aging is needed",
                  "ms": "Proses berkeutamaan rendah kebuluran, penuaan diperlukan"
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必考计算题：给定到达时间与突发时间，画出 FCFS、SJF、SRTF、RR、优先级的甘特图并算出平均等待时间与平均周转时间。注意 SRTF 要按新进程到达时刻重新比较剩余时间，RR 要把未完成的进程放回队尾。",
          "en": "A guaranteed calculation question: given arrival times and burst times, draw the Gantt charts for FCFS, SJF, SRTF, RR and priority scheduling and compute the average waiting and turnaround times. Remember that SRTF must re-compare remaining times whenever a new process arrives, and RR puts an unfinished process back at the tail of the queue.",
          "ms": "Soalan pengiraan yang pasti keluar: diberi masa ketibaan dan masa letusan, lukis carta Gantt bagi FCFS, SJF, SRTF, RR dan keutamaan serta hitung purata masa menunggu dan masa pusingan. Ingat bahawa SRTF mesti membandingkan semula masa baki setiap kali proses baharu tiba, dan RR meletakkan proses yang belum selesai kembali di hujung baris gilir."
        },
        {
          "zh": "易错点：把等待时间与周转时间混为一谈。等待时间只是在就绪队列中等待的总时间，周转时间 = 完成时刻 − 到达时刻，还包括在 CPU 上执行和做 I/O 的时间。",
          "en": "A common mistake is confusing waiting time with turnaround time. Waiting time is only the total time spent waiting in the ready queue, whereas turnaround time is completion time minus arrival time and also includes executing on the CPU and performing I/O.",
          "ms": "Kesilapan biasa ialah mengelirukan masa menunggu dengan masa pusingan. Masa menunggu hanyalah jumlah masa menunggu dalam baris gilir sedia, manakala masa pusingan ialah masa selesai tolak masa ketibaan dan turut merangkumi pelaksanaan pada CPU serta I/O."
        },
        {
          "zh": "常考概念题：为什么 SJF 是最优的（对给定进程集给出最小平均等待时间）、为什么 RR 的 q 必须远大于上下文切换时间（否则开销过高）、以及时间片很大时 RR 退化为 FCFS。",
          "en": "Frequent concept questions: why SJF is optimal (it gives the minimum average waiting time for a given set of processes), why the RR quantum must be much larger than the context-switch time (otherwise overhead is too high), and that RR degenerates to FCFS when the quantum is very large.",
          "ms": "Soalan konsep yang kerap keluar: mengapa SJF optimum (ia memberikan purata masa menunggu minimum bagi satu set proses), mengapa kuantum RR mesti jauh lebih besar daripada masa pertukaran konteks (jika tidak overhed terlalu tinggi), dan bahawa RR merosot menjadi FCFS apabila kuantum sangat besar."
        },
        {
          "zh": "实时调度常考速率单调与 EDF 的优先级规则：速率单调按周期倒数（周期越短优先级越高），EDF 按截止期（越早优先级越高），并要记住周期性任务满足 0 ≤ t ≤ d ≤ p、速率为 1/p。",
          "en": "Real-time scheduling questions usually test the priority rules of rate monotonic and EDF: rate monotonic uses the inverse of the period so shorter periods get higher priority, EDF uses deadlines so earlier deadlines get higher priority, and a periodic task satisfies 0 <= t <= d <= p with rate 1/p.",
          "ms": "Soalan penjadualan masa nyata biasanya menguji peraturan keutamaan monoton kadar dan EDF: monoton kadar menggunakan songsangan tempoh supaya tempoh lebih pendek mendapat keutamaan lebih tinggi, EDF menggunakan tarikh akhir supaya tarikh akhir lebih awal mendapat keutamaan lebih tinggi, dan tugas berkala memenuhi 0 <= t <= d <= p dengan kadar 1/p."
        }
      ],
      "mnemonic": {
        "zh": "准则五个：利用率、吞吐量、周转、等待、响应；算法一串：先来先服务—最短优先—轮转—优先级—多级反馈。",
        "en": "Five criteria: utilisation, throughput, turnaround, waiting, response. Algorithm chain: FCFS, shortest job, round robin, priority, multilevel feedback.",
        "ms": "Lima kriteria: penggunaan, daya pemprosesan, masa pusingan, masa menunggu, masa tindak balas. Rangkaian algoritma: FCFS, kerja terpendek, putaran berjadual, keutamaan, maklum balas berbilang peringkat."
      }
    },
    {
      "id": "os-05",
      "num": 5,
      "title": {
        "zh": "进程同步",
        "en": "Process Synchronization",
        "ms": "Penyegerakan Proses"
      },
      "file": "os/CHAPTER 5 DDWD 2663.pptx",
      "pages": 61,
      "summary": {
        "zh": "本章解决并发带来的数据不一致问题：进程可以并发执行，随时可能被中断而只执行了一部分，若同时访问共享数据就会产生竞态条件，例如第 3 章有界缓冲区里生产者与消费者并发更新 counter，或者两个进程同时用 fork() 取得同一个 pid。为此引入临界区问题：每个进程有进入区、临界区、退出区和剩余区，解法必须同时满足互斥、前进和有限等待三个要求。本章依次考察禁用中断、软件解法（turn 变量与 Peterson 解法）、内存屏障与指令重排、硬件指令 test_and_set 与 compare_and_swap、原子变量、互斥锁与自旋锁、信号量及其阻塞实现，以及监视器与条件变量，最后讨论死锁、饥饿与优先级反转等活性问题。",
        "en": "This chapter addresses the data inconsistency caused by concurrency: processes execute concurrently and may be interrupted at any time, so concurrent access to shared data can produce a race condition, as when the producer and consumer update the counter of the bounded buffer concurrently or when two processes calling fork() obtain the same pid. It therefore introduces the critical-section problem, in which each process has an entry section, a critical section, an exit section and a remainder section, and whose solution must satisfy mutual exclusion, progress and bounded waiting. The chapter then examines disabling interrupts, the software solutions using the turn variable and Peterson's solution, memory barriers and instruction reordering, the hardware instructions test_and_set and compare_and_swap, atomic variables, mutex locks and spinlocks, semaphores with their blocking implementation, and monitors with condition variables, before ending with liveness problems such as deadlock, starvation and priority inversion.",
        "ms": "Bab ini menangani ketidakselarasan data akibat keserentakan: proses boleh melaksanakan secara serentak dan boleh diselangi pada bila-bila masa, jadi akses serentak kepada data dikongsi boleh menghasilkan keadaan perlumbaan, seperti apabila pengeluar dan pengguna mengemas kini pembilang penimbal terbatas secara serentak atau apabila dua proses yang memanggil fork() memperoleh pid yang sama. Oleh itu diperkenalkan masalah bahagian kritikal, iaitu setiap proses mempunyai bahagian masuk, bahagian kritikal, bahagian keluar dan bahagian baki, dan penyelesaiannya mesti memenuhi pengecualian bersama, kemajuan dan penantian terbatas. Bab ini seterusnya mengkaji penyahaktifan selangan, penyelesaian perisian menggunakan pemboleh ubah turn dan penyelesaian Peterson, penghadang ingatan dan penyusunan semula arahan, arahan perkakasan test_and_set dan compare_and_swap, pemboleh ubah atom, kunci mutex dan spinlock, semafor dengan pelaksanaan menyekatnya, serta monitor dengan pemboleh ubah syarat, dan diakhiri dengan masalah keaktifan seperti kebuntuan, kebuluran dan penyongsangan keutamaan."
      },
      "points": [
        {
          "zh": "进程可以并发执行，随时可能被中断而只执行了一部分，对共享数据的并发访问会导致数据不一致，因此需要机制保证协作进程有序执行；第 3 章有界缓冲区中生产者与消费者并发更新 counter 就是典型例子，两个进程同时用 fork() 创建子进程时，内核变量 next_available_pid 上的竞态条件甚至可能把同一个 pid 分配给两个不同进程。",
          "en": "Processes can execute concurrently and may be interrupted at any time, partially completing execution, so concurrent access to shared data may result in data inconsistency and mechanisms are needed to ensure the orderly execution of cooperating processes; the bounded-buffer counter updated concurrently by the producer and consumer is the classic example, and a race condition on the kernel variable next_available_pid when two processes call fork() at the same time could even assign the same pid to two different processes.",
          "ms": "Proses boleh melaksanakan secara serentak dan mungkin diselangi pada bila-bila masa sehingga hanya sebahagian pelaksanaan selesai, jadi akses serentak kepada data dikongsi boleh menyebabkan ketidakselarasan data dan mekanisme diperlukan untuk memastikan pelaksanaan proses bekerjasama secara teratur; pembilang penimbal terbatas yang dikemas kini serentak oleh pengeluar dan pengguna ialah contoh klasik, dan keadaan perlumbaan pada pemboleh ubah kernel next_available_pid apabila dua proses memanggil fork() serentak malah boleh memberikan pid yang sama kepada dua proses berbeza."
        },
        {
          "zh": "临界区问题考虑 n 个进程 {p0, p1, …, pn-1}，每个进程有一段称为临界区的代码，可能在修改公共变量、更新表格或写文件；当一个进程在临界区时其他进程不能进入自己的临界区。每个进程必须在进入区请求许可，临界区之后是退出区，然后是剩余区。",
          "en": "The critical-section problem considers a system of n processes {p0, p1, ..., pn-1} in which each process has a segment of code called its critical section, where it may be changing common variables, updating a table or writing a file; when one process is in its critical section no other process may be in its critical section. Each process must ask permission to enter in its entry section, and the critical section may be followed by an exit section and then the remainder section.",
          "ms": "Masalah bahagian kritikal mempertimbangkan sistem n proses {p0, p1, ..., pn-1} yang setiap prosesnya mempunyai segmen kod dipanggil bahagian kritikal, tempat ia mungkin mengubah pemboleh ubah umum, mengemas kini jadual atau menulis fail; apabila satu proses berada dalam bahagian kritikalnya, tiada proses lain boleh berada dalam bahagian kritikalnya. Setiap proses mesti meminta kebenaran masuk dalam bahagian masuknya, dan bahagian kritikal itu boleh diikuti bahagian keluar dan kemudian bahagian baki."
        },
        {
          "zh": "临界区问题的解法必须满足三个要求：互斥（若进程 Pi 在临界区执行，其他进程不能同时在各自的临界区执行）、前进（若没有进程在临界区且有些进程希望进入，则选择下一个进入临界区的进程不能无限推迟）、有限等待（进程发出进入请求后，在请求被批准之前允许其他进程进入临界区的次数必须有界）。假定每个进程以非零速度执行，但不对 n 个进程的相对速度作任何假设。",
          "en": "A solution to the critical-section problem must satisfy three requirements: mutual exclusion, so that if process Pi is executing in its critical section then no other process can be executing in its critical section; progress, so that if no process is executing in its critical section and some processes wish to enter, the selection of the process that will enter next cannot be postponed indefinitely; and bounded waiting, so that a bound must exist on the number of times other processes are allowed to enter their critical sections after a process has made a request and before that request is granted. Each process is assumed to execute at a nonzero speed, but no assumption is made about the relative speed of the n processes.",
          "ms": "Penyelesaian masalah bahagian kritikal mesti memenuhi tiga keperluan: pengecualian bersama, iaitu jika proses Pi melaksanakan dalam bahagian kritikalnya maka tiada proses lain boleh melaksanakan dalam bahagian kritikalnya; kemajuan, iaitu jika tiada proses dalam bahagian kritikal dan ada proses yang ingin masuk, pemilihan proses yang akan masuk seterusnya tidak boleh ditangguhkan tanpa had; dan penantian terbatas, iaitu mesti wujud had bilangan kali proses lain dibenarkan masuk ke bahagian kritikal mereka selepas sesuatu proses membuat permintaan dan sebelum permintaan itu diluluskan. Setiap proses diandaikan melaksanakan pada kelajuan bukan sifar, tetapi tiada andaian dibuat tentang kelajuan relatif n proses itu."
        },
        {
          "zh": "最简单的解法是基于中断：进入区禁用中断、退出区启用中断。但若临界区要运行一个小时，其他进程会被长时间阻塞；某些进程可能永远无法进入临界区而饥饿；而在两个 CPU（多处理器）的系统上，禁用单个 CPU 的中断并不能阻止另一个 CPU 上的进程进入临界区，因此在多处理器上效率低、可伸缩性差。",
          "en": "The simplest solution is interrupt based: disable interrupts in the entry section and enable them in the exit section. But if the critical section were to run for an hour other processes would be blocked for a long time, some processes could starve and never enter their critical section, and on a system with two CPUs disabling interrupts on one processor does not prevent a process on the other CPU from entering the critical section, so the approach is too inefficient and not broadly scalable on multiprocessors.",
          "ms": "Penyelesaian paling mudah berasaskan selangan: nyahaktifkan selangan dalam bahagian masuk dan aktifkannya semula dalam bahagian keluar. Tetapi jika bahagian kritikal berjalan selama satu jam, proses lain akan tersekat lama, sesetengah proses boleh kebuluran dan tidak pernah masuk ke bahagian kritikalnya, dan pada sistem dua CPU, menyahaktifkan selangan pada satu pemproses tidak menghalang proses pada CPU yang lain daripada masuk ke bahagian kritikal, jadi pendekatan ini terlalu tidak cekap dan tidak boleh diskalakan dengan luas pada berbilang pemproses."
        },
        {
          "zh": "软件解法一只用共享变量 turn 表示轮到谁进入临界区，能保证互斥（Pi 只有在 turn = i 时才能进入），但不能满足前进和有限等待要求。Peterson 解法使用 turn 和布尔数组 flag[2]：Pi 先置 flag[i] = true、令 turn = j，然后在 flag[j] && turn == j 时忙等；它可证明同时满足互斥、前进和有限等待三个要求，但在现代体系结构上不保证正确，因为处理器或编译器可能对无依赖的操作重排序，例如把 Thread 2 的 x = 100 与 flag = true 调换，导致期望输出 100 而实际输出 0。解决重排序问题的办法是内存屏障。内存模型是计算机体系结构对应用程序作出的内存保证，分为强序（一个处理器的内存修改立即对所有其他处理器可见）和弱序（修改可能不会立即可见）；内存屏障是一条强制把内存中的改动传播给所有其他处理器的指令，它确保此前的所有装入和存储都完成之后才执行后续的装入与存储。例如在 Thread 1 的 while (!flag) 循环中加 memory_barrier()、在 Thread 2 的 x = 100 之后加 memory_barrier() 再设 flag = true，就能保证 Thread 1 输出 100。",
          "en": "The first software solution uses only the shared variable turn to indicate whose turn it is to enter the critical section; it preserves mutual exclusion because Pi enters only if turn equals i, but it does not satisfy the progress and bounded-waiting requirements. Peterson's solution uses turn together with a boolean array flag[2]: Pi sets flag[i] to true, sets turn to j and then busy waits while flag[j] and turn equals j; it can be proved to satisfy mutual exclusion, progress and bounded waiting, but it is not guaranteed to work on modern architectures because processors or compilers may reorder operations that have no dependencies, for example swapping Thread 2's x = 100 with flag = true so that the expected output 100 becomes 0. The remedy for reordering is a memory barrier. A memory model is the set of memory guarantees a computer architecture makes to application programs and may be strongly ordered, where a memory modification by one processor is immediately visible to all others, or weakly ordered, where it may not be; a memory barrier is an instruction that forces any change in memory to be propagated and made visible to all other processors, ensuring that all loads and stores are completed before any subsequent load or store is performed. Adding memory_barrier() inside Thread 1's while (!flag) loop and after x = 100 in Thread 2 before setting flag = true, for instance, guarantees that Thread 1 outputs 100.",
          "ms": "Penyelesaian perisian pertama hanya menggunakan pemboleh ubah dikongsi turn untuk menunjukkan giliran masuk ke bahagian kritikal; ia mengekalkan pengecualian bersama kerana Pi masuk hanya jika turn sama dengan i, tetapi ia tidak memenuhi keperluan kemajuan dan penantian terbatas. Penyelesaian Peterson menggunakan turn bersama tatasusunan boolean flag[2]: Pi menetapkan flag[i] kepada true, menetapkan turn kepada j dan kemudian menunggu sibuk selagi flag[j] dan turn sama dengan j; ia boleh dibuktikan memenuhi pengecualian bersama, kemajuan dan penantian terbatas, tetapi tidak dijamin berfungsi pada seni bina moden kerana pemproses atau penyusun mungkin menyusun semula operasi yang tidak saling bergantung, contohnya menukar x = 100 dengan flag = true pada Benang 2 sehingga output yang dijangka 100 menjadi 0. Penawar bagi penyusunan semula ialah penghadang ingatan. Model ingatan ialah set jaminan ingatan yang diberikan seni bina komputer kepada program aplikasi dan boleh bersifat tersusun kuat, iaitu pengubahsuaian ingatan oleh satu pemproses terus kelihatan kepada semua pemproses lain, atau tersusun lemah, iaitu ia mungkin tidak kelihatan serta-merta; penghadang ingatan ialah arahan yang memaksa sebarang perubahan dalam ingatan disebarkan dan kelihatan kepada semua pemproses lain, memastikan semua muatan dan simpanan selesai sebelum sebarang muatan atau simpanan berikutnya dilakukan. Menambah memory_barrier() dalam gelung while (!flag) Benang 1 dan selepas x = 100 pada Benang 2 sebelum menetapkan flag = true, misalnya, menjamin Benang 1 mengeluarkan 100."
        },
        {
          "zh": "硬件提供特殊指令原子地（不可中断地）测试并修改一个字的内容或者交换两个字的内容：test_and_set 返回传入参数的原始值并把该参数置为 true；compare_and_swap 返回 value 的原始值，并且只在 *value == expected 时才把 value 设为 new_value。用共享布尔变量 lock（初值 false）配合 while (test_and_set(&lock)) 忙等、退出时 lock = false 可以解决临界区问题；用共享整数 lock（初值 0）配合 while (compare_and_swap(&lock, 0, 1) != 0) 也可以。若还要满足有限等待，可用 waiting[] 数组版的 compare_and_swap 解法。原子变量则把这些指令当作基本构件，对整数、布尔等基本类型提供不可中断的更新，例如用 compare_and_swap 循环实现 increment()。",
          "en": "Hardware provides special instructions that allow the content of a word to be tested and modified, or the contents of two words to be swapped, atomically and uninterruptedly: test_and_set returns the original value of its parameter and sets that parameter to true, while compare_and_swap returns the original value of value and sets it to new_value only if *value equals expected. A shared boolean lock initialised to false with a busy wait on while (test_and_set(&lock)) and lock = false on exit solves the critical-section problem, as does a shared integer lock initialised to 0 with while (compare_and_swap(&lock, 0, 1) != 0). Bounded waiting can be added with the compare_and_swap solution that uses a waiting array, and atomic variables use such instructions as building blocks to give uninterruptible updates on basic types, for example implementing increment() with a compare_and_swap loop.",
          "ms": "Perkakasan menyediakan arahan khas yang membolehkan kandungan satu perkataan diuji dan diubah, atau kandungan dua perkataan ditukar, secara atom dan tanpa gangguan: test_and_set memulangkan nilai asal parameternya dan menetapkan parameter itu kepada true, manakala compare_and_swap memulangkan nilai asal value dan menetapkannya kepada new_value hanya jika *value sama dengan expected. Kunci boolean dikongsi yang dimulakan kepada false dengan penantian sibuk while (test_and_set(&lock)) dan lock = false semasa keluar menyelesaikan masalah bahagian kritikal, begitu juga kunci integer dikongsi yang dimulakan kepada 0 dengan while (compare_and_swap(&lock, 0, 1) != 0). Penantian terbatas boleh ditambah dengan penyelesaian compare_and_swap yang menggunakan tatasusunan waiting, dan pemboleh ubah atom menggunakan arahan sedemikian sebagai blok binaan untuk memberikan kemas kini tanpa gangguan pada jenis asas, contohnya melaksanakan increment() dengan gelung compare_and_swap."
        },
        {
          "zh": "互斥锁是最简单的软件同步工具：用一个布尔变量表示锁是否可用，进入临界区前先 acquire() 获取锁、离开时 release() 释放锁，这两个调用必须是原子的，通常用 compare_and_swap 等硬件原子指令实现。这种解法需要忙等待，所以这样的锁被称为自旋锁（spinlock）。",
          "en": "A mutex lock is the simplest software tool for solving the critical-section problem: a boolean variable indicates whether the lock is available, and a process protects its critical section by first calling acquire() and then release() when it leaves; these calls must be atomic and are usually implemented with hardware atomic instructions such as compare_and_swap. This solution requires busy waiting, which is why such a lock is called a spinlock.",
          "ms": "Kunci mutex ialah alat perisian paling mudah untuk menyelesaikan masalah bahagian kritikal: pemboleh ubah boolean menunjukkan sama ada kunci tersedia, dan proses melindungi bahagian kritikalnya dengan memanggil acquire() dahulu dan release() apabila keluar; kedua-dua panggilan ini mesti atom dan biasanya dilaksanakan dengan arahan atom perkakasan seperti compare_and_swap. Penyelesaian ini memerlukan penantian sibuk, sebab itulah kunci sedemikian dipanggil spinlock."
        },
        {
          "zh": "信号量 S 是一个整数变量，只能通过两个不可分割（原子）的操作访问：wait(S)（原称 P）在 S ≤ 0 时忙等、否则 S--；signal(S)（原称 V）执行 S++。计数信号量的取值范围不受限制，二元信号量的值只能是 0 或 1（等同于互斥锁）。用初值为 1 的信号量 mutex 可以解决临界区问题（wait(mutex) … CS … signal(mutex)）；用初值为 0 的信号量 synch 可以保证先后顺序（P1 执行 S1 后 signal(synch)，P2 先 wait(synch) 再执行 S2）。错误使用（如 signal 与 wait 顺序颠倒、重复 wait、漏掉 wait 或 signal）会造成严重问题。信号量的实现必须保证没有两个进程能同时对同一个信号量执行 wait() 和 signal()，于是 wait/signal 的代码本身就成了临界区，仍可能有忙等待，但这段代码很短，临界区很少被占用时忙等待很少。为避免忙等待，可以给每个信号量配一个等待队列（每项含整数值和指向下一个记录的指针），并用两个操作 block（把调用进程放入相应的等待队列）与 wakeup（把等待队列中的一个进程取出并放入就绪队列）：wait 先 S->value--，若小于 0 就把进程加入 S->list 并 block；signal 先 S->value++，若不大于 0 就从 S->list 取出一个进程 P 并 wakeup(P)。",
          "en": "A semaphore S is an integer variable that can be accessed only through two indivisible, that is atomic, operations: wait(S), originally called P, busy waits while S is less than or equal to zero and otherwise decrements S, while signal(S), originally V, increments S. A counting semaphore may range over an unrestricted domain, whereas a binary semaphore ranges only between 0 and 1 and is the same as a mutex lock. A semaphore mutex initialised to 1 solves the critical-section problem with wait(mutex) around the critical section and signal(mutex) after it, and a semaphore synch initialised to 0 enforces ordering, since P1 executes S1 then signal(synch) while P2 does wait(synch) before S2. Incorrect use such as reversing signal and wait, calling wait twice or omitting wait or signal leads to serious problems. The implementation of a semaphore must guarantee that no two processes can execute wait() and signal() on the same semaphore at the same time, so the wait and signal code itself becomes a critical section where busy waiting may still occur, although the code is short and there is little busy waiting if the critical section is rarely occupied. To avoid busy waiting, each semaphore can have an associated waiting queue whose entries hold an integer value and a pointer to the next record, together with two operations: block, which places the invoking process on the appropriate waiting queue, and wakeup, which removes one process from the queue and places it in the ready queue. wait first decrements S->value and, if it is less than zero, adds the process to S->list and blocks it; signal increments S->value and, if it is not greater than zero, removes a process P from S->list and wakes it up.",
          "ms": "Semafor S ialah pemboleh ubah integer yang hanya boleh diakses melalui dua operasi tak boleh bahagi, iaitu atom: wait(S), yang asalnya dipanggil P, menunggu sibuk selagi S kurang atau sama dengan sifar dan jika tidak mengurangkan S, manakala signal(S), yang asalnya V, menambah S. Semafor pengiraan boleh merangkumi domain tanpa had, manakala semafor binari hanya antara 0 dan 1 dan sama seperti kunci mutex. Semafor mutex yang dimulakan kepada 1 menyelesaikan masalah bahagian kritikal dengan wait(mutex) mengelilingi bahagian kritikal dan signal(mutex) selepasnya, dan semafor synch yang dimulakan kepada 0 menguatkuasakan urutan, iaitu P1 melaksanakan S1 kemudian signal(synch) manakala P2 melakukan wait(synch) sebelum S2. Penggunaan yang salah seperti menyongsangkan signal dan wait, memanggil wait dua kali atau tertinggal wait atau signal membawa kepada masalah serius. Pelaksanaan semafor mesti menjamin tiada dua proses boleh melaksanakan wait() dan signal() pada semafor yang sama secara serentak, jadi kod wait dan signal itu sendiri menjadi bahagian kritikal yang mungkin masih mempunyai penantian sibuk, walaupun kodnya pendek dan penantian sibuk sedikit jika bahagian kritikal jarang diduduki. Untuk mengelakkan penantian sibuk, setiap semafor boleh mempunyai baris gilir menunggu yang setiap entrinya menyimpan nilai integer dan penunjuk ke rekod berikutnya, bersama dua operasi: block, yang meletakkan proses pemanggil dalam baris gilir menunggu yang sesuai, dan wakeup, yang mengeluarkan satu proses daripada baris gilir itu dan meletakkannya dalam baris gilir sedia. wait mengurangkan S->value dahulu dan jika nilainya kurang daripada sifar, menambah proses ke S->list dan menyekatnya; signal menambah S->value dan jika nilainya tidak lebih besar daripada sifar, mengeluarkan satu proses P daripada S->list dan membangunkannya."
        },
        {
          "zh": "监视器是一种高级抽象，为进程同步提供方便而有效的机制：它是抽象数据类型，内部变量只能由过程内部的代码访问，任一时刻只能有一个进程在监视器内活动；用信号量实现时，每个过程体被 wait(mutex) 与 signal(mutex) 包住。监视器内用条件变量实现等待：x.wait() 使调用进程挂起直到有 x.signal()，x.signal() 恢复一个曾调用 x.wait() 的进程，若没有进程在等待则该操作没有任何效果。若多个进程排队等待同一条件变量，FCFS 往往不够，可以用带优先级号的 x.wait(c) 构造（c 是整数优先级号，号越小越优先），例如单资源分配监视器 ResourceAllocator 用 acquire(t) 与 release() 让声明最短使用时间的进程优先获得资源。",
          "en": "A monitor is a high-level abstraction that provides a convenient and effective mechanism for process synchronisation: it is an abstract data type whose internal variables are accessible only by code within its procedures, and only one process may be active within the monitor at a time; when implemented with semaphores, each procedure body is wrapped in wait(mutex) and signal(mutex). Waiting inside a monitor is expressed with condition variables: x.wait() suspends the invoking process until some other process calls x.signal(), and x.signal() resumes one of the processes that invoked x.wait(), having no effect if no process is waiting. When several processes are queued on the same condition variable FCFS is frequently not adequate, so the conditional-wait construct x.wait(c) can be used, where c is a priority number and the process with the lowest number is scheduled next; a monitor such as ResourceAllocator, for example, uses acquire(t) and release() so that the process declaring the shortest usage time is allocated the resource first.",
          "ms": "Monitor ialah abstraksi peringkat tinggi yang menyediakan mekanisme mudah dan berkesan untuk penyegerakan proses: ia jenis data abstrak yang pemboleh ubah dalamannya hanya boleh diakses oleh kod dalam prosedurnya, dan hanya satu proses boleh aktif dalam monitor pada satu masa; apabila dilaksanakan dengan semafor, setiap badan prosedur dibalut dengan wait(mutex) dan signal(mutex). Penantian dalam monitor dinyatakan dengan pemboleh ubah syarat: x.wait() menggantung proses pemanggil sehingga proses lain memanggil x.signal(), dan x.signal() menyambung semula salah satu proses yang memanggil x.wait(), serta tiada kesan jika tiada proses menunggu. Apabila beberapa proses berbaris pada pemboleh ubah syarat yang sama, FCFS selalunya tidak memadai, jadi konstruk penantian bersyarat x.wait(c) boleh digunakan, iaitu c ialah nombor keutamaan dan proses dengan nombor terkecil dijadualkan seterusnya; monitor seperti ResourceAllocator misalnya menggunakan acquire(t) dan release() supaya proses yang mengisytiharkan masa penggunaan paling singkat diberi sumber itu dahulu."
        },
        {
          "zh": "活性（liveness）指系统为保证进程能取得进展而必须满足的一组性质，无限等待就是活性失败。死锁指两个或多个进程无限等待只能由其中某个等待进程引起的事件：设信号量 S 与 Q 初值均为 1，P0 执行 wait(S) 后 wait(Q)，P1 执行 wait(Q) 后 wait(S)，则 P0 等 P1 的 signal(Q)、P1 等 P0 的 signal(S)，而这两个 signal 永远不会执行，于是双方死锁。其他活性问题还有饥饿（进程可能永远不会从挂起的信号量队列中被移出）和优先级反转（低优先级进程持有高优先级进程需要的锁），后者可用优先级继承协议解决。",
          "en": "Liveness refers to a set of properties that a system must satisfy to ensure that processes make progress, and indefinite waiting is an example of a liveness failure. Deadlock occurs when two or more processes wait indefinitely for an event that can be caused only by one of the waiting processes: with semaphores S and Q both initialised to 1, P0 executes wait(S) then wait(Q) while P1 executes wait(Q) then wait(S), so P0 waits for P1's signal(Q) and P1 waits for P0's signal(S), and since those signal operations will never be executed the two are deadlocked. Other liveness problems are starvation, where a process may never be removed from the semaphore queue in which it is suspended, and priority inversion, where a lower-priority process holds a lock needed by a higher-priority process, which is solved by a priority-inheritance protocol.",
          "ms": "Keaktifan merujuk kepada set sifat yang mesti dipenuhi sistem untuk memastikan proses membuat kemajuan, dan penantian tanpa had ialah contoh kegagalan keaktifan. Kebuntuan berlaku apabila dua atau lebih proses menunggu tanpa had untuk peristiwa yang hanya boleh disebabkan oleh salah satu proses yang menunggu itu: dengan semafor S dan Q kedua-duanya dimulakan kepada 1, P0 melaksanakan wait(S) kemudian wait(Q) manakala P1 melaksanakan wait(Q) kemudian wait(S), jadi P0 menunggu signal(Q) daripada P1 dan P1 menunggu signal(S) daripada P0, dan kerana operasi signal itu tidak akan dilaksanakan, kedua-duanya buntu. Masalah keaktifan lain ialah kebuluran, iaitu proses mungkin tidak pernah dikeluarkan daripada baris gilir semafor tempat ia digantung, dan penyongsangan keutamaan, iaitu proses berkeutamaan rendah memegang kunci yang diperlukan proses berkeutamaan tinggi, yang diselesaikan melalui protokol pewarisan keutamaan."
        }
      ],
      "terms": [
        {
          "en": "Race Condition",
          "zh": "竞态条件",
          "ms": "Keadaan Perlumbaan",
          "def": {
            "zh": "多个进程并发访问并操作共享数据，结果取决于访问发生的顺序，例如两个 fork() 可能取得同一个 pid。",
            "en": "A situation in which several processes access and manipulate shared data concurrently so that the outcome depends on the order of access, as when two fork() calls could obtain the same pid.",
            "ms": "Keadaan apabila beberapa proses mengakses dan memanipulasi data dikongsi secara serentak sehingga hasilnya bergantung pada urutan akses, seperti apabila dua panggilan fork() boleh memperoleh pid yang sama."
          }
        },
        {
          "en": "Critical Section",
          "zh": "临界区",
          "ms": "Bahagian Kritikal",
          "def": {
            "zh": "进程中可能修改公共变量、更新表格或写文件的代码段，同一时刻只能有一个进程在其中执行。",
            "en": "The segment of code in which a process may change common variables, update a table or write a file, in which only one process may execute at a time.",
            "ms": "Segmen kod yang prosesnya mungkin mengubah pemboleh ubah umum, mengemas kini jadual atau menulis fail, dan hanya satu proses boleh melaksanakan di dalamnya pada satu masa."
          }
        },
        {
          "en": "Mutual Exclusion",
          "zh": "互斥",
          "ms": "Pengecualian Bersama",
          "def": {
            "zh": "若进程 Pi 正在其临界区执行，则其他进程不能同时在各自的临界区执行。",
            "en": "If process Pi is executing in its critical section then no other process can be executing in its critical section.",
            "ms": "Jika proses Pi melaksanakan dalam bahagian kritikalnya, tiada proses lain boleh melaksanakan dalam bahagian kritikalnya."
          }
        },
        {
          "en": "Progress",
          "zh": "前进（进展）",
          "ms": "Kemajuan",
          "def": {
            "zh": "若没有进程在临界区而有些进程想进入，选择下一个进入者的过程不能被无限推迟。",
            "en": "If no process is executing in its critical section and some processes wish to enter, the selection of the next process to enter cannot be postponed indefinitely.",
            "ms": "Jika tiada proses dalam bahagian kritikal dan ada proses yang ingin masuk, pemilihan proses seterusnya tidak boleh ditangguhkan tanpa had."
          }
        },
        {
          "en": "Bounded Waiting",
          "zh": "有限等待",
          "ms": "Penantian Terbatas",
          "def": {
            "zh": "进程发出进入请求后，在请求被批准前允许其他进程进入临界区的次数必须有界。",
            "en": "A bound must exist on the number of times other processes may enter their critical sections after a process requests entry and before that request is granted.",
            "ms": "Mesti wujud had bilangan kali proses lain boleh masuk ke bahagian kritikal selepas sesuatu proses meminta masuk dan sebelum permintaan itu diluluskan."
          }
        },
        {
          "en": "Peterson's Solution",
          "zh": "Peterson 解法",
          "ms": "Penyelesaian Peterson",
          "def": {
            "zh": "用 turn 与 flag[2] 两个共享变量的双进程软件解法，可满足三个要求，但在会重排序指令的现代体系结构上不保证有效。",
            "en": "A two-process software solution using the shared variables turn and flag[2] that satisfies all three requirements but is not guaranteed to work on modern architectures that reorder instructions.",
            "ms": "Penyelesaian perisian dua proses menggunakan pemboleh ubah dikongsi turn dan flag[2] yang memenuhi ketiga-tiga keperluan tetapi tidak dijamin berkesan pada seni bina moden yang menyusun semula arahan."
          }
        },
        {
          "en": "Memory Barrier",
          "zh": "内存屏障",
          "ms": "Penghadang Ingatan",
          "def": {
            "zh": "强制把内存中的改动传播给所有其他处理器的指令，确保之前的装入与存储完成后才执行后续操作。",
            "en": "An instruction that forces any change in memory to be propagated to all other processors, ensuring all loads and stores complete before subsequent ones are performed.",
            "ms": "Arahan yang memaksa sebarang perubahan ingatan disebarkan kepada semua pemproses lain, memastikan semua muatan dan simpanan selesai sebelum operasi berikutnya dilakukan."
          }
        },
        {
          "en": "Test-and-Set",
          "zh": "测试并设置指令",
          "ms": "Arahan Test-and-Set",
          "def": {
            "zh": "原子执行的硬件指令，返回目标变量的原始值并把目标置为 true，可用来实现锁。",
            "en": "A hardware instruction executed atomically that returns the original value of its target and sets the target to true, usable to implement a lock.",
            "ms": "Arahan perkakasan yang dilaksanakan secara atom yang memulangkan nilai asal sasarannya dan menetapkan sasaran kepada true, boleh digunakan untuk melaksanakan kunci."
          }
        },
        {
          "en": "Compare-and-Swap",
          "zh": "比较并交换指令",
          "ms": "Arahan Compare-and-Swap",
          "def": {
            "zh": "原子指令，返回 value 的原值，并仅在 *value == expected 时把 value 设为 new_value。",
            "en": "An atomic instruction that returns the original value of value and sets value to new_value only if *value equals expected.",
            "ms": "Arahan atom yang memulangkan nilai asal value dan menetapkan value kepada new_value hanya jika *value sama dengan expected."
          }
        },
        {
          "en": "Atomic Variable",
          "zh": "原子变量",
          "ms": "Pemboleh Ubah Atom",
          "def": {
            "zh": "对整数、布尔等基本类型提供不可中断更新的同步工具，通常以 compare_and_swap 等指令为构件。",
            "en": "A synchronisation tool providing uninterruptible updates on basic data types such as integers and booleans, typically built from instructions such as compare_and_swap.",
            "ms": "Alat penyegerakan yang memberikan kemas kini tanpa gangguan pada jenis data asas seperti integer dan boolean, biasanya dibina daripada arahan seperti compare_and_swap."
          }
        },
        {
          "en": "Mutex Lock / Spinlock",
          "zh": "互斥锁 / 自旋锁",
          "ms": "Kunci Mutex / Spinlock",
          "def": {
            "zh": "用一个布尔变量表示锁是否可用的最简单同步工具，用 acquire() 与 release() 保护临界区；因需要忙等待所以称为自旋锁。",
            "en": "The simplest synchronisation tool, using a boolean variable to indicate whether a lock is available and acquire() and release() to protect a critical section; the busy waiting it requires makes it a spinlock.",
            "ms": "Alat penyegerakan paling mudah, menggunakan pemboleh ubah boolean untuk menunjukkan kunci tersedia dan acquire() serta release() untuk melindungi bahagian kritikal; penantian sibuk yang diperlukan menjadikannya spinlock."
          }
        },
        {
          "en": "Semaphore",
          "zh": "信号量",
          "ms": "Semafor",
          "def": {
            "zh": "只能由原子的 wait() 与 signal() 操作的整数变量；计数信号量取值不受限，二元信号量取值仅为 0 或 1。",
            "en": "An integer variable accessible only through the atomic operations wait() and signal(); a counting semaphore has an unrestricted domain while a binary semaphore ranges only from 0 to 1.",
            "ms": "Pemboleh ubah integer yang hanya boleh diakses melalui operasi atom wait() dan signal(); semafor pengiraan tidak terhad manakala semafor binari hanya antara 0 dan 1."
          }
        },
        {
          "en": "Monitor",
          "zh": "监视器",
          "ms": "Monitor",
          "def": {
            "zh": "高级同步抽象，内部变量只能由过程内代码访问，任一时刻只有一个进程能在其中活动。",
            "en": "A high-level synchronisation abstraction whose internal variables are accessible only by code inside its procedures and in which only one process may be active at a time.",
            "ms": "Abstraksi penyegerakan peringkat tinggi yang pemboleh ubah dalamannya hanya boleh diakses oleh kod dalam prosedurnya dan hanya satu proses boleh aktif pada satu masa."
          }
        },
        {
          "en": "Condition Variable",
          "zh": "条件变量",
          "ms": "Pemboleh Ubah Syarat",
          "def": {
            "zh": "监视器内用于等待的变量：x.wait() 挂起调用进程直到 x.signal()，x.signal() 恢复一个等待的进程。",
            "en": "A variable used for waiting inside a monitor: x.wait() suspends the caller until x.signal(), and x.signal() resumes one waiting process.",
            "ms": "Pemboleh ubah untuk menunggu dalam monitor: x.wait() menggantung pemanggil sehingga x.signal(), dan x.signal() menyambung semula satu proses yang menunggu."
          }
        },
        {
          "en": "Liveness / Priority Inversion",
          "zh": "活性 / 优先级反转",
          "ms": "Keaktifan / Penyongsangan Keutamaan",
          "def": {
            "zh": "活性是系统为保证进程能取得进展必须满足的性质；优先级反转是低优先级进程持有高优先级进程所需锁的调度问题，用优先级继承协议解决。",
            "en": "Liveness is the set of properties a system must satisfy so that processes make progress; priority inversion is the scheduling problem in which a lower-priority process holds a lock needed by a higher-priority one, solved by a priority-inheritance protocol.",
            "ms": "Keaktifan ialah set sifat yang mesti dipenuhi sistem supaya proses membuat kemajuan; penyongsangan keutamaan ialah masalah penjadualan apabila proses berkeutamaan rendah memegang kunci yang diperlukan proses berkeutamaan tinggi, diselesaikan melalui protokol pewarisan keutamaan."
          }
        }
      ],
      "diagrams": [
        {
          "type": "flow",
          "dir": "v",
          "title": {
            "zh": "进程进入临界区的通用结构",
            "en": "General Structure of a Process Entering Its Critical Section",
            "ms": "Struktur Umum Proses Memasuki Bahagian Kritikal"
          },
          "caption": {
            "zh": "进入区请求许可并在必要时忙等；临界区中修改共享数据；退出区释放许可；其余时间在剩余区执行。",
            "en": "The entry section requests permission and busy waits if needed, the critical section modifies shared data, the exit section releases permission, and the rest of the time is spent in the remainder section.",
            "ms": "Bahagian masuk meminta kebenaran dan menunggu sibuk jika perlu, bahagian kritikal mengubah data dikongsi, bahagian keluar melepaskan kebenaran, dan masa selebihnya dihabiskan dalam bahagian baki."
          },
          "steps": [
            {
              "label": {
                "zh": "进入区",
                "en": "Entry Section",
                "ms": "Bahagian Masuk"
              },
              "note": {
                "zh": "请求进入临界区的许可",
                "en": "Request permission to enter",
                "ms": "Meminta kebenaran untuk masuk"
              }
            },
            {
              "label": {
                "zh": "临界区",
                "en": "Critical Section",
                "ms": "Bahagian Kritikal"
              },
              "note": {
                "zh": "修改公共变量、更新表格、写文件",
                "en": "Change common variables, update tables, write files",
                "ms": "Mengubah pemboleh ubah umum, mengemas kini jadual, menulis fail"
              }
            },
            {
              "label": {
                "zh": "退出区",
                "en": "Exit Section",
                "ms": "Bahagian Keluar"
              },
              "note": {
                "zh": "释放许可并唤醒等待者",
                "en": "Release permission and wake a waiter",
                "ms": "Melepaskan kebenaran dan membangunkan yang menunggu"
              }
            },
            {
              "label": {
                "zh": "剩余区",
                "en": "Remainder Section",
                "ms": "Bahagian Baki"
              },
              "note": {
                "zh": "其余代码，不需要互斥",
                "en": "The rest of the code, no mutual exclusion needed",
                "ms": "Kod selebihnya, tiada pengecualian bersama diperlukan"
              }
            }
          ]
        },
        {
          "type": "compare",
          "title": {
            "zh": "三种同步工具的对比",
            "en": "Comparison of Three Synchronisation Tools",
            "ms": "Perbandingan Tiga Alat Penyegerakan"
          },
          "cols": [
            {
              "head": {
                "zh": "互斥锁",
                "en": "Mutex Lock",
                "ms": "Kunci Mutex"
              },
              "items": [
                {
                  "label": {
                    "zh": "布尔变量表示锁是否可用",
                    "en": "A boolean shows whether the lock is available",
                    "ms": "Boolean menunjukkan kunci tersedia"
                  }
                },
                {
                  "label": {
                    "zh": "acquire() / release() 必须原子",
                    "en": "acquire() and release() must be atomic",
                    "ms": "acquire() dan release() mesti atom"
                  }
                },
                {
                  "label": {
                    "zh": "需要忙等待，故称自旋锁",
                    "en": "Requires busy waiting, hence a spinlock",
                    "ms": "Memerlukan penantian sibuk, maka spinlock"
                  }
                }
              ]
            },
            {
              "head": {
                "zh": "信号量",
                "en": "Semaphore",
                "ms": "Semafor"
              },
              "items": [
                {
                  "label": {
                    "zh": "整数变量，wait() / signal()",
                    "en": "Integer variable with wait() and signal()",
                    "ms": "Pemboleh ubah integer dengan wait() dan signal()"
                  }
                },
                {
                  "label": {
                    "zh": "计数或二元，后者等同互斥锁",
                    "en": "Counting or binary, the latter equal to a mutex",
                    "ms": "Pengiraan atau binari, yang kedua sama dengan mutex"
                  }
                },
                {
                  "label": {
                    "zh": "可用等待队列 block/wakeup 避免忙等",
                    "en": "A waiting queue with block and wakeup avoids busy waiting",
                    "ms": "Baris gilir menunggu dengan block dan wakeup mengelakkan penantian sibuk"
                  }
                }
              ]
            },
            {
              "head": {
                "zh": "监视器",
                "en": "Monitor",
                "ms": "Monitor"
              },
              "items": [
                {
                  "label": {
                    "zh": "高级抽象数据类型",
                    "en": "A high-level abstract data type",
                    "ms": "Jenis data abstrak peringkat tinggi"
                  }
                },
                {
                  "label": {
                    "zh": "任一时刻只有一个进程可活动",
                    "en": "Only one process may be active at a time",
                    "ms": "Hanya satu proses boleh aktif pada satu masa"
                  }
                },
                {
                  "label": {
                    "zh": "用条件变量 x.wait() / x.signal()",
                    "en": "Uses condition variables x.wait() and x.signal()",
                    "ms": "Menggunakan pemboleh ubah syarat x.wait() dan x.signal()"
                  }
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必背：临界区问题解法的三个要求——互斥、前进、有限等待。考试常给出一段代码或一个算法（如只用 turn 的软件解法），让你判断它满足哪几条要求并说明理由。",
          "en": "Memorise the three requirements of a solution to the critical-section problem: mutual exclusion, progress and bounded waiting. Exams often give a piece of code or an algorithm such as the turn-only software solution and ask which requirements it satisfies and why.",
          "ms": "Hafal tiga keperluan penyelesaian masalah bahagian kritikal: pengecualian bersama, kemajuan dan penantian terbatas. Peperiksaan sering memberikan sekeping kod atau algoritma seperti penyelesaian perisian yang hanya menggunakan turn dan meminta anda menentukan keperluan mana yang dipenuhinya serta sebabnya."
        },
        {
          "zh": "常考信号量的两个经典用法：用初值为 1 的 mutex 实现互斥（wait(mutex) … CS … signal(mutex)），用初值为 0 的 synch 实现语句先后顺序（先 signal 后 wait），要能写出代码并说明初值为什么是 1 和 0。",
          "en": "Two classic semaphore uses are frequently examined: mutual exclusion with a mutex initialised to 1, written as wait(mutex) around the critical section and signal(mutex) after it, and enforcing ordering with a synch semaphore initialised to 0, where one process signals and the other waits; be ready to write the code and explain why the initial values are 1 and 0.",
          "ms": "Dua penggunaan semafor klasik sering diuji: pengecualian bersama dengan mutex yang dimulakan kepada 1, ditulis wait(mutex) mengelilingi bahagian kritikal dan signal(mutex) selepasnya, serta menguatkuasakan urutan dengan semafor synch yang dimulakan kepada 0, iaitu satu proses memberikan signal dan satu lagi menunggu; bersedia menulis kod dan menerangkan mengapa nilai awal ialah 1 dan 0."
        },
        {
          "zh": "易错点：把“忙等待”当成万能的缺点。信号量的 wait 忙等版本确实浪费 CPU，但用等待队列 + block/wakeup 的实现可以避免忙等；互斥锁的忙等在某些情况下反而是优点，因为省去了上下文切换。",
          "en": "A common mistake is treating busy waiting as an unconditional drawback. The busy-wait version of semaphore wait does waste CPU, but the implementation with a waiting queue plus block and wakeup avoids it, and for a mutex lock busy waiting can even be an advantage because it avoids a context switch.",
          "ms": "Kesilapan biasa ialah menganggap penantian sibuk sebagai kelemahan mutlak. Versi menunggu sibuk bagi wait semafor memang membazir CPU, tetapi pelaksanaan dengan baris gilir menunggu serta block dan wakeup mengelakkannya, dan bagi kunci mutex penantian sibuk malah boleh menjadi kelebihan kerana mengelakkan pertukaran konteks."
        },
        {
          "zh": "会考死锁与优先级反转：两个信号量 S、Q 初值为 1 时，P0 按 wait(S)、wait(Q) 顺序而 P1 按 wait(Q)、wait(S) 顺序就会死锁；优先级反转是低优先级进程持有高优先级进程所需的锁，用优先级继承协议解决。",
          "en": "Deadlock and priority inversion may be examined: with semaphores S and Q both initialised to 1, P0 waiting on S then Q while P1 waits on Q then S causes deadlock; priority inversion occurs when a lower-priority process holds a lock needed by a higher-priority process and is solved by a priority-inheritance protocol.",
          "ms": "Kebuntuan dan penyongsangan keutamaan mungkin diuji: dengan semafor S dan Q kedua-duanya dimulakan kepada 1, P0 menunggu S kemudian Q manakala P1 menunggu Q kemudian S menyebabkan kebuntuan; penyongsangan keutamaan berlaku apabila proses berkeutamaan rendah memegang kunci yang diperlukan proses berkeutamaan tinggi dan diselesaikan melalui protokol pewarisan keutamaan."
        }
      ],
      "mnemonic": {
        "zh": "三要求：互斥、前进、有限等待；三工具：自旋锁、信号量、监视器；两操作：wait/signal 与 acquire/release。",
        "en": "Three requirements: mutual exclusion, progress, bounded waiting. Three tools: spinlock, semaphore, monitor. Two operation pairs: wait and signal, acquire and release.",
        "ms": "Tiga keperluan: pengecualian bersama, kemajuan, penantian terbatas. Tiga alat: spinlock, semafor, monitor. Dua pasangan operasi: wait dan signal, acquire dan release."
      }
    },
    {
      "id": "os-06",
      "num": 6,
      "title": {
        "zh": "死锁",
        "en": "Deadlocks",
        "ms": "Buntu Lesu"
      },
      "file": "os/CHAPTER 6 DDWD 2663.pptx",
      "pages": 45,
      "summary": {
        "zh": "本章讨论进程因竞争资源而互相等待、永远无法继续的死锁问题。系统由若干资源类型构成，每个类型有若干个实例，进程按请求、使用、释放的顺序使用资源；若信号量 S1 与 S2 初值都为 1，线程 T1 依次 wait(s1)、wait(s2) 而 T2 依次 wait(s2)、wait(s1)，两者就会死锁。死锁的产生需要同时满足互斥、持有并等待、不可抢占和循环等待四个必要条件，可用资源分配图与等待图来分析。处理死锁的方法有预防（破坏四个条件之一）、避免（安全状态与银行家算法）、检测与恢复，以及忽略问题，本章对每种方法都给出判断步骤与例题。",
        "en": "This chapter examines deadlock, the situation in which processes wait for one another's resources and can never proceed. A system consists of resource types, each with some number of instances, and a process uses a resource by requesting, using and releasing it; if semaphores S1 and S2 are both initialised to 1 and thread T1 executes wait(s1) then wait(s2) while T2 executes wait(s2) then wait(s1), the two threads deadlock. Deadlock requires four conditions to hold simultaneously, namely mutual exclusion, hold and wait, no preemption and circular wait, and it can be analysed with resource-allocation graphs and wait-for graphs. The approaches to handling deadlock are prevention by invalidating one of the four conditions, avoidance through safe states and the banker's algorithm, detection with recovery, and ignoring the problem, and the chapter gives the decision procedure and worked examples for each.",
        "ms": "Bab ini mengkaji buntu lesu, iaitu keadaan apabila proses saling menunggu sumber sehingga tidak dapat meneruskan. Sesuatu sistem terdiri daripada jenis sumber, masing-masing dengan beberapa instans, dan proses menggunakan sumber dengan meminta, menggunakan dan melepaskannya; jika semafor S1 dan S2 kedua-duanya dimulakan kepada 1 dan benang T1 melaksanakan wait(s1) kemudian wait(s2) manakala T2 melaksanakan wait(s2) kemudian wait(s1), kedua-dua benang itu buntu lesu. Buntu lesu memerlukan empat syarat dipenuhi serentak, iaitu pengecualian bersama, memegang dan menunggu, tiada pengambilalihan dan penantian berlingkar, dan ia boleh dianalisis dengan graf peruntukan sumber serta graf menunggu. Pendekatan menangani buntu lesu ialah pencegahan dengan membatalkan salah satu daripada empat syarat, pengelakan melalui keadaan selamat dan algoritma jurubank, pengesanan dengan pemulihan, serta mengabaikan masalah itu, dan bab ini memberikan prosedur keputusan serta contoh kerja bagi setiap pendekatan."
      },
      "points": [
        {
          "zh": "系统由资源构成，资源类型为 R1, R2, …, Rm（如 CPU 周期、内存空间、I/O 设备），每个资源类型 Ri 有 Wi 个实例；进程按请求（request）、使用（use）、释放（release）的顺序使用资源。若信号量 S1 与 S2 初值都为 1，线程 T1 执行 wait(s1) 后 wait(s2)，T2 执行 wait(s2) 后 wait(s1)，T1 持有 s1 等 s2、T2 持有 s2 等 s1，两者互相等待而死锁。",
          "en": "A system consists of resources, with resource types R1, R2, ..., Rm such as CPU cycles, memory space and I/O devices, and each resource type Ri has Wi instances; a process uses a resource by requesting it, using it and releasing it. If semaphores S1 and S2 are both initialised to 1, and thread T1 executes wait(s1) followed by wait(s2) while T2 executes wait(s2) followed by wait(s1), then T1 holds s1 and waits for s2 while T2 holds s2 and waits for s1, so the two threads deadlock.",
          "ms": "Sesuatu sistem terdiri daripada sumber, dengan jenis sumber R1, R2, ..., Rm seperti kitaran CPU, ruang ingatan dan peranti I/O, dan setiap jenis sumber Ri mempunyai Wi instans; proses menggunakan sumber dengan memintanya, menggunakannya dan melepaskannya. Jika semafor S1 dan S2 kedua-duanya dimulakan kepada 1, dan benang T1 melaksanakan wait(s1) diikuti wait(s2) manakala T2 melaksanakan wait(s2) diikuti wait(s1), maka T1 memegang s1 dan menunggu s2 sementara T2 memegang s2 dan menunggu s1, jadi kedua-dua benang buntu lesu."
        },
        {
          "zh": "死锁的产生必须同时满足四个必要条件：互斥（同一时刻只有一个线程能使用资源）、持有并等待（一个线程至少持有一个资源，又在等待获取被其他线程持有的其他资源）、不可抢占（资源只能由持有它的线程在完成任务后自愿释放）、循环等待（存在等待线程集合 {T0, T1, …, Tn}，T0 等待 T1 持有的资源，T1 等待 T2 持有的资源，……，Tn 等待 T0 持有的资源）。",
          "en": "Deadlock can arise only if four conditions hold simultaneously: mutual exclusion, so that only one thread at a time can use a resource; hold and wait, so that a thread holding at least one resource is waiting to acquire additional resources held by other threads; no preemption, so that a resource can be released only voluntarily by the thread holding it after that thread has completed its task; and circular wait, where there exists a set {T0, T1, ..., Tn} of waiting threads such that T0 waits for a resource held by T1, T1 waits for a resource held by T2, and so on until Tn waits for a resource held by T0.",
          "ms": "Buntu lesu hanya boleh berlaku jika empat syarat dipenuhi serentak: pengecualian bersama, iaitu hanya satu benang pada satu masa boleh menggunakan sesuatu sumber; memegang dan menunggu, iaitu benang yang memegang sekurang-kurangnya satu sumber menunggu untuk memperoleh sumber tambahan yang dipegang benang lain; tiada pengambilalihan, iaitu sumber hanya boleh dilepaskan secara sukarela oleh benang yang memegangnya selepas benang itu menyelesaikan tugasnya; dan penantian berlingkar, iaitu wujud set benang menunggu {T0, T1, ..., Tn} dengan T0 menunggu sumber yang dipegang T1, T1 menunggu sumber yang dipegang T2, dan seterusnya sehingga Tn menunggu sumber yang dipegang T0."
        },
        {
          "zh": "资源分配图由顶点集 V 与边集 E 组成：V 分为线程集合 T = {T1, …, Tn} 与资源类型集合 R = {R1, …, Rm}；请求边是有向边 Ti → Rj，表示线程 Ti 在等待资源 Rj；分配边是有向边 Rj → Ti，表示资源 Rj 的一个实例已分配给 Ti。基本结论是：图中没有环就没有死锁；图中有环时，若每个资源类型只有一个实例就一定死锁，若有多个实例则可能死锁。",
          "en": "A resource-allocation graph consists of a set of vertices V and a set of edges E, where V is partitioned into the set of threads T = {T1, ..., Tn} and the set of resource types R = {R1, ..., Rm}; a request edge is the directed edge Ti to Rj meaning that thread Ti is waiting for resource Rj, and an assignment edge is the directed edge Rj to Ti meaning that an instance of Rj has been allocated to Ti. The basic facts are that if the graph contains no cycle there is no deadlock, and that if it contains a cycle then there is deadlock when there is only one instance per resource type, whereas with several instances per resource type there is only the possibility of deadlock.",
          "ms": "Graf peruntukan sumber terdiri daripada set bucu V dan set tepi E, dengan V terbahagi kepada set benang T = {T1, ..., Tn} dan set jenis sumber R = {R1, ..., Rm}; tepi permintaan ialah tepi berarah Ti ke Rj yang bermaksud benang Ti menunggu sumber Rj, dan tepi peruntukan ialah tepi berarah Rj ke Ti yang bermaksud satu instans Rj telah diperuntukkan kepada Ti. Fakta asasnya ialah jika graf tidak mengandungi kitaran maka tiada buntu lesu, dan jika ia mengandungi kitaran maka buntu lesu berlaku apabila hanya ada satu instans bagi setiap jenis sumber, manakala dengan beberapa instans bagi setiap jenis sumber hanya terdapat kemungkinan buntu lesu."
        },
        {
          "zh": "处理死锁有四类方法：一是保证系统永不进入死锁状态，包括死锁预防（破坏四个必要条件）和死锁避免（用先验信息动态检查）；二是允许系统进入死锁状态再恢复（检测加恢复）；三是忽略问题，假装死锁永远不会发生，这也是多数操作系统采用的做法。",
          "en": "There are four approaches to handling deadlock: first, ensuring that the system will never enter a deadlock state, by deadlock prevention, which invalidates one of the four necessary conditions, or by deadlock avoidance, which uses a priori information and checks the state dynamically; second, allowing the system to enter a deadlock state and then recovering from it, through detection and recovery; and third, ignoring the problem and pretending that deadlocks never occur, which is the approach most operating systems take.",
          "ms": "Terdapat empat pendekatan untuk menangani buntu lesu: pertama, memastikan sistem tidak pernah memasuki keadaan buntu lesu, sama ada melalui pencegahan buntu lesu yang membatalkan salah satu daripada empat syarat, atau melalui pengelakan buntu lesu yang menggunakan maklumat priori dan memeriksa keadaan secara dinamik; kedua, membenarkan sistem memasuki keadaan buntu lesu dan kemudian memulihkannya melalui pengesanan dan pemulihan; dan ketiga, mengabaikan masalah itu dan berpura-pura buntu lesu tidak pernah berlaku, iaitu pendekatan yang diambil oleh kebanyakan sistem pengendalian."
        },
        {
          "zh": "死锁预防通过破坏四个必要条件之一来实现：互斥条件对可共享资源（如只读文件）并不需要，对不可共享资源必须成立；破坏持有并等待可要求线程在执行前一次性申请并获得全部资源，或只允许在没有任何资源时申请资源，代价是资源利用率低且可能饥饿；破坏不可抢占可在持有资源又申请不到新资源时释放当前持有的全部资源，被抢占的资源加入该线程的等待列表，线程要重新获得旧资源和新资源后才能重新开始；破坏循环等待可给所有资源类型规定一个全序，要求每个线程按序号递增的顺序申请资源，这是最常用的做法。",
          "en": "Deadlock prevention invalidates one of the four necessary conditions: the mutual exclusion condition is not required for sharable resources such as read-only files but must hold for non-sharable ones; hold and wait can be invalidated by requiring each thread to request and be allocated all its resources before it begins execution, or by allowing a thread to request resources only when it holds none, at the cost of low resource utilisation and possible starvation; no preemption can be invalidated by requiring that if a process holding resources requests another that cannot be immediately allocated, all resources it currently holds are released, with the preempted resources added to the list of resources for which the thread is waiting and the thread restarted only when it can regain its old resources together with the new ones; and circular wait is invalidated by imposing a total ordering of all resource types and requiring every thread to request resources in increasing order of enumeration, which is the most common approach.",
          "ms": "Pencegahan buntu lesu membatalkan salah satu daripada empat syarat: syarat pengecualian bersama tidak diperlukan bagi sumber boleh dikongsi seperti fail baca sahaja tetapi mesti dipatuhi bagi sumber tidak boleh dikongsi; memegang dan menunggu boleh dibatalkan dengan mewajibkan setiap benang meminta dan memperoleh semua sumbernya sebelum mula melaksanakan, atau dengan membenarkan benang meminta sumber hanya apabila ia tidak memegang apa-apa, dengan kos penggunaan sumber yang rendah dan kemungkinan kebuluran; tiada pengambilalihan boleh dibatalkan dengan menetapkan bahawa jika proses yang memegang sumber meminta sumber lain yang tidak dapat diperuntukkan serta-merta, semua sumber yang dipegangnya dilepaskan, sumber yang diambil alih itu ditambah kepada senarai sumber yang ditunggu benang tersebut dan benang itu dimulakan semula hanya apabila ia dapat memperoleh semula sumber lamanya bersama sumber baharu; dan penantian berlingkar dibatalkan dengan menetapkan susunan menyeluruh bagi semua jenis sumber serta mewajibkan setiap benang meminta sumber mengikut urutan menaik, iaitu pendekatan yang paling biasa."
        },
        {
          "zh": "死锁避免要求每个线程事先声明它可能需要的每种资源的最大数量，算法动态检查资源分配状态，确保永远不会出现循环等待。系统处于安全状态是指存在一个包含系统中所有线程的安全序列 <T1, T2, …, Tn>，使得每个 Ti 仍可申请的资源能被当前可用资源加上所有 Tj（j < i）持有的资源满足；若 Ti 所需资源不能立即满足，Ti 可以等到所有 Tj 完成，Tj 完成后 Ti 就能取得资源、执行、归还并终止。安全状态一定没有死锁，不安全状态则可能死锁，避免算法的目标就是让系统永不进入不安全状态。只有一个实例的资源类型可用资源分配图方案：声明边 Ti → Rj（虚线）表示线程 Ti 将来可能申请资源 Rj，当线程真正申请时声明边转换为请求边，资源分配给它时请求边转换为分配边，释放时分配边转回声明边；资源必须事先声明。当线程 Ti 申请资源 Rj 时，只有当把请求边转换成分配边不会在资源分配图中形成环，请求才能被批准。",
          "en": "Deadlock avoidance requires each thread to declare a priori the maximum number of resources of each type that it may need, and the algorithm dynamically examines the resource-allocation state to ensure that a circular-wait condition can never arise. A system is in a safe state if there exists a safe sequence <T1, T2, ..., Tn> of all the threads such that for each Ti the resources Ti can still request can be satisfied by the currently available resources plus the resources held by all Tj with j less than i; if Ti's needs are not immediately available it can wait until all Tj have finished, after which Ti can obtain the needed resources, execute, return them and terminate. A safe state cannot be deadlocked, whereas an unsafe state may lead to deadlock, so avoidance simply ensures that the system never enters an unsafe state. For a resource type with a single instance the resource-allocation graph scheme is used: a claim edge Ti to Rj drawn as a dashed line indicates that thread Ti may request resource Rj in the future, the claim edge converts to a request edge when the thread actually requests the resource, the request edge converts to an assignment edge when the resource is allocated, and the assignment edge reconverts to a claim edge when the resource is released, so resources must be claimed a priori. When thread Ti requests resource Rj, the request can be granted only if converting the request edge to an assignment edge does not result in the formation of a cycle in the graph.",
          "ms": "Pengelakan buntu lesu mewajibkan setiap benang mengisytiharkan terlebih dahulu bilangan maksimum setiap jenis sumber yang mungkin diperlukannya, dan algoritma itu memeriksa keadaan peruntukan sumber secara dinamik bagi memastikan keadaan penantian berlingkar tidak pernah berlaku. Sesuatu sistem berada dalam keadaan selamat jika wujud jujukan selamat <T1, T2, ..., Tn> bagi semua benangnya sehingga bagi setiap Ti, sumber yang masih boleh diminta Ti dapat dipenuhi oleh sumber yang tersedia sekarang ditambah sumber yang dipegang semua Tj dengan j kurang daripada i; jika keperluan Ti tidak dapat dipenuhi serta-merta, Ti boleh menunggu sehingga semua Tj selesai, selepas itu Ti boleh memperoleh sumber yang diperlukan, melaksanakan, memulangkannya dan tamat. Keadaan selamat tidak boleh buntu lesu, manakala keadaan tidak selamat mungkin membawa kepada buntu lesu, jadi pengelakan hanya memastikan sistem tidak pernah memasuki keadaan tidak selamat. Bagi jenis sumber yang hanya mempunyai satu instans, skema graf peruntukan sumber digunakan: tepi tuntutan Ti ke Rj yang dilukis sebagai garis putus-putus menunjukkan benang Ti mungkin meminta sumber Rj pada masa hadapan, tepi tuntutan bertukar menjadi tepi permintaan apabila benang benar-benar meminta sumber itu, tepi permintaan bertukar menjadi tepi peruntukan apabila sumber diperuntukkan, dan tepi peruntukan bertukar kembali menjadi tepi tuntutan apabila sumber dilepaskan, jadi sumber mesti dituntut terlebih dahulu. Apabila benang Ti meminta sumber Rj, permintaan itu hanya boleh diluluskan jika penukaran tepi permintaan kepada tepi peruntukan tidak membentuk kitaran dalam graf."
        },
        {
          "zh": "银行家算法用于有多个实例的资源类型，数据结构有四个：Available（长度为 m 的向量，Available[j] = k 表示资源类型 Rj 还有 k 个可用实例）、Max（n × m 矩阵，Max[i,j] = k 表示进程 Ti 最多会申请 k 个 Rj 实例）、Allocation（n × m 矩阵，表示 Ti 当前已分配到的实例数）、Need（n × m 矩阵，Need[i,j] = Max[i,j] − Allocation[i,j]）。安全性算法把 Work 初始化为 Available、Finish[i] 初始化为 false，反复寻找满足 Finish[i] = false 且 Needi ≤ Work 的 i，令 Work = Work + Allocationi、Finish[i] = true，若所有 Finish[i] 都为 true 则系统处于安全状态。资源请求算法先检查 Requesti ≤ Needi（否则报错，因为进程超出了最大需求），再检查 Requesti ≤ Available（否则 Ti 必须等待），然后假装分配（Available = Available − Requesti，Allocationi = Allocationi + Requesti，Needi = Needi − Requesti）并运行安全性算法：安全就真正分配，不安全就让 Ti 等待并恢复原来的资源分配状态。",
          "en": "The banker's algorithm is used when a resource type has multiple instances and uses four data structures: Available, a vector of length m where Available[j] equals k means there are k instances of resource type Rj available; Max, an n by m matrix where Max[i,j] equals k means process Ti may request at most k instances of Rj; Allocation, an n by m matrix where Allocation[i,j] equals k means Ti currently holds k instances of Rj; and Need, an n by m matrix with Need[i,j] = Max[i,j] minus Allocation[i,j]. The safety algorithm initialises Work to Available and Finish[i] to false, repeatedly finds an i for which Finish[i] is false and Needi is less than or equal to Work, sets Work to Work plus Allocationi and Finish[i] to true, and concludes that the system is safe if Finish[i] is true for all i. The resource-request algorithm first checks that Requesti is less than or equal to Needi, raising an error otherwise because the process has exceeded its maximum claim, then that Requesti is less than or equal to Available, otherwise Ti must wait, and then pretends to allocate by setting Available to Available minus Requesti, Allocationi to Allocationi plus Requesti and Needi to Needi minus Requesti and runs the safety algorithm: if the result is safe the resources are allocated, otherwise Ti must wait and the old resource-allocation state is restored.",
          "ms": "Algoritma jurubank digunakan apabila sesuatu jenis sumber mempunyai beberapa instans dan menggunakan empat struktur data: Available, iaitu vektor panjang m dengan Available[j] sama dengan k bermaksud terdapat k instans jenis sumber Rj yang tersedia; Max, iaitu matriks n kali m dengan Max[i,j] sama dengan k bermaksud proses Ti boleh meminta paling banyak k instans Rj; Allocation, iaitu matriks n kali m dengan Allocation[i,j] sama dengan k bermaksud Ti kini memegang k instans Rj; dan Need, iaitu matriks n kali m dengan Need[i,j] = Max[i,j] tolak Allocation[i,j]. Algoritma keselamatan memulakan Work kepada Available dan Finish[i] kepada false, berulang kali mencari i yang Finish[i] false dan Needi kurang atau sama dengan Work, menetapkan Work kepada Work tambah Allocationi dan Finish[i] kepada true, serta menyimpulkan sistem selamat jika Finish[i] true bagi semua i. Algoritma permintaan sumber mula-mula memeriksa Requesti kurang atau sama dengan Needi, jika tidak ralat dibangkitkan kerana proses melebihi tuntutan maksimumnya, kemudian Requesti kurang atau sama dengan Available, jika tidak Ti mesti menunggu, dan seterusnya berpura-pura memperuntukkan dengan menetapkan Available kepada Available tolak Requesti, Allocationi kepada Allocationi tambah Requesti dan Needi kepada Needi tolak Requesti lalu menjalankan algoritma keselamatan: jika selamat sumber itu diperuntukkan, jika tidak Ti mesti menunggu dan keadaan peruntukan sumber yang lama dipulihkan."
        },
        {
          "zh": "银行家算法例题：5 个线程 T0–T4，3 种资源 A（10 个实例）、B（5 个）、C（7 个），某时刻 Available = (3,3,2)，Allocation 为 T0(0,1,0)、T1(2,0,0)、T2(3,0,2)、T3(2,1,1)、T4(0,0,2)，Max 为 T0(7,5,3)、T1(3,2,2)、T2(9,0,2)、T3(2,2,2)、T4(4,3,3)，于是 Need = Max − Allocation 为 T0(7,4,3)、T1(1,2,2)、T2(6,0,0)、T3(0,1,1)、T4(4,3,1)，安全序列 <T1, T3, T4, T2, T0> 表明系统处于安全状态；若 T1 请求 (1,0,2)，因 (1,0,2) ≤ Available(3,3,2) 可以试分配，安全性算法给出序列 <T1, T3, T4, T0, T2>，说明该请求可以批准。",
          "en": "Worked example of the banker's algorithm: with five threads T0 to T4 and three resource types A with 10 instances, B with 5 and C with 7, at some time Available is (3,3,2), Allocation is T0 (0,1,0), T1 (2,0,0), T2 (3,0,2), T3 (2,1,1) and T4 (0,0,2), and Max is T0 (7,5,3), T1 (3,2,2), T2 (9,0,2), T3 (2,2,2) and T4 (4,3,3), so Need, which equals Max minus Allocation, is T0 (7,4,3), T1 (1,2,2), T2 (6,0,0), T3 (0,1,1) and T4 (4,3,1); the safe sequence <T1, T3, T4, T2, T0> shows that the system is in a safe state. If T1 then requests (1,0,2), since (1,0,2) is less than or equal to Available (3,3,2) the allocation can be pretended, and the safety algorithm yields the sequence <T1, T3, T4, T0, T2>, so the request can be granted.",
          "ms": "Contoh kerja algoritma jurubank: dengan lima benang T0 hingga T4 dan tiga jenis sumber A dengan 10 instans, B dengan 5 dan C dengan 7, pada suatu masa Available ialah (3,3,2), Allocation ialah T0 (0,1,0), T1 (2,0,0), T2 (3,0,2), T3 (2,1,1) dan T4 (0,0,2), dan Max ialah T0 (7,5,3), T1 (3,2,2), T2 (9,0,2), T3 (2,2,2) dan T4 (4,3,3), maka Need yang sama dengan Max tolak Allocation ialah T0 (7,4,3), T1 (1,2,2), T2 (6,0,0), T3 (0,1,1) dan T4 (4,3,1); jujukan selamat <T1, T3, T4, T2, T0> menunjukkan sistem berada dalam keadaan selamat. Jika T1 kemudian meminta (1,0,2), kerana (1,0,2) kurang atau sama dengan Available (3,3,2) peruntukan boleh dipura-pura, dan algoritma keselamatan menghasilkan jujukan <T1, T3, T4, T0, T2>, jadi permintaan itu boleh diluluskan."
        },
        {
          "zh": "死锁检测：若每种资源类型只有一个实例，可维护等待图（wait-for graph），节点是线程，边 Ti → Tj 表示 Ti 在等待 Tj 持有的资源，周期性调用算法查找图中的环，有环就有死锁，检测算法需要 O(n²) 次操作。若有多个实例，则用 Available、Allocation、Request 三个结构运行检测算法：Work = Available，Allocationi ≠ 0 时 Finish[i] = false，反复找满足 Finish[i] = false 且 Requesti ≤ Work 的 i，令 Work = Work + Allocationi、Finish[i] = true；若仍有 Finish[i] = false，则系统处于死锁状态且那些 Ti 就是死锁的线程，算法需要 O(m × n²) 次操作。例如五线程 T0–T4、资源 A(7)、B(2)、C(6) 的例子中序列 <T0, T2, T3, T1, T4> 可使所有 Finish[i] 为 true；若 T2 再请求一个 C，则 T0 的资源可以回收但不足以满足其他线程，于是 T1、T2、T3、T4 构成死锁。检测算法调用得越频繁越容易发现死锁，但若随意调用，图中可能有多个环而无法判断是哪个线程“引起”了死锁。",
          "en": "For deadlock detection, if each resource type has a single instance a wait-for graph can be maintained in which the nodes are threads and an edge Ti to Tj means that Ti is waiting for a resource held by Tj; an algorithm that searches for a cycle is invoked periodically, and if there is a cycle there is a deadlock, the algorithm requiring an order of n squared operations. If there are several instances, the detection algorithm runs with Available, Allocation and Request: Work is set to Available, Finish[i] is false when Allocationi is nonzero, the algorithm repeatedly finds an i for which Finish[i] is false and Requesti is less than or equal to Work and then sets Work to Work plus Allocationi and Finish[i] to true; if some Finish[i] is still false the system is in a deadlock state and those Ti are the deadlocked threads, the algorithm requiring an order of m times n squared operations. In the example with five threads T0 to T4 and resources A with 7, B with 2 and C with 6 instances, the sequence <T0, T2, T3, T1, T4> makes all Finish[i] true, but if T2 requests one more instance of C, the resources held by T0 can be reclaimed yet are still insufficient to fulfil the other threads' requests, so T1, T2, T3 and T4 are deadlocked. The more often detection is invoked the sooner deadlock is found, but invoking it arbitrarily may leave many cycles in the graph so that it is impossible to tell which thread caused the deadlock.",
          "ms": "Bagi pengesanan buntu lesu, jika setiap jenis sumber mempunyai satu instans, graf menunggu boleh diselenggara dengan nod sebagai benang dan tepi Ti ke Tj bermaksud Ti menunggu sumber yang dipegang Tj; algoritma yang mencari kitaran dipanggil secara berkala, dan jika ada kitaran maka ada buntu lesu, dengan algoritma itu memerlukan urutan n kuasa dua operasi. Jika terdapat beberapa instans, algoritma pengesanan berjalan dengan Available, Allocation dan Request: Work ditetapkan kepada Available, Finish[i] false apabila Allocationi bukan sifar, algoritma mencari i yang Finish[i] false dan Requesti kurang atau sama dengan Work lalu menetapkan Work kepada Work tambah Allocationi dan Finish[i] kepada true; jika masih ada Finish[i] yang false, sistem berada dalam keadaan buntu lesu dan Ti itulah benang yang buntu lesu, dengan algoritma memerlukan urutan m kali n kuasa dua operasi. Dalam contoh lima benang T0 hingga T4 dengan sumber A 7 instans, B 2 dan C 6, jujukan <T0, T2, T3, T1, T4> menjadikan semua Finish[i] true, tetapi jika T2 meminta satu lagi instans C, sumber yang dipegang T0 boleh diambil semula namun masih tidak cukup untuk memenuhi permintaan benang lain, jadi T1, T2, T3 dan T4 buntu lesu. Semakin kerap pengesanan dipanggil semakin awal buntu lesu ditemui, tetapi memanggilnya secara sewenang-wenangnya boleh meninggalkan banyak kitaran dalam graf sehingga mustahil untuk menentukan benang mana yang menyebabkan buntu lesu."
        },
        {
          "zh": "从死锁恢复有两种方式。进程终止：可以中止所有死锁线程，也可以一次中止一个直到死锁环消除；选择中止顺序时可考虑线程优先级、线程已计算的时间和还需多久完成、线程已使用的资源、线程完成所需的资源、需要终止多少线程以及线程是交互式还是批处理。资源抢占：选择代价最小的牺牲者（代价因素可包括持有资源数、进程已消耗的时间），进行回滚（回到某个安全状态并从中重启线程，或完全回滚即中止并重启），并注意同一线程总被选为牺牲者会造成饥饿，可把回滚次数计入代价因素以保证回滚次数有限。",
          "en": "Recovery from deadlock takes two forms. In process termination, either all deadlocked threads are aborted or one process is aborted at a time until the deadlock cycle is eliminated; the order of abortion may be chosen by considering the priority of the thread, how long it has computed and how much longer it needs to complete, the resources it has used, the resources it needs to complete, how many threads will need to be terminated and whether the thread is interactive or batch. In resource preemption, a victim is selected to minimise cost, where cost factors may include the number of resources held and the amount of time the process has consumed, and rollback returns the process to some safe state and restarts it from there, or performs a total rollback by aborting and restarting it; care must be taken because always picking the same thread as victim causes starvation, so the number of rollbacks can be included in the cost factor to guarantee a finite number of rollbacks.",
          "ms": "Pemulihan daripada buntu lesu mengambil dua bentuk. Dalam penamatan proses, sama ada semua benang yang buntu lesu dibatalkan atau satu proses dibatalkan pada satu masa sehingga kitaran buntu lesu hilang; urutan pembatalan boleh dipilih dengan mempertimbangkan keutamaan benang, berapa lama ia telah mengira dan berapa lama lagi untuk selesai, sumber yang telah digunakannya, sumber yang diperlukannya untuk selesai, berapa banyak benang perlu ditamatkan dan sama ada benang itu interaktif atau kelompok. Dalam pengambilalihan sumber, mangsa dipilih untuk meminimumkan kos, dengan faktor kos mungkin termasuk bilangan sumber yang dipegang dan jumlah masa yang telah digunakan proses, dan gulung kembali memulangkan proses ke keadaan selamat tertentu dan memulakannya semula dari situ, atau melakukan gulung kembali penuh dengan membatalkan dan memulakannya semula; perhatian diperlukan kerana sentiasa memilih benang yang sama sebagai mangsa menyebabkan kebuluran, jadi bilangan gulung kembali boleh dimasukkan dalam faktor kos untuk menjamin bilangan gulung kembali yang terbatas."
        }
      ],
      "terms": [
        {
          "en": "Deadlock",
          "zh": "死锁",
          "ms": "Buntu Lesu",
          "def": {
            "zh": "一组进程中的每个进程都在等待只能由该组中另一个进程引起的事件，因而永远无法继续的状态。",
            "en": "A state in which every process in a set is waiting for an event that can be caused only by another process in the same set, so none can ever proceed.",
            "ms": "Keadaan apabila setiap proses dalam satu set menunggu peristiwa yang hanya boleh disebabkan oleh proses lain dalam set yang sama, sehingga tiada satu pun dapat meneruskan."
          }
        },
        {
          "en": "Mutual Exclusion",
          "zh": "互斥",
          "ms": "Pengecualian Bersama",
          "def": {
            "zh": "死锁的第一个必要条件：同一时刻只有一个线程能使用某个资源。",
            "en": "The first necessary condition for deadlock: only one thread at a time can use a resource.",
            "ms": "Syarat pertama buntu lesu: hanya satu benang pada satu masa boleh menggunakan sesuatu sumber."
          }
        },
        {
          "en": "Hold and Wait",
          "zh": "持有并等待",
          "ms": "Memegang dan Menunggu",
          "def": {
            "zh": "死锁的第二个必要条件：线程至少持有一个资源，同时又在等待获取被其他线程持有的资源。",
            "en": "The second necessary condition for deadlock: a thread holding at least one resource is waiting to acquire additional resources held by other threads.",
            "ms": "Syarat kedua buntu lesu: benang yang memegang sekurang-kurangnya satu sumber menunggu untuk memperoleh sumber tambahan yang dipegang benang lain."
          }
        },
        {
          "en": "No Preemption",
          "zh": "不可抢占",
          "ms": "Tiada Pengambilalihan",
          "def": {
            "zh": "死锁的第三个必要条件：资源只能由持有它的线程在完成任务后自愿释放，不能被强行夺走。",
            "en": "The third necessary condition for deadlock: a resource can be released only voluntarily by the thread holding it after that thread completes its task.",
            "ms": "Syarat ketiga buntu lesu: sumber hanya boleh dilepaskan secara sukarela oleh benang yang memegangnya selepas benang itu menyelesaikan tugasnya."
          }
        },
        {
          "en": "Circular Wait",
          "zh": "循环等待",
          "ms": "Penantian Berlingkar",
          "def": {
            "zh": "死锁的第四个必要条件：存在等待线程集合 {T0, …, Tn}，其中每个线程都在等待下一个线程持有的资源，Tn 又在等待 T0 持有的资源。",
            "en": "The fourth necessary condition for deadlock: there is a set {T0, ..., Tn} of waiting threads in which each waits for a resource held by the next, and Tn waits for a resource held by T0.",
            "ms": "Syarat keempat buntu lesu: wujud set benang menunggu {T0, ..., Tn} yang setiap satunya menunggu sumber yang dipegang oleh yang berikutnya, dan Tn menunggu sumber yang dipegang T0."
          }
        },
        {
          "en": "Resource-Allocation Graph",
          "zh": "资源分配图",
          "ms": "Graf Peruntukan Sumber",
          "def": {
            "zh": "由线程顶点、资源类型顶点以及请求边 Ti → Rj 和分配边 Rj → Ti 组成的有向图，用于描述资源分配状态。",
            "en": "A directed graph of thread vertices, resource-type vertices, request edges Ti to Rj and assignment edges Rj to Ti that describes the resource-allocation state.",
            "ms": "Graf berarah yang terdiri daripada bucu benang, bucu jenis sumber, tepi permintaan Ti ke Rj dan tepi peruntukan Rj ke Ti untuk menerangkan keadaan peruntukan sumber."
          }
        },
        {
          "en": "Claim Edge",
          "zh": "声明边",
          "ms": "Tepi Tuntutan",
          "def": {
            "zh": "资源分配图中用虚线表示的边 Ti → Rj，说明线程 Ti 将来可能申请资源 Rj，资源必须事先声明。",
            "en": "A dashed edge Ti to Rj in the resource-allocation graph indicating that thread Ti may request resource Rj in the future, so that resources must be claimed a priori.",
            "ms": "Tepi bergaris putus-putus Ti ke Rj dalam graf peruntukan sumber yang menunjukkan benang Ti mungkin meminta sumber Rj pada masa hadapan, jadi sumber mesti dituntut terlebih dahulu."
          }
        },
        {
          "en": "Safe State / Safe Sequence",
          "zh": "安全状态 / 安全序列",
          "ms": "Keadaan Selamat / Jujukan Selamat",
          "def": {
            "zh": "若存在线程序列 <T1, …, Tn> 使每个 Ti 尚可申请的资源都能被当前可用资源加上所有 Tj（j < i）持有的资源满足，则系统处于安全状态，该序列称为安全序列。",
            "en": "A system is in a safe state if there exists a sequence <T1, ..., Tn> of all threads such that the resources each Ti can still request can be satisfied by the currently available resources plus those held by all Tj with j less than i; that sequence is a safe sequence.",
            "ms": "Sistem berada dalam keadaan selamat jika wujud jujukan <T1, ..., Tn> bagi semua benang sehingga sumber yang masih boleh diminta setiap Ti dapat dipenuhi oleh sumber yang tersedia sekarang ditambah sumber yang dipegang semua Tj dengan j kurang daripada i; jujukan itu ialah jujukan selamat."
          }
        },
        {
          "en": "Deadlock Avoidance",
          "zh": "死锁避免",
          "ms": "Pengelakan Buntu Lesu",
          "def": {
            "zh": "利用每个线程事先声明的最大资源需求，动态检查资源分配状态以保证系统永不进入不安全状态。",
            "en": "Using each thread's a priori maximum claim to examine the resource-allocation state dynamically so that the system never enters an unsafe state.",
            "ms": "Menggunakan tuntutan maksimum yang diisytiharkan terlebih dahulu oleh setiap benang untuk memeriksa keadaan peruntukan sumber secara dinamik supaya sistem tidak pernah memasuki keadaan tidak selamat."
          }
        },
        {
          "en": "Banker's Algorithm",
          "zh": "银行家算法",
          "ms": "Algoritma Jurubank",
          "def": {
            "zh": "用于多实例资源类型的死锁避免算法，用 Available、Max、Allocation、Need 四个结构判断每次分配后系统是否仍处于安全状态。",
            "en": "A deadlock-avoidance algorithm for resource types with multiple instances that uses Available, Max, Allocation and Need to decide whether the system is still safe after each allocation.",
            "ms": "Algoritma pengelakan buntu lesu bagi jenis sumber berbilang instans yang menggunakan Available, Max, Allocation dan Need untuk menentukan sama ada sistem masih selamat selepas setiap peruntukan."
          }
        },
        {
          "en": "Need Matrix",
          "zh": "需求矩阵",
          "ms": "Matriks Need",
          "def": {
            "zh": "银行家算法中的 n × m 矩阵，Need[i,j] = Max[i,j] − Allocation[i,j]，表示进程 Ti 还需要多少个 Rj 实例才能完成任务。",
            "en": "The n by m matrix in the banker's algorithm where Need[i,j] equals Max[i,j] minus Allocation[i,j], showing how many more instances of Rj Ti needs to complete its task.",
            "ms": "Matriks n kali m dalam algoritma jurubank dengan Need[i,j] sama dengan Max[i,j] tolak Allocation[i,j], menunjukkan berapa banyak lagi instans Rj diperlukan Ti untuk menyelesaikan tugasnya."
          }
        },
        {
          "en": "Safety Algorithm",
          "zh": "安全性算法",
          "ms": "Algoritma Keselamatan",
          "def": {
            "zh": "银行家算法中判断系统是否安全的算法：令 Work = Available，反复找满足 Finish[i] = false 且 Needi ≤ Work 的 i，Work += Allocationi、Finish[i] = true，全部为 true 则安全。",
            "en": "The part of the banker's algorithm that decides whether the system is safe: set Work to Available, repeatedly find an i with Finish[i] false and Needi less than or equal to Work, add Allocationi to Work and set Finish[i] true, and conclude safety if all are true.",
            "ms": "Bahagian algoritma jurubank yang menentukan sama ada sistem selamat: tetapkan Work kepada Available, cari i yang Finish[i] false dan Needi kurang atau sama dengan Work, tambah Allocationi kepada Work dan tetapkan Finish[i] true, dan simpulkan selamat jika semuanya true."
          }
        },
        {
          "en": "Wait-for Graph",
          "zh": "等待图",
          "ms": "Graf Menunggu",
          "def": {
            "zh": "每种资源只有一个实例时用于死锁检测的图，节点是线程，边 Ti → Tj 表示 Ti 在等待 Tj 持有的资源，有环即有死锁。",
            "en": "The graph used for deadlock detection when each resource type has one instance, with threads as nodes and an edge Ti to Tj meaning Ti waits for a resource held by Tj; a cycle means deadlock.",
            "ms": "Graf yang digunakan untuk pengesanan buntu lesu apabila setiap jenis sumber mempunyai satu instans, dengan benang sebagai nod dan tepi Ti ke Tj bermaksud Ti menunggu sumber yang dipegang Tj; kitaran bermaksud buntu lesu."
          }
        },
        {
          "en": "Victim Selection / Rollback",
          "zh": "牺牲者选择 / 回滚",
          "ms": "Pemilihan Mangsa / Gulung Kembali",
          "def": {
            "zh": "资源抢占式恢复中选择代价最小的进程作为牺牲者（代价因素如持有资源数、已消耗时间），并回滚到某个安全状态重启，完全回滚即中止并重启。",
            "en": "In preemption-based recovery, choosing the process with minimum cost as victim, using cost factors such as resources held and time consumed, and rolling back to a safe state to restart, with total rollback meaning abort and restart.",
            "ms": "Dalam pemulihan berasaskan pengambilalihan, memilih proses berkos minimum sebagai mangsa dengan faktor kos seperti sumber yang dipegang dan masa yang digunakan, dan menggulung kembali ke keadaan selamat untuk dimulakan semula, dengan gulung kembali penuh bermaksud batalkan dan mula semula."
          }
        }
      ],
      "diagrams": [
        {
          "type": "cycle",
          "title": {
            "zh": "死锁的四个必要条件（必须同时成立）",
            "en": "Four Necessary Conditions for Deadlock (must hold simultaneously)",
            "ms": "Empat Syarat Perlu Buntu Lesu (mesti dipenuhi serentak)"
          },
          "caption": {
            "zh": "只要破坏其中任意一个条件，死锁就不会发生，这就是死锁预防的思路。",
            "en": "Invalidating any one of these conditions prevents deadlock, which is the idea behind deadlock prevention.",
            "ms": "Membatalkan mana-mana satu syarat ini menghalang buntu lesu, itulah idea di sebalik pencegahan buntu lesu."
          },
          "steps": [
            {
              "label": {
                "zh": "互斥",
                "en": "Mutual Exclusion",
                "ms": "Pengecualian Bersama"
              }
            },
            {
              "label": {
                "zh": "持有并等待",
                "en": "Hold and Wait",
                "ms": "Memegang dan Menunggu"
              }
            },
            {
              "label": {
                "zh": "不可抢占",
                "en": "No Preemption",
                "ms": "Tiada Pengambilalihan"
              }
            },
            {
              "label": {
                "zh": "循环等待",
                "en": "Circular Wait",
                "ms": "Penantian Berlingkar"
              }
            }
          ]
        },
        {
          "type": "tree",
          "title": {
            "zh": "处理死锁的四类方法",
            "en": "Four Approaches to Handling Deadlocks",
            "ms": "Empat Pendekatan Menangani Buntu Lesu"
          },
          "root": {
            "label": {
              "zh": "处理死锁",
              "en": "Handling Deadlocks",
              "ms": "Menangani Buntu Lesu"
            }
          },
          "branches": [
            {
              "label": {
                "zh": "死锁预防",
                "en": "Deadlock Prevention",
                "ms": "Pencegahan Buntu Lesu"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "破坏互斥/持有并等待",
                    "en": "Invalidate mutual exclusion or hold and wait",
                    "ms": "Batalkan pengecualian bersama atau memegang dan menunggu"
                  }
                },
                {
                  "label": {
                    "zh": "破坏不可抢占/循环等待（资源全序）",
                    "en": "Invalidate no preemption or circular wait by total ordering",
                    "ms": "Batalkan tiada pengambilalihan atau penantian berlingkar melalui susunan menyeluruh"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "死锁避免",
                "en": "Deadlock Avoidance",
                "ms": "Pengelakan Buntu Lesu"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "单实例：资源分配图 + 声明边",
                    "en": "Single instance: resource-allocation graph with claim edges",
                    "ms": "Satu instans: graf peruntukan sumber dengan tepi tuntutan"
                  }
                },
                {
                  "label": {
                    "zh": "多实例：银行家算法",
                    "en": "Multiple instances: banker's algorithm",
                    "ms": "Berbilang instans: algoritma jurubank"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "死锁检测与恢复",
                "en": "Detection and Recovery",
                "ms": "Pengesanan dan Pemulihan"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "等待图找环 O(n²)",
                    "en": "Wait-for graph cycle search O(n squared)",
                    "ms": "Carian kitaran graf menunggu O(n kuasa dua)"
                  }
                },
                {
                  "label": {
                    "zh": "检测算法 O(m × n²)",
                    "en": "Detection algorithm O(m times n squared)",
                    "ms": "Algoritma pengesanan O(m kali n kuasa dua)"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "忽略问题",
                "en": "Ignore the Problem",
                "ms": "Abaikan Masalah"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "多数操作系统采用的做法",
                    "en": "What most operating systems do",
                    "ms": "Amalan kebanyakan sistem pengendalian"
                  }
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必背：死锁的四个必要条件（互斥、持有并等待、不可抢占、循环等待），以及每种死锁预防方法分别破坏了哪一个条件——这是本章最常见的简答题。",
          "en": "Memorise the four necessary conditions for deadlock, namely mutual exclusion, hold and wait, no preemption and circular wait, and know which condition each prevention method invalidates; this is the most common short-answer question in this chapter.",
          "ms": "Hafal empat syarat perlu buntu lesu, iaitu pengecualian bersama, memegang dan menunggu, tiada pengambilalihan dan penantian berlingkar, serta ketahui syarat mana yang dibatalkan oleh setiap kaedah pencegahan; ini soalan jawapan pendek yang paling biasa dalam bab ini."
        },
        {
          "zh": "必考计算：银行家算法的安全性算法与资源请求算法。要会先算 Need = Max − Allocation，再找出安全序列；判断某个 Request 能否批准时依次检查 Request ≤ Need、Request ≤ Available，试分配后若仍安全才真正分配，否则恢复原状态。",
          "en": "A guaranteed calculation question covers the banker's safety algorithm and resource-request algorithm. Compute Need as Max minus Allocation, find a safe sequence, and to decide whether a Request can be granted check in turn that Request is at most Need and at most Available, then pretend to allocate and grant only if the result is still safe, restoring the old state otherwise.",
          "ms": "Soalan pengiraan yang pasti keluar meliputi algoritma keselamatan dan algoritma permintaan sumber jurubank. Kira Need sebagai Max tolak Allocation, cari jujukan selamat, dan untuk menentukan sama ada sesuatu Request boleh diluluskan, periksa berturut-turut bahawa Request tidak melebihi Need dan tidak melebihi Available, kemudian pura-pura memperuntukkan dan luluskan hanya jika hasilnya masih selamat, sambil memulihkan keadaan lama jika tidak."
        },
        {
          "zh": "易错点：把“不安全状态”等同于“死锁”。不安全状态只是可能死锁，系统仍可能顺利运行；反过来，安全状态一定不会死锁。另外有环不一定死锁——只有每个资源类型只有一个实例时，环才是死锁的充要条件。",
          "en": "A common mistake is equating an unsafe state with deadlock. An unsafe state only means deadlock is possible and the system may still run to completion, whereas a safe state can never deadlock. Similarly, a cycle does not always mean deadlock: only when every resource type has a single instance is a cycle both necessary and sufficient for deadlock.",
          "ms": "Kesilapan biasa ialah menyamakan keadaan tidak selamat dengan buntu lesu. Keadaan tidak selamat hanya bermakna buntu lesu mungkin berlaku dan sistem masih boleh berjalan hingga selesai, manakala keadaan selamat tidak pernah buntu lesu. Begitu juga, kitaran tidak semestinya bermakna buntu lesu: hanya apabila setiap jenis sumber mempunyai satu instans, kitaran menjadi syarat perlu dan cukup bagi buntu lesu."
        },
        {
          "zh": "常考检测算法的复杂度与调用策略：等待图找环需要 O(n²)，多实例检测算法需要 O(m × n²)；检测调用得越频繁越容易发现死锁，但若随意调用，图中会有多个环而无法判断哪个线程引起了死锁。",
          "en": "The complexity and invocation policy of detection algorithms are frequently examined: cycle detection in a wait-for graph needs an order of n squared operations and the multiple-instance detection algorithm needs an order of m times n squared; invoking detection more often finds deadlock sooner, but arbitrary invocation leaves many cycles in the graph so that the thread that caused the deadlock cannot be identified.",
          "ms": "Kerumitan dan dasar penggunaan algoritma pengesanan sering diuji: pengesanan kitaran dalam graf menunggu memerlukan urutan n kuasa dua operasi dan algoritma pengesanan berbilang instans memerlukan urutan m kali n kuasa dua; memanggil pengesanan lebih kerap menemui buntu lesu lebih awal, tetapi panggilan sewenang-wenangnya meninggalkan banyak kitaran dalam graf sehingga benang yang menyebabkan buntu lesu tidak dapat dikenal pasti."
        }
      ],
      "mnemonic": {
        "zh": "四个条件记成“互、持、不、环”；处理死锁记成“预防、避免、检测、忽略”。",
        "en": "Four conditions: mutual exclusion, hold and wait, no preemption, circular wait. Four treatments: prevention, avoidance, detection, ignore.",
        "ms": "Empat syarat: pengecualian bersama, memegang dan menunggu, tiada pengambilalihan, penantian berlingkar. Empat rawatan: pencegahan, pengelakan, pengesanan, abaikan."
      }
    },
    {
      "id": "os-07",
      "num": 7,
      "title": {
        "zh": "内存管理",
        "en": "Memory Management",
        "ms": "Pengurusan Ingatan"
      },
      "file": "os/CHAPTER 7 DDWD 2663.pptx",
      "pages": 67,
      "summary": {
        "zh": "本章讲操作系统如何把程序装入内存并管理内存空间。程序必须先从磁盘装入内存并放入某个进程中才能运行，而主存和寄存器是 CPU 唯一能直接访问的存储，因此需要基址与限长寄存器保护进程的地址空间。程序在编译时、装入时或执行时完成地址绑定，由此产生逻辑地址与物理地址的区分，并由内存管理单元 MMU 在运行时完成映射。接着介绍连续分配的动态分区与首次适应、最佳适应、最差适应算法以及内碎片、外碎片与紧凑技术，再重点讲解分页：把物理内存划分为帧、把逻辑内存划分为页，用页表与 TLB 完成地址转换并计算有效访问时间，最后讨论页表的分级、哈希与反置结构、交换技术以及 Intel IA-32 与 x86-64 的实际地址转换。",
        "en": "This chapter explains how the operating system brings programs into memory and manages memory space. A program must be brought from disk into memory and placed within a process before it can run, and since main memory and registers are the only storage the CPU can access directly, a pair of base and limit registers is needed to protect each process's address space. Address binding may occur at compile time, load time or execution time, which gives rise to the distinction between logical and physical addresses that the memory-management unit (MMU) maps at run time. The chapter then covers contiguous allocation with variable partitions and the first-fit, best-fit and worst-fit algorithms along with internal and external fragmentation and compaction, before concentrating on paging, in which physical memory is divided into frames and logical memory into pages, page tables and the TLB perform address translation, and effective access time can be computed; it ends with hierarchical, hashed and inverted page tables, swapping, and the address translation of Intel IA-32 and x86-64.",
        "ms": "Bab ini menerangkan cara sistem pengendalian membawa program ke dalam ingatan dan mengurus ruang ingatan. Program mesti dibawa daripada cakera ke dalam ingatan dan diletakkan dalam sesuatu proses sebelum boleh dijalankan, dan kerana ingatan utama serta daftar ialah satu-satunya storan yang boleh dicapai terus oleh CPU, sepasang daftar asas dan had diperlukan untuk melindungi ruang alamat setiap proses. Pengikatan alamat boleh berlaku pada masa kompil, masa muat atau masa pelaksanaan, yang menimbulkan perbezaan antara alamat logik dengan alamat fizikal yang dipetakan oleh unit pengurusan ingatan (MMU) semasa masa larian. Bab ini kemudian membincangkan peruntukan bersebelahan dengan pembahagian boleh ubah serta algoritma suai pertama, suai terbaik dan suai terburuk bersama pecahan dalaman dan luaran serta pemadatan, sebelum menumpukan pada penghalaman, iaitu ingatan fizikal dibahagikan kepada rangka dan ingatan logik kepada halaman, jadual halaman dan TLB melakukan terjemahan alamat, dan masa capaian berkesan boleh dikira; ia diakhiri dengan jadual halaman berhierarki, berhash dan terbalik, penukaran, serta terjemahan alamat Intel IA-32 dan x86-64."
      },
      "points": [
        {
          "zh": "程序必须从磁盘装入内存并放进某个进程才能运行，而主存和寄存器是 CPU 唯一能直接访问的存储：寄存器访问在一个 CPU 时钟周期内完成，主存访问要多个周期因而造成停顿，高速缓存位于主存与 CPU 寄存器之间。为保证正确运行必须保护内存，做法是用一对基址寄存器和限长寄存器定义进程的逻辑地址空间，CPU 必须检查用户模式下产生的每一次内存访问是否落在该用户的基址与限长之间，装入这两个寄存器的指令是特权指令。",
          "en": "A program must be brought from disk into memory and placed within a process before it can be run, and main memory and registers are the only storage the CPU can access directly: register access takes one CPU clock or less, main memory can take many cycles and therefore causes a stall, and the cache sits between main memory and the CPU registers. Correct operation requires memory protection, which is provided by a pair of base and limit registers that define the logical address space of a process; the CPU must check every memory access generated in user mode to be sure it lies between the base and the limit for that user, and the instructions that load the base and limit registers are privileged.",
          "ms": "Program mesti dibawa daripada cakera ke dalam ingatan dan diletakkan dalam sesuatu proses sebelum boleh dijalankan, dan ingatan utama serta daftar ialah satu-satunya storan yang boleh dicapai terus oleh CPU: capaian daftar mengambil satu kitaran jam CPU atau kurang, ingatan utama boleh mengambil beberapa kitaran sehingga menyebabkan kelewatan, dan cache terletak antara ingatan utama dengan daftar CPU. Operasi yang betul memerlukan perlindungan ingatan, yang disediakan oleh sepasang daftar asas dan had yang menentukan ruang alamat logik sesuatu proses; CPU mesti memeriksa setiap capaian ingatan yang dijana dalam mod pengguna bagi memastikan ia terletak antara asas dan had pengguna itu, dan arahan yang memuatkan daftar asas serta had ialah arahan istimewa."
        },
        {
          "zh": "指令和数据的地址绑定可以在三个阶段发生：编译时（若内存位置事先已知，可生成绝对代码，起始位置改变就必须重新编译）、装入时（若编译时不知道内存位置，必须生成可重定位代码）、执行时（若进程在执行过程中可以从一个内存段移到另一个内存段，绑定推迟到运行时，需要地址映射的硬件支持，如基址与限长寄存器）。注意源程序地址通常是符号地址，编译后的代码绑定到可重定位地址（如“本模块起始处之后 14 字节”），再由链接程序或装入程序绑定为绝对地址（如 74014）。",
          "en": "Address binding of instructions and data can happen at three different stages: at compile time, where absolute code can be generated if the memory location is known a priori but the code must be recompiled if the starting location changes; at load time, where relocatable code must be generated if the memory location is not known at compile time; and at execution time, where binding is delayed until run time if the process can be moved from one memory segment to another during execution, which needs hardware support for address maps such as base and limit registers. Note that source-code addresses are usually symbolic, compiled code binds to relocatable addresses such as 14 bytes from the beginning of the module, and the linker or loader binds relocatable addresses to absolute addresses such as 74014.",
          "ms": "Pengikatan alamat bagi arahan dan data boleh berlaku pada tiga peringkat: pada masa kompil, iaitu kod mutlak boleh dijana jika lokasi ingatan diketahui terlebih dahulu tetapi kod mesti dikompil semula jika lokasi permulaan berubah; pada masa muat, iaitu kod boleh pindah mesti dijana jika lokasi ingatan tidak diketahui semasa kompil; dan pada masa pelaksanaan, iaitu pengikatan ditangguhkan sehingga masa larian jika proses boleh dipindahkan dari satu segmen ingatan ke segmen lain semasa pelaksanaan, yang memerlukan sokongan perkakasan untuk peta alamat seperti daftar asas dan had. Perhatikan bahawa alamat kod sumber biasanya simbolik, kod yang dikompil mengikat kepada alamat boleh pindah seperti 14 bait dari permulaan modul, dan penyunting paut atau pemuat mengikat alamat boleh pindah itu kepada alamat mutlak seperti 74014."
        },
        {
          "zh": "逻辑地址（又称虚拟地址）由 CPU 产生，物理地址是内存单元看到的地址；在编译时和装入时绑定方案中两者相同，只有执行时绑定方案中两者不同。内存管理单元 MMU 是运行时把虚拟地址映射为物理地址的硬件，最简单的方案是基址寄存器方案的推广：基址寄存器改称重定位寄存器，用户进程产生的每个地址在送往内存时都加上重定位寄存器的值，用户程序只处理逻辑地址，永远看不到真正的物理地址。此外，动态装入指例程在被调用时才装入（所有例程以可重定位装入格式存放在磁盘上，不需要操作系统特别支持），动态链接指链接推迟到执行时，用一小段桩代码定位内存中的库例程、用自己的地址替换自己并执行，对共享库和打补丁特别有用，但可能需要版本管理。",
          "en": "A logical address, also called a virtual address, is generated by the CPU, while a physical address is the one seen by the memory unit; the two are the same under compile-time and load-time binding schemes and differ only under execution-time binding. The memory-management unit (MMU) is the hardware device that maps virtual to physical addresses at run time, and in the simplest scheme, a generalisation of the base-register scheme, the base register is called the relocation register and its value is added to every address generated by a user process at the time it is sent to memory, so the user program deals with logical addresses and never sees the real physical addresses. Dynamic loading means a routine is not loaded until it is called, with all routines kept on disk in relocatable load format and no special operating-system support required, while dynamic linking postpones linking until execution time and uses a small piece of code called a stub that locates the appropriate memory-resident library routine, replaces itself with the address of the routine and executes it; this is particularly useful for shared libraries and for patching system libraries, although versioning may be needed.",
          "ms": "Alamat logik, yang juga dipanggil alamat maya, dijana oleh CPU, manakala alamat fizikal ialah alamat yang dilihat oleh unit ingatan; kedua-duanya sama dalam skim pengikatan masa kompil dan masa muat serta berbeza hanya dalam skim pengikatan masa pelaksanaan. Unit pengurusan ingatan (MMU) ialah peranti perkakasan yang memetakan alamat maya kepada alamat fizikal semasa masa larian, dan dalam skim paling mudah, iaitu generalisasi skim daftar asas, daftar asas dipanggil daftar relokasi dan nilainya ditambah kepada setiap alamat yang dijana proses pengguna ketika dihantar ke ingatan, jadi program pengguna hanya berurusan dengan alamat logik dan tidak pernah melihat alamat fizikal sebenar. Pemuatan dinamik bermaksud rutin tidak dimuatkan sehingga ia dipanggil, dengan semua rutin disimpan pada cakera dalam format muatan boleh pindah dan tiada sokongan khas sistem pengendalian diperlukan, manakala pautan dinamik menangguhkan pautan sehingga masa pelaksanaan dan menggunakan sekeping kod kecil dipanggil stub yang mencari rutin pustaka dalam ingatan, menggantikan dirinya dengan alamat rutin itu dan melaksanakannya; ini amat berguna untuk pustaka dikongsi dan untuk menampal pustaka sistem, walaupun pengurusan versi mungkin diperlukan."
        },
        {
          "zh": "连续分配是最早的方法之一：主存通常分为两部分，常驻的操作系统放在低内存并带中断向量，用户进程放在高内存，每个进程占据一段连续的存储。由于分区大小可变，内存中会散布着大小不同的空洞（可用内存块），进程到达时从足够大的空洞中分配内存，进程退出时释放分区并与相邻空闲分区合并，操作系统需要维护已分配分区和空闲分区（空洞）的信息。满足大小为 n 的请求有三种策略：首次适应分配第一个足够大的空洞；最佳适应分配最小的足够大的空洞（除非按大小排序，否则要搜索整个列表），产生的剩余空洞最小；最差适应分配最大的空洞（同样要搜索整个列表），产生的剩余空洞最大。就速度和存储利用率而言，首次适应与最佳适应优于最差适应。",
          "en": "Contiguous allocation is one of the early methods: main memory is usually divided into two partitions, with the resident operating system held in low memory together with the interrupt vector and user processes held in high memory, and each process is contained in a single contiguous section of memory. Because partitions are of variable size, holes, that is blocks of available memory of various sizes, are scattered throughout memory; a process arriving is allocated memory from a hole large enough to accommodate it, and when a process exits its partition is freed and adjacent free partitions are combined, so the operating system maintains information about allocated partitions and free partitions or holes. There are three strategies for satisfying a request of size n: first fit allocates the first hole that is big enough; best fit allocates the smallest hole that is big enough, requiring a search of the entire list unless it is ordered by size, and produces the smallest leftover hole; and worst fit allocates the largest hole, which also requires searching the entire list and produces the largest leftover hole. First fit and best fit are better than worst fit in terms of speed and storage utilisation.",
          "ms": "Peruntukan bersebelahan ialah salah satu kaedah awal: ingatan utama biasanya dibahagikan kepada dua bahagian, dengan sistem pengendalian pemastautin diletakkan dalam ingatan rendah bersama vektor selangan dan proses pengguna dalam ingatan tinggi, serta setiap proses terkandung dalam satu bahagian ingatan yang bersebelahan. Oleh sebab saiz bahagian boleh berubah, lubang, iaitu blok ingatan tersedia yang pelbagai saiz, bertaburan dalam ingatan; proses yang tiba diperuntukkan ingatan daripada lubang yang cukup besar, dan apabila proses keluar bahagiannya dilepaskan serta bahagian kosong yang bersebelahan digabungkan, jadi sistem pengendalian menyelenggara maklumat tentang bahagian yang diperuntukkan dan bahagian kosong atau lubang. Terdapat tiga strategi untuk memenuhi permintaan bersaiz n: suai pertama memperuntukkan lubang pertama yang cukup besar; suai terbaik memperuntukkan lubang terkecil yang cukup besar, memerlukan carian seluruh senarai kecuali senarai itu tersusun mengikut saiz, dan menghasilkan lubang baki terkecil; dan suai terburuk memperuntukkan lubang terbesar, yang juga memerlukan carian seluruh senarai dan menghasilkan lubang baki terbesar. Dari segi kelajuan dan penggunaan storan, suai pertama dan suai terbaik lebih baik daripada suai terburuk."
        },
        {
          "zh": "碎片分两种：外部碎片指总的空闲内存足以满足请求但不连续，因而无法使用；内部碎片指分配到的内存比请求的略大，这个差额位于分区内部却没有被使用。首次适应分析表明，分配了 N 块时约有 0.5N 块因碎片而损失，其中 1/3 可能无法使用，这就是 50% 规则。减少外部碎片可用紧凑：移动内存内容把全部空闲内存合并成一个大块，但只有当重定位是动态的并且发生在执行时才能紧凑；紧凑还要处理 I/O 问题，可以先把作业锁定在内存中直到 I/O 完成，或者只对操作系统的缓冲区做 I/O。",
          "en": "There are two kinds of fragmentation: external fragmentation, where the total memory space exists to satisfy a request but it is not contiguous and therefore unusable, and internal fragmentation, where allocated memory is slightly larger than the requested memory so that the difference is internal to a partition but not being used. First-fit analysis reveals that given N blocks allocated, about 0.5N blocks are lost to fragmentation and one third of memory may be unusable, which is the 50-percent rule. External fragmentation can be reduced by compaction, which shuffles memory contents to place all free memory together in one large block, but compaction is possible only if relocation is dynamic and done at execution time; compaction also raises an I/O problem, which can be handled by latching the job in memory while it is involved in I/O or by doing I/O only into operating-system buffers.",
          "ms": "Terdapat dua jenis pecahan: pecahan luaran, iaitu jumlah ruang ingatan mencukupi untuk memenuhi permintaan tetapi tidak bersebelahan sehingga tidak boleh digunakan, dan pecahan dalaman, iaitu ingatan yang diperuntukkan lebih besar sedikit daripada yang diminta sehingga perbezaannya terletak dalam bahagian itu tetapi tidak digunakan. Analisis suai pertama menunjukkan bahawa bagi N blok yang diperuntukkan, kira-kira 0.5N blok hilang akibat pecahan dan satu pertiga ingatan mungkin tidak boleh digunakan, iaitu peraturan 50 peratus. Pecahan luaran boleh dikurangkan dengan pemadatan, iaitu mengalih kandungan ingatan untuk menghimpun semua ingatan kosong menjadi satu blok besar, tetapi pemadatan hanya boleh dilakukan jika relokasi bersifat dinamik dan dilakukan pada masa pelaksanaan; pemadatan juga menimbulkan masalah I/O, yang boleh ditangani dengan mengunci kerja dalam ingatan semasa ia terlibat dengan I/O atau dengan melakukan I/O hanya ke dalam penimbal sistem pengendalian."
        },
        {
          "zh": "分页允许进程的物理地址空间不连续，进程在物理内存可用时就分配给它，从而避免外部碎片和大小不一的内存块问题：把物理内存划分为固定大小的块称为帧，大小是 2 的幂、介于 512 字节到 16 MB 之间；把逻辑内存划分为同样大小的块称为页；操作系统跟踪所有空闲帧，运行大小为 N 页的程序就要找到 N 个空闲帧并装入程序，然后建立页表把逻辑地址转换为物理地址，后备存储器也按页划分。分页仍然有内部碎片：例如页大小为 2048 字节、进程大小为 72766 字节时需 35 页加 1086 字节，内部碎片为 2048 − 1086 = 962 字节；最坏情况碎片是 1 帧 − 1 字节，平均为半个帧，因此帧越小越好，但每个页表项也要占用内存，实际页大小随年代在增大（Solaris 支持 8 KB 与 4 MB 两种页大小）。",
          "en": "Paging permits the physical address space of a process to be noncontiguous, allocating physical memory to a process whenever it is available, and so avoids external fragmentation and the problem of varying sized memory chunks: physical memory is divided into fixed-sized blocks called frames whose size is a power of two between 512 bytes and 16 megabytes, logical memory is divided into blocks of the same size called pages, and the operating system keeps track of all free frames. To run a program of size N pages, N free frames must be found and the program loaded, after which a page table translates logical to physical addresses, and the backing store is likewise split into pages. Paging still suffers internal fragmentation: with a page size of 2048 bytes and a process size of 72766 bytes, 35 pages plus 1086 bytes are needed and the internal fragmentation is 2048 minus 1086, that is 962 bytes; the worst-case fragmentation is one frame minus one byte and the average is half a frame, so small frames are desirable, yet each page-table entry also takes memory to track and page sizes have grown over time, with Solaris supporting two page sizes of 8 kilobytes and 4 megabytes.",
          "ms": "Penghalaman membenarkan ruang alamat fizikal sesuatu proses tidak bersebelahan, iaitu ingatan fizikal diperuntukkan kepada proses apabila tersedia, sekali gus mengelakkan pecahan luaran dan masalah ketulan ingatan yang berbeza saiz: ingatan fizikal dibahagikan kepada blok bersaiz tetap dipanggil rangka yang saiznya kuasa dua antara 512 bait hingga 16 megabait, ingatan logik dibahagikan kepada blok yang sama saiz dipanggil halaman, dan sistem pengendalian menjejaki semua rangka kosong. Untuk menjalankan program bersaiz N halaman, N rangka kosong mesti dicari dan program dimuatkan, selepas itu jadual halaman menterjemah alamat logik kepada alamat fizikal, dan storan sandaran juga dibahagikan kepada halaman. Penghalaman masih mengalami pecahan dalaman: dengan saiz halaman 2048 bait dan saiz proses 72766 bait, 35 halaman serta 1086 bait diperlukan dan pecahan dalamannya ialah 2048 tolak 1086, iaitu 962 bait; pecahan kes terburuk ialah satu rangka tolak satu bait dan puratanya separuh rangka, jadi rangka kecil lebih baik, namun setiap entri jadual halaman juga mengambil ingatan dan saiz halaman telah meningkat dari semasa ke semasa, dengan Solaris menyokong dua saiz halaman iaitu 8 kilobait dan 4 megabait."
        },
        {
          "zh": "分页的地址转换把 CPU 产生的地址分成两部分：页号 p 用作页表的索引，页表包含每个页在物理内存中的基地址；页内偏移 d 与基地址组合成送往内存单元的物理地址。对于逻辑地址空间 2^m、页大小 2^n 的情况，页号占高 m − n 位、偏移占低 n 位。页表保存在主存中，页表基址寄存器 PTBR 指向页表，页表长度寄存器 PTLR 指出页表大小；这样每次访问数据或指令都需要两次内存访问（一次取页表项、一次取数据），可用称为转换检测缓冲区 TLB（又称相联存储器）的高速硬件缓存来解决。有些 TLB 在每个表项中保存地址空间标识符 ASID 以唯一标识进程、提供地址空间保护，否则每次上下文切换都要刷新；TLB 通常很小（64 到 1024 项），未命中时把值装入 TLB 以便下次快速访问，需要考虑替换策略，有些表项可以被固定以获得永久的快速访问。有效访问时间 EAT 取决于命中率：若访问内存需 10 纳秒，命中率为 80% 时 EAT = 0.80 × 10 + 0.20 × 20 = 12 纳秒（减慢 20%），若命中率为 99% 则 EAT = 0.99 × 10 + 0.01 × 20 = 10.1 纳秒（只减慢 1%）。",
          "en": "Address translation in paging divides the address generated by the CPU into two parts: the page number p, used as an index into a page table that contains the base address of each page in physical memory, and the page offset d, which is combined with that base address to define the physical memory address sent to the memory unit. For a logical address space of 2 to the power m and a page size of 2 to the power n, the page number occupies the high m minus n bits and the offset the low n bits. The page table is kept in main memory, the page-table base register (PTBR) points to it and the page-table length register (PTLR) indicates its size, so every data or instruction access requires two memory accesses, one for the page-table entry and one for the data, which is solved by a special fast-lookup hardware cache called the translation look-aside buffer (TLB), also known as associative memory. Some TLBs store an address-space identifier (ASID) in each entry to identify a process uniquely and provide address-space protection, since otherwise the TLB must be flushed at every context switch; TLBs are typically small, holding 64 to 1,024 entries, a miss loads the value into the TLB for faster access next time, replacement policies must be considered, and some entries can be wired down for permanent fast access. Effective access time depends on the hit ratio: if memory access takes 10 nanoseconds, an 80 percent hit ratio gives EAT equal to 0.80 times 10 plus 0.20 times 20, that is 12 nanoseconds, implying a 20 percent slowdown, while a 99 percent hit ratio gives 0.99 times 10 plus 0.01 times 20, that is 10.1 nanoseconds and only a 1 percent slowdown.",
          "ms": "Terjemahan alamat dalam penghalaman membahagikan alamat yang dijana CPU kepada dua bahagian: nombor halaman p, yang digunakan sebagai indeks ke jadual halaman yang mengandungi alamat asas setiap halaman dalam ingatan fizikal, dan offset halaman d, yang digabungkan dengan alamat asas itu untuk menentukan alamat ingatan fizikal yang dihantar kepada unit ingatan. Bagi ruang alamat logik 2 kuasa m dan saiz halaman 2 kuasa n, nombor halaman mengambil m tolak n bit tinggi dan offset mengambil n bit rendah. Jadual halaman disimpan dalam ingatan utama, daftar asas jadual halaman (PTBR) menunjuk kepadanya dan daftar panjang jadual halaman (PTLR) menunjukkan saiznya, jadi setiap capaian data atau arahan memerlukan dua capaian ingatan, satu untuk entri jadual halaman dan satu untuk data, yang diselesaikan oleh cache perkakasan pantas khas dipanggil penimbal sisi terjemahan (TLB), juga dikenali sebagai ingatan bersekutu. Sesetengah TLB menyimpan pengecam ruang alamat (ASID) dalam setiap entri untuk mengenal pasti proses secara unik dan memberikan perlindungan ruang alamat, kerana jika tidak TLB mesti dikosongkan pada setiap pertukaran konteks; TLB biasanya kecil dengan 64 hingga 1,024 entri, kegagalan memuatkan nilai ke dalam TLB untuk capaian pantas berikutnya, dasar penggantian perlu dipertimbangkan, dan sesetengah entri boleh dipakukan untuk capaian pantas kekal. Masa capaian berkesan bergantung pada nisbah hit: jika capaian ingatan mengambil 10 nanosaat, nisbah hit 80 peratus memberikan EAT sama dengan 0.80 kali 10 tambah 0.20 kali 20, iaitu 12 nanosaat dan memperlahankan 20 peratus, manakala nisbah hit 99 peratus memberikan 0.99 kali 10 tambah 0.01 kali 20, iaitu 10.1 nanosaat dan hanya 1 peratus perlahan."
        },
        {
          "zh": "内存保护可以通过给每个帧关联保护位实现，用来指明该帧允许只读还是读写访问，还可以增加位表示只执行等；页表中每个表项附带有效-无效位，“有效”表示该页在进程的逻辑地址空间内、是合法页，“无效”表示该页不在进程的逻辑地址空间内，也可以用页表长度寄存器 PTLR 达到同样目的，任何违规都会陷入内核。分页还便于共享：只读（可重入）代码只需一份副本即可在多个进程间共享，如文本编辑器、编译器和窗口系统；若允许共享读写页，还可用于进程间通信；而私有代码和数据则每个进程保存各自的副本，其页可以出现在逻辑地址空间的任何位置。",
          "en": "Memory protection can be implemented by associating a protection bit with each frame to indicate whether read-only or read-write access is allowed, and more bits can be added to indicate execute-only pages; a valid-invalid bit attached to each page-table entry marks a page as valid when it is in the process's logical address space and therefore legal, and invalid when it is not, and a page-table length register can serve the same purpose, with any violation resulting in a trap to the kernel. Paging also eases sharing: one copy of read-only, reentrant code such as a text editor, compiler or window system can be shared among processes, and if sharing of read-write pages is allowed it can also be used for interprocess communication, whereas private code and data are kept as a separate copy for each process and their pages may appear anywhere in the logical address space.",
          "ms": "Perlindungan ingatan boleh dilaksanakan dengan mengaitkan bit perlindungan pada setiap rangka untuk menunjukkan sama ada capaian baca sahaja atau baca tulis dibenarkan, dan lebih banyak bit boleh ditambah untuk menunjukkan halaman hanya laksana; bit sah-tidak sah yang dikaitkan pada setiap entri jadual halaman menandakan halaman sebagai sah apabila ia berada dalam ruang alamat logik proses dan oleh itu sah di sisi undang-undang, serta tidak sah apabila tidak, dan daftar panjang jadual halaman boleh berfungsi untuk tujuan yang sama, dengan sebarang pelanggaran mengakibatkan perangkap kepada kernel. Penghalaman juga memudahkan perkongsian: satu salinan kod baca sahaja yang boleh masuk semula seperti penyunting teks, penyusun atau sistem tetingkap boleh dikongsi antara proses, dan jika perkongsian halaman baca tulis dibenarkan ia juga boleh digunakan untuk komunikasi antara proses, manakala kod dan data peribadi disimpan sebagai salinan berasingan bagi setiap proses dan halamannya boleh muncul di mana-mana dalam ruang alamat logik."
        },
        {
          "zh": "页表结构必须处理页表过大的问题：32 位逻辑地址空间、4 KB 页大小时页表有 100 万个表项，每个表项 4 字节就意味着每个进程仅页表就要 4 MB 物理地址空间，而且不想在主存中连续分配这么多空间。解决办法之一是分级页表，例如两级页表把页表再分页：32 位机器 4K 页大小时逻辑地址的 20 位页号再分为 10 位页号和 10 位页偏移，p1 是外层页表的索引，p2 是内层页表页内的位移，称为正向映射页表；64 位地址空间即使两级也不够，可能需要三级甚至四级，代价是访问一次物理内存可能要多次访存。哈希页表常用于大于 32 位的地址空间，虚拟页号被哈希到页表中，页表包含哈希到同一位置的元素链，每个元素含虚拟页号、映射到的页帧值和指向下一个元素的指针，在链中比较虚拟页号，匹配就取出对应的物理帧；64 位地址的变体称为群集页表，每个表项指向若干页（如 16 页）而不是一页，特别适合稀疏地址空间。反置页表不为每个进程保存页表，而是跟踪所有物理页，每个真实内存页对应一个表项，表项包含存放在该物理位置的页的虚拟地址以及拥有该页的进程信息；它减少了保存页表所需的内存，但页引用时搜索表的时间增加，可用哈希表把搜索限制在一两个表项内，TLB 也能加速访问，不过共享内存的实现变得困难，因为需要把多个虚拟地址映射到同一个共享物理地址。现代例子是 Oracle SPARC Solaris：基于哈希但更复杂，内核与所有用户进程各有一个哈希表，每个表项表示一段连续的已映射虚拟内存（含基地址和 span），TLB 保存转换表项 TTE，TTE 的缓存在转换存储缓冲区 TSB 中，虚拟地址引用先搜索 TLB，未命中时硬件遍历内存中的 TSB，匹配就把 TSB 表项复制到 TLB 完成转换，否则中断内核搜索哈希表，内核建立 TTE 存入 TSB 后返回 MMU 完成转换。Intel IA-32 同时支持纯分段和分段加分页，每个段可达 4 GB，每进程最多 16K 个段，分为最多 8K 个私有段（放在局部描述符表 LDT）和最多 8K 个共享段（放在全局描述符表 GDT）；CPU 产生逻辑地址，选择符交给分段单元产生线性地址，线性地址再交给分页单元产生物理地址，页大小可以是 4 KB 或 4 MB；PAE 用三级方案把地址空间扩到 36 位即 64 GB 物理内存，x86-64 实际只实现 48 位寻址、四级分页层次、页大小为 4 KB、2 MB 和 1 GB。",
          "en": "The structure of the page table must cope with page tables that become huge: with a 32-bit logical address space and a 4-kilobyte page size the page table would have one million entries, and at 4 bytes per entry each process would need 4 megabytes of physical address space for the page table alone, which is not something to be allocated contiguously in main memory. One solution is hierarchical paging, such as a two-level page table that pages the page table: on a 32-bit machine with 4-kilobyte pages the 20-bit page number is further divided into a 10-bit page number and a 10-bit page offset, where p1 indexes the outer page table and p2 is the displacement within the page of the inner page table, a scheme known as a forward-mapped page table; a 64-bit address space cannot be handled even by two levels, so three or four levels may be needed at the cost of several memory accesses to reach one physical location. Hashed page tables are common for address spaces larger than 32 bits, where the virtual page number is hashed into a page table containing a chain of elements hashing to the same location, each element holding the virtual page number, the mapped page frame value and a pointer to the next element, and the chain is searched for a match whose physical frame is then extracted; the variation for 64-bit addresses is clustered page tables, in which each entry refers to several pages such as 16 rather than one and which are especially useful for sparse address spaces. An inverted page table does not keep a page table per process but tracks all physical pages, with one entry for each real page of memory holding the virtual address of the page stored there and information about the owning process; it decreases the memory needed for page tables but increases the time needed to search the table when a page is referenced, which can be limited by a hash table to one or a few entries, and the TLB can accelerate access, yet shared memory becomes difficult to implement because several virtual addresses must map to one shared physical address. A modern example is Oracle SPARC Solaris, which is based on hashing but more complex, with two hash tables, one for the kernel and one for all user processes, each entry representing a contiguous area of mapped virtual memory with a base address and a span; the TLB holds translation table entries (TTEs) and a cache of TTEs resides in the translation storage buffer (TSB), so a virtual address reference causes a TLB search, and on a miss the hardware walks the in-memory TSB, copying a matching entry into the TLB to complete the translation, or otherwise interrupting the kernel to search the hash table and create a TTE that is stored in the TSB before control returns to the MMU. Intel IA-32 supports both segmentation and segmentation with paging, each segment can be 4 gigabytes and there can be up to 16K segments per process in two partitions, up to 8K private segments kept in the local descriptor table and up to 8K shared segments kept in the global descriptor table; the CPU generates a logical address, a selector is given to the segmentation unit which produces a linear address, and the linear address is given to the paging unit which generates the physical address, with page sizes of 4 kilobytes or 4 megabytes. Page address extension (PAE) uses a three-level scheme to extend the address space to 36 bits or 64 gigabytes of physical memory, and x86-64 implements only 48 bits of addressing in practice, with four levels of paging hierarchy and page sizes of 4 kilobytes, 2 megabytes and 1 gigabyte.",
          "ms": "Struktur jadual halaman mesti menangani masalah jadual halaman yang menjadi sangat besar: dengan ruang alamat logik 32 bit dan saiz halaman 4 kilobait, jadual halaman akan mempunyai satu juta entri, dan pada 4 bait setiap entri setiap proses memerlukan 4 megabait ruang alamat fizikal hanya untuk jadual halaman, yang tidak wajar diperuntukkan secara bersebelahan dalam ingatan utama. Satu penyelesaian ialah penghalaman berhierarki, seperti jadual halaman dua peringkat yang menghalamkan jadual halaman: pada mesin 32 bit dengan halaman 4 kilobait, nombor halaman 20 bit dibahagikan lagi kepada nombor halaman 10 bit dan offset halaman 10 bit, dengan p1 mengindeks jadual halaman luar dan p2 ialah sesaran dalam halaman jadual halaman dalam, iaitu skim yang dikenali sebagai jadual halaman terpetakan ke hadapan; ruang alamat 64 bit tidak dapat ditangani walaupun oleh dua peringkat, jadi tiga atau empat peringkat mungkin diperlukan dengan kos beberapa capaian ingatan untuk sampai ke satu lokasi fizikal. Jadual halaman berhash biasa bagi ruang alamat melebihi 32 bit, iaitu nombor halaman maya dihash ke jadual halaman yang mengandungi rantaian elemen yang dihash ke lokasi yang sama, setiap elemen menyimpan nombor halaman maya, nilai rangka halaman yang dipetakan dan penunjuk ke elemen berikutnya, dan rantaian itu dicari padanannya lalu rangka fizikalnya diambil; variasi bagi alamat 64 bit ialah jadual halaman berkelompok, iaitu setiap entri merujuk beberapa halaman seperti 16 dan bukan satu, dan amat berguna untuk ruang alamat jarang. Jadual halaman terbalik tidak menyimpan jadual halaman bagi setiap proses tetapi menjejaki semua halaman fizikal, dengan satu entri bagi setiap halaman sebenar ingatan yang menyimpan alamat maya halaman itu dan maklumat tentang proses pemiliknya; ia mengurangkan ingatan yang diperlukan untuk jadual halaman tetapi menambah masa carian apabila halaman dirujuk, yang boleh dihadkan oleh jadual hash kepada satu atau beberapa entri, dan TLB boleh mempercepat capaian, namun ingatan dikongsi menjadi sukar dilaksanakan kerana beberapa alamat maya mesti dipetakan kepada satu alamat fizikal yang dikongsi. Contoh moden ialah Oracle SPARC Solaris yang berasaskan hashing tetapi lebih kompleks, dengan dua jadual hash, satu untuk kernel dan satu untuk semua proses pengguna, dan setiap entri mewakili satu kawasan ingatan maya yang dipetakan secara bersebelahan dengan alamat asas dan span; TLB menyimpan entri jadual terjemahan (TTE) dan cache TTE berada dalam penimbal storan terjemahan (TSB), jadi rujukan alamat maya menyebabkan carian TLB, dan jika gagal perkakasan akan merentasi TSB dalam ingatan, menyalin entri yang padan ke dalam TLB untuk melengkapkan terjemahan, atau jika tidak mengganggu kernel untuk mencari jadual hash dan membina TTE yang disimpan dalam TSB sebelum kawalan kembali kepada MMU. Intel IA-32 menyokong kedua-dua pengsegmentan dan pengsegmentan dengan penghalaman, setiap segmen boleh mencapai 4 gigabait dan terdapat sehingga 16K segmen bagi setiap proses dalam dua bahagian, iaitu sehingga 8K segmen peribadi dalam jadual perihalan setempat dan sehingga 8K segmen dikongsi dalam jadual perihalan global; CPU menjana alamat logik, pemilih diberikan kepada unit pengsegmentan yang menghasilkan alamat linear, dan alamat linear diberikan kepada unit penghalaman yang menghasilkan alamat fizikal, dengan saiz halaman 4 kilobait atau 4 megabait. Peluasan alamat halaman (PAE) menggunakan skim tiga peringkat untuk meluaskan ruang alamat kepada 36 bit atau 64 gigabait ingatan fizikal, dan x86-64 hanya melaksanakan 48 bit pengalamatan dalam amalan, dengan empat peringkat hierarki penghalaman dan saiz halaman 4 kilobait, 2 megabait serta 1 gigabait."
        },
        {
          "zh": "交换（swapping）把一个进程暂时换出内存到后备存储器，需要时再换回内存继续执行，使进程总的物理内存需求可以超过实际物理内存；后备存储器是足够大、能容纳所有用户内存映像副本并能直接访问这些映像的快速磁盘。换出、换入是用于基于优先级调度算法的一种交换变体：低优先级进程被换出，以便装入并执行更高优先级的进程。交换时间的主要部分是传输时间，总传输时间与交换的内存量成正比（例如 100 MB 的进程以 50 MB/秒的速率换出需 2000 毫秒，换出加换入共 4000 毫秒，也就是 4 秒）。交换还受未完成 I/O 的限制：不能换出正在做 I/O 的进程，否则 I/O 会写入错误的进程，也可以始终把 I/O 传到内核空间再送往设备，称为双重缓冲但会增加开销。现代操作系统一般不使用标准交换，只在空闲内存极低时使用改进版本；移动系统通常不支持交换，因为使用闪存、空间小、写入次数有限且闪存与 CPU 之间吞吐量差，iOS 会要求应用主动放弃已分配内存（只读数据被丢弃、需要时再从闪存重新装入，释放失败可能被终止），Android 在空闲内存低时终止应用，但会先把应用状态写入闪存以便快速重启，两者都支持分页。",
          "en": "Swapping temporarily moves a process out of memory to a backing store and brings it back later for continued execution, so that the total physical memory needed by processes can exceed physical memory; the backing store is a fast disk large enough to accommodate copies of all memory images for all users and able to provide direct access to them. Roll out and roll in is a variant of swapping used with priority-based scheduling algorithms, in which a lower-priority process is swapped out so that a higher-priority process can be loaded and executed. The major part of swap time is transfer time, and the total transfer time is directly proportional to the amount of memory swapped, as when a 100-megabyte process swapped to a hard disk with a transfer rate of 50 megabytes per second takes 2000 milliseconds to swap out, giving 4000 milliseconds or 4 seconds for a swap out plus swap in of the same sized process. Swapping is also constrained by pending I/O, since a process cannot be swapped out while its I/O is in progress or the I/O would occur to the wrong process, although I/O can always be transferred to kernel space first and then to the device, which is known as double buffering and adds overhead. Standard swapping is not used in modern operating systems, where modified versions are common and swapping starts only when free memory is extremely low; mobile systems typically do not support swapping because they use flash memory with limited space and write cycles and poor throughput between flash memory and the CPU, so iOS asks apps to relinquish allocated memory voluntarily, throwing out read-only data that is reloaded from flash if needed and terminating apps that fail to free memory, while Android terminates apps when free memory is low but first writes application state to flash for fast restart, and both operating systems support paging.",
          "ms": "Penukaran memindahkan proses keluar daripada ingatan ke storan sandaran buat sementara dan membawanya kembali kemudian untuk meneruskan pelaksanaan, supaya jumlah ingatan fizikal yang diperlukan proses boleh melebihi ingatan fizikal; storan sandaran ialah cakera pantas yang cukup besar untuk menampung salinan semua imej ingatan bagi semua pengguna dan boleh memberikan capaian terus kepadanya. Gulung keluar dan gulung masuk ialah variasi penukaran yang digunakan dengan algoritma penjadualan berasaskan keutamaan, iaitu proses berkeutamaan rendah ditukar keluar supaya proses berkeutamaan tinggi boleh dimuatkan dan dilaksanakan. Bahagian utama masa penukaran ialah masa pemindahan, dan jumlah masa pemindahan berkadar terus dengan jumlah ingatan yang ditukar, seperti proses 100 megabait yang ditukar ke cakera keras dengan kadar pemindahan 50 megabait sesaat mengambil 2000 milisaat untuk ditukar keluar, menjadikan 4000 milisaat atau 4 saat bagi penukaran keluar dan masuk proses yang sama saiz. Penukaran juga terhad oleh I/O yang belum selesai, kerana proses tidak boleh ditukar keluar semasa I/O sedang berjalan atau I/O itu akan berlaku pada proses yang salah, walaupun I/O boleh sentiasa dipindahkan ke ruang kernel dahulu dan kemudian ke peranti, yang dikenali sebagai penimbalan berganda dan menambah overhed. Penukaran standard tidak digunakan dalam sistem pengendalian moden, yang menggunakan versi ubah suai dan hanya menukar apabila ingatan kosong sangat rendah; sistem mudah alih biasanya tidak menyokong penukaran kerana menggunakan memori kilat dengan ruang dan kitaran tulis yang terhad serta daya pemprosesan yang lemah antara memori kilat dengan CPU, jadi iOS meminta aplikasi melepaskan ingatan yang diperuntukkan secara sukarela dengan membuang data baca sahaja yang dimuatkan semula daripada kilat jika perlu dan menamatkan aplikasi yang gagal melepaskannya, manakala Android menamatkan aplikasi apabila ingatan kosong rendah tetapi menulis keadaan aplikasi ke kilat dahulu untuk permulaan semula yang pantas, dan kedua-dua sistem menyokong penghalaman."
        }
      ],
      "terms": [
        {
          "en": "Logical Address",
          "zh": "逻辑地址",
          "ms": "Alamat Logik",
          "def": {
            "zh": "由 CPU 产生的地址，又称虚拟地址，用户程序只看到这种地址。",
            "en": "The address generated by the CPU, also called a virtual address, and the only kind of address a user program sees.",
            "ms": "Alamat yang dijana oleh CPU, juga dipanggil alamat maya, dan satu-satunya jenis alamat yang dilihat program pengguna."
          }
        },
        {
          "en": "Physical Address",
          "zh": "物理地址",
          "ms": "Alamat Fizikal",
          "def": {
            "zh": "内存单元实际看到的地址，在执行时绑定方案中与逻辑地址不同。",
            "en": "The address seen by the memory unit, which differs from the logical address under execution-time binding.",
            "ms": "Alamat yang dilihat oleh unit ingatan, yang berbeza daripada alamat logik dalam pengikatan masa pelaksanaan."
          }
        },
        {
          "en": "Memory-Management Unit (MMU)",
          "zh": "内存管理单元",
          "ms": "Unit Pengurusan Ingatan (MMU)",
          "def": {
            "zh": "运行时把虚拟地址映射为物理地址的硬件设备，最简单方案用重定位寄存器把偏移加到每个逻辑地址上。",
            "en": "The hardware device that maps virtual to physical addresses at run time; in the simplest scheme a relocation register adds its value to every logical address.",
            "ms": "Peranti perkakasan yang memetakan alamat maya kepada alamat fizikal semasa masa larian; dalam skim paling mudah daftar relokasi menambah nilainya pada setiap alamat logik."
          }
        },
        {
          "en": "Base and Limit Registers",
          "zh": "基址与限长寄存器",
          "ms": "Daftar Asas dan Had",
          "def": {
            "zh": "定义进程逻辑地址空间的一对寄存器，CPU 检查用户模式下的每次访问是否落在其间，装入它们的指令是特权指令。",
            "en": "A pair of registers defining a process's logical address space; the CPU checks every user-mode access against them and the instructions that load them are privileged.",
            "ms": "Sepasang daftar yang menentukan ruang alamat logik proses; CPU memeriksa setiap capaian mod pengguna terhadapnya dan arahan yang memuatkannya ialah arahan istimewa."
          }
        },
        {
          "en": "Address Binding",
          "zh": "地址绑定",
          "ms": "Pengikatan Alamat",
          "def": {
            "zh": "把指令与数据映射到内存地址的过程，可在编译时、装入时或执行时发生。",
            "en": "The mapping of instructions and data to memory addresses, which may occur at compile time, load time or execution time.",
            "ms": "Pemetaan arahan dan data kepada alamat ingatan, yang boleh berlaku pada masa kompil, masa muat atau masa pelaksanaan."
          }
        },
        {
          "en": "Dynamic Loading / Dynamic Linking / Stub",
          "zh": "动态装入 / 动态链接 / 桩",
          "ms": "Pemuatan Dinamik / Pautan Dinamik / Stub",
          "def": {
            "zh": "例程在被调用时才装入内存的技术，未使用的例程永远不会被装入，从而更好地利用内存空间。链接推迟到执行时进行，用一小段桩代码定位内存中的库例程，用该例程的地址替换自己并执行，常用于共享库。",
            "en": "A technique in which a routine is not loaded until it is called, so unused routines are never loaded and memory space is used better. Linking postponed until execution time, using a small stub that locates the library routine in memory, replaces itself with its address and executes it, as used for shared libraries.",
            "ms": "Teknik yang rutin tidak dimuatkan sehingga ia dipanggil, jadi rutin yang tidak digunakan tidak pernah dimuatkan dan ruang ingatan digunakan dengan lebih baik. Pautan yang ditangguhkan sehingga masa pelaksanaan, menggunakan stub kecil yang mencari rutin pustaka dalam ingatan, menggantikan dirinya dengan alamatnya dan melaksanakannya, seperti yang digunakan untuk pustaka dikongsi."
          }
        },
        {
          "en": "Hole",
          "zh": "空洞",
          "ms": "Lubang",
          "def": {
            "zh": "连续分配中散布在内存里的可用内存块，进程到达时从足够大的空洞中获得内存。",
            "en": "A block of available memory scattered through memory in contiguous allocation; a process arriving is allocated memory from a hole large enough for it.",
            "ms": "Blok ingatan tersedia yang bertaburan dalam ingatan pada peruntukan bersebelahan; proses yang tiba diperuntukkan ingatan daripada lubang yang cukup besar."
          }
        },
        {
          "en": "First Fit / Best Fit / Worst Fit",
          "zh": "首次适应 / 最佳适应 / 最差适应",
          "ms": "Suai Pertama / Suai Terbaik / Suai Terburuk",
          "def": {
            "zh": "三种动态存储分配策略：分别分配第一个足够大的空洞、最小的足够大的空洞和最大的空洞；前两者在速度与利用率上优于最差适应。",
            "en": "Three dynamic storage-allocation strategies that allocate the first hole big enough, the smallest hole big enough and the largest hole respectively; the first two beat worst fit in speed and utilisation.",
            "ms": "Tiga strategi peruntukan storan dinamik yang masing-masing memperuntukkan lubang pertama yang cukup besar, lubang terkecil yang cukup besar dan lubang terbesar; dua yang pertama mengatasi suai terburuk dari segi kelajuan dan penggunaan."
          }
        },
        {
          "en": "External / Internal Fragmentation",
          "zh": "外部碎片 / 内部碎片",
          "ms": "Pecahan Luaran / Dalaman",
          "def": {
            "zh": "外部碎片指空闲内存总量足够但不连续；内部碎片指分配的内存比请求的大，差额在分区内部未被使用。",
            "en": "External fragmentation means the total free memory suffices but is not contiguous, while internal fragmentation means allocated memory is larger than requested and the difference is unused inside the partition.",
            "ms": "Pecahan luaran bermaksud jumlah ingatan kosong mencukupi tetapi tidak bersebelahan, manakala pecahan dalaman bermaksud ingatan yang diperuntukkan lebih besar daripada yang diminta dan perbezaannya tidak digunakan dalam bahagian itu."
          }
        },
        {
          "en": "Compaction",
          "zh": "紧凑",
          "ms": "Pemadatan",
          "def": {
            "zh": "通过移动内存内容把全部空闲内存合并成一个大块以减少外部碎片，只在重定位是动态且在执行时进行时才可行。",
            "en": "Shuffling memory contents to place all free memory together in one large block to reduce external fragmentation; possible only if relocation is dynamic and done at execution time.",
            "ms": "Mengalih kandungan ingatan untuk menghimpun semua ingatan kosong menjadi satu blok besar bagi mengurangkan pecahan luaran; hanya mungkin jika relokasi dinamik dan dilakukan pada masa pelaksanaan."
          }
        },
        {
          "en": "Paging / Page / Frame",
          "zh": "分页 / 页 / 帧",
          "ms": "Penghalaman / Halaman / Rangka",
          "def": {
            "zh": "把物理内存划分为固定大小的帧、逻辑内存划分为同样大小的页的技术，使进程的物理地址空间可以不连续并避免外部碎片。",
            "en": "A technique that divides physical memory into fixed-sized frames and logical memory into pages of the same size, letting a process's physical address space be noncontiguous and avoiding external fragmentation.",
            "ms": "Teknik yang membahagikan ingatan fizikal kepada rangka bersaiz tetap dan ingatan logik kepada halaman yang sama saiz, membolehkan ruang alamat fizikal proses tidak bersebelahan dan mengelakkan pecahan luaran."
          }
        },
        {
          "en": "Page Table / PTBR",
          "zh": "页表 / 页表基址寄存器",
          "ms": "Jadual Halaman / PTBR",
          "def": {
            "zh": "保存逻辑页到物理帧映射的表，存放在主存中，由页表基址寄存器指向，页表长度寄存器给出其大小。",
            "en": "The table holding the mapping from logical pages to physical frames, kept in main memory, pointed to by the page-table base register with its size given by the page-table length register.",
            "ms": "Jadual yang menyimpan pemetaan halaman logik kepada rangka fizikal, disimpan dalam ingatan utama, ditunjuk oleh daftar asas jadual halaman dan saiznya diberikan oleh daftar panjang jadual halaman."
          }
        },
        {
          "en": "Translation Look-aside Buffer (TLB)",
          "zh": "转换检测缓冲区",
          "ms": "Penimbal Sisi Terjemahan (TLB)",
          "def": {
            "zh": "存放页表项的高速相联存储器，解决每次访问需要两次内存访问的问题，通常有 64–1024 项，可用 ASID 区分进程。",
            "en": "A fast associative memory holding page-table entries that solves the two-memory-access problem; it typically has 64 to 1,024 entries and may use ASIDs to distinguish processes.",
            "ms": "Ingatan bersekutu pantas yang menyimpan entri jadual halaman bagi menyelesaikan masalah dua capaian ingatan; biasanya mempunyai 64 hingga 1,024 entri dan mungkin menggunakan ASID untuk membezakan proses."
          }
        },
        {
          "en": "Effective Access Time (EAT)",
          "zh": "有效访问时间",
          "ms": "Masa Capaian Berkesan (EAT)",
          "def": {
            "zh": "考虑 TLB 命中率后的平均访存时间，如访存 10 纳秒、命中率 80% 时 EAT = 0.80×10 + 0.20×20 = 12 纳秒。",
            "en": "The average memory access time after accounting for the TLB hit ratio, for example with 10 nanosecond memory access and an 80 percent hit ratio EAT equals 0.80 times 10 plus 0.20 times 20, that is 12 nanoseconds.",
            "ms": "Purata masa capaian ingatan selepas mengambil kira nisbah hit TLB, contohnya dengan capaian ingatan 10 nanosaat dan nisbah hit 80 peratus, EAT sama dengan 0.80 kali 10 tambah 0.20 kali 20, iaitu 12 nanosaat."
          }
        },
        {
          "en": "Swapping / Backing Store",
          "zh": "交换 / 后备存储器",
          "ms": "Penukaran / Storan Sandaran",
          "def": {
            "zh": "交换是把进程暂时换出到后备存储器、需要时再换回；后备存储器是能容纳所有用户内存映像副本并能直接访问的快速磁盘。",
            "en": "Swapping moves a process temporarily out to a backing store and back when needed, the backing store being a fast disk large enough to hold copies of all memory images with direct access.",
            "ms": "Penukaran memindahkan proses keluar ke storan sandaran buat sementara dan kembali apabila diperlukan, dengan storan sandaran ialah cakera pantas yang cukup besar untuk menampung salinan semua imej ingatan dan boleh dicapai terus."
          }
        }
      ],
      "diagrams": [
        {
          "type": "flow",
          "dir": "v",
          "title": {
            "zh": "分页的地址转换过程",
            "en": "Address Translation in Paging",
            "ms": "Terjemahan Alamat dalam Penghalaman"
          },
          "caption": {
            "zh": "CPU 产生的逻辑地址分为页号 p 与偏移 d；先用 TLB 或页表把 p 换成帧号 f，再与 d 拼接成物理地址。",
            "en": "The logical address generated by the CPU splits into page number p and offset d; p is replaced by frame number f using the TLB or the page table, and f is combined with d to form the physical address.",
            "ms": "Alamat logik yang dijana CPU terbahagi kepada nombor halaman p dan offset d; p digantikan dengan nombor rangka f menggunakan TLB atau jadual halaman, dan f digabungkan dengan d untuk membentuk alamat fizikal."
          },
          "steps": [
            {
              "label": {
                "zh": "CPU 产生逻辑地址",
                "en": "CPU generates a logical address",
                "ms": "CPU menjana alamat logik"
              },
              "note": {
                "zh": "用户程序只看到逻辑地址",
                "en": "The user program sees only logical addresses",
                "ms": "Program pengguna hanya melihat alamat logik"
              }
            },
            {
              "label": {
                "zh": "拆分为页号 p 与页内偏移 d",
                "en": "Split into page number p and offset d",
                "ms": "Dipecahkan kepada nombor halaman p dan offset d"
              },
              "note": {
                "zh": "逻辑空间 2^m、页大小 2^n 时 p 占高 m−n 位",
                "en": "For a 2^m space and 2^n pages, p takes the high m minus n bits",
                "ms": "Bagi ruang 2^m dan halaman 2^n, p mengambil m tolak n bit tinggi"
              }
            },
            {
              "label": {
                "zh": "查 TLB（相联存储器）",
                "en": "Look up the TLB (associative memory)",
                "ms": "Cari dalam TLB (ingatan bersekutu)"
              },
              "note": {
                "zh": "命中则直接取得帧号",
                "en": "A hit returns the frame number directly",
                "ms": "Hit memulangkan nombor rangka terus"
              }
            },
            {
              "label": {
                "zh": "未命中则查页表（PTBR 指向）",
                "en": "On a miss, use the page table pointed to by PTBR",
                "ms": "Jika gagal, guna jadual halaman yang ditunjuk PTBR"
              },
              "note": {
                "zh": "页号为索引，取出帧号 f",
                "en": "The page number is the index and yields frame number f",
                "ms": "Nombor halaman ialah indeks dan menghasilkan nombor rangka f"
              }
            },
            {
              "label": {
                "zh": "物理地址 = 帧号 f + 偏移 d",
                "en": "Physical address = frame number f plus offset d",
                "ms": "Alamat fizikal = nombor rangka f tambah offset d"
              },
              "note": {
                "zh": "送往内存单元读取数据",
                "en": "Sent to the memory unit to fetch the data",
                "ms": "Dihantar ke unit ingatan untuk mengambil data"
              }
            }
          ]
        },
        {
          "type": "matrix",
          "title": {
            "zh": "三种动态存储分配算法的对比",
            "en": "Comparison of Three Dynamic Storage-Allocation Algorithms",
            "ms": "Perbandingan Tiga Algoritma Peruntukan Storan Dinamik"
          },
          "cols": [
            {
              "zh": "分配规则",
              "en": "Rule",
              "ms": "Peraturan"
            },
            {
              "zh": "剩余空洞",
              "en": "Leftover hole",
              "ms": "Lubang baki"
            },
            {
              "zh": "搜索开销",
              "en": "Search cost",
              "ms": "Kos carian"
            }
          ],
          "rows": [
            {
              "head": {
                "zh": "首次适应",
                "en": "First Fit",
                "ms": "Suai Pertama"
              },
              "cells": [
                {
                  "zh": "第一个足够大的空洞",
                  "en": "First hole that is big enough",
                  "ms": "Lubang pertama yang cukup besar"
                },
                {
                  "zh": "大小不定",
                  "en": "Variable",
                  "ms": "Tidak tetap"
                },
                {
                  "zh": "最小，通常不必搜索整个列表",
                  "en": "Smallest, usually need not search the whole list",
                  "ms": "Paling kecil, biasanya tidak perlu mencari seluruh senarai"
                }
              ]
            },
            {
              "head": {
                "zh": "最佳适应",
                "en": "Best Fit",
                "ms": "Suai Terbaik"
              },
              "cells": [
                {
                  "zh": "最小的足够大空洞",
                  "en": "Smallest hole that is big enough",
                  "ms": "Lubang terkecil yang cukup besar"
                },
                {
                  "zh": "最小",
                  "en": "Smallest",
                  "ms": "Paling kecil"
                },
                {
                  "zh": "要搜索整个列表（除非按大小排序）",
                  "en": "Must search the whole list unless ordered by size",
                  "ms": "Mesti mencari seluruh senarai kecuali tersusun mengikut saiz"
                }
              ]
            },
            {
              "head": {
                "zh": "最差适应",
                "en": "Worst Fit",
                "ms": "Suai Terburuk"
              },
              "cells": [
                {
                  "zh": "最大的空洞",
                  "en": "Largest hole",
                  "ms": "Lubang terbesar"
                },
                {
                  "zh": "最大，可能很快又不可用",
                  "en": "Largest, may soon be unusable",
                  "ms": "Paling besar, mungkin cepat tidak boleh digunakan"
                },
                {
                  "zh": "要搜索整个列表，速度与利用率都较差",
                  "en": "Must search the whole list and is worse in speed and utilisation",
                  "ms": "Mesti mencari seluruh senarai dan lebih lemah dari segi kelajuan serta penggunaan"
                }
              ]
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必考计算：分页地址转换与有效访问时间 EAT。记住页号 p 是页表索引、偏移 d 不变，物理地址 = 帧号 f 拼接 d；EAT 按命中率加权，如 10 纳秒访存、80% 命中率时 EAT = 0.80×10 + 0.20×20 = 12 纳秒。",
          "en": "A guaranteed calculation covers paging address translation and effective access time. Remember that the page number p indexes the page table, the offset d is unchanged, and the physical address is frame number f concatenated with d; EAT is weighted by the hit ratio, so with 10 nanosecond memory access and an 80 percent hit ratio EAT equals 0.80 times 10 plus 0.20 times 20, that is 12 nanoseconds.",
          "ms": "Pengiraan yang pasti keluar meliputi terjemahan alamat penghalaman dan masa capaian berkesan. Ingat bahawa nombor halaman p mengindeks jadual halaman, offset d tidak berubah, dan alamat fizikal ialah nombor rangka f digabungkan dengan d; EAT ditimbang mengikut nisbah hit, jadi dengan capaian ingatan 10 nanosaat dan nisbah hit 80 peratus, EAT sama dengan 0.80 kali 10 tambah 0.20 kali 20, iaitu 12 nanosaat."
        },
        {
          "zh": "易错点：把外部碎片与内部碎片写反。外部碎片是“空闲内存总量够但不连续”，发生在连续分配与可变分区；内部碎片是“分到的比要的多、差额浪费在分区内部”，分页仍然存在内部碎片（最坏 1 帧 − 1 字节，平均半帧）。",
          "en": "A common mistake is swapping external and internal fragmentation. External fragmentation means the total free memory suffices but is not contiguous and occurs with contiguous allocation and variable partitions, whereas internal fragmentation means more memory is allocated than requested and the difference is wasted inside the partition, which still happens in paging with a worst case of one frame minus one byte and an average of half a frame.",
          "ms": "Kesilapan biasa ialah menukar pecahan luaran dengan dalaman. Pecahan luaran bermaksud jumlah ingatan kosong mencukupi tetapi tidak bersebelahan dan berlaku dalam peruntukan bersebelahan serta pembahagian boleh ubah, manakala pecahan dalaman bermaksud ingatan yang diperuntukkan melebihi yang diminta dan perbezaannya terbuang dalam bahagian itu, yang masih berlaku dalam penghalaman dengan kes terburuk satu rangka tolak satu bait dan purata separuh rangka."
        },
        {
          "zh": "常考三种分配算法的比较：首次适应与最佳适应在速度和存储利用率上都优于最差适应；最佳适应产生最小的剩余空洞但必须搜索整个列表；最差适应产生最大的剩余空洞。",
          "en": "Comparison of the three allocation algorithms is often examined: first fit and best fit are better than worst fit in both speed and storage utilisation, best fit produces the smallest leftover hole but must search the entire list, and worst fit produces the largest leftover hole.",
          "ms": "Perbandingan tiga algoritma peruntukan sering diuji: suai pertama dan suai terbaik lebih baik daripada suai terburuk dari segi kelajuan dan penggunaan storan, suai terbaik menghasilkan lubang baki terkecil tetapi mesti mencari seluruh senarai, dan suai terburuk menghasilkan lubang baki terbesar."
        },
        {
          "zh": "要能说明为什么页表要分级：32 位地址空间、4 KB 页时页表有 100 万个表项，每项 4 字节就是每进程 4 MB；两级页表把 20 位页号再分为 10 位 p1 与 10 位 p2，64 位则需要更多级；哈希页表适合大于 32 位的地址空间，反置页表每物理页一个表项，省内存但查找慢且共享内存难实现。",
          "en": "Be able to explain why page tables are hierarchical: with a 32-bit address space and 4-kilobyte pages the page table has one million entries, which at 4 bytes each means 4 megabytes per process; a two-level page table splits the 20-bit page number into a 10-bit p1 and a 10-bit p2, and 64-bit addresses need more levels; hashed page tables suit address spaces larger than 32 bits, and an inverted page table keeps one entry per physical page, saving memory but slowing lookups and complicating shared memory.",
          "ms": "Anda mesti boleh menerangkan mengapa jadual halaman berhierarki: dengan ruang alamat 32 bit dan halaman 4 kilobait, jadual halaman mempunyai satu juta entri, iaitu 4 megabait bagi setiap proses pada 4 bait setiap entri; jadual halaman dua peringkat membahagikan nombor halaman 20 bit kepada p1 10 bit dan p2 10 bit, dan alamat 64 bit memerlukan lebih banyak peringkat; jadual halaman berhash sesuai untuk ruang alamat melebihi 32 bit, dan jadual halaman terbalik menyimpan satu entri bagi setiap halaman fizikal, menjimatkan ingatan tetapi memperlahankan carian dan menyukarkan ingatan dikongsi."
        }
      ],
      "mnemonic": {
        "zh": "三个绑定点：编译、装入、执行；三个分配法：首次、最佳、最差；分页两步走：查页表、拼偏移。",
        "en": "Three binding stages: compile, load, execute. Three allocation algorithms: first, best, worst fit. Paging in two steps: look up the page table, then concatenate the offset.",
        "ms": "Tiga peringkat pengikatan: kompil, muat, laksana. Tiga algoritma peruntukan: suai pertama, terbaik, terburuk. Penghalaman dua langkah: cari jadual halaman, kemudian gabungkan offset."
      }
    },
    {
      "id": "os-08",
      "num": 8,
      "title": {
        "zh": "虚拟内存",
        "en": "Virtual Memory",
        "ms": "Ingatan Maya"
      },
      "file": "os/CHAPTER 8 DDWD 2663.pptx",
      "pages": 54,
      "summary": {
        "zh": "本章把逻辑内存与物理内存分离开来，使程序只需部分装入内存就能运行。程序通常用不到全部代码（错误处理代码、不常用例程、大型数据结构），因此可以采用请求分页：页只在被访问时才装入，页表中每个表项用有效-无效位标记该页是否在内存，访问无效位的页就产生缺页并陷入操作系统，由操作系统找到空闲帧、把页调入、修改页表并重新执行引起缺页的指令。本章还讲解写时复制、页置换（FIFO、最优、LRU 及其近似算法）、帧分配，以及抖动与局部性原理，并给出有效访问时间的计算方法与缺页率的量级要求。",
        "en": "This chapter separates logical memory from physical memory so that a program can run while only part of it is in memory. Since a program rarely uses all of its code, such as error-handling code, unusual routines and large data structures, demand paging can be used: a page is brought into memory only when it is referenced, each page-table entry carries a valid-invalid bit showing whether the page is memory resident, a reference to an invalid entry causes a page fault that traps to the operating system, and the operating system finds a free frame, brings in the page, updates the tables and restarts the instruction that caused the fault. The chapter also covers copy-on-write, page replacement with FIFO, optimal and LRU algorithms and their approximations, frame allocation, and thrashing with the locality model, and it gives the formula for effective access time together with the order of magnitude a page-fault rate must have.",
        "ms": "Bab ini memisahkan ingatan logik daripada ingatan fizikal supaya program boleh berjalan walaupun hanya sebahagiannya berada dalam ingatan. Oleh sebab program jarang menggunakan seluruh kodnya seperti kod pengendalian ralat, rutin yang jarang digunakan dan struktur data yang besar, penghalaman atas permintaan boleh digunakan: halaman dibawa ke dalam ingatan hanya apabila dirujuk, setiap entri jadual halaman membawa bit sah-tidak sah yang menunjukkan sama ada halaman itu berada dalam ingatan, rujukan kepada entri tidak sah menyebabkan kesalahan halaman yang memerangkap kepada sistem pengendalian, dan sistem pengendalian mencari rangka kosong, membawa masuk halaman itu, mengemas kini jadual dan memulakan semula arahan yang menyebabkan kesalahan itu. Bab ini juga merangkumi salin semasa tulis, penggantian halaman dengan algoritma FIFO, optimum dan LRU serta penghampirannya, peruntukan rangka, dan pelagaan dengan model lokaliti, dan ia memberikan formula masa capaian berkesan berserta urutan magnitud yang diperlukan bagi kadar kesalahan halaman."
      },
      "points": [
        {
          "zh": "代码必须装入内存才能执行，但整个程序很少被完全用到（错误处理代码、不常用例程、大型数据结构），而且程序代码不需要同时全部在内存中。允许执行部分装入的程序带来很多好处：程序不再受物理内存大小限制，每个运行中的程序占用更少内存从而可以同时运行更多程序，CPU 利用率和吞吐量提高而响应时间与周转时间不增加，装入或交换程序所需的 I/O 更少因而每个用户程序运行得更快。",
          "en": "Code needs to be in memory to execute, but the entire program is rarely used, as with error-handling code, unusual routines and large data structures, and the whole program code is not needed at the same time. Allowing partially loaded programs to execute brings many benefits: the program is no longer constrained by the limits of physical memory, each program takes less memory while running so more programs can run at the same time, CPU utilisation and throughput increase with no increase in response time or turnaround time, and less I/O is needed to load or swap programs so each user program runs faster.",
          "ms": "Kod perlu berada dalam ingatan untuk dilaksanakan, tetapi keseluruhan program jarang digunakan, seperti kod pengendalian ralat, rutin yang tidak biasa dan struktur data yang besar, dan seluruh kod program tidak diperlukan pada masa yang sama. Membenarkan program yang dimuatkan sebahagian dilaksanakan membawa banyak faedah: program tidak lagi terhad oleh saiz ingatan fizikal, setiap program mengambil ingatan yang lebih sedikit semasa berjalan sehingga lebih banyak program boleh berjalan serentak, penggunaan CPU dan daya pemprosesan meningkat tanpa menambah masa tindak balas atau masa pusingan, dan kurang I/O diperlukan untuk memuatkan atau menukar program sehingga setiap program pengguna berjalan lebih pantas."
        },
        {
          "zh": "虚拟内存把用户的逻辑内存与物理内存分离开来：只需部分程序在内存中就能执行，因此逻辑地址空间可以远大于物理地址空间，还允许地址空间被多个进程共享并更高效地创建进程。虚拟地址空间是进程在内存中存放方式的逻辑视图，通常从地址 0 开始一直到空间末尾；典型设计让栈从最大逻辑地址向下增长、堆向上增长，两者之间未使用的地址空间是空洞，直到堆或栈增长到新的页时才需要物理内存，这使稀疏地址空间成为可能，为增长、动态链接库留出空间；系统库通过映射到虚拟地址空间共享，共享内存通过把页以读写方式映射到虚拟地址空间实现，fork() 时也可以共享页从而加快进程创建。虚拟内存可以用请求分页或请求分段实现。",
          "en": "Virtual memory separates user logical memory from physical memory: only part of the program needs to be in memory for execution, so the logical address space can be much larger than the physical address space, and it also allows address spaces to be shared by several processes and permits more efficient process creation. The virtual address space is the logical view of how a process is stored in memory, usually starting at address 0 and running contiguously to the end of the space; a typical design lets the stack start at the maximum logical address and grow down while the heap grows up, with the unused space between them a hole, and no physical memory is needed until the heap or stack grows to a new page, which enables sparse address spaces with room for growth and dynamically linked libraries. System libraries are shared by mapping them into the virtual address space, shared memory is achieved by mapping pages read-write into the virtual address space, and pages can be shared during fork(), speeding up process creation. Virtual memory can be implemented through demand paging or demand segmentation.",
          "ms": "Ingatan maya memisahkan ingatan logik pengguna daripada ingatan fizikal: hanya sebahagian program perlu berada dalam ingatan untuk dilaksanakan, jadi ruang alamat logik boleh jauh lebih besar daripada ruang alamat fizikal, dan ia juga membenarkan ruang alamat dikongsi beberapa proses serta membolehkan penciptaan proses yang lebih cekap. Ruang alamat maya ialah pandangan logik tentang cara proses disimpan dalam ingatan, biasanya bermula pada alamat 0 dan berterusan hingga hujung ruang; reka bentuk lazim membenarkan tindanan bermula pada alamat logik maksimum dan berkembang ke bawah manakala timbunan berkembang ke atas, dengan ruang yang tidak digunakan antara keduanya sebagai lubang, dan tiada ingatan fizikal diperlukan sehingga timbunan atau tindanan berkembang ke halaman baharu, yang membolehkan ruang alamat jarang dengan ruang untuk pertumbuhan dan pustaka berpaut dinamik. Pustaka sistem dikongsi dengan memetakannya ke dalam ruang alamat maya, ingatan dikongsi dicapai dengan memetakan halaman secara baca tulis ke dalam ruang alamat maya, dan halaman boleh dikongsi semasa fork() sehingga mempercepat penciptaan proses. Ingatan maya boleh dilaksanakan melalui penghalaman atas permintaan atau pengsegmentan atas permintaan."
        },
        {
          "zh": "请求分页不把整个进程一次装入内存，而是只在需要时才把页调入：I/O 更少、没有不必要的 I/O、内存需求更少、响应更快、可支持更多用户，类似于带交换的分页系统。当引用某个页时，若它是无效引用就中止进程，若只是不在内存中就要把它调入。惰性交换程序（pager）在页被需要之前绝不把它换入。实现请求分页需要新的 MMU 功能：页表中每个表项关联一个有效-无效位（v 表示在内存中、i 表示不在内存中），初始时所有表项都置为 i；MMU 地址转换时若发现该位为 i 就产生缺页。硬件支持包括带有效/无效位的页表、二级存储（带交换空间的交换设备）以及指令重启能力。",
          "en": "Demand paging does not bring the entire process into memory at load time but brings a page in only when it is needed, giving less I/O and no unnecessary I/O, less memory needed, faster response and support for more users, much like a paging system with swapping. When a page is referenced, an invalid reference causes the process to abort, whereas a page that is simply not in memory must be brought in, and the lazy swapper or pager never swaps a page into memory unless it will be needed. Implementing demand paging needs new MMU functionality: each page-table entry is associated with a valid-invalid bit, where v means the page is memory resident and i means it is not, all entries initially being set to i, and during address translation a bit of i causes a page fault. The hardware support required includes a page table with a valid-invalid bit, secondary memory in the form of a swap device with swap space, and the ability to restart instructions.",
          "ms": "Penghalaman atas permintaan tidak membawa keseluruhan proses ke dalam ingatan semasa pemuatan tetapi membawa halaman masuk hanya apabila diperlukan, memberikan I/O yang lebih sedikit tanpa I/O yang tidak perlu, keperluan ingatan yang lebih rendah, tindak balas yang lebih pantas dan sokongan untuk lebih banyak pengguna, hampir seperti sistem penghalaman dengan penukaran. Apabila sesuatu halaman dirujuk, rujukan tidak sah menyebabkan proses dibatalkan, manakala halaman yang hanya tidak berada dalam ingatan mesti dibawa masuk, dan penukar malas atau pager tidak pernah menukar halaman ke dalam ingatan kecuali ia akan diperlukan. Melaksanakan penghalaman atas permintaan memerlukan fungsi MMU baharu: setiap entri jadual halaman dikaitkan dengan bit sah-tidak sah, iaitu v bermaksud halaman berada dalam ingatan dan i bermaksud tidak, dengan semua entri pada mulanya ditetapkan kepada i, dan semasa terjemahan alamat bit i menyebabkan kesalahan halaman. Sokongan perkakasan yang diperlukan termasuk jadual halaman dengan bit sah-tidak sah, ingatan sekunder berupa peranti tukar dengan ruang tukar, dan keupayaan memulakan semula arahan."
        },
        {
          "zh": "缺页的处理步骤是：对某页的第一次引用会陷入操作系统（缺页）；操作系统查看另一张表判断这是无效引用（中止进程）还是只是不在内存中；找到一个空闲帧；通过调度的磁盘操作把页换入该帧；重置页表等表格表明该页现在在内存中（把验证位置为 v）；重新执行引起缺页的那条指令。",
          "en": "The steps in handling a page fault are: the first reference to a page traps to the operating system, which is a page fault; the operating system looks at another table to decide whether the reference is invalid, in which case the process is aborted, or the page is simply not in memory; it finds a free frame; it swaps the page into that frame through a scheduled disk operation; it resets the tables to indicate that the page is now in memory by setting the validation bit to v; and it restarts the instruction that caused the page fault.",
          "ms": "Langkah mengendalikan kesalahan halaman ialah: rujukan pertama kepada sesuatu halaman memerangkap kepada sistem pengendalian, iaitu kesalahan halaman; sistem pengendalian melihat jadual lain untuk menentukan sama ada rujukan itu tidak sah, yang bermaksud proses dibatalkan, atau halaman itu hanya tidak berada dalam ingatan; ia mencari rangka kosong; ia menukar halaman itu ke dalam rangka tersebut melalui operasi cakera yang dijadualkan; ia menetapkan semula jadual bagi menunjukkan halaman kini berada dalam ingatan dengan menetapkan bit pengesahan kepada v; dan ia memulakan semula arahan yang menyebabkan kesalahan halaman itu."
        },
        {
          "zh": "请求分页的最坏情况要经历：陷入操作系统、保存用户寄存器与进程状态、判断中断是缺页、检查页引用是否合法并确定页在磁盘上的位置、向空闲帧发出磁盘读请求（还要在设备队列中等待、等待寻道与旋转延迟、开始传输），等待期间把 CPU 分配给其他用户，收到磁盘 I/O 完成中断后保存该用户状态、确认中断来自磁盘、修正页表与其他表表明页已在内存、再等待 CPU 分配给自己、恢复寄存器与进程状态以及新的页表，最后继续执行被中断的指令。性能上 EAT = (1 − p) × 访存时间 + p ×（缺页开销 + 换出页 + 换入页），其中 p 是缺页率。若访存时间为 200 纳秒、平均缺页服务时间为 8 毫秒，则 EAT = 200 + p × 7,999,800；每 1000 次访问出现一次缺页时 EAT = 8.2 微秒，慢了 40 倍；若要把性能下降控制在 10% 以内，需要 p < 0.0000025，也就是每 400,000 次内存访问才允许一次缺页。优化手段包括：交换空间的 I/O 比文件系统 I/O 快（即使在同一设备上，因为交换空间以更大的块分配、管理更少），旧版 BSD UNIX 在装入时就把整个进程映像复制到交换空间，Solaris 与现在的 BSD 则从磁盘上的程序二进制按需分页，释放帧时直接丢弃而不换出；不与文件关联的页（如栈和堆）称为匿名内存，在内存中被修改但还没写回文件系统的页也要写入交换空间；移动系统通常不支持交换，而是从文件系统按需分页并回收只读页（如代码）。",
          "en": "The worst case of demand paging involves trapping to the operating system, saving the user registers and process state, determining that the interrupt was a page fault, checking that the page reference was legal and finding the page on disk, and issuing a read from disk to a free frame, which includes waiting in the device queue, waiting for seek and latency time and beginning the transfer; while waiting the CPU is allocated to another user, and when the disk I/O completion interrupt arrives the system saves that user's state, determines that the interrupt came from the disk, corrects the page table and other tables to show the page is now in memory, waits for the CPU again, restores the registers, process state and the new page table and then resumes the interrupted instruction. In performance terms, EAT equals (1 minus p) times memory access time plus p times the page-fault overhead plus swap out plus swap in, where p is the page-fault rate. With a memory access time of 200 nanoseconds and an average page-fault service time of 8 milliseconds, EAT equals 200 plus p times 7,999,800; if one access in 1,000 causes a fault, EAT is 8.2 microseconds, a slowdown by a factor of 40, and keeping the degradation below 10 percent requires p less than 0.0000025, that is fewer than one page fault in every 400,000 memory accesses. Optimisations include using swap-space I/O, which is faster than file-system I/O even on the same device because swap is allocated in larger chunks and needs less management; older BSD UNIX copied the entire process image to swap space at load time, whereas Solaris and current BSD demand page from the program binary on disk and discard pages rather than paging them out when freeing a frame, although pages not associated with a file, called anonymous memory, such as the stack and heap, must still be written to swap space; and mobile systems typically do not support swapping, instead demand paging from the file system and reclaiming read-only pages such as code.",
          "ms": "Kes terburuk penghalaman atas permintaan melibatkan perangkap kepada sistem pengendalian, menyimpan daftar pengguna dan keadaan proses, menentukan bahawa selangan itu ialah kesalahan halaman, memeriksa sama ada rujukan halaman itu sah dan mencari halaman pada cakera, serta mengeluarkan permintaan baca daripada cakera ke rangka kosong, yang merangkumi menunggu dalam baris gilir peranti, menunggu masa seek dan kependaman serta memulakan pemindahan; semasa menunggu CPU diperuntukkan kepada pengguna lain, dan apabila selangan penyempurnaan I/O cakera tiba sistem menyimpan keadaan pengguna itu, menentukan bahawa selangan itu datang daripada cakera, membetulkan jadual halaman dan jadual lain bagi menunjukkan halaman kini berada dalam ingatan, menunggu CPU sekali lagi, memulihkan daftar, keadaan proses dan jadual halaman baharu lalu menyambung semula arahan yang diselangi. Dari segi prestasi, EAT sama dengan (1 tolak p) kali masa capaian ingatan tambah p kali overhed kesalahan halaman tambah tukar keluar tambah tukar masuk, dengan p ialah kadar kesalahan halaman. Dengan masa capaian ingatan 200 nanosaat dan purata masa perkhidmatan kesalahan halaman 8 milisaat, EAT sama dengan 200 tambah p kali 7,999,800; jika satu daripada 1,000 capaian menyebabkan kesalahan, EAT ialah 8.2 mikrosaat, iaitu 40 kali lebih perlahan, dan mengekalkan kemerosotan di bawah 10 peratus memerlukan p kurang daripada 0.0000025, iaitu kurang daripada satu kesalahan halaman bagi setiap 400,000 capaian ingatan. Pengoptimuman termasuk penggunaan I/O ruang tukar yang lebih pantas daripada I/O sistem fail walaupun pada peranti yang sama kerana ruang tukar diperuntukkan dalam ketulan lebih besar dan kurang pengurusan; BSD UNIX lama menyalin seluruh imej proses ke ruang tukar semasa pemuatan, manakala Solaris dan BSD sekarang menghalamkan atas permintaan daripada binari program pada cakera dan membuang halaman dan bukan menukarnya keluar apabila melepaskan rangka, walaupun halaman yang tidak berkaitan dengan fail, dipanggil ingatan awanama seperti tindanan dan timbunan, masih mesti ditulis ke ruang tukar; dan sistem mudah alih biasanya tidak menyokong penukaran, sebaliknya menghalamkan atas permintaan daripada sistem fail dan mengambil semula halaman baca sahaja seperti kod."
        },
        {
          "zh": "写时复制（COW）允许父进程与子进程最初共享内存中的同一批页，只有其中一方修改共享页时才复制该页，因此只需复制被修改的页，进程创建更高效。一般来说空闲页从按需填零的页池中分配，池中必须始终有空闲帧以便快速执行按需分页，避免在缺页时还要先释放帧；页在分配前被清零是为了防止旧数据泄露给新进程。vfork() 是 fork() 的一个变体，它让父进程挂起、子进程使用父进程的写时复制地址空间，设计目的是让子进程随后调用 exec()，因此非常高效。",
          "en": "Copy-on-write (COW) allows both parent and child processes to share the same pages in memory initially, and a shared page is copied only when either process modifies it, so only modified pages are copied and process creation is more efficient. In general free pages are allocated from a pool of zero-fill-on-demand pages, and the pool should always have free frames for fast demand paging so that a frame does not have to be freed while servicing a fault; pages are zeroed before allocation to prevent old data from leaking to the new process. vfork() is a variation of the fork() system call in which the parent suspends and the child uses the copy-on-write address space of the parent, designed so that the child calls exec(), which makes it very efficient.",
          "ms": "Salin semasa tulis (COW) membenarkan kedua-dua proses induk dan anak berkongsi halaman yang sama dalam ingatan pada mulanya, dan halaman yang dikongsi hanya disalin apabila salah satu proses mengubahnya, jadi hanya halaman yang diubah disalin dan penciptaan proses menjadi lebih cekap. Secara umum halaman kosong diperuntukkan daripada kumpulan halaman isi sifar atas permintaan, dan kumpulan itu mesti sentiasa mempunyai rangka kosong untuk penghalaman atas permintaan yang pantas supaya rangka tidak perlu dilepaskan semasa melayani kesalahan; halaman dijadikan sifar sebelum peruntukan bagi menghalang data lama daripada terdedah kepada proses baharu. vfork() ialah variasi panggilan sistem fork() yang menggantung induk dan membenarkan anak menggunakan ruang alamat salin semasa tulis induk, direka supaya anak memanggil exec(), sehingga menjadikannya sangat cekap."
        },
        {
          "zh": "当没有空闲帧时（被进程页、内核和 I/O 缓冲区等占满），就必须进行页置换：在内存中找一个实际上未被使用的页把它换出。为避免过度分配内存，应在缺页服务例程中加入页置换，并用修改位（脏位）减少页传输开销，因为只有被修改过的页才需要写回磁盘。基本的页置换步骤是：确定所需页在磁盘上的位置；找空闲帧——若有空闲帧就用它，若没有就用页置换算法选出一个牺牲帧，若该帧是脏的就写回磁盘；把所需页读入这个（新腾出的）空闲帧并更新页表与帧表；重新执行引起陷阱的指令。注意现在一次缺页可能需要两次页传输（换出加换入），从而增大 EAT。页置换完成了逻辑内存与物理内存的彻底分离，使较小的物理内存也能提供很大的虚拟内存。另外，所有这些算法都是操作系统在猜测未来的页访问；数据库等应用自己更清楚访问模式，而内存密集型应用可能造成双重缓冲（操作系统把页留在内存作为 I/O 缓冲区，应用又为自身工作保留一份），此时可以让操作系统以原始磁盘模式直接把磁盘交给应用，绕过缓冲与加锁。",
          "en": "When there is no free frame, because frames have been used up by process pages and are also in demand by the kernel, I/O buffers and so on, page replacement must be performed: a page in memory that is not really in use is found and paged out. To prevent over-allocation of memory the page-fault service routine should include page replacement, and the modify or dirty bit reduces the overhead of page transfers because only modified pages are written to disk. The basic page-replacement steps are: find the location of the desired page on disk; find a free frame, using it if one exists or otherwise using a page-replacement algorithm to select a victim frame and writing that victim to disk if it is dirty; bring the desired page into the newly free frame and update the page and frame tables; and continue the process by restarting the instruction that caused the trap. Note that a page fault may now require two page transfers, one out and one in, which increases the effective access time. Page replacement completes the separation between logical and physical memory so that a large virtual memory can be provided on a smaller physical memory. In addition, all of these algorithms amount to the operating system guessing about future page access, whereas some applications such as databases have better knowledge, and memory-intensive applications can cause double buffering, where the operating system keeps a copy of the page in memory as an I/O buffer while the application keeps the page for its own work; the operating system can then grant direct access to the disk in raw disk mode, getting out of the way of the application and bypassing buffering and locking.",
          "ms": "Apabila tiada rangka kosong kerana rangka telah digunakan oleh halaman proses dan juga diperlukan oleh kernel, penimbal I/O dan sebagainya, penggantian halaman mesti dilakukan: halaman dalam ingatan yang sebenarnya tidak digunakan dicari dan ditukar keluar. Bagi mengelakkan peruntukan ingatan berlebihan, rutin perkhidmatan kesalahan halaman harus merangkumi penggantian halaman, dan bit ubah atau bit kotor mengurangkan overhed pemindahan halaman kerana hanya halaman yang diubah ditulis ke cakera. Langkah asas penggantian halaman ialah: cari lokasi halaman yang dikehendaki pada cakera; cari rangka kosong, gunakannya jika ada atau jika tidak gunakan algoritma penggantian halaman untuk memilih rangka mangsa dan tulis mangsa itu ke cakera jika ia kotor; bawa halaman yang dikehendaki ke dalam rangka yang baru dikosongkan itu dan kemas kini jadual halaman serta jadual rangka; dan teruskan proses dengan memulakan semula arahan yang menyebabkan perangkap. Perhatikan bahawa kesalahan halaman kini mungkin memerlukan dua pemindahan halaman, satu keluar dan satu masuk, yang meningkatkan masa capaian berkesan. Penggantian halaman melengkapkan pemisahan antara ingatan logik dengan ingatan fizikal supaya ingatan maya yang besar boleh disediakan pada ingatan fizikal yang lebih kecil. Selain itu, semua algoritma ini bermakna sistem pengendalian meneka capaian halaman masa hadapan, manakala sesetengah aplikasi seperti pangkalan data lebih mengetahuinya, dan aplikasi intensif ingatan boleh menyebabkan penimbalan berganda, iaitu sistem pengendalian menyimpan salinan halaman sebagai penimbal I/O manakala aplikasi menyimpan halaman untuk kerjanya sendiri; sistem pengendalian kemudian boleh memberikan capaian terus kepada cakera dalam mod cakera mentah, mengetepikan diri daripada aplikasi dan memintas penimbalan serta penguncian."
        },
        {
          "zh": "页置换算法用一串内存引用（引用串，只写页号而不写完整地址，重复访问同一页不产生缺页）来评价，结果取决于可用帧数。以引用串 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1 与 3 个帧为例：FIFO 用队列跟踪页的年龄，共 15 次缺页，并且可能出现 Belady 异常——增加帧数反而增加缺页（例如引用串 1,2,3,4,1,2,5,1,2,3,4,5）；最优算法 OPT 置换未来最长时间不会被使用的页，共 9 次缺页，但由于无法预知未来，只能用来衡量其他算法的性能；LRU 利用过去的知识而不是未来，置换最长时间未被使用的页，共 12 次缺页，比 FIFO 好但不如 OPT，是常用且总体良好的算法。LRU 的实现有两种：计数器实现为每个页表项配一个计数器，每次通过该表项引用页时把时钟复制到计数器，置换时找最小值的页（需要搜索整张表）；栈实现把页号保存在双向链表中，被引用的页移到栈顶（需改动 6 个指针），更新代价更高但置换时不必搜索。LRU 与 OPT 都属于栈算法，不会有 Belady 异常。",
          "en": "Page-replacement algorithms are evaluated by running them on a particular string of memory references, called a reference string, which lists page numbers rather than full addresses and in which repeated access to the same page does not cause a page fault, and the results depend on the number of frames available. Taking the reference string 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1 with three frames: FIFO tracks the age of pages with a queue and gives 15 page faults, and it can suffer Belady's anomaly in which adding more frames causes more page faults, as with the reference string 1,2,3,4,1,2,5,1,2,3,4,5; the optimal algorithm replaces the page that will not be used for the longest period of time and gives nine page faults, but since the future cannot be read it is used only to measure how well other algorithms perform; and LRU uses past knowledge rather than the future and replaces the page that has not been used for the longest time, giving 12 page faults, better than FIFO but worse than optimal, and it is generally a good and frequently used algorithm. LRU can be implemented in two ways: with counters, where every page-table entry has a counter into which the clock is copied each time the page is referenced and the smallest value is sought at replacement time, requiring a search of the table; or with a stack of page numbers in a doubly linked list, where a referenced page is moved to the top by changing six pointers, which makes each update more expensive but removes the search for a replacement. LRU and optimal are both stack algorithms and do not suffer Belady's anomaly.",
          "ms": "Algoritma penggantian halaman dinilai dengan menjalankannya pada satu rentetan rujukan ingatan, iaitu rentetan rujukan yang menyenaraikan nombor halaman dan bukan alamat penuh serta rujukan berulang kepada halaman yang sama tidak menyebabkan kesalahan halaman, dan hasilnya bergantung pada bilangan rangka yang tersedia. Mengambil rentetan rujukan 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1 dengan tiga rangka: FIFO menjejaki usia halaman dengan baris gilir dan memberikan 15 kesalahan halaman, dan ia boleh mengalami anomali Belady, iaitu menambah rangka menyebabkan lebih banyak kesalahan halaman, seperti dengan rentetan rujukan 1,2,3,4,1,2,5,1,2,3,4,5; algoritma optimum menggantikan halaman yang tidak akan digunakan untuk tempoh paling lama dan memberikan sembilan kesalahan halaman, tetapi kerana masa hadapan tidak dapat dibaca ia hanya digunakan untuk mengukur prestasi algoritma lain; dan LRU menggunakan pengetahuan lalu dan bukan masa hadapan serta menggantikan halaman yang paling lama tidak digunakan, memberikan 12 kesalahan halaman, lebih baik daripada FIFO tetapi lebih lemah daripada optimum, dan ia umumnya algoritma yang baik serta kerap digunakan. LRU boleh dilaksanakan dalam dua cara: dengan pembilang, iaitu setiap entri jadual halaman mempunyai pembilang yang disalin nilai jam setiap kali halaman dirujuk dan nilai terkecil dicari semasa penggantian, memerlukan carian seluruh jadual; atau dengan tindanan nombor halaman dalam senarai berpaut berganda, iaitu halaman yang dirujuk dipindahkan ke puncak dengan mengubah enam penunjuk, menjadikan setiap kemas kini lebih mahal tetapi menghapuskan carian pengganti. LRU dan optimum kedua-duanya algoritma bertindan dan tidak mengalami anomali Belady."
        },
        {
          "zh": "LRU 需要特殊硬件而且仍然很慢，于是有了近似算法。引用位：给每页关联一个位，初始为 0，页被引用时置为 1，置换时选择引用位为 0 的页（若存在），但我们不知道它们的顺序。第二次机会算法（时钟算法）基本上是 FIFO 加硬件提供的引用位：若要置换的页引用位为 0 就直接置换；若为 1 则把引用位清 0、把该页留在内存，再按同样规则检查下一页。增强型第二次机会算法同时使用引用位和修改位，按有序对 (引用, 修改) 分四类：(0,0) 既不常用也未修改，是最好的置换对象；(0,1) 不常用但已修改，稍差，置换前必须写回；(1,0) 最近用过但干净，可能很快又用；(1,1) 最近用过且已修改，很可能再用且置换前要写回；置换时用时钟方案在最低的非空类中选择。计数算法给每页记录被引用的次数，不常用：LFU 置换计数最小的页，MFU 置换计数最大的页（理由是计数最小的页可能刚被调入还没被使用）。页缓冲算法则始终保留一个空闲帧池，需要时把页读入空闲帧并选出牺牲页加入空闲池，等方便时再换出；也可以保留已修改页的列表，在后台存储空闲时写回并清除脏位；还可以保持空闲帧内容不变并记录其中内容，若在被重用前又被引用就无需再从磁盘装入。",
          "en": "Because LRU needs special hardware and is still slow, approximation algorithms are used. The reference bit associates a bit with each page, initially 0 and set to 1 when the page is referenced, and replacement selects any page whose reference bit is 0 if one exists, although the order of such pages is unknown. The second-chance or clock algorithm is generally FIFO plus a hardware-provided reference bit: if the reference bit of the candidate page is 0 it is replaced, whereas if it is 1 the bit is set to 0, the page is left in memory and the next page is examined under the same rules. The enhanced second-chance algorithm uses the reference bit and the modify bit together, ordering pages as pairs of (reference, modify): (0,0) is neither recently used nor modified and is the best page to replace, (0,1) is not recently used but modified and is not quite as good because it must be written out before replacement, (1,0) is recently used but clean and will probably be used again soon, and (1,1) is recently used and modified so it will probably be used again soon and must be written out before replacement; when replacement is called for, the clock scheme is used but the page is replaced in the lowest non-empty class, which may require searching the circular queue several times. Counting algorithms keep a counter of the number of references made to each page and are not common: least frequently used replaces the page with the smallest count while most frequently used replaces the page with the largest, on the argument that the page with the smallest count was probably just brought in and has yet to be used. Page-buffering algorithms keep a pool of free frames so that a frame is always available when needed, reading the page into a free frame and selecting a victim to evict into the free pool, and possibly keeping a list of modified pages that are written out and set non-dirty when the backing store is otherwise idle, or keeping free frame contents intact and noting what they contain so that if the page is referenced again before being reused its contents need not be loaded from disk again.",
          "ms": "Oleh sebab LRU memerlukan perkakasan khas dan masih perlahan, algoritma penghampiran digunakan. Bit rujukan mengaitkan satu bit dengan setiap halaman, pada mulanya 0 dan ditetapkan kepada 1 apabila halaman dirujuk, dan penggantian memilih mana-mana halaman yang bit rujukannya 0 jika ada, walaupun urutan halaman itu tidak diketahui. Algoritma peluang kedua atau jam pada dasarnya FIFO ditambah bit rujukan daripada perkakasan: jika bit rujukan halaman calon ialah 0 ia digantikan, manakala jika 1 bit itu ditetapkan kepada 0, halaman ditinggalkan dalam ingatan dan halaman berikutnya diperiksa dengan peraturan yang sama. Algoritma peluang kedua dipertingkat menggunakan bit rujukan dan bit ubah bersama, menyusun halaman sebagai pasangan (rujukan, ubah): (0,0) tidak baru digunakan dan tidak diubah serta merupakan halaman terbaik untuk diganti, (0,1) tidak baru digunakan tetapi diubah dan tidak sebaik itu kerana mesti ditulis keluar sebelum penggantian, (1,0) baru digunakan tetapi bersih dan mungkin akan digunakan lagi, dan (1,1) baru digunakan serta diubah jadi mungkin akan digunakan lagi dan mesti ditulis keluar sebelum penggantian; apabila penggantian diperlukan, skema jam digunakan tetapi halaman digantikan dalam kelas tidak kosong yang terendah, yang mungkin memerlukan carian baris gilir bulat beberapa kali. Algoritma pengiraan menyimpan pembilang bilangan rujukan kepada setiap halaman dan tidak biasa: paling jarang digunakan menggantikan halaman dengan kiraan terkecil manakala paling kerap digunakan menggantikan halaman dengan kiraan terbesar, atas hujah bahawa halaman dengan kiraan terkecil mungkin baru dibawa masuk dan belum digunakan. Algoritma penimbalan halaman menyimpan kumpulan rangka kosong supaya rangka sentiasa tersedia apabila diperlukan, membaca halaman ke dalam rangka kosong dan memilih mangsa untuk ditukar keluar ke kumpulan kosong, dan mungkin menyimpan senarai halaman yang diubah untuk ditulis keluar dan dijadikan tidak kotor apabila storan sandaran menganggur, atau mengekalkan kandungan rangka kosong dan mencatat isinya supaya jika halaman dirujuk semula sebelum digunakan semula, kandungannya tidak perlu dimuatkan daripada cakera lagi."
        },
        {
          "zh": "帧分配方面，每个进程需要最少数量的帧：例如 IBM 370 处理 SS MOVE 指令需要 6 页（指令本身 6 字节可能跨 2 页，源占 2 页，目的占 2 页），当然上限是系统中的全部帧。两种主要的分配方案是固定分配与优先级分配，固定分配又分平均分配（如 100 个帧、5 个进程则每个 20 帧，并保留一些作为空闲帧缓冲池）和按比例分配（按进程大小分配，并随多道程序度和进程大小动态变化）。抖动（thrashing）指进程没有“足够”的页时缺页率极高：为了取得某一页而发生缺页、置换掉一个现有帧，但很快又需要被置换掉的帧回来，于是 CPU 利用率降低；操作系统以为需要提高多道程序度，又加入一个进程，使情况更糟。请求分页之所以有效是因为局部性模型：进程会从一个局部性迁移到另一个局部性，局部性之间可能重叠；当所有局部性大小之和超过总内存大小时就会发生抖动。可以用局部或优先级页置换来限制抖动的影响，并用工作集来描述进程在某段时间内实际使用的页集合，从而为每个进程分配足够的帧。",
          "en": "For frame allocation, each process needs a minimum number of frames: the IBM 370, for example, needs six pages to handle an SS MOVE instruction, since the instruction is six bytes and might span two pages, two pages are needed to handle the source and two to handle the destination, and the maximum is of course the total number of frames in the system. The two major allocation schemes are fixed allocation and priority allocation; fixed allocation is divided into equal allocation, where for instance 100 frames and 5 processes give each process 20 frames while some are kept as a free frame buffer pool, and proportional allocation, which allocates according to the size of the process and is dynamic as the degree of multiprogramming and the process sizes change. Thrashing occurs when a process does not have enough pages and its page-fault rate becomes very high: a fault brings in a page and replaces an existing frame, but the replaced frame is quickly needed back, which leads to low CPU utilisation, and the operating system, thinking that it must increase the degree of multiprogramming, adds another process and makes matters worse. Demand paging works because of the locality model, in which a process migrates from one locality to another and localities may overlap, and thrashing occurs when the sum of the sizes of all localities exceeds the total memory size. Its effects can be limited by using local or priority page replacement, and the working set, the set of pages a process is actually using over some interval, describes what must be resident so that enough frames can be allocated to each process.",
          "ms": "Bagi peruntukan rangka, setiap proses memerlukan bilangan rangka yang minimum: IBM 370 misalnya memerlukan enam halaman untuk mengendalikan arahan SS MOVE kerana arahannya enam bait dan mungkin merentasi dua halaman, dua halaman diperlukan untuk sumber dan dua untuk destinasi, dan maksimumnya sudah tentu jumlah rangka dalam sistem. Dua skim peruntukan utama ialah peruntukan tetap dan peruntukan keutamaan; peruntukan tetap terbahagi kepada peruntukan sama rata, iaitu contohnya 100 rangka dan 5 proses memberikan setiap proses 20 rangka sementara sebahagian disimpan sebagai kumpulan penimbal rangka kosong, dan peruntukan berkadar yang memperuntukkan mengikut saiz proses dan bersifat dinamik apabila darjah pengaturcaraan berbilang serta saiz proses berubah. Pelagaan berlaku apabila sesuatu proses tidak mempunyai halaman yang mencukupi sehingga kadar kesalahan halamannya menjadi sangat tinggi: satu kesalahan membawa masuk halaman dan menggantikan rangka sedia ada, tetapi rangka yang digantikan itu cepat diperlukan semula, menyebabkan penggunaan CPU rendah, dan sistem pengendalian yang menyangka perlu menambah darjah pengaturcaraan berbilang menambah satu lagi proses lalu memburukkan keadaan. Penghalaman atas permintaan berkesan kerana model lokaliti, iaitu proses berhijrah dari satu lokaliti ke lokaliti lain dan lokaliti boleh bertindih, dan pelagaan berlaku apabila jumlah saiz semua lokaliti melebihi jumlah saiz ingatan. Kesannya boleh dihadkan dengan penggantian halaman setempat atau berkeutamaan, dan set kerja, iaitu set halaman yang benar-benar digunakan proses dalam sesuatu selang, menerangkan apa yang mesti berada dalam ingatan supaya rangka yang mencukupi boleh diperuntukkan kepada setiap proses."
        }
      ],
      "terms": [
        {
          "en": "Virtual Memory",
          "zh": "虚拟内存",
          "ms": "Ingatan Maya",
          "def": {
            "zh": "把用户逻辑内存与物理内存分离的技术，只需部分程序在内存中就能执行，逻辑地址空间可远大于物理地址空间。",
            "en": "A technique that separates user logical memory from physical memory so that only part of a program need be in memory, letting the logical address space be much larger than physical memory.",
            "ms": "Teknik yang memisahkan ingatan logik pengguna daripada ingatan fizikal supaya hanya sebahagian program perlu berada dalam ingatan, membolehkan ruang alamat logik jauh lebih besar daripada ingatan fizikal."
          }
        },
        {
          "en": "Virtual Address Space",
          "zh": "虚拟地址空间",
          "ms": "Ruang Alamat Maya",
          "def": {
            "zh": "进程在内存中存放方式的逻辑视图，栈从最大地址向下增长、堆向上增长，中间的空洞使地址空间稀疏。",
            "en": "The logical view of how a process is stored in memory, with the stack growing down from the maximum address and the heap growing up, the hole between them making the space sparse.",
            "ms": "Pandangan logik tentang cara proses disimpan dalam ingatan, dengan tindanan berkembang ke bawah dari alamat maksimum dan timbunan ke atas, dan lubang antaranya menjadikan ruang itu jarang."
          }
        },
        {
          "en": "Demand Paging",
          "zh": "请求分页",
          "ms": "Penghalaman Atas Permintaan",
          "def": {
            "zh": "只在需要时才把页装入内存的分页方式，I/O 更少、内存需求更低、响应更快，并支持更多用户。",
            "en": "A form of paging that brings a page into memory only when it is needed, giving less I/O, lower memory needs, faster response and more users.",
            "ms": "Bentuk penghalaman yang membawa halaman ke dalam ingatan hanya apabila diperlukan, memberikan I/O lebih sedikit, keperluan ingatan lebih rendah, tindak balas lebih pantas dan lebih banyak pengguna."
          }
        },
        {
          "en": "Pager / Lazy Swapper",
          "zh": "页交换程序 / 惰性交换程序",
          "ms": "Pager / Penukar Malas",
          "def": {
            "zh": "处理页的交换程序，除非页会被用到，否则绝不把页换入内存。",
            "en": "The swapper that deals with pages and never swaps a page into memory unless that page will be needed.",
            "ms": "Penukar yang mengendalikan halaman dan tidak pernah menukar halaman ke dalam ingatan kecuali halaman itu akan diperlukan."
          }
        },
        {
          "en": "Page Fault",
          "zh": "缺页",
          "ms": "Kesalahan Halaman",
          "def": {
            "zh": "MMU 地址转换时发现页表项的有效-无效位为 i（不在内存），于是陷入操作系统。",
            "en": "The trap to the operating system that occurs during address translation when the valid-invalid bit of the page-table entry is i, meaning the page is not in memory.",
            "ms": "Perangkap kepada sistem pengendalian yang berlaku semasa terjemahan alamat apabila bit sah-tidak sah entri jadual halaman ialah i, iaitu halaman tidak berada dalam ingatan."
          }
        },
        {
          "en": "Valid-Invalid Bit",
          "zh": "有效-无效位",
          "ms": "Bit Sah-Tidak Sah",
          "def": {
            "zh": "页表项中标记该页是否在内存中的位，v 表示在内存（memory resident），i 表示不在内存。",
            "en": "The bit in a page-table entry that marks whether the page is memory resident, v meaning in memory and i meaning not in memory.",
            "ms": "Bit dalam entri jadual halaman yang menandakan sama ada halaman berada dalam ingatan, v bermaksud dalam ingatan dan i bermaksud tidak."
          }
        },
        {
          "en": "Copy-on-Write (COW)",
          "zh": "写时复制",
          "ms": "Salin Semasa Tulis (COW)",
          "def": {
            "zh": "父子进程最初共享同一批页，只有某一方修改共享页时才复制该页，从而更高效地创建进程。",
            "en": "A scheme in which parent and child initially share the same pages and a shared page is copied only when one of them modifies it, making process creation more efficient.",
            "ms": "Skim yang membenarkan induk dan anak berkongsi halaman yang sama pada mulanya dan halaman itu disalin hanya apabila salah satunya mengubahnya, menjadikan penciptaan proses lebih cekap."
          }
        },
        {
          "en": "Zero-Fill-on-Demand",
          "zh": "按需填零",
          "ms": "Isi Sifar Atas Permintaan",
          "def": {
            "zh": "分配前先把页清零，既提供空闲帧池以便快速处理缺页，又防止旧数据泄露给新进程。",
            "en": "Zeroing a page before allocating it, which both supplies a pool of free frames for fast fault handling and prevents old data from leaking to the new process.",
            "ms": "Menjadikan halaman sifar sebelum diperuntukkan, yang menyediakan kumpulan rangka kosong untuk pengendalian kesalahan yang pantas dan menghalang data lama terdedah kepada proses baharu."
          }
        },
        {
          "en": "Page Replacement",
          "zh": "页置换",
          "ms": "Penggantian Halaman",
          "def": {
            "zh": "没有空闲帧时在内存中选出牺牲帧并换出、再换入所需页的过程，用修改位减少写回开销。",
            "en": "The process of selecting a victim frame in memory and paging it out so that the desired page can be brought in when no free frame exists, with the modify bit reducing write-back overhead.",
            "ms": "Proses memilih rangka mangsa dalam ingatan dan menukarnya keluar supaya halaman yang dikehendaki boleh dibawa masuk apabila tiada rangka kosong, dengan bit ubah mengurangkan overhed tulis balik."
          }
        },
        {
          "en": "Modify (Dirty) Bit",
          "zh": "修改位（脏位）",
          "ms": "Bit Ubah (Kotor)",
          "def": {
            "zh": "标记页在内存中是否被修改过的位，只有被修改过的页在置换时才需要写回磁盘。",
            "en": "The bit marking whether a page has been modified in memory; only modified pages must be written back to disk when replaced.",
            "ms": "Bit yang menandakan sama ada halaman telah diubah dalam ingatan; hanya halaman yang diubah perlu ditulis kembali ke cakera apabila digantikan."
          }
        },
        {
          "en": "Reference String",
          "zh": "引用串",
          "ms": "Rentetan Rujukan",
          "def": {
            "zh": "用于评价页置换算法的一串内存引用，只记录页号而不记录完整地址，重复访问同一页不产生缺页。",
            "en": "A string of memory references used to evaluate page-replacement algorithms, listing page numbers rather than full addresses, in which repeated access to the same page causes no fault.",
            "ms": "Rentetan rujukan ingatan untuk menilai algoritma penggantian halaman, menyenaraikan nombor halaman dan bukan alamat penuh, dan rujukan berulang kepada halaman yang sama tidak menyebabkan kesalahan."
          }
        },
        {
          "en": "Belady's Anomaly",
          "zh": "Belady 异常",
          "ms": "Anomali Belady",
          "def": {
            "zh": "增加帧数反而使缺页次数增加的反常现象，FIFO 会出现而 LRU 与最优算法（栈算法）不会。",
            "en": "The counter-intuitive result that adding more frames can cause more page faults, which occurs with FIFO but not with LRU or optimal, since those are stack algorithms.",
            "ms": "Keputusan luar jangka bahawa menambah rangka boleh menyebabkan lebih banyak kesalahan halaman, yang berlaku pada FIFO tetapi tidak pada LRU atau optimum kerana kedua-duanya algoritma bertindan."
          }
        },
        {
          "en": "Optimal / LRU Algorithm",
          "zh": "最优算法 / LRU 算法",
          "ms": "Algoritma Optimum / LRU",
          "def": {
            "zh": "最优算法置换未来最长时间不用的页（不可实现，只作基准）；LRU 置换最长时间未被使用的页，用计数器或栈实现。",
            "en": "The optimal algorithm replaces the page not used for the longest time in the future and is unimplementable, serving as a benchmark, while LRU replaces the page not used for the longest time in the past and is implemented with counters or a stack.",
            "ms": "Algoritma optimum menggantikan halaman yang paling lama tidak digunakan pada masa hadapan dan tidak boleh dilaksanakan, hanya sebagai penanda aras, manakala LRU menggantikan halaman yang paling lama tidak digunakan pada masa lalu dan dilaksanakan dengan pembilang atau tindanan."
          }
        },
        {
          "en": "Second-Chance (Clock) Algorithm",
          "zh": "第二次机会（时钟）算法",
          "ms": "Algoritma Peluang Kedua (Jam)",
          "def": {
            "zh": "基本上是 FIFO 加引用位：引用位为 0 就置换，为 1 则清 0 并把该页留在内存，再检查下一页。",
            "en": "Essentially FIFO plus a reference bit: a page with a reference bit of 0 is replaced, while a page with 1 has its bit cleared, stays in memory and the next page is examined.",
            "ms": "Pada dasarnya FIFO ditambah bit rujukan: halaman dengan bit rujukan 0 digantikan, manakala halaman dengan 1 dikosongkan bitnya, kekal dalam ingatan dan halaman berikutnya diperiksa."
          }
        },
        {
          "en": "Thrashing / Locality",
          "zh": "抖动 / 局部性",
          "ms": "Pelagaan / Lokaliti",
          "def": {
            "zh": "抖动指进程页不足导致缺页率极高、CPU 利用率下降；局部性模型说明进程在一段时间内只使用一部分页，各局部性大小之和超过内存总量时就抖动。",
            "en": "Thrashing is the very high page-fault rate and low CPU utilisation caused by a process having too few pages, while the locality model explains that a process uses only part of its pages at a time, so thrashing occurs when the sum of locality sizes exceeds total memory.",
            "ms": "Pelagaan ialah kadar kesalahan halaman yang sangat tinggi dan penggunaan CPU yang rendah akibat proses kekurangan halaman, manakala model lokaliti menjelaskan proses hanya menggunakan sebahagian halamannya pada satu masa, jadi pelagaan berlaku apabila jumlah saiz lokaliti melebihi jumlah ingatan."
          }
        }
      ],
      "diagrams": [
        {
          "type": "flow",
          "dir": "v",
          "title": {
            "zh": "缺页的处理步骤",
            "en": "Steps in Handling a Page Fault",
            "ms": "Langkah Mengendalikan Kesalahan Halaman"
          },
          "caption": {
            "zh": "处理完成后要重新执行引起缺页的那条指令，使程序行为与没有缺页时完全一致。",
            "en": "After servicing the fault the instruction that caused it must be restarted so that program behaviour is exactly as if no fault had occurred.",
            "ms": "Selepas melayan kesalahan itu, arahan yang menyebabkannya mesti dimulakan semula supaya tingkah laku program sama seperti tiada kesalahan berlaku."
          },
          "steps": [
            {
              "label": {
                "zh": "引用页 → 陷入操作系统",
                "en": "Reference to a page traps to the OS",
                "ms": "Rujukan kepada halaman memerangkap kepada sistem pengendalian"
              },
              "note": {
                "zh": "有效-无效位为 i 即缺页",
                "en": "A valid-invalid bit of i means a page fault",
                "ms": "Bit sah-tidak sah bernilai i bermaksud kesalahan halaman"
              }
            },
            {
              "label": {
                "zh": "查表判断：无效引用还是不在内存",
                "en": "Check the table: invalid reference or simply not in memory",
                "ms": "Periksa jadual: rujukan tidak sah atau hanya tiada dalam ingatan"
              },
              "note": {
                "zh": "无效引用则中止进程",
                "en": "An invalid reference aborts the process",
                "ms": "Rujukan tidak sah membatalkan proses"
              }
            },
            {
              "label": {
                "zh": "找到空闲帧",
                "en": "Find a free frame",
                "ms": "Cari rangka kosong"
              },
              "note": {
                "zh": "没有空闲帧就要做页置换",
                "en": "With no free frame, page replacement is needed",
                "ms": "Tanpa rangka kosong, penggantian halaman diperlukan"
              }
            },
            {
              "label": {
                "zh": "通过磁盘操作把页换入该帧",
                "en": "Swap the page into the frame via a disk operation",
                "ms": "Tukar halaman ke dalam rangka melalui operasi cakera"
              },
              "note": {
                "zh": "等待设备队列、寻道与延迟",
                "en": "Wait for the device queue, seek and latency",
                "ms": "Menunggu baris gilir peranti, seek dan kependaman"
              }
            },
            {
              "label": {
                "zh": "修改页表，验证位设为 v",
                "en": "Update the page table, set the validation bit to v",
                "ms": "Kemas kini jadual halaman, tetapkan bit pengesahan kepada v"
              },
              "note": {
                "zh": "该页现在已在内存中",
                "en": "The page is now memory resident",
                "ms": "Halaman kini berada dalam ingatan"
              }
            },
            {
              "label": {
                "zh": "重新执行引起缺页的指令",
                "en": "Restart the instruction that caused the fault",
                "ms": "Mulakan semula arahan yang menyebabkan kesalahan"
              },
              "note": {
                "zh": "程序行为不受影响",
                "en": "Program behaviour is unchanged",
                "ms": "Tingkah laku program tidak berubah"
              }
            }
          ]
        },
        {
          "type": "matrix",
          "title": {
            "zh": "页置换算法在 3 个帧下的缺页数",
            "en": "Page Faults of Replacement Algorithms with Three Frames",
            "ms": "Kesalahan Halaman Algoritma Penggantian dengan Tiga Rangka"
          },
          "cols": [
            {
              "zh": "置换依据",
              "en": "Replacement rule",
              "ms": "Peraturan penggantian"
            },
            {
              "zh": "缺页数",
              "en": "Page faults",
              "ms": "Kesalahan halaman"
            },
            {
              "zh": "Belady 异常",
              "en": "Belady's anomaly",
              "ms": "Anomali Belady"
            }
          ],
          "rows": [
            {
              "head": {
                "zh": "FIFO",
                "en": "FIFO",
                "ms": "FIFO"
              },
              "cells": [
                {
                  "zh": "最早进入内存的页",
                  "en": "The page brought in earliest",
                  "ms": "Halaman yang paling awal dibawa masuk"
                },
                {
                  "zh": "15",
                  "en": "15",
                  "ms": "15"
                },
                {
                  "zh": "会出现",
                  "en": "Occurs",
                  "ms": "Berlaku"
                }
              ]
            },
            {
              "head": {
                "zh": "最优 OPT",
                "en": "Optimal",
                "ms": "Optimum"
              },
              "cells": [
                {
                  "zh": "未来最长时间不用的页",
                  "en": "The page not used for the longest time in future",
                  "ms": "Halaman yang paling lama tidak digunakan pada masa hadapan"
                },
                {
                  "zh": "9",
                  "en": "9",
                  "ms": "9"
                },
                {
                  "zh": "不会（栈算法）",
                  "en": "Does not occur, a stack algorithm",
                  "ms": "Tidak berlaku, algoritma bertindan"
                }
              ]
            },
            {
              "head": {
                "zh": "LRU",
                "en": "LRU",
                "ms": "LRU"
              },
              "cells": [
                {
                  "zh": "过去最长时间未用的页",
                  "en": "The page not used for the longest time in the past",
                  "ms": "Halaman yang paling lama tidak digunakan pada masa lalu"
                },
                {
                  "zh": "12",
                  "en": "12",
                  "ms": "12"
                },
                {
                  "zh": "不会（栈算法）",
                  "en": "Does not occur, a stack algorithm",
                  "ms": "Tidak berlaku, algoritma bertindan"
                }
              ]
            }
          ],
          "legend": [
            {
              "zh": "引用串：7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1",
              "en": "Reference string: 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1",
              "ms": "Rentetan rujukan: 7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1"
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必考计算：有效访问时间 EAT = (1 − p) × 访存时间 + p × 缺页服务时间。以访存 200 纳秒、缺页服务 8 毫秒为例，EAT = 200 + p × 7,999,800；p = 0.001 时是 8.2 微秒（慢 40 倍），要求性能下降小于 10% 则 p < 0.0000025。",
          "en": "A guaranteed calculation: EAT equals (1 minus p) times memory access time plus p times page-fault service time. With a memory access of 200 nanoseconds and a page-fault service of 8 milliseconds, EAT equals 200 plus p times 7,999,800; at p equal to 0.001 it is 8.2 microseconds, a slowdown by a factor of 40, and keeping the degradation below 10 percent requires p less than 0.0000025.",
          "ms": "Pengiraan yang pasti keluar: EAT sama dengan (1 tolak p) kali masa capaian ingatan tambah p kali masa perkhidmatan kesalahan halaman. Dengan capaian ingatan 200 nanosaat dan perkhidmatan kesalahan halaman 8 milisaat, EAT sama dengan 200 tambah p kali 7,999,800; pada p sama dengan 0.001 nilainya 8.2 mikrosaat, iaitu 40 kali lebih perlahan, dan mengekalkan kemerosotan di bawah 10 peratus memerlukan p kurang daripada 0.0000025."
        },
        {
          "zh": "必考：给出引用串与帧数，手工模拟 FIFO、最优与 LRU 求缺页次数。记住该参考串在 3 个帧下分别是 FIFO 15 次、OPT 9 次、LRU 12 次，最优算法只能作为性能上界（无法预知未来）。",
          "en": "A guaranteed question: given a reference string and number of frames, simulate FIFO, optimal and LRU by hand to count the page faults. Remember that with three frames this reference string gives 15 faults for FIFO, nine for optimal and 12 for LRU, and that the optimal algorithm serves only as a performance bound because the future cannot be read.",
          "ms": "Soalan yang pasti keluar: diberi rentetan rujukan dan bilangan rangka, simulasi FIFO, optimum dan LRU secara manual untuk mengira kesalahan halaman. Ingat bahawa dengan tiga rangka rentetan rujukan ini memberikan 15 kesalahan bagi FIFO, sembilan bagi optimum dan 12 bagi LRU, dan algoritma optimum hanya menjadi sempadan prestasi kerana masa hadapan tidak dapat dibaca."
        },
        {
          "zh": "易错点：把 Belady 异常说成所有算法都有。实际上只有 FIFO 会出现“增加帧数反而增加缺页”的现象；LRU 与最优属于栈算法，不会出现该异常。另外要注意第二次机会算法的引用位为 1 时是清 0 后留在内存，而不是置换。",
          "en": "A common mistake is claiming that Belady's anomaly affects every algorithm. In fact only FIFO shows more page faults when frames are added, whereas LRU and optimal are stack algorithms and do not; also remember that in the second-chance algorithm a reference bit of 1 means the bit is cleared and the page stays in memory rather than being replaced.",
          "ms": "Kesilapan biasa ialah mendakwa anomali Belady menjejaskan semua algoritma. Sebenarnya hanya FIFO menunjukkan lebih banyak kesalahan halaman apabila rangka ditambah, manakala LRU dan optimum ialah algoritma bertindan dan tidak mengalaminya; ingat juga bahawa dalam algoritma peluang kedua, bit rujukan bernilai 1 bermaksud bit dikosongkan dan halaman kekal dalam ingatan dan bukan digantikan."
        },
        {
          "zh": "概念题常考抖动：缺页率极高 → CPU 利用率低 → 操作系统误以为要增加多道程序度 → 再加入进程，形成恶性循环；根本原因是局部性大小之和超过内存总量，可用局部或优先级页置换、工作集来限制。",
          "en": "A frequent concept question is thrashing: a very high page-fault rate lowers CPU utilisation, so the operating system mistakenly increases the degree of multiprogramming and adds another process, creating a vicious cycle; the root cause is that the sum of locality sizes exceeds total memory, and it can be limited with local or priority page replacement and the working set.",
          "ms": "Soalan konsep yang kerap keluar ialah pelagaan: kadar kesalahan halaman yang sangat tinggi merendahkan penggunaan CPU, jadi sistem pengendalian tersilap menambah darjah pengaturcaraan berbilang dan menambah satu lagi proses, membentuk kitaran ganas; punca utamanya ialah jumlah saiz lokaliti melebihi jumlah ingatan, dan ia boleh dihadkan dengan penggantian halaman setempat atau berkeutamaan serta set kerja."
        }
      ],
      "mnemonic": {
        "zh": "缺页六步走：陷入—查表—找帧—调入—改表—重执行；三种置换：FIFO 会反常，OPT 不可实现，LRU 常实用。",
        "en": "Six fault-handling steps: trap, check, find a frame, page in, update tables, restart. Three replacements: FIFO is anomalous, optimal is unimplementable, LRU is practical.",
        "ms": "Enam langkah kesalahan halaman: perangkap, periksa, cari rangka, bawa masuk, kemas kini jadual, mula semula. Tiga penggantian: FIFO beranomali, optimum tidak boleh dilaksanakan, LRU praktikal."
      }
    },
    {
      "id": "os-09",
      "num": 9,
      "title": {
        "zh": "文件系统与设备管理",
        "en": "File-System and Device Management",
        "ms": "Pengurusan Sistem Fail dan Peranti"
      },
      "file": "os/CHAPTER 9 DDWD 2663.pptx",
      "pages": 60,
      "summary": {
        "zh": "本章先讲文件的概念：文件是一段连续的逻辑地址空间，其内容由创建者定义，可以是数据（数值、字符、二进制）或程序；操作系统在目录结构中保存文件的属性（名称、标识符、类型、位置、大小、保护、时间与用户标识）。接着介绍文件操作（创建、读、写、定位、删除、截断、打开、关闭）、文件锁（共享锁与独占锁、强制锁与建议锁）、文件结构与访问方法（顺序访问、直接访问与建立在它们之上的索引访问）。后半部分转向磁盘与目录结构：分区、卷、目录组织（单级、两级、树形、无环图与通用图）、保护与 UNIX 的属主/组/公众三级权限，以及磁盘的物理结构（磁道、扇区、柱面）与磁盘调度算法 FCFS、SSTF、SCAN、C-SCAN 和 C-LOOK 的磁头移动量比较。",
        "en": "This chapter begins with the concept of a file: a file is a contiguous logical address space whose contents are defined by its creator and which may hold data, either numeric, character or binary, or a program, and the operating system keeps file attributes such as name, identifier, type, location, size, protection and time, date and user identification in the directory structure. It then covers file operations such as create, write, read, reposition, delete, truncate, open and close, file locking with shared and exclusive locks that may be mandatory or advisory, and file structure and access methods including sequential access, direct access and indexed methods built on top of them. The second half turns to disk and directory structure: partitions, volumes, directory organisation with single-level, two-level, tree-structured, acyclic-graph and general-graph directories, protection with the UNIX owner, group and public permission classes, and the physical structure of disks with tracks, sectors and cylinders together with the head movement of the FCFS, SSTF, SCAN, C-SCAN and C-LOOK disk-scheduling algorithms.",
        "ms": "Bab ini bermula dengan konsep fail: fail ialah ruang alamat logik yang bersebelahan dan kandungannya ditentukan oleh penciptanya, sama ada data seperti nombor, aksara atau binari, atau program, dan sistem pengendalian menyimpan atribut fail seperti nama, pengecam, jenis, lokasi, saiz, perlindungan serta masa, tarikh dan pengenalan pengguna dalam struktur direktori. Seterusnya dibincangkan operasi fail seperti cipta, tulis, baca, ubah kedudukan, padam, potong, buka dan tutup, penguncian fail dengan kunci dikongsi dan eksklusif yang boleh bersifat mandatori atau nasihat, serta struktur fail dan kaedah capaian termasuk capaian berjujukan, capaian langsung dan kaedah berindeks yang dibina di atasnya. Separuh kedua beralih kepada struktur cakera dan direktori: partition, jilid, organisasi direktori dengan direktori satu peringkat, dua peringkat, berbentuk pokok, graf asiklik dan graf umum, perlindungan dengan kelas kebenaran pemilik, kumpulan dan awam dalam UNIX, serta struktur fizikal cakera dengan trek, sektor dan silinder bersama pergerakan kepala algoritma penjadualan cakera FCFS, SSTF, SCAN, C-SCAN dan C-LOOK."
      },
      "points": [
        {
          "zh": "文件是一段连续的逻辑地址空间，其内容由文件的创建者定义：类型上可以是数据（数值、字符、二进制）或程序，常见的有文本文件、源文件和可执行文件。操作系统在目录结构中（保存在磁盘上）维护文件的属性：名称（唯一以人类可读形式保存的信息）、标识符（在文件系统内唯一标识文件的编号）、类型、位置（指向设备上文件位置的指针）、大小、保护（控制谁能读、写、执行）以及时间、日期和用户标识（用于保护、安全和用量监控）；此外还有扩展属性如文件校验和。",
          "en": "A file is a contiguous logical address space whose contents are defined by its creator, and by type it may hold data such as numeric, character or binary data, or a program, with text files, source files and executable files being common. The operating system keeps the file attributes in the directory structure, which is maintained on disk: the name, the only information kept in human-readable form; the identifier, a unique tag that identifies the file within the file system; the type; the location, a pointer to the file's location on the device; the size; the protection, which controls who can read, write and execute; and the time, date and user identification used for protection, security and usage monitoring, along with extended attributes such as a file checksum.",
          "ms": "Fail ialah ruang alamat logik yang bersebelahan dan kandungannya ditentukan oleh penciptanya, dan mengikut jenis ia boleh menyimpan data seperti data nombor, aksara atau binari, atau program, dengan fail teks, fail sumber dan fail boleh laksana sebagai yang biasa. Sistem pengendalian menyimpan atribut fail dalam struktur direktori yang diselenggara pada cakera: nama, iaitu satu-satunya maklumat yang disimpan dalam bentuk boleh dibaca manusia; pengecam, iaitu tag unik yang mengenal pasti fail dalam sistem fail; jenis; lokasi, iaitu penunjuk kepada lokasi fail pada peranti; saiz; perlindungan yang mengawal siapa boleh membaca, menulis dan melaksanakan; serta masa, tarikh dan pengenalan pengguna untuk perlindungan, keselamatan dan pemantauan penggunaan, bersama atribut lanjutan seperti checksum fail."
        },
        {
          "zh": "文件操作包括：创建、写（在写指针位置）、读（在读指针位置）、在文件内重新定位（seek）、删除、截断，以及打开与关闭。打开文件 Fi 是在磁盘的目录结构中查找条目 Fi 并把条目内容移到内存，关闭文件 Fi 则把内存中的条目移回磁盘上的目录结构。为管理已打开的文件，需要维护打开文件表（跟踪所有打开的文件）、文件指针（每个打开该文件的进程各自记录上次读写位置）、打开计数（文件被打开的次数，用于在最后一个进程关闭时从打开文件表中删除该条目）、文件的磁盘位置（数据访问信息的缓存）以及访问权限（每个进程的访问模式信息）。",
          "en": "File operations are create, write at the write pointer, read at the read pointer, reposition within the file or seek, delete, truncate, and open and close. Opening a file Fi means searching the directory structure on disk for the entry Fi and moving its content into memory, while closing Fi moves the entry in memory back to the directory structure on disk. Managing open files requires an open-file table that tracks open files, a file pointer giving the last read or write location for each process that has the file open, a file-open count of how many times the file is open so that its data can be removed from the table when the last process closes it, the disk location of the file as a cache of data access information, and the access rights giving per-process access-mode information.",
          "ms": "Operasi fail ialah cipta, tulis pada kedudukan penunjuk tulis, baca pada kedudukan penunjuk baca, ubah kedudukan dalam fail atau seek, padam, potong, serta buka dan tutup. Membuka fail Fi bermaksud mencari entri Fi dalam struktur direktori pada cakera dan memindahkan kandungannya ke dalam ingatan, manakala menutup Fi memindahkan entri dalam ingatan kembali ke struktur direktori pada cakera. Mengurus fail terbuka memerlukan jadual fail terbuka yang menjejaki fail terbuka, penunjuk fail yang memberikan kedudukan baca atau tulis terakhir bagi setiap proses yang membuka fail itu, kiraan buka fail bagi bilangan kali fail dibuka supaya datanya boleh dikeluarkan daripada jadual apabila proses terakhir menutupnya, lokasi cakera fail sebagai cache maklumat capaian data, dan hak capaian yang memberikan maklumat mod capaian bagi setiap proses."
        },
        {
          "zh": "有些操作系统和文件系统提供文件锁，作用类似读者-写者锁：共享锁类似于读者锁，多个进程可以同时获得；独占锁类似于写者锁。文件锁用于协调对文件的访问，分为强制锁（根据已持有的锁和请求的锁直接拒绝访问）和建议锁（进程可以查询锁的状态再自行决定怎么做）。",
          "en": "Some operating systems and file systems provide file locking similar to reader-writer locks: a shared lock is like a reader lock and several processes can acquire it concurrently, while an exclusive lock is like a writer lock. File locking mediates access to a file and may be mandatory, where access is denied depending on the locks held and requested, or advisory, where processes can find the status of locks and decide for themselves what to do.",
          "ms": "Sesetengah sistem pengendalian dan sistem fail menyediakan penguncian fail yang serupa dengan kunci pembaca-penulis: kunci dikongsi seperti kunci pembaca dan beberapa proses boleh memperolehnya serentak, manakala kunci eksklusif seperti kunci penulis. Penguncian fail mengantara capaian kepada fail dan boleh bersifat mandatori, iaitu capaian ditolak bergantung pada kunci yang dipegang dan diminta, atau nasihat, iaitu proses boleh mengetahui status kunci dan memutuskan sendiri apa yang perlu dilakukan."
        },
        {
          "zh": "文件结构有三种层次：无结构（字的序列或字节的序列）、简单记录结构（行、固定长度或可变长度）以及复杂结构（格式化文档、可重定位装入文件）；后两种可以通过插入适当的控制字符用第一种方法来模拟。由谁决定文件结构，可以是操作系统，也可以是程序。文件类型通常由名称的扩展名表示（如 .txt、.java、.exe）。",
          "en": "File structure comes in three levels: none, that is a sequence of words or bytes; a simple record structure with lines of fixed or variable length; and complex structures such as a formatted document or a relocatable load file, with the last two simulated by the first method by inserting appropriate control characters. Whether the operating system or the program decides the file structure varies, and file types are usually indicated by the extension of the name, as in .txt, .java or .exe.",
          "ms": "Struktur fail mempunyai tiga peringkat: tiada, iaitu jujukan perkataan atau bait; struktur rekod ringkas dengan baris yang panjangnya tetap atau boleh ubah; dan struktur kompleks seperti dokumen berformat atau fail muatan boleh pindah, dengan dua yang terakhir disimulasikan melalui kaedah pertama dengan menyisipkan aksara kawalan yang sesuai. Sama ada sistem pengendalian atau program yang menentukan struktur fail berbeza-beza, dan jenis fail biasanya ditunjukkan oleh sambungan namanya seperti .txt, .java atau .exe."
        },
        {
          "zh": "访问方法有三种：顺序访问（操作有 read next、write next、reset，并且最后写入之后不能读，否则要重写）；直接访问（操作为 read n、write n、position to n、read next、write next、rewrite n，其中 n 是相对块号，相对块号让操作系统决定文件应该放在哪里，也可以在直接访问文件上模拟顺序访问）；以及其他建立在基本方法之上的访问方法，通常要为文件建立索引，把索引保存在内存中以便快速确定要操作的数据位置；若索引太大就建立内存索引，它又是磁盘索引的索引。例如 IBM 的索引顺序访问方法 ISAM 用一个小主索引指向二级索引的磁盘块，文件按指定的键排序，全部由操作系统完成；VMS 操作系统也提供索引文件和相对文件。",
          "en": "There are three access methods: sequential access, whose operations are read next, write next and reset, with no read after the last write unless the file is rewritten; direct access, whose operations are read n, write n, position to n, read next, write next and rewrite n, where n is a relative block number that allows the operating system to decide where the file should be placed and which can also be used to simulate sequential access; and other access methods built on top of the base methods, generally by creating an index for the file and keeping it in memory to determine quickly the location of the data to be operated on. If the index is too large, an in-memory index is created that is itself an index of a disk index, as in IBM's indexed sequential-access method (ISAM), which uses a small master index pointing to disk blocks of a secondary index with the file kept sorted on a defined key, all done by the operating system; the VMS operating system provides index and relative files as another example.",
          "ms": "Terdapat tiga kaedah capaian: capaian berjujukan yang operasinya ialah read next, write next dan reset, tanpa bacaan selepas tulisan terakhir kecuali fail ditulis semula; capaian langsung yang operasinya ialah read n, write n, position to n, read next, write next dan rewrite n, dengan n ialah nombor blok relatif yang membolehkan sistem pengendalian menentukan tempat fail diletakkan dan juga boleh digunakan untuk mensimulasikan capaian berjujukan; serta kaedah capaian lain yang dibina di atas kaedah asas, biasanya dengan mencipta indeks bagi fail dan menyimpannya dalam ingatan untuk menentukan lokasi data yang hendak dioperasikan dengan cepat. Jika indeks terlalu besar, indeks dalam ingatan dicipta dan ia sendiri merupakan indeks kepada indeks cakera, seperti dalam kaedah capaian berjujukan berindeks (ISAM) IBM yang menggunakan indeks induk kecil menunjuk kepada blok cakera bagi indeks sekunder dengan fail disimpan tersusun mengikut kunci yang ditetapkan, semuanya dilakukan oleh sistem pengendalian; sistem pengendalian VMS menyediakan fail berindeks dan fail relatif sebagai contoh lain."
        },
        {
          "zh": "磁盘可以划分为多个分区，磁盘或分区可以用 RAID 防止故障，也可以不经过文件系统直接以原始方式使用或格式化为文件系统；分区又称 minidisk 或 slice，包含文件系统的实体称为卷，每个包含文件系统的卷还在设备目录或卷目录表中记录该文件系统的信息。除通用文件系统外还有许多专用文件系统，常常共存于同一个操作系统或计算机中；例如 Solaris 有基于内存的易失文件系统 tmpfs（用于快速临时 I/O）、用于取得内核符号调试的 objfs、管理守护进程的 ctfs、允许一个文件系统代替另一个被访问的 lofs、访问进程结构的内核接口 procfs，以及通用文件系统 ufs 和 zfs。",
          "en": "A disk can be subdivided into partitions, and disks or partitions can be RAID protected against failure; a disk or partition can be used raw, without a file system, or formatted with a file system. Partitions are also known as minidisks or slices, the entity containing a file system is known as a volume, and each volume containing a file system tracks that file system's information in a device directory or volume table of contents. Besides general-purpose file systems there are many special-purpose file systems, frequently all within the same operating system or computer; Solaris, for example, has tmpfs, a memory-based volatile file system for fast temporary I/O; objfs, an interface into kernel memory to get kernel symbols for debugging; ctfs, a contract file system for managing daemons; lofs, a loopback file system that allows one file system to be accessed in place of another; procfs, a kernel interface to process structures; and the general-purpose ufs and zfs file systems.",
          "ms": "Cakera boleh dibahagikan kepada beberapa partition, dan cakera atau partition boleh dilindungi RAID daripada kegagalan; cakera atau partition boleh digunakan secara mentah tanpa sistem fail, atau diformatkan dengan sistem fail. Partition juga dikenali sebagai minidisk atau slice, entiti yang mengandungi sistem fail dikenali sebagai jilid, dan setiap jilid yang mengandungi sistem fail menjejaki maklumat sistem fail itu dalam direktori peranti atau jadual kandungan jilid. Selain sistem fail tujuan umum terdapat banyak sistem fail tujuan khas, selalunya semuanya dalam sistem pengendalian atau komputer yang sama; Solaris misalnya mempunyai tmpfs, iaitu sistem fail meruap berasaskan ingatan untuk I/O sementara yang pantas; objfs, iaitu antara muka ke ingatan kernel untuk mendapatkan simbol kernel bagi nyahpepijat; ctfs, iaitu sistem fail kontrak untuk mengurus daemon; lofs, iaitu sistem fail gelung balik yang membenarkan satu sistem fail diakses menggantikan yang lain; procfs, iaitu antara muka kernel kepada struktur proses; serta sistem fail tujuan umum ufs dan zfs."
        },
        {
          "zh": "目录是包含所有文件信息的节点的集合，目录结构和文件本身都存放在磁盘上；对目录的操作有查找文件、创建文件、删除文件、列出目录、重命名文件和遍历文件系统。目录组织要在三方面取悦用户：效率（快速定位文件）、命名（用户可以方便取名，两个用户可以为不同文件取同一个名字，同一个文件也可以有多个名字）和分组（按属性把文件逻辑分组，如所有 Java 程序、所有游戏）。常见的组织方式有：单级目录（所有用户共用一个目录，有命名问题和分组问题）；两级目录（每个用户一个独立目录，可用路径名，不同用户可同名，搜索高效但没有分组能力）；树形目录；无环图目录（允许共享子目录和文件，但两个不同名字会造成别名，若删除共享文件会留下悬挂指针，解决办法是使用反向指针删除所有指针，或用引用计数式的 entry-hold-count，并引入新的目录项类型“链接”指向已有文件）；以及通用图目录（可能有环，需要限制只能链接文件而不能链接子目录，或用垃圾回收，或在每次添加链接时用环检测算法判断是否允许）。系统可以把某个目录指定为当前（工作）目录，在其中创建和删除文件，例如删除 mail 就等于删除以 mail 为根的整个子树。",
          "en": "A directory is a collection of nodes containing information about all files, and both the directory structure and the files themselves reside on disk; the operations performed on a directory are searching for a file, creating a file, deleting a file, listing a directory, renaming a file and traversing the file system. Directory organisation aims to satisfy three goals: efficiency, locating a file quickly; naming, being convenient to users so that two users can have the same name for different files and the same file can have several different names; and grouping, the logical grouping of files by properties such as all Java programs or all games. Common organisations are the single-level directory, with one directory for all users, which suffers naming and grouping problems; the two-level directory, with a separate directory for each user that allows path names and efficient searching so different users may reuse names but offers no grouping capability; tree-structured directories; acyclic-graph directories, which allow shared subdirectories and files but introduce aliasing when two different names are used and dangling pointers if a shared file is deleted, solved with backpointers so that all pointers can be deleted, with a variable-size record problem addressed by a daisy-chain organisation, or with an entry-hold-count solution, and by introducing a new directory entry type, the link, as another name or pointer to an existing file; and general graph directories, which may contain cycles and therefore require allowing links only to files and not to subdirectories, garbage collection, or a cycle-detection algorithm each time a new link is added. One directory can be designated the current or working directory in which files are created and deleted, so that deleting mail removes the entire subtree rooted at mail.",
          "ms": "Direktori ialah himpunan nod yang mengandungi maklumat tentang semua fail, dan kedua-dua struktur direktori serta fail itu sendiri berada pada cakera; operasi yang dilakukan pada direktori ialah mencari fail, mencipta fail, memadam fail, menyenaraikan direktori, menamakan semula fail dan merentasi sistem fail. Organisasi direktori bertujuan memenuhi tiga matlamat: kecekapan, iaitu mencari fail dengan cepat; penamaan, iaitu memudahkan pengguna sehingga dua pengguna boleh menggunakan nama yang sama bagi fail berbeza dan satu fail boleh mempunyai beberapa nama; dan pengelompokan, iaitu mengelompokkan fail secara logik mengikut sifat seperti semua program Java atau semua permainan. Organisasi yang biasa ialah direktori satu peringkat dengan satu direktori untuk semua pengguna yang menghadapi masalah penamaan dan pengelompokan; direktori dua peringkat dengan direktori berasingan bagi setiap pengguna yang membenarkan nama laluan dan carian cekap sehingga pengguna berbeza boleh menggunakan nama yang sama tetapi tiada keupayaan pengelompokan; direktori berbentuk pokok; direktori graf asiklik yang membenarkan subdirektori dan fail dikongsi tetapi menimbulkan alias apabila dua nama berbeza digunakan serta penunjuk tergantung jika fail yang dikongsi dipadam, yang diselesaikan dengan penunjuk balik supaya semua penunjuk boleh dipadam, dengan masalah rekod bersaiz boleh ubah ditangani melalui organisasi rantaian daisi, atau dengan penyelesaian kiraan pegangan entri, dan dengan memperkenalkan jenis entri direktori baharu iaitu pautan sebagai nama atau penunjuk lain kepada fail sedia ada; dan direktori graf umum yang mungkin mengandungi kitaran sehingga memerlukan pautan hanya kepada fail dan bukan subdirektori, pengumpulan sampah, atau algoritma pengesanan kitaran setiap kali pautan baharu ditambah. Satu direktori boleh ditetapkan sebagai direktori semasa atau direktori kerja tempat fail dicipta dan dipadam, jadi memadam mail menghapuskan seluruh subpokok yang berakar pada mail."
        },
        {
          "zh": "保护的目标是让文件的属主或创建者能够控制可以对文件做什么以及由谁来做。访问类型包括读、写、执行、追加、删除和列出。UNIX 中访问模式为读、写、执行，用户分为三类（属主、组、公众），每类用三位 RWX 表示：属主访问 7 表示 1 1 1，组访问 6 表示 1 1 0，公众访问 1 表示 0 0 1；可以请管理员建立唯一名字的组 G 并把用户加入该组，然后用 chgrp G game 把组附加到文件上。Windows 则使用访问控制列表（ACL）来管理权限。",
          "en": "The goal of protection is that the file owner or creator should be able to control what can be done and by whom. The types of access are read, write, execute, append, delete and list. In UNIX the modes of access are read, write and execute and users fall into three classes, owner, group and public, each represented by three RWX bits: owner access 7 means 1 1 1, group access 6 means 1 1 0 and public access 1 means 0 0 1; a manager can be asked to create a group with a unique name, say G, and add users to it, after which chgrp G game attaches the group to a file. Windows instead manages permissions with access-control lists.",
          "ms": "Matlamat perlindungan ialah pemilik atau pencipta fail boleh mengawal apa yang boleh dilakukan dan oleh siapa. Jenis capaian ialah baca, tulis, laksana, tambah, padam dan senarai. Dalam UNIX mod capaian ialah baca, tulis dan laksana serta pengguna terbahagi kepada tiga kelas, iaitu pemilik, kumpulan dan awam, masing-masing diwakili tiga bit RWX: capaian pemilik 7 bermaksud 1 1 1, capaian kumpulan 6 bermaksud 1 1 0 dan capaian awam 1 bermaksud 0 0 1; pengurus boleh diminta mencipta kumpulan dengan nama unik, katakan G, dan menambah pengguna ke dalamnya, selepas itu chgrp G game mengaitkan kumpulan itu dengan fail. Windows sebaliknya mengurus kebenaran dengan senarai kawalan capaian."
        },
        {
          "zh": "磁盘的物理结构包括磁道、扇区和磁头，转速为 3500 至 7000 rpm。磁盘驱动器被寻址为一个很大的逻辑块一维数组，逻辑块是最小的传输单位；这个一维逻辑块数组顺序映射到磁盘的扇区上：扇区 0 是最外柱面第一条磁道的第一扇区，映射按顺序经过该磁道、然后是该柱面其余的磁道，再由外向内经过其余的柱面。",
          "en": "The physical structure of a disk comprises tracks, sectors and the disk head, with rotation speeds of 3500 to 7000 revolutions per minute. Disk drives are addressed as a large one-dimensional array of logical blocks, where the logical block is the smallest unit of transfer, and this array is mapped onto the sectors of the disk sequentially: sector 0 is the first sector of the first track on the outermost cylinder, and the mapping proceeds in order through that track, then the rest of the tracks in that cylinder, and then through the rest of the cylinders from outermost to innermost.",
          "ms": "Struktur fizikal cakera merangkumi trek, sektor dan kepala cakera, dengan kelajuan putaran 3500 hingga 7000 putaran seminit. Pemacu cakera dialamatkan sebagai tatasusunan satu dimensi yang besar bagi blok logik, dengan blok logik sebagai unit pemindahan terkecil, dan tatasusunan ini dipetakan ke sektor cakera secara berurutan: sektor 0 ialah sektor pertama trek pertama pada silinder paling luar, dan pemetaan berjalan mengikut urutan melalui trek itu, kemudian trek lain dalam silinder tersebut, dan seterusnya melalui silinder lain dari luar ke dalam."
        },
        {
          "zh": "磁盘调度的目标是高效使用硬件，即获得较快的访问时间和较高的磁盘 I/O 带宽；访问时间主要有两部分：寻道时间（把磁头移到目标柱面）和旋转延迟（磁盘把目标扇区转到磁头下所需的时间），此外还有传输时间。由于寻道时间与寻道距离成正比，所以要最小化寻道时间；磁盘带宽是从第一个请求到最后一个请求之间传输的总字节数除以这段时间。常见算法有：FCFS（先来先服务，易于编程且本质公平，忽略请求之间的位置关系，磁盘负载轻且请求均匀分布时可接受，中等和重负载时不好，示例队列 98,183,37,122,14,124,65,67、磁头从 53 开始共移动 640 个磁道）；SSTF（最短寻道时间优先，从当前位置选择寻道时间最小的请求，属于 SJF 调度，通常优于 FCFS，但可能造成某些请求饥饿，而且不是最优的——按 53,37,14,65,57,98,122,124,184 的顺序服务只需 208 个磁道，比 SSTF 少 28 个）；SCAN（电梯算法，磁臂从磁盘一端向另一端移动并沿途服务请求，到达另一端后反向继续，大多数实际实现的磁盘调度策略都基于 SCAN，它提高了吞吐量并改善了平均响应时间，消除了 SSTF 的大部分不公平，响应时间方差小得多，代价是另一端的请求等待最久，但服务一个请求的磁头移动上界只是磁盘磁道数的两倍，示例为 236 个磁道）；C-SCAN（磁头从一个方向服务到另一端，到达另一端后立即返回磁盘起点且返回途中不服务任何请求，因此响应时间方差很小、等待时间更均匀，示例为 382 个磁道）；C-LOOK（C-SCAN 的实用变体，磁头只移动到每个方向上最后一个请求的位置，当前方向没有请求时就反向，而 C-SCAN 总是把磁头从一端移到另一端，示例为 322 个磁道）。选择算法时要注意：理论最优算法所需的计算量可能抵不上它相对 SSTF 或 SCAN 节省的开销；重负载系统更适合 SCAN 与 C-SCAN（或 LOOK 与 C-LOOK）；如果队列中很少有一个以上未完成的请求，所有算法都退化为 FCFS 而实际上等价；有些磁盘控制器厂商已把调度算法放进硬件，操作系统按 FCFS 顺序发送请求、由控制器排队并以更优顺序执行。",
          "en": "The aim of disk scheduling is to use the hardware efficiently, which for disk drives means a fast access time and high disk I/O bandwidth; access time has two major components, seek time, which moves the head to the destination cylinder, and rotational latency, the time for the disk to rotate the desired sector to the head, in addition to transmission time. Since seek time is proportional to seek distance, seek time should be minimised, and disk bandwidth is the total number of bytes transferred divided by the time from the first request to the last. The common algorithms are FCFS, which is easy to program and intrinsically fair but ignores the position relationships among pending requests and is acceptable when the loading is light and requests are uniformly distributed, though not good under medium and heavy loading, moving 640 tracks for the queue 98,183,37,122,14,124,65,67 with the head starting at 53; SSTF, which selects the request with the minimum seek time from the current head position and is a form of SJF scheduling, generally better than FCFS but capable of starving some requests and not optimal, since servicing in the order 53,37,14,65,57,98,122,124,184 needs only 208 tracks, 28 fewer than SSTF; SCAN, the elevator algorithm, in which the disk arm starts at one end and moves toward the other servicing requests until it reaches the other end, where the head movement is reversed and servicing continues, and on which most implemented disk-scheduling strategies are based, improving throughput and mean response time and eliminating much of the discrimination of SSTF with a much lower variance in response time at the cost of the longest wait for requests at the other end, although the upper bound on head movement for a request is just twice the number of disk tracks, giving 236 tracks in the example; C-SCAN, a variant that services requests as the head moves from one end to the other and then returns immediately to the beginning without servicing any requests on the return trip, providing a very uniform wait time, giving 382 tracks in the example; and C-LOOK, a practical variant of C-SCAN in which the head is moved only as far as the last request in each direction and reversed when there are no requests in the current direction, whereas C-SCAN always moves the head from one end of the disk to the other, giving 322 tracks in the example. In selecting an algorithm, note that an optimal algorithm is possible but the computation needed may not justify the savings over SSTF or SCAN; SCAN and C-SCAN, or LOOK and C-LOOK, are more appropriate for systems that place a heavy load on the disk; if the queue seldom has more than one outstanding request all algorithms degrade to FCFS and are effectively equivalent; and some disk controller manufacturers have moved disk-scheduling algorithms into the hardware itself, with the operating system sending requests in FCFS order and the controller queueing and executing them in a more optimal order.",
          "ms": "Matlamat penjadualan cakera ialah menggunakan perkakasan dengan cekap, iaitu masa capaian yang pantas dan lebar jalur I/O cakera yang tinggi; masa capaian mempunyai dua komponen utama, iaitu masa seek yang menggerakkan kepala ke silinder destinasi dan kependaman putaran, iaitu masa cakera memutarkan sektor yang dikehendaki ke kepala, selain masa pemindahan. Oleh sebab masa seek berkadar dengan jarak seek, masa seek harus diminimumkan, dan lebar jalur cakera ialah jumlah bait yang dipindahkan dibahagikan dengan masa dari permintaan pertama hingga terakhir. Algoritma yang biasa ialah FCFS yang mudah diprogram dan adil secara semula jadi tetapi mengabaikan hubungan kedudukan antara permintaan yang belum selesai dan boleh diterima apabila beban cakera ringan serta permintaan bertaburan sekata, namun tidak baik pada beban sederhana dan berat, dengan pergerakan 640 trek bagi baris gilir 98,183,37,122,14,124,65,67 dan kepala bermula pada 53; SSTF yang memilih permintaan dengan masa seek minimum dari kedudukan kepala semasa dan merupakan satu bentuk penjadualan SJF, umumnya lebih baik daripada FCFS tetapi boleh menyebabkan kebuluran sesetengah permintaan dan tidak optimum, kerana melayan mengikut urutan 53,37,14,65,57,98,122,124,184 hanya memerlukan 208 trek, iaitu 28 trek kurang daripada SSTF; SCAN, iaitu algoritma lif, yang lengannya bermula pada satu hujung dan bergerak ke hujung satu lagi sambil melayan permintaan sehingga tiba di hujung itu, kemudian pergerakan kepala diterbalikkan dan perkhidmatan diteruskan, dan kebanyakan strategi penjadualan cakera yang dilaksanakan berasaskan SCAN, meningkatkan daya pemprosesan dan masa tindak balas purata serta menghapuskan sebahagian besar ketidakadilan SSTF dengan varians masa tindak balas yang jauh lebih rendah tetapi menyebabkan permintaan di hujung yang lain menunggu paling lama, walaupun had atas pergerakan kepala bagi sesuatu permintaan hanya dua kali bilangan trek cakera, iaitu 236 trek dalam contoh; C-SCAN, varian yang melayan permintaan semasa kepala bergerak dari satu hujung ke hujung yang lain dan kemudian kembali serta-merta ke permulaan cakera tanpa melayan sebarang permintaan dalam perjalanan pulang, memberikan masa menunggu yang sangat seragam, iaitu 382 trek dalam contoh; dan C-LOOK, varian praktikal C-SCAN yang menggerakkan kepala hanya sejauh permintaan terakhir dalam setiap arah dan membalikkannya apabila tiada permintaan dalam arah semasa, manakala C-SCAN sentiasa menggerakkan kepala dari satu hujung cakera ke hujung yang lain, iaitu 322 trek dalam contoh. Dalam memilih algoritma, perhatikan bahawa algoritma optimum boleh dibangunkan tetapi pengiraan yang diperlukan mungkin tidak berbaloi berbanding penjimatan SSTF atau SCAN; SCAN dan C-SCAN, atau LOOK dan C-LOOK, lebih sesuai untuk sistem yang membebankan cakera; jika baris gilir jarang mempunyai lebih daripada satu permintaan yang belum selesai, semua algoritma merosot menjadi FCFS dan secara berkesan setara; dan sesetengah pengeluar pengawal cakera telah memindahkan algoritma penjadualan cakera ke dalam perkakasan, dengan sistem pengendalian menghantar permintaan mengikut urutan FCFS dan pengawal menyusun serta melaksanakannya mengikut urutan yang lebih optimum."
        }
      ],
      "terms": [
        {
          "en": "File",
          "zh": "文件",
          "ms": "Fail",
          "def": {
            "zh": "一段连续的逻辑地址空间，其内容由创建者定义，可以是数据（数值、字符、二进制）或程序。",
            "en": "A contiguous logical address space whose contents are defined by its creator and may be data, either numeric, character or binary, or a program.",
            "ms": "Ruang alamat logik yang bersebelahan dan kandungannya ditentukan penciptanya, sama ada data seperti nombor, aksara atau binari, atau program."
          }
        },
        {
          "en": "File Attributes",
          "zh": "文件属性",
          "ms": "Atribut Fail",
          "def": {
            "zh": "保存在目录结构中的文件信息：名称、标识符、类型、位置、大小、保护以及时间、日期与用户标识。",
            "en": "The information about a file kept in the directory structure: name, identifier, type, location, size, protection and time, date and user identification.",
            "ms": "Maklumat tentang fail yang disimpan dalam struktur direktori: nama, pengecam, jenis, lokasi, saiz, perlindungan serta masa, tarikh dan pengenalan pengguna."
          }
        },
        {
          "en": "Directory Structure",
          "zh": "目录结构",
          "ms": "Struktur Direktori",
          "def": {
            "zh": "保存在磁盘上、包含所有文件信息的节点集合，目标是效率、命名与分组；组织方式有单级、两级、树形、无环图与通用图。",
            "en": "The collection of nodes kept on disk that contains information about all files, aiming at efficiency, naming and grouping; organisations include single-level, two-level, tree-structured, acyclic-graph and general-graph.",
            "ms": "Himpunan nod yang disimpan pada cakera dan mengandungi maklumat semua fail, bertujuan kecekapan, penamaan dan pengelompokan; organisasinya termasuk satu peringkat, dua peringkat, berbentuk pokok, graf asiklik dan graf umum."
          }
        },
        {
          "en": "Open-File Table",
          "zh": "打开文件表",
          "ms": "Jadual Fail Terbuka",
          "def": {
            "zh": "跟踪所有已打开文件的数据结构，配合文件指针、打开计数、磁盘位置缓存与访问权限使用。",
            "en": "The data structure that tracks open files, used together with the file pointer, file-open count, cached disk location and access rights.",
            "ms": "Struktur data yang menjejaki fail terbuka, digunakan bersama penunjuk fail, kiraan buka fail, lokasi cakera yang dicache dan hak capaian."
          }
        },
        {
          "en": "File Locking",
          "zh": "文件锁",
          "ms": "Penguncian Fail",
          "def": {
            "zh": "类似读者-写者锁的机制，共享锁可被多个进程同时获得、独占锁类似写者锁；分强制锁与建议锁。",
            "en": "A mechanism similar to reader-writer locks in which a shared lock may be acquired concurrently by several processes and an exclusive lock is like a writer lock; it may be mandatory or advisory.",
            "ms": "Mekanisme serupa kunci pembaca-penulis yang kunci dikongsinya boleh diperoleh serentak oleh beberapa proses dan kunci eksklusifnya seperti kunci penulis; ia boleh bersifat mandatori atau nasihat."
          }
        },
        {
          "en": "Sequential Access",
          "zh": "顺序访问",
          "ms": "Capaian Berjujukan",
          "def": {
            "zh": "按顺序读写文件的访问方法，操作为 read next、write next 与 reset，最后写入之后不能读。",
            "en": "An access method that reads and writes a file in order, with the operations read next, write next and reset, and no read after the last write.",
            "ms": "Kaedah capaian yang membaca dan menulis fail mengikut urutan, dengan operasi read next, write next dan reset, dan tiada bacaan selepas tulisan terakhir."
          }
        },
        {
          "en": "Direct Access",
          "zh": "直接访问",
          "ms": "Capaian Langsung",
          "def": {
            "zh": "按相对块号直接读写任意块的访问方法，操作为 read n、write n、position to n 与 rewrite n。",
            "en": "An access method that reads or writes any block directly by relative block number, with the operations read n, write n, position to n and rewrite n.",
            "ms": "Kaedah capaian yang membaca atau menulis mana-mana blok secara langsung mengikut nombor blok relatif, dengan operasi read n, write n, position to n dan rewrite n."
          }
        },
        {
          "en": "Indexed Access / ISAM",
          "zh": "索引访问 / ISAM",
          "ms": "Capaian Berindeks / ISAM",
          "def": {
            "zh": "在基本访问方法之上建立文件索引的访问方法；IBM 的 ISAM 用一个小主索引指向二级索引的磁盘块，文件按键排序。",
            "en": "An access method that builds an index for the file on top of the base methods; IBM's ISAM uses a small master index pointing to disk blocks of a secondary index with the file sorted on a key.",
            "ms": "Kaedah capaian yang membina indeks bagi fail di atas kaedah asas; ISAM IBM menggunakan indeks induk kecil yang menunjuk kepada blok cakera bagi indeks sekunder dengan fail tersusun mengikut kunci."
          }
        },
        {
          "en": "Partition / Volume",
          "zh": "分区 / 卷",
          "ms": "Partition / Jilid",
          "def": {
            "zh": "磁盘可划分为分区（又称 minidisk 或 slice），包含文件系统的实体称为卷，卷在设备目录或卷目录表中记录文件系统信息。",
            "en": "A disk can be subdivided into partitions, also called minidisks or slices, and the entity containing a file system is called a volume, which tracks the file system information in a device directory or volume table of contents.",
            "ms": "Cakera boleh dibahagikan kepada partition yang juga dipanggil minidisk atau slice, dan entiti yang mengandungi sistem fail dipanggil jilid, yang menjejaki maklumat sistem fail dalam direktori peranti atau jadual kandungan jilid."
          }
        },
        {
          "en": "Link (Hard Link)",
          "zh": "链接",
          "ms": "Pautan",
          "def": {
            "zh": "指向已有文件的另一个名字（指针），是无环图目录中实现共享的方式，需处理别名、悬挂指针与引用计数。",
            "en": "Another name or pointer to an existing file, the way sharing is achieved in acyclic-graph directories, requiring handling of aliasing, dangling pointers and reference counts.",
            "ms": "Nama atau penunjuk lain kepada fail sedia ada, iaitu cara perkongsian dicapai dalam direktori graf asiklik, memerlukan pengendalian alias, penunjuk tergantung dan kiraan rujukan."
          }
        },
        {
          "en": "Access Rights / ACL",
          "zh": "访问权限 / 访问控制列表",
          "ms": "Hak Capaian / Senarai Kawalan Capaian",
          "def": {
            "zh": "读、写、执行、追加、删除、列出等访问类型；UNIX 用属主/组/公众三级 RWX 位（7=111、6=110、1=001），Windows 用访问控制列表。",
            "en": "The access types read, write, execute, append, delete and list; UNIX uses owner, group and public RWX bits such as 7 for 111, 6 for 110 and 1 for 001, while Windows uses access-control lists.",
            "ms": "Jenis capaian baca, tulis, laksana, tambah, padam dan senarai; UNIX menggunakan bit RWX bagi pemilik, kumpulan dan awam seperti 7 untuk 111, 6 untuk 110 dan 1 untuk 001, manakala Windows menggunakan senarai kawalan capaian."
          }
        },
        {
          "en": "Seek Time / Rotational Latency",
          "zh": "寻道时间 / 旋转延迟",
          "ms": "Masa Seek / Kependaman Putaran",
          "def": {
            "zh": "把磁头移动到目标柱面所需的时间，与寻道距离成正比，是访问时间的主要成分之一。磁盘把目标扇区旋转到磁头下所需的时间，例如 6000 rpm 时约为 5 毫秒。",
            "en": "The time to move the head to the destination cylinder, proportional to the seek distance and one of the main components of access time. The time for the disk to rotate the desired sector to the disk head, about 5 milliseconds at 6000 revolutions per minute.",
            "ms": "Masa untuk menggerakkan kepala ke silinder destinasi, berkadar dengan jarak seek dan salah satu komponen utama masa capaian. Masa untuk cakera memutarkan sektor yang dikehendaki ke kepala cakera, kira-kira 5 milisaat pada 6000 putaran seminit."
          }
        },
        {
          "en": "Disk Bandwidth",
          "zh": "磁盘带宽",
          "ms": "Lebar Jalur Cakera",
          "def": {
            "zh": "从第一个请求到最后一个请求之间传输的总字节数除以这段时间，用于衡量磁盘调度效果。",
            "en": "The total number of bytes transferred divided by the time from the first request to the last request, used to measure the effect of disk scheduling.",
            "ms": "Jumlah bait yang dipindahkan dibahagikan dengan masa dari permintaan pertama hingga terakhir, digunakan untuk mengukur kesan penjadualan cakera."
          }
        },
        {
          "en": "SSTF",
          "zh": "最短寻道时间优先",
          "ms": "SSTF",
          "def": {
            "zh": "从当前磁头位置选择寻道时间最小的请求，属于 SJF 调度，通常优于 FCFS 但可能造成饥饿，而且不是最优的。",
            "en": "Selecting the request with the minimum seek time from the current head position; a form of SJF scheduling, generally better than FCFS but able to starve requests and not optimal.",
            "ms": "Memilih permintaan dengan masa seek minimum dari kedudukan kepala semasa; satu bentuk penjadualan SJF, umumnya lebih baik daripada FCFS tetapi boleh menyebabkan kebuluran dan tidak optimum."
          }
        },
        {
          "en": "SCAN / C-SCAN / C-LOOK",
          "zh": "SCAN / C-SCAN / C-LOOK",
          "ms": "SCAN / C-SCAN / C-LOOK",
          "def": {
            "zh": "SCAN（电梯算法）让磁臂从一端移到另一端沿途服务并反向继续；C-SCAN 返回时不服务请求以提供更均匀的等待时间；C-LOOK 只移动到每个方向的最后一个请求。",
            "en": "SCAN, the elevator algorithm, moves the arm from one end to the other servicing requests and then reverses; C-SCAN returns without servicing requests to give a more uniform wait time; and C-LOOK moves only as far as the last request in each direction.",
            "ms": "SCAN, iaitu algoritma lif, menggerakkan lengan dari satu hujung ke hujung yang lain sambil melayan permintaan dan kemudian membalikkan arah; C-SCAN kembali tanpa melayan permintaan bagi memberikan masa menunggu yang lebih seragam; dan C-LOOK bergerak hanya sejauh permintaan terakhir dalam setiap arah."
          }
        }
      ],
      "diagrams": [
        {
          "type": "tree",
          "title": {
            "zh": "目录结构的几种组织方式",
            "en": "Organisations of Directory Structure",
            "ms": "Organisasi Struktur Direktori"
          },
          "root": {
            "label": {
              "zh": "目录结构",
              "en": "Directory Structure",
              "ms": "Struktur Direktori"
            }
          },
          "branches": [
            {
              "label": {
                "zh": "单级目录",
                "en": "Single-Level Directory",
                "ms": "Direktori Satu Peringkat"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "所有用户共用一个目录",
                    "en": "One directory for all users",
                    "ms": "Satu direktori untuk semua pengguna"
                  }
                },
                {
                  "label": {
                    "zh": "存在命名问题与分组问题",
                    "en": "Naming and grouping problems",
                    "ms": "Masalah penamaan dan pengelompokan"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "两级目录",
                "en": "Two-Level Directory",
                "ms": "Direktori Dua Peringkat"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "每个用户一个独立目录，可用路径名",
                    "en": "A separate directory per user with path names",
                    "ms": "Direktori berasingan bagi setiap pengguna dengan nama laluan"
                  }
                },
                {
                  "label": {
                    "zh": "搜索高效，但无分组能力",
                    "en": "Efficient searching but no grouping",
                    "ms": "Carian cekap tetapi tiada pengelompokan"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "树形目录",
                "en": "Tree-Structured Directory",
                "ms": "Direktori Berbentuk Pokok"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "分层组织，绝对路径与相对路径",
                    "en": "Hierarchical organisation with absolute and relative paths",
                    "ms": "Organisasi berhierarki dengan laluan mutlak dan relatif"
                  }
                },
                {
                  "label": {
                    "zh": "删除目录即删除整个子树",
                    "en": "Deleting a directory deletes its whole subtree",
                    "ms": "Memadam direktori memadam seluruh subpokoknya"
                  }
                }
              ]
            },
            {
              "label": {
                "zh": "无环图与通用图",
                "en": "Acyclic-Graph and General Graph",
                "ms": "Graf Asiklik dan Graf Umum"
              },
              "leaves": [
                {
                  "label": {
                    "zh": "共享子目录与文件，会出现别名与悬挂指针",
                    "en": "Shared subdirectories and files bring aliasing and dangling pointers",
                    "ms": "Subdirektori dan fail dikongsi membawa alias serta penunjuk tergantung"
                  }
                },
                {
                  "label": {
                    "zh": "用反向指针、引用计数或环检测处理",
                    "en": "Handled with backpointers, entry-hold-count or cycle detection",
                    "ms": "Ditangani dengan penunjuk balik, kiraan pegangan entri atau pengesanan kitaran"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "matrix",
          "title": {
            "zh": "磁盘调度算法的磁头移动量（磁头从 53 开始）",
            "en": "Head Movement of Disk-Scheduling Algorithms (head starts at 53)",
            "ms": "Pergerakan Kepala Algoritma Penjadualan Cakera (kepala bermula pada 53)"
          },
          "cols": [
            {
              "zh": "策略",
              "en": "Strategy",
              "ms": "Strategi"
            },
            {
              "zh": "总移动磁道数",
              "en": "Total tracks moved",
              "ms": "Jumlah trek digerakkan"
            },
            {
              "zh": "主要特点",
              "en": "Main characteristic",
              "ms": "Ciri utama"
            }
          ],
          "rows": [
            {
              "head": {
                "zh": "FCFS",
                "en": "FCFS",
                "ms": "FCFS"
              },
              "cells": [
                {
                  "zh": "按请求到达顺序服务",
                  "en": "Service in arrival order",
                  "ms": "Layan mengikut urutan ketibaan"
                },
                {
                  "zh": "640",
                  "en": "640",
                  "ms": "640"
                },
                {
                  "zh": "公平易实现，重负载时表现差",
                  "en": "Fair and simple, poor under heavy load",
                  "ms": "Adil dan mudah, lemah pada beban berat"
                }
              ]
            },
            {
              "head": {
                "zh": "SSTF",
                "en": "SSTF",
                "ms": "SSTF"
              },
              "cells": [
                {
                  "zh": "选择离当前磁头最近的请求",
                  "en": "Choose the request nearest the head",
                  "ms": "Pilih permintaan terdekat dengan kepala"
                },
                {
                  "zh": "236",
                  "en": "236",
                  "ms": "236"
                },
                {
                  "zh": "类似 SJF，可能饥饿且非最优",
                  "en": "Like SJF, may starve and is not optimal",
                  "ms": "Seperti SJF, boleh kebuluran dan tidak optimum"
                }
              ]
            },
            {
              "head": {
                "zh": "SCAN",
                "en": "SCAN",
                "ms": "SCAN"
              },
              "cells": [
                {
                  "zh": "电梯式来回扫描并沿途服务",
                  "en": "Elevator sweep servicing on the way",
                  "ms": "Sapu seperti lif sambil melayan"
                },
                {
                  "zh": "236",
                  "en": "236",
                  "ms": "236"
                },
                {
                  "zh": "多数实现的基础，方差小，上界为 2 倍磁道数",
                  "en": "Basis of most implementations, low variance, bound of twice the tracks",
                  "ms": "Asas kebanyakan pelaksanaan, varians rendah, had dua kali trek"
                }
              ]
            },
            {
              "head": {
                "zh": "C-SCAN",
                "en": "C-SCAN",
                "ms": "C-SCAN"
              },
              "cells": [
                {
                  "zh": "单向服务，返回途中不服务",
                  "en": "One-way service, no service on the return",
                  "ms": "Layanan sehala, tiada layanan semasa pulang"
                },
                {
                  "zh": "382",
                  "en": "382",
                  "ms": "382"
                },
                {
                  "zh": "等待时间最均匀",
                  "en": "Most uniform wait time",
                  "ms": "Masa menunggu paling seragam"
                }
              ]
            },
            {
              "head": {
                "zh": "C-LOOK",
                "en": "C-LOOK",
                "ms": "C-LOOK"
              },
              "cells": [
                {
                  "zh": "只移动到每个方向最后一个请求",
                  "en": "Move only to the last request in each direction",
                  "ms": "Bergerak hanya ke permintaan terakhir setiap arah"
                },
                {
                  "zh": "322",
                  "en": "322",
                  "ms": "322"
                },
                {
                  "zh": "C-SCAN 的实用变体，减少空走",
                  "en": "Practical variant of C-SCAN that avoids empty travel",
                  "ms": "Varian praktikal C-SCAN yang mengelakkan perjalanan kosong"
                }
              ]
            }
          ],
          "legend": [
            {
              "zh": "请求队列：98, 183, 37, 122, 14, 124, 65, 67",
              "en": "Request queue: 98, 183, 37, 122, 14, 124, 65, 67",
              "ms": "Baris gilir permintaan: 98, 183, 37, 122, 14, 124, 65, 67"
            }
          ]
        }
      ],
      "exam": [
        {
          "zh": "必考计算：给定请求队列与初始磁头位置，画出 FCFS、SSTF、SCAN、C-SCAN、C-LOOK 的服务顺序并算出总移动磁道数。记住本题队列（98,183,37,122,14,124,65,67，磁头从 53 开始）的结果：FCFS 640、SSTF 236、SCAN 236、C-SCAN 382、C-LOOK 322。",
          "en": "A guaranteed calculation: given a request queue and an initial head position, draw the service order of FCFS, SSTF, SCAN, C-SCAN and C-LOOK and compute the total head movement. Remember the results for this queue (98,183,37,122,14,124,65,67 with the head starting at 53): FCFS 640, SSTF 236, SCAN 236, C-SCAN 382 and C-LOOK 322.",
          "ms": "Pengiraan yang pasti keluar: diberi baris gilir permintaan dan kedudukan awal kepala, lukis urutan layanan FCFS, SSTF, SCAN, C-SCAN dan C-LOOK serta hitung jumlah pergerakan kepala. Ingat keputusan bagi baris gilir ini (98,183,37,122,14,124,65,67 dengan kepala bermula pada 53): FCFS 640, SSTF 236, SCAN 236, C-SCAN 382 dan C-LOOK 322."
        },
        {
          "zh": "易错点：SCAN 的磁头并不停在最后一个请求处，而是走到磁盘一端才反向；C-SCAN 返回时完全不服务请求；只有 C-LOOK 才只走到每个方向的最后一个请求。另外 SSTF 虽然不是最优，但通常明显优于 FCFS，而且可能让远端请求饥饿。",
          "en": "A common mistake is forgetting that in SCAN the head travels to the end of the disk before reversing rather than stopping at the last request, that C-SCAN services no requests at all on the return trip, and that only C-LOOK moves just as far as the last request in each direction. Also, although SSTF is not optimal it is usually clearly better than FCFS and can starve requests at the far end.",
          "ms": "Kesilapan biasa ialah terlupa bahawa dalam SCAN kepala bergerak ke hujung cakera sebelum membalik dan bukan berhenti pada permintaan terakhir, bahawa C-SCAN tidak melayan sebarang permintaan semasa perjalanan pulang, dan bahawa hanya C-LOOK bergerak sejauh permintaan terakhir dalam setiap arah. Selain itu, walaupun SSTF tidak optimum ia biasanya jauh lebih baik daripada FCFS dan boleh menyebabkan permintaan di hujung jauh kebuluran."
        },
        {
          "zh": "常考概念：文件的属性有哪些（名称、标识符、类型、位置、大小、保护、时间与用户标识）、打开与关闭文件分别做了什么（把目录项在磁盘与内存之间移动）、以及共享文件时为什么会产生悬挂指针与如何解决（反向指针、entry-hold-count 引用计数、只允许链接文件而不链接目录）。",
          "en": "Frequent concept questions: what the file attributes are (name, identifier, type, location, size, protection and time and user identification); what opening and closing a file actually do, namely moving the directory entry between disk and memory; and why sharing files creates dangling pointers and how this is solved, with backpointers, an entry-hold-count reference count, or allowing links only to files and not to directories.",
          "ms": "Soalan konsep yang kerap keluar: apakah atribut fail (nama, pengecam, jenis, lokasi, saiz, perlindungan serta masa dan pengenalan pengguna); apa sebenarnya yang berlaku apabila fail dibuka dan ditutup, iaitu memindahkan entri direktori antara cakera dengan ingatan; dan mengapa perkongsian fail menimbulkan penunjuk tergantung serta cara menyelesaikannya, melalui penunjuk balik, kiraan rujukan kiraan pegangan entri, atau membenarkan pautan hanya kepada fail dan bukan direktori."
        },
        {
          "zh": "UNIX 权限常以八进制形式考查：属主 7 表示 rwx（111）、组 6 表示 rw-（110）、公众 1 表示 --x（001），要能根据八进制数字还原权限位，也要知道读、写、执行、追加、删除、列出这些访问类型的区别。",
          "en": "UNIX permissions are often examined in octal form: owner 7 means rwx or 111, group 6 means rw- or 110 and public 1 means --x or 001, so you should be able to expand an octal digit back into permission bits, and know the difference between the access types read, write, execute, append, delete and list.",
          "ms": "Kebenaran UNIX sering diuji dalam bentuk oktal: pemilik 7 bermaksud rwx atau 111, kumpulan 6 bermaksud rw- atau 110 dan awam 1 bermaksud --x atau 001, jadi anda mesti boleh mengembangkan digit oktal kembali kepada bit kebenaran, dan mengetahui perbezaan antara jenis capaian baca, tulis, laksana, tambah, padam dan senarai."
        }
      ],
      "mnemonic": {
        "zh": "目录四级跳：单级—两级—树形—无环图（再加通用图）；调度五算法：FCFS—SSTF—SCAN—C-SCAN—C-LOOK，越往后等待越均匀。",
        "en": "Directory ladder: single-level, two-level, tree, acyclic graph and general graph. Five schedulers: FCFS, SSTF, SCAN, C-SCAN, C-LOOK, with more uniform waiting further down the list.",
        "ms": "Tangga direktori: satu peringkat, dua peringkat, pokok, graf asiklik dan graf umum. Lima penjadual: FCFS, SSTF, SCAN, C-SCAN, C-LOOK, dengan penantian lebih seragam semakin ke bawah senarai."
      }
    }
  ]
};
