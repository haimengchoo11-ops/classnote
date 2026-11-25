window.CN_DATA = window.CN_DATA || {};
window.CN_DATA["cs"] = {
  id: "cs",
  code: "DDWC 3343",
  name: {
    zh: "计算机安全",
    en: "Computer Security",
    ms: "Keselamatan Komputer"
  },
  desc: {
    zh: "本课程系统讲解计算机安全的原理与实践：先建立安全的基本概念与威胁模型，再依次学习密码学、程序安全、操作系统安全、数据库安全与网络安全，最后讨论安全管理、风险分析、法律与伦理。课程强调用机密性、完整性、可用性这三条主线去分析真实系统，并依据风险选择合适的控制措施。",
    en: "This course covers the principles and practice of computer security: it first builds the basic concepts and threat models, then works through cryptography, program security, operating system security, database security and network security, and closes with security administration, risk analysis, law and ethics. Students learn to analyse real systems along the three lines of confidentiality, integrity and availability and to choose suitable controls on the basis of risk.",
    ms: "Kursus ini merangkumi prinsip dan amalan keselamatan komputer: ia membina konsep asas dan model ancaman terlebih dahulu, kemudian membincangkan kriptografi, keselamatan program, keselamatan sistem pengendalian, keselamatan pangkalan data dan keselamatan rangkaian, dan diakhiri dengan pentadbiran keselamatan, analisis risiko, undang-undang serta etika. Pelajar belajar menganalisis sistem sebenar mengikut tiga garis utama iaitu kerahsiaan, integriti dan ketersediaan serta memilih kawalan yang sesuai berdasarkan risiko."
  },
  icon: "🔐",
  color: "#e0533d",
  chapters: [
    {
      id: "cs-01",
      num: 1,
      title: {
        zh: "计算机安全导论",
        en: "Introduction to Computer Security",
        ms: "Pengenalan kepada Keselamatan Komputer"
      },
      file: "cs/CHAPTER 1 - INTRODUCTION.pdf",
      pages: 51,
      summary: {
        zh: "本章是全课的入门，先通过 A、B、E 三方通信的典型场景说明安全到底要解决什么问题：E 偷看、篡改、冒充、延迟、抵赖、做流量分析或切断通信。接着定义安全的基本词汇：资产、暴露、脆弱性、威胁、攻击与控制，并把威胁分成中断、截取、修改、伪造四类。本章重点讲解安全目标（机密性、完整性、可用性，以及问责、不可否认、认证、访问控制），分析威胁来源与犯罪者类型，最后给出实现安全的三个层面——策略（做什么）、机制（怎么做）与保证（做得多好），以及预防、检测、反应三种安全策略和五种防御手段。",
        en: "This opening chapter uses the classic A, B and E communication scenarios to show what security really has to solve: E reading, altering, impersonating, delaying, denying, traffic-analysing or blocking the communication. It then defines the basic vocabulary of security - asset, exposure, vulnerability, threat, attack and control - and classifies threats into interruption, interception, modification and fabrication. The chapter explains the security goals (confidentiality, integrity and availability, plus accountability, non-repudiation, authentication and access control), examines the sources of threats and the types of computer criminals, and closes with the three levels of achieving security - policy (what), mechanism (how) and assurance (how well) - the prevention, detection and reaction strategies, and the five methods of defence.",
        ms: "Bab pembuka ini menggunakan senario komunikasi A, B dan E yang klasik untuk menunjukkan apakah sebenarnya yang perlu diselesaikan oleh keselamatan: E membaca, mengubah, menyamar, melambatkan, menafikan, menganalisis trafik atau menyekat komunikasi tersebut. Bab ini kemudian mentakrifkan istilah asas keselamatan - aset, pendedahan, kerentanan, ancaman, serangan dan kawalan - serta mengelaskan ancaman kepada gangguan, pemintasan, pengubahsuaian dan fabrikasi. Bab ini menerangkan matlamat keselamatan (kerahsiaan, integriti dan ketersediaan, serta akauntabiliti, penafian tak boleh disangkal, pengesahan dan kawalan akses), meneliti punca ancaman dan jenis penjenayah komputer, dan diakhiri dengan tiga aras mencapai keselamatan - dasar (apa), mekanisme (bagaimana) dan jaminan (seberapa baik) - strategi pencegahan, pengesanan dan tindak balas, serta lima kaedah pertahanan."
      },
      points: [
        {
          zh: "“安全”没有唯一的标准定义，要先确定什么叫做“安全的系统”、要防哪些威胁，才能判断一个计算机系统是否安全，并据此选择相应的防护措施或程序。安全术语构成一条因果链：暴露是可能的损失或危害，脆弱性是系统中可被利用的弱点，威胁是造成损失的可能性，攻击是威胁的实现，而控制则是消除或降低脆弱性的防护措施。",
          en: "There is no single definition of security: you must first decide what counts as a secure computer system and which threats are of concern before you can judge whether a system is secure and choose the protective measures or procedures to use. Security terminology forms a chain of cause and effect: exposure is a form of possible loss or harm, a vulnerability is a weakness in the system that can be exploited, a threat is the potential for loss or harm, an attack is the realisation of a threat, and a control is the protective measure that removes or reduces a vulnerability.",
          ms: "Tiada satu takrifan tunggal bagi keselamatan: kita perlu terlebih dahulu menentukan apa yang dianggap sebagai sistem komputer yang selamat dan ancaman mana yang menjadi perhatian sebelum boleh menilai keselamatan sesuatu sistem dan memilih langkah atau prosedur perlindungan yang sesuai. Istilah keselamatan membentuk rantaian sebab dan akibat: pendedahan ialah bentuk kemungkinan kehilangan atau kerosakan, kerentanan ialah kelemahan dalam sistem yang boleh dieksploitasi, ancaman ialah potensi berlakunya kehilangan atau kerosakan, serangan ialah realisasi ancaman, manakala kawalan ialah langkah perlindungan yang menghapuskan atau mengurangkan kerentanan."
        },
        {
          zh: "威胁分为四类：中断使资产丢失、不可用或不可用（如拒绝服务攻击），截取是未授权方获得资产访问（如窃听、非法复制），修改是既访问又篡改资产（如改数据库的值、改传输中的数据），伪造是插入虚假数据（如伪造交易记录）。",
          en: "Threats fall into four classes: interruption makes an asset lost, unavailable or unusable (for example a denial of service attack), interception means an unauthorised party gains access to an asset (wiretapping, illicit copying), modification means the party not only accesses but tampers with an asset (changing database values, altering transmitted data), and fabrication means inserting false or spurious data such as bogus transactions.",
          ms: "Ancaman terbahagi kepada empat kelas: gangguan menyebabkan aset hilang, tidak tersedia atau tidak boleh digunakan (contohnya serangan penafian perkhidmatan), pemintasan berlaku apabila pihak tidak dibenarkan memperoleh akses kepada aset (penyadapan wayar, penyalinan haram), pengubahsuaian bermaksud pihak tersebut bukan sahaja mengakses malah mengusik aset (mengubah nilai dalam pangkalan data, mengubah data yang dihantar), manakala fabrikasi bermaksud memasukkan data palsu seperti transaksi palsu."
        },
        {
          zh: "计算系统的脆弱性可以按资产类型划分：硬件可能被毁坏、盗走、替换或被改造（如键盘窃听、信息泄漏）；软件可能被删除、盗版或被改动而仍能运行（逻辑炸弹、特洛伊木马、病毒、陷阱门）；数据可能被销毁、窃取、篡改或伪造。",
          en: "Vulnerabilities of a computing system can be classified by asset type: hardware may be destroyed, stolen, substituted or altered but still functioning (keystroke capture, information leaks); software may be destroyed, pirated or altered yet still running (logic bomb, Trojan horse, virus, trapdoor); and data may be destroyed, stolen, altered or fabricated.",
          ms: "Kerentanan sistem pengkomputeran boleh dikelaskan mengikut jenis aset: perkakasan boleh dimusnahkan, dicuri, diganti atau diubah tetapi masih berfungsi (penangkapan ketukan kekunci, kebocoran maklumat); perisian boleh dimusnahkan, dicetak rompak atau diubah namun masih berjalan (bom logik, kuda Troy, virus, pintu perangkap); manakala data boleh dimusnahkan, dicuri, diubah atau difabrikasi."
        },
        {
          zh: "安全的核心目标是机密性、完整性和可用性：机密性要求资产只被授权方访问（访问不限于读取，还包括查看、打印甚至知道该资产存在）；完整性要求资产只能由授权方或以授权方式修改；可用性要求资产在适当的时候能被授权方访问，其反面就是拒绝服务。",
          en: "The core security goals are confidentiality, integrity and availability: confidentiality ensures that assets are accessed only by authorised parties (access includes not just reading but viewing, printing, or even knowing that the asset exists); integrity ensures that assets can be modified only by authorised parties or only in authorised ways; availability ensures that assets are accessible to authorised parties at appropriate times, and its opposite is denial of service.",
          ms: "Matlamat teras keselamatan ialah kerahsiaan, integriti dan ketersediaan: kerahsiaan memastikan aset hanya diakses oleh pihak yang diberi kuasa (akses bukan sekadar membaca, malah melihat, mencetak atau mengetahui kewujudan aset itu); integriti memastikan aset hanya boleh diubah oleh pihak yang diberi kuasa atau dengan cara yang dibenarkan; ketersediaan memastikan aset boleh diakses oleh pihak yang diberi kuasa pada masa yang sesuai, dan lawannya ialah penafian perkhidmatan."
        },
        {
          zh: "除三大目标外还有四项重要安全服务：问责把系统中的行为与责任对应起来，不可否认使发送方无法否认曾发出消息，认证让接收方确认发送者身份并验证消息确实来自声称的发送者，访问控制则规定谁能以何种方式（读、写、执行）访问哪个数据项，其中主体是人或进程、客体是数据项、访问模式是读/写/执行、授权规则是策略。",
          en: "Beyond the three main goals there are four further security services: accountability maps an action in a system to responsibility for that action, non-repudiation prevents the sender from later denying that the message was sent, authentication lets the recipient identify the sender and verify that the purported sender really did send the message, and access control specifies who may access what, where a subject is a person, process or program, an object is the data item, an access mode is the kind of access such as read, write or execute, and the authorisation is the policy.",
          ms: "Selain tiga matlamat utama, terdapat empat perkhidmatan keselamatan penting yang lain: akauntabiliti memetakan tindakan dalam sistem kepada tanggungjawab atas tindakan itu, penafian tak boleh disangkal menghalang pengirim daripada menafikan penghantaran mesej, pengesahan membolehkan penerima mengenal pasti pengirim dan mengesahkan bahawa pengirim yang didakwa benar-benar menghantar mesej itu, manakala kawalan akses menetapkan siapa boleh mengakses apa, dengan subjek ialah orang, proses atau program, objek ialah item data, mod akses ialah jenis akses seperti baca, tulis atau laksana, dan kebenaran itu ialah dasar."
        },
        {
          zh: "威胁来源有统计规律：约 55% 来自人为错误，约 10% 来自心怀不满的员工、10% 来自不诚实的员工、10% 来自外部入侵者，其余是火灾、水灾等灾害；威胁类别可排序为内部人的错误与疏忽、自然/人为/机器灾害、不诚实内部人、心怀不满的内部人和外部人。",
          en: "Threat sources follow a statistical pattern: about 55 per cent come from human error, about 10 per cent from disgruntled employees, 10 per cent from dishonest employees and 10 per cent from outsider access, with fire, flood and similar disasters making up the rest; the classes of threat can be ranked as errors and omissions by insiders, natural, man-made and machine disasters, dishonest insiders, disgruntled insiders and outsiders.",
          ms: "Punca ancaman mengikut pola statistik: kira-kira 55 peratus berpunca daripada kesilapan manusia, kira-kira 10 peratus daripada pekerja yang tidak berpuas hati, 10 peratus daripada pekerja tidak jujur dan 10 peratus daripada akses orang luar, manakala selebihnya ialah kebakaran, banjir dan bencana seumpamanya; kelas ancaman boleh disusun sebagai kesilapan dan peninggalan orang dalam, bencana semula jadi, buatan manusia dan mesin, orang dalam yang tidak jujur, orang dalam yang tidak berpuas hati, dan orang luar."
        },
        {
          zh: "实施计算机犯罪的人分三类：业余者人数最多，他们只是普通用户，偶然发现安全系统的弱点；破解者（cracker）多为学生，动机是挑战与炫耀；职业罪犯最危险，以获利为目的、手段专业。",
          en: "People involved in computer crime fall into three groups: amateurs are the most numerous, ordinary users who simply observe a weakness in the security system; crackers are mostly students motivated by the challenge of accessing computing facilities they are not authorised to use; and career criminals are the most dangerous because they act professionally for profit.",
          ms: "Orang yang terlibat dalam jenayah komputer terbahagi kepada tiga kumpulan: amatur paling ramai, iaitu pengguna biasa yang sekadar ternampak kelemahan dalam sistem keselamatan; pemecah (cracker) kebanyakannya pelajar yang bermotifkan cabaran untuk mengakses kemudahan pengkomputeran yang tidak dibenarkan; manakala penjenayah kerjaya paling berbahaya kerana bertindak secara profesional untuk keuntungan."
        },
        {
          zh: "实现安全要回答三个问题：策略（Policy）规定做什么，即规则、法律与规章；机制（Mechanism）规定怎么做，即用于检测、预防或从攻击中恢复的手段；保证（Assurance）说明做得多好，即系统符合其功能安全规范、且不执行会危害安全的非预期功能的可信程度。",
          en: "Achieving security means answering three questions: policy says what - the rules, laws and regulations; mechanism says how - a mechanism designed to detect, prevent or recover from a security attack; and assurance says how well - the level of trust that a system conforms to its functional security specification and does not perform unintended functions that compromise security.",
          ms: "Mencapai keselamatan bermakna menjawab tiga soalan: dasar menetapkan apa - iaitu peraturan, undang-undang dan regulasi; mekanisme menetapkan bagaimana - iaitu mekanisme yang direka untuk mengesan, mencegah atau pulih daripada serangan keselamatan; manakala jaminan menjelaskan seberapa baik - tahap kepercayaan bahawa sistem mematuhi spesifikasi keselamatan fungsinya dan tidak melaksanakan fungsi tidak dijangka yang menjejaskan keselamatan."
        },
        {
          zh: "安全策略有三种基本策略与五种防御手段：预防、检测、反应（可用私人住宅的门锁、防盗铃、报警来类比，也可用于电子商务）；防御手段包括加密、软件控制、硬件控制、政策与程序、物理控制，其中加密被认为是最强有力的工具，但不能解决所有问题。",
          en: "There are three basic security strategies and five methods of defence: prevention, detection and reaction, illustrated by locks, burglar alarms and calling the police for private property and also applicable to e-commerce; the methods of defence are encryption, software controls, hardware controls, policies and procedures, and physical controls, with encryption regarded as the most powerful tool but one that does not solve every problem.",
          ms: "Terdapat tiga strategi keselamatan asas dan lima kaedah pertahanan: pencegahan, pengesanan dan tindak balas, yang diumpamakan dengan kunci pintu, penggera kecurian dan menghubungi polis bagi harta persendirian serta turut terpakai dalam e-dagang; kaedah pertahanan pula ialah penyulitan, kawalan perisian, kawalan perkakasan, dasar dan prosedur, serta kawalan fizikal, dengan penyulitan dianggap alat paling berkuasa tetapi tidak menyelesaikan semua masalah."
        },
        {
          zh: "“通过隐蔽实现安全”（security through obscurity）认为只要外人不知道内部机制系统就安全，例如把口令藏在二进制文件或脚本里；NIST 明确反对这种做法，指出系统安全不应依赖实现或其组件的保密性，它只能作为纵深防御的一环，且不能替代安全设计。",
          en: "Security through obscurity assumes that a system is secure as long as nobody outside the implementation group can find out anything about its internal mechanisms, for example hiding account passwords in binary files or scripts; NIST explicitly recommends against it, stating that system security should not depend on the secrecy of the implementation or its components, so it can only serve as one layer of defence in depth and never replaces secure design.",
          ms: "Keselamatan melalui kekaburan mengandaikan sesebuah sistem selamat selagi tiada pihak luar mengetahui apa-apa tentang mekanisme dalamannya, contohnya menyembunyikan kata laluan akaun dalam fail binari atau skrip; NIST secara jelas menyarankan agar ia tidak digunakan, dengan menyatakan keselamatan sistem tidak sepatutnya bergantung pada kerahsiaan pelaksanaan atau komponennya, jadi ia hanya boleh menjadi satu lapisan pertahanan berlapis dan tidak pernah menggantikan reka bentuk yang selamat."
        }
      ],
      terms: [
        {
          en: "Asset",
          zh: "资产",
          ms: "Aset",
          def: {
            zh: "计算机系统中需要保护的对象，包括硬件、软件、数据和人员。",
            en: "Anything of value in a computer system that needs protection: hardware, software, data and people.",
            ms: "Apa-apa yang bernilai dalam sistem komputer yang perlu dilindungi: perkakasan, perisian, data dan manusia."
          }
        },
        {
          en: "Exposure",
          zh: "暴露",
          ms: "Pendedahan",
          def: {
            zh: "一种可能发生的损失或危害，是尚未被具体利用的风险状态。",
            en: "A form of possible loss or harm, a state of risk that has not yet been realised by an attacker.",
            ms: "Satu bentuk kemungkinan kehilangan atau kerosakan, iaitu keadaan risiko yang belum direalisasikan oleh penyerang."
          }
        },
        {
          en: "Vulnerability",
          zh: "脆弱性",
          ms: "Kerentanan",
          def: {
            zh: "系统中存在的弱点，可能被利用而造成损失或危害。",
            en: "A weakness in the system that might be exploited to cause loss or harm.",
            ms: "Kelemahan dalam sistem yang mungkin dieksploitasi untuk menyebabkan kehilangan atau kerosakan."
          }
        },
        {
          en: "Threat",
          zh: "威胁",
          ms: "Ancaman",
          def: {
            zh: "造成损失或危害的可能性，来源包括人为攻击、自然灾害和错误。",
            en: "The potential for loss or harm, arising from human attacks, natural disasters or errors.",
            ms: "Potensi berlakunya kehilangan atau kerosakan, yang berpunca daripada serangan manusia, bencana alam atau kesilapan."
          }
        },
        {
          en: "Attack",
          zh: "攻击",
          ms: "Serangan",
          def: {
            zh: "威胁的实际发生，即有人真正利用了系统的弱点。",
            en: "The realisation of a threat, when a weakness is actually exploited.",
            ms: "Realisasi sesuatu ancaman, iaitu apabila kelemahan benar-benar dieksploitasi."
          }
        },
        {
          en: "Control",
          zh: "控制（防护措施）",
          ms: "Kawalan",
          def: {
            zh: "为消除或降低脆弱性而采取的防护措施、动作或程序。",
            en: "A protective measure, action or procedure that removes or reduces a vulnerability.",
            ms: "Langkah, tindakan atau prosedur perlindungan yang menghapuskan atau mengurangkan kerentanan."
          }
        },
        {
          en: "Interruption",
          zh: "中断",
          ms: "Gangguan",
          def: {
            zh: "使系统的资产丢失、不可用或不可用，例如拒绝服务攻击和恶意破坏硬件。",
            en: "An asset becomes lost, unavailable or unusable, for example a denial of service attack or malicious destruction of hardware.",
            ms: "Aset menjadi hilang, tidak tersedia atau tidak boleh digunakan, contohnya serangan penafian perkhidmatan atau pemusnahan perkakasan secara berniat jahat."
          }
        },
        {
          en: "Interception",
          zh: "截取",
          ms: "Pemintasan",
          def: {
            zh: "未授权方获得对资产的访问，例如窃听网络数据或非法复制程序与数据文件。",
            en: "An unauthorised party gains access to an asset, for example wiretapping data in a network or illicitly copying programs and data files.",
            ms: "Pihak tidak dibenarkan memperoleh akses kepada aset, contohnya menyadap data dalam rangkaian atau menyalin program dan fail data secara haram."
          }
        },
        {
          en: "Modification",
          zh: "修改",
          ms: "Pengubahsuaian",
          def: {
            zh: "未授权方不仅访问而且篡改资产，例如改动数据库的值或修改传输中的数据。",
            en: "An unauthorised party not only accesses but tampers with an asset, for example changing values in a database or modifying data being transmitted.",
            ms: "Pihak tidak dibenarkan bukan sahaja mengakses malah mengusik aset, contohnya mengubah nilai dalam pangkalan data atau mengubah data yang sedang dihantar."
          }
        },
        {
          en: "Fabrication",
          zh: "伪造",
          ms: "Fabrikasi",
          def: {
            zh: "未授权方在系统中制造虚假对象，例如插入伪造的交易或向数据库添加记录。",
            en: "An unauthorised party creates counterfeit objects in a system, for example inserting spurious transactions or adding records to a database.",
            ms: "Pihak tidak dibenarkan mencipta objek palsu dalam sistem, contohnya memasukkan transaksi palsu atau menambah rekod ke dalam pangkalan data."
          }
        },
        {
          en: "Confidentiality",
          zh: "机密性",
          ms: "Kerahsiaan",
          def: {
            zh: "保证计算机相关资产只被授权方访问，也叫保密性或隐私性，访问不仅指读取，还包括查看、打印甚至知道资产存在。",
            en: "The assurance that computer-related assets are accessed only by authorised parties; also called secrecy or privacy, where access includes viewing, printing or even knowing that the asset exists.",
            ms: "Jaminan bahawa aset berkaitan komputer hanya diakses oleh pihak yang diberi kuasa; turut dipanggil kerahsiaan atau privasi, dengan akses termasuk melihat, mencetak atau sekadar mengetahui kewujudan aset."
          }
        },
        {
          en: "Integrity",
          zh: "完整性",
          ms: "Integriti",
          def: {
            zh: "资产只能由授权方或以授权方式修改，修改包括写入、更改、改变状态、删除和创建。",
            en: "Assets can be modified only by authorised parties or only in authorised ways, where modification includes writing, changing, changing status, deleting and creating.",
            ms: "Aset hanya boleh diubah oleh pihak yang diberi kuasa atau dengan cara yang dibenarkan, dengan pengubahsuaian termasuk menulis, mengubah, menukar status, memadam dan mencipta."
          }
        },
        {
          en: "Availability",
          zh: "可用性",
          ms: "Ketersediaan",
          def: {
            zh: "资产在适当的时候能被授权方访问，若合法访问被阻止就是拒绝服务，可用性被破坏。",
            en: "Assets are accessible to authorised parties at appropriate times; if legitimate access is prevented this is denial of service and availability is violated.",
            ms: "Aset boleh diakses oleh pihak yang diberi kuasa pada masa yang sesuai; jika akses sah disekat, itulah penafian perkhidmatan dan ketersediaan telah dilanggar."
          }
        },
        {
          en: "Non-repudiation",
          zh: "不可否认性",
          ms: "Penafian Tak Boleh Disangkal",
          def: {
            zh: "发送方事后不能否认自己发送过该消息，是电子合同与电子交易的基础。",
            en: "The sender of a message cannot later refute the claim of not having sent that message; it is the basis of electronic contracts and transactions.",
            ms: "Pengirim mesej tidak boleh menafikan kemudian bahawa beliau tidak menghantar mesej tersebut; ia menjadi asas kontrak dan transaksi elektronik."
          }
        },
        {
          en: "Security Through Obscurity",
          zh: "通过隐蔽实现安全",
          ms: "Keselamatan Melalui Kekaburan",
          def: {
            zh: "认为只要外部人员不了解系统内部机制系统就安全的错误观念，如把口令藏在二进制文件里；NIST 明确不建议采用。",
            en: "The mistaken belief that a system is secure as long as outsiders know nothing about its internal mechanisms, such as hiding passwords in binary files; NIST explicitly recommends against it.",
            ms: "Kepercayaan yang salah bahawa sistem selamat selagi orang luar tidak mengetahui mekanisme dalamannya, contohnya menyembunyikan kata laluan dalam fail binari; NIST secara jelas tidak mengesyorkannya."
          }
        }
      ],
      diagrams: [
        {
          type: "tree",
          title: {
            zh: "四类安全威胁及其典型例子",
            en: "Four Classes of Security Threats and Typical Examples",
            ms: "Empat Kelas Ancaman Keselamatan dan Contoh Tipikal"
          },
          root: {
            label: {
              zh: "安全威胁",
              en: "Security Threats",
              ms: "Ancaman Keselamatan"
            }
          },
          branches: [
            {
              label: {
                zh: "中断（资产丢失或不可用）",
                en: "Interruption (asset lost or unusable)",
                ms: "Gangguan (aset hilang atau tidak boleh digunakan)"
              },
              leaves: [
                {
                  label: {
                    zh: "拒绝服务攻击 DoS",
                    en: "Denial of Service attack",
                    ms: "Serangan Penafian Perkhidmatan"
                  }
                },
                {
                  label: {
                    zh: "恶意破坏硬件设备",
                    en: "Malicious destruction of hardware",
                    ms: "Pemusnahan perkakasan secara berniat jahat"
                  }
                }
              ]
            },
            {
              label: {
                zh: "截取（未授权访问）",
                en: "Interception (unauthorised access)",
                ms: "Pemintasan (akses tanpa kebenaran)"
              },
              leaves: [
                {
                  label: {
                    zh: "网络窃听",
                    en: "Wiretapping in a network",
                    ms: "Penyadapan wayar dalam rangkaian"
                  }
                },
                {
                  label: {
                    zh: "非法复制程序或数据文件",
                    en: "Illicit copying of programs or data files",
                    ms: "Penyalinan haram program atau fail data"
                  }
                }
              ]
            },
            {
              label: {
                zh: "修改（篡改资产）",
                en: "Modification (tampering with an asset)",
                ms: "Pengubahsuaian (mengusik aset)"
              },
              leaves: [
                {
                  label: {
                    zh: "改动数据库中的值",
                    en: "Changing values in a database",
                    ms: "Mengubah nilai dalam pangkalan data"
                  }
                },
                {
                  label: {
                    zh: "修改传输中的电子数据",
                    en: "Modifying data transmitted electronically",
                    ms: "Mengubah data yang dihantar secara elektronik"
                  }
                }
              ]
            },
            {
              label: {
                zh: "伪造（插入虚假数据）",
                en: "Fabrication (inserting false data)",
                ms: "Fabrikasi (memasukkan data palsu)"
              },
              leaves: [
                {
                  label: {
                    zh: "插入虚假交易记录",
                    en: "Inserting spurious transactions",
                    ms: "Memasukkan transaksi palsu"
                  }
                },
                {
                  label: {
                    zh: "向数据库添加记录",
                    en: "Adding records to a database",
                    ms: "Menambah rekod ke dalam pangkalan data"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "讲义用中断、截取、修改、伪造四分法概括所有针对资产的威胁，考试常要求判断某个例子属于哪一类。",
            en: "The lecture classifies all threats against assets into interruption, interception, modification and fabrication; exams often ask which class a given example belongs to.",
            ms: "Kuliah mengelaskan semua ancaman terhadap aset kepada gangguan, pemintasan, pengubahsuaian dan fabrikasi; peperiksaan sering meminta menentukan kelas bagi sesuatu contoh."
          }
        },
        {
          type: "matrix",
          title: {
            zh: "安全服务、含义与违反时的表现",
            en: "Security Services, Their Meaning and What a Violation Looks Like",
            ms: "Perkhidmatan Keselamatan, Maksudnya dan Kesannya Apabila Dilanggar"
          },
          cols: [
            {
              zh: "含义",
              en: "Meaning",
              ms: "Maksud"
            },
            {
              zh: "被违反的情形",
              en: "Example of Violation",
              ms: "Contoh Pelanggaran"
            }
          ],
          rows: [
            {
              head: {
                zh: "机密性 Confidentiality",
                en: "Confidentiality",
                ms: "Kerahsiaan"
              },
              cells: [
                {
                  zh: "资产只被授权方访问",
                  en: "Assets accessed only by authorised parties",
                  ms: "Aset hanya diakses oleh pihak yang diberi kuasa"
                },
                {
                  zh: "E 截取并读取了 A 发给 B 的文件",
                  en: "E intercepts and reads the file A sent to B",
                  ms: "E memintas dan membaca fail yang dihantar A kepada B"
                }
              ]
            },
            {
              head: {
                zh: "完整性 Integrity",
                en: "Integrity",
                ms: "Integriti"
              },
              cells: [
                {
                  zh: "资产只能由授权方或以授权方式修改",
                  en: "Assets modified only by authorised parties or in authorised ways",
                  ms: "Aset hanya diubah oleh pihak yang diberi kuasa atau dengan cara yang dibenarkan"
                },
                {
                  zh: "E 截取并改动文件后再转发给 B",
                  en: "E intercepts, modifies and then forwards the file to B",
                  ms: "E memintas, mengubah dan kemudian menyalurkan fail kepada B"
                }
              ]
            },
            {
              head: {
                zh: "可用性 Availability",
                en: "Availability",
                ms: "Ketersediaan"
              },
              cells: [
                {
                  zh: "资产在适当时候能被授权方访问",
                  en: "Assets accessible to authorised parties at appropriate times",
                  ms: "Aset boleh diakses oleh pihak yang diberi kuasa pada masa yang sesuai"
                },
                {
                  zh: "E 阻止 A 与 B 通信或发动 DoS",
                  en: "E prevents communication between A and B or launches a DoS",
                  ms: "E menyekat komunikasi antara A dengan B atau melancarkan DoS"
                }
              ]
            },
            {
              head: {
                zh: "认证 Authentication",
                en: "Authentication",
                ms: "Pengesahan"
              },
              cells: [
                {
                  zh: "接收方能确认发送者身份",
                  en: "The recipient can identify the sender",
                  ms: "Penerima dapat mengenal pasti pengirim"
                },
                {
                  zh: "E 冒充 A 向 B 发送文件",
                  en: "E sends a file to B pretending to be A",
                  ms: "E menghantar fail kepada B dengan menyamar sebagai A"
                }
              ]
            },
            {
              head: {
                zh: "不可否认 Non-repudiation",
                en: "Non-repudiation",
                ms: "Penafian Tak Boleh Disangkal"
              },
              cells: [
                {
                  zh: "发送方事后不能否认发过消息",
                  en: "The sender cannot later deny sending the message",
                  ms: "Pengirim tidak boleh menafikan penghantaran mesej kemudian"
                },
                {
                  zh: "A 事后否认曾发出该订单或消息",
                  en: "A later denies having sent the order or message",
                  ms: "A kemudian menafikan telah menghantar pesanan atau mesej itu"
                }
              ]
            }
          ],
          legend: [
            {
              zh: "本章的复习题反复考查这些定义的辨析：机密性看“能不能看”，完整性看“能不能改”，可用性看“能不能用”，认证看“你是谁”，不可否认看“能不能赖账”。",
              en: "The review questions in this chapter repeatedly test these definitions: confidentiality is about who can see, integrity about who can change, availability about who can use, authentication about who you are, and non-repudiation about whether you can deny it later.",
              ms: "Soalan ulang kaji bab ini berulang kali menguji perbezaan takrif ini: kerahsiaan tentang siapa boleh melihat, integriti tentang siapa boleh mengubah, ketersediaan tentang siapa boleh menggunakan, pengesahan tentang siapa anda, dan penafian tak boleh disangkal tentang sama ada anda boleh menafikannya kemudian."
            }
          ]
        }
      ],
      exam: [
        {
          zh: "选择题常问“与数据或消息有关的四个主要安全原则是什么”，正确答案是机密性、认证、不可否认和完整性（confidentiality, authentication, non-repudiation, integrity），注意不要把认证换成访问控制或授权。",
          en: "Multiple choice questions often ask for the four primary security principles related to data or messages; the answer is confidentiality, authentication, non-repudiation and integrity - do not replace authentication with access control or authorisation.",
          ms: "Soalan objektif sering menanyakan empat prinsip keselamatan utama yang berkaitan dengan data atau mesej; jawapannya ialah kerahsiaan, pengesahan, penafian tak boleh disangkal dan integriti - jangan gantikan pengesahan dengan kawalan akses atau kebenaran."
        },
        {
          zh: "最容易混淆的是机密性、完整性和可用性的定义：只被授权方访问是机密性，只能被授权方修改是完整性，在适当时候可被授权方访问是可用性；题目常把这三种定义互换作为干扰项。",
          en: "The definitions of confidentiality, integrity and availability are the easiest to confuse: access only by authorised parties is confidentiality, modification only by authorised parties is integrity, and access at appropriate times is availability; the distractors usually swap these three definitions.",
          ms: "Takrif kerahsiaan, integriti dan ketersediaan paling mudah dikelirukan: akses hanya oleh pihak yang diberi kuasa ialah kerahsiaan, pengubahsuaian hanya oleh pihak yang diberi kuasa ialah integriti, dan akses pada masa yang sesuai ialah ketersediaan; pilihan pengganggu biasanya menukar ganti ketiga-tiga takrif ini."
        },
        {
          zh: "认证与授权的区别是常见陷阱：认证是“验证用户身份的过程”，而给用户分配权限属于授权（authorization），不要把它当作认证。",
          en: "The difference between authentication and authorisation is a common trap: authentication is the process of verifying the identification of a user, whereas assigning permissions to users is authorisation, not authentication.",
          ms: "Perbezaan antara pengesahan dan kebenaran merupakan perangkap biasa: pengesahan ialah proses mengesahkan pengenalan pengguna, manakala memberikan kebenaran kepada pengguna ialah pengizinan, bukan pengesahan."
        },
        {
          zh: "简答题可能要求区分预防、检测、反应三种策略，并用私人住宅或电子商务的例子说明；答题时要注意检测本身不是预防的替代品，而且“通过隐蔽实现安全”不被 NIST 认可，不能作为主要防护手段。",
          en: "Essay questions may ask you to distinguish prevention, detection and reaction and illustrate them with the private property or e-commerce example; remember that detection is not a substitute for prevention and that security through obscurity is not accepted by NIST as a primary protection.",
          ms: "Soalan esei mungkin meminta anda membezakan pencegahan, pengesanan dan tindak balas serta memberi contoh harta persendirian atau e-dagang; ingat bahawa pengesanan bukan pengganti pencegahan dan keselamatan melalui kekaburan tidak diterima oleh NIST sebagai perlindungan utama."
        }
      ],
      mnemonic: {
        zh: "先记三性 CIA（机密、完整、可用），再补 AANA（问责、认证、不可否认、访问控制）；防御五招是加、软、硬、策、物。",
        en: "Remember CIA first (confidentiality, integrity, availability), then add the four extra services - accountability, authentication, non-repudiation and access control; the five defences are encryption, software, hardware, policy and physical controls.",
        ms: "Ingat CIA dahulu (kerahsiaan, integriti, ketersediaan), kemudian tambah empat perkhidmatan lain - akauntabiliti, pengesahan, penafian tak boleh disangkal dan kawalan akses; lima pertahanan ialah penyulitan, perisian, perkakasan, dasar dan kawalan fizikal."
      }
    },
    {
      id: "cs-02",
      num: 2,
      title: {
        zh: "密码学",
        en: "Cryptography",
        ms: "Kriptografi"
      },
      file: "cs/CHAPTER 2 - CRYPTOGRAPHY.pdf",
      pages: 88,
      summary: {
        zh: "本章系统介绍密码学：密码学一词来自希腊文 kryptos（隐藏）与 grapho（书写），是研究秘密书写的学问，用来提供机密性、完整性、认证与不可否认，对抗被动攻击和主动攻击。本章先统一密码系统的术语（明文、密文、加密、解密、密码系统、密码编码者与密码分析者），再区分受限算法与基于密钥的算法，以及流密码与分组密码。核心内容是两大体制：对称（秘密密钥）体制收发双方共用一个密钥，非对称（公开密钥）体制每人有一对公私钥；相应的经典算法包括凯撒密码、维吉尼亚密码、Vernam 一次性密码本、置换密码等替换与换位技术，以及把它们组合起来的分组密码——DES、双重 DES、三重 DES、IDEA、Blowfish、AES（Rijndael）和公开密钥的 RSA。本章还讲解了密码分析的攻击类型、密钥长度与暴力破解时间的关系，以及 DES 的详细轮结构与 RSA 的密钥生成与加解密计算。",
        en: "This chapter gives a systematic introduction to cryptography, the study of secret writing, whose name comes from the Greek words kryptos (hidden) and grapho (writing); it provides secrecy, integrity, authentication and non-repudiation, and counters passive and active attacks. It first fixes the terminology of a cryptosystem (plaintext, ciphertext, encryption, decryption, cryptosystem, cryptographer and cryptanalyst), then distinguishes restricted algorithms from key-based algorithms and stream ciphers from block ciphers. The core of the chapter is the two families of cryptosystems: the secret key (symmetric) system, where sender and receiver share one key, and the public key (asymmetric) system, where each party owns a key pair. The classical algorithms covered include the Caesar cipher, the Vigenere cipher, the Vernam one-time pad and permutation techniques, together with the product ciphers built from them - DES, double DES, triple DES, IDEA, Blowfish, AES (Rijndael) - and the public key RSA. The chapter also explains the types of cryptanalytic attack, how key length determines brute-force time, the internal rounds of DES, and how RSA keys are generated and used.",
        ms: "Bab ini memberi pengenalan sistematik kepada kriptografi, iaitu kajian tentang penulisan rahsia, yang namanya berasal daripada perkataan Yunani kryptos (tersembunyi) dan grapho (penulisan); ia menyediakan kerahsiaan, integriti, pengesahan dan penafian tak boleh disangkal, serta menangkis serangan pasif dan aktif. Bab ini terlebih dahulu menetapkan istilah kriptosistem (teks biasa, teks sifer, penyulitan, penyahsulitan, kriptosistem, kriptografer dan kriptoanalis), kemudian membezakan algoritma terhad daripada algoritma berasaskan kunci serta sifer aliran daripada sifer blok. Teras bab ini ialah dua keluarga kriptosistem: sistem kunci rahsia (simetri), yang menggunakan satu kunci yang dikongsi oleh pengirim dan penerima, dan sistem kunci awam (tidak simetri), yang memberikan setiap pihak sepasang kunci. Algoritma klasik yang dibincangkan termasuk sifer Caesar, sifer Vigenere, pad sekali guna Vernam dan teknik pilihatur, serta sifer hasil darab yang terbina daripadanya - DES, DES berganda, DES tiga kali, IDEA, Blowfish, AES (Rijndael) - dan RSA bagi kunci awam. Bab ini juga menerangkan jenis serangan kriptoanalisis, hubungan antara panjang kunci dengan masa serangan kekerasan, pusingan dalaman DES, dan cara kunci RSA dijana serta digunakan."
      },
      points: [
        {
          zh: "密码学是研究秘密书写的学科，名称来自希腊文 kryptos（隐藏、秘密）与 grapho（书写）；它是实现保密、完整性、认证与不可否认的工具，用来对抗被动攻击与主动攻击，并构成计算机与通信安全许多技术方案的基础。",
          en: "Cryptography is the study of secret writing; the term comes from the Greek words kryptos (hidden or secret) and grapho (writing). It is a tool for secrecy, integrity, authentication and non-repudiation, it counters passive and active attacks, and it forms the basis of many technological solutions to computer and communications security problems.",
          ms: "Kriptografi ialah kajian tentang penulisan rahsia; istilah ini berasal daripada perkataan Yunani kryptos (tersembunyi atau rahsia) dan grapho (penulisan). Ia merupakan alat untuk kerahsiaan, integriti, pengesahan dan penafian tak boleh disangkal, menangkis serangan pasif dan aktif, serta menjadi asas kepada banyak penyelesaian teknologi bagi masalah keselamatan komputer dan komunikasi."
        },
        {
          zh: "基本术语必须分清：加密是把消息编码使其含义被隐藏的过程，解密是把加密消息还原为原始形式的过程，密码系统是进行加密与解密的系统，明文是原始形式的消息，密文是加密后的消息；发明算法的人叫密码编码者（好人），试图攻破算法的人叫密码分析者（坏人）。密码服务有四项：机密性保证内容不被泄露，认证保证消息无法被伪造，完整性保证消息无法被篡改，不可否认保证只有发送者本人可能产生该消息。",
          en: "The basic terminology must be kept clear: encryption is the process of coding a message so that its meaning is concealed, decryption transforms an encrypted message back into its original form, a cryptosystem is a system for encryption and decryption, plaintext or cleartext is a message in its original form and ciphertext is the encrypted form; the cryptographer invents encryption algorithms (the good guys) while the cryptanalyst tries to break them (the bad guys). Cryptography provides four services: confidentiality, so that the content cannot be revealed; authentication, so that the message cannot be forged; integrity, so that the message cannot be altered; and non-repudiation, because only the sender could have produced the message.",
          ms: "Istilah asas perlu difahami dengan jelas: penyulitan ialah proses mengekod mesej supaya maksudnya tersembunyi, penyahsulitan menukar mesej bersulit kembali kepada bentuk asalnya, kriptosistem ialah sistem untuk penyulitan dan penyahsulitan, teks biasa ialah mesej dalam bentuk asal manakala teks sifer ialah bentuk bersulitnya; kriptografer mencipta algoritma penyulitan (pihak baik) sementara kriptoanalis cuba memecahkannya (pihak jahat). Kriptografi menyediakan empat perkhidmatan: kerahsiaan supaya kandungan tidak dapat didedahkan, pengesahan supaya mesej tidak dapat dipalsukan, integriti supaya mesej tidak dapat diubah, dan penafian tak boleh disangkal kerana hanya pengirim yang mungkin menghasilkan mesej itu."
        },
        {
          zh: "算法分两类：受限算法的安全性依赖于算法本身保密；基于密钥的算法其安全性建立在算法保密、密钥保密或两者之上，而密码分析的基本规则是必须假定攻击者知道加解密方法，他只欠缺密钥。",
          en: "Algorithms come in two types: the security of a restricted algorithm depends on keeping the algorithm itself secret, whereas the security of a key-based algorithm rests on the secrecy of the algorithm, of the key or of both; the fundamental rule of cryptanalysis is that one must always assume the attacker knows the encryption and decryption methods and is only looking for the keys.",
          ms: "Algoritma terbahagi kepada dua jenis: keselamatan algoritma terhad bergantung pada kerahsiaan algoritma itu sendiri, manakala keselamatan algoritma berasaskan kunci bergantung pada kerahsiaan algoritma, kunci atau kedua-duanya; peraturan asas kriptoanalisis ialah kita mesti sentiasa menganggap penyerang mengetahui kaedah penyulitan dan penyahsulitan dan hanya mencari kuncinya."
        },
        {
          zh: "流密码把明文的每一个符号逐个转换为密文符号，某种意义上相当于分组长度为 1 的分组密码，适合需要逐符号处理的场合；分组密码把明文切成固定长度的块（如 64 位）逐块加密，绝大多数著名的对称密钥体制都是分组密码。",
          en: "A stream cipher converts each symbol of the plaintext into a symbol of ciphertext, and in some sense is a block cipher with a block size of one, which suits plaintext that must be processed one symbol at a time; a block cipher breaks the plaintext into fixed-length blocks (for example 64 bits) and encrypts one block at a time, and most well-known symmetric key schemes are block ciphers.",
          ms: "Sifer aliran menukar setiap simbol teks biasa kepada simbol teks sifer, dan dalam satu pengertian ia ialah sifer blok dengan saiz blok satu, sesuai untuk teks biasa yang perlu diproses simbol demi simbol; sifer blok pula memecahkan teks biasa kepada blok panjang tetap (contohnya 64 bit) dan menyulitkan satu blok pada satu masa, dan kebanyakan skema kunci simetri yang terkenal ialah sifer blok."
        },
        {
          zh: "密码体制分两大类型：秘密密钥（对称）体制中 A 与 B 通过安全信道共享同一个密钥 K，加解密用同一把钥匙；公开密钥（非对称）体制中每一方都有自己的密钥对，加密密钥 Ke 与解密密钥 Kd 可以不同，A 与 B 各自持有自己的密钥对。",
          en: "Cryptosystems fall into two types: in the secret key (symmetric) cryptosystem A and B share a single key K over a secure channel and use the same key for encryption and decryption, whereas in the public key (asymmetric) cryptosystem every party has its own key pair, so the encryption key Ke and the decryption key Kd may differ and A and B each hold their own pair.",
          ms: "Kriptosistem terbahagi kepada dua jenis: dalam kriptosistem kunci rahsia (simetri), A dan B berkongsi satu kunci K melalui saluran selamat dan menggunakan kunci yang sama untuk penyulitan dan penyahsulitan, manakala dalam kriptosistem kunci awam (tidak simetri) setiap pihak mempunyai pasangan kunci sendiri, jadi kunci penyulitan Ke dan kunci penyahsulitan Kd boleh berbeza dan A serta B masing-masing memegang pasangan kuncinya."
        },
        {
          zh: "经典加密技术分替换与换位两大类：单表替换（凯撒密码把每个字母后移 k 位，C = (p+k) mod 26，只有 25 种可能密钥，可被暴力搜索攻破）与多表替换（维吉尼亚密码用长度为 d 的关键词轮流使用不同字母表，C(pi) = pi + ki mod n；Vernam 一次性密码本被证明是完美密码，但要求密钥随机且不短于消息、不能重复使用）；换位（置换）技术只重新排列元素顺序，如栅栏技术与列换位。替换与换位可以反复组合成乘积密码，DES 是最著名的例子，其设计原则被列为机密；DES 于 1977 年被采纳为联邦标准，1987 与 1993 年两度续期，1999 年 NIST 不再支持单一 DES 的使用，建议改用三重 DES。",
          en: "Classical encryption techniques fall into substitution and permutation: monoalphabetic substitution (the Caesar cipher shifts each letter by k positions, C = (p+k) mod 26, giving only 25 possible keys and falling to brute-force search) and polyalphabetic substitution (the Vigenere cipher uses a keyword of length d and cycles through different alphabets, C(pi) = pi + ki mod n, while the Vernam one-time pad is a perfect cipher but needs a random key at least as long as the message that is never reused); permutation or transposition techniques merely reorder the elements, such as the rail fence and columnar techniques. Substitution and permutation can be combined and iterated into a product cipher, of which DES is the best-known example and whose design principles are classified; DES was approved as a federal standard in 1977, reluctantly re-approved in 1987 and again in 1993, and in 1999 NIST could no longer support the use of single DES and recommended moving to triple DES.",
          ms: "Teknik penyulitan klasik terbahagi kepada penggantian dan pilihatur: penggantian monoalfabet (sifer Caesar mengalih setiap huruf sebanyak k kedudukan, C = (p+k) mod 26, hanya memberi 25 kunci dan boleh dipecahkan dengan carian kekerasan) dan penggantian polialfabet (sifer Vigenere menggunakan kata kunci panjang d dan menggunakan abjad yang berbeza secara bergilir, C(pi) = pi + ki mod n, manakala pad sekali guna Vernam ialah sifer sempurna tetapi memerlukan kunci rawak yang tidak lebih pendek daripada mesej dan tidak boleh digunakan semula); teknik pilihatur hanya menyusun semula elemen, seperti teknik pagar landai dan transposisi lajur. Penggantian dan pilihatur boleh digabungkan serta diulang menjadi sifer hasil darab, dan DES ialah contoh yang paling terkenal dengan prinsip reka bentuknya dirahsiakan; DES diluluskan sebagai piawaian persekutuan pada 1977, diluluskan semula dengan keberatan pada 1987 dan sekali lagi pada 1993, dan pada 1999 NIST tidak lagi dapat menyokong penggunaan DES tunggal lalu mengesyorkan peralihan kepada DES tiga kali."
        },
        {
          zh: "DES 是分组乘积密码：密钥 56 位、明文与密文分组 64 位，由 IBM 开发并经 NIST 采纳、NSA 同意，用于非机密信息；算法先做初始置换，再进行 16 轮替换与置换，每轮把右半 32 位经扩展置换变成 48 位、与经密钥变换与选择置换得到的 48 位子密钥异或，再经 8 个 S 盒（6 位输入变 4 位输出）压缩回 32 位，最后用 P 盒置换并做逆初始置换。",
          en: "DES is a block product cipher with a 56-bit key and a 64-bit block for plaintext and ciphertext, developed by IBM and adopted by NIST with NSA approval for unclassified information; it starts with an initial permutation and then performs 16 rounds of substitution and permutation, in which the 32-bit right half is expanded to 48 bits, XORed with a 48-bit subkey produced by the key transformation and a choice permutation, compressed back to 32 bits by eight S-boxes that map 6 input bits to 4 output bits, and finally permuted by the P-box before the inverse initial permutation.",
          ms: "DES ialah sifer hasil darab blok dengan kunci 56 bit dan saiz blok 64 bit bagi teks biasa dan teks sifer, dibangunkan oleh IBM dan diterima oleh NIST dengan persetujuan NSA untuk maklumat tidak terperingkat; ia bermula dengan pilihatur awal dan kemudian menjalani 16 pusingan penggantian dan pilihatur, iaitu separuh kanan 32 bit dikembangkan kepada 48 bit, di-XOR dengan subkunci 48 bit daripada transformasi kunci dan pilihatur pilihan, dimampatkan kembali kepada 32 bit oleh lapan kotak-S yang memetakan 6 bit input kepada 4 bit output, dan akhirnya dipilihatur oleh kotak-P sebelum pilihatur awal songsang."
        },
        {
          zh: "DES 的密钥太短：40 位密钥平均需约 2 的 39 次方（约 5×10 的 11 次方）次尝试，56 位 DES 需约 2 的 55 次方（约 3.6×10 的 16 次方）次；1998 年一台专门设计的 DES 破译机价值 25 万美元即可成功，另一个互联网分布式项目只用了 22 小时 15 分钟。双重 DES 会遭遇 Diffie 与 Hellman 的中间相遇攻击，有效密钥长度只相当于 57 位；三重 DES 用 E(K3, E(K2, E(K1, P))) 避免该攻击，有效密钥长 168 位（若 K1 = K3 则为 112 位），代价是速度慢三倍。",
          en: "The DES key is too short: a 40-bit key needs on average about 2^39 (approximately 5 x 10^11) trials and a 56-bit DES key about 2^55 (approximately 3.6 x 10^16) trials; in 1998 a specially designed DES cracking machine costing USD 250,000 succeeded, and a distributed Internet project needed only 22 hours and 15 minutes. Double DES falls to the meet-in-the-middle attack discovered by Diffie and Hellman, giving an effective key length of only 57 bits, while triple DES uses E(K3, E(K2, E(K1, P))) to avoid that attack with an effective key length of 168 bits (112 bits when K1 = K3), at the cost of being three times slower.",
          ms: "Kunci DES terlalu pendek: kunci 40 bit memerlukan secara purata kira-kira 2^39 (lebih kurang 5 x 10^11) cubaan dan kunci DES 56 bit kira-kira 2^55 (lebih kurang 3.6 x 10^16) cubaan; pada 1998 sebuah mesin pemecah DES yang direka khas berharga USD 250,000 berjaya, manakala satu projek Internet teragih hanya memerlukan 22 jam 15 minit. DES berganda tewas kepada serangan pertemuan di tengah yang ditemui oleh Diffie dan Hellman sehingga panjang kunci berkesannya hanya 57 bit, sementara DES tiga kali menggunakan E(K3, E(K2, E(K1, P))) untuk mengelakkan serangan itu dengan panjang kunci berkesan 168 bit (112 bit apabila K1 = K3), tetapi tiga kali lebih perlahan."
        },
        {
          zh: "为取代 DES，NIST 于 1997 年启动 AES 项目，要求提交公开、无专利费的算法，并规定 AES 是非对称之外的私钥对称分组密码、数据块 128 位、密钥 128/192/256 位、比三重 DES 更强更快、寿命 20 至 30 年；1999 年 8 月的候选名单包括 MARS、RC6、Serpent 与 Twofish，最终选中的 Rijndael 由比利时 Rijmen 与 Daemen 设计，每轮对整个 128 位块做字节替换、行移位、列混合与轮密钥异或，共 9、11 或 13 轮。",
          en: "To replace DES, NIST began the AES project in 1997, requiring submitted algorithms to be unclassified, publicly disclosed and royalty-free and specifying that AES be a private key symmetric block cipher with 128-bit data and 128/192/256-bit keys, stronger and faster than triple DES and with an active life of 20 to 30 years; the August 1999 shortlist contained MARS, RC6, Serpent and Twofish, and the winner Rijndael, designed by Rijmen and Daemen in Belgium, operates on the whole 128-bit block each round through byte substitution, shift rows, mix columns and add round key over 9, 11 or 13 rounds.",
          ms: "Untuk menggantikan DES, NIST memulakan projek AES pada 1997 dengan menetapkan algoritma yang dihantar mestilah tidak terperingkat, didedahkan kepada umum dan bebas royalti, serta menyatakan AES ialah sifer blok simetri kunci persendirian dengan data 128 bit dan kunci 128/192/256 bit, lebih kuat dan lebih pantas daripada DES tiga kali serta hayat aktif 20 hingga 30 tahun; senarai pendek Ogos 1999 mengandungi MARS, RC6, Serpent dan Twofish, dan pemenangnya Rijndael, direka oleh Rijmen dan Daemen di Belgium, beroperasi pada keseluruhan blok 128 bit setiap pusingan melalui penggantian bait, anjakan baris, campuran lajur dan penambahan kunci pusingan selama 9, 11 atau 13 pusingan."
        },
        {
          zh: "RSA 是第一个重要的非对称密钥密码，由 MIT 的 Rivest、Shamir 与 Adleman 于 1978 年提出，是使用最广的公开密钥密码：每人有一对公私钥，公钥可公开存放于数据库供人查询，私钥自己保管；它使用至少 200 位的大素数，公开密钥 KU = (n, e)、秘密密钥 KR = (n, d)，加密为 C = M^e mod n，解密为 M = C^d mod n。RSA 密钥生成有固定步骤：选两个大素数 p 与 q，计算 n = p×q 与 Φ = (p-1)(q-1)，选一个与 Φ 互素且小于 Φ 的 e，再求满足 e×d = 1 mod Φ 的 d，公开 (n, e) 而保密 (n, d) 并销毁 p 与 q；讲义用 p=7、q=17 得到 n=119、Φ=96，取 e=5，算出 d=77，为求逆元可用扩展欧几里得算法。",
          en: "RSA is the first major asymmetric key cryptosystem, developed by Rivest, Shamir and Adleman at MIT in 1978 and the most widely used public key cryptography: each party owns a public and a private key, public keys may be stored in a database anyone can consult while the private key stays secret; it uses large primes of at least 200 digits, with public key KU = (n, e) and secret key KR = (n, d), encryption as C = M^e mod n and decryption as M = C^d mod n. RSA key generation follows fixed steps: choose two large primes p and q, compute n = p x q and phi = (p-1)(q-1), pick e relatively prime to and less than phi, then find d such that e x d = 1 mod phi, publishing (n, e) while keeping (n, d) secret and destroying p and q; the lecture uses p = 7 and q = 17 to obtain n = 119 and phi = 96, chooses e = 5 and computes d = 77, and notes that the inverse can be computed with the extended Euclidean algorithm.",
          ms: "RSA ialah kriptosistem kunci tidak simetri utama yang pertama, dibangunkan oleh Rivest, Shamir dan Adleman di MIT pada 1978 dan paling meluas digunakan dalam kriptografi kunci awam: setiap pihak memiliki kunci awam dan kunci peribadi, kunci awam boleh disimpan dalam pangkalan data yang boleh dirujuk sesiapa manakala kunci peribadi dirahsiakan; ia menggunakan nombor perdana besar sekurang-kurangnya 200 digit, dengan kunci awam KU = (n, e) dan kunci rahsia KR = (n, d), penyulitan C = M^e mod n dan penyahsulitan M = C^d mod n. Penjanaan kunci RSA mengikut langkah tetap: pilih dua nombor perdana besar p dan q, kira n = p x q dan phi = (p-1)(q-1), pilih e yang saling perdana dengan phi dan kurang daripada phi, kemudian cari d supaya e x d = 1 mod phi, dan umumkan (n, e) sambil merahsiakan (n, d) serta memusnahkan p dan q; kuliah menggunakan p = 7 dan q = 17 untuk memperoleh n = 119 dan phi = 96, memilih e = 5 dan mengira d = 77, serta menyatakan songsangan boleh dikira dengan algoritma Euclidean lanjutan."
        }
      ],
      terms: [
        {
          en: "Cryptography",
          zh: "密码学",
          ms: "Kriptografi",
          def: {
            zh: "研究秘密书写的学问，用加密隐藏文本内容的实践或艺术。",
            en: "The practice or art of using encryption to conceal text; literally the study of secret writing.",
            ms: "Amalan atau seni menggunakan penyulitan untuk menyembunyikan teks; secara harfiah kajian tentang penulisan rahsia."
          }
        },
        {
          en: "Encryption",
          zh: "加密",
          ms: "Penyulitan",
          def: {
            zh: "把消息编码使其含义被隐藏的过程，也常称为编码或加密。",
            en: "The process of coding a message so that its meaning is concealed; also called enciphering.",
            ms: "Proses mengekod mesej supaya maksudnya tersembunyi; turut dipanggil pengsiferan."
          }
        },
        {
          en: "Decryption",
          zh: "解密",
          ms: "Penyahsulitan",
          def: {
            zh: "把加密后的消息还原成原始形式的过程，也常称为解码。",
            en: "The process of transforming an encrypted message back into its original form; also called deciphering.",
            ms: "Proses menukar mesej bersulit kembali kepada bentuk asalnya; turut dipanggil penyahsiferan."
          }
        },
        {
          en: "Cryptosystem",
          zh: "密码系统",
          ms: "Kriptosistem",
          def: {
            zh: "由加密方法与解密方法构成的、用于加密和解密的系统。",
            en: "A system for encryption and decryption, made up of the encryption method and the decryption method.",
            ms: "Sistem untuk penyulitan dan penyahsulitan, terdiri daripada kaedah penyulitan dan kaedah penyahsulitan."
          }
        },
        {
          en: "Plaintext",
          zh: "明文",
          ms: "Teks Biasa",
          def: {
            zh: "处于原始形式、尚未加密的消息，也叫 cleartext。",
            en: "A message in its original, unencrypted form; also called cleartext.",
            ms: "Mesej dalam bentuk asal yang belum disulitkan; turut dipanggil teks jelas."
          }
        },
        {
          en: "Ciphertext",
          zh: "密文",
          ms: "Teks Sifer",
          def: {
            zh: "经过加密变换后的消息形式，密码分析者研究的就是从密文恢复明文或密钥。",
            en: "A message in its encrypted form; cryptanalysts study this form to recover the plaintext or the key.",
            ms: "Mesej dalam bentuk bersulit; kriptoanalis mengkaji bentuk ini untuk memulihkan teks biasa atau kunci."
          }
        },
        {
          en: "Cryptanalysis",
          zh: "密码分析",
          ms: "Kriptoanalisis",
          def: {
            zh: "在假定已知加解密算法的前提下寻找密钥或明文的攻击方法，包括被动攻击与主动攻击。",
            en: "Attack methods that seek the key or the plaintext assuming the encryption and decryption algorithms are known, including passive and active attacks.",
            ms: "Kaedah serangan yang mencari kunci atau teks biasa dengan andaian algoritma penyulitan dan penyahsulitan diketahui, termasuk serangan pasif dan aktif."
          }
        },
        {
          en: "Symmetric Key Cryptosystem",
          zh: "对称密钥密码体制",
          ms: "Kriptosistem Kunci Simetri",
          def: {
            zh: "又称秘密密钥体制，收发双方共享同一把密钥用于加密和解密，如 DES 与 AES。",
            en: "Also called the secret key cryptosystem, in which sender and receiver share a single key used for both encryption and decryption, such as DES and AES.",
            ms: "Turut dipanggil kriptosistem kunci rahsia, iaitu pengirim dan penerima berkongsi satu kunci yang digunakan untuk penyulitan dan penyahsulitan, contohnya DES dan AES."
          }
        },
        {
          en: "Asymmetric Key Cryptosystem",
          zh: "非对称密钥密码体制",
          ms: "Kriptosistem Kunci Tidak Simetri",
          def: {
            zh: "又称公开密钥体制，每一方拥有公钥与私钥组成的密钥对，用一把密钥加密、另一把解密，如 RSA。",
            en: "Also called the public key cryptosystem, in which each party owns a key pair of a public key and a private key, one used to encrypt and the other to decrypt, such as RSA.",
            ms: "Turut dipanggil kriptosistem kunci awam, iaitu setiap pihak memiliki pasangan kunci awam dan kunci peribadi, satu untuk menyulitkan dan satu lagi untuk menyahsulit, contohnya RSA."
          }
        },
        {
          en: "Block Cipher",
          zh: "分组密码",
          ms: "Sifer Blok",
          def: {
            zh: "把明文切成固定长度的块逐块加密的密码，如 64 位分组的 DES 与 128 位分组的 AES。",
            en: "A cipher that breaks the plaintext into fixed-length blocks and encrypts one block at a time, such as DES with 64-bit blocks and AES with 128-bit blocks.",
            ms: "Sifer yang memecahkan teks biasa kepada blok panjang tetap dan menyulitkan satu blok pada satu masa, seperti DES dengan blok 64 bit dan AES dengan blok 128 bit."
          }
        },
        {
          en: "Stream Cipher",
          zh: "流密码",
          ms: "Sifer Aliran",
          def: {
            zh: "把明文的每个符号逐个转换为密文符号的密码，可看作分组长度为 1 的分组密码，速度快且无错误传播，但扩散性低、易被恶意插入修改。",
            en: "A cipher that converts each symbol of the plaintext into a symbol of ciphertext, effectively a block cipher of block size one; it is fast with no error propagation but has low diffusion and is subject to malicious insertion and modification.",
            ms: "Sifer yang menukar setiap simbol teks biasa kepada simbol teks sifer, pada hakikatnya sifer blok bersaiz satu; ia pantas tanpa perambatan ralat tetapi kurang penyebaran dan mudah disisipkan atau diubah secara berniat jahat."
          }
        },
        {
          en: "Substitution Cipher",
          zh: "替换密码",
          ms: "Sifer Penggantian",
          def: {
            zh: "用另一个符号替换明文中每个符号的密码，包括单表替换（凯撒密码）与多表替换（维吉尼亚密码、Vernam 密码）。",
            en: "A cipher that replaces each symbol of the plaintext with another symbol, including monoalphabetic substitution (Caesar cipher) and polyalphabetic substitution (Vigenere and Vernam ciphers).",
            ms: "Sifer yang menggantikan setiap simbol teks biasa dengan simbol lain, termasuk penggantian monoalfabet (sifer Caesar) dan penggantian polialfabet (sifer Vigenere dan Vernam)."
          }
        },
        {
          en: "Permutation (Transposition)",
          zh: "置换（换位）",
          ms: "Pilihatur (Transposisi)",
          def: {
            zh: "只重新排列元素顺序而不改变元素本身的加密技术，如栅栏技术与列换位；块大小为 N 时密钥空间为 N!，且多次置换没有额外效果。",
            en: "An encryption technique that only reorders the elements without changing them, such as the rail fence and columnar techniques; with blocks of size N the key space is N! and multiple encipherment does not help.",
            ms: "Teknik penyulitan yang hanya menyusun semula elemen tanpa mengubahnya, seperti teknik pagar landai dan transposisi lajur; bagi blok bersaiz N ruang kuncinya ialah N! dan penyulitan berulang tidak membantu."
          }
        },
        {
          en: "Data Encryption Standard (DES)",
          zh: "数据加密标准",
          ms: "Piawaian Penyulitan Data (DES)",
          def: {
            zh: "1977 年被采纳为联邦标准的分组乘积密码，56 位密钥、64 位分组，共 16 轮，含初始置换、扩展置换、密钥变换、8 个 S 盒、P 盒与末置换。",
            en: "A block product cipher approved as a federal standard in 1977 with a 56-bit key and 64-bit blocks over 16 rounds, using an initial permutation, expansion permutation, key transformation, eight S-boxes, a P-box and a final permutation.",
            ms: "Sifer hasil darab blok yang diluluskan sebagai piawaian persekutuan pada 1977 dengan kunci 56 bit dan blok 64 bit selama 16 pusingan, menggunakan pilihatur awal, pilihatur pengembangan, transformasi kunci, lapan kotak-S, kotak-P dan pilihatur akhir."
          }
        },
        {
          en: "Brute-force Attack",
          zh: "暴力破解攻击",
          ms: "Serangan Kekerasan",
          def: {
            zh: "对密文尝试每一个可能的密钥，直到得到可理解的明文为止；密钥越长所需尝试次数按指数增长。",
            en: "Trying every possible key on the ciphertext until an intelligible plaintext is obtained; the number of trials grows exponentially with key length.",
            ms: "Mencuba setiap kunci yang mungkin pada teks sifer sehingga diperoleh teks biasa yang boleh difahami; bilangan cubaan meningkat secara eksponen dengan panjang kunci."
          }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: {
            zh: "对称（秘密密钥）与非对称（公开密钥）密码体制对比",
            en: "Symmetric (Secret Key) versus Asymmetric (Public Key) Cryptosystem",
            ms: "Perbandingan Kriptosistem Simetri (Kunci Rahsia) dengan Tidak Simetri (Kunci Awam)"
          },
          cols: [
            {
              head: {
                zh: "秘密密钥 / 对称体制",
                en: "Secret Key / Symmetric",
                ms: "Kunci Rahsia / Simetri"
              },
              items: [
                {
                  label: {
                    zh: "加解密使用同一把密钥 K",
                    en: "One single key K for both encryption and decryption",
                    ms: "Satu kunci K untuk penyulitan dan penyahsulitan"
                  }
                },
                {
                  label: {
                    zh: "A、B 必须先通过安全信道共享密钥",
                    en: "A and B must first share the key over a secure channel",
                    ms: "A dan B mesti berkongsi kunci melalui saluran selamat"
                  }
                },
                {
                  label: {
                    zh: "速度快，适合加密大量数据",
                    en: "Fast, suited to bulk data encryption",
                    ms: "Pantas, sesuai untuk menyulitkan data dalam kuantiti besar"
                  }
                },
                {
                  label: {
                    zh: "例子：DES、三重 DES、IDEA、Blowfish、AES",
                    en: "Examples: DES, triple DES, IDEA, Blowfish, AES",
                    ms: "Contoh: DES, DES tiga kali, IDEA, Blowfish, AES"
                  }
                }
              ]
            },
            {
              head: {
                zh: "公开密钥 / 非对称体制",
                en: "Public Key / Asymmetric",
                ms: "Kunci Awam / Tidak Simetri"
              },
              items: [
                {
                  label: {
                    zh: "每人一对密钥：加密密钥 Ke 与解密密钥 Kd",
                    en: "Each party has a key pair: encryption key Ke and decryption key Kd",
                    ms: "Setiap pihak mempunyai pasangan kunci: kunci penyulitan Ke dan kunci penyahsulitan Kd"
                  }
                },
                {
                  label: {
                    zh: "公钥可以公开存放在数据库中供人查询",
                    en: "Public keys can be stored in a database anyone may consult",
                    ms: "Kunci awam boleh disimpan dalam pangkalan data yang boleh dirujuk sesiapa"
                  }
                },
                {
                  label: {
                    zh: "私钥各自保管，解决密钥分发难题",
                    en: "Private keys stay secret, solving the key distribution problem",
                    ms: "Kunci peribadi dirahsiakan, menyelesaikan masalah pengagihan kunci"
                  }
                },
                {
                  label: {
                    zh: "例子：RSA（1978 年，MIT）",
                    en: "Example: RSA (MIT, 1978)",
                    ms: "Contoh: RSA (MIT, 1978)"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "考试常要求画图或对比两种体制的密钥数量、信道要求与典型算法。",
            en: "Exams often ask you to draw or compare the two families in terms of number of keys, channel requirements and typical algorithms.",
            ms: "Peperiksaan sering meminta anda melukis atau membandingkan kedua-dua keluarga dari segi bilangan kunci, keperluan saluran dan algoritma tipikal."
          }
        },
        {
          type: "flow",
          dir: "v",
          title: {
            zh: "RSA 密钥生成五步（讲义 p=7, q=17 的例子）",
            en: "Five Steps of RSA Key Generation (lecture example p = 7, q = 17)",
            ms: "Lima Langkah Penjanaan Kunci RSA (contoh kuliah p = 7, q = 17)"
          },
          steps: [
            {
              label: {
                zh: "1. 选两个大素数 p 与 q",
                en: "1. Choose two large primes p and q",
                ms: "1. Pilih dua nombor perdana besar p dan q"
              },
              note: {
                zh: "例子 p = 7, q = 17；p-1、p+1、q-1、q+1 都应有大素因子",
                en: "Example p = 7, q = 17; p-1, p+1, q-1 and q+1 should have large prime factors",
                ms: "Contoh p = 7, q = 17; p-1, p+1, q-1 dan q+1 perlu mempunyai faktor perdana besar"
              }
            },
            {
              label: {
                zh: "2. 计算 n = p × q 与 Φ = (p-1)(q-1)",
                en: "2. Compute n = p x q and phi = (p-1)(q-1)",
                ms: "2. Kira n = p x q dan phi = (p-1)(q-1)"
              },
              note: {
                zh: "n = 119，Φ = 96 = 2×2×2×2×3",
                en: "n = 119, phi = 96 = 2 x 2 x 2 x 2 x 3",
                ms: "n = 119, phi = 96 = 2 x 2 x 2 x 2 x 3"
              }
            },
            {
              label: {
                zh: "3. 选公开密钥 e：与 Φ 互素且小于 Φ",
                en: "3. Choose public key e, relatively prime to phi and less than phi",
                ms: "3. Pilih kunci awam e, saling perdana dengan phi dan kurang daripada phi"
              },
              note: {
                zh: "e 不能含因子 2 与 3，可取 5、7、11、13…，例子取 e = 5",
                en: "e must not contain the factors 2 or 3, so 5, 7, 11, 13 are allowed; the example takes e = 5",
                ms: "e tidak boleh mengandungi faktor 2 atau 3, jadi 5, 7, 11, 13 dibenarkan; contoh mengambil e = 5"
              }
            },
            {
              label: {
                zh: "4. 求私钥 d，使 e × d = 1 mod Φ",
                en: "4. Find private key d such that e x d = 1 mod phi",
                ms: "4. Cari kunci peribadi d supaya e x d = 1 mod phi"
              },
              note: {
                zh: "d = 5 的逆元 mod 96 = 77，可用扩展欧几里得算法求逆",
                en: "d = inverse of 5 mod 96 = 77, computed with the extended Euclidean algorithm",
                ms: "d = songsangan 5 mod 96 = 77, dikira dengan algoritma Euclidean lanjutan"
              }
            },
            {
              label: {
                zh: "5. 公开 (n, e)，保密 (n, d) 并销毁 p、q",
                en: "5. Publish (n, e), keep (n, d) secret and destroy p and q",
                ms: "5. Umumkan (n, e), rahsiakan (n, d) dan musnahkan p serta q"
              },
              note: {
                zh: "加密 C = M^e mod n，解密 M = C^d mod n",
                en: "Encryption C = M^e mod n, decryption M = C^d mod n",
                ms: "Penyulitan C = M^e mod n, penyahsulitan M = C^d mod n"
              }
            }
          ]
        }
      ],
      exam: [
        {
          zh: "计算题必考 RSA：给定 p 与 q，要求算出 n、Φ、选取合法的 e、用扩展欧几里得算法求 d，再对给定消息 M 做 C = M^e mod n 加密或 M = C^d mod n 解密；最容易错的是把 Φ 写成 n，或选了与 Φ 不互素的 e。",
          en: "RSA is the standard calculation question: given p and q, you must compute n and phi, choose a valid e, find d with the extended Euclidean algorithm, and then encrypt C = M^e mod n or decrypt M = C^d mod n; the usual mistakes are using n instead of phi, or choosing an e that is not relatively prime to phi.",
          ms: "RSA ialah soalan pengiraan biasa: diberi p dan q, anda perlu mengira n dan phi, memilih e yang sah, mencari d dengan algoritma Euclidean lanjutan, kemudian menyulitkan C = M^e mod n atau menyahsulit M = C^d mod n; kesilapan biasa ialah menggunakan n sebagai ganti phi, atau memilih e yang tidak saling perdana dengan phi."
        },
        {
          zh: "凯撒密码的计算也很常见：记住 C = (p + k) mod 26 与 p = (C - k) mod 26，字母按 0 到 25 编号，且只有 25 种有效移位，所以可以直接暴力搜索；问“meet me after the arsenal game”移位 3 位就得到 PHHW PH DIWHU WKH DUVHQDO JDPH。",
          en: "Caesar cipher arithmetic is also common: remember C = (p + k) mod 26 and p = (C - k) mod 26 with letters numbered 0 to 25, and since there are only 25 useful shifts it can be broken by brute force; shifting the message meet me after the arsenal game by three gives PHHW PH DIWHU WKH DUVHQDO JDPH.",
          ms: "Pengiraan sifer Caesar juga kerap keluar: ingat C = (p + k) mod 26 dan p = (C - k) mod 26 dengan huruf bernombor 0 hingga 25, dan kerana hanya ada 25 anjakan berguna ia boleh dipecahkan dengan carian kekerasan; mesej meet me after the arsenal game yang dianjak tiga menghasilkan PHHW PH DIWHU WKH DUVHQDO JDPH."
        },
        {
          zh: "密钥长度与破解时间的关系常以表格题出现：40 位密钥平均约 5×10 的 11 次方次尝试，56 位 DES 约 3.6×10 的 16 次方次，80 位约 6×10 的 23 次方次，128 位 IDEA 约 2×10 的 38 次方次；要记住的是每增加一位密钥，尝试次数就翻一倍，所以 128 位实际上是暴力破解不可行的。",
          en: "The relation between key length and cracking time often appears as a table question: a 40-bit key needs about 5 x 10^11 trials on average, 56-bit DES about 3.6 x 10^16, an 80-bit key about 6 x 10^23 and the 128-bit IDEA key about 2 x 10^38; the key insight is that every extra key bit doubles the number of trials, so 128 bits is effectively beyond brute force.",
          ms: "Hubungan antara panjang kunci dengan masa pemecahan sering muncul sebagai soalan jadual: kunci 40 bit memerlukan kira-kira 5 x 10^11 cubaan secara purata, DES 56 bit kira-kira 3.6 x 10^16, kunci 80 bit kira-kira 6 x 10^23 dan kunci IDEA 128 bit kira-kira 2 x 10^38; perkara penting ialah setiap bit kunci tambahan menggandakan bilangan cubaan, jadi 128 bit secara praktiknya tidak dapat dipecahkan dengan kekerasan."
        },
        {
          zh: "容易混淆的三组概念：双重 DES 因为中间相遇攻击只相当于 57 位而不是 112 位，所以要用三重 DES；置换密码的密钥空间是 N!，但两次置换叠加没有意义；一次性密码本虽然理论上是完美密码，却要求密钥与消息等长或更长且不能重复使用，因此不实用。",
          en: "Three easily confused points: double DES gives only 57 effective bits instead of 112 because of the meet-in-the-middle attack, which is why triple DES is used; the key space of a permutation cipher is N! yet multiple encipherment does not help; and although the one-time pad is a perfect cipher in theory, it needs a random key as long as or longer than the message that is never reused, so it is impractical.",
          ms: "Tiga perkara yang mudah dikelirukan: DES berganda hanya memberi 57 bit berkesan dan bukan 112 bit kerana serangan pertemuan di tengah, sebab itulah DES tiga kali digunakan; ruang kunci sifer pilihatur ialah N! namun penyulitan berulang tidak membantu; dan walaupun pad sekali guna ialah sifer sempurna dari segi teori, ia memerlukan kunci rawak yang sama panjang atau lebih panjang daripada mesej dan tidak boleh digunakan semula, jadi ia tidak praktikal."
        }
      ],
      mnemonic: {
        zh: "对称一把钥匙快又省，非对称两把钥匙解分发；先替换再换位，反复迭代成乘积密码，DES 十六轮、AES 选 Rijndael、公钥看 RSA。",
        en: "Symmetric uses one shared key - fast and cheap; asymmetric uses a key pair and solves distribution; substitute then permute and iterate into a product cipher - DES for 16 rounds, AES chose Rijndael, and RSA for public key.",
        ms: "Simetri menggunakan satu kunci kongsi - pantas dan murah; tidak simetri menggunakan pasangan kunci dan menyelesaikan pengagihan; gantikan kemudian pilihatur dan ulang menjadi sifer hasil darab - DES 16 pusingan, AES memilih Rijndael, dan RSA bagi kunci awam."
      }
    },
    {
      id: "cs-03",
      num: 3,
      title: {
        zh: "程序安全",
        en: "Program Security",
        ms: "Keselamatan Program"
      },
      file: "cs/CHAPTER 3 - PROGRAM SECURITY.pdf",
      pages: 75,
      summary: {
        zh: "本章讨论程序层面的安全问题：程序是计算机的核心，分为非恶意代码与恶意代码两类，而“安全的程序”意味着程序以某种可信程度实现了预期的机密性、完整性和可用性。本章先区分故障（fault，开发者视角的代码错误）与失效（failure，用户视角的偏离要求行为），指出补丁式修复会带来新问题和副作用。接着分析四类非恶意程序错误——缓冲区溢出、不完整中介、检查时刻到使用时刻（TOCTTOU）错误以及它们的组合，再系统介绍恶意代码的类型（病毒、蠕虫、兔子、特洛伊木马、陷阱门、逻辑炸弹、时间炸弹）、病毒的传播与附着方式、病毒签名与检测手段，以及木马、根套件、僵尸、Salami 攻击、隐蔽信道等威胁。最后给出开发控制、操作系统控制和管理控制三类对抗程序威胁的措施。",
        en: "This chapter examines security at the program level: programs are pieces of code and the heart of computing, they divide into non-malicious and malicious code, and a secure program implies some degree of trust that it enforces the expected confidentiality, integrity and availability. The chapter first distinguishes a fault (an incorrect step caused by human error, the developer view) from a failure (a departure from required behaviour, the user view), and notes that penetrate-and-patch repairs introduce further problems and side effects. It then analyses four non-malicious program errors - buffer overflows, incomplete mediation, time-of-check to time-of-use errors and combinations of them - before surveying malicious code: viruses, worms, rabbits, Trojan horses, trapdoors, logic bombs and time bombs, how viruses spread and attach, virus signatures and detection, and further threats such as rootkits, zombies, salami attacks and covert channels. It closes with developmental, operating system and administrative controls against program threats.",
        ms: "Bab ini meneliti keselamatan pada peringkat program: program ialah kepingan kod dan nadi pengkomputeran, ia terbahagi kepada kod tidak berniat jahat dan kod berniat jahat, dan program yang selamat membayangkan tahap kepercayaan tertentu bahawa ia menegakkan kerahsiaan, integriti dan ketersediaan yang dijangka. Bab ini terlebih dahulu membezakan kecacatan (langkah salah akibat kesilapan manusia, pandangan pembangun) daripada kegagalan (penyimpangan daripada tingkah laku yang diperlukan, pandangan pengguna), serta menyatakan bahawa pembaikan secara tembus-dan-tampal membawa masalah baharu dan kesan sampingan. Seterusnya ia menganalisis empat ralat program tidak berniat jahat - limpahan penimbal, pengantaraan tidak lengkap, ralat masa semakan hingga masa penggunaan dan gabungannya - sebelum meninjau kod berniat jahat: virus, cecacing, arnab, kuda Troy, pintu perangkap, bom logik dan bom masa, cara virus merebak dan melekat, tandatangan virus serta pengesanannya, dan ancaman lain seperti kit akar, zombi, serangan salami dan saluran tersembunyi. Bab ini diakhiri dengan kawalan pembangunan, kawalan sistem pengendalian dan kawalan pentadbiran terhadap ancaman program."
      },
      points: [
        {
          zh: "程序是计算机的核心，例如操作系统、设备驱动程序、网络基础设施、数据库管理系统、可执行文件和各种应用；程序分非恶意代码与恶意代码两类，说一个程序“安全”意味着它在某种程度上可信地保证了机密性、完整性和可用性，但不同的人对安全软件的理解并不相同，取决于谁在分析软件、以及他关心哪些特性。",
          en: "Programs are pieces of code and the heart of computing - operating systems, device drivers, network infrastructure, DBMSs, .exe files and applications; they are either non-malicious or malicious code, and calling a program secure implies some degree of trust that it enforces the expected confidentiality, integrity and availability, although different people give different answers because the importance of those characteristics depends on who is analysing the software.",
          ms: "Program ialah kepingan kod dan nadi pengkomputeran - sistem pengendalian, pemacu peranti, infrastruktur rangkaian, DBMS, fail .exe dan aplikasi; ia sama ada kod tidak berniat jahat atau kod berniat jahat, dan menggelar sesuatu program selamat bermakna wujud tahap kepercayaan tertentu bahawa ia menegakkan kerahsiaan, integriti dan ketersediaan yang dijangka, walaupun jawapan berbeza antara individu kerana kepentingan ciri-ciri itu bergantung pada siapa yang menganalisis perisian tersebut."
        },
        {
          zh: "必须区分故障与失效：故障（fault）是程序中由人的错误造成的不正确步骤、命令或过程，是开发者看到的内部视图；失效（failure）是系统偏离了所要求的行为，是用户看到的外部视图。修复故障常用“穿透并打补丁”（penetrate and patch）的办法，但补丁本身会引入更多问题并产生副作用，因此不能只靠打补丁，而要从开发过程入手；程序安全缺陷是由程序脆弱性引起的不当行为，可能来自任何软件故障，例如含特洛伊木马的程序虽然脆弱，用户却看不出安全缺陷。",
          en: "A fault must be distinguished from a failure: a fault is an incorrect step, command or process in a program caused by human error and is the inside view seen by developers, whereas a failure is a departure from the system's required behaviour and is the outside view seen by users. Faults are often fixed by penetrating and patching, but patches themselves introduce more problems and cause side effects, so patching alone is not enough and the development process must be addressed; a program security flaw is inappropriate program behaviour caused by a program vulnerability, it can derive from any kind of software fault, and a program containing a Trojan horse is vulnerable even though the user may see no security flaw.",
          ms: "Kecacatan perlu dibezakan daripada kegagalan: kecacatan ialah langkah, arahan atau proses yang salah dalam program akibat kesilapan manusia dan merupakan pandangan dalaman pembangun, manakala kegagalan ialah penyimpangan daripada tingkah laku yang diperlukan oleh sistem dan merupakan pandangan luaran pengguna. Kecacatan sering dibaiki dengan kaedah tembus dan tampal, tetapi tampalan itu sendiri membawa lebih banyak masalah dan menyebabkan kesan sampingan, jadi tampalan sahaja tidak mencukupi dan proses pembangunan perlu ditangani; kecacatan keselamatan program ialah tingkah laku program yang tidak wajar akibat kerentanan program, ia boleh berpunca daripada apa-apa jenis kecacatan perisian, dan program yang mengandungi kuda Troy tetap terdedah walaupun pengguna tidak nampak kecacatan keselamatannya."
        },
        {
          zh: "缺陷可分为有意造成的（恶意缺陷与非恶意缺陷）与无意的人为错误，后者包括验证错误、域错误、串行化与别名问题、身份识别与认证不充分、边界条件违例和逻辑错误；非恶意程序错误有四个主要关注点：缓冲区溢出、不完整中介、检查时刻到使用时刻错误，以及把这些缺陷组合起来的多步攻击。",
          en: "Flaws are either intentionally induced (malicious and non-malicious flaws) or inadvertent human errors, the latter including validation errors, domain errors, serialization and aliasing problems, inadequate identification and authentication, boundary condition violations and logic errors; non-malicious program errors have four main concerns: buffer overflows, incomplete mediation, time-of-check to time-of-use errors, and combinations of these flaws in a multi-step attack.",
          ms: "Kecacatan sama ada diinduksi secara sengaja (kecacatan berniat jahat dan tidak berniat jahat) atau berpunca daripada kesilapan manusia yang tidak disengajakan, yang kedua termasuk ralat pengesahan, ralat domain, masalah pensirian dan pengaliasan, pengenalpastian dan pengesahan yang tidak mencukupi, pelanggaran syarat sempadan dan ralat logik; ralat program tidak berniat jahat mempunyai empat perhatian utama: limpahan penimbal, pengantaraan tidak lengkap, ralat masa semakan hingga masa penggunaan, dan gabungan kecacatan ini dalam serangan berbilang langkah."
        },
        {
          zh: "缓冲区溢出是最典型的程序错误：缓冲区（数组或字符串）在内存中保存数据，容量有限，就像把 2 加仑水倒进 1 加仑的水壶；声明 char sample[10] 后写下 sample[10] = 'B' 就越界，会覆盖相邻变量、用户数据结构、用户程序代码、系统数据结构甚至系统程序代码，后两种情况会让系统不稳定，并让攻击者的代码以系统权限运行。缓冲区溢出经常被利用：攻击者可以替换系统空间中的代码，在从他自己的过程返回后立刻改写若干指令，从而以更高权限从操作系统夺回控制权；也可以利用栈指针或返回寄存器，因为子过程调用依靠栈这种“后进先出”的数据结构。另一种形式是把参数传给例程，尤其是把参数传给互联网上的 Web 服务器，参数写在 URL 行中，攻击者可以提交 500 到 1000 位长的电话号码来试探服务器的处理。",
          en: "A buffer overflow is the classic program error: a buffer (an array or string) holds data in memory, its capacity is finite, and overflowing it is like pouring two gallons of water into a one-gallon pitcher; after declaring char sample[10], writing sample[10] = 'B' is out of bounds and can overwrite adjacent variables, the user's own data structures, the user's program code, system data structures or even system program code, and the last two cases destabilise the system and let the attacker's code run with system privileges. Buffer overflows are frequently exploited: the attacker may replace code in the system space, overwriting a few instructions right after returning from his or her own procedure to regain control from the operating system with raised privileges, or may make use of the stack pointer or the return register, because sub-procedure calls are handled with a last-arrived-first-served stack; another form occurs when parameter values are passed into a routine, especially to a web server on the Internet where parameters travel in the URL line, so the attacker may submit a telephone number of 500 or 1000 digits.",
          ms: "Limpahan penimbal ialah ralat program yang klasik: penimbal (tatasusunan atau rentetan) menyimpan data dalam ingatan, kapasitinya terhad, dan melimpahinya seperti menuang dua gelen air ke dalam jag satu gelen; selepas mengisytiharkan char sample[10], menulis sample[10] = 'B' berada di luar sempadan dan boleh menulis ganti pemboleh ubah bersebelahan, struktur data pengguna sendiri, kod program pengguna, struktur data sistem atau kod program sistem, dan dua kes terakhir menggugat kestabilan sistem serta membolehkan kod penyerang berjalan dengan keistimewaan sistem. Limpahan penimbal sering dieksploitasi: penyerang boleh menggantikan kod dalam ruang sistem, menulis ganti beberapa arahan sebaik sahaja pulang daripada prosedurnya sendiri untuk merampas semula kawalan daripada sistem pengendalian dengan keistimewaan yang lebih tinggi, atau menggunakan penunjuk tindanan atau daftar pulangan kerana panggilan subprosedur dikendalikan dengan tindanan yang bersifat masuk terakhir keluar dahulu; satu lagi bentuk berlaku apabila nilai parameter dihantar ke sesuatu rutin, terutamanya kepada pelayan web di Internet yang menerima parameter dalam baris URL, jadi penyerang boleh menghantar nombor telefon sepanjang 500 atau 1000 digit."
        },
        {
          zh: "不完整中介发生在访问没有被普遍检查的时候，未经验证的取值会构成严重隐患：讲义中真实案例是网站把商品价格作为参数传回给自己，顾客看到的 URL 里 price = 10、total = 205，攻击者把参数改成 price = 1、total = 25，就用 25 元买下了原本 205 元的商品；同理，日期参数若提交 1800Jan01 或 1Aardvark2Many 也会造成问题。",
          en: "Incomplete mediation occurs when access is not checked universally, so unchecked data values represent a serious potential vulnerability: in the true case described, a company passed the price of items back to itself as parameters, the customer's browser showed price = 10 and total = 205, and the attacker changed them to price = 1 and total = 25 to buy for 25 dollars what should have cost 205; similarly, submitting a date parameter such as 1800Jan01 or 1Aardvark2Many causes trouble.",
          ms: "Pengantaraan tidak lengkap berlaku apabila akses tidak diperiksa secara menyeluruh, jadi nilai data yang tidak disemak menjadi kerentanan berpotensi yang serius: dalam kes benar yang dibincangkan, sebuah syarikat menghantar semula harga barang kepada dirinya sendiri sebagai parameter, pelayar pelanggan memaparkan price = 10 dan total = 205, lalu penyerang menukarnya kepada price = 1 dan total = 25 untuk membeli pada harga 25 dolar apa yang sepatutnya berharga 205 dolar; begitu juga, menghantar parameter tarikh seperti 1800Jan01 atau 1Aardvark2Many menimbulkan masalah."
        },
        {
          zh: "检查时刻到使用时刻（TOCTTOU）错误利用了检查与使用之间的时间差，也叫串行化或同步缺陷，形象比喻是买卖双方谈好价钱、买方点完钱后又悄悄抽走一部分再付款；例如访问控制中介在查表检查 myfile 的权限时，用户把文件名描述符改成 yourfile，检查结果就失效了，这就是“挂羊头卖狗肉”式的无效访问控制。防范办法是不要在失去控制权期间暴露关键参数、验证期间不允许中断，并把参数从用户空间复制到例程自己的区域。",
          en: "A time-of-check to time-of-use (TOCTTOU) error exploits the delay between the time access was checked and the time the result of the check was used; it is also called a serialization or synchronization flaw and is illustrated by agreeing on a price, counting the money and then taking part of it back before payment; for example, while the access control mediator looks up the permissions of myfile the user changes the file name descriptor to yourfile, so the check is invalidated and access control becomes ineffective bait-and-switch. The defences are not to expose critical parameters during any loss of control, to allow no interruption during validation, and to copy the data from the user's space into the routine's own area.",
          ms: "Ralat masa semakan hingga masa penggunaan (TOCTTOU) mengeksploitasi selang masa antara masa akses disemak dengan masa hasil semakan itu digunakan; ia turut dipanggil kecacatan pensirian atau penyegerakan dan diumpamakan dengan bersetuju pada harga, mengira wang, kemudian mengambil semula sebahagian wang sebelum pembayaran; contohnya, semasa perantara kawalan akses menyemak kebenaran bagi myfile, pengguna menukar deskriptor nama fail kepada yourfile sehingga hasil semakan tidak lagi sah dan kawalan akses menjadi tidak berkesan. Langkah pencegahannya ialah jangan mendedahkan parameter kritikal semasa kehilangan kawalan, jangan benarkan gangguan semasa pengesahan, dan salin data daripada ruang pengguna ke kawasan rutin itu sendiri."
        },
        {
          zh: "恶意代码有七种基本类型，特征各不相同：病毒把自己附到程序上并向其他程序传播副本；蠕虫通过网络自我传播；兔子无限制地复制自己以耗尽资源；特洛伊木马含有意料之外的额外功能；逻辑炸弹在条件满足时触发动作；时间炸弹在指定时间触发；陷阱门则留下未记录在案的入口，让未授权者访问功能。",
          en: "Malicious code has seven basic types with distinct characteristics: a virus attaches itself to a program and propagates copies of itself to other programs; a worm propagates copies of itself through a network; a rabbit replicates itself without limit to exhaust resources; a Trojan horse contains unexpected additional functionality; a logic bomb triggers an action when a condition occurs; a time bomb triggers an action at a specified time; and a trapdoor allows unauthorised access to functionality.",
          ms: "Kod berniat jahat mempunyai tujuh jenis asas dengan ciri yang berbeza: virus melekatkan dirinya pada program dan menyebarkan salinannya kepada program lain; cecacing menyebarkan salinannya melalui rangkaian; arnab mereplikasi dirinya tanpa had sehingga menghabiskan sumber; kuda Troy mengandungi fungsi tambahan yang tidak dijangka; bom logik mencetuskan tindakan apabila sesuatu syarat berlaku; bom masa mencetuskan tindakan pada masa yang ditetapkan; manakala pintu perangkap membenarkan akses tanpa kebenaran kepada fungsi tertentu."
        },
        {
          zh: "病毒通过运行或安装带毒程序、自动执行的邮件附件、可执行 zip 文件和宏来传播，其附着方式有四种：附加在程序后面（程序一运行病毒先执行，然后才执行原来的第一条指令）、包围程序、与程序融为一体或直接替换程序，以及文档宏病毒；病毒难以检测、不易清除、传播广泛、能反复感染，而且容易编写、与机器和操作系统无关。病毒要取得控制权可以替换宿主程序、感染引导扇区、驻留内存或利用宏；检测病毒可以依靠病毒签名、存储模式、执行模式和传输模式（引导过程、磁盘访问、网络连接）。病毒不可能完全隐形，因为代码必须存放并载入内存执行，这些特征会留下可识别的模式即签名，病毒扫描程序正是据此检测甚至清除病毒，而多态病毒让签名检测变得更加困难；病毒运行分四个阶段：潜伏、传播、触发和执行载荷。",
          en: "Viruses spread by running or installing infected programs, through e-mail attachments that execute automatically, executable zip files and macros, and they attach in four ways: appended to a program (the virus runs first whenever the program runs and control then flows to what used to be the first instruction), surrounding a program, integrated into or completely replacing a program, and document macro viruses; viruses are difficult to detect, not easily destroyed or deactivated, spread infection widely, can re-infect programs, and are easy to create and machine or OS independent. A virus gains control by replacing the home program, by boot sector infection, by becoming memory resident or through macros; detection can rely on the virus signature, on storage patterns, execution patterns and transmission patterns such as the boot process, disk access and network connections. A virus cannot be completely invisible because its code must be stored somewhere and must be in memory to execute, and these characteristics yield telltale patterns called signatures, which is what a virus scanner uses to detect and sometimes remove viruses, while polymorphic viruses make signature detection harder; virus operation has four phases: dormant, propagation, triggering and execution of the payload.",
          ms: "Virus merebak melalui menjalankan atau memasang program yang dijangkiti, lampiran e-mel yang dijalankan secara automatik, fail zip yang boleh dilaksanakan dan makro, dan ia melekat dalam empat cara: ditambah pada penghujung program (virus berjalan dahulu setiap kali program dijalankan dan kawalan kemudian berpindah kepada arahan pertama yang asal), mengelilingi program, bersepadu dengan atau menggantikan program sepenuhnya, serta virus makro dokumen; virus sukar dikesan, tidak mudah dimusnahkan atau dinyahaktifkan, merebak dengan meluas, boleh menjangkiti semula program, mudah dicipta serta bebas daripada mesin dan sistem pengendalian. Virus memperoleh kawalan dengan menggantikan program perumah, melalui jangkitan sektor but, dengan menetap dalam ingatan atau melalui makro; pengesanan boleh bergantung pada tandatangan virus, corak penyimpanan, corak pelaksanaan dan corak penghantaran seperti proses but, akses cakera dan sambungan rangkaian. Virus tidak boleh benar-benar halimunan kerana kodnya mesti disimpan di suatu tempat dan mesti berada dalam ingatan untuk dilaksanakan, lalu ciri-ciri ini menghasilkan corak yang mudah dikenali yang dipanggil tandatangan, dan itulah yang digunakan oleh pengimbas virus untuk mengesan dan kadangkala membuang virus, manakala virus polimorfik menyukarkan pengesanan tandatangan; operasi virus mempunyai empat fasa: dorman, pembiakan, pencetusan dan pelaksanaan muatan."
        },
        {
          zh: "除病毒外还有多种恶意程序：特洛伊木马伪装成有用程序（如游戏或软件升级），不自我复制，运行后执行额外任务、为攻击者提供间接访问、传播病毒蠕虫或安装后门；根套件极力隐藏自己并在被删除后设法重建，可让远端控制计算机，例如拦截目录命令并删掉自己的条目，或像 XCP 那样阻止用户复制音乐 CD；僵尸程序秘密接管联网计算机用来发起分布式拒绝服务攻击；Salami 攻击把每次计算中微不足道的小额（如半美分）削下来积累；逻辑炸弹藏在合法程序中，在特定条件（文件出现、特定日期时间、特定用户或按键序列）满足时破坏系统。",
          en: "Beyond viruses there are many other malicious programs: a Trojan horse disguises itself as a useful program such as a game or a software upgrade, does not replicate, and when run performs additional tasks, gives the attacker indirect access, propagates a virus or worm, or installs a backdoor; a rootkit goes to great lengths not to be discovered and to re-establish itself when removed, allows someone at a remote location to take control of the computer, for example by intercepting the directory command and deleting its own entry, or like XCP prevents a user from copying a music CD; a zombie secretly takes over another networked computer and is used to launch distributed denial of service attacks; a salami attack shaves seemingly inconsequential amounts such as half a cent from each computation and accumulates them elsewhere; and a logic bomb hides in a legitimate program and damages the system when specified conditions such as the presence of a file, a particular date and time, a particular user or a series of keystrokes are met.",
          ms: "Selain virus terdapat banyak program berniat jahat yang lain: kuda Troy menyamar sebagai program berguna seperti permainan atau peningkatan perisian, tidak mereplikasi diri, dan apabila dijalankan melaksanakan tugas tambahan, memberi penyerang akses tidak langsung, menyebarkan virus atau cecacing, atau memasang pintu belakang; kit akar berusaha bersungguh-sungguh untuk tidak dikesan dan membina semula dirinya apabila dibuang, membolehkan seseorang dari lokasi jauh mengawal komputer, contohnya dengan memintas arahan direktori dan memadamkan entri dirinya sendiri, atau seperti XCP menghalang pengguna menyalin CD muzik; zombi secara rahsia merampas komputer lain dalam rangkaian dan digunakan untuk melancarkan serangan penafian perkhidmatan teragih; serangan salami memotong jumlah kecil yang kelihatan tidak bermakna seperti setengah sen daripada setiap pengiraan dan mengumpulkannya di tempat lain; manakala bom logik bersembunyi dalam program sah dan merosakkan sistem apabila syarat tertentu seperti kewujudan fail, tarikh dan masa tertentu, pengguna tertentu atau urutan ketukan kekunci dipenuhi."
        },
        {
          zh: "程序还可能通过隐蔽信道泄漏信息，即以不被注意的方式把数据写入磁盘、送上网络、放进文件或打印件；隐蔽信道分存储信道（依据数据存在与否传递信息）、文件锁信道（依据文件是否被锁定）和时间信道（改变系统速度或占用/不占用分配的计算时间）。此外还有权限提升、界面错觉（网页全部或部分造假）、键盘记录、中间人攻击和时间攻击等类型。对抗程序威胁有三类控制：开发控制包括模块化、封装与信息隐藏、同行评审（评审、走查、检查）、危害分析、测试、良好设计、预测、静态分析、配置管理和从错误中学习；操作系统控制包括可信软件、互相怀疑、访问日志和限制（confinement）；管理控制包括程序开发标准和职责分离。真实案例 ILOVEYOU 病毒 2000 年 5 月 4 日爆发，来自菲律宾、用 VBScript 编写，一天内感染约 4500 万用户，迫使福特汽车等大企业关闭邮件系统，说明程序层威胁的破坏力。",
          en: "Programs can also leak information through covert channels, that is, unnoticed communication that accompanies other information written to a drive, sent across a network, placed in a file or printout; covert channels are classified as storage channels (information passes by the presence or non-presence of data), file lock channels (by the lock or non-lock of a file) and timing channels (by varying speed in the system or not using assigned computational time). Other types include privilege escalation, interface illusions where all or part of a web page is false, keystroke logging, man-in-the-middle attacks and timing attacks. There are three kinds of control against program threats: developmental controls such as modularity, encapsulation and information hiding, peer reviews (review, walk-through, inspection), hazard analysis, testing, good design, prediction, static analysis, configuration management and lessons from mistakes; operating system controls such as trusted software, mutual suspicion, access logs and confinement; and administrative controls such as standards of program development and separation of duties. The real case of the ILOVEYOU virus, released on 4 May 2000, written in VBScript and originating in the Philippines, infected an estimated 45 million users in a single day and forced major enterprises such as Ford Motor Company to shut down e-mail, showing how damaging program-level threats can be.",
          ms: "Program juga boleh membocorkan maklumat melalui saluran tersembunyi, iaitu komunikasi yang tidak disedari yang mengiringi maklumat lain yang ditulis ke cakera, dihantar melalui rangkaian, diletakkan dalam fail atau cetakan; saluran tersembunyi dikelaskan kepada saluran penyimpanan (maklumat dihantar melalui kehadiran atau ketiadaan data), saluran kunci fail (melalui keadaan fail dikunci atau tidak) dan saluran masa (dengan mengubah kelajuan sistem atau tidak menggunakan masa pengiraan yang diperuntukkan). Jenis lain termasuk peningkatan keistimewaan, ilusi antara muka apabila sebahagian atau seluruh halaman web adalah palsu, perakaman ketukan kekunci, serangan orang tengah dan serangan masa. Terdapat tiga jenis kawalan terhadap ancaman program: kawalan pembangunan seperti modulariti, enkapsulasi dan penyembunyian maklumat, semakan rakan sebaya (semakan, lintasan, pemeriksaan), analisis bahaya, pengujian, reka bentuk yang baik, ramalan, analisis statik, pengurusan konfigurasi dan pengajaran daripada kesilapan; kawalan sistem pengendalian seperti perisian dipercayai, saling syak, log akses dan pengurungan; serta kawalan pentadbiran seperti piawaian pembangunan program dan pemisahan tugas. Kes sebenar virus ILOVEYOU yang muncul pada 4 Mei 2000, ditulis dalam VBScript dan berasal dari Filipina, menjangkiti kira-kira 45 juta pengguna dalam satu hari dan memaksa syarikat besar seperti Ford Motor Company menutup sistem e-mel, membuktikan betapa besarnya kemusnahan ancaman pada peringkat program."
        }
      ],
      terms: [
        {
          en: "Fault",
          zh: "故障（缺陷）",
          ms: "Kecacatan",
          def: {
            zh: "程序中由人的错误造成的不正确步骤、命令或过程，是开发者看到的内部视图。",
            en: "An incorrect step, command or process in a program caused by human error; it is the inside view seen by developers.",
            ms: "Langkah, arahan atau proses yang salah dalam program akibat kesilapan manusia; ia merupakan pandangan dalaman pembangun."
          }
        },
        {
          en: "Failure",
          zh: "失效",
          ms: "Kegagalan",
          def: {
            zh: "系统偏离所要求的行为，是用户看到的外部视图。",
            en: "A departure from the system's required behaviour; it is the outside view seen by users.",
            ms: "Penyimpangan daripada tingkah laku yang diperlukan oleh sistem; ia merupakan pandangan luaran pengguna."
          }
        },
        {
          en: "Buffer Overflow",
          zh: "缓冲区溢出",
          ms: "Limpahan Penimbal",
          def: {
            zh: "写入超过缓冲区容量的数据，多余数据溢出并覆盖相邻的内存内容，可能覆盖系统数据结构甚至系统代码。",
            en: "Writing more data than a buffer can hold so that the extra data overflows and overwrites adjacent memory, possibly including system data structures or system code.",
            ms: "Menulis data melebihi kapasiti penimbal sehingga data berlebihan melimpah dan menulis ganti kandungan ingatan bersebelahan, mungkin termasuk struktur data sistem atau kod sistem."
          }
        },
        {
          en: "Incomplete Mediation",
          zh: "不完整中介",
          ms: "Pengantaraan Tidak Lengkap",
          def: {
            zh: "访问没有被普遍检查，未经验证的参数（如网页表单中的价格、日期）被直接接受，从而形成严重漏洞。",
            en: "Access is not checked universally, so unchecked values such as web form prices or dates are accepted directly and become a serious vulnerability.",
            ms: "Akses tidak diperiksa secara menyeluruh, jadi nilai yang tidak disemak seperti harga atau tarikh dalam borang web diterima terus dan menjadi kerentanan serius."
          }
        },
        {
          en: "Time-of-Check to Time-of-Use (TOCTTOU)",
          zh: "检查时刻到使用时刻错误",
          ms: "Ralat Masa Semakan hingga Masa Penggunaan",
          def: {
            zh: "利用检查与使用之间的时间差，在检查通过之后、结果被使用之前改变条件，使检查失效，也叫串行化或同步缺陷。",
            en: "Exploiting the delay between the time access is checked and the time the result is used by changing the condition in between, also called a serialization or synchronization flaw.",
            ms: "Mengeksploitasi selang masa antara semakan akses dengan penggunaan hasilnya dengan mengubah keadaan di antaranya; turut dipanggil kecacatan pensirian atau penyegerakan."
          }
        },
        {
          en: "Virus",
          zh: "病毒",
          ms: "Virus",
          def: {
            zh: "把自己附加到程序上并向其他程序传播自身副本的恶意代码，其运行分潜伏、传播、触发和执行四个阶段。",
            en: "Malicious code that attaches itself to a program and propagates copies of itself to other programs; its operation has dormant, propagation, triggering and execution phases.",
            ms: "Kod berniat jahat yang melekat pada program dan menyebarkan salinannya kepada program lain; operasinya mempunyai fasa dorman, pembiakan, pencetusan dan pelaksanaan."
          }
        },
        {
          en: "Worm",
          zh: "蠕虫",
          ms: "Cecacing",
          def: {
            zh: "通过网络传播自身副本、并可作为独立程序存在的恶意代码，例如 Code Red。",
            en: "Malicious code that propagates copies of itself through a network and can also copy itself as a stand-alone program, for example Code Red.",
            ms: "Kod berniat jahat yang menyebarkan salinannya melalui rangkaian dan boleh menyalin dirinya sebagai program berdiri sendiri, contohnya Code Red."
          }
        },
        {
          en: "Trojan Horse",
          zh: "特洛伊木马",
          ms: "Kuda Troy",
          def: {
            zh: "隐藏在合法程序中或伪装成合法程序的恶意代码，看似只有一个功能却执行另一个功能，它不自我复制，常用来安放后门或传播病毒蠕虫。",
            en: "Malicious code hidden within or disguised as a legitimate program that appears to have one function but performs another; it does not replicate and is often used to install a backdoor or propagate viruses and worms.",
            ms: "Kod berniat jahat yang tersembunyi dalam atau menyamar sebagai program sah, kelihatan mempunyai satu fungsi tetapi melaksanakan fungsi lain; ia tidak mereplikasi dan sering digunakan untuk memasang pintu belakang atau menyebarkan virus dan cecacing."
          }
        },
        {
          en: "Trapdoor",
          zh: "陷阱门",
          ms: "Pintu Perangkap",
          def: {
            zh: "模块中未记录在案的入口点，开发者可能为测试、维护或将来改进而留下，但如果未移除或被故意保留，就成为未授权访问的通道。",
            en: "An undocumented entry point to a module, inserted by developers for testing, maintenance or future enhancement, which becomes a channel for unauthorised access if it is not removed or is deliberately kept.",
            ms: "Titik masuk yang tidak didokumenkan ke dalam sesuatu modul, dimasukkan oleh pembangun untuk pengujian, penyelenggaraan atau penambahbaikan masa hadapan, dan menjadi saluran akses tanpa kebenaran jika tidak dibuang atau sengaja dikekalkan."
          }
        },
        {
          en: "Logic Bomb",
          zh: "逻辑炸弹",
          ms: "Bom Logik",
          def: {
            zh: "嵌入合法程序中、在特定条件满足时才激活的恶意代码，条件可以是某个文件存在与否、特定日期时间、特定用户或特定按键序列。",
            en: "Malicious code embedded in a legitimate program that activates only when specified conditions are met, such as the presence or absence of a file, a particular date and time, a particular user or a series of keystrokes.",
            ms: "Kod berniat jahat yang tertanam dalam program sah dan hanya aktif apabila syarat tertentu dipenuhi, seperti kewujudan atau ketiadaan fail, tarikh dan masa tertentu, pengguna tertentu atau urutan ketukan kekunci."
          }
        },
        {
          en: "Rootkit",
          zh: "根套件",
          ms: "Kit Akar",
          def: {
            zh: "极力隐藏自己、并在被发现删除后设法重建的恶意代码，能让远端人员控制计算机、执行程序、更改设置、监视活动和访问文件。",
            en: "Malicious code that goes to great lengths not to be discovered and to re-establish itself when removed, allowing someone at a remote location to control the computer, execute programs, change settings, monitor activities and access files.",
            ms: "Kod berniat jahat yang berusaha bersungguh-sungguh untuk tidak dikesan dan membina semula dirinya apabila dibuang, membolehkan seseorang dari lokasi jauh mengawal komputer, melaksanakan program, mengubah tetapan, memantau aktiviti dan mengakses fail."
          }
        },
        {
          en: "Zombie",
          zh: "僵尸程序",
          ms: "Zombi",
          def: {
            zh: "秘密接管另一台联网计算机的程序，随后利用它间接发起攻击，常用于发动分布式拒绝服务攻击，并利用网络系统中已知的缺陷。",
            en: "A program that secretly takes over another networked computer and then uses it to launch attacks indirectly, often for distributed denial of service attacks, exploiting known flaws in network systems.",
            ms: "Program yang secara rahsia merampas komputer lain dalam rangkaian dan kemudian menggunakannya untuk melancarkan serangan secara tidak langsung, selalunya bagi serangan penafian perkhidmatan teragih, dengan mengeksploitasi kelemahan yang diketahui dalam sistem rangkaian."
          }
        },
        {
          en: "Salami Attack",
          zh: "Salami 攻击（蚕食攻击）",
          ms: "Serangan Salami",
          def: {
            zh: "把看似微不足道的小额数据（如每次计算中的半美分）削下来并累积到别处，从而汇成可观的非法所得。",
            en: "Merging bits of seemingly inconsequential data, such as shaving half a cent from each computation, and accumulating them elsewhere to produce a powerful result.",
            ms: "Menggabungkan kepingan data yang kelihatan tidak bermakna, seperti memotong setengah sen daripada setiap pengiraan, dan mengumpulkannya di tempat lain untuk menghasilkan kesan yang besar."
          }
        },
        {
          en: "Covert Channel",
          zh: "隐蔽信道",
          ms: "Saluran Tersembunyi",
          def: {
            zh: "把信息传递给不应收到该信息者的通道，包括按数据有无传递信息的存储信道、按文件是否加锁传递信息的文件锁信道，以及改变系统速度或计算时间占用的时间信道。",
            en: "A channel that communicates information to people who should not receive it, including storage channels based on the presence or non-presence of data, file lock channels based on whether a file is locked, and timing channels that vary system speed or the use of assigned computational time.",
            ms: "Saluran yang menyampaikan maklumat kepada pihak yang tidak sepatutnya menerimanya, termasuk saluran penyimpanan berdasarkan kehadiran atau ketiadaan data, saluran kunci fail berdasarkan sama ada fail dikunci, dan saluran masa yang mengubah kelajuan sistem atau penggunaan masa pengiraan yang diperuntukkan."
          }
        },
        {
          en: "Virus Signature",
          zh: "病毒签名",
          ms: "Tandatangan Virus",
          def: {
            zh: "病毒代码存放与执行时留下的可识别模式，病毒扫描程序据此检测甚至清除病毒；多态病毒会使签名检测变难。",
            en: "The telltale pattern left by a virus because its code must be stored and must be in memory to execute; virus scanners use signatures to detect and sometimes remove viruses, and polymorphic viruses make this harder.",
            ms: "Corak yang mudah dikenali yang ditinggalkan oleh virus kerana kodnya mesti disimpan dan berada dalam ingatan untuk dilaksanakan; pengimbas virus menggunakan tandatangan untuk mengesan dan kadangkala membuang virus, dan virus polimorfik menyukarkannya."
          }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: {
            zh: "病毒的四个运行阶段",
            en: "The Four Phases of Virus Operation",
            ms: "Empat Fasa Operasi Virus"
          },
          steps: [
            {
              label: {
                zh: "潜伏 Dormant",
                en: "Dormant",
                ms: "Dorman"
              },
              note: {
                zh: "等待触发事件",
                en: "Waiting on a trigger event",
                ms: "Menunggu peristiwa pencetus"
              }
            },
            {
              label: {
                zh: "传播 Propagation",
                en: "Propagation",
                ms: "Pembiakan"
              },
              note: {
                zh: "向其他程序或磁盘复制自身",
                en: "Replicating to programs or disks",
                ms: "Mereplikasi ke program atau cakera"
              }
            },
            {
              label: {
                zh: "触发 Triggering",
                en: "Triggering",
                ms: "Pencetusan"
              },
              note: {
                zh: "被某个事件激活以执行载荷",
                en: "Activated by an event to execute the payload",
                ms: "Diaktifkan oleh sesuatu peristiwa untuk melaksanakan muatan"
              }
            },
            {
              label: {
                zh: "执行 Execution",
                en: "Execution",
                ms: "Pelaksanaan"
              },
              note: {
                zh: "执行载荷，通常与机器和操作系统相关",
                en: "The payload runs; details are usually machine and OS specific",
                ms: "Muatan dijalankan; butirannya biasanya bergantung pada mesin dan sistem pengendalian"
              }
            }
          ]
        },
        {
          type: "tree",
          title: {
            zh: "恶意代码分类（讲义七种基本类型）",
            en: "Taxonomy of Malicious Code (Seven Basic Types)",
            ms: "Taksonomi Kod Berniat Jahat (Tujuh Jenis Asas)"
          },
          root: {
            label: {
              zh: "恶意代码",
              en: "Malicious Code",
              ms: "Kod Berniat Jahat"
            }
          },
          branches: [
            {
              label: {
                zh: "会自我复制的",
                en: "Self-replicating",
                ms: "Mereplikasi sendiri"
              },
              leaves: [
                {
                  label: {
                    zh: "病毒：附着到程序并传播副本",
                    en: "Virus: attaches to a program and propagates copies",
                    ms: "Virus: melekat pada program dan menyebarkan salinan"
                  }
                },
                {
                  label: {
                    zh: "蠕虫：通过网络传播副本",
                    en: "Worm: propagates copies through a network",
                    ms: "Cecacing: menyebarkan salinan melalui rangkaian"
                  }
                },
                {
                  label: {
                    zh: "兔子：无限复制以耗尽资源",
                    en: "Rabbit: replicates without limit to exhaust resources",
                    ms: "Arnab: mereplikasi tanpa had untuk menghabiskan sumber"
                  }
                }
              ]
            },
            {
              label: {
                zh: "带隐藏功能的",
                en: "Hidden functionality",
                ms: "Fungsi tersembunyi"
              },
              leaves: [
                {
                  label: {
                    zh: "特洛伊木马：含意料之外的额外功能",
                    en: "Trojan horse: contains unexpected additional functionality",
                    ms: "Kuda Troy: mengandungi fungsi tambahan yang tidak dijangka"
                  }
                },
                {
                  label: {
                    zh: "陷阱门：允许未授权访问功能",
                    en: "Trapdoor: allows unauthorised access to functionality",
                    ms: "Pintu Perangkap: membenarkan akses tanpa kebenaran kepada fungsi"
                  }
                }
              ]
            },
            {
              label: {
                zh: "按条件或时间触发的",
                en: "Triggered by condition or time",
                ms: "Dicetuskan oleh syarat atau masa"
              },
              leaves: [
                {
                  label: {
                    zh: "逻辑炸弹：条件出现时触发",
                    en: "Logic bomb: triggers action when a condition occurs",
                    ms: "Bom Logik: mencetuskan tindakan apabila syarat berlaku"
                  }
                },
                {
                  label: {
                    zh: "时间炸弹：到指定时间触发",
                    en: "Time bomb: triggers action when a specified time occurs",
                    ms: "Bom Masa: mencetuskan tindakan pada masa yang ditetapkan"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "考试常给出一段行为描述，要求判断它属于哪一类恶意代码；记住“是否自我复制”和“是否含隐藏功能”这两条分界线。",
            en: "Exams often describe a behaviour and ask which type of malicious code it is; remember the two dividing lines - whether it self-replicates and whether it hides extra functionality.",
            ms: "Peperiksaan sering menerangkan sesuatu tingkah laku dan meminta anda menentukan jenis kod berniat jahat itu; ingat dua garis pemisah - sama ada ia mereplikasi sendiri dan sama ada ia menyembunyikan fungsi tambahan."
          }
        }
      ],
      exam: [
        {
          zh: "缓冲区溢出的分析题必考：给出类似 char sample[10] 或 char buf[1024]; gets(buf); 的代码，要求指出越界位置，并说明溢出的数据可能覆盖用户的变量、用户程序代码、系统数据结构或系统程序代码，其中后两种会导致系统不稳定甚至让攻击者以系统权限执行代码。",
          en: "Buffer overflow analysis is a standard exam question: given code such as char sample[10] or char buf[1024]; gets(buf);, you must identify where the out-of-bounds write occurs and explain that the overflow may overwrite the user's variables, the user's program code, system data structures or system program code, with the last two destabilising the system or even letting the attacker execute code with system privileges.",
          ms: "Analisis limpahan penimbal ialah soalan peperiksaan biasa: diberi kod seperti char sample[10] atau char buf[1024]; gets(buf);, anda perlu mengenal pasti di mana penulisan di luar sempadan berlaku dan menerangkan bahawa limpahan itu boleh menulis ganti pemboleh ubah pengguna, kod program pengguna, struktur data sistem atau kod program sistem, dengan dua yang terakhir menggugat kestabilan sistem atau membolehkan penyerang melaksanakan kod dengan keistimewaan sistem."
        },
        {
          zh: "案例题常给出一段 URL 参数（如 order.asp?price=10&total=205）让学生判断漏洞类型：参数可以被客户端随意修改属于不完整中介；检查权限之后、使用权限之前条件被改变属于 TOCTTOU；要能说出对应的修补思路，例如在服务器端重新校验所有参数、验证期间不允许失去控制权。",
          en: "Case questions often show a URL with parameters such as order.asp?price=10&total=205 and ask for the vulnerability: parameters that the client can change freely are incomplete mediation, while a condition changed after the check but before use is TOCTTOU; you should also give the fix, such as revalidating every parameter on the server and never losing control during validation.",
          ms: "Soalan kes sering memaparkan URL dengan parameter seperti order.asp?price=10&total=205 dan meminta jenis kerentanan: parameter yang boleh diubah bebas oleh klien ialah pengantaraan tidak lengkap, manakala keadaan yang berubah selepas semakan tetapi sebelum penggunaan ialah TOCTTOU; anda juga perlu memberikan penyelesaiannya, seperti menyemak semula setiap parameter di pelayan dan tidak kehilangan kawalan semasa pengesahan."
        },
        {
          zh: "最容易被混淆的是 fault 与 failure：题目常问“开发者看到的内部视图”与“用户看到的外部视图”分别是什么，答案是 fault（不正确的步骤，源于人为错误）与 failure（偏离系统所要求的行为）；另外不要忘记 penetrate and patch 会引入新问题和副作用。",
          en: "The most commonly confused pair is fault and failure: exams often ask what the inside view seen by developers and the outside view seen by users are, and the answers are a fault (an incorrect step caused by human error) and a failure (a departure from required behaviour); do not forget that penetrate and patch introduces new problems and side effects.",
          ms: "Pasangan yang paling mudah keliru ialah kecacatan dan kegagalan: peperiksaan sering menanyakan apakah pandangan dalaman yang dilihat pembangun dan pandangan luaran yang dilihat pengguna, dan jawapannya ialah kecacatan (langkah salah akibat kesilapan manusia) dan kegagalan (penyimpangan daripada tingkah laku yang diperlukan); jangan lupa bahawa tembus dan tampal membawa masalah baharu serta kesan sampingan."
        },
        {
          zh: "简答题要求比较恶意代码类型：只有病毒、蠕虫和兔子会自我复制，木马与逻辑炸弹不会；木马通常伪装成用户想运行的程序（游戏、软件升级），常用来安放后门或传播病毒；根套件的特点是极力隐藏自己（例如拦截目录命令并删掉自己的条目），僵尸则用于发起 DDoS，这些区别经常作为选择题的干扰项。",
          en: "Essay questions ask you to compare types of malicious code: only viruses, worms and rabbits self-replicate, while Trojan horses and logic bombs do not; a Trojan disguises itself as a program the user wants to run, such as a game or software upgrade, and is often used to install a backdoor or propagate a virus; a rootkit goes to great lengths to hide itself, for example by intercepting the directory command and deleting its own entry, while a zombie is used to launch DDoS attacks - these distinctions often appear as distractors.",
          ms: "Soalan esei meminta anda membandingkan jenis kod berniat jahat: hanya virus, cecacing dan arnab mereplikasi sendiri, manakala kuda Troy dan bom logik tidak; kuda Troy menyamar sebagai program yang ingin dijalankan pengguna seperti permainan atau peningkatan perisian dan sering digunakan untuk memasang pintu belakang atau menyebarkan virus; kit akar berusaha bersungguh-sungguh menyembunyikan diri, contohnya dengan memintas arahan direktori dan memadamkan entri sendiri, sementara zombi digunakan untuk melancarkan serangan DDoS - perbezaan ini sering menjadi pilihan pengganggu."
        }
      ],
      mnemonic: {
        zh: "四类无心之失：溢出、中介不全、检查用不同步、再组合；恶意代码记“病蠕兔马门炸弹”，病毒四阶段是“潜传触执”。",
        en: "Four unwitting errors: overflow, incomplete mediation, check-versus-use, and their combination; for malicious code remember virus, worm, rabbit, Trojan, trapdoor and bombs, and the four virus phases are dormant, propagation, triggering and execution.",
        ms: "Empat kesilapan tidak disengajakan: limpahan, pengantaraan tidak lengkap, semakan berbanding penggunaan, dan gabungannya; bagi kod berniat jahat ingat virus, cecacing, arnab, kuda Troy, pintu perangkap dan bom, manakala empat fasa virus ialah dorman, pembiakan, pencetusan dan pelaksanaan."
      }
    },
    {
      id: "cs-04",
      num: 4,
      title: {
        zh: "操作系统安全",
        en: "Security in Operating Systems",
        ms: "Keselamatan dalam Sistem Pengendalian"
      },
      file: "cs/CHAPTER 4 - SECURITY IN OS.pdf",
      pages: 56,
      summary: {
        zh: "本章讲解通用操作系统提供的保护功能，目标是保护内存、文件和执行环境，并说明操作系统提供的各种访问控制方法与用户认证机制。本章先回顾安全缺口（暴露、脆弱性、威胁）与安全目标（机密性、完整性、可用性），再列出操作系统要保护的对象——内存、可共享的 I/O 设备、串行复用设备、可共享的程序与子过程以及可共享数据，以及分离与受控粒度两种安全方法。接着逐步介绍内存与寻址保护技术：界栏、重定位、基址/界限寄存器、标记体系结构、分段与分页；然后是通用对象的访问控制：目录、访问控制表与访问控制矩阵；再是文件保护机制：全有全无保护、组保护、单一权限（文件口令、Unix 的 set userid）以及按对象与按用户的保护。最后详细讲解用户认证：身份识别与认证的定义与区别、口令的使用与攻击、口令选择准则、一次性口令与挑战应答、认证过程的缺陷，以及口令之外的生物特征与额外信息认证。",
        en: "This chapter explains the protection features provided by general-purpose operating systems, whose aim is to protect memory, files and the execution environment, and it describes the access control methods and user authentication mechanisms an operating system provides. It first reviews security breaches (exposure, vulnerability, threat) and the security goals (confidentiality, integrity, availability), then lists the objects an operating system must protect - memory, sharable I/O devices, serially reusable I/O devices, sharable programs and sub-procedures, and sharable data - together with the two security methods of separation and granularity of control. It then works through memory and addressing protection: fence, relocation, base and bounds registers, tagged architecture, segmentation and paging; access control for general objects: directory, access control list and access control matrix; and file protection mechanisms: all-none protection, group protection, single permissions such as file passwords and the Unix set userid bit, and per-object and per-user protection. The chapter closes with a detailed treatment of user authentication: identification versus authentication, the use and attack of passwords, password selection criteria, one-time passwords and challenge-response, flaws in the authentication process, and authentication by biometrics or extra information.",
        ms: "Bab ini menerangkan ciri perlindungan yang disediakan oleh sistem pengendalian serba guna, yang bertujuan melindungi ingatan, fail dan persekitaran pelaksanaan, serta menghuraikan kaedah kawalan akses dan mekanisme pengesahan pengguna yang disediakan oleh sistem pengendalian. Ia terlebih dahulu menyemak pelanggaran keselamatan (pendedahan, kerentanan, ancaman) dan matlamat keselamatan (kerahsiaan, integriti, ketersediaan), kemudian menyenaraikan objek yang perlu dilindungi - ingatan, peranti I/O yang boleh dikongsi, peranti boleh guna semula bersiri, program dan subprosedur yang boleh dikongsi, serta data yang boleh dikongsi - bersama dua kaedah keselamatan iaitu pengasingan dan kekasaran kawalan. Seterusnya bab ini membincangkan perlindungan ingatan dan pengalamatan: pagar, pengalihan, daftar asas dan daftar sempadan, seni bina bertag, persegmenan dan penghalaman; kawalan akses untuk objek am: direktori, senarai kawalan akses dan matriks kawalan akses; serta mekanisme perlindungan fail: perlindungan semua-tiada, perlindungan kumpulan, kebenaran tunggal seperti kata laluan fail dan bit set userid Unix, dan perlindungan mengikut objek serta mengikut pengguna. Bab ini diakhiri dengan perbincangan terperinci tentang pengesahan pengguna: pengenalpastian berbanding pengesahan, penggunaan dan serangan ke atas kata laluan, kriteria pemilihan kata laluan, kata laluan sekali guna dan cabaran-tindak balas, kelemahan proses pengesahan, dan pengesahan melalui biometrik atau maklumat tambahan."
      },
      points: [
        {
          zh: "操作系统要保护的对象不止内存：还包括可共享的 I/O 设备（如磁盘）、串行复用设备（如打印机和磁带机）、可共享的程序与子过程以及可共享的数据；操作系统使用两类安全方法：分离（把用户的客体与其他用户的客体隔开，分为物理、时间、逻辑和密码四种分离）以及控制粒度（控制的对象层级越大，访问控制越容易实现）。",
          en: "The objects an operating system must protect go beyond memory: they include sharable I/O devices such as disks, serially reusable I/O devices such as printers and tape drives, sharable programs and sub-procedures, and sharable data; the operating system uses two security methods - separation, which keeps one user's objects apart from other users' through physical, temporal, logical or cryptographic separation, and granularity of control, where the larger the level of object controlled the easier access control is to implement.",
          ms: "Objek yang perlu dilindungi oleh sistem pengendalian bukan sekadar ingatan: ia termasuk peranti I/O yang boleh dikongsi seperti cakera, peranti boleh guna semula bersiri seperti pencetak dan pemacu pita, program serta subprosedur yang boleh dikongsi, dan data yang boleh dikongsi; sistem pengendalian menggunakan dua kaedah keselamatan - pengasingan, yang memisahkan objek seseorang pengguna daripada pengguna lain melalui pengasingan fizikal, temporal, logik atau kriptografi, dan kekasaran kawalan, iaitu semakin besar aras objek yang dikawal semakin mudah kawalan akses dilaksanakan."
        },
        {
          zh: "内存保护的六种技术依次是：界栏（用硬件寄存器把用户限制在边界的一侧）、重定位（把按地址 0 编写的程序的所有地址改成它在内存中的实际地址，方法是给每个程序地址加上界栏寄存器的内容）、基址/界限寄存器（多用户多道程序环境下界栏寄存器是可变的，称为基址寄存器，再加一个界限寄存器提供上界，把程序地址限制在两者之间）、标记体系结构、分段和分页。",
          en: "The six memory protection techniques are: the fence, a hardware register that confines users to one side of a boundary; relocation, which takes a program written as if it began at address 0 and changes all addresses to the actual addresses in memory by adding the contents of the fence register to each program address; base and bounds registers, where in a multiuser multiprogramming environment the fence register becomes variable and is called the base register while a second bounds register supplies the upper bound so that the program's addresses are confined between them; tagged architecture; segmentation; and paging.",
          ms: "Enam teknik perlindungan ingatan ialah: pagar, iaitu daftar perkakasan yang mengurung pengguna di satu sisi sempadan; pengalihan, yang mengambil program yang ditulis seolah-olah bermula pada alamat 0 dan menukar semua alamatnya kepada alamat sebenar dalam ingatan dengan menambah kandungan daftar pagar pada setiap alamat program; daftar asas dan daftar sempadan, iaitu dalam persekitaran berbilang pengguna dan berbilang program daftar pagar menjadi boleh ubah dan dipanggil daftar asas manakala daftar sempadan kedua memberikan had atas sehingga alamat program terkurung di antaranya; seni bina bertag; persegmenan; dan penghalaman."
        },
        {
          zh: "基址/界限技术的缺点是访问权限的粒度太粗，一个模块要么能访问全部数据要么什么也访问不到；标记体系结构给机器内存的每个字加上一个或更多标记位来定义该字的访问权（如 R 只读、RW 读写、X 只执行），标记位由操作系统设置，每次指令访问该位置时都要检查，从而获得更细的粒度，但因兼容性等市场原因并未广泛采用。",
          en: "The disadvantage of the base/bounds technique is that the granularity of access rights is too coarse, since a module can access all or none of its data; tagged architecture gives every word of machine memory one or more extra tag bits defining the access rights of that word, such as R for read only, RW for read/write and X for execute only, with the bits set by the operating system and tested every time an instruction accesses that location, giving finer granularity, although it never became widespread for market and compatibility reasons.",
          ms: "Kelemahan teknik asas dan sempadan ialah kekasaran hak akses terlalu kasar kerana sesuatu modul boleh mengakses keseluruhan datanya atau tidak sama sekali; seni bina bertag memberikan setiap perkataan ingatan mesin satu atau lebih bit tag tambahan yang menentukan hak akses perkataan itu, seperti R untuk baca sahaja, RW untuk baca dan tulis serta X untuk laksana sahaja, dengan bit ditetapkan oleh sistem pengendalian dan diuji setiap kali arahan mengakses lokasi tersebut, sekali gus memberi kekasaran yang lebih halus, walaupun ia tidak pernah meluas atas sebab pasaran dan keserasian."
        },
        {
          zh: "分段把程序划分成若干逻辑上完整的片段，效果相当于数量不受限制的基址/界限寄存器，使不同片段可以有不同的访问权；操作系统维护段名与实际内存地址的对照表，程序地址形式为 <段名, 偏移>，实际地址等于段名对应的地址加上偏移。分页是分段的替代方案：程序被分成大小相等的页，内存被分成同样大小的页框，地址形式为 <页号, 偏移>，操作系统用页表把页号转换成页框地址再加上偏移。",
          en: "Segmentation divides a program into separate pieces each having a logical unity, giving the effect of an unbounded number of base/bounds registers so that different pieces can have different access rights; the operating system maintains a table of segment names and their true addresses in memory, the program address has the form <name, offset>, and the real address is the address of the name plus the offset. Paging is the alternative: the program is divided into equal-sized pieces called pages and memory into the same sized units called page frames, an address is represented as <page, offset>, and the operating system converts the page portion to a page frame address by a table lookup and adds the offset.",
          ms: "Persegmenan membahagikan program kepada beberapa kepingan yang mempunyai kesatuan logik, memberi kesan seolah-olah bilangan daftar asas dan sempadan tidak terhad supaya kepingan berbeza boleh mempunyai hak akses berbeza; sistem pengendalian menyelenggara jadual nama segmen dan alamat sebenar dalam ingatan, alamat program berbentuk <nama, offset>, dan alamat sebenar ialah alamat nama ditambah offset. Penghalaman pula alternatifnya: program dibahagikan kepada kepingan sama saiz yang dipanggil halaman dan ingatan kepada unit sama saiz yang dipanggil bingkai halaman, alamat diwakili sebagai <halaman, offset>, dan sistem pengendalian menukar bahagian halaman kepada alamat bingkai halaman melalui carian jadual lalu menambah offset."
        },
        {
          zh: "通用对象包括内存、辅助存储上的文件或数据集、内存中正在执行的程序、文件目录、硬件设备、栈等数据结构、操作系统表、指令（尤其是特权指令）、口令以及保护机制本身；保护它们的三种机制是目录、访问控制表和访问控制矩阵。目录机制像文件目录：每个对象有唯一属主，属主拥有控制权，可以指定谁能拥有什么访问权、也可以随时撤销；每个用户有一份目录，列出自己可以访问的所有对象及其访问权（读、写、执行）。它的优点是实现简单，每个用户只需一张表，缺点是共享对象多时目录会变得很大，而且删除共享对象要在每个目录里删条目、撤销访问权要在所有用户的目录中搜索，维护困难。",
          en: "General objects include memory, a file or data set on auxiliary storage, an executing program in memory, a directory of files, a hardware device, a data structure such as a stack, a table of the operating system, instructions especially privileged ones, passwords, and the protection mechanism itself; the three mechanisms for protecting them are the directory, the access control list and the access control matrix. The directory mechanism works like a file directory: every object has a unique owner holding control access rights, who can declare who has what access and revoke access at any time, and each user has a directory listing all the objects that user may access with their access rights of read, write or execute. It is easy to implement because there is just one list per user, but with many shared objects the directories grow too big, and maintenance is difficult because deleting a shared object requires deleting an entry from every directory that references it and revoking access requires searching the directories of all subjects.",
          ms: "Objek am termasuk ingatan, fail atau set data pada storan tambahan, program yang sedang dilaksanakan dalam ingatan, direktori fail, peranti perkakasan, struktur data seperti tindanan, jadual sistem pengendalian, arahan terutamanya arahan istimewa, kata laluan, dan mekanisme perlindungan itu sendiri; tiga mekanisme untuk melindunginya ialah direktori, senarai kawalan akses dan matriks kawalan akses. Mekanisme direktori berfungsi seperti direktori fail: setiap objek mempunyai pemilik tunggal yang memegang hak kawalan, yang boleh menyatakan siapa mempunyai hak apa dan membatalkan akses pada bila-bila masa, dan setiap pengguna mempunyai direktori yang menyenaraikan semua objek yang boleh diaksesnya berserta hak akses baca, tulis atau laksana. Ia mudah dilaksanakan kerana hanya ada satu senarai bagi setiap pengguna, tetapi apabila banyak objek dikongsi direktori menjadi terlalu besar, dan penyelenggaraannya sukar kerana memadam objek yang dikongsi memerlukan pemadaman entri daripada setiap direktori yang merujuknya dan pembatalan akses memerlukan carian dalam direktori semua subjek."
        },
        {
          zh: "访问控制表正好相反：每个对象附上一张表，列出所有应该有权访问该对象的主题以及他们的访问权，有些主题单独列出、有些通过组成员身份获得权限，还可用通配符（*）表示任何主体；它比目录机制有明显优势，可以为没有特别指定的主体设置默认访问权。Unix 采用“用户（属主）／组／其他人”三级形式，例如 drwxr-xr-x；Multics 则采用“用户／组／隔离区”三元组，可写成像 {Sanjay—*—*: RW}、{*—*—*: R} 这样精细的条目。访问控制矩阵把前两种机制统一成一张稀疏表：行是主体、列是对象，单元格 (i, j) 就是主体 i 对对象 j 的访问权。",
          en: "An access control list is the reverse: a list is attached to each object showing all the subjects who should have access to that object and what that access is, with some subjects named individually and others covered through group membership, and a wild card (*) may be used for any subject; it has a significant advantage over the directory approach because default access rights can be given to subjects without specific rights. Unix uses the three-level form of user (owner), group and others, for example drwxr-xr-x, while Multics uses the triple user, group and compartment, allowing entries such as {Sanjay-*-*: RW} and {*-*-*: R}. The access control matrix unifies the previous two mechanisms into a sparse table: the rows are subjects, the columns are objects, and cell (i, j) holds subject i's access rights for object j.",
          ms: "Senarai kawalan akses ialah sebaliknya: satu senarai dilekatkan pada setiap objek yang menunjukkan semua subjek yang sepatutnya boleh mengakses objek itu serta jenis aksesnya, dengan sebahagian subjek disenaraikan secara individu dan sebahagian lagi melalui keahlian kumpulan, dan kad khas (*) boleh digunakan bagi mana-mana subjek; ia mempunyai kelebihan jelas berbanding pendekatan direktori kerana hak akses lalai boleh diberikan kepada subjek yang tidak dinyatakan secara khusus. Unix menggunakan bentuk tiga aras iaitu pengguna (pemilik), kumpulan dan orang lain, contohnya drwxr-xr-x, manakala Multics menggunakan tiga unsur pengguna, kumpulan dan petak, membolehkan entri seperti {Sanjay-*-*: RW} dan {*-*-*: R}. Matriks kawalan akses menyatukan kedua-dua mekanisme sebelumnya menjadi satu jadual jarang: barisnya ialah subjek, lajurnya ialah objek, dan sel (i, j) mengandungi hak akses subjek i bagi objek j."
        },
        {
          zh: "文件保护机制从最简单的全有全无保护（早期 IBM 操作系统：文件要么公开、要么用口令保护，靠“不知道文件名”这种无知作为额外屏障，但文件清单很容易打破这道屏障）发展到组保护（同组用户对对象有相同权利，如 Unix 的用户／组／其他人），再到单一权限——给单个文件分配口令或使用临时获得的权限，即 Unix 的 set userid（suid）：如果可执行文件的属主为它设置了 suid，那么任何执行该文件的组成员都临时获得属主的访问权，口令修改程序正是靠它让每个用户只能改自己的口令记录——最后是按对象与按用户的保护，由属主为每个文件、每个用户指定访问权，粒度最细但维护最复杂。",
          en: "File protection mechanisms evolve from the simplest all-none protection, used in early IBM operating systems where files were either public or protected by a password and ignorance of the file name served as an extra barrier that a file listing easily destroys, through group protection where users in the same group have the same rights for objects, as in the Unix user, group and others scheme, to single permissions - assigning a password to a file or using a temporary acquired permission such as the Unix set userid (suid) bit, where any group member executing a file whose owner set suid gains the owner's access rights, which is how a password change program lets each user reach only his or her own password record - and finally to per-object and per-user protection, where the owner specifies access rights for each file and each user, giving the finest granularity at the cost of the most complex maintenance.",
          ms: "Mekanisme perlindungan fail berkembang daripada perlindungan semua-tiada yang paling mudah, yang digunakan dalam sistem pengendalian IBM awal apabila fail sama ada awam atau dilindungi kata laluan dan ketidaktahuan nama fail menjadi penghalang tambahan yang mudah dihapuskan oleh senarai fail, melalui perlindungan kumpulan apabila pengguna dalam kumpulan yang sama mempunyai hak yang sama terhadap objek seperti dalam skim pengguna, kumpulan dan orang lain Unix, kepada kebenaran tunggal - memberikan kata laluan pada sesuatu fail atau menggunakan kebenaran sementara seperti bit set userid (suid) Unix, iaitu mana-mana ahli kumpulan yang melaksanakan fail yang pemiliknya menetapkan suid memperoleh hak akses pemilik, dan itulah cara program penukaran kata laluan membolehkan setiap pengguna mencapai hanya rekod kata laluannya sendiri - dan akhirnya perlindungan mengikut objek serta mengikut pengguna, apabila pemilik menetapkan hak akses bagi setiap fail dan setiap pengguna, memberi kekasaran paling halus tetapi penyelenggaraan paling rumit."
        },
        {
          zh: "身份识别与认证（I&A）是系统定义用户访问权的基础：主体（principal）是唯一的实体，身份（identity）标识某个主体，识别（identification）是向主体取得身份（如用户名），认证（authentication）是确认主体与其声称的身份相符。同一个主体可以拥有多个身份，例如半工半读的学生既是计算机顾问又是学生；识别要解决重名问题（封闭系统预先登记唯一用户名，开放系统由用户自行创建直到唯一），认证要解决凭证是否有效的问题（口令必须正确且未过期，连续 n 次失败就拒绝访问）。I&A 可以基于五类依据：主体知道什么（口令、挑战应答）、主体是什么（生物特征，如指纹、视网膜）、主体拥有什么（访问令牌，如证件、智能卡）、主体在哪里（位置，例如在会计部门内），以及以上几种的混合。口令本身也有三种类型：字符序列（可随机生成、由用户选择或由计算机结合用户输入生成）、单词序列（通行短语）以及挑战应答式（一次性口令、通行算法）。",
          en: "Identification and authentication (I&A) is the basis on which a system defines a user's access rights: a principal is a unique entity, an identity specifies a principal, identification obtains the identity from the principal such as a username, and authentication ensures that the principal matches the purported identity. The same principal may have many different identities, for example a working student who is both a computer consultant and a student; identification must solve shared names, with closed systems pre-registering a unique username and open systems letting users create one until it is unique, while authentication must solve the validity of the proof, since the password must be correct and current and access is denied after n failed attempts. I&A can be based on five things: what the entity knows (passwords, challenge-response), what the entity is (biometrics such as fingerprints and retinal characteristics), what the entity has (access tokens such as badges and smart cards), where the entity is (location, for example inside the accounting department), and any combination of these as a hybrid approach. Passwords themselves come in three types: a sequence of characters generated randomly, by the user or by the computer with user input; a sequence of words such as pass-phrases; and challenge-response authentication such as one-time passwords and pass algorithms.",
          ms: "Pengenalpastian dan pengesahan (I&A) ialah asas sistem menetapkan hak akses pengguna: prinsipal ialah entiti unik, identiti menentukan sesuatu prinsipal, pengenalpastian memperoleh identiti daripada prinsipal seperti nama pengguna, dan pengesahan memastikan prinsipal sepadan dengan identiti yang didakwa. Prinsipal yang sama boleh mempunyai banyak identiti, contohnya pelajar sambilan yang juga merupakan perunding komputer; pengenalpastian perlu menyelesaikan masalah nama yang sama, dengan sistem tertutup mendaftarkan nama pengguna unik terlebih dahulu dan sistem terbuka membenarkan pengguna menciptanya sehingga unik, manakala pengesahan perlu menyelesaikan kesahihan bukti kerana kata laluan mesti betul dan belum luput serta akses ditolak selepas n percubaan gagal. I&A boleh berdasarkan lima perkara: apa yang diketahui entiti (kata laluan, cabaran-tindak balas), apa entiti itu (biometrik seperti cap jari dan ciri retina), apa yang dimiliki entiti (token akses seperti lencana dan kad pintar), di mana entiti berada (lokasi, contohnya dalam jabatan perakaunan), dan gabungan kesemuanya sebagai pendekatan hibrid. Kata laluan sendiri mempunyai tiga jenis: jujukan aksara yang dijana secara rawak, oleh pengguna atau oleh komputer dengan input pengguna; jujukan perkataan seperti frasa laluan; dan pengesahan cabaran-tindak balas seperti kata laluan sekali guna dan algoritma laluan."
        },
        {
          zh: "对密码的攻击有五种：尝试所有可能的口令（穷举或暴力攻击）、尝试许多常见的口令（用户不会选择生僻、难拼写或很长的口令）、尝试该用户可能使用的口令、寻找系统口令表（找到明文口令表），以及直接向用户索取口令；在 UNIX 中口令用加盐（salt）的一次性加密方式保存，可以增加破解难度。口令选择准则有七条：使用 A 到 Z 以外的字符、选择长口令、避免真实姓名或单词、选择不易猜到的口令、定期更换口令、不要写下来、不要告诉任何人。一次性口令又叫挑战应答系统，每次使用后立即失效，是口令时效的终极形式，它不是一个静态的词，而是一个数学函数：系统给出挑战（例如认证序号 NOA），用户返回计算出的应答，系统验证应答正确才通过认证，这种方式也可用于主机与主机之间的认证，敌我识别（IFF）就是它的应用。",
          en: "There are five attacks on passwords: trying all possible passwords (an exhaustive or brute-force attack), trying many probable passwords because users are unlikely to choose one that is uncommon, hard to spell or very long, trying passwords likely for that particular user, searching for the system list of passwords by finding a plain text password list, and simply asking the user. In UNIX passwords are stored with one-way encryption plus a salt, which makes cracking harder. Password selection criteria are: use characters other than just A to Z, choose long passwords, avoid actual names or words, choose an unlikely password, change the password regularly, do not write it down, and do not tell anyone else. A one-time password, also called a challenge-response system, changes every time it is used and is invalidated immediately, making it the ultimate form of password aging; it is not a static word but a mathematical function, where the system provides a challenge such as the number of authentication and the user returns the computed response, which the system evaluates before authenticating, and the same technique also works for host-to-host authentication and for identification friend or foe (IFF).",
          ms: "Terdapat lima serangan ke atas kata laluan: mencuba semua kata laluan yang mungkin (serangan menyeluruh atau kekerasan), mencuba banyak kata laluan yang mungkin kerana pengguna jarang memilih kata laluan yang luar biasa, sukar dieja atau sangat panjang, mencuba kata laluan yang mungkin bagi pengguna tertentu, mencari senarai kata laluan sistem dengan menemui senarai kata laluan teks biasa, dan meminta terus daripada pengguna. Dalam UNIX kata laluan disimpan melalui penyulitan sehala berserta garam (salt), yang menyukarkan pemecahan. Kriteria pemilihan kata laluan ialah: gunakan aksara selain A hingga Z, pilih kata laluan yang panjang, elakkan nama atau perkataan sebenar, pilih kata laluan yang tidak mudah dijangka, tukar kata laluan secara berkala, jangan menulisnya dan jangan memberitahu sesiapa. Kata laluan sekali guna, turut dipanggil sistem cabaran-tindak balas, berubah setiap kali digunakan dan terus tidak sah selepas digunakan, menjadikannya bentuk penuaan kata laluan yang muktamad; ia bukan perkataan statik tetapi fungsi matematik, iaitu sistem memberikan cabaran seperti nombor pengesahan dan pengguna mengembalikan tindak balas yang dikira, yang dinilai oleh sistem sebelum pengesahan, dan teknik yang sama juga berfungsi untuk pengesahan antara hos serta pengenalpastian kawan atau lawan (IFF)."
        },
        {
          zh: "认证过程故意设计得很慢，使穷举攻击不可行，同时便于从正常用户中识别入侵者：连续三到五次登录失败后系统就断开该用户。除口令之外，还可以使用生物特征设备（指纹、掌纹、语音、视网膜扫描）以及额外信息来认证，例如用户位置、工作时间、访问模式与工作习惯，冒充合法用户 Jones 的攻击者必须处处表现得像 Jones，否则就会被发现。",
          en: "The authentication process is intentionally slow so that exhaustive attacks become infeasible and intruders can be told apart from normal users, and the system disconnects a user after three to five failed logins. Beyond passwords, authentication can use special biometric hardware such as fingerprint, handprint, voice and retina scanners, and extra information such as user location, work hours, access patterns and work habits, so that an attacker pretending to be the legitimate user Jones must act as Jones or be detected.",
          ms: "Proses pengesahan sengaja dibuat perlahan supaya serangan menyeluruh menjadi tidak praktikal dan penceroboh dapat dibezakan daripada pengguna biasa, dan sistem akan memutuskan sambungan pengguna selepas tiga hingga lima percubaan log masuk gagal. Selain kata laluan, pengesahan boleh menggunakan peranti biometrik khas seperti pengesan cap jari, cap tangan, pengecam suara dan pengimbas corak retina, serta maklumat tambahan seperti lokasi pengguna, waktu bekerja, corak akses dan tabiat kerja, sehingga penyerang yang menyamar sebagai pengguna sah Jones mesti bertindak seperti Jones atau akan dikesan."
        }
      ],
      terms: [
        {
          en: "Fence",
          zh: "界栏",
          ms: "Pagar",
          def: {
            zh: "用硬件寄存器把用户限制在某个边界的一侧，是最简单的内存保护方法。",
            en: "A method that confines users to one side of a boundary, usually implemented with a hardware register.",
            ms: "Kaedah yang mengurung pengguna di satu sisi sempadan, biasanya dilaksanakan dengan daftar perkakasan."
          }
        },
        {
          en: "Relocation",
          zh: "重定位",
          ms: "Pengalihan",
          def: {
            zh: "把按地址 0 编写的程序的所有地址改为它在内存中的实际地址，做法是给每个程序地址加上界栏寄存器的内容。",
            en: "The process of taking a program written as if it began at address 0 and changing all addresses to the actual address at which it is located, by adding the fence register contents to each program address.",
            ms: "Proses mengambil program yang ditulis seolah-olah bermula pada alamat 0 dan menukar semua alamatnya kepada alamat sebenar ia berada, dengan menambah kandungan daftar pagar pada setiap alamat program."
          }
        },
        {
          en: "Base/Bounds Registers",
          zh: "基址/界限寄存器",
          ms: "Daftar Asas dan Sempadan",
          def: {
            zh: "在多用户多道程序环境中用可变的基址寄存器提供下界、界限寄存器提供上界，把程序地址限制在两者之间，防止其他用户修改本程序地址。",
            en: "In a multiuser multiprogramming environment a variable base register supplies the lower bound and a bounds register the upper bound, confining the program's addresses between them and protecting them from modification by another user.",
            ms: "Dalam persekitaran berbilang pengguna dan berbilang program, daftar asas yang boleh ubah memberikan had bawah dan daftar sempadan memberikan had atas, mengurung alamat program di antaranya serta melindunginya daripada diubah oleh pengguna lain."
          }
        },
        {
          en: "Tagged Architecture",
          zh: "标记体系结构",
          ms: "Seni Bina Bertag",
          def: {
            zh: "给内存中每个字附加标记位来定义其访问权（R、RW、X 等）的硬件方案，由操作系统设置标记，每次访问都要检查，可获得比基址/界限更细的访问粒度。",
            en: "A hardware solution that gives every word of memory tag bits defining its access rights such as R, RW and X; the bits are set by the operating system and tested on every access, giving finer granularity than base/bounds.",
            ms: "Penyelesaian perkakasan yang memberikan setiap perkataan ingatan bit tag yang menentukan hak aksesnya seperti R, RW dan X; bit ditetapkan oleh sistem pengendalian dan diuji pada setiap akses, memberi kekasaran yang lebih halus daripada asas dan sempadan."
          }
        },
        {
          en: "Segmentation",
          zh: "分段",
          ms: "Persegmenan",
          def: {
            zh: "把程序分成若干有逻辑完整性的片段，相当于数量不受限制的基址/界限寄存器，地址形式为 <段名, 偏移>，实际地址等于段名地址加偏移。",
            en: "Dividing a program into separate pieces each with a logical unity, giving the effect of an unbounded number of base/bounds registers; an address is <name, offset> and the real address is the address of the name plus the offset.",
            ms: "Membahagikan program kepada kepingan yang mempunyai kesatuan logik, memberi kesan bilangan daftar asas dan sempadan yang tidak terhad; alamatnya berbentuk <nama, offset> dan alamat sebenar ialah alamat nama ditambah offset."
          }
        },
        {
          en: "Paging",
          zh: "分页",
          ms: "Penghalaman",
          def: {
            zh: "把程序分成大小相等的页、内存分成同样大小的页框，地址形式为 <页号, 偏移>，操作系统用表把页号转换成页框地址再加上偏移。",
            en: "Dividing the program into equal-sized pages and memory into the same sized page frames; an address is <page, offset> and the operating system converts the page number to a page frame address by table lookup and adds the offset.",
            ms: "Membahagikan program kepada halaman sama saiz dan ingatan kepada bingkai halaman sama saiz; alamatnya berbentuk <halaman, offset> dan sistem pengendalian menukar nombor halaman kepada alamat bingkai halaman melalui carian jadual lalu menambah offset."
          }
        },
        {
          en: "Directory (Access Control)",
          zh: "目录（访问控制）",
          ms: "Direktori (Kawalan Akses)",
          def: {
            zh: "为每个用户维护一张可访问对象及其访问权的清单，每个对象有唯一属主并拥有指定与撤销访问权的控制权。",
            en: "A list kept for each user of the objects that user may access and with what rights, where each object has a unique owner who controls the assignment and revocation of access.",
            ms: "Senarai bagi setiap pengguna yang menyenaraikan objek yang boleh diaksesnya berserta haknya, dengan setiap objek mempunyai pemilik tunggal yang mengawal pemberian dan pembatalan akses."
          }
        },
        {
          en: "Access Control List",
          zh: "访问控制表",
          ms: "Senarai Kawalan Akses",
          def: {
            zh: "附在每个对象上的清单，列出所有应有权访问该对象的主题及其访问权，可为未特别指定的主体设置默认权限，广泛用于分布式文件系统。",
            en: "A list attached to each object showing all the subjects who should have access to it and what that access is; it can give default rights to subjects without specific rights and is widely used in distributed file systems.",
            ms: "Senarai yang dilekatkan pada setiap objek yang menunjukkan semua subjek yang sepatutnya boleh mengaksesnya serta jenis aksesnya; ia boleh memberi hak lalai kepada subjek yang tidak dinyatakan dan meluas digunakan dalam sistem fail teragih."
          }
        },
        {
          en: "Access Control Matrix",
          zh: "访问控制矩阵",
          ms: "Matriks Kawalan Akses",
          def: {
            zh: "一张稀疏表，行是主体、列是对象，单元格 (i, j) 表示主体 i 对对象 j 的访问权。",
            en: "A sparse table whose rows are subjects and columns are objects, where cell (i, j) gives subject i's access rights for object j.",
            ms: "Jadual jarang yang barisnya subjek dan lajurnya objek, dengan sel (i, j) memberikan hak akses subjek i bagi objek j."
          }
        },
        {
          en: "All-None Protection",
          zh: "全有全无保护",
          ms: "Perlindungan Semua-Tiada",
          def: {
            zh: "早期 IBM 操作系统的基本保护形式：文件要么完全公开、要么完全由口令保护，并依赖“不知道文件名”这一无知屏障，但文件清单会破坏它。",
            en: "The basic form of protection in early IBM operating systems, where a file is either public or protected by a password, relying on ignorance of the file name as an extra barrier that file listings destroy.",
            ms: "Bentuk perlindungan asas dalam sistem pengendalian IBM awal, iaitu fail sama ada awam atau dilindungi kata laluan, bergantung pada ketidaktahuan nama fail sebagai penghalang tambahan yang dihapuskan oleh senarai fail."
          }
        },
        {
          en: "Group Protection",
          zh: "组保护",
          ms: "Perlindungan Kumpulan",
          def: {
            zh: "同一组内的用户对对象拥有相同的权利，例如 Unix 的用户（属主）／组／其他人三级访问控制，实现简单。",
            en: "Users in the same group have the same rights for objects, as in the Unix user (owner), group and others hierarchy, which is easy to implement.",
            ms: "Pengguna dalam kumpulan yang sama mempunyai hak yang sama terhadap objek, seperti dalam hierarki pengguna (pemilik), kumpulan dan orang lain Unix, yang mudah dilaksanakan."
          }
        },
        {
          en: "Set Userid (suid)",
          zh: "设置用户标识（suid）",
          ms: "Set Userid (suid)",
          def: {
            zh: "Unix 的临时获得权限机制：若可执行文件的属主设置了 suid，执行该文件的组成员就临时获得属主对该文件的访问权，口令修改程序就靠它工作。",
            en: "The Unix temporary acquired permission: if the owner of an executable file sets suid, any group member executing it temporarily gains the owner's access rights, which is how the password change program works.",
            ms: "Kebenaran sementara Unix: jika pemilik fail boleh laksana menetapkan suid, mana-mana ahli kumpulan yang melaksanakannya memperoleh hak akses pemilik secara sementara, dan itulah cara program penukaran kata laluan berfungsi."
          }
        },
        {
          en: "Principal",
          zh: "主体",
          ms: "Prinsipal",
          def: {
            zh: "身份识别与认证中的唯一实体，例如一个名叫 Robert Kowalski 的人；同一主体可以有多个身份。",
            en: "A unique entity in identification and authentication, for example a person named Robert Kowalski; the same principal may have many different identities.",
            ms: "Entiti unik dalam pengenalpastian dan pengesahan, contohnya seseorang bernama Robert Kowalski; prinsipal yang sama boleh mempunyai banyak identiti berbeza."
          }
        },
        {
          en: "One-time Password",
          zh: "一次性口令",
          ms: "Kata Laluan Sekali Guna",
          def: {
            zh: "每次使用后立即失效的挑战应答式口令，是口令时效的终极形式，本质是一个数学函数，也可用于主机间认证。",
            en: "A challenge-response password that is invalidated immediately after use, the ultimate form of password aging; it is essentially a mathematical function and can also be used for host-to-host authentication.",
            ms: "Kata laluan cabaran-tindak balas yang terus tidak sah selepas digunakan, iaitu bentuk penuaan kata laluan yang muktamad; pada dasarnya ia fungsi matematik dan boleh digunakan untuk pengesahan antara hos."
          }
        },
        {
          en: "Salt",
          zh: "盐值",
          ms: "Garam (Salt)",
          def: {
            zh: "UNIX 保存口令时附加的随机值，与一次性加密一起使用，使相同口令产生不同密文，增加口令破解的难度。",
            en: "A random value added when UNIX stores passwords, used with one-way encryption so that identical passwords produce different ciphertext and cracking becomes harder.",
            ms: "Nilai rawak yang ditambah apabila UNIX menyimpan kata laluan, digunakan bersama penyulitan sehala supaya kata laluan yang sama menghasilkan teks sifer berbeza dan pemecahan menjadi lebih sukar."
          }
        }
      ],
      diagrams: [
        {
          type: "matrix",
          title: {
            zh: "访问控制矩阵示例（O 属主、R 读、W 写、X 执行）",
            en: "Example of an Access Control Matrix (O owner, R read, W write, X execute)",
            ms: "Contoh Matriks Kawalan Akses (O pemilik, R baca, W tulis, X laksana)"
          },
          cols: [
            {
              zh: "对象 O1（用户 A 拥有）",
              en: "Object O1 (owned by A)",
              ms: "Objek O1 (dimiliki A)"
            },
            {
              zh: "对象 O2（用户 B 拥有）",
              en: "Object O2 (owned by B)",
              ms: "Objek O2 (dimiliki B)"
            },
            {
              zh: "对象 O3（用户 A 拥有）",
              en: "Object O3 (owned by A)",
              ms: "Objek O3 (dimiliki A)"
            }
          ],
          rows: [
            {
              head: {
                zh: "用户 A",
                en: "User A",
                ms: "Pengguna A"
              },
              cells: [
                {
                  zh: "O, R, W, X（属主，全部权限）",
                  en: "O, R, W, X (owner, all rights)",
                  ms: "O, R, W, X (pemilik, semua hak)"
                },
                {
                  zh: "R（只能读）",
                  en: "R (read only)",
                  ms: "R (baca sahaja)"
                },
                {
                  zh: "O, R, W（属主，可读写）",
                  en: "O, R, W (owner, read and write)",
                  ms: "O, R, W (pemilik, baca dan tulis)"
                }
              ]
            },
            {
              head: {
                zh: "用户 B",
                en: "User B",
                ms: "Pengguna B"
              },
              cells: [
                {
                  zh: "R（只能读）",
                  en: "R (read only)",
                  ms: "R (baca sahaja)"
                },
                {
                  zh: "O, R, W, X（属主，全部权限）",
                  en: "O, R, W, X (owner, all rights)",
                  ms: "O, R, W, X (pemilik, semua hak)"
                },
                {
                  zh: "—（无权限）",
                  en: "- (no access)",
                  ms: "- (tiada akses)"
                }
              ]
            },
            {
              head: {
                zh: "用户 C",
                en: "User C",
                ms: "Pengguna C"
              },
              cells: [
                {
                  zh: "X（只能执行）",
                  en: "X (execute only)",
                  ms: "X (laksana sahaja)"
                },
                {
                  zh: "R（只能读）",
                  en: "R (read only)",
                  ms: "R (baca sahaja)"
                },
                {
                  zh: "—（无权限）",
                  en: "- (no access)",
                  ms: "- (tiada akses)"
                }
              ]
            }
          ],
          legend: [
            {
              zh: "矩阵的行是主体、列是对象，单元格 (i, j) 给出主体 i 对对象 j 的访问权；按行看就是目录机制，按列看就是访问控制表，矩阵通常很稀疏，所以实际系统用其中一种形式存储。",
              en: "Rows are subjects and columns are objects, and cell (i, j) gives subject i's access rights for object j; reading it by row gives the directory mechanism and by column the access control list, and because the matrix is usually sparse real systems store it in one of those forms.",
              ms: "Baris ialah subjek dan lajur ialah objek, dan sel (i, j) memberikan hak akses subjek i bagi objek j; membacanya mengikut baris menghasilkan mekanisme direktori dan mengikut lajur menghasilkan senarai kawalan akses, dan kerana matriks biasanya jarang, sistem sebenar menyimpannya dalam salah satu bentuk tersebut."
            }
          ]
        },
        {
          type: "flow",
          dir: "v",
          title: {
            zh: "内存与寻址保护技术的发展",
            en: "Progression of Memory and Addressing Protection Techniques",
            ms: "Perkembangan Teknik Perlindungan Ingatan dan Pengalamatan"
          },
          steps: [
            {
              label: {
                zh: "界栏 Fence",
                en: "Fence",
                ms: "Pagar"
              },
              note: {
                zh: "用硬件寄存器把用户限制在边界的一侧，只提供下界",
                en: "A hardware register confines users to one side of a boundary but gives only a lower bound",
                ms: "Daftar perkakasan mengurung pengguna di satu sisi sempadan tetapi hanya memberi had bawah"
              }
            },
            {
              label: {
                zh: "重定位 Relocation",
                en: "Relocation",
                ms: "Pengalihan"
              },
              note: {
                zh: "给每个程序地址加上界栏寄存器内容，把按地址 0 编写的程序搬到实际位置",
                en: "Adding the fence register contents to each address moves a program written from address 0 to its real location",
                ms: "Menambah kandungan daftar pagar pada setiap alamat memindahkan program yang ditulis dari alamat 0 ke lokasi sebenarnya"
              }
            },
            {
              label: {
                zh: "基址/界限寄存器",
                en: "Base/Bounds Registers",
                ms: "Daftar Asas dan Sempadan"
              },
              note: {
                zh: "基址给下界、界限给上界，多用户环境下界栏变成可变的基址寄存器",
                en: "Base gives the lower bound and bounds the upper, and in a multiuser environment the fence becomes a variable base register",
                ms: "Asas memberi had bawah dan sempadan memberi had atas, dan dalam persekitaran berbilang pengguna pagar menjadi daftar asas yang boleh ubah"
              }
            },
            {
              label: {
                zh: "标记体系结构 Tagged Architecture",
                en: "Tagged Architecture",
                ms: "Seni Bina Bertag"
              },
              note: {
                zh: "每个字带标记位（R/RW/X），解决基址界限“全有或全无”的粗粒度问题",
                en: "Tag bits per word (R, RW, X) overcome the coarse all-or-none granularity of base/bounds",
                ms: "Bit tag bagi setiap perkataan (R, RW, X) mengatasi kekasaran semua-atau-tiada pada asas dan sempadan"
              }
            },
            {
              label: {
                zh: "分段 Segmentation",
                en: "Segmentation",
                ms: "Persegmenan"
              },
              note: {
                zh: "程序分为逻辑片段，地址 <段名, 偏移>，相当于无限多个基址/界限寄存器",
                en: "The program is split into logical pieces with addresses <name, offset>, like unbounded base/bounds registers",
                ms: "Program dipecahkan kepada kepingan logik dengan alamat <nama, offset>, seperti daftar asas dan sempadan yang tidak terhad"
              }
            },
            {
              label: {
                zh: "分页 Paging",
                en: "Paging",
                ms: "Penghalaman"
              },
              note: {
                zh: "程序分成等长的页、内存分成页框，地址 <页号, 偏移>，通过页表转换",
                en: "Equal-sized pages and page frames with addresses <page, offset>, translated through a page table",
                ms: "Halaman dan bingkai halaman sama saiz dengan alamat <halaman, offset>, diterjemah melalui jadual halaman"
              }
            }
          ],
          caption: {
            zh: "这条线索说明保护机制在“粒度”和“硬件复杂度”之间不断权衡：界栏最简单但最粗，分页与分段最灵活但需要地址转换表。",
            en: "This progression shows the trade-off between granularity and hardware complexity: the fence is the simplest but coarsest, while paging and segmentation are the most flexible but need address translation tables.",
            ms: "Perkembangan ini menunjukkan pertukaran antara kekasaran dan kerumitan perkakasan: pagar paling mudah tetapi paling kasar, manakala penghalaman dan persegmenan paling fleksibel tetapi memerlukan jadual terjemahan alamat."
          }
        }
      ],
      exam: [
        {
          zh: "访问控制三种机制的区别是必考内容：目录是按主体组织的（每个用户一张可访问对象清单），访问控制表是按对象组织的（每个对象一张主题清单），访问控制矩阵是行主体、列对象的稀疏表，单元格是访问权；要能说出目录机制在共享对象很多时的两大维护难题——删除共享对象要清理每个目录、撤销访问要遍历所有主体目录。",
          en: "The difference between the three access control mechanisms is compulsory: the directory is organised by subject with one list of accessible objects per user, the access control list is organised by object with one list of subjects per object, and the access control matrix is a sparse table with subjects as rows and objects as columns whose cells hold access rights; you must also state the two maintenance problems of the directory approach - deleting a shared object requires cleaning every directory and revoking access requires searching all subject directories.",
          ms: "Perbezaan antara tiga mekanisme kawalan akses adalah wajib: direktori disusun mengikut subjek dengan satu senarai objek yang boleh diakses bagi setiap pengguna, senarai kawalan akses disusun mengikut objek dengan satu senarai subjek bagi setiap objek, dan matriks kawalan akses ialah jadual jarang yang barisnya subjek dan lajurnya objek dengan selnya mengandungi hak akses; anda juga perlu menyatakan dua masalah penyelenggaraan pendekatan direktori - memadam objek yang dikongsi memerlukan pembersihan setiap direktori dan pembatalan akses memerlukan carian dalam semua direktori subjek."
        },
        {
          zh: "内存保护技术的比较常以填空或简答出现：界栏只提供下界、基址/界限提供上下界、标记体系结构给每个字加访问权限位、分段按逻辑单位划分并把 <段名, 偏移> 转换为实际地址、分页按等长单位划分并用 <页号, 偏移> 与页表转换；要特别注意“分段的大小可变、分页的大小固定”这一区别，以及标记体系结构未流行的原因是市场与兼容性考虑。",
          en: "Comparisons of memory protection techniques appear as fill-in or short answer questions: the fence gives only a lower bound, base/bounds gives both bounds, tagged architecture adds access right bits to every word, segmentation splits by logical units and translates <name, offset>, and paging splits into equal units translated with <page, offset> and a page table; note especially that segments vary in size while pages are fixed and that tagged architecture never spread because of market and compatibility considerations.",
          ms: "Perbandingan teknik perlindungan ingatan muncul sebagai soalan isi tempat kosong atau jawapan pendek: pagar hanya memberi had bawah, asas dan sempadan memberi kedua-dua had, seni bina bertag menambah bit hak akses pada setiap perkataan, persegmenan membahagi mengikut unit logik dan menterjemah <nama, offset>, manakala penghalaman membahagi kepada unit sama saiz yang diterjemah dengan <halaman, offset> dan jadual halaman; ambil perhatian terutama bahawa saiz segmen berubah-ubah manakala halaman tetap dan seni bina bertag tidak meluas kerana pertimbangan pasaran dan keserasian."
        },
        {
          zh: "身份识别与认证的概念辨析常考：principal 是唯一实体、identity 指定某个 principal、identification 是取得身份的过程（用户名）、authentication 是确认身份相符的过程（口令）；常见错误是把 identification 与 authentication 弄反，或忘记“同一主体可以有多个身份”。",
          en: "The concepts of identification and authentication are frequently tested: a principal is a unique entity, an identity specifies a principal, identification is the process of obtaining the identity such as a username, and authentication is the process of ensuring that the principal matches the purported identity; common mistakes are swapping identification and authentication or forgetting that the same principal may have many identities.",
          ms: "Konsep pengenalpastian dan pengesahan kerap diuji: prinsipal ialah entiti unik, identiti menentukan sesuatu prinsipal, pengenalpastian ialah proses memperoleh identiti seperti nama pengguna, dan pengesahan ialah proses memastikan prinsipal sepadan dengan identiti yang didakwa; kesilapan biasa ialah menukar ganti pengenalpastian dengan pengesahan atau melupakan bahawa prinsipal yang sama boleh mempunyai banyak identiti."
        },
        {
          zh: "口令相关的考点集中在攻击类型与选择准则：五种攻击是穷举所有口令、尝试常见口令、尝试该用户可能用的口令、寻找系统明文口令表、直接问用户；七条选择准则是用非字母字符、够长、避开真实姓名与单词、不易猜到、定期更换、不写下来、不告诉别人；还要记住一次性口令的本质是每用一次立即失效的挑战应答函数，以及系统在 3 到 5 次登录失败后断开连接。",
          en: "Password questions focus on the attacks and the selection criteria: the five attacks are trying all passwords, trying probable passwords, trying passwords likely for that user, searching for a plain text password list and asking the user; the seven criteria are to use characters other than letters, choose long passwords, avoid real names and words, choose an unlikely password, change it regularly, not write it down and not tell anyone; remember too that a one-time password is a challenge-response function invalidated after each use and that systems disconnect a user after three to five failed logins.",
          ms: "Soalan kata laluan tertumpu pada jenis serangan dan kriteria pemilihan: lima serangan ialah mencuba semua kata laluan, mencuba kata laluan yang mungkin, mencuba kata laluan yang mungkin bagi pengguna itu, mencari senarai kata laluan teks biasa dan bertanya kepada pengguna; tujuh kriteria ialah gunakan aksara bukan huruf, pilih kata laluan panjang, elakkan nama dan perkataan sebenar, pilih yang tidak mudah dijangka, tukar secara berkala, jangan tulis dan jangan beritahu sesiapa; ingat juga bahawa kata laluan sekali guna ialah fungsi cabaran-tindak balas yang tidak sah selepas setiap penggunaan dan sistem memutuskan sambungan selepas tiga hingga lima percubaan log masuk gagal."
        }
      ],
      mnemonic: {
        zh: "内存保护六步：栏、移、基界、标记、段、页；访问控制三件套：目录看用户、ACL 看对象、矩阵看全局；认证三问：你是谁知道吗（口令）、你是什么（生物）、你有什么（令牌）。",
        en: "Memory protection in six steps: fence, relocation, base/bounds, tagging, segmentation, paging; access control in three: directory by user, ACL by object, matrix for the whole picture; authentication asks what you know (password), what you are (biometrics) and what you have (token).",
        ms: "Perlindungan ingatan dalam enam langkah: pagar, pengalihan, asas dan sempadan, penandaan, persegmenan, penghalaman; kawalan akses dalam tiga bentuk: direktori mengikut pengguna, senarai kawalan akses mengikut objek, matriks untuk gambaran keseluruhan; pengesahan bertanya apa yang anda tahu (kata laluan), apa anda (biometrik) dan apa yang anda miliki (token)."
      }
    },
    {
      id: "cs-05",
      num: 5,
      title: {
        zh: "数据库安全",
        en: "Database Security",
        ms: "Keselamatan Pangkalan Data"
      },
      file: "cs/CHAPTER 5 - DATABASE SECURITY.pdf",
      pages: 46,
      summary: {
        zh: "本章依据 Pfleeger 与 Pfleeger《Security in Computing》第 4 版，讨论数据库与数据挖掘的安全问题。数据库既是数据的集合，也是一套规定数据之间关系的规则，用户通过数据库管理系统（DBMS，前端）与它交互，用查询进行选择、投影与连接。本章先给出数据库安全的七项要求：物理完整性、逻辑完整性、元素完整性、可审计性、访问控制、用户认证与可用性，并讲解两阶段更新、影子值、冗余与恢复、并发一致性等可靠性机制。接着讨论敏感数据的判定因素、访问决策与五种泄露类型，重点分析推理（inference）与聚合问题及其控制手段（抑制、隐藏、随机抽样、随机数据扰动、查询分析）。最后介绍多级安全数据库的几种设计方案——分区、加密、完整性锁、敏感度锁、可信前端、可交换过滤器、分布式数据库与视图，以及数据挖掘中的隐私风险。",
        en: "Based on Pfleeger and Pfleeger's Security in Computing (4th edition), this chapter examines security for databases and data mining. A database is a collection of data plus a set of rules that organise the data by specifying relationships among it, users interact with it through a database management system (DBMS, the front end) and use queries for selection, projection and joins. The chapter first lists seven security requirements - physical database integrity, logical database integrity, element integrity, auditability, access control, user authentication and availability - and explains reliability mechanisms such as two-phase update, shadow values, redundancy and recovery, and concurrency consistency. It then discusses what makes data sensitive, access decisions and the five types of disclosure, and analyses the inference and aggregation problems with their controls of suppression, concealing, random sample, random data perturbation and query analysis. It closes with multilevel secure database designs - partitioning, encryption, integrity lock, sensitivity lock, trusted front end, commutative filters, distributed databases and views - and with the privacy risks of data mining.",
        ms: "Berdasarkan Security in Computing (edisi ke-4) oleh Pfleeger dan Pfleeger, bab ini meneliti keselamatan pangkalan data dan perlombongan data. Pangkalan data ialah himpunan data serta satu set peraturan yang menyusun data dengan menetapkan hubungan antara data, pengguna berinteraksi dengannya melalui sistem pengurusan pangkalan data (DBMS, bahagian hadapan) dan menggunakan pertanyaan untuk pemilihan, unjuran dan gabungan. Bab ini terlebih dahulu menyenaraikan tujuh keperluan keselamatan - integriti fizikal, integriti logik, integriti elemen, kebolehauditan, kawalan akses, pengesahan pengguna dan ketersediaan - serta menerangkan mekanisme kebolehpercayaan seperti kemas kini dua fasa, nilai bayangan, lebihan dan pemulihan, dan ketekalan keselarian. Seterusnya ia membincangkan faktor yang menjadikan data sensitif, keputusan akses dan lima jenis pendedahan, lalu menganalisis masalah inferens dan agregasi berserta kawalannya iaitu penindasan, penyembunyian, sampel rawak, gangguan data rawak dan analisis pertanyaan. Bab ini diakhiri dengan reka bentuk pangkalan data berbilang aras - pemetakan, penyulitan, kunci integriti, kunci sensitiviti, bahagian hadapan dipercayai, penapis komutatif, pangkalan data teragih dan pandangan - serta risiko privasi dalam perlombongan data."
      },
      points: [
        {
          zh: "数据库是数据的集合加上一套通过规定数据之间的关系来组织数据的规则：用户只描述数据的逻辑格式，不必关心文件的物理格式；数据库管理员定义组织数据的规则并控制谁能访问数据的哪些部分；用户通过数据库管理器（DBMS，俗称前端）与数据库交互。数据库的结构术语要分清：记录包含一组相关数据，记录由字段（元素）组成，数据库的逻辑结构称为模式（schema），某个用户能访问的那一部分称为子模式（subschema）；每一列的名字是属性（attribute），若干列构成一个关系（relation）。用户用查询（query）检索、修改、增加或删除字段与记录，查询的结果就是一个子模式；选择操作挑出符合条件的行，投影操作抽取这些记录某些列的值，连接操作按公共元素合并两个子模式。",
          en: "A database is a collection of data plus a set of rules that organise the data by specifying certain relationships among the data: the user describes only a logical format and the precise physical format is of no concern, a database administrator defines the rules that organise the data and controls who should have access to what parts of it, and users interact with the database through a database manager or DBMS, informally known as the front end. The structural vocabulary must be kept clear: a record contains one related group of data and consists of fields or elements, the logical structure of a database is called a schema, the part a particular user may access is a subschema, the name of each column is an attribute and a relation is a set of columns. Users retrieve, modify, add or delete fields and records with commands called queries, and the result of a query is a subschema; a select operation identifies certain rows, a project operation extracts the values of certain columns from those records, and a join merges two subschemas on a common element.",
          ms: "Pangkalan data ialah himpunan data serta satu set peraturan yang menyusun data dengan menetapkan hubungan tertentu antara data: pengguna hanya menerangkan format logik dan format fizikal fail tidak menjadi perhatian, pentadbir pangkalan data menetapkan peraturan yang menyusun data dan mengawal siapa yang boleh mengakses bahagian data yang mana, manakala pengguna berinteraksi dengan pangkalan data melalui pengurus pangkalan data atau DBMS yang tidak rasmi dipanggil bahagian hadapan. Istilah struktur perlu difahami dengan jelas: rekod mengandungi satu kumpulan data yang berkaitan dan terdiri daripada medan atau elemen, struktur logik pangkalan data dipanggil skema, bahagian yang boleh diakses oleh pengguna tertentu dipanggil subskema, nama setiap lajur ialah atribut dan hubungan ialah satu set lajur. Pengguna memperoleh, mengubah, menambah atau memadam medan dan rekod dengan arahan yang dipanggil pertanyaan, dan hasil pertanyaan ialah subskema; operasi pilih mengenal pasti baris tertentu, operasi unjur mengeluarkan nilai lajur tertentu daripada rekod tersebut, dan operasi gabung menyatukan dua subskema pada elemen yang sama."
        },
        {
          zh: "使用数据库的优点是共享访问（许多人按需访问集中存放的一份数据）、最小冗余（用户不必各自收集和维护数据）、数据一致性（一处数据值的改变影响所有使用者）、数据完整性（防止意外或恶意的有害改动）和受控访问（只有授权用户才可以查看或修改数据值）。",
          en: "The advantages of using a database are shared access, since many people may access one central collection of data as needed; minimal redundancy, because users do not have to collect and maintain their own sets of data; data consistency, because a change to a data value affects all users of that value; data integrity, because values are protected against accidental or malicious changes; and controlled access, because only authorised users may view or modify data values.",
          ms: "Kelebihan menggunakan pangkalan data ialah akses berkongsi kerana ramai orang boleh mengakses satu himpunan data berpusat mengikut keperluan; lebihan minimum kerana pengguna tidak perlu mengumpul dan menyelenggara set data sendiri; ketekalan data kerana perubahan pada satu nilai data menjejaskan semua penggunanya; integriti data kerana nilai dilindungi daripada perubahan tidak sengaja atau berniat jahat; dan kawalan akses kerana hanya pengguna yang diberi kuasa boleh melihat atau mengubah nilai data."
        },
        {
          zh: "数据库安全有七项要求：物理完整性（数据免受断电等物理问题影响，遭灾后能重建）、逻辑完整性（数据库结构保持，改动一个字段不影响其他字段）、元素完整性（每个元素中的数据准确）、可审计性（能追踪谁或什么访问或修改了元素）、访问控制（用户只能访问被授权的数据，且不同用户可被限制在不同的访问模式如读或写）、用户认证（每个用户被明确识别，既用于审计轨迹也用于访问许可）以及可用性（用户能访问数据库以及所有被授权的数据）。数据库完整性可能受到两种情况影响：整个数据库被破坏，或个别数据项无法读取；数据库整体的完整性由 DBMS、操作系统和（人类的）计算系统管理员共同负责。DBMS 必须维护事务日志，系统可以先恢复数据库的备份副本，然后从日志重放此后的所有事务，从而得到正确的账目余额。",
          en: "Database security has seven requirements: physical integrity, so that data are immune to physical problems such as power failures and the database can be reconstructed after a catastrophe; logical integrity, so that the structure is preserved and a modification to one field does not affect other fields; element integrity, so that the data in each element are accurate; auditability, so that it is possible to track who or what accessed or modified elements; access control, so that a user may access only authorised data and different users can be restricted to different access modes such as read or write; user authentication, so that every user is positively identified both for the audit trail and for permission to access data; and availability, so that users can reach the database and all the data they are authorised to use. Two situations can affect the integrity of a database: the whole database is damaged, or individual data items become unreadable; integrity of the database as a whole is the responsibility of the DBMS, the operating system and the human computing system manager. The DBMS must maintain a log of transactions, so the system can revert to a backup copy of the database and reprocess all later transactions from the log to obtain accurate account balances.",
          ms: "Keselamatan pangkalan data mempunyai tujuh keperluan: integriti fizikal supaya data kebal terhadap masalah fizikal seperti kegagalan kuasa dan pangkalan data boleh dibina semula selepas bencana; integriti logik supaya strukturnya terpelihara dan pengubahsuaian satu medan tidak menjejaskan medan lain; integriti elemen supaya data dalam setiap elemen tepat; kebolehauditan supaya dapat dikesan siapa atau apa yang mengakses atau mengubah elemen; kawalan akses supaya pengguna hanya boleh mengakses data yang dibenarkan dan pengguna berbeza boleh dihadkan kepada mod akses berbeza seperti baca atau tulis; pengesahan pengguna supaya setiap pengguna dikenal pasti dengan pasti untuk jejak audit dan kebenaran akses; serta ketersediaan supaya pengguna dapat mencapai pangkalan data dan semua data yang dibenarkan. Dua keadaan boleh menjejaskan integriti pangkalan data: keseluruhan pangkalan data rosak, atau item data individu tidak dapat dibaca; integriti pangkalan data secara keseluruhan menjadi tanggungjawab DBMS, sistem pengendalian dan pengurus sistem pengkomputeran manusia. DBMS mesti menyelenggara log transaksi supaya sistem boleh kembali kepada salinan sandaran pangkalan data dan memproses semula semua transaksi kemudian daripada log untuk memperoleh baki akaun yang tepat."
        },
        {
          zh: "元素完整性指元素中的数据正确无误，可以采取三种纠正措施：字段检查（测试某个位置上的值是否合适）、访问控制，以及变更日志——变更日志记录对数据库的每一次修改，同时保存原始值与修改后的值，数据库管理员据此可以撤销任何被错误做出的修改。",
          en: "Element integrity means the data contained in each element are accurate, and corrective action can be taken in three ways: field checks, which test for appropriate values in a position; access control; and a change log, which lists every change made to the database together with both original and modified values so that a database administrator can undo any changes made in error.",
          ms: "Integriti elemen bermaksud data dalam setiap elemen adalah tepat, dan tindakan pembetulan boleh diambil melalui tiga cara: pemeriksaan medan yang menguji nilai yang sesuai pada sesuatu kedudukan; kawalan akses; dan log perubahan yang menyenaraikan setiap perubahan pada pangkalan data berserta nilai asal dan nilai yang diubah supaya pentadbir pangkalan data boleh membatalkan apa-apa perubahan yang dilakukan secara tersilap."
        },
        {
          zh: "两阶段更新解决“系统在修改数据中途失效”这一严重问题：如果被修改的数据项是一个长字段，可能出现一半是新值、一半是旧值的混乱状态。意向阶段（intent）由 DBMS 收集更新所需资源并在本地计算与保存影子值，提交阶段（commit）向数据库写入提交标志，标志一旦写入就意味着过了不可回头的临界点，此后 DBMS 才开始做永久性修改，并把影子值复制到真正的数据库中。讲义用文具库房的例子说明两阶段提交：先检查库存是否有 50 盒回形针（不够就拒绝并结束事务）；够则把库存从 107 减为 57；再向会计部门的用品预算收费；然后检查剩余量 57 是否低于再订购点，若是则生成订购通知并在数据库中标记为“已订购”；最后准备发货单，把 50 盒回形针送给会计部门——这五步必须按顺序全部完成，事务才算被正确处理。",
          en: "Two-phase update solves the serious problem of the computing system failing in the middle of modifying data, where a long field might end up half new and half old. In the intent phase the DBMS gathers the resources it needs, computes and stores shadow values locally, and in the commit phase it writes a commit flag to the database; the commit flag means the DBMS has passed the point of no return, after which it begins making permanent changes by copying the shadow values into the actual database. The lecture illustrates two-phase commit with a stockroom example: check whether 50 boxes of paper clips are on hand and reject the requisition if not; deduct 50 from the inventory figure (107 - 50 = 57); charge accounting's supplies budget; check whether the remaining 57 is below the reorder point and, if so, generate a notice to order more and flag the item as on order; and prepare a delivery order sending the 50 boxes to accounting - all five steps must be completed in the order listed for the database to be accurate and the transaction to be processed correctly.",
          ms: "Kemas kini dua fasa menyelesaikan masalah serius apabila sistem pengkomputeran gagal di tengah-tengah pengubahsuaian data, yang boleh menyebabkan medan panjang separuh bernilai baharu dan separuh bernilai lama. Dalam fasa niat, DBMS mengumpul sumber yang diperlukan serta mengira dan menyimpan nilai bayangan secara setempat, manakala dalam fasa komit ia menulis bendera komit ke pangkalan data; bendera komit bermakna DBMS telah melepasi titik tanpa pemulangan, dan selepas itu ia mula membuat perubahan kekal dengan menyalin nilai bayangan ke pangkalan data sebenar. Kuliah menggambarkan komit dua fasa dengan contoh bilik stor: periksa sama ada 50 kotak klip kertas ada dalam stok dan tolak permintaan jika tidak cukup; potong 50 daripada angka inventori (107 - 50 = 57); caj bajet bekalan jabatan perakaunan; periksa sama ada baki 57 berada di bawah titik pesanan semula dan jika ya jana notis pesanan serta tandakan item sebagai dipesan; dan sediakan pesanan penghantaran 50 kotak itu kepada jabatan perakaunan - kelima-lima langkah mesti diselesaikan mengikut urutan yang disenaraikan supaya pangkalan data tepat dan transaksi diproses dengan betul."
        },
        {
          zh: "此外还有冗余与内部一致性手段（检错纠错码、影子字段，乃至把整个属性或整条记录复制一份，以便出错时立即替换）、恢复（DBMS 记录用户访问特别是修改，失效时从备份重载并应用审计日志中的后续修改），以及并发一致性：当两个代理同时把同一个座位 11D 分配给不同乘客时结果会冲突，因此 DBMS 把整个“查询—更新”周期当作一个原子操作处理。监视器（monitor）是 DBMS 中负责数据库结构完整性的部件：范围比较监视器检查每个新值是否落在可接受范围内，过滤器或模式是更一般的数据形式检查，状态约束描述整个数据库的状态，转移约束描述在改动可以应用于数据库之前必须满足的条件。",
          en: "There are also redundancy and internal consistency measures such as error detection and correction codes, shadow fields and even duplicating entire attributes or records so that a second copy can provide an immediate replacement when an error is detected; recovery, where the DBMS maintains a log of user accesses especially changes and, after a failure, reloads the database from a backup and applies all later changes from the audit log; and concurrency consistency, where two agents assigning the same seat 11D to different passengers would conflict, so the DBMS treats the entire query-update cycle as a single atomic operation. A monitor is the unit of a DBMS responsible for the structural integrity of the database: a range comparison monitor tests each new value to ensure it is within an acceptable range, filters or patterns are more general types of data form checks, state constraints describe the condition of the entire database, and transition constraints describe the conditions necessary before changes can be applied to a database.",
          ms: "Terdapat juga langkah lebihan dan ketekalan dalaman seperti kod pengesanan dan pembetulan ralat, medan bayangan dan bahkan penggandaan keseluruhan atribut atau rekod supaya salinan kedua boleh menjadi pengganti segera apabila ralat dikesan; pemulihan, iaitu DBMS menyelenggara log akses pengguna terutamanya perubahan dan selepas kegagalan memuat semula pangkalan data daripada sandaran serta menggunakan semua perubahan kemudian daripada log audit; dan ketekalan keselarian, iaitu apabila dua ejen menetapkan tempat duduk 11D yang sama kepada penumpang berbeza akan berlaku percanggahan, jadi DBMS menganggap keseluruhan kitaran pertanyaan dan kemas kini sebagai satu operasi atom. Monitor ialah unit dalam DBMS yang bertanggungjawab atas integriti struktur pangkalan data: monitor perbandingan julat menguji setiap nilai baharu untuk memastikan ia dalam julat yang boleh diterima, penapis atau pola ialah pemeriksaan bentuk data yang lebih umum, kekangan keadaan menerangkan keadaan keseluruhan pangkalan data, dan kekangan peralihan menerangkan syarat yang perlu dipenuhi sebelum perubahan boleh digunakan pada pangkalan data."
        },
        {
          zh: "敏感数据是不应公开的数据，造成敏感的因素有：本身敏感（如防御导弹的位置）、来源敏感（如告密者的身份一旦泄露就会被牵连）、被声明为敏感（由数据库管理员或数据所有者指定）、属于敏感属性或敏感记录的一部分，以及与已披露信息相关联才变得敏感——例如金矿的经度单独看没什么意义，但与纬度结合就能精确定位金矿。",
          en: "Sensitive data are data that should not be made public, and several factors make data sensitive: it may be inherently sensitive such as the locations of defensive missiles; it may come from a sensitive source such as an informer whose identity would be compromised; it may be declared sensitive by the database administrator or the owner; it may be part of a sensitive attribute or a sensitive record; and some data become sensitive in the presence of other data, for example the longitude of a secret gold mine reveals little until it is combined with the latitude to pinpoint the mine.",
          ms: "Data sensitif ialah data yang tidak boleh didedahkan kepada umum, dan beberapa faktor menjadikan data sensitif: ia mungkin sensitif secara intrinsik seperti lokasi peluru berpandu pertahanan; ia mungkin berasal daripada sumber sensitif seperti pemberi maklumat yang identitinya akan terjejas; ia mungkin diisytiharkan sensitif oleh pentadbir pangkalan data atau pemilik data; ia mungkin sebahagian daripada atribut atau rekod yang sensitif; dan sesetengah data menjadi sensitif apabila digabungkan dengan data lain, contohnya longitud lombong emas rahsia tidak bermakna sehingga digabungkan dengan latitud untuk menentukan lokasinya dengan tepat."
        },
        {
          zh: "DBMS 在做访问决定时要考虑三个因素：数据的可用性（某个用户正在更新若干字段时，其他用户对这些字段的访问必须被暂时封锁，以免得到不准确的信息）、访问的可接受性（记录中的某些值可能是敏感的，DBMS 不应把敏感数据交给未授权的个人），以及用户身份的真实性（例如数据库管理员只允许某人在工作时间访问数据库）。泄露有五种类型，严重程度递减：泄露敏感数据项的精确值最严重；其次是泄露边界，即说明敏感值 y 落在 L 与 H 之间；再次是通过措辞巧妙的查询得到否定结果，从而知道 z 不是 y 的值；接着是泄露数据的存在性本身；最后是推断出某个元素具有某个值的概率。安全与精确是一对矛盾：用抑制手段时给出的结果都正确但很多查询必须被拒绝，用隐藏手段时能提供更多结果但精度较低，如何取舍取决于数据库的用途。",
          en: "The DBMS may consider three factors when deciding whether to permit an access: the availability of the data, since if one user is updating several fields other users' access to those fields must be blocked temporarily so that they do not receive inaccurate information; the acceptability of the access, since some values in a record may be sensitive and the DBMS should not release sensitive data to unauthorised individuals; and the assurance of authenticity, since certain characteristics of the user external to the database, such as permitting access only during working hours, may also be considered. Disclosure comes in five types of decreasing severity: revealing the exact value of a sensitive data item is the most serious; next is disclosing bounds, that is indicating that a sensitive value y lies between L and H; then a negative result, where a cleverly worded query shows that z is not the value of y; then existence, since the existence of data is itself sensitive; and finally the probable value, where one can determine the probability that an element has a certain value. Security and precision are in tension: with suppression any result provided is correct but many responses must be withheld, whereas with concealing more results can be provided at lower precision, and the choice depends on the context of the database.",
          ms: "DBMS boleh mempertimbangkan tiga faktor sebelum membenarkan sesuatu akses: ketersediaan data, kerana jika seseorang pengguna sedang mengemas kini beberapa medan akses pengguna lain ke medan itu mesti disekat sementara supaya mereka tidak menerima maklumat yang tidak tepat; kebolehtimaan akses, kerana sesetengah nilai dalam rekod mungkin sensitif dan DBMS tidak sepatutnya melepaskan data sensitif kepada individu yang tidak diberi kuasa; dan jaminan kesahihan, kerana ciri pengguna di luar pangkalan data seperti membenarkan akses hanya pada waktu bekerja juga boleh dipertimbangkan. Pendedahan terbahagi kepada lima jenis dengan tahap keseriusan yang menurun: mendedahkan nilai tepat sesuatu item data sensitif paling serius; seterusnya mendedahkan sempadan, iaitu menyatakan nilai sensitif y terletak antara L dengan H; kemudian hasil negatif, apabila pertanyaan yang disusun licik menunjukkan z bukan nilai y; kemudian kewujudan, kerana kewujudan data itu sendiri sensitif; dan akhirnya nilai berkemungkinan, apabila seseorang dapat menentukan kebarangkalian sesuatu elemen mempunyai nilai tertentu. Keselamatan dan ketepatan saling bertentangan: dengan penindasan semua hasil yang diberikan adalah tepat tetapi banyak respons mesti ditahan, manakala dengan penyembunyian lebih banyak hasil boleh diberikan pada ketepatan yang lebih rendah, dan pilihannya bergantung pada konteks pangkalan data."
        },
        {
          zh: "推理（inference）是从非敏感数据推导出敏感数据的方法：直接攻击用只返回极少记录的查询直接索取敏感字段的值（明显的攻击会被 DBMS 拒绝，但攻击者可以写出像 (SEX=M ∧DRUGS=1) ∨ (SEX≠M ∧SEX≠F) ∨ (DORM=AYRES) 这样仍然只命中一条记录却不易识破的查询），因此有“n 项超过 k%”规则，即当 n 个项目占所报告结果的比例超过 k% 时就应拒绝给出结果；间接攻击则利用总和、计数、平均值与中位数，例如已知 n 与 n-1 个值就能算出剩下的那一个；追踪器攻击（tracker attack）通过给两个查询加上可以互相抵消的额外记录（n-1 填充）来套取数据，讲义以“福尔摩斯宿舍里有多少位白人女性”为例，把 count(a ∧b ∧c) 改写成 count(a) − count(a ∧¬(b ∧c)) 绕过限制。针对统计推理攻击的控制手段有：抑制（拒绝提供结果，不给出敏感数据值）、隐藏（给出的答案接近但不完全等于真实值）、随机抽样（结果不是从整个数据库算出，而是从足够大的随机样本算出）、随机数据扰动（给统计结果加上一个小的随机误差项 ε）以及查询分析（分析查询及其含义再决定是否给出结果）；讲义明确指出推理问题没有完美的解决方案，只能抑制明显敏感的信息、跟踪用户已知道什么、以及伪装数据。聚合（aggregation）则是从较低敏感度的输入构建出敏感的结果，数据挖掘正是在多个数据库中筛选与关联大量数据元素以找出有用信息的过程。",
          en: "Inference is a way to derive sensitive data from non-sensitive data: a direct attack seeks the values of sensitive fields with queries that yield few records, and although an obvious attack may be rejected the attacker can write a query such as (SEX=M AND DRUGS=1) OR (SEX not M AND SEX not F) OR (DORM=AYRES) that still retrieves only one record, which is why the rule of n items over k percent withholds data when n items represent over k percent of the result; an indirect attack uses sums, counts, means and medians, since given n and n-1 values the remaining one can be computed; and a tracker attack fools the database manager by adding records that cancel each other out, the lecture showing how count(a AND b AND c) for female Caucasians in Holmes Hall can be rewritten as count(a) minus count(a AND NOT (b AND c)) to bypass the restriction. Controls for statistical inference attacks include suppression, where sensitive data values are not provided and the query is rejected without response; concealing, where the answer provided is close to but not exactly the actual value; random sample, where the result is computed on a random sample large enough to be valid rather than on the whole database; random data perturbation, where a small random error term is added to statistical results; and query analysis, where a query and its implications are analysed to decide whether a result should be provided; the lecture concludes that there are no perfect solutions to the inference problem, only suppressing obviously sensitive information, tracking what the user knows and disguising the data. Aggregation is building sensitive results from less sensitive inputs, and data mining is the process of sifting through multiple databases and correlating multiple data elements to find useful information.",
          ms: "Inferens ialah cara memperoleh data sensitif daripada data tidak sensitif: serangan langsung menuntut nilai medan sensitif dengan pertanyaan yang menghasilkan sedikit rekod, dan walaupun serangan yang jelas mungkin ditolak, penyerang boleh menulis pertanyaan seperti (SEX=M DAN DRUGS=1) ATAU (SEX bukan M DAN SEX bukan F) ATAU (DORM=AYRES) yang masih hanya memperoleh satu rekod, sebab itulah wujud peraturan n item melebihi k peratus yang menahan data apabila n item mewakili lebih daripada k peratus hasil; serangan tidak langsung menggunakan jumlah, kiraan, min dan median kerana diberi n dan n-1 nilai, nilai yang tinggal boleh dikira; manakala serangan penjejak memperdaya pengurus pangkalan data dengan menambah rekod yang saling membatalkan, dan kuliah menunjukkan bagaimana count(a DAN b DAN c) bagi wanita kulit putih di Holmes Hall boleh ditulis semula sebagai count(a) tolak count(a DAN BUKAN (b DAN c)) untuk memintas sekatan. Kawalan bagi serangan inferens statistik termasuk penindasan, iaitu nilai data sensitif tidak diberikan dan pertanyaan ditolak tanpa respons; penyembunyian, iaitu jawapan yang diberikan hampir tetapi tidak tepat sama dengan nilai sebenar; sampel rawak, iaitu hasil dikira daripada sampel rawak yang cukup besar dan bukan daripada keseluruhan pangkalan data; gangguan data rawak, iaitu istilah ralat rawak yang kecil ditambah pada hasil statistik; dan analisis pertanyaan, iaitu pertanyaan serta implikasinya dianalisis untuk menentukan sama ada hasil patut diberikan; kuliah menyimpulkan tiada penyelesaian sempurna bagi masalah inferens, hanya menindas maklumat yang jelas sensitif, menjejaki apa yang pengguna sudah tahu dan menyamarkan data. Agregasi pula membina hasil sensitif daripada input yang kurang sensitif, manakala perlombongan data ialah proses menapis beberapa pangkalan data dan mengaitkan banyak elemen data untuk menemui maklumat berguna."
        },
        {
          zh: "多级安全数据库的必要性来自三个特点：同一记录内不同元素的安全级别可以不同，因此安全应当按元素实施；仅有“敏感／非敏感”两级不足以表达某些情形，需要多级；聚合结果（总和、计数或一组值）的安全级别可能与单个元素不同，可能更高也可能更低。为此提出的设计包括分区（把数据库拆成各自独立的库，但破坏了消除冗余这一优点，也没有解决高级用户需要同时使用低层数据的问题）、加密与密码学分离、完整性锁（源自美国空军数据库安全暑期研究，绰号“喷漆”，给每个元素涂上表示敏感度的颜色，其标签必须不可伪造、唯一且隐藏，并配合作为检错码的密码学校验和）、敏感度锁（唯一标识符与敏感级别的组合）、可信数据库管理器、可信前端（又称守卫，工作方式类似引用监视器，负责认证用户、验证授权、分析结果中数据项的敏感级别并按用户安全级别筛选）、可交换过滤器、分布式或联邦数据库，以及视图／窗口（数据库的一个子集，只包含用户有权访问的信息，例如航空公司的视图与旅行社的视图不同）。",
          en: "The case for multilevel secure databases rests on three characteristics: the security of a single element may differ from that of other elements in the same record, so security should be implemented for each individual element; two levels of sensitive and non-sensitive are inadequate and several grades may be needed; and the security of an aggregate such as a sum, a count or a group of values may be higher or lower than that of the individual elements. Proposed designs include partitioning, which divides the database into separate databases but destroys the advantage of eliminating redundancy and does not solve the problem of a high-level user who needs low-level data, encryption and cryptographic separation, the integrity lock from the U.S. Air Force Summer Study on Data Base Security - nicknamed spray paint because each element is figuratively painted with a colour denoting its sensitivity, with a label that must be unforgeable, unique and concealed plus a cryptographic checksum as an error-detecting code - the sensitivity lock combining a unique identifier with the sensitivity level, a trusted database manager, a trusted front end also known as a guard that works much like a reference monitor, commutative filters, distributed or federated databases, and windows or views that contain exactly the information a user is entitled to access, such as the difference between an airline's view and a travel agent's view.",
          ms: "Keperluan pangkalan data berbilang aras keselamatan berasaskan tiga ciri: keselamatan satu elemen boleh berbeza daripada elemen lain dalam rekod yang sama, jadi keselamatan patut dilaksanakan bagi setiap elemen; dua aras iaitu sensitif dan tidak sensitif tidak memadai dan beberapa gred mungkin diperlukan; dan keselamatan sesuatu agregat seperti jumlah, kiraan atau kumpulan nilai boleh lebih tinggi atau lebih rendah daripada elemen individunya. Reka bentuk yang dicadangkan termasuk pemetakan yang membahagikan pangkalan data kepada beberapa pangkalan data berasingan tetapi memusnahkan kelebihan menghapuskan lebihan dan tidak menyelesaikan masalah pengguna aras tinggi yang memerlukan data aras rendah, penyulitan dan pengasingan kriptografi, kunci integriti daripada Kajian Musim Panas Keselamatan Pangkalan Data Tentera Udara Amerika Syarikat - digelar semburan cat kerana setiap elemen secara kiasannya dicat dengan warna yang menandakan sensitivitinya, dengan label yang mesti tidak boleh dipalsukan, unik dan tersembunyi berserta jumlah semak kriptografi sebagai kod pengesan ralat - kunci sensitiviti yang menggabungkan pengecam unik dengan aras sensitiviti, pengurus pangkalan data dipercayai, bahagian hadapan dipercayai yang juga dikenali sebagai pengawal dan berfungsi seperti monitor rujukan, penapis komutatif, pangkalan data teragih atau persekutuan, serta tetingkap atau pandangan yang mengandungi tepat maklumat yang berhak diakses oleh pengguna, seperti perbezaan antara pandangan syarikat penerbangan dan pandangan ejen pelancongan."
        }
      ],
      terms: [
        {
          en: "Database",
          zh: "数据库",
          ms: "Pangkalan Data",
          def: {
            zh: "数据的集合加上一套通过规定数据之间关系来组织数据的规则。",
            en: "A collection of data plus a set of rules that organise the data by specifying certain relationships among the data.",
            ms: "Himpunan data serta satu set peraturan yang menyusun data dengan menetapkan hubungan tertentu antara data."
          }
        },
        {
          en: "Database Management System (DBMS)",
          zh: "数据库管理系统",
          ms: "Sistem Pengurusan Pangkalan Data (DBMS)",
          def: {
            zh: "用户与之交互以访问数据库的程序，俗称前端，负责结构完整性与访问控制。",
            en: "The program through which users interact with a database, informally called the front end, responsible for structural integrity and access control.",
            ms: "Program yang digunakan pengguna untuk berinteraksi dengan pangkalan data, dipanggil bahagian hadapan, bertanggungjawab atas integriti struktur dan kawalan akses."
          }
        },
        {
          en: "Schema",
          zh: "模式",
          ms: "Skema",
          def: {
            zh: "数据库的逻辑结构，描述数据如何组织；某个用户可访问的那部分是子模式。",
            en: "The logical structure of a database describing how the data are organised; the portion a particular user may access is a subschema.",
            ms: "Struktur logik pangkalan data yang menerangkan cara data disusun; bahagian yang boleh diakses oleh pengguna tertentu ialah subskema."
          }
        },
        {
          en: "Attribute",
          zh: "属性",
          ms: "Atribut",
          def: {
            zh: "数据库表中每一列的名字；若干列构成一个关系。",
            en: "The name of each column of a database table; a relation is a set of columns.",
            ms: "Nama setiap lajur dalam jadual pangkalan data; hubungan ialah satu set lajur."
          }
        },
        {
          en: "Query",
          zh: "查询",
          ms: "Pertanyaan",
          def: {
            zh: "用户用来检索、修改、增加或删除字段与记录的命令，其结果是一个子模式，可包含选择、投影与连接操作。",
            en: "A command used to retrieve, modify, add or delete fields and records; its result is a subschema and it may involve selection, projection and joins.",
            ms: "Arahan untuk memperoleh, mengubah, menambah atau memadam medan dan rekod; hasilnya ialah subskema dan ia boleh melibatkan pemilihan, unjuran dan gabungan."
          }
        },
        {
          en: "Two-Phase Update",
          zh: "两阶段更新",
          ms: "Kemas Kini Dua Fasa",
          def: {
            zh: "解决系统在修改数据中途失效的机制，分意向阶段与提交阶段，提交标志写出后即过了不可回头的临界点。",
            en: "A technique that handles a system failure in the middle of modifying data, with an intent phase and a commit phase, where writing the commit flag marks the point of no return.",
            ms: "Teknik yang menangani kegagalan sistem di tengah pengubahsuaian data, dengan fasa niat dan fasa komit, dan penulisan bendera komit menandakan titik tanpa pemulangan."
          }
        },
        {
          en: "Shadow Value",
          zh: "影子值",
          ms: "Nilai Bayangan",
          def: {
            zh: "在意向阶段于本地计算并保存、在提交阶段才复制到真正数据库的数据值。",
            en: "A data value computed and stored locally during the intent phase and copied to the actual database during the commit phase.",
            ms: "Nilai data yang dikira dan disimpan secara setempat dalam fasa niat dan disalin ke pangkalan data sebenar dalam fasa komit."
          }
        },
        {
          en: "Auditability",
          zh: "可审计性",
          ms: "Kebolehauditan",
          def: {
            zh: "能够追踪谁或什么访问或修改了数据库元素，通常通过审计记录实现，可帮助维护完整性或事后查明责任人。",
            en: "The ability to track who or what has accessed or modified database elements, usually through an audit record, which helps maintain integrity or discover afterwards who affected which values.",
            ms: "Keupayaan menjejaki siapa atau apa yang mengakses atau mengubah elemen pangkalan data, biasanya melalui rekod audit, yang membantu mengekalkan integriti atau mengenal pasti kemudian siapa mengubah nilai yang mana."
          }
        },
        {
          en: "Sensitive Data",
          zh: "敏感数据",
          ms: "Data Sensitif",
          def: {
            zh: "不应公开的数据，可能因为本身敏感、来源敏感、被声明为敏感、属于敏感属性或记录，或与其他数据同时出现才敏感。",
            en: "Data that should not be made public, because they are inherently sensitive, come from a sensitive source, are declared sensitive, belong to a sensitive attribute or record, or become sensitive in the presence of other data.",
            ms: "Data yang tidak sepatutnya didedahkan kepada umum kerana sensitif secara intrinsik, berasal daripada sumber sensitif, diisytiharkan sensitif, tergolong dalam atribut atau rekod sensitif, atau menjadi sensitif apabila hadir bersama data lain."
          }
        },
        {
          en: "Inference",
          zh: "推理",
          ms: "Inferens",
          def: {
            zh: "从非敏感数据推导出敏感数据的方法，包括直接攻击、间接攻击（利用总和、计数、平均值、中位数）与追踪器攻击。",
            en: "A way to derive sensitive data from non-sensitive data, including direct attacks, indirect attacks using sums, counts, means and medians, and tracker attacks.",
            ms: "Cara memperoleh data sensitif daripada data tidak sensitif, termasuk serangan langsung, serangan tidak langsung menggunakan jumlah, kiraan, min dan median, serta serangan penjejak."
          }
        },
        {
          en: "Aggregation",
          zh: "聚合",
          ms: "Agregasi",
          def: {
            zh: "从敏感度较低的输入构建出敏感结果的过程，聚合结果的安全级别可能与单个元素不同。",
            en: "Building sensitive results from less sensitive inputs; the security of an aggregate may differ from that of the individual elements.",
            ms: "Membina hasil sensitif daripada input yang kurang sensitif; keselamatan sesuatu agregat boleh berbeza daripada elemen individunya."
          }
        },
        {
          en: "Suppression",
          zh: "抑制",
          ms: "Penindasan",
          def: {
            zh: "控制推理攻击的一种手段：不提供敏感数据值，直接拒绝查询而不作响应，代价是许多结果必须被扣下。",
            en: "A control for inference attacks where sensitive data values are not provided and the query is rejected without response, at the cost of withholding many results.",
            ms: "Kawalan serangan inferens apabila nilai data sensitif tidak diberikan dan pertanyaan ditolak tanpa respons, dengan kos menahan banyak hasil."
          }
        },
        {
          en: "Concealing",
          zh: "隐藏（混淆）",
          ms: "Penyembunyian",
          def: {
            zh: "控制推理攻击的另一种手段：给出的答案接近但不完全等于真实值，从而能提供更多结果但精度较低。",
            en: "Another inference control in which the answer provided is close to but not exactly the actual value, allowing more results at lower precision.",
            ms: "Kawalan inferens yang lain apabila jawapan yang diberikan hampir tetapi tidak tepat sama dengan nilai sebenar, membolehkan lebih banyak hasil pada ketepatan yang lebih rendah."
          }
        },
        {
          en: "Integrity Lock",
          zh: "完整性锁",
          ms: "Kunci Integriti",
          def: {
            zh: "美国空军数据库安全暑期研究提出的多级安全方案，给每个元素附上表示敏感度的标签（绰号喷漆），标签必须不可伪造、唯一且隐藏，并配合密码学校验和。",
            en: "A multilevel security proposal from the U.S. Air Force Summer Study on Data Base Security that attaches a sensitivity label to each element - nicknamed spray paint - where the label must be unforgeable, unique and concealed, together with a cryptographic checksum.",
            ms: "Cadangan keselamatan berbilang aras daripada Kajian Musim Panas Keselamatan Pangkalan Data Tentera Udara Amerika Syarikat yang melekatkan label sensitiviti pada setiap elemen - digelar semburan cat - dengan label yang mesti tidak boleh dipalsukan, unik dan tersembunyi, berserta jumlah semak kriptografi."
          }
        },
        {
          en: "Trusted Front End",
          zh: "可信前端",
          ms: "Bahagian Hadapan Dipercayai",
          def: {
            zh: "又称守卫，工作方式类似引用监视器：认证用户身份、验证其对数据的授权、分析结果中数据项的敏感级别，只把与用户安全级别相符的数据交给用户。",
            en: "Also known as a guard, it operates much like a reference monitor: it authenticates the user, verifies authorisation to the data, analyses the sensitivity levels of the data items in the result, and passes on only the items consistent with the user's security level.",
            ms: "Turut dikenali sebagai pengawal, ia berfungsi seperti monitor rujukan: mengesahkan identiti pengguna, memeriksa kebenaran akses kepada data, menganalisis aras sensitiviti item data dalam hasil, dan menyalurkan hanya item yang sepadan dengan aras keselamatan pengguna."
          }
        }
      ],
      diagrams: [
        {
          type: "layers",
          title: {
            zh: "多级安全数据库的请求路径（可信前端设计）",
            en: "Request Path in a Multilevel Secure Database (Trusted Front End Design)",
            ms: "Laluan Permintaan dalam Pangkalan Data Berbilang Aras (Reka Bentuk Bahagian Hadapan Dipercayai)"
          },
          layers: [
            {
              label: {
                zh: "用户",
                en: "User",
                ms: "Pengguna"
              },
              note: {
                zh: "提出查询，具有自己的安全级别",
                en: "Issues a query and has its own security level",
                ms: "Mengemukakan pertanyaan dan mempunyai aras keselamatan sendiri"
              }
            },
            {
              label: {
                zh: "不可信前端",
                en: "Untrusted Front End",
                ms: "Bahagian Hadapan Tidak Dipercayai"
              },
              note: {
                zh: "只负责把结果格式化后显示给用户",
                en: "Only formats the selected data and displays it to the user",
                ms: "Hanya memformat data terpilih dan memaparkannya kepada pengguna"
              }
            },
            {
              label: {
                zh: "可信前端（守卫）",
                en: "Trusted Front End (Guard)",
                ms: "Bahagian Hadapan Dipercayai (Pengawal)"
              },
              note: {
                zh: "认证用户、验证授权、按用户安全级别筛选结果，类似引用监视器",
                en: "Authenticates the user, verifies authorisation and filters results by the user's security level, like a reference monitor",
                ms: "Mengesahkan pengguna, memeriksa kebenaran dan menapis hasil mengikut aras keselamatan pengguna, seperti monitor rujukan"
              }
            },
            {
              label: {
                zh: "数据库管理器 DBMS",
                en: "Database Manager (DBMS)",
                ms: "Pengurus Pangkalan Data (DBMS)"
              },
              note: {
                zh: "可以是不可信的商品化 DBMS，执行查询并做 I/O",
                en: "May be an untrusted commercial DBMS that performs the query and the I/O",
                ms: "Boleh merupakan DBMS komersial tidak dipercayai yang melaksanakan pertanyaan dan I/O"
              }
            },
            {
              label: {
                zh: "低层访问控制与数据",
                en: "Low-Level Access Control and Data",
                ms: "Kawalan Akses Aras Rendah dan Data"
              },
              note: {
                zh: "元素级的安全标签与敏感数据本体",
                en: "Element-level sensitivity labels and the sensitive data themselves",
                ms: "Label sensitiviti pada aras elemen dan data sensitif itu sendiri"
              }
            }
          ],
          caption: {
            zh: "讲义强调：把可信计算基缩小到前端，就可以继续使用普通（不可信）的数据库管理器，代价是前端本身非常复杂，这也是分布式数据库方案不流行的原因。",
            en: "The lecture stresses that shrinking the trusted computing base to the front end allows an ordinary untrusted database manager to be reused, at the cost of a very complex front end, which is why the distributed database design is not popular.",
            ms: "Kuliah menegaskan bahawa mengecilkan asas pengkomputeran dipercayai kepada bahagian hadapan membolehkan pengurus pangkalan data biasa yang tidak dipercayai digunakan semula, dengan kos bahagian hadapan yang sangat rumit, dan itulah sebab reka bentuk pangkalan data teragih kurang popular."
          }
        },
        {
          type: "flow",
          dir: "v",
          title: {
            zh: "两阶段更新：意向阶段与提交阶段",
            en: "Two-Phase Update: Intent Phase and Commit Phase",
            ms: "Kemas Kini Dua Fasa: Fasa Niat dan Fasa Komit"
          },
          steps: [
            {
              label: {
                zh: "意向：检查提交标志",
                en: "Intent: check the commit flag",
                ms: "Niat: periksa bendera komit"
              },
              note: {
                zh: "若标志已置位则本阶段不能执行，必须停机或循环等待",
                en: "If the flag is set the phase cannot be performed; halt or loop until it is not set",
                ms: "Jika bendera ditetapkan fasa ini tidak boleh dijalankan; berhenti atau gelung sehingga tidak ditetapkan"
              }
            },
            {
              label: {
                zh: "意向：核对库存与预算",
                en: "Intent: check stock and budget",
                ms: "Niat: periksa stok dan bajet"
              },
              note: {
                zh: "比较申领量与在手量，计算 TCLIPS = ONHAND − REQUISITION 与 TBUDGET = BUDGET − COST",
                en: "Compare the requisition with the quantity on hand, compute TCLIPS = ONHAND - REQUISITION and TBUDGET = BUDGET - COST",
                ms: "Bandingkan permintaan dengan kuantiti di tangan, kira TCLIPS = ONHAND - REQUISITION dan TBUDGET = BUDGET - COST"
              }
            },
            {
              label: {
                zh: "意向：在本地保存影子值",
                en: "Intent: store shadow values locally",
                ms: "Niat: simpan nilai bayangan secara setempat"
              },
              note: {
                zh: "同时判断是否低于再订购点，设置 TREORDER",
                en: "Also decide whether the level is below the reorder point and set TREORDER",
                ms: "Juga tentukan sama ada aras berada di bawah titik pesanan semula dan tetapkan TREORDER"
              }
            },
            {
              label: {
                zh: "提交：写入提交标志",
                en: "Commit: write the commit flag",
                ms: "Komit: tulis bendera komit"
              },
              note: {
                zh: "过了不可回头的临界点，此后开始做永久修改",
                en: "The point of no return is passed and permanent changes begin",
                ms: "Titik tanpa pemulangan dilangkaui dan perubahan kekal bermula"
              }
            },
            {
              label: {
                zh: "提交：把影子值复制进数据库",
                en: "Commit: copy shadow values into the database",
                ms: "Komit: salin nilai bayangan ke dalam pangkalan data"
              },
              note: {
                zh: "复制 TCLIPS、TBUDGET、TREORDER 并准备发货通知、登记日志，最后清除提交标志",
                en: "Copy TCLIPS, TBUDGET and TREORDER, prepare the delivery notice, record the log and finally unset the commit flag",
                ms: "Salin TCLIPS, TBUDGET dan TREORDER, sediakan notis penghantaran, catat log dan akhirnya nyahset bendera komit"
              }
            }
          ]
        }
      ],
      exam: [
        {
          zh: "推理与聚合的区分是本章最常考的概念题：推理是从非敏感数据推导出敏感数据（如由经度加纬度定位金矿、由 n 与 n-1 个值算出剩下的一个），聚合则是把若干个较低敏感度的数据组合成敏感度更高的结果；答题时要能举出追踪器攻击的例子并写出 count(a ∧b ∧c) = count(a) − count(a ∧¬(b ∧c)) 的变形。",
          en: "Distinguishing inference from aggregation is the most frequently tested concept: inference derives sensitive data from non-sensitive data, such as pinpointing a mine from longitude plus latitude or computing the remaining value from n and n-1 values, while aggregation builds a more sensitive result from several less sensitive data items; be ready to give the tracker attack example and the transformation count(a AND b AND c) = count(a) - count(a AND NOT (b AND c)).",
          ms: "Membezakan inferens daripada agregasi ialah konsep yang paling kerap diuji: inferens memperoleh data sensitif daripada data tidak sensitif seperti menentukan lombong daripada longitud dan latitud atau mengira nilai terakhir daripada n dan n-1 nilai, manakala agregasi membina hasil yang lebih sensitif daripada beberapa item data yang kurang sensitif; bersedia memberi contoh serangan penjejak dan penjelmaan count(a DAN b DAN c) = count(a) - count(a DAN BUKAN (b DAN c))."
        },
        {
          zh: "两阶段更新的步骤与术语容易考细节：意向阶段（intent）收集资源、计算影子值，提交阶段（commit）先写提交标志，标志一旦写入就是不可回头的临界点；要记住提交阶段才把影子值复制到真正的数据库，以及恢复靠的是备份加重放审计日志中的后续修改。",
          en: "Two-phase update is examined in detail: the intent phase gathers resources and computes shadow values, while the commit phase writes the commit flag first and that flag marks the point of no return; remember that shadow values are copied into the actual database only in the commit phase and that recovery works by reloading a backup and reapplying later changes from the audit log.",
          ms: "Kemas kini dua fasa diuji secara terperinci: fasa niat mengumpul sumber dan mengira nilai bayangan, manakala fasa komit menulis bendera komit terlebih dahulu dan bendera itu menandakan titik tanpa pemulangan; ingat bahawa nilai bayangan disalin ke pangkalan data sebenar hanya dalam fasa komit dan pemulihan berlaku dengan memuat semula sandaran dan menggunakan semula perubahan kemudian daripada log audit."
        },
        {
          zh: "多级安全数据库的方案比较是简答题重点：分区会破坏数据库消除冗余的优点且没有解决高级用户需要低层数据的问题；完整性锁的标签必须不可伪造、唯一、隐藏，并配密码学校验和，缺点是效率（空间与处理时间）差；可信前端（守卫）像引用监视器，把可信计算基限制在前端；视图／窗口是用户有权访问的数据子集，例如航空公司与旅行社看到不同的视图。",
          en: "Comparing multilevel secure database designs is a key essay topic: partitioning destroys the advantage of eliminating redundancy and does not solve the problem of a high-level user needing low-level data; the integrity lock needs a label that is unforgeable, unique and concealed plus a cryptographic checksum, but its efficiency in space and processing time is a serious drawback; the trusted front end or guard works like a reference monitor and confines the trusted computing base to the front end; and a view or window is the subset of the database a user is entitled to access, as when an airline and a travel agent see different views.",
          ms: "Membandingkan reka bentuk pangkalan data berbilang aras ialah topik esei utama: pemetakan memusnahkan kelebihan menghapuskan lebihan dan tidak menyelesaikan masalah pengguna aras tinggi yang memerlukan data aras rendah; kunci integriti memerlukan label yang tidak boleh dipalsukan, unik dan tersembunyi berserta jumlah semak kriptografi, tetapi kecekapannya dari segi ruang dan masa pemprosesan merupakan kelemahan serius; bahagian hadapan dipercayai atau pengawal berfungsi seperti monitor rujukan dan mengehadkan asas pengkomputeran dipercayai pada bahagian hadapan; manakala pandangan atau tetingkap ialah subset pangkalan data yang berhak diakses pengguna, seperti syarikat penerbangan dan ejen pelancongan yang melihat pandangan berbeza."
        },
        {
          zh: "五种泄露类型的严重程度排序常以选择题出现：精确值 > 边界 > 否定结果 > 存在性 > 可能值；另外要掌握安全与精确的权衡——抑制保证结果都正确但会拒绝很多查询，隐藏能提供更多结果但精度下降，选择取决于数据库的使用场景。",
          en: "The severity ranking of the five types of disclosure often appears as multiple choice: exact data is the most serious, followed by bounds, negative result, existence and probable value; you should also know the trade-off between security and precision - suppression keeps every supplied result correct but withholds many responses, while concealing supplies more results at lower precision, and the choice depends on the context of the database.",
          ms: "Susunan keseriusan lima jenis pendedahan sering muncul sebagai soalan objektif: nilai tepat paling serius, diikuti sempadan, hasil negatif, kewujudan dan nilai berkemungkinan; anda juga perlu menguasai pertukaran antara keselamatan dengan ketepatan - penindasan memastikan setiap hasil yang diberikan tepat tetapi menahan banyak respons, manakala penyembunyian memberikan lebih banyak hasil pada ketepatan lebih rendah, dan pilihannya bergantung pada konteks pangkalan data."
        }
      ],
      mnemonic: {
        zh: "数据库安全七要求：物理、逻辑、元素、可审计、访问控制、认证、可用；泄露五级记“精、界、否、存、概”；控制四招：抑制、隐藏、抽样、扰动。",
        en: "Seven database security requirements: physical, logical, element, auditability, access control, authentication and availability; the five disclosures go exact, bounds, negative, existence, probable; and the controls are suppression, concealing, sampling and perturbation.",
        ms: "Tujuh keperluan keselamatan pangkalan data: fizikal, logik, elemen, kebolehauditan, kawalan akses, pengesahan dan ketersediaan; lima jenis pendedahan ialah tepat, sempadan, negatif, kewujudan dan berkemungkinan; manakala kawalannya ialah penindasan, penyembunyian, persampelan dan gangguan."
      }
    },
    {
      id: "cs-06",
      num: 6,
      title: {
        zh: "网络安全",
        en: "Security in Networks",
        ms: "Keselamatan dalam Rangkaian"
      },
      file: "cs/CHAPTER 6 - SECURITY IN NETWORKS.pdf",
      pages: 70,
      summary: {
        zh: "本章依据 Pfleeger 与 Pfleeger《Security in Computing》第 4 版，先讲网络的基本概念：网络的使用环境有匿名性、自动化、距离远、不透明和路由多变五个特点，网络安全取决于边界、所有权与控制三个维度，通信媒介包括双绞线、同轴电缆、光纤、无线、红外与卫星，而分层协议栈（ISO OSI 七层模型与 TCP/IP 四层模型）通过封装与对等层通信把复杂的通信隐藏起来。接着分析网络脆弱的原因（匿名、攻击点众多、共享、系统复杂、边界与路径未知）与攻击者动机，详细讲解侦察（端口扫描、社交工程、操作系统与应用指纹识别）、传输中的窃听与窃听器、协议缺陷、冒充与欺骗（猜测口令、重放、会话劫持、中间人攻击）、报文机密性与完整性威胁、网站漏洞与各种拒绝服务攻击（Smurf、SYN 洪泛、Teardrop、DNS 缓存污染、DDoS），以及移动代码与僵尸网络。最后给出网络安全的控制手段：分割与冗余的架构设计、链路加密与端到端加密、VPN、PKI 与证书、SSH、SSL/TLS、IPSec、签名的代码、加密邮件与 Kerberos 强认证，以及防火墙、入侵检测系统、蜜罐与无线安全（WEP、WPA/WPA2）。",
        en: "Based on Pfleeger and Pfleeger's Security in Computing (4th edition), this chapter begins with network concepts: networks are characterised by anonymity, automation, distance, opaqueness and routing diversity, their security depends on the dimensions of boundary, ownership and control, the media range from twisted pair and coax to optical fibre, wireless, infrared and satellite, and a layered protocol stack - the seven-layer ISO OSI reference model and the four-layer TCP/IP model - hides the complexity of communication through encapsulation and peer-layer exchanges. It then analyses what makes a network vulnerable (anonymity, many points of attack, sharing, complexity, unknown perimeter and unknown path) and who attacks networks, before explaining reconnaissance through port scanning, social engineering and operating system or application fingerprinting; eavesdropping and wiretapping in transit; protocol flaws; impersonation and spoofing through guessing, replay, session hijacking and man-in-the-middle attacks; threats to message confidentiality and integrity; web site vulnerabilities and denial of service attacks such as Smurf, SYN flood, Teardrop, DNS cache poisoning and DDoS; and mobile code and botnets. It closes with network security controls: segmentation and redundancy, link and end-to-end encryption, VPNs, PKI and certificates, SSH, SSL/TLS, IPSec, signed code, encrypted e-mail and Kerberos, together with firewalls, intrusion detection systems, honeypots and wireless security with WEP and WPA/WPA2.",
        ms: "Berdasarkan Security in Computing (edisi ke-4) oleh Pfleeger dan Pfleeger, bab ini bermula dengan konsep rangkaian: rangkaian dicirikan oleh tanpa nama, automasi, jarak, ketidakjelasan dan kepelbagaian penghalaan, keselamatannya bergantung pada dimensi sempadan, pemilikan dan kawalan, mediumnya merangkumi pasangan berpintal dan kabel sepaksi hingga gentian optik, wayarles, inframerah dan satelit, manakala tindanan protokol berlapis - model rujukan ISO OSI tujuh lapisan dan model TCP/IP empat lapisan - menyembunyikan kerumitan komunikasi melalui enkapsulasi dan pertukaran antara lapisan setara. Seterusnya ia menganalisis punca kerentanan rangkaian (tanpa nama, banyak titik serangan, perkongsian, kerumitan, perimeter dan laluan yang tidak diketahui) dan siapa yang menyerang rangkaian, sebelum menerangkan peninjauan melalui imbasan port, kejuruteraan sosial dan pengecaman cap jari sistem pengendalian atau aplikasi; penyadapan semasa penghantaran; kecacatan protokol; penyamaran dan penipuan identiti melalui tekaan, main semula, perampasan sesi dan serangan orang tengah; ancaman terhadap kerahsiaan dan integriti mesej; kerentanan laman web dan serangan penafian perkhidmatan seperti Smurf, banjir SYN, Teardrop, pencemaran cache DNS dan DDoS; serta kod mudah alih dan rangkaian bot. Bab ini diakhiri dengan kawalan keselamatan rangkaian: pemetakan dan lebihan, penyulitan pautan dan hujung ke hujung, VPN, PKI dan sijil, SSH, SSL/TLS, IPSec, kod bertandatangan, e-mel bersulit dan Kerberos, berserta tembok api, sistem pengesanan pencerobohan, periuk madu dan keselamatan wayarles dengan WEP serta WPA/WPA2."
      },
      points: [
        {
          zh: "网络的使用环境有五个特点，它们同时带来安全难题：匿名性（网上没人知道你是一条狗，攻击者可以从几千英里外下手而从不与系统直接接触）、自动化（通信的一端或两端乃至中间点都可能是只有极少人工监督的机器）、距离远、不透明性（用户无法判断这次通信是否还是上次那台主机）以及路由多样性（两端之间的路由通常是动态的，以提高可靠性与性能）。网络配置方式称为网络拓扑（shape and size）；对安全有特别影响的三个维度是边界（区分网络内的元素与网络外的元素）、所有权（往往很难知道网络中每台主机归谁所有）和控制（如果所有权都不确定，控制权就更不确定）。网络的类型分为局域网（小、本地控制、物理受保护、范围有限）、广域网（单一控制、跨越较长距离、通常物理上暴露）以及互联网（网络的网络）；互联网的特点是联邦式、规模巨大、高度异构、在物理上和逻辑上都暴露。",
          en: "The environment in which networks are used has five characteristics that also create security problems: anonymity, since nobody knows you are a dog on the Internet and an attacker can strike from thousands of miles away without ever contacting the system directly; automation, because one or both endpoints and all intermediate points may be machines with only minimal human supervision; distance; opaqueness, since users cannot tell whether the current communication involves the same host as last time; and routing diversity, because routings between two endpoints are usually dynamic to maintain reliability and performance. The way a network is configured is called its topology, and three dimensions have particular bearing on its security: the boundary, which distinguishes an element of the network from an element outside it; ownership, since it is often difficult to know who owns each host; and control, because if ownership is uncertain control must be too. Types of networks are local area networks, which are small, locally controlled, physically protected and limited in scope; wide area networks, under a single control, covering a significant distance and often physically exposed; and internetworks, that is networks of networks; the Internet is characterised as federated, enormous, heterogeneous and physically and logically exposed.",
          ms: "Persekitaran penggunaan rangkaian mempunyai lima ciri yang turut menimbulkan masalah keselamatan: tanpa nama, kerana tiada siapa tahu anda seekor anjing di Internet dan penyerang boleh menyerang dari ribuan batu jauhnya tanpa pernah bersentuhan dengan sistem; automasi, kerana satu atau kedua-dua hujung serta semua titik perantaraan mungkin mesin dengan penyeliaan manusia yang minimum; jarak; ketidakjelasan, kerana pengguna tidak dapat memastikan sama ada komunikasi semasa melibatkan hos yang sama seperti sebelum ini; dan kepelbagaian penghalaan, kerana laluan antara dua hujung biasanya dinamik untuk mengekalkan kebolehpercayaan dan prestasi. Cara rangkaian dikonfigurasikan dipanggil topologinya, dan tiga dimensi mempunyai kesan khusus terhadap keselamatannya: sempadan yang membezakan elemen dalam rangkaian daripada elemen di luarnya; pemilikan kerana selalunya sukar mengetahui siapa memiliki setiap hos; dan kawalan kerana jika pemilikan tidak pasti, kawalan juga tidak pasti. Jenis rangkaian ialah rangkaian kawasan setempat yang kecil, dikawal secara setempat, dilindungi secara fizikal dan berskop terhad; rangkaian kawasan luas di bawah satu kawalan, merentas jarak yang jauh dan selalunya terdedah secara fizikal; serta rangkaian antara rangkaian; Internet dicirikan sebagai bersekutu, sangat besar, heterogen dan terdedah dari segi fizikal serta logik."
        },
        {
          zh: "网络媒介包括双绞线（UTP）、同轴电缆（以太网在最长 1500 英尺的距离上可传输高达 100 Mbps，距离远了信号会劣化，需要中继器或放大器）、光纤（干扰更少、相邻媒介之间的串扰更小、成本更低、比铜缆更轻，但每次建立新连接都必须仔细调谐，而且它传输的是光不是电，因此不会像电流那样发出磁场）、无线（802.11 系列标准，主要威胁不是干扰而是截取与服务盗用）、微波、红外（短距离，最远约 9 英里）与卫星（地球同步轨道，发射机以较窄的扩散角在地面形成相当宽的覆盖区即 footprint）。ISO OSI 参考模型把通信分成七层，每层有明确的活动：应用层处理用户级数据；表示层负责标准化的数据表示、分块与文本压缩；会话层管理会话或逻辑连接、消息排序与恢复；传输层负责流控、端到端检错纠错与优先服务；网络层负责路由并把消息切成统一大小的分组；数据链路层在物理介质上可靠传输数据、恢复传输错误并把分组切成统一大小的帧；物理层在物理介质上真正通信、逐位传输。每一层向三个方向传递数据：向上层以更抽象的方式通信、平行地与另一台主机的同一层通信（平行的层称为对等层 peers，是虚拟通信路径），向下层处理更基础的数据项。",
          en: "Network media include twisted pair or unshielded twisted pair, coaxial cable - over which Ethernet carries up to 100 Mbps for up to 1500 feet, with signal quality degrading over distance and repeaters for digital or amplifiers for analog signals - optical fibre, which suffers less interference and less crossover between adjacent media, costs less and weighs less than copper but must be carefully tuned whenever a new connection is made and, since it carries light rather than electricity, does not emanate a magnetic field, wireless using the 802.11 family where the major threat is interception and theft of service rather than interference, microwave, infrared for short distances of up to nine miles, and satellite using geosynchronous orbits whose transmitter produces a fairly broad pattern called the footprint on the earth. The ISO OSI reference model divides communication into seven layers with distinct activities: the application layer handles user-level data; the presentation layer provides a standardised data appearance, blocking and text compression; the session layer manages sessions or logical connections between parts of an application including message sequencing and recovery; the transport layer handles flow control, end-to-end error detection and correction and priority service; the network layer handles routing and blocks messages into uniformly sized packets; the data link layer delivers data reliably over the physical medium, recovers transmission errors and separates packets into uniformly sized frames; and the physical layer performs actual communication across the physical medium by individual bit transmission. Each layer passes data in three directions - above to a layer communicating more abstractly, parallel to the same layer in another host, and below to a layer handling more fundamental data items - and parallel layers are called peers, forming a virtual communication path.",
          ms: "Medium rangkaian termasuk pasangan berpintal atau pasangan berpintal tidak berperisai, kabel sepaksi yang membawa Ethernet sehingga 100 Mbps pada jarak sehingga 1500 kaki dengan kualiti isyarat merosot mengikut jarak serta memerlukan pengulang bagi isyarat digital atau penguat bagi isyarat analog, gentian optik yang kurang gangguan dan kurang silang antara medium bersebelahan, lebih murah dan lebih ringan daripada tembaga tetapi mesti ditala dengan teliti setiap kali sambungan baharu dibuat dan kerana membawa cahaya bukan elektrik ia tidak mengeluarkan medan magnet, wayarles menggunakan keluarga 802.11 yang ancaman utamanya ialah pemintasan dan kecurian perkhidmatan dan bukan gangguan, gelombang mikro, inframerah untuk jarak dekat sehingga sembilan batu, serta satelit dalam orbit geopegun yang pemancarnya menghasilkan pola agak luas di permukaan bumi yang dipanggil jejak. Model rujukan ISO OSI membahagikan komunikasi kepada tujuh lapisan dengan aktiviti tersendiri: lapisan aplikasi mengendalikan data aras pengguna; lapisan persembahan menyediakan rupa data yang piawai, pemblokkan dan pemampatan teks; lapisan sesi mengurus sesi atau sambungan logik antara bahagian aplikasi termasuk urutan mesej dan pemulihan; lapisan pengangkutan mengendalikan kawalan aliran, pengesanan dan pembetulan ralat hujung ke hujung serta perkhidmatan keutamaan; lapisan rangkaian mengendalikan penghalaan dan memecahkan mesej kepada paket bersaiz seragam; lapisan pautan data menghantar data dengan boleh dipercayai melalui medium fizikal, memulihkan ralat penghantaran dan memisahkan paket kepada bingkai bersaiz seragam; manakala lapisan fizikal menjalankan komunikasi sebenar merentas medium fizikal melalui penghantaran bit individu. Setiap lapisan menyalurkan data ke tiga arah - ke atas kepada lapisan yang berkomunikasi secara lebih abstrak, secara selari kepada lapisan yang sama pada hos lain, dan ke bawah kepada lapisan yang mengendalikan item data yang lebih asas - dan lapisan selari dipanggil rakan setara, membentuk laluan komunikasi maya."
        },
        {
          zh: "寻址与封装是理解网络攻击的基础：网络层中带有目的地址、源地址和数据的结构称为分组（packet），路由器据此把消息从你的网络送到对方网络上的路由器；每台联网计算机的网络接口卡（NIC）都有唯一的物理地址即 MAC 地址，数据链路层再加上目的 MAC 与源 MAC 两个头部，这种结构称为帧（frame）；在 TCP/IP 中，TCP 报文包含序号、确认号、标志位以及源与目的端口号，端口号标识计算机上运行的某个应用，而 UDP 不提供 TCP 的检错纠错功能，但更小更快。IP 地址是 32 位地址，用四组 8 位十进制数加点表示（如 100.24.48.6），由于地址即将耗尽，正通过 IPv6 扩展到 128 位；人们更愿意用域名（如 ATT.COM）来称呼网络地址。TCP/IP 不是按层定义而是按协议定义，但可以看成四层：应用层、主机到主机（端到端）传输层、互联网层和物理层；TCP 在更基本的 IP 传输协议之上实现有连接的通信会话，必须保证分组的正确排序以及分组内数据的完整性，UDP 也是协议族的重要部分。应用层协议包括 SMTP（电子邮件）、HTTP（网页）、FTP（收发文件）和 Telnet（像直接连在主机上一样进行远程操作），UDP 协议包括 SNMP（控制网络设备）、Syslog（把记录写入系统日志）和 Time（在网络设备之间通信与同步时间）。路由的基本概念：每台主机知道自己与哪些主机直接相连，主机把连接情况告诉邻居，并向邻居宣告自己能路由到哪些地址以及代价（跳数），每台主机把流量路由到提供最低代价路径的邻居。",
          en: "Addressing and encapsulation underpin network attacks: at the network layer a structure of destination address, source address and data is called a packet, and a router uses it to send the message from your network to a router on the destination network; every computer connected to a network has a network interface card with a unique physical address called the MAC address, and at the data link level two more headers are added for the destination and source MAC so that the structure is called a frame; in TCP/IP a TCP packet includes a sequence number, an acknowledgment number, flags and source and destination port numbers, where a port designates a particular application running on a computer, while UDP omits the error checking and correcting features of TCP but is much smaller and faster. An IP address is a 32-bit address written as four 8-bit decimal groups separated by periods, such as 100.24.48.6, and because the world is running out of unique addresses this standard is being increased to 128 bits in IPv6; people prefer words, so network addresses are also known by domain names such as ATT.COM. TCP/IP is defined by protocols rather than layers, but it can be thought of as four layers: application, host-to-host or end-to-end transport, internet and physical; TCP implements a connected communications session on top of the more basic IP transport protocol and must ensure the correct sequencing of packets as well as the integrity of the data within them, and UDP is also an essential part of the suite. Application layer protocols include SMTP for e-mail, HTTP for web pages, FTP for sending and receiving files and Telnet for performing remote operations as if directly connected to the host, while UDP protocols include SNMP for controlling network devices, Syslog for entering records in the system log and Time for communicating and synchronising time among network devices. The basic routing concepts are that every host knows to which other hosts it is directly connected, hosts communicate their connections to their neighbours, they advertise to their neighbours which addresses they can route traffic to and at what cost measured in hops, and each host routes traffic to the neighbour that offers a path at the cheapest cost.",
          ms: "Pengalamatan dan enkapsulasi menjadi asas serangan rangkaian: pada lapisan rangkaian, struktur yang mengandungi alamat destinasi, alamat sumber dan data dipanggil paket, dan penghala menggunakannya untuk menghantar mesej daripada rangkaian anda ke penghala pada rangkaian destinasi; setiap komputer yang bersambung ke rangkaian mempunyai kad antara muka rangkaian dengan alamat fizikal unik yang dipanggil alamat MAC, dan pada aras pautan data dua pengepala lagi ditambah bagi MAC destinasi dan MAC sumber sehingga strukturnya dipanggil bingkai; dalam TCP/IP, paket TCP mengandungi nombor jujukan, nombor pengakuan, bendera serta nombor port sumber dan destinasi, dengan port menandakan aplikasi tertentu yang berjalan pada komputer, manakala UDP tidak menyediakan ciri pengesanan dan pembetulan ralat TCP tetapi jauh lebih kecil dan pantas. Alamat IP ialah alamat 32 bit yang ditulis sebagai empat kumpulan perpuluhan 8 bit dipisahkan noktah seperti 100.24.48.6, dan kerana dunia kehabisan alamat unik, piawaian ini dinaikkan kepada 128 bit dalam IPv6; orang lebih suka perkataan, jadi alamat rangkaian juga dikenali dengan nama domain seperti ATT.COM. TCP/IP ditakrifkan oleh protokol dan bukan lapisan, tetapi boleh dianggap sebagai empat lapisan: aplikasi, pengangkutan hos ke hos atau hujung ke hujung, internet dan fizikal; TCP melaksanakan sesi komunikasi bersambung di atas protokol pengangkutan IP yang lebih asas dan mesti memastikan urutan paket yang betul serta integriti data di dalamnya, manakala UDP juga bahagian penting dalam suite ini. Protokol lapisan aplikasi termasuk SMTP untuk e-mel, HTTP untuk halaman web, FTP untuk menghantar dan menerima fail serta Telnet untuk menjalankan operasi jauh seolah-olah bersambung terus kepada hos, sementara protokol UDP termasuk SNMP untuk mengawal peranti rangkaian, Syslog untuk mencatat rekod dalam log sistem dan Time untuk berkomunikasi serta menyegerakkan masa antara peranti rangkaian. Konsep asas penghalaan ialah setiap hos mengetahui hos lain yang bersambung terus dengannya, hos menyampaikan sambungannya kepada jiran, mereka mengiklankan kepada jiran alamat yang boleh dihalakan serta kosnya dalam bilangan hop, dan setiap hos menghalakan trafik kepada jiran yang menawarkan laluan paling murah."
        },
        {
          zh: "网络之所以脆弱，是因为它与单机环境有六点不同：匿名（攻击者可以从几千英里外发起攻击而从不与系统直接接触）、攻击点众多（目标和来源都很多）、共享（资源被许多人共用）、系统复杂、边界未知（很难确定网络的周界在哪里）以及路径未知（数据走的路由不确定）。攻击网络的动机有四种：挑战或权力（享受击败号称不可击败者的智力刺激）、名声（寻求对其行为的认可）、金钱与间谍活动，以及意识形态（为推动某种意识形态目标而攻击）。",
          en: "A network is vulnerable because it differs from a stand-alone environment in six ways: anonymity, since an attacker can mount an attack from thousands of miles away and never come into direct contact with the system; many points of attack, both as targets and as origins; sharing; complexity of the system; an unknown perimeter, since it is hard to say where the boundary of the network lies; and an unknown path, since the route the data take is uncertain. Four important motives drive people to attack networks: challenge or power, because some attackers enjoy the intellectual stimulation of defeating the supposedly undefeatable; fame, seeking recognition for their activities; money and espionage; and ideology, since attacks are perpetrated to advance ideological ends.",
          ms: "Rangkaian terdedah kerana ia berbeza daripada persekitaran berdiri sendiri dalam enam perkara: tanpa nama kerana penyerang boleh menyerang dari ribuan batu jauhnya tanpa pernah bersentuhan dengan sistem; banyak titik serangan sama ada sebagai sasaran atau punca; perkongsian; kerumitan sistem; perimeter yang tidak diketahui kerana sukar menentukan di mana sempadan rangkaian; dan laluan yang tidak diketahui kerana laluan data tidak pasti. Empat motif penting mendorong serangan ke atas rangkaian: cabaran atau kuasa kerana sesetengah penyerang menikmati rangsangan intelek menewaskan pihak yang dikatakan tidak dapat dikalahkan; kemasyhuran kerana mencari pengiktirafan atas aktiviti mereka; wang dan pengintipan; serta ideologi kerana serangan dilakukan untuk memajukan matlamat ideologi."
        },
        {
          zh: "侦察是攻击的前奏：端口扫描程序对某个 IP 地址报告哪些端口有响应、存在哪些已知漏洞，它告诉攻击者三件事——目标系统上运行并响应的是哪些标准端口或服务、装的是什么操作系统、存在哪些应用及其版本；社交工程则用社交技巧与个人互动诱使某人泄露与安全有关的信息，甚至做出允许攻击的事情，而且由于受害者帮了攻击者、被对方连声道谢，往往不觉得有问题、不会上报；操作系统与应用指纹识别依据服务应答中的细微差异（如“Server: Netscape-Commerce/1.12”或“Microsoft ESMTP MAIL Service, Version: 5.0.2195.3779”）判断厂商与版本，此外还有公告板与聊天、文档的公开可得性等情报来源。传输中的威胁分两种：窃听（eavesdrop）意味着不必额外费力就能听到，更带敌意的说法是窃听器（wiretap），指通过某种努力截取通信；被动窃听只是“听”，主动窃听则意味着向通信中注入内容。在电缆上，分组嗅探器可以抓取局域网上的所有分组，也可以把一块网卡的地址改写成局域网上另一块网卡的所谓唯一地址，让两块网卡都接收同一个地址的分组；入侵者还可以通过电感效应在不接触电缆的情况下读取辐射信号，或者干脆剪断电缆，在修复时接上一条副线来复制主线上的全部信号。",
          en: "Reconnaissance comes before the attack: a port scan is a program that, for a particular IP address, reports which ports respond and which known vulnerabilities seem present, telling the attacker which standard ports or services are running, what operating system is installed and what applications and versions are present; social engineering uses social skills and personal interaction to get someone to reveal security-relevant information or even do something that permits an attack, and because the victim has helped the attacker and been thanked, nothing seems wrong and the incident is not reported; operating system and application fingerprinting uses peculiarities in the responses - such as Server: Netscape-Commerce/1.12 or Microsoft ESMTP MAIL Service, Version: 5.0.2195.3779 - to identify the manufacturer and version, and bulletin boards, chats and the availability of documentation are further sources of intelligence. Threats in transit come in two forms: eavesdropping implies overhearing without expending extra effort, while the more hostile term wiretapping means intercepting communications through some effort; passive wiretapping is just listening, whereas active wiretapping means injecting something into the communication. On cable, a packet sniffer can retrieve all packets on the LAN, or an interface card can be reprogrammed with the supposedly unique address of another card so that both fetch packets for one address; an intruder can also exploit inductance to read radiated signals without making physical contact with the cable, or simply cut the cable and, as part of the repair, splice in a secondary cable that receives a copy of all signals along the primary cable.",
          ms: "Peninjauan berlaku sebelum serangan: imbasan port ialah program yang bagi sesuatu alamat IP melaporkan port mana yang bertindak balas dan kerentanan yang diketahui kelihatan wujud, memberitahu penyerang port atau perkhidmatan standard mana yang berjalan, sistem pengendalian apa yang dipasang serta aplikasi dan versinya; kejuruteraan sosial menggunakan kemahiran sosial dan interaksi peribadi untuk membuat seseorang mendedahkan maklumat berkaitan keselamatan atau melakukan sesuatu yang membolehkan serangan, dan kerana mangsa telah membantu penyerang lalu diucapkan terima kasih, tiada apa yang kelihatan salah dan insiden itu tidak dilaporkan; pengecaman cap jari sistem pengendalian dan aplikasi menggunakan keanehan dalam respons - seperti Server: Netscape-Commerce/1.12 atau Microsoft ESMTP MAIL Service, Version: 5.0.2195.3779 - untuk mengenal pasti pengeluar dan versinya, manakala papan buletin, sembang dan ketersediaan dokumentasi menjadi sumber risikan yang lain. Ancaman semasa penghantaran datang dalam dua bentuk: mengintai bermaksud terdengar tanpa usaha tambahan, manakala istilah yang lebih bermusuhan iaitu penyadapan wayar bermaksud memintas komunikasi melalui sesuatu usaha; penyadapan pasif hanya mendengar, sementara penyadapan aktif bermaksud menyuntik sesuatu ke dalam komunikasi. Pada kabel, pengendus paket boleh memperoleh semua paket dalam LAN, atau kad antara muka boleh diprogram semula dengan alamat unik kad lain supaya kedua-duanya mengambil paket bagi satu alamat; penceroboh juga boleh memanfaatkan induktansi untuk membaca isyarat terpancar tanpa bersentuhan fizikal dengan kabel, atau memotong kabel dan semasa pembaikan menyambung kabel sekunder yang menerima salinan semua isyarat pada kabel utama."
        },
        {
          zh: "冒充有五种途径：猜出目标的身份与认证信息、从先前的通信或窃听中取得目标的身份与认证信息、绕过或关闭目标计算机上的认证机制、攻击一个不需要认证的目标、攻击一个认证数据已知的目标。猜测之所以奏效，是因为有容易猜到的口令、默认口令以及无人使用的死账号；欺骗（spoofing）是攻击者虚假地充当网络交互的一端，伪装（masquerade）是一台主机假装成另一台主机（常见的例子是域名混淆，如 xyz.com、xyz.org、xyz.net 可能是三个不同组织，其变体是钓鱼：冒充 Blue Bank 的徽标发邮件诱骗受害者点击链接）；会话劫持是截取并继续另一个实体已开始的会话，中间人攻击则是某个实体插入到另外两个实体之间。机密性与完整性威胁：报文的机密性要一路追踪到销毁为止，内容可能在临时缓冲区、交换机、路由器、网关和中间主机以及构建与呈现报文的进程工作区中被暴露，投递错误也是泄露途径；有时连“存在这样一条报文”本身都是敏感的，这就是流量分析。完整性威胁包括伪造报文、噪声、格式失效、畸形分组以及协议失效与实现缺陷。网站自身的漏洞则有网页篡改、缓冲区溢出、点-点-斜线攻击（如用 ../../../../../winnt/system32/autoexec.nt 跳出目录）、应用代码错误和拒绝服务。",
          en: "Impersonation succeeds in five ways: guessing the identity and authentication details of the target; picking them up from a previous communication or from wiretapping; circumventing or disabling the authentication mechanism at the target computer; using a target that will not be authenticated; or using a target whose authentication data are known. Guessing works because of easy-to-guess passwords, default passwords and dead accounts, spoofing is when an attacker falsely carries on one end of a networked interchange, and masquerade is when one host pretends to be another, a common example being URL confusion where xyz.com, xyz.org and xyz.net may be three different organisations and a variation being phishing, where a message with the real logo of Blue Bank entices the victim to click a link; session hijacking is intercepting and carrying on a session begun by another entity, and in a man-in-the-middle attack one entity intrudes between two others. Threats to confidentiality and integrity: to protect the confidentiality of a message we must track it all the way from creation to disposal, because its content may be exposed in temporary buffers, at switches, routers, gateways and intermediate hosts, and in the workspaces of the processes that build and present it, with misdelivery another route of exposure; sometimes not only the message but the fact that a message exists is sensitive, which is traffic flow analysis. Integrity threats include falsification of messages, noise, format failures, malformed packets and protocol failures or implementation flaws. Web sites have their own vulnerabilities: web site defacement, buffer overflows, the dot-dot-slash attack that escapes a directory, as in ../../../../../winnt/system32/autoexec.nt, application code errors and denial of service.",
          ms: "Penyamaran berjaya melalui lima cara: meneka identiti dan butiran pengesahan sasaran; memperolehnya daripada komunikasi sebelumnya atau daripada penyadapan; memintas atau melumpuhkan mekanisme pengesahan pada komputer sasaran; menggunakan sasaran yang tidak akan disahkan; atau menggunakan sasaran yang data pengesahannya diketahui. Tekaan berjaya kerana wujud kata laluan yang mudah diteka, kata laluan lalai dan akaun mati, penipuan identiti berlaku apabila penyerang secara palsu menjalankan satu hujung pertukaran rangkaian, dan penyamaran berlaku apabila satu hos berpura-pura menjadi hos lain, contoh biasa ialah kekeliruan URL apabila xyz.com, xyz.org dan xyz.net mungkin tiga organisasi berbeza dan satu variasinya ialah pancingan data, iaitu mesej dengan logo sebenar Blue Bank memujuk mangsa mengklik pautan; perampasan sesi ialah memintas dan meneruskan sesi yang dimulakan entiti lain, manakala dalam serangan orang tengah satu entiti menyusup antara dua entiti lain. Ancaman terhadap kerahsiaan dan integriti: untuk melindungi kerahsiaan mesej kita mesti menjejakinya dari penciptaan hingga pelupusan kerana kandungannya boleh terdedah dalam penimbal sementara, pada suis, penghala, get laluan dan hos perantaraan, serta dalam ruang kerja proses yang membina dan mempersembahkannya, dengan salah penghantaran menjadi satu lagi laluan pendedahan; kadangkala bukan sahaja mesej malah kewujudan mesej itu sendiri sensitif, dan itulah analisis aliran trafik. Ancaman integriti termasuk pemalsuan mesej, bunyi, kegagalan format, paket cacat serta kegagalan protokol dan kecacatan pelaksanaan. Laman web mempunyai kerentanannya sendiri: pencacatan laman web, limpahan penimbal, serangan titik-titik-garis miring yang terkeluar daripada direktori seperti ../../../../../winnt/system32/autoexec.nt, ralat kod aplikasi dan penafian perkhidmatan."
        },
        {
          zh: "拒绝服务攻击形式多样：连接洪泛与回声-Chargen（Chargen 是产生分组流以测试网络容量的协议）、死亡之 Ping、Smurf（攻击者先选一批不知情的受害者网络，把 ping 分组的源地址伪造成受害者的地址，再以广播方式发出请求）、SYN 洪泛（TCP 用三次握手建立会话，目的端维护一个 SYN_RECV 队列记录已发出 SYNACK 但尚未收到 ACK 的连接，攻击者发出大量 SYN 请求却从不回应 ACK，把队列填满）、Teardrop（发出彼此重叠、无法正确重组的报文分片，如一块声明位置 0 长度 60 字节、另一块位置 30 长度 90 字节、再一块位置 41 长度 173 字节，使操作系统因无法重组而锁死）、流量重定向（路由器向邻居宣称自己到所有地址都有最佳路径，结果所有流量都被导向它而拥塞或被丢弃）以及 DNS 攻击（攻占名称服务器或让它缓存虚假条目即 DNS 缓存污染）与分布式拒绝服务（DDoS）。活动的或移动的代码是被推送到客户端执行的代码的总称，威胁包括：Cookie（可存在内存中的会话 Cookie 或存到磁盘上的持久 Cookie）、脚本（服务器无法区分来自浏览器填写网页的命令与用户手工构造的命令，恶意用户可以监视浏览器与服务器之间的通信来观察改动网页条目会如何影响浏览器发送的内容以及服务器的反应）、活动代码（下载到客户端并可能造成损害的敌意 Java 小程序，以及可下载任意类型对象的 ActiveX 控件）、机器人（bots，黑客语中的 robots，是受远程控制的恶意代码，一群机器人组成僵尸网络 botnet）；此外还有脚本小子（script kiddies），他们下载现成的攻击脚本直接运行，既不需要理解攻击的本质，甚至不需要懂网络。",
          en: "Denial of service takes many forms: connection flooding and echo-chargen, where chargen is a protocol that generates a stream of packets to test network capacity; the ping of death; Smurf, where the attacker chooses a network of unwitting victims, spoofs the source address of the ping packet so that it appears to come from the victim and sends the request in broadcast mode; the SYN flood, where a session is established by a three-way TCP handshake, the destination keeps a SYN_RECV queue for items for which a SYNACK was sent but no ACK received, and the attacker fills that queue by sending many SYN requests and never responding with ACKs; Teardrop, which sends a series of datagrams that cannot fit together properly, such as one at position 0 for 60 bytes, another at position 30 for 90 bytes and another at position 41 for 173 bytes, so that the operating system locks up with partial data units it cannot reassemble; traffic redirection, where a router advertises the best path to every address so that all traffic is directed to it and is flooded or dropped; and DNS attacks that overtake a name server or poison its cache, together with distributed denial of service. Active or mobile code is the general name for code pushed to the client for execution, and its threats include cookies, which may be held in memory as per-session cookies or stored on disk as persistent cookies; scripts, where the server cannot distinguish commands generated from a user completing a web page from a user handcrafting a set of orders, so a malicious user can monitor the communication between browser and server to see how changing a web page entry affects what the browser sends and how the server reacts; active code such as hostile Java applets that can cause harm on the client's system and ActiveX controls through which objects of arbitrary type can be downloaded; and bots, hackerese for robots, pieces of malicious code under remote control whose network is called a botnet. There are also script kiddies, who download ready-made attack scripts and run them without understanding the nature of the attack or even the concept of a network.",
          ms: "Penafian perkhidmatan mengambil banyak bentuk: banjir sambungan dan gema-chargen, iaitu chargen ialah protokol yang menghasilkan aliran paket untuk menguji kapasiti rangkaian; ping maut; Smurf, iaitu penyerang memilih rangkaian mangsa yang tidak menyedari apa-apa, memalsukan alamat sumber paket ping supaya kelihatan datang daripada mangsa lalu menghantar permintaan itu secara siaran; banjir SYN, iaitu sesi dibentuk melalui jabat tangan TCP tiga hala, destinasi menyimpan baris gilir SYN_RECV bagi item yang SYNACK telah dihantar tetapi ACK belum diterima, dan penyerang memenuhkan baris gilir itu dengan menghantar banyak permintaan SYN tanpa pernah membalas dengan ACK; Teardrop yang menghantar siri datagram yang tidak boleh dicantum dengan betul, contohnya satu pada kedudukan 0 sepanjang 60 bait, satu lagi pada kedudukan 30 sepanjang 90 bait dan satu lagi pada kedudukan 41 sepanjang 173 bait, sehingga sistem pengendalian terkunci kerana tidak dapat menyusun semula; pengalihan trafik, iaitu penghala mengiklankan laluan terbaik ke setiap alamat sehingga semua trafik dihalakan kepadanya lalu dibanjiri atau digugurkan; serta serangan DNS yang merampas pelayan nama atau mencemarkan cachenya, berserta penafian perkhidmatan teragih. Kod aktif atau kod mudah alih ialah nama umum bagi kod yang ditolak kepada klien untuk dilaksanakan, dan ancamannya termasuk kuki yang boleh disimpan dalam ingatan sebagai kuki sesi atau di atas cakera sebagai kuki kekal; skrip, iaitu pelayan tidak dapat membezakan arahan yang dijana oleh pengguna yang melengkapkan halaman web daripada arahan yang dibina sendiri oleh pengguna, jadi pengguna berniat jahat boleh memantau komunikasi antara pelayar dan pelayan untuk melihat bagaimana perubahan entri halaman web mempengaruhi apa yang dihantar pelayar dan bagaimana pelayan bertindak balas; kod aktif seperti applet Java bermusuhan yang boleh menyebabkan kerosakan pada sistem klien dan kawalan ActiveX yang membolehkan objek apa-apa jenis dimuat turun; serta bot, istilah hacker bagi robot, iaitu kod berniat jahat di bawah kawalan jauh yang rangkaiannya dipanggil botnet. Terdapat juga budak skrip yang memuat turun skrip serangan sedia ada dan menjalankannya tanpa memahami sifat serangan itu atau bahkan konsep rangkaian."
        },
        {
          zh: "网络安全控制从威胁分析开始，分三步：仔细检查系统的各个部分以了解每部分做什么、如何与其他部分交互；考虑可能对机密性、完整性、可用性造成的损害；假设可能造成这些损害的攻击类型。网络的组成部分包括本地节点经本地通信链路连接到局域网，局域网还有本地数据存储、本地进程与本地设备，并通过网络网关经网络通信链路连接到网络控制资源、网络路由器以及数据库等网络资源。架构层面的控制有两条：分割（segmentation）能减少威胁数量并限制单个漏洞所能造成的损害；冗余（redundancy）让同一功能可以在多个节点上完成，避免把所有鸡蛋放在一个篮子里，在故障转移（failover）模式下服务器定期互相通信以确认对方是否仍在工作，一台失效另一台就接管双方的处理；评估网络架构容错能力的一个办法是找出单点失效（single points of failure）。",
          en: "Network security controls begin with threat analysis in three steps: scrutinise all the parts of a system so that we know what each part does and how it interacts with the others; consider possible damage to confidentiality, integrity and availability; and hypothesise the kinds of attacks that could cause that damage. The parts of a network are local nodes connected by local communications links to a local area network, which also has local data storage, local processes and local devices and is connected through a network gateway by network communications links to network control resources, network routers and network resources such as databases. Two architectural controls stand out: segmentation reduces the number of threats and limits the amount of damage a single vulnerability can allow, and redundancy lets a function be performed on more than one node so that all the eggs are not in one basket; in failover mode the servers communicate periodically, each determining whether the other is still active, and if one fails the other takes over processing for both, while one way to evaluate the architecture's tolerance of failure is to look for single points of failure.",
          ms: "Kawalan keselamatan rangkaian bermula dengan analisis ancaman dalam tiga langkah: teliti semua bahagian sistem supaya kita tahu apa yang setiap bahagian lakukan dan bagaimana ia berinteraksi dengan yang lain; pertimbangkan kemungkinan kerosakan kepada kerahsiaan, integriti dan ketersediaan; serta andaikan jenis serangan yang boleh menyebabkan kerosakan itu. Bahagian rangkaian ialah nod setempat yang bersambung melalui pautan komunikasi setempat ke rangkaian kawasan setempat, yang turut mempunyai storan data setempat, proses setempat dan peranti setempat serta bersambung melalui get laluan rangkaian dan pautan komunikasi rangkaian ke sumber kawalan rangkaian, penghala rangkaian dan sumber rangkaian seperti pangkalan data. Dua kawalan seni bina menonjol: pemetakan mengurangkan bilangan ancaman dan mengehadkan kerosakan yang boleh disebabkan oleh satu kerentanan, manakala lebihan membolehkan sesuatu fungsi dilaksanakan pada lebih daripada satu nod supaya semua telur tidak diletakkan dalam satu bakul; dalam mod pindah gagal, pelayan berkomunikasi secara berkala dan masing-masing menentukan sama ada yang lain masih aktif, dan jika satu gagal yang lain mengambil alih pemprosesan kedua-duanya, sementara satu cara menilai toleransi kegagalan seni bina ialah mencari titik kegagalan tunggal."
        },
        {
          zh: "加密可以按作用范围分为链路加密与端到端加密：链路加密在系统把数据放到物理通信链路之前就加密，中间节点必须解密再加密，因此数据在中间节点是暴露的，用户看不到加密过程，主机为所有用户统一提供加密（通常用硬件实现），要么全部数据加密要么都不加密，每一对主机需要一把密钥，提供的是节点认证；端到端加密则从发送端一直保护到接收端，由发送进程施加、用户必须自己找到算法、可以选择对哪些数据项加密，每一对用户需要一把密钥，提供的是用户认证。其他重要的加密与控制机制：VPN 让通信经过一条加密隧道；公钥基础设施（PKI）让用户能够在大规模、常常是分布式的环境中使用公钥密码，它创建把用户身份与（公钥）密码密钥绑定的证书、从数据库发放证书、对证书签名、确认或否认证书有效、并作废不再允许访问或私钥已泄露的用户的证书，PKI 设立称为证书颁发机构（CA）的实体来执行这些策略，CA 负责管理公钥证书的整个生命周期、用数字签名把用户或系统身份与公钥绑定来签发证书、安排证书的到期日期，并通过发布证书吊销列表在必要时吊销证书；SSH 是一对协议（版本 1 和 2），起初为 Unix 定义，提供到 shell 或操作系统命令解释器的经过认证与加密的路径，它在本地与远程站点之间协商加密算法（如 DES、IDEA、AES）与认证方式（包括公钥与 Kerberos）；SSL 最初由 Netscape 设计用于保护浏览器与服务器之间的通信，现在也称 TLS，使用时客户端请求一个 SSL 会话，服务器用公钥证书回应以便客户端确认服务器真实性，客户端把对称会话密钥的一部分用服务器公钥加密后送回，双方各自算出会话密钥然后改用共享的会话密钥加密通信；IPSec 是 IETF 在 IPv6 协议族中采纳的 IP 安全协议套件，其基础是安全关联（security association），包含加密算法与模式、加密密钥、加密参数（如初始向量）、认证协议与密钥、关联的生命周期、对端地址以及受保护数据的敏感级别，其基本数据结构是 AH（认证头）与 ESP（封装安全载荷）。此外还有给代码附加数字签名的签名代码、加密电子邮件（内容完整性、纠错码、密码学校验和即消息摘要）以及 Kerberos 强认证——它基于一个中央服务器向请求的应用发放称为票据（ticket）的已认证令牌，票据是不可伪造、不可重放的已认证对象，是一个加密的数据结构，指明用户及其被允许获得的服务，还包含时间值和控制信息。防火墙是过滤受保护的“内部”网络与可信度较低的“外部”网络之间所有流量的设备，目的是把“坏东西”挡在受保护环境之外；类型包括分组过滤网关（屏蔽路由器，最简单、在某些场合最有效）、状态检查防火墙（在输入流中维护跨分组的状态信息）、应用代理（又称堡垒主机，模拟应用的（正当）效果，使应用只收到要求它正当行事的请求，它是一个“双头”设备：对内部看起来像外部连接，对外部又像内部人那样应答）、守卫（更复杂的防火墙，按自己掌握的知识决定代表用户执行哪些服务，其控制程度只受可计算性的限制，与代理防火墙的界限有时很模糊）以及个人防火墙（运行在工作站上阻挡不想要的流量）。常见配置有带屏蔽路由器的防火墙、位于独立局域网上的防火墙以及代理加屏蔽路由器的防火墙。",
          en: "Encryption can be applied at different scopes: link encryption encrypts data just before the system places them on the physical communications link, so data are exposed in intermediate nodes, the process is invisible to the user, the host maintains encryption with one facility for all users typically in hardware, all or no data are encrypted, one key per host pair is required and node authentication is provided; end-to-end encryption provides security from one end of a transmission to the other, is applied by the sending process, requires the user to find an algorithm and to select what to encrypt, needs one key per user pair and provides user authentication. Other important encryption and control mechanisms: a VPN carries the communication through an encrypted tunnel; a public key infrastructure (PKI) enables users to implement public key cryptography in a large and frequently distributed setting by creating certificates that associate a user's identity with a public key, giving out certificates from its database, signing them, confirming or denying that a certificate is valid and invalidating certificates for users who are no longer allowed access or whose private key has been exposed, and it sets up certificate authorities to manage public key certificates for their whole life cycle, issue certificates by binding an identity to a public key with a digital signature, schedule expiration dates and revoke certificates when necessary by publishing certificate revocation lists; SSH is a pair of protocols, versions 1 and 2, originally defined for Unix, that provides an authenticated and encrypted path to the shell or operating system command interpreter and negotiates the encryption algorithm, for example DES, IDEA or AES, and the authentication method, including public key and Kerberos; SSL, originally designed by Netscape to protect communication between a web browser and server and now also known as TLS, has the client request an SSL session, the server respond with its public key certificate so the client can determine the server's authenticity, the client return part of a symmetric session key encrypted under the server's public key, and both sides compute the session key and switch to encrypted communication; IPSec is the IP Security Protocol Suite adopted by the IETF as part of the IPv6 suite, based on a security association that includes the encryption algorithm and mode, the encryption key, encryption parameters such as the initialization vector, the authentication protocol and key, the lifespan of the association, the address of the opposite end and the sensitivity level of the protected data, with the AH authentication header and the ESP encapsulated security payload as its fundamental data structures. There are also signed code, where a trustworthy third party appends a digital signature, encrypted e-mail with content integrity, error correcting codes and a cryptographic checksum or message digest, and Kerberos strong authentication, in which a central server provides authenticated tokens called tickets - unforgeable, nonreplayable authenticated objects that are encrypted data structures naming a user and a service that user is allowed to obtain, together with a time value and control information. A firewall is a device that filters all traffic between a protected or inside network and a less trustworthy or outside network, its purpose being to keep bad things outside a protected environment; its types are packet filtering gateways or screening routers, the simplest and in some situations the most effective; stateful inspection firewalls, which maintain state information from one packet to another in the input stream; application proxies, also called bastion hosts, which simulate the proper effects of an application so that it receives only requests to act properly and which are two-headed devices that look to the inside as if they are the outside connection while responding to the outside just as an insider would; guards, more sophisticated firewalls that interpret protocol data units and decide what services to perform on the user's behalf according to their available knowledge, where the degree of control is limited only by what is computable and the distinction from proxy firewalls is sometimes fuzzy; and personal firewalls, application programs that run on a workstation to block unwanted traffic. Example configurations include a firewall with a screening router, a firewall on a separate LAN, and a firewall with a proxy and a screening router.",
          ms: "Penyulitan boleh digunakan pada skop yang berbeza: penyulitan pautan menyulitkan data sebaik sebelum sistem meletakkannya pada pautan komunikasi fizikal, jadi data terdedah pada nod perantaraan, prosesnya tidak kelihatan kepada pengguna, hos menyelenggara penyulitan dengan satu kemudahan untuk semua pengguna biasanya dalam perkakasan, semua atau tiada data disulitkan, satu kunci diperlukan bagi setiap pasangan hos dan pengesahan nod disediakan; penyulitan hujung ke hujung memberikan keselamatan dari satu hujung penghantaran ke hujung yang lain, dilaksanakan oleh proses penghantar, memerlukan pengguna mencari algoritma dan memilih apa yang hendak disulitkan, memerlukan satu kunci bagi setiap pasangan pengguna dan menyediakan pengesahan pengguna. Mekanisme penyulitan dan kawalan penting yang lain: VPN membawa komunikasi melalui terowong bersulit; prasarana kunci awam (PKI) membolehkan pengguna melaksanakan kriptografi kunci awam dalam tetapan besar dan sering teragih dengan mencipta sijil yang mengaitkan identiti pengguna dengan kunci awam, mengeluarkan sijil daripada pangkalan datanya, menandatangani sijil, mengesahkan atau menafikan kesahihan sijil dan membatalkan sijil bagi pengguna yang tidak lagi dibenarkan mengakses atau yang kunci peribadinya telah terdedah, dan ia menubuhkan pihak berkuasa sijil untuk mengurus sijil kunci awam sepanjang kitaran hayatnya, menerbitkan sijil dengan mengikat identiti kepada kunci awam menggunakan tandatangan digital, menjadualkan tarikh luput dan membatalkan sijil apabila perlu dengan menerbitkan senarai pembatalan sijil; SSH ialah sepasang protokol, versi 1 dan 2, yang pada asalnya ditakrifkan untuk Unix dan menyediakan laluan yang disahkan serta bersulit ke shell atau jurubahasa arahan sistem pengendalian, dan ia merundingkan algoritma penyulitan seperti DES, IDEA atau AES serta kaedah pengesahan termasuk kunci awam dan Kerberos; SSL yang pada asalnya direka Netscape untuk melindungi komunikasi antara pelayar web dengan pelayan dan kini juga dikenali sebagai TLS, membolehkan klien meminta sesi SSL, pelayan membalas dengan sijil kunci awamnya supaya klien dapat menentukan kesahihan pelayan, klien mengembalikan sebahagian kunci sesi simetri yang disulitkan dengan kunci awam pelayan, dan kedua-dua pihak mengira kunci sesi lalu bertukar kepada komunikasi bersulit; IPSec ialah Suite Protokol Keselamatan IP yang diterima IETF sebagai bahagian suite IPv6, berasaskan persatuan keselamatan yang merangkumi algoritma dan mod penyulitan, kunci penyulitan, parameter penyulitan seperti vektor permulaan, protokol dan kunci pengesahan, jangka hayat persatuan, alamat hujung bertentangan serta aras sensitiviti data yang dilindungi, dengan pengepala pengesahan AH dan muatan keselamatan terbungkus ESP sebagai struktur data asasnya. Terdapat juga kod bertandatangan yang ditambah tandatangan digital oleh pihak ketiga yang boleh dipercayai, e-mel bersulit dengan integriti kandungan, kod pembetulan ralat dan jumlah semak kriptografi atau ringkasan mesej, serta pengesahan kuat Kerberos, iaitu pelayan pusat memberikan token yang disahkan dipanggil tiket - objek yang tidak boleh dipalsukan dan tidak boleh dimainkan semula, iaitu struktur data bersulit yang menamakan pengguna dan perkhidmatan yang dibenarkan diperolehnya, berserta nilai masa dan maklumat kawalan. Tembok api ialah peranti yang menapis semua trafik antara rangkaian dalam yang dilindungi dengan rangkaian luar yang kurang dipercayai, dan tujuannya ialah mengekalkan perkara buruk di luar persekitaran yang dilindungi; jenisnya termasuk get laluan penapisan paket atau penghala penapisan yang paling mudah dan dalam sesetengah keadaan paling berkesan; tembok api pemeriksaan berkeadaan yang menyelenggara maklumat keadaan antara satu paket dengan paket berikutnya dalam aliran input; proksi aplikasi yang juga dipanggil hos bastion dan mensimulasikan kesan sebenar sesuatu aplikasi supaya aplikasi hanya menerima permintaan untuk bertindak dengan wajar, iaitu peranti berkepala dua yang kelihatan kepada bahagian dalam seolah-olah sambungan luar manakala kepada bahagian luar bertindak balas seperti orang dalam; pengawal, iaitu tembok api yang lebih canggih yang mentafsir unit data protokol dan memutuskan perkhidmatan yang hendak dilaksanakan bagi pihak pengguna mengikut pengetahuan yang ada, dengan tahap kawalan terhad hanya oleh apa yang boleh dikira dan perbezaannya dengan tembok api proksi kadangkala kabur; serta tembok api peribadi, iaitu program aplikasi yang berjalan pada stesen kerja untuk menyekat trafik yang tidak dikehendaki. Contoh konfigurasi termasuk tembok api dengan penghala penapisan, tembok api pada LAN berasingan, dan tembok api dengan proksi serta penghala penapisan."
        },
        {
          zh: "入侵检测系统（IDS）通常是另一台独立的计算机，监视活动以识别恶意或可疑事件，其功能包括监视用户与系统活动、审计系统配置中的漏洞与错误配置、评估关键系统与数据文件的完整性、识别系统活动中的已知攻击模式、通过统计分析识别异常活动、管理审计轨迹并突出用户违反政策或偏离正常活动的行为、纠正系统配置错误，以及安装和运行陷阱以记录入侵者的信息。IDS 分两大类：基于签名的 IDS 做简单的模式匹配，报告与已知攻击类型相符的情况，但它无法检测尚未有签名的全新攻击，攻击者也会修改攻击以避开已知签名；启发式（又称基于异常）的 IDS 建立可接受行为的模型并标记偏离该模型的例外，其推理引擎持续分析系统，当系统的“脏度”超过阈值就发出警报，分基于状态（观察系统整体状态或配置的变化）与基于模型（把当前活动映射到不可接受活动的模型上）两种。按部署分，基于网络的 IDS 是接在网络上监视整个网络流量的独立设备，基于主机的 IDS 运行在单台工作站或主机上保护该主机。多数 IDS 运行在隐身模式下，有两个网络接口：一个接被监视的网络或网段，另一个用于发出警报和处理管理事务。IDS 的目标包括：按分组头部与分组内容过滤、维护连接状态、使用复杂的多分组签名、以最少数量的签名取得最大效果、实时在线过滤、隐藏自身存在、使用最佳滑动时间窗来匹配签名。发现匹配时 IDS 发出警报，响应分三大类：监视并收集数据（也许增加收集的数据量）、保护（采取行动减少暴露面）以及呼叫人工处理。IDS 也可能出错：对并非真正攻击的情况发出警报叫误报（false positive，统计学上的第一类错误），对真正的攻击不发出警报叫漏报（false negative，第二类错误）；误报太多会让管理员不信任警报从而忽略真正的警报，漏报则意味着真正的攻击被放过，误报与漏报的程度代表系统的灵敏度。此外，蜜罐是故意设置来诱敌的系统，目的有三：观察攻击者的行为以了解新攻击、引诱攻击者以便收集足够信息识别并阻止他，以及提供一个有吸引力但具转移性的游乐场，希望攻击者放过真正的系统。安全电子邮件要防的威胁包括报文被截取（机密性）、报文被截取导致投递被阻断、报文被截取后重放、报文内容被修改、报文来源被修改、外部人伪造报文内容、外部人伪造报文来源、收件人伪造报文内容、收件人伪造报文来源以及拒绝发送报文；对应的需求是报文机密性、报文完整性、发送者真实性与不可否认。总结起来，网络安全分析与其他方面的安全分析一样，要回答五个问题：资产是什么、威胁是什么、威胁主体是谁、控制手段是什么，以及残余的、未被控制的风险是什么。",
          en: "An intrusion detection system (IDS) is typically another separate computer that monitors activity to identify malicious or suspicious events, and its functions include monitoring users and system activity; auditing system configuration for vulnerabilities and misconfigurations; assessing the integrity of critical system and data files; recognising known attack patterns in system activity; identifying abnormal activity through statistical analysis; managing audit trails and highlighting user violation of policy or normal activity; correcting system configuration errors; and installing and operating traps to record information about intruders. There are two general types: signature-based IDSs perform simple pattern matching and report situations matching a pattern of a known attack, but they cannot detect a new attack for which no signature is installed and attackers modify attacks to avoid known signatures; heuristic, also called anomaly-based, IDSs build a model of acceptable behaviour and flag exceptions, with an inference engine performing continuous analysis and raising an alert when the system's dirtiness exceeds a threshold, either state-based, seeing the system go through changes of overall state or configuration, or model-based, mapping current activity onto a model of unacceptable activity. A network-based IDS is a stand-alone device attached to the network to monitor traffic throughout it, while a host-based IDS runs on a single workstation, client or host to protect that one host. Most IDSs run in stealth mode with two network interfaces, one for the network or segment being monitored and the other to generate alerts and handle administrative needs. The goals for intrusion detection systems are to filter on packet headers and on packet content, maintain connection state, use complex multipacket signatures, use a minimal number of signatures with maximum effect, filter in real time and online, hide their presence, and use an optimal sliding time window to match signatures. When a match is found the IDS raises an alarm, and responses fall into three major categories: monitor and collect data, perhaps increasing the amount collected; protect, acting to reduce exposure; and call a human. An IDS may also stumble by raising an alarm for something that is not really an attack, a false positive or type I error, or by not raising an alarm for a real attack, a false negative or type II error; too many false positives make administrators less confident and may cause a real alarm to be ignored, while false negatives mean real attacks pass without action, and the degree of both represents the sensitivity of the system. A honeypot, finally, is a system put up deliberately to watch what attackers do and learn about new attacks, to lure an attacker to a place where enough can be learned to identify and stop him, and to provide an attractive but diversionary playground in the hope that the attacker leaves the real system alone. The threats to secure e-mail are message interception for confidentiality, blocked delivery, interception followed by replay, message content modification, message origin modification, content forgery by an outsider, origin forgery by an outsider, content forgery by the recipient, origin forgery by the recipient and denial of message transmission; the corresponding requirements are message confidentiality, message integrity, sender authenticity and non-repudiation. In summary, the analysis of network security resembles the analysis of other aspects of security: we ask what the assets are, what the threats are, who the threat agents are, what the controls are, and what the residual, uncontrolled risk is.",
          ms: "Sistem pengesanan pencerobohan (IDS) biasanya komputer lain yang berasingan dan memantau aktiviti untuk mengenal pasti peristiwa berniat jahat atau mencurigakan, dan fungsinya termasuk memantau aktiviti pengguna serta sistem; mengaudit konfigurasi sistem untuk kerentanan dan salah konfigurasi; menilai integriti fail sistem dan data yang kritikal; mengenal pasti corak serangan yang diketahui dalam aktiviti sistem; mengenal pasti aktiviti abnormal melalui analisis statistik; mengurus jejak audit dan menekankan pelanggaran dasar atau penyimpangan daripada aktiviti biasa; membetulkan ralat konfigurasi sistem; serta memasang dan mengendalikan perangkap untuk merekod maklumat tentang penceroboh. Terdapat dua jenis umum: IDS berasaskan tandatangan melakukan pemadanan pola mudah dan melaporkan keadaan yang sepadan dengan pola serangan yang diketahui, tetapi ia tidak dapat mengesan serangan baharu yang belum ada tandatangannya dan penyerang mengubah serangan untuk mengelak tandatangan yang diketahui; IDS heuristik yang juga dipanggil berasaskan anomali membina model tingkah laku yang boleh diterima dan menandakan pengecualian, dengan enjin inferens membuat analisis berterusan dan menimbulkan amaran apabila tahap kekotoran sistem melebihi ambang, sama ada berasaskan keadaan yang melihat sistem melalui perubahan keadaan atau konfigurasi keseluruhan, atau berasaskan model yang memetakan aktiviti semasa kepada model aktiviti yang tidak boleh diterima. IDS berasaskan rangkaian ialah peranti berdiri sendiri yang dipasang pada rangkaian untuk memantau trafik seluruhnya, manakala IDS berasaskan hos berjalan pada satu stesen kerja, klien atau hos untuk melindungi hos itu sahaja. Kebanyakan IDS berjalan dalam mod senyap dengan dua antara muka rangkaian, satu untuk rangkaian atau segmen yang dipantau dan satu lagi untuk menjana amaran serta keperluan pentadbiran. Matlamat sistem pengesanan pencerobohan ialah menapis berdasarkan pengepala paket dan kandungan paket, mengekalkan keadaan sambungan, menggunakan tandatangan berbilang paket yang kompleks, menggunakan bilangan tandatangan minimum dengan kesan maksimum, menapis secara masa nyata dan dalam talian, menyembunyikan kehadirannya, serta menggunakan tetingkap masa gelongsor yang optimum untuk memadankan tandatangan. Apabila padanan ditemui IDS menimbulkan amaran, dan respons terbahagi kepada tiga kategori utama: memantau dan mengumpul data, mungkin menambah jumlah yang dikumpul; melindungi dengan tindakan mengurangkan pendedahan; dan memanggil manusia. IDS juga boleh tersasar dengan menimbulkan amaran bagi sesuatu yang bukan serangan sebenar, iaitu positif palsu atau ralat jenis I, atau dengan tidak menimbulkan amaran bagi serangan sebenar, iaitu negatif palsu atau ralat jenis II; terlalu banyak positif palsu menjadikan pentadbir kurang yakin sehingga amaran sebenar diabaikan, manakala negatif palsu bermakna serangan sebenar berlalu tanpa tindakan, dan kadar kedua-duanya mewakili sensitiviti sistem. Akhir sekali, periuk madu ialah sistem yang sengaja dipasang untuk memerhati apa yang penyerang lakukan dan mempelajari serangan baharu, memancing penyerang ke tempat yang membolehkan cukup maklumat dikumpul untuk mengenal pasti dan menghentikannya, serta menyediakan taman permainan yang menarik tetapi mengalihkan perhatian dengan harapan penyerang membiarkan sistem sebenar. Ancaman terhadap e-mel selamat ialah pemintasan mesej bagi kerahsiaan, penghantaran yang disekat, pemintasan diikuti main semula, pengubahsuaian kandungan mesej, pengubahsuaian asal mesej, pemalsuan kandungan oleh orang luar, pemalsuan asal oleh orang luar, pemalsuan kandungan oleh penerima, pemalsuan asal oleh penerima dan penafian penghantaran mesej; keperluan yang sepadan ialah kerahsiaan mesej, integriti mesej, kesahihan pengirim dan penafian tak boleh disangkal. Kesimpulannya, analisis keselamatan rangkaian menyerupai analisis aspek keselamatan yang lain: kita bertanya apakah asetnya, apakah ancamannya, siapakah ejen ancaman, apakah kawalannya, dan apakah risiko baki yang tidak terkawal."
        }
      ],
      terms: [
        {
          en: "Packet",
          zh: "分组（包）",
          ms: "Paket",
          def: {
            zh: "网络层中由目的地址、源地址和数据构成的结构，路由器据此在网络之间转发消息。",
            en: "A network layer structure made up of a destination address, a source address and data, which a router uses to forward messages between networks.",
            ms: "Struktur lapisan rangkaian yang terdiri daripada alamat destinasi, alamat sumber dan data, yang digunakan penghala untuk memajukan mesej antara rangkaian."
          }
        },
        {
          en: "Frame",
          zh: "帧",
          ms: "Bingkai",
          def: {
            zh: "数据链路层中由目的 MAC 地址、源 MAC 地址和数据构成的结构，每块网卡都有唯一的 MAC 地址。",
            en: "A data link layer structure made up of a destination MAC address, a source MAC address and data, where every network interface card has a unique MAC address.",
            ms: "Struktur lapisan pautan data yang terdiri daripada alamat MAC destinasi, alamat MAC sumber dan data, dengan setiap kad antara muka rangkaian mempunyai alamat MAC yang unik."
          }
        },
        {
          en: "Port Scan",
          zh: "端口扫描",
          ms: "Imbasan Port",
          def: {
            zh: "对某个 IP 地址报告哪些端口有响应、存在哪些已知漏洞的程序；它告诉攻击者目标上运行哪些服务、装了什么操作系统以及有哪些应用和版本。",
            en: "A program that for a particular IP address reports which ports respond and which known vulnerabilities seem present, telling the attacker which services are running, what operating system is installed and what applications and versions are present.",
            ms: "Program yang bagi sesuatu alamat IP melaporkan port mana yang bertindak balas dan kerentanan yang diketahui wujud, memberitahu penyerang perkhidmatan yang berjalan, sistem pengendalian yang dipasang serta aplikasi dan versinya."
          }
        },
        {
          en: "Social Engineering",
          zh: "社交工程",
          ms: "Kejuruteraan Sosial",
          def: {
            zh: "利用社交技巧与个人互动诱使他人泄露与安全有关的信息，甚至做出允许攻击的行为；受害者因为帮了对方往往不会上报。",
            en: "Using social skills and personal interaction to get someone to reveal security-relevant information or even do something that permits an attack; the victim, having helped, often does not report it.",
            ms: "Menggunakan kemahiran sosial dan interaksi peribadi untuk membuat seseorang mendedahkan maklumat berkaitan keselamatan atau melakukan sesuatu yang membolehkan serangan; mangsa yang telah membantu sering tidak melaporkannya."
          }
        },
        {
          en: "Wiretapping",
          zh: "窃听（线路窃听）",
          ms: "Penyadapan Wayar",
          def: {
            zh: "通过某种努力截取通信；被动窃听只是监听，主动窃听则向通信中注入内容。",
            en: "Intercepting communications through some effort; passive wiretapping is just listening while active wiretapping injects something into the communication.",
            ms: "Memintas komunikasi melalui sesuatu usaha; penyadapan pasif hanya mendengar manakala penyadapan aktif menyuntik sesuatu ke dalam komunikasi."
          }
        },
        {
          en: "Spoofing",
          zh: "欺骗（身份伪造）",
          ms: "Penipuan Identiti",
          def: {
            zh: "攻击者虚假地充当网络交互的一端，例如伪造源地址使分组看起来来自受害者。",
            en: "An attacker falsely carries on one end of a networked interchange, for example spoofing the source address so that packets appear to come from the victim.",
            ms: "Penyerang secara palsu menjalankan satu hujung pertukaran rangkaian, contohnya memalsukan alamat sumber supaya paket kelihatan datang daripada mangsa."
          }
        },
        {
          en: "Masquerade",
          zh: "伪装",
          ms: "Penyamaran",
          def: {
            zh: "一台主机假装成另一台主机，常见形式是域名混淆（xyz.com 与 xyz.org 可能是不同组织）与钓鱼攻击。",
            en: "One host pretending to be another, a common form being URL confusion where xyz.com and xyz.org may be different organisations, and phishing.",
            ms: "Satu hos berpura-pura menjadi hos lain, dengan bentuk biasa ialah kekeliruan URL apabila xyz.com dan xyz.org mungkin organisasi berbeza, serta pancingan data."
          }
        },
        {
          en: "Session Hijacking",
          zh: "会话劫持",
          ms: "Perampasan Sesi",
          def: {
            zh: "截取并继续另一个实体已经开始的会话。",
            en: "Intercepting and carrying on a session begun by another entity.",
            ms: "Memintas dan meneruskan sesi yang telah dimulakan oleh entiti lain."
          }
        },
        {
          en: "Man-in-the-Middle Attack",
          zh: "中间人攻击",
          ms: "Serangan Orang Tengah",
          def: {
            zh: "一个实体插入到另外两个正在通信的实体之间，从而截取甚至篡改双方的通信。",
            en: "An attack in which one entity intrudes between two others that are communicating, intercepting or even altering their traffic.",
            ms: "Serangan apabila satu entiti menyusup antara dua entiti lain yang berkomunikasi, memintas atau bahkan mengubah trafik mereka."
          }
        },
        {
          en: "Denial of Service (DoS)",
          zh: "拒绝服务",
          ms: "Penafian Perkhidmatan",
          def: {
            zh: "使合法用户无法使用服务或资源的攻击，形式包括连接洪泛、Chargen、死亡之 Ping、Smurf、SYN 洪泛、Teardrop、流量重定向与 DNS 缓存污染。",
            en: "An attack that prevents legitimate users from using a service or resource, in forms such as connection flooding, chargen, ping of death, Smurf, SYN flood, Teardrop, traffic redirection and DNS cache poisoning.",
            ms: "Serangan yang menghalang pengguna sah daripada menggunakan perkhidmatan atau sumber, dalam bentuk seperti banjir sambungan, chargen, ping maut, Smurf, banjir SYN, Teardrop, pengalihan trafik dan pencemaran cache DNS."
          }
        },
        {
          en: "SYN Flood",
          zh: "SYN 洪泛",
          ms: "Banjir SYN",
          def: {
            zh: "利用 TCP 三次握手：目的端用 SYN_RECV 队列记录已发 SYNACK 但未收到 ACK 的连接，攻击者发送大量 SYN 却从不回应 ACK，从而填满队列。",
            en: "An attack on the three-way TCP handshake in which the destination keeps a SYN_RECV queue for items that received a SYNACK but no ACK, and the attacker fills it by sending many SYNs and never answering with ACKs.",
            ms: "Serangan ke atas jabat tangan TCP tiga hala apabila destinasi menyimpan baris gilir SYN_RECV bagi item yang menerima SYNACK tetapi tiada ACK, dan penyerang memenuhinya dengan menghantar banyak SYN tanpa membalas dengan ACK."
          }
        },
        {
          en: "Firewall",
          zh: "防火墙",
          ms: "Tembok Api",
          def: {
            zh: "过滤受保护的内部网络与可信度较低的外部网络之间所有流量的设备，类型包括分组过滤网关、状态检查防火墙、应用代理、守卫与个人防火墙。",
            en: "A device that filters all traffic between a protected inside network and a less trustworthy outside network, in types such as packet filtering gateways, stateful inspection firewalls, application proxies, guards and personal firewalls.",
            ms: "Peranti yang menapis semua trafik antara rangkaian dalam yang dilindungi dengan rangkaian luar yang kurang dipercayai, dalam jenis seperti get laluan penapisan paket, tembok api pemeriksaan berkeadaan, proksi aplikasi, pengawal dan tembok api peribadi."
          }
        },
        {
          en: "Intrusion Detection System (IDS)",
          zh: "入侵检测系统",
          ms: "Sistem Pengesanan Pencerobohan (IDS)",
          def: {
            zh: "监视活动以识别恶意或可疑事件的设备，通常是一台单独的计算机；分基于签名与基于异常（启发式）两类，部署上分基于网络与基于主机。",
            en: "A device, typically another separate computer, that monitors activity to identify malicious or suspicious events; it may be signature-based or anomaly-based, and network-based or host-based.",
            ms: "Peranti, biasanya komputer lain yang berasingan, yang memantau aktiviti untuk mengenal pasti peristiwa berniat jahat atau mencurigakan; ia sama ada berasaskan tandatangan atau anomali, dan berasaskan rangkaian atau hos."
          }
        },
        {
          en: "Honeypot",
          zh: "蜜罐",
          ms: "Periuk Madu",
          def: {
            zh: "故意设置来观察攻击者行为、了解新攻击、引诱并识别攻击者，或把攻击者从真正的系统上引开的诱饵系统。",
            en: "A system put up deliberately to watch what attackers do and learn about new attacks, to lure and identify an attacker, or to divert the attacker away from the real system.",
            ms: "Sistem yang sengaja dipasang untuk memerhati tingkah laku penyerang dan mempelajari serangan baharu, memancing serta mengenal pasti penyerang, atau mengalihkan penyerang daripada sistem sebenar."
          }
        },
        {
          en: "Public Key Infrastructure (PKI)",
          zh: "公钥基础设施",
          ms: "Prasarana Kunci Awam (PKI)",
          def: {
            zh: "让用户在大规模分布式环境中使用公钥密码的体系，通过证书把用户身份与公钥绑定，由证书颁发机构签发、确认、安排到期并吊销证书。",
            en: "A process that enables users to implement public key cryptography in a large and frequently distributed setting, binding a user's identity to a public key in certificates that certificate authorities issue, confirm, schedule for expiration and revoke.",
            ms: "Proses yang membolehkan pengguna melaksanakan kriptografi kunci awam dalam tetapan besar dan teragih, mengikat identiti pengguna dengan kunci awam dalam sijil yang diterbitkan, disahkan, dijadualkan luput dan dibatalkan oleh pihak berkuasa sijil."
          }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: {
            zh: "OSI 七层模型与 TCP/IP 四层模型对照",
            en: "The Seven-Layer OSI Model Compared with the Four-Layer TCP/IP Model",
            ms: "Perbandingan Model OSI Tujuh Lapisan dengan Model TCP/IP Empat Lapisan"
          },
          cols: [
            {
              head: {
                zh: "ISO OSI 参考模型（七层）",
                en: "ISO OSI Reference Model (seven layers)",
                ms: "Model Rujukan ISO OSI (tujuh lapisan)"
              },
              layers: [
                {
                  label: {
                    zh: "应用层",
                    en: "Application",
                    ms: "Aplikasi"
                  },
                  note: {
                    zh: "用户级数据",
                    en: "User-level data",
                    ms: "Data aras pengguna"
                  }
                },
                {
                  label: {
                    zh: "表示层",
                    en: "Presentation",
                    ms: "Persembahan"
                  },
                  note: {
                    zh: "标准化数据表示、分块、文本压缩",
                    en: "Standardised data appearance, blocking, text compression",
                    ms: "Rupa data piawai, pemblokkan, pemampatan teks"
                  }
                },
                {
                  label: {
                    zh: "会话层",
                    en: "Session",
                    ms: "Sesi"
                  },
                  note: {
                    zh: "会话或逻辑连接、消息排序与恢复",
                    en: "Sessions or logical connections, message sequencing and recovery",
                    ms: "Sesi atau sambungan logik, urutan mesej dan pemulihan"
                  }
                },
                {
                  label: {
                    zh: "传输层",
                    en: "Transport",
                    ms: "Pengangkutan"
                  },
                  note: {
                    zh: "流控、端到端检错纠错、优先服务",
                    en: "Flow control, end-to-end error detection and correction, priority service",
                    ms: "Kawalan aliran, pengesanan dan pembetulan ralat hujung ke hujung, perkhidmatan keutamaan"
                  }
                },
                {
                  label: {
                    zh: "网络层",
                    en: "Network",
                    ms: "Rangkaian"
                  },
                  note: {
                    zh: "路由，把消息切成统一大小的分组",
                    en: "Routing, blocking messages into uniformly sized packets",
                    ms: "Penghalaan, memecahkan mesej kepada paket bersaiz seragam"
                  }
                },
                {
                  label: {
                    zh: "数据链路层",
                    en: "Data Link",
                    ms: "Pautan Data"
                  },
                  note: {
                    zh: "在物理介质上可靠交付、错误恢复、帧",
                    en: "Reliable delivery over the medium, error recovery, frames",
                    ms: "Penghantaran boleh dipercayai melalui medium, pemulihan ralat, bingkai"
                  }
                },
                {
                  label: {
                    zh: "物理层",
                    en: "Physical",
                    ms: "Fizikal"
                  },
                  note: {
                    zh: "在物理介质上逐位传输",
                    en: "Individual bit transmission across the physical medium",
                    ms: "Penghantaran bit individu merentas medium fizikal"
                  }
                }
              ]
            },
            {
              head: {
                zh: "TCP/IP（四层，按协议定义）",
                en: "TCP/IP (four layers, defined by protocols)",
                ms: "TCP/IP (empat lapisan, ditakrifkan oleh protokol)"
              },
              layers: [
                {
                  label: {
                    zh: "应用层",
                    en: "Application",
                    ms: "Aplikasi"
                  },
                  note: {
                    zh: "SMTP、HTTP、FTP、Telnet；UDP 侧的 SNMP、Syslog、Time",
                    en: "SMTP, HTTP, FTP, Telnet; on the UDP side SNMP, Syslog, Time",
                    ms: "SMTP, HTTP, FTP, Telnet; pada sisi UDP ialah SNMP, Syslog, Time"
                  }
                },
                {
                  label: {
                    zh: "主机到主机传输层",
                    en: "Host-to-Host Transport",
                    ms: "Pengangkutan Hos ke Hos"
                  },
                  note: {
                    zh: "TCP 负责排序、可靠性与纠错；UDP 更小更快但不检错",
                    en: "TCP handles sequencing, reliability and error correction; UDP is smaller and faster but does not check errors",
                    ms: "TCP mengendalikan urutan, kebolehpercayaan dan pembetulan ralat; UDP lebih kecil dan pantas tetapi tidak menyemak ralat"
                  }
                },
                {
                  label: {
                    zh: "互联网层",
                    en: "Internet",
                    ms: "Internet"
                  },
                  note: {
                    zh: "把分组转换成数据报，负责流控与路由",
                    en: "Converts packets to datagrams and handles flow control and routing",
                    ms: "Menukar paket kepada datagram serta mengendalikan kawalan aliran dan penghalaan"
                  }
                },
                {
                  label: {
                    zh: "物理层",
                    en: "Physical",
                    ms: "Fizikal"
                  },
                  note: {
                    zh: "把数据报作为一个个比特发送",
                    en: "Transmits datagrams as individual bits",
                    ms: "Menghantar datagram sebagai bit individu"
                  }
                }
              ]
            }
          ],
          caption: {
            zh: "讲义指出 OSI 模型只是概念模型，完整实现七层对每秒兆比特级的通信来说开销太大、会把速度拖慢到不可接受，所以实际使用按协议定义的 TCP/IP 四层。",
            en: "The lecture notes that the OSI model is conceptual, since implementing all seven layers carries too much overhead for megabit-per-second communications and slows things to unacceptable levels, which is why the protocol-defined four-layer TCP/IP is used in practice.",
            ms: "Kuliah menyatakan model OSI hanyalah konseptual kerana melaksanakan ketujuh-tujuh lapisan membawa lebihan yang terlalu besar bagi komunikasi megabit sesaat dan melambatkannya ke tahap tidak boleh diterima, sebab itulah TCP/IP empat lapisan yang ditakrifkan oleh protokol digunakan dalam praktik."
          }
        },
        {
          type: "matrix",
          title: {
            zh: "主要拒绝服务攻击的机制与对策要点",
            en: "Mechanisms and Countermeasures of Major Denial of Service Attacks",
            ms: "Mekanisme dan Langkah Kawalan Serangan Penafian Perkhidmatan Utama"
          },
          cols: [
            {
              zh: "机制",
              en: "Mechanism",
              ms: "Mekanisme"
            },
            {
              zh: "对策要点",
              en: "Key Countermeasure",
              ms: "Langkah Kawalan Utama"
            }
          ],
          rows: [
            {
              head: {
                zh: "Smurf",
                en: "Smurf",
                ms: "Smurf"
              },
              cells: [
                {
                  zh: "伪造成受害者地址的 ping 以广播方式发给一批不知情的网络",
                  en: "A ping with the victim's spoofed source address is sent in broadcast mode to unwitting networks",
                  ms: "Ping dengan alamat sumber mangsa yang dipalsukan dihantar secara siaran kepada rangkaian yang tidak menyedari"
                },
                {
                  zh: "在边界路由器禁止定向广播，并做入口过滤防止源地址伪造",
                  en: "Block directed broadcast at border routers and filter ingress traffic to stop source spoofing",
                  ms: "Sekat siaran berarah pada penghala sempadan dan tapis trafik masuk untuk menghalang pemalsuan alamat sumber"
                }
              ]
            },
            {
              head: {
                zh: "SYN 洪泛",
                en: "SYN Flood",
                ms: "Banjir SYN"
              },
              cells: [
                {
                  zh: "发大量 SYN 却从不回应 ACK，填满目标的 SYN_RECV 队列",
                  en: "Send many SYNs and never reply with ACKs, filling the victim's SYN_RECV queue",
                  ms: "Menghantar banyak SYN tanpa membalas ACK, memenuhkan baris gilir SYN_RECV mangsa"
                },
                {
                  zh: "缩短 SYN_RECV 超时、增大队列、使用 SYN cookie 或代理",
                  en: "Shorten the SYN_RECV timeout, enlarge the queue, use SYN cookies or a proxy",
                  ms: "Pendekkan masa tamat SYN_RECV, besarkan baris gilir, gunakan kuki SYN atau proksi"
                }
              ]
            },
            {
              head: {
                zh: "Teardrop",
                en: "Teardrop",
                ms: "Teardrop"
              },
              cells: [
                {
                  zh: "发送彼此重叠、无法正确重组的分片，使系统锁死",
                  en: "Send overlapping fragments that cannot be reassembled, locking up the system",
                  ms: "Menghantar serpihan bertindih yang tidak boleh disusun semula sehingga sistem terkunci"
                },
                {
                  zh: "修补 IP 分片重组代码，丢弃重叠或越界的分片",
                  en: "Patch the IP fragment reassembly code and drop overlapping or out-of-range fragments",
                  ms: "Tampalkan kod penyusunan semula serpihan IP dan gugurkan serpihan bertindih atau di luar julat"
                }
              ]
            },
            {
              head: {
                zh: "流量重定向",
                en: "Traffic Redirection",
                ms: "Pengalihan Trafik"
              },
              cells: [
                {
                  zh: "路由器谎称到所有地址都有最佳路径，把全部流量引向自己",
                  en: "A router advertises the best path to every address and draws all traffic to itself",
                  ms: "Penghala mengiklankan laluan terbaik ke setiap alamat dan menarik semua trafik kepadanya"
                },
                {
                  zh: "对路由协议做认证，限制可宣告的路由",
                  en: "Authenticate the routing protocol and limit which routes may be advertised",
                  ms: "Sahkan protokol penghalaan dan hadkan laluan yang boleh diiklankan"
                }
              ]
            },
            {
              head: {
                zh: "DNS 缓存污染",
                en: "DNS Cache Poisoning",
                ms: "Pencemaran Cache DNS"
              },
              cells: [
                {
                  zh: "攻占名称服务器或让它缓存虚假条目，从而重定向任意流量",
                  en: "Overtake a name server or make it cache spurious entries so that any traffic can be redirected",
                  ms: "Merampas pelayan nama atau membuatnya menyimpan entri palsu sehingga mana-mana trafik boleh dialihkan"
                },
                {
                  zh: "限制递归查询、使用 DNSSEC、隔离内部与外部解析器",
                  en: "Restrict recursion, deploy DNSSEC and separate internal from external resolvers",
                  ms: "Hadkan rekursi, gunakan DNSSEC dan pisahkan penyelesai dalaman daripada luaran"
                }
              ]
            }
          ]
        }
      ],
      exam: [
        {
          zh: "拒绝服务攻击的机制描述题几乎必考：要能解释 Smurf 为什么要伪造源地址并广播、SYN 洪泛如何填满 SYN_RECV 队列（三次握手、只发 SYN 不回 ACK）、Teardrop 为什么用重叠分片（讲义给的三个分片是位置 0 长度 60、位置 30 长度 90、位置 41 长度 173），以及 DNS 缓存污染如何导致流量被重定向。",
          en: "Questions describing denial of service mechanisms are almost certain: you must explain why Smurf spoofs the source address and uses broadcast, how a SYN flood fills the SYN_RECV queue through the three-way handshake by sending SYNs and never ACKing, why Teardrop uses overlapping fragments - the lecture gives position 0 for 60 bytes, position 30 for 90 bytes and position 41 for 173 bytes - and how DNS cache poisoning redirects traffic.",
          ms: "Soalan yang menerangkan mekanisme penafian perkhidmatan hampir pasti keluar: anda mesti menerangkan mengapa Smurf memalsukan alamat sumber dan menggunakan siaran, bagaimana banjir SYN memenuhkan baris gilir SYN_RECV melalui jabat tangan tiga hala dengan menghantar SYN tanpa ACK, mengapa Teardrop menggunakan serpihan bertindih - kuliah memberi kedudukan 0 sepanjang 60 bait, kedudukan 30 sepanjang 90 bait dan kedudukan 41 sepanjang 173 bait - dan bagaimana pencemaran cache DNS mengalihkan trafik."
        },
        {
          zh: "链路加密与端到端加密的对比是经典表格题：链路加密在数据放到物理链路前加密，数据在中间节点会暴露，用户看不见加密过程，全部或全部不加密，每对主机一把密钥，提供节点认证；端到端加密由发送进程施加，用户自己选择算法和要加密的数据项，每对用户一把密钥，提供用户认证。",
          en: "The comparison of link encryption with end-to-end encryption is a classic table question: link encryption encrypts data just before they are placed on the physical link, data are exposed in intermediate nodes, the process is invisible to the user, all or no data are encrypted, one key per host pair is needed and node authentication is provided; end-to-end encryption is applied by the sending process, the user selects the algorithm and which data items to encrypt, one key per user pair is needed and user authentication is provided.",
          ms: "Perbandingan penyulitan pautan dengan penyulitan hujung ke hujung ialah soalan jadual klasik: penyulitan pautan menyulitkan data sebaik sebelum diletakkan pada pautan fizikal, data terdedah pada nod perantaraan, prosesnya tidak kelihatan kepada pengguna, semua atau tiada data disulitkan, satu kunci bagi setiap pasangan hos diperlukan dan pengesahan nod disediakan; penyulitan hujung ke hujung dilaksanakan oleh proses penghantar, pengguna memilih algoritma dan item data yang hendak disulitkan, satu kunci bagi setiap pasangan pengguna diperlukan dan pengesahan pengguna disediakan."
        },
        {
          zh: "IDS 的两个易错点常考：一是基于签名的 IDS 无法检测还没有签名的新攻击，而启发式（基于异常）IDS 通过建立可接受行为模型来发现异常；二是误报（false positive，第一类错误）与漏报（false negative，第二类错误）的含义不能弄反——误报让管理员不信任警报，漏报让真正的攻击溜过去，两者共同代表系统的灵敏度。",
          en: "Two easily confused IDS points are frequently tested: a signature-based IDS cannot detect a new attack for which no signature is installed, whereas a heuristic or anomaly-based IDS builds a model of acceptable behaviour and flags exceptions; and false positives, or type I errors, must not be confused with false negatives, or type II errors - false positives make administrators distrust alarms while false negatives let real attacks pass, and together they represent the sensitivity of the system.",
          ms: "Dua perkara IDS yang mudah keliru sering diuji: IDS berasaskan tandatangan tidak dapat mengesan serangan baharu yang belum ada tandatangannya, manakala IDS heuristik atau berasaskan anomali membina model tingkah laku yang boleh diterima dan menandakan pengecualian; dan positif palsu iaitu ralat jenis I tidak boleh dikelirukan dengan negatif palsu iaitu ralat jenis II - positif palsu membuat pentadbir tidak mempercayai amaran manakala negatif palsu membiarkan serangan sebenar berlalu, dan kedua-duanya mewakili sensitiviti sistem."
        },
        {
          zh: "侦察与冒充的对应关系常以情境题出现：端口扫描得到的是外部视图（哪些端口开放、什么操作系统与应用版本），社交工程得到的是内部细节；冒充的五条途径（猜测、窃听取得、绕过或关闭认证、攻击不需认证的目标、攻击认证数据已知的目标）要能各举一例，其中“厂商让全球远程维护人员共用同一个口令”是典型的 well-known authentication 反例。",
          en: "Reconnaissance and impersonation often appear as scenario questions: a port scan gives the external picture of which ports are open and what operating system and application versions are present, while social engineering yields internal details; you should be able to give an example for each of the five routes to impersonation - guessing, obtaining details by eavesdropping, circumventing or disabling authentication, attacking a target that is not authenticated and attacking a target whose authentication data are known - with the manufacturer that planned to use the same password for remote maintenance worldwide as the classic well-known authentication counterexample.",
          ms: "Peninjauan dan penyamaran sering muncul sebagai soalan senario: imbasan port memberikan gambaran luaran tentang port yang terbuka serta sistem pengendalian dan versi aplikasi, manakala kejuruteraan sosial memberikan butiran dalaman; anda perlu memberi contoh bagi setiap lima laluan penyamaran - meneka, memperoleh butiran melalui penyadapan, memintas atau melumpuhkan pengesahan, menyerang sasaran yang tidak disahkan dan menyerang sasaran yang data pengesahannya diketahui - dengan pengeluar yang merancang menggunakan kata laluan sama untuk penyelenggaraan jauh di seluruh dunia sebagai contoh berlawanan pengesahan terkenal yang klasik."
        }
      ],
      mnemonic: {
        zh: "网络脆弱六因：匿名、点多、共享、复杂、边界不明、路径不明；攻击流程记“侦察—窃听—冒充—篡改—拒绝服务”；控制记“分割冗余、加密、防火墙、IDS、蜜罐”。",
        en: "Six reasons networks are vulnerable: anonymity, many points, sharing, complexity, unknown perimeter, unknown path; the attack chain is reconnaissance, eavesdropping, impersonation, modification and denial of service; the controls are segmentation and redundancy, encryption, firewalls, IDS and honeypots.",
        ms: "Enam sebab rangkaian terdedah: tanpa nama, banyak titik, perkongsian, kerumitan, perimeter tidak diketahui, laluan tidak diketahui; rantaian serangan ialah peninjauan, penyadapan, penyamaran, pengubahsuaian dan penafian perkhidmatan; kawalannya ialah pemetakan dan lebihan, penyulitan, tembok api, IDS dan periuk madu."
      }
    },
    {
      id: "cs-07",
      num: 7,
      title: {
        zh: "安全管理",
        en: "Administering Security",
        ms: "Pentadbiran Keselamatan"
      },
      file: "cs/CHAPTER 7 - ADMINISTERING SECURITY.pdf",
      pages: 34,
      summary: {
        zh: "本章依据 Pfleeger 与 Pfleeger《Security in Computing》第 4 版，从管理与物理两个角度研究安全控制，围绕四个相关领域展开：安全计划（Security Planning）、风险分析（Risk Analysis）、组织安全政策（Organizational Security Policies）与物理安全（Physical Security）。安全计划是一份说明组织如何满足安全需求的文件，必须涵盖政策、现状、需求、建议的控制、责任、时间表和持续关注七项内容，美国国防部 TCSEC 提出的六项要求（安全政策、标识、标记、问责、保证、持续保护）说明了需求应有的样子。风险分析用风险影响乘以风险概率得到风险暴露，遵循识别资产、确定脆弱性、估计被利用的可能性、计算预期年度损失、调查控制及其成本、预测控制带来的年度节省六个步骤，并有规避、转移、承担三种风险策略。政策文件回答“谁能以何种方式访问哪些资源”，从用户、所有者与受益者三方需求取得平衡；物理安全则处理自然灾害、断电、人为破坏、盗窃、信息截取（粉碎、覆写、消磁、Tempest）以及备份、异地备份、冷站点与热站点等应急规划。",
        en: "Based on Pfleeger and Pfleeger's Security in Computing (4th edition), this chapter studies security controls from the administrative and physical angles across four related areas: security planning, risk analysis, organisational security policies and physical security. A security plan is a document describing how an organisation will address its security needs and must cover seven issues - policy, current state, requirements, recommended controls, accountability, timetable and continuing attention - while the six requirements of the U.S. Department of Defense TCSEC (security policy, identification, marking, accountability, assurance and continuous protection) show what requirements should look like. Risk analysis multiplies the risk impact by the risk probability to obtain the risk exposure and follows six steps: identify assets, determine vulnerabilities, estimate the likelihood of exploitation, compute the expected annual loss, survey applicable controls and their costs, and project the annual savings of a control, with the three strategies of avoiding, transferring and assuming risk. The policy document answers who can access which resources in what manner and balances the needs of users, owners and beneficiaries, while physical security covers natural disasters, power loss, vandals, theft, interception of sensitive information through shredding, overwriting, degaussing and Tempest, and contingency planning with backups, offsite storage, cold sites and hot sites.",
        ms: "Berdasarkan Security in Computing (edisi ke-4) oleh Pfleeger dan Pfleeger, bab ini mengkaji kawalan keselamatan dari sudut pentadbiran dan fizikal merentas empat bidang berkaitan: perancangan keselamatan, analisis risiko, dasar keselamatan organisasi dan keselamatan fizikal. Pelan keselamatan ialah dokumen yang menerangkan cara organisasi memenuhi keperluan keselamatannya dan mesti merangkumi tujuh perkara - dasar, keadaan semasa, keperluan, kawalan yang dicadangkan, akauntabiliti, jadual waktu dan perhatian berterusan - manakala enam keperluan TCSEC Jabatan Pertahanan Amerika Syarikat (dasar keselamatan, pengenalpastian, penandaan, akauntabiliti, jaminan dan perlindungan berterusan) menunjukkan rupa keperluan yang baik. Analisis risiko mendarabkan kesan risiko dengan kebarangkalian risiko untuk memperoleh pendedahan risiko dan mengikut enam langkah: mengenal pasti aset, menentukan kerentanan, menganggarkan kebarangkalian eksploitasi, mengira jangkaan kerugian tahunan, meninjau kawalan yang berkenaan serta kosnya, dan meramal penjimatan tahunan sesuatu kawalan, dengan tiga strategi iaitu mengelak, memindahkan dan menanggung risiko. Dokumen dasar menjawab siapa boleh mengakses sumber mana dengan cara bagaimana dan mengimbangi keperluan pengguna, pemilik serta penerima manfaat, manakala keselamatan fizikal merangkumi bencana alam, kehilangan kuasa, perosak manusia, kecurian, pemintasan maklumat sensitif melalui pengoyakan, penulisan ganti, penyahgausan dan Tempest, serta perancangan kontingensi dengan sandaran, storan luar tapak, tapak sejuk dan tapak panas."
      },
      points: [
        {
          zh: "本章从管理与物理角度研究安全控制，分为四个相关领域：计划（要做什么事先准备与研究，才能知道我们的实现满足今天和明天的安全需要）、风险分析（如何权衡控制的收益与成本，以及如何证明这些控制是必要的）、政策（如何建立框架以保证计算机安全需求持续得到满足）与物理控制（计算环境中哪些方面会影响安全）。安全计划是一份描述组织将如何满足其安全需求的文件，会随着安全需求变化而定期评审与修订；一份好的安全计划既是当前安全实践的正式记录，也是有序改进这些实践的蓝图，它必须处理七个问题：政策（安全工作的目标以及有关人员实现目标的意愿）、现状、需求、建议的控制（把控制映射到政策与需求中识别出的脆弱性）、责任（每项安全活动由谁负责）、时间表（何时完成哪些安全职能）以及持续关注（定期更新安全计划的结构）。",
          en: "This chapter studies security controls from the administrative and physical angles in four related areas: planning, asking what advance preparation and study let us know that our implementation meets our security needs for today and tomorrow; risk analysis, asking how we weigh the benefits of controls against their costs and justify any controls; policy, asking how we establish a framework to see that our computer security needs continue to be met; and physical control, asking what aspects of the computing environment have an impact on security. A security plan is a document that describes how an organisation will address its security needs, and it is subject to periodic review and revision as those needs change; a good security plan is both an official record of current security practices and a blueprint for orderly change, and it must address seven issues: policy, indicating the goals of the security effort and the willingness of the people involved to achieve them; current state; requirements; recommended controls mapped to the vulnerabilities identified in the policy and requirements; accountability, describing who is responsible for each security activity; timetable, identifying when different security functions are to be done; and continuing attention, specifying a structure for periodically updating the plan.",
          ms: "Bab ini mengkaji kawalan keselamatan dari sudut pentadbiran dan fizikal dalam empat bidang berkaitan: perancangan, iaitu persiapan dan kajian awal apakah yang memberitahu kita bahawa pelaksanaan kita memenuhi keperluan keselamatan hari ini dan esok; analisis risiko, iaitu bagaimana kita menimbang manfaat kawalan berbanding kosnya dan membenarkan kawalan tersebut; dasar, iaitu bagaimana kita membina rangka kerja untuk memastikan keperluan keselamatan komputer terus dipenuhi; serta kawalan fizikal, iaitu aspek persekitaran pengkomputeran yang memberi kesan kepada keselamatan. Pelan keselamatan ialah dokumen yang menerangkan cara organisasi memenuhi keperluan keselamatannya, dan ia tertakluk kepada semakan serta pindaan berkala apabila keperluan itu berubah; pelan keselamatan yang baik ialah rekod rasmi amalan keselamatan semasa dan juga pelan tindakan untuk perubahan yang teratur, dan ia mesti menangani tujuh perkara: dasar, yang menunjukkan matlamat usaha keselamatan serta kesediaan pihak terlibat mencapainya; keadaan semasa; keperluan; kawalan yang dicadangkan yang dipetakan kepada kerentanan yang dikenal pasti dalam dasar dan keperluan; akauntabiliti yang menerangkan siapa bertanggungjawab bagi setiap aktiviti keselamatan; jadual waktu yang mengenal pasti bila fungsi keselamatan tertentu perlu dilakukan; dan perhatian berterusan yang menetapkan struktur untuk mengemas kini pelan secara berkala."
        },
        {
          zh: "政策声明必须回答三个关键问题：谁应该被允许访问？允许访问哪些系统与组织资源？每个用户对每种资源允许有哪种类型的访问？此外政策还应说明组织的安全目标（例如防止数据外泄、防止自然灾害造成数据丢失、保护数据完整性、防止计算资源失效造成业务损失）、优先次序（服务客户还是保护数据）、安全责任落在哪里（小型安全小组、每位员工还是相关经理）以及组织对安全的承诺。",
          en: "The policy statement must answer three essential questions: who should be allowed access, to what system and organisational resources access should be allowed, and what types of access each user should be allowed for each resource; it should also specify the organisation's goals on security such as protecting data from leakage, from loss due to physical disaster, or protecting its integrity, or protecting against loss of business when computing resources fail, the higher priority between serving customers and securing data, where the responsibility for security lies - with a small security group, each employee or relevant managers - and the organisation's commitment to security.",
          ms: "Pernyataan dasar mesti menjawab tiga soalan penting: siapa yang patut dibenarkan mengakses, sumber sistem dan organisasi mana yang boleh diakses, dan jenis akses apa yang dibenarkan bagi setiap pengguna bagi setiap sumber; dasar itu juga perlu menyatakan matlamat keselamatan organisasi seperti melindungi data daripada kebocoran, daripada kehilangan akibat bencana fizikal, atau melindungi integritinya, atau melindungi daripada kehilangan perniagaan apabila sumber pengkomputeran gagal, keutamaan antara melayani pelanggan dengan melindungi data, di mana tanggungjawab keselamatan terletak - pada kumpulan keselamatan kecil, setiap pekerja atau pengurus berkaitan - serta komitmen organisasi terhadap keselamatan."
        },
        {
          zh: "计划的核心是安全需求：对系统提出的功能或性能要求，用来保证达到期望的安全水平。美国国防部 TCSEC 给出六项要求：必须有一个由系统强制执行的、明确且定义良好的安全政策；每个主体必须被唯一且令人信服地标识（标识是为了能检查主体／客体访问）；每个客体必须关联一个标明其安全级别的标记，且每次访问该客体时都能取到该标记作比较；系统必须保存影响安全的完整而可靠的记录（如引入新用户、改变主体或客体的安全级别、拒绝访问尝试）；系统必须含有强制执行安全的机制，并且能够评估这些机制的有效性；实现安全的机制本身必须受到保护，防止未授权更改。需求说明的是“应该完成什么”，而不是“如何完成”，因此应尽可能把实现细节留给设计者。良好的需求有七个特征：正确性（可理解、陈述无误）、一致性（没有冲突或含糊之处）、完整性（涵盖所有可能情形）、现实性（以现有技术可以实现）、必要性（不过分限制）、可验证性（能写出测试来客观地证明需求已被满足，或能测量满足的程度）与可追踪性（每条需求都能追溯到相关的功能与数据，从而在需求变化时容易重新评估）。需求还要覆盖机密性、完整性、可用性各个方面，并让客户或用户在不依赖实现的前提下指定所需功能。",
          en: "The heart of the security plan is its set of security requirements: the functional or performance demands placed on a system to ensure a desired level of security. The U.S. Department of Defense TCSEC lists six: there must be an explicit and well-defined security policy enforced by the system; every subject must be uniquely and convincingly identified, identification being necessary so that subject and object access can be checked; every object must be associated with a label indicating its security level, available for comparison each time access is requested; the system must maintain complete and secure records of actions that affect security, such as introducing new users, assigning or changing the security level of a subject or object and denying access attempts; the computing system must contain mechanisms that enforce security and it must be possible to evaluate their effectiveness; and the mechanisms that implement security must be protected against unauthorised change. Requirements explain what should be accomplished, not how, so implementation details should whenever possible be left to the designers. Good requirements have seven characteristics: correctness, meaning they are understandable and stated without error; consistency, with no conflicting or ambiguous requirements; completeness, addressing all possible situations; realism, so that what they mandate can be implemented with existing technology; need, so that they are not unnecessarily restrictive; verifiability, so that tests can be written to demonstrate conclusively and objectively that they have been met or the degree of satisfaction can be measured; and traceability, so that each requirement can be traced to the functions and data related to it and easily reevaluated when it changes. Requirements should also address all aspects of security - confidentiality, integrity and availability - and let customers or users specify desired functions independently of the implementation.",
          ms: "Teras pelan keselamatan ialah set keperluan keselamatan: tuntutan fungsi atau prestasi yang dikenakan pada sistem untuk memastikan aras keselamatan yang dikehendaki. TCSEC Jabatan Pertahanan Amerika Syarikat menyenaraikan enam: mesti wujud dasar keselamatan yang jelas dan tertakrif dengan baik yang dikuatkuasakan oleh sistem; setiap subjek mesti dikenal pasti secara unik dan meyakinkan, dengan pengenalpastian perlu supaya akses subjek dan objek boleh diperiksa; setiap objek mesti dikaitkan dengan label yang menunjukkan aras keselamatannya dan tersedia untuk perbandingan setiap kali akses diminta; sistem mesti menyimpan rekod lengkap dan selamat bagi tindakan yang menjejaskan keselamatan seperti memperkenalkan pengguna baharu, menetapkan atau menukar aras keselamatan subjek atau objek serta menolak percubaan akses; sistem pengkomputeran mesti mengandungi mekanisme yang menguatkuasakan keselamatan dan mesti dapat dinilai keberkesanannya; dan mekanisme yang melaksanakan keselamatan mesti dilindungi daripada perubahan tanpa kebenaran. Keperluan menerangkan apa yang perlu dicapai dan bukan bagaimana, jadi butiran pelaksanaan sepatutnya diserahkan kepada pereka bentuk sedapat mungkin. Keperluan yang baik mempunyai tujuh ciri: ketepatan, iaitu boleh difahami dan dinyatakan tanpa kesilapan; ketekalan, tanpa keperluan yang bercanggah atau kabur; kelengkapan, menangani semua keadaan yang mungkin; realisme, supaya apa yang dimandatkan boleh dilaksanakan dengan teknologi sedia ada; keperluan sebenar, supaya ia tidak terlalu mengekang; kebolehsahan, supaya ujian boleh ditulis untuk membuktikan secara muktamad dan objektif bahawa ia dipenuhi atau tahap pemenuhannya boleh diukur; dan kebolehkesanan, supaya setiap keperluan boleh dikesan kepada fungsi dan data berkaitan dan mudah dinilai semula apabila ia berubah. Keperluan juga perlu menangani semua aspek keselamatan - kerahsiaan, integriti dan ketersediaan - serta membolehkan pelanggan atau pengguna menyatakan fungsi yang dikehendaki tanpa bergantung pada pelaksanaan."
        },
        {
          zh: "计划还必须指出由谁负责实现安全需求：个人计算机用户可能负责自己机器的安全，项目负责人负责数据与计算的安全，经理负责督促其下属落实安全措施，数据库管理员负责其数据库中数据的访问与完整性，信息主管负责监督数据的创建与使用以及数据的保留与妥善处置，人事人员负责涉及员工的安全事务；计划还要给出时间表与里程碑，说明各要素如何以及何时执行、控制按什么顺序实施（最严重的暴露最先覆盖），并且计划必须是可扩展的。安全计划要求定期评审安全状况：随着用户、数据和设备的变化会出现新的暴露，现有的控制手段也可能过时或失效，因此应定期检查并更新客体清单与控制清单，并重新进行风险分析。安全计划小组应代表计算机硬件组、系统管理员、系统程序员、应用程序员、数据录入人员、物理安全人员和用户代表；计划要成功还需要三方面共同努力：计划小组必须体察每个受影响群体的需要，受建议影响的人必须理解计划对他们使用系统和工作方式的意义，管理层必须承诺执行并强制实施系统的安全要求。",
          en: "The plan must also identify who is responsible for implementing the requirements: personal computer users may be responsible for the security of their own machines, project leaders for the security of data and computations, managers for seeing that the people they supervise implement security measures, database administrators for access to and integrity of the data in their databases, information officers for overseeing the creation and use of data and its retention and proper disposal, and personnel staff for security involving employees; the plan also includes a timetable showing how and when the elements will be performed, with dates as milestones so that management can track progress and with the order of implementation chosen so that the most serious exposures are covered as soon as possible, and the plan must be extensible. The security plan must call for reviewing the security situation periodically, because as users, data and equipment change new exposures develop and current means of control may become obsolete or ineffective, so the inventory of objects and the list of controls should be scrutinised and updated periodically and risk analysis performed anew. The planning team should represent the computer hardware group, system administrators, systems programmers, applications programmers, data entry personnel, physical security personnel and representative users; and three groups must contribute to making the plan succeed - the planning team must be sensitive to the needs of each group affected, those affected must understand what the plan means for the way they use the system and perform their business activities, and management must be committed to using and enforcing the security aspects of the system.",
          ms: "Pelan itu juga mesti mengenal pasti siapa bertanggungjawab melaksanakan keperluan: pengguna komputer peribadi mungkin bertanggungjawab atas keselamatan mesin mereka sendiri, ketua projek atas keselamatan data dan pengiraan, pengurus memastikan orang bawahan melaksanakan langkah keselamatan, pentadbir pangkalan data atas akses dan integriti data dalam pangkalan datanya, pegawai maklumat atas penyeliaan penciptaan dan penggunaan data serta penyimpanan dan pelupusannya yang wajar, dan kakitangan personel atas keselamatan yang melibatkan pekerja; pelan itu turut mengandungi jadual waktu yang menunjukkan bagaimana dan bila setiap elemen dilaksanakan, dengan tarikh sebagai pencapaian supaya pihak pengurusan boleh menjejaki kemajuan dan dengan urutan pelaksanaan dipilih supaya pendedahan paling serius ditangani secepat mungkin, dan pelan itu mesti boleh dikembangkan. Pelan keselamatan mesti menuntut semakan keadaan keselamatan secara berkala kerana apabila pengguna, data dan peralatan berubah, pendedahan baharu timbul dan cara kawalan semasa mungkin menjadi usang atau tidak berkesan, jadi inventori objek dan senarai kawalan perlu diteliti serta dikemas kini secara berkala dan analisis risiko dijalankan semula. Pasukan perancangan keselamatan patut mewakili kumpulan perkakasan komputer, pentadbir sistem, pengaturcara sistem, pengaturcara aplikasi, kakitangan kemasukan data, kakitangan keselamatan fizikal dan pengguna wakil; tiga pihak pula mesti menyumbang kepada kejayaan pelan itu - pasukan perancangan mesti peka terhadap keperluan setiap kumpulan yang terjejas, pihak yang terjejas mesti memahami maksud pelan itu bagi cara mereka menggunakan sistem dan menjalankan aktiviti perniagaan, dan pihak pengurusan mesti komited untuk menggunakan serta menguatkuasakan aspek keselamatan sistem."
        },
        {
          zh: "业务连续性计划说明企业在计算机安全事件期间如何继续运作，处理两类情形：灾难性情形（全部或大部分计算能力突然不可用）与长时间中断（中断预计持续很久以致业务受损）；关键靠事先计划与准备，找出在技术不可用时仍能让业务维持的替代活动，步骤是评估危机的业务影响（核心资产是什么、什么会中断这些资产的使用，脆弱性比威胁主体更重要）、制定控制影响的策略（备份数据、冗余硬件、替代的人工流程，或合理降低处理能力），再制定并实施计划，明确事件发生时谁负责指挥、做什么、由谁做，并为事前准备（冗余设备、数据备份、物资储备）与事前培训提供依据。事件响应计划告诉员工如何处理安全事件：与业务连续性计划不同，事件响应的目标是处理当前的安全事件，而不考虑业务问题。计划应当界定什么构成事件、确定由谁负责掌控局面、描述行动方案，通常分三个阶段——事先计划、分诊与运行事件处理，事件平息后还有第四个阶段“复盘”，以便从本次事件中改进未来响应。事先计划效果最好，因为人们可以在没有压力、不慌不忙的情况下合乎逻辑地思考；响应小组包括指挥者（决定采取什么行动、何时结束响应）、首席技术员（指挥与协调响应）以及法律、人力资源或公共关系方面的顾问。响应中需要考虑法律问题、证据保全、记录与公共关系；事件了结后要复盘两件事：是否需要采取安全控制措施，以及事件响应计划本身是否奏效。",
          en: "A business continuity plan documents how a business will continue to function during a computer security incident and deals with two kinds of situation: catastrophic situations, in which all or a major part of a computing capability is suddenly unavailable, and long duration outages, in which the outage is expected to last so long that business will suffer. The key is advance planning and preparation that identifies activities which will keep the business viable when computing technology is disabled; the steps are to assess the business impact of a crisis by asking what the essential assets are and what could disrupt their use, remembering that the vulnerability is more important than the threat agent, to develop a strategy to control the impact, such as backup copies of data, redundant hardware, an alternative manual process or simply reduced capacity, and then to develop and implement the plan, specifying who is in charge when an incident occurs, what to do and who does it, and justifying advance arrangements such as redundant equipment, data backups and stockpiled supplies as well as advance training. An incident response plan tells the staff how to deal with a security incident; in contrast to the business continuity plan, its goal is handling the current security incident without regard for business issues. The plan should define what constitutes an incident, identify who is responsible for taking charge of the situation and describe the plan of action, and it usually has three phases - advance planning, triage and running the incident - with a useful fourth phase of review after the situation abates so that the incident leads to improvement. Advance planning works best because people can think logically, unhurried and without pressure; the response team includes a director who decides what actions to take and when to terminate the response, a lead technician who directs and coordinates the response, and advisors from legal, human resources or public relations as appropriate. The response must consider legal issues, preserving evidence, records and public relations, and once the case is closed the team holds a review to consider whether any security control action is to be taken and whether the incident response plan worked.",
          ms: "Pelan kesinambungan perniagaan mendokumentasikan cara perniagaan terus berfungsi semasa insiden keselamatan komputer dan menangani dua jenis keadaan: keadaan bencana apabila semua atau sebahagian besar keupayaan pengkomputeran tiba-tiba tidak tersedia, dan gangguan berpanjangan apabila gangguan dijangka berlarutan sehingga perniagaan terjejas. Kuncinya ialah perancangan serta persiapan awal yang mengenal pasti aktiviti yang mengekalkan perniagaan apabila teknologi pengkomputeran lumpuh; langkahnya ialah menilai kesan perniagaan sesuatu krisis dengan bertanya apakah aset penting dan apa yang boleh mengganggu penggunaannya, dengan mengingati bahawa kerentanan lebih penting daripada ejen ancaman, membangunkan strategi untuk mengawal kesan itu seperti salinan sandaran data, perkakasan berlebihan, proses manual alternatif atau sekadar pengurangan kapasiti, kemudian membangunkan dan melaksanakan pelan yang menetapkan siapa bertanggungjawab apabila insiden berlaku, apa yang perlu dilakukan dan siapa melakukannya, serta membenarkan persiapan awal seperti peralatan berlebihan, sandaran data dan simpanan bekalan berserta latihan awal. Pelan tindak balas insiden memberitahu kakitangan cara menangani insiden keselamatan; berbeza daripada pelan kesinambungan perniagaan, matlamatnya ialah menangani insiden keselamatan semasa tanpa mengambil kira isu perniagaan. Pelan itu perlu mentakrifkan apa yang dikira insiden, mengenal pasti siapa bertanggungjawab mengambil alih keadaan dan menerangkan pelan tindakan, dan lazimnya mempunyai tiga fasa - perancangan awal, triaj dan menjalankan pengendalian insiden - dengan fasa keempat iaitu semakan yang berguna selepas keadaan reda supaya insiden ini membawa penambahbaikan. Perancangan awal paling berkesan kerana orang boleh berfikir secara logik, tanpa tergesa-gesa dan tanpa tekanan; pasukan tindak balas termasuk pengarah yang memutuskan tindakan dan bila respons ditamatkan, juruteknik utama yang mengetuai serta menyelaras respons, dan penasihat dari segi undang-undang, sumber manusia atau perhubungan awam mengikut kesesuaian. Respons mesti mempertimbangkan isu undang-undang, pemeliharaan bukti, rekod dan perhubungan awam, dan selepas kes ditutup pasukan mengadakan semakan untuk menimbangkan sama ada tindakan kawalan keselamatan perlu diambil dan sama ada pelan tindak balas insiden itu berkesan."
        },
        {
          zh: "风险是系统或其用户可能遇到的潜在问题，它由三件事界定：与事件相关的损失（风险影响）、事件发生的可能性（风险概率，从 0 不可能到 1 必然），以及我们能在多大程度上改变结果。把风险影响乘以风险概率就得到风险暴露：例如病毒攻击的可能性是 0.3，清理受影响文件的成本是 10 000 美元，则风险暴露是 3 000 美元——用这个计算就可以判断花 100 美元买防病毒软件是值得的，因为它能避免大得多的潜在损失。处理风险有三种策略：规避风险（改变安全或其他系统特性的需求）、转移风险（把风险分配给其他系统、人员、组织或资产，或购买保险以在风险成真时弥补财务损失）以及承担风险（接受风险，用可用资源控制它，并准备在损失发生时应对）。成本既与风险的潜在影响有关，也与降低风险有关；风险杠杆率等于风险暴露的减少量除以降低风险的成本，用来判断某项控制是否划算。",
          en: "A risk is a potential problem that the system or its users may experience, and it is distinguished by three things: a loss associated with an event, called the risk impact; the likelihood that the event will occur, measured from 0 for impossible to 1 for certain; and the degree to which we can change the outcome. Multiplying the risk impact by the risk probability yields the risk exposure: if the likelihood of a virus attack is 0.3 and the cost to clean up the affected files is $10,000, the risk exposure is $3,000, and a calculation like this shows that a virus checker is worth an investment of $100 because it prevents a much larger potential loss. There are three strategies for dealing with risk: avoiding the risk by changing requirements for security or other system characteristics; transferring the risk by allocating it to other systems, people, organisations or assets, or by buying insurance to cover financial loss should the risk become reality; and assuming the risk by accepting it, controlling it with available resources and preparing to deal with the loss if it occurs. Costs are associated not only with the risk's potential impact but also with reducing it, and risk leverage, which is the difference in risk exposure divided by the cost of reducing the risk, tells us whether a control is worthwhile.",
          ms: "Risiko ialah masalah berpotensi yang mungkin dialami oleh sistem atau penggunanya, dan ia dibezakan oleh tiga perkara: kerugian yang berkaitan dengan sesuatu peristiwa yang dipanggil kesan risiko; kebarangkalian peristiwa itu berlaku, diukur dari 0 mustahil hingga 1 pasti; dan tahap kemampuan kita mengubah kesudahannya. Mendarabkan kesan risiko dengan kebarangkalian risiko menghasilkan pendedahan risiko: jika kebarangkalian serangan virus ialah 0.3 dan kos membersihkan fail yang terjejas ialah $10,000, maka pendedahan risikonya ialah $3,000, dan pengiraan seperti ini menunjukkan bahawa pemeriksa virus bernilai pelaburan $100 kerana ia menghalang kerugian berpotensi yang jauh lebih besar. Terdapat tiga strategi menangani risiko: mengelak risiko dengan mengubah keperluan keselamatan atau ciri sistem yang lain; memindahkan risiko dengan mengagihkannya kepada sistem, orang, organisasi atau aset lain, atau dengan membeli insurans untuk menampung kerugian kewangan jika risiko itu menjadi kenyataan; dan menanggung risiko dengan menerimanya, mengawalnya menggunakan sumber yang ada serta bersedia menghadapi kerugian jika berlaku. Kos berkaitan bukan sahaja dengan kesan potensi risiko malah dengan usaha menguranginya, dan daya tuas risiko, iaitu perbezaan pendedahan risiko dibahagikan dengan kos mengurangkan risiko, memberitahu kita sama ada sesuatu kawalan itu berbaloi."
        },
        {
          zh: "风险分析分六步：识别资产、确定脆弱性、估计被利用的可能性、计算预期年度损失、调查适用的控制及其成本、预测控制的年度节省。资产包括硬件（处理器、电路板、通信媒介）、软件（源程序、目标程序、操作系统）、数据（执行中使用的数据、存放在各种介质上的数据）、人员（运行系统或特定程序所需的技能）、文档以及耗材（纸张、表格、激光碳粉盒、磁性介质）；确定脆弱性可以用一张“资产 × 机密性／完整性／可用性”的矩阵，并逐一追问无意错误、恶意内部人、外部人和自然与物理灾害会造成什么影响；估计可能性有经典法、频率法和主观法三种，频率评级从“一天不止一次”到“三年不到一次”。",
          en: "Risk analysis has six steps: identify assets; determine vulnerabilities; estimate the likelihood of exploitation; compute the expected annual loss; survey applicable controls and their costs; and project the annual savings of a control. Assets include hardware such as processors, boards and communications media; software such as source programs, object programs and operating systems; data used during execution or stored on various media; people, that is the skills needed to run the computing system or specific programs; documentation; and supplies such as paper, forms, laser cartridges and magnetic media. Vulnerabilities can be determined with a matrix of assets against confidentiality, integrity and availability, asking in each entry what the effects of unintentional errors, willfully malicious insiders, outsiders and natural or physical disasters would be, and likelihood can be estimated by classical, frequency or subjective approaches, with frequency ratings running from more than once a day to less than once in three years.",
          ms: "Analisis risiko mempunyai enam langkah: mengenal pasti aset; menentukan kerentanan; menganggarkan kebarangkalian eksploitasi; mengira jangkaan kerugian tahunan; meninjau kawalan yang berkenaan serta kosnya; dan meramal penjimatan tahunan sesuatu kawalan. Aset termasuk perkakasan seperti pemproses, papan dan medium komunikasi; perisian seperti program sumber, program objek dan sistem pengendalian; data yang digunakan semasa pelaksanaan atau disimpan pada pelbagai medium; manusia iaitu kemahiran yang diperlukan untuk menjalankan sistem pengkomputeran atau program tertentu; dokumentasi; dan bekalan seperti kertas, borang, kartrij laser dan medium magnet. Kerentanan boleh ditentukan dengan matriks aset berbanding kerahsiaan, integriti dan ketersediaan, dengan menanyakan dalam setiap entri apakah kesan kesilapan tidak sengaja, orang dalam yang berniat jahat, orang luar serta bencana semula jadi atau fizikal, manakala kebarangkalian boleh dianggarkan melalui pendekatan klasik, kekerapan atau subjektif, dengan penilaian kekerapan daripada lebih daripada sekali sehari hingga kurang daripada sekali dalam tiga tahun."
        },
        {
          zh: "第四步要计算利用真的发生时的可能损失，并且要考虑隐性成本：法律上对保持某个数据项机密性或完整性的义务、业务要求与协议（例如不能提供服务是否要付违约金）、数据泄露是否会伤害个人或组织以及是否可能引起法律诉讼。第五步调查并选择新的控制，第六步预测节省：某项控制的实际成本（购买价、安装费、培训费）减去使用该控制带来的预期损失（管理与维护成本等）就是它的有效成本，因此控制真正的成本可能为正（管理太贵或在系统其他地方引入新风险），甚至可能为负（风险下降的幅度大于控制的成本）。讲义给出的例子是：数据泄露与错误计算的风险每年 100 000 美元，访问控制软件的有效性 60%（−60 000），软件成本 25 000，于是预期年度总成本为 65 000 美元，节省 35 000 美元。",
          en: "The fourth step determines the likely loss if the exploitation does occur and must include hidden costs: the legal obligations for preserving the confidentiality or integrity of a given data item, business requirements and agreements such as whether the organisation must pay a penalty if it cannot provide a service, and whether release of a data item could harm a person or organisation or lead to legal action. The fifth step surveys and selects new controls and the sixth projects savings: the effective cost of a control is its actual cost - purchase price, installation and training costs - minus any expected loss from using it, such as administrative or maintenance costs, so the true cost may be positive if the control is expensive to administer or introduces new risk elsewhere, or even negative if the reduction in risk is greater than the cost of the control. The lecture example is a disclosure and incorrect-computation risk of $100,000 per year, access control software with 60 per cent effectiveness giving minus $60,000, and a software cost of plus $25,000, so the expected annual cost is $65,000 and the saving is $35,000.",
          ms: "Langkah keempat menentukan kerugian yang mungkin berlaku jika eksploitasi benar-benar terjadi dan mesti merangkumi kos tersembunyi: kewajipan undang-undang untuk memelihara kerahsiaan atau integriti sesuatu item data, keperluan serta perjanjian perniagaan seperti sama ada organisasi perlu membayar penalti jika tidak dapat memberikan perkhidmatan, dan sama ada pendedahan sesuatu item data boleh menjejaskan seseorang atau organisasi atau membawa tindakan undang-undang. Langkah kelima meninjau dan memilih kawalan baharu dan langkah keenam meramal penjimatan: kos berkesan sesuatu kawalan ialah kos sebenarnya - harga belian, kos pemasangan dan latihan - ditolak sebarang jangkaan kerugian daripada penggunaan kawalan itu seperti kos pentadbiran dan penyelenggaraan, jadi kos sebenar boleh positif jika kawalan itu mahal untuk ditadbir atau memperkenalkan risiko baharu di tempat lain, malah boleh negatif jika pengurangan risiko lebih besar daripada kos kawalan. Contoh dalam kuliah ialah risiko pendedahan dan pengiraan tersilap bernilai $100,000 setahun, keberkesanan perisian kawalan akses 60 peratus yang memberi tolak $60,000, dan kos perisian tambah $25,000, maka jangkaan kos tahunan ialah $65,000 dan penjimatannya $35,000."
        },
        {
          zh: "风险分析的支持者认为它能提高安全意识、把安全任务与管理目标联系起来、识别资产与脆弱性以及控制、改进决策依据并为安全支出提供正当理由；反对者则认为它会带来虚假的精确感与信心、实施起来很难、有“不可改变性”的问题以及缺乏准确性。组织安全政策要回答“谁可以以何种方式访问哪些资源”，它是高层管理文件，用来告知所有用户使用系统的目标与限制，措辞足够宽泛因此不会频繁变动，是全部保护工作的基础；它的用途包括认清敏感信息资产、澄清安全责任、提升现有员工的安全意识以及指导新员工。政策必须界定其受众——用户（合法地期望获得一定程度的机密性、完整性与持续可用性，也需要知道什么算是可接受的使用）、所有者（设备的所有者可能并不是系统用户）与受益者（直接或间接依赖计算机、数据、程序与计算能力的人），并在三方之间取得平衡。",
          en: "Arguments for risk analysis are that it improves awareness, relates the security mission to management objectives, identifies assets, vulnerabilities and controls, improves the basis for decisions and justifies expenditures for security; arguments against it are that it gives a false sense of precision and confidence, it is hard to perform, it suffers from immutability and it lacks accuracy. An organisational security policy must answer who can access which resources in what manner; it is a high-level management document written in terms broad enough that it does not change frequently, it informs all users of the goals of and constraints on using a system and is the foundation upon which all protection efforts are built, and its purposes include recognising sensitive information assets, clarifying security responsibilities, promoting awareness for existing employees and guiding new employees. The policy must identify its audiences - users, who legitimately expect a certain degree of confidentiality, integrity and continuous availability and need to know what counts as acceptable use; owners, since each piece of computing equipment is owned by someone who may not be a system user; and beneficiaries, who depend directly or indirectly on computers, their data and programs and their computational power - and must balance the needs of all three parties.",
          ms: "Hujah menyokong analisis risiko ialah ia meningkatkan kesedaran, mengaitkan misi keselamatan dengan objektif pengurusan, mengenal pasti aset, kerentanan dan kawalan, menambah baik asas keputusan serta membenarkan perbelanjaan keselamatan; hujah menentangnya ialah ia memberi rasa ketepatan dan keyakinan yang palsu, sukar dilaksanakan, mengalami masalah ketakbolehubahan serta kurang ketepatan. Dasar keselamatan organisasi mesti menjawab siapa boleh mengakses sumber mana dengan cara bagaimana; ia ialah dokumen pengurusan peringkat tinggi yang ditulis dalam istilah cukup luas sehingga tidak kerap berubah, ia memaklumkan kepada semua pengguna matlamat dan kekangan penggunaan sistem serta menjadi asas kepada semua usaha perlindungan, dan tujuannya termasuk mengenal pasti aset maklumat sensitif, menjelaskan tanggungjawab keselamatan, meningkatkan kesedaran pekerja sedia ada dan membimbing pekerja baharu. Dasar itu mesti mengenal pasti khalayaknya - pengguna yang secara sah mengharapkan tahap kerahsiaan, integriti dan ketersediaan berterusan serta perlu tahu apa yang dikira penggunaan boleh terima; pemilik kerana setiap peralatan pengkomputeran dimiliki oleh seseorang yang mungkin bukan pengguna sistem; dan penerima manfaat yang bergantung secara langsung atau tidak langsung pada komputer, data serta program dan kuasa pengiraannya - dan mesti mengimbangi keperluan ketiga-tiga pihak."
        },
        {
          zh: "安全政策的内容包括：明确受众并描述每一类受众的性质及其安全目标，说明计算系统的用途、需要保护的资源以及所需保护的性质；用途部分通常列出三到五个目标，例如促进高效业务运作、便利组织内的信息共享、保护业务与个人信息、确保有准确的信息支持业务流程、确保一个安全而富有成效的工作场所、遵守适用的法律与法规；保护资源部分要说明政策适用于哪些设备与数据；保护的性质则说明谁可以访问被保护的条目、如何保证这种访问以及如何拒绝未授权者的访问。优秀的安全政策有四个特征：覆盖全面（要么适用于所有可能情形，要么明确排除）、持久、现实（以现有技术可以实现）以及有用（含糊或不完整的政策根本不会被正确执行）。物理安全指计算机系统之外所需的保护，涵盖自然灾害（洪水、火灾及其他）、断电（不间断电源 UPS 与浪涌抑制器）、人为破坏、未授权访问与使用以及盗窃（阻止访问、阻止携带外出、检测盗窃）；针对敏感信息被截取的防护包括粉碎文件、覆写磁性数据、消磁，以及防范辐射泄漏的 Tempest——计算机屏幕会发出可在一定距离外被检测到的信号，Tempest 是美国政府的一项计划，为设备认证其无（可检测的）辐射。应急规划中的备份有三种做法：完整备份按固定间隔进行（通常每周或每天，取决于信息或服务的关键程度），大型机构可以做轮转备份（保留最近若干次备份，每次新备份替换最旧的那份），选择性备份则只保存自上次备份以来被更改或新建的文件；此外还有异地备份与网络存储。灾难发生时可以启用冷站点（只有电力与空调、可以马上安装计算机系统开始运行的设施）或热站点（已装好并随时可运行的计算机设施，配有外设、通信线路、电源，甚至随时可以到位操作的人员）。",
          en: "The contents of a security policy are: identifying its audiences and describing the nature of each and their security goals, stating the purpose of the computing system, the resources needing protection and the nature of the protection to be supplied. The purpose section typically lists three to five goals such as promoting efficient business operation, facilitating sharing of information throughout the organisation, safeguarding business and personal information, ensuring accurate information is available to support business processes, ensuring a safe and productive place to work and complying with applicable laws and regulations; the protected resources section says which equipment and data the policy addresses; and the nature of the protection says who should have access to the protected items, how that access will be ensured and how unauthorised people will be denied access. A good security policy has four characteristics: coverage, since it must apply to or explicitly exclude all possible situations; durability; realism, since it must be possible to implement the stated requirements with existing technology; and usefulness, because an obscure or incomplete policy will not be implemented properly, if at all. Physical security describes the protection needed outside the computer system and covers natural disasters such as flood, fire and others; power loss, handled with an uninterruptible power supply and a surge suppressor; human vandals; unauthorised access and use; and theft, countered by preventing access, preventing portability and detecting theft. Protection against interception of sensitive information includes shredding, overwriting magnetic data and degaussing, and protection against emanation through Tempest, a U.S. government programme under which computer equipment is certified as emission-free, because computer screens emit signals that can be detected from a distance. Contingency planning uses three backup approaches: complete backups are done at regular intervals, usually weekly or daily depending on the criticality of the information or service; major installations may perform revolving backups in which the last several backups are kept and each new backup replaces the oldest; and selective backup saves only files that have been changed or created since the last backup; offsite backup and networked storage are also used. When disaster strikes a cold site, a facility with power and cooling available in which a computing system can be installed to begin immediate operation, or a hot site, a computer facility with an installed and ready-to-run computing system including peripherals, telecommunications lines, power supply and even personnel ready to operate on short notice, can be brought into use.",
          ms: "Kandungan dasar keselamatan ialah: mengenal pasti khalayaknya dan menerangkan sifat setiap khalayak serta matlamat keselamatan mereka, menyatakan tujuan sistem pengkomputeran, sumber yang perlu dilindungi dan sifat perlindungan yang hendak diberikan. Bahagian tujuan lazimnya menyenaraikan tiga hingga lima matlamat seperti mempromosikan operasi perniagaan yang cekap, memudahkan perkongsian maklumat dalam organisasi, melindungi maklumat perniagaan dan peribadi, memastikan maklumat tepat tersedia untuk menyokong proses perniagaan, memastikan tempat kerja yang selamat dan produktif serta mematuhi undang-undang dan peraturan yang terpakai; bahagian sumber terlindung menyatakan peralatan dan data yang ditangani dasar itu; manakala sifat perlindungan menyatakan siapa yang patut mempunyai akses kepada item terlindung, bagaimana akses itu dijamin dan bagaimana pihak tidak dibenarkan disekat. Dasar keselamatan yang baik mempunyai empat ciri: liputan kerana ia mesti terpakai atau secara jelas mengecualikan semua keadaan yang mungkin; ketahanan; realisme kerana keperluan yang dinyatakan mesti boleh dilaksanakan dengan teknologi sedia ada; dan kegunaan kerana dasar yang kabur atau tidak lengkap tidak akan dilaksanakan dengan betul, jika dilaksanakan sama sekali. Keselamatan fizikal menerangkan perlindungan yang diperlukan di luar sistem komputer dan merangkumi bencana alam seperti banjir, kebakaran dan lain-lain; kehilangan kuasa yang ditangani dengan bekalan kuasa tidak terputus dan penahan lonjakan; perosak manusia; akses dan penggunaan tanpa kebenaran; serta kecurian yang ditangani dengan menghalang akses, menghalang kebolehalihan dan mengesan kecurian. Perlindungan terhadap pemintasan maklumat sensitif termasuk mengoyak dokumen, menulis ganti data magnet dan menyahgaus, manakala perlindungan terhadap pemancaran melalui Tempest, iaitu program kerajaan Amerika Syarikat yang memperakui peralatan komputer sebagai bebas pemancaran, kerana skrin komputer memancarkan isyarat yang boleh dikesan dari jauh. Perancangan kontingensi menggunakan tiga pendekatan sandaran: sandaran lengkap dilakukan pada selang tetap, biasanya mingguan atau harian bergantung pada kekritikan maklumat atau perkhidmatan; pemasangan besar boleh melakukan sandaran berputar yang menyimpan beberapa sandaran terakhir dan setiap sandaran baharu menggantikan yang paling lama; manakala sandaran terpilih hanya menyimpan fail yang diubah atau dicipta sejak sandaran terakhir; sandaran luar tapak dan storan rangkaian juga digunakan. Apabila bencana berlaku, tapak sejuk iaitu kemudahan yang mempunyai bekalan kuasa dan penyejukan serta boleh dipasang sistem komputer untuk mula beroperasi dengan segera, atau tapak panas iaitu kemudahan komputer dengan sistem yang telah dipasang dan sedia berjalan termasuk peranti persisian, talian telekomunikasi, bekalan kuasa dan bahkan kakitangan yang sedia beroperasi dalam masa singkat, boleh digunakan."
        }
      ],
      terms: [
        {
          en: "Security Plan",
          zh: "安全计划",
          ms: "Pelan Keselamatan",
          def: {
            zh: "描述组织将如何满足其安全需求的文件，既是当前安全实践的正式记录，也是有序改进的蓝图，须涵盖政策、现状、需求、建议的控制、责任、时间表与持续关注。",
            en: "A document that describes how an organisation will address its security needs, both an official record of current practices and a blueprint for orderly change, covering policy, current state, requirements, recommended controls, accountability, timetable and continuing attention.",
            ms: "Dokumen yang menerangkan cara organisasi memenuhi keperluan keselamatannya, iaitu rekod rasmi amalan semasa dan pelan tindakan untuk perubahan teratur, merangkumi dasar, keadaan semasa, keperluan, kawalan yang dicadangkan, akauntabiliti, jadual waktu dan perhatian berterusan."
          }
        },
        {
          en: "Risk",
          zh: "风险",
          ms: "Risiko",
          def: {
            zh: "系统或其用户可能遇到的潜在问题，由风险影响、发生概率以及我们能改变结果的程度三件事界定。",
            en: "A potential problem that the system or its users may experience, defined by the risk impact, the likelihood of occurrence and the degree to which we can change the outcome.",
            ms: "Masalah berpotensi yang mungkin dialami sistem atau penggunanya, ditakrifkan oleh kesan risiko, kebarangkalian berlakunya dan tahap kemampuan kita mengubah kesudahannya."
          }
        },
        {
          en: "Risk Impact",
          zh: "风险影响",
          ms: "Kesan Risiko",
          def: {
            zh: "与某个事件相关的损失，是风险三要素之一。",
            en: "The loss associated with an event, one of the three elements of a risk.",
            ms: "Kerugian yang berkaitan dengan sesuatu peristiwa, salah satu daripada tiga unsur risiko."
          }
        },
        {
          en: "Risk Exposure",
          zh: "风险暴露",
          ms: "Pendedahan Risiko",
          def: {
            zh: "风险影响乘以风险概率得到的量化结果，例如概率 0.3 乘以 10 000 美元损失等于 3 000 美元。",
            en: "The risk impact multiplied by the risk probability, for example a likelihood of 0.3 times a $10,000 loss giving $3,000.",
            ms: "Kesan risiko didarab dengan kebarangkalian risiko, contohnya kebarangkalian 0.3 kali kerugian $10,000 menghasilkan $3,000."
          }
        },
        {
          en: "Risk Leverage",
          zh: "风险杠杆率",
          ms: "Daya Tuas Risiko",
          def: {
            zh: "风险暴露的减少量除以降低风险的成本，用来判断一项控制是否划算。",
            en: "The difference in risk exposure divided by the cost of reducing the risk, used to judge whether a control is worthwhile.",
            ms: "Perbezaan pendedahan risiko dibahagikan dengan kos mengurangkan risiko, digunakan untuk menilai sama ada sesuatu kawalan berbaloi."
          }
        },
        {
          en: "Risk Analysis",
          zh: "风险分析",
          ms: "Analisis Risiko",
          def: {
            zh: "对系统、其环境以及可能出错之处进行的仔细调查，分识别资产、确定脆弱性、估计被利用的可能性、计算预期年度损失、调查控制及其成本、预测节省六步。",
            en: "A careful investigation of the system, its environment and the things that might go wrong, in six steps: identify assets, determine vulnerabilities, estimate likelihood of exploitation, compute expected annual loss, survey controls and costs, and project savings.",
            ms: "Siasatan teliti terhadap sistem, persekitarannya dan perkara yang mungkin tersilap, dalam enam langkah: mengenal pasti aset, menentukan kerentanan, menganggarkan kebarangkalian eksploitasi, mengira jangkaan kerugian tahunan, meninjau kawalan serta kos, dan meramal penjimatan."
          }
        },
        {
          en: "Business Continuity Plan",
          zh: "业务连续性计划",
          ms: "Pelan Kesinambungan Perniagaan",
          def: {
            zh: "说明企业在计算机安全事件期间如何继续运作的文件，处理灾难性情形与长时间中断两类情况，步骤是评估业务影响、制定策略、制定并实施计划。",
            en: "A document describing how a business will continue to function during a computer security incident, dealing with catastrophic situations and long outages through assessing business impact, developing a strategy and developing and implementing the plan.",
            ms: "Dokumen yang menerangkan cara perniagaan terus berfungsi semasa insiden keselamatan komputer, menangani keadaan bencana dan gangguan berpanjangan melalui penilaian kesan perniagaan, pembangunan strategi serta pembangunan dan pelaksanaan pelan."
          }
        },
        {
          en: "Incident Response Plan",
          zh: "事件响应计划",
          ms: "Pelan Tindak Balas Insiden",
          def: {
            zh: "告诉员工如何处理安全事件的计划，目标是处理当前事件而不考虑业务问题，分事先计划、分诊与运行事件三个阶段，事后还有复盘阶段。",
            en: "A plan telling staff how to deal with a security incident, whose goal is handling the current incident without regard for business issues, with the phases of advance planning, triage and running the incident plus a review afterwards.",
            ms: "Pelan yang memberitahu kakitangan cara menangani insiden keselamatan, dengan matlamat menangani insiden semasa tanpa mengambil kira isu perniagaan, melalui fasa perancangan awal, triaj dan pengendalian insiden serta semakan selepasnya."
          }
        },
        {
          en: "Organizational Security Policy",
          zh: "组织安全政策",
          ms: "Dasar Keselamatan Organisasi",
          def: {
            zh: "高层管理文件，回答谁能以何种方式访问哪些资源，告知所有用户使用系统的目标与限制，是全部保护工作的基础。",
            en: "A high-level management document that answers who can access which resources in what manner and informs all users of the goals of and constraints on using a system; it is the foundation of all protection efforts.",
            ms: "Dokumen pengurusan peringkat tinggi yang menjawab siapa boleh mengakses sumber mana dengan cara bagaimana dan memaklumkan kepada semua pengguna matlamat serta kekangan penggunaan sistem; ia asas kepada semua usaha perlindungan."
          }
        },
        {
          en: "TCSEC",
          zh: "可信计算机系统评估准则",
          ms: "TCSEC",
          def: {
            zh: "美国国防部的准则，提出六项要求：安全政策、标识、标记、问责、保证与持续保护。",
            en: "The U.S. Department of Defense criteria that list six requirements: security policy, identification, marking, accountability, assurance and continuous protection.",
            ms: "Kriteria Jabatan Pertahanan Amerika Syarikat yang menyenaraikan enam keperluan: dasar keselamatan, pengenalpastian, penandaan, akauntabiliti, jaminan dan perlindungan berterusan."
          }
        },
        {
          en: "Requirements",
          zh: "安全需求",
          ms: "Keperluan Keselamatan",
          def: {
            zh: "安全计划的核心，是对系统提出的功能或性能要求，说明应该完成什么而不是如何完成，应具备正确、一致、完整、现实、必要、可验证与可追踪七个特征。",
            en: "The heart of the security plan: the functional or performance demands placed on a system that explain what should be accomplished rather than how, with the characteristics of correctness, consistency, completeness, realism, need, verifiability and traceability.",
            ms: "Teras pelan keselamatan: tuntutan fungsi atau prestasi yang dikenakan pada sistem yang menerangkan apa yang perlu dicapai dan bukan bagaimana, dengan ciri ketepatan, ketekalan, kelengkapan, realisme, keperluan sebenar, kebolehsahan dan kebolehkesanan."
          }
        },
        {
          en: "Physical Security",
          zh: "物理安全",
          ms: "Keselamatan Fizikal",
          def: {
            zh: "计算机系统之外所需的保护，包括防范自然灾害、断电、人为破坏、未授权访问与使用、盗窃以及敏感信息被截取。",
            en: "The protection needed outside the computer system, covering natural disasters, power loss, human vandals, unauthorised access and use, theft and interception of sensitive information.",
            ms: "Perlindungan yang diperlukan di luar sistem komputer, merangkumi bencana alam, kehilangan kuasa, perosak manusia, akses dan penggunaan tanpa kebenaran, kecurian serta pemintasan maklumat sensitif."
          }
        },
        {
          en: "Tempest",
          zh: "Tempest（防辐射泄漏）",
          ms: "Tempest",
          def: {
            zh: "美国政府的一项计划，为计算机设备认证其无（可检测的）电磁辐射，因为屏幕等设备发出的信号可在一定距离外被检测到。",
            en: "A U.S. government programme under which computer equipment is certified as emission-free, because screens and other devices emit signals that can be detected from a distance.",
            ms: "Program kerajaan Amerika Syarikat yang memperakui peralatan komputer sebagai bebas pemancaran, kerana skrin dan peranti lain memancarkan isyarat yang boleh dikesan dari jauh."
          }
        },
        {
          en: "Cold Site",
          zh: "冷站点",
          ms: "Tapak Sejuk",
          def: {
            zh: "只有电力与空调等基础设施、可以马上安装计算机系统开始运行的备用设施（也叫 shell）。",
            en: "A standby facility, also called a shell, with power and cooling available in which a computing system can be installed to begin immediate operation.",
            ms: "Kemudahan simpanan, juga dipanggil shell, yang mempunyai bekalan kuasa dan penyejukan serta boleh dipasang sistem komputer untuk mula beroperasi dengan segera."
          }
        },
        {
          en: "Hot Site",
          zh: "热站点",
          ms: "Tapak Panas",
          def: {
            zh: "已经装好并随时可运行的计算机设施，配有外设、通信线路、电源，甚至随时可以到位操作的人员。",
            en: "A computer facility with an installed and ready-to-run computing system, including peripherals, telecommunications lines, power supply and even personnel ready to operate on short notice.",
            ms: "Kemudahan komputer dengan sistem yang telah dipasang dan sedia berjalan, termasuk peranti persisian, talian telekomunikasi, bekalan kuasa dan bahkan kakitangan yang sedia beroperasi dalam masa singkat."
          }
        }
      ],
      diagrams: [
        {
          type: "cycle",
          title: {
            zh: "风险分析的六个步骤（构成持续循环）",
            en: "The Six Steps of a Risk Analysis (a Continuing Cycle)",
            ms: "Enam Langkah Analisis Risiko (Kitaran Berterusan)"
          },
          steps: [
            {
              label: {
                zh: "1. 识别资产",
                en: "1. Identify assets",
                ms: "1. Kenal pasti aset"
              }
            },
            {
              label: {
                zh: "2. 确定脆弱性",
                en: "2. Determine vulnerabilities",
                ms: "2. Tentukan kerentanan"
              }
            },
            {
              label: {
                zh: "3. 估计被利用的可能性",
                en: "3. Estimate likelihood of exploitation",
                ms: "3. Anggarkan kebarangkalian eksploitasi"
              }
            },
            {
              label: {
                zh: "4. 计算预期年度损失",
                en: "4. Compute expected annual loss",
                ms: "4. Kira jangkaan kerugian tahunan"
              }
            },
            {
              label: {
                zh: "5. 调查适用的控制及其成本",
                en: "5. Survey applicable controls and their costs",
                ms: "5. Tinjau kawalan berkenaan dan kosnya"
              }
            },
            {
              label: {
                zh: "6. 预测控制的年度节省",
                en: "6. Project annual savings of control",
                ms: "6. Ramal penjimatan tahunan kawalan"
              }
            }
          ],
          caption: {
            zh: "之所以画成循环，是因为计划必须持续关注：用户、数据与设备变化会产生新的暴露，现有控制可能过时，因此客体清单与控制清单要定期更新并重新做风险分析。",
            en: "It is drawn as a cycle because the plan must give continuing attention: changing users, data and equipment create new exposures and current controls may become obsolete, so the inventory of objects and the list of controls must be updated and the risk analysis performed anew.",
            ms: "Ia dilukis sebagai kitaran kerana pelan mesti memberi perhatian berterusan: perubahan pengguna, data dan peralatan menimbulkan pendedahan baharu dan kawalan semasa mungkin menjadi usang, jadi inventori objek dan senarai kawalan mesti dikemas kini dan analisis risiko dijalankan semula."
          }
        },
        {
          type: "tree",
          title: {
            zh: "安全计划的七项内容",
            en: "The Seven Contents of a Security Plan",
            ms: "Tujuh Kandungan Pelan Keselamatan"
          },
          root: {
            label: {
              zh: "安全计划",
              en: "Security Plan",
              ms: "Pelan Keselamatan"
            }
          },
          branches: [
            {
              label: {
                zh: "方向与现状",
                en: "Direction and current state",
                ms: "Hala tuju dan keadaan semasa"
              },
              leaves: [
                {
                  label: {
                    zh: "政策：安全工作的目标与实现意愿",
                    en: "Policy: goals of the security effort and willingness to achieve them",
                    ms: "Dasar: matlamat usaha keselamatan dan kesediaan mencapainya"
                  }
                },
                {
                  label: {
                    zh: "现状：计划制定时的安全状况与责任界限",
                    en: "Current state: the status of security and the limits of responsibility at the time of the plan",
                    ms: "Keadaan semasa: status keselamatan dan had tanggungjawab pada masa pelan dibuat"
                  }
                }
              ]
            },
            {
              label: {
                zh: "需求与控制",
                en: "Requirements and controls",
                ms: "Keperluan dan kawalan"
              },
              leaves: [
                {
                  label: {
                    zh: "需求：满足安全目标的功能或性能要求",
                    en: "Requirements: functional or performance demands that meet the security goals",
                    ms: "Keperluan: tuntutan fungsi atau prestasi yang memenuhi matlamat keselamatan"
                  }
                },
                {
                  label: {
                    zh: "建议的控制：把控制映射到已识别的脆弱性",
                    en: "Recommended controls: mapping controls to the identified vulnerabilities",
                    ms: "Kawalan dicadangkan: memetakan kawalan kepada kerentanan yang dikenal pasti"
                  }
                }
              ]
            },
            {
              label: {
                zh: "责任与进度",
                en: "Accountability and schedule",
                ms: "Akauntabiliti dan jadual"
              },
              leaves: [
                {
                  label: {
                    zh: "责任：每项安全活动由谁负责",
                    en: "Accountability: who is responsible for each security activity",
                    ms: "Akauntabiliti: siapa bertanggungjawab bagi setiap aktiviti keselamatan"
                  }
                },
                {
                  label: {
                    zh: "时间表：何时完成哪些安全职能，含里程碑",
                    en: "Timetable: when different security functions are to be done, with milestones",
                    ms: "Jadual waktu: bila fungsi keselamatan tertentu dilakukan, berserta pencapaian"
                  }
                }
              ]
            },
            {
              label: {
                zh: "持续关注",
                en: "Continuing attention",
                ms: "Perhatian berterusan"
              },
              leaves: [
                {
                  label: {
                    zh: "定期评审与更新计划的结构",
                    en: "A structure for periodically reviewing and updating the plan",
                    ms: "Struktur untuk menyemak dan mengemas kini pelan secara berkala"
                  }
                }
              ]
            }
          ]
        }
      ],
      exam: [
        {
          zh: "风险暴露与风险杠杆率的计算是本章唯一的定量考点：风险暴露 = 风险影响 × 风险概率（如病毒概率 0.3、清理成本 10 000 美元得 3 000 美元），风险杠杆率 = 风险暴露的减少量 ÷ 降低风险的成本；还要会看讲义那张控制成本表（风险 100 000 美元、有效性 60%、成本 25 000 美元，预期年度成本 65 000 美元，节省 35 000 美元）。",
          en: "Risk exposure and risk leverage are the only quantitative topics in this chapter: risk exposure equals risk impact times risk probability, for example a virus likelihood of 0.3 with a cleanup cost of $10,000 giving $3,000, and risk leverage is the difference in risk exposure divided by the cost of reducing the risk; you should also be able to read the control cost table from the lecture - a risk of $100,000, effectiveness of 60 per cent and a cost of $25,000 giving an expected annual cost of $65,000 and a saving of $35,000.",
          ms: "Pendedahan risiko dan daya tuas risiko ialah satu-satunya topik kuantitatif dalam bab ini: pendedahan risiko sama dengan kesan risiko didarab kebarangkalian risiko, contohnya kebarangkalian virus 0.3 dengan kos pembersihan $10,000 menghasilkan $3,000, manakala daya tuas risiko ialah perbezaan pendedahan risiko dibahagikan dengan kos mengurangkan risiko; anda juga perlu boleh membaca jadual kos kawalan dalam kuliah - risiko $100,000, keberkesanan 60 peratus dan kos $25,000 menghasilkan jangkaan kos tahunan $65,000 dan penjimatan $35,000."
        },
        {
          zh: "安全计划必须处理的七项内容是必背题：政策、现状、需求、建议的控制、责任、时间表与持续关注；TCSEC 的六项要求（安全政策、标识、标记、问责、保证、持续保护）也常以配对题出现——注意“标识”针对主体、“标记”针对客体、“问责”要求完整的安全记录、“持续保护”要求保护安全机制本身不被未授权更改。",
          en: "The seven issues a security plan must address are compulsory: policy, current state, requirements, recommended controls, accountability, timetable and continuing attention; the six TCSEC requirements - security policy, identification, marking, accountability, assurance and continuous protection - also appear as matching questions, so note that identification applies to subjects, marking to objects, accountability demands complete security records and continuous protection requires protecting the security mechanisms themselves from unauthorised change.",
          ms: "Tujuh perkara yang mesti ditangani oleh pelan keselamatan adalah wajib: dasar, keadaan semasa, keperluan, kawalan yang dicadangkan, akauntabiliti, jadual waktu dan perhatian berterusan; enam keperluan TCSEC - dasar keselamatan, pengenalpastian, penandaan, akauntabiliti, jaminan dan perlindungan berterusan - juga muncul sebagai soalan padanan, jadi ambil perhatian bahawa pengenalpastian terpakai pada subjek, penandaan pada objek, akauntabiliti menuntut rekod keselamatan yang lengkap dan perlindungan berterusan memerlukan mekanisme keselamatan itu sendiri dilindungi daripada perubahan tanpa kebenaran."
        },
        {
          zh: "业务连续性计划与事件响应计划的区别是易错点：前者的目标是让业务在事件期间继续运作（处理灾难性情形与长时间中断），后者的目标只是处理当前的安全事件而不管业务问题；事件响应还要记住三个阶段（事先计划、分诊、运行事件）与事后的复盘阶段，以及响应小组中指挥者、首席技术员与顾问的分工。",
          en: "The difference between the business continuity plan and the incident response plan is a common trap: the former aims to keep the business functioning during an incident, handling catastrophic situations and long outages, while the latter aims only to handle the current security incident without regard for business issues; for incident response you should also remember the three phases of advance planning, triage and running the incident, the review phase afterwards, and the division of labour among the director, lead technician and advisors.",
          ms: "Perbezaan antara pelan kesinambungan perniagaan dengan pelan tindak balas insiden ialah perangkap biasa: yang pertama bertujuan mengekalkan perniagaan berfungsi semasa insiden dengan menangani keadaan bencana dan gangguan berpanjangan, manakala yang kedua hanya bertujuan menangani insiden keselamatan semasa tanpa mengambil kira isu perniagaan; bagi tindak balas insiden anda juga perlu mengingati tiga fasa iaitu perancangan awal, triaj dan pengendalian insiden, fasa semakan selepasnya, serta pembahagian tugas antara pengarah, juruteknik utama dan penasihat."
        },
        {
          zh: "物理安全的细节也常考：防范辐射泄漏叫 Tempest（屏幕等设备发出的信号可在远处被检测到），销毁敏感信息有粉碎、覆写磁性数据与消磁三种手段，断电用 UPS 与浪涌抑制器应对，灾难恢复设施区分冷站点（只有电力与空调，需自行安装系统）与热站点（系统已装好、随时可运行，甚至有人员待命）。",
          en: "Physical security details are also examined: protection against emanation is called Tempest, since screens and similar devices emit signals detectable at a distance; destroying sensitive information can be done by shredding, overwriting magnetic data and degaussing; power loss is handled with a UPS and a surge suppressor; and disaster recovery facilities are distinguished as cold sites, which have power and cooling but need a system to be installed, and hot sites, which have an installed and ready-to-run system and even personnel on short notice.",
          ms: "Butiran keselamatan fizikal juga diuji: perlindungan terhadap pemancaran dipanggil Tempest kerana skrin dan peranti seumpamanya memancarkan isyarat yang boleh dikesan dari jauh; memusnahkan maklumat sensitif boleh dilakukan dengan mengoyak, menulis ganti data magnet dan menyahgaus; kehilangan kuasa ditangani dengan UPS dan penahan lonjakan; manakala kemudahan pemulihan bencana dibezakan sebagai tapak sejuk yang mempunyai kuasa dan penyejukan tetapi memerlukan pemasangan sistem, dan tapak panas yang mempunyai sistem sedia berjalan malah kakitangan dalam masa singkat."
        }
      ],
      mnemonic: {
        zh: "计划七件事记“政现需控责时续”；风险六步记“资脆可能损控省”；三种风险态度是避、转、担；应急设施冷站点能装、热站点能跑。",
        en: "The plan covers policy, current state, requirements, controls, accountability, timetable and continuing attention; risk analysis runs assets, vulnerabilities, likelihood, loss, controls and savings; the three risk strategies are avoid, transfer and assume; and a cold site can be fitted out while a hot site can run.",
        ms: "Pelan merangkumi dasar, keadaan semasa, keperluan, kawalan, akauntabiliti, jadual waktu dan perhatian berterusan; analisis risiko mengikut aset, kerentanan, kebarangkalian, kerugian, kawalan dan penjimatan; tiga strategi risiko ialah elak, pindah dan tanggung; manakala tapak sejuk boleh dilengkapkan dan tapak panas boleh terus berjalan."
      }
    },
    {
      id: "cs-08",
      num: 8,
      title: {
        zh: "程序与数据的保护：法律、隐私与伦理",
        en: "Protecting Programs and Data: Legal, Privacy and Ethical Issues",
        ms: "Perlindungan Program dan Data: Isu Undang-undang, Privasi dan Etika"
      },
      file: "cs/CHAPTER 8 - PROTECTING PROGRAMS AND DATA.pdf",
      pages: 71,
      summary: {
        zh: "本章讨论计算机安全的法律、隐私与伦理层面。法律并不总能提供充分的控制：法律还没有覆盖所有用计算机实施的不当行为，而且部分法官、律师与警察不了解计算机，难以判断计算问题与其他法律领域的关系。本章先讲保护程序与数据的三种法律手段——版权（保护思想的表达，有合理使用与年限，软件的算法属于思想，程序语句属于表达）、专利（保护真正新颖独特的发明，1981 年起扩展到计算机软件）与商业秘密（必须保密才有价值，可以只发布可执行程序而隐藏设计，但代码一旦被还原保护就消失），并比较三者的对象、公开要求、申请难度、期限与法律救济。接着讨论信息与法律（信息不可耗尽、可复制、边际成本极低、价值随时间变化、无形转移）、刑法与民法、侵权法与合同法，雇主与雇员之间的成果归属（职务作品、许可、雇员合同）以及软件缺陷的救济。最后讲计算机犯罪的取证与起诉困难、美国一系列相关法律（计算机欺诈与滥用法、经济间谍法、隐私法、电子通信隐私法、Gramm-Leach-Bliley 法、HIPAA、爱国者法、CAN SPAM 法、加州泄露通告法）与国际层面的网络犯罪公约、欧盟数据保护法，并以法律与伦理的区别以及后果论与规则论两种伦理原则作结。",
        en: "This chapter examines the legal, privacy and ethical dimensions of computer security. Law does not always provide an adequate control: laws do not yet address all improper acts committed with computers, and some judges, lawyers and police officers do not understand computing, so they cannot determine how computing relates to more established parts of the law. The chapter begins with the three legal devices for protecting programs and data - copyright, which protects the expression of ideas with fair use and a limited term, where the algorithm is the idea and the program statements are the expression; patents, which apply only to something truly novel and since 1981 have expanded to computer software; and trade secrets, which must be kept secret and allow the executable to be distributed while the design stays hidden, but lose their protection once the code is decoded - and compares their object, publication requirements, filing difficulty, duration and legal remedies. It then discusses information and law, criminal and civil law, tort law and contract law, ownership of products between employers and employees through work for hire, licences and employee contracts, and redress for software failures. Finally it covers the difficulty of prosecuting computer crime, the chain of custody of evidence and a series of U.S. laws - the Computer Fraud and Abuse Act, the Economic Espionage Act, the Privacy Act, the Electronic Communications Privacy Act, Gramm-Leach-Bliley, HIPAA, the USA Patriot Act, CAN SPAM and California's breach notification law - together with the Council of Europe cybercrime agreement, the E.U. Data Protection Act, and the differences between law and ethics with consequence-based and rules-based ethical principles.",
        ms: "Bab ini meneliti dimensi undang-undang, privasi dan etika dalam keselamatan komputer. Undang-undang tidak selalunya menyediakan kawalan yang mencukupi: ia belum menangani semua perbuatan tidak wajar yang dilakukan dengan komputer, dan sesetengah hakim, peguam serta pegawai polis tidak memahami pengkomputeran sehingga tidak dapat menentukan kaitannya dengan bidang undang-undang yang lebih mapan. Bab ini bermula dengan tiga alat undang-undang untuk melindungi program dan data - hak cipta yang melindungi ekspresi idea dengan penggunaan wajar serta tempoh terhad, iaitu algoritma ialah idea manakala penyataan program ialah ekspresinya; paten yang hanya terpakai pada sesuatu yang benar-benar baharu dan sejak 1981 telah diperluas kepada perisian komputer; dan rahsia dagang yang mesti dirahsiakan serta membolehkan fail boleh laksana diedarkan sementara reka bentuknya tersembunyi, tetapi hilang perlindungannya apabila kod dinyahkod - dan membandingkan objek, keperluan penerbitan, kesukaran pemfailan, tempoh serta remedi undang-undangnya. Seterusnya ia membincangkan maklumat dan undang-undang, undang-undang jenayah dan sivil, undang-undang tort dan kontrak, pemilikan produk antara majikan dengan pekerja melalui kerja atas upah, lesen dan kontrak pekerja, serta pemulihan bagi kegagalan perisian. Akhir sekali ia merangkumi kesukaran mendakwa jenayah komputer, rantaian jagaan bukti dan beberapa undang-undang Amerika Syarikat - Akta Penipuan dan Penyalahgunaan Komputer, Akta Pengintipan Ekonomi, Akta Privasi, Akta Privasi Komunikasi Elektronik, Gramm-Leach-Bliley, HIPAA, Akta Patriot, CAN SPAM dan undang-undang pemberitahuan pelanggaran California - berserta perjanjian jenayah siber Majlis Eropah, Akta Perlindungan Data Kesatuan Eropah, dan perbezaan antara undang-undang dengan etika melalui prinsip etika berasaskan akibat dan berasaskan peraturan."
      },
      points: [
        {
          zh: "法律并不总能提供充分的控制：法律还没有覆盖所有用计算机实施的不当行为，而且有些法官、律师和警察不了解计算技术，无法判断计算问题与其他更成熟的法律领域之间的关系，因此法律手段必须与其他安全控制配合使用。版权保护的是思想的表达而不是思想本身：思想是自由的，但一旦以有形媒介表达出来就应受到保护；版权的本意是让思想能够正常而自由地交流，它赋予作者复制该表达并出售给公众的专有权利。版权只适用于原创作品，保护期届满后作品进入公有领域，并且受合理使用约束——按作品原本用途使用、且不损害作者权利的行为（评论、批评、教学、学术研究）属于合理使用，不合理地使用受版权保护的对象就是盗版。",
          en: "Law does not always provide an adequate control: laws do not yet address all improper acts committed with computers, and some judges, lawyers and police officers do not understand computing, so they cannot determine how computing relates to other, more established parts of the law, which is why legal measures must be combined with other security controls. Copyright protects the expression of ideas rather than the ideas themselves: ideas are free, but once expressed in a tangible medium they must be protected, and the intention of a copyright is to allow regular and free exchange of ideas while giving the author the exclusive right to make copies of the expression and sell them to the public. Copyright applies only to original work, the work enters the public domain once the term expires, and it is subject to fair use - using a product in a manner for which it was intended without interfering with the author's rights, such as comment, criticism, teaching and scholarly research - while unfair use of a copyrighted object is called piracy.",
          ms: "Undang-undang tidak selalunya menyediakan kawalan yang mencukupi: ia belum menangani semua perbuatan tidak wajar yang dilakukan dengan komputer, dan sesetengah hakim, peguam serta pegawai polis tidak memahami pengkomputeran sehingga tidak dapat menentukan hubungannya dengan bidang undang-undang lain yang lebih mapan, sebab itulah langkah undang-undang mesti digabungkan dengan kawalan keselamatan yang lain. Hak cipta melindungi ekspresi idea dan bukan idea itu sendiri: idea adalah bebas, tetapi sebaik dinyatakan dalam medium maujud ia mesti dilindungi, dan tujuan hak cipta ialah membolehkan pertukaran idea secara teratur dan bebas sambil memberi penulis hak eksklusif menyalin ekspresi itu dan menjualnya kepada orang awam. Hak cipta hanya terpakai pada karya asli, karya itu memasuki domain awam apabila tempohnya tamat, dan ia tertakluk kepada penggunaan wajar - menggunakan produk dengan cara yang dimaksudkan tanpa menjejaskan hak penulis seperti komen, kritikan, pengajaran dan penyelidikan ilmiah - manakala penggunaan tidak wajar sesuatu objek berhak cipta dipanggil cetak rompak."
        },
        {
          zh: "版权期限有具体数字：美国版权现在延续到最后一位在世作者去世后 70 年，机构作品为出版后 95 年；国际标准是最后一位作者去世后 50 年或出版后 50 年。对于计算机软件，算法是思想、编程语言的语句是思想的表达，因此保护及于程序语句本身而不及于算法概念：照抄代码是被禁止的，但重新实现同一算法是允许的。1998 年的《数字千年版权法》（DMCA）规定数字对象可以受版权保护，绕过或使对象内置的反盗版功能失效是犯罪，制造、销售或分发能够使反盗版功能失效或能够复制数字对象的设备也是犯罪；但这类设备可以用于研究与教育目的，为防范硬件或软件故障而制作一份备份副本、或把副本存入档案也是可以接受的，图书馆可以为借给其他图书馆而制作最多三份数字对象的副本。麻烦之处在于判断什么算盗版，例如把音乐从 CD 转到 MP3 是否属于合理的合理使用。1997 年的美国《禁止电子盗窃法》（NET Act）规定即使不收费，复制或分发软件、数字录音等受版权保护的作品也是犯罪，购买软件只是取得了使用权。",
          en: "Copyright terms are specific: a U.S. copyright now lasts for 70 years beyond the death of the last surviving author, or 95 years after the date of publication for organisations, while the international standard is 50 years after the death of the last author or 50 years from publication. For computer software the algorithm is the idea and the statements of the programming language are the expression of the idea, so protection is allowed for the program statements themselves but not for the algorithmic concept: copying the code intact is prohibited, but re-implementing the algorithm is permitted. The Digital Millennium Copyright Act of 1998 provides that digital objects can be subject to copyright, that it is a crime to circumvent or disable antipiracy functionality built into an object, and that it is a crime to manufacture, sell or distribute devices that disable antipiracy functionality or copy digital objects; however such devices can be used, manufactured, sold or distributed for research and educational purposes, it is acceptable to make a backup copy of a digital object as protection against hardware or software failure or to store copies in an archive, and libraries can make up to three copies for lending to other libraries. The problem is deciding what is considered piracy, for example whether transferring music from a CD to MP3 counts as reasonable fair use. The U.S. No Electronic Theft (NET) Act of 1997 makes it criminal to reproduce or distribute copyrighted works such as software or digital recordings even without charge, and when you purchase software you only have the right to use it.",
          ms: "Tempoh hak cipta adalah khusus: hak cipta Amerika Syarikat kini bertahan 70 tahun selepas kematian penulis terakhir yang masih hidup, atau 95 tahun selepas tarikh penerbitan bagi organisasi, manakala piawaian antarabangsa ialah 50 tahun selepas kematian penulis terakhir atau 50 tahun dari penerbitan. Bagi perisian komputer, algoritma ialah idea dan penyataan bahasa pengaturcaraan ialah ekspresi idea itu, jadi perlindungan diberi kepada penyataan program itu sendiri dan bukan kepada konsep algoritma: menyalin kod secara bulat-bulat dilarang, tetapi melaksanakan semula algoritma itu dibenarkan. Akta Hak Cipta Milenium Digital 1998 menetapkan bahawa objek digital boleh tertakluk kepada hak cipta, memintas atau melumpuhkan fungsi antipencetak rompakan yang terbina dalam sesuatu objek adalah jenayah, dan menghasilkan, menjual atau mengedarkan peranti yang melumpuhkan fungsi antipencetak rompakan atau menyalin objek digital juga jenayah; namun peranti sedemikian boleh digunakan, dihasilkan, dijual atau diedarkan untuk tujuan penyelidikan dan pendidikan, membuat satu salinan sandaran objek digital sebagai perlindungan daripada kegagalan perkakasan atau perisian atau menyimpannya dalam arkib adalah dibenarkan, dan perpustakaan boleh membuat sehingga tiga salinan untuk dipinjamkan kepada perpustakaan lain. Masalahnya ialah menentukan apa yang dikira cetak rompak, contohnya sama ada memindahkan muzik daripada CD ke MP3 dikira penggunaan wajar. Akta Kecurian Elektronik (NET) Amerika Syarikat 1997 menjadikannya jenayah untuk memperbanyak atau mengedarkan karya berhak cipta seperti perisian atau rakaman digital walaupun tanpa bayaran, dan apabila anda membeli perisian anda hanya memiliki hak untuk menggunakannya."
        },
        {
          zh: "专利必须说服美国专利与商标局该发明值得授予专利：专利本意适用于科学、技术与工程的成果，只有真正新颖独特的东西才能获得有效的专利（一项发明通常只授一项专利），1981 年起专利法扩展到计算机软件。面对专利侵权指控，被指控方可以主张：两项发明差别足够大因而不构成侵权；专利无效（例如先前的侵权未被异议，专利权可能已经失效）；发明并不新颖（专利局当初授权有误）；或者自己才是先发明者，因而专利权应归自己。商业秘密是让一家公司比别人更有竞争优势的信息，与专利和版权不同，它必须被保密：员工不得披露秘密，所有者必须保护秘密（例如对文件加密、让员工签署不披露声明）。商业秘密保护的好处是可以在隐藏程序设计与内部秘密的同时分发秘密的成果（可执行程序），它不覆盖对产品（尤其是计算机程序）的复制，但把窃取秘密算法并用于另一产品定为非法。执法上的问题是程序或代码一旦被还原出来，商业秘密保护就消失了，因此还需要额外的保障措施，例如保存敏感文档的副本、控制对文件的访问。",
          en: "A patent requires convincing the U.S. Patent and Trademark Office that the invention deserves one: patents were intended to apply to the results of science, technology and engineering, a patent can be valid only for something truly novel or unique with usually one patent per invention, and since 1981 patent law has expanded to include computer software. Faced with an infringement claim, the alleged infringer may argue that the two inventions are sufficiently different that no infringement occurred; that the patent is invalid, for example because a prior infringement was not opposed so the rights may no longer be valid; that the invention is not novel and the Patent Office acted incorrectly in granting the patent; or that the infringer invented the object first, in which case the accused infringer rather than the original patent holder is entitled to the patent. A trade secret is information that gives one company a competitive edge over others and, unlike a patent or copyright, it must be kept a secret: employees should not disclose secrets and owners must protect them, for example with file encryption or by making employees sign a statement not to disclose a secret. Trade secret protection allows the result of the secret - the executable program - to be distributed while the program design stays hidden; it does not cover copying a product, specifically a computer program, but it makes it illegal to steal a secret algorithm and use it in another product. The enforcement problem is that once the program or code is decoded the trade secret protection disappears, so additional safeguards are needed, such as making copies of sensitive documents and controlling access to files.",
          ms: "Paten memerlukan pihak yang memohon meyakinkan Pejabat Paten dan Tanda Dagang Amerika Syarikat bahawa ciptaan itu memang wajar dipatenkan: paten pada asalnya terpakai pada hasil sains, teknologi dan kejuruteraan, sesuatu paten hanya sah bagi sesuatu yang benar-benar baharu atau unik dengan biasanya satu paten bagi satu ciptaan, dan sejak 1981 undang-undang paten telah diperluas kepada perisian komputer. Apabila dituduh melanggar paten, pihak yang dituduh boleh berhujah bahawa kedua-dua ciptaan itu cukup berbeza sehingga tiada pelanggaran berlaku; bahawa paten itu tidak sah, contohnya kerana pelanggaran terdahulu tidak dibantah sehingga haknya mungkin tidak lagi sah; bahawa ciptaan itu tidak baharu dan Pejabat Paten tersilap memberikannya; atau bahawa pihak yang dituduh mencipta objek itu lebih dahulu, lalu dialah dan bukan pemegang paten asal yang berhak atas paten tersebut. Rahsia dagang ialah maklumat yang memberi sesuatu syarikat kelebihan daya saing berbanding yang lain dan, tidak seperti paten atau hak cipta, ia mesti dirahsiakan: pekerja tidak boleh mendedahkan rahsia itu dan pemilik mesti melindunginya, contohnya melalui penyulitan fail atau dengan meminta pekerja menandatangani pernyataan untuk tidak mendedahkannya. Perlindungan rahsia dagang membolehkan hasil rahsia itu - iaitu program yang boleh dilaksanakan - diedarkan sementara reka bentuk programnya kekal tersembunyi; ia tidak meliputi penyalinan produk khususnya program komputer, tetapi menjadikannya haram untuk mencuri algoritma rahsia dan menggunakannya dalam produk lain. Masalah penguatkuasaannya ialah sebaik program atau kod itu dinyahkod, perlindungan rahsia dagang hilang, jadi langkah tambahan diperlukan seperti menyimpan salinan dokumen sensitif dan mengawal akses kepada fail."
        },
        {
          zh: "三种保护方式可以用一张表比较：版权保护思想的表达（不是思想本身），对象要公开（本意就是促进发表），必须分发，申请非常容易、自己就能做，期限是创作者终身加 70 年或公司作品共 95 年，遇未授权方销售可以起诉；专利保护发明（东西如何工作），设计要提交专利局，申请非常复杂、建议请专业律师，期限 19 年，发明被复制可以起诉；商业秘密保护秘密的竞争优势，不公开、不需申请、期限无限，秘密被不正当取得可以起诉。就计算机对象而言：硬件受专利保护；固件（芯片与微码）受专利保护，但其中的数据（算法、指令与程序）不可专利，芯片内的代码用商业秘密保护；目标码软件受版权保护；源代码软件既作为商业秘密又受版权保护；此外还有文档与网页内容。",
          en: "The three forms of protection can be compared in a table: copyright protects the expression of an idea rather than the idea itself, the protected object is made public because the intention is to promote publication, distribution is required, filing is very easy and can be done yourself, duration is the life of the human originator plus 70 years or 95 years in total for a company, and you sue if an unauthorised party sold it; patent protects the invention, the way something works, the design is filed at the Patent Office, filing is very complicated and a specialist lawyer is suggested, the duration is 19 years and you sue if the invention was copied; a trade secret protects a secret competitive advantage, is not published, needs no filing, lasts indefinitely and you sue if the secret was improperly obtained. As for computer objects, hardware is patented; firmware of chips and microcode is patented but the data inside it - algorithms, instructions and programs - are not patentable, so code inside a chip is protected as a trade secret; object code software is copyrighted; source code software is both a trade secret and copyrighted; and documentation and web content are further categories.",
          ms: "Ketiga-tiga bentuk perlindungan boleh dibandingkan dalam satu jadual: hak cipta melindungi ekspresi idea dan bukan idea itu sendiri, objek terlindung didedahkan kepada umum kerana tujuannya mempromosikan penerbitan, pengedaran diperlukan, pemfailan sangat mudah dan boleh dilakukan sendiri, tempohnya ialah hayat pencipta manusia ditambah 70 tahun atau 95 tahun bagi syarikat, dan anda menyaman jika pihak tidak dibenarkan menjualnya; paten melindungi ciptaan iaitu cara sesuatu berfungsi, reka bentuk difailkan di Pejabat Paten, pemfailan sangat rumit dan peguam pakar disyorkan, tempohnya 19 tahun dan anda menyaman jika ciptaan disalin; rahsia dagang melindungi kelebihan daya saing yang dirahsiakan, tidak diterbitkan, tidak memerlukan pemfailan, kekal tanpa had dan anda menyaman jika rahsia itu diperoleh secara tidak wajar. Bagi objek komputer, perkakasan dipatenkan; perisian tegar iaitu cip dan mikrokod dipatenkan tetapi data di dalamnya - algoritma, arahan dan program - tidak boleh dipatenkan, jadi kod dalam cip dilindungi sebagai rahsia dagang; perisian kod objek dilindungi hak cipta; perisian kod sumber ialah rahsia dagang dan juga berhak cipta; manakala dokumentasi dan kandungan web ialah kategori tambahan."
        },
        {
          zh: "信息作为一种法律客体有其特殊性：它不会被耗尽、可以重复使用；可以被复制，买家转售会使原销售者失去销路；边际成本极低（多生产一份信息的成本）；价值依赖时间（如股票市场价格）；而且往往以无形方式转移，因此当一份副本本身是准确的、而底层信息却是错误或无用时，很难主张信息有瑕疵。由此产生四类法律问题：信息商务（如何保护软件开发者与发行商免遭盗版）、电子出版（如何保护新闻机构与百科全书的网页内容不被侵犯版权）、数据库中的数据保护（如何保护、谁拥有数据、如何知道数据来自哪个数据库）以及电子商务（如何证明订单的交付条件未被破坏、没有迟到）。保护信息的法律分三类：刑法与民法、侵权法与合同法。制定法（statute）由立法者制定、由法院解释，明确规定某些行为违法，违反制定法会导致刑事审判；民事案件中个人、组织、公司或群体声称自己受到损害，民事案件的目标是恢复原状（restitution），即修复损害使受害者恢复到“完好”状态。侵权（tort）既非违反制定法也非违反合同，而是违背累积的先例，侵权法是不成文的，通过成为先例的法院判决不断发展，欺诈（fraud）是常见的侵权例子。合同包含三个要素：要约、承诺与对价，它是自愿的，可以填补刑法、民法与侵权法之间的空白，最常见的救济是金钱赔偿。",
          en: "Information as an object of law has special properties: it is not depletable and may be used repeatedly; it can be replicated so that a buyer can resell it and deprive the original seller of sales; it has a minimal marginal cost, the cost of producing additional information; its value is time dependent, as with a stock market price; and it is often transferred intangibly, so it is difficult to claim information is flawed when a copy is accurate while the underlying information is incorrect or useless. Four kinds of legal issue follow: information commerce, meaning how to protect software developers and publishers from piracy; electronic publishing, meaning how to protect news organisations and encyclopedias on the web from copyright infringement; protecting data in databases, meaning how to protect them, who owns the data and how to know which database the data came from; and electronic commerce, meaning how to prove that the conditions for delivery of an order were met without damage or delay. The law that protects information falls into criminal and civil law, tort law and contract law. Statutes are laws that explicitly state that certain actions are illegal, written by legislators and interpreted by the courts, and violation of a statute results in a criminal trial; in a civil case an individual, organisation, company or group claims it has been harmed, and the goal is restitution, making the victim whole again by repairing the harm. A tort is harm that occurs not from violation of a statute or breach of a contract but from being counter to the accumulated body of precedents; tort law is unwritten and evolves through court decisions that become precedents, and fraud, in which one person lies to another causing harm, is a common example. A contract involves an offer, an acceptance and a consideration; it is voluntary, helps fill the voids among criminal, civil and tort law, and the most common legal remedy in contract law is money.",
          ms: "Maklumat sebagai objek undang-undang mempunyai sifat khusus: ia tidak habis dan boleh digunakan berulang kali; ia boleh direplikasi sehingga pembeli boleh menjualnya semula dan menghilangkan jualan penjual asal; kos marginalnya minimum iaitu kos menghasilkan maklumat tambahan; nilainya bergantung pada masa seperti harga pasaran saham; dan ia sering dipindahkan secara tidak maujud, jadi sukar untuk mendakwa maklumat itu cacat apabila salinannya tepat sedangkan maklumat dasarnya salah atau tidak berguna. Empat jenis isu undang-undang timbul daripadanya: perdagangan maklumat iaitu cara melindungi pembangun dan penerbit perisian daripada cetak rompak; penerbitan elektronik iaitu cara melindungi organisasi berita dan ensiklopedia di web daripada pelanggaran hak cipta; perlindungan data dalam pangkalan data iaitu cara melindunginya, siapa memiliki data itu dan bagaimana mengetahui dari pangkalan data mana ia datang; serta e-dagang iaitu cara membuktikan syarat penghantaran pesanan dipenuhi tanpa kerosakan atau kelewatan. Undang-undang yang melindungi maklumat terbahagi kepada undang-undang jenayah dan sivil, undang-undang tort serta undang-undang kontrak. Statut ialah undang-undang yang menyatakan secara jelas bahawa tindakan tertentu adalah haram, digubal oleh penggubal undang-undang dan ditafsir oleh mahkamah, dan pelanggaran statut membawa kepada perbicaraan jenayah; dalam kes sivil seseorang individu, organisasi, syarikat atau kumpulan mendakwa dirinya dirugikan, dan matlamatnya ialah pemulihan iaitu membaiki kerosakan supaya mangsa kembali sempurna. Tort ialah kerosakan yang berlaku bukan kerana melanggar statut atau melanggar kontrak tetapi kerana bercanggah dengan himpunan preseden; undang-undang tort tidak bertulis dan berkembang melalui keputusan mahkamah yang menjadi preseden, dan penipuan iaitu seseorang berbohong kepada orang lain sehingga menyebabkan kerosakan ialah contoh biasa. Kontrak melibatkan tawaran, penerimaan dan balasan; ia bersifat sukarela, membantu mengisi kekosongan antara undang-undang jenayah, sivil dan tort, dan remedi undang-undang yang paling biasa dalam kontrak ialah wang."
        },
        {
          zh: "雇主与雇员之间的成果归属靠几种安排确定：如果雇员让雇主为某项发明申请专利，雇主就被视为拥有该专利以及发明的权利；如果雇员的职务本身就包括发明该产品，雇主有权申请专利。版权方面，作者（程序员）被推定为作品的拥有者并拥有对象的全部权利，但开发软件或其他产品时常常适用“职务作品”（work for hire），此时雇主而不是雇员被视为作者，判断起来并不容易且部分取决于雇佣所在州的法律；职务作品的成立条件包括雇主对创作方式有监督关系、有权解雇雇员、在作品创作之前就安排该工作（而不是出售已有的作品），以及双方有书面合同说明雇主雇用雇员做某项工作。许可是职务作品之外的另一种选择：程序员开发并保留软件的完全所有权，只授予公司使用该程序的许可，许可可以是确定期限或无期限、一份副本或无限份副本、在一个或多个地点使用、在一台或所有机器上使用、在指定时间或无限制时间使用。商业秘密保护没有登记的发明的发明人或作者，所有者可以起诉泄露者要求赔偿损失，商业秘密按机密数据保管。雇员合同则明确所有权，声明公司对开发的任何程序拥有包括版权与销售权在内的全部权利，并规定雇员同意不向任何人泄露这些秘密；更严格的合同会把全部发明（专利）与全部创作成果（版权）的权利转让给雇主，还可能要求雇员在离职后的一段时间内不得在同一领域竞争。",
          en: "Ownership of products between employer and employee is settled by several arrangements: if an employee lets an employer patent an invention, the employer is deemed to own the patent and therefore the rights to the invention, and the employer has the right to patent if the employee's job functions included inventing the product. For copyright, the author, meaning the programmer, is the presumed owner of the work and has all rights to an object, but work for hire applies to many copyrights for developing software or other products, in which the employer rather than the employee is considered the author; this is difficult to identify and depends in part on the laws of the state in which the employment occurs, and its conditions include that the employer has a supervisory relationship overseeing the manner in which the creative work is done, has the right to fire the employee, arranges for the work to be done before the work was created as opposed to selling an existing work, and has a written contract stating that the employer hired the employee to do certain work. A licence is an alternative to a work for hire: the programmer develops and retains full ownership of the software and grants a company a licence to use the program, which may be for a definite or unlimited period, for one copy or an unlimited number, to use at one location or many, on one machine or all, at specified or unlimited times. Trade secret protection has no registered inventor or author; the owner can prosecute a revealer for damages if the secret is revealed, and trade secrets are held as confidential data. An employee contract spells out rights of ownership, stating that the company claims all rights to any programs developed including all copyright rights and the right to market, and that the employee agrees not to reveal those secrets to anyone; more restrictive contracts assign to the employer the rights to all inventions and all creative works, and the employee may be asked not to compete by working in the same field for a set period after termination.",
          ms: "Pemilikan produk antara majikan dengan pekerja ditentukan oleh beberapa pengaturan: jika pekerja membenarkan majikan mempatenkan sesuatu ciptaan, majikan dianggap memiliki paten itu dan seterusnya hak atas ciptaan tersebut, dan majikan berhak mempatenkannya jika fungsi kerja pekerja itu termasuk mencipta produk berkenaan. Bagi hak cipta, penulis iaitu pengaturcara dianggap pemilik karya itu dan memiliki semua hak ke atas objek tersebut, tetapi kerja atas upah terpakai pada banyak hak cipta bagi pembangunan perisian atau produk lain, iaitu majikan dan bukan pekerja dianggap penulisnya; hal ini sukar dikenal pasti dan sebahagiannya bergantung pada undang-undang negeri tempat pekerjaan itu berlaku, dan syaratnya termasuk majikan mempunyai hubungan penyeliaan yang mengawasi cara kerja kreatif itu dilakukan, mempunyai hak memecat pekerja, mengatur kerja itu sebelum karya dicipta dan bukan menjual karya sedia ada, serta mempunyai kontrak bertulis yang menyatakan majikan mengupah pekerja untuk melakukan kerja tertentu. Lesen ialah alternatif kepada kerja atas upah: pengaturcara membangunkan dan mengekalkan pemilikan penuh perisian itu lalu memberikan syarikat lesen untuk menggunakannya, yang boleh bagi tempoh tertentu atau tanpa had, untuk satu salinan atau bilangan tanpa had, untuk digunakan di satu atau banyak lokasi, pada satu atau semua mesin, pada masa yang ditetapkan atau tanpa had. Perlindungan rahsia dagang tidak mempunyai pencipta atau penulis yang didaftarkan; pemilik boleh mendakwa pendedah untuk ganti rugi jika rahsia itu didedahkan, dan rahsia dagang disimpan sebagai data sulit. Kontrak pekerja menjelaskan hak pemilikan, menyatakan bahawa syarikat menuntut semua hak ke atas apa-apa program yang dibangunkan termasuk semua hak cipta dan hak memasarkan, serta bahawa pekerja bersetuju tidak mendedahkan rahsia itu kepada sesiapa; kontrak yang lebih ketat memindahkan kepada majikan hak ke atas semua ciptaan dan semua karya kreatif, dan pekerja mungkin diminta tidak bersaing dengan bekerja dalam bidang yang sama bagi tempoh tertentu selepas penamatan."
        },
        {
          zh: "软件缺陷的救济要问两个问题：质量在各种法律纠纷中扮演什么角色，以及发现软件缺陷时该怎么办。使用者对软件的“观感”不满意要求退款时，他们有权在合理期限内检查软件；希望软件“好用”时要知道大众市场软件很少一无是处，而且法律救济通常只是金钱赔偿，而不是强制厂商修好有缺陷的软件。计算机犯罪难以起诉的原因有六条：缺乏理解（法院、律师、警察与陪审员不一定懂计算机）、缺乏物证（警方与法院长期依赖指纹这类有形证据）、缺乏对资产的承认（计算机机时算不算资产）、缺乏政治影响（冷门的高科技犯罪得到的关注较少）、案件复杂（陪审员难以理解高科技复杂犯罪）以及被告年龄（许多计算机犯罪由青少年实施）。此外，规则上未授权访问计算机系统是犯罪，难点在于通过计算机实施的访问不涉及实物，可能无法作为犯罪处罚；证据规则上法院偏好原始文件而非副本，因为副本可能不准确或被修改，而展现计算机证据的真实性、建立“保管链”（确保在呈堂之前没有任何人有机会改动证据）都很困难。",
          en: "Redress for software failures raises two questions: what role quality plays in various legal disputes and what should be done when software faults are discovered. Users who dislike the look and feel and want a refund are entitled to a reasonable period to inspect the software, while those who want it to be good should know that mass-market software is seldom totally bad and that legal remedies typically result in monetary awards for damages rather than a mandate to fix the faulty software. Computer crime is hard to prosecute for six reasons: lack of understanding, since courts, lawyers, police agents and jurors do not necessarily understand computers; lack of physical evidence, because police and courts have for years depended on tangible evidence such as fingerprints; lack of recognition of assets, since it is questionable whether computer time is an asset; lack of political impact, because obscure high-tech crime receives less attention; complexity of the case, since jurors may have difficulty understanding complex high-tech crime; and the age of the defendant, because many computer crimes are committed by juveniles. In addition, under the rules of property unauthorised access to a computing system is a crime but access by a computer does not involve a physical object and so may not be punishable, and under the rules of evidence courts prefer an original source document to a copy because copies may be inaccurate or modified, while demonstrating the authenticity of computer-based evidence and establishing a chain of custody - ensuring nobody had the opportunity to alter the evidence before its presentation in court - are difficult.",
          ms: "Pemulihan bagi kegagalan perisian menimbulkan dua soalan: apakah peranan kualiti dalam pelbagai pertikaian undang-undang dan apakah yang perlu dilakukan apabila kecacatan perisian ditemui. Pengguna yang tidak menyukai rupa dan rasa perisian lalu mahukan wang dikembalikan berhak mendapat tempoh yang munasabah untuk memeriksa perisian itu, manakala mereka yang mahukan perisian yang baik perlu tahu bahawa perisian pasaran massa jarang benar-benar buruk dan remedi undang-undang biasanya hanya memberi ganti rugi wang dan bukan mandat untuk membaiki perisian yang cacat. Jenayah komputer sukar didakwa atas enam sebab: kekurangan pemahaman kerana mahkamah, peguam, pegawai polis dan juri tidak semestinya memahami komputer; kekurangan bukti fizikal kerana polis dan mahkamah sekian lama bergantung pada bukti maujud seperti cap jari; kekurangan pengiktirafan aset kerana boleh dipersoalkan sama ada masa komputer itu aset; kekurangan kesan politik kerana jenayah teknologi tinggi yang kurang menonjol kurang diberi perhatian; kerumitan kes kerana juri mungkin sukar memahami jenayah teknologi tinggi yang kompleks; dan umur defendan kerana banyak jenayah komputer dilakukan oleh remaja. Selain itu, dari segi peraturan harta, akses tanpa kebenaran ke sistem pengkomputeran ialah jenayah tetapi akses melalui komputer tidak melibatkan objek fizikal sehingga mungkin tidak boleh dihukum, manakala dari segi peraturan bukti mahkamah lebih mengutamakan dokumen sumber asal daripada salinan kerana salinan mungkin tidak tepat atau telah diubah, dan membuktikan kesahihan bukti berasaskan komputer serta membina rantaian jagaan - memastikan tiada sesiapa berpeluang mengubah bukti sebelum dikemukakan di mahkamah - adalah sukar."
        },
        {
          zh: "美国《计算机欺诈与滥用法》把未授权访问含有受国防或外交关系保护数据的计算机、某些银行或金融信息，未授权访问、使用、修改、销毁或泄露代表美国政府运行的计算机或其中的信息，以及未经许可访问“受保护的计算机”（法院现在解释为任何连上互联网的计算机）定为犯罪，刑罚从 5 000 至 100 000 美元或犯罪所得价值的两倍（取较高者），或 1 至 20 年监禁，或两者并处。其他相关法律还有《经济间谍法》（禁止利用计算机为外国或外国企业从事间谍活动或窃取商业秘密）与《电子资金划拨法》（禁止在州际或对外贸易中使用、运输、销售、接收或供应伪造、被盗、被改动、遗失或欺诈取得的借记工具）。隐私与信息自由方面的法律包括：《信息自由法》让公众可以获取行政部门收集的信息，除非数据落入国家安全或个人隐私等特定例外；1974 年《隐私法》保护政府收集的个人数据的隐私，允许个人知道自己被收集了哪些信息，并防止一个政府机构为另一目的访问另一机构收集的数据；1986 年《电子通信隐私法》防止电子窃听，其修正案要求互联网服务提供商在必要时安装设备以配合法院命令的窃听，同时允许服务商为维持服务而读取通信内容；1999 年《Gramm-Leach-Bliley 法》覆盖金融机构客户的隐私，客户有权拒绝把数据用于收集时必要业务用途之外的任何用途，并要求金融机构进行详细的安全风险评估、建立全面的安全计划。",
          en: "The U.S. Computer Fraud and Abuse Act criminalises unauthorised access to a computer containing data protected for national defence or foreign relations concerns or certain banking or financial information; unauthorised access, use, modification, destruction or disclosure of a computer, or information in a computer, operated on behalf of the U.S. government; and accessing without permission a protected computer, which the courts now interpret to include any computer connected to the Internet, with penalties ranging from $5,000 to $100,000 or twice the value obtained by the offence, whichever is higher, or imprisonment from one to twenty years, or both. Related laws include the Economic Espionage Act, which outlaws the use of a computer for foreign espionage to benefit a foreign country or business or the theft of trade secrets, and the Electronic Funds Transfer Act, which prohibits the use, transport, sale, receipt or supply of counterfeit, stolen, altered, lost or fraudulently obtained debit instruments in interstate or foreign commerce. Privacy and freedom of information laws include the Freedom of Information Act, which provides public access to information collected by the executive branch of the federal government and requires disclosure of any available data unless it falls under specific exceptions such as national security or personal privacy; the Privacy Act of 1974, which protects the privacy of personal data collected by the government, allows individuals to know what information has been collected about them and prevents one government agency from accessing data collected by another for another purpose; the Electronic Communications Privacy Act of 1986, which protects against electronic wiretapping and whose amendment requires Internet service providers to install equipment as needed to permit court-ordered wiretaps while allowing providers to read the content of communications in order to maintain service; and the Gramm-Leach-Bliley Act of 1999, which covers the privacy of data for customers of financial institutions, gives customers the opportunity to reject any use of the data beyond the necessary business uses for which it was collected and requires financial institutions to undergo a detailed security-risk assessment and have a comprehensive security programme.",
          ms: "Akta Penipuan dan Penyalahgunaan Komputer Amerika Syarikat mengkriminalkan akses tanpa kebenaran ke komputer yang mengandungi data yang dilindungi bagi kepentingan pertahanan negara atau hubungan luar atau maklumat perbankan dan kewangan tertentu; akses, penggunaan, pengubahsuaian, pemusnahan atau pendedahan tanpa kebenaran komputer atau maklumat dalam komputer yang dikendalikan bagi pihak kerajaan Amerika Syarikat; serta mengakses tanpa kebenaran komputer terlindung yang kini ditafsirkan mahkamah sebagai mana-mana komputer yang bersambung ke Internet, dengan hukuman antara $5,000 hingga $100,000 atau dua kali nilai yang diperoleh daripada kesalahan itu, yang mana lebih tinggi, atau penjara satu hingga dua puluh tahun, atau kedua-duanya. Undang-undang berkaitan termasuk Akta Pengintipan Ekonomi yang mengharamkan penggunaan komputer untuk pengintipan asing bagi manfaat negara atau perniagaan asing atau kecurian rahsia dagang, dan Akta Pemindahan Dana Elektronik yang melarang penggunaan, pengangkutan, penjualan, penerimaan atau pembekalan instrumen debit palsu, dicuri, diubah, hilang atau diperoleh secara fraud dalam perdagangan antara negeri atau asing. Undang-undang privasi dan kebebasan maklumat termasuk Akta Kebebasan Maklumat yang memberi orang awam akses kepada maklumat yang dikumpul oleh cabang eksekutif kerajaan persekutuan dan mewajibkan pendedahan mana-mana data yang tersedia kecuali ia termasuk dalam pengecualian tertentu seperti keselamatan negara atau privasi peribadi; Akta Privasi 1974 yang melindungi privasi data peribadi yang dikumpul oleh kerajaan, membolehkan individu mengetahui maklumat yang dikumpul tentang mereka dan menghalang satu agensi kerajaan daripada mengakses data yang dikumpul oleh agensi lain bagi tujuan lain; Akta Privasi Komunikasi Elektronik 1986 yang melindungi daripada penyadapan elektronik dan pindaannya mewajibkan penyedia perkhidmatan Internet memasang peralatan mengikut keperluan bagi membolehkan penyadapan yang diperintahkan mahkamah sambil membenarkan penyedia membaca kandungan komunikasi untuk mengekalkan perkhidmatan; serta Akta Gramm-Leach-Bliley 1999 yang meliputi privasi data pelanggan institusi kewangan, memberi pelanggan peluang menolak apa-apa penggunaan data melebihi penggunaan perniagaan yang perlu semasa ia dikumpul dan mewajibkan institusi kewangan menjalani penilaian risiko keselamatan yang terperinci serta memiliki program keselamatan yang menyeluruh."
        },
        {
          zh: "医疗与反恐、反垃圾邮件方面的法律：《健康保险流通与责任法》（HIPAA）第一部分涉及工人离职后维持健康保险覆盖的权利，第二部分要求保护个人医疗记录的隐私，医疗机构必须落实“按需知悉”、确保最小必要披露、指定隐私官、记录信息安全实践、追踪信息披露、建立供患者查阅与复制的办法，并至少每三年培训一次员工。2001 年《美国爱国者法》包含支持执法部门获取电子通信的条款，执法部门只需让法院相信目标可能是外国势力的代理人就能取得窃听令，其主要的计算机安全条款是对《计算机欺诈与滥用法》的修正。2003 年《CAN SPAM 法》禁止虚假或误导性的邮件头信息、禁止欺骗性主题行、要求商业邮件提供退订方式、禁止出售或转让已退订者的邮件地址，并要求商业邮件标明是广告。2003 年加州泄露通告法要求任何在加州经营的公司或加州政府机构，在个人信息的泄露已经或合理被认为已经危及任何加州居民时通知当事人，此后至少 20 个州也制定了某种形式的泄露通告要求。国际层面有三个议题：《欧洲理事会网络犯罪公约》要求批准国就黑客行为、与计算机有关的欺诈与伪造、未授权访问、侵犯版权、破坏网络与儿童色情制定类似的刑法；《欧盟数据保护法》规范个人数据（如姓名、地址、身份证号）的收集与存储，要求收集必须有商业目的并控制数据的披露；此外一些国家用法律限制允许进入本国的互联网内容，还有国家对密码学的使用加以管制，例如中国要求外国组织或个人在中国使用加密技术须申请许可。",
          en: "Health, counter-terrorism and anti-spam laws include HIPAA, whose first part concerned the rights of workers to maintain health insurance coverage after employment was terminated and whose second part required protection of the privacy of individuals' medical records, obliging healthcare providers to enforce need to know, ensure minimum necessary disclosure, designate a privacy officer, document information security practices, track disclosures, develop a method for patients' inspection and copying of their information, and train staff at least every three years. The USA Patriot Act of 2001 contains provisions supporting law enforcement's access to electronic communications, requiring only that law enforcement convince a court that a target is probably an agent of a foreign power in order to obtain a wiretap order, and its main computer security provision is an amendment to the Computer Fraud and Abuse Act. The CAN SPAM Act of 2003 bans false or misleading header information, prohibits deceptive subject lines, requires commercial e-mail to give recipients an opt-out method, bans sale or transfer of e-mail addresses of people who have opted out and requires commercial e-mail to be identified as an advertisement. California's breach notification law of 2003 requires any company doing business in California or any California government agency to notify individuals of any breach that has, or is reasonably believed to have, compromised personal information of any California resident, and at least twenty other states have since followed with some form of breach notification. At the international level there are three topics: the Council of Europe Agreement on Cybercrime requires countries that ratify it to adopt similar criminal laws on hacking, computer-related fraud and forgery, unauthorised access, infringements of copyright, network disruption and child pornography; the E.U. Data Protection Act governs the collection and storage of personal data about individuals such as name, address and identification numbers, requires a business purpose for collecting the data and controls against disclosure; and some countries have laws controlling the Internet content allowed in their countries, while others regulate the use of cryptography, for example China requires foreign organisations or individuals to apply for permission to use encryption in China.",
          ms: "Undang-undang kesihatan, antipengganasan dan antispam termasuk HIPAA yang bahagian pertamanya menyentuh hak pekerja mengekalkan perlindungan insurans kesihatan selepas pekerjaan ditamatkan dan bahagian keduanya mewajibkan perlindungan privasi rekod perubatan individu, mewajibkan penyedia penjagaan kesihatan melaksanakan keperluan untuk mengetahui, memastikan pendedahan minimum yang perlu, melantik pegawai privasi, mendokumentasikan amalan keselamatan maklumat, menjejaki pendedahan maklumat, membangunkan kaedah untuk pesakit memeriksa dan menyalin maklumat mereka, serta melatih kakitangan sekurang-kurangnya setiap tiga tahun. Akta Patriot Amerika Syarikat 2001 mengandungi peruntukan yang menyokong akses penguatkuasa undang-undang kepada komunikasi elektronik, hanya memerlukan penguatkuasa meyakinkan mahkamah bahawa sasaran berkemungkinan ejen kuasa asing untuk memperoleh perintah penyadapan, dan peruntukan keselamatan komputer utamanya ialah pindaan kepada Akta Penipuan dan Penyalahgunaan Komputer. Akta CAN SPAM 2003 mengharamkan maklumat pengepala yang palsu atau mengelirukan, melarang baris subjek yang menipu, mewajibkan e-mel komersial memberi kaedah penolakan, mengharamkan penjualan atau pemindahan alamat e-mel mereka yang telah menolak dan mewajibkan e-mel komersial dikenal pasti sebagai iklan. Undang-undang pemberitahuan pelanggaran California 2003 mewajibkan mana-mana syarikat yang berniaga di California atau mana-mana agensi kerajaan California memberitahu individu tentang apa-apa pelanggaran yang telah atau munasabah dipercayai telah menjejaskan maklumat peribadi mana-mana penduduk California, dan sekurang-kurangnya dua puluh negeri lain kemudian mengikutinya dengan beberapa bentuk pemberitahuan pelanggaran. Pada peringkat antarabangsa terdapat tiga topik: Perjanjian Jenayah Siber Majlis Eropah mewajibkan negara yang meratifikasinya mengadakan undang-undang jenayah yang serupa bagi penggodaman, penipuan dan pemalsuan berkaitan komputer, akses tanpa kebenaran, pelanggaran hak cipta, gangguan rangkaian dan pornografi kanak-kanak; Akta Perlindungan Data Kesatuan Eropah mengawal pengumpulan dan penyimpanan data peribadi individu seperti nama, alamat dan nombor pengenalan, mewajibkan tujuan perniagaan bagi pengumpulan data dan mengawal pendedahannya; manakala sesetengah negara mempunyai undang-undang yang mengawal kandungan Internet yang dibenarkan di negara mereka, dan yang lain mengawal selia penggunaan kriptografi, contohnya China mewajibkan organisasi atau individu asing memohon kebenaran untuk menggunakan penyulitan di China."
        },
        {
          zh: "伦理与法律不同：法律由正式的书面文件描述、由法院解释、由代表全体人民的立法机关制定、适用于每个人、两部法律冲突时由法院决定优先次序、法院是“权利”的最终裁决者并由警察与法院强制执行；伦理由不成文的原则描述、由每个人各自解释、由哲学家与专业团体提出、属于个人选择、两条原则冲突时由个人决定优先次序、没有外部裁决者且执行力度有限。伦理原则分两类：后果论原则依据行为对个人的后果（考虑哪个结果带来最大的未来好处与最小的伤害），或依据行为对整个社会的后果，即功利主义（该行为是否为所有人带来最大的集体好处、把所有人的负面影响降到最低）；规则论原则则依据个人从宗教、经验与分析中获得的规则，或依据人人都能明白的普遍规则。",
          en: "Ethics differs from law: law is described by a formal written document, interpreted by a court, established by legislatures representing all people, applicable to everyone, with priority determined by courts when two laws conflict, the court as the final arbiter of rights and enforcement by police and courts; ethics is described by unwritten principle, interpreted by each individual, presented by philosophers and professional groups, a matter of personal choice, with priority determined by the individual when two principles conflict, no external arbiter and limited enforcement. Ethical principles come in two families: consequence-based principles rest on the consequence of an action to the individual, considering which result is the greatest future good and the least harm, or on the consequence to all society in the principle of utilitarianism, asking whether the action brings the greatest collective good for all people with the least possible negative; rules-based principles rest on rules acquired by the individual through religion, experience and analysis, or on universal rules evident to everyone.",
          ms: "Etika berbeza daripada undang-undang: undang-undang diterangkan oleh dokumen bertulis yang formal, ditafsir oleh mahkamah, ditetapkan oleh penggubal undang-undang yang mewakili semua orang, terpakai kepada semua orang, keutamaannya ditentukan mahkamah apabila dua undang-undang bercanggah, mahkamah ialah penimbang tara muktamad bagi hak dan dikuatkuasakan oleh polis serta mahkamah; etika diterangkan oleh prinsip tidak bertulis, ditafsir oleh setiap individu, dikemukakan oleh ahli falsafah dan kumpulan profesional, merupakan pilihan peribadi, keutamaannya ditentukan individu apabila dua prinsip bercanggah, tiada penimbang tara luaran dan penguatkuasaannya terhad. Prinsip etika terbahagi kepada dua keluarga: prinsip berasaskan akibat bersandarkan akibat tindakan kepada individu dengan mempertimbangkan hasil yang memberi kebaikan masa depan terbesar dan kerosakan paling sedikit, atau bersandarkan akibat kepada seluruh masyarakat dalam prinsip utilitarianisme yang bertanya sama ada tindakan itu membawa kebaikan kolektif terbesar untuk semua orang dengan kesan negatif paling minimum; manakala prinsip berasaskan peraturan bersandarkan peraturan yang diperoleh individu melalui agama, pengalaman dan analisis, atau pada peraturan sejagat yang jelas kepada semua orang."
        }
      ],
      terms: [
        {
          en: "Copyright",
          zh: "版权",
          ms: "Hak Cipta",
          def: {
            zh: "保护思想表达的法律手段，给作者复制并出售该表达的专有权利，须为原创作品、有期限并受合理使用约束；软件的算法是思想、程序语句是表达。",
            en: "A legal device that protects the expression of ideas by giving the author the exclusive right to make and sell copies; it requires original work, lasts a limited term and is subject to fair use, and for software the algorithm is the idea while the program statements are the expression.",
            ms: "Alat undang-undang yang melindungi ekspresi idea dengan memberi penulis hak eksklusif menyalin dan menjualnya; ia memerlukan karya asli, bertempoh terhad dan tertakluk kepada penggunaan wajar, dan bagi perisian algoritma ialah idea manakala penyataan program ialah ekspresinya."
          }
        },
        {
          en: "Patent",
          zh: "专利",
          ms: "Paten",
          def: {
            zh: "保护发明的法律手段，只授予真正新颖独特的东西（一项发明通常一项专利），自 1981 年起扩展到计算机软件，期限 19 年。",
            en: "A legal device protecting an invention, granted only for something truly novel or unique with usually one patent per invention, extended to computer software since 1981 and lasting 19 years.",
            ms: "Alat undang-undang yang melindungi ciptaan, diberikan hanya bagi sesuatu yang benar-benar baharu atau unik dengan biasanya satu paten bagi satu ciptaan, diperluas kepada perisian komputer sejak 1981 dan bertahan 19 tahun."
          }
        },
        {
          en: "Trade Secret",
          zh: "商业秘密",
          ms: "Rahsia Dagang",
          def: {
            zh: "能给公司带来竞争优势的信息，必须被保密，没有登记也没有期限；它允许分发可执行程序而隐藏设计，但代码一旦被还原保护就消失。",
            en: "Information that gives a company a competitive edge and must be kept secret, with no registration and no time limit; it allows the executable to be distributed while the design stays hidden, but protection disappears once the code is decoded.",
            ms: "Maklumat yang memberi syarikat kelebihan daya saing dan mesti dirahsiakan, tanpa pendaftaran dan tanpa had masa; ia membolehkan fail boleh laksana diedarkan sementara reka bentuk tersembunyi, tetapi perlindungan hilang apabila kod dinyahkod."
          }
        },
        {
          en: "Fair Use",
          zh: "合理使用",
          ms: "Penggunaan Wajar",
          def: {
            zh: "按作品原本用途使用、不损害作者权利的行为，例如评论、批评、教学与学术研究；不合理使用受版权保护的对象就是盗版。",
            en: "Use of a product in a manner for which it was intended without interfering with the author's rights, such as comment, criticism, teaching and scholarly research; unfair use of a copyrighted object is piracy.",
            ms: "Penggunaan produk dengan cara yang dimaksudkan tanpa menjejaskan hak penulis seperti komen, kritikan, pengajaran dan penyelidikan ilmiah; penggunaan tidak wajar objek berhak cipta ialah cetak rompak."
          }
        },
        {
          en: "Piracy",
          zh: "盗版",
          ms: "Cetak Rompak",
          def: {
            zh: "不合理地使用受版权保护的对象，《禁止电子盗窃法》规定即使不收费，复制或分发受版权保护的作品也是犯罪。",
            en: "Unfair use of a copyrighted object; under the No Electronic Theft Act it is criminal to reproduce or distribute copyrighted works even without charge.",
            ms: "Penggunaan tidak wajar objek berhak cipta; di bawah Akta Kecurian Elektronik, memperbanyak atau mengedarkan karya berhak cipta adalah jenayah walaupun tanpa bayaran."
          }
        },
        {
          en: "Work for Hire",
          zh: "职务作品",
          ms: "Kerja atas Upah",
          def: {
            zh: "由雇主而非雇员被视为作者的情形，条件是雇主对创作方式有监督关系、有权解雇、在作品创作前安排工作并有书面合同。",
            en: "A situation in which the employer rather than the employee is considered the author, conditioned on a supervisory relationship, the right to fire, arranging the work before it was created and a written contract.",
            ms: "Keadaan apabila majikan dan bukan pekerja dianggap penulis, bersyaratkan hubungan penyeliaan, hak memecat, mengatur kerja sebelum karya dicipta dan kontrak bertulis."
          }
        },
        {
          en: "License",
          zh: "许可",
          ms: "Lesen",
          def: {
            zh: "职务作品之外的安排：程序员保留软件的完全所有权，只授予公司使用的权利，期限、副本数、地点与机器数都可约定。",
            en: "An alternative to work for hire in which the programmer retains full ownership of the software and grants a company only the right to use it, with the period, number of copies, locations and machines all negotiable.",
            ms: "Alternatif kepada kerja atas upah apabila pengaturcara mengekalkan pemilikan penuh perisian dan hanya memberi syarikat hak menggunakannya, dengan tempoh, bilangan salinan, lokasi dan mesin boleh dirunding."
          }
        },
        {
          en: "Statute",
          zh: "制定法",
          ms: "Statut",
          def: {
            zh: "由立法者制定、由法院解释、明确规定某些行为违法的法律，违反会导致刑事审判。",
            en: "A law written by legislators and interpreted by the courts that explicitly states that certain actions are illegal, whose violation results in a criminal trial.",
            ms: "Undang-undang yang digubal pengganti undang-undang dan ditafsir mahkamah yang menyatakan secara jelas bahawa tindakan tertentu haram, dan pelanggarannya membawa kepada perbicaraan jenayah."
          }
        },
        {
          en: "Tort Law",
          zh: "侵权法",
          ms: "Undang-undang Tort",
          def: {
            zh: "处理既非违反制定法也非违反合同、而是违背累积先例所造成的损害，是不成文的，通过成为先例的判决发展；欺诈是常见例子。",
            en: "Law dealing with harm that arises neither from violating a statute nor from breaching a contract but from being counter to the accumulated body of precedents; it is unwritten and evolves through decisions that become precedents, fraud being a common example.",
            ms: "Undang-undang yang menangani kerosakan yang timbul bukan kerana melanggar statut atau kontrak tetapi kerana bercanggah dengan himpunan preseden; ia tidak bertulis dan berkembang melalui keputusan yang menjadi preseden, dan penipuan ialah contoh biasa."
          }
        },
        {
          en: "Contract Law",
          zh: "合同法",
          ms: "Undang-undang Kontrak",
          def: {
            zh: "处理由要约、承诺与对价构成的合同，合同是自愿的，可以填补刑法、民法与侵权法之间的空白，最常见救济是金钱赔偿。",
            en: "Law dealing with contracts made up of an offer, an acceptance and a consideration; contracts are voluntary, help fill the voids among criminal, civil and tort law, and the most common remedy is money.",
            ms: "Undang-undang yang menangani kontrak yang terdiri daripada tawaran, penerimaan dan balasan; kontrak bersifat sukarela, membantu mengisi kekosongan antara undang-undang jenayah, sivil dan tort, dan remedi yang paling biasa ialah wang."
          }
        },
        {
          en: "Computer Fraud and Abuse Act",
          zh: "计算机欺诈与滥用法",
          ms: "Akta Penipuan dan Penyalahgunaan Komputer",
          def: {
            zh: "美国联邦法律，把未授权访问受保护计算机（法院解释为任何连上互联网的计算机）、政府计算机及金融数据定为犯罪，刑罚最高 100 000 美元或所得两倍及 20 年监禁。",
            en: "A U.S. federal law criminalising unauthorised access to protected computers - interpreted by the courts as any computer connected to the Internet - government computers and financial data, with penalties up to $100,000 or twice the value obtained and 20 years imprisonment.",
            ms: "Undang-undang persekutuan Amerika Syarikat yang mengkriminalkan akses tanpa kebenaran ke komputer terlindung - ditafsir mahkamah sebagai mana-mana komputer yang bersambung ke Internet - komputer kerajaan dan data kewangan, dengan hukuman sehingga $100,000 atau dua kali nilai yang diperoleh dan penjara 20 tahun."
          }
        },
        {
          en: "HIPAA",
          zh: "健康保险流通与责任法",
          ms: "HIPAA",
          def: {
            zh: "美国法律，第二部分要求保护个人医疗记录的隐私，医疗机构须落实按需知悉、最小必要披露、指定隐私官、记录安全实践、追踪披露、便利患者查阅并至少每三年培训员工。",
            en: "A U.S. law whose second part requires protection of the privacy of medical records, obliging providers to enforce need to know, ensure minimum necessary disclosure, designate a privacy officer, document security practices, track disclosures, facilitate patient inspection and train staff at least every three years.",
            ms: "Undang-undang Amerika Syarikat yang bahagian keduanya mewajibkan perlindungan privasi rekod perubatan, mewajibkan penyedia melaksanakan keperluan untuk mengetahui, memastikan pendedahan minimum yang perlu, melantik pegawai privasi, mendokumentasikan amalan keselamatan, menjejaki pendedahan, memudahkan pemeriksaan pesakit dan melatih kakitangan sekurang-kurangnya setiap tiga tahun."
          }
        },
        {
          en: "Chain of Custody",
          zh: "保管链",
          ms: "Rantaian Jagaan",
          def: {
            zh: "确保在证据呈堂之前没有任何人有机会以任何方式改动证据，这是计算机证据难以满足的要求之一。",
            en: "Ensuring that nobody has had the opportunity to alter the evidence in any way before its presentation in court, one of the difficult requirements for computer-based evidence.",
            ms: "Memastikan tiada sesiapa berpeluang mengubah bukti dalam apa-apa cara sebelum dikemukakan di mahkamah, salah satu keperluan sukar bagi bukti berasaskan komputer."
          }
        },
        {
          en: "Ethics",
          zh: "伦理",
          ms: "Etika",
          def: {
            zh: "规定普遍接受的正当行为标准，由不成文原则描述、由个人解释、属于个人选择，没有外部裁决者且执行力度有限。",
            en: "Generally accepted standards of proper behaviour, described by unwritten principles, interpreted by each individual and a matter of personal choice, with no external arbiter and limited enforcement.",
            ms: "Piawaian tingkah laku wajar yang diterima umum, diterangkan oleh prinsip tidak bertulis, ditafsir oleh setiap individu dan merupakan pilihan peribadi, tanpa penimbang tara luaran dan penguatkuasaan yang terhad."
          }
        },
        {
          en: "Utilitarianism",
          zh: "功利主义",
          ms: "Utilitarianisme",
          def: {
            zh: "依据行为对整个社会的后果来判断的伦理原则，问的是该行为是否为所有人带来最大的集体好处、把负面影响降到最低。",
            en: "A consequence-based ethical principle judging an action by its consequence to all society, asking whether it brings the greatest collective good for all people with the least possible negative.",
            ms: "Prinsip etika berasaskan akibat yang menilai tindakan mengikut kesannya kepada seluruh masyarakat, bertanya sama ada ia membawa kebaikan kolektif terbesar untuk semua orang dengan kesan negatif paling minimum."
          }
        }
      ],
      diagrams: [
        {
          type: "matrix",
          title: {
            zh: "版权、专利与商业秘密保护对比",
            en: "Comparing Copyright, Patent and Trade Secret Protection",
            ms: "Perbandingan Perlindungan Hak Cipta, Paten dan Rahsia Dagang"
          },
          cols: [
            {
              zh: "版权 Copyright",
              en: "Copyright",
              ms: "Hak Cipta"
            },
            {
              zh: "专利 Patent",
              en: "Patent",
              ms: "Paten"
            },
            {
              zh: "商业秘密 Trade Secret",
              en: "Trade Secret",
              ms: "Rahsia Dagang"
            }
          ],
          rows: [
            {
              head: {
                zh: "保护对象",
                en: "What is protected",
                ms: "Apa yang dilindungi"
              },
              cells: [
                {
                  zh: "思想的表达，不是思想本身",
                  en: "Expression of an idea, not the idea itself",
                  ms: "Ekspresi idea, bukan idea itu sendiri"
                },
                {
                  zh: "发明——东西如何工作",
                  en: "Invention - the way something works",
                  ms: "Ciptaan - cara sesuatu berfungsi"
                },
                {
                  zh: "秘密的竞争优势",
                  en: "A secret, competitive advantage",
                  ms: "Kelebihan daya saing yang dirahsiakan"
                }
              ]
            },
            {
              head: {
                zh: "对象是否公开",
                en: "Object made public",
                ms: "Objek didedahkan"
              },
              cells: [
                {
                  zh: "是，本意就是促进发表",
                  en: "Yes, the intention is to promote publication",
                  ms: "Ya, tujuannya mempromosikan penerbitan"
                },
                {
                  zh: "设计提交专利局",
                  en: "Design filed at the Patent Office",
                  ms: "Reka bentuk difailkan di Pejabat Paten"
                },
                {
                  zh: "否",
                  en: "No",
                  ms: "Tidak"
                }
              ]
            },
            {
              head: {
                zh: "是否必须分发",
                en: "Requirement to distribute",
                ms: "Keperluan mengedarkan"
              },
              cells: [
                {
                  zh: "是",
                  en: "Yes",
                  ms: "Ya"
                },
                {
                  zh: "是（通过公开换取保护）",
                  en: "Yes, disclosure in exchange for protection",
                  ms: "Ya, pendedahan sebagai tukaran perlindungan"
                },
                {
                  zh: "否",
                  en: "No",
                  ms: "Tidak"
                }
              ]
            },
            {
              head: {
                zh: "申请难度",
                en: "Ease of filing",
                ms: "Kemudahan pemfailan"
              },
              cells: [
                {
                  zh: "非常容易，自己就能办",
                  en: "Very easy, do-it-yourself",
                  ms: "Sangat mudah, boleh dilakukan sendiri"
                },
                {
                  zh: "非常复杂，建议请专业律师",
                  en: "Very complicated, a specialist lawyer is suggested",
                  ms: "Sangat rumit, peguam pakar disyorkan"
                },
                {
                  zh: "无需申请",
                  en: "No filing",
                  ms: "Tiada pemfailan"
                }
              ]
            },
            {
              head: {
                zh: "期限",
                en: "Duration",
                ms: "Tempoh"
              },
              cells: [
                {
                  zh: "创作者终身加 70 年，公司作品共 95 年",
                  en: "Life of the human originator plus 70 years, or 95 years in total for a company",
                  ms: "Hayat pencipta manusia ditambah 70 tahun, atau 95 tahun bagi syarikat"
                },
                {
                  zh: "19 年",
                  en: "19 years",
                  ms: "19 tahun"
                },
                {
                  zh: "无限期",
                  en: "Indefinite",
                  ms: "Tanpa had"
                }
              ]
            },
            {
              head: {
                zh: "法律救济",
                en: "Legal protection",
                ms: "Perlindungan undang-undang"
              },
              cells: [
                {
                  zh: "未授权方销售即可起诉",
                  en: "Sue if an unauthorised party sold it",
                  ms: "Saman jika pihak tidak dibenarkan menjualnya"
                },
                {
                  zh: "发明被复制即可起诉",
                  en: "Sue if the invention was copied",
                  ms: "Saman jika ciptaan disalin"
                },
                {
                  zh: "秘密被不正当取得即可起诉",
                  en: "Sue if the secret was improperly obtained",
                  ms: "Saman jika rahsia diperoleh secara tidak wajar"
                }
              ]
            }
          ],
          caption: {
            zh: "对计算机对象的选择是：硬件用专利，芯片内的微码与源代码用商业秘密，目标码软件用版权，源代码还可以同时受版权保护。",
            en: "For computer objects the choice is: hardware is patented, microcode inside a chip and source code are trade secrets, object code software is copyrighted, and source code can also be copyrighted.",
            ms: "Bagi objek komputer pilihannya ialah: perkakasan dipatenkan, mikrokod dalam cip dan kod sumber ialah rahsia dagang, perisian kod objek berhak cipta, dan kod sumber juga boleh berhak cipta."
          }
        },
        {
          type: "timeline",
          title: {
            zh: "本章涉及的主要美国法律时间线（1974—2003）",
            en: "Timeline of the Main U.S. Laws in This Chapter (1974-2003)",
            ms: "Garis Masa Undang-undang Amerika Syarikat Utama dalam Bab Ini (1974-2003)"
          },
          unit: {
            zh: "年（0 = 1974 年）",
            en: "Year (0 = 1974)",
            ms: "Tahun (0 = 1974)"
          },
          max: 32,
          bars: [
            {
              label: {
                zh: "1974 隐私法：保护政府收集的个人数据",
                en: "1974 Privacy Act: protects personal data collected by government",
                ms: "1974 Akta Privasi: melindungi data peribadi yang dikumpul kerajaan"
              },
              start: 0,
              len: 5,
              color: "a1"
            },
            {
              label: {
                zh: "1974 计算机欺诈与滥用法",
                en: "1974 Computer Fraud and Abuse Act",
                ms: "1974 Akta Penipuan dan Penyalahgunaan Komputer"
              },
              start: 0,
              len: 3,
              color: "a2"
            },
            {
              label: {
                zh: "1986 电子通信隐私法：禁止电子窃听",
                en: "1986 Electronic Communications Privacy Act: protects against electronic wiretapping",
                ms: "1986 Akta Privasi Komunikasi Elektronik: melindungi daripada penyadapan elektronik"
              },
              start: 12,
              len: 4,
              color: "a3"
            },
            {
              label: {
                zh: "1996 经济间谍法",
                en: "1996 Economic Espionage Act",
                ms: "1996 Akta Pengintipan Ekonomi"
              },
              start: 22,
              len: 3,
              color: "a4"
            },
            {
              label: {
                zh: "1997 禁止电子盗窃法（NET Act）",
                en: "1997 No Electronic Theft (NET) Act",
                ms: "1997 Akta Kecurian Elektronik (NET)"
              },
              start: 23,
              len: 3,
              color: "a5"
            },
            {
              label: {
                zh: "1998 数字千年版权法（DMCA）",
                en: "1998 Digital Millennium Copyright Act",
                ms: "1998 Akta Hak Cipta Milenium Digital"
              },
              start: 24,
              len: 3,
              color: "a6"
            },
            {
              label: {
                zh: "1999 Gramm-Leach-Bliley 法：金融客户数据隐私",
                en: "1999 Gramm-Leach-Bliley Act: privacy of financial customers' data",
                ms: "1999 Akta Gramm-Leach-Bliley: privasi data pelanggan kewangan"
              },
              start: 25,
              len: 4,
              color: "a1"
            },
            {
              label: {
                zh: "2001 美国爱国者法",
                en: "2001 USA Patriot Act",
                ms: "2001 Akta Patriot Amerika Syarikat"
              },
              start: 27,
              len: 3,
              color: "a2"
            },
            {
              label: {
                zh: "2003 CAN SPAM 法与加州泄露通告法",
                en: "2003 CAN SPAM Act and California breach notification law",
                ms: "2003 Akta CAN SPAM dan undang-undang pemberitahuan pelanggaran California"
              },
              start: 29,
              len: 3,
              color: "a3"
            }
          ],
          caption: {
            zh: "讲义强调法律总是滞后于技术：计算机犯罪的法律“不那么清晰”，需要新法律来应对新问题，而国际层面则通过《网络犯罪公约》与《欧盟数据保护法》尝试协调。",
            en: "The lecture stresses that law always lags behind technology: the law on computer crime is less clear and new laws are needed for new problems, while internationally the Cybercrime Convention and the E.U. Data Protection Act attempt harmonisation.",
            ms: "Kuliah menegaskan undang-undang sentiasa ketinggalan berbanding teknologi: undang-undang jenayah komputer kurang jelas dan undang-undang baharu diperlukan bagi masalah baharu, manakala di peringkat antarabangsa Konvensyen Jenayah Siber dan Akta Perlindungan Data Kesatuan Eropah cuba mengharmonikannya."
          }
        }
      ],
      exam: [
        {
          zh: "版权、专利与商业秘密的对比表是必考内容，尤其要注意三者容易混淆的性质：商业秘密必须保密、没有期限、不需要申请；专利只给真正新颖的东西、期限 19 年、申请复杂；版权保护表达而非思想、期限是终身加 70 年（公司 95 年）；软件方面要记住“算法是思想、程序语句是表达，照抄代码违法、重新实现算法合法”。",
          en: "The comparison table of copyright, patent and trade secret is compulsory, especially the easily confused natures of the three: a trade secret must be kept secret, has no time limit and needs no filing; a patent is granted only for something truly novel, lasts 19 years and is complicated to file; copyright protects expression rather than ideas and lasts the life of the author plus 70 years, or 95 for a company; and for software remember that the algorithm is the idea while the program statements are the expression, so copying code is prohibited but re-implementing the algorithm is permitted.",
          ms: "Jadual perbandingan hak cipta, paten dan rahsia dagang adalah wajib, terutama sifat ketiga-tiganya yang mudah dikelirukan: rahsia dagang mesti dirahsiakan, tiada had masa dan tidak memerlukan pemfailan; paten diberikan hanya bagi sesuatu yang benar-benar baharu, bertahan 19 tahun dan rumit difailkan; hak cipta melindungi ekspresi dan bukan idea serta bertahan hayat penulis ditambah 70 tahun, atau 95 tahun bagi syarikat; dan bagi perisian ingatlah bahawa algoritma ialah idea manakala penyataan program ialah ekspresi, jadi menyalin kod dilarang tetapi melaksanakan semula algoritma dibenarkan."
        },
        {
          zh: "计算机犯罪难以起诉的六个原因是常考简答题：缺乏理解、缺乏物证、缺乏对资产（如机时是否为资产）的承认、缺乏政治影响、案件复杂以及被告多为青少年；另外证据规则上法院偏好原始文件而非副本，因为副本可能不准确或被修改，而“保管链”要确保证据在呈堂前没有被人改动过。",
          en: "The six reasons computer crime is hard to prosecute are a common short-answer question: lack of understanding, lack of physical evidence, lack of recognition of assets such as whether computer time is an asset, lack of political impact, complexity of the case and the fact that many defendants are juveniles; in addition, the rules of evidence mean courts prefer an original source document to a copy because copies may be inaccurate or modified, and the chain of custody must show nobody could have altered the evidence before it was presented in court.",
          ms: "Enam sebab jenayah komputer sukar didakwa ialah soalan jawapan pendek yang biasa: kekurangan pemahaman, kekurangan bukti fizikal, kekurangan pengiktirafan aset seperti sama ada masa komputer itu aset, kekurangan kesan politik, kerumitan kes dan fakta bahawa banyak defendan ialah remaja; selain itu, peraturan bukti bermakna mahkamah lebih mengutamakan dokumen sumber asal daripada salinan kerana salinan mungkin tidak tepat atau telah diubah, dan rantaian jagaan mesti menunjukkan tiada sesiapa boleh mengubah bukti sebelum dikemukakan di mahkamah."
        },
        {
          zh: "法律与伦理的区别常以表格题出现：法律是正式的书面文件、由法院解释、由立法机关制定、适用于所有人、冲突时由法院定优先次序、由警察与法院强制执行；伦理是不成文原则、由个人解释、由哲学家与专业团体提出、属于个人选择、冲突时由个人决定、没有外部裁决者且执行有限。伦理原则再分后果论（对个人的后果、对全社会的功利主义）与规则论（个人通过宗教、经验与分析获得的规则、人人都明白的普遍规则）。",
          en: "The difference between law and ethics often appears as a table question: law is a formal written document, interpreted by a court, established by legislatures, applicable to everyone, with priority decided by courts when laws conflict and enforcement by police and courts; ethics is unwritten principle, interpreted by each individual, presented by philosophers and professional groups, a matter of personal choice, with priority decided by the individual and no external arbiter, and with limited enforcement. Ethical principles then divide into consequence-based ones, whether for the individual or for all society as utilitarianism, and rules-based ones, whether acquired by the individual through religion, experience and analysis or universal rules evident to everyone.",
          ms: "Perbezaan antara undang-undang dengan etika sering muncul sebagai soalan jadual: undang-undang ialah dokumen bertulis formal, ditafsir mahkamah, ditetapkan penggubal undang-undang, terpakai kepada semua orang, keutamaannya diputuskan mahkamah apabila bercanggah dan dikuatkuasakan polis serta mahkamah; etika ialah prinsip tidak bertulis, ditafsir setiap individu, dikemukakan ahli falsafah dan kumpulan profesional, merupakan pilihan peribadi, keutamaannya diputuskan individu dan tiada penimbang tara luaran, serta penguatkuasaannya terhad. Prinsip etika kemudiannya terbahagi kepada berasaskan akibat, sama ada kepada individu atau kepada seluruh masyarakat sebagai utilitarianisme, dan berasaskan peraturan, sama ada diperoleh individu melalui agama, pengalaman dan analisis atau peraturan sejagat yang jelas kepada semua orang."
        },
        {
          zh: "具体法律的适用场景容易配错，要记住几条主线：《计算机欺诈与滥用法》针对未授权访问，法院把“受保护的计算机”解释为任何连上互联网的计算机；HIPAA 保护医疗记录隐私并规定按需知悉、最小必要披露、隐私官与至少每三年培训；《Gramm-Leach-Bliley 法》管金融机构客户数据并允许客户拒绝必要业务用途之外的使用；《爱国者法》放宽了执法部门获取窃听令的门槛（只需证明目标可能是外国势力的代理人）；CAN SPAM 法禁止虚假邮件头与欺骗性主题行并要求退订机制。",
          en: "The scenarios for specific laws are easy to mismatch, so remember the main lines: the Computer Fraud and Abuse Act targets unauthorised access and the courts read protected computer as any computer connected to the Internet; HIPAA protects the privacy of medical records and requires need to know, minimum necessary disclosure, a privacy officer and training at least every three years; Gramm-Leach-Bliley covers financial institutions' customer data and lets customers reject uses beyond necessary business purposes; the Patriot Act lowers the threshold for law enforcement to obtain a wiretap order, needing only that the target is probably an agent of a foreign power; and CAN SPAM bans false headers and deceptive subject lines and requires an opt-out mechanism.",
          ms: "Senario bagi undang-undang tertentu mudah tersalah padan, jadi ingat garis utamanya: Akta Penipuan dan Penyalahgunaan Komputer menyasarkan akses tanpa kebenaran dan mahkamah mentafsirkan komputer terlindung sebagai mana-mana komputer yang bersambung ke Internet; HIPAA melindungi privasi rekod perubatan dan mewajibkan keperluan untuk mengetahui, pendedahan minimum yang perlu, pegawai privasi dan latihan sekurang-kurangnya setiap tiga tahun; Gramm-Leach-Bliley meliputi data pelanggan institusi kewangan dan membenarkan pelanggan menolak penggunaan melebihi tujuan perniagaan yang perlu; Akta Patriot merendahkan ambang penguatkuasa undang-undang untuk memperoleh perintah penyadapan, hanya memerlukan sasaran berkemungkinan ejen kuasa asing; manakala CAN SPAM mengharamkan pengepala palsu dan baris subjek yang menipu serta mewajibkan mekanisme penolakan."
        }
      ],
      mnemonic: {
        zh: "三件护身符：版权护表达、专利护发明、秘密靠保密；版权终身加 70、专利 19 年、商业秘密无限期；法律滞后于技术，伦理靠自觉，后果论问“好处最大吗”，规则论问“规则允许吗”。",
        en: "Three shields: copyright guards expression, patent guards invention, secrecy guards the trade secret; copyright lasts life plus 70, patent 19 years, a trade secret indefinitely; law lags behind technology, ethics relies on the individual, consequence-based ethics asks what brings the greatest good and rules-based ethics asks what the rules allow.",
        ms: "Tiga perisai: hak cipta menjaga ekspresi, paten menjaga ciptaan, kerahsiaan menjaga rahsia dagang; hak cipta bertahan hayat ditambah 70, paten 19 tahun, rahsia dagang tanpa had; undang-undang ketinggalan berbanding teknologi, etika bergantung pada individu, etika berasaskan akibat bertanya apa yang memberi kebaikan terbesar dan etika berasaskan peraturan bertanya apa yang dibenarkan peraturan."
      }
    }
  ]
};
