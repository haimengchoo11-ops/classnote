window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["dcn"] = {
  id: "dcn",
  chapters: {
    "dcn-01": [
      {
        id: "dcn-01-q01",
        type: "mcq",
        q: {
          zh: "某个数字传输系统每秒发送 2400 个信号元素，每个信号元素携带 4 个比特。该系统的波特率和比特率分别是多少？",
          en: "A digital transmission system sends 2400 signal elements per second, and each signal element carries 4 bits. What are the baud rate and the bit rate of this system?",
          ms: "Satu sistem penghantaran digital menghantar 2400 elemen isyarat sesaat dan setiap elemen isyarat membawa 4 bit. Apakah kadar baud dan kadar bit sistem ini?"
        },
        opts: [
          { zh: "600 baud 和 2400 bps", en: "600 baud and 2400 bps", ms: "600 baud dan 2400 bps" },
          { zh: "2400 baud 和 2400 bps", en: "2400 baud and 2400 bps", ms: "2400 baud dan 2400 bps" },
          { zh: "2400 baud 和 9600 bps", en: "2400 baud and 9600 bps", ms: "2400 baud dan 9600 bps" },
          { zh: "9600 baud 和 2400 bps", en: "9600 baud and 2400 bps", ms: "9600 baud dan 2400 bps" }
        ],
        answer: 2,
        explain: { zh: "波特率是每秒的信号变化（信号元素）数，所以是 2400 baud；比特率 = 波特率 × 每个信号元素携带的比特数 = 2400 × 4 = 9600 bps。选项 1 忘记乘以每元素比特数；选项 3 把乘法做成了除法，正好颠倒；选项 0 用 2400 ÷ 4 得到 600，方向也反了。", en: "Baud rate counts signal elements per second, so it is 2400 baud; bit rate = baud rate × bits per signal element = 2400 × 4 = 9600 bps. Option 1 forgets to multiply by the bits per element, option 3 inverts the relationship by dividing, and option 0 divides 2400 by 4 to get 600, which is also the wrong direction.", ms: "Kadar baud mengira elemen isyarat sesaat, jadi 2400 baud; kadar bit = kadar baud x bit per elemen isyarat = 2400 x 4 = 9600 bps. Pilihan 1 terlupa mendarab dengan bit per elemen, pilihan 3 menterbalikkan hubungan dengan membahagi, dan pilihan 0 membahagi 2400 dengan 4 hingga mendapat 600, iaitu arah yang salah." },
        diff: 2,
        topic: { zh: "比特率与波特率", en: "Bit rate versus baud rate", ms: "Kadar bit berbanding kadar baud" }
      },
      {
        id: "dcn-01-q02",
        type: "mcq",
        q: {
          zh: "一条无噪声信道的带宽为 3000 Hz，使用 4 个信号电平。按 Nyquist 公式，其最大比特率是多少？",
          en: "A noiseless channel has a bandwidth of 3000 Hz and uses 4 signal levels. According to the Nyquist formula, what is its maximum bit rate?",
          ms: "Satu saluran tanpa hingar mempunyai lebar jalur 3000 Hz dan menggunakan 4 tahap isyarat. Menurut formula Nyquist, apakah kadar bit maksimumnya?"
        },
        opts: [
          { zh: "6000 bps", en: "6000 bps", ms: "6000 bps" },
          { zh: "12000 bps", en: "12000 bps", ms: "12000 bps" },
          { zh: "3000 bps", en: "3000 bps", ms: "3000 bps" },
          { zh: "24000 bps", en: "24000 bps", ms: "24000 bps" }
        ],
        answer: 1,
        explain: { zh: "Nyquist 公式为 Bit Rate = 2 × 带宽 × log₂(L) = 2 × 3000 × log₂(4) = 2 × 3000 × 2 = 12000 bps。选项 0 漏掉了 log₂(4) = 2 这个因子；选项 2 既没有乘 2 也没有取对数；选项 3 直接把 L 当成乘数，用了 2 × 3000 × 4。", en: "The Nyquist formula gives Bit Rate = 2 × bandwidth × log2(L) = 2 × 3000 × log2(4) = 2 × 3000 × 2 = 12000 bps. Option 0 drops the log2(4) = 2 factor, option 2 applies neither the factor 2 nor the logarithm, and option 3 multiplies by L directly as 2 × 3000 × 4.", ms: "Formula Nyquist memberi Kadar Bit = 2 x lebar jalur x log2(L) = 2 x 3000 x log2(4) = 2 x 3000 x 2 = 12000 bps. Pilihan 0 menggugurkan faktor log2(4) = 2, pilihan 2 tidak menggunakan faktor 2 mahupun logaritma, dan pilihan 3 mendarab terus dengan L sebagai 2 x 3000 x 4." },
        diff: 2,
        topic: { zh: "Nyquist 公式", en: "Nyquist formula", ms: "Formula Nyquist" }
      },
      {
        id: "dcn-01-q03",
        type: "mcq",
        q: {
          zh: "一条带宽为 1000 Hz 的噪声信道，信噪比 SNR = 15。按 Shannon 公式，信道容量约为多少？",
          en: "A noisy channel has a bandwidth of 1000 Hz and a signal-to-noise ratio SNR = 15. Using Shannon's formula, what is the approximate channel capacity?",
          ms: "Satu saluran berhingar mempunyai lebar jalur 1000 Hz dan nisbah isyarat-hingar SNR = 15. Dengan formula Shannon, apakah kapasiti saluran yang hampir?"
        },
        opts: [
          { zh: "4000 bps", en: "4000 bps", ms: "4000 bps" },
          { zh: "2000 bps", en: "2000 bps", ms: "2000 bps" },
          { zh: "15000 bps", en: "15000 bps", ms: "15000 bps" },
          { zh: "16000 bps", en: "16000 bps", ms: "16000 bps" }
        ],
        answer: 0,
        explain: { zh: "Shannon 公式为 Capacity = 带宽 × log₂(1 + SNR) = 1000 × log₂(16) = 1000 × 4 = 4000 bps。选项 1 把 log₂(16) 误算成 2；选项 2 直接把 SNR 当成容量倍数而完全没有取对数；选项 3 用 1000 × 16，同样漏掉了 log₂。", en: "Shannon's formula gives Capacity = bandwidth × log2(1 + SNR) = 1000 × log2(16) = 1000 × 4 = 4000 bps. Option 1 misreads log2(16) as 2, option 2 treats SNR as the capacity multiplier without taking any logarithm, and option 3 uses 1000 × 16, again omitting the log2 term.", ms: "Formula Shannon memberi Kapasiti = lebar jalur x log2(1 + SNR) = 1000 x log2(16) = 1000 x 4 = 4000 bps. Pilihan 1 menyalah anggap log2(16) sebagai 2, pilihan 2 menganggap SNR sebagai pengganda kapasiti tanpa logaritma, dan pilihan 3 menggunakan 1000 x 16, juga menggugurkan sebutan log2." },
        diff: 2,
        topic: { zh: "Shannon 容量公式", en: "Shannon capacity formula", ms: "Formula kapasiti Shannon" }
      },
      {
        id: "dcn-01-q04",
        type: "mcq",
        q: {
          zh: "与模拟传输相比，数字传输为什么不会把噪声一层层放大？",
          en: "Compared with analog transmission, why does digital transmission avoid accumulating noise?",
          ms: "Berbanding penghantaran analog, mengapakah penghantaran digital tidak mengumpul hingar?"
        },
        opts: [
          { zh: "因为数字传输使用放大器，把信号和噪声按同一比例放大，信噪比保持不变", en: "Because digital transmission uses amplifiers that boost signal and noise by the same ratio, keeping the SNR constant", ms: "Kerana penghantaran digital menggunakan penguat yang menguatkan isyarat dan hingar pada nisbah sama, mengekalkan SNR" },
          { zh: "因为数字信号只在线路空闲时发送，从而避开噪声时段", en: "Because digital signals are sent only when the line is idle, avoiding noisy periods", ms: "Kerana isyarat digital hanya dihantar ketika talian kosong, mengelakkan tempoh berhingar" },
          { zh: "因为数字信号完全不受电磁干扰影响", en: "Because digital signals are completely immune to electromagnetic interference", ms: "Kerana isyarat digital sama sekali tidak terjejas oleh gangguan elektromagnet" },
          { zh: "因为中继器先还原原始数字数据，再重发干净信号，不会放大噪声", en: "Because a repeater recovers the original digital data and retransmits a clean signal, so it does not amplify noise", ms: "Kerana pengulang memulihkan data digital asal dan menghantar semula isyarat bersih, jadi ia tidak menguatkan hingar" }
        ],
        answer: 3,
        explain: { zh: "讲义对比了两种传输：模拟传输用放大器，放大器同时放大噪声；数字传输用中继器，先恢复原始数字数据再重发干净信号，因此噪声不会累积。选项 2 过于绝对，数字信号仍会受干扰，只是可用检错纠错恢复；选项 0 描述的正是模拟传输的缺点；选项 1 与噪声时段无关。", en: "The lecture contrasts the two: analog transmission uses amplifiers, which boost noise along with the signal, while digital transmission uses repeaters that recover the original data and retransmit a clean signal, so noise does not accumulate. Option 2 is too absolute because digital signals are still disturbed, only recoverable by error detection; option 0 describes analog transmission; option 1 is unrelated to noise mechanisms.", ms: "Kuliah membezakan kedua-duanya: penghantaran analog menggunakan penguat yang turut menguatkan hingar, manakala penghantaran digital menggunakan pengulang yang memulihkan data asal dan menghantar semula isyarat bersih, jadi hingar tidak terkumpul. Pilihan 2 terlalu mutlak kerana isyarat digital masih terganggu, cuma boleh dipulihkan; pilihan 0 menerangkan penghantaran analog; pilihan 1 tiada kaitan dengan mekanisme hingar." },
        diff: 2,
        topic: { zh: "模拟传输与数字传输", en: "Analog versus digital transmission", ms: "Penghantaran analog berbanding digital" }
      },
      {
        id: "dcn-01-q05",
        type: "mcq",
        q: {
          zh: "讲义对 UART 与 USART 的描述，下列哪项正确？",
          en: "Which statement correctly describes UART and USART as presented in the lecture?",
          ms: "Pernyataan manakah yang betul tentang UART dan USART seperti yang diterangkan dalam kuliah?"
        },
        opts: [
          { zh: "UART 把并行数据转换为串行数据，只用于异步通信；USART 同时支持同步与异步", en: "UART converts parallel data into serial data and works only asynchronously; USART supports both synchronous and asynchronous modes", ms: "UART menukar data selari kepada data bersiri dan hanya berfungsi secara tak segerak; USART menyokong mod segerak dan tak segerak" },
          { zh: "UART 把串行数据转换为并行数据，只用于同步通信；USART 只支持异步", en: "UART converts serial data into parallel data and works only synchronously; USART supports asynchronous mode only", ms: "UART menukar data bersiri kepada data selari dan hanya berfungsi secara segerak; USART hanya menyokong mod tak segerak" },
          { zh: "两者都只支持异步通信，区别只是 USART 的速度更快", en: "Both work only asynchronously; the only difference is that USART is faster", ms: "Kedua-duanya hanya berfungsi secara tak segerak; bezanya USART lebih pantas" },
          { zh: "USART 把模拟信号转换为数字信号，UART 则把数字信号转换为模拟信号", en: "USART converts analog signals into digital signals, while UART converts digital signals into analog signals", ms: "USART menukar isyarat analog kepada isyarat digital, manakala UART menukar isyarat digital kepada isyarat analog" }
        ],
        answer: 0,
        explain: { zh: "UART 是 Universal Asynchronous Receiver/Transmitter，负责把并行数据转成串行数据，只用于异步通信；USART 多了一个 S（Synchronous），因此同时支持同步与异步模式。选项 1 把转换方向和作用都改错；选项 2 忽略了 USART 的同步能力；选项 3 描述的是调制解调器（modem）的调制与解调。", en: "UART stands for Universal Asynchronous Receiver/Transmitter and converts parallel data into serial data for asynchronous communication; USART adds the S for synchronous, so it supports both synchronous and asynchronous modes. Option 1 reverses the conversion direction and the mode, option 2 ignores USART's synchronous capability, and option 3 describes the modulation and demodulation of a modem.", ms: "UART ialah Universal Asynchronous Receiver/Transmitter yang menukar data selari kepada data bersiri untuk komunikasi tak segerak; USART menambah S bagi segerak, jadi ia menyokong kedua-dua mod. Pilihan 1 menterbalikkan arah penukaran dan modnya, pilihan 2 mengabaikan keupayaan segerak USART, dan pilihan 3 menerangkan pemodulatan modem." },
        diff: 1,
        topic: { zh: "UART 与 USART", en: "UART and USART", ms: "UART dan USART" }
      },
      {
        id: "dcn-01-q06",
        type: "multi",
        q: {
          zh: "按讲义，下列哪些是数字传输的优点？",
          en: "According to the lecture, which of the following are advantages of digital transmission?",
          ms: "Menurut kuliah, yang manakah faedah penghantaran digital?"
        },
        opts: [
          { zh: "每个比特使用一条独立导线同时发送，因此速率更高", en: "Each bit uses its own separate wire and is sent simultaneously, giving a higher rate", ms: "Setiap bit menggunakan wayar berasingan dan dihantar serentak, memberi kadar lebih tinggi" },
          { zh: "准确性更高，可用差错检测与纠正技术降低噪声的影响", en: "Higher accuracy, because error detection and correction reduce the effect of noise", ms: "Ketepatan lebih tinggi kerana pengesanan dan pembetulan ralat mengurangkan kesan hingar" },
          { zh: "配合中继器可以传输更长的距离", en: "Longer distances can be covered with repeaters", ms: "Jarak yang lebih jauh boleh dicapai dengan pengulang" },
          { zh: "数字电子设备便宜且普及，因此设备成本更低", en: "Digital electronics are cheap and widely available, so equipment costs less", ms: "Elektronik digital murah dan mudah didapati, jadi kos peralatan lebih rendah" },
          { zh: "使用放大器放大信号，噪声也被同时放大，因此特别适合长距离传输", en: "It uses amplifiers that boost both signal and noise, which suits long-distance links", ms: "Ia menggunakan penguat yang menguatkan isyarat dan hingar, sesuai untuk pautan jauh" }
        ],
        answer: [1,2,3],
        explain: { zh: "讲义列出数字传输的优点包括：准确性更高（靠检错纠错抵抗噪声）、配合中继器传得更远、支持加密与时分复用（TDM）、更安全可靠、设备便宜且普及。选项 4 其实是模拟传输的缺点，放大器会同时放大噪声；选项 0 描述的是并行传输，而并行传输并不适合长距离。", en: "The lecture lists higher accuracy through error detection and correction, longer distance with repeaters, support for encryption and TDM multiplexing, better security and reliability, and cheaper widely available equipment. Option 4 is actually a drawback of analog transmission, where amplifiers boost noise too, and option 0 describes parallel transmission, which is unsuitable for long distances.", ms: "Kuliah menyenaraikan ketepatan lebih tinggi melalui pengesanan dan pembetulan ralat, jarak lebih jauh dengan pengulang, sokongan penyulitan dan pemultipleksan TDM, keselamatan dan kebolehpercayaan lebih baik, serta peralatan yang murah. Pilihan 4 sebenarnya kelemahan penghantaran analog yang menguatkan hingar, dan pilihan 0 menerangkan penghantaran selari yang tidak sesuai untuk jarak jauh." },
        diff: 2,
        topic: { zh: "数字传输的优点", en: "Advantages of digital transmission", ms: "Faedah penghantaran digital" }
      },
      {
        id: "dcn-01-q07",
        type: "tf",
        q: {
          zh: "在数字传输中，中继器（repeater）会恢复原始数字数据并重新发送干净信号，因此不会把噪声一起放大。",
          en: "In digital transmission, a repeater recovers the original digital data and retransmits a clean signal, so it does not amplify the noise.",
          ms: "Dalam penghantaran digital, pengulang memulihkan data digital asal dan menghantar semula isyarat bersih, jadi ia tidak menguatkan hingar."
        },
        answer: true,
        explain: { zh: "讲义在 Digital Transmission 一节说明中继器会「恢复原始数字数据」并「重新发送干净信号」，并特别强调 do NOT amplify noise。模拟传输使用放大器才同时放大噪声，这正是两者最关键的差别。", en: "The Digital Transmission section states that a repeater recovers the original digital data and retransmits a clean signal, and it explicitly says it does NOT amplify noise. Only analog transmission uses amplifiers that boost the noise as well, which is the key difference between the two.", ms: "Bahagian Penghantaran Digital menyatakan bahawa pengulang memulihkan data digital asal dan menghantar semula isyarat bersih, serta menegaskan ia TIDAK menguatkan hingar. Hanya penghantaran analog menggunakan penguat yang turut menguatkan hingar, dan inilah perbezaan utamanya." },
        diff: 1,
        topic: { zh: "中继器的作用", en: "Role of a repeater", ms: "Peranan pengulang" }
      },
      {
        id: "dcn-01-q08",
        type: "fill",
        q: {
          zh: "由多个正弦波组合而成的模拟信号称为 ______ 信号。",
          en: "An analog signal that is a combination of several sine waves is called a ______ signal.",
          ms: "Isyarat analog yang merupakan gabungan beberapa gelombang sinus dipanggil isyarat ______."
        },
        answer: ["composite","komposit","复合信号","isyarat komposit","composite signal"],
        explain: { zh: "讲义把模拟信号分为两类：单一正弦波的 simple signal 与多个正弦波组合的 composite signal。复合信号是实际语音、视频等信号的常态，simple signal 只是理论上的单一频率波形。", en: "The lecture divides analog signals into a simple signal, which is a single sine wave, and a composite signal, which combines multiple sine waves. Real speech and video are composite, while a simple signal is only a single-frequency theoretical waveform.", ms: "Kuliah membahagikan isyarat analog kepada isyarat ringkas, iaitu satu gelombang sinus, dan isyarat komposit yang menggabungkan beberapa gelombang sinus. Pertuturan dan video sebenar ialah isyarat komposit, manakala isyarat ringkas hanyalah gelombang satu frekuensi secara teori." },
        diff: 1,
        topic: { zh: "简单信号与复合信号", en: "Simple versus composite signals", ms: "Isyarat ringkas dan komposit" }
      }
    ],
    "dcn-02": [
      {
        id: "dcn-02-q01",
        type: "mcq",
        q: {
          zh: "下列哪一组「例子—传输模式」的对应符合讲义？",
          en: "Which pairing of example and transmission mode matches the lecture?",
          ms: "Pasangan contoh dengan mod penghantaran manakah yang menepati kuliah?"
        },
        opts: [
          { zh: "对讲机 = 半双工，电话网络 = 全双工", en: "Walkie-talkie = half-duplex, telephone network = full-duplex", ms: "Walkie-talkie = dupleks separa, rangkaian telefon = dupleks penuh" },
          { zh: "电话网络 = 半双工，对讲机 = 全双工", en: "Telephone network = half-duplex, walkie-talkie = full-duplex", ms: "Rangkaian telefon = dupleks separa, walkie-talkie = dupleks penuh" },
          { zh: "键盘到 CPU = 全双工，计算机到打印机 = 半双工", en: "Keyboard to CPU = full-duplex, computer to printer = half-duplex", ms: "Papan kekunci ke CPU = dupleks penuh, komputer ke pencetak = dupleks separa" },
          { zh: "对讲机 = 单工，电话网络 = 半双工", en: "Walkie-talkie = simplex, telephone network = half-duplex", ms: "Walkie-talkie = simpleks, rangkaian telefon = dupleks separa" }
        ],
        answer: 0,
        explain: { zh: "讲义把对讲机列为半双工（双方都能收发，但不能同时），把电话网络列为全双工（可以同时收发）。选项 1 正好把两者对调；选项 2 中键盘到 CPU 与计算机到打印机是单工的例子；选项 3 把对讲机说成单工、电话说成半双工，都不符合讲义。", en: "The lecture lists the walkie-talkie as half-duplex, where both sides can send and receive but not at the same time, and the telephone network as full-duplex, where both can do so simultaneously. Option 1 swaps them, option 2 turns the simplex examples of keyboard to CPU and computer to printer into duplex modes, and option 3 mislabels both examples.", ms: "Kuliah menyenaraikan walkie-talkie sebagai dupleks separa, iaitu kedua-dua pihak boleh menghantar dan menerima tetapi tidak serentak, dan rangkaian telefon sebagai dupleks penuh yang membolehkan kedua-duanya serentak. Pilihan 1 menukar keduanya, pilihan 2 menganggap contoh simpleks papan kekunci ke CPU sebagai dupleks, dan pilihan 3 menyalah label kedua-dua contoh." },
        diff: 1,
        topic: { zh: "单工/半双工/全双工", en: "Simplex, half-duplex and full-duplex", ms: "Simpleks, dupleks separa dan dupleks penuh" }
      },
      {
        id: "dcn-02-q02",
        type: "mcq",
        q: {
          zh: "关于 ASCII 与 EBCDIC 字符码，下列哪项符合讲义？",
          en: "Which statement about ASCII and EBCDIC character codes matches the lecture?",
          ms: "Pernyataan manakah tentang kod aksara ASCII dan EBCDIC yang menepati kuliah?"
        },
        opts: [
          { zh: "ASCII 用 8 位，EBCDIC 用 7 位，两者排列顺序相同", en: "ASCII uses 8 bits and EBCDIC uses 7 bits, and both use the same sequence", ms: "ASCII menggunakan 8 bit dan EBCDIC menggunakan 7 bit, dan kedua-duanya menggunakan urutan yang sama" },
          { zh: "两者都用 7 位，只是 EBCDIC 多了一个校验位", en: "Both use 7 bits; EBCDIC merely adds one parity bit", ms: "Kedua-duanya menggunakan 7 bit; EBCDIC hanya menambah satu bit pariti" },
          { zh: "EBCDIC 是 ASCII 的压缩版本，用 4 位表示一个字符", en: "EBCDIC is a compressed version of ASCII that uses 4 bits per character", ms: "EBCDIC ialah versi mampat ASCII yang menggunakan 4 bit bagi setiap aksara" },
          { zh: "ASCII 用 7 位二进制字表示字符，EBCDIC 用 8 位表示同一组字符但排列顺序不同", en: "ASCII uses a 7-bit binary word, while EBCDIC uses an 8-bit code for the same set of characters in a different sequence", ms: "ASCII menggunakan perkataan binari 7 bit, manakala EBCDIC menggunakan kod 8 bit bagi set aksara yang sama dalam urutan berbeza" }
        ],
        answer: 3,
        explain: { zh: "讲义写明 ASCII 是 7-bit binary word，可表示可打印字符、格式字符、数据链接与控制码；EBCDIC 是 8-bit binary code，表示与 ASCII 相同的字符集但顺序不同。选项 0 把位数对调并说顺序相同；选项 1、2 都虚构了讲义没有的说法。", en: "The lecture states that ASCII is a 7-bit binary word covering printable, formatting, data-link and control characters, while EBCDIC is an 8-bit binary code for the same character set in a different sequence. Option 0 swaps the bit widths and claims identical order, and options 1 and 2 invent details absent from the lecture.", ms: "Kuliah menyatakan ASCII ialah perkataan binari 7 bit yang merangkumi aksara boleh cetak, pemformatan, pautan data dan kawalan, manakala EBCDIC ialah kod binari 8 bit bagi set aksara yang sama dalam urutan berbeza. Pilihan 0 menukar lebar bit dan mendakwa urutan sama, manakala pilihan 1 dan 2 mencipta butiran yang tiada dalam kuliah." },
        diff: 2,
        topic: { zh: "ASCII 与 EBCDIC", en: "ASCII and EBCDIC", ms: "ASCII dan EBCDIC" }
      },
      {
        id: "dcn-02-q03",
        type: "mcq",
        q: {
          zh: "讲义列出三种传输损伤（transmission impairment）。下列哪一项不在其中？",
          en: "The lecture lists three transmission impairments. Which of the following is NOT one of them?",
          ms: "Kuliah menyenaraikan tiga kemerosotan penghantaran. Yang manakah BUKAN antaranya?"
        },
        opts: [
          { zh: "衰减（attenuation）", en: "Attenuation", ms: "Pengecilan (attenuation)" },
          { zh: "失真（distortion）", en: "Distortion", ms: "Herotan (distortion)" },
          { zh: "噪声（noise）", en: "Noise", ms: "Hingar (noise)" },
          { zh: "串扰（crosstalk）", en: "Crosstalk", ms: "Cakap silang (crosstalk)" }
        ],
        answer: 3,
        explain: { zh: "讲义明确指出传输介质并不完美，损伤分为 attenuation、distortion 与 noise 三类，并强调「送出的信号与收到的信号并不相同」。crosstalk 确实是现实中的干扰现象，但它不在讲义列出的三类之中，因此是本题要选的例外项。", en: "The lecture states that media are not perfect and lists exactly three impairments: attenuation, distortion and noise, stressing that what is sent is not what is received. Crosstalk is a real interference phenomenon, but it is not one of the three listed types, so it is the exception this question asks for.", ms: "Kuliah menyatakan media tidak sempurna dan menyenaraikan tepat tiga kemerosotan: pengecilan, herotan dan hingar, sambil menegaskan apa yang dihantar tidak sama dengan apa yang diterima. Cakap silang memang fenomena gangguan sebenar, tetapi bukan antara tiga jenis yang disenaraikan, jadi ia pilihan pengecualian." },
        diff: 1,
        topic: { zh: "传输损伤的分类", en: "Types of transmission impairment", ms: "Jenis kemerosotan penghantaran" }
      },
      {
        id: "dcn-02-q04",
        type: "mcq",
        q: {
          zh: "在 NRZ-I（不归零反转）编码中，比特值是如何表示的？",
          en: "In NRZ-I (non-return-to-zero invert) encoding, how are bit values represented?",
          ms: "Dalam pengekodan NRZ-I (non-return-to-zero invert), bagaimanakah nilai bit diwakili?"
        },
        opts: [
          { zh: "正电压表示 1，负电压表示 0", en: "Positive voltage means 1 and negative voltage means 0", ms: "Voltan positif bermaksud 1 dan voltan negatif bermaksud 0" },
          { zh: "电压电平发生反转表示 1，电平不变表示 0", en: "A inversion of the voltage level means 1, and no change means 0", ms: "Penyongsangan tahap voltan bermaksud 1, dan tiada perubahan bermaksud 0" },
          { zh: "每个比特中途电压都回到零电平", en: "The voltage returns to zero in the middle of every bit", ms: "Voltan kembali ke sifar pada pertengahan setiap bit" },
          { zh: "比特中间一定发生跳变，跳变方向决定比特值", en: "A transition always occurs mid-bit, and its direction determines the bit value", ms: "Peralihan sentiasa berlaku di tengah bit, dan arahnya menentukan nilai bit" }
        ],
        answer: 1,
        explain: { zh: "讲义说 NRZ-I（又称 NRZ-M）用「电压电平的反转」表示 1，用「电平不变」表示 0。选项 0 是 NRZ-L 的规则，由电平高低决定比特；选项 2 是 RZ 的特征；选项 3 描述的是 Manchester 等双相编码。", en: "The lecture says NRZ-I, also called NRZ-M, represents 1 by an inversion of the voltage level and 0 by no change. Option 0 is the NRZ-L rule where the level itself decides the bit, option 2 is characteristic of RZ, and option 3 describes biphase schemes such as Manchester.", ms: "Kuliah menyatakan NRZ-I, juga dipanggil NRZ-M, mewakili 1 dengan penyongsangan tahap voltan dan 0 dengan tiada perubahan. Pilihan 0 ialah peraturan NRZ-L yang menggunakan tahap itu sendiri, pilihan 2 ialah ciri RZ, dan pilihan 3 menerangkan pengekodan dwifasa seperti Manchester." },
        diff: 2,
        topic: { zh: "NRZ-L 与 NRZ-I", en: "NRZ-L and NRZ-I", ms: "NRZ-L dan NRZ-I" }
      },
      {
        id: "dcn-02-q05",
        type: "mcq",
        q: {
          zh: "在双极性 AMI 编码中，1 和 0 分别如何表示？",
          en: "In bipolar AMI encoding, how are 1 and 0 represented?",
          ms: "Dalam pengekodan bipolar AMI, bagaimanakah 1 dan 0 diwakili?"
        },
        opts: [
          { zh: "1 用正电压，0 用负电压，完全不使用零电平", en: "1 uses positive voltage and 0 uses negative voltage, with no zero level at all", ms: "1 menggunakan voltan positif dan 0 voltan negatif, tanpa tahap sifar sama sekali" },
          { zh: "每个比特的中途都回到零电压", en: "The signal returns to zero voltage in the middle of every bit", ms: "Isyarat kembali ke voltan sifar pada pertengahan setiap bit" },
          { zh: "1 交替使用正、负电压，0 用零电压", en: "1 alternates between positive and negative voltage, and 0 uses zero voltage", ms: "1 berselang antara voltan positif dan negatif, dan 0 menggunakan voltan sifar" },
          { zh: "1 用零电压，0 交替使用正、负电压", en: "1 uses zero voltage, and 0 alternates between positive and negative voltage", ms: "1 menggunakan voltan sifar, dan 0 berselang antara voltan positif dan negatif" }
        ],
        answer: 2,
        explain: { zh: "讲义解释 mark 在电报术语中就是 1，所以 AMI 即「交替的 1 反转」：连续的 1 交替取正、负电压，而二进制的 0 用中性零电压表示。选项 3 描述的是 pseudoternary，正好把 1 和 0 对调；选项 0 是 NRZ-L 的做法；选项 1 是 RZ 的特征。", en: "The lecture explains that mark means 1 in telegraphy, so AMI is alternate 1 inversion: successive 1s alternate between positive and negative voltage, while binary 0 uses the neutral zero voltage. Option 3 is pseudoternary with 1 and 0 swapped, option 0 is NRZ-L, and option 1 describes RZ.", ms: "Kuliah menjelaskan bahawa mark bermaksud 1 dalam telegrafi, jadi AMI ialah penyongsangan 1 berselang-seli: 1 berturut-turut berselang antara voltan positif dan negatif, manakala 0 binari menggunakan voltan sifar neutral. Pilihan 3 ialah pseudoternary dengan 1 dan 0 ditukar, pilihan 0 ialah NRZ-L, dan pilihan 1 menerangkan RZ." },
        diff: 2,
        topic: { zh: "双极性 AMI 与 pseudoternary", en: "Bipolar AMI and pseudoternary", ms: "Bipolar AMI dan pseudoternary" }
      },
      {
        id: "dcn-02-q06",
        type: "multi",
        q: {
          zh: "下列编码方案中，哪些属于讲义所说的双相（biphase）编码？",
          en: "Which of the following encoding schemes are biphase encoding according to the lecture?",
          ms: "Antara skema pengekodan berikut, yang manakah pengekodan dwifasa (biphase) menurut kuliah?"
        },
        opts: [
          { zh: "差分 Manchester 编码", en: "Differential Manchester encoding", ms: "Pengekodan Manchester pembezaan" },
          { zh: "双极性 AMI 编码", en: "Bipolar AMI encoding", ms: "Pengekodan bipolar AMI" },
          { zh: "Pseudoternary 编码", en: "Pseudoternary encoding", ms: "Pengekodan pseudoternary" },
          { zh: "Manchester 编码", en: "Manchester encoding", ms: "Pengekodan Manchester" },
          { zh: "NRZ-L 编码", en: "NRZ-L encoding", ms: "Pengekodan NRZ-L" }
        ],
        answer: [0,3],
        explain: { zh: "讲义说双相编码在比特间隔中间发生跳变但不回到零，并且只有两种实现方式：Manchester 与 Differential Manchester。NRZ-L 属于极性 NRZ 编码；AMI 与 pseudoternary 属于双极性（三电平）编码，都不在双相之列。", en: "The lecture says biphase encoding changes in the middle of the bit interval without returning to zero, and it is implemented in only two ways: Manchester and differential Manchester. NRZ-L is a polar NRZ scheme, while AMI and pseudoternary are bipolar three-level schemes, so none of them is biphase.", ms: "Kuliah menyatakan pengekodan dwifasa berubah di tengah selang bit tanpa kembali ke sifar, dan ia hanya dilaksanakan dalam dua cara: Manchester dan Manchester pembezaan. NRZ-L ialah skema NRZ polar, manakala AMI dan pseudoternary ialah skema bipolar tiga tahap, jadi kedua-duanya bukan dwifasa." },
        diff: 2,
        topic: { zh: "双相编码", en: "Biphase encoding", ms: "Pengekodan dwifasa" }
      },
      {
        id: "dcn-02-q07",
        type: "tf",
        q: {
          zh: "在半双工（half-duplex）模式下，两个站点可以同时发送和接收消息。",
          en: "In half-duplex mode, both stations can transmit and receive messages at the same time.",
          ms: "Dalam mod dupleks separa, kedua-dua stesen boleh menghantar dan menerima mesej pada masa yang sama."
        },
        answer: false,
        explain: { zh: "讲义说半双工下每台设备都能收发消息，但「不能同时」；能够同时收发的是全双工，例如电话网络。题干把半双工的定义改成「同时」，正好是它与全双工的分界点。", en: "The lecture says each device in half-duplex can both transmit and receive, but not at the same time; simultaneous two-way traffic is full-duplex, as in the telephone network. The statement replaces the defining restriction with simultaneity, which is exactly the boundary between the two modes.", ms: "Kuliah menyatakan setiap peranti dalam dupleks separa boleh menghantar dan menerima, tetapi tidak serentak; trafik dua hala serentak ialah dupleks penuh, seperti rangkaian telefon. Pernyataan itu menggantikan syarat penentu dengan keserentakan, iaitu tepat sempadan antara kedua-dua mod." },
        diff: 1,
        topic: { zh: "半双工的定义", en: "Definition of half-duplex", ms: "Takrif dupleks separa" }
      },
      {
        id: "dcn-02-q08",
        type: "fill",
        q: {
          zh: "把数字信息表示为介质上电压或电流图案的方法，称为线路 ______（line ______）。",
          en: "The method used to represent digital information on the media using a pattern of voltage or current is called line ______.",
          ms: "Kaedah mewakili maklumat digital pada media menggunakan corak voltan atau arus dipanggil ______ talian."
        },
        answer: ["encoding","coding","line encoding","line coding","pengekodan"],
        explain: { zh: "讲义把 line encoding（line coding）定义为在介质上表示数字信息的方法，用电压或电流的图案代表数字信号中的 1 和 0。它属于把比特转换成信号的环节，与调制（把信号搬到载波上）不同。", en: "The lecture defines line encoding, or line coding, as the method used to represent digital information on the media, using a pattern of voltage or current for the 1s and 0s. It is the step that turns bits into signals, and it differs from modulation, which moves a signal onto a carrier.", ms: "Kuliah mentakrifkan pengekodan talian sebagai kaedah mewakili maklumat digital pada media, menggunakan corak voltan atau arus bagi 1 dan 0. Ia ialah langkah menukar bit kepada isyarat dan berbeza daripada pemodulatan yang memindahkan isyarat ke pembawa." },
        diff: 2,
        topic: { zh: "线路编码", en: "Line encoding", ms: "Pengekodan talian" }
      }
    ],
    "dcn-03": [
      {
        id: "dcn-03-q01",
        type: "mcq",
        q: {
          zh: "关于错误检测（detection）与错误纠正（correction）的区别，下列哪项正确？",
          en: "Which statement correctly distinguishes error detection from error correction?",
          ms: "Pernyataan manakah yang betul membezakan pengesanan ralat daripada pembetulan ralat?"
        },
        opts: [
          { zh: "检测比纠正更难，因为检测必须重建原始码字", en: "Detection is harder than correction because detection must rebuild the original codeword", ms: "Pengesanan lebih sukar daripada pembetulan kerana pengesanan perlu membina semula kod kata asal" },
          { zh: "检测只需判断是否出错；纠正还必须知道出错比特的数目和位置", en: "Detection only decides whether an error occurred; correction must also know the number and the location of the corrupted bits", ms: "Pengesanan hanya menentukan sama ada ralat berlaku; pembetulan juga perlu tahu bilangan dan kedudukan bit yang rosak" },
          { zh: "检测必须知道出错位置；纠正只需回答是或否", en: "Detection must know the error location; correction only needs a yes or no answer", ms: "Pengesanan perlu tahu kedudukan ralat; pembetulan hanya perlukan jawapan ya atau tidak" },
          { zh: "两者都要知道出错位置，但纠正所需的冗余比特更少", en: "Both need the error location, but correction needs fewer redundant bits", ms: "Kedua-duanya perlu tahu kedudukan ralat, tetapi pembetulan memerlukan bit berlebihan yang lebih sedikit" }
        ],
        answer: 1,
        explain: { zh: "讲义说检测只回答「有没有错」，甚至不关心出错比特的数目；纠正则必须知道错误数目，更重要的是错误在报文中的位置，例如 8 位数据单元中纠正单个错误要考虑 8 个可能位置。选项 2 把两者说反；选项 3 错在「纠正需要的冗余更少」，讲义说纠正通常需要更多冗余；选项 0 也把难度说反。", en: "Detection only answers yes or no and is not even interested in how many bits are corrupted, while correction must know the exact number and, more importantly, the locations, as in the eight possible positions for one error in an 8-bit unit. Option 2 swaps the two roles, option 3 contradicts the lecture's point that correction needs more redundancy, and option 0 reverses the difficulty.", ms: "Pengesanan hanya menjawab ya atau tidak dan tidak mengambil kira bilangan bit yang rosak, manakala pembetulan mesti tahu bilangan dan, lebih penting, kedudukannya, seperti lapan kedudukan mungkin bagi satu ralat dalam unit 8 bit. Pilihan 2 menukar peranan, pilihan 3 bercanggah dengan kenyataan bahawa pembetulan memerlukan lebih banyak lebihan, dan pilihan 0 menterbalikkan tahap kesukaran." },
        diff: 2,
        topic: { zh: "检测与纠正的区别", en: "Detection versus correction", ms: "Pengesanan berbanding pembetulan" }
      },
      {
        id: "dcn-03-q02",
        type: "mcq",
        q: {
          zh: "数据单元 1001001 采用奇校验（odd parity）传输，发送出去的码字是？",
          en: "The data unit 1001001 is transmitted with odd parity. Which codeword is sent?",
          ms: "Unit data 1001001 dihantar dengan pariti ganjil. Kod kata manakah yang dihantar?"
        },
        opts: [
          { zh: "10010011", en: "10010011", ms: "10010011" },
          { zh: "01001001", en: "01001001", ms: "01001001" },
          { zh: "1001001", en: "1001001", ms: "1001001" },
          { zh: "10010010", en: "10010010", ms: "10010010" }
        ],
        answer: 3,
        explain: { zh: "1001001 中共有 3 个 1，已经是奇数，所以奇校验只需补一个 0，码字为 10010010。选项 0 的校验位取 1，会使 1 的总数变成 4（偶数），那是偶校验的结果；选项 1 把校验位放到最前面而不是末尾；选项 2 根本没有附加校验位。", en: "The data 1001001 contains three 1s, already odd, so odd parity only needs a 0 appended, giving 10010010. Option 0 sets the parity bit to 1, making four 1s, which is the even-parity result; option 1 places the parity bit at the front instead of the end, and option 2 adds no parity bit at all.", ms: "Data 1001001 mengandungi tiga bit 1, sudah ganjil, jadi pariti ganjil hanya perlu menambah 0, menghasilkan 10010010. Pilihan 0 menetapkan bit pariti kepada 1 sehingga menjadi empat bit 1, iaitu hasil pariti genap; pilihan 1 meletakkan bit pariti di hadapan dan pilihan 2 tidak menambah bit pariti." },
        diff: 2,
        topic: { zh: "奇偶校验的计算", en: "Computing a parity bit", ms: "Pengiraan bit pariti" }
      },
      {
        id: "dcn-03-q03",
        type: "mcq",
        q: {
          zh: "讲义中的二维奇偶校验（VRC/LRC）用什么运算来计算校验位？",
          en: "Which operation is used to calculate the parity bits in the two-dimensional parity check (VRC/LRC) described in the lecture?",
          ms: "Operasi manakah digunakan untuk mengira bit pariti dalam semakan pariti dua dimensi (VRC/LRC) dalam kuliah?"
        },
        opts: [
          { zh: "二进制多项式除法", en: "Binary polynomial division", ms: "Pembahagian polinomial binari" },
          { zh: "十进制求和后取余数", en: "Decimal addition followed by taking a remainder", ms: "Penambahan perpuluhan diikuti pengambilan baki" },
          { zh: "XOR（异或）", en: "XOR (exclusive OR)", ms: "XOR (atau eksklusif)" },
          { zh: "一的补码加法", en: "One's complement addition", ms: "Penambahan pelengkap satu" }
        ],
        answer: 2,
        explain: { zh: "讲义给出 XOR 真值表（相同为 0、相异为 1），并说明 VRC 与 LRC 的计算都使用 XOR。一的补码加法是 checksum 的做法；多项式除法是 CRC 的做法；十进制求和取余并不是讲义列出的任何一种方法。", en: "The lecture provides the XOR truth table, where equal bits give 0 and different bits give 1, and states that both VRC and LRC are computed with XOR. One's complement addition belongs to the checksum method, polynomial division belongs to CRC, and decimal addition with a remainder is not a method the lecture lists.", ms: "Kuliah menyediakan jadual kebenaran XOR, iaitu bit sama memberi 0 dan bit berbeza memberi 1, dan menyatakan VRC serta LRC dikira dengan XOR. Penambahan pelengkap satu ialah kaedah checksum, pembahagian polinomial ialah CRC, dan penambahan perpuluhan dengan baki bukan kaedah yang disenaraikan." },
        diff: 1,
        topic: { zh: "二维奇偶校验 VRC/LRC", en: "Two-dimensional parity VRC/LRC", ms: "Pariti dua dimensi VRC/LRC" }
      },
      {
        id: "dcn-03-q04",
        type: "mcq",
        q: {
          zh: "发送方的 checksum 是怎样得到的？",
          en: "How does the sender produce the checksum?",
          ms: "Bagaimanakah penghantar menghasilkan checksum?"
        },
        opts: [
          { zh: "把所有数据段做多项式除法，其余数就是校验和", en: "Divide all data segments by a polynomial, and the remainder is the checksum", ms: "Bahagikan semua segmen data dengan polinomial, dan bakinya ialah checksum" },
          { zh: "统计所有数据段中 1 的个数，若为偶数则校验和取 1", en: "Count the 1s in all segments and set the checksum to 1 when the count is even", ms: "Kira bit 1 dalam semua segmen dan tetapkan checksum kepada 1 apabila bilangannya genap" },
          { zh: "用一的补码加法累加所有数据段，再对结果取反", en: "Add all data segments using one's complement arithmetic, then complement the result", ms: "Tambah semua segmen data menggunakan aritmetik pelengkap satu, kemudian songsangkan hasilnya" },
          { zh: "用二的补码加法累加所有数据段，把结果直接附在数据后", en: "Add all data segments using two's complement arithmetic and append the result directly", ms: "Tambah semua segmen data menggunakan aritmetik pelengkap dua dan lampirkan hasilnya terus" }
        ],
        answer: 2,
        explain: { zh: "讲义说 checksum 用 1's complement arithmetic 把各数据段相加、对结果取补，再附在数据后；接收方把包括校验和在内的数据再求和取补，若为 0 就认为无错。选项 3 用二的补码且不取反；选项 0 描述的是 CRC；选项 1 是奇偶校验的思路。", en: "The lecture says the checksum sums the data segments in one's complement arithmetic, complements the result and appends it; the receiver sums everything including the checksum, complements the sum, and a zero result means no error. Option 3 uses two's complement without complementing, option 0 describes CRC, and option 1 is the parity idea.", ms: "Kuliah menyatakan checksum menjumlahkan segmen data dengan aritmetik pelengkap satu, menyongsangkan hasil dan melampirkannya; penerima menjumlahkan semuanya termasuk checksum, menyongsangkan jumlah, dan hasil sifar bermaksud tiada ralat. Pilihan 3 menggunakan pelengkap dua tanpa penyongsangan, pilihan 0 ialah CRC, dan pilihan 1 ialah idea pariti." },
        diff: 2,
        topic: { zh: "checksum 原理", en: "Checksum principle", ms: "Prinsip checksum" }
      },
      {
        id: "dcn-03-q05",
        type: "mcq",
        q: {
          zh: "CRC 的除数是多项式 x⁴ + x + 1。它对应的位串是什么？",
          en: "The CRC divisor is the polynomial x⁴ + x + 1. What is the corresponding bit string?",
          ms: "Pembahagi CRC ialah polinomial x⁴ + x + 1. Apakah rentetan bit yang sepadan?"
        },
        opts: [
          { zh: "10011", en: "10011", ms: "10011" },
          { zh: "1001", en: "1001", ms: "1001" },
          { zh: "11001", en: "11001", ms: "11001" },
          { zh: "1011", en: "1011", ms: "1011" }
        ],
        answer: 0,
        explain: { zh: "多项式的系数按 x⁴、x³、x²、x¹、x⁰ 排列：x⁴ 系数为 1，x³ 与 x² 缺项为 0，x¹ 与 x⁰ 为 1，得到 10011。选项 1 与选项 3 位数不足，漏掉了最高次项；选项 2 把 x³ 当成 1，与多项式不符。", en: "Reading coefficients for x⁴, x³, x², x¹ and x⁰ gives 1, 0, 0, 1, 1, that is 10011. Options 1 and 3 are too short and omit the highest-order term, while option 2 sets the x³ coefficient to 1, which the polynomial does not contain.", ms: "Membaca pekali bagi x⁴, x³, x², x¹ dan x⁰ memberi 1, 0, 0, 1, 1, iaitu 10011. Pilihan 1 dan 3 terlalu pendek dan menggugurkan sebutan tertinggi, manakala pilihan 2 menetapkan pekali x³ sebagai 1 sedangkan polinomial itu tiada sebutan tersebut." },
        diff: 2,
        topic: { zh: "CRC 多项式与位串", en: "CRC polynomial and bit string", ms: "Polinomial CRC dan rentetan bit" }
      },
      {
        id: "dcn-03-q06",
        type: "multi",
        q: {
          zh: "关于讲义中的 Hamming 码，下列哪些说法正确？",
          en: "Which statements about the Hamming code in the lecture are correct?",
          ms: "Pernyataan manakah tentang kod Hamming dalam kuliah yang betul?"
        },
        opts: [
          { zh: "若各校验位组成的十进制值为 0，说明该十进制值对应的位置出错", en: "If the decimal value formed by the parity bits is 0, the bit at that decimal position is in error", ms: "Jika nilai perpuluhan yang dibentuk bit pariti ialah 0, bit pada kedudukan itu mengalami ralat" },
          { zh: "Hamming 码用多项式除法生成校验位", en: "The Hamming code generates parity bits by polynomial division", ms: "Kod Hamming menghasilkan bit pariti melalui pembahagian polinomial" },
          { zh: "能识别并纠正 1 位错误，并可检测最多 2 位同时错误", en: "It can identify and correct a one-bit error and detect up to two simultaneous bit errors", ms: "Ia boleh mengenal pasti dan membetulkan ralat satu bit serta mengesan sehingga dua ralat bit serentak" },
          { zh: "冗余（校验）位放在 1、2、4、8、16 等 2 的幂次位置", en: "The redundant parity bits are placed at positions that are powers of 2: 1, 2, 4, 8, 16", ms: "Bit pariti berlebihan diletakkan pada kedudukan kuasa dua: 1, 2, 4, 8, 16" },
          { zh: "c1 校验位置 1、3、5、7、9、11 等", en: "c1 checks positions 1, 3, 5, 7, 9, 11 and so on", ms: "c1 menyemak kedudukan 1, 3, 5, 7, 9, 11 dan seterusnya" }
        ],
        answer: [2,3,4],
        explain: { zh: "讲义说 Hamming 码可纠正一位错误、检测最多两位错误；冗余位放在 2 的幂次位置；c1 覆盖 1,3,5,7,9,11……。选项 0 说反了：十进制值为 0 表示无错，非 0 的值才是出错位置，例如 1001 表示第 9 位出错；选项 1 描述的是 CRC。", en: "The lecture says Hamming code corrects one-bit errors and detects up to two, places redundant bits at powers of two, and defines c1 over positions 1, 3, 5, 7, 9, 11 and so on. Option 0 reverses the rule: a decimal value of 0 means no error, while a non-zero value gives the error position, as 1001 means position 9; option 1 describes CRC.", ms: "Kuliah menyatakan kod Hamming membetulkan ralat satu bit dan mengesan sehingga dua, meletakkan bit berlebihan pada kuasa dua, dan mentakrifkan c1 bagi kedudukan 1, 3, 5, 7, 9, 11. Pilihan 0 menterbalikkan peraturan: nilai perpuluhan 0 bermaksud tiada ralat, manakala nilai bukan sifar memberi kedudukan ralat, seperti 1001 bermaksud kedudukan 9; pilihan 1 ialah CRC." },
        diff: 3,
        topic: { zh: "Hamming 码的规则", en: "Rules of the Hamming code", ms: "Peraturan kod Hamming" }
      },
      {
        id: "dcn-03-q07",
        type: "tf",
        q: {
          zh: "在异步传输中，每个字符都被起始位、数据位、校验位和停止位「框」起来。",
          en: "In asynchronous transmission, each character is framed with a start bit, data bits, a parity bit and a stop bit.",
          ms: "Dalam penghantaran tak segerak, setiap aksara dibingkaikan dengan bit mula, bit data, bit pariti dan bit henti."
        },
        answer: true,
        explain: { zh: "讲义在异步数据传输一节说明数据是逐字符发送的，每个字符由起始位、数据位、校验位与停止位组成，并用「逐条发短信、不知道对方何时会读」作类比。题干与讲义完全一致。", en: "The asynchronous section states that data is sent character by character, each character framed by a start bit, data bits, a parity bit and a stop bit, compared to sending individual text messages. The statement matches the lecture exactly.", ms: "Bahagian penghantaran tak segerak menyatakan data dihantar aksara demi aksara, setiap aksara dibingkaikan dengan bit mula, bit data, bit pariti dan bit henti, diumpamakan seperti menghantar mesej teks satu demi satu. Pernyataan itu menepati kuliah." },
        diff: 1,
        topic: { zh: "异步传输的帧结构", en: "Framing in asynchronous transmission", ms: "Pembingkaian dalam penghantaran tak segerak" }
      },
      {
        id: "dcn-03-q08",
        type: "fill",
        q: {
          zh: "VRC 是 Vertical Redundancy Check，LRC 则是 ______ Redundancy Check。",
          en: "VRC stands for Vertical Redundancy Check, while LRC stands for ______ Redundancy Check.",
          ms: "VRC bermaksud Vertical Redundancy Check, manakala LRC bermaksud ______ Redundancy Check."
        },
        answer: ["Longitudinal","longitudinal","纵向","membujur"],
        explain: { zh: "讲义把二维奇偶校验同时称为 VRC/LRC：VRC = Vertical Redundancy Check（垂直冗余校验），LRC = Longitudinal Redundancy Check（纵向冗余校验）。VRC 按列逐位统计，LRC 沿每行（纵向）累加，两者合起来构成二维校验表。", en: "The lecture names the two-dimensional parity check as VRC/LRC: VRC is Vertical Redundancy Check and LRC is Longitudinal Redundancy Check. VRC is computed per column, LRC is accumulated along each row in the longitudinal direction, and together they form the two-dimensional table.", ms: "Kuliah menamakan semakan pariti dua dimensi sebagai VRC/LRC: VRC ialah Vertical Redundancy Check dan LRC ialah Longitudinal Redundancy Check. VRC dikira mengikut lajur, LRC dijumlahkan sepanjang setiap baris, dan kedua-duanya membentuk jadual dua dimensi." },
        diff: 1,
        topic: { zh: "VRC 与 LRC", en: "VRC and LRC", ms: "VRC dan LRC" }
      }
    ],
    "dcn-04": [
      {
        id: "dcn-04-q01",
        type: "mcq",
        q: {
          zh: "讲义说传输介质位于物理层之下并直接受物理层控制，因此可以说它们属于第几层？",
          en: "The lecture says transmission media lie below the physical layer and are directly controlled by it, so they can be said to belong to which layer?",
          ms: "Kuliah menyatakan media penghantaran terletak di bawah lapisan fizik dan dikawal terus olehnya, jadi ia boleh dikatakan tergolong dalam lapisan yang mana?"
        },
        opts: [
          { zh: "第 1 层", en: "Layer 1", ms: "Lapisan 1" },
          { zh: "第 2 层", en: "Layer 2", ms: "Lapisan 2" },
          { zh: "第 7 层", en: "Layer 7", ms: "Lapisan 7" },
          { zh: "第 0 层", en: "Layer zero", ms: "Lapisan sifar" }
        ],
        answer: 3,
        explain: { zh: "讲义原句是 transmission media belong to layer zero，理由是它们位于物理层之下，并不属于 OSI 七层中的任何一层。物理层、数据链路层与应用层都是 OSI 的正式层次，因此不能用来描述「在物理层之下」的介质。", en: "The lecture states that transmission media belong to layer zero because they sit below the physical layer and are not one of the seven OSI layers. The physical, data link and application layers are all formal OSI layers, so none of them can describe media that lie beneath the physical layer.", ms: "Kuliah menyatakan media penghantaran tergolong dalam lapisan sifar kerana ia terletak di bawah lapisan fizik dan bukan salah satu daripada tujuh lapisan OSI. Lapisan fizik, pautan data dan aplikasi semuanya lapisan rasmi OSI, jadi tiada satu pun boleh menerangkan media di bawah lapisan fizik." },
        diff: 1,
        topic: { zh: "传输介质的层次归属", en: "Layer of transmission media", ms: "Lapisan media penghantaran" }
      },
      {
        id: "dcn-04-q02",
        type: "mcq",
        q: {
          zh: "下列哪一项不是讲义列出的双绞线缺点？",
          en: "Which of the following is NOT a disadvantage of twisted-pair cable listed in the lecture?",
          ms: "Yang manakah BUKAN kelemahan kabel pasangan terbelit yang disenaraikan dalam kuliah?"
        },
        opts: [
          { zh: "带宽较低，话音传输约为 3000 Hz", en: "Relatively low bandwidth, about 3000 Hz for voice transmission", ms: "Lebar jalur agak rendah, kira-kira 3000 Hz untuk penghantaran suara" },
          { zh: "只能传输模拟信号，不能传输数字信号", en: "It can carry only analog signals and cannot carry digital signals", ms: "Ia hanya boleh membawa isyarat analog dan tidak boleh membawa isyarat digital" },
          { zh: "易受电磁干扰与射频干扰，屏蔽双绞线（STP）可减轻但成本更高", en: "Susceptible to EMI and RFI; shielded twisted pair reduces this but costs more", ms: "Terdedah kepada EMI dan RFI; pasangan terbelit berperisai mengurangkannya tetapi lebih mahal" },
          { zh: "信号随距离衰减，以太网通常约 100 m 后就需要中继器或交换机", en: "Signal attenuates with distance, so Ethernet usually needs repeaters or switches after about 100 m", ms: "Isyarat mengecil dengan jarak, jadi Ethernet biasanya memerlukan pengulang atau suis selepas kira-kira 100 m" }
        ],
        answer: 1,
        explain: { zh: "讲义明确说双绞线同时支持模拟与数字信号，所以「只能传模拟」不是它的缺点。选项 2、3、0 分别对应讲义列出的缺点：易受 EMI/RFI 干扰、随距离衰减而需中继器、带宽低（话音约 3000 Hz）以及传输容量较低。", en: "The lecture explicitly says twisted pair supports both analog and digital signals, so the claim that it carries only analog signals is not one of its drawbacks. Options 2, 3 and 0 match the listed drawbacks: EMI and RFI susceptibility, attenuation requiring repeaters, low bandwidth of about 3000 Hz for voice, and lower data capacity.", ms: "Kuliah menyatakan dengan jelas bahawa pasangan terbelit menyokong isyarat analog dan digital, jadi dakwaan bahawa ia hanya membawa isyarat analog bukan kelemahannya. Pilihan 2, 3 dan 0 sepadan dengan kelemahan yang disenaraikan: mudah terjejas EMI dan RFI, pengecilan yang memerlukan pengulang, lebar jalur rendah kira-kira 3000 Hz, dan kapasiti data lebih rendah." },
        diff: 2,
        topic: { zh: "双绞线的缺点", en: "Drawbacks of twisted pair", ms: "Kelemahan pasangan terbelit" }
      },
      {
        id: "dcn-04-q03",
        type: "mcq",
        q: {
          zh: "按讲义，同轴电缆用于长距离传输时，数字信号与模拟信号分别如何处理？",
          en: "According to the lecture, how are digital and analog signals handled over long-distance coaxial cable?",
          ms: "Menurut kuliah, bagaimanakah isyarat digital dan analog dikendalikan pada kabel sepaksi jarak jauh?"
        },
        opts: [
          { zh: "数字信号用中继器，模拟信号用放大器", en: "Repeaters for digital signals and amplifiers for analog signals", ms: "Pengulang untuk isyarat digital dan penguat untuk isyarat analog" },
          { zh: "数字信号用放大器，模拟信号用中继器", en: "Amplifiers for digital signals and repeaters for analog signals", ms: "Penguat untuk isyarat digital dan pengulang untuk isyarat analog" },
          { zh: "两者都用中继器，因为中继器不会放大噪声", en: "Both use repeaters because repeaters do not amplify noise", ms: "Kedua-duanya menggunakan pengulang kerana pengulang tidak menguatkan hingar" },
          { zh: "两者都只用放大器，因为同轴电缆的屏蔽层很好", en: "Both use only amplifiers because coaxial cable is well shielded", ms: "Kedua-duanya hanya menggunakan penguat kerana kabel sepaksi berperisai baik" }
        ],
        answer: 0,
        explain: { zh: "讲义在 Coaxial Cable 的 Transmission 部分写明：长距离传输时数字信号使用 repeaters，模拟信号使用 amplifiers。选项 1 把两者对调；选项 2 忽略模拟信号仍需放大器；选项 3 与讲义相反，屏蔽层并不能使放大器不放大噪声。", en: "The Transmission part of the coaxial cable section states that repeaters are used for digital signals and amplifiers for analog signals over long distances. Option 1 swaps them, option 2 ignores that analog still needs amplifiers, and option 3 contradicts the lecture because shielding does not stop an amplifier from boosting noise.", ms: "Bahagian Penghantaran dalam seksyen kabel sepaksi menyatakan pengulang digunakan untuk isyarat digital dan penguat untuk isyarat analog pada jarak jauh. Pilihan 1 menukar keduanya, pilihan 2 mengabaikan keperluan penguat bagi isyarat analog, dan pilihan 3 bercanggah dengan kuliah kerana perisai tidak menghalang penguat daripada menguatkan hingar." },
        diff: 2,
        topic: { zh: "同轴电缆的中继与放大", en: "Repeaters and amplifiers in coax", ms: "Pengulang dan penguat dalam sepaksi" }
      },
      {
        id: "dcn-04-q04",
        type: "mcq",
        q: {
          zh: "讲义用三个概念衡量传输介质的性能。其中「信号在一秒内能通过介质的距离」指的是哪一个？",
          en: "The lecture measures transmission media performance with three concepts. Which one is the distance a signal can travel through a medium in one second?",
          ms: "Kuliah mengukur prestasi media penghantaran dengan tiga konsep. Yang manakah jarak yang boleh dilalui isyarat melalui medium dalam satu saat?"
        },
        opts: [
          { zh: "带宽（bandwidth）", en: "Bandwidth", ms: "Lebar jalur" },
          { zh: "吞吐量（throughput）", en: "Throughput", ms: "Daya pemprosesan (throughput)" },
          { zh: "传播速度（propagation speed）", en: "Propagation speed", ms: "Kelajuan perambatan" },
          { zh: "传播时间（propagation time）", en: "Propagation time", ms: "Masa perambatan" }
        ],
        answer: 2,
        explain: { zh: "讲义把 propagation speed 定义为信号或比特在一秒内能通过介质的距离；propagation time 则是走完两点所需的时间，两者互为倒数关系。throughput 衡量数据通过某一点的快慢，bandwidth 不在讲义列出的三个性能概念之中。", en: "The lecture defines propagation speed as the distance a signal or bit can travel through a medium in one second, while propagation time is the time needed to travel between two points, the inverse relationship. Throughput measures how fast data passes a point, and bandwidth is not one of the three performance concepts listed.", ms: "Kuliah mentakrifkan kelajuan perambatan sebagai jarak yang boleh dilalui isyarat atau bit melalui medium dalam satu saat, manakala masa perambatan ialah masa untuk merentas dua titik, iaitu hubungan songsang. Daya pemprosesan mengukur kelajuan data melalui satu titik, dan lebar jalur bukan antara tiga konsep prestasi yang disenaraikan." },
        diff: 2,
        topic: { zh: "介质性能的三个概念", en: "Three performance concepts", ms: "Tiga konsep prestasi" }
      },
      {
        id: "dcn-04-q05",
        type: "mcq",
        q: {
          zh: "地球同步（geostationary）卫星的轨道高度与运行周期分别是多少？",
          en: "What are the orbital height and orbital period of a geostationary satellite?",
          ms: "Apakah ketinggian orbit dan tempoh edaran satelit geostasioner?"
        },
        opts: [
          { zh: "约 357,860 km，周期 48 小时", en: "About 357,860 km, with a period of 48 hours", ms: "Kira-kira 357,860 km, dengan tempoh 48 jam" },
          { zh: "约 35,786 km，周期 24 小时", en: "About 35,786 km, with a period of 24 hours", ms: "Kira-kira 35,786 km, dengan tempoh 24 jam" },
          { zh: "约 35,786 km，周期 12 小时", en: "About 35,786 km, with a period of 12 hours", ms: "Kira-kira 35,786 km, dengan tempoh 12 jam" },
          { zh: "约 10,000 km，周期 24 小时", en: "About 10,000 km, with a period of 24 hours", ms: "Kira-kira 10,000 km, dengan tempoh 24 jam" }
        ],
        answer: 1,
        explain: { zh: "讲义给出的关键数据是：位于赤道上方 35,786 km，绕行一周需 24 小时，速度与地球自转相同，所以看起来固定在同一位置。选项 0、2、3 都改动了这两个数值中的至少一个，因此都不符合讲义。", en: "The lecture gives 35,786 km above the equator and a 24-hour orbit, matching the speed of Earth's rotation so the satellite appears fixed. Options 0, 2 and 3 each change at least one of these two values, so none of them matches the lecture.", ms: "Kuliah memberikan 35,786 km di atas khatulistiwa dan tempoh edaran 24 jam, menyamai kelajuan putaran Bumi sehingga satelit kelihatan tetap. Pilihan 0, 2 dan 3 masing-masing mengubah sekurang-kurangnya satu nilai, jadi tiada yang menepati kuliah." },
        diff: 2,
        topic: { zh: "地球同步卫星的参数", en: "Parameters of a geostationary satellite", ms: "Parameter satelit geostasioner" }
      },
      {
        id: "dcn-04-q06",
        type: "multi",
        q: {
          zh: "无导向（unguided）信号可以从源传播到目的地的几种方式包括哪些？",
          en: "Which of the following are ways in which unguided signals can travel from source to destination?",
          ms: "Yang manakah cara isyarat tanpa panduan boleh merambat dari sumber ke destinasi?"
        },
        opts: [
          { zh: "天空传播（sky propagation）", en: "Sky propagation", ms: "Perambatan langit" },
          { zh: "视距传播（line-of-sight propagation）", en: "Line-of-sight propagation", ms: "Perambatan garis penglihatan" },
          { zh: "令牌传递（token passing）", en: "Token passing", ms: "Penghantaran token" },
          { zh: "存储转发（store-and-forward）", en: "Store-and-forward", ms: "Simpan dan hantar" },
          { zh: "地面传播（ground propagation）", en: "Ground propagation", ms: "Perambatan bumi" }
        ],
        answer: [0,1,4],
        explain: { zh: "讲义列出无导向信号的三种传播方式：ground propagation、sky propagation 与 line-of-sight propagation，它们都依靠自由空间而不是物理导体。token passing 是环型网络控制发送权的方法，store-and-forward 是交换设备转发数据的方式，都与电波传播路径无关。", en: "The lecture lists three propagation modes for unguided signals: ground, sky and line-of-sight propagation, all relying on free space rather than a physical conductor. Token passing controls the right to transmit in a ring network, and store-and-forward is how switching devices relay data, so neither is a radio propagation mode.", ms: "Kuliah menyenaraikan tiga mod perambatan isyarat tanpa panduan: perambatan bumi, langit dan garis penglihatan, semuanya bergantung pada ruang bebas bukan konduktor fizikal. Penghantaran token mengawal hak menghantar dalam rangkaian cincin, dan simpan-dan-hantar ialah cara peranti pensuisan memajukan data, jadi keduanya bukan mod perambatan gelombang radio." },
        diff: 2,
        topic: { zh: "无导向介质的传播方式", en: "Propagation modes of unguided media", ms: "Mod perambatan media tanpa panduan" }
      },
      {
        id: "dcn-04-q07",
        type: "tf",
        q: {
          zh: "光纤是一种导向介质，它像双绞线一样以电流的形式接收并传输信号。",
          en: "Optical fiber is a guided medium that accepts and transports signals in the form of electric current, just like twisted pair.",
          ms: "Gentian optik ialah media berpandu yang menerima dan menghantar isyarat dalam bentuk arus elektrik, sama seperti pasangan terbelit."
        },
        answer: false,
        explain: { zh: "讲义指出双绞线与同轴电缆使用铜导体、以电流形式传输信号，而光纤以光的形式接收和传输信号。把「光」换成「电流」正是本题的错误点，也是光纤带宽高、抗电磁干扰的根本原因。", en: "The lecture says twisted pair and coaxial cable use copper conductors and transport signals as electric current, whereas optical fiber accepts and transports signals in the form of light. Replacing light with electric current is the error here, and it is also why fiber offers high bandwidth and immunity to EMI.", ms: "Kuliah menyatakan pasangan terbelit dan kabel sepaksi menggunakan konduktor kuprum dan menghantar isyarat sebagai arus elektrik, manakala gentian optik menerima dan menghantar isyarat dalam bentuk cahaya. Menggantikan cahaya dengan arus elektrik ialah kesilapan di sini, dan itulah sebab gentian optik mempunyai lebar jalur tinggi serta tahan EMI." },
        diff: 1,
        topic: { zh: "光纤的传输形式", en: "Signal form in optical fiber", ms: "Bentuk isyarat dalam gentian optik" }
      },
      {
        id: "dcn-04-q08",
        type: "fill",
        q: {
          zh: "卫星上负责接收、放大并重新发送信号的部件称为 ______。",
          en: "The satellite component that receives, amplifies and retransmits signals is called a ______.",
          ms: "Komponen satelit yang menerima, menguatkan dan menghantar semula isyarat dipanggil ______."
        },
        answer: ["transponder","transponder satelit","转发器","应答器"],
        explain: { zh: "讲义列出卫星通信的三个主要部件：地球站、卫星与 transponder；transponder 负责接收、放大并重新发送信号。地球站是地面上的天线与发射设备，卫星本身只是太空中的中继站，都不等于这个部件。", en: "The lecture lists three main components of satellite communication: the Earth station, the satellite and the transponder, which receives, amplifies and retransmits the signal. The Earth station is the ground antenna and transmitter, and the satellite is the repeater in space, so neither is the component described.", ms: "Kuliah menyenaraikan tiga komponen utama komunikasi satelit: stesen bumi, satelit dan transponder, yang menerima, menguatkan dan menghantar semula isyarat. Stesen bumi ialah antena dan pemancar di darat, dan satelit ialah pengulang di angkasa, jadi kedua-duanya bukan komponen yang dimaksudkan." },
        diff: 2,
        topic: { zh: "卫星通信的部件", en: "Satellite communication components", ms: "Komponen komunikasi satelit" }
      }
    ],
    "dcn-05": [
      {
        id: "dcn-05-q01",
        type: "mcq",
        q: {
          zh: "一个连接同一城市内多栋建筑、覆盖城市或大型校园区域的网络，属于哪一类？",
          en: "A network that connects several buildings in one city and covers a city or large campus area belongs to which category?",
          ms: "Rangkaian yang menghubungkan beberapa bangunan dalam satu bandar dan meliputi kawasan bandar atau kampus besar tergolong dalam kategori yang mana?"
        },
        opts: [
          { zh: "MAN（城域网）", en: "MAN (metropolitan area network)", ms: "MAN (rangkaian kawasan metropolitan)" },
          { zh: "WAN（广域网）", en: "WAN (wide area network)", ms: "WAN (rangkaian kawasan luas)" },
          { zh: "PAN（个人区域网）", en: "PAN (personal area network)", ms: "PAN (rangkaian kawasan peribadi)" },
          { zh: "LAN（局域网）", en: "LAN (local area network)", ms: "LAN (rangkaian kawasan setempat)" }
        ],
        answer: 0,
        explain: { zh: "讲义按覆盖范围分类：LAN 是单一区域内的小型网络（如电脑室、家庭 Wi-Fi），MAN 覆盖城市或大型校园（如连接同一城市的多栋建筑），WAN 覆盖国家甚至全球。因此「同一城市多栋建筑」是 MAN；LAN 范围太小，WAN 范围太大，PAN 不是讲义列出的类别。", en: "The lecture classifies by coverage: LAN is a small network in one area such as a computer lab or home Wi-Fi, MAN covers a city or large campus such as several buildings in one city, and WAN covers countries or the world. Therefore the city-wide case is MAN, while LAN is too small, WAN too large, and PAN is not a category in the lecture.", ms: "Kuliah mengelaskan mengikut liputan: LAN ialah rangkaian kecil dalam satu kawasan seperti makmal komputer atau Wi-Fi rumah, MAN meliputi bandar atau kampus besar seperti beberapa bangunan dalam satu bandar, dan WAN meliputi negara atau dunia. Jadi kes seluruh bandar ialah MAN, manakala LAN terlalu kecil, WAN terlalu luas, dan PAN bukan kategori dalam kuliah." },
        diff: 1,
        topic: { zh: "LAN/MAN/WAN 的划分", en: "LAN, MAN and WAN by coverage", ms: "LAN, MAN dan WAN mengikut liputan" }
      },
      {
        id: "dcn-05-q02",
        type: "mcq",
        q: {
          zh: "在哪种网络中，每台计算机自己管理自己的文件与安全？",
          en: "In which type of network does each computer control its own files and security?",
          ms: "Dalam jenis rangkaian manakah setiap komputer mengawal fail dan keselamatannya sendiri?"
        },
        opts: [
          { zh: "大型机网络（mainframe）", en: "Mainframe network", ms: "Rangkaian kerangka utama" },
          { zh: "网状网络（mesh）", en: "Mesh network", ms: "Rangkaian mesh (jejaring)" },
          { zh: "对等网络（peer-to-peer）", en: "Peer-to-peer network", ms: "Rangkaian setara (peer-to-peer)" },
          { zh: "客户机-服务器网络（client-server）", en: "Client-server network", ms: "Rangkaian pelanggan-pelayan" }
        ],
        answer: 2,
        explain: { zh: "讲义在 SECURITY / CONTROL 分类下说明：peer-to-peer 由每台计算机自行控制文件与安全，常见于几台电脑的小办公室；client-server 由中央服务器统一控制用户、文件、安全与资源。大型机网络不是这一分类下的项目，mesh 属于拓扑而不是安全控制模式。", en: "Under the security and control classification, the lecture says each peer-to-peer computer controls its own files and security, as in a small office with a few computers, whereas a client-server network has a central server controlling users, files, security and resources. Mainframe is not a category here, and mesh is a topology rather than a control model.", ms: "Di bawah klasifikasi keselamatan dan kawalan, kuliah menyatakan setiap komputer setara mengawal fail dan keselamatannya sendiri, seperti pejabat kecil dengan beberapa komputer, manakala rangkaian pelanggan-pelayan mempunyai pelayan pusat yang mengawal pengguna, fail, keselamatan dan sumber. Kerangka utama bukan kategori di sini, dan mesh (jejaring) ialah topologi bukan model kawalan." },
        diff: 1,
        topic: { zh: "对等网络与客户机-服务器", en: "Peer-to-peer versus client-server", ms: "Setara berbanding pelanggan-pelayan" }
      },
      {
        id: "dcn-05-q03",
        type: "mcq",
        q: {
          zh: "下列哪项是多点（multipoint）线路配置的缺点？",
          en: "Which of the following is a disadvantage of a multipoint line configuration?",
          ms: "Yang manakah kelemahan konfigurasi talian multipoint?"
        },
        opts: [
          { zh: "多台设备同时使用链路时会变慢，共享链路一旦故障会影响许多设备", en: "It slows down when many devices share the link, and a failure of the shared link affects many devices", ms: "Ia menjadi perlahan apabila banyak peranti berkongsi pautan, dan kegagalan pautan dikongsi menjejaskan banyak peranti" },
          { zh: "每一对设备都需要独立链路，因此布线成本很高", en: "Every pair of devices needs its own link, so cabling is expensive", ms: "Setiap pasangan peranti memerlukan pautan sendiri, jadi kos pengkabelan tinggi" },
          { zh: "链路是专用的，所以只有两台设备可以使用", en: "The link is dedicated, so only two devices can use it", ms: "Pautan itu khusus, jadi hanya dua peranti boleh menggunakannya" },
          { zh: "因为介质由多台设备共享，所以安全性更高", en: "Security is higher because the medium is shared by many devices", ms: "Keselamatan lebih tinggi kerana medium dikongsi banyak peranti" }
        ],
        answer: 0,
        explain: { zh: "讲义列出 multipoint 的缺点：同时使用会变慢、共享链路故障会波及许多设备、更容易发生碰撞或干扰、安全性较低。选项 1、2 描述的都是点对点（point-to-point）的特征；选项 3 把安全性的高低说反了。", en: "The lecture lists the multipoint drawbacks: slower when many devices use the link, a shared-link failure affecting many devices, more collisions or interference, and lower security. Options 1 and 2 describe point-to-point characteristics, and option 3 reverses the security comparison.", ms: "Kuliah menyenaraikan kelemahan multipoint: lebih perlahan apabila banyak peranti menggunakan pautan, kegagalan pautan dikongsi menjejaskan banyak peranti, lebih banyak perlanggaran atau gangguan, dan keselamatan lebih rendah. Pilihan 1 dan 2 menerangkan ciri titik-ke-titik, dan pilihan 3 menterbalikkan perbandingan keselamatan." },
        diff: 2,
        topic: { zh: "多点线路配置的缺点", en: "Drawbacks of multipoint links", ms: "Kelemahan pautan multipoint" }
      },
      {
        id: "dcn-05-q04",
        type: "mcq",
        q: {
          zh: "在星型拓扑中，集线器（hub）与交换机（switch）的主要差别是什么？",
          en: "In a star topology, what is the main difference between a hub and a switch?",
          ms: "Dalam topologi bintang, apakah perbezaan utama antara hab dan suis?"
        },
        opts: [
          { zh: "集线器工作在第三层，交换机工作在第二层", en: "A hub works at Layer 3, while a switch works at Layer 2", ms: "Hab berfungsi pada Lapisan 3, manakala suis pada Lapisan 2" },
          { zh: "集线器把数据发给所有设备，交换机只发给正确的设备", en: "A hub sends data to all devices, while a switch sends it only to the correct device", ms: "Hab menghantar data kepada semua peranti, manakala suis hanya kepada peranti yang betul" },
          { zh: "集线器只发给正确的设备，交换机发给所有设备", en: "A hub sends only to the correct device, while a switch sends to all devices", ms: "Hab hanya menghantar kepada peranti yang betul, manakala suis kepada semua peranti" },
          { zh: "集线器依据 IP 地址转发，交换机依据 MAC 地址转发", en: "A hub forwards by IP address, while a switch forwards by MAC address", ms: "Hab memajukan mengikut alamat IP, manakala suis mengikut alamat MAC" }
        ],
        answer: 1,
        explain: { zh: "讲义在 Star Topology 中写明：Hub 把数据发给所有设备，Switch 只发给正确的设备。选项 2 把两者对调；选项 3 中集线器其实不查看任何地址（按 IP 转发的是路由器）；选项 0 把层次说错，集线器工作在物理层。", en: "The Star Topology section states that a hub sends data to all devices while a switch sends it only to the correct device. Option 2 swaps them, option 3 is wrong because a hub examines no address at all (IP forwarding belongs to routers), and option 0 misstates the layers since a hub works at the physical layer.", ms: "Bahagian Topologi Bintang menyatakan hab menghantar data kepada semua peranti manakala suis hanya kepada peranti yang betul. Pilihan 2 menukar keduanya, pilihan 3 salah kerana hab tidak memeriksa sebarang alamat (pemajuan IP ialah tugas penghala), dan pilihan 0 menyalah nyatakan lapisan kerana hab berfungsi pada lapisan fizik." },
        diff: 2,
        topic: { zh: "星型拓扑中的集线器与交换机", en: "Hub versus switch in a star", ms: "Hab berbanding suis dalam bintang" }
      },
      {
        id: "dcn-05-q05",
        type: "mcq",
        q: {
          zh: "按讲义，树型（tree）拓扑是哪一种拓扑的扩展？",
          en: "According to the lecture, tree topology is an extension of which topology?",
          ms: "Menurut kuliah, topologi pokok ialah lanjutan daripada topologi yang mana?"
        },
        opts: [
          { zh: "环型拓扑", en: "Ring topology", ms: "Topologi cincin" },
          { zh: "总线型拓扑", en: "Bus topology", ms: "Topologi bas" },
          { zh: "网状拓扑", en: "Mesh topology", ms: "Topologi mesh (jejaring)" },
          { zh: "星型拓扑", en: "Star topology", ms: "Topologi bintang" }
        ],
        answer: 3,
        explain: { zh: "讲义说 tree topology 是 star topology 的扩展：设备按层次排列，次级集线器或交换机连到主中央设备。环型靠令牌传递，总线型用一条主干电缆，网状要求设备两两相连，都不是树型的来源。", en: "The lecture says tree topology is an extension of star topology, with devices arranged hierarchically so that secondary hubs or switches connect to a main central device. Ring relies on token passing, bus uses one backbone cable, and mesh connects every pair, so none is the origin of the tree.", ms: "Kuliah menyatakan topologi pokok ialah lanjutan topologi bintang, dengan peranti disusun berhierarki supaya hab atau suis sekunder bersambung ke peranti pusat utama. Cincin bergantung pada penghantaran token, bas menggunakan satu kabel tulang belakang, dan mesh (jejaring) menghubungkan setiap pasangan, jadi tiada yang menjadi asal topologi pokok." },
        diff: 1,
        topic: { zh: "树型拓扑的来源", en: "Origin of tree topology", ms: "Asal topologi pokok" }
      },
      {
        id: "dcn-05-q06",
        type: "multi",
        q: {
          zh: "关于环型（ring）拓扑与令牌传递，下列哪些说法符合讲义？",
          en: "Which statements about ring topology and token passing match the lecture?",
          ms: "Pernyataan manakah tentang topologi cincin dan penghantaran token yang menepati kuliah?"
        },
        opts: [
          { zh: "所有设备都连接在一条主干电缆上，两端还要终结器", en: "All devices connect to a single backbone cable that needs terminators at both ends", ms: "Semua peranti bersambung pada satu kabel tulang belakang yang memerlukan terminator di kedua-dua hujung" },
          { zh: "信号先送到中央设备，再由中央设备转发给目的设备", en: "The signal goes first to a central device, which then forwards it to the destination", ms: "Isyarat pergi dahulu ke peranti pusat, yang kemudian memajukannya ke destinasi" },
          { zh: "只有拿到令牌的计算机才被允许发送数据，从而避免碰撞", en: "Only the computer holding the token may transmit, which avoids collisions", ms: "Hanya komputer yang memegang token dibenarkan menghantar, sekali gus mengelakkan perlanggaran" },
          { zh: "节点发现消息的目的地址与自己不符时，会重新生成信号再传给下一个节点", en: "A node whose address does not match the destination regenerates the signal and passes it to the next node", ms: "Nod yang alamatnya tidak sepadan dengan destinasi menjana semula isyarat dan menghantarnya kepada nod seterusnya" },
          { zh: "消息传输完成后令牌被释放，其他计算机才可发送", en: "The token is released once the message completes its journey, letting another computer transmit", ms: "Token dilepaskan selepas mesej selesai, membolehkan komputer lain menghantar" }
        ],
        answer: [2,3,4],
        explain: { zh: "讲义描述环型网络时说明：token passing 让持有令牌者才能发送以避免碰撞；地址不匹配的节点会重新生成信号并传给下一节点；消息完成后释放令牌。选项 0 描述的是总线拓扑，选项 1 描述的是星型拓扑。", en: "The ring description says token passing lets only the token holder transmit to avoid collisions, a node with a non-matching address regenerates the signal and forwards it, and the token is released after the message completes. Option 0 describes bus topology and option 1 describes star topology.", ms: "Penerangan cincin menyatakan penghantaran token membolehkan hanya pemegang token menghantar bagi mengelakkan perlanggaran, nod yang alamatnya tidak sepadan menjana semula isyarat dan memajukannya, dan token dilepaskan selepas mesej selesai. Pilihan 0 menerangkan topologi bas dan pilihan 1 menerangkan topologi bintang." },
        diff: 2,
        topic: { zh: "环型拓扑与令牌传递", en: "Ring topology and token passing", ms: "Topologi cincin dan penghantaran token" }
      },
      {
        id: "dcn-05-q07",
        type: "tf",
        q: {
          zh: "在总线拓扑中，如果主干电缆出现故障，整个网络可能停止工作。",
          en: "In a bus topology, if the main backbone cable fails, the whole network may stop working.",
          ms: "Dalam topologi bas, jika kabel tulang belakang utama rosak, seluruh rangkaian mungkin berhenti berfungsi."
        },
        answer: true,
        explain: { zh: "讲义指出总线拓扑用一条称为 backbone 的主电缆连接所有计算机，便宜且易安装，但主电缆一旦故障整个网络可能停止。这正是总线拓扑与星型（单台计算机故障不影响全网）的关键差别。", en: "The lecture says bus topology connects all computers to one main cable called the backbone, which is cheap and easy to install, but a failure of that cable may stop the whole network. This is the key contrast with star topology, where one failed computer does not bring the network down.", ms: "Kuliah menyatakan topologi bas menghubungkan semua komputer pada satu kabel utama yang dipanggil tulang belakang, murah dan mudah dipasang, tetapi kegagalan kabel itu boleh menghentikan seluruh rangkaian. Inilah perbezaan utama dengan topologi bintang yang tidak lumpuh kerana satu komputer rosak." },
        diff: 1,
        topic: { zh: "总线拓扑的可靠性", en: "Reliability of bus topology", ms: "Kebolehpercayaan topologi bas" }
      },
      {
        id: "dcn-05-q08",
        type: "fill",
        q: {
          zh: "每台设备都通过专用的点对点链路与其他所有设备直接相连的拓扑，称为 ______ 拓扑。",
          en: "A topology in which every device is directly connected to every other device by a dedicated point-to-point link is called ______ topology.",
          ms: "Topologi yang menghubungkan setiap peranti secara terus dengan setiap peranti lain melalui pautan titik-ke-titik khusus dipanggil topologi ______."
        },
        answer: ["mesh","mesh topology","jejaring","网状","网型"],
        explain: { zh: "讲义把 mesh 定义为每台设备与其他所有设备直接相连、每条连接都是专用点对点链路；正因为存在多条路径，它可靠性高、容错好，但需要大量电缆与端口，成本高且安装困难。", en: "The lecture defines mesh as every device being directly connected to every other device through dedicated point-to-point links. The multiple paths make it highly reliable and fault tolerant, but it needs many cables and ports, so it is expensive and hard to install.", ms: "Kuliah mentakrifkan mesh (jejaring) sebagai setiap peranti bersambung terus dengan setiap peranti lain melalui pautan titik-ke-titik khusus. Laluan berbilang menjadikannya sangat boleh dipercayai dan bertoleransi kesalahan, tetapi ia memerlukan banyak kabel dan port, jadi mahal dan sukar dipasang." },
        diff: 2,
        topic: { zh: "网状拓扑的定义", en: "Definition of mesh topology", ms: "Takrif topologi mesh (jejaring)" }
      }
    ],
    "dcn-06": [
      {
        id: "dcn-06-q01",
        type: "mcq",
        q: {
          zh: "OSI 参考模型由哪个组织制定，共分几层？",
          en: "Which organization developed the OSI reference model, and how many layers does it have?",
          ms: "Organisasi manakah yang membangunkan model rujukan OSI, dan berapa lapisannya?"
        },
        opts: [
          { zh: "由 ISO 制定，共 7 层", en: "Developed by ISO, with 7 layers", ms: "Dibangunkan oleh ISO, dengan 7 lapisan" },
          { zh: "由 IEEE 制定，共 4 层", en: "Developed by IEEE, with 4 layers", ms: "Dibangunkan oleh IEEE, dengan 4 lapisan" },
          { zh: "由 ISO 制定，共 4 层", en: "Developed by ISO, with 4 layers", ms: "Dibangunkan oleh ISO, dengan 4 lapisan" },
          { zh: "由美国国防部制定，共 7 层", en: "Developed by the US Department of Defense, with 7 layers", ms: "Dibangunkan oleh Jabatan Pertahanan AS, dengan 7 lapisan" }
        ],
        answer: 0,
        explain: { zh: "讲义说明 OSI 是 Open System Interconnection 参考模型，由 International Standardization Organization（ISO）制定，共 7 层。4 层是 TCP/IP 模型；美国国防部是 TCP/IP 的推动者；IEEE 并未出现在讲义对 OSI 来源的说明中。", en: "The lecture says OSI is the Open System Interconnection reference model, developed by the International Standardization Organization (ISO), and it has 7 layers. Four layers is TCP/IP, the US Department of Defense drove TCP/IP, and IEEE does not appear in the lecture's account of OSI's origin.", ms: "Kuliah menyatakan OSI ialah model rujukan Open System Interconnection yang dibangunkan oleh International Standardization Organization (ISO) dan mempunyai 7 lapisan. Empat lapisan ialah TCP/IP, Jabatan Pertahanan AS memacu TCP/IP, dan IEEE tidak disebut dalam penerangan kuliah tentang asal OSI." },
        diff: 1,
        topic: { zh: "OSI 的来源与层数", en: "Origin and layer count of OSI", ms: "Asal dan bilangan lapisan OSI" }
      },
      {
        id: "dcn-06-q02",
        type: "mcq",
        q: {
          zh: "讲义列出分层参考模型的四项好处。「修改一层不会强烈影响其他层」对应哪一项？",
          en: "The lecture lists four benefits of layered reference models. Which one corresponds to the idea that changes in one layer do not strongly affect other layers?",
          ms: "Kuliah menyenaraikan empat faedah model rujukan berlapis. Yang manakah sepadan dengan idea bahawa perubahan pada satu lapisan tidak banyak menjejaskan lapisan lain?"
        },
        opts: [
          { zh: "多厂商互操作（multi-vendor interoperability）", en: "Multi-vendor interoperability", ms: "Kesalingkendalian berbilang vendor" },
          { zh: "模块化工程（modular engineering）", en: "Modular engineering", ms: "Kejuruteraan modular" },
          { zh: "更容易学习（easier to learn）", en: "Easier to learn", ms: "Lebih mudah dipelajari" },
          { zh: "更容易开发（easier to develop）", en: "Easier to develop", ms: "Lebih mudah dibangunkan" }
        ],
        answer: 3,
        explain: { zh: "讲义把「每层有自己的功能、改动一层不会强烈影响其他层」归入 Easier to Develop。Easier to learn 指分层让整个通信过程更易理解；multi-vendor interoperability 指不同厂商遵循同一标准即可互通；modular engineering 指可分层模块化地设计、测试与维护。", en: "The lecture places the point that each layer has its own function and changes in one layer do not strongly affect others under Easier to Develop. Easier to learn refers to understanding the process through layers, multi-vendor interoperability means vendors interoperate by following one standard, and modular engineering means designing, testing and maintaining in modules.", ms: "Kuliah meletakkan kenyataan bahawa setiap lapisan mempunyai fungsi sendiri dan perubahan pada satu lapisan tidak banyak menjejaskan yang lain di bawah Lebih Mudah Dibangunkan. Lebih mudah dipelajari merujuk kefahaman melalui lapisan, kesalingkendalian berbilang vendor bermaksud vendor serasi dengan satu standard, dan kejuruteraan modular bermaksud reka bentuk, ujian dan penyelenggaraan secara modul." },
        diff: 2,
        topic: { zh: "分层架构的好处", en: "Benefits of layering", ms: "Faedah seni bina berlapis" }
      },
      {
        id: "dcn-06-q03",
        type: "mcq",
        q: {
          zh: "TCP/IP 参考模型的四层分别是哪四层？",
          en: "What are the four layers of the TCP/IP reference model?",
          ms: "Apakah empat lapisan model rujukan TCP/IP?"
        },
        opts: [
          { zh: "网络层、数据链路层、物理层、应用层", en: "Network, data link, physical and application", ms: "Rangkaian, pautan data, fizik dan aplikasi" },
          { zh: "应用层、传输层、网络层、数据链路层", en: "Application, transport, network and data link", ms: "Aplikasi, pengangkutan, rangkaian dan pautan data" },
          { zh: "应用层、传输层、互联网层、网络接入层", en: "Application, transport, internet and network access", ms: "Aplikasi, pengangkutan, internet dan akses rangkaian" },
          { zh: "应用层、表示层、会话层、传输层", en: "Application, presentation, session and transport", ms: "Aplikasi, persembahan, sesi dan pengangkutan" }
        ],
        answer: 2,
        explain: { zh: "讲义明确 TCP/IP 只有 4 层：Application、Transport、Internet 与 Network Access。选项 3 是 OSI 上面四层的名称；选项 0 混入了 OSI 的下三层；选项 1 把 OSI 的网络层与数据链路层当成了 TCP/IP 的层，而 TCP/IP 用网络接入层涵盖下面两层。", en: "The lecture states TCP/IP has only four layers: application, transport, internet and network access. Option 3 lists the upper OSI layers, option 0 mixes in the lower OSI layers, and option 1 treats the OSI network and data link layers as TCP/IP layers even though TCP/IP covers the lower two with its network access layer.", ms: "Kuliah menyatakan TCP/IP hanya mempunyai empat lapisan: aplikasi, pengangkutan, internet dan akses rangkaian. Pilihan 3 menyenaraikan lapisan atas OSI, pilihan 0 mencampurkan lapisan bawah OSI, dan pilihan 1 menganggap lapisan rangkaian dan pautan data OSI sebagai lapisan TCP/IP sedangkan TCP/IP meliputi kedua-duanya melalui lapisan akses rangkaian." },
        diff: 1,
        topic: { zh: "TCP/IP 四层模型", en: "The four-layer TCP/IP model", ms: "Model TCP/IP empat lapisan" }
      },
      {
        id: "dcn-06-q04",
        type: "mcq",
        q: {
          zh: "在 TCP/IP 的互联网层中，哪个协议帮助设备在启动时取得 IP 地址？",
          en: "In the TCP/IP internet layer, which protocol helps a device obtain an IP address during startup?",
          ms: "Dalam lapisan internet TCP/IP, protokol manakah membantu peranti memperoleh alamat IP semasa permulaan?"
        },
        opts: [
          { zh: "ICMP", en: "ICMP", ms: "ICMP" },
          { zh: "SNMP", en: "SNMP", ms: "SNMP" },
          { zh: "ARP", en: "ARP", ms: "ARP" },
          { zh: "RARP", en: "RARP", ms: "RARP" }
        ],
        answer: 3,
        explain: { zh: "讲义把 ARP 说成把 IP 地址转换为 MAC 地址，把 RARP 说成帮助设备在启动时取得 IP 地址，两者方向正好相反，这也是最容易混淆的地方。ICMP 用于网络测试（例如 ping），SNMP 用于监视和管理网络设备，属于应用层协议。", en: "The lecture says ARP converts IP addresses into MAC addresses, while RARP helps a device get an IP address during startup, which is exactly the opposite direction and the usual source of confusion. ICMP is used for network testing such as ping, and SNMP monitors and manages devices as an application-layer protocol.", ms: "Kuliah menyatakan ARP menukar alamat IP kepada alamat MAC, manakala RARP membantu peranti memperoleh alamat IP semasa permulaan, iaitu arah yang bertentangan dan punca kekeliruan biasa. ICMP digunakan untuk ujian rangkaian seperti ping, dan SNMP memantau serta mengurus peranti sebagai protokol lapisan aplikasi." },
        diff: 2,
        topic: { zh: "ARP 与 RARP", en: "ARP and RARP", ms: "ARP dan RARP" }
      },
      {
        id: "dcn-06-q05",
        type: "mcq",
        q: {
          zh: "讲义说在分层架构中，每一层只与哪些层通信？",
          en: "According to the lecture, in a layered architecture each layer communicates only with which layers?",
          ms: "Menurut kuliah, dalam seni bina berlapis setiap lapisan hanya berkomunikasi dengan lapisan yang mana?"
        },
        opts: [
          { zh: "通过共享总线与所有层通信", en: "With all layers through a shared bus", ms: "Dengan semua lapisan melalui bas dikongsi" },
          { zh: "只与紧邻其上和其下的层通信", en: "Only with the layers directly above and below it", ms: "Hanya dengan lapisan terus di atas dan di bawahnya" },
          { zh: "只与传输层通信", en: "Only with the transport layer", ms: "Hanya dengan lapisan pengangkutan" },
          { zh: "直接与对方的应用层通信", en: "Directly with the application layer at the other end", ms: "Terus dengan lapisan aplikasi di hujung sana" }
        ],
        answer: 1,
        explain: { zh: "讲义在 Uses layers 部分写明：每一层只与直接位于其上方和下方的层通信，这是分层架构能够隔离各层功能的基础。共享总线、只与传输层通信或直接与对端应用层通信，都会破坏这种逐层封装的关系。", en: "The Uses layers section states that each layer communicates only with the layers directly above and below it, which is what allows layering to isolate functions. Communication through a shared bus, only with transport, or directly with the peer application layer would all break this layer-by-layer encapsulation.", ms: "Bahagian Penggunaan lapisan menyatakan setiap lapisan hanya berkomunikasi dengan lapisan terus di atas dan di bawahnya, dan inilah yang membolehkan lapisan mengasingkan fungsi. Komunikasi melalui bas dikongsi, hanya dengan pengangkutan, atau terus dengan lapisan aplikasi rakan akan merosakkan enkapsulasi lapisan demi lapisan." },
        diff: 2,
        topic: { zh: "层间通信规则", en: "Layer-to-layer communication", ms: "Komunikasi antara lapisan" }
      },
      {
        id: "dcn-06-q06",
        type: "multi",
        q: {
          zh: "按讲义的应用层协议表，下列哪些配对是正确的？",
          en: "According to the lecture's application-layer protocol table, which pairings are correct?",
          ms: "Menurut jadual protokol lapisan aplikasi dalam kuliah, pasangan manakah yang betul?"
        },
        opts: [
          { zh: "ICMP：远程控制另一台计算机", en: "ICMP: remotely controls another computer", ms: "ICMP: mengawal komputer lain dari jauh" },
          { zh: "SMTP：发送电子邮件", en: "SMTP: sends email messages", ms: "SMTP: menghantar mesej e-mel" },
          { zh: "DNS：把网站名称转换成 IP 地址", en: "DNS: changes a website name into an IP address", ms: "DNS: menukar nama laman web kepada alamat IP" },
          { zh: "TFTP：使用 UDP 传送小文件，比 FTP 简单", en: "TFTP: transfers small files using UDP and is simpler than FTP", ms: "TFTP: memindahkan fail kecil menggunakan UDP dan lebih ringkas daripada FTP" },
          { zh: "ARP：在计算机之间传送文件", en: "ARP: transfers files between computers", ms: "ARP: memindahkan fail antara komputer" }
        ],
        answer: [1,2,3],
        explain: { zh: "讲义的应用层表列出 SMTP 发送邮件、DNS 把网址名称换成 IP 地址、TFTP 用 UDP 传送小文件且比 FTP 简单。ARP 属于互联网层，负责把 IP 地址转换为 MAC 地址；远程文本控制是 Telnet，而 ICMP 用于网络测试。", en: "The lecture's table lists SMTP for sending email, DNS for turning a website name into an IP address, and TFTP for sending small files over UDP more simply than FTP. ARP belongs to the internet layer and maps IP to MAC addresses, remote text control is Telnet, and ICMP is for network testing.", ms: "Jadual kuliah menyenaraikan SMTP untuk menghantar e-mel, DNS untuk menukar nama laman web kepada alamat IP, dan TFTP untuk menghantar fail kecil melalui UDP dengan lebih ringkas daripada FTP. ARP tergolong dalam lapisan internet dan memetakan IP kepada MAC, kawalan teks jauh ialah Telnet, dan ICMP untuk ujian rangkaian." },
        diff: 2,
        topic: { zh: "应用层协议的功能", en: "Functions of application protocols", ms: "Fungsi protokol aplikasi" }
      },
      {
        id: "dcn-06-q07",
        type: "tf",
        q: {
          zh: "TCP/IP 参考模型分为五层：应用层、传输层、互联网层、网络接入层和物理层。",
          en: "The TCP/IP reference model has five layers: application, transport, internet, network access and physical.",
          ms: "Model rujukan TCP/IP mempunyai lima lapisan: aplikasi, pengangkutan, internet, akses rangkaian dan fizik."
        },
        answer: false,
        explain: { zh: "讲义说 TCP/IP 只有 4 层，其中网络接入层已经同时涵盖 OSI 的数据链路层与物理层，所以不应再单独列出物理层，总数也不是 5 层。把物理层单列出来会重复计算下层功能。", en: "The lecture says TCP/IP has only four layers, and its network access layer already covers both the OSI data link and physical layers, so the physical layer should not be listed separately and the total is not five. Adding it would double count the lower-layer functions.", ms: "Kuliah menyatakan TCP/IP hanya mempunyai empat lapisan, dan lapisan akses rangkaian sudah merangkumi lapisan pautan data serta fizik OSI, jadi lapisan fizik tidak patut disenaraikan berasingan dan jumlahnya bukan lima. Menambahnya akan mengira fungsi lapisan bawah dua kali." },
        diff: 1,
        topic: { zh: "TCP/IP 的层数", en: "Layer count of TCP/IP", ms: "Bilangan lapisan TCP/IP" }
      },
      {
        id: "dcn-06-q08",
        type: "fill",
        q: {
          zh: "TCP/IP 的 ______ 层对应 OSI 的数据链路层和物理层。",
          en: "The ______ layer of TCP/IP corresponds to the data link and physical layers of OSI.",
          ms: "Lapisan ______ TCP/IP sepadan dengan lapisan pautan data dan lapisan fizik OSI."
        },
        answer: ["network access","network access layer","lapisan akses rangkaian","网络接入层","网络访问层"],
        explain: { zh: "讲义说 network access layer 又叫数据链路层或物理层，对应 OSI 的 data link 与 physical 两层，并负责添加目的 MAC 地址、以太网、Wi-Fi、网卡与驱动等物理基础设施。", en: "The lecture says the network access layer, also called the data link or physical layer, corresponds to the OSI data link and physical layers, and it adds the destination MAC address and handles Ethernet, Wi-Fi, network interface cards and drivers.", ms: "Kuliah menyatakan lapisan akses rangkaian, juga dipanggil lapisan pautan data atau fizik, sepadan dengan lapisan pautan data dan fizik OSI, serta menambah alamat MAC destinasi dan mengendalikan Ethernet, Wi-Fi, kad antara muka rangkaian dan pemacu." },
        diff: 2,
        topic: { zh: "网络接入层的对应关系", en: "Network access layer mapping", ms: "Pemetaan lapisan akses rangkaian" }
      }
    ],
    "dcn-07": [
      {
        id: "dcn-07-q01",
        type: "mcq",
        q: {
          zh: "在采用星型拓扑和非屏蔽双绞线的局域网中，为什么常需要中继器（repeater）？",
          en: "Why is a repeater often needed in a LAN that uses star topology and unshielded twisted-pair cabling?",
          ms: "Mengapakah pengulang sering diperlukan dalam LAN yang menggunakan topologi bintang dan kabel pasangan terbelit tanpa perisai?"
        },
        opts: [
          { zh: "为了在不同协议之间进行转换", en: "To convert between different protocols", ms: "Untuk menukar antara protokol yang berbeza" },
          { zh: "为了把局域网划分为多个广播域", en: "To divide the LAN into several broadcast domains", ms: "Untuk membahagikan LAN kepada beberapa domain siaran" },
          { zh: "为了按 MAC 地址过滤数据帧", en: "To filter frames according to their MAC addresses", ms: "Untuk menapis bingkai mengikut alamat MAC" },
          { zh: "因为信号沿电缆传输会变弱，需要被增强才能传得更远", en: "Because the signal weakens along the cable and must be boosted to travel farther", ms: "Kerana isyarat menjadi lemah sepanjang kabel dan perlu dikuatkan untuk pergi lebih jauh" }
        ],
        answer: 3,
        explain: { zh: "讲义说信号沿电缆传输会 loss strength，所以需要 repeater 增强信号以延长网络距离，并举例星型拓扑加 UTP 的局域网。按 MAC 过滤是网桥或交换机的工作；协议转换是网关；划分广播域是路由器。", en: "The lecture says a signal loses strength as it passes along a cable, so a repeater boosts it to extend the network, citing a star-topology LAN with UTP cabling. Filtering by MAC belongs to bridges and switches, protocol conversion to gateways, and splitting broadcast domains to routers.", ms: "Kuliah menyatakan isyarat hilang kekuatan apabila merentas kabel, jadi pengulang menguatkannya untuk memanjangkan rangkaian, dengan contoh LAN topologi bintang berkarber UTP. Penapisan mengikut MAC ialah tugas jambatan dan suis, penukaran protokol ialah gerbang, dan pembahagian domain siaran ialah tugas penghala." },
        diff: 1,
        topic: { zh: "中继器的作用", en: "Function of a repeater", ms: "Fungsi pengulang" }
      },
      {
        id: "dcn-07-q02",
        type: "mcq",
        q: {
          zh: "下列哪一项是网桥（bridge）能做到而集线器（hub）做不到的？",
          en: "Which of the following can a bridge do but a hub cannot?",
          ms: "Yang manakah boleh dilakukan oleh jambatan tetapi tidak oleh hab?"
        },
        opts: [
          { zh: "重新生成信号以延长传输距离", en: "Regenerate the signal to extend the transmission distance", ms: "Menjana semula isyarat untuk memanjangkan jarak penghantaran" },
          { zh: "把大网络分割成较小的网段，并可连接 UTP 与光纤等不同介质", en: "Divide a large network into smaller segments and join dissimilar media such as UTP and fiber", ms: "Membahagikan rangkaian besar kepada segmen kecil dan menyambung media berbeza seperti UTP dan gentian optik" },
          { zh: "根据 IP 地址在不同网络之间转发数据包", en: "Forward packets between networks according to IP addresses", ms: "Memajukan paket antara rangkaian mengikut alamat IP" },
          { zh: "在不同协议的数据格式之间进行翻译", en: "Translate between the data formats of different protocols", ms: "Menterjemah antara format data protokol yang berbeza" }
        ],
        answer: 1,
        explain: { zh: "讲义说网桥工作在数据链路层，可把大网络分割成较小的 segment，还能连接 UTP 与光纤等不同介质，甚至连接 Token Ring 与 Ethernet。重新生成信号集线器也能做；按 IP 转发是路由器；协议翻译是网关。", en: "The lecture says a bridge works at the data link layer, divides a large network into smaller segments, and can join dissimilar media such as UTP and fiber, even Token Ring and Ethernet. Regenerating the signal is also done by hubs, IP forwarding belongs to routers, and protocol translation to gateways.", ms: "Kuliah menyatakan jambatan berfungsi pada lapisan pautan data, membahagikan rangkaian besar kepada segmen kecil, dan boleh menyambung media berbeza seperti UTP dan gentian optik, malah Token Ring dan Ethernet. Penjanaan semula isyarat juga dilakukan hab, pemajuan IP ialah tugas penghala, dan terjemahan protokol ialah tugas gerbang." },
        diff: 2,
        topic: { zh: "网桥的分段与介质连接", en: "Bridge segmentation and media joining", ms: "Pembahagian dan penyambungan media oleh jambatan" }
      },
      {
        id: "dcn-07-q03",
        type: "mcq",
        q: {
          zh: "交换机（switch）转发帧时，从哪个地址学习设备位置，又用哪个地址决定输出端口？",
          en: "When a switch forwards frames, which address does it learn device locations from, and which address decides the output port?",
          ms: "Semasa suis memajukan bingkai, alamat manakah digunakan untuk mempelajari lokasi peranti dan alamat manakah menentukan port output?"
        },
        opts: [
          { zh: "从源 MAC 学习，用目的 MAC 决定端口", en: "Learn from the source MAC and use the destination MAC to choose the port", ms: "Belajar daripada MAC sumber dan guna MAC destinasi untuk memilih port" },
          { zh: "从源 IP 学习，用目的 MAC 决定端口", en: "Learn from the source IP and use the destination MAC to choose the port", ms: "Belajar daripada IP sumber dan guna MAC destinasi untuk memilih port" },
          { zh: "从目的 IP 学习，用源 IP 决定端口", en: "Learn from the destination IP and use the source IP to choose the port", ms: "Belajar daripada IP destinasi dan guna IP sumber untuk memilih port" },
          { zh: "从目的 MAC 学习，用源 MAC 决定端口", en: "Learn from the destination MAC and use the source MAC to choose the port", ms: "Belajar daripada MAC destinasi dan guna MAC sumber untuk memilih port" }
        ],
        answer: 0,
        explain: { zh: "讲义写明交换机从收到帧的源 MAC 地址学习设备位置，再查目的 MAC 地址决定帧该发往哪个端口，学习结果存放在 MAC 地址表（switching table）中。选项 3 把两者对调；选项 1、2 引入了 IP 地址，那是路由器的依据。", en: "The lecture states that a switch learns where devices are from the source MAC address of incoming frames, then checks the destination MAC address to decide which port the frame should go to, storing the results in its MAC address table. Option 3 swaps the two roles, and options 1 and 2 bring in IP addresses, which routers use.", ms: "Kuliah menyatakan suis mempelajari lokasi peranti daripada alamat MAC sumber bingkai yang masuk, kemudian memeriksa alamat MAC destinasi untuk menentukan port tujuan, dan menyimpan hasilnya dalam jadual alamat MAC. Pilihan 3 menukar kedua-dua peranan, dan pilihan 1 serta 2 menggunakan alamat IP yang menjadi asas penghala." },
        diff: 2,
        topic: { zh: "交换机的 MAC 地址学习", en: "MAC learning in a switch", ms: "Pembelajaran MAC dalam suis" }
      },
      {
        id: "dcn-07-q04",
        type: "mcq",
        q: {
          zh: "关于路由器（router），下列哪项符合讲义？",
          en: "Which statement about routers matches the lecture?",
          ms: "Pernyataan manakah tentang penghala yang menepati kuliah?"
        },
        opts: [
          { zh: "默认会转发局域网广播，因此扩大广播域", en: "By default it forwards LAN broadcasts, so it enlarges the broadcast domain", ms: "Secara lalai ia memajukan siaran LAN, jadi ia membesarkan domain siaran" },
          { zh: "工作在数据链路层，依据 MAC 地址转发帧", en: "It works at the data link layer and forwards frames by MAC address", ms: "Ia berfungsi pada lapisan pautan data dan memajukan bingkai mengikut alamat MAC" },
          { zh: "默认不转发局域网广播，因而分割广播域，并可在最佳路径失效时改选其他路径", en: "By default it does not forward LAN broadcasts, so it breaks up the broadcast domain, and it can choose another path if the best one fails", ms: "Secara lalai ia tidak memajukan siaran LAN, jadi ia memecahkan domain siaran, dan ia boleh memilih laluan lain jika laluan terbaik gagal" },
          { zh: "主要用来在不同协议之间翻译数据格式", en: "It is mainly used to translate data formats between different protocols", ms: "Ia terutamanya digunakan untuk menterjemah format data antara protokol berbeza" }
        ],
        answer: 2,
        explain: { zh: "讲义说路由器默认不转发 LAN 广播，会分割 broadcast domain，并能提供容错：存在多条路径时选最佳路径，最佳路径不可用时改选其他路径。选项 0 与讲义相反；选项 1 是网桥或交换机；选项 3 是网关。", en: "The lecture says routers do not forward LAN broadcasts by default, which breaks up the broadcast domain, and they provide fault tolerance by choosing the best of several paths and switching to another when it fails. Option 0 contradicts the lecture, option 1 describes a bridge or switch, and option 3 describes a gateway.", ms: "Kuliah menyatakan penghala tidak memajukan siaran LAN secara lalai, yang memecahkan domain siaran, dan ia menyediakan toleransi kesalahan dengan memilih laluan terbaik antara beberapa laluan dan beralih ke laluan lain apabila gagal. Pilihan 0 bercanggah dengan kuliah, pilihan 1 menerangkan jambatan atau suis, dan pilihan 3 menerangkan gerbang." },
        diff: 2,
        topic: { zh: "路由器与广播域", en: "Routers and broadcast domains", ms: "Penghala dan domain siaran" }
      },
      {
        id: "dcn-07-q05",
        type: "mcq",
        q: {
          zh: "什么时候需要使用网关（gateway）？",
          en: "When is a gateway needed?",
          ms: "Bilakah gerbang diperlukan?"
        },
        opts: [
          { zh: "当两个局域网使用相同的以太网标准时", en: "When two LANs use the same Ethernet standard", ms: "Apabila dua LAN menggunakan standard Ethernet yang sama" },
          { zh: "当两个系统或网络使用不同协议或数据格式时", en: "When two systems or networks use different protocols or data formats", ms: "Apabila dua sistem atau rangkaian menggunakan protokol atau format data yang berbeza" },
          { zh: "当需要延长电缆的传输距离时", en: "When the transmission distance of the cable must be extended", ms: "Apabila jarak penghantaran kabel perlu dipanjangkan" },
          { zh: "当需要按 MAC 地址过滤帧时", en: "When frames must be filtered by MAC address", ms: "Apabila bingkai perlu ditapis mengikut alamat MAC" }
        ],
        answer: 1,
        explain: { zh: "讲义说 gateway 允许两个使用不同协议或数据格式的系统或网络通信，并可能跨越多个甚至全部 OSI 层做复杂转换。相同标准之间不需要转换；延长距离用中继器；按 MAC 过滤是网桥或交换机。", en: "The lecture says a gateway lets two systems or networks with different protocols or data formats communicate, and it may perform complex conversion across many or all OSI layers. Identical standards need no conversion, distance extension uses repeaters, and MAC filtering belongs to bridges and switches.", ms: "Kuliah menyatakan gerbang membolehkan dua sistem atau rangkaian dengan protokol atau format data berbeza berkomunikasi, dan ia mungkin melakukan penukaran kompleks merentas banyak atau semua lapisan OSI. Standard yang sama tidak perlukan penukaran, pemanjangan jarak menggunakan pengulang, dan penapisan MAC ialah tugas jambatan dan suis." },
        diff: 1,
        topic: { zh: "网关的用途", en: "Purpose of a gateway", ms: "Tujuan gerbang" }
      },
      {
        id: "dcn-07-q06",
        type: "multi",
        q: {
          zh: "下列设备中，哪些工作在 OSI 的数据链路层（第 2 层）？",
          en: "Which of the following devices operate at the OSI data link layer (Layer 2)?",
          ms: "Antara peranti berikut, yang manakah beroperasi pada lapisan pautan data OSI (Lapisan 2)?"
        },
        opts: [
          { zh: "集线器（hub）", en: "Hub", ms: "Hab" },
          { zh: "交换机（switch）", en: "Switch", ms: "Suis" },
          { zh: "路由器（router）", en: "Router", ms: "Penghala" },
          { zh: "中继器（repeater）", en: "Repeater", ms: "Pengulang" },
          { zh: "网桥（bridge）", en: "Bridge", ms: "Jambatan" }
        ],
        answer: [1,4],
        explain: { zh: "讲义说明 bridge 与 switch 都在数据链路层工作，switch 还常被称为多端口网桥并会学习 MAC 地址。repeater 与 hub 工作在物理层，只重复或增强信号；router 工作在网络层，依据 IP 地址转发数据包。", en: "The lecture states that bridges and switches work at the data link layer, with a switch often described as a multiport bridge that learns MAC addresses. Repeaters and hubs work at the physical layer and only repeat or boost signals, while routers work at the network layer and forward packets by IP address.", ms: "Kuliah menyatakan jambatan dan suis berfungsi pada lapisan pautan data, dengan suis sering digambarkan sebagai jambatan berbilang port yang mempelajari alamat MAC. Pengulang dan hab berfungsi pada lapisan fizik dan hanya mengulang atau menguatkan isyarat, manakala penghala berfungsi pada lapisan rangkaian dan memajukan paket mengikut alamat IP." },
        diff: 2,
        topic: { zh: "网络设备的工作层次", en: "OSI layers of network devices", ms: "Lapisan OSI bagi peranti rangkaian" }
      },
      {
        id: "dcn-07-q07",
        type: "tf",
        q: {
          zh: "交换机（switch）通常被描述为多端口网桥（multiport bridge）。",
          en: "A switch is commonly described as a multiport bridge.",
          ms: "Suis biasanya digambarkan sebagai jambatan berbilang port."
        },
        answer: true,
        explain: { zh: "讲义在 Switch 部分明确说它常被描述为 multiport bridge：它像网桥一样按 MAC 地址把帧转发到正确的端口，但拥有多个端口并会从源 MAC 学习设备位置，因此也归入数据链路层设备。", en: "The Switch section explicitly says it is commonly described as a multiport bridge: like a bridge it forwards frames by MAC address to the correct port, but it has many ports and learns device locations from source MAC addresses, which is why it is also a data link layer device.", ms: "Bahagian Suis menyatakan dengan jelas bahawa ia sering digambarkan sebagai jambatan berbilang port: seperti jambatan ia memajukan bingkai mengikut alamat MAC ke port yang betul, tetapi ia mempunyai banyak port dan mempelajari lokasi peranti daripada MAC sumber, justeru juga peranti lapisan pautan data." },
        diff: 1,
        topic: { zh: "交换机与网桥的关系", en: "Switch as a multiport bridge", ms: "Suis sebagai jambatan berbilang port" }
      },
      {
        id: "dcn-07-q08",
        type: "fill",
        q: {
          zh: "一种简单的连接设备，会把收到的信号转发到所有其他端口而不知道目的地址，称为 ______。",
          en: "A simple connecting device that repeats a received signal to all other ports without knowing the destination address is called a ______.",
          ms: "Peranti penyambung ringkas yang mengulang isyarat yang diterima ke semua port lain tanpa mengetahui alamat destinasi dipanggil ______."
        },
        answer: ["hub","hab","集线器"],
        explain: { zh: "讲义说 hub 只是把收到的信号重复给所有端口，它不知道目的地址，也不查看 MAC 地址，所以属于物理层设备。交换机会学习 MAC 并只发往正确端口，网桥会分段并过滤流量，都不是「发给所有人」。", en: "The lecture says a hub simply repeats a received signal to every other port; it does not know the destination and does not examine MAC addresses, so it is a physical layer device. A switch learns MAC addresses and sends only to the right port, and a bridge segments and filters traffic, so neither floods to everyone.", ms: "Kuliah menyatakan hab hanya mengulang isyarat yang diterima ke setiap port lain; ia tidak mengetahui destinasi dan tidak memeriksa alamat MAC, jadi ia peranti lapisan fizik. Suis mempelajari alamat MAC dan menghantar hanya ke port betul, dan jambatan membahagikan serta menapis trafik, jadi keduanya tidak membanjiri semua port." },
        diff: 1,
        topic: { zh: "集线器的工作原理", en: "How a hub works", ms: "Cara hab berfungsi" }
      }
    ],
    "dcn-08": [
      {
        id: "dcn-08-q01",
        type: "mcq",
        q: {
          zh: "在数据链路层的帧结构中，负责放置 FCS/CRC 等差错检测信息的是哪一部分？",
          en: "In the data link layer frame structure, which part carries error-detection information such as FCS/CRC?",
          ms: "Dalam struktur bingkai lapisan pautan data, bahagian manakah yang membawa maklumat pengesanan ralat seperti FCS/CRC?"
        },
        opts: [
          { zh: "首部（header）", en: "The header", ms: "Pengepala (header)" },
          { zh: "数据载荷（data/payload）", en: "The data or payload", ms: "Data atau muatan" },
          { zh: "尾部（trailer）", en: "The trailer", ms: "Penutup (trailer)" },
          { zh: "帧标志（flag）", en: "The frame flag", ms: "Bendera bingkai" }
        ],
        answer: 2,
        explain: { zh: "讲义把帧分为 header、data/payload 与 trailer：header 放地址与控制信息，payload 是网络层的分组，trailer 放 FCS/CRC 等差错检测信息。因此只有尾部位於载荷之后并承担检错；选项 0 负责寻址与控制，选项 1 携带的是上层数据。", en: "The lecture divides a frame into header, data/payload and trailer: the header holds addressing and control information, the payload is the network layer packet, and the trailer holds error detection such as FCS/CRC. Only the trailer sits after the payload and carries the check; option 0 handles addressing and control, and option 1 carries upper-layer data.", ms: "Kuliah membahagikan bingkai kepada pengepala, data atau muatan, dan penutup: pengepala menyimpan maklumat pengalamatan dan kawalan, muatan ialah paket lapisan rangkaian, dan penutup menyimpan pengesanan ralat seperti FCS/CRC. Hanya penutup terletak selepas muatan dan membawa semakan; pilihan 0 mengendalikan pengalamatan dan kawalan, dan pilihan 1 membawa data lapisan atas." },
        diff: 1,
        topic: { zh: "帧的三部分结构", en: "Three parts of a frame", ms: "Tiga bahagian bingkai" }
      },
      {
        id: "dcn-08-q02",
        type: "mcq",
        q: {
          zh: "发送方发得太快，接收方来不及处理帧。数据链路层的哪一项职责用来解决这个问题？",
          en: "The sender transmits faster than the receiver can process frames. Which data link layer duty solves this problem?",
          ms: "Penghantar menghantar terlalu cepat sehingga penerima tidak dapat memproses bingkai. Tugas lapisan pautan data yang manakah menyelesaikan masalah ini?"
        },
        opts: [
          { zh: "物理寻址（physical addressing）", en: "Physical addressing", ms: "Pengalamatan fizikal" },
          { zh: "流量控制（flow control）", en: "Flow control", ms: "Kawalan aliran" },
          { zh: "访问控制（access control）", en: "Access control", ms: "Kawalan akses" },
          { zh: "成帧（framing）", en: "Framing", ms: "Pembingkaian" }
        ],
        answer: 1,
        explain: { zh: "讲义把「发送方比接收方快怎么办」对应到 flow control，其作用是防止快速发送方压垮需要更多时间处理帧的接收方，方法有停等与滑动窗口。framing 解决帧的起止，physical addressing 解决「哪台设备收」，access control 解决「谁可以使用共享介质」。", en: "The lecture maps the question of a sender being faster than the receiver to flow control, which prevents a fast sender from overwhelming a receiver that needs more time, using stop-and-wait or sliding window. Framing marks frame boundaries, physical addressing decides which device receives, and access control decides who may use a shared medium.", ms: "Kuliah memetakan persoalan penghantar lebih pantas daripada penerima kepada kawalan aliran, yang menghalang penghantar pantas daripada membanjiri penerima yang perlukan lebih masa, melalui henti-dan-tunggu atau tetingkap gelongsor. Pembingkaian menandakan sempadan bingkai, pengalamatan fizikal menentukan peranti mana menerima, dan kawalan akses menentukan siapa boleh menggunakan medium dikongsi." },
        diff: 1,
        topic: { zh: "五项职责与流量控制", en: "The five duties and flow control", ms: "Lima tugas dan kawalan aliran" }
      },
      {
        id: "dcn-08-q03",
        type: "mcq",
        q: {
          zh: "一个典型的 MAC 地址有多少位，通常写成多少个十六进制字符？",
          en: "How many bits does a typical MAC address have, and how many hexadecimal characters is it usually written as?",
          ms: "Berapa bit alamat MAC lazimnya, dan berapa aksara perenambelasan yang biasa digunakan untuk menulisnya?"
        },
        opts: [
          { zh: "48 位，12 个字符", en: "48 bits, written as 12 characters", ms: "48 bit, ditulis sebagai 12 aksara" },
          { zh: "32 位，8 个字符", en: "32 bits, written as 8 characters", ms: "32 bit, ditulis sebagai 8 aksara" },
          { zh: "64 位，16 个字符", en: "64 bits, written as 16 characters", ms: "64 bit, ditulis sebagai 16 aksara" },
          { zh: "48 位，6 个字符", en: "48 bits, written as 6 characters", ms: "48 bit, ditulis sebagai 6 aksara" }
        ],
        answer: 0,
        explain: { zh: "讲义说典型 MAC 地址是 48 位，写成 12 个十六进制字符，例如 00:1A:2B:3C:4D:5E 或 001A2B3C4D5E。32 位是 IPv4 地址；64 位不是以太网 MAC 的长度；6 个十六进制字符只能表示 24 位，与 48 位不符。", en: "The lecture says a typical MAC address is 48 bits, written as 12 hexadecimal characters such as 00:1A:2B:3C:4D:5E or 001A2B3C4D5E. Thirty-two bits is the IPv4 address size, 64 bits is not the Ethernet MAC length, and six hex characters would represent only 24 bits.", ms: "Kuliah menyatakan alamat MAC lazimnya 48 bit, ditulis sebagai 12 aksara perenambelasan seperti 00:1A:2B:3C:4D:5E atau 001A2B3C4D5E. Tiga puluh dua bit ialah saiz alamat IPv4, 64 bit bukan panjang MAC Ethernet, dan enam aksara perenambelasan hanya mewakili 24 bit." },
        diff: 2,
        topic: { zh: "MAC 地址的格式", en: "MAC address format", ms: "Format alamat MAC" }
      },
      {
        id: "dcn-08-q04",
        type: "mcq",
        q: {
          zh: "哪种 ARQ 只重传丢失或损坏的那一帧，代价是需要更多接收端内存与更复杂的帧跟踪？",
          en: "Which ARQ retransmits only the frame that was lost or damaged, at the cost of more receiver memory and more complex frame tracking?",
          ms: "ARQ yang manakah hanya menghantar semula bingkai yang hilang atau rosak, dengan kos memori penerima yang lebih besar dan penjejakan bingkai yang lebih kompleks?"
        },
        opts: [
          { zh: "最简单协议（Simplest Protocol）", en: "The Simplest Protocol", ms: "Protokol Paling Ringkas" },
          { zh: "停等 ARQ（Stop-and-Wait ARQ）", en: "Stop-and-Wait ARQ", ms: "ARQ Henti-dan-Tunggu" },
          { zh: "回退 N 帧 ARQ（Go-Back-N ARQ）", en: "Go-Back-N ARQ", ms: "ARQ Kembali-N" },
          { zh: "选择重传 ARQ（Selective Repeat ARQ）", en: "Selective Repeat ARQ", ms: "ARQ Ulang Terpilih" }
        ],
        answer: 3,
        explain: { zh: "讲义说 Selective Repeat 允许多帧在途，但只重传出错的那一帧，优点是出错链路上带宽效率更高，缺点是需要更多接收端内存与更复杂的帧跟踪。Go-Back-N 会重传出错帧及其后所有未确认帧；停等 ARQ 一次只有一帧；最简单协议既无流量控制也无差错控制。", en: "The lecture says Selective Repeat allows several outstanding frames but retransmits only the damaged one, giving better bandwidth efficiency on error-prone links at the cost of more receiver memory and more complex tracking. Go-Back-N resends the bad frame plus all following outstanding frames, Stop-and-Wait ARQ keeps one frame outstanding, and the Simplest Protocol has neither flow nor error control.", ms: "Kuliah menyatakan Ulang Terpilih membenarkan beberapa bingkai tertunggak tetapi hanya menghantar semula bingkai yang rosak, memberi kecekapan lebar jalur lebih baik pada pautan berralat dengan kos memori penerima lebih besar dan penjejakan lebih kompleks. Kembali-N menghantar semula bingkai rosak serta semua bingkai tertunggak selepasnya, ARQ Henti-dan-Tunggu hanya satu bingkai, dan Protokol Paling Ringkas tiada kawalan aliran mahupun ralat." },
        diff: 2,
        topic: { zh: "Go-Back-N 与 Selective Repeat", en: "Go-Back-N versus Selective Repeat", ms: "Kembali-N berbanding Ulang Terpilih" }
      },
      {
        id: "dcn-08-q05",
        type: "mcq",
        q: {
          zh: "HDLC 的帧标志是 01111110。若这段数据出现在信息字段中，按比特填充规则发送方会发出什么？",
          en: "The HDLC frame flag is 01111110. If this pattern appears in the information field, what does the sender transmit after bit stuffing?",
          ms: "Bendera bingkai HDLC ialah 01111110. Jika corak ini muncul dalam medan maklumat, apakah yang dihantar oleh penghantar selepas pemadatan bit?"
        },
        opts: [
          { zh: "0111110", en: "0111110", ms: "0111110" },
          { zh: "0111110010", en: "0111110010", ms: "0111110010" },
          { zh: "011111010", en: "011111010", ms: "011111010" },
          { zh: "011111100", en: "011111100", ms: "011111100" }
        ],
        answer: 2,
        explain: { zh: "规则是每遇到五个连续的 1 就插入一个 0；01111110 中前五个 1 之后插入 0，得到 011111010，接收方再把这个 0 去掉即可还原。选项 3 在末尾补位而没有插入 0；选项 0 少了一个 1；选项 1 插入位置与输出都不对。", en: "The rule inserts a 0 after every five consecutive 1s, so in 01111110 a 0 goes after the first five 1s, giving 011111010, which the receiver restores by deleting that 0. Option 3 pads the end instead of inserting, option 0 is missing a 1, and option 1 has the wrong insertion position.", ms: "Peraturan menyisipkan 0 selepas setiap lima bit 1 berturut-turut, jadi dalam 01111110 satu 0 dimasukkan selepas lima bit 1 pertama, menghasilkan 011111010, yang dipulihkan penerima dengan membuang 0 itu. Pilihan 3 menambah di hujung bukan menyisip, pilihan 0 kehilangan satu bit 1, dan pilihan 1 salah kedudukan sisipan." },
        diff: 3,
        topic: { zh: "HDLC 比特填充", en: "HDLC bit stuffing", ms: "Pemadatan bit HDLC" }
      },
      {
        id: "dcn-08-q06",
        type: "multi",
        q: {
          zh: "关于停等 ARQ（Stop-and-Wait ARQ），下列哪些说法正确？",
          en: "Which statements about Stop-and-Wait ARQ are correct?",
          ms: "Pernyataan manakah tentang ARQ Henti-dan-Tunggu yang betul?"
        },
        opts: [
          { zh: "发送方在收到预期 ACK 前保留该帧的副本，超时就重传", en: "The sender keeps a copy of the frame until the expected ACK arrives and retransmits on timeout", ms: "Penghantar menyimpan salinan bingkai sehingga ACK yang dijangka tiba dan menghantar semula apabila tamat masa" },
          { zh: "发送方可以在等待确认前连续发送多帧", en: "The sender may send several frames before waiting for an acknowledgment", ms: "Penghantar boleh menghantar beberapa bingkai sebelum menunggu pengakuan" },
          { zh: "同一时间只有一个帧处于未确认状态", en: "Only one frame is outstanding at a time", ms: "Hanya satu bingkai tertunggak pada satu masa" },
          { zh: "因为信道被假定为无噪声，所以完全不需要 ACK", en: "Because the channel is assumed noiseless, no ACK is needed at all", ms: "Kerana saluran dianggap tanpa hingar, tiada ACK diperlukan sama sekali" },
          { zh: "使用 0 和 1 的序号来区分新帧与重复帧", en: "Sequence numbers 0 and 1 distinguish new frames from duplicates", ms: "Nombor jujukan 0 dan 1 membezakan bingkai baharu daripada pendua" }
        ],
        answer: [0,2,4],
        explain: { zh: "讲义说 Stop-and-Wait ARQ 一次只发一帧，用 0/1 序号识别新帧与重复帧，发送方保留副本、启动定时器，超时未收到预期 ACK 就重传。选项 1 描述的是滑动窗口；选项 3 描述的是最简单协议所假设的无噪声信道，而 ARQ 正是为有噪声信道增加差错控制。", en: "The lecture says Stop-and-Wait ARQ sends one frame at a time, uses 0/1 sequence numbers to identify new frames and duplicates, keeps a copy, starts a timer, and retransmits if the expected ACK does not arrive before timeout. Option 1 describes sliding window, and option 3 describes the noiseless assumption of the simplest protocol, whereas ARQ adds error control for noisy channels.", ms: "Kuliah menyatakan ARQ Henti-dan-Tunggu menghantar satu bingkai pada satu masa, menggunakan nombor jujukan 0/1 untuk membezakan bingkai baharu dan pendua, menyimpan salinan, memulakan pemasa, dan menghantar semula jika ACK yang dijangka tidak tiba sebelum tamat masa. Pilihan 1 menerangkan tetingkap gelongsor, dan pilihan 3 menerangkan andaian tanpa hingar bagi protokol paling ringkas, sedangkan ARQ menambah kawalan ralat untuk saluran berhingar." },
        diff: 2,
        topic: { zh: "停等 ARQ 的机制", en: "Mechanisms of Stop-and-Wait ARQ", ms: "Mekanisme ARQ Henti-dan-Tunggu" }
      },
      {
        id: "dcn-08-q07",
        type: "tf",
        q: {
          zh: "在回退 N 帧 ARQ（Go-Back-N ARQ）中，发送方只重传丢失或损坏的那一帧。",
          en: "In Go-Back-N ARQ, the sender retransmits only the frame that was lost or damaged.",
          ms: "Dalam ARQ Kembali-N, penghantar hanya menghantar semula bingkai yang hilang atau rosak."
        },
        answer: false,
        explain: { zh: "讲义说 Go-Back-N 在某一帧丢失或损坏时，会回退到该帧，并把它以及其后所有未确认的帧一起重传；只重传出错那一帧的是 Selective Repeat ARQ。这正是两者的关键区别，也是 Go-Back-N 可能重传已正确接收帧的原因。", en: "The lecture says Go-Back-N goes back to the bad frame and retransmits it together with all following outstanding frames; retransmitting only the damaged frame is Selective Repeat ARQ. This is the key difference and the reason Go-Back-N may resend frames that were already received correctly.", ms: "Kuliah menyatakan Kembali-N kembali ke bingkai rosak dan menghantar semula bingkai itu bersama semua bingkai tertunggak selepasnya; menghantar semula hanya bingkai rosak ialah ARQ Ulang Terpilih. Inilah perbezaan utama dan sebab Kembali-N mungkin menghantar semula bingkai yang sudah diterima dengan betul." },
        diff: 2,
        topic: { zh: "Go-Back-N 的重传范围", en: "Retransmission scope in Go-Back-N", ms: "Skop penghantaran semula Kembali-N" }
      },
      {
        id: "dcn-08-q08",
        type: "fill",
        q: {
          zh: "MAC 地址 FF:FF:FF:FF:FF:FF 用作 ______ 地址，把帧发送给广播域内的所有站点。",
          en: "The MAC address FF:FF:FF:FF:FF:FF is used as the ______ address, sending a frame to every station in the broadcast domain.",
          ms: "Alamat MAC FF:FF:FF:FF:FF:FF digunakan sebagai alamat ______, menghantar bingkai kepada setiap stesen dalam domain siaran."
        },
        answer: ["broadcast","siaran","广播","broadcast address"],
        explain: { zh: "讲义把 MAC 地址分为单播（1→1）、组播（1→选定的一组）与广播（1→全部），并给出广播地址 FF:FF:FF:FF:FF:FF。单播只发给一个特定目的，组播只发给订阅了该组的一组接口，都不使用全 F 的地址。", en: "The lecture classifies MAC addresses as unicast, one to one, multicast, one to a selected group, and broadcast, one to all, giving FF:FF:FF:FF:FF:FF as the broadcast address. Unicast targets a single destination and multicast targets subscribed group members, so neither uses the all-F address.", ms: "Kuliah mengelaskan alamat MAC kepada unikasi, satu kepada satu, multisiaran, satu kepada kumpulan terpilih, dan siaran, satu kepada semua, dengan FF:FF:FF:FF:FF:FF sebagai alamat siaran. Unikasi menyasarkan satu destinasi dan multisiaran menyasarkan ahli kumpulan yang melanggan, jadi keduanya tidak menggunakan alamat semua F." },
        diff: 2,
        topic: { zh: "单播、组播与广播", en: "Unicast, multicast and broadcast", ms: "Unikasi, multisiaran dan siaran" }
      }
    ],
    "dcn-09": [
      {
        id: "dcn-09-q01",
        type: "mcq",
        q: {
          zh: "IPv6 地址有多少位，通常怎样书写？",
          en: "How many bits does an IPv6 address have, and how is it usually written?",
          ms: "Berapa bit alamat IPv6 dan bagaimanakah ia biasanya ditulis?"
        },
        opts: [
          { zh: "64 位，写成四组四位十六进制数", en: "64 bits, written as four groups of four hexadecimal digits", ms: "64 bit, ditulis sebagai empat kumpulan empat digit perenambelasan" },
          { zh: "32 位，写成四组十进制数", en: "32 bits, written as four decimal numbers", ms: "32 bit, ditulis sebagai empat nombor perpuluhan" },
          { zh: "128 位，写成四组十进制八位组", en: "128 bits, written as four decimal octets", ms: "128 bit, ditulis sebagai empat oktet perpuluhan" },
          { zh: "128 位，写成八组四位十六进制数", en: "128 bits, written as eight groups of four hexadecimal digits", ms: "128 bit, ditulis sebagai lapan kumpulan empat digit perenambelasan" }
        ],
        answer: 3,
        explain: { zh: "讲义说 IPv6 长 128 位（16 字节），写成八组四位十六进制数，例如 2001:0db8:85a3::8a2e:0370:7334，总地址数约 3.4×10³⁸。32 位与四组十进制八位组是 IPv4 的写法；64 位既不是 IPv4 也不是 IPv6 的长度。", en: "The lecture says IPv6 is 128 bits, or 16 bytes, written as eight groups of four hexadecimal digits such as 2001:0db8:85a3::8a2e:0370:7334, giving about 3.4×10^38 addresses. Thirty-two bits in four decimal octets is IPv4's notation, and 64 bits is neither IPv4 nor IPv6.", ms: "Kuliah menyatakan IPv6 ialah 128 bit, atau 16 bait, ditulis sebagai lapan kumpulan empat digit perenambelasan seperti 2001:0db8:85a3::8a2e:0370:7334, memberikan kira-kira 3.4×10^38 alamat. Tiga puluh dua bit dalam empat oktet perpuluhan ialah tatatanda IPv4, dan 64 bit bukan IPv4 mahupun IPv6." },
        diff: 1,
        topic: { zh: "IPv6 的地址长度与写法", en: "IPv6 length and notation", ms: "Panjang dan tatatanda IPv6" }
      },
      {
        id: "dcn-09-q02",
        type: "mcq",
        q: {
          zh: "一个 /27 前缀的子网，可用主机地址有多少个？",
          en: "How many usable host addresses does a /27 subnet provide?",
          ms: "Berapa banyak alamat hos yang boleh digunakan bagi subnet /27?"
        },
        opts: [
          { zh: "31 个", en: "31", ms: "31" },
          { zh: "32 个", en: "32", ms: "32" },
          { zh: "30 个", en: "30", ms: "30" },
          { zh: "14 个", en: "14", ms: "14" }
        ],
        answer: 2,
        explain: { zh: "/27 留下 32 − 27 = 5 个主机位，总地址数为 2⁵ = 32，再减去网络地址与广播地址，可用主机为 30。选项 1 是总地址数而没有减 2；选项 3 相当于 /28 的可用主机数；选项 0 只减了 1 个地址。", en: "A /27 leaves 32 − 27 = 5 host bits, so there are 2^5 = 32 addresses; subtracting the network and broadcast addresses leaves 30 usable hosts. Option 1 is the total without subtracting two, option 3 equals the usable count for /28, and option 0 subtracts only one address.", ms: "Awalan /27 meninggalkan 32 − 27 = 5 bit hos, jadi terdapat 2^5 = 32 alamat; selepas menolak alamat rangkaian dan siaran, tinggal 30 hos boleh digunakan. Pilihan 1 ialah jumlah tanpa menolak dua, pilihan 3 sama dengan bilangan boleh guna bagi /28, dan pilihan 0 menolak satu alamat sahaja." },
        diff: 2,
        topic: { zh: "前缀长度与可用主机数", en: "Prefix length and usable hosts", ms: "Panjang awalan dan hos boleh guna" }
      },
      {
        id: "dcn-09-q03",
        type: "mcq",
        q: {
          zh: "Aina 的笔记本 192.168.10.10/24 经默认网关 192.168.10.1 向 203.0.113.20 发送数据包。她在本地以太网上发出的帧，目的 MAC 地址应该是什么？",
          en: "Aina's laptop 192.168.10.10/24 sends a packet to 203.0.113.20 through the default gateway 192.168.10.1. What should the destination MAC address be in the frame on her local Ethernet?",
          ms: "Komputer riba Aina 192.168.10.10/24 menghantar paket ke 203.0.113.20 melalui gerbang lalai 192.168.10.1. Apakah alamat MAC destinasi dalam bingkai pada Ethernet tempatannya?"
        },
        opts: [
          { zh: "默认网关接口 192.168.10.1 的 MAC 地址", en: "The MAC address of the default gateway interface 192.168.10.1", ms: "Alamat MAC antara muka gerbang lalai 192.168.10.1" },
          { zh: "Aina 自己网卡的 MAC 地址", en: "The MAC address of Aina's own network card", ms: "Alamat MAC kad rangkaian Aina sendiri" },
          { zh: "广播地址 FF:FF:FF:FF:FF:FF", en: "The broadcast address FF:FF:FF:FF:FF:FF", ms: "Alamat siaran FF:FF:FF:FF:FF:FF" },
          { zh: "网页服务器 203.0.113.20 的 MAC 地址", en: "The MAC address of the web server 203.0.113.20", ms: "Alamat MAC pelayan web 203.0.113.20" }
        ],
        answer: 0,
        explain: { zh: "目的网络 203.0.113.0/24 与本机 192.168.10.0/24 不同，属于远程目的，所以本地帧发往默认网关，目的 MAC 是网关接口的 MAC，而 IP 目的地址仍然是服务器的 203.0.113.20。服务器不在本地链路上，Aina 既无法也不需要知道它的 MAC，只有网关那一跳才需要。", en: "The destination network 203.0.113.0/24 differs from the local 192.168.10.0/24, so the destination is remote and the local frame goes to the default gateway, with the gateway interface's MAC as the frame destination while the IP destination stays 203.0.113.20. The server is not on the local link, so Aina neither can nor needs to know its MAC.", ms: "Rangkaian destinasi 203.0.113.0/24 berbeza daripada rangkaian tempatan 192.168.10.0/24, jadi destinasinya jauh dan bingkai tempatan dihantar ke gerbang lalai, dengan MAC antara muka gerbang sebagai destinasi bingkai manakala destinasi IP kekal 203.0.113.20. Pelayan itu bukan pada pautan tempatan, jadi Aina tidak dapat dan tidak perlu mengetahui MAC-nya." },
        diff: 3,
        topic: { zh: "本地与远程目的地的下一跳", en: "Next hop for local versus remote destinations", ms: "Hop seterusnya bagi destinasi tempatan dan jauh" }
      },
      {
        id: "dcn-09-q04",
        type: "mcq",
        q: {
          zh: "关于 IP 地址与 MAC 地址的比较，下列哪项正确？",
          en: "Which statement correctly compares IP addresses with MAC addresses?",
          ms: "Pernyataan manakah yang betul membandingkan alamat IP dengan alamat MAC?"
        },
        opts: [
          { zh: "IP 地址属于数据链路层，MAC 地址属于网络层", en: "IP addresses belong to the data link layer and MAC addresses to the network layer", ms: "Alamat IP tergolong dalam lapisan pautan data dan alamat MAC dalam lapisan rangkaian" },
          { zh: "IP 地址是层次化的，通常在端到端传输中保持不变；MAC 地址通常是扁平的接口标识，每经过一跳路由就会改变", en: "IP is hierarchical and normally stays the same end to end, while a MAC address is usually a flat interface identifier that changes at every routed hop", ms: "IP bersifat hierarki dan biasanya kekal dari hujung ke hujung, manakala alamat MAC lazimnya pengecam antara muka rata yang berubah pada setiap hop penghalaan" },
          { zh: "两者都是扁平的标识符，只是长度不同", en: "Both are flat identifiers that differ only in length", ms: "Kedua-duanya pengecam rata yang hanya berbeza dari segi panjang" },
          { zh: "IP 地址在每一跳都会改变，MAC 地址则始终不变", en: "The IP address changes at every hop, while the MAC address never changes", ms: "Alamat IP berubah pada setiap hop, manakala alamat MAC tidak pernah berubah" }
        ],
        answer: 1,
        explain: { zh: "讲义的对比表指出：IP 是网络层的逻辑地址，结构为「网络前缀 + 主机部分」，在路由过程中通常保持端到端不变；MAC 是数据链路层的物理地址，通常是扁平的接口标识，每经过一条被路由的链路都会改变。选项 0 把层次对调；选项 2 忽略 IP 的层次结构；选项 3 把两者的变化规律说反。", en: "The comparison table says IP is the network layer logical address structured as network prefix plus host part and normally remains end to end, while MAC is the data link layer physical address, usually a flat interface identifier that changes at each routed link. Option 0 swaps the layers, option 2 ignores IP's hierarchy, and option 3 reverses how the two change.", ms: "Jadual perbandingan menyatakan IP ialah alamat logik lapisan rangkaian berstruktur awalan rangkaian tambah bahagian hos dan biasanya kekal dari hujung ke hujung, manakala MAC ialah alamat fizikal lapisan pautan data, lazimnya pengecam antara muka rata yang berubah pada setiap pautan berpenghala. Pilihan 0 menukar lapisan, pilihan 2 mengabaikan hierarki IP, dan pilihan 3 menterbalikkan cara kedua-duanya berubah." },
        diff: 2,
        topic: { zh: "IP 地址与 MAC 地址的区别", en: "IP address versus MAC address", ms: "Alamat IP berbanding alamat MAC" }
      },
      {
        id: "dcn-09-q05",
        type: "mcq",
        q: {
          zh: "关于路由（routing）与转发（forwarding）的区别，下列哪项正确？",
          en: "Which statement correctly distinguishes routing from forwarding?",
          ms: "Pernyataan manakah yang betul membezakan penghalaan daripada pemajuan?"
        },
        opts: [
          { zh: "路由只在主机上执行，转发只在交换机上执行", en: "Routing runs only on hosts and forwarding only on switches", ms: "Penghalaan hanya berjalan pada hos dan pemajuan hanya pada suis" },
          { zh: "路由决定这个已收到的数据包现在往哪里走，转发负责建立路由表", en: "Routing decides where this received packet should go now, and forwarding builds the routing table", ms: "Penghalaan menentukan ke mana paket yang diterima ini patut pergi, dan pemajuan membina jadual penghalaan" },
          { zh: "路由回答存在哪些路径、偏好哪一条，并建立或更新路由信息；转发为每个收到的数据包选择输出接口或下一跳", en: "Routing asks which paths exist and which is preferred, building or updating routing information, while forwarding chooses the output interface or next hop for each received packet", ms: "Penghalaan menyoal laluan mana yang wujud dan mana yang diutamakan, lalu membina atau mengemas kini maklumat penghalaan, manakala pemajuan memilih antara muka output atau hop seterusnya bagi setiap paket yang diterima" },
          { zh: "两者是同一件事，只是术语不同", en: "They are the same thing under two different names", ms: "Kedua-duanya perkara yang sama dengan dua nama berbeza" }
        ],
        answer: 2,
        explain: { zh: "讲义用两个问题区分：Routing 问「有哪些路径、哪条更优」，结果是建立或更新路由信息；Forwarding 问「这个已收到的数据包现在去哪里」，结果是选择输出接口或下一跳。选项 1 把两者对调；选项 3 忽略了这个区别；选项 0 与讲义不符，路由与转发都由路由器执行。", en: "The lecture separates them with two questions: routing asks which paths exist and which is preferred, producing or updating routing information, while forwarding asks where this received packet goes now, producing a choice of output interface or next hop. Option 1 swaps them, option 3 ignores the distinction, and option 0 is wrong because routers perform both.", ms: "Kuliah memisahkan keduanya dengan dua soalan: penghalaan menyoal laluan mana yang wujud dan mana yang diutamakan, lalu menghasilkan atau mengemas kini maklumat penghalaan, manakala pemajuan menyoal ke mana paket yang diterima ini pergi sekarang, lalu memilih antara muka output atau hop seterusnya. Pilihan 1 menukar keduanya, pilihan 3 mengabaikan perbezaan, dan pilihan 0 salah kerana penghala melakukan kedua-duanya." },
        diff: 2,
        topic: { zh: "路由与转发", en: "Routing versus forwarding", ms: "Penghalaan berbanding pemajuan" }
      },
      {
        id: "dcn-09-q06",
        type: "multi",
        q: {
          zh: "按讲义的私有 IPv4 地址表，下列哪些属于私有地址块？",
          en: "According to the lecture's private IPv4 table, which of the following are private address blocks?",
          ms: "Menurut jadual alamat IPv4 peribadi dalam kuliah, yang manakah blok alamat peribadi?"
        },
        opts: [
          { zh: "8.8.8.0 – 8.8.8.255（/24）", en: "8.8.8.0 – 8.8.8.255 (/24)", ms: "8.8.8.0 – 8.8.8.255 (/24)" },
          { zh: "10.0.0.0 – 10.255.255.255（/8）", en: "10.0.0.0 – 10.255.255.255 (/8)", ms: "10.0.0.0 – 10.255.255.255 (/8)" },
          { zh: "172.16.0.0 – 172.31.255.255（/12）", en: "172.16.0.0 – 172.31.255.255 (/12)", ms: "172.16.0.0 – 172.31.255.255 (/12)" },
          { zh: "192.168.0.0 – 192.168.255.255（/16）", en: "192.168.0.0 – 192.168.255.255 (/16)", ms: "192.168.0.0 – 192.168.255.255 (/16)" },
          { zh: "203.0.113.0 – 203.0.113.255（/24）", en: "203.0.113.0 – 203.0.113.255 (/24)", ms: "203.0.113.0 – 203.0.113.255 (/24)" }
        ],
        answer: [1,2,3],
        explain: { zh: "讲义列出三个私有块：10.0.0.0/8、172.16.0.0/12 与 192.168.0.0/16，它们不在公共互联网上被路由，可在私有网络内重复使用。203.0.113.0/24 与 8.8.8.0/24 属于公共地址范围，不符合私有块的定义。", en: "The lecture lists three private blocks: 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16, which are not routed on the public Internet and can be reused inside private networks. The 203.0.113.0/24 and 8.8.8.0/24 ranges are public addresses and do not fit the definition.", ms: "Kuliah menyenaraikan tiga blok peribadi: 10.0.0.0/8, 172.16.0.0/12 dan 192.168.0.0/16, yang tidak dihalakan di Internet awam dan boleh diguna semula dalam rangkaian peribadi. Julat 203.0.113.0/24 dan 8.8.8.0/24 ialah alamat awam dan tidak menepati takrif tersebut." },
        diff: 2,
        topic: { zh: "私有 IPv4 地址块", en: "Private IPv4 blocks", ms: "Blok IPv4 peribadi" }
      },
      {
        id: "dcn-09-q07",
        type: "tf",
        q: {
          zh: "在数据报网络中，同一消息的各个分组可以走不同路径，并可能乱序到达。",
          en: "In a datagram network, packets from one message may follow different paths and may arrive out of order.",
          ms: "Dalam rangkaian datagram, paket daripada satu mesej boleh melalui laluan berbeza dan mungkin tiba tidak mengikut urutan."
        },
        answer: true,
        explain: { zh: "讲义说数据报服务不需要连接建立，每个分组携带完整目的地址，路由器独立处理每个分组，因此同一消息的分组可能走不同路径，也可能乱序、延迟、重复或丢失。虚电路网络才倾向于沿同一条已建立的逻辑路径传输。", en: "The lecture says the datagram service needs no connection setup, each packet carries the full destination address, and routers treat packets independently, so packets of one message may take different paths and may be delayed, duplicated, lost or arrive out of order. Virtual-circuit networks tend to follow one established logical path.", ms: "Kuliah menyatakan perkhidmatan datagram tidak memerlukan persediaan sambungan, setiap paket membawa alamat destinasi penuh, dan penghala mengendalikan setiap paket secara berasingan, jadi paket satu mesej boleh melalui laluan berbeza dan mungkin lewat, berganda, hilang atau tiba tidak mengikut urutan. Rangkaian litar maya cenderung mengikut satu laluan logik yang telah dibina." },
        diff: 2,
        topic: { zh: "数据报服务的特点", en: "Characteristics of datagram service", ms: "Ciri perkhidmatan datagram" }
      },
      {
        id: "dcn-09-q08",
        type: "fill",
        q: {
          zh: "借出主机位、把一个大 IP 网络划分成多个较小网络的过程称为 ______。",
          en: "The process of borrowing host bits to divide one large IP network into smaller networks is called ______.",
          ms: "Proses meminjam bit hos untuk membahagikan satu rangkaian IP besar kepada rangkaian yang lebih kecil dipanggil ______."
        },
        answer: ["subnetting","子网划分","penyahsubnetan","pembahagian subnet"],
        explain: { zh: "讲义说 subnetting 借出更多主机位可以产生更多子网，但每个子网内可用主机地址会减少；例如 192.168.10.0/24 借 2 位就得到 4 个 /26 子网，每个子网可用 62 台主机。", en: "The lecture says subnetting borrows more host bits to create more subnets but leaves fewer usable hosts in each; for example 192.168.10.0/24 borrows 2 bits to give four /26 subnets with 62 usable hosts each.", ms: "Kuliah menyatakan penyahsubnetan meminjam lebih banyak bit hos untuk menghasilkan lebih banyak subnet tetapi meninggalkan lebih sedikit hos boleh guna dalam setiap subnet; contohnya 192.168.10.0/24 meminjam 2 bit untuk menghasilkan empat subnet /26 dengan 62 hos boleh guna setiap satu." },
        diff: 1,
        topic: { zh: "子网划分的概念", en: "Concept of subnetting", ms: "Konsep penyahsubnetan" }
      }
    ],
    "dcn-10": [
      {
        id: "dcn-10-q01",
        type: "mcq",
        q: {
          zh: "端口号有多少位，取值范围是多少？",
          en: "How many bits does a port number have, and what is its range?",
          ms: "Berapa bit nombor port dan apakah julatnya?"
        },
        opts: [
          { zh: "8 位，0 到 255", en: "8 bits, from 0 to 255", ms: "8 bit, dari 0 hingga 255" },
          { zh: "32 位，0 到 4294967295", en: "32 bits, from 0 to 4294967295", ms: "32 bit, dari 0 hingga 4294967295" },
          { zh: "16 位，1 到 65536", en: "16 bits, from 1 to 65536", ms: "16 bit, dari 1 hingga 65536" },
          { zh: "16 位，0 到 65535", en: "16 bits, from 0 to 65535", ms: "16 bit, dari 0 hingga 65535" }
        ],
        answer: 3,
        explain: { zh: "讲义说端口号有 16 位，因此取值从 0 到 65,535。8 位对应 0–255，是 IPv4 一个八位组的范围；32 位是 IPv4 地址；1 到 65536 的上界超出了 16 位能表示的最大值 65535，而且端口号从 0 起算。", en: "The lecture says a port number is 16 bits, so values run from 0 to 65,535. Eight bits gives 0–255, the range of one IPv4 octet; 32 bits is the IPv4 address size; and 1 to 65536 exceeds the largest 16-bit value and starts from the wrong lower bound.", ms: "Kuliah menyatakan nombor port ialah 16 bit, jadi nilainya dari 0 hingga 65,535. Lapan bit memberi 0–255, iaitu julat satu oktet IPv4; 32 bit ialah saiz alamat IPv4; dan 1 hingga 65536 melebihi nilai 16 bit terbesar serta bermula pada had bawah yang salah." },
        diff: 1,
        topic: { zh: "端口号的位数与范围", en: "Port number size and range", ms: "Saiz dan julat nombor port" }
      },
      {
        id: "dcn-10-q02",
        type: "mcq",
        q: {
          zh: "关于源端口与目的端口的作用，下列哪项正确？",
          en: "Which statement about the roles of source and destination ports is correct?",
          ms: "Pernyataan manakah tentang peranan port sumber dan port destinasi yang betul?"
        },
        opts: [
          { zh: "两个端口都标识服务器上的服务，与客户端无关", en: "Both ports identify services on the server and have nothing to do with the client", ms: "Kedua-dua port mengenal pasti perkhidmatan pada pelayan dan tiada kaitan dengan pelanggan" },
          { zh: "源端口标识主机，目的端口标识网络", en: "The source port identifies the host and the destination port identifies the network", ms: "Port sumber mengenal pasti hos dan port destinasi mengenal pasti rangkaian" },
          { zh: "目的端口标识接收服务，源端口通常标识发出请求的客户端应用，以便对方回复", en: "The destination port identifies the receiving service, and the source port usually identifies the client application so the reply can be returned", ms: "Port destinasi mengenal pasti perkhidmatan penerima, dan port sumber biasanya mengenal pasti aplikasi pelanggan supaya balasan dapat dihantar" },
          { zh: "源端口标识接收服务，目的端口标识客户端应用", en: "The source port identifies the receiving service and the destination port identifies the client application", ms: "Port sumber mengenal pasti perkhidmatan penerima dan port destinasi mengenal pasti aplikasi pelanggan" }
        ],
        answer: 2,
        explain: { zh: "讲义说目的端口标识接收服务，源端口通常标识客户端应用，供对方回应用；TCP 与 UDP 各自拥有独立的端口号空间。选项 3 把两者对调；选项 0 忽略了客户端一侧的源端口；选项 1 混淆了端口与地址的分工。", en: "The lecture says the destination port identifies the receiving service, while the source port usually identifies the client application so the reply can be sent back, and TCP and UDP each have their own port number space. Option 3 swaps the roles, option 0 ignores the client-side source port, and option 1 confuses ports with addresses.", ms: "Kuliah menyatakan port destinasi mengenal pasti perkhidmatan penerima, manakala port sumber biasanya mengenal pasti aplikasi pelanggan supaya balasan dapat dihantar, dan TCP serta UDP masing-masing mempunyai ruang nombor port sendiri. Pilihan 3 menukar peranan, pilihan 0 mengabaikan port sumber pelanggan, dan pilihan 1 mengelirukan port dengan alamat." },
        diff: 2,
        topic: { zh: "源端口与目的端口", en: "Source and destination ports", ms: "Port sumber dan destinasi" }
      },
      {
        id: "dcn-10-q03",
        type: "mcq",
        q: {
          zh: "发送方从序号 1001 开始发送 500 字节。哪个确认号表示「到 1500 为止的每个字节都已收到」？",
          en: "A sender transmits 500 bytes starting at sequence number 1001. Which acknowledgment number confirms receipt of every byte through 1500?",
          ms: "Penghantar menghantar 500 bait bermula pada nombor jujukan 1001. Nombor pengakuan manakah mengesahkan penerimaan setiap bait sehingga 1500?"
        },
        opts: [
          { zh: "501", en: "501", ms: "501" },
          { zh: "1501", en: "1501", ms: "1501" },
          { zh: "1500", en: "1500", ms: "1500" },
          { zh: "1001", en: "1001", ms: "1001" }
        ],
        answer: 1,
        explain: { zh: "讲义说确认号是累积的，接收方报告「下一个期望的字节」，所以收到 1001 到 1500 这 500 个字节后应回 ACK 1501。选项 2 报的是最后一个已收字节，而不是下一个期望字节；选项 3 是起始序号；选项 0 把字节数当成了序号。", en: "The lecture says acknowledgment numbers are cumulative and the receiver reports the next byte it expects, so after receiving the 500 bytes from 1001 to 1500 it returns ACK 1501. Option 2 reports the last byte received instead of the next expected one, option 3 is the starting sequence number, and option 0 mistakes the byte count for a sequence number.", ms: "Kuliah menyatakan nombor pengakuan bersifat kumulatif dan penerima melaporkan bait seterusnya yang dijangka, jadi selepas menerima 500 bait dari 1001 hingga 1500 ia memulangkan ACK 1501. Pilihan 2 melaporkan bait terakhir diterima bukan yang dijangka, pilihan 3 ialah nombor jujukan awal, dan pilihan 0 menganggap bilangan bait sebagai nombor jujukan." },
        diff: 2,
        topic: { zh: "TCP 累积确认", en: "Cumulative acknowledgment in TCP", ms: "Pengakuan kumulatif TCP" }
      },
      {
        id: "dcn-10-q04",
        type: "mcq",
        q: {
          zh: "关于 UDP，下列哪项正确？",
          en: "Which statement about UDP is correct?",
          ms: "Pernyataan manakah tentang UDP yang betul?"
        },
        opts: [
          { zh: "UDP 面向连接，传输前必须完成握手", en: "UDP is connection oriented and must complete a handshake before transfer", ms: "UDP berorientasikan sambungan dan mesti melengkapkan jabat tangan sebelum pemindahan" },
          { zh: "UDP 保留消息边界，但不保证交付、顺序或去重", en: "UDP preserves message boundaries but does not guarantee delivery, order or duplicate protection", ms: "UDP mengekalkan sempadan mesej tetapi tidak menjamin penghantaran, urutan atau perlindungan pendua" },
          { zh: "UDP 的校验和不仅能发现错误，还会修复并重传出错的数据", en: "UDP's checksum not only detects errors but also repairs and retransmits the corrupted data", ms: "Checksum UDP bukan sahaja mengesan ralat malah membaiki dan menghantar semula data yang rosak" },
          { zh: "UDP 保证数据按序到达，丢失时会自动重传", en: "UDP guarantees in-order delivery and retransmits lost data automatically", ms: "UDP menjamin penghantaran mengikut urutan dan menghantar semula data yang hilang secara automatik" }
        ],
        answer: 1,
        explain: { zh: "讲义说 UDP 面向消息，一条应用消息就是一个用户数据报，保留消息边界，但只是尽力而为：不保证交付、顺序或重复保护；校验和只能发现损坏，不能修复或重传。选项 3、0 描述的是 TCP；选项 2 与「UDP 不修复、不重传」相反。", en: "The lecture says UDP is message oriented, one application message becomes one user datagram, and it preserves message boundaries, but it is best effort and does not guarantee delivery, order or duplicate protection, while its checksum detects corruption without repairing it. Options 0 and 3 describe TCP, and option 2 contradicts the no-repair rule.", ms: "Kuliah menyatakan UDP berorientasikan mesej, satu mesej aplikasi menjadi satu datagram pengguna, dan ia mengekalkan sempadan mesej, tetapi ia hanya usaha terbaik dan tidak menjamin penghantaran, urutan atau perlindungan pendua, manakala checksum mengesan kerosakan tanpa membaikinya. Pilihan 3 dan 0 menerangkan TCP, dan pilihan 2 bercanggah dengan peraturan tanpa pembaikan." },
        diff: 2,
        topic: { zh: "UDP 的特性", en: "Characteristics of UDP", ms: "Ciri-ciri UDP" }
      },
      {
        id: "dcn-10-q05",
        type: "mcq",
        q: {
          zh: "TCP 的哪种机制让接收方通告可用的缓冲区空间，从而避免发送方压垮接收方？",
          en: "Which TCP mechanism lets the receiver advertise available buffer space so the sender does not overwhelm it?",
          ms: "Mekanisme TCP yang manakah membolehkan penerima mengumumkan ruang penimbal yang tersedia supaya penghantar tidak membanjiri penerima?"
        },
        opts: [
          { zh: "流量控制（flow control）", en: "Flow control", ms: "Kawalan aliran" },
          { zh: "字节编号（byte numbering）", en: "Byte numbering", ms: "Penomboran bait" },
          { zh: "校验和（checksum）", en: "Checksum", ms: "Checksum" },
          { zh: "拥塞控制（congestion control）", en: "Congestion control", ms: "Kawalan kesesakan" }
        ],
        answer: 0,
        explain: { zh: "讲义把 flow control 描述为接收方通告可用缓冲区空间，属于端到端的接收能力控制；congestion control 是发送方根据网络状况调整流量，二者针对的对象不同。字节编号用于定位数据，校验和用于发现差错，都不负责缓冲区空间。", en: "The lecture describes flow control as the receiver advertising available buffer space, an end-to-end limit on receiving capacity, whereas congestion control adjusts traffic to network conditions. Byte numbering locates data and the checksum detects errors, so neither deals with buffer space.", ms: "Kuliah menerangkan kawalan aliran sebagai penerima mengumumkan ruang penimbal tersedia, iaitu had keupayaan menerima dari hujung ke hujung, manakala kawalan kesesakan menyesuaikan trafik dengan keadaan rangkaian. Penomboran bait menentukan kedudukan data dan checksum mengesan ralat, jadi keduanya tidak mengendalikan ruang penimbal." },
        diff: 2,
        topic: { zh: "TCP 流量控制与拥塞控制", en: "TCP flow control and congestion control", ms: "Kawalan aliran dan kesesakan TCP" }
      },
      {
        id: "dcn-10-q06",
        type: "multi",
        q: {
          zh: "下列哪些是讲义列出的 TCP 特性？",
          en: "Which of the following are TCP characteristics listed in the lecture?",
          ms: "Yang manakah ciri TCP yang disenaraikan dalam kuliah?"
        },
        opts: [
          { zh: "面向消息，保留消息边界", en: "Message oriented, preserving message boundaries", ms: "Berorientasikan mesej, mengekalkan sempadan mesej" },
          { zh: "无握手、开销更低", en: "No handshake and lower overhead", ms: "Tiada jabat tangan dan overhed lebih rendah" },
          { zh: "面向连接，传输前先建立连接", en: "Connection oriented, so a connection is established first", ms: "Berorientasikan sambungan, jadi sambungan dibina terlebih dahulu" },
          { zh: "提供可靠、按序的字节流", en: "It provides a reliable, ordered byte stream", ms: "Ia menyediakan aliran bait yang boleh dipercayai dan tersusun" },
          { zh: "全双工，双方都能发送和接收", en: "Full duplex, so both sides can send and receive", ms: "Dupleks penuh, jadi kedua-dua pihak boleh menghantar dan menerima" }
        ],
        answer: [2,3,4],
        explain: { zh: "讲义说 TCP 提供可靠字节流，面向连接、全双工、可靠且按序，并会重传丢失的数据。保留消息边界是 UDP 的特点；无握手、开销更低也是 UDP 相对 TCP 的优势，都不是 TCP 的特性。", en: "The lecture says TCP provides a reliable byte stream; it is connection oriented, full duplex, reliable and ordered, and retransmits missing data. Preserving message boundaries is a UDP trait, and requiring no handshake with lower overhead is UDP's advantage over TCP, so neither describes TCP.", ms: "Kuliah menyatakan TCP menyediakan aliran bait yang boleh dipercayai; ia berorientasikan sambungan, dupleks penuh, boleh dipercayai dan tersusun, serta menghantar semula data yang hilang. Mengekalkan sempadan mesej ialah sifat UDP, dan tiada jabat tangan dengan overhed lebih rendah ialah kelebihan UDP berbanding TCP, jadi keduanya bukan ciri TCP." },
        diff: 2,
        topic: { zh: "TCP 的主要特性", en: "Main TCP characteristics", ms: "Ciri utama TCP" }
      },
      {
        id: "dcn-10-q07",
        type: "tf",
        q: {
          zh: "端口号长 32 位，取值范围是 0 到 4,294,967,295。",
          en: "A port number is 32 bits long, so its values range from 0 to 4,294,967,295.",
          ms: "Nombor port mempunyai 32 bit, jadi nilainya antara 0 hingga 4,294,967,295."
        },
        answer: false,
        explain: { zh: "讲义说端口号只有 16 位，范围是 0 到 65,535；0 到 4,294,967,295 是 32 位能表示的范围，对应的是 IPv4 的地址空间而不是端口号。题干把位宽和对应范围都夸大了。", en: "The lecture says a port number is only 16 bits, giving 0 to 65,535; the range 0 to 4,294,967,295 is what 32 bits can express and belongs to the IPv4 address space, not to ports. The statement inflates both the bit width and the corresponding range.", ms: "Kuliah menyatakan nombor port hanya 16 bit, memberikan 0 hingga 65,535; julat 0 hingga 4,294,967,295 ialah apa yang boleh diungkapkan 32 bit dan tergolong dalam ruang alamat IPv4, bukan port. Pernyataan itu membesarkan kedua-dua lebar bit dan julatnya." },
        diff: 1,
        topic: { zh: "端口号的长度", en: "Length of a port number", ms: "Panjang nombor port" }
      },
      {
        id: "dcn-10-q08",
        type: "fill",
        q: {
          zh: "TCP 在传输数据前先通过三次 ______ 同步序号并确认双方都已就绪。",
          en: "Before transferring data, TCP uses a three-way ______ to synchronize sequence numbers and confirm both sides are ready.",
          ms: "Sebelum memindahkan data, TCP menggunakan ______ tiga hala untuk menyegerakkan nombor jujukan dan mengesahkan kedua-dua pihak sedia."
        },
        answer: ["handshake","three-way handshake","握手","jabat tangan"],
        explain: { zh: "讲义说握手（handshake）用于同步序号并确认双方准备就绪，TCP 建立连接的过程就是三次握手。它属于连接建立阶段，不是数据重传、流量控制或差错检测机制。", en: "The lecture says the handshake synchronizes sequence numbers and confirms that both sides are ready, and TCP's connection setup is this three-way handshake. It belongs to the connection establishment phase, not to retransmission, flow control or error detection.", ms: "Kuliah menyatakan jabat tangan menyegerakkan nombor jujukan dan mengesahkan kedua-dua pihak sedia, dan persediaan sambungan TCP ialah jabat tangan tiga hala ini. Ia tergolong dalam fasa pembinaan sambungan, bukan penghantaran semula, kawalan aliran atau pengesanan ralat." },
        diff: 1,
        topic: { zh: "TCP 三次握手", en: "TCP three-way handshake", ms: "Jabat tangan tiga hala TCP" }
      }
    ],
    "dcn-11": [
      {
        id: "dcn-11-q01",
        type: "mcq",
        q: {
          zh: "关于 HTTP，下列哪项符合讲义？",
          en: "Which statement about HTTP matches the lecture?",
          ms: "Pernyataan manakah tentang HTTP yang menepati kuliah?"
        },
        opts: [
          { zh: "HTTP 规定浏览器与 Web 服务器如何通信，采用请求/响应模型，工作在应用层", en: "HTTP defines how browsers and web servers communicate using a request/response model, and it works at the application layer", ms: "HTTP menentukan cara pelayar dan pelayan web berkomunikasi melalui model permintaan/respons, dan ia berfungsi pada lapisan aplikasi" },
          { zh: "HTTP 是传输层协议，使用端口 25 传输网页", en: "HTTP is a transport layer protocol that uses port 25 to transfer web pages", ms: "HTTP ialah protokol lapisan pengangkutan yang menggunakan port 25 untuk memindahkan halaman web" },
          { zh: "HTTP 采用广播模型，服务器主动把所有网页推给客户端", en: "HTTP uses a broadcast model in which the server pushes every web page to clients", ms: "HTTP menggunakan model siaran di mana pelayan menolak setiap halaman web kepada pelanggan" },
          { zh: "HTTP 是无连接的传输协议，负责为网页分段并提供重传", en: "HTTP is a connectionless transport protocol that segments web pages and provides retransmission", ms: "HTTP ialah protokol pengangkutan tanpa sambungan yang membahagikan halaman web dan menyediakan penghantaran semula" }
        ],
        answer: 0,
        explain: { zh: "讲义说 HTTP 定义浏览器与服务器如何通信以传送网页，工作在 OSI 应用层，采用浏览器发请求、服务器回响应的 request/response 模型。端口 25 是 SMTP；HTTP 不是广播式推送；分段与重传是传输层 TCP 的职责。", en: "The lecture says HTTP defines how browsers and web servers communicate to transfer web pages, runs at the OSI application layer, and uses a request/response model where the browser sends a request and the server responds. Port 25 belongs to SMTP, HTTP is not a broadcast push protocol, and segmentation and retransmission are TCP's job.", ms: "Kuliah menyatakan HTTP menentukan cara pelayar dan pelayan web berkomunikasi untuk memindahkan halaman web, beroperasi pada lapisan aplikasi OSI, dan menggunakan model permintaan/respons di mana pelayar menghantar permintaan dan pelayan memberi respons. Port 25 ialah SMTP, HTTP bukan protokol siaran, dan pembahagian serta penghantaran semula ialah tugas TCP." },
        diff: 1,
        topic: { zh: "HTTP 的模型与层次", en: "HTTP model and layer", ms: "Model dan lapisan HTTP" }
      },
      {
        id: "dcn-11-q02",
        type: "mcq",
        q: {
          zh: "FTP 使用 TCP 的哪个端口作控制、哪个端口传数据？",
          en: "Which TCP ports does FTP use for control and for data?",
          ms: "Port TCP manakah yang digunakan FTP untuk kawalan dan untuk data?"
        },
        opts: [
          { zh: "端口 23 作控制、端口 25 传数据", en: "Port 23 for control and port 25 for data", ms: "Port 23 untuk kawalan dan port 25 untuk data" },
          { zh: "端口 69 作控制、端口 21 传数据", en: "Port 69 for control and port 21 for data", ms: "Port 69 untuk kawalan dan port 21 untuk data" },
          { zh: "端口 21 作控制、端口 20 传数据", en: "Port 21 for control and port 20 for data", ms: "Port 21 untuk kawalan dan port 20 untuk data" },
          { zh: "端口 20 作控制、端口 21 传数据", en: "Port 20 for control and port 21 for data", ms: "Port 20 untuk kawalan dan port 21 untuk data" }
        ],
        answer: 2,
        explain: { zh: "讲义说 FTP 用 TCP 保证可靠传输，端口 21 用于控制、端口 20 用于数据，并维护各自独立的控制连接与数据连接。选项 3 把两个端口对调；端口 23 是 Telnet、25 是 SMTP；69 是 TFTP 使用的 UDP 端口。", en: "The lecture says FTP uses TCP for reliability, with port 21 for control and port 20 for data, and it maintains separate control and data connections. Option 3 swaps the two ports, port 23 belongs to Telnet and 25 to SMTP, and 69 is the UDP port used by TFTP.", ms: "Kuliah menyatakan FTP menggunakan TCP untuk kebolehpercayaan, dengan port 21 untuk kawalan dan port 20 untuk data, dan ia mengekalkan sambungan kawalan serta data yang berasingan. Pilihan 3 menukar kedua-dua port, port 23 ialah Telnet dan 25 ialah SMTP, dan 69 ialah port UDP yang digunakan TFTP." },
        diff: 2,
        topic: { zh: "FTP 的控制端口与数据端口", en: "FTP control and data ports", ms: "Port kawalan dan data FTP" }
      },
      {
        id: "dcn-11-q03",
        type: "mcq",
        q: {
          zh: "关于 TFTP，下列哪项正确？",
          en: "Which statement about TFTP is correct?",
          ms: "Pernyataan manakah tentang TFTP yang betul?"
        },
        opts: [
          { zh: "它是 FTP 的加密版本，使用 TLS 保护传输", en: "It is the encrypted version of FTP and uses TLS to protect the transfer", ms: "Ia versi penyulitan FTP dan menggunakan TLS untuk melindungi pemindahan" },
          { zh: "它使用 TCP 端口 25，与 SMTP 共用同一端口", en: "It uses TCP port 25, sharing the same port as SMTP", ms: "Ia menggunakan port TCP 25, berkongsi port yang sama dengan SMTP" },
          { zh: "使用 TCP 端口 21，要求用户名与密码认证", en: "It uses TCP port 21 and requires username and password authentication", ms: "Ia menggunakan port TCP 21 dan memerlukan pengesahan nama pengguna serta kata laluan" },
          { zh: "使用 UDP 端口 69，没有认证机制，快速但不可靠，常用于启动无盘工作站或传送配置文件", en: "It uses UDP port 69, has no authentication, is fast but unreliable, and is often used to boot diskless workstations or transfer configuration files", ms: "Ia menggunakan port UDP 69, tiada pengesahan, pantas tetapi tidak boleh dipercayai, dan sering digunakan untuk but stesen kerja tanpa cakera atau memindahkan fail konfigurasi" }
        ],
        answer: 3,
        explain: { zh: "讲义说 TFTP 是简化、lockstep 的 FTP，工作在应用层，使用 UDP 端口 69 做无连接传输，没有认证机制，快速但不可靠，常用于启动无盘工作站或传送配置文件。选项 2 是 FTP 的特征；选项 0 混淆了 HTTPS；选项 1 把 SMTP 的端口张冠李戴。", en: "The lecture says TFTP is a simple lockstep FTP at the application layer that uses UDP port 69 for connectionless transfer, has no authentication, is fast but unreliable, and is used for booting diskless workstations or transferring configuration files. Option 2 describes FTP, option 0 confuses HTTPS, and option 1 borrows SMTP's port.", ms: "Kuliah menyatakan TFTP ialah FTP ringkas yang lockstep pada lapisan aplikasi, menggunakan port UDP 69 untuk penghantaran tanpa sambungan, tiada pengesahan, pantas tetapi tidak boleh dipercayai, dan digunakan untuk but stesen kerja tanpa cakera atau memindahkan fail konfigurasi. Pilihan 2 menerangkan FTP, pilihan 0 mengelirukan HTTPS, dan pilihan 1 meminjam port SMTP." },
        diff: 2,
        topic: { zh: "TFTP 的特点", en: "Characteristics of TFTP", ms: "Ciri-ciri TFTP" }
      },
      {
        id: "dcn-11-q04",
        type: "mcq",
        q: {
          zh: "SMTP 使用 TCP 的哪个端口，主要承担什么任务？",
          en: "Which TCP port does SMTP use, and what is its main task?",
          ms: "Port TCP manakah yang digunakan SMTP dan apakah tugas utamanya?"
        },
        opts: [
          { zh: "端口 25，发送电子邮件", en: "Port 25, sending email", ms: "Port 25, menghantar e-mel" },
          { zh: "端口 25，取回电子邮件", en: "Port 25, retrieving email", ms: "Port 25, mengambil e-mel" },
          { zh: "端口 110，发送电子邮件", en: "Port 110, sending email", ms: "Port 110, menghantar e-mel" },
          { zh: "端口 53，发送电子邮件", en: "Port 53, sending email", ms: "Port 53, menghantar e-mel" }
        ],
        answer: 0,
        explain: { zh: "讲义说 SMTP 是应用层协议，用 TCP 端口 25 做服务器之间的邮件中继，负责发送邮件；取回邮件由 POP3 或 IMAP 负责。选项 1 把「发送」换成「取回」；端口 110 是 POP3；端口 53 是 DNS。", en: "The lecture says SMTP is an application layer protocol using TCP port 25 for server-to-server mail relay, and it sends email, while POP3 or IMAP retrieves mail. Option 1 replaces sending with retrieving, port 110 belongs to POP3, and port 53 belongs to DNS.", ms: "Kuliah menyatakan SMTP ialah protokol lapisan aplikasi yang menggunakan port TCP 25 untuk penyampaian mel antara pelayan, dan ia menghantar e-mel, manakala POP3 atau IMAP mengambil mel. Pilihan 1 menggantikan menghantar dengan mengambil, port 110 ialah POP3, dan port 53 ialah DNS." },
        diff: 1,
        topic: { zh: "SMTP 的端口与用途", en: "SMTP port and purpose", ms: "Port dan tujuan SMTP" }
      },
      {
        id: "dcn-11-q05",
        type: "mcq",
        q: {
          zh: "关于 DNS，下列哪项符合讲义？",
          en: "Which statement about DNS matches the lecture?",
          ms: "Pernyataan manakah tentang DNS yang menepati kuliah?"
        },
        opts: [
          { zh: "为网页提供请求/响应式的超文本传输服务", en: "It provides a request/response hypertext transfer service for web pages", ms: "Ia menyediakan perkhidmatan pemindahan hiperteks permintaan/respons untuk halaman web" },
          { zh: "把便于人阅读的域名转换成 IP 地址，作为分布式数据库运行，使用 53 端口上的 UDP/TCP", en: "It translates human-friendly domain names into IP addresses, runs as a distributed database, and uses UDP/TCP on port 53", ms: "Ia menterjemah nama domain mesra manusia kepada alamat IP, berjalan sebagai pangkalan data teragih, dan menggunakan UDP/TCP pada port 53" },
          { zh: "把 IP 地址转换成便于人阅读的域名，只在单台服务器上运行", en: "It converts IP addresses into human-friendly domain names and runs on a single server only", ms: "Ia menukar alamat IP kepada nama domain mesra manusia dan hanya berjalan pada satu pelayan" },
          { zh: "用 TCP 端口 25 在邮件服务器之间转发邮件", en: "It relays email between mail servers using TCP port 25", ms: "Ia menyampaikan e-mel antara pelayan mel menggunakan port TCP 25" }
        ],
        answer: 1,
        explain: { zh: "讲义说 DNS 把人类友好的域名翻译成 IP 地址，作为跨多台服务器的分布式数据库工作，并使用 53 端口上的 UDP/TCP。选项 2 把方向说反，而且 DNS 不是单台服务器；端口 25 属于 SMTP；请求/响应的超文本传输是 HTTP。", en: "The lecture says DNS translates human-friendly domain names into IP addresses, works as a distributed database across multiple servers, and uses UDP/TCP on port 53. Option 2 reverses the direction and wrongly makes it a single server, port 25 belongs to SMTP, and request/response hypertext transfer is HTTP.", ms: "Kuliah menyatakan DNS menterjemah nama domain mesra manusia kepada alamat IP, berfungsi sebagai pangkalan data teragih merentas beberapa pelayan, dan menggunakan UDP/TCP pada port 53. Pilihan 2 menterbalikkan arah dan menyatakan ia satu pelayan, port 25 ialah SMTP, dan pemindahan hiperteks permintaan/respons ialah HTTP." },
        diff: 2,
        topic: { zh: "DNS 的作用与端口", en: "DNS function and port", ms: "Fungsi dan port DNS" }
      },
      {
        id: "dcn-11-q06",
        type: "multi",
        q: {
          zh: "对地址 https://www.example.com/course/week15，下列哪些说明正确？",
          en: "For the address https://www.example.com/course/week15, which descriptions are correct?",
          ms: "Bagi alamat https://www.example.com/course/week15, penerangan manakah yang betul?"
        },
        opts: [
          { zh: "/course/week15 是 path，即所请求的资源", en: "/course/week15 is the path, that is the requested resource", ms: "/course/week15 ialah laluan, iaitu sumber yang diminta" },
          { zh: "/course/week15 是 host，www.example.com 是 path", en: "/course/week15 is the host and www.example.com is the path", ms: "/course/week15 ialah hos dan www.example.com ialah laluan" },
          { zh: "www.example.com 是 path，https 是所请求资源的名称", en: "www.example.com is the path and https is the name of the requested resource", ms: "www.example.com ialah laluan dan https ialah nama sumber yang diminta" },
          { zh: "https 是 scheme，表示浏览器使用带 TLS 的 HTTP", en: "https is the scheme, meaning the browser uses HTTP with TLS", ms: "https ialah skema, bermakna pelayar menggunakan HTTP dengan TLS" },
          { zh: "www.example.com 是 host，即服务器名称", en: "www.example.com is the host, that is the server name", ms: "www.example.com ialah hos, iaitu nama pelayan" }
        ],
        answer: [0,3,4],
        explain: { zh: "讲义把网址拆成 scheme、host 与 path 三部分：https 是 scheme（浏览器使用带 TLS 的 HTTP），www.example.com 是服务器名称，/course/week15 是被请求资源的路径；DNS 先解析主机名，再由 HTTP 请求资源。选项 1、2 把这三部分的位置对调了。", en: "The lecture splits the URL into scheme, host and path: https is the scheme meaning HTTP with TLS, www.example.com is the server name, and /course/week15 is the path of the requested resource; DNS resolves the host name first and HTTP then requests the resource. Options 1 and 2 swap these parts.", ms: "Kuliah membahagikan URL kepada skema, hos dan laluan: https ialah skema yang bermaksud HTTP dengan TLS, www.example.com ialah nama pelayan, dan /course/week15 ialah laluan sumber yang diminta; DNS menyelesaikan nama hos dahulu dan HTTP kemudian meminta sumber itu. Pilihan 1 dan 2 menukar bahagian-bahagian ini." },
        diff: 2,
        topic: { zh: "URL 的组成", en: "Parts of a URL", ms: "Bahagian URL" }
      },
      {
        id: "dcn-11-q07",
        type: "tf",
        q: {
          zh: "网页（web page）是一组相关页面与资源的集合，而网站（website）是浏览器可以显示的单个文档。",
          en: "A web page is a related group of pages and resources, while a website is a single document that a browser can display.",
          ms: "Halaman web ialah kumpulan halaman dan sumber yang berkaitan, manakala laman web ialah satu dokumen tunggal yang boleh dipaparkan oleh pelayar."
        },
        answer: false,
        explain: { zh: "讲义的定义正好相反：web page 是一个文档或资源，website 是一组相关的页面与资源，hyperlink 才是从一个页面指向另一个资源的链接。题干把 web page 与 website 的定义互换了，这是本章最容易混淆的一对术语。", en: "The lecture defines them the other way round: a web page is one document or resource, a website is a related group of pages and resources, and a hyperlink is a link from one page to another resource. The statement swaps the two definitions, the most easily confused pair of terms in this chapter.", ms: "Kuliah mentakrifkannya secara bertentangan: halaman web ialah satu dokumen atau sumber, laman web ialah kumpulan halaman dan sumber berkaitan, dan hiperpautan ialah pautan dari satu halaman ke sumber lain. Pernyataan itu menukar kedua-dua takrif, iaitu pasangan istilah paling mengelirukan dalam bab ini." },
        diff: 2,
        topic: { zh: "网页与网站的区别", en: "Web page versus website", ms: "Halaman web berbanding laman web" }
      },
      {
        id: "dcn-11-q08",
        type: "fill",
        q: {
          zh: "HTTPS 用 ______ 保护浏览器与服务器之间的连接。",
          en: "HTTPS protects the connection between the browser and the server with ______.",
          ms: "HTTPS melindungi sambungan antara pelayar dan pelayan dengan ______."
        },
        answer: ["TLS","SSL","Transport Layer Security","lapisan TLS"],
        explain: { zh: "讲义说 https 这个 scheme 表示浏览器使用带 TLS 的 HTTP，即由 TLS 保护连接，所以 HTTPS 并不是另一种传输协议，它仍然是应用层的 HTTP，只是加了一层加密保护。", en: "The lecture says the https scheme means the browser uses HTTP with TLS, so the connection is protected by TLS and HTTPS is not a different transport protocol; it is still application-layer HTTP with an added encryption layer.", ms: "Kuliah menyatakan skema https bermaksud pelayar menggunakan HTTP dengan TLS, jadi sambungan dilindungi oleh TLS dan HTTPS bukan protokol pengangkutan yang lain; ia masih HTTP lapisan aplikasi dengan lapisan penyulitan tambahan." },
        diff: 1,
        topic: { zh: "HTTPS 与 TLS", en: "HTTPS and TLS", ms: "HTTPS dan TLS" }
      }
    ]
  }
};
