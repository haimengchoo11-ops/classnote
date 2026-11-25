window.CN_DATA = window.CN_DATA || {};
window.CN_DATA["dcn"] = {
  id: "dcn",
  code: "",
  name: { zh: "数据通信与网络", en: "Data Communication and Networking", ms: "Komunikasi Data dan Rangkaian" },
  desc: { zh: "本课程系统讲解数据如何通过传输介质从发送方可靠地送到接收方。内容从信号与传输介质讲起，经过差错控制、局域网与网络拓扑，再沿 OSI 与 TCP/IP 参考模型逐层深入数据链路层、网络层、传输层和应用层。学完后你能解释常见网络设备与协议的作用，并能计算比特率、信道容量与差错校验。", en: "This course explains how data travels reliably from a sender to a receiver across a transmission medium. It starts from signals and transmission media, moves through error control, LANs and network topologies, then follows the OSI and TCP/IP reference models layer by layer: data link, network, transport and application. By the end you can explain the role of common networking devices and protocols, and compute bit rates, channel capacity and error-checking values.", ms: "Kursus ini menerangkan bagaimana data dihantar dengan boleh dipercayai daripada penghantar kepada penerima melalui medium penghantaran. Ia bermula dengan isyarat dan medium penghantaran, kemudian kawalan ralat, LAN dan topologi rangkaian, dan seterusnya mengikut model rujukan OSI serta TCP/IP lapisan demi lapisan: lapisan pautan data, rangkaian, pengangkutan dan aplikasi. Selepas kursus ini anda boleh menjelaskan peranan peranti dan protokol rangkaian yang biasa, serta mengira kadar bit, kapasiti saluran dan nilai semakan ralat." },
  icon: "🌐",
  color: "#2563eb",
  chapters: [
    {
      id: "dcn-01",
      num: 1,
      title: { zh: "数据与网络通信导论", en: "Introduction to Data and Networking Communication", ms: "Pengenalan kepada Komunikasi Data dan Rangkaian" },
      file: "dcn/CHAPTER 1 2627 1 (1).pdf",
      pages: 19,
      summary: { zh: "本章建立数据通信系统的基本框架：数据或报文、发送方、接收方、传输介质和协议这五个组成部分，并说明信号如何在介质上承载数据。课程把信号分为模拟信号与数字信号，用振幅、频率、相位描述模拟信号，用位间隔、比特率、波特率描述数字信号。接着比较模拟传输与数字传输的差别，指出数字传输更抗噪、可加密、便于多路复用。最后给出数字通信数据速率的两个理论上限：无噪声信道的奈奎斯特公式和有噪声信道的香农公式，并介绍 DTE、DCE 以及 UART/USART 的作用。", en: "This chapter builds the basic framework of a data communication system: data or message, sender, receiver, transmission medium and protocol, and explains how a signal carries that data over the medium. Signals are divided into analog signals, described by amplitude, frequency and phase, and digital signals, described by bit interval, bit rate and baud rate. The chapter then compares analog and digital transmission and shows why digital transmission is more noise resistant, supports encryption and allows multiplexing. Finally it presents the two theoretical limits on data rate, the Nyquist bit rate for a noiseless channel and the Shannon capacity for a noisy channel, and introduces DTE, DCE and UART/USART.", ms: "Bab ini membina kerangka asas sistem komunikasi data: data atau mesej, penghantar, penerima, medium penghantaran dan protokol, serta menerangkan bagaimana isyarat membawa data tersebut melalui medium. Isyarat dibahagikan kepada isyarat analog yang dihuraikan melalui amplitud, frekuensi dan fasa, dan isyarat digital yang dihuraikan melalui selang bit, kadar bit dan kadar baud. Bab ini kemudian membandingkan penghantaran analog dengan penghantaran digital dan menjelaskan mengapa penghantaran digital lebih tahan hingar, menyokong penyulitan dan membolehkan pemultipleksan. Akhir sekali, dua had teori kadar data dibincangkan, iaitu kadar bit Nyquist bagi saluran tanpa hingar dan kapasiti Shannon bagi saluran berhingar, diikuti pengenalan kepada DTE, DCE dan UART/USART." },
      points: [
        { zh: "数据通信系统的五个基本要素是数据或报文、发送方、接收方、传输介质和协议，缺一不可。", en: "The five basic elements of a data communication system are the data or message, the sender, the receiver, the transmission medium and the protocol.", ms: "Lima unsur asas sistem komunikasi data ialah data atau mesej, penghantar, penerima, medium penghantaran dan protokol." },
        { zh: "信号是用于表示数据的电磁或电气波形，可通过空气、真空、卫星或天线传播到移动设备。", en: "A signal is an electromagnetic or electrical waveform used to represent data, and it can travel through air or vacuum, to a satellite or from an antenna to a mobile device.", ms: "Isyarat ialah gelombang elektromagnet atau elektrik yang digunakan untuk mewakili data, dan ia boleh merambat melalui udara atau vakum, ke satelit atau dari antena ke peranti mudah alih." },
        { zh: "模拟信号是随时间平滑变化的连续波形，通常画成正弦波，用振幅、频率和相位三个特征描述。", en: "An analog signal is a continuous wave that changes smoothly over time, usually drawn as a sine wave, and it is described by amplitude, frequency and phase.", ms: "Isyarat analog ialah gelombang selanjar yang berubah dengan lancar mengikut masa, biasanya dilukis sebagai gelombang sinus, dan dihuraikan melalui amplitud, frekuensi serta fasa." },
        { zh: "数字信号用离散电压电平表示数据，一般用高电平表示二进制 1、低电平表示二进制 0。", en: "A digital signal represents data with a sequence of discrete voltage levels, typically a high voltage for binary 1 and a low voltage for binary 0.", ms: "Isyarat digital mewakili data dengan jujukan aras voltan diskret, biasanya voltan tinggi untuk binari 1 dan voltan rendah untuk binari 0." },
        { zh: "比特率是每秒传输的比特数，波特率是每秒信号变化的次数，比特率等于波特率乘以每个信号元素携带的比特数。", en: "Bit rate is the number of bits transmitted per second while baud rate is the number of signal changes per second, and bit rate equals baud rate multiplied by the number of bits carried by one signal element.", ms: "Kadar bit ialah bilangan bit yang dihantar sesaat manakala kadar baud ialah bilangan perubahan isyarat sesaat, dan kadar bit sama dengan kadar baud didarab dengan bilangan bit bagi satu unsur isyarat." },
        { zh: "模拟传输只用放大器增强衰减的信号，但放大器同时把噪声也放大，因此容易受干扰和失真影响。 数字传输使用中继器恢复原始数字数据并重发干净的信号，因此不会放大噪声，适合长距离传输。", en: "Analog transmission uses amplifiers to boost a weakened signal, but the amplifier also boosts the noise, so the signal is vulnerable to interference and distortion. Digital transmission uses repeaters that recover the original digital data and retransmit a clean signal, so noise is not amplified and longer distances become possible.", ms: "Penghantaran analog menggunakan penguat untuk memperkuat isyarat yang lemah, tetapi penguat turut memperkuat hingar, jadi isyarat mudah terjejas oleh gangguan dan herotan. Penghantaran digital menggunakan pengulang yang memulihkan data digital asal dan menghantar semula isyarat bersih, jadi hingar tidak diperkuat dan jarak yang lebih jauh dapat dicapai." },
        { zh: "数字传输的优点包括抗噪能力更强、可用中继器长距离传输、支持加密保密、支持多路复用提高带宽利用率、设备便宜且容易获得。", en: "The advantages of digital transmission include higher accuracy against noise, longer distance with repeaters, support for encryption, support for multiplexing such as TDM for better bandwidth usage, and cheaper widely available equipment.", ms: "Kelebihan penghantaran digital termasuk ketepatan yang lebih tinggi terhadap hingar, jarak yang lebih jauh dengan pengulang, sokongan penyulitan, sokongan pemultipleksan seperti TDM untuk penggunaan jalur lebar yang lebih baik, serta peralatan yang lebih murah dan mudah diperoleh." },
        { zh: "数据速率受三个因素限制：带宽（Hz）越大可传的数据越多、信号电平数越多每个信号元素携带的比特越多、噪声越大可达到的最大数据速率越低。", en: "The data rate depends on three factors: more bandwidth in Hz allows more data, more signal levels allow more bits per signal element, and more noise lowers the maximum achievable data rate.", ms: "Kadar data bergantung pada tiga faktor: jalur lebar dalam Hz yang lebih besar membenarkan lebih banyak data, lebih banyak aras isyarat memberi lebih banyak bit bagi setiap unsur isyarat, dan lebih banyak hingar merendahkan kadar data maksimum yang boleh dicapai." },
        { zh: "奈奎斯特公式 Bit Rate = 2 x Bandwidth x log2(L) 给出无噪声信道的最大比特率，例如带宽 2000 Hz、2 个电平时比特率为 4000 bps。 香农公式 Capacity = Bandwidth x log2(1 + SNR) 给出有噪声信道的最大容量，其中 SNR 是信噪比。", en: "The Nyquist formula, Bit Rate = 2 x Bandwidth x log2(L), gives the maximum bit rate of a noiseless channel; with a bandwidth of 2000 Hz and 2 levels the bit rate is 4000 bps. The Shannon formula, Capacity = Bandwidth x log2(1 + SNR), gives the maximum capacity of a noisy channel, where SNR is the signal-to-noise ratio.", ms: "Formula Nyquist, Kadar Bit = 2 x Jalur Lebar x log2(L), memberikan kadar bit maksimum bagi saluran tanpa hingar; dengan jalur lebar 2000 Hz dan 2 aras, kadar bit ialah 4000 bps. Formula Shannon, Kapasiti = Jalur Lebar x log2(1 + SNR), memberikan kapasiti maksimum saluran berhingar, dengan SNR ialah nisbah isyarat kepada hingar." },
        { zh: "UART 把并行数据转换为串行数据并用于异步通信，USART 同时支持同步和异步两种模式；DTE 产生数据，DCE 如调制解调器把数据转换成适合介质传输的形式。", en: "UART converts parallel data to serial data for asynchronous communication, USART supports both synchronous and asynchronous modes, DTE generates the data and DCE such as a modem converts it into a form suitable for the medium.", ms: "UART menukar data selari kepada data bersiri untuk komunikasi tak segerak, USART menyokong mod segerak dan tak segerak, DTE menjana data manakala DCE seperti modem menukarnya kepada bentuk yang sesuai untuk medium." }
      ],
      terms: [
        {
          en: "Signal",
          zh: "信号",
          ms: "Isyarat",
          def: { zh: "用于在传输过程中表示数据的电磁或电气波形。", en: "An electromagnetic or electrical waveform that represents data during transmission.", ms: "Gelombang elektromagnet atau elektrik yang mewakili data semasa penghantaran." }
        },
        {
          en: "Protocol",
          zh: "协议",
          ms: "Protokol",
          def: { zh: "管理通信的一组规则，规定数据如何格式化、发送和接收。", en: "A set of rules governing communication, such as how data is formatted, transmitted and received.", ms: "Satu set peraturan yang mengawal komunikasi, contohnya cara data diformat, dihantar dan diterima." }
        },
        {
          en: "Analog Signal",
          zh: "模拟信号",
          ms: "Isyarat Analog",
          def: { zh: "随时间平滑变化的连续波形，可分为简单信号和复合信号。", en: "A continuous wave that changes smoothly over time, either a simple sine wave or a composite signal.", ms: "Gelombang selanjar yang berubah dengan lancar mengikut masa, sama ada gelombang sinus mudah atau isyarat komposit." }
        },
        {
          en: "Digital Signal",
          zh: "数字信号",
          ms: "Isyarat Digital",
          def: { zh: "用离散电压电平序列表示数据的信号，通常只有高低两个电平。", en: "A signal that represents data as a sequence of discrete voltage levels, usually only two levels.", ms: "Isyarat yang mewakili data sebagai jujukan aras voltan diskret, biasanya hanya dua aras." }
        },
        {
          en: "Amplitude",
          zh: "振幅",
          ms: "Amplitud",
          def: { zh: "波形的高度，表示信号强度，以伏特为单位。", en: "The height of the wave, which represents signal strength and is measured in volts.", ms: "Ketinggian gelombang yang mewakili kekuatan isyarat dan diukur dalam volt." }
        },
        {
          en: "Frequency",
          zh: "频率",
          ms: "Frekuensi",
          def: { zh: "每秒完成的周期数，以赫兹 Hz 为单位。", en: "The number of cycles completed per second, measured in hertz (Hz).", ms: "Bilangan kitaran sesaat, diukur dalam hertz (Hz)." }
        },
        {
          en: "Phase",
          zh: "相位",
          ms: "Fasa",
          def: { zh: "波形相对于时间零点所处的位置。", en: "The position of the waveform relative to time zero.", ms: "Kedudukan gelombang berbanding masa sifar." }
        },
        {
          en: "Bit Rate",
          zh: "比特率",
          ms: "Kadar Bit",
          def: { zh: "每秒传输的比特数，单位为 bps，等于波特率乘以每个信号元素的比特数。", en: "The number of bits transmitted per second in bps, equal to baud rate multiplied by bits per signal element.", ms: "Bilangan bit yang dihantar sesaat dalam bps, sama dengan kadar baud didarab dengan bit bagi setiap unsur isyarat." }
        },
        {
          en: "Baud Rate",
          zh: "波特率",
          ms: "Kadar Baud",
          def: { zh: "每秒信号元素或信号变化的次数。", en: "The number of signal elements or signal changes per second.", ms: "Bilangan unsur isyarat atau perubahan isyarat sesaat." }
        },
        {
          en: "Bandwidth",
          zh: "带宽",
          ms: "Jalur Lebar",
          def: { zh: "信道能够通过的频率范围，以 Hz 表示，带宽越大可传的数据越多。", en: "The range of frequencies a channel can pass, measured in Hz; a wider bandwidth can carry more data.", ms: "Julat frekuensi yang boleh dilalui saluran, diukur dalam Hz; jalur lebar yang lebih besar boleh membawa lebih banyak data." }
        },
        {
          en: "Noise",
          zh: "噪声",
          ms: "Hingar",
          def: { zh: "传输过程中混入的多余能量，会降低可达到的最大数据速率。", en: "Unwanted extra energy added during transmission that lowers the maximum achievable data rate.", ms: "Tenaga tambahan yang tidak dikehendaki semasa penghantaran dan merendahkan kadar data maksimum." }
        },
        {
          en: "Repeater",
          zh: "中继器",
          ms: "Pengulang",
          def: { zh: "恢复原始数字数据并重发干净信号、但不放大噪声的设备。", en: "A device that recovers the original digital data and retransmits a clean signal without amplifying noise.", ms: "Peranti yang memulihkan data digital asal dan menghantar semula isyarat bersih tanpa memperkuat hingar." }
        },
        {
          en: "DTE (Data Terminal Equipment)",
          zh: "数据终端设备",
          ms: "Peralatan Terminal Data (DTE)",
          def: { zh: "产生数据并控制通信的设备，如计算机、终端或路由器。", en: "A device that generates data and controls communication, such as a computer, terminal or router.", ms: "Peranti yang menjana data dan mengawal komunikasi, seperti komputer, terminal atau penghala." }
        },
        {
          en: "DCE (Data Communication Equipment)",
          zh: "数据通信设备",
          ms: "Peralatan Komunikasi Data (DCE)",
          def: { zh: "通常指调制解调器，它把数字数据转换成适合介质传输的形式，是 DTE 与信道之间的接口。", en: "Usually a modem; it converts digital data into a form suitable for the medium and acts as the interface between DTE and the channel.", ms: "Biasanya modem; ia menukar data digital kepada bentuk yang sesuai untuk medium dan menjadi antara muka antara DTE dengan saluran." }
        },
        {
          en: "Shannon Capacity",
          zh: "香农容量",
          ms: "Kapasiti Shannon",
          def: { zh: "有噪声信道的最大数据速率，等于带宽乘以 log2(1 + SNR)。", en: "The maximum data rate of a noisy channel, equal to bandwidth multiplied by log2(1 + SNR).", ms: "Kadar data maksimum bagi saluran berhingar, sama dengan jalur lebar didarab log2(1 + SNR)." }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: { zh: "数据通信系统的组成", en: "Components of a Data Communication System", ms: "Komponen Sistem Komunikasi Data" },
          caption: { zh: "协议贯穿整个系统，规定数据如何格式化、发送和接收", en: "The protocol spans the whole system and governs how data is formatted, sent and received", ms: "Protokol merentasi seluruh sistem dan mengawal cara data diformat, dihantar dan diterima" },
          steps: [
            {
              label: { zh: "数据 / 报文", en: "Data / Message", ms: "Data / Mesej" },
              note: { zh: "文本、数字、音频、视频或图像", en: "Text, numbers, audio, video or images", ms: "Teks, nombor, audio, video atau imej" }
            },
            {
              label: { zh: "发送方", en: "Sender", ms: "Penghantar" },
              note: { zh: "发起消息的设备，如计算机", en: "Device that initiates the message, e.g. a computer", ms: "Peranti yang memulakan mesej, contohnya komputer" }
            },
            {
              label: { zh: "传输介质", en: "Transmission Medium", ms: "Medium Penghantaran" },
              note: { zh: "铜缆、光纤或无线电信道", en: "Copper cable, fiber optic or radio waves", ms: "Kabel tembaga, gentian optik atau gelombang radio" }
            },
            {
              label: { zh: "接收方", en: "Receiver", ms: "Penerima" },
              note: { zh: "接收并处理消息的设备", en: "Device that accepts and processes the message", ms: "Peranti yang menerima dan memproses mesej" }
            }
          ]
        },
        {
          type: "tree",
          title: { zh: "信号的分类", en: "Classification of Signals", ms: "Pengelasan Isyarat" },
          root: {
            label: { zh: "信号", en: "Signal", ms: "Isyarat" }
          },
          branches: [
            {
              label: { zh: "模拟信号", en: "Analog Signal", ms: "Isyarat Analog" },
              leaves: [
                {
                  label: { zh: "简单信号：单一正弦波", en: "Simple signal: one sine wave", ms: "Isyarat mudah: satu gelombang sinus" }
                },
                {
                  label: { zh: "复合信号：多个正弦波叠加", en: "Composite signal: several sine waves", ms: "Isyarat komposit: gabungan beberapa gelombang sinus" }
                },
                {
                  label: { zh: "振幅 / 频率 / 相位", en: "Amplitude / Frequency / Phase", ms: "Amplitud / Frekuensi / Fasa" }
                }
              ]
            },
            {
              label: { zh: "数字信号", en: "Digital Signal", ms: "Isyarat Digital" },
              leaves: [
                {
                  label: { zh: "位间隔：发送一个比特的时间", en: "Bit interval: time to send one bit", ms: "Selang bit: masa untuk menghantar satu bit" }
                },
                {
                  label: { zh: "比特率 bps", en: "Bit rate in bps", ms: "Kadar bit dalam bps" }
                },
                {
                  label: { zh: "波特率：每秒信号变化次数", en: "Baud rate: signal changes per second", ms: "Kadar baud: perubahan isyarat sesaat" }
                }
              ]
            }
          ]
        }
      ],
      exam: [
        { zh: "计算题必考奈奎斯特与香农公式：给出带宽、电平数或 SNR 求最大比特率与容量，注意 log2 的计算和 SNR 必须用线性比值而不是分贝。", en: "Calculations almost always use the Nyquist and Shannon formulas: given bandwidth, number of levels or SNR, find the maximum bit rate or capacity; remember log2 and that SNR must be a linear ratio, not decibels.", ms: "Pengiraan hampir selalu menggunakan formula Nyquist dan Shannon: diberi jalur lebar, bilangan aras atau SNR, cari kadar bit atau kapasiti maksimum; ingat log2 dan SNR mesti nisbah linear, bukan desibel." },
        { zh: "比特率与波特率的换算常设陷阱：若一个信号元素携带 n 个比特，则比特率 = 波特率 x n，题目往往只给每秒信号元素数。", en: "The bit rate and baud rate conversion is a common trap: if one signal element carries n bits then bit rate = baud rate x n, and the question often gives only the number of signal elements per second.", ms: "Penukaran kadar bit dan kadar baud sering menjadi perangkap: jika satu unsur isyarat membawa n bit maka kadar bit = kadar baud x n, dan soalan selalunya hanya memberi bilangan unsur isyarat sesaat." },
        { zh: "区分放大器与中继器是高频考点：放大器放大信号的同时也放大噪声，中继器先恢复数字数据再重发干净信号。", en: "Distinguishing an amplifier from a repeater is frequently examined: an amplifier boosts the noise as well as the signal, while a repeater recovers the digital data and retransmits a clean signal.", ms: "Membezakan penguat daripada pengulang sering diuji: penguat memperkuat hingar bersama isyarat, manakala pengulang memulihkan data digital dan menghantar semula isyarat bersih." },
        { zh: "常见错误：把带宽 Hz 当成数据速率 bps，或把模拟信号的振幅、频率、相位三个特征张冠李戴。", en: "Common mistakes: confusing bandwidth in Hz with data rate in bps, or mixing up the amplitude, frequency and phase characteristics of an analog signal.", ms: "Kesilapan biasa: mengelirukan jalur lebar dalam Hz dengan kadar data dalam bps, atau tertukar antara amplitud, frekuensi dan fasa bagi isyarat analog." }
      ],
      mnemonic: { zh: "无噪用奈奎斯特，有噪用香农；放大也放噪，中继只重发。", en: "No noise use Nyquist, with noise use Shannon; amplifiers boost noise too, repeaters only retransmit clean.", ms: "Tanpa hingar guna Nyquist, berhingar guna Shannon; penguat turut memperkuat hingar, pengulang hanya menghantar semula isyarat bersih." }
    },
    {
      id: "dcn-02",
      num: 2,
      title: { zh: "数据传输", en: "Data Transmission", ms: "Penghantaran Data" },
      file: "dcn/CHAPTER 2 2627 1 (2).pdf",
      pages: 51,
      summary: { zh: "本章讨论数据从一台设备传到另一台设备的过程。先比较三种数据传送模式：单工、半双工和全双工，再介绍 ASCII 与 EBCDIC 字符编码以及比特率和符号率。随后分析传输损伤的三种类型——衰减、失真和噪声，并说明通信信道与信道容量的概念。最后讲解模拟数据与数字数据、线路编码（单极性、极性、双极性）以及 DTE/DCE 设备与调制解调器在通信链路中的分工。", en: "This chapter discusses how data is transferred from one device to another. It first compares the three data transfer modes, simplex, half-duplex and full-duplex, then introduces ASCII and EBCDIC character codes together with bit rate and symbol rate. It continues with the three types of transmission impairment, namely attenuation, distortion and noise, and explains the communication channel and channel capacity. Finally it covers analog and digital data, line encoding such as unipolar, polar and bipolar schemes, and the roles of DTE, DCE and the modem in a communication link.", ms: "Bab ini membincangkan cara data dipindahkan dari satu peranti ke peranti lain. Ia membandingkan tiga mod pemindahan data iaitu simpleks, separa dupleks dan dupleks penuh, kemudian memperkenalkan kod aksara ASCII dan EBCDIC bersama kadar bit dan kadar simbol. Seterusnya dibincangkan tiga jenis kerosakan penghantaran iaitu pelemahan, herotan dan hingar, serta konsep saluran komunikasi dan kapasiti saluran. Akhir sekali, bab ini merangkumi data analog dan digital, pengekodan talian seperti skema unipolar, polar dan bipolar, dan peranan DTE, DCE serta modem dalam satu pautan komunikasi." },
      points: [
        { zh: "数据传输涉及两个站：主站（发送方）发起通信链路并在全部数据传送完成前保持对链路的控制，从站（接收方）是应答站。 双方必须使用相同的协议、数据速率和数据编码，否则接收方无法正确解释收到的比特。", en: "Data transmission involves two stations: the primary or sender station initiates the link and keeps control until all data transfer is complete, while the secondary or receiver station answers. Both stations must use the same protocol, data rates and data codes, otherwise the receiver cannot interpret the received bits correctly.", ms: "Penghantaran data melibatkan dua stesen: stesen primer atau penghantar memulakan pautan dan mengawalnya sehingga semua pemindahan data selesai, manakala stesen sekunder atau penerima bertindak membalas. Kedua-dua stesen mesti menggunakan protokol, kadar data dan kod data yang sama, jika tidak penerima tidak dapat mentafsir bit yang diterima dengan betul." },
        { zh: "单工传输只允许单向通信，适合大量数据不需要确认的场合，例如键盘到 CPU、计算机到打印机。", en: "Simplex transmission is one-way only and suits environments where large quantities of data are sent without acknowledgement, such as a keyboard to a CPU or a computer to a printer.", ms: "Penghantaran simpleks hanya satu arah dan sesuai apabila banyak data dihantar tanpa pengakuan, contohnya papan kekunci ke CPU atau komputer ke pencetak." },
        { zh: "半双工的两台设备都能发送和接收但不能同时进行，例如对讲机；全双工可以同时双向通信，例如电话网络。", en: "In half-duplex each device can both transmit and receive but not at the same time, as with a walkie-talkie, while full-duplex allows both stations to transmit and receive simultaneously, as in the telephone network.", ms: "Dalam separa dupleks setiap peranti boleh menghantar dan menerima tetapi tidak serentak, seperti walkie-talkie, manakala dupleks penuh membolehkan kedua-dua stesen menghantar dan menerima serentak, seperti dalam rangkaian telefon." },
        { zh: "ASCII 用 7 位二进制字表示可打印字符、格式字符、数据链接字符和控制码，EBCDIC 用 8 位表示同一批字符但排列顺序不同。", en: "ASCII uses a 7-bit binary word to represent printable characters, formatting characters, data linking and control codes, while EBCDIC uses an 8-bit code for the same set of characters in a different sequence.", ms: "ASCII menggunakan perkataan binari 7 bit untuk mewakili aksara boleh cetak, aksara pemformatan, pautan data dan kod kawalan, manakala EBCDIC menggunakan kod 8 bit bagi set aksara yang sama tetapi dalam urutan berbeza." },
        { zh: "数字数据以串行方式按一定的数据速率传送，减少传输线数量，速率用比特率 bps 表示；若每次传送一组比特，则用符号率 sps 表示，一个符号代表一个比特组。", en: "Digital data is sent serially at a distinct data rate to reduce the number of transmitting lines, measured as bit rate in bps; when groups of bits are sent in one transmission the rate is expressed in symbols per second, where a symbol represents the bit group.", ms: "Data digital dihantar secara bersiri pada kadar data tertentu untuk mengurangkan bilangan talian penghantaran, diukur sebagai kadar bit dalam bps; apabila sekumpulan bit dihantar sekali gus, kadarnya dinyatakan dalam simbol sesaat, dengan satu simbol mewakili kumpulan bit tersebut." },
        { zh: "传输损伤有三种：衰减是信号强度随距离下降，失真是复合信号各成分到达时间不同导致波形改变，噪声是外来能量叠加在信号上。", en: "There are three types of transmission impairment: attenuation is the loss of signal strength with distance, distortion changes the shape of a composite signal because its components arrive at different times, and noise is unwanted energy added to the signal.", ms: "Terdapat tiga jenis kerosakan penghantaran: pelemahan ialah kehilangan kekuatan isyarat mengikut jarak, herotan mengubah bentuk isyarat komposit kerana komponennya tiba pada masa berbeza, dan hingar ialah tenaga asing yang ditambah pada isyarat." },
        { zh: "线路编码是表示数字信息在介质上的方法，用电压或电流的图案表示数字信号中的 1 和 0。 单极性编码只用一种电平（如 +V 与 0V）实现简单；极性编码包括 NRZ-L、NRZ-I、RZ 和双相编码（曼彻斯特、差分曼彻斯特）；双极性编码用正、负、零三个电平，常见的是 AMI 和伪三元码。", en: "Line encoding is the method used to represent digital information on the medium, using a pattern of voltage or current to represent the 1s and 0s of the digital signal. Unipolar encoding uses only one level such as +V and 0V, polar encoding includes NRZ-L, NRZ-I, RZ and biphase schemes such as Manchester and differential Manchester, and bipolar encoding uses positive, negative and zero levels with AMI and pseudoternary as common examples.", ms: "Pengekodan talian ialah kaedah mewakili maklumat digital pada medium, menggunakan corak voltan atau arus untuk mewakili 1 dan 0 dalam isyarat digital. Pengekodan unipolar menggunakan hanya satu aras seperti +V dan 0V, pengekodan polar merangkumi NRZ-L, NRZ-I, RZ dan skema dwifasa seperti Manchester dan Manchester pembezaan, manakala pengekodan bipolar menggunakan aras positif, negatif dan sifar dengan AMI dan pseudoternary sebagai contoh biasa." },
        { zh: "NRZ 的主要问题是收发双方时钟不同步，接收方不知道一个比特何时结束；RZ 用正、负、零三个值解决同步但需要两次信号变化、占用更大带宽；曼彻斯特编码在比特中间跳变，自带同步。", en: "The main problem with NRZ is that the sender and receiver clocks may not be synchronised so the receiver does not know when one bit ends; RZ uses positive, negative and zero values to solve this but needs two signal changes per bit and occupies greater bandwidth, while Manchester encoding puts a transition in the middle of each bit and provides synchronisation.", ms: "Masalah utama NRZ ialah jam penghantar dan penerima mungkin tidak segerak sehingga penerima tidak tahu bila satu bit berakhir; RZ menggunakan nilai positif, negatif dan sifar untuk menyelesaikannya tetapi memerlukan dua perubahan isyarat bagi setiap bit dan mengambil jalur lebar lebih besar, manakala pengekodan Manchester meletakkan peralihan di pertengahan bit dan menyediakan penyegerakan." },
        { zh: "DTE 是串行链路上数据的来源，如计算机、终端或路由器；DCE 如调制解调器、CSU/DSU、多路复用器为链路提供终接，并把 DTE 的串行数据转换成适合传输介质的信号。", en: "DTE is any device that is a source of data on a serial link, such as a computer, terminal or router, while DCE such as a modem, CSU/DSU or multiplexer provides termination for the link and converts the serial data from the DTE into a form suitable for the medium.", ms: "DTE ialah mana-mana peranti yang menjadi sumber data pada pautan bersiri, seperti komputer, terminal atau penghala, manakala DCE seperti modem, CSU/DSU atau pemultipleks menyediakan penamatan pautan dan menukar data bersiri daripada DTE kepada bentuk yang sesuai untuk medium." },
        { zh: "调制解调器 modem 由调制器和解调器组成：调制器用 ASK、FSK、PSK 或 QAM 把数字信号转换成适合电话线的模拟信号，解调器则把模拟信号还原成数字信号。", en: "A modem is made of a modulator and a demodulator: the modulator converts a digital signal into an analog signal using ASK, FSK, PSK or QAM suitable for telephone lines, and the demodulator converts an analog signal back into a digital signal.", ms: "Modem terdiri daripada pemodulat dan penyahmodulat: pemodulat menukar isyarat digital kepada isyarat analog menggunakan ASK, FSK, PSK atau QAM yang sesuai untuk talian telefon, manakala penyahmodulat menukar isyarat analog kembali kepada isyarat digital." }
      ],
      terms: [
        {
          en: "Simplex",
          zh: "单工",
          ms: "Simpleks",
          def: { zh: "只允许单向传输的模式，数据只能从发送方流向接收方。", en: "A one-way transmission mode in which data flows only from the sender to the receiver.", ms: "Mod penghantaran satu arah yang mana data hanya mengalir dari penghantar ke penerima." }
        },
        {
          en: "Half-Duplex",
          zh: "半双工",
          ms: "Separa Dupleks",
          def: { zh: "两个方向都能传输但不能同时进行的模式，例如对讲机。", en: "A mode in which both directions are possible but not at the same time, for example a walkie-talkie.", ms: "Mod yang membenarkan kedua-dua arah tetapi tidak serentak, contohnya walkie-talkie." }
        },
        {
          en: "Full-Duplex",
          zh: "全双工",
          ms: "Dupleks Penuh",
          def: { zh: "两个站可以同时发送和接收的模式，例如电话网络。", en: "A mode in which both stations can transmit and receive simultaneously, for example the telephone network.", ms: "Mod yang membolehkan kedua-dua stesen menghantar dan menerima serentak, contohnya rangkaian telefon." }
        },
        {
          en: "ASCII",
          zh: "美国信息交换标准代码",
          ms: "ASCII (Kod Piawai Amerika untuk Pertukaran Maklumat)",
          def: { zh: "用 7 位二进制字表示可打印字符、格式字符和控制码的字符编码。", en: "A character code that uses a 7-bit binary word to represent printable characters, formatting characters and control codes.", ms: "Kod aksara yang menggunakan perkataan binari 7 bit untuk mewakili aksara boleh cetak, aksara pemformatan dan kod kawalan." }
        },
        {
          en: "EBCDIC",
          zh: "扩展二进码十进制交换码",
          ms: "EBCDIC (Kod Pertukaran Perpuluhan Berkod Binari Lanjutan)",
          def: { zh: "用 8 位二进制码表示与 ASCII 相同的字符集，但排列顺序不同。", en: "An 8-bit binary code that represents the same character set as ASCII but in a different sequence.", ms: "Kod binari 8 bit yang mewakili set aksara sama seperti ASCII tetapi dalam urutan berbeza." }
        },
        {
          en: "Symbol Rate",
          zh: "符号率",
          ms: "Kadar Simbol",
          def: { zh: "每秒发送的符号数（sps），一个符号代表一组比特。", en: "The number of symbols sent per second (sps), where one symbol represents a group of bits.", ms: "Bilangan simbol yang dihantar sesaat (sps), dengan satu simbol mewakili sekumpulan bit." }
        },
        {
          en: "Attenuation",
          zh: "衰减",
          ms: "Pelemahan",
          def: { zh: "信号强度随传输距离增加而下降的现象，需要用放大器或中继器补偿。", en: "The decrease of signal strength as the distance increases, which must be compensated by amplifiers or repeaters.", ms: "Penurunan kekuatan isyarat apabila jarak bertambah, yang perlu dikompensasi oleh penguat atau pengulang." }
        },
        {
          en: "Distortion",
          zh: "失真",
          ms: "Herotan",
          def: { zh: "复合信号中各频率成分传播速度不同、到达时间不一致，导致波形形状改变。", en: "A change of waveform shape because the frequency components of a composite signal arrive at different times.", ms: "Perubahan bentuk gelombang kerana komponen frekuensi isyarat komposit tiba pada masa yang berbeza." }
        },
        {
          en: "Noise",
          zh: "噪声",
          ms: "Hingar",
          def: { zh: "传输过程中混入信号的多余能量，如热噪声、感应噪声、串扰和脉冲噪声。", en: "Unwanted energy such as thermal noise, induced noise, crosstalk and impulse noise that is added to the signal.", ms: "Tenaga tidak dikehendaki seperti hingar haba, hingar teraruh, cakap silang dan hingar impuls yang ditambah pada isyarat." }
        },
        {
          en: "Channel Capacity",
          zh: "信道容量",
          ms: "Kapasiti Saluran",
          def: { zh: "信道在单位时间内能够传输的最大数据量，受带宽、信号电平和噪声限制。", en: "The maximum amount of data a channel can carry per unit time, limited by bandwidth, signal levels and noise.", ms: "Jumlah data maksimum yang boleh dibawa saluran per unit masa, terhad oleh jalur lebar, aras isyarat dan hingar." }
        },
        {
          en: "Line Coding",
          zh: "线路编码",
          ms: "Pengekodan Talian",
          def: { zh: "把数字信息转换成介质上电压或电流图案的方法。", en: "The method of representing digital information as a pattern of voltage or current on the medium.", ms: "Kaedah mewakili maklumat digital sebagai corak voltan atau arus pada medium." }
        },
        {
          en: "NRZ (Nonreturn to Zero)",
          zh: "不归零编码",
          ms: "NRZ (Tidak Kembali ke Sifar)",
          def: { zh: "信号电平始终为正或为负的编码；NRZ-L 用电平表示比特值，NRZ-I 用电平反转表示 1、不变表示 0。", en: "An encoding in which the signal level is always positive or negative; NRZ-L uses the level for the bit value while NRZ-I uses an inversion for 1 and no change for 0.", ms: "Pengekodan yang mana aras isyarat sentiasa positif atau negatif; NRZ-L menggunakan aras bagi nilai bit manakala NRZ-I menggunakan penyongsangan untuk 1 dan tiada perubahan untuk 0." }
        },
        {
          en: "Manchester Encoding",
          zh: "曼彻斯特编码",
          ms: "Pengekodan Manchester",
          def: { zh: "双相编码，把每个比特分成两半并在中间跳变，跳变同时提供同步信息。", en: "A biphase encoding that divides each bit into two halves with a transition in the middle, which also provides synchronisation.", ms: "Pengekodan dwifasa yang membahagi setiap bit kepada dua bahagian dengan peralihan di tengah, yang turut menyediakan penyegerakan." }
        },
        {
          en: "Modem",
          zh: "调制解调器",
          ms: "Modem",
          def: { zh: "由调制器和解调器组成的 DCE 设备，在数字数据与适合介质传输的模拟信号之间转换。", en: "A DCE device made of a modulator and a demodulator that converts between digital data and an analog signal suitable for the medium.", ms: "Peranti DCE yang terdiri daripada pemodulat dan penyahmodulat yang menukar antara data digital dengan isyarat analog yang sesuai untuk medium." }
        },
        {
          en: "Bandwidth",
          zh: "带宽",
          ms: "Jalur Lebar",
          def: { zh: "信道可以传输的频率范围，单位 Hz，决定信道可承载的数据量。", en: "The range of frequencies a channel can carry, measured in Hz, which determines how much data it can support.", ms: "Julat frekuensi yang boleh dibawa saluran, diukur dalam Hz, yang menentukan jumlah data yang boleh disokong." }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: { zh: "三种数据传输模式", en: "Three Data Transfer Modes", ms: "Tiga Mod Pemindahan Data" },
          cols: [
            {
              head: { zh: "单工 Simplex", en: "Simplex", ms: "Simpleks" },
              items: [
                {
                  label: { zh: "方向：单向", en: "Direction: one way only", ms: "Arah: satu arah sahaja" }
                },
                {
                  label: { zh: "不需要确认 ACK", en: "No acknowledgement needed", ms: "Tiada pengakuan diperlukan" }
                },
                {
                  label: { zh: "例：键盘到 CPU、计算机到打印机", en: "Example: keyboard to CPU, computer to printer", ms: "Contoh: papan kekunci ke CPU, komputer ke pencetak" }
                }
              ]
            },
            {
              head: { zh: "半双工 Half-Duplex", en: "Half-Duplex", ms: "Separa Dupleks" },
              items: [
                {
                  label: { zh: "方向：双向但轮流", en: "Direction: both ways, one at a time", ms: "Arah: dua hala tetapi bergilir" }
                },
                {
                  label: { zh: "两端都能收发，不能同时", en: "Both ends send and receive, not together", ms: "Kedua-dua hujung boleh hantar dan terima, tidak serentak" }
                },
                {
                  label: { zh: "例：对讲机", en: "Example: walkie-talkie", ms: "Contoh: walkie-talkie" }
                }
              ]
            },
            {
              head: { zh: "全双工 Full-Duplex", en: "Full-Duplex", ms: "Dupleks Penuh" },
              items: [
                {
                  label: { zh: "方向：双向同时", en: "Direction: both ways at once", ms: "Arah: dua hala serentak" }
                },
                {
                  label: { zh: "容量最高，控制最复杂", en: "Highest capacity, most complex control", ms: "Kapasiti tertinggi, kawalan paling kompleks" }
                },
                {
                  label: { zh: "例：电话网络", en: "Example: telephone network", ms: "Contoh: rangkaian telefon" }
                }
              ]
            }
          ]
        },
        {
          type: "flow",
          dir: "h",
          title: { zh: "DTE 与 DCE 之间的数据传输路径", en: "Data Path Between DTE and DCE", ms: "Laluan Data Antara DTE dan DCE" },
          steps: [
            {
              label: { zh: "DTE", en: "DTE", ms: "DTE" },
              note: { zh: "计算机产生并行/串行数字数据", en: "Computer generates digital data", ms: "Komputer menjana data digital" }
            },
            {
              label: { zh: "DCE 调制", en: "DCE Modulation", ms: "Pemodulatan DCE" },
              note: { zh: "调制解调器用 ASK/FSK/PSK/QAM 把数字转成模拟", en: "Modem converts digital to analog using ASK/FSK/PSK/QAM", ms: "Modem menukar digital kepada analog dengan ASK/FSK/PSK/QAM" }
            },
            {
              label: { zh: "传输介质", en: "Transmission Medium", ms: "Medium Penghantaran" },
              note: { zh: "电话线等模拟信道，信号被衰减并混入噪声", en: "Analog channel such as a telephone line, signal is attenuated and noise added", ms: "Saluran analog seperti talian telefon, isyarat dilemahkan dan hingar ditambah" }
            },
            {
              label: { zh: "DCE 解调", en: "DCE Demodulation", ms: "Penyahmodulatan DCE" },
              note: { zh: "把模拟信号还原成数字信号", en: "Converts the analog signal back to digital", ms: "Menukar isyarat analog kembali kepada digital" }
            },
            {
              label: { zh: "DTE", en: "DTE", ms: "DTE" },
              note: { zh: "接收方计算机处理数据", en: "Receiving computer processes the data", ms: "Komputer penerima memproses data" }
            }
          ]
        }
      ],
      exam: [
        { zh: "三种传输模式的判断几乎必考：题目给出场景（对讲机、电话、键盘、广播）要求指出属于单工、半双工还是全双工，并说明理由。", en: "Identifying the transfer mode is almost always examined: a scenario such as a walkie-talkie, telephone, keyboard or broadcast must be classified as simplex, half-duplex or full-duplex with a reason.", ms: "Mengenal pasti mod pemindahan hampir selalu diuji: senario seperti walkie-talkie, telefon, papan kekunci atau siaran perlu dikelaskan sebagai simpleks, separa dupleks atau dupleks penuh beserta sebabnya." },
        { zh: "三种传输损伤的区分是选择题常客：衰减是幅度下降、失真是复合信号波形改变、噪声是外来能量叠加。", en: "Telling the three impairments apart is a favourite objective question: attenuation is loss of amplitude, distortion is a change of waveform shape and noise is added unwanted energy.", ms: "Membezakan tiga kerosakan penghantaran sering keluar dalam soalan objektif: pelemahan ialah kehilangan amplitud, herotan ialah perubahan bentuk gelombang dan hingar ialah tenaga asing yang ditambah." },
        { zh: "线路编码波形题高频出现：画出 NRZ-L、NRZ-I、RZ、曼彻斯特、差分曼彻斯特和 AMI 的波形，并说明哪种自带同步、哪种有直流分量。", en: "Line coding waveform questions are frequent: draw NRZ-L, NRZ-I, RZ, Manchester, differential Manchester and AMI waveforms, and state which ones are self-synchronising and which have a DC component.", ms: "Soalan bentuk gelombang pengekodan talian kerap keluar: lukis gelombang NRZ-L, NRZ-I, RZ, Manchester, Manchester pembezaan dan AMI, serta nyatakan yang mana menyegerak sendiri dan yang mana mempunyai komponen DC." },
        { zh: "常见错误是把比特率 bps 与符号率 sps 混为一谈，忽略一个符号可以携带多个比特；另外要记住 EBCDIC 是 8 位、ASCII 是 7 位。", en: "A common mistake is confusing bit rate in bps with symbol rate in sps and forgetting that one symbol may carry several bits; also remember EBCDIC is 8-bit while ASCII is 7-bit.", ms: "Kesilapan biasa ialah mengelirukan kadar bit dalam bps dengan kadar simbol dalam sps dan terlupa satu simbol boleh membawa beberapa bit; ingat juga EBCDIC ialah 8 bit manakala ASCII ialah 7 bit." }
      ],
      mnemonic: { zh: "单工单向、半双工轮流、全双工同时；衰减掉幅、失真变形、噪声叠加。", en: "Simplex one way, half-duplex take turns, full-duplex at once; attenuation loses height, distortion changes shape, noise adds energy.", ms: "Simpleks satu arah, separa dupleks bergilir, dupleks penuh serentak; pelemahan hilang ketinggian, herotan ubah bentuk, hingar tambah tenaga." }
    },
    {
      id: "dcn-03",
      num: 3,
      title: { zh: "差错检测与纠正", en: "Error Detection and Correction", ms: "Pengesanan dan Pembetulan Ralat" },
      file: "dcn/CHAPTER 3 2627 1 (1).pdf",
      pages: 52,
      summary: { zh: "本章研究数据在传输过程中被破坏时如何发现并修复。数据经过铜缆、光纤或无线信道时会被噪声、衰减和失真影响，比特可能由 0 变 1 或由 1 变 0，因此可靠性依赖冗余：发送方附加额外比特，接收方用它们检测或纠正错误。课程区分单比特错误、多比特错误和突发错误，并说明检错只回答是或否，而纠错还必须确定出错比特的数量和位置。技术上分别介绍异步传输中的单奇偶校验、二维奇偶校验 VRC/LRC 与校验和，同步传输中的 CRC 多项式除法，以及以汉明码为代表的纠错方法。", en: "This chapter studies how corrupted data can be detected and repaired. When data passes through copper cable, fiber or a wireless channel it may be affected by noise, attenuation and distortion, so bits can change from 0 to 1 or from 1 to 0, and reliability therefore depends on redundancy: the sender adds extra bits and the receiver uses them to detect or correct errors. The chapter distinguishes single-bit, multi-bit and burst errors, and explains that detection answers only yes or no while correction must also find the number and the location of the corrupted bits. The techniques covered are single parity check, two-dimensional parity or VRC and LRC, and checksum for asynchronous data, CRC polynomial division for synchronous data, and error correction with the Hamming code.", ms: "Bab ini mengkaji cara data yang rosak dapat dikesan dan dibaiki. Apabila data melalui kabel tembaga, gentian optik atau saluran tanpa wayar, ia mungkin terjejas oleh hingar, pelemahan dan herotan sehingga bit bertukar daripada 0 kepada 1 atau sebaliknya, jadi kebolehpercayaan bergantung pada riduansi: penghantar menambah bit tambahan dan penerima menggunakannya untuk mengesan atau membetulkan ralat. Bab ini membezakan ralat satu bit, ralat berbilang bit dan ralat ledakan, serta menjelaskan pengesanan hanya menjawab ya atau tidak manakala pembetulan perlu mengetahui bilangan dan kedudukan bit yang rosak. Teknik yang dibincangkan ialah semakan pariti tunggal, pariti dua dimensi atau VRC dan LRC, serta jumlah semak bagi data tak segerak, pembahagian polinomial CRC bagi data segerak, dan pembetulan ralat dengan kod Hamming." },
      points: [
        { zh: "检测或纠正错误的核心概念是冗余：发送方在数据之外附加额外比特，接收方利用这些比特发现或纠正被破坏的比特。 冗余通过编码方案实现，可分为分组编码和卷积编码，本课程只讨论较简单的分组编码。", en: "The central concept in detecting or correcting errors is redundancy: the sender adds extra bits to the data and the receiver uses them to detect or correct corrupted bits. Redundancy is achieved through coding schemes that are divided into block coding and convolution coding, and this course concentrates on the simpler block coding.", ms: "Konsep utama dalam mengesan atau membetulkan ralat ialah riduansi: penghantar menambah bit tambahan pada data dan penerima menggunakannya untuk mengesan atau membetulkan bit yang rosak. Riduansi dicapai melalui skema pengekodan yang terbahagi kepada pengekodan blok dan pengekodan konvolusi, dan kursus ini menumpukan pengekodan blok yang lebih mudah." },
        { zh: "错误分为单比特错误、多比特错误和突发错误，突发错误指一段连续的比特被破坏，在实际信道中最常见。", en: "Errors are classified as single-bit, multi-bit and burst errors, where a burst error damages a continuous run of bits and is the most common type on real channels.", ms: "Ralat dikelaskan kepada ralat satu bit, ralat berbilang bit dan ralat ledakan, iaitu ralat yang merosakkan satu jujukan bit berturutan dan paling biasa pada saluran sebenar." },
        { zh: "纠错比检错困难得多：检错只需回答是或否，纠错还必须知道出错比特的个数以及它们在报文中的位置。", en: "Correction is much more difficult than detection: detection only answers yes or no, whereas correction must know the exact number of corrupted bits and their location in the message.", ms: "Pembetulan jauh lebih sukar daripada pengesanan: pengesanan hanya menjawab ya atau tidak, manakala pembetulan perlu mengetahui bilangan bit rosak dan kedudukannya dalam mesej." },
        { zh: "异步传输逐字符发送数据，每个字符用起始位、数据位、奇偶校验位和停止位成帧，就像一条条独立的短信。", en: "Asynchronous transmission sends data character by character, and each character is framed with a start bit, data bits, a parity bit and a stop bit, rather like sending individual text messages.", ms: "Penghantaran tak segerak menghantar data aksara demi aksara, dan setiap aksara dibingkaikan dengan bit mula, bit data, bit pariti dan bit henti, seperti menghantar mesej teks yang berasingan." },
        { zh: "单个奇偶校验位使数据加校验位中 1 的总数成为偶数（偶校验）或奇数（奇校验）；例如数据 1001001 有 3 个 1，用偶校验时校验位为 1，发送的码字是 10010011。 单奇偶校验只能检测奇数个比特出错的情况，若两个比特互换位置则无法检测，这是它的主要缺点。", en: "A single parity bit makes the total number of 1s in the data plus the parity bit even for even parity or odd for odd parity; for example the data 1001001 has three 1s, so with even parity the parity bit is 1 and the codeword sent is 10010011. A single parity check can only detect an odd number of corrupted bits, and if two bits are interchanged it cannot detect the error at all, which is its main drawback.", ms: "Satu bit pariti menjadikan jumlah 1 dalam data bersama bit pariti sama ada genap bagi pariti genap atau ganjil bagi pariti ganjil; contohnya data 1001001 mempunyai tiga 1, jadi dengan pariti genap bit pariti ialah 1 dan kod yang dihantar ialah 10010011. Semakan pariti tunggal hanya dapat mengesan bilangan bit rosak yang ganjil, dan jika dua bit bertukar kedudukan ia tidak dapat mengesannya, dan itulah kelemahan utamanya." },
        { zh: "二维奇偶校验把数据排成表格，纵向用 VRC、横向用 LRC，计算使用 XOR 真值表，能够检测并纠正单个比特错误。", en: "A two-dimensional parity check arranges the data as a table, uses VRC vertically and LRC horizontally with XOR arithmetic, and can detect and even correct a single-bit error.", ms: "Semakan pariti dua dimensi menyusun data sebagai jadual, menggunakan VRC secara menegak dan LRC secara melintang dengan operasi XOR, dan mampu mengesan malah membetulkan ralat satu bit." },
        { zh: "校验和把数据分成若干段，用反码算术求和的补码作为校验和随数据一起发送，接收方把各段与校验和相加，若最终补码和为 0 则认为传输无误。", en: "The checksum method divides data into segments, adds them using 1s complement arithmetic and appends the complement of the sum, and the receiver adds all segments including the checksum and accepts the data if the final complemented sum is zero.", ms: "Kaedah jumlah semak membahagikan data kepada segmen, menjumlahkannya dengan aritmetik pelengkap 1 dan melampirkan pelengkap jumlah itu, dan penerima menjumlahkan semua segmen termasuk jumlah semak dan menerima data jika jumlah pelengkap akhir ialah sifar." },
        { zh: "CRC 使用多项式除法：数据位串可表示成系数为 0 和 1 的多项式，发送方把数据左移 r 位后除以生成多项式，余数作为冗余位附在数据之后，接收方用同一多项式除收到的码字，余数为 0 表示没有检测到错误。", en: "CRC uses polynomial division: a bit pattern is represented as a polynomial with coefficients 0 and 1, the sender shifts the data left by r bits and divides it by the generator polynomial, appends the remainder as redundant bits, and the receiver divides the received codeword by the same polynomial so that a zero remainder means no error was detected.", ms: "CRC menggunakan pembahagian polinomial: corak bit diwakili sebagai polinomial dengan pekali 0 dan 1, penghantar menggeser data ke kiri sebanyak r bit dan membahagikannya dengan polinomial penjana, melampirkan bakinya sebagai bit riduansi, dan penerima membahagikan kod yang diterima dengan polinomial yang sama sehingga baki sifar bermakna tiada ralat dikesan." },
        { zh: "最小汉明距离 dmin 是一组等长码字中任意两码字汉明距离的最小值，它决定该编码的检错和纠错能力。", en: "The minimum Hamming distance dmin is the smallest Hamming distance among all pairs of equal-length codewords, and it determines the error detection and correction capability of the code.", ms: "Jarak Hamming minimum dmin ialah jarak Hamming terkecil antara semua pasangan kod sama panjang, dan ia menentukan keupayaan pengesanan serta pembetulan ralat kod tersebut." },
        { zh: "汉明码在 1、2、4、8 等 2 的幂次位置放置校验位，接收方重新计算校验位并把结果 c4c3c2c1 换成十进制，该值就是出错比特的位置，把它取反即可得到正确报文。", en: "The Hamming code places parity bits at positions that are powers of two, namely 1, 2, 4, 8 and so on; the receiver recalculates them and converts the result c4c3c2c1 into decimal, and that value is the position of the corrupted bit, which is flipped to recover the correct message.", ms: "Kod Hamming meletakkan bit pariti pada kedudukan kuasa dua iaitu 1, 2, 4, 8 dan seterusnya; penerima mengira semula bit pariti dan menukar hasil c4c3c2c1 kepada perpuluhan, dan nilai itu ialah kedudukan bit yang rosak, yang diterbalikkan untuk memulihkan mesej yang betul." }
      ],
      terms: [
        {
          en: "Redundancy",
          zh: "冗余",
          ms: "Riduansi",
          def: { zh: "为检测或纠正错误而随数据一起发送的额外比特，由发送方加入、接收方移除。", en: "Extra bits sent with the data to detect or correct errors, added by the sender and removed by the receiver.", ms: "Bit tambahan yang dihantar bersama data untuk mengesan atau membetulkan ralat, ditambah oleh penghantar dan dibuang oleh penerima." }
        },
        {
          en: "Single-Bit Error",
          zh: "单比特错误",
          ms: "Ralat Satu Bit",
          def: { zh: "一个数据单元中只有一位比特发生改变的错误。", en: "An error in which only one bit of a data unit has changed.", ms: "Ralat yang hanya melibatkan satu bit dalam unit data berubah." }
        },
        {
          en: "Burst Error",
          zh: "突发错误",
          ms: "Ralat Ledakan",
          def: { zh: "连续一段比特被破坏的错误，长度以受影响比特数衡量。", en: "An error in which a continuous run of bits is corrupted, measured by the number of affected bits.", ms: "Ralat yang merosakkan satu jujukan bit berturutan, diukur dengan bilangan bit terjejas." }
        },
        {
          en: "Parity Bit",
          zh: "奇偶校验位",
          ms: "Bit Pariti",
          def: { zh: "额外附加的一位比特，使数据与校验位中 1 的总数为偶数或奇数。", en: "One extra bit added so that the total number of 1s in the data and parity bit is even or odd.", ms: "Satu bit tambahan supaya jumlah 1 dalam data dan bit pariti menjadi genap atau ganjil." }
        },
        {
          en: "Even Parity",
          zh: "偶校验",
          ms: "Pariti Genap",
          def: { zh: "使数据加校验位中 1 的总数保持为偶数的校验方式。", en: "A parity rule that keeps the total number of 1s in the data plus parity bit even.", ms: "Peraturan pariti yang mengekalkan jumlah 1 dalam data bersama bit pariti sebagai genap." }
        },
        {
          en: "VRC (Vertical Redundancy Check)",
          zh: "纵向冗余校验",
          ms: "VRC (Semakan Riduansi Menegak)",
          def: { zh: "二维奇偶校验中按列计算的校验位，用于检查每一列的奇偶性。", en: "The parity bits computed column by column in a two-dimensional parity check.", ms: "Bit pariti yang dikira lajur demi lajur dalam semakan pariti dua dimensi." }
        },
        {
          en: "LRC (Longitudinal Redundancy Check)",
          zh: "横向冗余校验",
          ms: "LRC (Semakan Riduansi Membujur)",
          def: { zh: "二维奇偶校验中按行计算的校验位，与 VRC 配合可定位单个错误比特。", en: "The parity bits computed row by row in a two-dimensional parity check; together with VRC they locate a single erroneous bit.", ms: "Bit pariti yang dikira baris demi baris dalam semakan pariti dua dimensi; bersama VRC ia menentukan kedudukan satu bit yang salah." }
        },
        {
          en: "Checksum",
          zh: "校验和",
          ms: "Jumlah Semak",
          def: { zh: "把各数据段用反码算术相加后取补码得到的校验值，接收方相加为全 1 即认为无错。", en: "A check value obtained by adding the data segments in 1s complement arithmetic and complementing the sum; the receiver accepts the data when the sum is all 1s.", ms: "Nilai semakan yang diperoleh dengan menjumlahkan segmen data dalam aritmetik pelengkap 1 dan melengkapkan jumlahnya; penerima menerima data apabila jumlahnya semua 1." }
        },
        {
          en: "CRC (Cyclic Redundancy Check)",
          zh: "循环冗余校验",
          ms: "CRC (Semakan Riduansi Kitaran)",
          def: { zh: "用生成多项式做模 2 除法产生余数作为冗余位的检错技术。", en: "An error detection technique that uses modulo-2 division by a generator polynomial and sends the remainder as redundant bits.", ms: "Teknik pengesanan ralat yang menggunakan pembahagian modulo-2 dengan polinomial penjana dan menghantar bakinya sebagai bit riduansi." }
        },
        {
          en: "Polynomial",
          zh: "多项式",
          ms: "Polinomial",
          def: { zh: "把 0/1 位串表示成系数为 0 和 1 的多项式，幂次表示比特位置，系数表示比特值。", en: "A representation of a 0/1 bit pattern as a polynomial whose powers give bit positions and whose coefficients give bit values.", ms: "Perwakilan corak bit 0/1 sebagai polinomial yang kuasanya memberi kedudukan bit dan pekalinya memberi nilai bit." }
        },
        {
          en: "Hamming Code",
          zh: "汉明码",
          ms: "Kod Hamming",
          def: { zh: "一种分组码，能定位并纠正一个比特错误，同时检测两个比特错误。", en: "A block code that can identify and correct one-bit errors and detect up to two simultaneous bit errors.", ms: "Kod blok yang boleh mengenal pasti dan membetulkan ralat satu bit serta mengesan sehingga dua ralat bit serentak." }
        },
        {
          en: "Hamming Distance",
          zh: "汉明距离",
          ms: "Jarak Hamming",
          def: { zh: "两个等长位串之间不同比特的个数，可用逐位 XOR 后数 1 的个数求得。", en: "The number of differing bits between two equal-length strings, found by XORing them and counting the 1s.", ms: "Bilangan bit yang berbeza antara dua rentetan sama panjang, diperoleh dengan XOR dan mengira bilangan 1." }
        },
        {
          en: "Minimum Hamming Distance",
          zh: "最小汉明距离",
          ms: "Jarak Hamming Minimum",
          def: { zh: "所有合法码字两两之间汉明距离的最小值 dmin，决定编码的检错纠错能力。", en: "The smallest Hamming distance dmin between any two valid codewords, which determines the detection and correction capability.", ms: "Jarak Hamming terkecil dmin antara mana-mana dua kod sah, yang menentukan keupayaan pengesanan dan pembetulan." }
        },
        {
          en: "Block Coding",
          zh: "分组编码",
          ms: "Pengekodan Blok",
          def: { zh: "把报文分成 k 位数据块并加上 r 位冗余位形成 n 位码字的编码方式。", en: "A coding scheme that divides the message into k-bit data blocks and adds r redundant bits to form an n-bit codeword.", ms: "Skema pengekodan yang membahagikan mesej kepada blok data k bit dan menambah r bit riduansi untuk membentuk kod n bit." }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: { zh: "异步传输的字符帧结构", en: "Character Frame in Asynchronous Transmission", ms: "Bingkai Aksara dalam Penghantaran Tak Segerak" },
          caption: { zh: "数据逐字符发送，每个字符自带同步与校验信息", en: "Data is sent character by character and each character carries its own synchronisation and check information", ms: "Data dihantar aksara demi aksara dan setiap aksara membawa penyegerakan serta maklumat semakan sendiri" },
          steps: [
            {
              label: { zh: "起始位", en: "Start Bit", ms: "Bit Mula" },
              note: { zh: "通知接收方一个字符开始", en: "Tells the receiver a character is starting", ms: "Memberitahu penerima satu aksara bermula" }
            },
            {
              label: { zh: "数据位", en: "Data Bits", ms: "Bit Data" },
              note: { zh: "通常 7 或 8 位实际字符比特", en: "Usually 7 or 8 bits of the character", ms: "Biasanya 7 atau 8 bit aksara" }
            },
            {
              label: { zh: "奇偶校验位", en: "Parity Bit", ms: "Bit Pariti" },
              note: { zh: "偶校验或奇校验，可检测单比特错误", en: "Even or odd parity, detects single-bit errors", ms: "Pariti genap atau ganjil, mengesan ralat satu bit" }
            },
            {
              label: { zh: "停止位", en: "Stop Bit", ms: "Bit Henti" },
              note: { zh: "标记字符结束，等待下一个起始位", en: "Marks the end of the character", ms: "Menandakan tamatnya aksara" }
            }
          ]
        },
        {
          type: "matrix",
          title: { zh: "常用检错技术对比", en: "Comparison of Error Detection Techniques", ms: "Perbandingan Teknik Pengesanan Ralat" },
          cols: [
            { zh: "基本做法", en: "How it works", ms: "Cara ia berfungsi" },
            { zh: "检测能力", en: "Detection ability", ms: "Keupayaan pengesanan" },
            { zh: "能否纠错", en: "Correction", ms: "Pembetulan" }
          ],
          rows: [
            {
              head: { zh: "单奇偶校验", en: "Single Parity Check", ms: "Semakan Pariti Tunggal" },
              cells: [
                { zh: "加 1 位使 1 的总数为偶或奇", en: "Add one bit so the count of 1s is even or odd", ms: "Tambah satu bit supaya bilangan 1 genap atau ganjil" },
                { zh: "只能检测奇数个比特出错", en: "Detects an odd number of bit errors only", ms: "Mengesan bilangan bit rosak yang ganjil sahaja" },
                { zh: "不能纠错", en: "Cannot correct", ms: "Tidak boleh membetulkan" }
              ]
            },
            {
              head: { zh: "二维奇偶 VRC/LRC", en: "Two-Dimensional VRC/LRC", ms: "Dua Dimensi VRC/LRC" },
              cells: [
                { zh: "数据排成表格，行列各算 XOR 校验位", en: "Data arranged as a table, row and column XOR parity", ms: "Data disusun sebagai jadual, pariti XOR baris dan lajur" },
                { zh: "可检测并定位大多数单比特错误", en: "Detects and locates most single-bit errors", ms: "Mengesan dan menentukan kedudukan kebanyakan ralat satu bit" },
                { zh: "可纠正单个比特错误", en: "Corrects a single-bit error", ms: "Membetulkan ralat satu bit" }
              ]
            },
            {
              head: { zh: "校验和 Checksum", en: "Checksum", ms: "Jumlah Semak" },
              cells: [
                { zh: "反码算术求和后取补码附在数据后", en: "Sum with 1s complement arithmetic, append the complement", ms: "Jumlah dengan pelengkap 1, lampirkan pelengkapnya" },
                { zh: "对多段数据的错误较敏感", en: "Sensitive to errors across many segments", ms: "Peka terhadap ralat merentas banyak segmen" },
                { zh: "通常只用于检测", en: "Normally detection only", ms: "Biasanya pengesanan sahaja" }
              ]
            },
            {
              head: { zh: "循环冗余校验 CRC", en: "CRC", ms: "CRC" },
              cells: [
                { zh: "数据左移 r 位后除以生成多项式取余数", en: "Shift data left by r bits, divide by the generator polynomial", ms: "Geser data kiri r bit, bahagi dengan polinomial penjana" },
                { zh: "检错能力最强，可检测突发错误", en: "Strongest detection, handles burst errors", ms: "Pengesanan paling kuat, mampu mengesan ralat ledakan" },
                { zh: "检错为主，可配合重传", en: "Mainly detection, used with retransmission", ms: "Terutamanya pengesanan, digunakan dengan penghantaran semula" }
              ]
            }
          ],
          legend: [
            { zh: "模 2 运算等同于 XOR，不进位也不借位", en: "Modulo-2 arithmetic is the same as XOR, with no carry and no borrow", ms: "Aritmetik modulo-2 sama dengan XOR, tanpa bawa dan tanpa pinjam" }
          ]
        }
      ],
      exam: [
        { zh: "计算题几乎必考：给定数据与校验方式求校验位、发送码字和接收端校验结果，覆盖偶/奇校验、VRC 与 LRC、校验和以及 CRC 多项式除法；做 CRC 时务必用模 2 运算（XOR，不借位）。", en: "Calculations are almost certain: given data and a technique, find the check bits, the transmitted codeword and the receiver verification, covering even or odd parity, VRC and LRC, checksum and CRC polynomial division; always use modulo-2 arithmetic with XOR and no borrow for CRC.", ms: "Pengiraan hampir pasti keluar: diberi data dan teknik, cari bit semakan, kod yang dihantar dan pengesahan di penerima, merangkumi pariti genap atau ganjil, VRC dan LRC, jumlah semak serta pembahagian polinomial CRC; sentiasa guna aritmetik modulo-2 dengan XOR tanpa pinjam bagi CRC." },
        { zh: "汉明码题按四步走：由 2 的幂次关系求冗余位数、把校验位放在 1、2、4、8 位置、用 XOR 计算校验值、接收端把 c4c3c2c1 换成十进制得到错误位置。", en: "Hamming code questions follow four steps: find the number of redundant bits from powers of two, place parity bits at positions 1, 2, 4 and 8, compute their values with XOR, then let the receiver convert c4c3c2c1 to decimal to obtain the error position.", ms: "Soalan kod Hamming mengikut empat langkah: cari bilangan bit riduansi daripada kuasa dua, letakkan bit pariti pada kedudukan 1, 2, 4 dan 8, kira nilainya dengan XOR, kemudian penerima menukar c4c3c2c1 kepada perpuluhan untuk mendapat kedudukan ralat." },
        { zh: "容易混淆的概念：检错只回答是或否，纠错必须知道出错比特的数量和位置；单奇偶校验不能纠错，二维奇偶校验和汉明码才能纠正单比特错误。", en: "Concepts easily confused: detection answers only yes or no while correction must know the number and location of corrupted bits; a single parity check cannot correct anything, while two-dimensional parity and the Hamming code can correct a single-bit error.", ms: "Konsep yang mudah keliru: pengesanan hanya menjawab ya atau tidak manakala pembetulan perlu mengetahui bilangan dan kedudukan bit rosak; semakan pariti tunggal tidak boleh membetulkan apa-apa, manakala pariti dua dimensi dan kod Hamming boleh membetulkan ralat satu bit." },
        { zh: "常见错误：把 CRC 余数为 0 说成数据一定正确、忘记冗余位由发送方加入并由接收方移除，或把最小汉明距离与两个码字之间的距离混为一谈。", en: "Common mistakes: saying that data is certainly correct when the CRC remainder is zero, forgetting that redundant bits are added by the sender and removed by the receiver, or confusing the minimum Hamming distance with the distance between just two codewords.", ms: "Kesilapan biasa: mengatakan data pasti betul apabila baki CRC ialah sifar, terlupa bit riduansi ditambah oleh penghantar dan dibuang oleh penerima, atau mengelirukan jarak Hamming minimum dengan jarak antara dua kod tertentu." }
      ],
      mnemonic: { zh: "奇偶看 1 的个数，校验和看反码之和，CRC 看余数，汉明码看 c4c3c2c1 的十进制。", en: "Parity counts the 1s, checksum adds the complements, CRC looks at the remainder, Hamming reads the decimal of c4c3c2c1.", ms: "Pariti mengira bilangan 1, jumlah semak menjumlah pelengkap, CRC melihat baki, Hamming membaca perpuluhan c4c3c2c1." }
    },
    {
      id: "dcn-04",
      num: 4,
      title: { zh: "传输介质", en: "Transmission Medium", ms: "Medium Penghantaran" },
      file: "dcn/CHAPTER 4 2627 1.pdf",
      pages: 41,
      summary: { zh: "本章介绍承载数据信号的传输介质，它是数据通信系统中最重要的组成部分之一。介质位于物理层之下并直接受物理层控制，因此常说它属于第 0 层。课程把介质分为导向介质和非导向介质：双绞线、同轴电缆和光纤用电缆把信号约束在导体或光纤中，无线电波、微波和红外则在自由空间广播。除结构与应用外，本章还给出衡量介质性能的吞吐量、传播速度和传播时间三个概念，并讨论卫星通信与静止轨道卫星的工作原理、优缺点和应用。", en: "This chapter introduces transmission media, the path that carries data signals from a sender to a receiver and one of the most important components of a data communication system. Media sit below the physical layer and are directly controlled by it, so they are often said to belong to layer zero. The chapter divides media into guided media, where twisted pair, coaxial cable and optical fiber confine the signal inside a conductor or fiber, and unguided media such as radio waves, microwaves and infrared that broadcast through free space. Besides structure and applications, it presents throughput, propagation speed and propagation time as measures of performance, and discusses satellite communication and geostationary satellites.", ms: "Bab ini memperkenalkan medium penghantaran, iaitu laluan yang membawa isyarat data daripada penghantar kepada penerima dan salah satu komponen terpenting dalam sistem komunikasi data. Medium terletak di bawah lapisan fizikal dan dikawal terus olehnya, jadi ia sering dianggap sebagai lapisan sifar. Bab ini membahagikan medium kepada media berpandu, iaitu pasangan terpilin, kabel sepaksi dan gentian optik yang mengurung isyarat dalam pengalir atau gentian, dan media tak berpandu seperti gelombang radio, gelombang mikro dan inframerah yang disiarkan di ruang bebas. Selain struktur dan aplikasi, daya tembus, kelajuan perambatan dan masa perambatan dibincangkan sebagai ukuran prestasi, diikuti komunikasi satelit dan satelit geopegun." },
      points: [
        { zh: "传输介质是承载数据信号从发送方到接收方的通道，它位于物理层之下并由物理层直接控制，因此常被说成属于第 0 层。", en: "Transmission media carry data signals from a sender to a receiver, they are located below the physical layer and directly controlled by it, so they are often said to belong to layer zero.", ms: "Medium penghantaran membawa isyarat data daripada penghantar kepada penerima, terletak di bawah lapisan fizikal dan dikawal terus olehnya, jadi ia sering dianggap tergolong dalam lapisan sifar." },
        { zh: "导向介质是实际的电缆：双绞线和同轴电缆用铜导体以电流形式传输信号，光纤则以光的形式传输信号。", en: "Guided media are physical cables: twisted pair and coaxial cable use copper conductors that carry signals as electric current, while optical fiber carries signals in the form of light.", ms: "Media berpandu ialah kabel fizikal: pasangan terpilin dan kabel sepaksi menggunakan pengalir tembaga yang membawa isyarat sebagai arus elektrik, manakala gentian optik membawa isyarat dalam bentuk cahaya." },
        { zh: "明线沿电线杆架设，没有任何屏蔽，因此极易受噪声和干扰影响，主要用于早期的电话和电报通信。", en: "Open wire is installed along power poles, has no shielding at all, and is therefore highly affected by noise and interference; it was mainly used in early telephone and telegraph communication.", ms: "Wayar terbuka dipasang sepanjang tiang elektrik, tiada sebarang perisai, dan oleh itu sangat terjejas oleh hingar serta gangguan; ia banyak digunakan dalam komunikasi telefon dan telegraf awal." },
        { zh: "双绞线由两根互相扭绞的绝缘铜线组成，扭绞能降低噪声和电磁干扰 EMI，它同时支持模拟和数字信号，属于低频传输介质。", en: "Twisted pair consists of two insulated copper wires twisted together; the twisting reduces noise and electromagnetic interference, it supports both analog and digital signals, and it is a low frequency transmission medium.", ms: "Pasangan terpilin terdiri daripada dua wayar tembaga bertebat yang dipintal bersama; pemintalan mengurangkan hingar dan gangguan elektromagnet, ia menyokong isyarat analog dan digital, dan merupakan medium penghantaran frekuensi rendah." },
        { zh: "双绞线的缺点包括易受电磁干扰和射频干扰（屏蔽双绞线 STP 可改善但成本更高）、衰减严重（以太网约 100 米就需要中继器或交换机）、带宽较低（语音传输约 3000 Hz）以及数据速率低于光纤。", en: "The disadvantages of twisted pair include susceptibility to electromagnetic and radio frequency interference, which STP reduces at extra cost, serious attenuation so that Ethernet needs a repeater or switch after about 100 m, relatively low bandwidth of about 3000 Hz for voice, and lower data rates than fiber.", ms: "Kelemahan pasangan terpilin termasuk mudah terjejas oleh gangguan elektromagnet dan frekuensi radio yang dapat dikurangkan oleh STP dengan kos lebih tinggi, pelemahan serius sehingga Ethernet memerlukan pengulang atau suis selepas kira-kira 100 m, jalur lebar yang agak rendah iaitu sekitar 3000 Hz untuk suara, dan kadar data yang lebih rendah daripada gentian optik." },
        { zh: "同轴电缆由内层铜导体和外围中空圆柱形屏蔽导体组成，直径约 0.5 至 2.5 厘米（如 RG-6、RG-58），频率特性优于双绞线，抗噪声、干扰和串扰的能力更强。 同轴电缆长距离传输时数字信号使用中继器、模拟信号使用放大器，一条同轴电缆借助多路复用可承载数千条语音信道，广泛用于有线电视和宽带接入。", en: "Coaxial cable has a single inner copper conductor and a hollow outer cylindrical shield, its diameter ranges from about 0.5 cm to 2.5 cm for types such as RG-6 and RG-58, and it has better frequency characteristics with less susceptibility to noise, interference and crosstalk than twisted pair. For long distance coaxial transmission repeaters are used for digital signals and amplifiers for analog signals, and a single coaxial cable can carry thousands of voice channels using multiplexing, which makes it widely used in cable television and broadband Internet access.", ms: "Kabel sepaksi mempunyai satu pengalir tembaga dalaman dan perisai silinder luaran yang berongga, diameternya antara kira-kira 0.5 cm hingga 2.5 cm bagi jenis seperti RG-6 dan RG-58, dan ciri frekuensinya lebih baik serta kurang terjejas oleh hingar, gangguan dan cakap silang berbanding pasangan terpilin. Bagi penghantaran sepaksi jarak jauh, pengulang digunakan untuk isyarat digital dan penguat untuk isyarat analog, dan satu kabel sepaksi boleh membawa ribuan saluran suara melalui pemultipleksan, sehingga banyak digunakan dalam televisyen kabel dan capaian Internet jalur lebar." },
        { zh: "衡量传输介质性能的三个概念是吞吐量、传播速度和传播时间：吞吐量表示数据通过某一点的快慢，传播速度是信号每秒在介质中行进的距离，传播时间是信号从介质一端到另一端所需的时间。", en: "Three concepts measure the performance of transmission media: throughput is how fast data passes through a point, propagation speed is the distance a signal travels through the medium in one second, and propagation time is the time taken to travel from one point of the medium to another.", ms: "Tiga konsep mengukur prestasi medium penghantaran: daya tembus ialah kepantasan data melalui satu titik, kelajuan perambatan ialah jarak yang dilalui isyarat dalam medium sesaat, dan masa perambatan ialah masa yang diambil untuk bergerak dari satu titik medium ke titik yang lain." },
        { zh: "非导向介质不使用物理导体而传输电磁波，也就是无线通信；信号在自由空间广播，任何有接收设备的用户都能收到，传播方式分为地面传播、天空传播和视距传播，传输技术分为无线电波、微波和红外。", en: "Unguided media transport electromagnetic waves without a physical conductor, which is called wireless communication; signals are broadcast through free space and are available to anyone with a receiving device, travelling by ground, sky or line-of-sight propagation using radio waves, microwaves or infrared.", ms: "Media tak berpandu menghantar gelombang elektromagnet tanpa pengalir fizikal, iaitu komunikasi tanpa wayar; isyarat disiarkan di ruang bebas dan boleh diterima oleh sesiapa yang mempunyai peranti penerima, melalui perambatan tanah, langit atau garis pandang dengan gelombang radio, gelombang mikro atau inframerah." },
        { zh: "卫星通信中地球站把上行链路信号发给卫星，卫星接收后放大并改变频率，再用下行链路发回地球；系统的主要部件是地球站、卫星和转发器。", en: "In satellite communication the earth station sends an uplink signal to the satellite, the satellite receives it, amplifies it and changes its frequency, then sends it back to Earth on the downlink; the main components are the earth station, the satellite and the transponders.", ms: "Dalam komunikasi satelit, stesen bumi menghantar isyarat pautan naik kepada satelit, satelit menerimanya, memperkuatnya dan mengubah frekuensinya, kemudian menghantarnya kembali ke bumi melalui pautan turun; komponen utamanya ialah stesen bumi, satelit dan transponder." },
        { zh: "静止轨道卫星位于赤道上方 35786 公里处，24 小时绕地球一周，速度与地球自转相同，因此看起来固定不动；它的优点是地面天线不必转动、可连续覆盖同一区域，缺点是信号延迟大、发射成本高并且无法覆盖极区。", en: "A geostationary satellite orbits 35,786 km above the equator, completes one orbit in 24 hours and moves at the same speed as the earth rotation, so it appears to stay fixed; its advantages are that ground antennas need not move and one area is covered continuously, while its drawbacks are large delay, high launch cost and no coverage of the polar regions.", ms: "Satelit geopegun mengorbit 35,786 km di atas khatulistiwa, melengkapkan satu orbit dalam 24 jam dan bergerak pada kelajuan sama dengan putaran bumi, jadi ia kelihatan tidak bergerak; kelebihannya ialah antena bumi tidak perlu bergerak dan satu kawasan diliputi secara berterusan, manakala kelemahannya ialah kelewatan besar, kos pelancaran tinggi dan tiada liputan di kawasan kutub." }
      ],
      terms: [
        {
          en: "Transmission Medium",
          zh: "传输介质",
          ms: "Medium Penghantaran",
          def: { zh: "承载数据信号从发送方到接收方的物理通道，可视为第 0 层。", en: "The physical path that carries data signals from a sender to a receiver, often regarded as layer zero.", ms: "Laluan fizikal yang membawa isyarat data daripada penghantar kepada penerima, sering dianggap lapisan sifar." }
        },
        {
          en: "Guided Media",
          zh: "导向介质",
          ms: "Media Berpandu",
          def: { zh: "用实体电缆引导信号传播的介质，如双绞线、同轴电缆和光纤。", en: "Media that guide signals along a physical cable, such as twisted pair, coaxial cable and optical fiber.", ms: "Media yang memandu isyarat di sepanjang kabel fizikal seperti pasangan terpilin, kabel sepaksi dan gentian optik." }
        },
        {
          en: "Unguided Media",
          zh: "非导向介质",
          ms: "Media Tak Berpandu",
          def: { zh: "不使用物理导体而在自由空间传播电磁波的介质，即无线通信。", en: "Media that transport electromagnetic waves through free space without a physical conductor, that is wireless communication.", ms: "Media yang menghantar gelombang elektromagnet di ruang bebas tanpa pengalir fizikal, iaitu komunikasi tanpa wayar." }
        },
        {
          en: "Twisted Pair Cable",
          zh: "双绞线",
          ms: "Kabel Pasangan Terpilin",
          def: { zh: "由两根绝缘铜线扭绞而成的低频电缆，扭绞可降低噪声与电磁干扰。", en: "A low frequency cable of two insulated copper wires twisted together, where the twisting reduces noise and electromagnetic interference.", ms: "Kabel frekuensi rendah daripada dua wayar tembaga bertebat yang dipintal, dan pemintalan mengurangkan hingar serta gangguan elektromagnet." }
        },
        {
          en: "Coaxial Cable",
          zh: "同轴电缆",
          ms: "Kabel Sepaksi",
          def: { zh: "由内导体、绝缘层和外圆柱屏蔽层构成的电缆，屏蔽层可抵抗电磁干扰。", en: "A cable with an inner conductor, an insulating layer and an outer cylindrical shield that resists electromagnetic interference.", ms: "Kabel dengan pengalir dalam, lapisan penebat dan perisai silinder luar yang menahan gangguan elektromagnet." }
        },
        {
          en: "Optical Fiber",
          zh: "光纤",
          ms: "Gentian Optik",
          def: { zh: "以光的形式传输信号的介质，带宽高、抗电磁干扰，适合高速长距离通信。", en: "A medium that carries signals as light, offering high bandwidth, immunity to electromagnetic interference and suitability for high speed long distance communication.", ms: "Medium yang membawa isyarat dalam bentuk cahaya, menawarkan jalur lebar tinggi, kebal gangguan elektromagnet dan sesuai untuk komunikasi laju jarak jauh." }
        },
        {
          en: "EMI (Electromagnetic Interference)",
          zh: "电磁干扰",
          ms: "Gangguan Elektromagnet (EMI)",
          def: { zh: "来自马达、日光灯、电力电缆等外部源对信号造成的干扰。", en: "Interference on a signal caused by external sources such as motors, fluorescent lights and power cables.", ms: "Gangguan pada isyarat yang disebabkan oleh sumber luar seperti motor, lampu pendarfluor dan kabel kuasa." }
        },
        {
          en: "Crosstalk",
          zh: "串扰",
          ms: "Cakap Silang",
          def: { zh: "相邻导线中的信号相互耦合造成的干扰，同轴电缆的屏蔽层能减少串扰。", en: "Interference caused by signals in adjacent wires coupling into each other, reduced by the shield of a coaxial cable.", ms: "Gangguan akibat isyarat dalam wayar bersebelahan berganding antara satu sama lain, dikurangkan oleh perisai kabel sepaksi." }
        },
        {
          en: "Throughput",
          zh: "吞吐量",
          ms: "Daya Tembus",
          def: { zh: "数据通过介质中某一点的快慢程度，是衡量传输性能的指标之一。", en: "A measurement of how fast data can pass through a point in the medium.", ms: "Ukuran kepantasan data melalui satu titik dalam medium." }
        },
        {
          en: "Propagation Speed",
          zh: "传播速度",
          ms: "Kelajuan Perambatan",
          def: { zh: "信号或比特在一秒内能通过介质的距离。", en: "The distance a signal or bit can travel through a medium in one second.", ms: "Jarak yang boleh dilalui isyarat atau bit dalam medium selama satu saat." }
        },
        {
          en: "Propagation Time",
          zh: "传播时间",
          ms: "Masa Perambatan",
          def: { zh: "信号从介质的一端传播到另一端所需的时间。", en: "The time required for a signal to travel from one point of the medium to another.", ms: "Masa yang diperlukan isyarat untuk bergerak dari satu titik medium ke titik yang lain." }
        },
        {
          en: "Uplink",
          zh: "上行链路",
          ms: "Pautan Naik",
          def: { zh: "地球站发向卫星的信号链路。", en: "The signal path from an earth station up to the satellite.", ms: "Laluan isyarat daripada stesen bumi ke satelit." }
        },
        {
          en: "Downlink",
          zh: "下行链路",
          ms: "Pautan Turun",
          def: { zh: "卫星发回地球的信号链路。", en: "The signal path from the satellite back down to Earth.", ms: "Laluan isyarat daripada satelit kembali ke bumi." }
        },
        {
          en: "Transponder",
          zh: "转发器",
          ms: "Transponder",
          def: { zh: "卫星上接收、放大并重新发送信号的设备。", en: "Equipment on a satellite that receives, amplifies and retransmits signals.", ms: "Peralatan pada satelit yang menerima, memperkuat dan menghantar semula isyarat." }
        },
        {
          en: "Geostationary Satellite",
          zh: "静止轨道卫星",
          ms: "Satelit Geopegun",
          def: { zh: "在赤道上方 35786 公里、24 小时绕地球一周因而看似固定不动的卫星。", en: "A satellite 35,786 km above the equator that orbits once in 24 hours and therefore appears fixed in the sky.", ms: "Satelit pada ketinggian 35,786 km di atas khatulistiwa yang mengorbit sekali dalam 24 jam dan kelihatan tetap di langit." }
        }
      ],
      diagrams: [
        {
          type: "tree",
          title: { zh: "传输介质的分类", en: "Classification of Transmission Media", ms: "Pengelasan Medium Penghantaran" },
          root: {
            label: { zh: "传输介质", en: "Transmission Media", ms: "Medium Penghantaran" }
          },
          branches: [
            {
              label: { zh: "导向介质（有线）", en: "Guided Media (wired)", ms: "Media Berpandu (berwayar)" },
              leaves: [
                {
                  label: { zh: "明线：无屏蔽，早期电话电报", en: "Open wire: unshielded, early telephony", ms: "Wayar terbuka: tanpa perisai, telefon awal" }
                },
                {
                  label: { zh: "双绞线：UTP / STP", en: "Twisted pair: UTP / STP", ms: "Pasangan terpilin: UTP / STP" }
                },
                {
                  label: { zh: "同轴电缆：内导体 + 外屏蔽", en: "Coaxial cable: inner conductor + shield", ms: "Kabel sepaksi: pengalir dalam + perisai" }
                },
                {
                  label: { zh: "光纤：以光传输，抗 EMI", en: "Optical fiber: light signal, immune to EMI", ms: "Gentian optik: isyarat cahaya, kebal EMI" }
                }
              ]
            },
            {
              label: { zh: "非导向介质（无线）", en: "Unguided Media (wireless)", ms: "Media Tak Berpandu (tanpa wayar)" },
              leaves: [
                {
                  label: { zh: "无线电波：广播，可穿透墙面", en: "Radio wave: broadcast, penetrates walls", ms: "Gelombang radio: siaran, menembusi dinding" }
                },
                {
                  label: { zh: "微波：视距传输", en: "Microwave: line-of-sight", ms: "Gelombang mikro: garis pandang" }
                },
                {
                  label: { zh: "红外：短距离、室内", en: "Infrared: short range, indoor", ms: "Inframerah: jarak pendek, dalam bangunan" }
                },
                {
                  label: { zh: "卫星：上行 + 转发器 + 下行", en: "Satellite: uplink + transponder + downlink", ms: "Satelit: pautan naik + transponder + pautan turun" }
                }
              ]
            }
          ]
        },
        {
          type: "matrix",
          title: { zh: "常用传输介质的性能对比", en: "Performance Comparison of Common Media", ms: "Perbandingan Prestasi Media Biasa" },
          cols: [
            { zh: "信号形式", en: "Signal form", ms: "Bentuk isyarat" },
            { zh: "抗噪与干扰", en: "Noise immunity", ms: "Ketahanan hingar" },
            { zh: "典型用途与限制", en: "Typical use and limits", ms: "Kegunaan dan had" }
          ],
          rows: [
            {
              head: { zh: "双绞线", en: "Twisted Pair", ms: "Pasangan Terpilin" },
              cells: [
                { zh: "电流（模拟/数字）", en: "Electric current (analog/digital)", ms: "Arus elektrik (analog/digital)" },
                { zh: "较低，UTP 易受 EMI/RFI", en: "Low, UTP is prone to EMI/RFI", ms: "Rendah, UTP mudah terjejas EMI/RFI" },
                { zh: "语音与以太网；约 100 m 需中继器", en: "Voice and Ethernet; repeater after about 100 m", ms: "Suara dan Ethernet; pengulang selepas 100 m" }
              ]
            },
            {
              head: { zh: "同轴电缆", en: "Coaxial Cable", ms: "Kabel Sepaksi" },
              cells: [
                { zh: "电流（模拟/数字）", en: "Electric current (analog/digital)", ms: "Arus elektrik (analog/digital)" },
                { zh: "较好，外屏蔽层抗 EMI 与串扰", en: "Better, the shield resists EMI and crosstalk", ms: "Lebih baik, perisai menahan EMI dan cakap silang" },
                { zh: "有线电视与宽带接入，可多路复用", en: "Cable TV and broadband, supports multiplexing", ms: "TV kabel dan jalur lebar, menyokong pemultipleksan" }
              ]
            },
            {
              head: { zh: "光纤", en: "Optical Fiber", ms: "Gentian Optik" },
              cells: [
                { zh: "光脉冲", en: "Light pulses", ms: "Denyut cahaya" },
                { zh: "最高，不受 EMI 影响", en: "Highest, immune to EMI", ms: "Tertinggi, kebal EMI" },
                { zh: "高速长距离骨干；设备与安装成本高", en: "High speed long distance backbone; costly to install", ms: "Tulang belakang laju jarak jauh; kos pemasangan tinggi" }
              ]
            },
            {
              head: { zh: "无线 / 卫星", en: "Wireless / Satellite", ms: "Tanpa Wayar / Satelit" },
              cells: [
                { zh: "电磁波", en: "Electromagnetic waves", ms: "Gelombang elektromagnet" },
                { zh: "受天气与遮挡影响（雨衰）", en: "Affected by weather and obstacles (rain fade)", ms: "Terjejas oleh cuaca dan halangan (pudar hujan)" },
                { zh: "电缆无法到达之处；延迟大、成本高", en: "Where cables cannot reach; high delay and cost", ms: "Tempat kabel tidak dapat sampai; kelewatan dan kos tinggi" }
              ]
            }
          ],
          legend: [
            { zh: "介质选择要综合考虑速度、距离、成本与可靠性", en: "Media choice balances speed, distance, cost and reliability", ms: "Pemilihan medium mengimbangi kelajuan, jarak, kos dan kebolehpercayaan" }
          ]
        }
      ],
      exam: [
        { zh: "三种导向介质的结构对比是必考点：双绞线靠扭绞抗干扰、同轴电缆靠外屏蔽层、光纤用光信号因而完全不受电磁干扰影响。", en: "The structural comparison of the three guided media is always examined: twisted pair resists interference by twisting, coaxial cable by its outer shield, and optical fiber uses light so it is completely immune to electromagnetic interference.", ms: "Perbandingan struktur tiga media berpandu sentiasa diuji: pasangan terpilin menahan gangguan melalui pemintalan, kabel sepaksi melalui perisai luar, dan gentian optik menggunakan cahaya sehingga kebal sepenuhnya terhadap gangguan elektromagnet." },
        { zh: "关键数字要背：以太网双绞线约 100 米需要中继器或交换机，语音传输带宽约 3000 Hz，同轴电缆直径约 0.5 至 2.5 厘米，静止轨道卫星高度 35786 公里、周期 24 小时。", en: "Key numbers must be memorised: Ethernet twisted pair needs a repeater or switch after about 100 m, voice transmission uses about 3000 Hz, coaxial cable diameter is about 0.5 to 2.5 cm, and a geostationary satellite is at 35,786 km with a 24-hour period.", ms: "Nombor penting perlu dihafal: pasangan terpilin Ethernet memerlukan pengulang atau suis selepas kira-kira 100 m, penghantaran suara menggunakan kira-kira 3000 Hz, diameter kabel sepaksi sekitar 0.5 hingga 2.5 cm, dan satelit geopegun berada pada 35,786 km dengan tempoh 24 jam." },
        { zh: "卫星通信的流程常以简答题出现：地球站发出上行链路信号，卫星用转发器接收、放大并改变频率，再经下行链路发回地面。", en: "The satellite communication flow often appears as a short answer question: the earth station sends the uplink, the transponder on the satellite receives, amplifies and changes the frequency, and the signal returns on the downlink.", ms: "Aliran komunikasi satelit sering keluar sebagai soalan pendek: stesen bumi menghantar pautan naik, transponder pada satelit menerima, memperkuat dan mengubah frekuensi, dan isyarat kembali melalui pautan turun." },
        { zh: "易错点：把吞吐量、传播速度和传播时间三者混淆；把双绞线说成不受干扰；忘记静止轨道卫星无法覆盖极区，且延迟大。", en: "Easily confused points: mixing up throughput, propagation speed and propagation time; claiming twisted pair is immune to interference; forgetting that a geostationary satellite cannot cover the polar regions and has a large delay.", ms: "Perkara yang mudah keliru: mengelirukan daya tembus, kelajuan perambatan dan masa perambatan; mengatakan pasangan terpilin kebal gangguan; terlupa satelit geopegun tidak meliputi kawasan kutub dan mempunyai kelewatan besar." }
      ],
      mnemonic: { zh: "有线三兄弟：扭绞抗扰、屏蔽抗扰、光纤不受扰；无线三方式：地波、天波、视距。", en: "Wired trio: twist resists, shield resists, fiber ignores; wireless trio: ground, sky and line-of-sight.", ms: "Tiga media berwayar: pintalan menahan, perisai menahan, gentian mengabaikan; tiga cara tanpa wayar: tanah, langit dan garis pandang." }
    },
    {
      id: "dcn-05",
      num: 5,
      title: { zh: "计算机网络导论", en: "Introduction to Computer Network", ms: "Pengenalan kepada Rangkaian Komputer" },
      file: "dcn/CHAPTER 5 2627 1.pdf",
      pages: 31,
      summary: { zh: "本章介绍计算机网络的基本分类方式与结构。网络可以按物理规模分为 LAN、MAN 和 WAN，也可以按拓扑、安全与控制模式、网络体系结构和网络协议来划分。课程接着讲解线路配置中的点对点与多点两种方式，以及总线、星型、环型、树型、网状和混合等网络拓扑的结构与优缺点。最后归纳 LAN、MAN、WAN 三大类别，并指出网络设计要在成本、速度、可靠性和规模之间做出取舍。", en: "This chapter introduces the basic ways of classifying computer networks and the structures they use. Networks can be classified by physical size into LAN, MAN and WAN, and also by topology, by security and control, by network architecture and by network protocol. The chapter then explains point-to-point and multipoint line configuration, followed by the structure, advantages and disadvantages of bus, star, ring, tree, mesh and hybrid topologies. It ends with the three main categories LAN, MAN and WAN, and notes that network design is a trade-off between cost, speed, reliability and size.", ms: "Bab ini memperkenalkan cara asas mengelaskan rangkaian komputer dan strukturnya. Rangkaian boleh dikelaskan mengikut saiz fizikal kepada LAN, MAN dan WAN, dan juga mengikut topologi, keselamatan serta kawalan, seni bina rangkaian dan protokol rangkaian. Seterusnya bab ini menerangkan konfigurasi talian titik ke titik dan berbilang titik, diikuti struktur, kelebihan dan kekurangan topologi bas, bintang, gelang, pokok, jejaring dan hibrid. Akhir sekali, tiga kategori utama LAN, MAN dan WAN disimpulkan, dan reka bentuk rangkaian dinyatakan sebagai pertukaran antara kos, kelajuan, kebolehpercayaan dan saiz." },
      points: [
        { zh: "网络可按物理规模分类：局域网 LAN 覆盖一个房间或一栋楼，城域网 MAN 覆盖一个城市或大型校园，广域网 WAN 覆盖国家乃至全世界。", en: "Networks can be classified by physical size: a LAN covers a room or a building, a MAN covers a city or a large campus, and a WAN covers a country or the whole world.", ms: "Rangkaian boleh dikelaskan mengikut saiz fizikal: LAN meliputi satu bilik atau bangunan, MAN meliputi satu bandar atau kampus besar, dan WAN meliputi sebuah negara atau seluruh dunia." },
        { zh: "除规模外，网络还可以按拓扑结构、安全与控制方式、网络体系结构和网络协议来分类。", en: "Besides size, networks can also be classified by topology, by how security and control are managed, by network architecture and by network protocol.", ms: "Selain saiz, rangkaian juga boleh dikelaskan mengikut topologi, cara keselamatan dan kawalan diurus, seni bina rangkaian dan protokol rangkaian." },
        { zh: "按安全与控制方式，对等网络中每台计算机自己控制文件与安全，适合小型办公室；客户机/服务器网络由中央服务器统一管理用户、文件、安全和资源，适合公司网络。", en: "By security and control, in a peer-to-peer network each computer controls its own files and security, which suits a small office, while in a client-server network a central server manages users, files, security and resources, which suits a company network.", ms: "Dari segi keselamatan dan kawalan, dalam rangkaian rakan ke rakan setiap komputer mengawal fail dan keselamatannya sendiri, sesuai untuk pejabat kecil, manakala dalam rangkaian pelanggan-pelayan satu pelayan pusat mengurus pengguna, fail, keselamatan dan sumber, sesuai untuk rangkaian syarikat." },
        { zh: "网络体系结构指连接设备所用的技术，常见的有以太网（当今最常见的局域网技术）、令牌环（IBM 早期技术）和 FDDI（基于光纤的高速网络）。", en: "Network architecture refers to the technology used to connect devices, for example Ethernet, the most common LAN technology today, Token Ring, an older IBM technology, and FDDI, a fiber-based high speed network.", ms: "Seni bina rangkaian merujuk teknologi yang digunakan untuk menyambung peranti, contohnya Ethernet yang paling biasa dalam LAN hari ini, Token Ring iaitu teknologi IBM yang lebih lama, dan FDDI iaitu rangkaian laju berasaskan gentian optik." },
        { zh: "网络协议是设备通信所必须遵循的一组规则，没有协议计算机之间无法互相理解，最常见的例子是 TCP/IP。", en: "A network protocol is a set of rules that devices must follow to communicate; without a protocol computers cannot understand each other, and the most common example is TCP/IP.", ms: "Protokol rangkaian ialah satu set peraturan yang mesti dipatuhi peranti untuk berkomunikasi; tanpa protokol komputer tidak dapat memahami satu sama lain, dan contoh yang paling biasa ialah TCP/IP." },
        { zh: "点对点线路配置中一条链路只由两台设备使用而且是专用的，因此通信更快、更安全、更易管理和排错，但设备多时成本很高。 多点配置中两台以上设备共享同一条链路，成本低、用线少、容易连接多台设备，但同时使用时速度下降，共享链路一旦故障会影响许多设备，冲突和安全风险也更高。", en: "In a point-to-point line configuration one link is used by only two devices and is dedicated, so communication is faster, more secure and easier to manage, but it becomes expensive when many devices must be connected. In a multipoint configuration more than two devices share one link, which is cheaper, needs less cable and connects many devices easily, but it slows down when many devices use it at once, a failure affects many devices, and collisions plus security risks are greater.", ms: "Dalam konfigurasi talian titik ke titik, satu pautan hanya digunakan oleh dua peranti dan bersifat khusus, jadi komunikasi lebih pantas, lebih selamat dan lebih mudah diurus, tetapi kosnya tinggi apabila banyak peranti perlu disambung. Dalam konfigurasi berbilang titik, lebih daripada dua peranti berkongsi satu pautan, yang lebih murah, memerlukan kabel kurang dan mudah menyambung banyak peranti, tetapi ia menjadi perlahan apabila ramai menggunakannya serentak, kegagalan menjejaskan banyak peranti, dan risiko perlanggaran serta keselamatan lebih tinggi." },
        { zh: "环形拓扑中信号沿环从一个设备传到下一个设备，令牌环网络用令牌传递控制发送权，只有持有令牌的计算机才能发送数据，地址匹配的节点接收报文，随后令牌被释放。", en: "In a ring topology the signal passes around the ring from one device to the next; Token Ring networks use token passing so that only the computer holding the token may transmit, a node accepts the message when the address matches, and the token is then released.", ms: "Dalam topologi gelang, isyarat bergerak mengelilingi gelang dari satu peranti ke peranti seterusnya; rangkaian Token Ring menggunakan penghantaran token supaya hanya komputer yang memegang token boleh menghantar, nod menerima mesej apabila alamat sepadan, dan token kemudian dilepaskan." },
        { zh: "总线拓扑用一条称为主干的主电缆连接所有计算机，便宜且容易安装，但主干电缆一旦故障整个网络可能瘫痪；星型拓扑中所有设备连接到中央集线器或交换机，单台计算机故障不影响网络，中央设备故障则全网停止。", en: "Bus topology connects all computers to one main cable called the backbone, which is cheap and easy to install, but a failure of the backbone may stop the whole network; in star topology every device connects to a central hub or switch, so one computer can fail without stopping the network but a failure of the central device stops everything.", ms: "Topologi bas menyambungkan semua komputer pada satu kabel utama yang dipanggil tulang belakang, murah dan mudah dipasang, tetapi kegagalan kabel itu boleh melumpuhkan seluruh rangkaian; dalam topologi bintang setiap peranti disambung ke hab atau suis pusat, jadi kegagalan satu komputer tidak menjejaskan rangkaian tetapi kegagalan peranti pusat menghentikan semuanya." },
        { zh: "树型拓扑是星型拓扑的扩展，设备按层次结构连接；网状拓扑中每台设备都与其他设备直接相连，使用专用点对点链路，可靠性高、容错性强，但需要大量电缆和端口，成本高且安装困难。", en: "Tree topology is an extension of star topology in which devices are arranged hierarchically; in mesh topology every device is directly connected to every other device by dedicated point-to-point links, giving high reliability and fault tolerance but requiring many cables and ports at high cost.", ms: "Topologi pokok ialah lanjutan topologi bintang yang menyusun peranti secara berhierarki; dalam topologi jejaring setiap peranti disambung terus kepada setiap peranti lain melalui pautan titik ke titik khusus, memberikan kebolehpercayaan dan toleransi kesalahan tinggi tetapi memerlukan banyak kabel dan port dengan kos yang tinggi." },
        { zh: "混合拓扑由两种或更多不同的物理拓扑组合而成，灵活性好、容易扩展，因此常用于大型网络；网络设计最终取决于成本、速度、可靠性、设备数量和网络规模。", en: "A hybrid topology is formed when two or more different physical topologies are combined, which makes it flexible and easy to expand and therefore common in large networks; the final design depends on cost, speed, reliability, the number of devices and the size of the network.", ms: "Topologi hibrid terbentuk apabila dua atau lebih topologi fizikal yang berbeza digabungkan, menjadikannya fleksibel dan mudah dikembangkan sehingga biasa digunakan dalam rangkaian besar; reka bentuk akhir bergantung pada kos, kelajuan, kebolehpercayaan, bilangan peranti dan saiz rangkaian." }
      ],
      terms: [
        {
          en: "LAN (Local Area Network)",
          zh: "局域网",
          ms: "LAN (Rangkaian Kawasan Setempat)",
          def: { zh: "覆盖一个房间、一栋楼或校园的小范围网络，如计算机实验室和家庭 Wi-Fi。", en: "A small network covering one room, building or campus, such as a computer lab or home Wi-Fi.", ms: "Rangkaian kecil yang meliputi satu bilik, bangunan atau kampus, seperti makmal komputer atau Wi-Fi rumah." }
        },
        {
          en: "MAN (Metropolitan Area Network)",
          zh: "城域网",
          ms: "MAN (Rangkaian Kawasan Metropolitan)",
          def: { zh: "覆盖一个城市或大型校园区域的网络。", en: "A network that covers a city or a large campus area.", ms: "Rangkaian yang meliputi sebuah bandar atau kawasan kampus yang besar." }
        },
        {
          en: "WAN (Wide Area Network)",
          zh: "广域网",
          ms: "WAN (Rangkaian Kawasan Luas)",
          def: { zh: "覆盖国家甚至全世界的超大型网络，例如互联网和全国银行分行网络。", en: "A very large network covering countries or the world, such as the Internet or a nationwide bank branch network.", ms: "Rangkaian sangat besar yang meliputi negara atau dunia, seperti Internet atau rangkaian cawangan bank seluruh negara." }
        },
        {
          en: "Topology",
          zh: "拓扑",
          ms: "Topologi",
          def: { zh: "网络中计算机、电缆和设备的物理或逻辑布局方式。", en: "The physical or logical layout of computers, cables and devices in a network.", ms: "Susun atur fizikal atau logik komputer, kabel dan peranti dalam sesuatu rangkaian." }
        },
        {
          en: "Point-to-Point",
          zh: "点对点",
          ms: "Titik ke Titik",
          def: { zh: "一条专用链路只连接两台设备的线路配置方式。", en: "A line configuration in which a dedicated link is used by only two devices.", ms: "Konfigurasi talian yang mana satu pautan khusus hanya digunakan oleh dua peranti." }
        },
        {
          en: "Multipoint",
          zh: "多点",
          ms: "Berbilang Titik",
          def: { zh: "两台以上设备共享同一条通信链路的线路配置方式。", en: "A line configuration in which more than two devices share the same communication link.", ms: "Konfigurasi talian yang mana lebih daripada dua peranti berkongsi pautan komunikasi yang sama." }
        },
        {
          en: "Bus Topology",
          zh: "总线拓扑",
          ms: "Topologi Bas",
          def: { zh: "所有计算机连接在一条主干电缆上的拓扑，便宜易装但主干故障会导致全网瘫痪。", en: "A topology in which all computers connect to one backbone cable; it is cheap and easy to install but a backbone failure stops the network.", ms: "Topologi yang menyambungkan semua komputer pada satu kabel tulang belakang; murah dan mudah dipasang tetapi kegagalan tulang belakang melumpuhkan rangkaian." }
        },
        {
          en: "Star Topology",
          zh: "星型拓扑",
          ms: "Topologi Bintang",
          def: { zh: "所有设备连接到一个中央集线器或交换机的拓扑，单点故障影响小但中央设备是关键。", en: "A topology in which every device connects to a central hub or switch, so single device failures matter little but the central device is critical.", ms: "Topologi yang menyambungkan setiap peranti ke hab atau suis pusat, jadi kegagalan satu peranti kurang menjejaskan tetapi peranti pusat sangat kritikal." }
        },
        {
          en: "Ring Topology",
          zh: "环型拓扑",
          ms: "Topologi Gelang",
          def: { zh: "信号沿环逐站传递的拓扑，常用令牌传递控制发送权以避免冲突。", en: "A topology in which the signal passes around the ring node by node, often using token passing to control transmission and avoid collisions.", ms: "Topologi yang menghantar isyarat mengelilingi gelang nod demi nod, selalunya menggunakan penghantaran token untuk mengawal penghantaran dan mengelakkan perlanggaran." }
        },
        {
          en: "Mesh Topology",
          zh: "网状拓扑",
          ms: "Topologi Jejaring",
          def: { zh: "每台设备都与其他设备用专用点对点链路直接相连的拓扑，容错性高但成本大。", en: "A topology in which every device is directly connected to every other device by dedicated point-to-point links; highly fault tolerant but expensive.", ms: "Topologi yang menyambung setiap peranti terus kepada setiap peranti lain melalui pautan titik ke titik khusus; toleransi kesalahan tinggi tetapi mahal." }
        },
        {
          en: "Tree Topology",
          zh: "树型拓扑",
          ms: "Topologi Pokok",
          def: { zh: "星型拓扑的扩展，设备按层次结构连接到次级与主中央设备。", en: "An extension of star topology in which devices are arranged hierarchically through secondary and main central devices.", ms: "Lanjutan topologi bintang yang menyusun peranti secara berhierarki melalui peranti pusat sekunder dan utama." }
        },
        {
          en: "Hybrid Topology",
          zh: "混合拓扑",
          ms: "Topologi Hibrid",
          def: { zh: "两种或更多不同物理拓扑组合成一个网络的方式，灵活且易于扩展。", en: "Two or more different physical topologies combined into one network; flexible and easy to expand.", ms: "Dua atau lebih topologi fizikal berbeza yang digabungkan menjadi satu rangkaian; fleksibel dan mudah dikembangkan." }
        },
        {
          en: "Token Passing",
          zh: "令牌传递",
          ms: "Penghantaran Token",
          def: { zh: "环型网络中控制发送权的方法，只有持有令牌的计算机才能发送数据。", en: "A method used in ring networks in which only the computer holding the token is allowed to transmit data.", ms: "Kaedah dalam rangkaian gelang yang mana hanya komputer pemegang token dibenarkan menghantar data." }
        },
        {
          en: "Peer-to-Peer Network",
          zh: "对等网络",
          ms: "Rangkaian Rakan ke Rakan",
          def: { zh: "每台计算机各自控制自己的文件与安全的网络，适合小型办公室。", en: "A network in which each computer controls its own files and security, suitable for a small office.", ms: "Rangkaian yang mana setiap komputer mengawal fail dan keselamatannya sendiri, sesuai untuk pejabat kecil." }
        },
        {
          en: "Client-Server Network",
          zh: "客户机/服务器网络",
          ms: "Rangkaian Pelanggan-Pelayan",
          def: { zh: "由中央服务器统一管理用户、文件、安全和资源的网络，常见于公司。", en: "A network in which a central server controls users, files, security and resources, common in companies.", ms: "Rangkaian yang mana pelayan pusat mengurus pengguna, fail, keselamatan dan sumber, biasa di syarikat." }
        }
      ],
      diagrams: [
        {
          type: "matrix",
          title: { zh: "常见网络拓扑对比", en: "Comparison of Common Network Topologies", ms: "Perbandingan Topologi Rangkaian Biasa" },
          cols: [
            { zh: "结构特点", en: "Structure", ms: "Ciri struktur" },
            { zh: "优点", en: "Advantage", ms: "Kelebihan" },
            { zh: "缺点", en: "Disadvantage", ms: "Kekurangan" }
          ],
          rows: [
            {
              head: { zh: "总线", en: "Bus", ms: "Bas" },
              cells: [
                { zh: "所有设备接在一条主干电缆上", en: "All devices share one backbone cable", ms: "Semua peranti berkongsi satu kabel tulang belakang" },
                { zh: "便宜、用线少、易安装", en: "Cheap, little cable, easy to install", ms: "Murah, kabel sedikit, mudah dipasang" },
                { zh: "主干故障全网瘫痪，冲突多", en: "Backbone failure stops all, many collisions", ms: "Kegagalan tulang belakang melumpuhkan semua, banyak perlanggaran" }
              ]
            },
            {
              head: { zh: "星型", en: "Star", ms: "Bintang" },
              cells: [
                { zh: "所有设备连到中央集线器或交换机", en: "All devices connect to a central hub or switch", ms: "Semua peranti ke hab atau suis pusat" },
                { zh: "单台设备故障不影响网络，易排错", en: "One device failure does not stop the network, easy to troubleshoot", ms: "Kegagalan satu peranti tidak melumpuhkan rangkaian, mudah dikesan" },
                { zh: "中央设备是关键故障点，用线多", en: "The central device is a single point of failure, more cable", ms: "Peranti pusat menjadi titik kegagalan tunggal, kabel lebih banyak" }
              ]
            },
            {
              head: { zh: "环型", en: "Ring", ms: "Gelang" },
              cells: [
                { zh: "设备首尾相接成环，令牌控制发送", en: "Devices form a closed loop, token controls sending", ms: "Peranti membentuk gelang tertutup, token mengawal penghantaran" },
                { zh: "无冲突，性能可预测", en: "No collisions, predictable performance", ms: "Tiada perlanggaran, prestasi boleh diramal" },
                { zh: "单个节点或链路故障会中断整个环", en: "One faulty node or link can break the whole ring", ms: "Satu nod atau pautan rosak boleh memutuskan seluruh gelang" }
              ]
            },
            {
              head: { zh: "网状", en: "Mesh", ms: "Jejaring" },
              cells: [
                { zh: "每两台设备之间都有专用点对点链路", en: "A dedicated point-to-point link between every pair", ms: "Pautan titik ke titik khusus antara setiap pasangan" },
                { zh: "可靠性高、容错强、隐私好", en: "Highly reliable, fault tolerant and private", ms: "Sangat boleh dipercayai, tahan kesalahan dan privasi baik" },
                { zh: "电缆与端口数量大，成本高、难安装", en: "Huge number of cables and ports, costly and hard to install", ms: "Bilangan kabel dan port banyak, mahal dan sukar dipasang" }
              ]
            }
          ],
          legend: [
            { zh: "树型与混合拓扑分别由星型扩展、由多种拓扑组合而成", en: "Tree extends the star, hybrid combines several topologies", ms: "Pokok ialah lanjutan bintang, hibrid menggabungkan beberapa topologi" }
          ]
        },
        {
          type: "cycle",
          title: { zh: "环型拓扑与令牌传递", en: "Ring Topology and Token Passing", ms: "Topologi Gelang dan Penghantaran Token" },
          steps: [
            {
              label: { zh: "站点 A 取得令牌", en: "Station A holds the token", ms: "Stesen A memegang token" }
            },
            {
              label: { zh: "站点 B 转发信号", en: "Station B regenerates and forwards", ms: "Stesen B menjana semula dan meneruskan" }
            },
            {
              label: { zh: "站点 C 地址匹配并接收", en: "Station C matches the address and copies", ms: "Stesen C sepadan alamat dan menyalin" }
            },
            {
              label: { zh: "站点 D 收到释放的令牌", en: "Station D receives the released token", ms: "Stesen D menerima token yang dilepaskan" }
            }
          ],
          caption: { zh: "只有持有令牌的站才能发送数据，因此不会发生冲突", en: "Only the station holding the token may transmit, so collisions cannot occur", ms: "Hanya stesen pemegang token boleh menghantar, jadi perlanggaran tidak berlaku" }
        }
      ],
      exam: [
        { zh: "LAN、MAN、WAN 的区分几乎必考：题目常给场景（家庭 Wi-Fi、大学校园网、全国银行分行、互联网）要求判断属于哪一类，并说明覆盖范围。", en: "Distinguishing LAN, MAN and WAN is almost always examined: scenarios such as home Wi-Fi, a university campus network, nationwide bank branches or the Internet must be classified with a reason about coverage.", ms: "Membezakan LAN, MAN dan WAN hampir selalu diuji: senario seperti Wi-Fi rumah, rangkaian kampus universiti, cawangan bank seluruh negara atau Internet perlu dikelaskan beserta sebab liputan." },
        { zh: "拓扑对比表要能默写：总线的主干是故障点、星型依赖中央设备、环型靠令牌避免冲突、网状因多条路径而容错但昂贵。", en: "The topology comparison table must be reproducible: the bus backbone is a failure point, star depends on the central device, ring uses a token to avoid collisions, and mesh is fault tolerant because of multiple paths but expensive.", ms: "Jadual perbandingan topologi perlu dihafal: tulang belakang bas ialah titik kegagalan, bintang bergantung pada peranti pusat, gelang menggunakan token untuk mengelakkan perlanggaran, dan jejaring tahan kesalahan kerana banyak laluan tetapi mahal." },
        { zh: "点对点与多点的比较是简答题常客：点对点专用、快、安全但成本高，多点共享、便宜、用线少但速度慢、冲突与安全风险大。", en: "Point-to-point versus multipoint is a frequent short answer: point-to-point is dedicated, fast and secure but costly, while multipoint is shared, cheap and cable-saving but slower with more collisions and security risk.", ms: "Perbandingan titik ke titik dengan berbilang titik sering keluar dalam soalan pendek: titik ke titik bersifat khusus, pantas dan selamat tetapi mahal, manakala berbilang titik dikongsi, murah dan menjimatkan kabel tetapi lebih perlahan dengan risiko perlanggaran dan keselamatan." },
        { zh: "常见错误：把拓扑与协议混为一谈；忘记星型拓扑中真正转发数据的是中央的集线器或交换机（集线器广播给所有端口、交换机只发给目的端口）。", en: "Common mistakes: confusing topology with protocol, and forgetting that in a star topology the central hub or switch actually forwards the data, with a hub sending to all ports and a switch only to the correct port.", ms: "Kesilapan biasa: mengelirukan topologi dengan protokol, dan terlupa bahawa dalam topologi bintang hab atau suis pusat yang menghantar data, dengan hab menghantar ke semua port dan suis hanya ke port yang betul." }
      ],
      mnemonic: { zh: "范围分 LAN/MAN/WAN，布局看总星环树网混；点对点专用快，多点共享省。", en: "Size gives LAN, MAN, WAN; layout gives bus, star, ring, tree, mesh, hybrid; point-to-point is dedicated and fast, multipoint is shared and cheap.", ms: "Saiz memberi LAN, MAN, WAN; susun atur memberi bas, bintang, gelang, pokok, jejaring, hibrid; titik ke titik khusus dan pantas, berbilang titik dikongsi dan murah." }
    },
    {
      id: "dcn-06",
      num: 6,
      title: { zh: "参考模型（OSI 与 TCP/IP）", en: "Reference Models (OSI and TCP/IP)", ms: "Model Rujukan (OSI dan TCP/IP)" },
      file: "dcn/CHAPTER 6 2627 1.pdf",
      pages: 25,
      summary: { zh: "本章介绍网络通信的两大参考模型。参考模型是概念蓝图，说明设备之间应该如何通信，并用分层的方式把复杂的通信过程拆成若干逻辑层，每层只与上下相邻的层交互，从而易于学习、开发、实现多厂商互操作和模块化维护。OSI 模型由国际标准化组织 ISO 制定，共七层；TCP/IP 模型由美国国防部为广域网开发，共四层，它把 OSI 的若干层合并在一起。本章最后说明数据发送时沿层向下、接收时沿层向上传递，并列出各层的代表协议。", en: "This chapter introduces the two main reference models for network communication. A reference model is a conceptual blueprint that shows how communication should take place between devices and divides the complex communication process into logical layers, where each layer communicates only with the layers directly above and below it; this makes networking easier to learn, easier to develop, supports multi-vendor interoperability and allows modular engineering. The OSI model, developed by the International Standardization Organization, has seven layers, while the TCP/IP model, developed by the U.S. Department of Defense for wide area networks, has four layers and combines several OSI layers together. The chapter closes by showing that data moves down the layers when sending and up the layers when receiving, with the main protocols of each layer.", ms: "Bab ini memperkenalkan dua model rujukan utama bagi komunikasi rangkaian. Model rujukan ialah rangka konsep yang menunjukkan bagaimana komunikasi sepatutnya berlaku antara peranti dan membahagikan proses komunikasi yang kompleks kepada lapisan logik, dengan setiap lapisan berkomunikasi hanya dengan lapisan di atas dan di bawahnya; ini menjadikan rangkaian lebih mudah dipelajari dan dibangunkan, menyokong interoperabiliti pelbagai vendor serta membolehkan kejuruteraan modular. Model OSI yang dibangunkan oleh International Standardization Organization mempunyai tujuh lapisan, manakala model TCP/IP yang dibangunkan oleh Jabatan Pertahanan Amerika Syarikat untuk rangkaian kawasan luas mempunyai empat lapisan dan menggabungkan beberapa lapisan OSI. Bab ini diakhiri dengan penjelasan bahawa data bergerak menuruni lapisan semasa menghantar dan menaiki lapisan semasa menerima, berserta protokol utama setiap lapisan." },
      points: [
        { zh: "参考模型是一份概念蓝图，用来显示设备之间应该如何通信，并为理解网络提供统一的标准方式。", en: "A reference model is a conceptual blueprint that shows how communication should take place between devices and provides a standard way to understand networking.", ms: "Model rujukan ialah rangka konsep yang menunjukkan cara komunikasi sepatutnya berlaku antara peranti dan menyediakan cara piawai untuk memahami rangkaian." },
        { zh: "分层把通信过程分成若干逻辑层，每层执行特定任务，并且只与紧邻的上层和下层通信，这种设计称为分层架构。", en: "Layering divides the communication process into logical layers, each performing a specific task and communicating only with the layers directly above and below it; such a design is called a layered architecture.", ms: "Pelapisan membahagikan proses komunikasi kepada lapisan logik, setiap satu menjalankan tugas tertentu dan berkomunikasi hanya dengan lapisan di atas dan di bawahnya; reka bentuk ini dipanggil seni bina berlapis." },
        { zh: "分层架构有四大好处：更容易学习、更容易开发（一层的变化不会强烈影响其他层）、不同厂商的设备与软件只要遵循同一标准就能互操作、模块化工程让设计测试和维护更简单。", en: "A layered architecture has four benefits: easier to learn, easier to develop because changes in one layer do not strongly affect others, multi-vendor interoperability when devices and software follow the same standards, and modular engineering that makes design, testing and maintenance easier.", ms: "Seni bina berlapis mempunyai empat faedah: lebih mudah dipelajari, lebih mudah dibangunkan kerana perubahan satu lapisan tidak menjejaskan lapisan lain, interoperabiliti pelbagai vendor apabila peranti dan perisian mengikut piawaian sama, dan kejuruteraan modular yang memudahkan reka bentuk, ujian dan penyelenggaraan." },
        { zh: "OSI 是开放系统互连参考模型，由国际标准化组织 ISO 制定，它最重要的作用之一是协助不同类型主机之间的数据传输。", en: "OSI is the Open System Interconnection reference model developed by the International Standardization Organization, and one of its greatest functions is to assist data transfer between disparate hosts.", ms: "OSI ialah model rujukan Saling Sambungan Sistem Terbuka yang dibangunkan oleh International Standardization Organization, dan salah satu fungsi terpentingnya ialah membantu pemindahan data antara hos yang berbeza jenis." },
        { zh: "TCP/IP 是美国国防部在 1970 至 1980 年代为广域网开发的工业标准协议族，它不是单一协议，而是一整套定义应用、传输控制、网络、路由和网络管理的协议。", en: "TCP/IP is an industry-standard protocol suite for wide area networks developed in the 1970s and 1980s by the U.S. Department of Defense; it is not one protocol but a suite that defines applications, transport control, networking, routing and network management.", ms: "TCP/IP ialah suite protokol piawai industri untuk rangkaian kawasan luas yang dibangunkan pada 1970-an dan 1980-an oleh Jabatan Pertahanan Amerika Syarikat; ia bukan satu protokol tetapi satu suite yang mentakrifkan aplikasi, kawalan pengangkutan, rangkaian, penghalaan dan pengurusan rangkaian." },
        { zh: "TCP/IP 模型有四层：应用层、传输层、因特网层和网络接入层；网络接入层又叫数据链路层或物理层，是层次结构中的最底层。", en: "The TCP/IP model has four layers: Application, Transport, Internet and Network Access; the network access layer, also called the data link or physical layer, is the lowest layer of the hierarchy.", ms: "Model TCP/IP mempunyai empat lapisan: Aplikasi, Pengangkutan, Internet dan Capaian Rangkaian; lapisan capaian rangkaian yang juga dipanggil lapisan pautan data atau fizikal ialah lapisan paling bawah." },
        { zh: "应用层让用户应用使用网络服务，代表协议有 SMTP 发送邮件、FTP 传送文件、Telnet 远程登录、DNS 把域名解析成 IP 地址、SNMP 监控管理网络设备、TFTP 用 UDP 传送小文件和 HTTP 传送网页。", en: "The application layer lets user applications use network services; typical protocols are SMTP for email, FTP for file transfer, Telnet for remote login, DNS for resolving a name into an IP address, SNMP for monitoring network devices, TFTP for small files over UDP and HTTP for web pages.", ms: "Lapisan aplikasi membolehkan aplikasi pengguna menggunakan perkhidmatan rangkaian; protokol biasanya SMTP untuk e-mel, FTP untuk pemindahan fail, Telnet untuk log masuk jauh, DNS untuk menukar nama kepada alamat IP, SNMP untuk memantau peranti rangkaian, TFTP untuk fail kecil melalui UDP dan HTTP untuk halaman web." },
        { zh: "因特网层负责发送分组并尽可能准确地传送数据，其协议包括无连接且不保证送达的 IP、用于网络测试的 ICMP、把 IP 地址转换成 MAC 地址的 ARP，以及帮助设备启动时取得 IP 地址的 RARP。", en: "The internet layer is responsible for sending the packets and transferring the data as accurately as possible; its protocols include IP which is connectionless and does not guarantee delivery, ICMP for network testing, ARP which converts IP addresses to MAC addresses, and RARP which helps a device get an IP address during startup.", ms: "Lapisan internet bertanggungjawab menghantar paket dan memindahkan data setepat mungkin; protokolnya termasuk IP yang tanpa sambungan dan tidak menjamin penghantaran, ICMP untuk ujian rangkaian, ARP yang menukar alamat IP kepada alamat MAC, dan RARP yang membantu peranti memperoleh alamat IP semasa permulaan." },
        { zh: "网络接入层负责给数据帧加上目的 MAC 地址，并通过以太网电缆、无线网络、网卡和驱动程序等物理基础设施在设备之间传送数据。", en: "The network access layer adds the destination MAC address to data frames and handles the physical infrastructure such as Ethernet cables, wireless networks, network interface cards and drivers that enable communication between devices.", ms: "Lapisan capaian rangkaian menambah alamat MAC destinasi pada bingkai data dan mengendalikan infrastruktur fizikal seperti kabel Ethernet, rangkaian tanpa wayar, kad antara muka rangkaian dan pemacu yang membolehkan komunikasi antara peranti." },
        { zh: "发送数据时数据沿层向下传递并在每层加上控制信息，接收时沿层向上传递并逐层拆除控制信息；OSI 七层更详细，TCP/IP 四层更简单。", en: "When sending, data moves down the layers and control information is added at each layer, and at the receiver it moves up the layers and the control information is removed layer by layer; OSI has seven more detailed layers while TCP/IP has four simpler ones.", ms: "Semasa menghantar, data bergerak menuruni lapisan dan maklumat kawalan ditambah pada setiap lapisan, dan di penerima ia bergerak menaiki lapisan dan maklumat kawalan dibuang lapisan demi lapisan; OSI mempunyai tujuh lapisan yang lebih terperinci manakala TCP/IP mempunyai empat lapisan yang lebih ringkas." }
      ],
      terms: [
        {
          en: "Reference Model",
          zh: "参考模型",
          ms: "Model Rujukan",
          def: { zh: "说明设备之间应如何通信的概念蓝图，为理解网络提供标准框架。", en: "A conceptual blueprint showing how devices should communicate and providing a standard framework for understanding networks.", ms: "Rangka konsep yang menunjukkan cara peranti berkomunikasi dan menyediakan kerangka piawai untuk memahami rangkaian." }
        },
        {
          en: "Layered Architecture",
          zh: "分层架构",
          ms: "Seni Bina Berlapis",
          def: { zh: "把通信系统划分为若干层、每层只与相邻层交互的设计方式。", en: "A design that divides a communication system into layers where each layer interacts only with its neighbours.", ms: "Reka bentuk yang membahagikan sistem komunikasi kepada lapisan dan setiap lapisan hanya berinteraksi dengan lapisan bersebelahan." }
        },
        {
          en: "OSI Model",
          zh: "OSI 模型",
          ms: "Model OSI",
          def: { zh: "由 ISO 制定的开放系统互连参考模型，共七层。", en: "The Open System Interconnection reference model defined by ISO with seven layers.", ms: "Model rujukan Saling Sambungan Sistem Terbuka yang ditakrifkan ISO dengan tujuh lapisan." }
        },
        {
          en: "TCP/IP Model",
          zh: "TCP/IP 模型",
          ms: "Model TCP/IP",
          def: { zh: "由美国国防部开发的四层参考模型，是互联网的实际标准。", en: "The four-layer reference model developed by the U.S. Department of Defense and the de facto standard of the Internet.", ms: "Model rujukan empat lapisan yang dibangunkan Jabatan Pertahanan Amerika Syarikat dan menjadi piawaian sebenar Internet." }
        },
        {
          en: "Application Layer",
          zh: "应用层",
          ms: "Lapisan Aplikasi",
          def: { zh: "让用户应用使用网络服务的最上层，如电子邮件、网站和文件传输。", en: "The top layer that lets user applications use network services such as email, websites and file transfer.", ms: "Lapisan teratas yang membolehkan aplikasi pengguna menggunakan perkhidmatan rangkaian seperti e-mel, laman web dan pemindahan fail." }
        },
        {
          en: "Presentation Layer",
          zh: "表示层",
          ms: "Lapisan Persembahan",
          def: { zh: "OSI 的第六层，处理数据的表示形式，如编码、加密和压缩。", en: "The sixth OSI layer, which deals with how data is represented, for example encoding, encryption and compression.", ms: "Lapisan keenam OSI yang mengendalikan perwakilan data seperti pengekodan, penyulitan dan pemampatan." }
        },
        {
          en: "Session Layer",
          zh: "会话层",
          ms: "Lapisan Sesi",
          def: { zh: "OSI 的第五层，负责建立、管理和终止通信会话。", en: "The fifth OSI layer, responsible for establishing, managing and terminating communication sessions.", ms: "Lapisan kelima OSI yang bertanggungjawab membina, mengurus dan menamatkan sesi komunikasi." }
        },
        {
          en: "Transport Layer",
          zh: "传输层",
          ms: "Lapisan Pengangkutan",
          def: { zh: "负责进程到进程的传递，用 TCP 或 UDP 提供可靠的或尽力而为的数据传送。", en: "Responsible for process-to-process delivery, using TCP or UDP for reliable or best-effort transfer.", ms: "Bertanggungjawab atas penghantaran proses ke proses, menggunakan TCP atau UDP untuk pemindahan boleh dipercayai atau usaha terbaik." }
        },
        {
          en: "Internet Layer",
          zh: "因特网层",
          ms: "Lapisan Internet",
          def: { zh: "TCP/IP 中负责 IP 寻址与路由的层，协议包括 IP、ICMP、ARP 和 RARP。", en: "The TCP/IP layer responsible for IP addressing and routing, with protocols such as IP, ICMP, ARP and RARP.", ms: "Lapisan TCP/IP yang bertanggungjawab atas pengalamatan IP dan penghalaan, dengan protokol seperti IP, ICMP, ARP dan RARP." }
        },
        {
          en: "Network Access Layer",
          zh: "网络接入层",
          ms: "Lapisan Capaian Rangkaian",
          def: { zh: "TCP/IP 的最底层，对应 OSI 的数据链路层与物理层，处理 MAC 地址、以太网与无线传输。", en: "The lowest TCP/IP layer, corresponding to the OSI data link and physical layers and handling MAC addresses, Ethernet and wireless transmission.", ms: "Lapisan terendah TCP/IP, bersamaan lapisan pautan data dan fizikal OSI, mengendalikan alamat MAC, Ethernet dan penghantaran tanpa wayar." }
        },
        {
          en: "Data Link Layer",
          zh: "数据链路层",
          ms: "Lapisan Pautan Data",
          def: { zh: "OSI 第二层，负责单条链路上相邻节点之间的帧传送与差错检测。", en: "OSI layer 2, responsible for frame delivery between adjacent nodes on a single link and for error detection.", ms: "Lapisan 2 OSI yang bertanggungjawab atas penghantaran bingkai antara nod bersebelahan pada satu pautan dan pengesanan ralat." }
        },
        {
          en: "Physical Layer",
          zh: "物理层",
          ms: "Lapisan Fizikal",
          def: { zh: "OSI 最底层，负责把比特以信号形式在物理介质上传输。", en: "The lowest OSI layer, which transmits bits as signals over the physical medium.", ms: "Lapisan terendah OSI yang menghantar bit sebagai isyarat melalui medium fizikal." }
        },
        {
          en: "HTTP",
          zh: "超文本传输协议",
          ms: "HTTP (Protokol Pemindahan Hiperteks)",
          def: { zh: "应用层协议，用于在浏览器与服务器之间传送并显示网页。", en: "An application layer protocol used to transfer and display web pages between a browser and a server.", ms: "Protokol lapisan aplikasi untuk memindahkan dan memaparkan halaman web antara pelayar dan pelayan." }
        },
        {
          en: "SMTP",
          zh: "简单邮件传输协议",
          ms: "SMTP (Protokol Pemindahan Mel Ringkas)",
          def: { zh: "应用层协议，用于在网络上发送电子邮件。", en: "An application layer protocol used to send email messages over the network.", ms: "Protokol lapisan aplikasi yang digunakan untuk menghantar mesej e-mel melalui rangkaian." }
        },
        {
          en: "DNS",
          zh: "域名系统",
          ms: "DNS (Sistem Nama Domain)",
          def: { zh: "把人类易读的域名转换成 IP 地址的应用层服务。", en: "An application layer service that changes a human-friendly website name into an IP address.", ms: "Perkhidmatan lapisan aplikasi yang menukar nama domain yang mudah dibaca kepada alamat IP." }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: { zh: "OSI 七层模型与 TCP/IP 四层模型", en: "OSI Seven Layers versus TCP/IP Four Layers", ms: "Tujuh Lapisan OSI berbanding Empat Lapisan TCP/IP" },
          cols: [
            {
              head: { zh: "OSI 模型（7 层）", en: "OSI Model (7 layers)", ms: "Model OSI (7 lapisan)" },
              layers: [
                {
                  label: { zh: "应用层", en: "Application", ms: "Aplikasi" },
                  note: { zh: "面向用户的网络服务", en: "User-facing network services", ms: "Perkhidmatan rangkaian untuk pengguna" }
                },
                {
                  label: { zh: "表示层", en: "Presentation", ms: "Persembahan" },
                  note: { zh: "编码、加密、压缩", en: "Encoding, encryption, compression", ms: "Pengekodan, penyulitan, pemampatan" }
                },
                {
                  label: { zh: "会话层", en: "Session", ms: "Sesi" },
                  note: { zh: "建立与管理会话", en: "Establishes and manages sessions", ms: "Membina dan mengurus sesi" }
                },
                {
                  label: { zh: "传输层", en: "Transport", ms: "Pengangkutan" },
                  note: { zh: "进程到进程传递", en: "Process-to-process delivery", ms: "Penghantaran proses ke proses" }
                },
                {
                  label: { zh: "网络层", en: "Network", ms: "Rangkaian" },
                  note: { zh: "逻辑寻址与路由", en: "Logical addressing and routing", ms: "Pengalamatan logik dan penghalaan" }
                },
                {
                  label: { zh: "数据链路层", en: "Data Link", ms: "Pautan Data" },
                  note: { zh: "节点到节点的帧传送", en: "Node-to-node frame delivery", ms: "Penghantaran bingkai nod ke nod" }
                },
                {
                  label: { zh: "物理层", en: "Physical", ms: "Fizikal" },
                  note: { zh: "比特以信号传输", en: "Bits transmitted as signals", ms: "Bit dihantar sebagai isyarat" }
                }
              ]
            },
            {
              head: { zh: "TCP/IP 模型（4 层）", en: "TCP/IP Model (4 layers)", ms: "Model TCP/IP (4 lapisan)" },
              layers: [
                {
                  label: { zh: "应用层", en: "Application", ms: "Aplikasi" },
                  note: { zh: "HTTP、SMTP、FTP、DNS、SNMP", en: "HTTP, SMTP, FTP, DNS, SNMP", ms: "HTTP, SMTP, FTP, DNS, SNMP" }
                },
                {
                  label: { zh: "传输层", en: "Transport", ms: "Pengangkutan" },
                  note: { zh: "TCP 与 UDP", en: "TCP and UDP", ms: "TCP dan UDP" }
                },
                {
                  label: { zh: "因特网层", en: "Internet", ms: "Internet" },
                  note: { zh: "IP、ICMP、ARP、RARP", en: "IP, ICMP, ARP, RARP", ms: "IP, ICMP, ARP, RARP" }
                },
                {
                  label: { zh: "网络接入层", en: "Network Access", ms: "Capaian Rangkaian" },
                  note: { zh: "MAC 地址、以太网、Wi-Fi、物理介质", en: "MAC address, Ethernet, Wi-Fi, physical media", ms: "Alamat MAC, Ethernet, Wi-Fi, media fizikal" }
                }
              ]
            }
          ],
          caption: { zh: "TCP/IP 的应用层合并了 OSI 的应用层、表示层与会话层；网络接入层合并了数据链路层与物理层", en: "The TCP/IP application layer merges the OSI application, presentation and session layers, while network access merges the data link and physical layers", ms: "Lapisan aplikasi TCP/IP menggabungkan lapisan aplikasi, persembahan dan sesi OSI, manakala capaian rangkaian menggabungkan lapisan pautan data dan fizikal" }
        },
        {
          type: "tree",
          title: { zh: "TCP/IP 协议族的代表协议", en: "Key Protocols in the TCP/IP Suite", ms: "Protokol Utama dalam Suite TCP/IP" },
          root: {
            label: { zh: "TCP/IP 协议族", en: "TCP/IP Protocol Suite", ms: "Suite Protokol TCP/IP" }
          },
          branches: [
            {
              label: { zh: "应用层", en: "Application Layer", ms: "Lapisan Aplikasi" },
              leaves: [
                {
                  label: { zh: "HTTP：传送网页", en: "HTTP: transfers web pages", ms: "HTTP: memindahkan halaman web" }
                },
                {
                  label: { zh: "SMTP：发送电子邮件", en: "SMTP: sends email", ms: "SMTP: menghantar e-mel" }
                },
                {
                  label: { zh: "FTP / TFTP：传送文件", en: "FTP / TFTP: transfers files", ms: "FTP / TFTP: memindahkan fail" }
                },
                {
                  label: { zh: "DNS：域名解析成 IP", en: "DNS: name to IP address", ms: "DNS: nama kepada alamat IP" }
                }
              ]
            },
            {
              label: { zh: "传输层", en: "Transport Layer", ms: "Lapisan Pengangkutan" },
              leaves: [
                {
                  label: { zh: "TCP：面向连接的可靠传输", en: "TCP: connection-oriented reliable", ms: "TCP: boleh dipercayai berorientasikan sambungan" }
                },
                {
                  label: { zh: "UDP：无连接、尽力而为", en: "UDP: connectionless best effort", ms: "UDP: tanpa sambungan, usaha terbaik" }
                }
              ]
            },
            {
              label: { zh: "因特网层", en: "Internet Layer", ms: "Lapisan Internet" },
              leaves: [
                {
                  label: { zh: "IP：无连接的分组传送", en: "IP: connectionless packet delivery", ms: "IP: penghantaran paket tanpa sambungan" }
                },
                {
                  label: { zh: "ICMP：网络测试与差错报告", en: "ICMP: testing and error reporting", ms: "ICMP: ujian dan laporan ralat" }
                },
                {
                  label: { zh: "ARP / RARP：IP 与 MAC 互换", en: "ARP / RARP: IP and MAC mapping", ms: "ARP / RARP: pemetaan IP dan MAC" }
                }
              ]
            },
            {
              label: { zh: "网络接入层", en: "Network Access Layer", ms: "Lapisan Capaian Rangkaian" },
              leaves: [
                {
                  label: { zh: "以太网与无线局域网", en: "Ethernet and wireless LAN", ms: "Ethernet dan LAN tanpa wayar" }
                },
                {
                  label: { zh: "网卡与驱动程序", en: "Network interface cards and drivers", ms: "Kad antara muka rangkaian dan pemacu" }
                }
              ]
            }
          ]
        }
      ],
      exam: [
        { zh: "层数与名称是必背内容：OSI 七层由下到上是物理层、数据链路层、网络层、传输层、会话层、表示层、应用层；TCP/IP 四层是网络接入层、因特网层、传输层、应用层。", en: "The number and names of the layers must be memorised: OSI from bottom to top is Physical, Data Link, Network, Transport, Session, Presentation, Application, while TCP/IP is Network Access, Internet, Transport, Application.", ms: "Bilangan dan nama lapisan wajib dihafal: OSI dari bawah ke atas ialah Fizikal, Pautan Data, Rangkaian, Pengangkutan, Sesi, Persembahan, Aplikasi, manakala TCP/IP ialah Capaian Rangkaian, Internet, Pengangkutan, Aplikasi." },
        { zh: "两模型的对应关系常考：TCP/IP 的应用层对应 OSI 的应用层、表示层和会话层，网络接入层对应 OSI 的数据链路层和物理层。", en: "The mapping between the two models is frequently examined: the TCP/IP application layer corresponds to the OSI application, presentation and session layers, and network access corresponds to the data link and physical layers.", ms: "Pemetaan antara dua model sering diuji: lapisan aplikasi TCP/IP bersamaan lapisan aplikasi, persembahan dan sesi OSI, manakala capaian rangkaian bersamaan lapisan pautan data dan fizikal." },
        { zh: "协议与功能配对是高频题：DNS 把域名解析成 IP、ARP 把 IP 转成 MAC、RARP 让设备取得 IP、ICMP 用于测试、SMTP 发邮件、FTP 传文件、TFTP 用 UDP 传小文件、SNMP 管理设备。", en: "Matching protocols to functions is very common: DNS resolves a name to an IP, ARP converts an IP to a MAC, RARP lets a device obtain an IP, ICMP is used for testing, SMTP sends mail, FTP transfers files, TFTP transfers small files over UDP and SNMP manages devices.", ms: "Memadankan protokol dengan fungsi sangat biasa: DNS menukar nama kepada IP, ARP menukar IP kepada MAC, RARP membolehkan peranti memperoleh IP, ICMP untuk ujian, SMTP menghantar mel, FTP memindahkan fail, TFTP memindahkan fail kecil melalui UDP dan SNMP mengurus peranti." },
        { zh: "易错点：把 TCP/IP 说成单一协议（它其实是协议族）；把数据流动方向写反，发送时应沿层向下、接收时沿层向上。", en: "Common mistakes: calling TCP/IP a single protocol when it is a suite, and reversing the direction of data flow, which goes down the layers when sending and up the layers when receiving.", ms: "Kesilapan biasa: menyebut TCP/IP sebagai satu protokol sedangkan ia satu suite, dan menyongsangkan arah aliran data yang menuruni lapisan semasa menghantar dan menaiki lapisan semasa menerima." }
      ],
      mnemonic: { zh: "OSI 七层从下往上：物、数、网、传、会、表、应；TCP/IP 四层：接入、网际、传输、应用。", en: "OSI from bottom up: Physical, Data link, Network, Transport, Session, Presentation, Application; TCP/IP: Network Access, Internet, Transport, Application.", ms: "OSI dari bawah ke atas: Fizikal, Pautan Data, Rangkaian, Pengangkutan, Sesi, Persembahan, Aplikasi; TCP/IP: Capaian Rangkaian, Internet, Pengangkutan, Aplikasi." }
    },
    {
      id: "dcn-07",
      num: 7,
      title: { zh: "网络与互联设备", en: "Networking and Internetworking Devices", ms: "Peranti Rangkaian dan Antara Rangkaian" },
      file: "dcn/CHAPTER 7 2627 1.pdf",
      pages: 24,
      summary: { zh: "本章逐个介绍把计算机连接成网络的设备。中继器工作在物理层，用来放大因长距离传输而变弱的信号以延长网络覆盖；集线器同样是物理层设备，把收到的信号重复到所有端口，因此不知道目的地在哪。网桥和交换机工作在数据链路层，用 MAC 地址过滤和转发帧，交换机可以看成多端口网桥。路由器工作在网络层，按 IP 地址在不同网络之间转发分组，并能通过多条路径提供容错。网关则可以跨越多个 OSI 层，在协议或数据格式不同的系统之间进行转换。", en: "This chapter introduces, one by one, the devices that connect computers into networks. A repeater works at the physical layer and boosts a signal that has weakened over distance so the network can be extended, while a hub is also a physical layer device that repeats the received signal to every port and therefore does not know the destination. Bridges and switches work at the data link layer, filtering and forwarding frames by MAC address, and a switch can be described as a multiport bridge. A router works at the network layer, forwards packets between different networks using IP addresses and provides fault tolerance by choosing among multiple paths. A gateway may work across several OSI layers to translate between systems that use different protocols or data formats.", ms: "Bab ini memperkenalkan satu demi satu peranti yang menyambungkan komputer menjadi rangkaian. Pengulang beroperasi pada lapisan fizikal dan memperkuat isyarat yang menjadi lemah akibat jarak supaya rangkaian dapat diperluas, manakala hab juga peranti lapisan fizikal yang mengulang isyarat yang diterima ke semua port dan oleh itu tidak mengetahui destinasi. Jambatan dan suis beroperasi pada lapisan pautan data, menapis dan menghantar bingkai berdasarkan alamat MAC, dan suis boleh dianggap sebagai jambatan berbilang port. Penghala beroperasi pada lapisan rangkaian, menghantar paket antara rangkaian berbeza menggunakan alamat IP dan menyediakan toleransi kesalahan dengan memilih antara beberapa laluan. Gerbang pula boleh beroperasi merentas beberapa lapisan OSI untuk menterjemah antara sistem yang menggunakan protokol atau format data berbeza." },
      points: [
        { zh: "中继器也叫再生器，是工作在 OSI 物理层的电子设备；信号沿电缆传输会逐渐变弱，因此需要中继器增强信号以延长网络距离，典型例子是采用星型拓扑 UTP 布线的局域网。", en: "A repeater, also called a regenerator, is an electronic device that operates at the physical layer of the OSI model; a signal loses strength as it travels along a cable, so a repeater boosts it to extend the network, a good example being a LAN that uses star topology with unshielded twisted-pair cabling.", ms: "Pengulang, juga dipanggil penjana semula, ialah peranti elektronik yang beroperasi pada lapisan fizikal model OSI; isyarat menjadi lemah apabila merambat di sepanjang kabel, jadi pengulang memperkuatnya untuk memperluas rangkaian, contohnya LAN yang menggunakan topologi bintang dengan kabel pasangan terpilin tanpa perisai." },
        { zh: "网桥工作在数据链路层，用于扩展或分割网络，可以把大型网络分成较小的网段，也能连接不同介质（如 UTP 与光纤）甚至不同网络体系结构（如令牌环与以太网），并且通常支持 SNMP 等诊断功能。", en: "A bridge operates at the data link layer and is used either to extend or to segment networks; it can join dissimilar media such as UTP and fiber-optic cabling and even different network architectures such as Token Ring and Ethernet, and it often supports SNMP and other diagnostic features.", ms: "Jambatan beroperasi pada lapisan pautan data dan digunakan untuk memperluas atau membahagikan rangkaian; ia boleh menyambung media berbeza seperti kabel UTP dan gentian optik malah seni bina rangkaian berbeza seperti Token Ring dan Ethernet, serta sering menyokong SNMP dan ciri diagnostik lain." },
        { zh: "集线器是把同一局域网中多台计算机或站点连接起来的简单设备，它把收到的信号转发到所有其他端口；由于工作在物理层，它不检查 MAC 地址，也不知道目的地在哪里，只知道把信号重复给所有人。", en: "A hub is a simple device that connects several computers or stations in the same LAN and sends a received signal to all other ports; because it works at the physical layer it does not examine MAC addresses, does not know the destination and simply repeats the signal to everyone.", ms: "Hab ialah peranti mudah yang menyambungkan beberapa komputer atau stesen dalam LAN yang sama dan menghantar isyarat yang diterima ke semua port lain; kerana beroperasi pada lapisan fizikal, ia tidak memeriksa alamat MAC, tidak mengetahui destinasi dan hanya mengulang isyarat kepada semua." },
        { zh: "集线器分两种：无源集线器只连接电缆和设备而不再生信号，有源集线器本质上是多端口中继器，会接收、再生并把信号重复到其他端口。", en: "There are two types of hub: a passive hub connects cables and devices but does not regenerate the signal, while an active hub is basically a multiport repeater that receives, regenerates and repeats the signal to other ports.", ms: "Terdapat dua jenis hab: hab pasif menyambung kabel dan peranti tetapi tidak menjana semula isyarat, manakala hab aktif pada dasarnya ialah pengulang berbilang port yang menerima, menjana semula dan mengulang isyarat ke port lain." },
        { zh: "交换机是第二层设备，常被描述为多端口网桥；它从入帧的源 MAC 地址学习设备接在哪个端口，检查目的 MAC 地址决定帧的去向，并只把帧发往需要的端口，学到的信息保存在 MAC 地址表（交换表）中。", en: "A switch is a layer 2 device commonly described as a multiport bridge; it learns from the source MAC address of incoming frames which port a device is reachable through, checks the destination MAC address to decide where the frame should go, sends the frame only toward the needed port, and stores what it learns in a MAC address table.", ms: "Suis ialah peranti lapisan 2 yang biasa digambarkan sebagai jambatan berbilang port; ia belajar daripada alamat MAC sumber bingkai masuk port mana yang boleh dicapai oleh sesuatu peranti, memeriksa alamat MAC destinasi untuk menentukan hala tuju bingkai, menghantar bingkai hanya ke port yang diperlukan, dan menyimpan maklumat yang dipelajari dalam jadual alamat MAC." },
        { zh: "路由器连接不同的网络并按 IP 地址转发分组；它用来构建互联网际网络，也就是若干既能独立运行又能共享信息的网络的集合。", en: "A router connects different networks and forwards packets based on IP addresses; routers are used to create internetworks, that is collections of networks that function independently yet are able to share information.", ms: "Penghala menyambungkan rangkaian yang berbeza dan menghantar paket berdasarkan alamat IP; penghala digunakan untuk membina rangkaian antara rangkaian, iaitu kumpulan rangkaian yang berfungsi secara bebas tetapi boleh berkongsi maklumat." },
        { zh: "路由器通过在多条路径之间做选择为网络提供容错：如果办公室 A 到办公室 B 之间有多条路径，路由器会为分组选择最佳路径，最佳路径不可用时还能改选其他路径。", en: "Routers provide fault tolerance by choosing between multiple paths: if more than one path exists from Office A to Office B the router chooses the best path for the packets, and if that path is no longer available it can select another one.", ms: "Penghala menyediakan toleransi kesalahan dengan memilih antara beberapa laluan: jika terdapat lebih daripada satu laluan dari Pejabat A ke Pejabat B, penghala memilih laluan terbaik untuk paket, dan jika laluan itu tidak lagi tersedia ia boleh memilih laluan lain." },
        { zh: "与网桥或交换机不同，路由器默认不转发局域网广播，可以用来防止广播风暴；路由器默认划分广播域，也就是把听到同一广播的那组设备分隔开，它工作在网络层。", en: "Unlike bridges or switches, routers do not forward LAN broadcasts by default and can be used to prevent broadcast storms; a router breaks up a broadcast domain, the set of devices that hear all broadcasts sent on a segment, and it operates at the network layer.", ms: "Berbeza daripada jambatan atau suis, penghala tidak menghantar siaran LAN secara lalai dan boleh digunakan untuk mencegah ribut siaran; penghala memecahkan domain siaran, iaitu set peranti yang mendengar semua siaran pada satu segmen, dan ia beroperasi pada lapisan rangkaian." },
        { zh: "网关是让两个使用不同协议或数据格式的系统或网络互相通信的设备或软件，它可以跨多个甚至全部 OSI 层工作，从而把信息转换成对方能理解的形式。", en: "A gateway is a device or software that allows two different systems or networks to communicate, especially when they use different protocols or data formats; it can work across many or all OSI layers and makes the information understandable to the other system.", ms: "Gerbang ialah peranti atau perisian yang membolehkan dua sistem atau rangkaian berbeza berkomunikasi, terutamanya apabila mereka menggunakan protokol atau format data yang berlainan; ia boleh beroperasi merentas banyak atau semua lapisan OSI dan menjadikan maklumat itu difahami oleh sistem yang lain." },
        { zh: "网关的缺点是转换越多、处理越多，速度可能越慢，结构越复杂成本也越高；网关功能也可以由安装了专用软件的计算机或服务器来承担。", en: "The drawbacks of a gateway are that more conversion means more processing and potentially slower operation, and greater complexity means higher cost; a computer or server with special software can also perform gateway functions.", ms: "Kelemahan gerbang ialah semakin banyak penukaran, semakin banyak pemprosesan dan mungkin semakin perlahan, serta kerumitan yang lebih tinggi bermakna kos lebih besar; komputer atau pelayan dengan perisian khas juga boleh menjalankan fungsi gerbang." }
      ],
      terms: [
        {
          en: "Repeater",
          zh: "中继器",
          ms: "Pengulang",
          def: { zh: "物理层设备，接收变弱的信号并再生后转发，以延长网络距离。", en: "A physical layer device that receives a weakened signal, regenerates it and forwards it to extend network distance.", ms: "Peranti lapisan fizikal yang menerima isyarat lemah, menjana semulanya dan menghantarnya untuk memanjangkan jarak rangkaian." }
        },
        {
          en: "Hub",
          zh: "集线器",
          ms: "Hab",
          def: { zh: "把同一局域网中多台设备连接起来并把信号重复到所有端口的物理层设备。", en: "A physical layer device that connects several devices in the same LAN and repeats the signal to all ports.", ms: "Peranti lapisan fizikal yang menyambungkan beberapa peranti dalam LAN yang sama dan mengulang isyarat ke semua port." }
        },
        {
          en: "Active Hub",
          zh: "有源集线器",
          ms: "Hab Aktif",
          def: { zh: "本质上是多端口中继器，会接收、再生并向其他端口重复信号。", en: "Basically a multiport repeater that receives, regenerates and repeats the signal to other ports.", ms: "Pada dasarnya pengulang berbilang port yang menerima, menjana semula dan mengulang isyarat ke port lain." }
        },
        {
          en: "Passive Hub",
          zh: "无源集线器",
          ms: "Hab Pasif",
          def: { zh: "只连接电缆和设备，不对信号进行再生。", en: "Connects cables and devices only and does not regenerate the signal.", ms: "Hanya menyambung kabel dan peranti tanpa menjana semula isyarat." }
        },
        {
          en: "Bridge",
          zh: "网桥",
          ms: "Jambatan",
          def: { zh: "数据链路层设备，用于扩展或分割网络，可按 MAC 地址过滤流量并连接不同介质。", en: "A data link layer device used to extend or segment networks, filtering traffic by MAC address and joining dissimilar media.", ms: "Peranti lapisan pautan data untuk memperluas atau membahagikan rangkaian, menapis trafik mengikut alamat MAC dan menyambung media berbeza." }
        },
        {
          en: "Switch",
          zh: "交换机",
          ms: "Suis",
          def: { zh: "第二层设备，可视为多端口网桥，学习源 MAC 地址并按目的 MAC 地址只转发到正确端口。", en: "A layer 2 device, effectively a multiport bridge, that learns source MAC addresses and forwards only to the correct port using the destination MAC address.", ms: "Peranti lapisan 2, pada dasarnya jambatan berbilang port, yang belajar alamat MAC sumber dan menghantar hanya ke port betul berdasarkan alamat MAC destinasi." }
        },
        {
          en: "MAC Address Table",
          zh: "MAC 地址表",
          ms: "Jadual Alamat MAC",
          def: { zh: "交换机保存学习结果的表，记录哪个 MAC 地址可以从哪个端口到达。", en: "The table in a switch that records which MAC address is reachable through which port.", ms: "Jadual dalam suis yang merekod alamat MAC mana boleh dicapai melalui port mana." }
        },
        {
          en: "Router",
          zh: "路由器",
          ms: "Penghala",
          def: { zh: "网络层设备，连接不同网络并按 IP 地址转发分组，可在多条路径间选择。", en: "A network layer device that connects different networks, forwards packets by IP address and chooses among multiple paths.", ms: "Peranti lapisan rangkaian yang menyambung rangkaian berbeza, menghantar paket mengikut alamat IP dan memilih antara beberapa laluan." }
        },
        {
          en: "Gateway",
          zh: "网关",
          ms: "Gerbang",
          def: { zh: "在不同协议或数据格式的系统之间做转换的设备或软件，可跨多个 OSI 层工作。", en: "A device or software that translates between systems with different protocols or data formats, possibly across many OSI layers.", ms: "Peranti atau perisian yang menterjemah antara sistem dengan protokol atau format data berbeza, mungkin merentas banyak lapisan OSI." }
        },
        {
          en: "Broadcast Domain",
          zh: "广播域",
          ms: "Domain Siaran",
          def: { zh: "网络中能收到同一广播的全部设备的集合，路由器默认将其分隔。", en: "The set of all devices on a segment that hear all broadcasts sent on that segment, broken up by routers by default.", ms: "Set semua peranti pada satu segmen yang mendengar semua siaran, dipisahkan oleh penghala secara lalai." }
        },
        {
          en: "Broadcast Storm",
          zh: "广播风暴",
          ms: "Ribut Siaran",
          def: { zh: "广播帧在网络中不断循环转发造成拥塞的现象，路由器默认不转发广播可加以防止。", en: "Congestion caused by broadcast frames circulating endlessly, which routers help prevent by not forwarding broadcasts by default.", ms: "Kesesakan akibat bingkai siaran berulang tanpa henti, yang dapat dicegah oleh penghala kerana ia tidak menghantar siaran secara lalai." }
        },
        {
          en: "Segment",
          zh: "网段",
          ms: "Segmen",
          def: { zh: "网络中由网桥或交换机分隔出来的一段，网桥与交换机可把大网络分成多个较小的段。", en: "A part of a network separated by bridges or switches, which can divide a large network into smaller segments.", ms: "Bahagian rangkaian yang dipisahkan oleh jambatan atau suis, yang boleh membahagikan rangkaian besar kepada segmen lebih kecil." }
        },
        {
          en: "Internetwork",
          zh: "互联网络",
          ms: "Rangkaian Antara Rangkaian",
          def: { zh: "由路由器连接起来的多个网络的集合，各网络独立运行但能共享信息。", en: "A collection of networks joined by routers that function independently but share information.", ms: "Kumpulan rangkaian yang disambung oleh penghala, berfungsi secara bebas tetapi berkongsi maklumat." }
        },
        {
          en: "Fault Tolerance",
          zh: "容错",
          ms: "Toleransi Kesalahan",
          def: { zh: "网络在部分链路失效时仍能继续工作的能力，路由器可通过备用路径实现。", en: "The ability of a network to keep working when a link fails, achieved by routers choosing an alternative path.", ms: "Keupayaan rangkaian terus berfungsi apabila satu pautan gagal, dicapai oleh penghala melalui laluan alternatif." }
        },
        {
          en: "SNMP",
          zh: "简单网络管理协议",
          ms: "SNMP (Protokol Pengurusan Rangkaian Ringkas)",
          def: { zh: "用于监控和管理网络设备的应用层协议，网桥等设备也可以支持它。", en: "An application layer protocol used to monitor and manage network devices, which bridges and similar devices may also support.", ms: "Protokol lapisan aplikasi untuk memantau dan mengurus peranti rangkaian, yang turut disokong oleh jambatan dan peranti seumpamanya." }
        }
      ],
      diagrams: [
        {
          type: "layers",
          title: { zh: "网络设备工作的 OSI 层次", en: "OSI Layers Where Network Devices Work", ms: "Lapisan OSI Tempat Peranti Rangkaian Beroperasi" },
          layers: [
            {
              label: { zh: "应用层及以上：网关", en: "Application layer and above: Gateway", ms: "Lapisan aplikasi dan ke atas: Gerbang" },
              note: { zh: "在不同协议或数据格式之间做复杂转换，可跨多个层", en: "Performs complex conversion between different protocols or formats, across many layers", ms: "Melakukan penukaran kompleks antara protokol atau format berbeza, merentas banyak lapisan" }
            },
            {
              label: { zh: "网络层：路由器", en: "Network layer: Router", ms: "Lapisan rangkaian: Penghala" },
              note: { zh: "按 IP 地址转发分组，连接不同网络并隔离广播域", en: "Forwards packets by IP address, connects networks and separates broadcast domains", ms: "Menghantar paket mengikut alamat IP, menyambung rangkaian dan memisahkan domain siaran" }
            },
            {
              label: { zh: "数据链路层：网桥与交换机", en: "Data link layer: Bridge and Switch", ms: "Lapisan pautan data: Jambatan dan Suis" },
              note: { zh: "按 MAC 地址过滤与转发帧，交换机即多端口网桥", en: "Filters and forwards frames by MAC address; a switch is a multiport bridge", ms: "Menapis dan menghantar bingkai mengikut alamat MAC; suis ialah jambatan berbilang port" }
            },
            {
              label: { zh: "物理层：中继器与集线器", en: "Physical layer: Repeater and Hub", ms: "Lapisan fizikal: Pengulang dan Hab" },
              note: { zh: "只再生或重复信号，不识别任何地址", en: "Only regenerate or repeat signals, no address awareness", ms: "Hanya menjana semula atau mengulang isyarat, tanpa mengenal alamat" }
            }
          ]
        },
        {
          type: "compare",
          title: { zh: "集线器、交换机与路由器的区别", en: "Hub, Switch and Router Compared", ms: "Perbandingan Hab, Suis dan Penghala" },
          cols: [
            {
              head: { zh: "集线器 Hub", en: "Hub", ms: "Hab" },
              items: [
                {
                  label: { zh: "工作层：物理层（第 1 层）", en: "Layer: physical (layer 1)", ms: "Lapisan: fizikal (lapisan 1)" }
                },
                {
                  label: { zh: "转发依据：无，收到即复制到所有端口", en: "Forwarding basis: none, copies to every port", ms: "Asas penghantaran: tiada, salin ke semua port" }
                },
                {
                  label: { zh: "所有端口同属一个冲突域，容易冲突", en: "All ports share one collision domain", ms: "Semua port berkongsi satu domain perlanggaran" }
                }
              ]
            },
            {
              head: { zh: "交换机 Switch", en: "Switch", ms: "Suis" },
              items: [
                {
                  label: { zh: "工作层：数据链路层（第 2 层）", en: "Layer: data link (layer 2)", ms: "Lapisan: pautan data (lapisan 2)" }
                },
                {
                  label: { zh: "转发依据：目的 MAC 地址与 MAC 地址表", en: "Forwarding basis: destination MAC and address table", ms: "Asas penghantaran: alamat MAC destinasi dan jadual alamat" }
                },
                {
                  label: { zh: "每个端口独立冲突域，但仍属同一广播域", en: "Each port is its own collision domain but one broadcast domain", ms: "Setiap port domain perlanggaran sendiri tetapi domain siaran sama" }
                }
              ]
            },
            {
              head: { zh: "路由器 Router", en: "Router", ms: "Penghala" },
              items: [
                {
                  label: { zh: "工作层：网络层（第 3 层）", en: "Layer: network (layer 3)", ms: "Lapisan: rangkaian (lapisan 3)" }
                },
                {
                  label: { zh: "转发依据：IP 地址与路由表", en: "Forwarding basis: IP address and routing table", ms: "Asas penghantaran: alamat IP dan jadual penghalaan" }
                },
                {
                  label: { zh: "默认不转发广播，可防止广播风暴", en: "Does not forward broadcasts by default, prevents broadcast storms", ms: "Tidak menghantar siaran secara lalai, mencegah ribut siaran" }
                }
              ]
            }
          ]
        }
      ],
      exam: [
        { zh: "设备与 OSI 层次的配对是必考题：中继器和集线器属于物理层，网桥和交换机属于数据链路层，路由器属于网络层，网关可跨多个甚至全部层。", en: "Matching devices to OSI layers is essential: repeaters and hubs are physical layer, bridges and switches are data link layer, routers are network layer, and gateways can span many or all layers.", ms: "Memadankan peranti dengan lapisan OSI ialah soalan wajib: pengulang dan hab ialah lapisan fizikal, jambatan dan suis lapisan pautan data, penghala lapisan rangkaian, dan gerbang boleh merentas banyak atau semua lapisan." },
        { zh: "集线器与交换机的比较是经典题：集线器把信号广播到所有端口且不检查 MAC 地址，交换机学习源 MAC 地址并按目的 MAC 地址只转发到需要的端口。", en: "Hub versus switch is a classic question: a hub broadcasts to all ports and does not examine MAC addresses, while a switch learns source MAC addresses and forwards only to the port needed for the destination MAC address.", ms: "Perbandingan hab dengan suis ialah soalan klasik: hab menyiarkan ke semua port dan tidak memeriksa alamat MAC, manakala suis belajar alamat MAC sumber dan menghantar hanya ke port yang diperlukan oleh alamat MAC destinasi." },
        { zh: "路由器的特点常考：按 IP 地址转发分组、可通过多路径选择提供容错、默认隔离广播域从而防止广播风暴，并且它可以连接多个网段并过滤流量。", en: "Router characteristics are frequently examined: it forwards packets by IP address, provides fault tolerance by choosing among multiple paths, breaks up the broadcast domain by default to prevent broadcast storms, and can connect multiple segments and filter traffic.", ms: "Ciri penghala sering diuji: ia menghantar paket mengikut alamat IP, menyediakan toleransi kesalahan melalui pemilihan beberapa laluan, memisahkan domain siaran secara lalai untuk mencegah ribut siaran, dan boleh menyambung beberapa segmen serta menapis trafik." },
        { zh: "易错点：把交换机说成多端口集线器，正确说法是多端口网桥；忘记网关要转换协议因而速度较慢、成本较高。", en: "Common mistakes: calling a switch a multiport hub when the correct description is a multiport bridge, and forgetting that a gateway is slower and more expensive because it must convert protocols.", ms: "Kesilapan biasa: menyebut suis sebagai hab berbilang port sedangkan gambaran yang betul ialah jambatan berbilang port, dan terlupa gerbang lebih perlahan serta mahal kerana perlu menukar protokol." }
      ],
      mnemonic: { zh: "中继器看电平，网桥和交换机看 MAC，路由器看 IP，网关看协议。", en: "Repeater looks at levels, bridge and switch look at MAC, router looks at IP, gateway looks at protocols.", ms: "Pengulang melihat aras, jambatan dan suis melihat MAC, penghala melihat IP, gerbang melihat protokol." }
    },
    {
      id: "dcn-08",
      num: 8,
      title: { zh: "数据链路层", en: "Data Link Layer", ms: "Lapisan Pautan Data" },
      file: "dcn/CHAPTER 8 2627 1.pdf",
      pages: 40,
      summary: { zh: "数据链路层是 OSI 的第二层，负责相邻节点在单条链路上的通信，也就是节点到节点的帧传送。本章先说明帧的结构——头部、数据或载荷与尾部，然后解释数据链路层的五项职责：成帧、物理寻址、流量控制、差错控制和访问控制。接着按复杂度介绍无噪声信道上的最简单协议、停等协议、停等 ARQ、滑动窗口以及 Go-Back-N 和选择重传两种 ARQ，并给出 HDLC 与 PPP 两个实际协议的例子。最后讲解 48 位 MAC 地址的格式、单播/组播/广播三种类型以及交换机如何学习 MAC 地址。", en: "The Data Link Layer is Layer 2 of the OSI model and is responsible for communication between adjacent nodes over a single link, that is node-to-node delivery of frames. The chapter first explains the frame structure with header, data or payload and trailer, then the five duties of the layer: framing, physical addressing, flow control, error control and access control. It then introduces protocols in increasing complexity: the simplest protocol on a noiseless channel, Stop-and-Wait, Stop-and-Wait ARQ, sliding window with Go-Back-N and Selective Repeat ARQ, followed by HDLC and PPP as real examples. It ends with the 48-bit MAC address format, the unicast, multicast and broadcast types, and how a switch learns MAC addresses.", ms: "Lapisan Pautan Data ialah Lapisan 2 model OSI dan bertanggungjawab atas komunikasi antara nod bersebelahan pada satu pautan, iaitu penghantaran bingkai nod ke nod. Bab ini menerangkan struktur bingkai yang terdiri daripada pengepala, data atau muatan dan pengaki, kemudian lima tugas lapisan ini: pembingkaian, pengalamatan fizikal, kawalan aliran, kawalan ralat dan kawalan capaian. Seterusnya diperkenalkan protokol mengikut kerumitan: protokol paling mudah pada saluran tanpa hingar, Berhenti-dan-Tunggu, Berhenti-dan-Tunggu ARQ, tetingkap gelongsor dengan Go-Back-N dan Ulangan Terpilih ARQ, diikuti HDLC dan PPP sebagai contoh sebenar. Bab ini diakhiri dengan format alamat MAC 48 bit, jenis unicast, multicast dan broadcast, serta cara suis mempelajari alamat MAC." },
      points: [
        { zh: "数据链路层是 OSI 的第二层，主要关注相邻节点之间在单条链路上的通信，即节点到节点地传送帧，相邻设备通过电话线、同轴电缆、光纤或卫星等信道物理相连。", en: "The Data Link Layer is Layer 2 of the OSI model and focuses on communication over a single link between adjacent nodes, that is node-to-node delivery of frames; adjacent devices are physically connected through channels such as telephone lines, coaxial cables, optical fibers or satellites.", ms: "Lapisan Pautan Data ialah Lapisan 2 model OSI dan menumpukan komunikasi pada satu pautan antara nod bersebelahan, iaitu penghantaran bingkai nod ke nod; peranti bersebelahan disambung secara fizikal melalui saluran seperti talian telefon, kabel sepaksi, gentian optik atau satelit." },
        { zh: "帧是数据链路层的数据单元：数据链路层收到网络层的分组后在其前后加上控制信息，形成头部、数据（载荷）和尾部；头部放寻址与控制信息，载荷是实际的网络层分组，尾部用于差错检测如 FCS 或 CRC。", en: "A frame is the unit of data used by the Data Link Layer: it receives a network layer packet and adds control information around it, forming a header, the data or payload and a trailer; the header holds addressing and control information, the payload is the actual network layer packet, and the trailer carries error detection such as FCS or CRC.", ms: "Bingkai ialah unit data bagi Lapisan Pautan Data: ia menerima paket lapisan rangkaian dan menambah maklumat kawalan di sekelilingnya sehingga terbentuk pengepala, data atau muatan dan pengaki; pengepala menyimpan maklumat pengalamatan dan kawalan, muatan ialah paket lapisan rangkaian sebenar, dan pengaki membawa pengesanan ralat seperti FCS atau CRC." },
        { zh: "数据链路层的五项职责是成帧、物理寻址、流量控制、差错控制和访问控制，它们分别回答帧的起止、由哪台设备接收、发送方过快怎么办、帧损坏或丢失怎么办以及多台设备争用介质怎么办。", en: "The five duties of the Data Link Layer are framing, physical addressing, flow control, error control and access control, answering how the receiver knows where a frame starts and ends, which device should receive it, what happens if the sender is faster than the receiver, what happens if a frame is damaged or lost, and what happens when many devices share the medium.", ms: "Lima tugas Lapisan Pautan Data ialah pembingkaian, pengalamatan fizikal, kawalan aliran, kawalan ralat dan kawalan capaian, yang menjawab persoalan permulaan dan penghujung bingkai, peranti mana yang perlu menerimanya, apa berlaku jika penghantar terlalu pantas, apa berlaku jika bingkai rosak atau hilang, dan apa berlaku apabila banyak peranti berkongsi medium." },
        { zh: "成帧是把连续的数据流划分成可管理的帧，并标记每一帧的开始与结束，使接收方能识别独立的数据块；常见的成帧方法有字符计数、字节填充和比特填充。 物理寻址由数据链路层加上链路层地址，使帧能送到本地链路上正确的接口；通信用 MAC 地址完成本地链路交付，一个典型 MAC 地址有 48 位并与网络接口卡关联。", en: "Framing is the process of dividing a continuous stream of data into manageable units called frames and marking the beginning and end of each frame so the receiver can recognise separate blocks of data; common ideas are character count, byte stuffing and bit stuffing. Physical addressing means the Data Link Layer adds a physical or link-layer address so that a frame can be delivered to the correct interface on the local link; MAC addresses are used for local link delivery and a typical MAC address is 48 bits long and is associated with a network interface.", ms: "Pembingkaian ialah proses membahagikan aliran data berterusan kepada unit boleh urus yang dipanggil bingkai dan menandakan permulaan serta penghujung setiap bingkai supaya penerima dapat mengenal pasti blok data yang berasingan; kaedah biasa ialah kiraan aksara, isian bait dan isian bit. Pengalamatan fizikal bermakna Lapisan Pautan Data menambah alamat fizikal atau alamat lapisan pautan supaya bingkai dapat dihantar ke antara muka yang betul pada pautan tempatan; alamat MAC digunakan untuk penghantaran pautan tempatan dan alamat MAC biasa panjangnya 48 bit serta berkait dengan antara muka rangkaian." },
        { zh: "流量控制防止发送方过快而淹没需要更多时间处理帧的接收方：停等协议每发一帧就等待确认再发下一帧，滑动窗口则允许在收到确认前连续发送多帧。 差错控制保证可靠传输：先用 CRC 或校验和检测损坏，再用确认与 ARQ 重传恢复，并用定时器判断何时需要重发，它要处理帧正确、帧损坏、帧丢失和 ACK 丢失四种情况。", en: "Flow control prevents a fast sender from overwhelming a receiver that needs more time to process frames: Stop-and-Wait sends one frame and waits for acknowledgement before the next, while Sliding Window allows several frames to be sent before acknowledgements are received. Error control ensures reliable transmission by detecting corruption with CRC or checksum, recovering through acknowledgement and ARQ retransmission, and using a timer to decide when a frame may need to be resent; it deals with the correct frame, the damaged frame, the lost frame and the lost acknowledgement.", ms: "Kawalan aliran menghalang penghantar yang pantas daripada membanjiri penerima yang memerlukan lebih masa memproses bingkai: Berhenti-dan-Tunggu menghantar satu bingkai dan menunggu pengakuan sebelum yang seterusnya, manakala Tetingkap Gelongsor membenarkan beberapa bingkai dihantar sebelum pengakuan diterima. Kawalan ralat memastikan penghantaran boleh dipercayai dengan mengesan kerosakan melalui CRC atau jumlah semak, memulihkannya melalui pengakuan dan penghantaran semula ARQ, serta menggunakan pemasa untuk menentukan bila bingkai perlu dihantar semula; ia mengendalikan bingkai betul, bingkai rosak, bingkai hilang dan pengakuan hilang." },
        { zh: "访问控制决定共享介质上哪台设备可以发送以及何时发送：轮询由中央控制器逐一询问设备是否要发送，令牌传递用令牌授予发送权，CSMA/CD 则要求以太网站点先听后发、检测冲突并在冲突后退避重传。", en: "Access control decides which device is allowed to transmit and when on a shared medium: polling has a central controller ask devices one by one, token passing gives permission through a special token, and CSMA/CD requires Ethernet stations to listen before transmitting, detect collisions and back off before retransmitting.", ms: "Kawalan capaian menentukan peranti mana yang boleh menghantar dan bila pada medium yang dikongsi: pengundian membenarkan pengawal pusat bertanya satu demi satu, penghantaran token memberi kebenaran melalui token khas, dan CSMA/CD memerlukan stesen Ethernet mendengar sebelum menghantar, mengesan perlanggaran dan berundur sebelum menghantar semula." },
        { zh: "按复杂度递进的协议是：最简单协议假设无噪声信道、既不流控也不检错；停等协议解决流量控制；停等 ARQ 用序号 0 和 1、帧副本、定时器和超时重传实现差错恢复；滑动窗口允许发送方连续发送窗口内的多帧并在确认到达后向前滑动窗口。", en: "The protocols increase in complexity: the simplest protocol assumes a noiseless channel with no flow or error control, Stop-and-Wait solves flow control, Stop-and-Wait ARQ adds sequence numbers 0 and 1, a frame copy, a timer and timeout retransmission for error recovery, and Sliding Window lets the sender transmit several frames inside the window and slide the window forward as acknowledgements arrive.", ms: "Protokol bertambah kerumitan: protokol paling mudah menganggap saluran tanpa hingar tanpa kawalan aliran atau ralat, Berhenti-dan-Tunggu menyelesaikan kawalan aliran, Berhenti-dan-Tunggu ARQ menambah nombor jujukan 0 dan 1, salinan bingkai, pemasa dan penghantaran semula selepas tamat masa, manakala Tetingkap Gelongsor membolehkan penghantar menghantar beberapa bingkai dalam tetingkap dan menggeser tetingkap ke hadapan apabila pengakuan tiba." },
        { zh: "Go-Back-N 在帧丢失或损坏时重传该帧及其后所有未确认的帧，接收方简单但会重传本来正确的帧；选择重传只重传丢失或损坏的那一帧，带宽效率更高但需要更多接收缓存和更复杂的跟踪。", en: "Go-Back-N retransmits the missing or corrupted frame together with all the following outstanding frames, which keeps the receiver simple but resends frames that were already correct; Selective Repeat retransmits only the specific frame that was lost or damaged, giving better bandwidth efficiency at the cost of more receiver memory and more complex tracking.", ms: "Go-Back-N menghantar semula bingkai yang hilang atau rosak bersama semua bingkai tertunggak selepasnya, menjadikan penerima mudah tetapi menghantar semula bingkai yang sebenarnya betul; Ulangan Terpilih menghantar semula hanya bingkai yang hilang atau rosak, memberi kecekapan jalur lebar lebih baik tetapi memerlukan memori penerima lebih banyak dan penjejakan lebih kompleks." },
        { zh: "HDLC 是面向比特的数据链路层协议，用 01111110 作为标志字段界定帧的边界，帧内还有地址、控制、信息和 FCS 字段，分信息帧、监控帧和无编号帧；PPP 用于点对点链路，提供成帧、协议标识、链路建立与配置以及差错检测。 为了保护帧内容的透明性，HDLC 使用比特填充（数据中出现五个连续 1 就自动插入一个 0，接收方再删除），PPP 则使用字节填充，避免数据字节被误认为标志或控制字节。", en: "HDLC is a bit-oriented Data Link Layer protocol that uses the flag pattern 01111110 to mark frame boundaries, with address, control, information and FCS fields, and with information, supervisory and unnumbered frame types; PPP is used over point-to-point links and provides framing, protocol identification, link setup and configuration, and error detection. To protect transparency of the frame contents, HDLC uses bit stuffing, inserting a 0 whenever five consecutive 1s appear in the data and removing it at the receiver, while PPP uses byte stuffing so that data bytes are not mistaken for flag or control bytes.", ms: "HDLC ialah protokol Lapisan Pautan Data berorientasikan bit yang menggunakan corak bendera 01111110 untuk menandakan sempadan bingkai, dengan medan alamat, kawalan, maklumat dan FCS, serta jenis bingkai maklumat, penyeliaan dan tanpa nombor; PPP digunakan pada pautan titik ke titik dan menyediakan pembingkaian, pengenalan protokol, persediaan serta konfigurasi pautan, dan pengesanan ralat. Untuk melindungi ketelusan kandungan bingkai, HDLC menggunakan isian bit iaitu menyisipkan 0 apabila lima 1 berturutan muncul dalam data dan penerima membuangnya, manakala PPP menggunakan isian bait supaya bait data tidak disalah anggap sebagai bait bendera atau kawalan." },
        { zh: "MAC 地址是分配给网卡的唯一硬件标识，共 48 位或 12 个十六进制字符，前 3 个字节是厂商编号 OUI、后 3 个字节是设备唯一编号；帧的目的地址可以是单播、组播或广播（FF:FF:FF:FF:FF:FF），交换机会从源 MAC 地址学习各端口可达的设备，再按目的 MAC 地址查表转发，而 MAC 欺骗则通过伪造 MAC 地址绕过控制，可用 MAC 过滤、WPA2/WPA3 认证和监控工具防范。", en: "A MAC address is a unique hardware identifier assigned to a network interface card, 48 bits or 12 hexadecimal characters long, with the first three bytes as the manufacturer OUI and the last three as the unique device ID; a frame destination may be unicast, multicast or broadcast, written FF:FF:FF:FF:FF:FF for broadcast, a switch learns which MAC addresses are reachable through its ports from source addresses and forwards using the destination address, while MAC spoofing imitates another address and can be countered with MAC filtering, WPA2 or WPA3 authentication and monitoring tools.", ms: "Alamat MAC ialah pengenal perkakasan unik yang diberikan kepada kad antara muka rangkaian, panjangnya 48 bit atau 12 aksara perenambelasan, dengan tiga bait pertama sebagai OUI pengeluar dan tiga bait terakhir sebagai ID unik peranti; destinasi bingkai boleh berbentuk unicast, multicast atau broadcast yang ditulis FF:FF:FF:FF:FF:FF, suis mempelajari alamat MAC mana yang boleh dicapai melalui portnya daripada alamat sumber dan menghantar menggunakan alamat destinasi, manakala peniruan MAC meniru alamat lain dan boleh ditangani dengan penapisan MAC, pengesahan WPA2 atau WPA3 serta alat pemantauan." }
      ],
      terms: [
        {
          en: "Frame",
          zh: "帧",
          ms: "Bingkai",
          def: { zh: "数据链路层的数据单元，由头部、载荷与尾部组成，包含控制与差错检测信息。", en: "The Data Link Layer unit of data, made of header, payload and trailer, containing control and error-checking information.", ms: "Unit data Lapisan Pautan Data yang terdiri daripada pengepala, muatan dan pengaki, mengandungi maklumat kawalan dan semakan ralat." }
        },
        {
          en: "Framing",
          zh: "成帧",
          ms: "Pembingkaian",
          def: { zh: "把连续的数据流分成帧并标记每帧开始与结束的过程。", en: "The process of dividing a continuous data stream into frames and marking the start and end of each frame.", ms: "Proses membahagikan aliran data berterusan kepada bingkai dan menandakan permulaan serta penghujung setiap bingkai." }
        },
        {
          en: "Physical Addressing",
          zh: "物理寻址",
          ms: "Pengalamatan Fizikal",
          def: { zh: "用链路层地址把帧送到本地链路上正确的接口，通常使用 MAC 地址。", en: "Using a link-layer address, usually a MAC address, to deliver a frame to the correct interface on the local link.", ms: "Menggunakan alamat lapisan pautan, biasanya alamat MAC, untuk menghantar bingkai ke antara muka yang betul pada pautan tempatan." }
        },
        {
          en: "Flow Control",
          zh: "流量控制",
          ms: "Kawalan Aliran",
          def: { zh: "防止发送方发送过快而淹没处理较慢的接收方。", en: "Preventing a fast sender from overwhelming a receiver that processes frames more slowly.", ms: "Menghalang penghantar yang pantas daripada membanjiri penerima yang memproses bingkai dengan lebih perlahan." }
        },
        {
          en: "Error Control",
          zh: "差错控制",
          ms: "Kawalan Ralat",
          def: { zh: "检测损坏的帧并通过重传等机制从错误中恢复，保证可靠传输。", en: "Detecting damaged frames and recovering from errors through mechanisms such as retransmission to ensure reliable transmission.", ms: "Mengesan bingkai rosak dan memulihkan daripada ralat melalui mekanisme seperti penghantaran semula untuk memastikan penghantaran boleh dipercayai." }
        },
        {
          en: "Access Control",
          zh: "访问控制",
          ms: "Kawalan Capaian",
          def: { zh: "决定共享介质上哪台设备可以发送以及何时发送。", en: "Deciding which device may transmit on a shared medium and when.", ms: "Menentukan peranti mana yang boleh menghantar pada medium dikongsi dan bila." }
        },
        {
          en: "Stop-and-Wait",
          zh: "停等协议",
          ms: "Berhenti-dan-Tunggu",
          def: { zh: "发送一帧后等待确认再发送下一帧的流量控制方法，同一时刻只有一帧在途。", en: "A flow control method that sends one frame and waits for acknowledgement before sending the next, so only one frame is outstanding.", ms: "Kaedah kawalan aliran yang menghantar satu bingkai dan menunggu pengakuan sebelum yang seterusnya, jadi hanya satu bingkai tertunggak." }
        },
        {
          en: "Sliding Window",
          zh: "滑动窗口",
          ms: "Tetingkap Gelongsor",
          def: { zh: "允许在收到确认前连续发送窗口内多帧的机制，确认到达后窗口向前滑动。", en: "A mechanism that allows several frames inside the window to be sent before acknowledgements arrive, after which the window slides forward.", ms: "Mekanisme yang membenarkan beberapa bingkai dalam tetingkap dihantar sebelum pengakuan tiba, dan tetingkap kemudian bergelongsor ke hadapan." }
        },
        {
          en: "ARQ (Automatic Repeat reQuest)",
          zh: "自动重传请求",
          ms: "ARQ (Permintaan Ulang Automatik)",
          def: { zh: "利用确认、定时器和重传从帧丢失或损坏中恢复的差错控制机制。", en: "An error control mechanism that uses acknowledgements, timers and retransmission to recover from lost or damaged frames.", ms: "Mekanisme kawalan ralat yang menggunakan pengakuan, pemasa dan penghantaran semula untuk pulih daripada bingkai hilang atau rosak." }
        },
        {
          en: "Go-Back-N ARQ",
          zh: "回退 N 帧 ARQ",
          ms: "ARQ Go-Back-N",
          def: { zh: "出错时重传该帧及其后所有未确认帧的滑动窗口协议，接收方简单但可能重传正确的帧。", en: "A sliding window protocol that retransmits the faulty frame and all following outstanding frames; the receiver is simple but correct frames may be resent.", ms: "Protokol tetingkap gelongsor yang menghantar semula bingkai rosak dan semua bingkai tertunggak selepasnya; penerima mudah tetapi bingkai betul mungkin dihantar semula." }
        },
        {
          en: "Selective Repeat ARQ",
          zh: "选择重传 ARQ",
          ms: "ARQ Ulangan Terpilih",
          def: { zh: "只重传丢失或损坏的那一帧的滑动窗口协议，带宽效率高但需要更多缓存。", en: "A sliding window protocol that retransmits only the frame that was lost or damaged, giving better bandwidth efficiency at the cost of more buffering.", ms: "Protokol tetingkap gelongsor yang menghantar semula hanya bingkai yang hilang atau rosak, memberi kecekapan jalur lebar lebih baik dengan kos memori lebih besar." }
        },
        {
          en: "HDLC (High-Level Data Link Control)",
          zh: "高级数据链路控制",
          ms: "HDLC (Kawalan Pautan Data Peringkat Tinggi)",
          def: { zh: "面向比特的数据链路层协议，用 01111110 标志界定帧边界，含地址、控制、信息和 FCS 字段。", en: "A bit-oriented Data Link Layer protocol that uses the 01111110 flag to mark frame boundaries and has address, control, information and FCS fields.", ms: "Protokol Lapisan Pautan Data berorientasikan bit yang menggunakan bendera 01111110 untuk menandakan sempadan bingkai dan mempunyai medan alamat, kawalan, maklumat dan FCS." }
        },
        {
          en: "PPP (Point-to-Point Protocol)",
          zh: "点对点协议",
          ms: "PPP (Protokol Titik ke Titik)",
          def: { zh: "用于点对点链路的数据链路层协议，提供成帧、协议标识、链路配置和差错检测。", en: "A Data Link Layer protocol for point-to-point links that provides framing, protocol identification, link configuration and error detection.", ms: "Protokol Lapisan Pautan Data untuk pautan titik ke titik yang menyediakan pembingkaian, pengenalan protokol, konfigurasi pautan dan pengesanan ralat." }
        },
        {
          en: "Bit Stuffing",
          zh: "比特填充",
          ms: "Isian Bit",
          def: { zh: "HDLC 中每当数据出现五个连续 1 就插入一个 0，接收方再删除，以免数据被误认为标志。", en: "In HDLC, inserting a 0 whenever five consecutive 1s appear in the data and removing it at the receiver so data is not mistaken for a flag.", ms: "Dalam HDLC, menyisipkan 0 apabila lima 1 berturutan muncul dalam data dan membuangnya di penerima supaya data tidak disalah anggap sebagai bendera." }
        },
        {
          en: "MAC Address",
          zh: "MAC 地址",
          ms: "Alamat MAC",
          def: { zh: "分配给网卡的 48 位唯一硬件标识，用于局域网内的链路层交付。", en: "A unique 48-bit hardware identifier assigned to a network interface card, used for link-layer delivery inside a LAN.", ms: "Pengenal perkakasan unik 48 bit yang diberikan kepada kad antara muka rangkaian, digunakan untuk penghantaran lapisan pautan dalam LAN." }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: { zh: "数据链路层的帧结构", en: "Frame Structure of the Data Link Layer", ms: "Struktur Bingkai Lapisan Pautan Data" },
          steps: [
            {
              label: { zh: "头部 HEADER", en: "HEADER", ms: "PENGEPALA" },
              note: { zh: "放在载荷之前，承载寻址与控制信息", en: "Placed before the payload, carries addressing and control information", ms: "Diletakkan sebelum muatan, membawa maklumat pengalamatan dan kawalan" }
            },
            {
              label: { zh: "数据 / 载荷", en: "DATA / PAYLOAD", ms: "DATA / MUATAN" },
              note: { zh: "实际的网络层分组，是真正要传送的信息", en: "The actual Network Layer packet that is being carried", ms: "Paket lapisan rangkaian sebenar yang dibawa" }
            },
            {
              label: { zh: "尾部 TRAILER", en: "TRAILER", ms: "PENGAKI" },
              note: { zh: "差错检测，例如 FCS / CRC", en: "Error detection such as FCS / CRC", ms: "Pengesanan ralat seperti FCS / CRC" }
            }
          ],
          caption: { zh: "数据链路层收到网络层分组后在其前后加上控制信息", en: "The Data Link Layer receives a Network Layer packet and adds control information around it", ms: "Lapisan Pautan Data menerima paket lapisan rangkaian dan menambah maklumat kawalan di sekelilingnya" }
        },
        {
          type: "timeline",
          title: { zh: "滑动窗口示例（窗口大小 = 4）", en: "Sliding Window Example (window size = 4)", ms: "Contoh Tetingkap Gelongsor (saiz tetingkap = 4)" },
          unit: { zh: "时间单元（按帧发送顺序）", en: "Time unit (frame sending order)", ms: "Unit masa (urutan penghantaran bingkai)" },
          max: 9,
          bars: [
            {
              label: { zh: "发送帧 0", en: "Send frame 0", ms: "Hantar bingkai 0" },
              start: 0,
              len: 1,
              color: "a1"
            },
            {
              label: { zh: "发送帧 1", en: "Send frame 1", ms: "Hantar bingkai 1" },
              start: 1,
              len: 1,
              color: "a1"
            },
            {
              label: { zh: "发送帧 2", en: "Send frame 2", ms: "Hantar bingkai 2" },
              start: 2,
              len: 1,
              color: "a1"
            },
            {
              label: { zh: "发送帧 3", en: "Send frame 3", ms: "Hantar bingkai 3" },
              start: 3,
              len: 1,
              color: "a1"
            },
            {
              label: { zh: "收到 ACK 0，窗口可滑动", en: "ACK 0 arrives, window may slide", ms: "ACK 0 tiba, tetingkap boleh bergelongsor" },
              start: 4,
              len: 1,
              color: "a2"
            },
            {
              label: { zh: "发送帧 4", en: "Send frame 4", ms: "Hantar bingkai 4" },
              start: 5,
              len: 1,
              color: "a3"
            },
            {
              label: { zh: "收到 ACK 1", en: "ACK 1 arrives", ms: "ACK 1 tiba" },
              start: 6,
              len: 1,
              color: "a2"
            },
            {
              label: { zh: "发送帧 5", en: "Send frame 5", ms: "Hantar bingkai 5" },
              start: 7,
              len: 1,
              color: "a3"
            }
          ],
          caption: { zh: "确认到达后窗口向前滑动，发送方得以继续发送新的帧", en: "As acknowledgements arrive the window slides forward so the sender can keep sending new frames", ms: "Apabila pengakuan tiba, tetingkap bergelongsor ke hadapan supaya penghantar boleh terus menghantar bingkai baharu" }
        }
      ],
      exam: [
        { zh: "帧结构是必考题：要能指出头部承载寻址与控制信息、载荷是网络层分组、尾部放 FCS 或 CRC 用于差错检测。", en: "The frame structure is essential: the header carries addressing and control information, the payload is the network layer packet and the trailer holds FCS or CRC for error detection.", ms: "Struktur bingkai ialah soalan wajib: pengepala membawa maklumat pengalamatan dan kawalan, muatan ialah paket lapisan rangkaian dan pengaki mengandungi FCS atau CRC untuk pengesanan ralat." },
        { zh: "五个职责要与实际问题对应：帧从哪开始到哪结束对应成帧，由哪台设备接收对应物理寻址，发送方过快对应流量控制，帧损坏或丢失对应差错控制，多台设备争用介质对应访问控制。", en: "The five duties must map to practical problems: where a frame starts and ends is framing, which device receives it is physical addressing, a sender that is too fast is flow control, a damaged or lost frame is error control, and many devices sharing the medium is access control.", ms: "Lima tugas perlu dipadankan dengan masalah sebenar: permulaan dan penghujung bingkai ialah pembingkaian, peranti penerima ialah pengalamatan fizikal, penghantar terlalu pantas ialah kawalan aliran, bingkai rosak atau hilang ialah kawalan ralat, dan banyak peranti berkongsi medium ialah kawalan capaian." },
        { zh: "滑动窗口协议对比是重点：停等一次只有一帧在途；Go-Back-N 出错时重传该帧及其后所有未确认帧，接收方简单但浪费带宽；选择重传只重传出错帧，效率高但需要更多缓存。", en: "Comparing sliding window protocols is a key point: Stop-and-Wait keeps only one frame outstanding, Go-Back-N resends the faulty frame plus all later outstanding frames with a simple receiver but wasted bandwidth, and Selective Repeat resends only the faulty frame with better efficiency but more buffering.", ms: "Perbandingan protokol tetingkap gelongsor ialah perkara penting: Berhenti-dan-Tunggu hanya mempunyai satu bingkai tertunggak, Go-Back-N menghantar semula bingkai rosak bersama semua bingkai tertunggak selepasnya dengan penerima mudah tetapi membazir jalur lebar, dan Ulangan Terpilih hanya menghantar semula bingkai rosak dengan kecekapan lebih baik tetapi memori lebih besar." },
        { zh: "易错点：HDLC 用比特填充而 PPP 用字节填充；MAC 地址是 48 位、12 个十六进制字符，前 3 字节是厂商 OUI，广播地址是 FF:FF:FF:FF:FF:FF；交换机是从源 MAC 地址学习、按目的 MAC 地址转发。", en: "Common mistakes: HDLC uses bit stuffing while PPP uses byte stuffing; a MAC address is 48 bits or 12 hexadecimal characters with the first three bytes as the manufacturer OUI and FF:FF:FF:FF:FF:FF as broadcast; a switch learns from source MAC addresses and forwards by destination MAC address.", ms: "Kesilapan biasa: HDLC menggunakan isian bit manakala PPP menggunakan isian bait; alamat MAC ialah 48 bit atau 12 aksara perenambelasan dengan tiga bait pertama sebagai OUI pengeluar dan FF:FF:FF:FF:FF:FF sebagai siaran; suis belajar daripada alamat MAC sumber dan menghantar mengikut alamat MAC destinasi." }
      ],
      mnemonic: { zh: "五职责：成帧、寻址、流控、差错、访问；GBN 全部重发，选择重传只补一帧。", en: "Five duties: framing, addressing, flow, error, access; Go-Back-N resends all, Selective Repeat resends one.", ms: "Lima tugas: pembingkaian, pengalamatan, aliran, ralat, capaian; Go-Back-N hantar semula semua, Ulangan Terpilih hantar semula satu." }
    },
    {
      id: "dcn-09",
      num: 9,
      title: { zh: "网络层", en: "Network Layer", ms: "Lapisan Rangkaian" },
      file: "dcn/CHAPTER 9 2627 1.pdf",
      pages: 45,
      summary: { zh: "网络层负责把分组从源主机送到目的主机，即使两台主机连接在不同的网络上，它通过逻辑寻址、转发和路由保证数据到达正确的目的地。本章先比较各层的交付职责与标识，说明应用层用名称、传输层用端口号、网络层用 IP 地址、数据链路层用 MAC 地址。接着讨论网络服务模型，即 IP 提供的无连接尽力而为数据报服务，并与需要建立连接的虚电路网络对比。最后讲解逻辑地址与 IPv4/IPv6 地址结构、前缀与子网掩码、子网划分五步法、专用地址与 DHCP/NAT，以及路由与转发的区别。", en: "The Network Layer delivers packets from a source host to a destination host even when the two hosts are connected to different networks, using logical addressing, forwarding and routing to ensure the data reaches the correct destination. The chapter first compares the delivery responsibility and identifier of each layer: names at the application layer, port numbers at the transport layer, IP addresses at the network layer and MAC addresses at the data link layer. It then discusses the network service model, the connectionless best-effort datagram service provided by IP, and contrasts it with a virtual-circuit network that requires connection setup. Finally it covers logical addressing and IPv4 or IPv6 structure, prefixes and subnet masks, the five-step subnetting method, private addresses with DHCP and NAT, and the difference between routing and forwarding.", ms: "Lapisan Rangkaian menghantar paket daripada hos sumber kepada hos destinasi walaupun kedua-dua hos disambung pada rangkaian yang berbeza, menggunakan pengalamatan logik, penghantaran ke hadapan dan penghalaan untuk memastikan data sampai ke destinasi yang betul. Bab ini membandingkan tanggungjawab penghantaran dan pengenal setiap lapisan: nama pada lapisan aplikasi, nombor port pada lapisan pengangkutan, alamat IP pada lapisan rangkaian dan alamat MAC pada lapisan pautan data. Seterusnya dibincangkan model perkhidmatan rangkaian, iaitu perkhidmatan datagram usaha terbaik tanpa sambungan yang disediakan IP, dan perbandingannya dengan rangkaian litar maya yang memerlukan persediaan sambungan. Akhir sekali, bab ini merangkumi pengalamatan logik dan struktur IPv4 atau IPv6, prefiks dan topeng subnet, kaedah lima langkah subnetting, alamat persendirian dengan DHCP dan NAT, serta perbezaan antara penghalaan dan penghantaran ke hadapan." },
      points: [
        { zh: "网络层把分组从源主机送到目的主机，即使两台主机位于不同网络；它的四项功能是逻辑寻址（给源和目的 IP 身份）、转发（把收到的分组送到正确的输出接口）、路由（发现或计算网络之间的路径）以及 IPv4 的分片支持。", en: "The Network Layer delivers packets from a source host to a destination host even when they are on different networks; its four functions are logical addressing, which gives the source and destination an IP identity, forwarding, which moves a received packet to the correct output interface, routing, which discovers or calculates paths between networks, and fragmentation support in IPv4.", ms: "Lapisan Rangkaian menghantar paket daripada hos sumber kepada hos destinasi walaupun kedua-duanya berada pada rangkaian berbeza; empat fungsinya ialah pengalamatan logik yang memberi identiti IP kepada sumber dan destinasi, penghantaran ke hadapan yang memindahkan paket diterima ke antara muka output yang betul, penghalaan yang menemui atau mengira laluan antara rangkaian, dan sokongan pemecahan dalam IPv4." },
        { zh: "各层的交付职责与标识不同：应用层提供用户应用服务并用 URL 等名称，传输层实现进程到进程交付并用端口号，网络层实现跨网络的主机到主机交付并用逻辑 IP 地址，数据链路层实现单条链路上的节点到节点交付并用 MAC 地址，物理层只把比特作为信号发送而没有地址。", en: "Each layer has a different delivery responsibility and identifier: the application layer serves user applications and uses names such as a URL, the transport layer provides process-to-process delivery with port numbers, the network layer provides host-to-host delivery across networks with a logical IP address, the data link layer provides node-to-node delivery on one link with a MAC address, and the physical layer transmits bits as signals with no address at all.", ms: "Setiap lapisan mempunyai tanggungjawab penghantaran dan pengenal yang berbeza: lapisan aplikasi memberi perkhidmatan kepada aplikasi pengguna dan menggunakan nama seperti URL, lapisan pengangkutan menyediakan penghantaran proses ke proses dengan nombor port, lapisan rangkaian menyediakan penghantaran hos ke hos merentas rangkaian dengan alamat IP logik, lapisan pautan data menyediakan penghantaran nod ke nod pada satu pautan dengan alamat MAC, dan lapisan fizikal menghantar bit sebagai isyarat tanpa sebarang alamat." },
        { zh: "主机发送分组前要判断目的地在本地还是远程：若目的地在同一子网，就直接发给目的主机并使用目的主机的 MAC 地址；若目的地在另一个子网，就发给默认网关并使用网关接口的 MAC 地址。 以一个实例说明：源 192.168.10.10/24 要发给 203.0.113.20，/24 表示前三段标识网络，源网络是 192.168.10.0/24 而目的网络是 203.0.113.0/24，两者不同所以目的地在远程；主机把本地帧发给默认网关 192.168.10.1，但 IP 目的地址仍然是 203.0.113.20，因为服务器不在本地链路上，每经过一个路由器都会创建新的帧。", en: "Before sending a packet a host must decide whether the destination is local or remote: if it is in the same subnet the packet goes directly to the destination host using that host's MAC address, and if it is in another subnet the packet goes to the default gateway using the gateway interface's MAC address. One example makes this clear: a source of 192.168.10.10/24 sends to 203.0.113.20; the /24 prefix means the first three octets identify the network, the source network is 192.168.10.0/24 and the destination network is 203.0.113.0/24, so the destination is remote; the host sends the local frame to the default gateway 192.168.10.1 while the IP destination stays 203.0.113.20, because the server is not on the local link and every router creates a new frame for its next link.", ms: "Sebelum menghantar paket, hos perlu menentukan sama ada destinasi bersifat setempat atau jauh: jika berada dalam subnet yang sama, paket dihantar terus kepada hos destinasi menggunakan alamat MAC hos itu, dan jika berada dalam subnet lain, paket dihantar kepada gerbang lalai menggunakan alamat MAC antara muka gerbang. Satu contoh menjelaskannya: sumber 192.168.10.10/24 menghantar kepada 203.0.113.20; prefiks /24 bermakna tiga oktet pertama mengenal pasti rangkaian, rangkaian sumber ialah 192.168.10.0/24 dan rangkaian destinasi ialah 203.0.113.0/24, jadi destinasi bersifat jauh; hos menghantar bingkai tempatan kepada gerbang lalai 192.168.10.1 manakala alamat IP destinasi kekal 203.0.113.20, kerana pelayan itu tidak berada pada pautan tempatan dan setiap penghala mencipta bingkai baharu untuk pautan seterusnya." },
        { zh: "网络服务模型描述网络层向上层提供的交付服务：IP 提供无连接、尽力而为的数据报服务，发送前不需要建立连接，每个分组携带完整的目的地址，路由器独立处理每个分组，同一报文的分组可能走不同路径，也可能乱序、延迟、重复甚至丢失。 虚电路网络与数据报网络相对：虚电路要经过建立阶段（在交换机中建立逻辑路径和虚电路信息）、数据传输阶段（分组沿已建立路径并携带简短的 VC 标识）和拆除阶段；因此它需要连接建立、在建立时决定路由、路径固定、设备维护 VC 状态，电路失败时可能需要重新建立，典型例子是 ATM 或帧中继，而数据报网络的例子是 IP 互联网。", en: "A network service model describes the delivery service the Network Layer offers to the layer above: IP provides a connectionless best-effort datagram service, no connection setup is required before packets are sent, every packet carries the full destination address, routers treat each packet independently, and packets from one message may follow different paths and can arrive out of order, delayed, duplicated or lost. A virtual-circuit network contrasts with a datagram network: it has a setup phase that establishes a logical path and virtual-circuit information in the switches, a data-transfer phase in which packets follow the established path carrying a short VC identifier, and a teardown phase that releases the state; it therefore requires connection setup, decides routing during setup, keeps the same path, maintains VC state in the devices and may need the circuit re-established after a failure, with ATM or Frame Relay as examples and the IP Internet as the datagram example.", ms: "Model perkhidmatan rangkaian menerangkan perkhidmatan penghantaran yang ditawarkan lapisan rangkaian kepada lapisan di atasnya: IP menyediakan perkhidmatan datagram usaha terbaik tanpa sambungan, tiada persediaan sambungan diperlukan sebelum paket dihantar, setiap paket membawa alamat destinasi penuh, penghala mengendalikan setiap paket secara bebas, dan paket daripada satu mesej mungkin melalui laluan berbeza serta boleh tiba tidak mengikut urutan, lewat, bertindih atau hilang. Rangkaian litar maya berbeza daripada rangkaian datagram: ia mempunyai fasa persediaan yang membina laluan logik dan maklumat litar maya dalam suis, fasa pemindahan data yang mana paket mengikut laluan terbina sambil membawa pengenal VC yang pendek, dan fasa pembongkaran yang melepaskan keadaan itu; oleh itu ia memerlukan persediaan sambungan, menentukan penghalaan semasa persediaan, mengekalkan laluan yang sama, menyimpan keadaan VC dalam peranti dan mungkin perlu membina semula litar selepas kegagalan, dengan ATM atau Frame Relay sebagai contoh manakala Internet IP sebagai contoh datagram." },
        { zh: "逻辑地址在 TCP/IP 中就是 IP 地址，用来标识一个网络和其中的一台主机，并分成网络部分与主机部分：例如 192.168.1.10/24 的前 24 位是网络前缀，网络地址是 192.168.1.0/24，主机部分的值是 10。 IP 地址与 MAC 地址分工不同：IP 地址是分层的（网络前缀加主机部分）、工作在网络层、用于跨网络标识源和目的、在路由过程中基本保持端到端不变；MAC 地址是较扁平的接口标识、工作在数据链路层、只用于在一条本地链路上交付帧，并且每经过一条被路由的链路都会改变。", en: "In TCP/IP the logical address is the IP address, which identifies a network and a host in a form routers can use, and it is split into a network portion and a host portion: in 192.168.1.10/24 the first 24 bits form the network prefix, the network is 192.168.1.0/24 and the host portion has the value 10. IP and MAC addresses have different roles: an IP address is hierarchical with a network prefix and host part, works at the network layer, identifies source and destination across networks and normally remains end-to-end during routing, while a MAC address is a rather flat interface identifier, works at the data link layer, is used only to deliver a frame on one local link and changes at each routed link.", ms: "Dalam TCP/IP, alamat logik ialah alamat IP yang mengenal pasti sesuatu rangkaian dan hos dalam bentuk yang boleh digunakan penghala, dan ia terbahagi kepada bahagian rangkaian dan bahagian hos: dalam 192.168.1.10/24, 24 bit pertama membentuk prefiks rangkaian, rangkaiannya ialah 192.168.1.0/24 dan bahagian hos bernilai 10. Alamat IP dan alamat MAC mempunyai peranan berbeza: alamat IP bersifat berhierarki dengan prefiks rangkaian dan bahagian hos, beroperasi pada lapisan rangkaian, mengenal pasti sumber dan destinasi merentas rangkaian serta biasanya kekal dari hujung ke hujung semasa penghalaan, manakala alamat MAC ialah pengenal antara muka yang agak rata, beroperasi pada lapisan pautan data, hanya digunakan untuk menghantar bingkai pada satu pautan tempatan dan berubah pada setiap pautan yang dihalakan." },
        { zh: "IPv4 地址有 32 位，写成四段用点分隔的十进制八位组，每段 8 位、取值 0 到 255；前缀长度表示最左边多少位标识网络，/24 与子网掩码 255.255.255.0 表示同一条边界，可用主机数是 2 的剩余主机位数次方再减 2（如 /24 有 8 个主机位、256 个地址、254 个可用主机，/26 有 6 个主机位、64 个地址、62 个可用主机）。IPv6 是 IPv4 的后继者，1998 年设计以解决 IPv4 的局限，长度 128 位，写成八组四位十六进制数。", en: "An IPv4 address has 32 bits and is written as four decimal octets separated by dots, each octet holding 8 bits with a value from 0 to 255; the prefix length tells how many leftmost bits identify the network, a /24 prefix and the mask 255.255.255.0 describe the same boundary, and usable hosts equal two to the power of the remaining host bits minus two, so /24 has 8 host bits, 256 addresses and 254 usable hosts while /26 has 6 host bits, 64 addresses and 62 usable hosts. IPv6 is the successor to IPv4, designed in 1998 to address its limitations, and is 128 bits long, written as eight groups of four hexadecimal digits.", ms: "Alamat IPv4 mempunyai 32 bit dan ditulis sebagai empat oktet perpuluhan yang dipisahkan titik, setiap oktet mengandungi 8 bit bernilai 0 hingga 255; panjang prefiks memberitahu berapa bit paling kiri mengenal pasti rangkaian, prefiks /24 dan topeng 255.255.255.0 menerangkan sempadan yang sama, dan bilangan hos boleh guna ialah dua kuasa bilangan bit hos yang tinggal tolak dua, jadi /24 mempunyai 8 bit hos, 256 alamat dan 254 hos boleh guna manakala /26 mempunyai 6 bit hos, 64 alamat dan 62 hos boleh guna. IPv6 ialah pengganti IPv4, direka pada 1998 untuk mengatasi had IPv4, dan panjangnya 128 bit yang ditulis sebagai lapan kumpulan empat digit perenambelasan." },
        { zh: "网络地址和广播地址不能分配给主机：网络地址的所有主机位都是 0，广播地址的所有主机位都是 1，第一个可用地址是网络地址加 1，最后一个可用地址是广播地址减 1。", en: "The network address and the broadcast address cannot be assigned to a normal host: the network address has all host bits set to 0 and the broadcast address has all host bits set to 1, the first usable address is the network address plus one and the last usable address is the broadcast address minus one.", ms: "Alamat rangkaian dan alamat siaran tidak boleh diberikan kepada hos biasa: alamat rangkaian mempunyai semua bit hos bernilai 0 dan alamat siaran mempunyai semua bit hos bernilai 1, alamat boleh guna pertama ialah alamat rangkaian tambah satu dan alamat boleh guna terakhir ialah alamat siaran tolak satu." },
        { zh: "子网划分用借用主机位的方式把一个大的 IP 网络分成更小的网络，借得越多子网越多但每个子网的主机越少；五步法是确定原网络与前缀、判断需求按子网数还是按可用主机数、借足够的位数、计算新前缀与掩码和块大小、列出每个子网的网络地址、可用主机范围和广播地址。例如 192.168.10.0/24 需要 4 个等大实验室子网时，2 的 2 次方等于 4 所以借 2 位，新前缀 /26、掩码 255.255.255.192、每子网 64 个地址、62 个可用主机、块大小 64，四个子网的网络地址是 .0、.64、.128 和 .192。", en: "Subnetting divides one large IP network into smaller networks by borrowing host bits; borrowing more bits creates more subnets but leaves fewer hosts in each. The five-step method identifies the original network and prefix, decides whether the requirement is based on subnets or usable hosts, borrows enough host bits, calculates the new prefix, mask and block size, and lists each network address, valid host range and broadcast address. For example, when 192.168.10.0/24 must provide 4 equal laboratory subnets, two to the power of two equals four so two bits are borrowed, giving the new prefix /26, mask 255.255.255.192, 64 addresses and 62 usable hosts per subnet and a block size of 64, so the four network addresses are .0, .64, .128 and .192.", ms: "Subnetting membahagikan satu rangkaian IP besar kepada rangkaian lebih kecil dengan meminjam bit hos; lebih banyak bit dipinjam menghasilkan lebih banyak subnet tetapi lebih sedikit hos dalam setiap subnet. Kaedah lima langkah mengenal pasti rangkaian dan prefiks asal, menentukan sama ada keperluan berdasarkan bilangan subnet atau hos boleh guna, meminjam bit hos yang mencukupi, mengira prefiks, topeng dan saiz blok baharu, serta menyenaraikan setiap alamat rangkaian, julat hos sah dan alamat siaran. Contohnya, apabila 192.168.10.0/24 perlu menyediakan 4 subnet makmal yang sama saiz, dua kuasa dua sama dengan empat jadi dua bit dipinjam, menghasilkan prefiks /26, topeng 255.255.255.192, 64 alamat dan 62 hos boleh guna bagi setiap subnet serta saiz blok 64, maka empat alamat rangkaiannya ialah .0, .64, .128 dan .192." },
        { zh: "专用地址块 10.0.0.0/8、172.16.0.0/12 和 192.168.0.0/16 不会在公共互联网上被路由，但在内部网络中有效且可以重复使用；DHCP 是应用层协议，用来提供 IP 地址、子网掩码、默认网关和 DNS 服务器等配置，NAT 通常在路由器或防火墙上把私有地址转换成公共地址。", en: "The private blocks 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 are not routed on the public Internet but are valid and reusable inside private networks; DHCP is an application layer protocol that supplies configuration such as an IP address, subnet mask, default gateway and DNS server, while NAT, usually performed at a router or firewall, translates private addresses into a public address.", ms: "Blok persendirian 10.0.0.0/8, 172.16.0.0/12 dan 192.168.0.0/16 tidak dihalakan di Internet awam tetapi sah dan boleh digunakan semula dalam rangkaian persendirian; DHCP ialah protokol lapisan aplikasi yang membekalkan konfigurasi seperti alamat IP, topeng subnet, gerbang lalai dan pelayan DNS, manakala NAT yang biasanya dilakukan pada penghala atau firewall menukar alamat persendirian kepada alamat awam." },
        { zh: "路由是确定网络之间路径的过程，转发是路由器对每个分组执行的动作，即把分组从选定的接口或下一跳送出；路由表条目包括目的网络或前缀、下一跳、输出接口、度量或成本以及默认路由，路由器用最长前缀匹配选择最具体的路由，静态路由由人工输入而动态路由由路由协议学习。", en: "Routing is the process of determining paths between networks, while forwarding is the router's per-packet action of sending a packet through the selected interface or next hop; a routing entry contains the destination network or prefix, the next hop, the output interface, a metric or cost and the default route, and routers use longest-prefix matching to select the most specific route, with static routes entered manually and dynamic routes learned by routing protocols.", ms: "Penghalaan ialah proses menentukan laluan antara rangkaian, manakala penghantaran ke hadapan ialah tindakan penghala bagi setiap paket untuk menghantarnya melalui antara muka atau hop seterusnya yang dipilih; entri penghalaan mengandungi rangkaian atau prefiks destinasi, hop seterusnya, antara muka output, metrik atau kos dan laluan lalai, dan penghala menggunakan padanan prefiks terpanjang untuk memilih laluan paling khusus, dengan laluan statik dimasukkan secara manual dan laluan dinamik dipelajari melalui protokol penghalaan." }
      ],
      terms: [
        {
          en: "Logical Address",
          zh: "逻辑地址",
          ms: "Alamat Logik",
          def: { zh: "以路由器可使用的方式标识网络与主机的地址，在 TCP/IP 中就是 IP 地址。", en: "An address that identifies a network and a host in a form routers can use; in TCP/IP it is the IP address.", ms: "Alamat yang mengenal pasti rangkaian dan hos dalam bentuk yang boleh digunakan penghala; dalam TCP/IP ia ialah alamat IP." }
        },
        {
          en: "Network Prefix",
          zh: "网络前缀",
          ms: "Prefiks Rangkaian",
          def: { zh: "IP 地址中标识逻辑网络或子网的最左边若干位。", en: "The leftmost bits of an IP address that identify the logical network or subnet.", ms: "Bit paling kiri dalam alamat IP yang mengenal pasti rangkaian logik atau subnet." }
        },
        {
          en: "Host Portion",
          zh: "主机部分",
          ms: "Bahagian Hos",
          def: { zh: "IP 地址中标识该网络内部具体设备的位，如 192.168.1.10/24 中的 10。", en: "The bits of an IP address that identify the specific device inside that network, such as the 10 in 192.168.1.10/24.", ms: "Bit dalam alamat IP yang mengenal pasti peranti tertentu dalam rangkaian itu, seperti 10 dalam 192.168.1.10/24." }
        },
        {
          en: "Subnet Mask",
          zh: "子网掩码",
          ms: "Topeng Subnet",
          def: { zh: "与前缀长度表示同一网络边界的 32 位掩码，如 /24 对应 255.255.255.0。", en: "A 32-bit mask that expresses the same network boundary as the prefix length, for example /24 matching 255.255.255.0.", ms: "Topeng 32 bit yang menyatakan sempadan rangkaian sama seperti panjang prefiks, contohnya /24 bersamaan 255.255.255.0." }
        },
        {
          en: "Subnetting",
          zh: "子网划分",
          ms: "Subnetting",
          def: { zh: "借用主机位把一个大的 IP 网络划分成多个较小网络的做法。", en: "Borrowing host bits to divide one large IP network into several smaller networks.", ms: "Meminjam bit hos untuk membahagikan satu rangkaian IP besar kepada beberapa rangkaian lebih kecil." }
        },
        {
          en: "Network Address",
          zh: "网络地址",
          ms: "Alamat Rangkaian",
          def: { zh: "主机位全部为 0 的地址，用来标识子网本身，不能分配给主机。", en: "The address with all host bits set to zero, which identifies the subnet itself and cannot be assigned to a host.", ms: "Alamat dengan semua bit hos bernilai sifar yang mengenal pasti subnet itu sendiri dan tidak boleh diberikan kepada hos." }
        },
        {
          en: "Broadcast Address",
          zh: "广播地址",
          ms: "Alamat Siaran",
          def: { zh: "主机位全部为 1 的地址，用来向子网内所有主机发送数据，不能分配给主机。", en: "The address with all host bits set to one, used to reach every host in the subnet and not assignable to a host.", ms: "Alamat dengan semua bit hos bernilai satu, digunakan untuk mencapai semua hos dalam subnet dan tidak boleh diberikan kepada hos." }
        },
        {
          en: "Private Address",
          zh: "专用地址",
          ms: "Alamat Persendirian",
          def: { zh: "10.0.0.0/8、172.16.0.0/12 和 192.168.0.0/16 等内部地址，不在公共互联网上路由。", en: "Internal blocks such as 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 that are not routed on the public Internet.", ms: "Blok dalaman seperti 10.0.0.0/8, 172.16.0.0/12 dan 192.168.0.0/16 yang tidak dihalakan di Internet awam." }
        },
        {
          en: "DHCP",
          zh: "动态主机配置协议",
          ms: "DHCP (Protokol Konfigurasi Hos Dinamik)",
          def: { zh: "应用层协议，为主机提供 IP 地址、子网掩码、默认网关和 DNS 服务器等配置。", en: "An application layer protocol that supplies a host with an IP address, subnet mask, default gateway and DNS server.", ms: "Protokol lapisan aplikasi yang membekalkan hos dengan alamat IP, topeng subnet, gerbang lalai dan pelayan DNS." }
        },
        {
          en: "NAT",
          zh: "网络地址转换",
          ms: "NAT (Terjemahan Alamat Rangkaian)",
          def: { zh: "在路由器或防火墙上把私有地址转换成公共地址，使私有主机能与外部通信。", en: "Translating private addresses into a public address at a router or firewall so private hosts can communicate outside.", ms: "Menukar alamat persendirian kepada alamat awam pada penghala atau firewall supaya hos persendirian boleh berkomunikasi ke luar." }
        },
        {
          en: "IPv6",
          zh: "IPv6",
          ms: "IPv6",
          def: { zh: "IPv4 的后继者，128 位地址，写成八组四位十六进制数。", en: "The successor to IPv4 with 128-bit addresses written as eight groups of four hexadecimal digits.", ms: "Pengganti IPv4 dengan alamat 128 bit yang ditulis sebagai lapan kumpulan empat digit perenambelasan." }
        },
        {
          en: "MTU (Maximum Transmission Unit)",
          zh: "最大传输单元",
          ms: "MTU (Unit Penghantaran Maksimum)",
          def: { zh: "一条链路能够承载的最大数据单元，数据报超过它时 IPv4 需要分片。", en: "The largest data unit a link can carry; when a datagram exceeds it IPv4 must fragment the packet.", ms: "Unit data terbesar yang boleh dibawa satu pautan; apabila datagram melebihinya IPv4 perlu memecahkannya." }
        },
        {
          en: "Default Gateway",
          zh: "默认网关",
          ms: "Gerbang Lalai",
          def: { zh: "当目的地址不在本地子网时，主机把帧发往的路由器接口。", en: "The router interface to which a host sends frames when the destination is not in the local subnet.", ms: "Antara muka penghala yang dituju hos apabila destinasi tiada dalam subnet tempatan." }
        },
        {
          en: "Datagram Service",
          zh: "数据报服务",
          ms: "Perkhidmatan Datagram",
          def: { zh: "无连接、尽力而为的交付服务，每个分组独立选路且不保证送达。", en: "A connectionless best-effort delivery service in which each packet is routed independently with no delivery guarantee.", ms: "Perkhidmatan penghantaran usaha terbaik tanpa sambungan yang mana setiap paket dihalakan secara bebas tanpa jaminan penghantaran." }
        },
        {
          en: "Routing",
          zh: "路由",
          ms: "Penghalaan",
          def: { zh: "确定网络之间存在哪些路径以及哪条更优的过程，与逐包执行的转发不同。", en: "The process of determining which paths exist between networks and which are preferred, unlike forwarding which acts per packet.", ms: "Proses menentukan laluan yang wujud antara rangkaian dan yang lebih diutamakan, berbeza daripada penghantaran ke hadapan yang bertindak bagi setiap paket." }
        }
      ],
      diagrams: [
        {
          type: "flow",
          dir: "h",
          title: { zh: "分组从源主机到目的主机的路径", en: "Packet Path from Source Host to Destination Host", ms: "Laluan Paket daripada Hos Sumber ke Hos Destinasi" },
          steps: [
            {
              label: { zh: "源主机 Aina 的笔记本", en: "Source host: Aina's laptop", ms: "Hos sumber: komputer riba Aina" },
              note: { zh: "192.168.10.10/24，判断目的在远程", en: "192.168.10.10/24, destination is remote", ms: "192.168.10.10/24, destinasi bersifat jauh" }
            },
            {
              label: { zh: "默认网关 192.168.10.1", en: "Default gateway 192.168.10.1", ms: "Gerbang lalai 192.168.10.1" },
              note: { zh: "帧的目的 MAC 是网关，IP 目的仍是服务器", en: "Frame MAC is the gateway, IP destination still the server", ms: "MAC bingkai ialah gerbang, destinasi IP kekal pelayan" }
            },
            {
              label: { zh: "中间路由器", en: "Intermediate routers", ms: "Penghala perantaraan" },
              note: { zh: "用最长前缀匹配选择下一跳，每跳建立新帧", en: "Longest-prefix match selects the next hop; a new frame per hop", ms: "Padanan prefiks terpanjang memilih hop seterusnya; bingkai baharu setiap hop" }
            },
            {
              label: { zh: "目的网络的路由器", en: "Router of the destination network", ms: "Penghala rangkaian destinasi" },
              note: { zh: "203.0.113.0/24，交付到本地链路", en: "203.0.113.0/24, delivers onto the local link", ms: "203.0.113.0/24, menghantar ke pautan tempatan" }
            },
            {
              label: { zh: "目的服务器 203.0.113.20", en: "Destination server 203.0.113.20", ms: "Pelayan destinasi 203.0.113.20" },
              note: { zh: "到达目的主机，IP 地址全程不变", en: "Reaches the destination; the IP address never changed", ms: "Sampai ke hos destinasi; alamat IP tidak berubah" }
            }
          ],
          caption: { zh: "网络层端到端选择路径，数据链路层逐条链路重新封装帧", en: "The network layer chooses the path end to end while the data link layer rebuilds the frame on every link", ms: "Lapisan rangkaian memilih laluan dari hujung ke hujung manakala lapisan pautan data membina semula bingkai pada setiap pautan" }
        },
        {
          type: "matrix",
          title: { zh: "数据报网络与虚电路网络对比", en: "Datagram versus Virtual-Circuit Network", ms: "Rangkaian Datagram berbanding Litar Maya" },
          cols: [
            { zh: "数据报网络", en: "Datagram network", ms: "Rangkaian datagram" },
            { zh: "虚电路网络", en: "Virtual-circuit network", ms: "Rangkaian litar maya" }
          ],
          rows: [
            {
              head: { zh: "连接建立", en: "Connection setup", ms: "Persediaan sambungan" },
              cells: [
                { zh: "不需要", en: "Not required", ms: "Tidak diperlukan" },
                { zh: "必须先建立", en: "Required before data", ms: "Diperlukan sebelum data" }
              ]
            },
            {
              head: { zh: "路由决策", en: "Routing decision", ms: "Keputusan penghalaan" },
              cells: [
                { zh: "每个分组独立决定", en: "Made independently per packet", ms: "Dibuat secara bebas bagi setiap paket" },
                { zh: "在建立阶段决定", en: "Made during setup", ms: "Dibuat semasa persediaan" }
              ]
            },
            {
              head: { zh: "分组信息", en: "Packet information", ms: "Maklumat paket" },
              cells: [
                { zh: "携带完整目的地址", en: "Full destination address", ms: "Alamat destinasi penuh" },
                { zh: "只携带 VC 标识", en: "Short VC identifier", ms: "Pengenal VC pendek" }
              ]
            },
            {
              head: { zh: "路径与状态", en: "Path and device state", ms: "Laluan dan keadaan peranti" },
              cells: [
                { zh: "逐包可能改变，设备不保存连接状态", en: "May change per packet, no per-connection state", ms: "Boleh berubah setiap paket, tiada keadaan sambungan" },
                { zh: "沿固定逻辑路径，设备维护 VC 信息", en: "Same logical path, devices keep VC state", ms: "Laluan logik sama, peranti menyimpan keadaan VC" }
              ]
            },
            {
              head: { zh: "失败响应与例子", en: "Failure response and example", ms: "Tindak balas kegagalan dan contoh" },
              cells: [
                { zh: "后续分组可改走其他路径，例如 IP 互联网", en: "Later packets may use another path, e.g. the IP Internet", ms: "Paket seterusnya boleh guna laluan lain, contohnya Internet IP" },
                { zh: "电路可能需重新建立，例如 ATM 或帧中继", en: "Circuit may need re-establishment, e.g. ATM or Frame Relay", ms: "Litar mungkin perlu dibina semula, contohnya ATM atau Frame Relay" }
              ]
            }
          ],
          legend: [
            { zh: "IP 提供无连接、尽力而为的数据报服务", en: "IP provides a connectionless best-effort datagram service", ms: "IP menyediakan perkhidmatan datagram usaha terbaik tanpa sambungan" }
          ]
        }
      ],
      exam: [
        { zh: "子网划分计算几乎必考：按五步法求借位数、新前缀、掩码、块大小，再列出每个子网的网络地址、可用主机范围和广播地址，牢记可用主机数等于 2 的主机位数次方再减 2。", en: "Subnetting calculations are almost certain: use the five steps to find the borrowed bits, new prefix, mask and block size, then list each network address, usable host range and broadcast address, remembering that usable hosts equal two to the power of the host bits minus two.", ms: "Pengiraan subnetting hampir pasti keluar: gunakan lima langkah untuk mencari bit pinjaman, prefiks baharu, topeng dan saiz blok, kemudian senaraikan setiap alamat rangkaian, julat hos boleh guna dan alamat siaran, dengan mengingati hos boleh guna ialah dua kuasa bit hos tolak dua." },
        { zh: "判断本地还是远程是高频题：用掩码算出源和目的的网络地址，相同就直接投递并使用目的 MAC 地址，不同就发给默认网关并使用网关 MAC 地址，但 IP 目的地址始终不变。", en: "Deciding local versus remote is very common: compute the source and destination network addresses with the mask; if they match, deliver directly using the destination MAC address, otherwise send to the default gateway using the gateway MAC address, while the IP destination never changes.", ms: "Menentukan setempat berbanding jauh sangat biasa: kira alamat rangkaian sumber dan destinasi menggunakan topeng; jika sama, hantar terus menggunakan alamat MAC destinasi, jika tidak hantar kepada gerbang lalai menggunakan alamat MAC gerbang, manakala alamat IP destinasi tidak berubah." },
        { zh: "数据报与虚电路的对比表要能默写：是否需要连接建立、路由决策在何时做出、分组携带完整地址还是 VC 标识、路径是否固定、设备是否保存状态、失败时如何处理。", en: "The datagram versus virtual-circuit table must be reproducible: whether setup is needed, when routing decisions are made, whether packets carry a full address or a VC identifier, whether the path is fixed, whether devices keep state, and how failures are handled.", ms: "Jadual datagram berbanding litar maya perlu dihafal: sama ada persediaan diperlukan, bila keputusan penghalaan dibuat, sama ada paket membawa alamat penuh atau pengenal VC, sama ada laluan tetap, sama ada peranti menyimpan keadaan, dan cara kegagalan ditangani." },
        { zh: "易错点：把路由（确定路径）与转发（逐包送出）混为一谈；忘记专用地址不会在公共互联网上路由，需要 DHCP 分配配置并用 NAT 转换成公共地址；忘记 IPv4 是 32 位而 IPv6 是 128 位。", en: "Common mistakes: confusing routing, which determines paths, with forwarding, which sends each packet; forgetting that private addresses are not routed on the public Internet and need DHCP for configuration plus NAT for translation; and forgetting that IPv4 is 32-bit while IPv6 is 128-bit.", ms: "Kesilapan biasa: mengelirukan penghalaan yang menentukan laluan dengan penghantaran ke hadapan yang menghantar setiap paket; terlupa alamat persendirian tidak dihalakan di Internet awam dan memerlukan DHCP untuk konfigurasi serta NAT untuk terjemahan; dan terlupa IPv4 ialah 32 bit manakala IPv6 ialah 128 bit." }
      ],
      mnemonic: { zh: "同网直发用目的 MAC，异网交给网关；IP 端到端不变，MAC 每跳都换；借位划子网，可用主机减二。", en: "Same subnet sends to the destination MAC, another subnet goes to the gateway; IP stays end to end while MAC changes every hop; borrow bits to subnet and subtract two for usable hosts.", ms: "Subnet sama hantar ke MAC destinasi, subnet lain ke gerbang; IP kekal hujung ke hujung manakala MAC berubah setiap hop; pinjam bit untuk subnet dan tolak dua bagi hos boleh guna." }
    },
    {
      id: "dcn-10",
      num: 10,
      title: { zh: "传输层", en: "Transport Layer", ms: "Lapisan Pengangkutan" },
      file: "dcn/CHAPTER 10 2627 1.pdf",
      pages: 29,
      summary: { zh: "传输层是 TCP/IP 模型的第 4 层，负责进程到进程的交付。它从应用层接收报文，加上 TCP 或 UDP 首部，再交给 IP 发送，并在目的端把数据交给正确的应用程序。网络层的 IP 地址只能标识主机，因此传输层用 16 位的端口号来标识主机内部的具体应用进程。本章比较两个传输协议：TCP 提供面向连接、可靠、有序的字节流，具有序号与累积确认、重传、流量控制、校验和与拥塞控制；UDP 则无连接、保留报文边界、尽力而为，开销小但不保证送达、顺序与去重。", en: "The Transport Layer is Layer 4 of the TCP/IP model and provides process-to-process delivery. It receives a message from the application, adds a TCP or UDP header, passes the transport unit to IP, and at the destination delivers the data to the correct application. Since an IP address at the network layer identifies only a host, the transport layer uses a 16-bit port number to identify the specific application process inside that host. The chapter compares the two transport protocols: TCP provides a connection-oriented, reliable and ordered byte stream with sequence numbers, cumulative acknowledgements, retransmission, flow control, checksum and congestion control, while UDP is connectionless, preserves message boundaries and offers best-effort delivery with lower overhead but no guarantee of delivery, order or duplicate protection.", ms: "Lapisan Pengangkutan ialah Lapisan 4 model TCP/IP dan menyediakan penghantaran proses ke proses. Ia menerima mesej daripada aplikasi, menambah pengepala TCP atau UDP, menyerahkan unit pengangkutan kepada IP, dan di destinasi menghantar data kepada aplikasi yang betul. Oleh sebab alamat IP pada lapisan rangkaian hanya mengenal pasti hos, lapisan pengangkutan menggunakan nombor port 16 bit untuk mengenal pasti proses aplikasi tertentu dalam hos itu. Bab ini membandingkan dua protokol pengangkutan: TCP menyediakan aliran bait berorientasikan sambungan, boleh dipercayai dan tersusun dengan nombor jujukan, pengakuan kumulatif, penghantaran semula, kawalan aliran, jumlah semak dan kawalan kesesakan, manakala UDP tanpa sambungan, mengekalkan sempadan mesej dan menawarkan penghantaran usaha terbaik dengan overhead rendah tetapi tanpa jaminan penghantaran, urutan atau perlindungan pertindihan." },
      points: [
        { zh: "传输层是 TCP/IP 模型的第 4 层（在五层表示中位于应用层之下、网络层之上），它从应用层接收报文，加上 TCP 或 UDP 首部，把传输单元交给 IP，并在目的端把数据交付给正确的应用。", en: "The Transport Layer is Layer 4 of the TCP/IP model, sitting below the application layer and above the network layer; it receives a message from an application, adds a TCP or UDP header, passes the transport unit to IP and delivers the data to the correct application at the destination.", ms: "Lapisan Pengangkutan ialah Lapisan 4 model TCP/IP, terletak di bawah lapisan aplikasi dan di atas lapisan rangkaian; ia menerima mesej daripada aplikasi, menambah pengepala TCP atau UDP, menyerahkan unit pengangkutan kepada IP dan menghantar data kepada aplikasi yang betul di destinasi." },
        { zh: "网络层的 IP 地址标识主机，传输层的端口号标识目的主机内部的应用进程，两者配合才能把数据送到正确的应用程序。", en: "The IP address at the network layer identifies the host while the port number at the transport layer identifies the application process inside the destination host, and both are needed to deliver data to the correct application.", ms: "Alamat IP pada lapisan rangkaian mengenal pasti hos manakala nombor port pada lapisan pengangkutan mengenal pasti proses aplikasi dalam hos destinasi, dan kedua-duanya diperlukan untuk menghantar data kepada aplikasi yang betul." },
        { zh: "端口号有 16 位，取值范围是 0 到 65535；目的端口标识接收服务，源端口通常标识发出请求的客户应用以便回送应答，而且 TCP 和 UDP 各自拥有独立的端口号空间。", en: "A port number has 16 bits so values range from 0 to 65535; the destination port identifies the receiving service, the source port usually identifies the client application so the reply can be returned, and TCP and UDP each have their own port number space.", ms: "Nombor port mempunyai 16 bit jadi nilainya antara 0 hingga 65535; port destinasi mengenal pasti perkhidmatan penerima, port sumber biasanya mengenal pasti aplikasi pelanggan supaya balasan dapat dihantar, dan TCP serta UDP masing-masing mempunyai ruang nombor port sendiri." },
        { zh: "TCP 提供可靠的字节流服务：应用看到的是有序的字节流，TCP 是面向连接的（先建立连接）、全双工的（双方都能收发）、可靠的（缺失的数据会被重传）和有序的（按顺序交付字节）。", en: "TCP provides a reliable byte stream: applications see an ordered stream of bytes, and TCP is connection oriented because it establishes a connection first, full duplex because both sides can send and receive, reliable because missing data is retransmitted, and ordered because it delivers bytes in sequence.", ms: "TCP menyediakan aliran bait yang boleh dipercayai: aplikasi melihat aliran bait yang tersusun, dan TCP berorientasikan sambungan kerana ia membina sambungan terlebih dahulu, dupleks penuh kerana kedua-dua pihak boleh menghantar dan menerima, boleh dipercayai kerana data yang hilang dihantar semula, dan tersusun kerana bait dihantar mengikut urutan." },
        { zh: "TCP 用序号标识每个字节在流中的位置，接收方用累积确认报告它期望收到的下一个字节：例如发送方从序号 1001 开始发送 500 字节，接收方回 ACK 1501 表示直到 1500 的所有字节都已确认收到。", en: "TCP uses sequence numbers to identify the position of each byte in the stream and the receiver reports the next byte it expects with a cumulative acknowledgement: for example, if the sender transmits 500 bytes starting at sequence number 1001, ACK 1501 confirms receipt of every byte through 1500.", ms: "TCP menggunakan nombor jujukan untuk mengenal pasti kedudukan setiap bait dalam aliran dan penerima melaporkan bait seterusnya yang dijangka melalui pengakuan kumulatif: contohnya, jika penghantar menghantar 500 bait bermula pada nombor jujukan 1001, ACK 1501 mengesahkan penerimaan setiap bait sehingga 1500." },
        { zh: "TCP 通过握手同步双方的序号并确认两边都已准备就绪，从而在传输数据之前建立起连接。", en: "TCP uses a handshake to synchronise the sequence numbers of both sides and confirm that both are ready, thereby establishing the connection before any data is transferred.", ms: "TCP menggunakan jabat tangan untuk menyegerakkan nombor jujukan kedua-dua pihak dan mengesahkan kedua-duanya bersedia, sekali gus membina sambungan sebelum sebarang data dihantar." },
        { zh: "TCP 的可靠性由多种机制共同保证：重传在数据丢失或超时后重发，流量控制让接收方通告可用缓存空间，确认让接收方报告期望的下一个字节，校验和检测首部与数据中的错误，拥塞控制让发送方根据网络状况调整发送量。", en: "TCP reliability comes from several mechanisms working together: retransmission resends data after loss or a timeout, flow control lets the receiver advertise available buffer space, acknowledgement lets the receiver report the next byte it expects, checksum detects errors in the header and data, and congestion control lets the sender adjust traffic to network conditions.", ms: "Kebolehpercayaan TCP terhasil daripada beberapa mekanisme yang bekerjasama: penghantaran semula menghantar data semula selepas kehilangan atau tamat masa, kawalan aliran membolehkan penerima mengumumkan ruang penimbal yang tersedia, pengakuan membolehkan penerima melaporkan bait seterusnya yang dijangka, jumlah semak mengesan ralat dalam pengepala dan data, dan kawalan kesesakan membolehkan penghantar menyesuaikan trafik dengan keadaan rangkaian." },
        { zh: "UDP 把一个应用报文变成一个用户数据报：它无连接、不需要握手，是面向报文的因而保留报文边界，提供尽力而为的交付，不保证送达、顺序或防止重复；校验和只能检测损坏，UDP 不会修复或重传数据。", en: "UDP turns one application message into one user datagram: it is connectionless and requires no handshake, it is message oriented so it preserves message boundaries, and it provides best-effort delivery with no guarantee of delivery, order or duplicate protection; the checksum only detects corruption and UDP does not repair or retransmit data.", ms: "UDP menukar satu mesej aplikasi menjadi satu datagram pengguna: ia tanpa sambungan dan tidak memerlukan jabat tangan, berorientasikan mesej sehingga mengekalkan sempadan mesej, dan menyediakan penghantaran usaha terbaik tanpa jaminan penghantaran, urutan atau perlindungan pertindihan; jumlah semak hanya mengesan kerosakan dan UDP tidak membaiki atau menghantar semula data." },
        { zh: "因此 TCP 与 UDP 的取舍很清楚：TCP 内建确认、重传、流量控制和拥塞控制，可靠但开销大；UDP 开销小、速度快，但不保证交付，适合实时应用或简单的查询响应类应用。", en: "The trade-off between TCP and UDP is therefore clear: TCP has built-in acknowledgement, retransmission, flow control and congestion control, which makes it reliable but heavier, while UDP has lower overhead and is faster but does not guarantee delivery, which suits real-time applications or simple query-response services.", ms: "Oleh itu pertukaran antara TCP dan UDP jelas: TCP mempunyai pengakuan, penghantaran semula, kawalan aliran dan kawalan kesesakan terbina dalam, menjadikannya boleh dipercayai tetapi lebih berat, manakala UDP mempunyai overhead rendah dan lebih pantas tetapi tidak menjamin penghantaran, sesuai untuk aplikasi masa nyata atau perkhidmatan soal-jawab yang mudah." },
        { zh: "一次完整的通信需要 IP 地址与端口号共同作用：IP 地址负责把分组送到正确的目的主机，端口号负责把数据交给该主机内正确的应用进程，两者缺一不可。", en: "A complete communication needs both the IP address and the port number: the IP address is responsible for getting the packet to the correct destination host and the port number is responsible for handing the data to the correct application process inside that host.", ms: "Satu komunikasi lengkap memerlukan alamat IP dan nombor port: alamat IP bertanggungjawab menghantar paket ke hos destinasi yang betul dan nombor port bertanggungjawab menyerahkan data kepada proses aplikasi yang betul dalam hos itu." }
      ],
      terms: [
        {
          en: "Transport Layer",
          zh: "传输层",
          ms: "Lapisan Pengangkutan",
          def: { zh: "负责进程到进程交付的层，把应用数据加上传输首部后交给 IP。", en: "The layer responsible for process-to-process delivery, which adds a transport header to application data before passing it to IP.", ms: "Lapisan yang bertanggungjawab atas penghantaran proses ke proses, menambah pengepala pengangkutan pada data aplikasi sebelum menyerahkannya kepada IP." }
        },
        {
          en: "Port Number",
          zh: "端口号",
          ms: "Nombor Port",
          def: { zh: "16 位的标识符，取值范围 0 到 65535，用来标识主机内的应用进程或服务。", en: "A 16-bit identifier from 0 to 65535 that identifies an application process or service inside a host.", ms: "Pengenal 16 bit daripada 0 hingga 65535 yang mengenal pasti proses aplikasi atau perkhidmatan dalam hos." }
        },
        {
          en: "Destination Port",
          zh: "目的端口",
          ms: "Port Destinasi",
          def: { zh: "标识接收数据的服务，是服务器端应用的端口号。", en: "The port that identifies the receiving service, that is the port of the server application.", ms: "Port yang mengenal pasti perkhidmatan penerima, iaitu port aplikasi pelayan." }
        },
        {
          en: "TCP",
          zh: "传输控制协议",
          ms: "TCP (Protokol Kawalan Penghantaran)",
          def: { zh: "面向连接、可靠、有序的字节流传输协议，内建确认、重传、流控与拥塞控制。", en: "A connection-oriented, reliable and ordered byte-stream transport protocol with built-in acknowledgement, retransmission, flow control and congestion control.", ms: "Protokol pengangkutan aliran bait berorientasikan sambungan, boleh dipercayai dan tersusun dengan pengakuan, penghantaran semula, kawalan aliran dan kawalan kesesakan terbina dalam." }
        },
        {
          en: "UDP",
          zh: "用户数据报协议",
          ms: "UDP (Protokol Datagram Pengguna)",
          def: { zh: "无连接、面向报文、尽力而为的传输协议，开销小但不保证送达与顺序。", en: "A connectionless, message-oriented best-effort transport protocol with low overhead but no guarantee of delivery or order.", ms: "Protokol pengangkutan tanpa sambungan, berorientasikan mesej dan usaha terbaik dengan overhead rendah tetapi tanpa jaminan penghantaran atau urutan." }
        },
        {
          en: "Connection-Oriented",
          zh: "面向连接",
          ms: "Berorientasikan Sambungan",
          def: { zh: "通信前必须先建立连接的传输方式，如 TCP 的握手。", en: "A mode of transfer in which a connection must be established first, as in the TCP handshake.", ms: "Mod pemindahan yang memerlukan sambungan dibina terlebih dahulu, seperti jabat tangan TCP." }
        },
        {
          en: "Connectionless",
          zh: "无连接",
          ms: "Tanpa Sambungan",
          def: { zh: "发送数据前不需要建立连接的传输方式，如 UDP。", en: "A mode of transfer that requires no connection setup before data is sent, as with UDP.", ms: "Mod pemindahan yang tidak memerlukan persediaan sambungan sebelum data dihantar, seperti UDP." }
        },
        {
          en: "Byte Stream",
          zh: "字节流",
          ms: "Aliran Bait",
          def: { zh: "TCP 提供给应用的连续、有序字节序列，应用不必关心分段的边界。", en: "The continuous, ordered sequence of bytes TCP presents to an application, which need not care about segment boundaries.", ms: "Jujukan bait berterusan dan tersusun yang disediakan TCP kepada aplikasi, yang tidak perlu mengambil kira sempadan segmen." }
        },
        {
          en: "Sequence Number",
          zh: "序号",
          ms: "Nombor Jujukan",
          def: { zh: "TCP 用来标识每个字节在字节流中位置的编号。", en: "The number TCP uses to identify the position of each byte in the byte stream.", ms: "Nombor yang digunakan TCP untuk mengenal pasti kedudukan setiap bait dalam aliran bait." }
        },
        {
          en: "Acknowledgment (ACK)",
          zh: "确认",
          ms: "Pengakuan (ACK)",
          def: { zh: "接收方报告它期望收到的下一个字节，TCP 的确认号是累积的。", en: "The receiver reports the next byte it expects; TCP acknowledgement numbers are cumulative.", ms: "Penerima melaporkan bait seterusnya yang dijangka; nombor pengakuan TCP bersifat kumulatif." }
        },
        {
          en: "Flow Control",
          zh: "流量控制",
          ms: "Kawalan Aliran",
          def: { zh: "接收方通过通告可用缓存空间来防止发送方发送过快。", en: "The receiver advertises available buffer space to prevent the sender from transmitting too fast.", ms: "Penerima mengumumkan ruang penimbal tersedia untuk menghalang penghantar menghantar terlalu pantas." }
        },
        {
          en: "Congestion Control",
          zh: "拥塞控制",
          ms: "Kawalan Kesesakan",
          def: { zh: "发送方根据网络状况调整发送速率，避免网络过载。", en: "The sender adjusts its transmission rate to network conditions to avoid overloading the network.", ms: "Penghantar menyesuaikan kadar penghantaran dengan keadaan rangkaian untuk mengelakkan rangkaian terbeban." }
        },
        {
          en: "Checksum",
          zh: "校验和",
          ms: "Jumlah Semak",
          def: { zh: "TCP 或 UDP 用来检测首部与数据中错误的校验值。", en: "A check value used by TCP or UDP to detect errors in the header and the data.", ms: "Nilai semakan yang digunakan TCP atau UDP untuk mengesan ralat dalam pengepala dan data." }
        },
        {
          en: "Three-Way Handshake",
          zh: "三次握手",
          ms: "Jabat Tangan Tiga Hala",
          def: { zh: "TCP 建立连接时同步序号并确认双方准备就绪的过程。", en: "The TCP procedure that synchronises sequence numbers and confirms both sides are ready before data flows.", ms: "Prosedur TCP yang menyegerakkan nombor jujukan dan mengesahkan kedua-dua pihak bersedia sebelum data mengalir." }
        },
        {
          en: "Retransmission",
          zh: "重传",
          ms: "Penghantaran Semula",
          def: { zh: "TCP 在数据丢失或超时后重新发送数据的机制。", en: "The TCP mechanism that resends data after a loss or a timeout.", ms: "Mekanisme TCP yang menghantar semula data selepas kehilangan atau tamat masa." }
        }
      ],
      diagrams: [
        {
          type: "compare",
          title: { zh: "TCP 与 UDP 的对比", en: "TCP versus UDP", ms: "TCP berbanding UDP" },
          cols: [
            {
              head: { zh: "TCP", en: "TCP", ms: "TCP" },
              items: [
                {
                  label: { zh: "面向连接：先握手建立连接", en: "Connection oriented: handshake first", ms: "Berorientasikan sambungan: jabat tangan dahulu" }
                },
                {
                  label: { zh: "可靠且有序：序号、累积确认、重传", en: "Reliable and ordered: sequence numbers, cumulative ACK, retransmission", ms: "Boleh dipercayai dan tersusun: nombor jujukan, ACK kumulatif, penghantaran semula" }
                },
                {
                  label: { zh: "内建流量控制与拥塞控制，开销较大", en: "Built-in flow and congestion control, higher overhead", ms: "Kawalan aliran dan kesesakan terbina dalam, overhead lebih tinggi" }
                },
                {
                  label: { zh: "面向字节流，应用看不到报文边界", en: "Byte-stream oriented, applications see no message boundaries", ms: "Berorientasikan aliran bait, aplikasi tidak melihat sempadan mesej" }
                }
              ]
            },
            {
              head: { zh: "UDP", en: "UDP", ms: "UDP" },
              items: [
                {
                  label: { zh: "无连接：不需要握手", en: "Connectionless: no handshake", ms: "Tanpa sambungan: tiada jabat tangan" }
                },
                {
                  label: { zh: "尽力而为：不保证送达、顺序与去重", en: "Best effort: no delivery, order or duplicate guarantee", ms: "Usaha terbaik: tiada jaminan penghantaran, urutan atau pertindihan" }
                },
                {
                  label: { zh: "开销小、速度快，校验和只能检测错误", en: "Low overhead, faster; checksum only detects errors", ms: "Overhead rendah, lebih pantas; jumlah semak hanya mengesan ralat" }
                },
                {
                  label: { zh: "面向报文，保留报文边界", en: "Message oriented, preserves message boundaries", ms: "Berorientasikan mesej, mengekalkan sempadan mesej" }
                }
              ]
            }
          ]
        },
        {
          type: "flow",
          dir: "h",
          title: { zh: "传输层在发送与接收过程中的作用", en: "Role of the Transport Layer on the Sending and Receiving Side", ms: "Peranan Lapisan Pengangkutan di Sisi Penghantar dan Penerima" },
          steps: [
            {
              label: { zh: "应用报文", en: "Application message", ms: "Mesej aplikasi" },
              note: { zh: "来自浏览器、邮件等应用的数据", en: "Data from a browser, mail client or other application", ms: "Data daripada pelayar, klien mel atau aplikasi lain" }
            },
            {
              label: { zh: "加上 TCP 或 UDP 首部", en: "Add TCP or UDP header", ms: "Tambah pengepala TCP atau UDP" },
              note: { zh: "首部包含源端口与目的端口", en: "The header carries the source and destination ports", ms: "Pengepala membawa port sumber dan port destinasi" }
            },
            {
              label: { zh: "交给网络层 IP", en: "Pass to IP at the network layer", ms: "Serah kepada IP di lapisan rangkaian" },
              note: { zh: "IP 地址标识主机，负责跨网络传送", en: "The IP address identifies the host and carries the packet across networks", ms: "Alamat IP mengenal pasti hos dan membawa paket merentas rangkaian" }
            },
            {
              label: { zh: "接收方传输层", en: "Transport layer at the receiver", ms: "Lapisan pengangkutan di penerima" },
              note: { zh: "按目的端口号找到对应的应用进程", en: "Uses the destination port to find the right application process", ms: "Menggunakan port destinasi untuk mencari proses aplikasi yang betul" }
            },
            {
              label: { zh: "正确的应用程序", en: "Correct application", ms: "Aplikasi yang betul" },
              note: { zh: "数据最终送达目的主机内的目标应用", en: "Data finally reaches the target application inside the destination host", ms: "Data akhirnya sampai ke aplikasi sasaran dalam hos destinasi" }
            }
          ],
          caption: { zh: "IP 地址定位主机，端口号定位主机内的进程，两者配合完成进程到进程的交付", en: "The IP address locates the host and the port number locates the process inside it, together achieving process-to-process delivery", ms: "Alamat IP mencari hos dan nombor port mencari proses di dalamnya, bersama-sama mencapai penghantaran proses ke proses" }
        }
      ],
      exam: [
        { zh: "端口号是必考内容：16 位、范围 0 到 65535，IP 地址定位主机而端口号定位进程，目的端口标识服务、源端口标识客户应用，TCP 与 UDP 各有独立的端口号空间。", en: "Port numbers are essential: 16 bits with values from 0 to 65535, the IP address locates the host while the port locates the process, the destination port identifies the service and the source port the client application, and TCP and UDP have separate port spaces.", ms: "Nombor port ialah kandungan wajib: 16 bit dengan nilai 0 hingga 65535, alamat IP mencari hos manakala port mencari proses, port destinasi mengenal pasti perkhidmatan dan port sumber aplikasi pelanggan, serta TCP dan UDP mempunyai ruang port yang berasingan." },
        { zh: "TCP 与 UDP 的对比是经典题：TCP 面向连接、可靠、有序、有流量控制与拥塞控制；UDP 无连接、尽力而为、保留报文边界、开销小。", en: "TCP versus UDP is a classic question: TCP is connection oriented, reliable, ordered and has flow and congestion control, while UDP is connectionless, best effort, message oriented and has low overhead.", ms: "TCP berbanding UDP ialah soalan klasik: TCP berorientasikan sambungan, boleh dipercayai, tersusun serta mempunyai kawalan aliran dan kesesakan, manakala UDP tanpa sambungan, usaha terbaik, berorientasikan mesej dan beroverhead rendah." },
        { zh: "序号与确认号计算常考：TCP 对字节编号且确认号是累积的，例如从序号 1001 开始发送 500 字节，接收方回 ACK 1501 表示 1001 到 1500 全部收到，下一个期望的字节是 1501。", en: "Sequence and acknowledgement calculations are common: TCP numbers bytes and acknowledgements are cumulative, so sending 500 bytes from sequence number 1001 draws ACK 1501, meaning bytes 1001 to 1500 arrived and the next expected byte is 1501.", ms: "Pengiraan nombor jujukan dan pengakuan sering keluar: TCP menomborkan bait dan pengakuan bersifat kumulatif, jadi menghantar 500 bait dari nombor jujukan 1001 menerima ACK 1501 yang bermaksud bait 1001 hingga 1500 telah tiba dan bait seterusnya yang dijangka ialah 1501." },
        { zh: "易错点：以为 IP 地址能定位应用进程（它只定位主机）；以为 UDP 的校验和能纠正错误（它只能检测，不会重传）；把流量控制与拥塞控制混为一谈（前者保护接收方，后者保护网络）。", en: "Common mistakes: thinking an IP address can locate an application process when it only locates the host; thinking the UDP checksum corrects errors when it only detects them and never retransmits; and mixing up flow control, which protects the receiver, with congestion control, which protects the network.", ms: "Kesilapan biasa: menyangka alamat IP boleh mencari proses aplikasi sedangkan ia hanya mencari hos; menyangka jumlah semak UDP membetulkan ralat sedangkan ia hanya mengesan dan tidak menghantar semula; dan mengelirukan kawalan aliran yang melindungi penerima dengan kawalan kesesakan yang melindungi rangkaian." }
      ],
      mnemonic: { zh: "IP 找主机，端口找进程；TCP 可靠有序，UDP 快而不保证。", en: "IP finds the host, the port finds the process; TCP is reliable and ordered, UDP is fast but makes no promises.", ms: "IP mencari hos, port mencari proses; TCP boleh dipercayai dan tersusun, UDP pantas tetapi tanpa jaminan." }
    },
    {
      id: "dcn-11",
      num: 11,
      title: { zh: "应用层", en: "Application Layer", ms: "Lapisan Aplikasi" },
      file: "dcn/CHAPTER 11 2627 1.pdf",
      pages: 25,
      summary: { zh: "应用层是 OSI 模型和 TCP/IP 模型的最上层，把用户与网络服务连接起来，支撑网页浏览、电子邮件和文件传送等日常应用。本章先介绍万维网的基本概念——网页、网站与超链接，以及 HTTP/HTTPS 的请求响应模型和 URL 的方案、主机、路径三部分。随后逐一讲解文件传送协议 FTP 与 TFTP、电子邮件系统及其 SMTP、POP3/IMAP 协议，最后说明 DNS 如何把域名解析成 IP 地址。这些应用层协议都要依赖 TCP 或 UDP 提供的传输服务。", en: "The Application Layer is the topmost layer of the OSI and TCP/IP models and connects users with network services, powering everyday applications such as web browsing, email and file transfer. The chapter first introduces the basic concepts of the World Wide Web, namely web pages, websites and hyperlinks, together with the HTTP/HTTPS request-response model and the scheme, host and path parts of a URL. It then explains the file transfer protocols FTP and TFTP, the electronic mail system with SMTP and POP3 or IMAP, and finally how DNS translates domain names into IP addresses. All of these application protocols rely on the transport services provided by TCP or UDP.", ms: "Lapisan Aplikasi ialah lapisan teratas model OSI dan TCP/IP yang menghubungkan pengguna dengan perkhidmatan rangkaian, menyokong aplikasi harian seperti pelayaran web, e-mel dan pemindahan fail. Bab ini memperkenalkan konsep asas World Wide Web iaitu halaman web, laman web dan hiperpautan, bersama model soal-jawab HTTP/HTTPS dan tiga bahagian URL iaitu skema, hos dan laluan. Seterusnya diterangkan protokol pemindahan fail FTP dan TFTP, sistem e-mel dengan SMTP serta POP3 atau IMAP, dan akhir sekali cara DNS menterjemah nama domain kepada alamat IP. Semua protokol aplikasi ini bergantung pada perkhidmatan pengangkutan yang disediakan TCP atau UDP." },
      points: [
        { zh: "应用层是 OSI 模型的最上层，把用户与网络服务连接起来，支撑电子邮件、网页浏览和文件传送等必不可少的应用。", en: "The Application Layer is the topmost layer of the OSI model, connecting users with network services and powering essential applications such as email, web browsing and file transfer.", ms: "Lapisan Aplikasi ialah lapisan teratas model OSI yang menghubungkan pengguna dengan perkhidmatan rangkaian dan menyokong aplikasi penting seperti e-mel, pelayaran web dan pemindahan fail." },
        { zh: "万维网是存储在 Web 服务器上、相互链接的页面集合；网页是浏览器可以显示的一个文档或资源，网站是一组相关的页面和资源，超链接是从一个页面指向另一个资源的链接。", en: "The Web is a collection of linked pages stored on web servers; a web page is one document or resource a browser can display, a website is a related group of pages and resources, and a hyperlink is a link from one page to another resource.", ms: "Web ialah koleksi halaman berpaut yang disimpan pada pelayan web; halaman web ialah satu dokumen atau sumber yang boleh dipaparkan pelayar, laman web ialah kumpulan halaman dan sumber yang berkaitan, dan hiperpautan ialah pautan daripada satu halaman kepada sumber lain." },
        { zh: "Web 使用 HTTP 或 HTTPS 在客户端（浏览器）与服务器之间通信，其中 HTTPS 表示浏览器使用带 TLS 的 HTTP，因此连接受到保护。 HTTP 工作在应用层并使用请求/响应模型：浏览器发出请求，服务器返回响应，它定义了浏览器与 Web 服务器如何互相通信以传送网页。", en: "The Web uses HTTP or HTTPS for communication between clients, that is browsers, and servers, where HTTPS means the browser uses HTTP with TLS so the connection is protected. HTTP operates at the application layer and uses a request-response model in which the browser sends a request and the server responds; it defines how web browsers and web servers communicate with each other to transfer web pages.", ms: "Web menggunakan HTTP atau HTTPS untuk komunikasi antara pelanggan iaitu pelayar dengan pelayan, dan HTTPS bermakna pelayar menggunakan HTTP bersama TLS supaya sambungan dilindungi. HTTP beroperasi pada lapisan aplikasi dan menggunakan model soal-jawab yang mana pelayar menghantar permintaan dan pelayan membalas; ia mentakrifkan cara pelayar web dan pelayan web berkomunikasi untuk memindahkan halaman web." },
        { zh: "URL 由三部分组成：方案（如 https 表示使用带 TLS 的 HTTP）、主机（如 www.example.com 是服务器名）和路径（如 /course/week15 是请求的资源）；DNS 先查出主机名对应的地址，HTTP 再请求该资源。", en: "A URL has three parts: the scheme, such as https meaning HTTP with TLS, the host, such as www.example.com as the server name, and the path, such as /course/week15 as the requested resource; DNS looks up the host name and HTTP then requests that resource.", ms: "URL mempunyai tiga bahagian: skema seperti https yang bermaksud HTTP bersama TLS, hos seperti www.example.com iaitu nama pelayan, dan laluan seperti /course/week15 iaitu sumber yang diminta; DNS mencari nama hos itu dan HTTP kemudian meminta sumber tersebut." },
        { zh: "FTP 是在机器与 FTP 服务器之间双向传送文件的标准网络协议，属于客户机/服务器系统；它使用 TCP 保证可靠传输，控制连接用端口 21、数据连接用端口 20，需要用户名和密码认证，并保持控制与数据两条独立连接。", en: "FTP is the standard network protocol for moving files between a machine and an FTP server in both directions and is a type of client-server system; it uses TCP for reliable transmission with port 21 for control and port 20 for data, requires username and password authentication and maintains separate control and data connections.", ms: "FTP ialah protokol rangkaian piawai untuk memindahkan fail antara mesin dengan pelayan FTP dalam kedua-dua arah dan merupakan sejenis sistem pelanggan-pelayan; ia menggunakan TCP untuk penghantaran boleh dipercayai dengan port 21 untuk kawalan dan port 20 untuk data, memerlukan pengesahan nama pengguna dan kata laluan serta mengekalkan sambungan kawalan dan data yang berasingan." },
        { zh: "TFTP 是简单、步调一致的 FTP，允许客户端从远程主机取文件或把文件放到远程主机；它使用 UDP 端口 69 做无连接传输，没有认证机制，命令很少，速度快但不可靠，常用于无盘工作站启动或传送配置文件。", en: "TFTP is a simple, lockstep FTP that lets a client get or put a file onto a remote host; it uses UDP port 69 for connectionless transmission, has no authentication mechanism, offers very few commands and is fast but unreliable, which suits booting diskless workstations or transferring configuration files.", ms: "TFTP ialah FTP yang mudah dan bertindak selangkah demi selangkah yang membolehkan klien mengambil atau meletakkan fail pada hos jauh; ia menggunakan UDP port 69 untuk penghantaran tanpa sambungan, tiada mekanisme pengesahan, mempunyai arahan yang sangat terhad dan pantas tetapi tidak boleh dipercayai, sesuai untuk memulakan stesen kerja tanpa cakera atau memindahkan fail konfigurasi." },
        { zh: "电子邮件是最流行的网络服务之一，用户可以给个人或群组发送消息、备忘录和报告；用户代理（邮件阅读器）提供撰写、阅读和管理邮件的界面，邮件服务器负责存储并转发邮件，发送使用 SMTP，接收使用 POP3 或 IMAP。", en: "Electronic mail is one of the most popular network services and lets users transmit messages, memos and reports to individuals or groups; the user agent or mail reader is the interface for composing, reading and managing mail, mail servers store and forward messages, SMTP is used for sending, and POP3 or IMAP for retrieving.", ms: "E-mel ialah salah satu perkhidmatan rangkaian paling popular yang membolehkan pengguna menghantar mesej, memo dan laporan kepada individu atau kumpulan; ejen pengguna atau pembaca mel ialah antara muka untuk menulis, membaca dan mengurus mel, pelayan mel menyimpan dan meneruskan mesej, SMTP digunakan untuk menghantar, dan POP3 atau IMAP untuk mengambil mel." },
        { zh: "SMTP 是用于在互联网上发送电子邮件的应用层协议，标准机制是使用 TCP 端口 25 在服务器之间中继邮件；SMTP 邮件地址由本地部分（用户名）和域名两部分组成，中间用 @ 符号分隔，例如 zasnell@gmail.com。", en: "SMTP is an application layer protocol used for sending email over the Internet and is the standard mechanism for electronic mail transmission using TCP port 25 for server to server relay; an SMTP email address consists of a local part, the username, and a domain name separated by the @ symbol, for example zasnell@gmail.com.", ms: "SMTP ialah protokol lapisan aplikasi untuk menghantar e-mel melalui Internet dan merupakan mekanisme piawai penghantaran mel menggunakan TCP port 25 bagi penyampaian antara pelayan; alamat e-mel SMTP terdiri daripada bahagian tempatan iaitu nama pengguna dan nama domain yang dipisahkan simbol @, contohnya zasnell@gmail.com." },
        { zh: "DNS 把人类友好的域名转换成 IP 地址，它以分布式数据库的形式分布在多台服务器上，并使用端口 53 上的 UDP 或 TCP 进行通信。", en: "DNS translates human-friendly domain names into IP addresses, works as a distributed database across many servers and communicates using UDP or TCP on port 53.", ms: "DNS menterjemah nama domain yang mesra pengguna kepada alamat IP, berfungsi sebagai pangkalan data teragih merentas banyak pelayan dan berkomunikasi menggunakan UDP atau TCP pada port 53." },
        { zh: "这些应用层协议都依靠传输层服务：HTTP、FTP 和 SMTP 使用 TCP 以获得可靠传输，TFTP 与大多数 DNS 查询使用 UDP 以降低开销。", en: "All these application protocols rely on transport services: HTTP, FTP and SMTP use TCP for reliable transmission, while TFTP and most DNS queries use UDP to reduce overhead.", ms: "Semua protokol aplikasi ini bergantung pada perkhidmatan pengangkutan: HTTP, FTP dan SMTP menggunakan TCP untuk penghantaran boleh dipercayai, manakala TFTP dan kebanyakan pertanyaan DNS menggunakan UDP untuk mengurangkan overhead." }
      ],
      terms: [
        {
          en: "Application Layer",
          zh: "应用层",
          ms: "Lapisan Aplikasi",
          def: { zh: "OSI 与 TCP/IP 的最上层，把用户应用连接到网络服务。", en: "The topmost OSI and TCP/IP layer that connects user applications to network services.", ms: "Lapisan teratas OSI dan TCP/IP yang menghubungkan aplikasi pengguna dengan perkhidmatan rangkaian." }
        },
        {
          en: "World Wide Web (WWW)",
          zh: "万维网",
          ms: "World Wide Web (WWW)",
          def: { zh: "存储在 Web 服务器上、通过超链接互相连接的页面集合。", en: "A collection of linked pages stored on web servers and joined by hyperlinks.", ms: "Koleksi halaman berpaut yang disimpan pada pelayan web dan dihubungkan oleh hiperpautan." }
        },
        {
          en: "Web Page",
          zh: "网页",
          ms: "Halaman Web",
          def: { zh: "浏览器可以显示的一个文档或资源。", en: "One document or resource that a browser can display.", ms: "Satu dokumen atau sumber yang boleh dipaparkan oleh pelayar." }
        },
        {
          en: "Website",
          zh: "网站",
          ms: "Laman Web",
          def: { zh: "一组相关的网页和资源。", en: "A related group of pages and resources.", ms: "Kumpulan halaman dan sumber yang berkaitan." }
        },
        {
          en: "Hyperlink",
          zh: "超链接",
          ms: "Hiperpautan",
          def: { zh: "从一个页面指向另一个资源的链接。", en: "A link from one page to another resource.", ms: "Pautan daripada satu halaman kepada sumber yang lain." }
        },
        {
          en: "URL",
          zh: "统一资源定位符",
          ms: "URL (Penunjuk Sumber Seragam)",
          def: { zh: "标识网络资源的地址，由方案、主机和路径三部分组成。", en: "The address that identifies a web resource, made of the scheme, the host and the path.", ms: "Alamat yang mengenal pasti sumber web, terdiri daripada skema, hos dan laluan." }
        },
        {
          en: "HTTP",
          zh: "超文本传输协议",
          ms: "HTTP (Protokol Pemindahan Hiperteks)",
          def: { zh: "定义浏览器与服务器如何通信以传送网页的应用层协议，采用请求/响应模型。", en: "The application layer protocol that defines how browsers and servers communicate to transfer web pages, using a request-response model.", ms: "Protokol lapisan aplikasi yang mentakrifkan cara pelayar dan pelayan berkomunikasi untuk memindahkan halaman web, menggunakan model soal-jawab." }
        },
        {
          en: "HTTPS",
          zh: "安全超文本传输协议",
          ms: "HTTPS (HTTP Selamat)",
          def: { zh: "使用 TLS 保护的 HTTP，使浏览器与服务器之间的连接加密。", en: "HTTP protected by TLS, which encrypts the connection between browser and server.", ms: "HTTP yang dilindungi TLS, menyulitkan sambungan antara pelayar dan pelayan." }
        },
        {
          en: "FTP",
          zh: "文件传输协议",
          ms: "FTP (Protokol Pemindahan Fail)",
          def: { zh: "在机器与 FTP 服务器之间双向传送文件的标准协议，用 TCP 端口 21 控制、端口 20 传数据。", en: "The standard protocol for bidirectional file transfer between a machine and an FTP server, using TCP port 21 for control and port 20 for data.", ms: "Protokol piawai untuk pemindahan fail dua hala antara mesin dengan pelayan FTP, menggunakan TCP port 21 untuk kawalan dan port 20 untuk data." }
        },
        {
          en: "TFTP",
          zh: "简单文件传输协议",
          ms: "TFTP (Protokol Pemindahan Fail Ringkas)",
          def: { zh: "用 UDP 端口 69 无连接传送小文件的简单协议，没有认证，速度快但不可靠。", en: "A simple protocol that transfers small files connectionlessly over UDP port 69, with no authentication, fast but unreliable.", ms: "Protokol mudah yang memindahkan fail kecil tanpa sambungan melalui UDP port 69, tanpa pengesahan, pantas tetapi tidak boleh dipercayai." }
        },
        {
          en: "SMTP",
          zh: "简单邮件传输协议",
          ms: "SMTP (Protokol Pemindahan Mel Ringkas)",
          def: { zh: "发送电子邮件的应用层协议，使用 TCP 端口 25 在服务器之间中继邮件。", en: "The application layer protocol for sending email, using TCP port 25 for server to server relay.", ms: "Protokol lapisan aplikasi untuk menghantar e-mel, menggunakan TCP port 25 bagi penyampaian antara pelayan." }
        },
        {
          en: "POP3 / IMAP",
          zh: "邮局协议 / 因特网消息访问协议",
          ms: "POP3 / IMAP",
          def: { zh: "邮件客户端用来从邮件服务器读取和接收邮件的协议。", en: "Protocols a mail client uses to access and retrieve received email from a mail server.", ms: "Protokol yang digunakan klien mel untuk mengakses dan mengambil e-mel yang diterima daripada pelayan mel." }
        },
        {
          en: "DNS",
          zh: "域名系统",
          ms: "DNS (Sistem Nama Domain)",
          def: { zh: "把域名翻译成 IP 地址的分布式数据库系统，使用端口 53 的 UDP 或 TCP。", en: "A distributed database system that translates domain names into IP addresses, using UDP or TCP on port 53.", ms: "Sistem pangkalan data teragih yang menterjemah nama domain kepada alamat IP, menggunakan UDP atau TCP pada port 53." }
        },
        {
          en: "User Agent",
          zh: "用户代理",
          ms: "Ejen Pengguna",
          def: { zh: "电子邮件系统中用于撰写、阅读和管理邮件的界面，也叫邮件阅读器。", en: "The interface in an email system for composing, reading and managing mail, also called the mail reader.", ms: "Antara muka dalam sistem e-mel untuk menulis, membaca dan mengurus mel, juga dipanggil pembaca mel." }
        },
        {
          en: "Mail Server",
          zh: "邮件服务器",
          ms: "Pelayan Mel",
          def: { zh: "负责存储并转发电子邮件消息的服务器。", en: "A server that stores and forwards email messages.", ms: "Pelayan yang menyimpan dan meneruskan mesej e-mel." }
        }
      ],
      diagrams: [
        {
          type: "matrix",
          title: { zh: "常用应用层协议一览", en: "Common Application Layer Protocols", ms: "Protokol Lapisan Aplikasi yang Biasa" },
          cols: [
            { zh: "传输层与端口", en: "Transport and port", ms: "Pengangkutan dan port" },
            { zh: "功能", en: "Function", ms: "Fungsi" },
            { zh: "主要特点", en: "Key features", ms: "Ciri utama" }
          ],
          rows: [
            {
              head: { zh: "HTTP / HTTPS", en: "HTTP / HTTPS", ms: "HTTP / HTTPS" },
              cells: [
                { zh: "TCP（HTTPS 加 TLS）", en: "TCP, with TLS for HTTPS", ms: "TCP, dengan TLS bagi HTTPS" },
                { zh: "传送并显示网页", en: "Transfers and displays web pages", ms: "Memindahkan dan memaparkan halaman web" },
                { zh: "请求/响应模型，HTTPS 加密连接", en: "Request-response model, HTTPS encrypts the connection", ms: "Model soal-jawab, HTTPS menyulitkan sambungan" }
              ]
            },
            {
              head: { zh: "FTP", en: "FTP", ms: "FTP" },
              cells: [
                { zh: "TCP，控制 21、数据 20", en: "TCP, control 21 and data 20", ms: "TCP, kawalan 21 dan data 20" },
                { zh: "在客户端与服务器之间双向传送文件", en: "Bidirectional file transfer between client and server", ms: "Pemindahan fail dua hala antara klien dan pelayan" },
                { zh: "需要认证，控制与数据两条连接", en: "Requires authentication, separate control and data connections", ms: "Memerlukan pengesahan, sambungan kawalan dan data berasingan" }
              ]
            },
            {
              head: { zh: "TFTP", en: "TFTP", ms: "TFTP" },
              cells: [
                { zh: "UDP 69", en: "UDP 69", ms: "UDP 69" },
                { zh: "简单地上传或下载小文件", en: "Simple upload or download of small files", ms: "Muat naik atau muat turun fail kecil secara mudah" },
                { zh: "无认证、命令少、快但不可靠", en: "No authentication, few commands, fast but unreliable", ms: "Tiada pengesahan, arahan sedikit, pantas tetapi tidak boleh dipercayai" }
              ]
            },
            {
              head: { zh: "SMTP", en: "SMTP", ms: "SMTP" },
              cells: [
                { zh: "TCP 25", en: "TCP 25", ms: "TCP 25" },
                { zh: "发送电子邮件，在服务器之间中继", en: "Sends email and relays between servers", ms: "Menghantar e-mel dan menyampaikan antara pelayan" },
                { zh: "地址 = 本地部分 + @ + 域名", en: "Address = local part + @ + domain", ms: "Alamat = bahagian tempatan + @ + domain" }
              ]
            },
            {
              head: { zh: "POP3 / IMAP", en: "POP3 / IMAP", ms: "POP3 / IMAP" },
              cells: [
                { zh: "TCP", en: "TCP", ms: "TCP" },
                { zh: "从邮件服务器读取已收到的邮件", en: "Retrieves received mail from the mail server", ms: "Mengambil mel yang diterima daripada pelayan mel" },
                { zh: "与 SMTP 分工：一个收、一个发", en: "Complements SMTP: one retrieves, one sends", ms: "Melengkapi SMTP: satu mengambil, satu menghantar" }
              ]
            },
            {
              head: { zh: "DNS", en: "DNS", ms: "DNS" },
              cells: [
                { zh: "UDP / TCP 53", en: "UDP / TCP 53", ms: "UDP / TCP 53" },
                { zh: "把域名解析成 IP 地址", en: "Resolves a domain name into an IP address", ms: "Menyelesaikan nama domain kepada alamat IP" },
                { zh: "分布式数据库，多台服务器协作", en: "Distributed database across many servers", ms: "Pangkalan data teragih merentas banyak pelayan" }
              ]
            }
          ],
          legend: [
            { zh: "HTTP、FTP、SMTP 依靠 TCP 获得可靠传输，TFTP 与多数 DNS 查询使用 UDP", en: "HTTP, FTP and SMTP rely on TCP for reliability, while TFTP and most DNS queries use UDP", ms: "HTTP, FTP dan SMTP bergantung pada TCP untuk kebolehpercayaan, manakala TFTP dan kebanyakan pertanyaan DNS menggunakan UDP" }
          ]
        },
        {
          type: "flow",
          dir: "h",
          title: { zh: "从输入网址到看到网页的过程", en: "From Typing a URL to Seeing a Web Page", ms: "Daripada Menulis URL hingga Melihat Halaman Web" },
          steps: [
            {
              label: { zh: "输入 URL", en: "Type the URL", ms: "Taip URL" },
              note: { zh: "https://www.example.com/course/week15", en: "https://www.example.com/course/week15", ms: "https://www.example.com/course/week15" }
            },
            {
              label: { zh: "DNS 解析主机名", en: "DNS resolves the host name", ms: "DNS menyelesaikan nama hos" },
              note: { zh: "把 www.example.com 转成 IP 地址", en: "Turns www.example.com into an IP address", ms: "Menukar www.example.com kepada alamat IP" }
            },
            {
              label: { zh: "浏览器发送 HTTP 请求", en: "Browser sends an HTTP request", ms: "Pelayar menghantar permintaan HTTP" },
              note: { zh: "请求路径 /course/week15", en: "Requests the path /course/week15", ms: "Meminta laluan /course/week15" }
            },
            {
              label: { zh: "服务器返回响应", en: "Server returns a response", ms: "Pelayan membalas" },
              note: { zh: "HTTPS 时该响应经 TLS 加密", en: "With HTTPS the response is protected by TLS", ms: "Dengan HTTPS balasan dilindungi TLS" }
            },
            {
              label: { zh: "浏览器显示网页", en: "Browser displays the page", ms: "Pelayar memaparkan halaman" },
              note: { zh: "用户看到请求的资源", en: "The user sees the requested resource", ms: "Pengguna melihat sumber yang diminta" }
            }
          ],
          caption: { zh: "DNS 先找到服务器，HTTP 再请求资源，两者都是应用层协议", en: "DNS finds the server first and HTTP then requests the resource; both are application layer protocols", ms: "DNS mencari pelayan dahulu dan HTTP kemudian meminta sumber; kedua-duanya protokol lapisan aplikasi" }
        }
      ],
      exam: [
        { zh: "协议与端口的配对几乎必考：FTP 用 TCP 端口 21 控制、端口 20 传数据，TFTP 用 UDP 端口 69，SMTP 用 TCP 端口 25，DNS 用端口 53 的 UDP 或 TCP，HTTP/HTTPS 在应用层使用 TCP。", en: "Matching protocols to ports is almost certain: FTP uses TCP port 21 for control and 20 for data, TFTP uses UDP port 69, SMTP uses TCP port 25, DNS uses UDP or TCP port 53, and HTTP/HTTPS use TCP at the application layer.", ms: "Memadankan protokol dengan port hampir pasti keluar: FTP menggunakan TCP port 21 untuk kawalan dan 20 untuk data, TFTP menggunakan UDP port 69, SMTP menggunakan TCP port 25, DNS menggunakan UDP atau TCP port 53, dan HTTP/HTTPS menggunakan TCP pada lapisan aplikasi." },
        { zh: "FTP 与 TFTP 的对比是常考题：FTP 可靠、需要认证、使用控制与数据两条连接；TFTP 简单、无认证、使用 UDP、不可靠，只适合小文件或配置文件。", en: "FTP versus TFTP is a frequent question: FTP is reliable, requires authentication and uses separate control and data connections, while TFTP is simple, has no authentication, uses UDP, is unreliable and suits only small or configuration files.", ms: "FTP berbanding TFTP sering ditanya: FTP boleh dipercayai, memerlukan pengesahan dan menggunakan sambungan kawalan serta data yang berasingan, manakala TFTP mudah, tanpa pengesahan, menggunakan UDP, tidak boleh dipercayai dan hanya sesuai untuk fail kecil atau fail konfigurasi." },
        { zh: "HTTP 与 HTTPS 的区别以及 URL 结构常考：HTTPS 是使用 TLS 保护的 HTTP；URL 由方案、主机和路径组成，DNS 解析主机名之后 HTTP 才请求路径所指的资源。", en: "The difference between HTTP and HTTPS and the structure of a URL are frequently examined: HTTPS is HTTP protected by TLS, and a URL consists of scheme, host and path, with DNS resolving the host name before HTTP requests the resource in the path.", ms: "Perbezaan HTTP dengan HTTPS dan struktur URL sering diuji: HTTPS ialah HTTP yang dilindungi TLS, dan URL terdiri daripada skema, hos dan laluan, dengan DNS menyelesaikan nama hos sebelum HTTP meminta sumber pada laluan itu." },
        { zh: "易错点：把 POP3/IMAP 与 SMTP 的用途弄反（SMTP 用于发送，POP3/IMAP 用于接收）；说错邮件地址的两部分（本地部分即用户名 + 域名，用 @ 分隔）；忘记 DNS 解析的是主机名而不是路径。", en: "Common mistakes: reversing the roles of POP3/IMAP and SMTP, since SMTP sends while POP3 and IMAP retrieve; misstating the two parts of an email address, which are the local part or username and the domain separated by @; and forgetting that DNS resolves the host name rather than the path.", ms: "Kesilapan biasa: menyongsangkan peranan POP3/IMAP dengan SMTP kerana SMTP menghantar manakala POP3 dan IMAP mengambil; salah menyatakan dua bahagian alamat e-mel iaitu bahagian tempatan atau nama pengguna dan domain yang dipisahkan @; dan terlupa DNS menyelesaikan nama hos bukan laluan." }
      ],
      mnemonic: { zh: "发信 SMTP 25、收信 POP3/IMAP、传文件 FTP 20/21 与 TFTP 69、查名字 DNS 53、看网页 HTTP/HTTPS。", en: "Send mail with SMTP 25, retrieve with POP3 or IMAP, move files with FTP 20/21 and TFTP 69, look up names with DNS 53 and browse with HTTP/HTTPS.", ms: "Hantar mel dengan SMTP 25, ambil dengan POP3 atau IMAP, pindah fail dengan FTP 20/21 dan TFTP 69, cari nama dengan DNS 53 dan layari dengan HTTP/HTTPS." }
    }
  ]
};
