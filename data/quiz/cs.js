window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["cs"] = {
  id: "cs",
  chapters: {
    "cs-01": [
      {
        id: "cs-01-q01",
        type: "mcq",
        q: {
          zh: "攻击者没有改动数据库里原有的任何记录，只是向系统中插入虚假的交易记录和伪造的客户资料。按讲义对安全威胁的四分法，这属于哪一类？",
          en: "An attacker does not change any existing record in a database but inserts spurious transactions and forged customer records. In the lecture's four-way classification of security threats, which category is this?",
          ms: "Penyerang tidak mengubah sebarang rekod sedia ada dalam pangkalan data tetapi memasukkan transaksi palsu dan rekod pelanggan yang dipalsukan. Dalam pengelasan ancaman keselamatan kepada empat kategori menurut kuliah, kategori manakah ini?"
        },
        opts: [
          {
            zh: "修改：未授权方读取并篡改已有数据的内容",
            en: "Modification: an unauthorized party reads and tampers with the content of existing data",
            ms: "Pengubahsuaian: pihak tidak sah membaca dan mengusik kandungan data sedia ada"
          },
          {
            zh: "截取：未授权方只是获得了对资产的访问，例如搭线窃听",
            en: "Interception: an unauthorized party merely gains access to an asset, for example by wiretapping",
            ms: "Pemintasan: pihak tidak sah hanya mendapat akses kepada aset, contohnya melalui penyadapan wayar"
          },
          {
            zh: "伪造：未授权方在系统中添加虚假或伪造的对象",
            en: "Fabrication: an unauthorized party adds false or counterfeit objects to the system",
            ms: "Fabrikasi: pihak tidak sah menambah objek palsu atau tiruan ke dalam sistem"
          },
          {
            zh: "中断：资产变得丢失、不可用或无法使用",
            en: "Interruption: an asset becomes lost, unavailable or unusable",
            ms: "Gangguan: aset menjadi hilang, tidak tersedia atau tidak boleh digunakan"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义把威胁分为中断、截取、修改与伪造四类，其中伪造是添加虚假或附加数据，例如向网络插入虚假交易、向数据库添加记录。修改的前提是已有数据先被读取再被篡改，本题中原有记录未动，故不是修改；截取只取得访问而不改动，中断则使资产不可用，两者都不符合。",
          en: "The lecture classifies threats as interruption, interception, modification and fabrication; fabrication means adding false or spurious data, such as inserting spurious transactions into a network or adding records to a database. Modification presupposes that existing data are read and then tampered with, which does not happen here; interception only gains access without altering, and interruption makes an asset unavailable.",
          ms: "Kuliah mengelaskan ancaman kepada gangguan, pemintasan, pengubahsuaian dan fabrikasi; fabrikasi bermaksud menambah data palsu atau tiruan, contohnya memasukkan transaksi palsu ke dalam rangkaian atau menambah rekod ke dalam pangkalan data. Pengubahsuaian mengandaikan data sedia ada dibaca lalu diusik, yang tidak berlaku di sini; pemintasan hanya mendapat akses tanpa mengubah, manakala gangguan menjadikan aset tidak tersedia."
        },
        diff: 2,
        topic: {
          zh: "威胁的四种类型",
          en: "Four types of threats",
          ms: "Empat jenis ancaman"
        }
      },
      {
        id: "cs-01-q02",
        type: "mcq",
        q: {
          zh: "讲义对机密性（confidentiality）的界定比“不许读取”更宽。下列哪一项最准确地说明它所禁止的“访问”范围？",
          en: "The lecture defines confidentiality more broadly than “no reading”. Which option most accurately states the range of access that confidentiality forbids?",
          ms: "Kuliah mentakrifkan kerahsiaan lebih luas daripada “tidak boleh membaca”. Pilihan manakah paling tepat menerangkan julat akses yang dilarang oleh kerahsiaan?"
        },
        opts: [
          {
            zh: "只禁止读取文件内容，查看、打印或知道资产存在都不算违规",
            en: "Only reading file contents is forbidden; viewing, printing or knowing an asset exists is not a breach",
            ms: "Hanya membaca kandungan fail dilarang; melihat, mencetak atau mengetahui kewujudan aset tidak dikira pelanggaran"
          },
          {
            zh: "除读取外，还包括查看、打印，甚至仅仅知道该资产存在",
            en: "Besides reading, it covers viewing, printing, or even simply knowing that the asset exists",
            ms: "Selain membaca, ia merangkumi melihat, mencetak, malah sekadar mengetahui kewujudan aset itu"
          },
          {
            zh: "只禁止把数据复制到移动介质，屏幕上显示不算泄露",
            en: "Only copying data to removable media is forbidden; on-screen display is not a leak",
            ms: "Hanya menyalin data ke media boleh tanggal dilarang; paparan di skrin bukan kebocoran"
          },
          {
            zh: "只禁止修改数据，读取与传播都不在其范围内",
            en: "Only modifying data is forbidden; reading and spreading it are outside its scope",
            ms: "Hanya mengubah data dilarang; membaca dan menyebarkannya di luar skopnya"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义明确指出，机密性中的“访问”不只是读取，还包括查看、打印，或者仅仅知道某个资产存在，因此选项2正确。选项1把范围窄化为读取；选项3把机密性等同于防止复制到介质；选项4把机密性与完整性混为一谈，破坏了“只由授权方改动”的才是完整性。",
          en: "The lecture states explicitly that access under confidentiality is not only reading but also viewing, printing, or simply knowing that a particular asset exists, so option 2 is correct. Option 1 narrows the scope to reading; option 3 equates confidentiality with preventing copies to media; option 4 confuses confidentiality with integrity, which is about modification only by authorized parties.",
          ms: "Kuliah menyatakan dengan jelas bahawa akses di bawah kerahsiaan bukan sekadar membaca tetapi juga melihat, mencetak, atau sekadar mengetahui kewujudan aset, jadi pilihan 2 betul. Pilihan 1 menyempitkan skop kepada membaca; pilihan 3 menyamakan kerahsiaan dengan menghalang salinan ke media; pilihan 4 mengelirukan kerahsiaan dengan integriti, yang berkaitan pengubahsuaian oleh pihak sah sahaja."
        },
        diff: 2,
        topic: {
          zh: "机密性的范围",
          en: "Scope of confidentiality",
          ms: "Skop kerahsiaan"
        }
      },
      {
        id: "cs-01-q03",
        type: "mcq",
        q: {
          zh: "讲义用 policy、mechanism、assurance 三个词分别回答“做什么、怎么做、做得多好”。其中 assurance 指的是什么？",
          en: "The lecture uses policy, mechanism and assurance to answer “what, how and how well”. What does assurance refer to?",
          ms: "Kuliah menggunakan policy, mechanism dan assurance untuk menjawab “apa, bagaimana dan seberapa baik”. Apakah yang dimaksudkan dengan assurance?"
        },
        opts: [
          {
            zh: "组织用来规定规则、法律与规章的文件，回答“做什么”",
            en: "The document of rules, laws and regulations, answering “what”",
            ms: "Dokumen peraturan, undang-undang dan tatatertib, menjawab “apa”"
          },
          {
            zh: "用于检测、预防或从攻击中恢复的机制，回答“怎么做”",
            en: "A mechanism designed to detect, prevent or recover from an attack, answering “how”",
            ms: "Mekanisme untuk mengesan, mencegah atau pulih daripada serangan, menjawab “bagaimana”"
          },
          {
            zh: "系统或产品符合其功能安全规范、且不执行危及安全的非预期功能的可信程度，回答“做得多好”",
            en: "The level of trust that a system conforms to its functional security specification and performs no unintended function that compromises security, answering “how well”",
            ms: "Tahap kepercayaan bahawa sistem mematuhi spesifikasi keselamatan fungsinya dan tidak menjalankan fungsi tidak dijangka yang menjejaskan keselamatan, menjawab “seberapa baik”"
          },
          {
            zh: "判定某个技术实现究竟安全还是不安全的实现细节，回答“是否安全”",
            en: "The implementation detail that decides whether a technical implementation is secure or not, answering “whether secure”",
            ms: "Butiran pelaksanaan yang menentukan sama ada sesuatu pelaksanaan teknikal selamat atau tidak, menjawab “selamat atau tidak”"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义的三层对应关系是：policy 规定规则、法律与规章，回答“做什么”；mechanism 是检测、预防或恢复的机制，回答“怎么做”；assurance 是对系统符合功能安全规范、且不执行损害安全的非预期功能的信任程度，回答“做得多好”。选项1、2分别描述 policy 与 mechanism，选项4把技术实现本身当成了 assurance。",
          en: "The three levels map as follows: policy states the rules, laws and regulations and answers “what”; mechanism is the means to detect, prevent or recover and answers “how”; assurance is the level of trust that a system meets its functional security specification and performs no unintended function that compromises security, answering “how well”. Options 1 and 2 describe policy and mechanism, while option 4 mistakes the technical implementation for assurance.",
          ms: "Tiga aras itu dipetakan begini: policy menyatakan peraturan, undang-undang dan tatatertib serta menjawab “apa”; mechanism ialah cara untuk mengesan, mencegah atau pulih dan menjawab “bagaimana”; assurance ialah tahap kepercayaan bahawa sistem memenuhi spesifikasi keselamatan fungsinya dan tidak melakukan fungsi tidak dijangka yang menjejaskan keselamatan, menjawab “seberapa baik”. Pilihan 1 dan 2 menerangkan policy dan mechanism, manakala pilihan 4 menyamakan pelaksanaan teknikal dengan assurance."
        },
        diff: 2,
        topic: {
          zh: "策略、机制与保证",
          en: "Policy, mechanism and assurance",
          ms: "Dasar, mekanisme dan jaminan"
        }
      },
      {
        id: "cs-01-q04",
        type: "mcq",
        q: {
          zh: "讲义引用的调查给出了威胁来源的大致比例。按这些数字，单独一项就占到约 55% 的来源是？",
          en: "The surveys cited in the lecture give approximate proportions for the sources of threats. Which single source accounts for about 55%?",
          ms: "Kajian yang dipetik dalam kuliah memberikan anggaran perkadaran punca ancaman. Punca tunggal manakah yang menyumbang kira-kira 55%?"
        },
        opts: [
          {
            zh: "心怀不满的员工",
            en: "Disgruntled employees",
            ms: "Pekerja yang tidak puas hati"
          },
          {
            zh: "不诚实的员工",
            en: "Dishonest employees",
            ms: "Pekerja yang tidak jujur"
          },
          {
            zh: "外部人员入侵",
            en: "Outsider access",
            ms: "Akses orang luar"
          },
          {
            zh: "人为错误",
            en: "Human error",
            ms: "Kesilapan manusia"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义给出的顺序是：约 55% 为人为错误，其后是不满员工、不诚实员工与外部入侵各约 10%，其余为火灾、水灾等。因此过半的是人为错误，也就是内部人员的疏忽与遗漏；另外三项都只有约十分之一，不能与 55% 混淆。",
          en: "The lecture gives roughly 55% for human error, followed by disgruntled employees, dishonest employees and outsider access at about 10% each, with fire and flood making up the rest. Human error, that is the errors and omissions of insiders, therefore accounts for more than half; the other three are only about one tenth each.",
          ms: "Kuliah memberikan kira-kira 55% untuk kesilapan manusia, diikuti pekerja tidak puas hati, pekerja tidak jujur dan akses orang luar pada kira-kira 10% setiap satu, dengan kebakaran dan banjir melengkapkan selebihnya. Kesilapan manusia, iaitu kesilapan dan ketinggalan orang dalam, mengambil lebih separuh; tiga yang lain hanya kira-kira satu persepuluh."
        },
        diff: 2,
        topic: {
          zh: "威胁来源的比例",
          en: "Proportions of threat sources",
          ms: "Perkadaran punca ancaman"
        }
      },
      {
        id: "cs-01-q05",
        type: "mcq",
        q: {
          zh: "在访问控制的术语中，被访问的数据项（例如某个文件或某条记录）被称为什么？",
          en: "In access-control terminology, the data item being accessed, such as a file or a record, is called what?",
          ms: "Dalam istilah kawalan akses, item data yang diakses, seperti fail atau rekod, dipanggil apa?"
        },
        opts: [
          {
            zh: "主体（subject）",
            en: "A subject",
            ms: "Subjek"
          },
          {
            zh: "访问方式（access mode）",
            en: "An access mode",
            ms: "Mod akses"
          },
          {
            zh: "客体（object）",
            en: "An object",
            ms: "Objek"
          },
          {
            zh: "策略（policy）",
            en: "A policy",
            ms: "Dasar"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义把发起访问的人、进程或程序称为主体（subject），把被访问的数据项称为客体（object），把访问的种类（读、写、执行）称为访问方式（access mode），把授权本身称为策略（policy）。因此被访问的数据项是客体，其余三项分别是访问者、访问种类与授权规则。",
          en: "The lecture calls the person, process or program that requests access the subject, the data item being accessed the object, the kind of access such as read, write or execute the access mode, and the authorization itself the policy. The item being accessed is therefore the object; the other terms name the requester, the kind of access and the authorization rule.",
          ms: "Kuliah memanggil orang, proses atau program yang meminta akses sebagai subjek, item data yang diakses sebagai objek, jenis akses seperti baca, tulis atau laksana sebagai mod akses, dan kebenaran itu sendiri sebagai dasar. Item yang diakses ialah objek; istilah lain menamakan peminta, jenis akses dan peraturan kebenaran."
        },
        diff: 1,
        topic: {
          zh: "访问控制的基本术语",
          en: "Basic access-control terminology",
          ms: "Istilah asas kawalan akses"
        }
      },
      {
        id: "cs-01-q06",
        type: "multi",
        q: {
          zh: "讲义在“防御手段”（Methods of Defense）一页列出了若干类控制。下列哪些属于其中？（多选）",
          en: "The lecture's “Methods of Defense” page lists several classes of control. Which of the following are among them? (choose all that apply)",
          ms: "Halaman “Kaedah Pertahanan” dalam kuliah menyenaraikan beberapa kelas kawalan. Antara berikut, yang manakah termasuk di dalamnya? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "加密",
            en: "Encryption",
            ms: "Penyulitan"
          },
          {
            zh: "物理控制",
            en: "Physical controls",
            ms: "Kawalan fizikal"
          },
          {
            zh: "通过隐蔽实现安全",
            en: "Security through obscurity",
            ms: "Keselamatan melalui kekaburan"
          },
          {
            zh: "策略与程序",
            en: "Policies and procedures",
            ms: "Dasar dan prosedur"
          },
          {
            zh: "软件控制",
            en: "Software controls",
            ms: "Kawalan perisian"
          }
        ],
        answer: [
          0,
          1,
          3,
          4
        ],
        explain: {
          zh: "讲义列出的五类防御手段是加密、软件控制、硬件控制、策略与程序、物理控制。通过隐蔽实现安全（STO）在讲义中是被批判性讨论的“当前趋势”，NIST 明确建议系统安全不应依赖实现细节的保密，因此它不属于所列的防御手段。",
          en: "The five methods of defense listed are encryption, software controls, hardware controls, policies and procedures, and physical controls. Security through obscurity is discussed critically as a current trend, and NIST explicitly recommends that system security should not depend on the secrecy of the implementation, so it is not one of the listed defense methods.",
          ms: "Lima kaedah pertahanan yang disenaraikan ialah penyulitan, kawalan perisian, kawalan perkakasan, dasar dan prosedur, serta kawalan fizikal. Keselamatan melalui kekaburan dibincangkan secara kritis sebagai trend semasa, dan NIST menasihatkan bahawa keselamatan sistem tidak seharusnya bergantung pada kerahsiaan pelaksanaan, jadi ia bukan salah satu kaedah pertahanan tersebut."
        },
        diff: 2,
        topic: {
          zh: "防御手段的分类",
          en: "Classes of defense methods",
          ms: "Kelas kaedah pertahanan"
        }
      },
      {
        id: "cs-01-q07",
        type: "tf",
        q: {
          zh: "讲义认为检测（detection）可以借助惩罚或纪律处分的威慑起到预防作用，但前提是审计记录（audit trail）必须受到保护、不能被篡改。",
          en: "The lecture holds that detection can prevent attacks through the threat of punitive or disciplinary action, but only if the audit trail is protected from alteration.",
          ms: "Kuliah berpendapat bahawa pengesanan boleh mencegah serangan melalui ancaman tindakan hukuman atau tatatertib, tetapi hanya jika jejak audit dilindungi daripada diubah."
        },
        answer: true,
        explain: {
          zh: "讲义在“安全机制”一页写道：预防更根本，检测通过惩罚或纪律处分的威胁来预防，而检测要求审计记录不能被改动。理由是如果攻击者能修改审计记录，检测与追责都失去依据，惩罚的威慑也就无法成立，所以该陈述正确。",
          en: "On the security mechanisms page the lecture says prevention is more fundamental, detection seeks to prevent by the threat of punitive or disciplinary action, and detection requires that the audit trail be protected from alteration. If an attacker can edit the audit trail, neither detection nor accountability has a basis, so the deterrent cannot work.",
          ms: "Pada halaman mekanisme keselamatan, kuliah menyatakan pencegahan lebih asas, pengesanan bertujuan mencegah melalui ancaman tindakan hukuman atau tatatertib, dan pengesanan memerlukan jejak audit dilindungi daripada diubah. Jika penyerang boleh mengubah jejak audit, pengesanan dan akauntabiliti kehilangan asas, jadi pencegahan melalui ugutan tidak berkesan."
        },
        diff: 2,
        topic: {
          zh: "检测与审计记录",
          en: "Detection and the audit trail",
          ms: "Pengesanan dan jejak audit"
        }
      },
      {
        id: "cs-01-q08",
        type: "fill",
        q: {
          zh: "讲义提出：计算机资产只需保护到它失去价值为止，保护的程度应与其价值相称。这一原则被称为 ______ 原则。",
          en: "The lecture states that computer items need be protected only until they lose their value, and to a degree consistent with that value. This principle is called the principle of ______.",
          ms: "Kuliah menyatakan bahawa item komputer hanya perlu dilindungi sehingga ia hilang nilainya, dan pada tahap yang setanding dengan nilainya. Prinsip ini dipanggil prinsip ______."
        },
        answer: [
          "adequate protection",
          "adequate",
          "适度保护",
          "perlindungan mencukupi",
          "perlindungan yang mencukupi"
        ],
        explain: {
          zh: "讲义在“数据脆弱性”一页把适度保护原则定义为：计算机项目只需被保护到失去价值为止，保护程度要与价值相符。它提醒安全投入必须与资产价值匹配，过度保护与保护不足同样不经济。因此答案写作 adequate protection，中文“适度保护”，马来文 perlindungan mencukupi。",
          en: "On the data vulnerabilities page the principle of adequate protection is defined as protecting computer items only until they lose their value and only to a degree consistent with that value. It warns that security spending must match asset value, since over-protection is as uneconomic as under-protection. Hence adequate protection, 适度保护, perlindungan mencukupi.",
          ms: "Pada halaman kerentanan data, prinsip perlindungan mencukupi ditakrifkan sebagai melindungi item komputer hanya sehingga ia hilang nilainya dan hanya pada tahap yang setanding dengan nilainya. Ia mengingatkan bahawa perbelanjaan keselamatan mesti sepadan dengan nilai aset, kerana perlindungan berlebihan sama tidak ekonomik dengan perlindungan kurang. Jawapannya perlindungan mencukupi."
        },
        diff: 2,
        topic: {
          zh: "适度保护原则",
          en: "Principle of adequate protection",
          ms: "Prinsip perlindungan mencukupi"
        }
      }
    ],
    "cs-02": [
      {
        id: "cs-02-q01",
        type: "mcq",
        q: {
          zh: "在 FIPS 46-3 允许的双密钥三重 DES 中，令 K1 = K3，其有效密钥长度变为多少位？",
          en: "In the two-key form of Triple DES permitted by FIPS 46-3, where K1 = K3, the effective key length becomes how many bits?",
          ms: "Dalam bentuk dua kunci Triple DES yang dibenarkan oleh FIPS 46-3, dengan K1 = K3, panjang kunci berkesan menjadi berapa bit?"
        },
        opts: [
          {
            zh: "56 位",
            en: "56 bits",
            ms: "56 bit"
          },
          {
            zh: "112 位",
            en: "112 bits",
            ms: "112 bit"
          },
          {
            zh: "128 位",
            en: "128 bits",
            ms: "128 bit"
          },
          {
            zh: "168 位",
            en: "168 bits",
            ms: "168 bit"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义指出三密钥 TDEA 的有效密钥长度是 168 位；当令 K1 = K3 时只剩两个独立密钥，有效长度降为 112 位。56 位对应单 DES，168 位对应三个独立密钥的情形，128 位是 IDEA 与 AES 的密钥长度，都不符合本题条件。",
          en: "The lecture gives an effective key length of 168 bits for three-key TDEA; setting K1 = K3 leaves only two independent keys and reduces the effective length to 112 bits. 56 bits is single DES, 168 bits is the three-independent-key case, and 128 bits is the IDEA and AES key size.",
          ms: "Kuliah menyatakan panjang kunci berkesan TDEA tiga kunci ialah 168 bit; dengan K1 = K3 hanya dua kunci bebas tinggal dan panjang berkesan menurun kepada 112 bit. 56 bit ialah DES tunggal, 168 bit ialah kes tiga kunci bebas, dan 128 bit ialah saiz kunci IDEA serta AES."
        },
        diff: 2,
        topic: {
          zh: "三重 DES 的密钥长度",
          en: "Triple DES key length",
          ms: "Panjang kunci Triple DES"
        }
      },
      {
        id: "cs-02-q02",
        type: "mcq",
        q: {
          zh: "双重 DES 用两个 56 位密钥做两次加密，理论上应等价于 112 位密钥。Diffie 与 Hellman 的已知明文“中间相遇”攻击使其实效密钥长度降到约多少位？",
          en: "Double DES encrypts twice with two 56-bit keys and should in theory be equivalent to a 112-bit key. The known-plaintext meet-in-the-middle attack of Diffie and Hellman reduces its effective key length to about how many bits?",
          ms: "DES berganda menyulitkan dua kali dengan dua kunci 56-bit dan sepatutnya setara dengan kunci 112-bit. Serangan “bertemu di tengah” teks biasa diketahui oleh Diffie dan Hellman mengurangkan panjang kunci berkesannya kepada kira-kira berapa bit?"
        },
        opts: [
          {
            zh: "56 位",
            en: "56 bits",
            ms: "56 bit"
          },
          {
            zh: "57 位",
            en: "57 bits",
            ms: "57 bit"
          },
          {
            zh: "84 位",
            en: "84 bits",
            ms: "84 bit"
          },
          {
            zh: "112 位",
            en: "112 bits",
            ms: "112 bit"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义明确说：在已知明文的中间相遇攻击下，双重 DES 的实效密钥长度约为 57 位，而不是人们期望的 112 位，因此双重加密并不比单 DES 强多少。正是为了避开这种攻击，才改用三重 DES。56 位是单 DES 的密钥长度，112 位是未受攻击时的理论值。",
          en: "The lecture states that under a known-plaintext meet-in-the-middle attack, double DES amounts to an effective key of about 57 bits rather than the expected 112, so double encryption is barely stronger than single DES. Triple DES was adopted precisely to avoid this attack. 56 bits is the single-DES key size and 112 bits is the unbroken theoretical value.",
          ms: "Kuliah menyatakan bahawa di bawah serangan bertemu di tengah dengan teks biasa diketahui, DES berganda hanya bersamaan kunci berkesan kira-kira 57 bit dan bukan 112 bit seperti dijangka, jadi penyulitan berganda hampir tidak lebih kukuh daripada DES tunggal. Triple DES dipilih khusus untuk mengelak serangan ini. 56 bit ialah saiz kunci DES tunggal dan 112 bit ialah nilai teori tanpa serangan."
        },
        diff: 3,
        topic: {
          zh: "中间相遇攻击与双重 DES",
          en: "Meet-in-the-middle and double DES",
          ms: "Bertemu di tengah dan DES berganda"
        }
      },
      {
        id: "cs-02-q03",
        type: "mcq",
        q: {
          zh: "按讲义 RSA 密钥生成的例子：取 p = 7、q = 17、e = 5，则私钥 d 应为多少？",
          en: "Following the lecture's RSA key-generation example, with p = 7, q = 17 and e = 5, what is the private key d?",
          ms: "Mengikut contoh penjanaan kunci RSA dalam kuliah, dengan p = 7, q = 17 dan e = 5, apakah kunci peribadi d?"
        },
        opts: [
          {
            zh: "19",
            en: "19",
            ms: "19"
          },
          {
            zh: "23",
            en: "23",
            ms: "23"
          },
          {
            zh: "77",
            en: "77",
            ms: "77"
          },
          {
            zh: "96",
            en: "96",
            ms: "96"
          }
        ],
        answer: 2,
        explain: {
          zh: "n = p × q = 7 × 17 = 119，欧拉函数 φ = (p−1)(q−1) = 6 × 16 = 96。d 必须满足 d × e ≡ 1 (mod 96)，而 77 × 5 = 385 = 4 × 96 + 1，所以 d = 77。96 是 φ 的值而不是 d，19 与 23 都不能使 5d ≡ 1 (mod 96) 成立。",
          en: "n = p × q = 7 × 17 = 119 and φ = (p−1)(q−1) = 6 × 16 = 96. The value d must satisfy d × e ≡ 1 (mod 96), and 77 × 5 = 385 = 4 × 96 + 1, so d = 77. 96 is φ rather than d, and neither 19 nor 23 satisfies 5d ≡ 1 (mod 96).",
          ms: "n = p × q = 7 × 17 = 119 dan φ = (p−1)(q−1) = 6 × 16 = 96. Nilai d mesti memenuhi d × e ≡ 1 (mod 96), dan 77 × 5 = 385 = 4 × 96 + 1, jadi d = 77. 96 ialah φ dan bukan d, manakala 19 dan 23 tidak memenuhi 5d ≡ 1 (mod 96)."
        },
        diff: 3,
        topic: {
          zh: "RSA 密钥生成",
          en: "RSA key generation",
          ms: "Penjanaan kunci RSA"
        }
      },
      {
        id: "cs-02-q04",
        type: "mcq",
        q: {
          zh: "单表替换密码的密钥空间高达 26! 约等于 10^26，却仍能被仅知密文的攻击轻易破解。讲义给出的主要原因是？",
          en: "A monoalphabetic substitution cipher has a key space of 26!, about 10^26, yet it is easily broken even in a ciphertext-only attack. What is the main reason given in the lecture?",
          ms: "Sifer penggantian monoalfabet mempunyai ruang kunci 26!, kira-kira 10^26, namun mudah dipecahkan walaupun dalam serangan teks sifer sahaja. Apakah sebab utama yang diberikan dalam kuliah?"
        },
        opts: [
          {
            zh: "密钥空间实际上只有 25 种可能，穷举即可",
            en: "The key space is really only 25 possibilities, so exhaustive search is enough",
            ms: "Ruang kunci sebenarnya hanya 25 kemungkinan, jadi carian menyeluruh memadai"
          },
          {
            zh: "它不隐藏明文的统计特性，而自然语言高度冗余（每字母约 1.3 比特信息）",
            en: "It does not hide the statistical properties of plaintext, and natural languages are highly redundant (about 1.3 bits of information per letter)",
            ms: "Ia tidak menyembunyikan sifat statistik teks biasa, dan bahasa semula jadi sangat berlebihan (kira-kira 1.3 bit maklumat setiap huruf)"
          },
          {
            zh: "加密算法是公开的，攻击者可以直接反解算法",
            en: "The algorithm is public, so an attacker can simply invert it",
            ms: "Algoritma diumumkan, jadi penyerang boleh menyongsangkannya terus"
          },
          {
            zh: "它使用模 26 的加法，密钥太短",
            en: "It uses addition modulo 26, so its keys are too short",
            ms: "Ia menggunakan penambahan modulo 26, jadi kuncinya terlalu pendek"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义解释说，单表替换既不隐藏明文的统计特性，也不隐藏明文中的关系（例如 EE 并不会对应到 dg），而英语等自然语言冗余度很高，每个字母平均只携带约 1.3 比特信息，所以频率分析就能破解。选项1描述的是凯撒密码只有 25 种有效移位；选项3、4都不是讲义给出的原因。",
          en: "The lecture explains that a monoalphabetic substitution hides neither the statistical properties of the plaintext nor the relationships within it, since EE does not map to something like dg, and natural languages are highly redundant at about 1.3 bits of information per letter, so frequency analysis breaks it. Option 1 describes the Caesar cipher with only about 25 usable shifts; options 3 and 4 are not the stated reasons.",
          ms: "Kuliah menerangkan bahawa penggantian monoalfabet tidak menyembunyikan sifat statistik teks biasa mahupun hubungan di dalamnya, kerana EE tidak dipetakan kepada sesuatu seperti dg, dan bahasa semula jadi sangat berlebihan iaitu kira-kira 1.3 bit maklumat setiap huruf, jadi analisis kekerapan dapat memecahkannya. Pilihan 1 menerangkan sifer Caesar yang hanya mempunyai kira-kira 25 anjakan berguna; pilihan 3 dan 4 bukan sebab yang dinyatakan."
        },
        diff: 2,
        topic: {
          zh: "单表替换为何易破",
          en: "Why monoalphabetic ciphers fail",
          ms: "Mengapa sifer monoalfabet gagal"
        }
      },
      {
        id: "cs-02-q05",
        type: "mcq",
        q: {
          zh: "讲义介绍的一种对称分组密码，密钥长度可变（32 至 448 位），可在不到 5 KB 内存中运行，其子密钥与 S 盒由该算法自身反复生成。这是哪一种？",
          en: "A symmetric block cipher in the lecture has a variable key length of 32 to 448 bits, runs in less than 5 KB of memory, and derives its subkeys and S-boxes by repeated applications of itself. Which cipher is it?",
          ms: "Satu sifer blok simetri dalam kuliah mempunyai panjang kunci berubah dari 32 hingga 448 bit, berjalan dalam kurang daripada 5 KB ingatan, dan menghasilkan subkunci serta kotak-S melalui penggunaan berulang algoritma itu sendiri. Sifer manakah itu?"
        },
        opts: [
          {
            zh: "IDEA",
            en: "IDEA",
            ms: "IDEA"
          },
          {
            zh: "DES",
            en: "DES",
            ms: "DES"
          },
          {
            zh: "AES",
            en: "AES",
            ms: "AES"
          },
          {
            zh: "Blowfish",
            en: "Blowfish",
            ms: "Blowfish"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义对 Blowfish 的描述正是：Bruce Schneier 于 1993 年提出的对称分组密码，可在不到 5 KB 内存中运行，密钥长度 32 至 448 位，子密钥与 S 盒由 Blowfish 自身反复生成。IDEA 使用固定 128 位密钥、64 位分组；AES 密钥为 128/192/256 位；DES 密钥 56 位、分组 64 位，均不符合。",
          en: "The lecture describes Blowfish exactly this way: a symmetric block cipher by Bruce Schneier from 1993 that runs in under 5 KB of memory, takes keys of 32 to 448 bits, and generates its subkeys and S-boxes by repeated application of Blowfish itself. IDEA has a fixed 128-bit key with 64-bit blocks, AES takes 128, 192 or 256 bits, and DES has a 56-bit key with 64-bit blocks.",
          ms: "Kuliah menerangkan Blowfish tepat seperti itu: sifer blok simetri oleh Bruce Schneier pada 1993 yang berjalan dalam kurang daripada 5 KB ingatan, menerima kunci 32 hingga 448 bit, dan menghasilkan subkunci serta kotak-S melalui penggunaan berulang Blowfish itu sendiri. IDEA mempunyai kunci tetap 128 bit dengan blok 64 bit, AES menerima 128, 192 atau 256 bit, dan DES mempunyai kunci 56 bit dengan blok 64 bit."
        },
        diff: 2,
        topic: {
          zh: "Blowfish 的特征",
          en: "Features of Blowfish",
          ms: "Ciri Blowfish"
        }
      },
      {
        id: "cs-02-q06",
        type: "multi",
        q: {
          zh: "关于 AES（Rijndael），下列哪些说法符合讲义？（多选）",
          en: "Regarding AES (Rijndael), which statements match the lecture? (choose all that apply)",
          ms: "Berkenaan AES (Rijndael), pernyataan manakah yang menepati kuliah? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "分组长度为 128 位",
            en: "Its block size is 128 bits",
            ms: "Saiz bloknya 128 bit"
          },
          {
            zh: "密钥长度可为 128、192 或 256 位",
            en: "Its key length may be 128, 192 or 256 bits",
            ms: "Panjang kuncinya boleh 128, 192 atau 256 bit"
          },
          {
            zh: "由 Rivest、Shamir 与 Adleman 设计",
            en: "It was designed by Rivest, Shamir and Adleman",
            ms: "Ia direka oleh Rivest, Shamir dan Adleman"
          },
          {
            zh: "轮数依密钥长度分别为 9、11 或 13 轮",
            en: "The number of rounds is 9, 11 or 13 depending on key length",
            ms: "Bilangan pusingan ialah 9, 11 atau 13 bergantung pada panjang kunci"
          },
          {
            zh: "它是一种流密码",
            en: "It is a stream cipher",
            ms: "Ia ialah sifer aliran"
          }
        ],
        answer: [
          0,
          1,
          3
        ],
        explain: {
          zh: "Rijndael 由比利时的 Rijmen 与 Daemen 设计，分组 128 位、密钥 128/192/256 位，状态每轮依次经过字节替换、行移位、列混合与轮密钥加，依密钥长度共 9/11/13 轮，属于分组密码。选项3把 RSA 的三位作者误当成 AES 的设计者，选项5把它说成流密码，均错误。",
          en: "Rijndael was designed by Rijmen and Daemen in Belgium with a 128-bit block and 128, 192 or 256-bit keys; each round applies byte substitution, shift rows, mix columns and add round key, for 9, 11 or 13 rounds depending on the key, and it is a block cipher. Option 3 wrongly names the three RSA authors, and option 5 wrongly calls it a stream cipher.",
          ms: "Rijndael direka oleh Rijmen dan Daemen di Belgium dengan blok 128 bit dan kunci 128, 192 atau 256 bit; setiap pusingan menggunakan penggantian bait, anjakan baris, campuran lajur dan tambah kunci pusingan, sebanyak 9, 11 atau 13 pusingan mengikut kunci, dan ia ialah sifer blok. Pilihan 3 tersilap menyebut tiga pengarang RSA, dan pilihan 5 tersilap menyebutnya sifer aliran."
        },
        diff: 2,
        topic: {
          zh: "AES 与 Rijndael 参数",
          en: "AES and Rijndael parameters",
          ms: "Parameter AES dan Rijndael"
        }
      },
      {
        id: "cs-02-q07",
        type: "tf",
        q: {
          zh: "一次性密码本（Vernam）被认为是完美密码，但因要求与消息等长且不可重复使用的随机密钥，在多数场合并不实用。",
          en: "The Vernam one-time pad is considered a perfect cipher, but because it requires a random key that is as long as the message and cannot be reused, it is impractical in most situations.",
          ms: "Pad sekali guna Vernam dianggap sifer sempurna, tetapi kerana ia memerlukan kunci rawak sepanjang mesej yang tidak boleh digunakan semula, ia tidak praktikal dalam kebanyakan keadaan."
        },
        answer: true,
        explain: {
          zh: "讲义称一次性密码本为“终极密码”：密钥必须是随机的、至少与消息等长，且不可重用；即使已知明文，也只暴露已经用过的密钥片段，不影响将来的消息。正因为密钥分发与保管代价极高，它虽完美却不实用，这一陈述成立。",
          en: "The lecture calls the one-time pad the ultimate cipher: the key must be random, at least as long as the message, and never reused; even a known plaintext reveals only the portion of the key already used and nothing about the future. Distribution and custody of such keys are prohibitively expensive, so it is perfect but impractical.",
          ms: "Kuliah memanggil pad sekali guna sebagai sifer muktamad: kunci mesti rawak, sekurang-kurangnya sepanjang mesej, dan tidak boleh digunakan semula; walaupun teks biasa diketahui, hanya bahagian kunci yang telah digunakan terdedah dan bukan masa depan. Pengagihan dan penyimpanan kunci sedemikian sangat mahal, jadi ia sempurna tetapi tidak praktikal."
        },
        diff: 1,
        topic: {
          zh: "一次性密码本",
          en: "One-time pad",
          ms: "Pad sekali guna"
        }
      },
      {
        id: "cs-02-q08",
        type: "fill",
        q: {
          zh: "攻击者用每一个可能的密钥去试解密文，直到得到可读的明文为止。这种攻击称为 ______ 攻击。",
          en: "The attacker tries every possible key on the ciphertext until an intelligible plaintext is obtained. This is called a ______ attack.",
          ms: "Penyerang mencuba setiap kunci yang mungkin ke atas teks sifer sehingga memperoleh teks biasa yang boleh difahami. Ini dipanggil serangan ______."
        },
        answer: [
          "brute force",
          "brute-force",
          "exhaustive search",
          "暴力破解",
          "serangan kekerasan"
        ],
        explain: {
          zh: "讲义把穷举所有密钥的方法称为 brute-force attack，中文常译“蛮力攻击/暴力破解”。它只依赖计算能力与密钥长度，不利用算法结构的弱点；与之相对的是利用算法细节的密码分析。密钥每增加一位，所需试验次数大致翻倍，因此密钥长度是抵抗这种攻击的关键。",
          en: "The lecture calls the method of trying every possible key a brute-force attack. It depends only on computing power and key length and exploits no structural weakness of the algorithm, in contrast to cryptanalysis, which does. Each extra key bit roughly doubles the number of trials, so key length is the main defence.",
          ms: "Kuliah memanggil kaedah mencuba setiap kunci yang mungkin sebagai serangan kekerasan (brute-force). Ia bergantung hanya pada kuasa pengiraan dan panjang kunci serta tidak mengeksploitasi kelemahan struktur algoritma, berbeza daripada kriptoanalisis. Setiap bit kunci tambahan kira-kira menggandakan bilangan percubaan, jadi panjang kunci ialah pertahanan utama."
        },
        diff: 1,
        topic: {
          zh: "暴力破解攻击",
          en: "Brute-force attack",
          ms: "Serangan kekerasan"
        }
      }
    ],
    "cs-03": [
      {
        id: "cs-03-q01",
        type: "mcq",
        q: {
          zh: "讲义从“开发者视角”和“用户视角”区分了两个概念：程序中由人的错误造成的错误步骤、命令或过程，以及系统行为偏离所要求的行为。这两个概念分别是？",
          en: "The lecture distinguishes two notions seen from the developer's side and the user's side: an incorrect step, command or process in a program caused by a human mistake, and a departure from the system's required behaviour. What are they?",
          ms: "Kuliah membezakan dua tanggapan dari sudut pembangun dan pengguna: langkah, arahan atau proses yang salah dalam program akibat kesilapan manusia, dan penyimpangan daripada tingkah laku sistem yang dikehendaki. Apakah keduanya?"
        },
        opts: [
          {
            zh: "fault（内部视角）与 failure（外部视角）",
            en: "Fault (inside view) and failure (outside view)",
            ms: "Kecacatan (pandangan dalam) dan kegagalan (pandangan luar)"
          },
          {
            zh: "failure（内部视角）与 fault（外部视角）",
            en: "Failure (inside view) and fault (outside view)",
            ms: "Kegagalan (pandangan dalam) dan kecacatan (pandangan luar)"
          },
          {
            zh: "vulnerability（脆弱性）与 exposure（暴露）",
            en: "Vulnerability and exposure",
            ms: "Kerentanan dan pendedahan"
          },
          {
            zh: "flaw（程序缺陷）与 fault（故障）",
            en: "Flaw and fault",
            ms: "Kecacatan program dan kecacatan"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义定义 fault（故障）为计算机程序中由人的错误引起的错误步骤、命令或过程，是开发者看到的内部视角；failure（失效）是偏离系统所要求的行为，是用户看到的外部视角。选项2把两者顺序颠倒；选项3的 vulnerability 与 exposure 是第 1 章的安全术语；选项4中 flaw 指由漏洞引起的不当程序行为，与 failure 不是同一概念。",
          en: "A fault is an incorrect step, command or process in a program caused by human mistake, the developer's inside view; a failure is a departure from the system's required behaviour, the user's outside view. Option 2 reverses them; option 3 uses vulnerability and exposure, which belong to Chapter 1; option 4 uses flaw, an inappropriate program behaviour caused by a vulnerability, which is not the same as failure.",
          ms: "Kecacatan (fault) ialah langkah, arahan atau proses salah dalam program akibat kesilapan manusia, iaitu pandangan dalam pembangun; kegagalan (failure) ialah penyimpangan daripada tingkah laku sistem yang dikehendaki, iaitu pandangan luar pengguna. Pilihan 2 menterbalikkannya; pilihan 3 menggunakan kerentanan dan pendedahan daripada Bab 1; pilihan 4 menggunakan kecacatan program yang disebabkan kerentanan, bukan sama dengan kegagalan."
        },
        diff: 1,
        topic: {
          zh: "故障与失效之分",
          en: "Fault versus failure",
          ms: "Kecacatan berbanding kegagalan"
        }
      },
      {
        id: "cs-03-q02",
        type: "mcq",
        q: {
          zh: "缓冲区溢出可能改写四类区域。攻击者若想“冒充操作系统”，在系统空间植入自己的指令并在返回时夺回控制权，需要溢出到哪一类区域？",
          en: "A buffer overflow may spill into four kinds of area. To “masquerade as the operating system”, plant instructions in system space and regain control on return, an attacker needs the overflow to reach which area?",
          ms: "Limpahan penimbal boleh melimpah ke empat jenis kawasan. Untuk “menyamar sebagai sistem pengendalian”, menanam arahan dalam ruang sistem dan mendapatkan semula kawalan semasa pulang, penyerang perlu limpahan itu mencapai kawasan yang mana?"
        },
        opts: [
          {
            zh: "用户自己的数据结构",
            en: "The user's own data structures",
            ms: "Struktur data pengguna sendiri"
          },
          {
            zh: "用户自己的程序代码",
            en: "The user's own program code",
            ms: "Kod program pengguna sendiri"
          },
          {
            zh: "系统数据结构",
            en: "System data structures",
            ms: "Struktur data sistem"
          },
          {
            zh: "系统程序代码",
            en: "System program code",
            ms: "Kod program sistem"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义列出溢出可能改写的四类区域：用户自己的数据结构、用户程序代码、系统数据结构与系统程序代码。改写前两类只影响该用户；改写系统数据结构会使系统数据不一致甚至崩溃；改写系统程序代码最严重，攻击者可替换系统空间中的指令、冒充操作系统，从而以更高权限夺回控制权。",
          en: "The lecture lists four targets: the user's own data structures, the user's program code, system data structures and system program code. The first two affect only that user; overwriting system data structures makes system data inconsistent or unstable; overwriting system program code is the worst case, because the attacker can replace instructions in system space and masquerade as the operating system with raised privileges.",
          ms: "Kuliah menyenaraikan empat sasaran: struktur data pengguna sendiri, kod program pengguna, struktur data sistem dan kod program sistem. Dua yang pertama hanya menjejaskan pengguna itu; menimpa struktur data sistem menjadikan data sistem tidak konsisten atau tidak stabil; menimpa kod program sistem ialah kes paling teruk kerana penyerang boleh menggantikan arahan dalam ruang sistem dan menyamar sebagai sistem pengendalian dengan keistimewaan lebih tinggi."
        },
        diff: 2,
        topic: {
          zh: "缓冲区溢出的安全影响",
          en: "Security impact of buffer overflows",
          ms: "Kesan keselamatan limpahan penimbal"
        }
      },
      {
        id: "cs-03-q03",
        type: "mcq",
        q: {
          zh: "讲义把“检查时刻到使用时刻”（TOCTTOU）错误又称为什么？它利用的是访问检查与检查结果被使用之间的时间差。",
          en: "What other name does the lecture give to the time-of-check to time-of-use flaw, which exploits the delay between an access check and the use of the check's result?",
          ms: "Apakah nama lain yang diberikan oleh kuliah kepada ralat masa semakan hingga masa penggunaan, yang mengeksploitasi selang antara semakan akses dan penggunaan hasil semakan?"
        },
        opts: [
          {
            zh: "逻辑错误",
            en: "A logic error",
            ms: "Ralat logik"
          },
          {
            zh: "不完整中介缺陷",
            en: "An incomplete mediation flaw",
            ms: "Kecacatan pengantaraan tidak lengkap"
          },
          {
            zh: "边界条件违规",
            en: "A boundary condition violation",
            ms: "Pelanggaran syarat sempadan"
          },
          {
            zh: "串行化或同步缺陷",
            en: "A serialization or synchronization flaw",
            ms: "Kecacatan pensirian atau penyegerakan"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义明确写道：TOCTTOU 缺陷关注的是中介过程中出现“偷梁换柱”，也被称为串行化或同步缺陷。原因是检查与使用之间发生了改变，使检查结果失效。不完整中介指访问没有被普遍检查，边界条件违规与逻辑错误属于另一类无意缺陷，都不是本题所指。",
          en: "The lecture states that the TOCTTOU flaw concerns mediation performed with a bait-and-switch in the middle and is also known as a serialization or synchronization flaw, because something changes between the check and the use, invalidating the check. Incomplete mediation means access is not checked universally, and boundary violations and logic errors are other inadvertent flaws.",
          ms: "Kuliah menyatakan bahawa kecacatan TOCTTOU melibatkan pengantaraan dengan “umpan dan tukar” di tengahnya dan juga dikenali sebagai kecacatan pensirian atau penyegerakan, kerana sesuatu berubah antara semakan dan penggunaan sehingga semakan tidak sah. Pengantaraan tidak lengkap bermaksud akses tidak disemak secara menyeluruh, manakala pelanggaran sempadan dan ralat logik ialah kecacatan tidak sengaja yang lain."
        },
        diff: 2,
        topic: {
          zh: "TOCTTOU 的别名与实质",
          en: "The TOCTTOU flaw",
          ms: "Kecacatan TOCTTOU"
        }
      },
      {
        id: "cs-03-q04",
        type: "mcq",
        q: {
          zh: "哪一种恶意代码“看起来像合法程序、表面执行一个功能却暗中执行另一个功能”，而且不会自我复制？",
          en: "Which type of malicious code appears to be a legitimate program with one function while secretly performing another, and does not replicate itself?",
          ms: "Jenis kod berniat jahat manakah yang kelihatan seperti program sah dengan satu fungsi tetapi secara senyap melakukan fungsi lain, dan tidak mereplikasi dirinya?"
        },
        opts: [
          {
            zh: "蠕虫",
            en: "Worm",
            ms: "Cecacing"
          },
          {
            zh: "特洛伊木马",
            en: "Trojan horse",
            ms: "Kuda Troy"
          },
          {
            zh: "逻辑炸弹",
            en: "Logic bomb",
            ms: "Bom logik"
          },
          {
            zh: "病毒",
            en: "Virus",
            ms: "Virus"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义对特洛伊木马的定义是：藏在合法程序中或伪装成合法程序，表面有一个功能，实际执行另一个功能，且不复制自身，常被用来传播病毒或安装后门。蠕虫是独立程序并通过网络自我复制；病毒要附着到程序上并复制到其他程序；逻辑炸弹靠特定条件触发，也不复制，但它的特征在于“条件触发”而不是伪装功能。",
          en: "The lecture defines a Trojan horse as code hidden in or resembling a legitimate program that appears to have one function but performs another, and does not replicate; it is often used to spread viruses or install backdoors. A worm replicates as a stand-alone program over the network, a virus attaches to programs and propagates, and a logic bomb is defined by triggering on a condition rather than by disguising its function.",
          ms: "Kuliah mentakrifkan kuda Troy sebagai kod yang tersembunyi dalam atau menyerupai program sah, kelihatan mempunyai satu fungsi tetapi melakukan fungsi lain, dan tidak mereplikasi; ia sering digunakan untuk menyebarkan virus atau memasang pintu belakang. Cecacing mereplikasi sebagai program berdiri sendiri melalui rangkaian, virus melekat pada program dan merebak, manakala bom logik ditakrifkan oleh pencetus syarat dan bukan oleh penyamaran fungsi."
        },
        diff: 1,
        topic: {
          zh: "特洛伊木马的定义",
          en: "Definition of a Trojan horse",
          ms: "Takrif kuda Troy"
        }
      },
      {
        id: "cs-03-q05",
        type: "mcq",
        q: {
          zh: "讲义把病毒运行分为四个阶段。下列哪个顺序是正确的？",
          en: "The lecture divides virus operation into four phases. Which order is correct?",
          ms: "Kuliah membahagikan operasi virus kepada empat fasa. Urutan manakah yang betul?"
        },
        opts: [
          {
            zh: "潜伏 → 传播 → 触发 → 执行",
            en: "Dormant → propagation → triggering → execution",
            ms: "Dorman → penyebaran → pencetusan → pelaksanaan"
          },
          {
            zh: "传播 → 潜伏 → 执行 → 触发",
            en: "Propagation → dormant → execution → triggering",
            ms: "Penyebaran → dorman → pelaksanaan → pencetusan"
          },
          {
            zh: "触发 → 潜伏 → 传播 → 执行",
            en: "Triggering → dormant → propagation → execution",
            ms: "Pencetusan → dorman → penyebaran → pelaksanaan"
          },
          {
            zh: "潜伏 → 触发 → 传播 → 执行",
            en: "Dormant → triggering → propagation → execution",
            ms: "Dorman → pencetusan → penyebaran → pelaksanaan"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义列出的四阶段依次是：dormant 等待触发事件、propagation 向其他程序与磁盘复制自身、triggering 由事件触发执行载荷、execution 执行载荷。选项4把触发提到传播之前，但病毒必须先复制自己才能广泛发作；选项2、3把潜伏或触发放在错误位置，都不符合讲义。",
          en: "The four phases are dormant, waiting for a trigger event; propagation, replicating to programs and disks; triggering, when an event fires the payload; and execution of the payload. Option 4 puts triggering before propagation, yet a virus must replicate before it can spread widely; options 2 and 3 misplace dormancy or triggering.",
          ms: "Empat fasa itu ialah dorman, menunggu peristiwa pencetus; penyebaran, mereplikasi ke program dan cakera; pencetusan, apabila peristiwa mencetuskan muatan; dan pelaksanaan muatan. Pilihan 4 meletakkan pencetusan sebelum penyebaran, sedangkan virus mesti mereplikasi dahulu sebelum merebak luas; pilihan 2 dan 3 salah meletakkan fasa dorman atau pencetusan."
        },
        diff: 2,
        topic: {
          zh: "病毒的四个阶段",
          en: "Four phases of a virus",
          ms: "Empat fasa virus"
        }
      },
      {
        id: "cs-03-q06",
        type: "multi",
        q: {
          zh: "讲义把“非恶意程序错误”归纳为四个主要关注点。下列哪些属于其中？（多选）",
          en: "The lecture groups non-malicious program errors into four main concerns. Which of the following are among them? (choose all that apply)",
          ms: "Kuliah mengelompokkan ralat program bukan berniat jahat kepada empat kebimbangan utama. Antara berikut, yang manakah termasuk di dalamnya? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "缓冲区溢出",
            en: "Buffer overflows",
            ms: "Limpahan penimbal"
          },
          {
            zh: "不完整中介",
            en: "Incomplete mediation",
            ms: "Pengantaraan tidak lengkap"
          },
          {
            zh: "检查时刻到使用时刻错误",
            en: "Time-of-check to time-of-use errors",
            ms: "Ralat masa semakan hingga masa penggunaan"
          },
          {
            zh: "萨拉米攻击",
            en: "Salami attacks",
            ms: "Serangan salami"
          },
          {
            zh: "逻辑炸弹",
            en: "Logic bombs",
            ms: "Bom logik"
          }
        ],
        answer: [
          0,
          1,
          2
        ],
        explain: {
          zh: "讲义把非恶意程序错误归纳为四点：缓冲区溢出、不完整中介、TOCTTOU 错误，以及这几种错误的组合。萨拉米攻击是从计算中窃取微小差额并累积的恶意手法，逻辑炸弹是靠条件触发的恶意代码，二者都属于故意行为，不在“非恶意错误”之列。",
          en: "The four concerns are buffer overflows, incomplete mediation, time-of-check to time-of-use errors, and combinations of these flaws. A salami attack merges tiny shaved amounts into a large gain, and a logic bomb is malicious code that fires on a condition; both are deliberate, so neither belongs to the non-malicious category.",
          ms: "Empat kebimbangan itu ialah limpahan penimbal, pengantaraan tidak lengkap, ralat masa semakan hingga masa penggunaan, dan gabungan kecacatan tersebut. Serangan salami mencantumkan baki kecil menjadi keuntungan besar, dan bom logik ialah kod berniat jahat yang dicetuskan oleh syarat; kedua-duanya sengaja, jadi bukan dalam kategori bukan berniat jahat."
        },
        diff: 2,
        topic: {
          zh: "四类非恶意程序错误",
          en: "Four non-malicious program flaws",
          ms: "Empat kecacatan program bukan berniat jahat"
        }
      },
      {
        id: "cs-03-q07",
        type: "tf",
        q: {
          zh: "蠕虫必须先把自己附加到某个宿主程序上，才能在网络中传播。",
          en: "A worm must first attach itself to a host program before it can spread across a network.",
          ms: "Cecacing mesti melekatkan dirinya pada sesuatu program perumah terlebih dahulu sebelum ia boleh merebak dalam rangkaian."
        },
        answer: false,
        explain: {
          zh: "讲义区分得很清楚：病毒要把自身附加到程序上，并复制到其他程序；而蠕虫是“通过网络复制自身、同时把自己复制成独立程序”的恶意代码，例如 Code Red。因此蠕虫不需要宿主程序，需要宿主的是病毒，题干把两者的特性对调了。",
          en: "The lecture separates the two clearly: a virus attaches itself to a program and propagates copies to other programs, whereas a worm is code that copies itself across the network and also copies itself as a stand-alone program, such as Code Red. A worm needs no host program; that requirement belongs to viruses, so the statement swaps their properties.",
          ms: "Kuliah memisahkan keduanya dengan jelas: virus melekatkan dirinya pada program dan menyebarkan salinan ke program lain, manakala cecacing ialah kod yang menyalin dirinya merentas rangkaian dan juga menyalin dirinya sebagai program berdiri sendiri, seperti Code Red. Cecacing tidak memerlukan program perumah; keperluan itu milik virus, jadi pernyataan ini menukar sifat keduanya."
        },
        diff: 2,
        topic: {
          zh: "病毒与蠕虫的区别",
          en: "Virus versus worm",
          ms: "Virus berbanding cecacing"
        }
      },
      {
        id: "cs-03-q08",
        type: "fill",
        q: {
          zh: "为了躲开基于签名的检测，会不断改变自身代码形态的病毒被称为 ______ 病毒。",
          en: "A virus that keeps changing the form of its own code in order to evade signature-based detection is called a ______ virus.",
          ms: "Virus yang terus mengubah bentuk kodnya sendiri untuk mengelak pengesanan berasaskan tandatangan dipanggil virus ______."
        },
        answer: [
          "polymorphic",
          "polymorphic virus",
          "多态",
          "多态病毒",
          "polimorfik"
        ],
        explain: {
          zh: "讲义在“检测病毒”一页说，检测可以基于签名，而多态病毒使这种检测更加困难，因为它们每次复制都改变代码形态，固定的签名无法匹配。签名的依据是病毒必须留在磁盘或内存中的代码特征，多态病毒针对的正是这一点。",
          en: "On the detecting viruses page the lecture says detection can be based on signatures, and polymorphic viruses make that harder because they change their code form on each copy so a fixed signature no longer matches. A signature relies on code that the virus must keep on disk or in memory, which is exactly what polymorphism attacks.",
          ms: "Pada halaman pengesanan virus, kuliah menyatakan pengesanan boleh berasaskan tandatangan, dan virus polimorfik menyukarkannya kerana bentuk kod berubah pada setiap salinan sehingga tandatangan tetap tidak lagi sepadan. Tandatangan bergantung pada kod yang mesti kekal pada cakera atau dalam ingatan, dan itulah yang diserang oleh polimorfisme."
        },
        diff: 2,
        topic: {
          zh: "多态病毒与签名检测",
          en: "Polymorphic viruses and signatures",
          ms: "Virus polimorfik dan tandatangan"
        }
      }
    ],
    "cs-04": [
      {
        id: "cs-04-q01",
        type: "mcq",
        q: {
          zh: "操作系统用四种方式把用户的对象彼此隔开。若系统安排不同用户在不同时间段使用同一台机器，这属于哪一种分离？",
          en: "Operating systems separate users' objects in four ways. If the system schedules different users to use the same machine at different times, which form of separation is this?",
          ms: "Sistem pengendalian memisahkan objek pengguna dalam empat cara. Jika sistem menjadualkan pengguna berbeza menggunakan mesin yang sama pada masa berbeza, pemisahan manakah ini?"
        },
        opts: [
          {
            zh: "物理分离",
            en: "Physical separation",
            ms: "Pemisahan fizikal"
          },
          {
            zh: "逻辑分离",
            en: "Logical separation",
            ms: "Pemisahan logik"
          },
          {
            zh: "时间分离",
            en: "Temporal separation",
            ms: "Pemisahan masa"
          },
          {
            zh: "密码分离",
            en: "Cryptographic separation",
            ms: "Pemisahan kriptografi"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义列出物理、时间、逻辑、密码四种分离方式。轮流、分时使用同一台机器属于时间分离；物理分离是把对象放在不同的物理设备上；逻辑分离是让用户以为只有自己在使用系统；密码分离是用加密使他人即使取得数据也无法解读。",
          en: "The lecture lists physical, temporal, logical and cryptographic separation. Taking turns on the same machine at different times is temporal separation; physical separation puts objects on different devices; logical separation makes each user believe the system is theirs alone; cryptographic separation encrypts data so others cannot interpret it.",
          ms: "Kuliah menyenaraikan pemisahan fizikal, masa, logik dan kriptografi. Menggunakan mesin yang sama secara bergilir pada masa berbeza ialah pemisahan masa; pemisahan fizikal meletakkan objek pada peranti berlainan; pemisahan logik membuat setiap pengguna percaya sistem itu miliknya; pemisahan kriptografi menyulitkan data supaya orang lain tidak dapat mentafsirnya."
        },
        diff: 1,
        topic: {
          zh: "四种分离方式",
          en: "Four kinds of separation",
          ms: "Empat jenis pemisahan"
        }
      },
      {
        id: "cs-04-q02",
        type: "mcq",
        q: {
          zh: "在基址/界限寄存器方案中，负责给出上界的是哪个寄存器？",
          en: "In the base/bounds register scheme, which register supplies the upper bound?",
          ms: "Dalam skema daftar asas/sempadan, daftar manakah yang memberikan sempadan atas?"
        },
        opts: [
          {
            zh: "界栏寄存器（fence register）",
            en: "The fence register",
            ms: "Daftar pagar"
          },
          {
            zh: "基址寄存器（base register）",
            en: "The base register",
            ms: "Daftar asas"
          },
          {
            zh: "界限寄存器（bounds register）",
            en: "The bounds register",
            ms: "Daftar sempadan"
          },
          {
            zh: "重定位寄存器（relocation register）",
            en: "The relocation register",
            ms: "Daftar pengalihan"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义说在多用户、多道程序环境中界栏寄存器是可变的，此时称为基址寄存器，它只提供下界（起始地址）；另用界限寄存器提供上界，程序的地址于是被限制在基址与界限之间。重定位是把从 0 开始编址的程序地址改成实际地址的过程，不是这里提供上界的寄存器。",
          en: "The lecture says that in a multiuser, multiprogramming environment the fence register becomes variable and is called the base register, providing only a lower bound; a second register, the bounds register, supplies the upper bound, confining program addresses between base and bounds. Relocation is the process of changing addresses written for address 0 into real addresses, not the register that holds the upper bound.",
          ms: "Kuliah menyatakan dalam persekitaran berbilang pengguna dan berbilang program, daftar pagar menjadi berubah dan dipanggil daftar asas, yang hanya memberikan sempadan bawah; daftar kedua, iaitu daftar sempadan, memberikan sempadan atas, sehingga alamat program terbatas antara asas dan sempadan. Pengalihan ialah proses menukar alamat yang ditulis bermula 0 kepada alamat sebenar, bukan daftar yang menyimpan sempadan atas."
        },
        diff: 2,
        topic: {
          zh: "基址与界限寄存器",
          en: "Base and bounds registers",
          ms: "Daftar asas dan sempadan"
        }
      },
      {
        id: "cs-04-q03",
        type: "mcq",
        q: {
          zh: "标记体系结构给每个机器字附加若干位来标明访问权，粒度最细，却没有被广泛采用。讲义给出的主要原因是？",
          en: "Tagged architecture attaches extra bits to every machine word to record access rights, giving the finest granularity, yet it is not widespread. What is the main reason given in the lecture?",
          ms: "Seni bina bertag menambahkan bit tambahan pada setiap perkataan mesin untuk merekod hak akses, memberikan butiran paling halus, namun ia tidak meluas. Apakah sebab utama yang diberikan dalam kuliah?"
        },
        opts: [
          {
            zh: "它只能表达读、写、执行三种权限，无法表达更多",
            en: "It can express only read, write and execute, and nothing else",
            ms: "Ia hanya boleh menyatakan baca, tulis dan laksana, tidak lebih"
          },
          {
            zh: "出于市场考虑：与既有产品不兼容",
            en: "Market considerations: it is incompatible with existing products",
            ms: "Pertimbangan pasaran: ia tidak serasi dengan produk sedia ada"
          },
          {
            zh: "它的访问权粒度过高，导致另一个模块要么全有要么全无",
            en: "Its access granularity is too coarse, so another module gets all or nothing",
            ms: "Butiran aksesnya terlalu kasar, jadi modul lain mendapat semua atau tiada"
          },
          {
            zh: "它要求操作系统为每一段维护名字表，开销过大",
            en: "It requires the operating system to keep a name table for every segment, which costs too much",
            ms: "Ia memerlukan sistem pengendalian menyimpan jadual nama bagi setiap segmen, yang terlalu mahal"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义指出标记体系结构“因市场考虑（兼容性）而不普及”。选项1与事实相反，标记位数正比于可表达的访问权种类；选项3是基址/界限机制的缺点，而不是标记体系结构的；选项4描述的是分段机制要维护段名表，也不是题干所问。",
          en: "The lecture says tagged architecture is not widespread because of market considerations, namely compatibility. Option 1 is the opposite of the truth, since the number of tag bits grows with the number of expressible access rights; option 3 is the shortcoming of base/bounds registers; option 4 describes segmentation, which keeps a table of segment names.",
          ms: "Kuliah menyatakan seni bina bertag tidak meluas kerana pertimbangan pasaran, iaitu keserasian. Pilihan 1 bertentangan dengan fakta kerana bilangan bit tag bertambah dengan bilangan hak akses yang boleh dinyatakan; pilihan 3 ialah kelemahan daftar asas/sempadan; pilihan 4 menerangkan persegmenan yang menyimpan jadual nama segmen."
        },
        diff: 2,
        topic: {
          zh: "标记体系结构",
          en: "Tagged architecture",
          ms: "Seni bina bertag"
        }
      },
      {
        id: "cs-04-q04",
        type: "mcq",
        q: {
          zh: "目录式访问控制与访问控制表（ACL）最关键的结构差别是？",
          en: "What is the key structural difference between the directory mechanism and an access control list (ACL)?",
          ms: "Apakah perbezaan struktur utama antara mekanisme direktori dan senarai kawalan akses (ACL)?"
        },
        opts: [
          {
            zh: "目录把清单挂在主体（用户）上，ACL 把清单挂在客体（对象）上",
            en: "The directory attaches its list to the subject (user), while an ACL attaches its list to the object",
            ms: "Direktori melekatkan senarainya pada subjek (pengguna), manakala ACL melekatkan senarainya pada objek"
          },
          {
            zh: "目录只能用于文件，ACL 只能用于内存",
            en: "A directory works only for files, while an ACL works only for memory",
            ms: "Direktori hanya berfungsi untuk fail, manakala ACL hanya berfungsi untuk ingatan"
          },
          {
            zh: "目录由用户维护，ACL 由操作系统维护",
            en: "The user maintains the directory, while the operating system maintains the ACL",
            ms: "Pengguna menyelenggara direktori, manakala sistem pengendalian menyelenggara ACL"
          },
          {
            zh: "目录不能表达读、写、执行三种权限，ACL 可以",
            en: "A directory cannot express read, write and execute, while an ACL can",
            ms: "Direktori tidak boleh menyatakan baca, tulis dan laksana, manakala ACL boleh"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义说目录法“清单附着于主体，为每个该主体可访问的对象列出访问权”，而 ACL“清单附着于对象，为每个可访问该对象的主体列出访问权”，两者恰好相反，这正是最关键的结构差别。两者都能表达读、写、执行，也都由操作系统维护，故选项2、3、4均不成立。",
          en: "The lecture says the directory approach attaches a list to each subject, giving the access rights that subject holds for each object, whereas an ACL attaches a list to each object, giving the rights of every subject that may access it; the two are mirror images. Both express read, write and execute and both are maintained by the operating system, so options 2, 3 and 4 fail.",
          ms: "Kuliah menyatakan pendekatan direktori melekatkan senarai pada setiap subjek, menyatakan hak akses subjek itu bagi setiap objek, manakala ACL melekatkan senarai pada setiap objek, menyatakan hak setiap subjek yang boleh mengaksesnya; keduanya ibarat cermin. Kedua-duanya menyatakan baca, tulis dan laksana serta diselenggara oleh sistem pengendalian, jadi pilihan 2, 3 dan 4 tidak benar."
        },
        diff: 2,
        topic: {
          zh: "目录法与 ACL 的对比",
          en: "Directory versus ACL",
          ms: "Direktori berbanding ACL"
        }
      },
      {
        id: "cs-04-q05",
        type: "mcq",
        q: {
          zh: "在 UNIX 中，若一个可执行文件设置了 set userid（suid）位，执行它的用户获得的是谁的访问权？",
          en: "In UNIX, if an executable file has its set-userid (suid) bit set, whose access rights does the user who executes it obtain?",
          ms: "Dalam UNIX, jika sesuatu fail boleh laksana mempunyai bit set-userid (suid), hak akses siapakah yang diperoleh pengguna yang melaksanakannya?"
        },
        opts: [
          {
            zh: "执行者自己的访问权",
            en: "The executor's own access rights",
            ms: "Hak akses pelaksana itu sendiri"
          },
          {
            zh: "文件属主（owner）的访问权",
            en: "The file owner's access rights",
            ms: "Hak akses pemilik fail"
          },
          {
            zh: "文件所属组的全部访问权",
            en: "All access rights of the file's group",
            ms: "Semua hak akses kumpulan fail itu"
          },
          {
            zh: "操作系统内核的访问权",
            en: "The access rights of the operating system kernel",
            ms: "Hak akses kernel sistem pengendalian"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义把 suid 称为“临时获得的权限”：属主为可执行文件设置 suid 后，任何执行该文件的用户都按属主（而不是执行者本人）的访问权来访问文件，这样用户只能通过封装好的程序访问共享数据，例如修改自己的口令记录。执行者、组与内核的权限都不是 suid 所赋予的。",
          en: "The lecture calls suid a temporary acquired permission: once the owner sets suid on an executable, anyone executing it gains the owner's access rights rather than their own, so shared data are reachable only through the encapsulating procedure, as when a user changes their own password record. Neither the executor's rights, the group's rights nor the kernel's rights are granted by suid.",
          ms: "Kuliah memanggil suid sebagai kebenaran yang diperoleh sementara: apabila pemilik menetapkan suid pada fail boleh laksana, sesiapa yang melaksanakannya memperoleh hak akses pemilik dan bukan haknya sendiri, jadi data dikongsi hanya boleh dicapai melalui prosedur terbungkus, contohnya ketika pengguna menukar rekod kata laluannya. Hak pelaksana, kumpulan mahupun kernel bukan yang diberikan oleh suid."
        },
        diff: 2,
        topic: {
          zh: "set userid 权限",
          en: "The suid permission",
          ms: "Kebenaran suid"
        }
      },
      {
        id: "cs-04-q06",
        type: "multi",
        q: {
          zh: "讲义把身份鉴别（I&A）的依据分为几类。下列哪些属于其中？（多选）",
          en: "The lecture classifies the bases of identification and authentication. Which of the following are among them? (choose all that apply)",
          ms: "Kuliah mengelaskan asas pengenalan dan pengesahan. Antara berikut, yang manakah termasuk di dalamnya? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "实体知道的东西，如口令",
            en: "What the entity knows, such as a password",
            ms: "Apa yang diketahui entiti, seperti kata laluan"
          },
          {
            zh: "实体是什么，如指纹、视网膜特征",
            en: "What the entity is, such as fingerprints or retinal characteristics",
            ms: "Apa entiti itu, seperti cap jari atau ciri retina"
          },
          {
            zh: "实体拥有的东西，如徽章、智能卡",
            en: "What the entity has, such as badges or smart cards",
            ms: "Apa yang dimiliki entiti, seperti lencana atau kad pintar"
          },
          {
            zh: "实体在互联网上使用的昵称",
            en: "The nickname the entity uses on the Internet",
            ms: "Nama samaran yang digunakan entiti di Internet"
          },
          {
            zh: "实体所在的位置，如是否在会计部门",
            en: "Where the entity is, for example in the accounting department",
            ms: "Di mana entiti berada, contohnya di jabatan perakaunan"
          }
        ],
        answer: [
          0,
          1,
          2,
          4
        ],
        explain: {
          zh: "讲义列出五类依据：实体知道什么（口令、挑战应答）、实体是什么（指纹、视网膜等生物特征）、实体拥有什么（徽章、智能卡等访问令牌）、实体在哪里（位置），以及上述的组合。网络昵称只是标识符，谁都可以随便填写，不能证明身份，故不属于鉴别依据。",
          en: "The lecture lists five bases: what the entity knows, such as passwords and challenge-response; what the entity is, such as fingerprints or retinal patterns; what the entity has, such as badges and smart cards; where the entity is; and combinations of these. An Internet nickname is only an identifier that anyone can claim, so it authenticates nothing.",
          ms: "Kuliah menyenaraikan lima asas: apa yang diketahui entiti, seperti kata laluan dan cabaran-respons; apa entiti itu, seperti cap jari atau corak retina; apa yang dimiliki entiti, seperti lencana dan kad pintar; di mana entiti berada; dan gabungannya. Nama samaran Internet hanyalah pengecam yang boleh diakui sesiapa, jadi ia tidak mengesahkan apa-apa."
        },
        diff: 2,
        topic: {
          zh: "身份鉴别的五类依据",
          en: "Bases of authentication",
          ms: "Asas pengesahan"
        }
      },
      {
        id: "cs-04-q07",
        type: "tf",
        q: {
          zh: "基址/界限寄存器能提供最细的访问权粒度，使同一模块内的不同数据可以分别设定读、写、执行权限。",
          en: "Base/bounds registers provide the finest granularity of access rights, so different data inside the same module can be given separate read, write and execute permissions.",
          ms: "Daftar asas/sempadan memberikan butiran hak akses paling halus, sehingga data berbeza dalam modul yang sama boleh diberi kebenaran baca, tulis dan laksana yang berasingan."
        },
        answer: false,
        explain: {
          zh: "恰好相反：讲义把基址/界限的缺点列为访问权粒度过高，另一个模块要么能访问其全部数据，要么一点也访问不到，也就是“全有或全无”。能按每个机器字分别设定访问权的是标记体系结构。题干把两种机制的特性对调了。",
          en: "It is the reverse: the lecture lists coarse granularity as the drawback of base/bounds, so another module can access all of its data or none of it, an all-or-nothing arrangement. It is tagged architecture that sets access rights word by word. The statement swaps the properties of the two mechanisms.",
          ms: "Sebaliknya: kuliah menyenaraikan butiran kasar sebagai kelemahan daftar asas/sempadan, jadi modul lain boleh mengakses semua datanya atau tiada langsung, iaitu semua atau tiada. Seni bina bertag yang menetapkan hak akses mengikut setiap perkataan mesin. Pernyataan ini menukar sifat kedua-dua mekanisme."
        },
        diff: 2,
        topic: {
          zh: "访问控制的粒度",
          en: "Granularity of access control",
          ms: "Butiran kawalan akses"
        }
      },
      {
        id: "cs-04-q08",
        type: "fill",
        q: {
          zh: "在分页机制中，程序被划分为大小相等的若干块，称为 ______，而内存被划分为同样大小的单元，称为页框（page frame）。",
          en: "In paging, a program is divided into equal-sized pieces called ______, and memory is divided into units of the same size called page frames.",
          ms: "Dalam penghalaman, program dibahagikan kepada bahagian bersaiz sama yang dipanggil ______, dan ingatan dibahagikan kepada unit bersaiz sama yang dipanggil rangka halaman."
        },
        answer: [
          "page",
          "pages",
          "页",
          "页面",
          "halaman"
        ],
        explain: {
          zh: "讲义说分页把程序划分为等长的“页”，内存划分为同样大小的“页框”，地址表示为 <页, 偏移>；操作系统用页表把页号转换成页框地址，再加上偏移得到真实地址。分段则按逻辑单位划分，地址形式是 <段名, 偏移>，两者不要混淆。",
          en: "The lecture says paging divides a program into equal-sized pages and memory into page frames of the same size, with addresses written as <page, offset>; the operating system converts the page number to a frame address by a table lookup and adds the offset. Segmentation divides by logical units instead, with addresses of the form <segment name, offset>.",
          ms: "Kuliah menyatakan penghalaman membahagikan program kepada halaman bersaiz sama dan ingatan kepada rangka halaman yang sama saiz, dengan alamat ditulis sebagai <halaman, offset>; sistem pengendalian menukar nombor halaman kepada alamat rangka melalui carian jadual dan menambah offset. Persegmenan membahagi mengikut unit logik dengan alamat berbentuk <nama segmen, offset>."
        },
        diff: 1,
        topic: {
          zh: "分页与页框",
          en: "Paging and page frames",
          ms: "Penghalaman dan rangka halaman"
        }
      }
    ],
    "cs-05": [
      {
        id: "cs-05-q01",
        type: "mcq",
        q: {
          zh: "一个用户通常只能访问数据库的一部分，讲义把这一部分称为什么？",
          en: "A user usually has access to only part of a database. What does the lecture call that part?",
          ms: "Seorang pengguna biasanya hanya mempunyai akses kepada sebahagian pangkalan data. Apakah yang dipanggil oleh kuliah tentang bahagian itu?"
        },
        opts: [
          {
            zh: "模式（schema）",
            en: "Schema",
            ms: "Skema"
          },
          {
            zh: "子模式（subschema）",
            en: "Subschema",
            ms: "Subskema"
          },
          {
            zh: "属性（attribute）",
            en: "Attribute",
            ms: "Atribut"
          },
          {
            zh: "关系（relation）",
            en: "Relation",
            ms: "Hubungan"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义把数据库的整体逻辑结构称为 schema（模式），而某个用户只能访问的那一部分称为 subschema（子模式），执行查询得到的结果也是一个子模式。属性是列的名字，关系是一组列，两者都不是“用户可见的部分”。",
          en: "The lecture calls the logical structure of a database its schema, and the part a particular user may access its subschema; the result of executing a query is also a subschema. An attribute is the name of a column and a relation is a set of columns, neither being the user's view.",
          ms: "Kuliah memanggil struktur logik keseluruhan pangkalan data sebagai skema, dan bahagian yang boleh diakses pengguna tertentu sebagai subskema; hasil pelaksanaan pertanyaan juga merupakan subskema. Atribut ialah nama lajur dan hubungan ialah set lajur, bukan pandangan pengguna."
        },
        diff: 1,
        topic: {
          zh: "模式与子模式",
          en: "Schema and subschema",
          ms: "Skema dan subskema"
        }
      },
      {
        id: "cs-05-q02",
        type: "mcq",
        q: {
          zh: "在两阶段更新中，影子值（shadow value）是在什么时候计算并保存的？",
          en: "In a two-phase update, when is a shadow value computed and stored?",
          ms: "Dalam kemas kini dua fasa, bilakah nilai bayangan dikira dan disimpan?"
        },
        opts: [
          {
            zh: "只在系统崩溃后由日志重算",
            en: "It is recomputed from the log only after the system crashes",
            ms: "Ia dikira semula daripada log hanya selepas sistem ranap"
          },
          {
            zh: "在提交阶段计算，并立即写入数据库",
            en: "It is computed at the commit phase and written straight into the database",
            ms: "Ia dikira pada fasa komit dan terus ditulis ke pangkalan data"
          },
          {
            zh: "在意图阶段直接写入数据库，提交阶段只写提交标志",
            en: "It is written straight into the database in the intent phase, and the commit phase only writes the commit flag",
            ms: "Ia ditulis terus ke pangkalan data dalam fasa niat, dan fasa komit hanya menulis bendera komit"
          },
          {
            zh: "在意图阶段计算并本地保存，到提交阶段才复制进数据库",
            en: "It is computed and stored locally during the intent phase and copied into the database only in the commit phase",
            ms: "Ia dikira dan disimpan secara setempat dalam fasa niat dan disalin ke pangkalan data hanya dalam fasa komit"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义说使用两阶段提交时，关键数据点会维护影子值：影子值在意图阶段计算并保存在本地，到提交阶段才复制到真正的数据库中。意图阶段先检查 COMMIT-FLAG 并算出 TCLIPS、TBUDGET 等临时值，提交阶段先置标志、再复制影子值、最后清除标志，因此其余选项都把两个阶段的职责弄混了。",
          en: "The lecture says shadow values are maintained for key data points: each shadow value is computed and stored locally during the intent phase and copied to the actual database during the commit phase. The intent phase checks COMMIT-FLAG and computes temporary values such as TCLIPS and TBUDGET; the commit phase sets the flag, copies the shadow values and then unsets the flag.",
          ms: "Kuliah menyatakan nilai bayangan diselenggara bagi titik data penting: setiap nilai bayangan dikira dan disimpan secara setempat dalam fasa niat dan disalin ke pangkalan data sebenar dalam fasa komit. Fasa niat menyemak COMMIT-FLAG dan mengira nilai sementara seperti TCLIPS dan TBUDGET; fasa komit menetapkan bendera, menyalin nilai bayangan dan kemudian membatalkan bendera."
        },
        diff: 2,
        topic: {
          zh: "两阶段更新的影子值",
          en: "Shadow values in two-phase update",
          ms: "Nilai bayangan dalam kemas kini dua fasa"
        }
      },
      {
        id: "cs-05-q03",
        type: "mcq",
        q: {
          zh: "数据库监视器（monitor）有多种形式。哪一种负责检验每个新值是否落在可接受的区间内？",
          en: "Database monitors take several forms. Which one tests each new value to ensure it lies within an acceptable range?",
          ms: "Pemantau pangkalan data mempunyai beberapa bentuk. Yang manakah menguji setiap nilai baharu untuk memastikan ia berada dalam julat yang boleh diterima?"
        },
        opts: [
          {
            zh: "过滤器或模式",
            en: "Filters or patterns",
            ms: "Penapis atau corak"
          },
          {
            zh: "状态约束",
            en: "State constraint",
            ms: "Kekangan keadaan"
          },
          {
            zh: "转移约束",
            en: "Transition constraint",
            ms: "Kekangan peralihan"
          },
          {
            zh: "范围比较",
            en: "Range comparison",
            ms: "Perbandingan julat"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义把监视器分为范围比较、过滤器或模式、状态约束与转移约束：范围比较检验每个新值是否在可接受范围内；过滤器或模式是更一般的数据形式检查；状态约束描述整个数据库的状态；转移约束描述改动被施加之前必须满足的条件。题干所问的正是范围比较。",
          en: "The lecture lists range comparison, filters or patterns, state constraints and transition constraints: a range comparison monitor tests each new value against an acceptable range; filters or patterns are more general form checks; state constraints describe the condition of the whole database; transition constraints describe what must hold before changes are applied.",
          ms: "Kuliah menyenaraikan perbandingan julat, penapis atau corak, kekangan keadaan dan kekangan peralihan: pemantau perbandingan julat menguji setiap nilai baharu terhadap julat yang boleh diterima; penapis atau corak ialah pemeriksaan bentuk yang lebih umum; kekangan keadaan menerangkan keadaan keseluruhan pangkalan data; kekangan peralihan menerangkan apa yang mesti dipenuhi sebelum perubahan digunakan."
        },
        diff: 2,
        topic: {
          zh: "监视器的类型",
          en: "Forms of monitors",
          ms: "Bentuk pemantau"
        }
      },
      {
        id: "cs-05-q04",
        type: "mcq",
        q: {
          zh: "跟踪器攻击（tracker attack）的基本手法是？",
          en: "What is the basic technique of a tracker attack?",
          ms: "Apakah teknik asas serangan penjejak (tracker attack)?"
        },
        opts: [
          {
            zh: "用 n−1 个其他值构造两次查询，使多余的记录互相抵消，只剩想要的那一个值",
            en: "Building two queries around n−1 other values so that the extra records cancel out and only the wanted value remains",
            ms: "Membina dua pertanyaan menggunakan n−1 nilai lain supaya rekod berlebihan saling membatalkan dan hanya nilai yang dikehendaki tinggal"
          },
          {
            zh: "直接查询敏感字段，只取一条记录",
            en: "Querying the sensitive field directly and taking a single record",
            ms: "Menanyakan medan sensitif secara terus dan mengambil satu rekod sahaja"
          },
          {
            zh: "反复查询求平均值，靠多次平均消除噪声",
            en: "Repeating queries and averaging them so that noise cancels out",
            ms: "Mengulang pertanyaan dan memuratakan hasilnya supaya bunyi batal"
          },
          {
            zh: "修改数据库中的敏感字段，使其暴露出来",
            en: "Modifying the sensitive field in the database so that it is exposed",
            ms: "Mengubah medan sensitif dalam pangkalan data supaya ia terdedah"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义说跟踪器攻击用“智能填充”两次查询：不再直接定位唯一值，而是请求 n−1 个其他值，两次查询的记录集合相消后只剩目标值，例如 count(a∧b∧c) = count(a) − count(a∧¬(b∧c))。选项2是直接攻击，选项3描述的是借助均值或中位数的间接攻击，选项4根本不是推理攻击。",
          en: "The lecture says a tracker attack uses intelligent padding of two queries: instead of isolating a unique value, it requests n−1 other values, and the two record sets cancel to leave the target, for example count(a∧b∧c) = count(a) − count(a∧¬(b∧c)). Option 2 is a direct attack, option 3 describes indirect attacks through mean or median, and option 4 is not an inference attack at all.",
          ms: "Kuliah menyatakan serangan penjejak menggunakan pengisian pintar dua pertanyaan: daripada mengasingkan satu nilai unik, ia meminta n−1 nilai lain, dan dua set rekod itu membatalkan untuk meninggalkan sasaran, contohnya count(a∧b∧c) = count(a) − count(a∧¬(b∧c)). Pilihan 2 ialah serangan langsung, pilihan 3 menerangkan serangan tidak langsung melalui min atau median, dan pilihan 4 bukan serangan inferens."
        },
        diff: 3,
        topic: {
          zh: "跟踪器攻击",
          en: "Tracker attacks",
          ms: "Serangan penjejak"
        }
      },
      {
        id: "cs-05-q05",
        type: "mcq",
        q: {
          zh: "单独看金矿的经度几乎没有意义，但一旦与纬度结合就能定位矿脉。按讲义，这属于使数据变得敏感的哪种因素？",
          en: "The longitude of a gold mine reveals little on its own, but combined with the latitude it pinpoints the mine. According to the lecture, which factor makes data sensitive here?",
          ms: "Longitud sesuatu lombong emas tidak memberi makna sendiri, tetapi apabila digabungkan dengan latitud ia dapat menentukan lokasi lombong. Menurut kuliah, faktor manakah yang menjadikan data itu sensitif?"
        },
        opts: [
          {
            zh: "本身敏感",
            en: "Inherently sensitive",
            ms: "Sensitif secara semula jadi"
          },
          {
            zh: "来自敏感来源",
            en: "From a sensitive source",
            ms: "Daripada sumber sensitif"
          },
          {
            zh: "与已披露信息相关联时敏感",
            en: "Sensitive in relation to previously disclosed information",
            ms: "Sensitif berkaitan maklumat yang telah didedahkan"
          },
          {
            zh: "被声明为敏感",
            en: "Declared sensitive",
            ms: "Diisytiharkan sensitif"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义把使数据敏感的因素分为本身敏感、来源敏感、被声明敏感、属于敏感属性或记录，以及与已披露信息相关联等。金矿经度单独无意义、与纬度结合才暴露位置，正是“与其他数据同时出现时变敏感”的例子。本身敏感指价值本身就泄露机密（如防御导弹位置），来源敏感指来源需保密（如线人身份），被声明敏感指管理员或所有者宣布其敏感。",
          en: "The lecture lists data that are inherently sensitive, from a sensitive source, declared sensitive, part of a sensitive attribute or record, and sensitive in relation to previously disclosed information. Longitude alone means nothing but with latitude pinpoints the mine, which is exactly sensitivity from combination with other data. Inherently sensitive means the value itself reveals a secret, such as missile locations; from a sensitive source means the source needs protection, such as an informer.",
          ms: "Kuliah menyenaraikan data yang sensitif secara semula jadi, daripada sumber sensitif, diisytiharkan sensitif, sebahagian atribut atau rekod sensitif, dan sensitif berkaitan maklumat yang telah didedahkan. Longitud sahaja tidak bermakna tetapi dengan latitud menentukan lokasi lombong, iaitu sensitiviti akibat gabungan data. Sensitif semula jadi bermaksud nilai itu sendiri mendedahkan rahsia, seperti lokasi peluru berpandu; daripada sumber sensitif bermaksud sumbernya perlu dilindungi, seperti pemberi maklumat."
        },
        diff: 2,
        topic: {
          zh: "数据敏感的因素",
          en: "Factors making data sensitive",
          ms: "Faktor yang menjadikan data sensitif"
        }
      },
      {
        id: "cs-05-q06",
        type: "multi",
        q: {
          zh: "讲义列出的数据库安全需求包括下列哪些？（多选）",
          en: "Which of the following are among the database security requirements listed in the lecture? (choose all that apply)",
          ms: "Antara berikut, yang manakah termasuk dalam keperluan keselamatan pangkalan data yang disenaraikan dalam kuliah? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "元素完整性",
            en: "Element integrity",
            ms: "Integriti elemen"
          },
          {
            zh: "可审计性",
            en: "Auditability",
            ms: "Kebolehauditan"
          },
          {
            zh: "可用性",
            en: "Availability",
            ms: "Ketersediaan"
          },
          {
            zh: "数据压缩率",
            en: "Data compression ratio",
            ms: "Nisbah pemampatan data"
          },
          {
            zh: "用户界面的美观程度",
            en: "The attractiveness of the user interface",
            ms: "Kemenarikan antara muka pengguna"
          }
        ],
        answer: [
          0,
          1,
          2
        ],
        explain: {
          zh: "讲义列出的需求是物理完整性、逻辑完整性、元素完整性、可审计性、访问控制、用户鉴别与可用性。元素完整性指每个元素中的数据是准确的；可审计性指能追踪谁访问或修改了元素；可用性指用户能访问数据库及其被授权的数据。压缩率与界面美观与“谁能访问、数据是否准确”无关，不在其中。",
          en: "The requirements are physical integrity, logical integrity, element integrity, auditability, access control, user authentication and availability. Element integrity means each element holds accurate data; auditability means it is possible to track who accessed or modified elements; availability means users can reach the database and the data they are authorized for. Compression ratio and interface looks do not bear on who may access or whether data are accurate.",
          ms: "Keperluannya ialah integriti fizikal, integriti logik, integriti elemen, kebolehauditan, kawalan akses, pengesahan pengguna dan ketersediaan. Integriti elemen bermaksud setiap elemen menyimpan data yang tepat; kebolehauditan bermaksud akses atau pengubahsuaian boleh dijejaki; ketersediaan bermaksud pengguna boleh mencapai pangkalan data dan data yang dibenarkan. Nisbah pemampatan dan rupa antara muka tidak berkaitan dengan siapa boleh mengakses atau ketepatan data."
        },
        diff: 2,
        topic: {
          zh: "数据库安全需求",
          en: "Database security requirements",
          ms: "Keperluan keselamatan pangkalan data"
        }
      },
      {
        id: "cs-05-q07",
        type: "tf",
        q: {
          zh: "可信前端（trusted front end）又称守卫（guard），其工作方式很像引用监视器（reference monitor）。",
          en: "The trusted front end is also known as a guard and operates much like the reference monitor.",
          ms: "Bahagian hadapan dipercayai juga dikenali sebagai pengawal (guard) dan beroperasi hampir serupa dengan pemantau rujukan (reference monitor)."
        },
        answer: true,
        explain: {
          zh: "讲义在介绍多级安全数据库的可信前端时明确写道：可信前端又称守卫，运作很像引用监视器。它先鉴别用户身份、核查其对数据的授权，再把查询转交数据库管理器，并对返回结果按用户的安全级别筛选后才交给不可信前端格式化，因此该陈述正确。",
          en: "Introducing the trusted front end for multilevel databases, the lecture states that it is also known as a guard and operates much like the reference monitor. It authenticates the user, verifies authorization, passes the query to the database manager, and filters the returned items according to the user's security level before the untrusted front end formats them.",
          ms: "Ketika memperkenalkan bahagian hadapan dipercayai untuk pangkalan data berbilang aras, kuliah menyatakan ia juga dikenali sebagai pengawal dan beroperasi hampir serupa dengan pemantau rujukan. Ia mengesahkan pengguna, menyemak kebenaran, menyalurkan pertanyaan kepada pengurus pangkalan data, dan menapis hasil mengikut aras keselamatan pengguna sebelum bahagian hadapan tidak dipercayai memformatnya."
        },
        diff: 2,
        topic: {
          zh: "可信前端与守卫",
          en: "Trusted front end as a guard",
          ms: "Bahagian hadapan dipercayai sebagai pengawal"
        }
      },
      {
        id: "cs-05-q08",
        type: "fill",
        q: {
          zh: "控制统计推理攻击时，敏感数据一律不提供、查询被直接拒绝而不作回答的做法称为 ______；而给出接近但不完全等于真值的答案则称为隐藏（concealing）。",
          en: "Among the controls for statistical inference attacks, refusing the query and providing no answer at all is called ______, whereas returning an answer close to but not exactly the true value is called concealing.",
          ms: "Antara kawalan serangan inferens statistik, menolak pertanyaan tanpa memberikan sebarang jawapan dipanggil ______, manakala memberikan jawapan yang hampir tetapi tidak tepat dengan nilai sebenar dipanggil penyembunyian."
        },
        answer: [
          "suppression",
          "penindasan",
          "抑制",
          "suppress"
        ],
        explain: {
          zh: "讲义把控制统计推理攻击的手段分成抑制与隐藏：抑制是不提供敏感数据、直接拒绝查询，凡给出的结果都正确，但很多回答必须被拒绝；隐藏则给出接近而不精确的答案，能提供更多结果但精度下降。二者体现的正是安全与精度的取舍。",
          en: "The lecture divides controls for statistical inference into suppression and concealing: suppression withholds sensitive values and rejects the query, so every answer given is correct but many must be refused; concealing returns an answer close to but not exactly the truth, so more results are available at lower precision. The pair expresses the trade-off between security and precision.",
          ms: "Kuliah membahagikan kawalan serangan inferens statistik kepada penindasan dan penyembunyian: penindasan menahan nilai sensitif dan menolak pertanyaan, jadi setiap jawapan yang diberi adalah tepat tetapi banyak yang mesti ditolak; penyembunyian memberi jawapan hampir tetapi tidak tepat, jadi lebih banyak hasil tersedia dengan ketepatan lebih rendah. Keduanya menunjukkan pertukaran antara keselamatan dan ketepatan."
        },
        diff: 2,
        topic: {
          zh: "抑制与隐藏",
          en: "Suppression and concealing",
          ms: "Penindasan dan penyembunyian"
        }
      }
    ],
    "cs-06": [
      {
        id: "cs-06-q01",
        type: "mcq",
        q: {
          zh: "目标主机维护一个 SYN_RECV 队列，记录已发出 SYNACK 但尚未收到 ACK 的连接。攻击者大量发送 SYN 却从不回 ACK，把该队列填满，使正常连接无法建立。这是哪种攻击？",
          en: "The target keeps a SYN_RECV queue of connections for which a SYNACK has been sent but no ACK has arrived. An attacker floods it with SYN requests and never sends ACKs, so legitimate connections cannot be established. Which attack is this?",
          ms: "Sasaran menyimpan baris gilir SYN_RECV bagi sambungan yang SYNACK telah dihantar tetapi ACK belum tiba. Penyerang membanjiri dengan permintaan SYN tanpa menghantar ACK sehingga sambungan sah tidak dapat dibina. Serangan manakah ini?"
        },
        opts: [
          {
            zh: "泪滴攻击",
            en: "Teardrop attack",
            ms: "Serangan titisan air mata"
          },
          {
            zh: "蓝精灵攻击",
            en: "Smurf attack",
            ms: "Serangan Smurf"
          },
          {
            zh: "SYN 洪泛",
            en: "SYN flood",
            ms: "Banjir SYN"
          },
          {
            zh: "死亡之 Ping",
            en: "Ping of death",
            ms: "Ping maut"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义对 SYN 洪泛的描述正是如此：TCP 用三次握手建立会话，目标为“已发 SYNACK 但未收 ACK”的连接维护 SYN_RECV 队列，攻击者大量发 SYN 而不回 ACK，即可填满队列形成拒绝服务。泪滴利用重叠的分片偏移使报文无法重组，smurf 伪造源地址做广播 ping 放大流量，ping of death 则发送超大的 ping 报文。",
          en: "The lecture describes a SYN flood exactly this way: TCP establishes a session with a three-way handshake, the destination tracks entries awaiting an ACK in the SYN_RECV queue, and an attacker who sends many SYNs without ACKs fills that queue and denies service. Teardrop uses overlapping fragment offsets that cannot be reassembled, smurf spoofs the source of a broadcast ping, and ping of death sends oversized ping packets.",
          ms: "Kuliah menerangkan banjir SYN tepat seperti itu: TCP membina sesi dengan jabat tangan tiga hala, sasaran menjejaki entri yang menunggu ACK dalam baris gilir SYN_RECV, dan penyerang yang menghantar banyak SYN tanpa ACK memenuhi baris gilir itu lalu menafikan perkhidmatan. Titisan air mata menggunakan offset serpihan bertindih yang tidak dapat dicantum, Smurf memalsukan sumber ping siaran, dan Ping maut menghantar paket ping bersaiz berlebihan."
        },
        diff: 2,
        topic: {
          zh: "SYN 洪泛攻击",
          en: "SYN flood",
          ms: "Banjir SYN"
        }
      },
      {
        id: "cs-06-q02",
        type: "mcq",
        q: {
          zh: "哪种拒绝服务攻击发送一系列分片偏移互相重叠、无法正确重组的 IP 报文，使目标在重组时陷入混乱甚至锁死？",
          en: "Which denial-of-service attack sends a series of IP datagrams whose fragment offsets overlap, so that they cannot be reassembled properly and the target becomes confused or locks up?",
          ms: "Serangan penafian perkhidmatan manakah yang menghantar siri datagram IP dengan offset serpihan bertindih sehingga tidak dapat dicantum dengan betul dan sasaran menjadi keliru atau terkunci?"
        },
        opts: [
          {
            zh: "流量重定向",
            en: "Traffic redirection",
            ms: "Pengalihan trafik"
          },
          {
            zh: "SYN 洪泛",
            en: "SYN flood",
            ms: "Banjir SYN"
          },
          {
            zh: "回声-字符生成",
            en: "Echo-Chargen",
            ms: "Echo-Chargen"
          },
          {
            zh: "泪滴（teardrop）",
            en: "Teardrop",
            ms: "Titisan air mata"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义说泪滴攻击滥用为提高网络通信而设计的分片重组功能：一段声称位置 0、长度 60 字节，另一段位置 30、长度 90，再一段位置 41、长度 173，三段互相重叠，无法正确重组，极端情况下操作系统因这些拼不起来的残缺数据而锁死。SYN 洪泛填满连接队列，echo-chargen 利用字符生成协议产生的大量数据包流，流量重定向则靠污染路由。",
          en: "The lecture says teardrop misuses fragmentation, which exists to improve communication: one datagram claims position 0 for 60 bytes, another position 30 for 90 bytes, another position 41 for 173 bytes; the three overlap and cannot be reassembled, and in the extreme the operating system locks up on the partial units. A SYN flood fills a connection queue, echo-chargen uses the stream of packets that the chargen protocol generates, and traffic redirection corrupts routing.",
          ms: "Kuliah menyatakan titisan air mata menyalahgunakan pemecahan yang direka untuk memperbaiki komunikasi: satu datagram mendakwa kedudukan 0 sepanjang 60 bait, satu lagi kedudukan 30 sepanjang 90 bait, dan satu lagi kedudukan 41 sepanjang 173 bait; ketiganya bertindih dan tidak dapat dicantum, dan dalam kes melampau sistem pengendalian terkunci. Banjir SYN memenuhi baris gilir sambungan, echo-chargen menggunakan aliran paket yang dijana oleh protokol chargen, dan pengalihan trafik merosakkan penghalaan."
        },
        diff: 2,
        topic: {
          zh: "泪滴攻击",
          en: "Teardrop attack",
          ms: "Serangan titisan air mata"
        }
      },
      {
        id: "cs-06-q03",
        type: "mcq",
        q: {
          zh: "关于链路加密与端到端加密的比较，下列哪一项符合讲义？",
          en: "Regarding the comparison between link encryption and end-to-end encryption, which statement matches the lecture?",
          ms: "Berkenaan perbandingan antara penyulitan pautan dan penyulitan hujung ke hujung, pernyataan manakah yang menepati kuliah?"
        },
        opts: [
          {
            zh: "链路加密对每一对主机需要一个密钥并提供节点鉴别；端到端加密对每一对用户需要一个密钥并提供用户鉴别",
            en: "Link encryption needs one key per host pair and provides node authentication, while end-to-end encryption needs one key per user pair and provides user authentication",
            ms: "Penyulitan pautan memerlukan satu kunci bagi setiap pasangan hos dan menyediakan pengesahan nod, manakala penyulitan hujung ke hujung memerlukan satu kunci bagi setiap pasangan pengguna dan menyediakan pengesahan pengguna"
          },
          {
            zh: "链路加密的数据在中间节点是加密的，端到端加密的数据在中间节点是暴露的",
            en: "With link encryption data are encrypted at intermediate nodes, while with end-to-end encryption data are exposed at intermediate nodes",
            ms: "Dengan penyulitan pautan data disulitkan pada nod perantaraan, manakala dengan penyulitan hujung ke hujung data terdedah pada nod perantaraan"
          },
          {
            zh: "链路加密由发送进程施加、用户自行选择算法；端到端加密对用户不可见、由主机维护",
            en: "Link encryption is applied by the sending process and the user chooses the algorithm, while end-to-end encryption is invisible to the user and maintained by the host",
            ms: "Penyulitan pautan digunakan oleh proses penghantar dan pengguna memilih algoritma, manakala penyulitan hujung ke hujung tidak kelihatan kepada pengguna dan diselenggara oleh hos"
          },
          {
            zh: "链路加密只加密部分数据，端到端加密总是加密全部数据",
            en: "Link encryption encrypts only part of the data, while end-to-end encryption always encrypts all of it",
            ms: "Penyulitan pautan menyulitkan sebahagian data sahaja, manakala penyulitan hujung ke hujung sentiasa menyulitkan semuanya"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义对比表列出：链路加密在中间节点数据是暴露的（逐个节点解密再加密）、每对主机一个密钥、提供节点鉴别，由发送主机施加且对用户不可见、全部数据都加密；端到端加密在中间节点保持加密、每对用户一个密钥、提供用户鉴别，由发送进程施加、用户需自己找到算法并逐项决定是否加密。选项2、3把两者的施加者说反了，选项4与“链路全部加密、端到端由用户逐项选择”相反。",
          en: "The lecture's comparison table shows link encryption exposes data at intermediate nodes, where each node decrypts and re-encrypts, uses one key per host pair, provides node authentication, is applied by the sending host, is invisible to the user and encrypts all data. End-to-end encryption keeps data encrypted at intermediate nodes, uses one key per user pair, provides user authentication, is applied by the sending process and lets the user choose the algorithm and whether to encrypt each item.",
          ms: "Jadual perbandingan kuliah menunjukkan penyulitan pautan mendedahkan data pada nod perantaraan, yang menyahsulit dan menyulit semula, menggunakan satu kunci bagi setiap pasangan hos, menyediakan pengesahan nod, digunakan oleh hos penghantar, tidak kelihatan kepada pengguna dan menyulitkan semua data. Penyulitan hujung ke hujung mengekalkan data bersulit pada nod perantaraan, menggunakan satu kunci bagi setiap pasangan pengguna, menyediakan pengesahan pengguna, digunakan oleh proses penghantar dan membolehkan pengguna memilih algoritma serta sama ada menyulitkan setiap item."
        },
        diff: 3,
        topic: {
          zh: "链路加密与端到端加密",
          en: "Link versus end-to-end encryption",
          ms: "Penyulitan pautan berbanding hujung ke hujung"
        }
      },
      {
        id: "cs-06-q04",
        type: "mcq",
        q: {
          zh: "讲义认为最简单、在某些情形下也最有效的一类防火墙是？",
          en: "Which type of firewall does the lecture call the simplest and, in some situations, the most effective?",
          ms: "Jenis tembok api manakah yang dipanggil paling mudah dan, dalam sesetengah keadaan, paling berkesan oleh kuliah?"
        },
        opts: [
          {
            zh: "应用代理",
            en: "Application proxy",
            ms: "Proksi aplikasi"
          },
          {
            zh: "状态检测防火墙",
            en: "Stateful inspection firewall",
            ms: "Tembok api pemeriksaan berkeadaan"
          },
          {
            zh: "分组过滤网关（屏蔽路由器）",
            en: "Packet filtering gateway (screening router)",
            ms: "Gerbang penapisan paket (penghala penyaring)"
          },
          {
            zh: "守卫",
            en: "Guard",
            ms: "Pengawal"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义把分组过滤网关（又称屏蔽路由器）称为最简单、在某些情况下也最有效的防火墙，它按规则检查进出报文的头部。应用代理（堡垒主机）要模拟应用的行为，状态检测要跨报文维持状态，守卫则更复杂、能按所掌握的信息决定代为执行哪些服务，三者都不是“最简单”的那一类。",
          en: "The lecture calls the packet filtering gateway, also called a screening router, the simplest and in some situations the most effective firewall, since it checks packet headers against rules. An application proxy, or bastion host, simulates the application; a stateful inspection firewall maintains state across packets; a guard is more sophisticated and decides what to do on the user's behalf.",
          ms: "Kuliah memanggil gerbang penapisan paket, juga dikenali sebagai penghala penyaring, sebagai tembok api paling mudah dan dalam sesetengah keadaan paling berkesan kerana ia menyemak pengepala paket terhadap peraturan. Proksi aplikasi atau hos bastion mensimulasikan aplikasi; tembok api pemeriksaan berkeadaan mengekalkan keadaan merentas paket; pengawal lebih canggih dan memutuskan perkhidmatan yang dilakukan bagi pihak pengguna."
        },
        diff: 1,
        topic: {
          zh: "防火墙的类型",
          en: "Types of firewalls",
          ms: "Jenis tembok api"
        }
      },
      {
        id: "cs-06-q05",
        type: "mcq",
        q: {
          zh: "一种入侵检测系统先建立“可接受行为”的模型，再把偏离该模型的行为标记出来。它属于哪一类？",
          en: "An intrusion detection system builds a model of acceptable behaviour and then flags exceptions to that model. Which type is it?",
          ms: "Sistem pengesanan pencerobohan membina model tingkah laku yang boleh diterima dan kemudian menandakan pengecualian kepada model itu. Jenis manakah ini?"
        },
        opts: [
          {
            zh: "基于签名的 IDS",
            en: "Signature-based IDS",
            ms: "IDS berasaskan tandatangan"
          },
          {
            zh: "蜜罐",
            en: "Honeypot",
            ms: "Periuk madu"
          },
          {
            zh: "基于主机的 IDS",
            en: "Host-based IDS",
            ms: "IDS berasaskan hos"
          },
          {
            zh: "启发式（异常）IDS",
            en: "Heuristic (anomaly-based) IDS",
            ms: "IDS heuristik (berasaskan anomali)"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义说基于签名的 IDS 做简单模式匹配、报告与已知攻击模式相符的情形，因而无法发现尚无签名的攻击；启发式 IDS 又称异常型，先建立可接受行为的模型，再对偏离模型的例外报警，其推理引擎在“脏度”超过阈值时发出警报。基于主机/网络是部署范围之分，蜜罐则是诱骗系统。",
          en: "The lecture says signature-based IDS perform simple pattern matching and report situations matching a known attack, so they cannot detect an attack with no signature yet; heuristic, also called anomaly-based, IDS build a model of acceptable behaviour and flag exceptions, with an inference engine alerting when the system's dirtiness exceeds a threshold. Host-based versus network-based concerns deployment, and a honeypot is a decoy.",
          ms: "Kuliah menyatakan IDS berasaskan tandatangan melakukan pemadanan corak mudah dan melaporkan keadaan yang sepadan dengan serangan yang diketahui, jadi ia tidak dapat mengesan serangan tanpa tandatangan; IDS heuristik, juga dipanggil berasaskan anomali, membina model tingkah laku yang boleh diterima dan menandakan pengecualian, dengan enjin inferens memberi amaran apabila “kekotoran” sistem melebihi ambang. Berasaskan hos berbanding rangkaian ialah soal penempatan, dan periuk madu ialah sistem umpanan."
        },
        diff: 2,
        topic: {
          zh: "签名型与启发式 IDS",
          en: "Signature versus heuristic IDS",
          ms: "IDS tandatangan berbanding heuristik"
        }
      },
      {
        id: "cs-06-q06",
        type: "multi",
        q: {
          zh: "讲义用网络与单机环境的差异解释网络为何脆弱。下列哪些属于它列出的因素？（多选）",
          en: "The lecture explains why networks are vulnerable by contrasting them with stand-alone environments. Which of the following are among the factors it lists? (choose all that apply)",
          ms: "Kuliah menerangkan mengapa rangkaian terdedah dengan membandingkannya dengan persekitaran berdiri sendiri. Antara berikut, yang manakah termasuk faktor yang disenaraikan? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "匿名性",
            en: "Anonymity",
            ms: "Ketanpanamaan"
          },
          {
            zh: "攻击点众多",
            en: "Many points of attack",
            ms: "Banyak titik serangan"
          },
          {
            zh: "共享",
            en: "Sharing",
            ms: "Perkongsian"
          },
          {
            zh: "网络边界总是清晰而稳定",
            en: "The network perimeter is always clear and stable",
            ms: "Perimeter rangkaian sentiasa jelas dan stabil"
          },
          {
            zh: "整个互联网由单一机构统一控制",
            en: "The whole Internet is controlled by a single authority",
            ms: "Seluruh Internet dikawal oleh satu pihak berkuasa"
          }
        ],
        answer: [
          0,
          1,
          2
        ],
        explain: {
          zh: "讲义列出匿名性、攻击点众多、共享、系统复杂、边界未知与路径未知等因素。互联网的特征恰恰是联邦式、庞大、异构、物理与逻辑上都暴露，边界并不清晰，也没有单一控制者，因此后两项与讲义相反。",
          en: "The lecture lists anonymity, many points of attack, sharing, system complexity, an unknown perimeter and an unknown path. The Internet is characterised by federation, enormous size, heterogeneity and physical as well as logical exposure, so its perimeter is not clear and there is no single controller; the last two options contradict the lecture.",
          ms: "Kuliah menyenaraikan kerahsiaan identiti, banyak titik serangan, perkongsian, kerumitan sistem, perimeter tidak diketahui dan laluan tidak diketahui. Internet dicirikan oleh persekutuan, saiz besar, heterogen serta pendedahan fizikal dan logik, jadi perimeter tidak jelas dan tiada pengawal tunggal; dua pilihan terakhir bertentangan dengan kuliah."
        },
        diff: 2,
        topic: {
          zh: "网络脆弱的原因",
          en: "Why networks are vulnerable",
          ms: "Mengapa rangkaian terdedah"
        }
      },
      {
        id: "cs-06-q07",
        type: "tf",
        q: {
          zh: "SSL 最初由 Netscape 设计，用于保护浏览器与服务器之间的通信，现在也被称为传输层安全（TLS）。",
          en: "SSL was originally designed by Netscape to protect communication between a web browser and a server, and it is now also known as Transport Layer Security (TLS).",
          ms: "SSL pada asalnya direka oleh Netscape untuk melindungi komunikasi antara pelayar web dan pelayan, dan kini juga dikenali sebagai Keselamatan Lapisan Pengangkutan (TLS)."
        },
        answer: true,
        explain: {
          zh: "讲义写道 SSL 最初由 Netscape 设计以保护浏览器与服务器之间的通信，现在也称 TLS。使用时客户端请求 SSL 会话，服务器返回公钥证书供客户端确认其真实性，客户端再用服务器公钥加密一部分对称会话密钥，双方算出会话密钥后改用对称加密通信。",
          en: "The lecture states that SSL was originally designed by Netscape to protect browser-server communication and is now also called TLS. The client requests an SSL session, the server returns its public key certificate so the client can check its authenticity, the client returns part of a symmetric session key encrypted under the server's public key, and both sides derive the session key and switch to encrypted communication.",
          ms: "Kuliah menyatakan SSL pada asalnya direka oleh Netscape untuk melindungi komunikasi pelayar-pelayan dan kini juga dipanggil TLS. Klien meminta sesi SSL, pelayan mengembalikan sijil kunci awamnya supaya klien boleh menyemak ketulenannya, klien mengembalikan sebahagian kunci sesi simetri yang disulitkan dengan kunci awam pelayan, dan kedua-dua pihak memperoleh kunci sesi lalu bertukar kepada komunikasi bersulit."
        },
        diff: 1,
        topic: {
          zh: "SSL 与 TLS",
          en: "SSL and TLS",
          ms: "SSL dan TLS"
        }
      },
      {
        id: "cs-06-q08",
        type: "fill",
        q: {
          zh: "TCP 报文首部中用来指明计算机上某个具体应用的编号称为 ______。",
          en: "In a TCP packet header, the number that designates a particular application running on a computer is called a ______.",
          ms: "Dalam pengepala paket TCP, nombor yang menandakan aplikasi tertentu yang berjalan pada komputer dipanggil ______."
        },
        answer: [
          "port",
          "port number",
          "端口",
          "端口号",
          "nombor port"
        ],
        explain: {
          zh: "讲义说端口（port）是“指明计算机上运行的某个具体应用的编号”，TCP 报文包含序号、确认号、标志以及源端口和目的端口。端口扫描正是利用端口号判断目标上开了哪些服务、装了什么操作系统与应用版本，因此端口信息本身就是侦察的目标。",
          en: "The lecture says a port is a number designating a particular application running on a computer, and a TCP packet carries a sequence number, an acknowledgment number, flags, and source and destination port numbers. A port scan uses exactly these numbers to learn which services respond, which operating system is installed and which applications and versions are present.",
          ms: "Kuliah menyatakan port ialah nombor yang menandakan aplikasi tertentu yang berjalan pada komputer, dan paket TCP membawa nombor jujukan, nombor pengakuan, bendera, serta nombor port sumber dan destinasi. Imbasan port menggunakan nombor ini untuk mengetahui perkhidmatan yang bertindak balas, sistem pengendalian yang dipasang serta aplikasi dan versinya."
        },
        diff: 1,
        topic: {
          zh: "端口与端口扫描",
          en: "Ports and port scanning",
          ms: "Port dan imbasan port"
        }
      }
    ],
    "cs-07": [
      {
        id: "cs-07-q01",
        type: "mcq",
        q: {
          zh: "某风险的损失影响为 40,000 美元，发生概率为 0.25。按讲义的公式，该风险的风险暴露（risk exposure）是多少？",
          en: "A risk has an impact of 40,000 dollars and a probability of occurrence of 0.25. Using the lecture's formula, what is its risk exposure?",
          ms: "Satu risiko mempunyai kesan 40,000 dolar dan kebarangkalian berlaku 0.25. Menggunakan formula kuliah, apakah pendedahan risikonya?"
        },
        opts: [
          {
            zh: "10,000 美元",
            en: "10,000 dollars",
            ms: "10,000 dolar"
          },
          {
            zh: "40,000 美元",
            en: "40,000 dollars",
            ms: "40,000 dolar"
          },
          {
            zh: "160,000 美元",
            en: "160,000 dollars",
            ms: "160,000 dolar"
          },
          {
            zh: "25,000 美元",
            en: "25,000 dollars",
            ms: "25,000 dolar"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义把风险暴露定义为风险影响乘以发生概率，并用 0.3 × 10,000 = 3,000 美元的例子说明。本题为 40,000 × 0.25 = 10,000 美元。选项2只取影响值而忽略概率；选项3把除法当乘法（40,000 ÷ 0.25）；选项4与给定概率无关。",
          en: "The lecture defines risk exposure as risk impact multiplied by risk probability, illustrating it with 0.3 × 10,000 = 3,000 dollars. Here 40,000 × 0.25 = 10,000 dollars. Option 2 takes the impact alone and ignores probability; option 3 divides instead of multiplying (40,000 ÷ 0.25); option 4 has no basis in the given figures.",
          ms: "Kuliah mentakrifkan pendedahan risiko sebagai kesan risiko didarab kebarangkalian risiko, dengan contoh 0.3 × 10,000 = 3,000 dolar. Di sini 40,000 × 0.25 = 10,000 dolar. Pilihan 2 mengambil kesan sahaja dan mengabaikan kebarangkalian; pilihan 3 membahagi dan bukan mendarab (40,000 ÷ 0.25); pilihan 4 tiada asas dengan angka yang diberi."
        },
        diff: 2,
        topic: {
          zh: "风险暴露的计算",
          en: "Computing risk exposure",
          ms: "Mengira pendedahan risiko"
        }
      },
      {
        id: "cs-07-q02",
        type: "mcq",
        q: {
          zh: "讲义把“风险杠杆率”（risk leverage）定义为什么？",
          en: "How does the lecture define risk leverage?",
          ms: "Bagaimanakah kuliah mentakrifkan daya tuas risiko (risk leverage)?"
        },
        opts: [
          {
            zh: "风险暴露的减少量除以降低该风险的成本",
            en: "The difference in risk exposure divided by the cost of reducing the risk",
            ms: "Perbezaan pendedahan risiko dibahagikan dengan kos mengurangkan risiko itu"
          },
          {
            zh: "风险影响乘以风险发生概率",
            en: "The risk impact multiplied by the probability of occurrence",
            ms: "Kesan risiko didarab dengan kebarangkalian berlakunya"
          },
          {
            zh: "控制措施的实际成本减去其带来的预期损失",
            en: "The actual cost of a control minus the expected loss it brings",
            ms: "Kos sebenar sesuatu kawalan tolak kerugian dijangka yang dibawanya"
          },
          {
            zh: "采取控制后的年节省额除以控制的效果百分比",
            en: "The annual savings after the control divided by the control's effectiveness percentage",
            ms: "Penjimatan tahunan selepas kawalan dibahagikan dengan peratus keberkesanan kawalan"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义说风险杠杆率是“风险暴露的差值除以降低风险的成本”，用来比较不同控制措施的性价比。选项2就是风险暴露本身的定义；选项3是控制“有效成本”的定义（实际成本减去预期损失）；选项4把节省额与效果混在一起，并不是讲义给出的公式。",
          en: "The lecture defines risk leverage as the difference in risk exposure divided by the cost of reducing the risk, which lets us compare the value of different controls. Option 2 is the definition of risk exposure itself; option 3 is the effective cost of a control, actual cost minus expected loss; option 4 mixes savings with effectiveness and is not the lecture's formula.",
          ms: "Kuliah mentakrifkan daya tuas risiko sebagai perbezaan pendedahan risiko dibahagikan dengan kos mengurangkan risiko, yang membolehkan kita membandingkan nilai pelbagai kawalan. Pilihan 2 ialah takrif pendedahan risiko itu sendiri; pilihan 3 ialah kos berkesan kawalan, iaitu kos sebenar tolak kerugian dijangka; pilihan 4 mencampurkan penjimatan dengan keberkesanan dan bukan formula kuliah."
        },
        diff: 3,
        topic: {
          zh: "风险杠杆率",
          en: "Risk leverage",
          ms: "Daya tuas risiko"
        }
      },
      {
        id: "cs-07-q03",
        type: "mcq",
        q: {
          zh: "讲义说事件响应计划通常有三个执行阶段，另有一个在事态平息后才有用的第四阶段。下列哪一项是那个第四阶段？",
          en: "The lecture says an incident response plan usually has three phases, plus a fourth that is useful only after the situation abates. Which one is that fourth phase?",
          ms: "Kuliah menyatakan pelan tindak balas insiden biasanya mempunyai tiga fasa, ditambah satu fasa keempat yang berguna hanya selepas keadaan reda. Fasa keempat yang manakah itu?"
        },
        opts: [
          {
            zh: "预先规划",
            en: "Advance planning",
            ms: "Perancangan awal"
          },
          {
            zh: "分诊",
            en: "Triage",
            ms: "Triaj"
          },
          {
            zh: "处理事件",
            en: "Running the incident",
            ms: "Mengendalikan insiden"
          },
          {
            zh: "复查",
            en: "Review",
            ms: "Semakan semula"
          }
        ],
        answer: 3,
        explain: {
          zh: "讲义列出的三个阶段是预先规划、分诊与处理事件；复查在事件平息后进行，用来检讨是否应调整安全控制、以及本次响应计划是否奏效，因此是有用的第四阶段。其余三项都在事件处理过程之内，不是事后的阶段。",
          en: "The three phases are advance planning, triage and running the incident; review comes after the situation abates and asks whether any security control action is needed and whether the plan worked, so it is the useful fourth phase. The other three all belong to handling the incident itself.",
          ms: "Tiga fasa itu ialah perancangan awal, triaj dan mengendalikan insiden; semakan semula berlaku selepas keadaan reda dan menanyakan sama ada tindakan kawalan keselamatan diperlukan dan sama ada pelan itu berkesan, jadi ia fasa keempat yang berguna. Tiga yang lain semuanya dalam pengendalian insiden."
        },
        diff: 2,
        topic: {
          zh: "事件响应计划的阶段",
          en: "Phases of incident response",
          ms: "Fasa tindak balas insiden"
        }
      },
      {
        id: "cs-07-q04",
        type: "mcq",
        q: {
          zh: "TCSEC 的六项要求之一要求：每个对象都必须关联一个标明其安全级别的标签，且每次请求访问时该标签都可供比较。这一项是什么？",
          en: "One of the six TCSEC requirements demands that every object be associated with a label indicating its security level, available for comparison each time access is requested. Which requirement is it?",
          ms: "Salah satu daripada enam keperluan TCSEC menuntut setiap objek dikaitkan dengan label yang menunjukkan aras keselamatannya dan tersedia untuk perbandingan setiap kali akses diminta. Keperluan manakah itu?"
        },
        opts: [
          {
            zh: "安全策略",
            en: "Security policy",
            ms: "Dasar keselamatan"
          },
          {
            zh: "标识",
            en: "Identification",
            ms: "Pengenalan"
          },
          {
            zh: "标记",
            en: "Marking",
            ms: "Penandaan"
          },
          {
            zh: "保证",
            en: "Assurance",
            ms: "Jaminan"
          }
        ],
        answer: 2,
        explain: {
          zh: "TCSEC 的六项要求是安全策略、标识、标记、问责、保证与持续保护。标识要求每个主体被唯一且可信地识别；标记要求每个对象带有安全级别标签并随时可供比较；问责要求保存影响安全的完整记录；保证要求安全机制的存在且可被评估；持续保护要求安全机制本身不被未授权更改。",
          en: "The six TCSEC requirements are security policy, identification, marking, accountability, assurance and continuous protection. Identification requires every subject to be uniquely and convincingly identified; marking requires every object to carry a security level label available at each access; accountability requires complete secure records; assurance requires enforceable, evaluable mechanisms; continuous protection guards the mechanisms themselves.",
          ms: "Enam keperluan TCSEC ialah dasar keselamatan, pengenalan, penandaan, akauntabiliti, jaminan dan perlindungan berterusan. Pengenalan menuntut setiap subjek dikenal pasti secara unik dan meyakinkan; penandaan menuntut setiap objek membawa label aras keselamatan yang tersedia pada setiap akses; akauntabiliti menuntut rekod lengkap; jaminan menuntut mekanisme yang boleh dikuatkuasakan dan dinilai; perlindungan berterusan melindungi mekanisme itu sendiri."
        },
        diff: 2,
        topic: {
          zh: "TCSEC 的六项要求",
          en: "The six TCSEC requirements",
          ms: "Enam keperluan TCSEC"
        }
      },
      {
        id: "cs-07-q05",
        type: "mcq",
        q: {
          zh: "一个只具备供电与制冷、可以在其中安装计算机系统并立即开始运行的场所，讲义称为什么？",
          en: "A facility that has power and cooling available and in which a computing system can be installed to begin immediate operation is called what?",
          ms: "Sesuatu kemudahan yang mempunyai bekalan kuasa dan penyejukan, dan di mana sistem komputer boleh dipasang untuk mula beroperasi serta-merta, dipanggil apa?"
        },
        opts: [
          {
            zh: "冷站点（cold site），又称空壳",
            en: "Cold site, also called a shell",
            ms: "Tapak sejuk, juga dipanggil cangkerang"
          },
          {
            zh: "热站点（hot site）",
            en: "Hot site",
            ms: "Tapak panas"
          },
          {
            zh: "温站点（warm site）",
            en: "Warm site",
            ms: "Tapak hangat"
          },
          {
            zh: "镜像站点（mirror site）",
            en: "Mirror site",
            ms: "Tapak cermin"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义把冷站点（又称空壳）定义为“已有供电与制冷、可在其中安装系统以立即开始运行”的场所；热站点则是已安装好系统、含外设、通信线路、供电甚至人员的可运行设施。温站点与镜像站点不是讲义给出的术语，不能与这两种混淆。",
          en: "The lecture defines a cold site, or shell, as a facility with power and cooling available in which a system can be installed to begin immediate operation, while a hot site is a computer facility with an installed, ready-to-run system including peripherals, telecommunications, power and even personnel. Warm site and mirror site are not terms used in the lecture.",
          ms: "Kuliah mentakrifkan tapak sejuk, atau cangkerang, sebagai kemudahan yang mempunyai bekalan kuasa dan penyejukan di mana sistem boleh dipasang untuk mula beroperasi serta-merta, manakala tapak panas ialah kemudahan dengan sistem terpasang dan sedia beroperasi termasuk periferal, telekomunikasi, kuasa dan juga kakitangan. Tapak hangat dan tapak cermin bukan istilah dalam kuliah."
        },
        diff: 2,
        topic: {
          zh: "冷站点与热站点",
          en: "Cold site versus hot site",
          ms: "Tapak sejuk berbanding tapak panas"
        }
      },
      {
        id: "cs-07-q06",
        type: "multi",
        q: {
          zh: "讲义说每份安全计划都必须处理七个问题。下列哪些在其中？（多选）",
          en: "The lecture says every security plan must address seven issues. Which of the following are among them? (choose all that apply)",
          ms: "Kuliah menyatakan setiap pelan keselamatan mesti menangani tujuh isu. Antara berikut, yang manakah termasuk di dalamnya? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "策略",
            en: "Policy",
            ms: "Dasar"
          },
          {
            zh: "当前状态",
            en: "Current state",
            ms: "Keadaan semasa"
          },
          {
            zh: "时间表",
            en: "Timetable",
            ms: "Jadual waktu"
          },
          {
            zh: "市场推广计划",
            en: "Marketing plan",
            ms: "Pelan pemasaran"
          },
          {
            zh: "硬件采购预算",
            en: "Hardware procurement budget",
            ms: "Bajet perolehan perkakasan"
          }
        ],
        answer: [
          0,
          1,
          2
        ],
        explain: {
          zh: "讲义列出的七个问题是：策略、当前状态、需求、建议的控制、问责（说明谁对每项安全活动负责）、时间表与持续关注。市场推广计划与硬件采购预算不在其中，安全计划关心的是目标、现状、需求、控制、责任与进度，而不是营销或采购预算。",
          en: "The seven issues are policy, current state, requirements, recommended controls, accountability for each security activity, timetable, and continuing attention. A marketing plan and a hardware procurement budget are not among them, since a security plan is about goals, status, requirements, controls, responsibility and schedule.",
          ms: "Tujuh isu itu ialah dasar, keadaan semasa, keperluan, kawalan yang disyorkan, akauntabiliti bagi setiap aktiviti keselamatan, jadual waktu dan perhatian berterusan. Pelan pemasaran dan bajet perolehan perkakasan bukan di antaranya, kerana pelan keselamatan berkaitan matlamat, status, keperluan, kawalan, tanggungjawab dan jadual."
        },
        diff: 2,
        topic: {
          zh: "安全计划的七项内容",
          en: "Seven issues of a security plan",
          ms: "Tujuh isu pelan keselamatan"
        }
      },
      {
        id: "cs-07-q07",
        type: "tf",
        q: {
          zh: "在风险应对策略中，“转移风险”是指接受风险、用现有资源控制它，并准备在损失发生时承受损失。",
          en: "Among risk-handling strategies, transferring the risk means accepting it, controlling it with available resources, and preparing to deal with the loss if it occurs.",
          ms: "Antara strategi menangani risiko, memindahkan risiko bermaksud menerimanya, mengawalnya dengan sumber yang ada, dan bersedia menghadapi kerugian jika ia berlaku."
        },
        answer: false,
        explain: {
          zh: "讲义区分三种策略：避免风险（改变安全或其他系统特性的需求）、转移风险（把风险分摊给其他系统、人员、组织或资产，或购买保险）、承担风险（接受它、用现有资源控制它，并准备承受损失）。题干描述的正是“承担风险”，而不是转移。",
          en: "The lecture distinguishes three strategies: avoiding the risk by changing requirements, transferring it by allocating it to other systems, people, organizations or assets or by buying insurance, and assuming it by accepting it, controlling it with available resources and preparing for the loss. The statement describes assuming, not transferring.",
          ms: "Kuliah membezakan tiga strategi: mengelakkan risiko dengan mengubah keperluan, memindahkan risiko dengan mengagihkannya kepada sistem, orang, organisasi atau aset lain atau dengan membeli insurans, dan menanggung risiko dengan menerimanya, mengawalnya dengan sumber yang ada serta bersedia menghadapi kerugian. Pernyataan ini menerangkan penanggungan, bukan pemindahan."
        },
        diff: 2,
        topic: {
          zh: "风险的三种应对策略",
          en: "Three risk strategies",
          ms: "Tiga strategi risiko"
        }
      },
      {
        id: "cs-07-q08",
        type: "fill",
        q: {
          zh: "只保存自上次备份以来被修改或新建的文件的备份方式，称为 ______ 备份。",
          en: "A backup that saves only the files that have been changed or created since the last backup is called a ______ backup.",
          ms: "Sandaran yang hanya menyimpan fail yang telah diubah atau dicipta sejak sandaran terakhir dipanggil sandaran ______."
        },
        answer: [
          "selective",
          "selective backup",
          "选择性备份",
          "sandaran terpilih"
        ],
        explain: {
          zh: "讲义把备份分为三类：完全备份（按周或按日定期进行，视信息或服务的关键程度而定）、轮换备份（保留最近几次，每次用最新的备份替换最旧的一份）与选择性备份（只保存上次备份之后被修改或新建的文件）。题干只保存变化过的文件，正是选择性备份。",
          en: "The lecture groups backups into complete backups, done regularly, weekly or daily depending on the criticality of the information or service; revolving backups, which keep the last several and replace the oldest with the newest; and selective backups, which save only files changed or created since the last backup. Saving only changed files is the selective backup.",
          ms: "Kuliah mengelompokkan sandaran kepada sandaran lengkap yang dilakukan secara berkala, mingguan atau harian mengikut kepentingan maklumat atau perkhidmatan; sandaran bergilir yang menyimpan beberapa sandaran terakhir dan menggantikan yang tertua dengan yang terbaharu; dan sandaran terpilih yang hanya menyimpan fail yang diubah atau dicipta sejak sandaran terakhir. Menyimpan fail yang berubah sahaja ialah sandaran terpilih."
        },
        diff: 1,
        topic: {
          zh: "备份的类型",
          en: "Types of backup",
          ms: "Jenis sandaran"
        }
      }
    ],
    "cs-08": [
      {
        id: "cs-08-q01",
        type: "mcq",
        q: {
          zh: "按讲义给出的美国版权期限，由机构（公司）持有的版权在作品出版后持续多少年？",
          en: "According to the U.S. copyright terms given in the lecture, a copyright held by an organization lasts how many years after publication?",
          ms: "Menurut tempoh hak cipta Amerika Syarikat dalam kuliah, hak cipta yang dipegang oleh sesebuah organisasi bertahan berapa tahun selepas penerbitan?"
        },
        opts: [
          {
            zh: "50 年",
            en: "50 years",
            ms: "50 tahun"
          },
          {
            zh: "70 年",
            en: "70 years",
            ms: "70 tahun"
          },
          {
            zh: "95 年",
            en: "95 years",
            ms: "95 tahun"
          },
          {
            zh: "19 年",
            en: "19 years",
            ms: "19 tahun"
          }
        ],
        answer: 2,
        explain: {
          zh: "讲义说美国版权现在为最后一位在世作者去世后 70 年，机构则为出版后 95 年；国际标准是最后一位作者去世后 50 年或出版后 50 年。因此机构持有的是 95 年。70 年是自然人作者的情形，50 年是国际标准，19 年是专利的保护期。",
          en: "The lecture states that a U.S. copyright now lasts 70 years beyond the death of the last surviving author, or 95 years after publication for organizations; the international standard is 50 years after the death of the last author or 50 years from publication. An organization therefore holds 95 years, while 70 fits individual authors, 50 fits the international standard, and 19 is the patent term.",
          ms: "Kuliah menyatakan hak cipta Amerika Syarikat kini bertahan 70 tahun selepas kematian pengarang terakhir yang masih hidup, atau 95 tahun selepas penerbitan bagi organisasi; piawaian antarabangsa ialah 50 tahun selepas kematian pengarang terakhir atau 50 tahun dari penerbitan. Organisasi memegang 95 tahun, manakala 70 tahun untuk pengarang individu, 50 tahun untuk piawaian antarabangsa, dan 19 tahun ialah tempoh paten."
        },
        diff: 2,
        topic: {
          zh: "版权的保护期限",
          en: "Duration of copyright",
          ms: "Tempoh hak cipta"
        }
      },
      {
        id: "cs-08-q02",
        type: "mcq",
        q: {
          zh: "版权保护的对象是什么？",
          en: "What does a copyright protect?",
          ms: "Apakah yang dilindungi oleh hak cipta?"
        },
        opts: [
          {
            zh: "思想本身",
            en: "The idea itself",
            ms: "Idea itu sendiri"
          },
          {
            zh: "思想的表达，即固定在有形介质中的表达",
            en: "The expression of an idea, once fixed in a tangible medium",
            ms: "Ekspresi idea, setelah ditetapkan dalam medium ketara"
          },
          {
            zh: "发明的工作方式",
            en: "The way an invention works",
            ms: "Cara sesuatu ciptaan berfungsi"
          },
          {
            zh: "秘密的竞争优势",
            en: "A secret competitive advantage",
            ms: "Kelebihan daya saing yang dirahsiakan"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义说版权保护的是思想的表达：思想是自由的，但一旦以有形介质表达出来就应受保护，作者获得复制并销售该表达的专有权。选项1恰是版权不保护的部分，选项3是专利保护的对象，选项4是商业秘密，三者都不是版权。",
          en: "The lecture says copyright protects the expression of ideas: ideas are free, but once expressed in a tangible medium they must be protected, and the author gains the exclusive right to make and sell copies. Option 1 is precisely what copyright does not cover, option 3 is what patents protect, and option 4 is a trade secret.",
          ms: "Kuliah menyatakan hak cipta melindungi ekspresi idea: idea itu bebas, tetapi apabila diekspresikan dalam medium ketara ia mesti dilindungi, dan pengarang memperoleh hak eksklusif untuk membuat dan menjual salinan. Pilihan 1 ialah apa yang tidak dilindungi hak cipta, pilihan 3 dilindungi paten, dan pilihan 4 ialah rahsia dagang."
        },
        diff: 1,
        topic: {
          zh: "版权的保护对象",
          en: "Object of copyright",
          ms: "Objek hak cipta"
        }
      },
      {
        id: "cs-08-q03",
        type: "mcq",
        q: {
          zh: "与专利、版权不同，商业秘密保护在什么情况下会消失？",
          en: "Unlike patent and copyright, when does trade secret protection disappear?",
          ms: "Berbeza daripada paten dan hak cipta, bilakah perlindungan rahsia dagang hilang?"
        },
        opts: [
          {
            zh: "保护期届满之后",
            en: "After the term of protection expires",
            ms: "Selepas tempoh perlindungan tamat"
          },
          {
            zh: "程序或代码被解码、还原出来之后",
            en: "After the program or code is decoded",
            ms: "Selepas program atau kod dinyahsulit"
          },
          {
            zh: "产品公开发布之后",
            en: "After the product is publicly released",
            ms: "Selepas produk dikeluarkan kepada umum"
          },
          {
            zh: "员工签署保密声明之后",
            en: "After employees sign a non-disclosure statement",
            ms: "Selepas pekerja menandatangani perakuan kerahsiaan"
          }
        ],
        answer: 1,
        explain: {
          zh: "讲义在商业秘密的执行问题中指出：如果程序或代码被解码，商业秘密保护就消失了，因此还需要额外的保障措施，例如控制文件访问、只保留必要的敏感文档副本。商业秘密没有注册期限，可以无限期持续，故选项1错误；商业秘密恰恰允许分发可执行程序而隐藏设计，故选项3错误；选项4是保护措施，不是保护消失的条件。",
          en: "On enforcement, the lecture notes that if the program or code is decoded, trade secret protection disappears, so additional safeguards such as controlling file access and keeping only necessary copies are needed. A trade secret has no registration term and can last indefinitely, so option 1 fails; it also allows distributing the executable while hiding the design, so option 3 fails; option 4 is a protective measure, not a condition for losing protection.",
          ms: "Mengenai penguatkuasaan, kuliah menyatakan jika program atau kod dinyahsulit, perlindungan rahsia dagang hilang, jadi langkah tambahan seperti mengawal akses fail dan menyimpan hanya salinan yang perlu. Rahsia dagang tiada tempoh pendaftaran dan boleh kekal tanpa had, jadi pilihan 1 gagal; ia juga membenarkan pengedaran program boleh laksana sambil menyembunyikan reka bentuk, jadi pilihan 3 gagal; pilihan 4 ialah langkah perlindungan, bukan syarat kehilangan perlindungan."
        },
        diff: 2,
        topic: {
          zh: "商业秘密的失效条件",
          en: "When trade secrets fail",
          ms: "Bila rahsia dagang gagal"
        }
      },
      {
        id: "cs-08-q04",
        type: "mcq",
        q: {
          zh: "在“许可”（license）模式下，开发者与公司之间的关系是怎样的？",
          en: "Under a licence arrangement, what is the relationship between the developer and the company?",
          ms: "Di bawah pengaturan lesen, apakah hubungan antara pembangun dan syarikat?"
        },
        opts: [
          {
            zh: "开发者保留软件的完整所有权，只授予公司使用该程序的权利",
            en: "The developer retains full ownership of the software and grants the company a licence to use the program",
            ms: "Pembangun mengekalkan pemilikan penuh perisian dan memberikan syarikat lesen untuk menggunakan program itu"
          },
          {
            zh: "公司被视为作者，开发者不再享有任何权利",
            en: "The company is treated as the author and the developer keeps no rights",
            ms: "Syarikat dianggap pengarang dan pembangun tidak mengekalkan sebarang hak"
          },
          {
            zh: "开发者把版权与专利权一并转让给公司",
            en: "The developer assigns both copyright and patent rights to the company",
            ms: "Pembangun memindahkan hak cipta dan hak paten kepada syarikat"
          },
          {
            zh: "开发者与公司共同拥有源代码的专利权",
            en: "The developer and the company jointly own the patent on the source code",
            ms: "Pembangun dan syarikat memiliki paten kod sumber secara bersama"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义把许可说成职务作品之外的另一种选择：开发者开发并保留软件的完整所有权，只授予公司使用许可；许可可以限定时间、份数、地点、机器与使用时段。选项2、3描述的是“职务作品”的效果，即雇主被视为作者并取得权利；选项4与讲义不符，因为许可并不转移专利权。",
          en: "The lecture presents licensing as an alternative to work for hire: the developer develops and retains full ownership and grants the company a licence to use the program, which may be limited by period, number of copies, location, machine or time. Options 2 and 3 describe work for hire, where the employer is treated as author; option 4 is wrong because a licence transfers no patent.",
          ms: "Kuliah membentangkan lesen sebagai alternatif kepada kerja atas upah: pembangun membangun dan mengekalkan pemilikan penuh serta memberikan syarikat lesen menggunakan program, yang boleh dihadkan mengikut tempoh, bilangan salinan, lokasi, mesin atau masa. Pilihan 2 dan 3 menerangkan kerja atas upah, iaitu majikan dianggap pengarang; pilihan 4 salah kerana lesen tidak memindahkan paten."
        },
        diff: 2,
        topic: {
          zh: "软件许可",
          en: "Software licences",
          ms: "Lesen perisian"
        }
      },
      {
        id: "cs-08-q05",
        type: "mcq",
        q: {
          zh: "按讲义，美国《计算机欺诈与滥用法》（CFAA）规定的处罚范围是？",
          en: "According to the lecture, what penalties does the U.S. Computer Fraud and Abuse Act provide?",
          ms: "Menurut kuliah, apakah hukuman yang diperuntukkan oleh Akta Penipuan dan Penyalahgunaan Komputer Amerika Syarikat?"
        },
        opts: [
          {
            zh: "5,000 至 100,000 美元，或犯罪所得价值的两倍（取较高者），并可处 1 至 20 年监禁",
            en: "5,000 to 100,000 dollars, or twice the value obtained by the offence, whichever is higher, and imprisonment from 1 to 20 years",
            ms: "5,000 hingga 100,000 dolar, atau dua kali nilai yang diperoleh daripada kesalahan itu, yang mana lebih tinggi, dan penjara dari 1 hingga 20 tahun"
          },
          {
            zh: "1,000 至 10,000 美元，并可处 6 个月至 5 年监禁",
            en: "1,000 to 10,000 dollars, with imprisonment from 6 months to 5 years",
            ms: "1,000 hingga 10,000 dolar, dengan penjara dari 6 bulan hingga 5 tahun"
          },
          {
            zh: "最高 1,000,000 美元，并可处 30 年监禁",
            en: "Up to 1,000,000 dollars, with up to 30 years imprisonment",
            ms: "Sehingga 1,000,000 dolar, dengan penjara sehingga 30 tahun"
          },
          {
            zh: "只处罚金，不设监禁",
            en: "A fine only, with no imprisonment",
            ms: "Denda sahaja, tanpa penjara"
          }
        ],
        answer: 0,
        explain: {
          zh: "讲义列出 CFAA 的处罚为 5,000 至 100,000 美元或犯罪所得价值的两倍（以较高者为准），并可处 1 年至 20 年监禁，或两者并罚。其余选项的金额与刑期都超出或低于这一范围，其中选项4忽略了该法同时规定监禁。",
          en: "The lecture gives penalties of 5,000 to 100,000 dollars or twice the value obtained by the offence, whichever is higher, plus imprisonment from 1 to 20 years, or both. The other options fall outside that range, and option 4 ignores the imprisonment the Act also provides.",
          ms: "Kuliah menyatakan hukuman 5,000 hingga 100,000 dolar atau dua kali nilai yang diperoleh daripada kesalahan itu, yang mana lebih tinggi, serta penjara dari 1 hingga 20 tahun, atau kedua-duanya. Pilihan lain berada di luar julat itu, dan pilihan 4 mengabaikan hukuman penjara yang juga diperuntukkan."
        },
        diff: 2,
        topic: {
          zh: "CFAA 的处罚",
          en: "Penalties under the CFAA",
          ms: "Hukuman di bawah CFAA"
        }
      },
      {
        id: "cs-08-q06",
        type: "multi",
        q: {
          zh: "讲义列举了计算机犯罪难以起诉的原因。下列哪些在其中？（多选）",
          en: "The lecture lists reasons why computer crime is hard to prosecute. Which of the following are among them? (choose all that apply)",
          ms: "Kuliah menyenaraikan sebab mengapa jenayah komputer sukar didakwa. Antara berikut, yang manakah termasuk di dalamnya? (pilih semua yang berkenaan)"
        },
        opts: [
          {
            zh: "缺乏理解：法院、律师、警察与陪审员不一定懂计算机",
            en: "Lack of understanding: courts, lawyers, police and jurors may not understand computers",
            ms: "Kurang kefahaman: mahkamah, peguam, polis dan juri mungkin tidak memahami komputer"
          },
          {
            zh: "缺乏物证：执法与法院长期依赖指纹等有形证据",
            en: "Lack of physical evidence: police and courts have long relied on tangible evidence such as fingerprints",
            ms: "Kekurangan bukti fizikal: polis dan mahkamah lama bergantung pada bukti ketara seperti cap jari"
          },
          {
            zh: "对资产缺乏认定：计算机时间算不算资产",
            en: "Lack of recognition of assets: is computer time an asset",
            ms: "Kekurangan pengiktirafan aset: adakah masa komputer satu aset"
          },
          {
            zh: "物证过多，取证极为容易",
            en: "There is too much physical evidence, so gathering it is very easy",
            ms: "Terlalu banyak bukti fizikal, jadi mengumpulnya sangat mudah"
          },
          {
            zh: "案件过于简单，陪审员一看就懂",
            en: "The cases are so simple that jurors grasp them at once",
            ms: "Kes terlalu mudah sehingga juri terus memahaminya"
          }
        ],
        answer: [
          0,
          1,
          2
        ],
        explain: {
          zh: "讲义列出六点：缺乏理解、缺乏物证、对资产缺乏认定、缺乏政治影响、案件复杂、被告年龄偏低。它强调的正是取证困难与理解门槛，而不是物证过多或案件简单，因此后两项与讲义相反。",
          en: "The lecture lists six reasons: lack of understanding, lack of physical evidence, lack of recognition of assets, lack of political impact, complexity of the case, and the young age of many defendants. It stresses the difficulty of evidence and the knowledge gap, not an abundance of evidence or simple cases, so the last two options reverse it.",
          ms: "Kuliah menyenaraikan enam sebab: kurang kefahaman, kekurangan bukti fizikal, kekurangan pengiktirafan aset, kurang kesan politik, kerumitan kes, dan umur defendan yang muda. Ia menekankan kesukaran bukti dan jurang pengetahuan, bukan bukti yang melimpah atau kes yang mudah, jadi dua pilihan terakhir menterbalikkannya."
        },
        diff: 2,
        topic: {
          zh: "计算机犯罪难以起诉的原因",
          en: "Why computer crime is hard to prosecute",
          ms: "Mengapa jenayah komputer sukar didakwa"
        }
      },
      {
        id: "cs-08-q07",
        type: "tf",
        q: {
          zh: "侵权行为（tort）是指因违反制定法或违反合同而产生的损害。",
          en: "A tort is a harm that arises from the violation of a statute or from a breach of a contract.",
          ms: "Tort ialah kerosakan yang timbul daripada pelanggaran statut atau kemungkiran kontrak."
        },
        answer: false,
        explain: {
          zh: "讲义的定义正好相反：侵权行为是既不来自违反制定法、也不来自违反合同，而是违背累积判例所形成的规则的损害；侵权法不成文，通过成为先例的法院判决演进，欺诈是常见例子。违反制定法由刑法或民事法处理，违反合同由合同法处理，都与侵权不同。",
          en: "The definition is the reverse: a tort is harm that occurs neither from violating a statute nor from breaching a contract, but from being contrary to the accumulated body of precedents. Tort law is unwritten and evolves through court decisions that become precedents, with fraud a common example. Statutes fall under criminal or civil law and breaches of contract under contract law.",
          ms: "Takrifnya sebaliknya: tort ialah kerosakan yang tidak timbul daripada pelanggaran statut mahupun kemungkiran kontrak, tetapi daripada bertentangan dengan himpunan preseden. Undang-undang tort tidak bertulis dan berkembang melalui keputusan mahkamah yang menjadi preseden, dengan penipuan sebagai contoh biasa. Pelanggaran statut di bawah undang-undang jenayah atau sivil dan kemungkiran kontrak di bawah undang-undang kontrak."
        },
        diff: 2,
        topic: {
          zh: "侵权法的定义",
          en: "Definition of tort law",
          ms: "Takrif undang-undang tort"
        }
      },
      {
        id: "cs-08-q08",
        type: "fill",
        q: {
          zh: "一个合同包含三个要素：要约、承诺与 ______。",
          en: "A contract involves three things: an offer, an acceptance and a ______.",
          ms: "Satu kontrak melibatkan tiga perkara: tawaran, penerimaan dan ______."
        },
        answer: [
          "consideration",
          "对价",
          "balasan",
          "pertimbangan"
        ],
        explain: {
          zh: "讲义说合同包含要约、承诺与对价（consideration）三个要素：一方提出要约，另一方可接受、拒绝或置之不理，合同是自愿的。合同法填补刑法、民事法与侵权法之间的空白，最常见的救济是金钱赔偿。",
          en: "The lecture says a contract involves an offer, an acceptance and a consideration: one party makes an offer, the second may accept, reject or ignore it, and the contract is voluntary. Contract law fills the voids among criminal, civil and tort law, and its most common remedy is money.",
          ms: "Kuliah menyatakan kontrak melibatkan tawaran, penerimaan dan balasan (consideration): satu pihak membuat tawaran, pihak kedua boleh menerima, menolak atau mengabaikannya, dan kontrak itu bersifat sukarela. Undang-undang kontrak mengisi ruang antara undang-undang jenayah, sivil dan tort, dan remedi paling biasa ialah wang."
        },
        diff: 2,
        topic: {
          zh: "合同的三个要素",
          en: "Three elements of a contract",
          ms: "Tiga unsur kontrak"
        }
      }
    ]
  }
};
