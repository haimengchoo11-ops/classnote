window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["os"] = {
  id: "os",
  chapters: {
    "os-01": [
      {
        id: "os-01-q01",
        type: "mcq",
        q: {
          zh: "在中断处理机制中，中断向量（interrupt vector）里存放的是什么？",
          en: "In the interrupt handling mechanism, what does the interrupt vector contain?",
          ms: "Dalam mekanisme pengendalian gangguan, apakah yang disimpan dalam vektor gangguan?"
        },
        opts: [
          { zh: "被中断指令的地址以及CPU寄存器的内容", en: "the address of the interrupted instruction and the contents of the CPU registers", ms: "alamat arahan yang terganggu serta kandungan daftar CPU" },
          { zh: "所有中断服务例程的入口地址", en: "the entry addresses of all the interrupt service routines", ms: "alamat masuk semua rutin servis gangguan" },
          { zh: "每台I/O设备的类型、地址与状态", en: "the type, address and state of each I/O device", ms: "jenis, alamat dan keadaan setiap peranti I/O" },
          { zh: "从磁盘把内核载入内存的引导代码", en: "the bootstrap code that loads the kernel from disk into memory", ms: "kod butstrap yang memuatkan kernel daripada cakera ke dalam ingatan" }
        ],
        answer: 1,
        explain: {
          zh: "中断向量是存放各类中断服务例程入口地址的表，CPU 依此跳转到对应的处理程序。选项0是中断发生时操作系统保存的CPU现场（寄存器与程序计数器），选项2是设备状态表的内容，选项3属于引导程序的职责，三者都不存放在中断向量中。",
          en: "The interrupt vector holds the entry addresses of the service routines, so the CPU can jump to the correct handler. Option 0 describes the CPU state (registers and program counter) that the OS saves on an interrupt, option 2 is the content of the device-status table, and option 3 is the job of the bootstrap program.",
          ms: "Vektor gangguan menyimpan alamat masuk rutin servis supaya CPU boleh melompat ke pengendali yang betul. Pilihan 0 ialah keadaan CPU (daftar dan kiraan program) yang disimpan oleh sistem pengendalian, pilihan 2 ialah kandungan jadual status peranti, dan pilihan 3 ialah tugas program butstrap."
        },
        diff: 2,
        topic: { zh: "中断与中断向量", en: "Interrupts and the interrupt vector", ms: "Gangguan dan vektor gangguan" }
      },
      {
        id: "os-01-q02",
        type: "mcq",
        q: {
          zh: "关于直接内存访问（DMA）的叙述，下列哪一项正确？",
          en: "Which statement about direct memory access (DMA) is correct?",
          ms: "Pernyataan manakah tentang akses memori terus (DMA) adalah betul?"
        },
        opts: [
          { zh: "设备控制器把整块数据直接送入主存，每块只产生一次中断", en: "the device controller moves a block of data straight to main memory and generates only one interrupt per block", ms: "pengawal peranti memindahkan satu blok data terus ke ingatan utama dan hanya menjana satu gangguan bagi setiap blok" },
          { zh: "CPU逐字节搬运数据，每传送一个字节产生一次中断", en: "the CPU copies the data byte by byte and one interrupt is generated per byte transferred", ms: "CPU menyalin data bait demi bait dan satu gangguan dijana bagi setiap bait yang dipindahkan" },
          { zh: "DMA只用于键盘、鼠标这类低速字符设备", en: "DMA is used only for low-speed character devices such as keyboards and mice", ms: "DMA hanya digunakan untuk peranti aksara berkelajuan rendah seperti papan kekunci dan tetikus" },
          { zh: "DMA传输时CPU必须暂停所有工作，直到整块数据传完", en: "during a DMA transfer the CPU must stop all work until the whole block has arrived", ms: "semasa pemindahan DMA, CPU mesti menghentikan semua kerja sehingga seluruh blok tiba" }
        ],
        answer: 0,
        explain: {
          zh: "DMA 面向接近内存速度的高速设备，由控制器在不经CPU干预的情况下把整块数据写入主存，因此每块只产生一次中断而非每字节一次。选项1正好描述了没有DMA时的逐字节中断方式，选项2颠倒了适用设备的速度，选项3也不成立，因为DMA的意义正是让CPU继续执行其他工作。",
          en: "DMA targets high-speed devices and lets the controller place a whole block into main memory without CPU intervention, so only one interrupt is raised per block instead of one per byte. Option 1 describes the byte-at-a-time interrupt scheme used without DMA, option 2 reverses the speed of the devices involved, and option 3 is wrong because DMA exists precisely so the CPU can keep working.",
          ms: "DMA menyasarkan peranti berkelajuan tinggi dan membenarkan pengawal meletakkan satu blok penuh ke dalam ingatan utama tanpa campur tangan CPU, jadi hanya satu gangguan dikeluarkan bagi setiap blok. Pilihan 1 menerangkan kaedah gangguan bait demi bait tanpa DMA, pilihan 2 menterbalikkan kelajuan peranti, dan pilihan 3 salah kerana DMA membolehkan CPU terus bekerja."
        },
        diff: 2,
        topic: { zh: "DMA与I/O结构", en: "DMA and I/O structure", ms: "DMA dan struktur I/O" }
      },
      {
        id: "os-01-q03",
        type: "mcq",
        q: {
          zh: "用户程序需要操作系统提供服务时，模式位（mode bit）是怎样从用户模式切换到内核模式的？",
          en: "When a user program needs a service from the operating system, how is the mode bit switched from user mode to kernel mode?",
          ms: "Apabila program pengguna memerlukan perkhidmatan sistem pengendalian, bagaimanakah bit mod ditukar daripada mod pengguna kepada mod kernel?"
        },
        opts: [
          { zh: "用户程序执行一条特权指令，直接把模式位改写为内核模式", en: "the user program executes a privileged instruction that rewrites the mode bit to kernel mode", ms: "program pengguna melaksanakan arahan istimewa yang menulis semula bit mod kepada mod kernel" },
          { zh: "定时器计数到零产生中断，由该中断把模式位清零", en: "the timer counts down to zero and its interrupt clears the mode bit", ms: "pemasa mengira hingga sifar dan gangguannya mengosongkan bit mod" },
          { zh: "通过系统调用（陷阱）进入内核，从调用返回时再恢复为用户模式", en: "a system call (trap) enters the kernel, and returning from the call restores user mode", ms: "panggilan sistem (perangkap) memasuki kernel, dan pemulangan daripada panggilan itu memulihkan mod pengguna" },
          { zh: "引导程序在开机时把模式位永久固定为内核模式", en: "the bootstrap program permanently fixes the mode bit to kernel mode at power-up", ms: "program butstrap menetapkan bit mod secara kekal kepada mod kernel semasa kuasa dihidupkan" }
        ],
        answer: 2,
        explain: {
          zh: "只有系统调用（陷阱）才是用户程序请求内核服务的正当入口，硬件在陷入内核时把模式位切到内核态，返回时再复位为用户态。选项0不可能发生：特权指令只能在内核模式执行，用户态执行会被硬件拒绝并当作非法指令陷入操作系统；选项1与3都不能完成这次受控切换。",
          en: "Only a system call (trap) is the legitimate gateway for a user program to request kernel services; the hardware switches the mode bit on entry and resets it on return. Option 0 cannot happen: privileged instructions execute only in kernel mode and are rejected as illegal in user mode; options 1 and 3 cannot perform this controlled transition.",
          ms: "Hanya panggilan sistem (perangkap) ialah pintu masuk sah bagi program pengguna meminta perkhidmatan kernel; perkakasan menukar bit mod semasa masuk dan menetapkannya semula semasa keluar. Pilihan 0 tidak mungkin berlaku kerana arahan istimewa hanya dilaksanakan dalam mod kernel, manakala pilihan 1 dan 3 tidak dapat melakukan peralihan terkawal ini."
        },
        diff: 2,
        topic: { zh: "双模式运行与系统调用", en: "Dual-mode operation and system calls", ms: "Operasi dwi-mod dan panggilan sistem" }
      },
      {
        id: "os-01-q04",
        type: "mcq",
        q: {
          zh: "讲义指出字（word）是某计算机体系结构的原生数据单位。若一台计算机具有64位寄存器和64位内存寻址，它的字通常是多少字节？",
          en: "The chapter notes that a word is a given architecture's native unit of data. If a computer has 64-bit registers and 64-bit memory addressing, its word is typically how many bytes?",
          ms: "Bab ini menyatakan bahawa perkataan (word) ialah unit data asli sesuatu seni bina. Jika sesebuah komputer mempunyai daftar 64-bit dan pengalamatan ingatan 64-bit, perkataannya biasanya berapa bait?"
        },
        opts: [
          { zh: "2字节", en: "2 bytes", ms: "2 bait" },
          { zh: "4字节", en: "4 bytes", ms: "4 bait" },
          { zh: "8字节", en: "8 bytes", ms: "8 bait" },
          { zh: "16字节", en: "16 bytes", ms: "16 bait" }
        ],
        answer: 2,
        explain: {
          zh: "讲义用64位寄存器与64位寻址的例子说明：64位即8字节，因此字长为8字节，计算机多数运算按这样的原生字长进行。2字节与4字节分别对应16位和32位体系结构，16字节则没有任何依据。",
          en: "The chapter's example is a machine with 64-bit registers and 64-bit addressing: 64 bits equals 8 bytes, so the word is 8 bytes and most operations run at that native size. Two and four bytes correspond to 16-bit and 32-bit architectures, and 16 bytes has no basis in the text.",
          ms: "Contoh dalam bab ini ialah mesin dengan daftar 64-bit dan pengalamatan 64-bit: 64 bit bersamaan 8 bait, jadi perkataannya 8 bait dan kebanyakan operasi berjalan pada saiz asli itu. Dua dan empat bait sepadan dengan seni bina 16-bit dan 32-bit, manakala 16 bait tiada asasnya."
        },
        diff: 1,
        topic: { zh: "存储单位与字长", en: "Storage units and word size", ms: "Unit storan dan saiz perkataan" }
      },
      {
        id: "os-01-q05",
        type: "mcq",
        q: {
          zh: "关于多道程序设计（multiprogramming）与多任务／分时（multitasking）的区别，下列哪项最准确？",
          en: "Which statement most accurately distinguishes multiprogramming from multitasking (timesharing)?",
          ms: "Pernyataan manakah paling tepat membezakan multipengaturcaraan daripada multitugasan (perkongsian masa)?"
        },
        opts: [
          { zh: "多道程序设计在作业等待I/O时切换到另一作业；分时切换得足够频繁，使用户能与每个作业交互", en: "multiprogramming switches to another job when the current job waits for I/O, while timesharing switches so frequently that users can interact with each job", ms: "multipengaturcaraan bertukar ke kerja lain apabila kerja semasa menunggu I/O, manakala perkongsian masa bertukar cukup kerap sehingga pengguna dapat berinteraksi dengan setiap kerja" },
          { zh: "多道程序设计需要多颗CPU，分时只需要一颗CPU", en: "multiprogramming needs several CPUs, whereas timesharing needs only one CPU", ms: "multipengaturcaraan memerlukan beberapa CPU, manakala perkongsian masa hanya memerlukan satu CPU" },
          { zh: "多道程序设计必须把响应时间控制在1秒以内，分时没有这个要求", en: "multiprogramming must keep the response time below one second, while timesharing has no such requirement", ms: "multipengaturcaraan mesti mengekalkan masa tindak balas di bawah satu saat, manakala perkongsian masa tiada keperluan itu" },
          { zh: "分时是批处理系统的前身，多道程序设计是它的逻辑扩展", en: "timesharing came before batch systems, and multiprogramming is its logical extension", ms: "perkongsian masa mendahului sistem kelompok, dan multipengaturcaraan ialah lanjutannya" }
        ],
        answer: 0,
        explain: {
          zh: "多道程序设计通过作业调度把内存中的多个作业轮换执行，当前作业等待I/O时就让出CPU；分时是批处理的逻辑扩展，切换频率高到用户可与每个作业交互，并规定响应时间应小于1秒。选项1错误地要求多颗CPU，其实两者都可在单CPU上实现，选项2的1秒要求属于分时，选项3颠倒了演进顺序。",
          en: "Multiprogramming rotates several jobs held in memory and yields the CPU when the running job waits for I/O; timesharing is a logical extension of batch systems that switches quickly enough for interaction and requires a response time under one second. Option 1 wrongly demands several CPUs, although both schemes run on a single CPU, option 2 attaches the one-second rule to the wrong scheme, and option 3 reverses the evolution.",
          ms: "Multipengaturcaraan menggilirkan beberapa kerja dalam ingatan dan melepaskan CPU apabila kerja yang berjalan menunggu I/O; perkongsian masa ialah lanjutan sistem kelompok yang bertukar cukup pantas untuk interaksi dan memerlukan masa tindak balas di bawah satu saat. Pilihan 1 tersilap menuntut beberapa CPU, pilihan 2 meletakkan peraturan satu saat pada skema yang salah, dan pilihan 3 menterbalikkan urutan evolusi."
        },
        diff: 2,
        topic: { zh: "多道程序设计与分时系统", en: "Multiprogramming versus timesharing", ms: "Multipengaturcaraan berbanding perkongsian masa" }
      },
      {
        id: "os-01-q06",
        type: "multi",
        q: {
          zh: "讲义列出多处理器（并行、紧耦合）系统的哪些优点？请选出所有正确项。",
          en: "Which advantages of multiprocessor (parallel, tightly coupled) systems does the chapter list? Select all that apply.",
          ms: "Apakah kelebihan sistem multipemproses (selari, berganding rapat) yang disenaraikan dalam bab ini? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "提高吞吐量", en: "increased throughput", ms: "peningkatan daya pemprosesan" },
          { zh: "规模经济", en: "economy of scale", ms: "ekonomi bidangan" },
          { zh: "通过优雅降级或容错提高可靠性", en: "increased reliability through graceful degradation or fault tolerance", ms: "kebolehpercayaan yang lebih tinggi melalui degradasi anggun atau toleransi kesalahan" },
          { zh: "彻底免除操作系统进行CPU调度的必要", en: "removing any need for the operating system to schedule the CPU", ms: "menghapuskan sebarang keperluan sistem pengendalian untuk menjadualkan CPU" },
          { zh: "保证每个进程的响应时间都小于1秒", en: "guaranteeing a response time below one second for every process", ms: "menjamin masa tindak balas di bawah satu saat bagi setiap proses" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "讲义列出的三项优点正是提高吞吐量、规模经济和通过优雅降级或容错提高可靠性。多处理器系统仍要对共享的CPU进行调度，选项3错误；1秒响应时间是分时系统对交互性的要求，并不是多处理器的优点，选项4也因此错误。",
          en: "The three listed advantages are increased throughput, economy of scale, and increased reliability via graceful degradation or fault tolerance. Multiprocessors still schedule their shared CPUs, so option 3 is wrong; the one-second response goal belongs to timesharing, not to multiprocessing, which rules out option 4.",
          ms: "Tiga kelebihan yang disenaraikan ialah peningkatan daya pemprosesan, ekonomi bidangan, dan kebolehpercayaan melalui degradasi anggun atau toleransi kesalahan. Multipemproses masih perlu menjadualkan CPU yang dikongsi, jadi pilihan 3 salah; sasaran satu saat ialah ciri perkongsian masa, bukan multipemproses, sehingga pilihan 4 juga salah."
        },
        diff: 2,
        topic: { zh: "多处理器体系结构", en: "Multiprocessor architecture", ms: "Seni bina multipemproses" }
      },
      {
        id: "os-01-q07",
        type: "tf",
        q: {
          zh: "在非对称集群（asymmetric clustering）中，多个节点同时运行应用程序并互相监视。",
          en: "In asymmetric clustering, multiple nodes run applications and monitor one another.",
          ms: "Dalam pengelompokan asimetri, berbilang nod menjalankan aplikasi dan saling memantau."
        },
        answer: false,
        explain: {
          zh: "说反了：非对称集群只有一台机器处于热备（hot-standby）状态待命，其余节点在运行；多节点同时运行应用并互相监视是对称集群（symmetric clustering）的特征。两类集群都通过共享存储（如SAN）提供高可用性。",
          en: "This reverses the definitions: asymmetric clustering keeps one machine in hot-standby mode, while symmetric clustering has multiple nodes running applications and monitoring each other. Both kinds share storage, typically over a SAN, to provide high availability.",
          ms: "Kenyataan ini menterbalikkan takrif: pengelompokan asimetri mengekalkan satu mesin dalam mod siap sedia panas, manakala pengelompokan simetri mempunyai berbilang nod yang menjalankan aplikasi dan saling memantau. Kedua-duanya berkongsi storan, biasanya melalui SAN, untuk ketersediaan tinggi."
        },
        diff: 2,
        topic: { zh: "集群系统", en: "Clustered systems", ms: "Sistem bergugusan" }
      },
      {
        id: "os-01-q08",
        type: "fill",
        q: {
          zh: "讲义把“计算机上始终运行的那一个程序”称为 ____，它是操作系统的一部分。",
          en: "The chapter calls “the one program running at all times on the computer” the ____, which is part of the operating system.",
          ms: "Bab ini menyebut “satu program yang berjalan sepanjang masa pada komputer” sebagai ____, iaitu sebahagian daripada sistem pengendalian."
        },
        answer: ["kernel", "内核", "inti", "teras"],
        explain: {
          zh: "讲义用“始终运行的那一个程序”来近似定义内核（kernel），它是操作系统的核心部分；随操作系统发布但不属于内核的程序叫系统程序，与操作系统无关的程序则是应用程序。",
          en: "The chapter approximates the kernel as the one program running at all times, and it is part of the operating system. Programs that ship with the OS but lie outside the kernel are system programs, while programs unrelated to the OS are application programs.",
          ms: "Bab ini menghampiri kernel sebagai satu-satunya program yang berjalan sepanjang masa, dan ia sebahagian daripada sistem pengendalian. Program yang disertakan bersama sistem pengendalian tetapi di luar kernel dipanggil program sistem, manakala program yang tidak berkaitan ialah program aplikasi."
        },
        diff: 1,
        topic: { zh: "内核与操作系统定义", en: "Kernel and the OS definition", ms: "Kernel dan takrif sistem pengendalian" }
      }
    ],
    "os-02": [
      {
        id: "os-02-q01",
        type: "mcq",
        q: {
          zh: "讲义采用“用户模式=1、内核模式=0”的模式位约定。据此，下列哪项叙述正确？",
          en: "The chapter uses the convention that the mode bit is 1 in user mode and 0 in kernel mode. Which statement is therefore correct?",
          ms: "Bab ini menggunakan konvensyen bit mod bernilai 1 dalam mod pengguna dan 0 dalam mod kernel. Pernyataan manakah yang betul?"
        },
        opts: [
          { zh: "当陷阱或中断发生时，硬件把模式位改为0，系统进入内核模式", en: "when a trap or interrupt occurs, the hardware sets the mode bit to 0 and the system enters kernel mode", ms: "apabila perangkap atau gangguan berlaku, perkakasan menetapkan bit mod kepada 0 dan sistem memasuki mod kernel" },
          { zh: "当陷阱或中断发生时，硬件把模式位改为1，系统进入内核模式", en: "when a trap or interrupt occurs, the hardware sets the mode bit to 1 and the system enters kernel mode", ms: "apabila perangkap atau gangguan berlaku, perkakasan menetapkan bit mod kepada 1 dan sistem memasuki mod kernel" },
          { zh: "模式位由编译器在编译用户程序时设定，运行期间不再改变", en: "the mode bit is set by the compiler when a user program is built and never changes at run time", ms: "bit mod ditetapkan oleh pengkompil semasa program pengguna dibina dan tidak berubah semasa berjalan" },
          { zh: "模式位为1表示当前正在执行内核代码", en: "a mode bit of 1 means kernel code is currently executing", ms: "bit mod bernilai 1 bermaksud kod kernel sedang dilaksanakan" }
        ],
        answer: 0,
        explain: {
          zh: "既然内核模式对应0，那么陷阱或中断使硬件陷入内核时就是把模式位改为0；返回用户程序时再置为1。选项1把取值弄反，选项2错在模式位是运行期由硬件改写的，与编译器无关，选项3与“用户模式=1”的约定直接矛盾。",
          en: "Since kernel mode is 0, a trap or interrupt switches the hardware into the kernel by clearing the mode bit, and returning to a user program sets it back to 1. Option 1 reverses the value, option 2 is wrong because the bit is changed by hardware at run time rather than by a compiler, and option 3 contradicts the stated user-mode value of 1.",
          ms: "Oleh sebab mod kernel ialah 0, perangkap atau gangguan membawa perkakasan ke dalam kernel dengan mengosongkan bit mod, dan pemulangan ke program pengguna menetapkannya semula kepada 1. Pilihan 1 menterbalikkan nilai itu, pilihan 2 salah kerana bit ditukar oleh perkakasan semasa berjalan, dan pilihan 3 bercanggah dengan nilai 1 bagi mod pengguna."
        },
        diff: 2,
        topic: { zh: "用户模式与内核模式", en: "User mode and kernel mode", ms: "Mod pengguna dan mod kernel" }
      },
      {
        id: "os-02-q02",
        type: "mcq",
        q: {
          zh: "讲义列出程序员最常用来访问系统调用的三种API，它们是：",
          en: "The chapter lists the three most common APIs through which programs access system calls. They are:",
          ms: "Bab ini menyenaraikan tiga API paling lazim yang digunakan oleh program untuk mengakses panggilan sistem, iaitu:"
        },
        opts: [
          { zh: "Win32 API、.NET API 与 Java API", en: "Win32 API, .NET API and Java API", ms: "Win32 API, .NET API dan Java API" },
          { zh: "Win32 API、POSIX API 与 Java API", en: "Win32 API, POSIX API and Java API", ms: "Win32 API, POSIX API dan Java API" },
          { zh: "POSIX API、Cocoa API 与 Android API", en: "POSIX API, Cocoa API and Android API", ms: "POSIX API, Cocoa API dan Android API" },
          { zh: "Win32 API、POSIX API 与 Cocoa Touch API", en: "Win32 API, POSIX API and Cocoa Touch API", ms: "Win32 API, POSIX API dan Cocoa Touch API" }
        ],
        answer: 1,
        explain: {
          zh: "讲义原文给出的三种最常见API是用于Windows的Win32 API、用于POSIX类系统（几乎所有UNIX、Linux与Mac OS X）的POSIX API，以及用于Java虚拟机的Java API。.NET、Cocoa与Cocoa Touch、Android API确实存在，但都不在这份三种API的清单里。",
          en: "The chapter names the Win32 API for Windows, the POSIX API for POSIX-based systems (virtually all UNIX, Linux and Mac OS X), and the Java API for the JVM. .NET, Cocoa/Cocoa Touch and the Android API exist, but none of them appears in this list of three.",
          ms: "Bab ini menyenaraikan Win32 API untuk Windows, POSIX API untuk sistem berasaskan POSIX (hampir semua UNIX, Linux dan Mac OS X), dan Java API untuk JVM. .NET, Cocoa/Cocoa Touch dan Android API memang wujud, tetapi tiada satu pun dalam senarai tiga API tersebut."
        },
        diff: 1,
        topic: { zh: "系统调用API", en: "System-call APIs", ms: "API panggilan sistem" }
      },
      {
        id: "os-02-q03",
        type: "mcq",
        q: {
          zh: "当系统调用的参数多到寄存器放不下时，Linux 与 Solaris 采用哪种传参方式？",
          en: "When a system call has more parameters than the registers can hold, which parameter-passing method do Linux and Solaris use?",
          ms: "Apabila panggilan sistem mempunyai lebih banyak parameter daripada yang dapat dimuatkan dalam daftar, kaedah penghantaran parameter manakah yang digunakan oleh Linux dan Solaris?"
        },
        opts: [
          { zh: "把参数依次压入用户栈，由操作系统把它们弹出", en: "the parameters are pushed onto the stack and popped off by the operating system", ms: "parameter ditolak ke dalam tindanan dan dikeluarkan oleh sistem pengendalian" },
          { zh: "把参数放进内存中的块或表，再把该块的地址放入一个寄存器", en: "the parameters are placed in a block or table in memory and the address of that block is passed in a register", ms: "parameter diletakkan dalam blok atau jadual di dalam ingatan dan alamat blok itu dihantar dalam daftar" },
          { zh: "把所有参数编码进系统调用号本身", en: "all parameters are encoded into the system-call number itself", ms: "semua parameter dikodkan ke dalam nombor panggilan sistem itu sendiri" },
          { zh: "把参数写入设备状态表，由设备控制器转交内核", en: "the parameters are written to the device-status table and forwarded to the kernel by the controller", ms: "parameter ditulis ke jadual status peranti dan diserahkan kepada kernel oleh pengawal" }
        ],
        answer: 1,
        explain: {
          zh: "讲义明确指出“把参数存入内存中的块或表、再把块地址作为一个参数放入寄存器”这种方法被Linux与Solaris采用；这种块方式与栈方式都不限制参数的个数和长度。选项0是三种方法中的栈方式，虽可行但不是Linux/Solaris的做法；选项2、3根本不能传递参数。",
          en: "The chapter states that the block-or-table method, where the block address is passed in a register, is the approach taken by Linux and Solaris; both the block and stack methods avoid limits on the number and length of parameters. Option 0 is the stack method, which works but is not what these systems do, and options 2 and 3 cannot carry parameters at all.",
          ms: "Bab ini menyatakan bahawa kaedah blok atau jadual, dengan alamat blok dihantar dalam daftar, digunakan oleh Linux dan Solaris; kaedah blok dan tindanan kedua-duanya tidak mengehadkan bilangan atau panjang parameter. Pilihan 0 ialah kaedah tindanan yang berfungsi tetapi bukan amalan sistem tersebut, manakala pilihan 2 dan 3 tidak dapat membawa parameter."
        },
        diff: 2,
        topic: { zh: "系统调用参数传递", en: "System-call parameter passing", ms: "Penghantaran parameter panggilan sistem" }
      },
      {
        id: "os-02-q04",
        type: "mcq",
        q: {
          zh: "微内核（microkernel）结构尽量把功能从内核移到用户空间，讲义指出的代价是：",
          en: "The microkernel structure moves as much functionality as possible out of the kernel into user space. The cost identified in the chapter is:",
          ms: "Struktur mikrokernel memindahkan sebanyak mungkin fungsi keluar daripada kernel ke ruang pengguna. Kos yang dinyatakan dalam bab ini ialah:"
        },
        opts: [
          { zh: "内核难以扩展，每加一项服务都要重写整个内核", en: "the kernel becomes hard to extend, so every new service requires rewriting the whole kernel", ms: "kernel menjadi sukar dikembangkan sehingga setiap perkhidmatan baharu memerlukan penulisan semula seluruh kernel" },
          { zh: "操作系统难以移植到新的体系结构", en: "the operating system becomes hard to port to new architectures", ms: "sistem pengendalian menjadi sukar dipindahkan ke seni bina baharu" },
          { zh: "用户空间与内核空间之间通信带来性能开销", en: "the performance overhead of user-space to kernel-space communication", ms: "overhed prestasi komunikasi antara ruang pengguna dan ruang kernel" },
          { zh: "内核模式中运行的代码更多，可靠性下降", en: "more code runs in kernel mode, so reliability drops", ms: "lebih banyak kod berjalan dalam mod kernel sehingga kebolehpercayaan menurun" }
        ],
        answer: 2,
        explain: {
          zh: "微内核把服务移到用户空间后，模块之间必须靠消息传递通信，用户态与内核态之间来回切换就产生性能开销，这是讲义列出的唯一缺点。其余三项恰好是微内核的优点：更易扩展、更易移植、内核态代码更少因而更可靠更安全，所以说反了。",
          en: "Once services live in user space they communicate by message passing, and the user-space to kernel-space crossings cost performance; this is the only detriment the chapter lists. The other options are actually stated benefits: easier to extend, easier to port, and less code in kernel mode, which makes it more reliable and more secure.",
          ms: "Apabila perkhidmatan berada di ruang pengguna, ia berkomunikasi melalui penghantaran mesej, dan peralihan antara ruang pengguna dengan ruang kernel menelan kos prestasi; inilah satu-satunya kelemahan yang disenaraikan. Pilihan lain sebenarnya kelebihan: lebih mudah dikembangkan, lebih mudah dipindahkan, dan kurang kod dalam mod kernel sehingga lebih dipercayai dan selamat."
        },
        diff: 2,
        topic: { zh: "微内核结构", en: "Microkernel structure", ms: "Struktur mikrokernel" }
      },
      {
        id: "os-02-q05",
        type: "mcq",
        q: {
          zh: "应用程序崩溃与操作系统崩溃分别会留下哪种转储文件？",
          en: "Which dump file is produced when an application fails, and which when the operating system fails?",
          ms: "Fail dump manakah dihasilkan apabila aplikasi gagal, dan yang manakah apabila sistem pengendalian gagal?"
        },
        opts: [
          { zh: "应用程序崩溃产生崩溃转储（crash dump），操作系统崩溃产生核心转储（core dump）", en: "an application failure produces a crash dump, an operating system failure produces a core dump", ms: "kegagalan aplikasi menghasilkan crash dump, kegagalan sistem pengendalian menghasilkan core dump" },
          { zh: "应用程序崩溃产生核心转储（core dump），操作系统崩溃产生崩溃转储（crash dump）", en: "an application failure produces a core dump, an operating system failure produces a crash dump", ms: "kegagalan aplikasi menghasilkan core dump, kegagalan sistem pengendalian menghasilkan crash dump" },
          { zh: "两者都产生核心转储，只是文件大小不同", en: "both produce a core dump, differing only in file size", ms: "kedua-duanya menghasilkan core dump, hanya berbeza dari segi saiz fail" },
          { zh: "两者都只写日志文件，不产生任何转储", en: "both only write a log file and never produce a dump", ms: "kedua-duanya hanya menulis fail log dan tidak menghasilkan dump" }
        ],
        answer: 1,
        explain: {
          zh: "核心转储（core dump）捕获的是发生失败的进程的内存，因此由应用程序崩溃产生；崩溃转储（crash dump）保存的是内核内存，因此由操作系统崩溃产生。选项0把两者对调，选项2、3忽略了这两种转储在来源与用途上的区别，日志文件是另一类记录。",
          en: "A core dump captures the memory of the failing process, so it comes from an application failure, whereas a crash dump contains kernel memory and follows an operating system failure. Option 0 swaps the two, and options 2 and 3 ignore the difference in origin and purpose; log files are a separate kind of record.",
          ms: "Core dump merakam ingatan proses yang gagal, jadi ia berpunca daripada kegagalan aplikasi, manakala crash dump mengandungi ingatan kernel dan menyusul selepas kegagalan sistem pengendalian. Pilihan 0 menukar kedua-duanya, dan pilihan 2 serta 3 mengabaikan perbezaan asal dan tujuan; fail log ialah rekod jenis lain."
        },
        diff: 2,
        topic: { zh: "操作系统调试与转储", en: "OS debugging and dumps", ms: "Penyahpepijatan sistem pengendalian dan dump" }
      },
      {
        id: "os-02-q06",
        type: "multi",
        q: {
          zh: "关于“后台服务”（background services），下列哪些说法与讲义一致？请选出所有正确项。",
          en: "Which statements about background services are consistent with the chapter? Select all that apply.",
          ms: "Pernyataan manakah tentang perkhidmatan latar belakang yang selaras dengan bab ini? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "在系统启动时被启动", en: "they are launched at boot time", ms: "ia dilancarkan semasa boot" },
          { zh: "在用户上下文而非内核上下文中运行", en: "they run in user context, not kernel context", ms: "ia berjalan dalam konteks pengguna, bukan konteks kernel" },
          { zh: "也被称为 services、subsystems 或 daemons", en: "they are also known as services, subsystems or daemons", ms: "ia juga dikenali sebagai services, subsistem atau daemon" },
          { zh: "启动后始终以内核模式执行，直到关机", en: "after start-up they always execute in kernel mode until shutdown", ms: "selepas dimulakan, ia sentiasa melaksanakan dalam mod kernel sehingga sistem dimatikan" },
          { zh: "属于用户自己启动的应用程序，通常不算操作系统的一部分", en: "they are application programs started by users and are not part of the operating system", ms: "ia program aplikasi yang dimulakan oleh pengguna dan bukan sebahagian daripada sistem pengendalian" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "后台服务在系统启动时启动，有的只服务启动过程便结束，有的从启动一直运行到关机，提供磁盘检查、进程调度、错误记录、打印等设施，并且运行在用户上下文而非内核上下文，常被称为 services、subsystems 或 daemons。选项3与“用户上下文”矛盾，选项4把后台服务与用户启动的应用程序混为一谈。",
          en: "Background services launch at boot, some terminating after start-up and others running until shutdown, providing facilities such as disk checking, process scheduling, error logging and printing; they run in user context, not kernel context, and are called services, subsystems or daemons. Option 3 contradicts the user-context point, and option 4 confuses them with user-launched application programs.",
          ms: "Perkhidmatan latar belakang dilancarkan semasa boot, ada yang tamat selepas permulaan dan ada yang berjalan sehingga dimatikan, menyediakan kemudahan seperti pemeriksaan cakera, penjadualan proses, perekodan ralat dan percetakan; ia berjalan dalam konteks pengguna, bukan konteks kernel, dan dipanggil services, subsistem atau daemon. Pilihan 3 bercanggah dengan konteks pengguna, dan pilihan 4 mengelirukannya dengan program aplikasi pengguna."
        },
        diff: 2,
        topic: { zh: "系统程序与后台服务", en: "System programs and background services", ms: "Program sistem dan perkhidmatan latar belakang" }
      },
      {
        id: "os-02-q07",
        type: "tf",
        q: {
          zh: "在分层（layered）结构中，第0层是硬件，最高层（第N层）是用户界面。",
          en: "In the layered approach, layer 0 is the hardware and the highest layer (layer N) is the user interface.",
          ms: "Dalam pendekatan berlapis, lapisan 0 ialah perkakasan dan lapisan tertinggi (lapisan N) ialah antara muka pengguna."
        },
        answer: true,
        explain: {
          zh: "讲义对分层的定义正是：底层（第0层）为硬件，最高层（第N层）为用户界面；分层的选择原则是每一层只使用其下面各层提供的功能与服务，从而获得模块化。",
          en: "The chapter defines the layered approach exactly this way: the bottom layer (layer 0) is the hardware and the highest layer (layer N) is the user interface, with each layer built to use only the operations and services of lower layers, which is what gives modularity.",
          ms: "Bab ini mentakrifkan pendekatan berlapis dengan tepat begitu: lapisan bawah (lapisan 0) ialah perkakasan dan lapisan tertinggi (lapisan N) ialah antara muka pengguna, dengan setiap lapisan hanya menggunakan operasi dan perkhidmatan lapisan di bawahnya, dan inilah yang memberikan modulariti."
        },
        diff: 1,
        topic: { zh: "分层结构", en: "Layered structure", ms: "Struktur berlapis" }
      },
      {
        id: "os-02-q08",
        type: "fill",
        q: {
          zh: "现代Linux上常用的引导装载程序（bootstrap loader）是 ____，它允许从多块磁盘和多个内核版本中选择要启动的内核。",
          en: "The common bootstrap loader on modern Linux, which allows a kernel to be chosen from multiple disks and versions, is ____.",
          ms: "Pemuat butstrap yang lazim pada Linux moden, yang membolehkan kernel dipilih daripada berbilang cakera dan versi, ialah ____."
        },
        answer: ["GRUB", "GRUB2", "GNU GRUB", "grub"],
        explain: {
          zh: "讲义指出，常见的引导装载程序是GRUB，它让用户在启动时从多块磁盘、多个内核版本和内核选项中进行选择；存储于ROM/EEPROM的引导装载程序（BIOS，现多由UEFI取代）负责找到并载入内核。",
          en: "The chapter names GRUB as the common bootstrap loader that lets a user select among multiple disks, kernel versions and kernel options at boot. The ROM/EEPROM bootstrap code (BIOS, now largely replaced by UEFI) is what locates and loads the kernel in the first place.",
          ms: "Bab ini menamakan GRUB sebagai pemuat butstrap lazim yang membolehkan pengguna memilih antara berbilang cakera, versi kernel dan pilihan kernel semasa boot. Kod butstrap dalam ROM/EEPROM (BIOS, kini banyak digantikan oleh UEFI) yang mula-mula mencari dan memuatkan kernel."
        },
        diff: 1,
        topic: { zh: "系统引导", en: "System boot", ms: "Boot sistem" }
      }
    ],
    "os-03": [
      {
        id: "os-03-q01",
        type: "mcq",
        q: {
          zh: "按讲义的进程状态图，下列哪一种状态转换是不能直接发生的？",
          en: "According to the process state diagram in the chapter, which state transition cannot occur directly?",
          ms: "Menurut gambar rajah keadaan proses dalam bab ini, peralihan keadaan manakah yang tidak boleh berlaku secara langsung?"
        },
        opts: [
          { zh: "等待（waiting）→ 就绪（ready），I/O 完成时发生", en: "waiting → ready, which happens when the I/O completes", ms: "menunggu → sedia, yang berlaku apabila I/O selesai" },
          { zh: "运行（running）→ 就绪（ready），时间片用完时发生", en: "running → ready, which happens when the time slice expires", ms: "berjalan → sedia, yang berlaku apabila kepingan masa tamat" },
          { zh: "就绪（ready）→ 等待（waiting），尚未获得CPU即可请求I/O", en: "ready → waiting, because a process can request I/O before it is given the CPU", ms: "sedia → menunggu, kerana proses boleh meminta I/O sebelum diberi CPU" },
          { zh: "运行（running）→ 终止（terminated），进程执行完最后一条语句", en: "running → terminated, when the process executes its last statement", ms: "berjalan → tamat, apabila proses melaksanakan pernyataan terakhirnya" }
        ],
        answer: 2,
        explain: {
          zh: "只有正在运行的进程才可能发出I/O请求而进入等待状态，处于就绪队列中的进程还没有获得CPU，无法主动请求I/O，因此“就绪→等待”不是合法的直接转换。等待→就绪（I/O完成）、运行→就绪（被抢占或时间片用完）、运行→终止都是状态图中的正常边。",
          en: "Only a running process can issue an I/O request and enter the waiting state; a process still in the ready queue has not been given the CPU, so it cannot request I/O. Hence ready → waiting is not a legal direct transition, while waiting → ready (I/O completes), running → ready (preemption or time slice expiry) and running → terminated are all normal edges.",
          ms: "Hanya proses yang sedang berjalan boleh mengeluarkan permintaan I/O dan memasuki keadaan menunggu; proses dalam baris sedia belum diberi CPU, jadi ia tidak boleh meminta I/O. Oleh itu sedia → menunggu bukan peralihan sah, manakala menunggu → sedia, berjalan → sedia dan berjalan → tamat semuanya tepi biasa dalam gambar rajah keadaan."
        },
        diff: 2,
        topic: { zh: "进程状态与转换", en: "Process states and transitions", ms: "Keadaan proses dan peralihan" }
      },
      {
        id: "os-03-q02",
        type: "mcq",
        q: {
          zh: "下列哪一项不存放在进程控制块（PCB）中？",
          en: "Which of the following is NOT kept in the process control block (PCB)?",
          ms: "Yang manakah TIDAK disimpan dalam blok kawalan proses (PCB)?"
        },
        opts: [
          { zh: "程序计数器与CPU寄存器内容", en: "the program counter and the contents of the CPU registers", ms: "kiraan program dan kandungan daftar CPU" },
          { zh: "分配给该进程的I/O设备与已打开文件清单", en: "the I/O devices allocated to the process and the list of open files", ms: "peranti I/O yang diperuntukkan kepada proses dan senarai fail yang dibuka" },
          { zh: "该进程的机器指令本身，即正文段代码", en: "the machine instructions of the process themselves, that is the text section", ms: "arahan mesin proses itu sendiri, iaitu bahagian teks" },
          { zh: "CPU调度信息，如优先级与调度队列指针", en: "CPU scheduling information such as priorities and scheduling queue pointers", ms: "maklumat penjadualan CPU seperti keutamaan dan penuding baris penjadualan" }
        ],
        answer: 2,
        explain: {
          zh: "PCB存放的是关于进程的管理信息：进程状态、程序计数器、CPU寄存器、调度信息、内存管理信息、记账信息和I/O状态信息，Linux中对应task_struct。机器指令属于进程地址空间中的正文段（text section），由内存管理信息指向，而不是PCB的字段。",
          en: "The PCB holds management information about the process: state, program counter, CPU registers, scheduling information, memory-management information, accounting information and I/O status information, represented by task_struct in Linux. The machine instructions live in the process's text section, which the memory-management information points to, not in the PCB itself.",
          ms: "PCB menyimpan maklumat pengurusan proses: keadaan, kiraan program, daftar CPU, maklumat penjadualan, maklumat pengurusan ingatan, maklumat perakaunan dan maklumat status I/O, yang diwakili oleh task_struct dalam Linux. Arahan mesin berada dalam bahagian teks proses yang ditunjuk oleh maklumat pengurusan ingatan, bukan dalam PCB."
        },
        diff: 2,
        topic: { zh: "进程控制块", en: "Process control block", ms: "Blok kawalan proses" }
      },
      {
        id: "os-03-q03",
        type: "mcq",
        q: {
          zh: "在UNIX中，父进程调用fork()创建子进程后再调用exec()，exec()的作用是：",
          en: "In UNIX a parent calls fork() to create a child and then calls exec(). What does exec() do?",
          ms: "Dalam UNIX, induk memanggil fork() untuk mencipta anak dan kemudian memanggil exec(). Apakah fungsi exec()?"
        },
        opts: [
          { zh: "再创建一个新的子进程", en: "it creates another new child process", ms: "ia mencipta satu lagi proses anak yang baharu" },
          { zh: "用新程序替换该进程的内存空间", en: "it replaces the memory space of that process with a new program", ms: "ia menggantikan ruang ingatan proses itu dengan program baharu" },
          { zh: "等待子进程终止并取回其状态", en: "it waits for the child to terminate and collects its status", ms: "ia menunggu anak tamat dan mengutip statusnya" },
          { zh: "把父进程的PCB复制一份给子进程", en: "it copies the parent's PCB for the child process", ms: "ia menyalin PCB induk untuk proses anak" }
        ],
        answer: 1,
        explain: {
          zh: "fork()负责创建新进程，exec()则在fork()之后用新程序覆盖该进程的内存空间并开始执行；父进程用wait()等待子进程结束并取得状态。选项0是fork()的职责，选项2是wait()的职责，选项3描述的是fork()复制地址空间的效果，都不是exec()。",
          en: "fork() creates the new process, and exec() then overlays that process's memory space with a new program and starts it; the parent uses wait() to wait for the child and collect its status. Option 0 is fork()'s job, option 2 is wait()'s job, and option 3 describes what fork() does to the address space, so none of them is exec().",
          ms: "fork() mencipta proses baharu, dan exec() kemudian menindih ruang ingatan proses itu dengan program baharu lalu memulakannya; induk menggunakan wait() untuk menunggu anak dan mengutip statusnya. Pilihan 0 ialah tugas fork(), pilihan 2 tugas wait(), dan pilihan 3 menerangkan kesan fork() pada ruang alamat."
        },
        diff: 2,
        topic: { zh: "进程创建：fork与exec", en: "Process creation: fork and exec", ms: "Penciptaan proses: fork dan exec" }
      },
      {
        id: "os-03-q04",
        type: "mcq",
        q: {
          zh: "关于上下文切换（context switch），下列哪项叙述正确？",
          en: "Which statement about a context switch is correct?",
          ms: "Pernyataan manakah tentang pertukaran konteks adalah betul?"
        },
        opts: [
          { zh: "切换所花的时间只取决于PCB大小，与硬件支持无关", en: "the switching time depends only on the PCB size and not on hardware support", ms: "masa pertukaran bergantung hanya pada saiz PCB dan bukan pada sokongan perkakasan" },
          { zh: "切换期间操作系统仍在为用户进程执行有用的指令", en: "during the switch the operating system still executes useful user instructions", ms: "semasa pertukaran, sistem pengendalian masih melaksanakan arahan pengguna yang berguna" },
          { zh: "操作系统越复杂、PCB越大，切换所需时间越短", en: "the more complex the OS and the larger the PCB, the shorter the switching time", ms: "semakin kompleks sistem pengendalian dan semakin besar PCB, semakin singkat masa pertukaran" },
          { zh: "切换时间是纯开销；操作系统与PCB越复杂，切换时间越长", en: "context-switch time is pure overhead, and it grows as the OS and PCB become more complex", ms: "masa pertukaran konteks ialah overhed semata-mata, dan ia bertambah apabila sistem pengendalian serta PCB menjadi lebih kompleks" }
        ],
        answer: 3,
        explain: {
          zh: "上下文切换要保存旧进程的状态再装入新进程的状态，这段时间系统不做有用工作，属于纯开销；操作系统与PCB越复杂，需要保存和恢复的信息越多，切换越久，而且切换时间还取决于硬件支持（例如某些硬件为每个CPU提供多组寄存器，可一次装入多个上下文）。选项0否定硬件的作用，选项1与“不做有用工作”矛盾，选项2把关系说反了。",
          en: "A context switch saves the old process's state and loads the new one's, during which the system does no useful work, so the time is pure overhead; a more complex OS and PCB mean more state to save and restore, and the time also depends on hardware support such as multiple register sets per CPU. Option 0 denies the hardware factor, option 1 contradicts the no-useful-work point, and option 2 reverses the relationship.",
          ms: "Pertukaran konteks menyimpan keadaan proses lama dan memuatkan keadaan proses baharu, dan sepanjang masa itu sistem tidak melakukan kerja berguna, jadi masanya overhed semata-mata; sistem pengendalian dan PCB yang lebih kompleks bermakna lebih banyak keadaan perlu disimpan dan dipulihkan, dan masa itu juga bergantung pada sokongan perkakasan seperti berbilang set daftar bagi setiap CPU. Pilihan 0 menafikan faktor perkakasan, pilihan 1 bercanggah dengan tiada kerja berguna, dan pilihan 2 menterbalikkan hubungan."
        },
        diff: 2,
        topic: { zh: "上下文切换", en: "Context switching", ms: "Pertukaran konteks" }
      },
      {
        id: "os-03-q05",
        type: "mcq",
        q: {
          zh: "讲义把线程称为CPU利用的基本单位。一个线程由哪些内容组成？",
          en: "The chapter calls a thread the basic unit of CPU utilisation. What does a thread consist of?",
          ms: "Bab ini memanggil benang sebagai unit asas penggunaan CPU. Apakah komponen sesuatu benang?"
        },
        opts: [
          { zh: "线程ID、程序计数器、寄存器组与栈", en: "a thread ID, a program counter, a register set and a stack", ms: "ID benang, kiraan program, set daftar dan tindanan" },
          { zh: "独立的地址空间、正文段、数据段与堆", en: "an independent address space, text section, data section and heap", ms: "ruang alamat bebas, bahagian teks, bahagian data dan timbunan" },
          { zh: "只有程序计数器与栈，不含寄存器", en: "only a program counter and a stack, without any registers", ms: "hanya kiraan program dan tindanan, tanpa sebarang daftar" },
          { zh: "PCB、页表与系统打开文件表", en: "a PCB, a page table and the system-wide open-file table", ms: "PCB, jadual halaman dan jadual fail terbuka seluruh sistem" }
        ],
        answer: 0,
        explain: {
          zh: "讲义给出的线程组成是线程ID、程序计数器、寄存器组和栈；线程是轻量级进程，同一进程内的多个线程共享该进程的资源（地址空间、代码与数据）却独立执行。选项1列的是进程级资源，选项2漏掉寄存器，选项3混淆了进程与线程的数据结构。",
          en: "The chapter defines a thread as comprising a thread ID, a program counter, a register set and a stack; a thread is a lightweight process, and threads in one process share that process's resources such as its address space, code and data while executing independently. Option 1 lists process-level resources, option 2 omits the registers, and option 3 confuses process structures with thread structures.",
          ms: "Bab ini mentakrifkan benang sebagai terdiri daripada ID benang, kiraan program, set daftar dan tindanan; benang ialah proses ringan, dan benang dalam satu proses berkongsi sumber proses itu seperti ruang alamat, kod dan data sambil melaksanakan secara bebas. Pilihan 1 menyenaraikan sumber peringkat proses, pilihan 2 tertinggal daftar, dan pilihan 3 mengelirukan struktur proses dengan benang."
        },
        diff: 1,
        topic: { zh: "线程概念", en: "Thread concept", ms: "Konsep benang" }
      },
      {
        id: "os-03-q06",
        type: "multi",
        q: {
          zh: "关于消息传递链路的缓冲（buffering），下列哪些说法正确？请选出所有正确项。",
          en: "Which statements about buffering on a message-passing link are correct? Select all that apply.",
          ms: "Pernyataan manakah tentang penimbalan pada pautan penghantaran mesej adalah betul? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "零容量链路不排队消息，发送方必须等待接收方，形成汇合（rendezvous）", en: "a zero-capacity link queues no messages, so the sender must wait for the receiver, giving a rendezvous", ms: "pautan berkapasiti sifar tidak berbaris mesej, jadi penghantar mesti menunggu penerima, menghasilkan pertemuan (rendezvous)" },
          { zh: "有界容量为n条消息，链路已满时发送方必须等待", en: "a bounded capacity of n messages means the sender must wait when the link is full", ms: "kapasiti terbatas n mesej bermakna penghantar mesti menunggu apabila pautan penuh" },
          { zh: "无界容量时发送方从不等待", en: "with unbounded capacity the sender never waits", ms: "dengan kapasiti tidak terbatas, penghantar tidak pernah menunggu" },
          { zh: "零容量时允许一条消息排队，发送方在队列满后才等待", en: "zero capacity allows one message to be queued before the sender waits", ms: "kapasiti sifar membenarkan satu mesej berbaris sebelum penghantar menunggu" },
          { zh: "有界容量下队列为空时，接收方一定收到一条有效消息", en: "with bounded capacity an empty queue still guarantees the receiver a valid message", ms: "dengan kapasiti terbatas, baris yang kosong masih menjamin penerima menerima mesej yang sah" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "讲义列出三种实现：零容量不排队任何消息，发送方必须等接收方（rendezvous）；有界容量为n条，链表满时发送方等待；无界容量无限长，发送方永不等待。选项3与零容量的定义矛盾，选项4违背了队列为空时只能阻塞或返回空消息的事实。",
          en: "The chapter lists three implementations: zero capacity queues nothing so the sender waits for the receiver (a rendezvous); bounded capacity holds n messages and blocks the sender when full; unbounded capacity never blocks the sender. Option 3 contradicts the definition of zero capacity, and option 4 ignores that an empty queue forces the receiver either to block or to get a null message.",
          ms: "Bab ini menyenaraikan tiga pelaksanaan: kapasiti sifar tidak berbaris apa-apa jadi penghantar menunggu penerima (rendezvous); kapasiti terbatas memuatkan n mesej dan menyekat penghantar apabila penuh; kapasiti tidak terbatas tidak pernah menyekat penghantar. Pilihan 3 bercanggah dengan takrif kapasiti sifar, dan pilihan 4 mengabaikan bahawa baris kosong memaksa penerima menyekat atau menerima mesej nol."
        },
        diff: 3,
        topic: { zh: "消息传递的缓冲容量", en: "Buffering capacity in message passing", ms: "Kapasiti penimbalan dalam penghantaran mesej" }
      },
      {
        id: "os-03-q07",
        type: "tf",
        q: {
          zh: "普通管道（ordinary pipes）是单向的，并要求通信的两个进程之间存在父子关系；Windows 把这种管道称为匿名管道（anonymous pipes）。",
          en: "Ordinary pipes are unidirectional and require a parent-child relationship between the communicating processes; Windows calls them anonymous pipes.",
          ms: "Paip biasa bersifat satu arah dan memerlukan hubungan induk-anak antara proses yang berkomunikasi; Windows memanggilnya paip tanpa nama (anonymous pipes)."
        },
        answer: true,
        explain: {
          zh: "正确：普通管道只能由创建它的进程（通常是父进程）及其子进程访问，数据从写端流向读端，因此是单向的，Windows称之为匿名管道。需要双向通信且通信进程间没有父子关系时应使用命名管道（named pipes）。",
          en: "Correct: an ordinary pipe can be accessed only by the process that created it, usually a parent, and its child; data flows from the write end to the read end, so the pipe is unidirectional, and Windows calls it an anonymous pipe. Named pipes are the choice when bidirectional communication is needed without a parent-child relationship.",
          ms: "Betul: paip biasa hanya boleh diakses oleh proses yang menciptanya, biasanya induk, dan anaknya; data mengalir dari hujung tulis ke hujung baca, jadi paip itu satu arah, dan Windows memanggilnya paip tanpa nama. Paip bernama digunakan apabila komunikasi dua arah diperlukan tanpa hubungan induk-anak."
        },
        diff: 2,
        topic: { zh: "管道通信", en: "Pipes", ms: "Paip" }
      },
      {
        id: "os-03-q08",
        type: "fill",
        q: {
          zh: "若父进程在终止前没有调用 wait()，它那个仍在运行的子进程就成为 ____。",
          en: "If a parent terminates without invoking wait(), its still-running child becomes an ____.",
          ms: "Jika induk tamat tanpa memanggil wait(), anaknya yang masih berjalan menjadi ____."
        },
        answer: ["孤儿进程", "孤儿", "orphan", "orphan process", "proses yatim"],
        explain: {
          zh: "讲义用一对概念区分两种异常：子进程已终止而父进程尚未wait()时，该子进程是僵尸进程（zombie）；父进程终止却没有wait()，留下的子进程就是孤儿进程（orphan）。两者的差别在于“谁先结束”。",
          en: "The chapter distinguishes the two cases: a child that has terminated while its parent has not yet called wait() is a zombie, whereas a child left behind when the parent terminates without calling wait() is an orphan. The difference is which of the two finishes first.",
          ms: "Bab ini membezakan kedua-dua kes: anak yang telah tamat sedangkan induknya belum memanggil wait() ialah zombi, manakala anak yang ditinggalkan apabila induk tamat tanpa memanggil wait() ialah anak yatim. Bezanya ialah pihak mana yang tamat dahulu."
        },
        diff: 2,
        topic: { zh: "进程终止：僵尸与孤儿", en: "Process termination: zombies and orphans", ms: "Penamatan proses: zombi dan anak yatim" }
      }
    ],
    "os-04": [
      {
        id: "os-04-q01",
        type: "mcq",
        q: {
          zh: "三个进程按 P1、P2、P3 的顺序几乎同时到达，CPU 阵发时间分别为 24、3、3，采用先来先服务（FCFS）调度，平均等待时间是多少？",
          en: "Three processes arrive in the order P1, P2, P3 with CPU bursts of 24, 3 and 3. Under first-come, first-served (FCFS) scheduling, what is the average waiting time?",
          ms: "Tiga proses tiba dalam urutan P1, P2, P3 dengan letusan CPU 24, 3 dan 3. Di bawah penjadualan datang dulu dilayan dulu (FCFS), apakah purata masa menunggu?"
        },
        opts: [
          { zh: "3 个时间单位", en: "3 time units", ms: "3 unit masa" },
          { zh: "10 个时间单位", en: "10 time units", ms: "10 unit masa" },
          { zh: "17 个时间单位", en: "17 time units", ms: "17 unit masa" },
          { zh: "27 个时间单位", en: "27 time units", ms: "27 unit masa" }
        ],
        answer: 2,
        explain: {
          zh: "FCFS 按到达顺序执行：P1 等待0，P2 要等完P1的24，P3 要等24+3=27，平均 (0+24+27)/3 = 17。若把顺序改成 P2、P3、P1 则平均等待只有3，这正是讲义强调的护航效应；27只是P3单个进程的等待时间。",
          en: "FCFS runs them in arrival order: P1 waits 0, P2 waits for P1's 24, and P3 waits 24 + 3 = 27, so the average is (0 + 24 + 27)/3 = 17. Reordering as P2, P3, P1 gives an average of only 3, which is the convoy effect the chapter highlights; 27 is merely P3's own waiting time.",
          ms: "FCFS melaksanakan mengikut urutan ketibaan: P1 menunggu 0, P2 menunggu 24 milik P1, dan P3 menunggu 24 + 3 = 27, jadi puratanya (0 + 24 + 27)/3 = 17. Menyusun semula sebagai P2, P3, P1 hanya memberi purata 3, iaitu kesan konvoi yang ditekankan dalam bab; 27 hanyalah masa menunggu P3 sendiri."
        },
        diff: 2,
        topic: { zh: "FCFS与护航效应", en: "FCFS and the convoy effect", ms: "FCFS dan kesan konvoi" }
      },
      {
        id: "os-04-q02",
        type: "mcq",
        q: {
          zh: "用指数平均预测下一个CPU阵发长度时，若取 α = 0，预测值 τ(n+1) 等于什么？",
          en: "When exponential averaging is used to predict the next CPU burst, what does the prediction τ(n+1) reduce to if α = 0?",
          ms: "Apabila purata eksponen digunakan untuk meramal letusan CPU seterusnya, apakah nilai ramalan τ(n+1) apabila α = 0?"
        },
        opts: [
          { zh: "τ(n)，即完全不考虑最近的历史", en: "τ(n), so recent history does not count at all", ms: "τ(n), iaitu sejarah terkini tidak diambil kira langsung" },
          { zh: "t(n)，即只考虑最近一次实际阵发", en: "t(n), so only the most recent actual burst counts", ms: "t(n), iaitu hanya letusan sebenar terkini diambil kira" },
          { zh: "0，即预测值总为零", en: "0, so the prediction is always zero", ms: "0, iaitu ramalan sentiasa sifar" },
          { zh: "所有历史阵发的算术平均值", en: "the arithmetic mean of all past bursts", ms: "min aritmetik semua letusan lampau" }
        ],
        answer: 0,
        explain: {
          zh: "在 τ(n+1) = α·t(n) + (1-α)·τ(n) 中令 α = 0，得 τ(n+1) = τ(n)，最近的阵发长度不起作用；反之 α = 1 时 τ(n+1) = t(n)，只有最近一次实际阵发有效，这正是选项1。讲义通常取 α = 1/2，在两者之间折中。",
          en: "Setting α = 0 in τ(n+1) = α·t(n) + (1-α)·τ(n) gives τ(n+1) = τ(n), so the latest burst has no effect; conversely α = 1 gives τ(n+1) = t(n), where only the last actual burst counts, which is option 1. The chapter notes α is commonly 1/2, a compromise between the two extremes.",
          ms: "Menetapkan α = 0 dalam τ(n+1) = α·t(n) + (1-α)·τ(n) memberikan τ(n+1) = τ(n), jadi letusan terkini tidak memberi kesan; sebaliknya α = 1 memberi τ(n+1) = t(n), iaitu hanya letusan sebenar terakhir dikira, seperti pilihan 1. Bab ini menyatakan α lazimnya 1/2, iaitu kompromi antara kedua-dua ekstrem."
        },
        diff: 3,
        topic: { zh: "指数平均预测CPU阵发", en: "Exponential averaging for burst prediction", ms: "Purata eksponen untuk ramalan letusan" }
      },
      {
        id: "os-04-q03",
        type: "mcq",
        q: {
          zh: "在下列哪两种情形下，CPU 调度程序没有选择的余地，必须立即从就绪队列中挑一个进程？",
          en: "In which two situations does the CPU scheduler have no choice and must immediately pick a process from the ready queue?",
          ms: "Dalam dua keadaan manakah penjadual CPU tidak mempunyai pilihan dan mesti segera memilih proses daripada baris sedia?"
        },
        opts: [
          { zh: "运行→就绪，以及等待→就绪", en: "running → ready, and waiting → ready", ms: "berjalan → sedia, dan menunggu → sedia" },
          { zh: "运行→就绪，以及进程终止", en: "running → ready, and process termination", ms: "berjalan → sedia, dan penamatan proses" },
          { zh: "等待→就绪，以及进程终止", en: "waiting → ready, and process termination", ms: "menunggu → sedia, dan penamatan proses" },
          { zh: "运行→等待，以及进程终止", en: "running → waiting, and process termination", ms: "berjalan → menunggu, dan penamatan proses" }
        ],
        answer: 3,
        explain: {
          zh: "进程从运行转入等待（等待I/O）或终止时，CPU 必然空出来，调度程序别无选择，只能从就绪队列中选一个进程，只在这两种情形下调度的方案称为非抢占式。运行→就绪（被抢占）与等待→就绪（I/O完成）时，新就绪的进程可能与原有进程竞争，调度程序才有选择余地。",
          en: "When a process moves from running to waiting (for I/O) or terminates, the CPU is necessarily free and the scheduler must pick from the ready queue; a scheme that schedules only in these two cases is nonpreemptive. In running → ready (preemption) and waiting → ready (I/O completion), the newly ready process may compete with existing ones, so the scheduler does have a choice.",
          ms: "Apabila proses beralih daripada berjalan ke menunggu (I/O) atau tamat, CPU pasti kosong dan penjadual mesti memilih daripada baris sedia; skema yang menjadualkan hanya dalam dua kes ini bersifat bukan preemptif. Dalam berjalan → sedia (preemptif) dan menunggu → sedia (I/O selesai), proses yang baru sedia mungkin bersaing, jadi penjadual mempunyai pilihan."
        },
        diff: 2,
        topic: { zh: "抢占式与非抢占式调度", en: "Preemptive versus nonpreemptive scheduling", ms: "Penjadualan preemptif berbanding bukan preemptif" }
      },
      {
        id: "os-04-q04",
        type: "mcq",
        q: {
          zh: "就绪队列中有 n 个进程、时间片为 q 时，按轮转（RR）调度，一个进程最多要等多久才会再次获得CPU？",
          en: "With n processes in the ready queue and a time quantum of q, how long does a process wait at most before it gets the CPU again under round-robin (RR) scheduling?",
          ms: "Dengan n proses dalam baris sedia dan kepingan masa q, berapa lamakah sesuatu proses menunggu paling lama sebelum mendapat CPU semula di bawah penjadualan pusingan (RR)?"
        },
        opts: [
          { zh: "q 个时间单位", en: "q time units", ms: "q unit masa" },
          { zh: "(n-1)·q 个时间单位", en: "(n-1)·q time units", ms: "(n-1)·q unit masa" },
          { zh: "n·q 个时间单位", en: "n·q time units", ms: "n·q unit masa" },
          { zh: "n·(q-1) 个时间单位", en: "n·(q-1) time units", ms: "n·(q-1) unit masa" }
        ],
        answer: 1,
        explain: {
          zh: "轮转调度把CPU按时间片轮流分配，每个进程每次最多连续运行q，其余n-1个进程各运行一个时间片后它才能回来，所以最长等待为(n-1)·q。若q相对上下文切换时间太小，切换开销会过高；q很大时RR退化为FCFS。",
          en: "Round robin hands out the CPU in quanta, so each process runs at most q at a time and must let the other n-1 processes each take one quantum before it returns, giving a maximum wait of (n-1)·q. If q is too small relative to context-switch time the overhead becomes excessive, while a very large q degenerates into FCFS.",
          ms: "Pusingan mengagihkan CPU dalam kepingan masa, jadi setiap proses berjalan paling lama q dan membiarkan n-1 proses lain masing-masing mengambil satu kepingan sebelum ia kembali, memberikan masa menunggu maksimum (n-1)·q. Jika q terlalu kecil berbanding masa pertukaran konteks, overhed menjadi terlalu tinggi; jika q sangat besar, RR merosot menjadi FCFS."
        },
        diff: 2,
        topic: { zh: "轮转调度的时间片", en: "Round-robin time quantum", ms: "Kepingan masa pusingan" }
      },
      {
        id: "os-04-q05",
        type: "mcq",
        q: {
          zh: "在速率单调调度（rate-monotonic scheduling）中，任务的优先级是如何分配的？",
          en: "How are priorities assigned to tasks in rate-monotonic scheduling?",
          ms: "Bagaimanakah keutamaan ditetapkan kepada tugasan dalam penjadualan monoton kadar?"
        },
        opts: [
          { zh: "截止期越早优先级越高，越晚越低", en: "the earlier the deadline the higher the priority, and the later the deadline the lower", ms: "semakin awal tarikh akhir semakin tinggi keutamaan, dan semakin lewat semakin rendah" },
          { zh: "周期越长优先级越高", en: "the longer the period the higher the priority", ms: "semakin panjang tempoh semakin tinggi keutamaan" },
          { zh: "优先级与周期成反比，周期越短优先级越高", en: "priority is the inverse of the period, so a shorter period gives a higher priority", ms: "keutamaan berkadar songsang dengan tempoh, jadi tempoh lebih pendek memberi keutamaan lebih tinggi" },
          { zh: "按各应用所占份额 N/T 分配优先级", en: "priorities are set from each application's share N/T", ms: "keutamaan ditetapkan daripada bahagian N/T setiap aplikasi" }
        ],
        answer: 2,
        explain: {
          zh: "速率单调调度按周期的倒数分配优先级：周期越短（速率1/p越高）优先级越高，因此P1的优先级高于周期更长的P2。按截止期早晚分配优先级的是最早截止期优先（EDF），而N/T是比例份额调度的做法。",
          en: "Rate-monotonic scheduling assigns priority from the inverse of the period, so a shorter period (a higher rate, 1/p) means a higher priority, which is why P1 outranks the longer-period P2. Assigning priority by deadline is earliest-deadline-first (EDF), and N/T belongs to proportional-share scheduling.",
          ms: "Penjadualan monoton kadar menetapkan keutamaan daripada songsangan tempoh, jadi tempoh lebih pendek (kadar 1/p lebih tinggi) bermakna keutamaan lebih tinggi, sebab itu P1 mengatasi P2 yang tempohnya lebih panjang. Menetapkan keutamaan mengikut tarikh akhir ialah EDF, manakala N/T ialah penjadualan bahagian berkadar."
        },
        diff: 2,
        topic: { zh: "实时调度：速率单调", en: "Real-time scheduling: rate monotonic", ms: "Penjadualan masa nyata: monoton kadar" }
      },
      {
        id: "os-04-q06",
        type: "multi",
        q: {
          zh: "下列哪些工作是由分派程序（dispatcher）完成的？请选出所有正确项。",
          en: "Which of the following are done by the dispatcher? Select all that apply.",
          ms: "Yang manakah dilakukan oleh penghantar (dispatcher)? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "进行上下文切换", en: "performing a context switch", ms: "melakukan pertukaran konteks" },
          { zh: "把CPU切换到用户模式", en: "switching the CPU to user mode", ms: "menukar CPU ke mod pengguna" },
          { zh: "跳转到用户程序中合适的位置以便重新开始执行", en: "jumping to the proper location in the user program to restart it", ms: "melompat ke lokasi yang betul dalam program pengguna untuk memulakannya semula" },
          { zh: "从就绪队列中决定下一个该运行哪个进程", en: "deciding which process in the ready queue runs next", ms: "menentukan proses mana dalam baris sedia yang berjalan seterusnya" },
          { zh: "计算一组进程的平均等待时间", en: "computing the average waiting time of a set of processes", ms: "mengira purata masa menunggu bagi satu set proses" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "分派程序负责把CPU交给调度程序选中的进程，具体做三件事：上下文切换、切换到用户模式、跳到用户程序中合适的位置重新开始。选项3是CPU调度程序（scheduler）的职责，两者职责不同；选项4属于算法评估，与分派无关。分派延迟就是分派程序停止一个进程并启动另一个进程所需的时间。",
          en: "The dispatcher gives control of the CPU to the process chosen by the scheduler and does three things: switch context, switch to user mode, and jump to the proper location in the user program. Option 3 is the CPU scheduler's job, a distinct responsibility, and option 4 belongs to algorithm evaluation. Dispatch latency is the time the dispatcher needs to stop one process and start another.",
          ms: "Penghantar menyerahkan kawalan CPU kepada proses yang dipilih oleh penjadual dan melakukan tiga perkara: menukar konteks, bertukar ke mod pengguna, dan melompat ke lokasi yang betul dalam program pengguna. Pilihan 3 ialah tugas penjadual CPU yang berbeza, dan pilihan 4 tergolong dalam penilaian algoritma. Kependaman penghantaran ialah masa yang diambil untuk menghentikan satu proses dan memulakan yang lain."
        },
        diff: 2,
        topic: { zh: "分派程序", en: "The dispatcher", ms: "Penghantar" }
      },
      {
        id: "os-04-q07",
        type: "tf",
        q: {
          zh: "在多级队列（multilevel queue）调度中，进程可以随其行为变化在各个队列之间移动。",
          en: "In multilevel queue scheduling, a process can move between the queues as its behaviour changes.",
          ms: "Dalam penjadualan baris berbilang aras, proses boleh berpindah antara baris apabila tingkah lakunya berubah."
        },
        answer: false,
        explain: {
          zh: "说反了：多级队列中进程被永久分配在某个队列（例如按优先级或进程类型划分），不能移动；允许进程在队列之间移动的是多级反馈队列（multilevel feedback queue），它正是实现老化（aging）的手段。",
          en: "This reverses the two schemes: in a multilevel queue each process is permanently assigned to a queue, for example by priority or process type, and cannot move. It is the multilevel feedback queue that lets a process move between queues, which is exactly how aging can be implemented.",
          ms: "Kenyataan ini menterbalikkan kedua-dua skema: dalam baris berbilang aras, setiap proses ditetapkan secara kekal kepada satu baris, misalnya mengikut keutamaan atau jenis proses, dan tidak boleh berpindah. Baris berbilang aras maklum balas yang membenarkan perpindahan, dan itulah cara penuaan dilaksanakan."
        },
        diff: 2,
        topic: { zh: "多级队列与多级反馈队列", en: "Multilevel queue versus feedback queue", ms: "Baris berbilang aras berbanding maklum balas" }
      },
      {
        id: "os-04-q08",
        type: "fill",
        q: {
          zh: "为防止低优先级进程永远得不到CPU，随时间推移逐步提高其优先级的技术称为 ____。",
          en: "To prevent low-priority processes from never getting the CPU, the technique of gradually raising their priority over time is called ____.",
          ms: "Untuk mengelakkan proses berkeutamaan rendah tidak pernah mendapat CPU, teknik menaikkan keutamaannya secara beransur-ansur dengan peredaran masa dipanggil ____."
        },
        answer: ["老化", "aging", "penuaan", "ageing"],
        explain: {
          zh: "优先级调度可能出现饥饿（starvation），即低优先级进程可能永远得不到执行；解决办法是老化——随着时间推进不断提高进程的优先级，多级反馈队列也可以用来实现老化。",
          en: "Priority scheduling can cause starvation, where low-priority processes may never run; the remedy is aging, which raises a process's priority as time passes, and a multilevel feedback queue can implement aging as well.",
          ms: "Penjadualan keutamaan boleh menyebabkan kebuluran, iaitu proses berkeutamaan rendah mungkin tidak pernah berjalan; penyelesaiannya ialah penuaan, yang menaikkan keutamaan proses dengan peredaran masa, dan baris berbilang aras maklum balas juga boleh melaksanakannya."
        },
        diff: 1,
        topic: { zh: "饥饿与老化", en: "Starvation and aging", ms: "Kebuluran dan penuaan" }
      }
    ],
    "os-05": [
      {
        id: "os-05-q01",
        type: "mcq",
        q: {
          zh: "临界区问题的解必须满足三项要求。其中要求“进程提出进入请求后，在请求被批准之前，其他进程允许进入临界区的次数必须有一个上限”的是哪一项？",
          en: "A solution to the critical-section problem must satisfy three requirements. Which one states that after a process requests entry, a bound must exist on how many times other processes may enter before that request is granted?",
          ms: "Penyelesaian masalah bahagian kritikal mesti memenuhi tiga keperluan. Yang manakah menyatakan bahawa selepas sesuatu proses meminta masuk, mesti ada had pada bilangan kali proses lain boleh masuk sebelum permintaan itu diluluskan?"
        },
        opts: [
          { zh: "互斥（mutual exclusion）", en: "mutual exclusion", ms: "pengecualian bersama" },
          { zh: "有限等待（bounded waiting）", en: "bounded waiting", ms: "penantian terbatas" },
          { zh: "前进（progress）", en: "progress", ms: "kemajuan" },
          { zh: "原子性（atomicity）", en: "atomicity", ms: "keatoman" }
        ],
        answer: 1,
        explain: {
          zh: "有限等待规定其他进程插队的次数必须有界，从而避免某个进程被无限期推迟。互斥只保证临界区内至多一个进程；前进要求没有进程在临界区且有进程想进入时，选择下一个进入者不能无限期推迟；原子性描述的是指令不可被打断，并不是这三项要求之一。",
          en: "Bounded waiting puts a bound on how many times others may enter, so a process cannot be postponed indefinitely. Mutual exclusion only guarantees at most one process in the critical section; progress requires that the choice of the next entrant cannot be postponed indefinitely when the section is free; atomicity describes uninterruptible instructions and is not one of the three requirements.",
          ms: "Penantian terbatas menetapkan had pada bilangan kali proses lain boleh masuk supaya sesuatu proses tidak ditangguhkan tanpa had. Pengecualian bersama hanya menjamin paling banyak satu proses dalam bahagian kritikal; kemajuan memerlukan pemilihan pemasuk seterusnya tidak ditangguhkan tanpa had apabila bahagian itu bebas; keatoman menerangkan arahan yang tidak boleh diganggu dan bukan salah satu daripada tiga keperluan."
        },
        diff: 2,
        topic: { zh: "临界区问题的三项要求", en: "The three critical-section requirements", ms: "Tiga keperluan bahagian kritikal" }
      },
      {
        id: "os-05-q02",
        type: "mcq",
        q: {
          zh: "在 Peterson 解法中，进程 Pi 在进入 while (flag[j] && turn == j) 循环之前，先执行哪两条语句？",
          en: "In Peterson's solution, which two statements does process Pi execute before the while (flag[j] && turn == j) loop?",
          ms: "Dalam penyelesaian Peterson, dua pernyataan manakah dilaksanakan oleh proses Pi sebelum gelung while (flag[j] && turn == j)?"
        },
        opts: [
          { zh: "flag[i] = true; turn = j;", en: "flag[i] = true; turn = j;", ms: "flag[i] = true; turn = j;" },
          { zh: "flag[j] = true; turn = i;", en: "flag[j] = true; turn = i;", ms: "flag[j] = true; turn = i;" },
          { zh: "flag[i] = false; turn = j;", en: "flag[i] = false; turn = j;", ms: "flag[i] = false; turn = j;" },
          { zh: "turn = i; flag[i] = true;", en: "turn = i; flag[i] = true;", ms: "turn = i; flag[i] = true;" }
        ],
        answer: 0,
        explain: {
          zh: "Peterson 解法让 Pi 先置自己的标志 flag[i] = true 表示想进入，再把 turn 让给对方（turn = j），然后才在 while 中等待；只有 flag[j] 为真且轮到对方时才空转，离开临界区时置 flag[i] = false。选项1把两个进程的角色写反，选项2一开始就声明不想进入，选项3把 turn 指向自己，都会破坏互斥。",
          en: "Pi first sets its own flag to true to announce its intent, then courteously gives the turn to the other process (turn = j) before spinning in the while loop; it spins only while flag[j] is true and it is the other's turn, and clears flag[i] on exit. Option 1 swaps the roles, option 2 announces no interest at all, and option 3 claims the turn for itself, each breaking mutual exclusion.",
          ms: "Pi mula-mula menetapkan flag sendiri kepada true untuk menyatakan hasrat, kemudian memberi giliran kepada proses lain (turn = j) sebelum berputar dalam gelung while; ia berputar hanya apabila flag[j] benar dan giliran milik pihak lain, dan mengosongkan flag[i] semasa keluar. Pilihan 1 menukar peranan, pilihan 2 menyatakan tidak berminat, dan pilihan 3 merampas giliran, kesemuanya merosakkan pengecualian bersama."
        },
        diff: 2,
        topic: { zh: "Peterson解法", en: "Peterson's solution", ms: "Penyelesaian Peterson" }
      },
      {
        id: "os-05-q03",
        type: "mcq",
        q: {
          zh: "compare_and_swap(int *value, int expected, int new_value) 这条硬件指令的语义是什么？",
          en: "What is the semantics of the hardware instruction compare_and_swap(int *value, int expected, int new_value)?",
          ms: "Apakah semantik arahan perkakasan compare_and_swap(int *value, int expected, int new_value)?"
        },
        opts: [
          { zh: "返回新值，并且在任何情况下都把 value 设为 new_value", en: "it returns the new value and always sets value to new_value", ms: "ia memulangkan nilai baharu dan sentiasa menetapkan value kepada new_value" },
          { zh: "返回原值，并且无条件把 value 设为 new_value", en: "it returns the original value and unconditionally sets value to new_value", ms: "ia memulangkan nilai asal dan tanpa syarat menetapkan value kepada new_value" },
          { zh: "返回原值，仅当 *value == expected 时才把 value 设为 new_value", en: "it returns the original value and sets value to new_value only if *value equals expected", ms: "ia memulangkan nilai asal dan menetapkan value kepada new_value hanya jika *value sama dengan expected" },
          { zh: "返回布尔值表示交换是否成功，且从不修改 value", en: "it returns a boolean telling whether the swap succeeded and never modifies value", ms: "ia memulangkan nilai boolean sama ada pertukaran berjaya dan tidak pernah mengubah value" }
        ],
        answer: 2,
        explain: {
          zh: "该指令原子地读出 value 的当前值并作为返回值，只有当当前值等于 expected 时才写入 new_value，因此“交换”是有条件的。正因为返回的是原值，调用者可以用它判断是否抢到锁（在锁解法中与0比较）。选项0、1把条件性或返回值弄错，选项3则完全否定了写回的动作。",
          en: "The instruction atomically reads the current value and returns it, writing new_value only when the current value equals expected, so the swap is conditional. Because it returns the original value, a caller can tell whether it acquired the lock by comparing with 0. Options 0 and 1 get the condition or the return value wrong, and option 3 denies the write entirely.",
          ms: "Arahan ini membaca nilai semasa secara atomik dan memulangkannya, serta menulis new_value hanya apabila nilai semasa sama dengan expected, jadi pertukaran itu bersyarat. Oleh sebab ia memulangkan nilai asal, pemanggil boleh mengetahui sama ada kunci diperoleh dengan membandingkannya dengan 0. Pilihan 0 dan 1 salah dari segi syarat atau nilai pulangan, dan pilihan 3 menafikan operasi tulis."
        },
        diff: 3,
        topic: { zh: "硬件同步指令", en: "Hardware synchronization instructions", ms: "Arahan penyegerakan perkakasan" }
      },
      {
        id: "os-05-q04",
        type: "mcq",
        q: {
          zh: "要求 P1 中的语句 S1 先于 P2 中的 S2 执行。若用信号量实现，P1 执行 S1 后 signal(synch)，P2 执行 wait(synch) 后再执行 S2，则 synch 的初值应为：",
          en: "Statement S1 in P1 must execute before statement S2 in P2. Using a semaphore, P1 does S1 then signal(synch), and P2 does wait(synch) then S2. What should the initial value of synch be?",
          ms: "Pernyataan S1 dalam P1 mesti dilaksanakan sebelum pernyataan S2 dalam P2. Menggunakan semafor, P1 melakukan S1 kemudian signal(synch), dan P2 melakukan wait(synch) kemudian S2. Apakah nilai awal synch?"
        },
        opts: [
          { zh: "1", en: "1", ms: "1" },
          { zh: "n，即涉及的进程数", en: "n, the number of processes involved", ms: "n, iaitu bilangan proses yang terlibat" },
          { zh: "-1", en: "-1", ms: "-1" },
          { zh: "0", en: "0", ms: "0" }
        ],
        answer: 3,
        explain: {
          zh: "用于“先后顺序”的信号量初值应为0：P2 一执行 wait(synch) 就会被阻塞，直到 P1 完成 S1 并执行 signal(synch) 把它唤醒，从而保证 S1 先于 S2。初值为1时 wait 会立即通过，顺序无法保证；-1不是合法初值；进程数n与同步次序无关。",
          en: "A semaphore used purely for ordering starts at 0: P2 blocks in wait(synch) until P1 finishes S1 and issues signal(synch), which guarantees S1 precedes S2. With an initial value of 1 the wait would succeed immediately and the order would not be enforced; -1 is not a valid initial value; and n has nothing to do with ordering.",
          ms: "Semafor yang digunakan semata-mata untuk urutan bermula dengan 0: P2 menyekat dalam wait(synch) sehingga P1 menamatkan S1 dan mengeluarkan signal(synch), yang menjamin S1 mendahului S2. Dengan nilai awal 1, wait akan berjaya serta-merta dan urutan tidak terjamin; -1 bukan nilai awal yang sah; dan n tiada kaitan dengan urutan."
        },
        diff: 2,
        topic: { zh: "信号量实现先后顺序", en: "Using semaphores for ordering", ms: "Penggunaan semafor untuk urutan" }
      },
      {
        id: "os-05-q05",
        type: "mcq",
        q: {
          zh: "低优先级进程持有高优先级进程所需的锁，使高优先级进程被阻塞。这种现象叫什么，通常怎样解决？",
          en: "A lower-priority process holds a lock needed by a higher-priority process, blocking the higher-priority one. What is this called and how is it usually solved?",
          ms: "Proses berkeutamaan rendah memegang kunci yang diperlukan oleh proses berkeutamaan tinggi sehingga proses itu tersekat. Apakah namanya dan bagaimanakah ia biasanya diselesaikan?"
        },
        opts: [
          { zh: "优先级反转；用优先级继承协议解决", en: "priority inversion; solved with a priority-inheritance protocol", ms: "songsangan keutamaan; diselesaikan dengan protokol pewarisan keutamaan" },
          { zh: "饥饿；用老化解决", en: "starvation; solved with aging", ms: "kebuluran; diselesaikan dengan penuaan" },
          { zh: "死锁；用资源有序分配解决", en: "deadlock; solved by ordering resource requests", ms: "buntu lesu; diselesaikan dengan menyusun permintaan sumber" },
          { zh: "竞争条件；用内存屏障解决", en: "a race condition; solved with a memory barrier", ms: "keadaan perlumbaan; diselesaikan dengan penghadang ingatan" }
        ],
        answer: 0,
        explain: {
          zh: "讲义把这种情况称为优先级反转（priority inversion），属于活性（liveness）问题，通过优先级继承协议解决：持锁的低优先级进程临时继承等待者的高优先级，尽快释放锁。饥饿指进程被无限期阻塞，死锁指两个以上进程互相等待对方才能产生的事件，竞争条件则是并发访问共享数据导致的不一致。",
          en: "The chapter calls this priority inversion, a liveness problem, and solves it with a priority-inheritance protocol in which the lock holder temporarily inherits the waiter's higher priority so it can release the lock quickly. Starvation is indefinite blocking, deadlock is two or more processes each waiting for an event only the others can cause, and a race condition is inconsistent access to shared data.",
          ms: "Bab ini memanggilnya songsangan keutamaan, iaitu masalah keaktifan, dan menyelesaikannya dengan protokol pewarisan keutamaan yang membolehkan pemegang kunci mewarisi keutamaan lebih tinggi buat sementara supaya kunci dilepaskan segera. Kebuluran ialah penyekatan tanpa had, buntu lesu ialah dua atau lebih proses saling menunggu peristiwa yang hanya boleh disebabkan pihak lain, dan keadaan perlumbaan ialah akses tidak konsisten kepada data kongsi."
        },
        diff: 2,
        topic: { zh: "活性问题：优先级反转", en: "Liveness: priority inversion", ms: "Keaktifan: songsangan keutamaan" }
      },
      {
        id: "os-05-q06",
        type: "multi",
        q: {
          zh: "关于管程（monitor），下列哪些说法与讲义一致？请选出所有正确项。",
          en: "Which statements about monitors are consistent with the chapter? Select all that apply.",
          ms: "Pernyataan manakah tentang monitor yang selaras dengan bab ini? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "同一时刻只允许一个进程在管程内活动", en: "only one process may be active inside the monitor at a time", ms: "hanya satu proses boleh aktif di dalam monitor pada satu masa" },
          { zh: "管程的内部变量只能由管程内的代码访问", en: "the monitor's internal variables are accessible only by code within the monitor", ms: "pemboleh ubah dalaman monitor hanya boleh diakses oleh kod dalam monitor" },
          { zh: "在条件变量 x 上执行 x.wait() 会挂起调用进程，直到有人执行 x.signal()", en: "x.wait() on condition variable x suspends the caller until someone executes x.signal()", ms: "x.wait() pada pemboleh ubah syarat x menggantung pemanggil sehingga seseorang melaksanakan x.signal()" },
          { zh: "若没有进程在 x 上等待，执行 x.signal() 不产生任何效果", en: "if no process is waiting on x, executing x.signal() has no effect", ms: "jika tiada proses menunggu pada x, melaksanakan x.signal() tidak memberi kesan" },
          { zh: "使用管程时程序员仍须在临界区前后手工调用 wait/signal 加锁", en: "with monitors the programmer must still call wait/signal by hand around each critical section", ms: "dengan monitor, pengaturcara masih mesti memanggil wait/signal secara manual di sekeliling setiap bahagian kritikal" }
        ],
        answer: [0, 1, 2, 3],
        explain: {
          zh: "管程是高级抽象：内部变量只能由管程内的代码访问，同一时刻只有一个进程能在其中活动，互斥由编译器/实现自动保证，无需程序员手工加锁。条件变量提供 x.wait()（挂起直至 x.signal()）与 x.signal()（唤醒一个等待者），若无等待者则 signal 不起作用，因此选项4错误。",
          en: "A monitor is a high-level abstraction whose internal variables are reachable only through its procedures, with only one process active at a time; mutual exclusion is enforced by the construct itself, so no manual locking is needed. Condition variables offer x.wait(), which suspends until x.signal(), and x.signal(), which resumes one waiter and does nothing if none is waiting, so option 4 is wrong.",
          ms: "Monitor ialah abstraksi peringkat tinggi yang pemboleh ubah dalamannya hanya boleh dicapai melalui prosedurnya, dengan hanya satu proses aktif pada satu masa; pengecualian bersama dikuatkuasakan oleh binaan itu sendiri, jadi tiada penguncian manual diperlukan. Pemboleh ubah syarat menyediakan x.wait() yang menggantung sehingga x.signal(), dan x.signal() yang menyambung seorang penunggu dan tidak berkesan jika tiada, maka pilihan 4 salah."
        },
        diff: 2,
        topic: { zh: "管程与条件变量", en: "Monitors and condition variables", ms: "Monitor dan pemboleh ubah syarat" }
      },
      {
        id: "os-05-q07",
        type: "tf",
        q: {
          zh: "二进制信号量的取值可以在任意非负整数范围内变化，而计数信号量只能取0和1。",
          en: "A binary semaphore may range over any non-negative integer, while a counting semaphore may take only 0 and 1.",
          ms: "Semafor binari boleh berubah dalam mana-mana integer bukan negatif, manakala semafor pengiraan hanya boleh bernilai 0 dan 1."
        },
        answer: false,
        explain: {
          zh: "两者被说反了：计数信号量的取值可以在不受限制的范围内变化，二进制信号量则只能在0和1之间取值，因此二进制信号量的作用等同于互斥锁（mutex lock）。计数信号量还可以用二进制信号量来实现。",
          en: "The two definitions are swapped: a counting semaphore ranges over an unrestricted domain, whereas a binary semaphore takes values only between 0 and 1 and therefore behaves like a mutex lock. A counting semaphore can even be implemented using binary semaphores.",
          ms: "Kedua-dua takrif ini tertukar: semafor pengiraan berubah dalam domain tidak terbatas, manakala semafor binari hanya bernilai antara 0 dan 1 sehingga bertindak seperti kunci mutex. Semafor pengiraan malah boleh dilaksanakan menggunakan semafor binari."
        },
        diff: 1,
        topic: { zh: "计数信号量与二进制信号量", en: "Counting versus binary semaphores", ms: "Semafor pengiraan berbanding binari" }
      },
      {
        id: "os-05-q08",
        type: "fill",
        q: {
          zh: "用忙等待（busy waiting）方式实现的互斥锁，通常被称为 ____。",
          en: "A mutex lock implemented with busy waiting is commonly called a ____.",
          ms: "Kunci mutex yang dilaksanakan dengan penantian sibuk biasanya dipanggil ____."
        },
        answer: ["自旋锁", "spinlock", "spin lock", "kunci berputar"],
        explain: {
          zh: "互斥锁用 acquire() 与 release() 保护临界区，调用必须原子，通常借助 compare-and-swap 等硬件指令实现；因为等待时进程一直在循环检查锁，这种锁被称为自旋锁（spinlock），代价是浪费CPU时间。信号量则可用阻塞/唤醒的等待队列避免忙等待。",
          en: "A mutex lock protects a critical section with acquire() and release(), whose calls must be atomic and are usually built on hardware instructions such as compare-and-swap; because a waiting process keeps looping on the lock, it is called a spinlock, at the cost of wasted CPU time. Semaphores avoid busy waiting by blocking and waking processes on a waiting queue.",
          ms: "Kunci mutex melindungi bahagian kritikal dengan acquire() dan release() yang mesti atomik dan biasanya dibina atas arahan perkakasan seperti compare-and-swap; kerana proses yang menunggu terus menggelung pada kunci, ia dipanggil spinlock, dengan kos masa CPU terbuang. Semafor mengelakkan penantian sibuk dengan menyekat dan menyedarkan proses dalam baris menunggu."
        },
        diff: 1,
        topic: { zh: "互斥锁与自旋锁", en: "Mutex locks and spinlocks", ms: "Kunci mutex dan spinlock" }
      }
    ],
    "os-06": [
      {
        id: "os-06-q01",
        type: "mcq",
        q: {
          zh: "下列哪一项不是死锁的四个必要条件之一？",
          en: "Which of the following is NOT one of the four necessary conditions for deadlock?",
          ms: "Yang manakah BUKAN salah satu daripada empat syarat perlu bagi buntu lesu?"
        },
        opts: [
          { zh: "互斥（mutual exclusion）", en: "mutual exclusion", ms: "pengecualian bersama" },
          { zh: "占有并等待（hold and wait）", en: "hold and wait", ms: "pegang dan tunggu" },
          { zh: "不可抢占（no preemption）", en: "no preemption", ms: "tiada preemptif" },
          { zh: "资源按编号递增顺序分配（resource ordering）", en: "allocating resources in increasing order of enumeration", ms: "memperuntukkan sumber mengikut urutan nombor menaik" }
        ],
        answer: 3,
        explain: {
          zh: "四个必要条件是互斥、占有并等待、不可抢占和循环等待。按编号递增顺序申请资源是破坏“循环等待”这一条件的预防手段，属于解决方案而不是死锁成立的条件本身。四项条件同时成立才可能死锁。",
          en: "The four necessary conditions are mutual exclusion, hold and wait, no preemption and circular wait. Requesting resources in increasing enumeration order is a prevention technique that destroys the circular-wait condition, that is a solution rather than a condition for deadlock. Deadlock can arise only when all four hold simultaneously.",
          ms: "Empat syarat perlu itu ialah pengecualian bersama, pegang dan tunggu, tiada preemptif, dan tunggu bulat. Meminta sumber mengikut urutan nombor menaik ialah teknik pencegahan yang memusnahkan syarat tunggu bulat, iaitu penyelesaian dan bukan syarat buntu lesu. Buntu lesu hanya boleh berlaku apabila keempat-empatnya dipenuhi serentak."
        },
        diff: 1,
        topic: { zh: "死锁的四个必要条件", en: "The four necessary conditions", ms: "Empat syarat perlu" }
      },
      {
        id: "os-06-q02",
        type: "mcq",
        q: {
          zh: "若资源分配图中出现了环，且每种资源类型都只有一个实例，可以得出什么结论？",
          en: "If a resource-allocation graph contains a cycle and every resource type has exactly one instance, what follows?",
          ms: "Jika graf peruntukan sumber mengandungi kitaran dan setiap jenis sumber mempunyai tepat satu contoh, apakah kesimpulannya?"
        },
        opts: [
          { zh: "系统一定发生了死锁", en: "the system is definitely deadlocked", ms: "sistem pasti mengalami buntu lesu" },
          { zh: "系统一定没有死锁", en: "the system is definitely not deadlocked", ms: "sistem pasti tidak mengalami buntu lesu" },
          { zh: "系统只是可能死锁，还需看各类资源的实例数", en: "the system is only possibly deadlocked, depending on the number of instances", ms: "sistem hanya mungkin buntu lesu, bergantung pada bilangan contoh" },
          { zh: "该图不是合法的资源分配图", en: "the graph is not a valid resource-allocation graph", ms: "graf itu bukan graf peruntukan sumber yang sah" }
        ],
        answer: 0,
        explain: {
          zh: "讲义的基本结论是：图中无环则一定无死锁；有环时，若每种资源类型只有一个实例则一定死锁，若有多个实例则只是“可能”死锁。因此单实例下出现环即可判定死锁，选项2描述的是多实例的情形。",
          en: "The chapter's basic facts are: no cycle means no deadlock; a cycle with one instance per resource type means deadlock; with several instances a cycle only means deadlock is possible. Hence with single instances a cycle settles the matter, and option 2 describes the multiple-instance case.",
          ms: "Fakta asas dalam bab ini: tiada kitaran bermakna tiada buntu lesu; kitaran dengan satu contoh bagi setiap jenis sumber bermakna buntu lesu; dengan beberapa contoh, kitaran hanya bermakna buntu lesu mungkin berlaku. Jadi dengan contoh tunggal, kitaran sudah memutuskan, dan pilihan 2 menerangkan kes berbilang contoh."
        },
        diff: 2,
        topic: { zh: "资源分配图与环", en: "Resource-allocation graphs and cycles", ms: "Graf peruntukan sumber dan kitaran" }
      },
      {
        id: "os-06-q03",
        type: "mcq",
        q: {
          zh: "银行家算法例子中，T2 的 Allocation 为 (3,0,2)，Max 为 (9,0,2)，它的 Need 是多少？",
          en: "In the banker's algorithm example, T2 has Allocation (3,0,2) and Max (9,0,2). What is its Need?",
          ms: "Dalam contoh algoritma jurubank, T2 mempunyai Allocation (3,0,2) dan Max (9,0,2). Apakah Need-nya?"
        },
        opts: [
          { zh: "(6,0,2)", en: "(6,0,2)", ms: "(6,0,2)" },
          { zh: "(12,0,4)", en: "(12,0,4)", ms: "(12,0,4)" },
          { zh: "(6,0,0)", en: "(6,0,0)", ms: "(6,0,0)" },
          { zh: "(3,0,0)", en: "(3,0,0)", ms: "(3,0,0)" }
        ],
        answer: 2,
        explain: {
          zh: "银行家算法中 Need[i,j] = Max[i,j] − Allocation[i,j]，逐项相减得 (9-3, 0-0, 2-2) = (6,0,0)。(6,0,2) 只减了A列，(12,0,4) 是相加，(3,0,0) 把 Allocation 当成了 Need。",
          en: "In the banker's algorithm Need[i,j] = Max[i,j] − Allocation[i,j], so element-wise subtraction gives (9-3, 0-0, 2-2) = (6,0,0). Option (6,0,2) subtracts only column A, (12,0,4) adds instead, and (3,0,0) mistakes Allocation for Need.",
          ms: "Dalam algoritma jurubank, Need[i,j] = Max[i,j] − Allocation[i,j], jadi penolakan unsur demi unsur memberi (9-3, 0-0, 2-2) = (6,0,0). Pilihan (6,0,2) hanya menolak lajur A, (12,0,4) menambah, dan (3,0,0) tersilap mengambil Allocation sebagai Need."
        },
        diff: 1,
        topic: { zh: "银行家算法的Need矩阵", en: "The Need matrix in the banker's algorithm", ms: "Matriks Need dalam algoritma jurubank" }
      },
      {
        id: "os-06-q04",
        type: "mcq",
        q: {
          zh: "若系统当前处于不安全状态（unsafe state），下列哪项判断正确？",
          en: "If the system is currently in an unsafe state, which judgement is correct?",
          ms: "Jika sistem berada dalam keadaan tidak selamat, pertimbangan manakah yang betul?"
        },
        opts: [
          { zh: "系统一定已经发生了死锁", en: "the system is already deadlocked", ms: "sistem sudah pasti buntu lesu" },
          { zh: "系统一定不会发生死锁", en: "the system will definitely never deadlock", ms: "sistem pasti tidak akan buntu lesu" },
          { zh: "系统可能发生死锁，因此避免算法要保证系统不进入不安全状态", en: "the system may deadlock, so avoidance algorithms keep it from entering an unsafe state", ms: "sistem mungkin buntu lesu, jadi algoritma pengelakan menghalangnya daripada memasuki keadaan tidak selamat" },
          { zh: "安全状态与不安全状态和死锁无关", en: "safe and unsafe states are unrelated to deadlock", ms: "keadaan selamat dan tidak selamat tiada kaitan dengan buntu lesu" }
        ],
        answer: 2,
        explain: {
          zh: "讲义的三条基本事实是：安全状态一定无死锁；不安全状态只是可能死锁（因为线程日后可能恰好释放资源）；死锁避免的目标就是保证系统永不进入不安全状态。因此不安全并不等于已经死锁，选项0把它说成必然，选项1把它说成不可能。",
          en: "The three basic facts are: a safe state means no deadlock; an unsafe state only means deadlock is possible, since threads may nevertheless release their resources in time; avoidance simply ensures the system never enters an unsafe state. Being unsafe therefore does not mean being deadlocked, so option 0 is too strong and option 1 is wrong.",
          ms: "Tiga fakta asas ialah: keadaan selamat bermakna tiada buntu lesu; keadaan tidak selamat hanya bermakna buntu lesu mungkin berlaku kerana benang mungkin melepaskan sumber tepat pada masanya; pengelakan memastikan sistem tidak pernah memasuki keadaan tidak selamat. Jadi tidak selamat bukan bermakna sudah buntu lesu, maka pilihan 0 terlalu kuat dan pilihan 1 salah."
        },
        diff: 2,
        topic: { zh: "安全状态与不安全状态", en: "Safe and unsafe states", ms: "Keadaan selamat dan tidak selamat" }
      },
      {
        id: "os-06-q05",
        type: "mcq",
        q: {
          zh: "要求每个线程按资源编号递增的顺序提出请求，这种做法破坏的是哪一个必要条件？",
          en: "Requiring every thread to request resources in increasing order of enumeration destroys which necessary condition?",
          ms: "Mewajibkan setiap benang meminta sumber mengikut urutan nombor menaik memusnahkan syarat perlu yang mana?"
        },
        opts: [
          { zh: "互斥（mutual exclusion）", en: "mutual exclusion", ms: "pengecualian bersama" },
          { zh: "占有并等待（hold and wait）", en: "hold and wait", ms: "pegang dan tunggu" },
          { zh: "不可抢占（no preemption）", en: "no preemption", ms: "tiada preemptif" },
          { zh: "循环等待（circular wait）", en: "circular wait", ms: "tunggu bulat" }
        ],
        answer: 3,
        explain: {
          zh: "给每种资源类型规定一个全序、要求线程只能按递增编号申请，就无法形成“T0等T1、T1等T0”这样的环，因此破坏的是循环等待，这也是最常用的预防方式。占有并等待要靠一次性申请全部资源来破坏，不可抢占则靠强制释放已占资源。",
          en: "Imposing a total ordering on resource types and allowing requests only in increasing order makes a cycle such as T0 waiting for T1 and T1 waiting for T0 impossible, so it destroys circular wait, the most common prevention technique. Hold and wait is destroyed by requesting everything up front, and no preemption by forcing held resources to be released.",
          ms: "Mengenakan susunan menyeluruh pada jenis sumber dan hanya membenarkan permintaan mengikut urutan menaik menjadikan kitaran seperti T0 menunggu T1 dan T1 menunggu T0 mustahil, jadi ia memusnahkan tunggu bulat, teknik pencegahan paling lazim. Pegang dan tunggu dimusnahkan dengan meminta semuanya di awal, dan tiada preemptif dengan memaksa sumber dilepaskan."
        },
        diff: 2,
        topic: { zh: "死锁预防：破坏循环等待", en: "Prevention: breaking circular wait", ms: "Pencegahan: memusnahkan tunggu bulat" }
      },
      {
        id: "os-06-q06",
        type: "multi",
        q: {
          zh: "讲义列出四种处理死锁的方法，下列哪些属于这四种方法？请选出所有正确项。",
          en: "The chapter lists four methods for handling deadlocks. Which of the following are among them? Select all that apply.",
          ms: "Bab ini menyenaraikan empat kaedah menangani buntu lesu. Yang manakah antara kaedah tersebut? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "死锁预防，保证系统永不进入死锁状态", en: "deadlock prevention, ensuring the system never enters a deadlock state", ms: "pencegahan buntu lesu, memastikan sistem tidak pernah memasuki keadaan buntu lesu" },
          { zh: "死锁避免，用算法动态检查资源分配状态", en: "deadlock avoidance, dynamically examining the resource-allocation state", ms: "pengelakan buntu lesu, memeriksa keadaan peruntukan sumber secara dinamik" },
          { zh: "允许系统进入死锁状态，再检测并恢复", en: "allowing the system to enter a deadlock state, then detecting and recovering", ms: "membenarkan sistem memasuki keadaan buntu lesu, kemudian mengesan dan memulihkannya" },
          { zh: "忽略该问题，假装死锁从不会发生", en: "ignoring the problem and pretending deadlocks never occur", ms: "mengabaikan masalah itu dan berpura-pura buntu lesu tidak pernah berlaku" },
          { zh: "禁止任意两个线程并发执行", en: "forbidding any two threads from executing concurrently", ms: "melarang mana-mana dua benang daripada melaksanakan secara serentak" }
        ],
        answer: [0, 1, 2, 3],
        explain: {
          zh: "四种方法是：预防（保证永不进入死锁状态）、避免（动态检查分配状态使系统不进入不安全状态）、检测与恢复（允许进入死锁后处理），以及忽略问题假装不会发生——许多通用系统实际上采取的就是最后一种。选项4是取消并发，并不是讲义列出的处理死锁的方法。",
          en: "The four methods are prevention (never enter a deadlock state), avoidance (examine the allocation state dynamically so an unsafe state is never reached), detection with recovery (allow deadlock and then deal with it), and ignoring the problem — the choice many general-purpose systems actually make. Option 4 abolishes concurrency and is not one of the listed methods.",
          ms: "Empat kaedah itu ialah pencegahan (tidak pernah memasuki keadaan buntu lesu), pengelakan (memeriksa keadaan peruntukan secara dinamik supaya keadaan tidak selamat tidak dicapai), pengesanan dengan pemulihan (membenarkan buntu lesu lalu menanganinya), dan mengabaikan masalah — pilihan yang sebenarnya diambil oleh banyak sistem tujuan umum. Pilihan 4 menghapuskan keserentakan dan bukan kaedah yang disenaraikan."
        },
        diff: 1,
        topic: { zh: "处理死锁的四种方法", en: "Four methods for handling deadlocks", ms: "Empat kaedah menangani buntu lesu" }
      },
      {
        id: "os-06-q07",
        type: "tf",
        q: {
          zh: "破坏“占有并等待”的一种做法是要求线程在开始执行前一次性申请并获得它所需的全部资源，其代价是资源利用率低且可能发生饥饿。",
          en: "One way to break hold-and-wait is to require a thread to request and be allocated all its resources before it begins execution, at the cost of low resource utilisation and possible starvation.",
          ms: "Satu cara memusnahkan pegang-dan-tunggu ialah mewajibkan benang meminta dan memperoleh semua sumbernya sebelum mula melaksanakan, dengan kos penggunaan sumber yang rendah dan kemungkinan kebuluran."
        },
        answer: true,
        explain: {
          zh: "这与讲义一致：破坏占有并等待可要求线程开始前一次性申请全部资源，或只在线程不持有任何资源时才允许申请；讲义同时指出这样会降低资源利用率，并可能引起饥饿。",
          en: "This matches the chapter: hold-and-wait can be broken by having a thread request all its resources before it starts, or by allowing requests only when it holds none; the chapter notes the low resource utilisation and the possibility of starvation that follow.",
          ms: "Ini selaras dengan bab: pegang-dan-tunggu boleh dimusnahkan dengan meminta semua sumber sebelum bermula, atau hanya membenarkan permintaan apabila tiada sumber dipegang; bab turut menyatakan penggunaan sumber yang rendah dan kemungkinan kebuluran."
        },
        diff: 2,
        topic: { zh: "死锁预防：破坏占有并等待", en: "Prevention: breaking hold and wait", ms: "Pencegahan: memusnahkan pegang dan tunggu" }
      },
      {
        id: "os-06-q08",
        type: "fill",
        q: {
          zh: "当每种资源类型只有一个实例时，死锁检测通过维护 ____ 来找出环，其中的边 Ti → Tj 表示 Ti 正在等待 Tj。",
          en: "When each resource type has a single instance, deadlock detection looks for a cycle in the ____, where an edge Ti → Tj means Ti is waiting for Tj.",
          ms: "Apabila setiap jenis sumber mempunyai satu contoh, pengesanan buntu lesu mencari kitaran dalam ____, dengan tepi Ti → Tj bermaksud Ti sedang menunggu Tj."
        },
        answer: ["等待图", "wait-for", "wait-for graph", "graf tunggu", "graf menunggu"],
        explain: {
          zh: "这正是等待图（wait-for graph）：节点是线程，边 Ti → Tj 表示 Ti 在等 Tj 占用的资源；周期性地检测图中是否存在环即可判断死锁，检测一个环需要约 n² 次操作。",
          en: "This is the wait-for graph: nodes are threads and an edge Ti → Tj means Ti is waiting for a resource held by Tj. Invoking a cycle search periodically reveals a deadlock, and detecting a cycle takes on the order of n² operations.",
          ms: "Inilah graf tunggu: nod ialah benang dan tepi Ti → Tj bermaksud Ti menunggu sumber yang dipegang oleh Tj. Mencari kitaran secara berkala mendedahkan buntu lesu, dan pengesanan kitaran mengambil kira-kira n² operasi."
        },
        diff: 2,
        topic: { zh: "死锁检测：等待图", en: "Deadlock detection: wait-for graph", ms: "Pengesanan buntu lesu: graf tunggu" }
      }
    ],
    "os-07": [
      {
        id: "os-07-q01",
        type: "mcq",
        q: {
          zh: "在动态存储分配中，哪种策略选择“足够大的最小空洞”，从而留下最小的剩余空洞？",
          en: "In dynamic storage allocation, which strategy chooses the smallest hole that is big enough and therefore leaves the smallest leftover hole?",
          ms: "Dalam peruntukan storan dinamik, strategi manakah memilih lubang terkecil yang cukup besar dan kerana itu meninggalkan lubang baki terkecil?"
        },
        opts: [
          { zh: "首次适应（first-fit）", en: "first-fit", ms: "padanan pertama" },
          { zh: "最佳适应（best-fit）", en: "best-fit", ms: "padanan terbaik" },
          { zh: "最差适应（worst-fit）", en: "worst-fit", ms: "padanan terburuk" },
          { zh: "循环首次适应（next-fit）", en: "next-fit", ms: "padanan seterusnya" }
        ],
        answer: 1,
        explain: {
          zh: "最佳适应分配足够大的最小空洞，因此剩余空洞最小，但必须搜索整个空闲链表（除非按大小排序）。首次适应分配第一个足够大的空洞，速度较快；最差适应分配最大空洞，留下最大的剩余空洞。讲义还指出首次适应与最佳适应在速度和存储利用率上都优于最差适应。",
          en: "Best-fit allocates the smallest hole that is big enough, leaving the smallest leftover, but it must search the entire list unless the holes are ordered by size. First-fit takes the first hole that fits and is faster, while worst-fit takes the largest hole and leaves the largest leftover. The chapter also notes that first-fit and best-fit beat worst-fit in both speed and storage utilisation.",
          ms: "Padanan terbaik memperuntukkan lubang terkecil yang cukup besar, meninggalkan baki terkecil, tetapi ia mesti menelusuri seluruh senarai kecuali lubang disusun mengikut saiz. Padanan pertama mengambil lubang pertama yang memadai dan lebih pantas, manakala padanan terburuk mengambil lubang terbesar dan meninggalkan baki terbesar. Bab ini juga menyatakan padanan pertama dan terbaik mengatasi padanan terburuk dari segi kelajuan dan penggunaan storan."
        },
        diff: 2,
        topic: { zh: "动态存储分配策略", en: "Dynamic storage-allocation strategies", ms: "Strategi peruntukan storan dinamik" }
      },
      {
        id: "os-07-q02",
        type: "mcq",
        q: {
          zh: "在哪种地址绑定方式下，逻辑地址与物理地址才会不相同？",
          en: "Under which address-binding scheme do logical and physical addresses differ?",
          ms: "Di bawah skema pengikatan alamat yang manakah alamat logik dan alamat fizikal berbeza?"
        },
        opts: [
          { zh: "编译时绑定（compile time）", en: "compile-time binding", ms: "pengikatan semasa kompil" },
          { zh: "装入时绑定（load time）", en: "load-time binding", ms: "pengikatan semasa muat" },
          { zh: "执行时绑定（execution time）", en: "execution-time binding", ms: "pengikatan semasa laksana" },
          { zh: "三种绑定方式下都不同", en: "under all three binding schemes alike", ms: "di bawah ketiga-tiga skema pengikatan" }
        ],
        answer: 2,
        explain: {
          zh: "讲义指出：在编译时与装入时绑定方案中逻辑地址与物理地址相同，只有在执行时绑定时两者才不同，因为此时进程可在运行中被移动到另一内存段，需要基址/限长之类的硬件地址映射支持。正因如此，才需要MMU在运行期把虚拟地址转换为物理地址。",
          en: "The chapter states that logical and physical addresses are the same under compile-time and load-time binding, and differ only under execution-time binding, where a process may be moved during execution and hardware address mapping such as base and limit registers is required. That is exactly why an MMU is needed to translate at run time.",
          ms: "Bab ini menyatakan alamat logik dan fizikal adalah sama di bawah pengikatan semasa kompil dan semasa muat, dan hanya berbeza di bawah pengikatan semasa laksana, apabila proses boleh dipindahkan semasa berjalan dan pemetaan alamat perkakasan seperti daftar asas dan had diperlukan. Itulah sebabnya MMU diperlukan untuk menterjemah semasa berjalan."
        },
        diff: 2,
        topic: { zh: "地址绑定与逻辑/物理地址", en: "Address binding and logical versus physical addresses", ms: "Pengikatan alamat dan alamat logik berbanding fizikal" }
      },
      {
        id: "os-07-q03",
        type: "mcq",
        q: {
          zh: "一次内存访问需10纳秒，TLB命中率为80%，命中时只需一次内存访问，未命中需两次。有效访问时间（EAT）是多少？",
          en: "A memory access takes 10 nanoseconds and the TLB hit ratio is 80%; a hit needs one memory access and a miss needs two. What is the effective access time (EAT)?",
          ms: "Satu akses ingatan mengambil 10 nanosaat dan nisbah hit TLB ialah 80%; hit memerlukan satu akses ingatan dan miss memerlukan dua. Apakah masa akses berkesan (EAT)?"
        },
        opts: [
          { zh: "10 纳秒", en: "10 nanoseconds", ms: "10 nanosaat" },
          { zh: "12 纳秒", en: "12 nanoseconds", ms: "12 nanosaat" },
          { zh: "16 纳秒", en: "16 nanoseconds", ms: "16 nanosaat" },
          { zh: "20 纳秒", en: "20 nanoseconds", ms: "20 nanosaat" }
        ],
        answer: 1,
        explain: {
          zh: "EAT = 0.80×10 + 0.20×20 = 8 + 4 = 12 纳秒，相当于访问时间放慢20%。10纳秒是全部命中时的理想值，20纳秒是全部未命中的最坏值；命中率提高到99%时 EAT 只有10.1纳秒，几乎不减速。",
          en: "EAT = 0.80×10 + 0.20×20 = 8 + 4 = 12 ns, a 20% slowdown. 10 ns is the ideal case with every access hitting, and 20 ns is the worst case with every access missing; raising the hit ratio to 99% gives an EAT of only 10.1 ns, almost no slowdown.",
          ms: "EAT = 0.80×10 + 0.20×20 = 8 + 4 = 12 ns, iaitu kelembapan 20%. 10 ns ialah kes ideal apabila semua akses hit, dan 20 ns kes terburuk apabila semua miss; menaikkan nisbah hit kepada 99% memberi EAT hanya 10.1 ns, hampir tiada kelembapan."
        },
        diff: 2,
        topic: { zh: "TLB与有效访问时间", en: "TLB and effective access time", ms: "TLB dan masa akses berkesan" }
      },
      {
        id: "os-07-q04",
        type: "mcq",
        q: {
          zh: "页大小为2048字节、进程大小为72766字节时，内部碎片是多少？",
          en: "With a page size of 2048 bytes and a process size of 72,766 bytes, how much internal fragmentation is there?",
          ms: "Dengan saiz halaman 2048 bait dan saiz proses 72,766 bait, berapakah pemecahan dalaman?"
        },
        opts: [
          { zh: "962 字节", en: "962 bytes", ms: "962 bait" },
          { zh: "1086 字节", en: "1086 bytes", ms: "1086 bait" },
          { zh: "2047 字节", en: "2047 bytes", ms: "2047 bait" },
          { zh: "2048 字节", en: "2048 bytes", ms: "2048 bait" }
        ],
        answer: 0,
        explain: {
          zh: "72766 字节需要 35 个整页加 1086 字节，最后一页只用掉1086字节，浪费 2048 − 1086 = 962 字节，这就是内部碎片。最坏情况是“帧大小 − 1 字节”，平均约为半个帧；1086恰好是最后一页已用的部分。",
          en: "72,766 bytes needs 35 full pages plus 1086 bytes, so the last page uses only 1086 bytes and wastes 2048 − 1086 = 962 bytes, which is the internal fragmentation. The worst case is one frame minus one byte and the average is about half a frame; 1086 is precisely the used part of the last page.",
          ms: "72,766 bait memerlukan 35 halaman penuh serta 1086 bait, jadi halaman terakhir hanya menggunakan 1086 bait dan membazirkan 2048 − 1086 = 962 bait, iaitu pemecahan dalaman. Kes terburuk ialah satu bingkai tolak satu bait dan puratanya kira-kira separuh bingkai; 1086 ialah bahagian yang digunakan pada halaman terakhir."
        },
        diff: 2,
        topic: { zh: "分页与内部碎片", en: "Paging and internal fragmentation", ms: "Penghalaman dan pemecahan dalaman" }
      },
      {
        id: "os-07-q05",
        type: "mcq",
        q: {
          zh: "与每个进程一张页表的做法相比，反置页表（inverted page table）的主要取舍是什么？",
          en: "Compared with giving each process its own page table, what is the main trade-off of an inverted page table?",
          ms: "Berbanding memberikan setiap proses jadual halaman sendiri, apakah pertukaran utama jadual halaman songsang?"
        },
        opts: [
          { zh: "减少保存页表所需的内存，但增加页引用时的查找时间", en: "it reduces the memory needed for page tables but increases the time to search the table on a page reference", ms: "ia mengurangkan ingatan untuk jadual halaman tetapi menambah masa mencari dalam jadual semasa rujukan halaman" },
          { zh: "增加保存页表所需的内存，但缩短查找时间", en: "it increases the memory needed for page tables but shortens the search time", ms: "ia menambah ingatan untuk jadual halaman tetapi memendekkan masa carian" },
          { zh: "它彻底消除了内部碎片", en: "it removes internal fragmentation entirely", ms: "ia menghapuskan pemecahan dalaman sepenuhnya" },
          { zh: "它只适用于一段时期内只有一个进程的系统", en: "it works only in systems that run a single process at a time", ms: "ia hanya berfungsi dalam sistem yang menjalankan satu proses pada satu masa" }
        ],
        answer: 0,
        explain: {
          zh: "反置页表不再让每个进程保存整张逻辑页表，而是为每个物理页帧保留一个表项，因此节省页表内存，但页引用时必须搜索该表，耗时增加，可用哈希表和TLB来缩短搜索。分页本身仍会产生内部碎片，所以选项2错误；反置页表正是为多进程系统设计的。",
          en: "An inverted page table keeps one entry per real frame instead of a full logical page table per process, so it saves memory but forces a search on each page reference, which hash tables and the TLB can shorten. Paging still suffers internal fragmentation, so option 2 is wrong, and inverted tables are designed for multiprocess systems.",
          ms: "Jadual halaman songsang menyimpan satu entri bagi setiap bingkai sebenar dan bukannya jadual logik penuh bagi setiap proses, jadi ia menjimatkan ingatan tetapi memaksa carian pada setiap rujukan halaman, yang boleh dipendekkan dengan jadual hash dan TLB. Penghalaman masih mengalami pemecahan dalaman, jadi pilihan 2 salah, dan jadual songsang direka untuk sistem berbilang proses."
        },
        diff: 3,
        topic: { zh: "反置页表", en: "Inverted page tables", ms: "Jadual halaman songsang" }
      },
      {
        id: "os-07-q06",
        type: "multi",
        q: {
          zh: "关于分页（paging），下列哪些说法与讲义一致？请选出所有正确项。",
          en: "Which statements about paging are consistent with the chapter? Select all that apply.",
          ms: "Pernyataan manakah tentang penghalaman yang selaras dengan bab ini? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "物理内存被划分为大小固定的帧，帧大小为2的幂，介于512字节与16MB之间", en: "physical memory is divided into fixed-size frames, a power of 2 between 512 bytes and 16 MB", ms: "ingatan fizikal dibahagikan kepada bingkai bersaiz tetap, iaitu kuasa 2 antara 512 bait dan 16 MB" },
          { zh: "逻辑内存被划分为同样大小的页", en: "logical memory is divided into pages of the same size", ms: "ingatan logik dibahagikan kepada halaman yang sama saiz" },
          { zh: "分页避免了外部碎片，但仍存在内部碎片", en: "paging avoids external fragmentation but still suffers internal fragmentation", ms: "penghalaman mengelakkan pemecahan luaran tetapi masih mengalami pemecahan dalaman" },
          { zh: "页是物理单位，帧是逻辑单位", en: "pages are physical units while frames are logical units", ms: "halaman ialah unit fizikal manakala bingkai ialah unit logik" },
          { zh: "分页要求把整个进程装入一段连续的物理内存", en: "paging requires the whole process to be loaded into one contiguous region of physical memory", ms: "penghalaman memerlukan seluruh proses dimuatkan ke dalam satu kawasan ingatan fizikal yang berturutan" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "分页把物理内存分成大小固定的帧（2的幂，512字节至16MB），把逻辑内存分成同样大小的页，进程的物理内存可以不相邻，因此消除了外部碎片，但最后一页往往装不满而留下内部碎片。选项3把页和帧说反了（页是逻辑的、帧是物理的），选项4与分页“允许非连续分配”的初衷矛盾。",
          en: "Paging splits physical memory into fixed-size frames (a power of 2 between 512 bytes and 16 MB) and logical memory into pages of the same size; a process's frames need not be contiguous, which removes external fragmentation while the last page usually leaves internal fragmentation. Option 3 swaps pages and frames (pages are logical, frames physical), and option 4 contradicts the whole point of non-contiguous allocation.",
          ms: "Penghalaman membahagikan ingatan fizikal kepada bingkai bersaiz tetap (kuasa 2 antara 512 bait dan 16 MB) dan ingatan logik kepada halaman yang sama saiz; bingkai sesuatu proses tidak perlu berturutan, jadi pemecahan luaran hilang manakala halaman terakhir biasanya meninggalkan pemecahan dalaman. Pilihan 3 menukar halaman dan bingkai, dan pilihan 4 bercanggah dengan tujuan peruntukan tidak berturutan."
        },
        diff: 2,
        topic: { zh: "分页的基本概念", en: "Basic paging concepts", ms: "Konsep asas penghalaman" }
      },
      {
        id: "os-07-q07",
        type: "tf",
        q: {
          zh: "压缩（compaction）只有在地址重定位是动态的、并在执行时进行的情况下才可行。",
          en: "Compaction is possible only if relocation is dynamic and is done at execution time.",
          ms: "Pemadatan hanya boleh dilakukan jika relokasi bersifat dinamik dan dilakukan semasa laksana."
        },
        answer: true,
        explain: {
          zh: "与讲义一致：压缩通过移动内存中的内容把空闲区合并成一个大块，从而减少外部碎片，但只有当程序地址可以在执行时动态重定位时才可行；此外还要处理挂起的I/O（例如先把作业锁在内存中，或只对操作系统缓冲区做I/O）。",
          en: "This matches the chapter: compaction shuffles memory contents so that free areas coalesce into one large block, reducing external fragmentation, but it is possible only when addresses can be relocated dynamically at execution time. Pending I/O also has to be handled, for example by latching the job in memory or doing I/O only into OS buffers.",
          ms: "Ini selaras dengan bab: pemadatan mengalihkan kandungan ingatan supaya kawasan bebas bergabung menjadi satu blok besar, mengurangkan pemecahan luaran, tetapi hanya boleh dilakukan apabila alamat boleh direlokasi secara dinamik semasa laksana. I/O yang belum selesai juga perlu ditangani, misalnya dengan mengunci tugasan dalam ingatan atau melakukan I/O hanya ke penimbal sistem pengendalian."
        },
        diff: 2,
        topic: { zh: "外部碎片与压缩", en: "External fragmentation and compaction", ms: "Pemecahan luaran dan pemadatan" }
      },
      {
        id: "os-07-q08",
        type: "fill",
        q: {
          zh: "只有当例程被调用时才把它装入内存，从而提高内存利用率的技术称为 ____。",
          en: "The technique of loading a routine into memory only when it is called, improving memory utilisation, is called ____.",
          ms: "Teknik memuatkan rutin ke dalam ingatan hanya apabila ia dipanggil, yang meningkatkan penggunaan ingatan, dipanggil ____."
        },
        answer: ["动态加载", "dynamic loading", "pemuatan dinamik", "dynamic load"],
        explain: {
          zh: "动态加载（dynamic loading）让例程在被调用时才装入，未被使用的例程永不进入内存，所有例程以可重定位装入格式存放在磁盘上；讲义特别指出它不需要操作系统的特别支持，主要由程序设计来实现。动态链接（dynamic linking）则是把链接推迟到执行时，两者不要混淆。",
          en: "Dynamic loading brings a routine into memory only when it is called, so unused routines never occupy memory, and all routines stay on disk in relocatable load format; the chapter notes it needs no special operating-system support and is implemented through program design. Dynamic linking, by contrast, postpones linking until execution time.",
          ms: "Pemuatan dinamik memasukkan rutin ke dalam ingatan hanya apabila ia dipanggil, jadi rutin yang tidak digunakan tidak pernah menduduki ingatan, dan semua rutin kekal pada cakera dalam format muat boleh relokasi; bab ini menyatakan ia tidak memerlukan sokongan khas sistem pengendalian dan dilaksanakan melalui reka bentuk program. Pautan dinamik pula menangguhkan pautan sehingga masa laksana."
        },
        diff: 2,
        topic: { zh: "动态加载", en: "Dynamic loading", ms: "Pemuatan dinamik" }
      }
    ],
    "os-08": [
      {
        id: "os-08-q01",
        type: "mcq",
        q: {
          zh: "对讲义给出的引用串（7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1）使用3个帧时，FIFO、OPT、LRU 的缺页次数分别是多少？",
          en: "For the reference string given in the chapter (7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1) with three frames, how many page faults do FIFO, OPT and LRU produce respectively?",
          ms: "Bagi rentetan rujukan dalam bab ini (7,0,1,2,0,3,0,4,2,3,0,3,0,3,2,1,2,0,1,7,0,1) dengan tiga bingkai, berapa kalikah FIFO, OPT dan LRU masing-masing menghasilkan kesilapan halaman?"
        },
        opts: [
          { zh: "FIFO 15 次、OPT 9 次、LRU 12 次", en: "FIFO 15, OPT 9, LRU 12", ms: "FIFO 15, OPT 9, LRU 12" },
          { zh: "FIFO 12 次、OPT 9 次、LRU 15 次", en: "FIFO 12, OPT 9, LRU 15", ms: "FIFO 12, OPT 9, LRU 15" },
          { zh: "FIFO 15 次、OPT 12 次、LRU 9 次", en: "FIFO 15, OPT 12, LRU 9", ms: "FIFO 15, OPT 12, LRU 9" },
          { zh: "FIFO 9 次、OPT 15 次、LRU 12 次", en: "FIFO 9, OPT 15, LRU 12", ms: "FIFO 9, OPT 15, LRU 12" }
        ],
        answer: 0,
        explain: {
          zh: "讲义给出的结果是 FIFO 15 次、OPT 9 次、LRU 12 次：OPT 需要预知未来因此最少，LRU 用过去的使用情况近似未来，表现居中，FIFO 最差。三者的相对次序也说明 LRU 一般优于 FIFO，但仍比 OPT 差。",
          en: "The chapter reports 15 faults for FIFO, 9 for OPT and 12 for LRU: OPT is lowest because it needs knowledge of the future, LRU approximates the future from past use and sits in between, and FIFO performs worst. The ordering also shows that LRU generally beats FIFO yet still trails OPT.",
          ms: "Bab ini melaporkan 15 kesilapan bagi FIFO, 9 bagi OPT dan 12 bagi LRU: OPT paling rendah kerana memerlukan pengetahuan masa depan, LRU menghampiri masa depan daripada penggunaan lampau dan berada di tengah, manakala FIFO paling teruk. Urutan ini juga menunjukkan LRU biasanya mengatasi FIFO tetapi masih kalah kepada OPT."
        },
        diff: 3,
        topic: { zh: "页面置换算法比较", en: "Comparing page-replacement algorithms", ms: "Perbandingan algoritma penggantian halaman" }
      },
      {
        id: "os-08-q02",
        type: "mcq",
        q: {
          zh: "“增加帧数反而可能导致缺页次数增加”这种现象（Belady 异常）会出现在哪种算法上？",
          en: "The phenomenon in which adding more frames can increase the number of page faults (Belady's anomaly) occurs with which algorithm?",
          ms: "Fenomena apabila menambah bingkai boleh menambah bilangan kesilapan halaman (anomali Belady) berlaku pada algoritma yang mana?"
        },
        opts: [
          { zh: "LRU", en: "LRU", ms: "LRU" },
          { zh: "FIFO", en: "FIFO", ms: "FIFO" },
          { zh: "OPT", en: "OPT", ms: "OPT" },
          { zh: "三种算法都会出现", en: "all three algorithms", ms: "ketiga-tiga algoritma" }
        ],
        answer: 1,
        explain: {
          zh: "讲义用引用串 1,2,3,4,1,2,5,1,2,3,4,5 说明 FIFO 会因增加帧而产生更多缺页，这就是 Belady 异常。LRU 与 OPT 属于栈算法（stack algorithms），其缺页次数随帧数增加而单调不增，因此不会出现该异常。",
          en: "Using the string 1,2,3,4,1,2,5,1,2,3,4,5 the chapter shows that FIFO can fault more when given more frames, which is Belady's anomaly. LRU and OPT are stack algorithms whose fault counts are monotonic in the number of frames, so they never exhibit it.",
          ms: "Menggunakan rentetan 1,2,3,4,1,2,5,1,2,3,4,5, bab ini menunjukkan FIFO boleh menghasilkan lebih banyak kesilapan apabila diberi lebih banyak bingkai, iaitu anomali Belady. LRU dan OPT ialah algoritma tindanan yang bilangan kesilapannya monotonik terhadap bilangan bingkai, jadi ia tidak pernah mengalaminya."
        },
        diff: 2,
        topic: { zh: "Belady异常", en: "Belady's anomaly", ms: "Anomali Belady" }
      },
      {
        id: "os-08-q03",
        type: "mcq",
        q: {
          zh: "内存访问时间为200纳秒、缺页服务时间平均为8毫秒，若每1000次访问中有1次缺页，有效访问时间（EAT）约为多少？",
          en: "Memory access time is 200 nanoseconds and the average page-fault service time is 8 milliseconds. If one access in 1000 causes a page fault, what is the effective access time (EAT)?",
          ms: "Masa akses ingatan ialah 200 nanosaat dan purata masa servis kesilapan halaman ialah 8 milisaat. Jika satu daripada 1000 akses menyebabkan kesilapan halaman, apakah masa akses berkesan (EAT)?"
        },
        opts: [
          { zh: "200 纳秒", en: "200 nanoseconds", ms: "200 nanosaat" },
          { zh: "8 毫秒", en: "8 milliseconds", ms: "8 milisaat" },
          { zh: "8.2 微秒", en: "8.2 microseconds", ms: "8.2 mikrosaat" },
          { zh: "40 微秒", en: "40 microseconds", ms: "40 mikrosaat" }
        ],
        answer: 2,
        explain: {
          zh: "EAT = (1−p)×200 + p×8,000,000，取 p = 0.001 得 199.8 + 8000 ≈ 8.2 微秒，即比无缺页时慢约40倍。200纳秒是不发生缺页的理想值，8毫秒是每次都缺页的极端值；若要把性能下降控制在10%以内，p 必须小于0.0000025，即约每40万次访问才有一次缺页。",
          en: "EAT = (1−p)×200 + p×8,000,000, so p = 0.001 gives about 199.8 + 8000 ≈ 8.2 microseconds, roughly a 40-fold slowdown. 200 ns is the ideal fault-free case and 8 ms the extreme case of faulting on every access; keeping the slowdown under 10% requires p below 0.0000025, about one fault in 400,000 accesses.",
          ms: "EAT = (1−p)×200 + p×8,000,000, jadi p = 0.001 memberi kira-kira 199.8 + 8000 ≈ 8.2 mikrosaat, iaitu kelembapan sekitar 40 kali. 200 ns ialah kes ideal tanpa kesilapan dan 8 ms kes melampau apabila setiap akses gagal; untuk mengekalkan kelembapan di bawah 10%, p mesti kurang daripada 0.0000025, iaitu kira-kira satu kesilapan bagi setiap 400,000 akses."
        },
        diff: 3,
        topic: { zh: "缺页率与有效访问时间", en: "Page-fault rate and effective access time", ms: "Kadar kesilapan halaman dan masa akses berkesan" }
      },
      {
        id: "os-08-q04",
        type: "mcq",
        q: {
          zh: "增强型二次机会算法用（引用位, 修改位）来描述页面。下列哪一类页面最适合被替换？",
          en: "The enhanced second-chance algorithm describes pages by the pair (reference bit, modify bit). Which class of page is the best candidate for replacement?",
          ms: "Algoritma peluang kedua dipertingkat menerangkan halaman dengan pasangan (bit rujukan, bit ubah). Kelas halaman manakah calon terbaik untuk diganti?"
        },
        opts: [
          { zh: "(1, 1)：最近被引用且已被修改", en: "(1, 1): recently referenced and modified", ms: "(1, 1): baru dirujuk dan telah diubah" },
          { zh: "(1, 0)：最近被引用但未被修改", en: "(1, 0): recently referenced but not modified", ms: "(1, 0): baru dirujuk tetapi tidak diubah" },
          { zh: "(0, 1)：最近未被引用但已被修改", en: "(0, 1): not recently referenced but modified", ms: "(0, 1): tidak baru dirujuk tetapi telah diubah" },
          { zh: "(0, 0)：最近未被引用且未被修改", en: "(0, 0): neither recently referenced nor modified", ms: "(0, 0): tidak baru dirujuk dan tidak diubah" }
        ],
        answer: 3,
        explain: {
          zh: "(0,0) 既未被最近引用、也没有被修改，替换它代价最小，因此是最佳候选；算法按 (0,0)、(0,1)、(1,0)、(1,1) 的顺序，在最低的非空类别中挑选。修改位为1的页面在替换前必须写回磁盘，而引用位为1说明它很可能马上又被使用。",
          en: "(0,0) is neither recently used nor modified, so evicting it costs least and it is the best candidate; the algorithm scans the classes in the order (0,0), (0,1), (1,0), (1,1) and takes a page from the lowest non-empty class. A page with modify bit 1 must be written back before replacement, and a set reference bit suggests it will soon be used again.",
          ms: "(0,0) tidak baru digunakan dan tidak diubah, jadi menggantikannya paling murah dan ia calon terbaik; algoritma menelusuri kelas mengikut urutan (0,0), (0,1), (1,0), (1,1) dan mengambil halaman daripada kelas tidak kosong terendah. Halaman dengan bit ubah 1 mesti ditulis kembali sebelum diganti, dan bit rujukan yang bernilai 1 menandakan ia mungkin segera digunakan semula."
        },
        diff: 3,
        topic: { zh: "增强型二次机会算法", en: "The enhanced second-chance algorithm", ms: "Algoritma peluang kedua dipertingkat" }
      },
      {
        id: "os-08-q05",
        type: "mcq",
        q: {
          zh: "按照讲义的局部性模型，抖动（thrashing）产生的根本原因是什么？",
          en: "According to the locality model in the chapter, what is the root cause of thrashing?",
          ms: "Menurut model lokaliti dalam bab ini, apakah punca utama thrashing?"
        },
        opts: [
          { zh: "缺页率过低，内存访问过于频繁", en: "the page-fault rate is too low and memory is accessed too often", ms: "kadar kesilapan halaman terlalu rendah dan ingatan diakses terlalu kerap" },
          { zh: "各局部大小之和超过了可用的物理内存", en: "the sum of the sizes of the localities exceeds the total physical memory", ms: "jumlah saiz lokaliti melebihi jumlah ingatan fizikal" },
          { zh: "页面尺寸过大，页表项过多", en: "page size is too large and there are too many page-table entries", ms: "saiz halaman terlalu besar dan entri jadual halaman terlalu banyak" },
          { zh: "CPU利用率过高，调度过于频繁", en: "CPU utilisation is too high and scheduling happens too often", ms: "penggunaan CPU terlalu tinggi dan penjadualan terlalu kerap" }
        ],
        answer: 1,
        explain: {
          zh: "讲义的解释是：进程在局部之间迁移，若 Σ（各局部大小）> 物理内存总量，进程刚换出的页马上又需要，于是忙于换入换出，缺页率极高，CPU利用率随之下降。讲义的应对是用局部或优先级置换策略限制影响；恶化时操作系统若误以为需要提高多道程度而再装入进程，只会更糟。",
          en: "The chapter explains that a process migrates among localities, and if the sum of their sizes exceeds physical memory, pages it just evicted are needed again at once, so it spends its time paging in and out with a very high fault rate and CPU utilisation falls. Local or priority replacement limits the damage, and adding another process on the mistaken belief that multiprogramming should increase only makes it worse.",
          ms: "Bab ini menerangkan bahawa proses berpindah antara lokaliti, dan jika jumlah saiznya melebihi ingatan fizikal, halaman yang baru diganti segera diperlukan semula, jadi proses sibuk memindahkan masuk dan keluar dengan kadar kesilapan sangat tinggi dan penggunaan CPU menurun. Penggantian setempat atau berkeutamaan mengehadkan kesannya, manakala menambah proses atas tanggapan salah bahawa darjah multipengaturcaraan perlu dinaikkan hanya memburukkan keadaan."
        },
        diff: 2,
        topic: { zh: "抖动与局部性模型", en: "Thrashing and the locality model", ms: "Thrashing dan model lokaliti" }
      },
      {
        id: "os-08-q06",
        type: "multi",
        q: {
          zh: "关于页面置换，下列哪些说法与讲义一致？请选出所有正确项。",
          en: "Which statements about page replacement are consistent with the chapter? Select all that apply.",
          ms: "Pernyataan manakah tentang penggantian halaman yang selaras dengan bab ini? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "修改位（脏位）用于减少页面传输开销，只有被修改过的页才需要写回磁盘", en: "the modify (dirty) bit cuts transfer overhead, since only modified pages must be written back to disk", ms: "bit ubah (kotor) mengurangkan overhed pemindahan kerana hanya halaman yang diubah perlu ditulis kembali ke cakera" },
          { zh: "一次缺页可能要两次页面传输：写回牺牲页、再读入所需页", en: "a page fault may require two page transfers: writing back the victim and reading in the wanted page", ms: "satu kesilapan halaman mungkin memerlukan dua pemindahan: menulis balik mangsa dan membaca halaman yang dikehendaki" },
          { zh: "页面置换使逻辑内存与物理内存彻底分离，从而能用较小的物理内存提供很大的虚拟内存", en: "page replacement completes the separation of logical from physical memory, so a large virtual memory can run on a smaller physical memory", ms: "penggantian halaman melengkapkan pemisahan ingatan logik daripada ingatan fizikal, jadi ingatan maya besar boleh berjalan pada ingatan fizikal yang lebih kecil" },
          { zh: "引用串记录的是完整物理地址而不是页号", en: "a reference string records complete physical addresses rather than page numbers", ms: "rentetan rujukan merekod alamat fizikal penuh dan bukan nombor halaman" },
          { zh: "对同一页的重复访问每次都会产生缺页", en: "repeated accesses to the same page cause a page fault every time", ms: "akses berulang kepada halaman yang sama menyebabkan kesilapan halaman setiap kali" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "修改位让系统只写回脏页；若牺牲页是脏页，则一次缺页需要写回加读入两次传输；页面置换补全了逻辑内存与物理内存的分离，使大虚拟内存能建立在较小物理内存之上。选项3错误，引用串只记页号、不含完整地址；选项4错误，讲义明确指出对同一页的重复访问不会引起缺页。",
          en: "The modify bit means only dirty pages are written back; if the victim is dirty, one fault needs both a write-back and a read-in; and page replacement completes the logical/physical separation, letting a large virtual memory sit on smaller physical memory. Option 3 is wrong because a reference string is just page numbers, and option 4 is wrong because the chapter states that repeated access to the same page does not fault.",
          ms: "Bit ubah bermakna hanya halaman kotor ditulis balik; jika mangsa kotor, satu kesilapan memerlukan penulisan balik dan pembacaan masuk; penggantian halaman melengkapkan pemisahan logik/fizikal sehingga ingatan maya besar boleh diletakkan pada ingatan fizikal lebih kecil. Pilihan 3 salah kerana rentetan rujukan hanyalah nombor halaman, dan pilihan 4 salah kerana akses berulang kepada halaman yang sama tidak menyebabkan kesilapan."
        },
        diff: 2,
        topic: { zh: "页面置换的基本步骤", en: "Basic page replacement", ms: "Penggantian halaman asas" }
      },
      {
        id: "os-08-q07",
        type: "tf",
        q: {
          zh: "在按需分页中，进程页表项的 valid–invalid 位在初始时全部被置为 v，表示所有页都已在内存中。",
          en: "In demand paging, the valid–invalid bits of a process's page-table entries are initially all set to v, meaning every page is already in memory.",
          ms: "Dalam penghalaman atas permintaan, bit sah-tidak sah bagi entri jadual halaman proses pada mulanya semuanya ditetapkan kepada v, bermakna semua halaman sudah berada dalam ingatan."
        },
        answer: false,
        explain: {
          zh: "说反了：初始时所有页表项的 valid–invalid 位都被置为 i（不在内存），第一次引用某页时 MMU 在地址转换中发现该位为 i 便触发缺页，由操作系统把页装入并把该位置为 v 后重新执行那条指令。",
          en: "This is reversed: initially every entry's valid–invalid bit is set to i (not in memory). When a page is first referenced, the MMU sees the i during translation and raises a page fault; the operating system brings the page in, sets the bit to v and restarts the instruction.",
          ms: "Kenyataan ini terbalik: pada mulanya semua entri ditetapkan kepada i (tidak dalam ingatan). Apabila halaman pertama kali dirujuk, MMU melihat i semasa terjemahan lalu mencetuskan kesilapan halaman; sistem pengendalian memuatkan halaman itu, menetapkan bit kepada v dan memulakan semula arahan tersebut."
        },
        diff: 2,
        topic: { zh: "按需分页与有效-无效位", en: "Demand paging and the valid-invalid bit", ms: "Penghalaman atas permintaan dan bit sah-tidak sah" }
      },
      {
        id: "os-08-q08",
        type: "fill",
        q: {
          zh: "父进程与子进程最初共享同一批页面，只有当某一方真正修改某页时才复制该页，这种技术称为 ____。",
          en: "Parent and child initially share the same pages, and a page is copied only when one of them actually modifies it. This technique is called ____.",
          ms: "Induk dan anak berkongsi halaman yang sama pada mulanya, dan halaman disalin hanya apabila salah satu benar-benar mengubahnya. Teknik ini dipanggil ____."
        },
        answer: ["COW", "copy-on-write", "写时复制", "salin semasa tulis"],
        explain: {
          zh: "这就是写时复制（copy-on-write，COW）：fork() 之后父子进程共享页面，任一方写入时才复制被修改的页，因此创建进程更高效，只需复制真正被修改的页。页面一般来自按需置零（zero-fill-on-demand）的空闲帧池。",
          en: "This is copy-on-write (COW): after fork() the parent and child share pages, and a page is copied only when either side writes to it, which makes process creation efficient because only genuinely modified pages are duplicated. Frames normally come from a pool of zero-fill-on-demand pages.",
          ms: "Inilah salin semasa tulis (COW): selepas fork(), induk dan anak berkongsi halaman, dan halaman disalin hanya apabila salah satu pihak menulisnya, menjadikan penciptaan proses cekap kerana hanya halaman yang benar-benar diubah diduplikasi. Bingkai biasanya diambil daripada kolam halaman isian sifar atas permintaan."
        },
        diff: 2,
        topic: { zh: "写时复制", en: "Copy-on-write", ms: "Salin semasa tulis" }
      }
    ],
    "os-09": [
      {
        id: "os-09-q01",
        type: "mcq",
        q: {
          zh: "请求队列为 98, 183, 37, 122, 14, 124, 65, 67，磁头从磁道53开始，按 FCFS 调度，磁头总共移动多少条磁道？",
          en: "For the request queue 98, 183, 37, 122, 14, 124, 65, 67 with the head starting at track 53, how many tracks does the head move in total under FCFS?",
          ms: "Bagi baris permintaan 98, 183, 37, 122, 14, 124, 65, 67 dengan kepala bermula pada trek 53, berapa trekkah kepala bergerak secara keseluruhan di bawah FCFS?"
        },
        opts: [
          { zh: "640 条磁道", en: "640 tracks", ms: "640 trek" },
          { zh: "236 条磁道", en: "236 tracks", ms: "236 trek" },
          { zh: "382 条磁道", en: "382 tracks", ms: "382 trek" },
          { zh: "322 条磁道", en: "322 tracks", ms: "322 trek" }
        ],
        answer: 0,
        explain: {
          zh: "FCFS 严格按请求到达顺序服务：|53−98|+|98−183|+|183−37|+|37−122|+|122−14|+|14−124|+|124−65|+|65−67| = 45+85+146+85+108+110+59+2 = 640。236是 SSTF 与 SCAN 在该队列上的移动量，382是 C-SCAN，322是 C-LOOK。",
          en: "FCFS serves strictly in arrival order: |53−98|+|98−183|+|183−37|+|37−122|+|122−14|+|14−124|+|124−65|+|65−67| = 45+85+146+85+108+110+59+2 = 640. 236 is the movement for SSTF and for SCAN on this queue, 382 is C-SCAN and 322 is C-LOOK.",
          ms: "FCFS melayan mengikut urutan ketibaan: |53−98|+|98−183|+|183−37|+|37−122|+|122−14|+|14−124|+|124−65|+|65−67| = 45+85+146+85+108+110+59+2 = 640. 236 ialah pergerakan SSTF dan SCAN bagi baris ini, 382 ialah C-SCAN dan 322 ialah C-LOOK."
        },
        diff: 3,
        topic: { zh: "FCFS磁盘调度", en: "FCFS disk scheduling", ms: "Penjadualan cakera FCFS" }
      },
      {
        id: "os-09-q02",
        type: "mcq",
        q: {
          zh: "关于最短寻道时间优先（SSTF），下列哪项叙述正确？",
          en: "Which statement about shortest-seek-time-first (SSTF) is correct?",
          ms: "Pernyataan manakah tentang paling singkat masa carian dahulu (SSTF) adalah betul?"
        },
        opts: [
          { zh: "它在任何请求队列下都能得到最小的总移动量", en: "it always produces the minimum total head movement for any request queue", ms: "ia sentiasa menghasilkan jumlah pergerakan kepala minimum bagi mana-mana baris permintaan" },
          { zh: "它类似 SJF 调度，通常优于 FCFS，但可能使某些请求饥饿，而且并非最优", en: "it is a form of SJF scheduling, generally better than FCFS, but it may starve some requests and is not optimal", ms: "ia sejenis penjadualan SJF, umumnya lebih baik daripada FCFS, tetapi mungkin membiarkan sesetengah permintaan kebuluran dan ia tidak optimum" },
          { zh: "它严格按请求到达的先后顺序服务，因此本质上公平", en: "it serves requests strictly in arrival order and is therefore intrinsically fair", ms: "ia melayan permintaan mengikut urutan ketibaan dan oleh itu adil secara semula jadi" },
          { zh: "它彻底消除了饥饿，因为每次都会选择最近的请求", en: "it eliminates starvation completely because it always picks the nearest request", ms: "ia menghapuskan kebuluran sepenuhnya kerana sentiasa memilih permintaan terdekat" }
        ],
        answer: 1,
        explain: {
          zh: "SSTF 每次选择离当前磁头最近的请求，相当于磁盘版的 SJF，一般优于 FCFS，但远处的请求可能长期得不到服务（饥饿），而且它并不最优：讲义例子中 SSTF 移动236条磁道，仍有只需208条磁道的服务顺序。选项2描述的是 FCFS，选项3与饥饿的事实矛盾。",
          en: "SSTF always picks the request nearest the current head, a disk version of SJF; it generally beats FCFS but distant requests may starve, and it is not optimal — in the chapter's example SSTF moves 236 tracks while another sequence needs only 208. Option 2 describes FCFS, and option 3 contradicts the starvation problem.",
          ms: "SSTF sentiasa memilih permintaan terdekat dengan kepala semasa, iaitu versi cakera bagi SJF; ia umumnya mengatasi FCFS tetapi permintaan jauh mungkin kebuluran, dan ia tidak optimum — dalam contoh bab, SSTF bergerak 236 trek manakala urutan lain hanya memerlukan 208. Pilihan 2 menerangkan FCFS, dan pilihan 3 bercanggah dengan masalah kebuluran."
        },
        diff: 2,
        topic: { zh: "SSTF磁盘调度", en: "SSTF disk scheduling", ms: "Penjadualan cakera SSTF" }
      },
      {
        id: "os-09-q03",
        type: "mcq",
        q: {
          zh: "磁盘访问时间由寻道时间与旋转延迟组成。旋转延迟指的是什么？",
          en: "Disk access time consists of seek time and rotational latency. What is rotational latency?",
          ms: "Masa akses cakera terdiri daripada masa carian dan kependaman putaran. Apakah kependaman putaran?"
        },
        opts: [
          { zh: "把磁头移动到目标柱面所需的时间", en: "the time to move the head to the destination cylinder", ms: "masa untuk menggerakkan kepala ke silinder destinasi" },
          { zh: "把数据块通过DMA传送到内存所需的时间", en: "the time to transfer the block into memory by DMA", ms: "masa untuk memindahkan blok ke ingatan melalui DMA" },
          { zh: "磁盘旋转使目标扇区到达磁头下方所需的时间", en: "the time for the disk to rotate the desired sector under the disk head", ms: "masa untuk cakera berputar sehingga sektor yang dikehendaki berada di bawah kepala" },
          { zh: "从发出请求到控制器开始处理该请求的排队时间", en: "the queueing time from issuing a request until the controller starts it", ms: "masa berbaris dari permintaan dikeluarkan sehingga pengawal memulakannya" }
        ],
        answer: 2,
        explain: {
          zh: "旋转延迟是等盘片转到目标扇区位于磁头下方的时间，取决于转速（如3500–7000 rpm，平均约为半圈的时间）；把磁头移到目标柱面是寻道时间，数据真正搬入内存则是传输时间，三者是不同阶段。",
          en: "Rotational latency is the wait for the platter to bring the desired sector under the head, set by the rotation speed (3500–7000 rpm, averaging about half a revolution); moving the head to the cylinder is seek time, while the actual transfer into memory is transmission time, a different stage.",
          ms: "Kependaman putaran ialah masa menunggu cakera membawa sektor yang dikehendaki ke bawah kepala, ditentukan oleh kelajuan putaran (3500–7000 rpm, purata kira-kira setengah pusingan); menggerakkan kepala ke silinder ialah masa carian, manakala pemindahan sebenar ke ingatan ialah masa transmisi, iaitu peringkat berbeza."
        },
        diff: 1,
        topic: { zh: "寻道时间与旋转延迟", en: "Seek time and rotational latency", ms: "Masa carian dan kependaman putaran" }
      },
      {
        id: "os-09-q04",
        type: "mcq",
        q: {
          zh: "某文件在 UNIX 中的访问权限为 761（八进制），其中 1 表示 public 类用户。public 类用户能对该文件做什么？",
          en: "A file has UNIX access mode 761 (octal), where the last digit applies to public users. What may a public user do with the file?",
          ms: "Sesuatu fail mempunyai mod akses UNIX 761 (oktal), dengan digit terakhir untuk pengguna awam. Apakah yang boleh dilakukan oleh pengguna awam terhadap fail itu?"
        },
        opts: [
          { zh: "可读、可写、可执行", en: "read, write and execute it", ms: "membaca, menulis dan melaksanakannya" },
          { zh: "可读、可写，但不可执行", en: "read and write it, but not execute it", ms: "membaca dan menulisnya, tetapi tidak melaksanakannya" },
          { zh: "只能执行，不能读也不能写", en: "only execute it, neither read nor write it", ms: "hanya melaksanakannya, tidak boleh membaca atau menulis" },
          { zh: "没有任何访问权限", en: "nothing at all", ms: "tiada apa-apa akses" }
        ],
        answer: 2,
        explain: {
          zh: "UNIX 用三位八进制分别表示 owner、group、public 的 rwx：7 = 111（rwx），6 = 110（rw-），1 = 001（--x）。所以 761 表示文件主可读写执行、同组可读写、其他人只能执行而不能读或写。题目问的是最后一位，因此不是选项0或1。",
          en: "UNIX encodes owner, group and public access as three octal digits over rwx: 7 = 111 (rwx), 6 = 110 (rw-) and 1 = 001 (--x). Hence 761 gives the owner read-write-execute, the group read-write, and everyone else execute only, with no read or write. The question asks about the last digit, so options 0 and 1 do not apply.",
          ms: "UNIX mengekod akses pemilik, kumpulan dan awam sebagai tiga digit oktal bagi rwx: 7 = 111 (rwx), 6 = 110 (rw-) dan 1 = 001 (--x). Jadi 761 memberi pemilik baca-tulis-laksana, kumpulan baca-tulis, dan orang lain hanya laksana tanpa baca atau tulis. Soalan merujuk digit terakhir, jadi pilihan 0 dan 1 tidak berkenaan."
        },
        diff: 2,
        topic: { zh: "UNIX文件保护", en: "UNIX file protection", ms: "Perlindungan fail UNIX" }
      },
      {
        id: "os-09-q05",
        type: "mcq",
        q: {
          zh: "与单级目录相比，二级目录（每个用户一个目录）解决了命名问题并提高了查找效率，但它缺少什么能力？",
          en: "Compared with a single-level directory, a two-level directory (one directory per user) solves the naming problem and speeds up searching, but what capability does it lack?",
          ms: "Berbanding baris tunggal, baris dua aras (satu baris bagi setiap pengguna) menyelesaikan masalah penamaan dan mempercepat carian, tetapi apakah keupayaan yang tiada?"
        },
        opts: [
          { zh: "路径名（path name）的使用", en: "the use of path names", ms: "penggunaan nama laluan" },
          { zh: "对文件进行逻辑分组（grouping）", en: "logical grouping of files", ms: "pengelompokan logik fail" },
          { zh: "不同用户使用相同的文件名", en: "letting different users use the same file name", ms: "membenarkan pengguna berbeza menggunakan nama fail yang sama" },
          { zh: "按用户划分的独立目录", en: "a separate directory for each user", ms: "baris berasingan bagi setiap pengguna" }
        ],
        answer: 1,
        explain: {
          zh: "二级目录为每个用户建一个目录，可以用路径名定位文件、不同用户可有同名文件、查找也高效，但仍没有分组能力（no grouping capability）。逻辑分组要留到树形目录（按目录组织文件）才具备；选项2、3正是二级目录已经解决的问题。",
          en: "A two-level directory gives each user a directory, supports path names, lets different users keep the same file name and searches efficiently, yet it still has no grouping capability. Logical grouping arrives with tree-structured directories; options 2 and 3 are precisely what the two-level scheme already solves.",
          ms: "Baris dua aras memberikan setiap pengguna satu baris, menyokong nama laluan, membenarkan pengguna berbeza menyimpan nama fail yang sama dan mencari dengan cekap, namun masih tiada keupayaan pengelompokan. Pengelompokan logik muncul dengan baris berbentuk pokok; pilihan 2 dan 3 ialah perkara yang sudah diselesaikan oleh skema dua aras."
        },
        diff: 2,
        topic: { zh: "目录结构", en: "Directory structures", ms: "Struktur direktori" }
      },
      {
        id: "os-09-q06",
        type: "multi",
        q: {
          zh: "关于磁盘调度算法的选择，下列哪些说法与讲义一致？请选出所有正确项。",
          en: "Which statements about selecting a disk-scheduling algorithm are consistent with the chapter? Select all that apply.",
          ms: "Pernyataan manakah tentang pemilihan algoritma penjadualan cakera yang selaras dengan bab ini? Pilih semua yang berkenaan."
        },
        opts: [
          { zh: "磁盘负载很重时，SCAN、C-SCAN（或 LOOK、C-LOOK）更合适", en: "SCAN and C-SCAN (or LOOK and C-LOOK) suit systems that place a heavy load on the disk", ms: "SCAN dan C-SCAN (atau LOOK dan C-LOOK) sesuai untuk sistem yang membebankan cakera dengan berat" },
          { zh: "若队列中很少有超过一个未完成请求，所有算法都退化为 FCFS，效果等同", en: "if the queue seldom holds more than one outstanding request, all algorithms degrade to FCFS and are effectively equivalent", ms: "jika baris jarang mempunyai lebih daripada satu permintaan belum selesai, semua algoritma merosot kepada FCFS dan hampir setara" },
          { zh: "C-SCAN 在返回行程中不服务任何请求，因此等待时间分布比 SCAN 更均匀", en: "C-SCAN serves no requests on the return trip, so its wait times are more uniform than SCAN's", ms: "C-SCAN tidak melayan permintaan semasa perjalanan balik, jadi masa menunggunya lebih seragam daripada SCAN" },
          { zh: "按磁头移动量设计的最优算法，其收益总能超过算法的计算开销", en: "an optimal algorithm in head movement always repays the computation it costs", ms: "algoritma optimum dari segi pergerakan kepala sentiasa membalas kos pengiraannya" },
          { zh: "FCFS 在中等和重负载下表现最好", en: "FCFS performs best under medium and heavy loading", ms: "FCFS berprestasi terbaik di bawah beban sederhana dan berat" }
        ],
        answer: [0, 1, 2],
        explain: {
          zh: "讲义指出 SCAN/C-SCAN（以及 LOOK/C-LOOK）更适合磁盘负载很重的系统；队列中很少有多于一个未完成请求时，各算法都退化为 FCFS；C-SCAN 返回行程不服务请求，因而响应时间方差很小、等待更均匀。选项3错误，讲义强调最优算法的计算开销可能抵不过相对 SSTF 或 SCAN 的节省；选项4错误，FCFS 只适合负载轻且请求均匀分布的情况。",
          en: "The chapter states that SCAN/C-SCAN (and LOOK/C-LOOK) suit heavily loaded disks; when the queue rarely holds more than one outstanding request every algorithm degrades to FCFS; and C-SCAN serves nothing on the return trip, giving very small variance in response time. Option 3 is wrong because the computation for an optimal algorithm may not justify the savings over SSTF or SCAN, and option 4 is wrong because FCFS is only acceptable under light load with uniformly distributed requests.",
          ms: "Bab ini menyatakan SCAN/C-SCAN (serta LOOK/C-LOOK) sesuai untuk cakera berbeban berat; apabila baris jarang mempunyai lebih daripada satu permintaan belum selesai, semua algoritma merosot kepada FCFS; dan C-SCAN tidak melayan apa-apa semasa perjalanan balik, memberi varians masa tindak balas yang sangat kecil. Pilihan 3 salah kerana pengiraan algoritma optimum mungkin tidak berbaloi berbanding SSTF atau SCAN, dan pilihan 4 salah kerana FCFS hanya wajar pada beban ringan dengan permintaan yang tersebar sekata."
        },
        diff: 2,
        topic: { zh: "磁盘调度算法的选用", en: "Choosing a disk-scheduling algorithm", ms: "Memilih algoritma penjadualan cakera" }
      },
      {
        id: "os-09-q07",
        type: "tf",
        q: {
          zh: "磁盘的逻辑块一维数组按顺序映射到扇区时，编号0的扇区位于最外层柱面第一条磁道的第一个扇区。",
          en: "When the one-dimensional array of logical blocks is mapped onto disk sectors, logical block 0 sits in the first sector of the first track of the outermost cylinder.",
          ms: "Apabila tatasusunan satu dimensi blok logik dipetakan ke sektor cakera, blok logik 0 terletak pada sektor pertama trek pertama silinder paling luar."
        },
        answer: true,
        explain: {
          zh: "与讲义一致：磁盘被看作逻辑块的一维数组，映射从最外层柱面的第一条磁道开始，依次走完该磁道的扇区、该柱面其余磁道，再由外向内推进到其余柱面。因此0号扇区在最外层，而不是在最内层或盘片中心。",
          en: "This matches the chapter: the disk is a one-dimensional array of logical blocks, and the mapping starts at the first track of the outermost cylinder, proceeds through that track, then the rest of the cylinder, and then inward through the remaining cylinders. Sector 0 is therefore outermost, not innermost.",
          ms: "Ini selaras dengan bab: cakera ialah tatasusunan satu dimensi blok logik, dan pemetaan bermula pada trek pertama silinder paling luar, diteruskan melalui trek itu, kemudian seluruh silinder, dan seterusnya ke dalam melalui silinder lain. Jadi sektor 0 berada paling luar, bukan paling dalam."
        },
        diff: 1,
        topic: { zh: "磁盘逻辑结构", en: "Disk logical structure", ms: "Struktur logik cakera" }
      },
      {
        id: "os-09-q08",
        type: "fill",
        q: {
          zh: "磁盘被寻址为逻辑块的一维数组，其中最小的传输单位称为 ____。",
          en: "A disk is addressed as a one-dimensional array of logical blocks, and the smallest unit of transfer is called a ____.",
          ms: "Cakera dialamatkan sebagai tatasusunan satu dimensi blok logik, dan unit pemindahan terkecil dipanggil ____."
        },
        answer: ["逻辑块", "logical block", "blok logik", "logical blocks"],
        explain: {
          zh: "讲义把磁盘驱动器描述为逻辑块的一维大数组，逻辑块（logical block）是最小的传输单位；这个一维数组再按顺序映射到磁盘的物理扇区，从最外层柱面的第一条磁道开始。",
          en: "The chapter describes a disk drive as a large one-dimensional array of logical blocks, where the logical block is the smallest unit of transfer; that array is mapped in order onto the physical sectors, starting from the first track of the outermost cylinder.",
          ms: "Bab ini menerangkan pemacu cakera sebagai tatasusunan satu dimensi blok logik yang besar, dengan blok logik sebagai unit pemindahan terkecil; tatasusunan itu dipetakan mengikut urutan ke sektor fizikal, bermula dari trek pertama silinder paling luar."
        },
        diff: 1,
        topic: { zh: "逻辑块与磁盘寻址", en: "Logical blocks and disk addressing", ms: "Blok logik dan pengalamatan cakera" }
      }
    ]
  }
};
