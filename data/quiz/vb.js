window.CN_QUIZ = window.CN_QUIZ || {};
window.CN_QUIZ["vb"] = {
  "id": "vb",
  "chapters": {
    "vb-01": [
      {
        "id": "vb-01-q01",
        "type": "mcq",
        "q": {
          "zh": "讲义把编写 VB 应用程序分为三步。下列哪一项是这三步的正确顺序？",
          "en": "The lecture presents writing a VB application as a three-step process. Which option gives the correct order?",
          "ms": "Kuliah membentangkan penulisan aplikasi VB sebagai proses tiga langkah. Pilihan manakah memberikan urutan yang betul?"
        },
        "opts": [
          {
            "zh": "先设置属性，再设计用户界面，最后编写代码",
            "en": "Set the properties, then design the user interface, then write the code",
            "ms": "Tetapkan sifat, kemudian reka bentuk antara muka pengguna, kemudian tulis kod"
          },
          {
            "zh": "先设计用户界面，再设置属性，最后编写代码",
            "en": "Design the user interface, then set the properties, then write the code",
            "ms": "Reka bentuk antara muka pengguna, kemudian tetapkan sifat, kemudian tulis kod"
          },
          {
            "zh": "先编写代码，再设计用户界面，最后设置属性",
            "en": "Write the code, then design the user interface, then set the properties",
            "ms": "Tulis kod, kemudian reka bentuk antara muka pengguna, kemudian tetapkan sifat"
          },
          {
            "zh": "先设计用户界面，再编写代码，最后设置属性",
            "en": "Design the user interface, then write the code, then set the properties",
            "ms": "Reka bentuk antara muka pengguna, kemudian tulis kod, kemudian tetapkan sifat"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义的三步是：建立用户界面、定义属性、创建代码，规划与编程两个阶段都按这个顺序走。先有控件才能写引用控件的事件过程，先设好名称和初始值代码才有依据，所以 A、C、D 都把属性与代码或界面与代码的先后颠倒了。",
          "en": "The three steps are: set up the user interface, define the properties, and then create the code, and both the planning and the programming pass follow that order. Controls must exist before event procedures can refer to them, and properties should be set before coding so the code can rely on the names and initial values; A, C and D each reverse part of this sequence.",
          "ms": "Tiga langkahnya ialah menyediakan antara muka pengguna, menetapkan sifat, dan kemudian menulis kod, dan kedua-dua peringkat perancangan serta pengaturcaraan mengikut urutan itu. Kawalan mesti wujud dahulu sebelum prosedur peristiwa boleh merujuknya, dan sifat ditetapkan sebelum menulis kod supaya kod boleh bergantung pada nama serta nilai awal; A, C dan D masing-masing menterbalikkan sebahagian urutan ini."
        },
        "diff": 1,
        "topic": {
          "zh": "编写 VB 项目的三步",
          "en": "Three steps of a VB project",
          "ms": "Tiga langkah projek VB"
        }
      },
      {
        "id": "vb-01-q02",
        "type": "mcq",
        "q": {
          "zh": "在窗体上放三个按钮。按讲义的对象模型，这三个按钮与 Button 类是什么关系？",
          "en": "You place three buttons on a form. According to the lecture's object model, what is the relationship between these buttons and the Button class?",
          "ms": "Anda meletakkan tiga butang pada satu borang. Menurut model objek dalam kuliah, apakah hubungan antara ketiga-tiga butang itu dengan kelas Button?"
        },
        "opts": [
          {
            "zh": "三个按钮是 Button 类的三个实例，类则是创建它们的模板",
            "en": "The three buttons are three instances of the Button class, and the class is the template used to create them",
            "ms": "Ketiga-tiga butang ialah tiga instans kelas Button, manakala kelas ialah templat untuk menciptanya"
          },
          {
            "zh": "三个按钮是三个不同的类，Button 只是它们共用的属性",
            "en": "The three buttons are three different classes, and Button is only a property they share",
            "ms": "Ketiga-tiga butang ialah tiga kelas berbeza, dan Button hanyalah sifat yang dikongsi"
          },
          {
            "zh": "Button 类是这三个按钮的实例，按钮则是类的模板",
            "en": "The Button class is an instance of the three buttons, and the buttons are the class templates",
            "ms": "Kelas Button ialah instans bagi ketiga-tiga butang, dan butang pula templat kelas"
          },
          {
            "zh": "三个按钮同属一个实例，只是属性取值不同",
            "en": "The three buttons belong to one single instance and differ only in property values",
            "ms": "Ketiga-tiga butang tergolong dalam satu instans yang sama dan berbeza hanya pada nilai sifat"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "类是创建对象的模板，类中定义了可用的全部属性、方法和事件；每创建一个新对象，它就是该类的一个实例，所以三个按钮是 Button 类的三个实例。B 把类与属性混为一谈，C 把类与对象的主从关系颠倒，D 否认了每个控件都是独立对象。",
          "en": "A class is the template used to create objects and contains the definition of all available properties, methods and events; each new object is an instance of that class, so the three buttons are three instances of Button. B confuses a class with a property, C reverses the class-object relationship, and D denies that each control is its own object.",
          "ms": "Kelas ialah templat untuk mencipta objek dan mengandungi takrif semua sifat, kaedah dan peristiwa yang tersedia; setiap objek baharu ialah instans kelas itu, jadi ketiga-tiga butang ialah tiga instans Button. B mengelirukan kelas dengan sifat, C menterbalikkan hubungan kelas-objek, dan D menafikan bahawa setiap kawalan ialah objek tersendiri."
        },
        "diff": 1,
        "topic": {
          "zh": "类与实例",
          "en": "Class and instance",
          "ms": "Kelas dan instans"
        }
      },
      {
        "id": "vb-01-q03",
        "type": "mcq",
        "q": {
          "zh": "按钮名为 CalculateButton，用户单击它。VB 会自动为该事件过程取什么名字？",
          "en": "A button is named CalculateButton and the user clicks it. What name does VB automatically give the event procedure?",
          "ms": "Sebuah butang dinamakan CalculateButton dan pengguna mengkliknya. Apakah nama yang diberikan oleh VB secara automatik kepada prosedur peristiwa itu?"
        },
        "opts": [
          {
            "zh": "CalculateButtonClick",
            "en": "CalculateButtonClick",
            "ms": "CalculateButtonClick"
          },
          {
            "zh": "Click_CalculateButton",
            "en": "Click_CalculateButton",
            "ms": "Click_CalculateButton"
          },
          {
            "zh": "CalculateButton_Click",
            "en": "CalculateButton_Click",
            "ms": "CalculateButton_Click"
          },
          {
            "zh": "CalculateButton.Click",
            "en": "CalculateButton.Click",
            "ms": "CalculateButton.Click"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义说事件过程的名字由“对象名 + 下划线 + 事件名”组成，所以是 CalculateButton_Click。B 把顺序写反，A 漏掉了下划线，D 用点号写成属性引用的样子，都不是合法的过程名格式。",
          "en": "The lecture says VB names an event procedure with the object name, an underscore and the name of the event, which gives CalculateButton_Click. B reverses the order, A omits the underscore, and D uses a dot as if referring to a property, so none of them is the procedure-name form.",
          "ms": "Kuliah menyatakan VB menamakan prosedur peristiwa dengan nama objek, satu garis bawah dan nama peristiwa, iaitu CalculateButton_Click. B menterbalikkan susunan, A tertinggal garis bawah, dan D menggunakan titik seperti rujukan sifat, jadi ketiga-tiganya bukan bentuk nama prosedur."
        },
        "diff": 2,
        "topic": {
          "zh": "事件过程的命名",
          "en": "Naming event procedures",
          "ms": "Penamaan prosedur peristiwa"
        }
      },
      {
        "id": "vb-01-q04",
        "type": "mcq",
        "q": {
          "zh": "一个 VB 项目在磁盘上会产生 .sln、.suo、.vb、.vbproj.user 等文件。按讲义，哪一类文件是唯一被直接打开的？",
          "en": "A VB project produces files such as .sln, .suo, .vb and .vbproj.user on disk. According to the lecture, which file is the only one opened directly?",
          "ms": "Satu projek VB menghasilkan fail seperti .sln, .suo, .vb dan .vbproj.user pada cakera. Menurut kuliah, fail manakah satu-satunya yang dibuka secara terus?"
        },
        "opts": [
          {
            "zh": "项目用户选项文件 .vbproj.user",
            "en": "The project user options file .vbproj.user",
            "ms": "Fail pilihan pengguna projek .vbproj.user"
          },
          {
            "zh": "解决方案用户选项文件 .suo",
            "en": "The solution user options file .suo",
            "ms": "Fail pilihan pengguna penyelesaian .suo"
          },
          {
            "zh": "窗体代码文件 .vb",
            "en": "The form code file .vb",
            "ms": "Fail kod borang .vb"
          },
          {
            "zh": "解决方案文件 .sln",
            "en": "The solution file .sln",
            "ms": "Fail penyelesaian .sln"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "讲义明确指出“唯一被直接打开的文件是解决方案文件”，一个解决方案对应一个项目 helloWorld.sln。.suo 和 .vbproj.user 保存用户选项、由 IDE 管理；.vb 是窗体代码，但要先通过解决方案打开项目才能使用。",
          "en": "The lecture states that the only file opened directly is the solution file, one solution file corresponding to one project such as HelloWorld.sln. The .suo and .vbproj.user files hold user options and are managed by the IDE, while the .vb file is form code that you reach by first opening the solution.",
          "ms": "Kuliah menyatakan bahawa satu-satunya fail yang dibuka secara terus ialah fail penyelesaian, dengan satu fail penyelesaian sepadan dengan satu projek seperti HelloWorld.sln. Fail .suo dan .vbproj.user menyimpan pilihan pengguna dan diuruskan oleh IDE, manakala fail .vb ialah kod borang yang dicapai setelah penyelesaian dibuka."
        },
        "diff": 2,
        "topic": {
          "zh": "VB 项目文件",
          "en": "VB project files",
          "ms": "Fail projek VB"
        }
      },
      {
        "id": "vb-01-q05",
        "type": "mcq",
        "q": {
          "zh": "程序编译时没有任何错误，运行时也不中断，但算出的总价比应有结果少了 1。这属于哪一类错误？",
          "en": "A program compiles with no errors and does not stop at run time, but the total it calculates is 1 less than it should be. Which kind of error is this?",
          "ms": "Sesuatu program dikompil tanpa sebarang ralat dan tidak terhenti semasa masa jalan, tetapi jumlah yang dikira kurang 1 daripada sepatutnya. Apakah jenis ralat ini?"
        },
        "opts": [
          {
            "zh": "语法错误：编辑器用蓝色波浪线标出",
            "en": "Syntax error: the editor marks it with a squiggly blue line",
            "ms": "Ralat sintaks: penyunting menandakannya dengan garis beralun biru"
          },
          {
            "zh": "逻辑错误：程序能运行，但结果不正确",
            "en": "Logic error: the project runs but produces an incorrect result",
            "ms": "Ralat logik: projek berjalan tetapi menghasilkan keputusan yang salah"
          },
          {
            "zh": "运行时错误：语句无法执行，例如除以零",
            "en": "Run-time error: a statement fails to execute, such as division by zero",
            "ms": "Ralat masa jalan: pernyataan gagal dilaksanakan, contohnya pembahagian dengan sifar"
          },
          {
            "zh": "编译错误：VB 语句无法转换成 MSIL",
            "en": "Compile error: the VB statements cannot be converted to MSIL",
            "ms": "Ralat kompil: pernyataan VB tidak dapat ditukar kepada MSIL"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义把逻辑错误定义为“程序能运行但产生错误结果”，它没有报错提示，所以最难发现，正合题意。语法错误会违反标点、格式或拼写规则并被编辑器标出；运行时错误是语句无法执行；编译错误会阻止 VB 语句转换成 MSIL，三者都会当场暴露，而不是悄悄算错一个数。",
          "en": "The lecture defines a logic error as a project that runs but produces incorrect results; it raises no message, which makes it the hardest to find and matches the case here. Syntax errors break punctuation, format or spelling and are flagged by the editor, run-time errors are statements that fail to execute, and compile errors stop the conversion to MSIL, so all three surface immediately instead of quietly producing a wrong total.",
          "ms": "Kuliah mentakrifkan ralat logik sebagai projek yang berjalan tetapi menghasilkan keputusan yang salah; tiada mesej ralat, jadi ia paling sukar dikesan dan sepadan dengan kes ini. Ralat sintaks melanggar peraturan tanda baca, format atau ejaan dan ditandakan oleh penyunting, ralat masa jalan ialah pernyataan yang gagal dilaksanakan, dan ralat kompil menghalang penukaran kepada MSIL, jadi ketiga-tiganya muncul serta-merta dan bukan menghasilkan jumlah yang salah secara senyap."
        },
        "diff": 2,
        "topic": {
          "zh": "三类错误",
          "en": "Three kinds of errors",
          "ms": "Tiga jenis ralat"
        }
      },
      {
        "id": "vb-01-q06",
        "type": "multi",
        "q": {
          "zh": "关于备注语句（Remark Statement，又称注释），下列哪些说法与讲义一致？（多选）",
          "en": "Which of the following statements about the remark statement (comment) agree with the lecture? (Select all that apply.)",
          "ms": "Pernyataan manakah tentang pernyataan ulasan (remark) yang selaras dengan kuliah? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "备注必须独占一行，绝不能写在可执行代码的右端",
            "en": "A remark must occupy a line by itself and can never be placed at the right end of executable code",
            "ms": "Ulasan mesti berada pada baris tersendiri dan tidak sekali-kali boleh diletakkan di hujung kanan kod yang boleh dilaksanakan"
          },
          {
            "zh": "编辑器会自动把备注文字显示为绿色",
            "en": "The editor automatically displays remark text in green",
            "ms": "Penyunting memaparkan teks ulasan dengan warna hijau secara automatik"
          },
          {
            "zh": "备注以单引号（'）开头",
            "en": "A remark begins with an apostrophe (')",
            "ms": "Ulasan dimulakan dengan apostrof (')"
          },
          {
            "zh": "备注不可执行，程序运行时会被忽略",
            "en": "A remark is non-executable and is ignored when the program runs",
            "ms": "Ulasan tidak boleh dilaksanakan dan diabaikan semasa program berjalan"
          }
        ],
        "answer": [
          1,
          2,
          3
        ],
        "explain": {
          "zh": "备注不可执行、在编辑器里显示为绿色、以单引号开头，这三点与讲义完全一致。A 错在“绝不能”：讲义明确允许备注写在可执行代码的右端，只是同样要求它是非执行文字。",
          "en": "Remarks are non-executable, appear in green in the editor and begin with an apostrophe, all of which match the lecture. A fails on the word never: the lecture explicitly allows a remark at the right end of a line of executable code, provided it remains non-executable text.",
          "ms": "Ulasan tidak boleh dilaksanakan, dipaparkan hijau dalam penyunting dan dimulakan dengan apostrof, semuanya selaras dengan kuliah. A salah pada perkataan tidak sekali-kali: kuliah jelas membenarkan ulasan diletakkan di hujung kanan baris kod yang boleh dilaksanakan asalkan ia kekal sebagai teks bukan laku."
        },
        "diff": 2,
        "topic": {
          "zh": "备注语句",
          "en": "Remark statement",
          "ms": "Pernyataan ulasan"
        }
      },
      {
        "id": "vb-01-q07",
        "type": "tf",
        "q": {
          "zh": "VB 中方法从不带括号，而属性总是带括号。",
          "en": "In VB, methods never have parentheses while properties always do.",
          "ms": "Dalam VB, kaedah tidak pernah mempunyai kurungan manakala sifat sentiasa mempunyai kurungan."
        },
        "answer": false,
        "explain": {
          "zh": "讲义的规则正好相反：方法总是带括号，属性从不带括号，例如 Me.Close( ) 是方法调用，而 MessageLabel.Text 是属性。题干把两者的括号规则对调，所以错误。",
          "en": "The lecture's rule is the opposite: methods always have parentheses and properties never do, as in Me.Close( ) for a method call versus MessageLabel.Text for a property. The statement swaps the two rules, so it is false.",
          "ms": "Peraturan kuliah adalah sebaliknya: kaedah sentiasa mempunyai kurungan dan sifat tidak pernah, seperti Me.Close( ) untuk panggilan kaedah berbanding MessageLabel.Text untuk sifat. Pernyataan ini menukar kedua-dua peraturan itu, jadi ia salah."
        },
        "diff": 1,
        "topic": {
          "zh": "方法与属性的括号",
          "en": "Parentheses on methods and properties",
          "ms": "Kurungan pada kaedah dan sifat"
        }
      },
      {
        "id": "vb-01-q08",
        "type": "fill",
        "q": {
          "zh": "开始执行程序时，VB 语句首先被编译成什么中间语言？（写出缩写或全称）",
          "en": "When execution starts, VB statements are first compiled into which intermediate language? (Give the abbreviation or the full name.)",
          "ms": "Apabila pelaksanaan bermula, pernyataan VB mula-mula dikompil menjadi bahasa perantaraan yang mana? (Berikan singkatan atau nama penuh.)"
        },
        "answer": [
          "MSIL",
          "Microsoft Intermediate Language",
          "Bahasa Perantaraan Microsoft"
        ],
        "explain": {
          "zh": "讲义把编译定义为“VB 语句被转换成 Microsoft Intermediate Language（MSIL）”，并强调目标是得到一个没有任何错误的 clean compile。它既不是机器码也不是源代码，所以写“机器语言”或“VB 代码”都不算对。",
          "en": "The lecture defines compiling as converting the VB statements to Microsoft Intermediate Language (MSIL) and stresses the goal of a clean compile with no errors. It is neither machine code nor source code, so machine language or VB code would not be accepted.",
          "ms": "Kuliah mentakrifkan pengkompilan sebagai penukaran pernyataan VB kepada Microsoft Intermediate Language (MSIL) dan menekankan matlamat pengkompilan bersih tanpa ralat. Ia bukan kod mesin dan bukan kod sumber, jadi bahasa mesin atau kod VB tidak diterima."
        },
        "diff": 2,
        "topic": {
          "zh": "编译与 MSIL",
          "en": "Compiling and MSIL",
          "ms": "Pengkompilan dan MSIL"
        }
      }
    ],
    "vb-02": [
      {
        "id": "vb-02-q01",
        "type": "mcq",
        "q": {
          "zh": "为什么讲义要求先建立分组框，再在分组框内逐个建立单选按钮？",
          "en": "Why does the lecture say to create a group box first and then create each radio button inside it?",
          "ms": "Mengapakah kuliah menyarankan agar kotak kumpulan dicipta terlebih dahulu, kemudian setiap butang radio dicipta di dalamnya?"
        },
        "opts": [
          {
            "zh": "这样同一分组框内只能选中一个，不同分组框之间互不影响",
            "en": "So that only one button can be selected within that group, while separate group boxes do not affect each other",
            "ms": "Supaya hanya satu butang boleh dipilih dalam kumpulan itu, manakala kotak kumpulan yang berasingan tidak saling mempengaruhi"
          },
          {
            "zh": "这样同一分组框内可以同时选中多个单选按钮",
            "en": "So that several radio buttons in the same group can be selected at the same time",
            "ms": "Supaya beberapa butang radio dalam kumpulan yang sama boleh dipilih serentak"
          },
          {
            "zh": "只有放进分组框，单选按钮才具有 Checked 属性",
            "en": "Only when placed in a group box does a radio button have a Checked property",
            "ms": "Hanya apabila diletakkan dalam kotak kumpulan, butang radio mempunyai sifat Checked"
          },
          {
            "zh": "只有放进分组框，单选按钮才能用 Tab 键获得焦点",
            "en": "Only when placed in a group box can a radio button receive the focus with the Tab key",
            "ms": "Hanya apabila diletakkan dalam kotak kumpulan, butang radio boleh menerima fokus dengan kekunci Tab"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "单选按钮的规则是“同一组内只能选一个”，分组框正是用来划定这个组，并把不同组隔开；要选多个应该用复选框。Checked 属性任何单选按钮都有，获得焦点的能力也与是否在分组框内无关，所以 B、C、D 都不成立。",
          "en": "The rule for radio buttons is that only one can be selected in any group, and the group box defines that group and keeps different groups apart; multiple selections call for check boxes. Every radio button has a Checked property, and receiving the focus does not depend on being inside a group box, so B, C and D are wrong.",
          "ms": "Peraturan butang radio ialah hanya satu boleh dipilih dalam sesuatu kumpulan, dan kotak kumpulan itulah yang menentukan kumpulan serta memisahkan kumpulan berbeza; pilihan berbilang memerlukan kotak tanda. Setiap butang radio mempunyai sifat Checked, dan keupayaan menerima fokus tidak bergantung pada kotak kumpulan, jadi B, C dan D salah."
        },
        "diff": 1,
        "topic": {
          "zh": "分组框与单选按钮",
          "en": "Group box and radio buttons",
          "ms": "Kotak kumpulan dan butang radio"
        }
      },
      {
        "id": "vb-02-q02",
        "type": "mcq",
        "q": {
          "zh": "按讲义，下列哪一组控件都不能获得焦点，因而 TabStop 对它们没有意义？",
          "en": "According to the lecture, which pair of controls cannot receive the focus, so TabStop is meaningless for them?",
          "ms": "Menurut kuliah, pasangan kawalan manakah yang tidak boleh menerima fokus, sehingga TabStop tidak bermakna baginya?"
        },
        "opts": [
          {
            "zh": "文本框（TextBox）和按钮（Button）",
            "en": "TextBox and Button",
            "ms": "Kotak teks (TextBox) dan butang (Button)"
          },
          {
            "zh": "标签（Label）和图片框（PictureBox）",
            "en": "Label and PictureBox",
            "ms": "Label dan kotak gambar (PictureBox)"
          },
          {
            "zh": "组合框（ComboBox）和列表框（ListBox）",
            "en": "ComboBox and ListBox",
            "ms": "Kotak kombo (ComboBox) dan kotak senarai (ListBox)"
          },
          {
            "zh": "单选按钮（RadioButton）和复选框（CheckBox）",
            "en": "RadioButton and CheckBox",
            "ms": "Butang radio (RadioButton) dan kotak tanda (CheckBox)"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义明确列出“文本框、按钮能获得焦点；图片框、标签不能”，并且 TabStop 只适用于能获得焦点的控件。A、C、D 中列出的控件都要接收键盘输入或用户选择，都能获得焦点，所以不对。",
          "en": "The lecture states that text boxes and buttons can receive the focus while picture boxes and labels cannot, and TabStop applies only to controls capable of receiving the focus. The controls in A, C and D all accept keyboard input or user choices, so they can receive the focus.",
          "ms": "Kuliah menyatakan kotak teks dan butang boleh menerima fokus manakala kotak gambar dan label tidak, dan TabStop hanya terpakai pada kawalan yang mampu menerima fokus. Kawalan dalam A, C dan D semuanya menerima input papan kekunci atau pilihan pengguna, jadi ia boleh menerima fokus."
        },
        "diff": 2,
        "topic": {
          "zh": "焦点与 TabStop",
          "en": "Focus and TabStop",
          "ms": "Fokus dan TabStop"
        }
      },
      {
        "id": "vb-02-q03",
        "type": "mcq",
        "q": {
          "zh": "把按钮的 Text 设为 \"&OK\"，用户按 Alt+O 就能触发它。这里的 & 起什么作用？",
          "en": "A button's Text is set to \"&OK\" so that the user can trigger it with Alt+O. What is the role of the & here?",
          "ms": "Teks sesuatu butang ditetapkan sebagai \"&OK\" supaya pengguna boleh mencetuskannya dengan Alt+O. Apakah peranan & di sini?"
        },
        "opts": [
          {
            "zh": "把紧随其后的字母设为快捷键，按 Ctrl 加该字母即可使用该控件",
            "en": "It makes the following letter a shortcut key, so Ctrl plus that letter uses the control",
            "ms": "Ia menjadikan huruf selepasnya kekunci pintasan, jadi Ctrl bersama huruf itu menggunakan kawalan tersebut"
          },
          {
            "zh": "在按钮文字前显示一个 & 符号，并把它当作普通字符",
            "en": "It displays an ampersand before the text and treats it as an ordinary character",
            "ms": "Ia memaparkan tanda & di hadapan teks dan menganggapnya sebagai aksara biasa"
          },
          {
            "zh": "把紧随其后的字母定义为访问键，按 Alt 加该字母即可使用该控件",
            "en": "It defines the following letter as the access key, so Alt plus that letter uses the control",
            "ms": "Ia menetapkan huruf selepasnya sebagai kekunci akses, jadi Alt bersama huruf itu menggunakan kawalan tersebut"
          },
          {
            "zh": "给该字母加下划线，并把 Tab 顺序固定到该控件",
            "en": "It underlines that letter and fixes the control's position in the tab order",
            "ms": "Ia menggariskan huruf itu dan menetapkan kedudukan kawalan dalam urutan tab"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "& 在 Text 属性中把后面的字母定义为访问键（热键），运行时该字母带下划线，用户按 Alt+字母即可激活控件，& 本身不显示。Ctrl 加字母是快捷键，不是访问键；Tab 顺序由 TabIndex 决定，与 & 无关。",
          "en": "In the Text property, & defines the following letter as the access key (hot key); at run time that letter is underlined and Alt plus the letter activates the control, while the & itself is not displayed. Ctrl plus a letter is a shortcut key rather than an access key, and tab order is set by TabIndex, not by &.",
          "ms": "Dalam sifat Text, & menetapkan huruf selepasnya sebagai kekunci akses (hot key); semasa masa jalan huruf itu digariskan dan Alt bersama huruf tersebut mengaktifkan kawalan, manakala & sendiri tidak dipaparkan. Ctrl bersama huruf ialah kekunci pintasan, bukan kekunci akses, dan urutan tab ditentukan oleh TabIndex, bukan oleh &."
        },
        "diff": 2,
        "topic": {
          "zh": "访问键",
          "en": "Access keys",
          "ms": "Kekunci akses"
        }
      },
      {
        "id": "vb-02-q04",
        "type": "mcq",
        "q": {
          "zh": "要对同一个文本框连续设置 Visible、ForeColor 并调用 Focus，讲义推荐使用 With/End With。它的主要好处是什么？",
          "en": "To set Visible, set ForeColor and call Focus on the same text box in succession, the lecture recommends With/End With. What is its main benefit?",
          "ms": "Untuk menetapkan Visible, menetapkan ForeColor dan memanggil Focus pada kotak teks yang sama berturut-turut, kuliah mengesyorkan With/End With. Apakah faedah utamanya?"
        },
        "opts": [
          {
            "zh": "可以自动检查每个属性的数据类型是否匹配",
            "en": "It automatically checks that each property's data type matches",
            "ms": "Ia menyemak secara automatik sama ada jenis data setiap sifat sepadan"
          },
          {
            "zh": "可以把多个控件的同名属性一次设成相同的值",
            "en": "It can set the same property of several different controls to one value at once",
            "ms": "Ia boleh menetapkan sifat yang sama bagi beberapa kawalan berbeza kepada satu nilai sekali gus"
          },
          {
            "zh": "可以把多条语句合并到一个事件过程里",
            "en": "It merges several statements into a single event procedure",
            "ms": "Ia menggabungkan beberapa pernyataan menjadi satu prosedur peristiwa"
          },
          {
            "zh": "不必重复写出控件名，语句更短，而且运行效率更高",
            "en": "The control name need not be repeated, the code is shorter, and it runs more efficiently",
            "ms": "Nama kawalan tidak perlu diulang, kod menjadi lebih pendek, dan ia berjalan lebih cekap"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "With/End With 针对某一个控件，块内直接写 .Visible、.ForeColor，省去重复的对象名；讲义还说明这样运行更高效。它一次只作用于一个控件，不负责合并过程，也不做类型检查，所以 A、B、C 都夸大或误解了它的作用。",
          "en": "With/End With targets one control, letting you write .Visible and .ForeColor inside the block without repeating the object name; the lecture also notes that it runs more efficiently. It acts on a single control only, does not merge procedures and performs no type checking, so A, B and C overstate or misread it.",
          "ms": "With/End With menyasarkan satu kawalan, membolehkan anda menulis .Visible dan .ForeColor di dalam blok tanpa mengulang nama objek; kuliah juga menyatakan ia berjalan lebih cekap. Ia hanya bertindak pada satu kawalan, tidak menggabungkan prosedur dan tidak menyemak jenis data, jadi A, B dan C melebih-lebih atau salah faham fungsinya."
        },
        "diff": 2,
        "topic": {
          "zh": "With / End With 语句",
          "en": "With / End With",
          "ms": "With / End With"
        }
      },
      {
        "id": "vb-02-q05",
        "type": "mcq",
        "q": {
          "zh": "窗体上有一个“确定”按钮和一个“取消”按钮。要让 Enter 键触发“确定”、Esc 键触发“取消”，应设置哪些属性？",
          "en": "A form has an OK button and a Cancel button. To make Enter trigger OK and Esc trigger Cancel, which properties must be set?",
          "ms": "Sesuatu borang mempunyai butang OK dan butang Batal. Untuk menjadikan Enter mencetuskan OK dan Esc mencetuskan Batal, sifat manakah perlu ditetapkan?"
        },
        "opts": [
          {
            "zh": "两个按钮的 TabStop 都设为 True，TabIndex 分别设为 0 和 1",
            "en": "Set TabStop to True on both buttons and their TabIndex to 0 and 1",
            "ms": "Tetapkan TabStop kepada True pada kedua-dua butang dan TabIndex masing-masing 0 dan 1"
          },
          {
            "zh": "窗体的 AcceptButton 设为“取消”按钮，CancelButton 设为“确定”按钮",
            "en": "Set the form's AcceptButton to the Cancel button and its CancelButton to the OK button",
            "ms": "Tetapkan AcceptButton borang kepada butang Batal dan CancelButton kepada butang OK"
          },
          {
            "zh": "窗体的 AcceptButton 设为“确定”按钮，CancelButton 设为“取消”按钮",
            "en": "Set the form's AcceptButton to the OK button and its CancelButton to the Cancel button",
            "ms": "Tetapkan AcceptButton borang kepada butang OK dan CancelButton kepada butang Batal"
          },
          {
            "zh": "两个按钮的 DialogResult 都设为 OK，由代码判断按下了哪个键",
            "en": "Set DialogResult to OK on both buttons and let code decide which key was pressed",
            "ms": "Tetapkan DialogResult kepada OK pada kedua-dua butang dan biarkan kod menentukan kekunci yang ditekan"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "接受按钮由窗体的 AcceptButton 属性指定，响应 Enter；取消按钮由 CancelButton 指定，响应 Esc，接受按钮在窗体上还有较深的外框。B 把两者对调；A 的 TabStop 与 TabIndex 只管 Tab 键移动焦点；D 让两个按钮都返回 OK，无法区分按了哪个键。",
          "en": "The accept button is named by the form's AcceptButton property and responds to Enter, while the cancel button is named by CancelButton and responds to Esc; the accept button also has a darker outline. B swaps the two, A's TabStop and TabIndex only control focus movement with Tab, and D makes both buttons return OK so the key pressed cannot be distinguished.",
          "ms": "Butang terima ditetapkan melalui sifat AcceptButton borang dan bertindak balas terhadap Enter, manakala butang batal ditetapkan melalui CancelButton dan bertindak balas terhadap Esc; butang terima juga mempunyai bingkai lebih gelap. B menukar kedua-duanya, TabStop dan TabIndex dalam A hanya mengawal pergerakan fokus dengan Tab, dan D menjadikan kedua-dua butang memulangkan OK sehingga kekunci yang ditekan tidak dapat dibezakan."
        },
        "diff": 2,
        "topic": {
          "zh": "接受按钮与取消按钮",
          "en": "Accept and cancel buttons",
          "ms": "Butang terima dan batal"
        }
      },
      {
        "id": "vb-02-q06",
        "type": "multi",
        "q": {
          "zh": "讲义演示了用标签（Label）控件在窗体上画一条线。下列哪些做法是它要求的？（多选）",
          "en": "The lecture shows how to draw a line on a form with a Label control. Which of the following are required? (Select all that apply.)",
          "ms": "Kuliah menunjukkan cara melukis garis pada borang dengan kawalan Label. Yang manakah antara berikut diperlukan? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "把 Text 属性设为空白",
            "en": "Set the Text property to blank",
            "ms": "Tetapkan sifat Text kepada kosong"
          },
          {
            "zh": "把 BorderStyle 设为 Fixed3D，使线条看起来凸起",
            "en": "Set BorderStyle to Fixed3D so the line looks raised",
            "ms": "Tetapkan BorderStyle kepada Fixed3D supaya garis kelihatan timbul"
          },
          {
            "zh": "把 BorderStyle 设为 None",
            "en": "Set BorderStyle to None",
            "ms": "Tetapkan BorderStyle kepada None"
          },
          {
            "zh": "把 BackColor 设为想要的线条颜色，并调整 Width 与 Height",
            "en": "Set BackColor to the desired line colour and adjust Width and Height",
            "ms": "Tetapkan BackColor kepada warna garis yang dikehendaki dan laraskan Width serta Height"
          }
        ],
        "answer": [
          0,
          2,
          3
        ],
        "explain": {
          "zh": "用标签画线的四步是：Text 留空、BorderStyle 设为 None、BackColor 设为线条颜色、按需要调整 Width 和 Height。B 用 Fixed3D 会产生三维边框效果，不是一条平直的线，所以不选。",
          "en": "The four steps for a line with a label are: leave Text blank, set BorderStyle to None, set BackColor to the line colour, and adjust Width and Height as needed. B uses Fixed3D, which gives a three-dimensional border rather than a flat line, so it is not selected.",
          "ms": "Empat langkah untuk garis dengan label ialah: biarkan Text kosong, tetapkan BorderStyle kepada None, tetapkan BackColor kepada warna garis, dan laraskan Width serta Height mengikut keperluan. B menggunakan Fixed3D yang menghasilkan sempadan tiga dimensi, bukan garis rata, jadi ia tidak dipilih."
        },
        "diff": 2,
        "topic": {
          "zh": "用标签画线",
          "en": "Drawing a line with a label",
          "ms": "Melukis garis dengan label"
        }
      },
      {
        "id": "vb-02-q07",
        "type": "tf",
        "q": {
          "zh": "把图片框的 SizeMode 属性设为 StretchImage，图片会被缩放到与控件同样大小。",
          "en": "Setting a picture box's SizeMode property to StretchImage resizes the picture to match the size of the control.",
          "ms": "Menetapkan sifat SizeMode kotak gambar kepada StretchImage mengubah saiz gambar supaya sepadan dengan saiz kawalan."
        },
        "answer": true,
        "explain": {
          "zh": "讲义说明 StretchImage 会使图片缩放到与控件同样大小，这正是 SizeMode 的用途之一。图片的路径和文件名存放在 Image 属性中，而 Visible 设为 False 则是让整张图片消失，两者与本句无关。",
          "en": "The lecture states that StretchImage causes the picture to be resized to match the size of the control, which is one use of SizeMode. The path and file name of the graphic live in the Image property, while Visible set to False makes the whole picture disappear, and neither affects this statement.",
          "ms": "Kuliah menyatakan StretchImage menyebabkan gambar diubah saiz supaya sepadan dengan saiz kawalan, iaitu salah satu kegunaan SizeMode. Laluan dan nama fail grafik disimpan dalam sifat Image, manakala Visible yang ditetapkan kepada False menyembunyikan seluruh gambar, dan kedua-duanya tidak menjejaskan pernyataan ini."
        },
        "diff": 1,
        "topic": {
          "zh": "图片框的 SizeMode",
          "en": "PictureBox SizeMode",
          "ms": "SizeMode kotak gambar"
        }
      },
      {
        "id": "vb-02-q08",
        "type": "fill",
        "q": {
          "zh": "用 & 运算符把两段文字接成一个字符串，这个操作叫什么？（用中、英或马来文作答）",
          "en": "Joining two pieces of text into one string with the & operator is called what? (Answer in Chinese, English or Malay.)",
          "ms": "Menggabungkan dua teks menjadi satu rentetan dengan pengendali & dipanggil apa? (Jawab dalam bahasa Cina, Inggeris atau Melayu.)"
        },
        "answer": [
          "concatenation",
          "concatenate",
          "字符串拼接",
          "拼接",
          "penggabungan rentetan"
        ],
        "explain": {
          "zh": "讲义把拼接解释为把文字“钉”在一起，写法是在两个字符串之间用 &，且 & 前后各留一个空格，例如 MessageLabel.Text = \"Your name is: \" & NameTextBox.Text。它不同于算术加法，所以不能用 + 来替代这个术语。",
          "en": "The lecture describes concatenation as tacking text strings together, written with an ampersand between the two strings with a space before and after it, for example MessageLabel.Text = \"Your name is: \" & NameTextBox.Text. It is not arithmetic addition, so the term is not the same as addition.",
          "ms": "Kuliah menerangkan penggabungan rentetan sebagai mencantum rentetan teks, ditulis dengan ampersand antara dua rentetan dan satu ruang sebelum serta selepasnya, contohnya MessageLabel.Text = \"Your name is: \" & NameTextBox.Text. Ia bukan penambahan aritmetik, jadi istilahnya berbeza daripada penambahan."
        },
        "diff": 1,
        "topic": {
          "zh": "字符串拼接",
          "en": "Concatenation",
          "ms": "Penggabungan rentetan"
        }
      }
    ],
    "vb-03": [
      {
        "id": "vb-03-q01",
        "type": "mcq",
        "q": {
          "zh": "按 VB 的运算优先级，表达式 3 + 4 * 2 ^ 2 的值是多少？",
          "en": "Following VB's order of precedence, what is the value of the expression 3 + 4 * 2 ^ 2?",
          "ms": "Mengikut keutamaan operasi dalam VB, apakah nilai ungkapan 3 + 4 * 2 ^ 2?"
        },
        "opts": [
          {
            "zh": "28",
            "en": "28",
            "ms": "28"
          },
          {
            "zh": "19",
            "en": "19",
            "ms": "19"
          },
          {
            "zh": "67",
            "en": "67",
            "ms": "67"
          },
          {
            "zh": "121",
            "en": "121",
            "ms": "121"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "优先级从高到低是括号、乘方、乘除、整除、Mod、加减，所以先算 2 ^ 2 = 4，再算 4 * 4 = 16，最后 3 + 16 = 19。A 相当于 (3 + 4) * 2 ^ 2，C 相当于 3 + (4 * 2) ^ 2，D 相当于 (3 + 4 * 2) ^ 2，三者都多加了原式里没有的括号。",
          "en": "The order is parentheses, exponentiation, multiplication and division, integer division, Mod, then addition and subtraction, so 2 ^ 2 = 4, 4 * 4 = 16 and 3 + 16 = 19. A corresponds to (3 + 4) * 2 ^ 2, C to 3 + (4 * 2) ^ 2, and D to (3 + 4 * 2) ^ 2; all three add parentheses the expression does not have.",
          "ms": "Urutannya ialah kurungan, peningkatan kuasa, darab dan bahagi, pembahagian integer, Mod, kemudian tambah dan tolak, jadi 2 ^ 2 = 4, 4 * 4 = 16 dan 3 + 16 = 19. A sepadan dengan (3 + 4) * 2 ^ 2, C dengan 3 + (4 * 2) ^ 2, dan D dengan (3 + 4 * 2) ^ 2; ketiga-tiganya menambah kurungan yang tiada dalam ungkapan asal."
        },
        "diff": 2,
        "topic": {
          "zh": "运算优先级",
          "en": "Order of operations",
          "ms": "Keutamaan operasi"
        }
      },
      {
        "id": "vb-03-q02",
        "type": "mcq",
        "q": {
          "zh": "Decimal.Round(2.5D, 0) 返回什么值？",
          "en": "What does Decimal.Round(2.5D, 0) return?",
          "ms": "Apakah yang dikembalikan oleh Decimal.Round(2.5D, 0)?"
        },
        "opts": [
          {
            "zh": "2.5",
            "en": "2.5",
            "ms": "2.5"
          },
          {
            "zh": "3",
            "en": "3",
            "ms": "3"
          },
          {
            "zh": "2",
            "en": "2",
            "ms": "2"
          },
          {
            "zh": "0",
            "en": "0",
            "ms": "0"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "Decimal.Round 和 Convert 采用“就近取偶”（银行家舍入），遇到正好一半时取最近的偶数，所以 2.5 舍入为 2、1.5 舍入为 2。B 是普通的四舍五入，A 表示根本没有舍入，D 把第二个参数（小数位数 0）误当成了结果。",
          "en": "Decimal.Round and the Convert methods use rounding toward even, so an exact half goes to the nearest even value: 2.5 becomes 2 and 1.5 becomes 2. B is ordinary round-half-up, A leaves the value unrounded, and D mistakes the second argument (zero decimal places) for the result.",
          "ms": "Decimal.Round dan kaedah Convert menggunakan pembundaran ke arah nombor genap, jadi nilai tepat separuh pergi ke nombor genap terdekat: 2.5 menjadi 2 dan 1.5 menjadi 2. B ialah pembundaran separuh ke atas biasa, A membiarkan nilai tidak dibundarkan, dan D menyangka argumen kedua (sifar tempat perpuluhan) sebagai hasilnya."
        },
        "diff": 2,
        "topic": {
          "zh": "银行家舍入",
          "en": "Rounding toward even",
          "ms": "Pembundaran ke arah genap"
        }
      },
      {
        "id": "vb-03-q03",
        "type": "mcq",
        "q": {
          "zh": "totalDecimal 的值为 1125.6744。执行 totalDecimal.ToString(\"N0\") 得到什么输出？",
          "en": "totalDecimal holds 1125.6744. What is the output of totalDecimal.ToString(\"N0\")?",
          "ms": "totalDecimal bernilai 1125.6744. Apakah output bagi totalDecimal.ToString(\"N0\")?"
        },
        "opts": [
          {
            "zh": "1125.6744",
            "en": "1125.6744",
            "ms": "1125.6744"
          },
          {
            "zh": "1,125.67",
            "en": "1,125.67",
            "ms": "1,125.67"
          },
          {
            "zh": "$1,126",
            "en": "$1,126",
            "ms": "$1,126"
          },
          {
            "zh": "1,126",
            "en": "1,126",
            "ms": "1,126"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "N 是数字格式，用逗号分隔每三位、默认保留两位小数；N0 把小数位数指定为 0，于是 1125.6744 舍入成 1,126。B 是 \"C\" 的输出（带两位小数），C 是 \"C0\" 的输出（还加了货币符号），A 完全没有格式化。",
          "en": "N is the number format, with commas between groups of three digits and two decimals by default; N0 asks for zero decimal places, so 1125.6744 rounds to 1,126. B is the output of \"C\" with two decimals, C is the output of \"C0\" which also adds the currency symbol, and A applies no formatting at all.",
          "ms": "N ialah format nombor, dengan koma antara kumpulan tiga digit dan dua tempat perpuluhan secara lalai; N0 meminta sifar tempat perpuluhan, jadi 1125.6744 dibundarkan menjadi 1,126. B ialah output \"C\" dengan dua tempat perpuluhan, C ialah output \"C0\" yang turut menambah simbol mata wang, dan A tidak menggunakan sebarang format."
        },
        "diff": 2,
        "topic": {
          "zh": "数字格式说明符",
          "en": "Numeric format codes",
          "ms": "Kod format nombor"
        }
      },
      {
        "id": "vb-03-q04",
        "type": "mcq",
        "q": {
          "zh": "下列哪一个值可以存入 Integer 变量？",
          "en": "Which of the following values can be stored in an Integer variable?",
          "ms": "Nilai manakah antara berikut boleh disimpan dalam pemboleh ubah Integer?"
        },
        "opts": [
          {
            "zh": "-2,147,483,648",
            "en": "-2,147,483,648",
            "ms": "-2,147,483,648"
          },
          {
            "zh": "-2,147,483,649",
            "en": "-2,147,483,649",
            "ms": "-2,147,483,649"
          },
          {
            "zh": "2,147,483,648",
            "en": "2,147,483,648",
            "ms": "2,147,483,648"
          },
          {
            "zh": "3,000,000,000",
            "en": "3,000,000,000",
            "ms": "3,000,000,000"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "Integer 占 4 字节，范围是 -2,147,483,648 到 +2,147,483,647，所以只有 A 落在范围内。B 比下界小 1，C 比上界大 1，D 远超上界；这三个值都需要 8 字节的 Long。",
          "en": "Integer occupies 4 bytes and ranges from -2,147,483,648 to +2,147,483,647, so only A falls inside it. B is one below the lower bound, C is one above the upper bound, and D is far beyond it; all three need the 8-byte Long type.",
          "ms": "Integer menggunakan 4 bait dan julatnya ialah -2,147,483,648 hingga +2,147,483,647, jadi hanya A berada dalam julat itu. B satu di bawah had bawah, C satu di atas had atas, dan D jauh melebihi had atas; ketiga-tiganya memerlukan jenis Long yang menggunakan 8 bait."
        },
        "diff": 2,
        "topic": {
          "zh": "Integer 的取值范围",
          "en": "Range of Integer",
          "ms": "Julat Integer"
        }
      },
      {
        "id": "vb-03-q05",
        "type": "mcq",
        "q": {
          "zh": "打开 Option Strict 后，VB 会禁止下列哪一种转换？",
          "en": "With Option Strict turned on, which conversion does VB forbid?",
          "ms": "Apabila Option Strict dihidupkan, penukaran manakah dilarang oleh VB?"
        },
        "opts": [
          {
            "zh": "从较宽类型到较窄类型的隐式转换，以及 String 与数值类型之间的隐式转换",
            "en": "Implicit conversion from a wider type to a narrower one, and between String and numeric types",
            "ms": "Penukaran tersirat daripada jenis lebih luas kepada lebih sempit, dan antara String dengan jenis berangka"
          },
          {
            "zh": "从较窄类型到较宽类型的隐式转换，例如把 Integer 赋给 Decimal",
            "en": "Implicit conversion from a narrower type to a wider one, such as assigning an Integer to a Decimal",
            "ms": "Penukaran tersirat daripada jenis lebih sempit kepada lebih luas, contohnya memberikan Integer kepada Decimal"
          },
          {
            "zh": "用 Convert 类的 To 方法进行的显式转换",
            "en": "Explicit conversion using the To methods of the Convert class",
            "ms": "Penukaran eksplisit menggunakan kaedah To dalam kelas Convert"
          },
          {
            "zh": "用 Dim 语句声明变量时指定数据类型",
            "en": "Specifying a data type when declaring a variable with Dim",
            "ms": "Menentukan jenis data semasa mengisytiharkan pemboleh ubah dengan Dim"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "Option Strict 让 VB 变成像 C++、Java、C# 那样的强类型语言，不允许从宽类型到窄类型的隐式转换，也不允许 String 与数值之间的隐式转换。B 描述的窄转宽不会丢失精度，是允许的；To 开头的 Convert 方法正是它要求的显式做法；Dim 声明不受影响，强制声明的是 Option Explicit。",
          "en": "Option Strict makes VB a strongly typed language like C++, Java and C#, disallowing implicit conversions from a wider type to a narrower one as well as implicit conversions between String and numeric types. The narrowing-to-widening conversion in B loses no precision and is allowed, the Convert methods beginning with To are the explicit remedy it expects, and Dim declarations are unaffected because declaring variables is what Option Explicit enforces.",
          "ms": "Option Strict menjadikan VB bahasa yang kuat jenis seperti C++, Java dan C#, dengan melarang penukaran tersirat daripada jenis lebih luas kepada lebih sempit serta penukaran tersirat antara String dengan jenis berangka. Penukaran sempit ke luas dalam B tidak kehilangan ketepatan dan dibenarkan, kaedah Convert yang bermula dengan To ialah cara eksplisit yang dikehendakinya, dan pengisytiharan Dim tidak terjejas kerana pengisytiharan pemboleh ubah ialah tugas Option Explicit."
        },
        "diff": 3,
        "topic": {
          "zh": "Option Strict",
          "en": "Option Strict",
          "ms": "Option Strict"
        }
      },
      {
        "id": "vb-03-q06",
        "type": "multi",
        "q": {
          "zh": "讲义用类型声明字符标明数值常量的类型。下列配对哪些是正确的？（多选）",
          "en": "The lecture uses type-declaration characters to mark the type of numeric constants. Which pairings are correct? (Select all that apply.)",
          "ms": "Kuliah menggunakan aksara pengisytiharan jenis untuk menandakan jenis pemalar berangka. Padanan manakah betul? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "850.50D — D 表示 Decimal",
            "en": "850.50D — D marks a Decimal",
            "ms": "850.50D — D menandakan Decimal"
          },
          {
            "zh": "52875.8R — R 表示 Double",
            "en": "52875.8R — R marks a Double",
            "ms": "52875.8R — R menandakan Double"
          },
          {
            "zh": "12345678I — I 表示 Integer",
            "en": "12345678I — I marks an Integer",
            "ms": "12345678I — I menandakan Integer"
          },
          {
            "zh": "101.25S — S 表示 Single",
            "en": "101.25S — S marks a Single",
            "ms": "101.25S — S menandakan Single"
          },
          {
            "zh": "134257987D — D 表示 Long",
            "en": "134257987D — D marks a Long",
            "ms": "134257987D — D menandakan Long"
          }
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": {
          "zh": "讲义的对照表是 Decimal 用 D、Double 用 R、Integer 用 I、Long 用 L、Short 用 S、Single 用 F，所以 A、B、C 正确。D 里的 S 是 Short 而不是 Single（Single 要用 F）；E 里的 D 仍然是 Decimal，Long 要用 L。",
          "en": "The lecture's table gives D for Decimal, R for Double, I for Integer, L for Long, S for Short and F for Single, so A, B and C are correct. The S in D marks a Short, not a Single (Single uses F), and the D in E still marks a Decimal, since Long uses L.",
          "ms": "Jadual kuliah memberikan D untuk Decimal, R untuk Double, I untuk Integer, L untuk Long, S untuk Short dan F untuk Single, jadi A, B dan C betul. S dalam D menandakan Short, bukan Single (Single menggunakan F), dan D dalam E tetap menandakan Decimal kerana Long menggunakan L."
        },
        "diff": 2,
        "topic": {
          "zh": "类型声明字符",
          "en": "Type-declaration characters",
          "ms": "Aksara pengisytiharan jenis"
        }
      },
      {
        "id": "vb-03-q07",
        "type": "tf",
        "q": {
          "zh": "Try/Catch 中若包含 Finally 块，无论是否发生异常，Finally 中的代码都会最后执行。",
          "en": "If a Try/Catch includes a Finally block, the code in that block executes last whether or not an exception occurred.",
          "ms": "Jika Try/Catch mengandungi blok Finally, kod dalam blok itu dilaksanakan paling akhir sama ada pengecualian berlaku atau tidak."
        },
        "answer": true,
        "explain": {
          "zh": "讲义的原话是：如果加入了 Finally 语句，该部分的代码无论是否发生异常都会最后执行。Catch 块只在异常真的发生时执行，而 Finally 无论成功还是出错都会执行，所以它适合放收尾工作。",
          "en": "The lecture states that if a Finally statement is included, the code in that section executes last whether or not an exception occurred. The Catch block runs only when an exception actually occurs, whereas Finally runs on both the normal and the error path, which is why it suits clean-up work.",
          "ms": "Kuliah menyatakan bahawa jika pernyataan Finally disertakan, kod dalam bahagian itu dilaksanakan paling akhir sama ada pengecualian berlaku atau tidak. Blok Catch hanya berjalan apabila pengecualian benar-benar berlaku, manakala Finally berjalan pada laluan normal dan laluan ralat, sebab itulah ia sesuai untuk kerja pembersihan."
        },
        "diff": 1,
        "topic": {
          "zh": "Finally 块",
          "en": "The Finally block",
          "ms": "Blok Finally"
        }
      },
      {
        "id": "vb-03-q08",
        "type": "fill",
        "q": {
          "zh": "用户在数值文本框中输入字母后，Integer.Parse 抛出哪一种异常？写出异常类名。",
          "en": "After the user types letters into a numeric text box, Integer.Parse throws which exception? Give the exception class name.",
          "ms": "Selepas pengguna menaip huruf dalam kotak teks bernombor, Integer.Parse melontar pengecualian yang mana? Berikan nama kelas pengecualian itu."
        },
        "answer": [
          "FormatException",
          "Format Exception",
          "格式异常",
          "Pengecualian Format"
        ],
        "explain": {
          "zh": "Parse 方法在用户输入非数字数据或留空时会失败，讲义用 Catch theException As FormatException 专门捕获这种“无法转换为数值”的输入错误。ArithmeticException 用于计算问题，Exception 用于其余所有异常。",
          "en": "A Parse method fails when the user enters nonnumeric data or leaves the field blank, and the lecture catches exactly this cannot-be-converted input with Catch theException As FormatException. ArithmeticException covers calculation problems and Exception covers all other exceptions.",
          "ms": "Kaedah Parse gagal apabila pengguna memasukkan data bukan nombor atau membiarkan medan kosong, dan kuliah menangkap input yang tidak dapat ditukar ini dengan Catch theException As FormatException. ArithmeticException meliputi masalah pengiraan dan Exception meliputi semua pengecualian lain."
        },
        "diff": 2,
        "topic": {
          "zh": "FormatException",
          "en": "FormatException",
          "ms": "FormatException"
        }
      }
    ],
    "vb-04": [
      {
        "id": "vb-04-q01",
        "type": "mcq",
        "q": {
          "zh": "关于块 If 的书写规则，下列哪一项与讲义完全一致？",
          "en": "Which statement about the rules for a block If exactly matches the lecture?",
          "ms": "Pernyataan manakah tentang peraturan penulisan If blok yang benar-benar selaras dengan kuliah?"
        },
        "opts": [
          {
            "zh": "ElseIf 是一个词，End If 是两个词；Then 必须与 If 或 ElseIf 在同一行",
            "en": "ElseIf is one word and End If is two words; Then must be on the same line as If or ElseIf",
            "ms": "ElseIf ialah satu perkataan dan End If ialah dua perkataan; Then mesti berada pada baris yang sama dengan If atau ElseIf"
          },
          {
            "zh": "ElseIf 是两个词，End If 是一个词；Then 可以写在下一行",
            "en": "ElseIf is two words and End If is one word; Then may be written on the next line",
            "ms": "ElseIf ialah dua perkataan dan End If ialah satu perkataan; Then boleh ditulis pada baris berikutnya"
          },
          {
            "zh": "ElseIf 和 End If 都是一个词；Else 可以与语句写在同一行",
            "en": "ElseIf and End If are both one word; Else may share a line with a statement",
            "ms": "ElseIf dan End If kedua-duanya satu perkataan; Else boleh dikongsi satu baris dengan pernyataan"
          },
          {
            "zh": "ElseIf 和 End If 都是两个词；End If 可以与语句写在同一行",
            "en": "ElseIf and End If are both two words; End If may share a line with a statement",
            "ms": "ElseIf dan End If kedua-duanya dua perkataan; End If boleh dikongsi satu baris dengan pernyataan"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义特别提醒：ElseIf 是一个词，End If 是两个词；Then 必须与 If 或 ElseIf 同一行；End If 和 Else 必须单独占一行。B 把词数写反且允许 Then 换行，C 允许 Else 与语句同行，D 把 ElseIf 写成两个词并允许 End If 与语句同行。",
          "en": "The lecture points out that ElseIf is one word and End If is two, that Then must be on the same line as If or ElseIf, and that End If and Else must appear alone on a line. B swaps the word counts and moves Then down, C puts Else on a statement line, and D makes ElseIf two words and lets End If share a line.",
          "ms": "Kuliah menegaskan bahawa ElseIf satu perkataan dan End If dua perkataan, Then mesti pada baris yang sama dengan If atau ElseIf, serta End If dan Else mesti berada bersendirian pada satu baris. B menukar bilangan perkataan dan meletakkan Then di baris bawah, C meletakkan Else pada baris pernyataan, dan D menjadikan ElseIf dua perkataan serta membenarkan End If berkongsi baris."
        },
        "diff": 2,
        "topic": {
          "zh": "块 If 的语法",
          "en": "Block If syntax",
          "ms": "Sintaks If blok"
        }
      },
      {
        "id": "vb-04-q02",
        "type": "mcq",
        "q": {
          "zh": "按讲义的字符串比较规则（数字总是小于字母），下列哪一个表达式为 True？",
          "en": "Under the lecture's string comparison rules (numbers are always less than letters), which expression is True?",
          "ms": "Di bawah peraturan kuliah untuk membandingkan rentetan (nombor sentiasa kurang daripada huruf), ungkapan manakah yang True?"
        },
        "opts": [
          {
            "zh": "\"HOPE\" > \"HOPELESS\"",
            "en": "\"HOPE\" > \"HOPELESS\"",
            "ms": "\"HOPE\" > \"HOPELESS\""
          },
          {
            "zh": "\"Porsche\" < \"300ZX\"",
            "en": "\"Porsche\" < \"300ZX\"",
            "ms": "\"Porsche\" < \"300ZX\""
          },
          {
            "zh": "\"JOAN\" > \"JOHN\"",
            "en": "\"JOAN\" > \"JOHN\"",
            "ms": "\"JOAN\" > \"JOHN\""
          },
          {
            "zh": "\"300ZX\" < \"Porsche\"",
            "en": "\"300ZX\" < \"Porsche\"",
            "ms": "\"300ZX\" < \"Porsche\""
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "比较从最左字符开始、按 ANSI 顺序逐个向右；数字在排序中总小于字母，所以 \"300ZX\" < \"Porsche\" 为真。B 把大小关系反过来；C 错在 JOAN 的第三个字符小于 H，故 JOAN < JOHN；A 错在一串字符是另一串的前缀时较短的更小，故 HOPE < HOPELESS。",
          "en": "Comparison starts at the leftmost character and moves right in ANSI order, and numbers always rank below letters, so \"300ZX\" < \"Porsche\" is true. B reverses the relation; C fails because the third character of JOAN is less than H, so JOAN < JOHN; A fails because when one string is a prefix of the other the shorter one is smaller, so HOPE < HOPELESS.",
          "ms": "Perbandingan bermula pada aksara paling kiri dan bergerak ke kanan mengikut urutan ANSI, dan nombor sentiasa berada di bawah huruf, jadi \"300ZX\" < \"Porsche\" adalah benar. B menterbalikkan hubungan itu; C salah kerana aksara ketiga JOAN kurang daripada H, jadi JOAN < JOHN; A salah kerana apabila satu rentetan ialah awalan rentetan lain, yang lebih pendek lebih kecil, jadi HOPE < HOPELESS."
        },
        "diff": 3,
        "topic": {
          "zh": "字符串比较",
          "en": "Comparing strings",
          "ms": "Perbandingan rentetan"
        }
      },
      {
        "id": "vb-04-q03",
        "type": "mcq",
        "q": {
          "zh": "在一个同时含有 And 和 Or 的复合条件中，VB 的求值顺序是什么？要改变这个顺序该怎么做？",
          "en": "In a compound condition containing both And and Or, what is VB's order of evaluation, and how can it be changed?",
          "ms": "Dalam syarat majmuk yang mengandungi kedua-dua And dan Or, apakah urutan penilaian VB, dan bagaimanakah ia boleh diubah?"
        },
        "opts": [
          {
            "zh": "先算 Or 再算 And；用括号可以改变顺序",
            "en": "Or is evaluated before And; parentheses can change that order",
            "ms": "Or dinilai sebelum And; kurungan boleh mengubah urutan itu"
          },
          {
            "zh": "先算 And 再算 Or；用括号可以改变顺序",
            "en": "And is evaluated before Or; parentheses can change that order",
            "ms": "And dinilai sebelum Or; kurungan boleh mengubah urutan itu"
          },
          {
            "zh": "一律从左到右计算，括号不起作用",
            "en": "Everything is evaluated strictly left to right, and parentheses have no effect",
            "ms": "Semuanya dinilai dari kiri ke kanan sahaja, dan kurungan tidak memberi kesan"
          },
          {
            "zh": "先算 And 再算 Or；只能另写一个 If 语句才能改变顺序",
            "en": "And is evaluated before Or; only a separate If statement can change the order",
            "ms": "And dinilai sebelum Or; hanya pernyataan If yang berasingan boleh mengubah urutan itu"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义明确指出：当 And 和 Or 一起求值时，And 先于 Or 求值；要改变顺序就把先算的部分放进括号，因为括号内的条件最先求值。A 把两种运算符的先后颠倒，C 否认了优先级和括号的作用，D 否认括号有效。",
          "en": "The lecture states that when both And and Or are evaluated, And is evaluated before Or, and that you change the order by putting the part to evaluate first inside parentheses, since the condition inside the parentheses is evaluated first. A reverses the two operators, C denies both precedence and parentheses, and D denies that parentheses work.",
          "ms": "Kuliah menyatakan bahawa apabila And dan Or dinilai bersama, And dinilai sebelum Or, dan urutan diubah dengan meletakkan bahagian yang perlu dinilai dahulu di dalam kurungan kerana syarat dalam kurungan dinilai dahulu. A menterbalikkan kedua-dua pengendali, C menafikan keutamaan dan kurungan, dan D menafikan keberkesanan kurungan."
        },
        "diff": 2,
        "topic": {
          "zh": "复合条件的求值顺序",
          "en": "Evaluation order of compound conditions",
          "ms": "Urutan penilaian syarat majmuk"
        }
      },
      {
        "id": "vb-04-q04",
        "type": "mcq",
        "q": {
          "zh": "要显示带“是/否”两个按钮的消息框，并根据用户按下的按钮决定下一步，应如何声明接收返回值的变量？",
          "en": "To show a message box with Yes and No buttons and act on the user's choice, how should the variable that receives the return value be declared?",
          "ms": "Untuk memaparkan kotak mesej dengan butang Ya dan Tidak serta bertindak mengikut pilihan pengguna, bagaimanakah pemboleh ubah yang menerima nilai pulangan perlu diisytiharkan?"
        },
        "opts": [
          {
            "zh": "Dim answerBoolean As Boolean",
            "en": "Dim answerBoolean As Boolean",
            "ms": "Dim answerBoolean As Boolean"
          },
          {
            "zh": "Dim answerInteger As Integer",
            "en": "Dim answerInteger As Integer",
            "ms": "Dim answerInteger As Integer"
          },
          {
            "zh": "Dim answerString As String",
            "en": "Dim answerString As String",
            "ms": "Dim answerString As String"
          },
          {
            "zh": "Dim answerDialogResult As DialogResult",
            "en": "Dim answerDialogResult As DialogResult",
            "ms": "Dim answerDialogResult As DialogResult"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "Show 方法返回一个 DialogResult 对象，讲义用 Dim whichButtonDialogResult As DialogResult 接收，再与 DialogResult.Yes 比较。Integer、String、Boolean 都不能正确保存这个返回值，也无法与 DialogResult.Yes 做有意义的比较。",
          "en": "The Show method returns a DialogResult object, which the lecture captures with Dim whichButtonDialogResult As DialogResult before comparing it with DialogResult.Yes. Integer, String and Boolean cannot hold that return value properly and cannot be meaningfully compared with DialogResult.Yes.",
          "ms": "Kaedah Show memulangkan objek DialogResult, yang ditangkap oleh kuliah dengan Dim whichButtonDialogResult As DialogResult sebelum dibandingkan dengan DialogResult.Yes. Integer, String dan Boolean tidak dapat menyimpan nilai pulangan itu dengan betul dan tidak boleh dibandingkan secara bermakna dengan DialogResult.Yes."
        },
        "diff": 2,
        "topic": {
          "zh": "消息框的返回值",
          "en": "Message box return value",
          "ms": "Nilai pulangan kotak mesej"
        }
      },
      {
        "id": "vb-04-q05",
        "type": "mcq",
        "q": {
          "zh": "用 Case 结构判断分数是否在 90 到 100 之间（含两端），下列哪个 Case 子句的写法正确？",
          "en": "Using a Case structure to test whether a score is between 90 and 100 inclusive, which Case clause is written correctly?",
          "ms": "Menggunakan struktur Case untuk menguji sama ada markah berada antara 90 hingga 100 (inklusif), klausa Case manakah yang ditulis dengan betul?"
        },
        "opts": [
          {
            "zh": "Case Is >= 90 And <= 100",
            "en": "Case Is >= 90 And <= 100",
            "ms": "Case Is >= 90 And <= 100"
          },
          {
            "zh": "Case 90..100",
            "en": "Case 90..100",
            "ms": "Case 90..100"
          },
          {
            "zh": "Case 90 To 100",
            "en": "Case 90 To 100",
            "ms": "Case 90 To 100"
          },
          {
            "zh": "Case 90 - 100",
            "en": "Case 90 - 100",
            "ms": "Case 90 - 100"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义规定：表示一段连续的常量范围要用单词 To，所以 Case 90 To 100 正确。B 的“..”不是 VB 的区间写法；A 使用关系运算符时必须用 Is 针对一个比较，不能把两个比较用 And 拼在 Case 标签里；D 的减号会被当成减法或一个负数，不是范围。",
          "en": "The lecture says the word To indicates a range of constants, so Case 90 To 100 is correct. The two dots in B are not VB range syntax; in A, a relational operator must be used with Is on a single comparison and two comparisons cannot be joined with And inside a Case label; the hyphen in D reads as subtraction or a negative number, not a range.",
          "ms": "Kuliah menyatakan perkataan To menunjukkan julat pemalar, jadi Case 90 To 100 betul. Dua titik dalam B bukan sintaks julat VB; dalam A pengendali perhubungan mesti digunakan dengan Is pada satu perbandingan dan dua perbandingan tidak boleh digabungkan dengan And dalam label Case; sengkang dalam D dibaca sebagai penolakan atau nombor negatif, bukan julat."
        },
        "diff": 3,
        "topic": {
          "zh": "Case 结构中的 To 与 Is",
          "en": "To and Is in a Case structure",
          "ms": "To dan Is dalam struktur Case"
        }
      },
      {
        "id": "vb-04-q06",
        "type": "multi",
        "q": {
          "zh": "关于 AndAlso、OrElse 与 And，下列哪些说法与讲义一致？（多选）",
          "en": "Which of the following statements about AndAlso, OrElse and And agree with the lecture? (Select all that apply.)",
          "ms": "Pernyataan manakah tentang AndAlso, OrElse dan And yang selaras dengan kuliah? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "OrElse 被设计成在第一个条件为 False 时短路",
            "en": "OrElse is designed to short-circuit when the first condition is False",
            "ms": "OrElse direka untuk memintas penilaian apabila syarat pertama False"
          },
          {
            "zh": "OrElse 在第一个条件求值为 True 时短路",
            "en": "OrElse short-circuits when the first condition evaluates to True",
            "ms": "OrElse memintas penilaian apabila syarat pertama menilai True"
          },
          {
            "zh": "使用普通的 And 时，VB 会先算出两个表达式，再求 And",
            "en": "With the ordinary And operator, VB evaluates both expressions and then evaluates the And",
            "ms": "Dengan pengendali And biasa, VB menilai kedua-dua ungkapan kemudian menilai And"
          },
          {
            "zh": "AndAlso 只在第一个条件为 True 时才计算第二个条件",
            "en": "AndAlso evaluates the second condition only when the first condition is True",
            "ms": "AndAlso menilai syarat kedua hanya apabila syarat pertama True"
          }
        ],
        "answer": [
          1,
          2,
          3
        ],
        "explain": {
          "zh": "AndAlso 是短路与，左侧为 False 就不再算右侧；OrElse 是短路或，左侧为 True 就短路；普通 And 则先把两个表达式都求出 True/False 再求值。A 把 OrElse 的触发条件说反了，那正是 AndAlso 的行为。",
          "en": "AndAlso is short-circuit And, so a False left side stops evaluation of the right side; OrElse is short-circuit Or, so a True left side short-circuits; ordinary And evaluates both expressions before applying And. A reverses the trigger for OrElse, describing what AndAlso does.",
          "ms": "AndAlso ialah And pintasan litar, jadi sebelah kiri yang False menghentikan penilaian sebelah kanan; OrElse ialah Or pintasan litar, jadi sebelah kiri yang True memintas penilaian; And biasa menilai kedua-dua ungkapan dahulu sebelum menggunakan And. A menterbalikkan pencetus OrElse dan menerangkan tingkah laku AndAlso."
        },
        "diff": 3,
        "topic": {
          "zh": "短路运算",
          "en": "Short-circuit evaluation",
          "ms": "Penilaian pintasan litar"
        }
      },
      {
        "id": "vb-04-q07",
        "type": "tf",
        "q": {
          "zh": "块 If 若没有 Else 子句，条件为假时会跳过 Then 后面的语句，继续执行 End If 之后的语句。",
          "en": "If a block If has no Else clause, a false condition skips the statements after Then and execution continues with the statements after End If.",
          "ms": "Jika If blok tidak mempunyai klausa Else, syarat yang False akan melangkau pernyataan selepas Then dan pelaksanaan diteruskan dengan pernyataan selepas End If."
        },
        "answer": true,
        "explain": {
          "zh": "讲义说条件为真时只执行 Then 子句、为假时只执行 Else 子句（如果存在）。没有 Else 就没有替代分支，条件为假时 Then 与 Else 之间的语句整段被跳过，控制直接转到 End If 之后继续。",
          "en": "The lecture says that when the condition is true only the Then clause runs, and when it is false only the Else clause runs if present. With no Else there is no alternative branch, so a false condition skips the whole block between Then and End If and control continues after End If.",
          "ms": "Kuliah menyatakan apabila syarat benar hanya klausa Then dilaksanakan, dan apabila salah hanya klausa Else dilaksanakan jika ada. Tanpa Else tiada cabang alternatif, jadi syarat yang salah melangkau seluruh blok antara Then dan End If dan kawalan diteruskan selepas End If."
        },
        "diff": 2,
        "topic": {
          "zh": "没有 Else 的 If",
          "en": "If without Else",
          "ms": "If tanpa Else"
        }
      },
      {
        "id": "vb-04-q08",
        "type": "fill",
        "q": {
          "zh": "在消息框的多行输出中，用哪个 ControlChars 常量强制换到下一行？（写常量名）",
          "en": "In a multi-line message box, which ControlChars constant forces output to the next line? (Give the constant name.)",
          "ms": "Dalam output kotak mesej berbilang baris, pemalar ControlChars yang manakah memaksa output ke baris berikutnya? (Berikan nama pemalar.)"
        },
        "answer": [
          "NewLine",
          "ControlChars.NewLine",
          "换行",
          "Baris Baharu"
        ],
        "explain": {
          "zh": "ControlChars.NewLine 用来强制换到下一行，效果与回车换行组合 CrLf 相同；连续使用多个 NewLine 常量可以产生空行、加大行距。CrLf 是回车加换行两个字符的组合，Tab 是制表符，都不是本题问的换行常量。",
          "en": "ControlChars.NewLine is used to force the output onto the next line and has the same effect as the carriage-return/linefeed combination CrLf; combining several NewLine constants produces blank lines and double spacing. CrLf is the two-character carriage-return plus linefeed combination and Tab is a tab character, neither being the new-line constant asked for.",
          "ms": "ControlChars.NewLine digunakan untuk memaksa output ke baris berikutnya dan mempunyai kesan yang sama seperti gabungan pulangan pengangkutan dan suapan baris, CrLf; menggabungkan beberapa pemalar NewLine menghasilkan baris kosong dan jarak berganda. CrLf ialah gabungan dua aksara pulangan pengangkutan dengan suapan baris dan Tab ialah aksara tab, bukan pemalar baris baharu yang ditanyakan."
        },
        "diff": 1,
        "topic": {
          "zh": "ControlChars.NewLine",
          "en": "ControlChars.NewLine",
          "ms": "ControlChars.NewLine"
        }
      }
    ],
    "vb-05": [
      {
        "id": "vb-05-q01",
        "type": "mcq",
        "q": {
          "zh": "关于参数传递方式，下列哪一项与讲义一致？",
          "en": "Which statement about how arguments are passed agrees with the lecture?",
          "ms": "Pernyataan manakah tentang cara penghantaran argumen yang selaras dengan kuliah?"
        },
        "opts": [
          {
            "zh": "ByVal 传递值的副本，过程无法改动原值；ByRef 传递内存地址的引用，过程可以改动原值",
            "en": "ByVal sends a copy of the value, so the original cannot be altered; ByRef sends a reference to the memory location, so the original can be altered",
            "ms": "ByVal menghantar salinan nilai sehingga nilai asal tidak boleh diubah; ByRef menghantar rujukan kepada lokasi memori sehingga nilai asal boleh diubah"
          },
          {
            "zh": "ByVal 传递内存地址的引用，过程可以改动原值；ByRef 只传递值的副本",
            "en": "ByVal sends a reference to the memory location and the original can be altered; ByRef sends only a copy of the value",
            "ms": "ByVal menghantar rujukan kepada lokasi memori dan nilai asal boleh diubah; ByRef hanya menghantar salinan nilai"
          },
          {
            "zh": "ByVal 与 ByRef 都传递副本，区别只在参数的个数",
            "en": "ByVal and ByRef both send a copy, and they differ only in the number of arguments",
            "ms": "ByVal dan ByRef kedua-duanya menghantar salinan, dan bezanya hanya pada bilangan argumen"
          },
          {
            "zh": "不写 ByVal 或 ByRef 时，参数默认按引用传递",
            "en": "If neither ByVal nor ByRef is written, arguments are passed by reference by default",
            "ms": "Jika ByVal atau ByRef tidak ditulis, argumen secara lalai dihantar melalui rujukan"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义说 ByVal 传递参数值的副本、原值不能被改动；ByRef 传递原值所在内存位置的引用，因此过程可以改动它。B 把两者对调；C 说两者都传副本，错误；D 与讲义相反——不写时默认按值传递（ByVal）。",
          "en": "The lecture says ByVal sends a copy of the argument's value so the original cannot be altered, while ByRef sends a reference to the memory location of the original, so the procedure may change it. B swaps the two, C wrongly makes both copies, and D is the opposite of the lecture's default, which is passing by value.",
          "ms": "Kuliah menyatakan ByVal menghantar salinan nilai argumen sehingga nilai asal tidak boleh diubah, manakala ByRef menghantar rujukan kepada lokasi memori nilai asal sehingga prosedur boleh mengubahnya. B menukar kedua-duanya, C salah menyatakan kedua-duanya salinan, dan D bertentangan dengan lalai kuliah, iaitu penghantaran melalui nilai."
        },
        "diff": 2,
        "topic": {
          "zh": "ByVal 与 ByRef",
          "en": "ByVal versus ByRef",
          "ms": "ByVal berbanding ByRef"
        }
      },
      {
        "id": "vb-05-q02",
        "type": "mcq",
        "q": {
          "zh": "要显示颜色对话框，并要求用户必须先作出响应才能继续，应调用哪个方法？它是模态还是非模态？",
          "en": "To display a colour dialog and require the user to respond before continuing, which method should be called, and is it modal or modeless?",
          "ms": "Untuk memaparkan kotak dialog warna dan mewajibkan pengguna bertindak balas sebelum meneruskan, kaedah manakah perlu dipanggil, dan adakah ia modal atau tanpa modal?"
        },
        "opts": [
          {
            "zh": "Show；模态，用户必须响应后才能继续",
            "en": "Show; modal, the user must respond before continuing",
            "ms": "Show; modal, pengguna mesti bertindak balas sebelum meneruskan"
          },
          {
            "zh": "ShowDialog；模态，用户必须响应后才能继续",
            "en": "ShowDialog; modal, the user must respond before continuing",
            "ms": "ShowDialog; modal, pengguna mesti bertindak balas sebelum meneruskan"
          },
          {
            "zh": "ShowDialog；非模态，用户可以忽略它",
            "en": "ShowDialog; modeless, the user may ignore it",
            "ms": "ShowDialog; tanpa modal, pengguna boleh mengabaikannya"
          },
          {
            "zh": "Show；非模态，但它会阻止其他代码执行",
            "en": "Show; modeless, but it blocks other code from executing",
            "ms": "Show; tanpa modal, tetapi ia menghalang kod lain daripada dilaksanakan"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "对话框“停留在应用程序之上、必须被响应”时称为模态，讲义用 ShowDialog 以模态方式显示通用对话框。Show 显示的是非模态窗口，用户可以忽略它，也不会阻断其他代码；A 混淆了方法与模态性，C、D 把模态/非模态的后果说反。",
          "en": "A dialog is modal when it stays on top of the application and must be responded to, and the lecture uses ShowDialog to display a common dialog modally. Show displays a modeless window that the user may ignore and that does not block other code; A mixes up the method and the modality, while C and D reverse the consequences.",
          "ms": "Dialog dikatakan modal apabila ia kekal di atas aplikasi dan mesti dijawab, dan kuliah menggunakan ShowDialog untuk memaparkan dialog biasa secara modal. Show memaparkan tetingkap tanpa modal yang boleh diabaikan dan tidak menyekat kod lain; A mengelirukan kaedah dengan modaliti, manakala C dan D menterbalikkan kesannya."
        },
        "diff": 2,
        "topic": {
          "zh": "模态与非模态对话框",
          "en": "Modal and modeless dialogs",
          "ms": "Dialog modal dan tanpa modal"
        }
      },
      {
        "id": "vb-05-q03",
        "type": "mcq",
        "q": {
          "zh": "Sub 过程与 Function 过程的关键区别是什么？",
          "en": "What is the key difference between a Sub procedure and a Function procedure?",
          "ms": "Apakah perbezaan utama antara prosedur Sub dan prosedur Fungsi?"
        },
        "opts": [
          {
            "zh": "Sub 可以带参数；Function 不能带参数",
            "en": "A Sub can take arguments; a Function cannot take arguments",
            "ms": "Sub boleh menerima argumen; Fungsi tidak boleh menerima argumen"
          },
          {
            "zh": "Sub 必须返回值；Function 只执行动作，不返回值",
            "en": "A Sub must return a value; a Function only performs actions and returns nothing",
            "ms": "Sub mesti memulangkan nilai; Fungsi hanya melakukan tindakan dan tidak memulangkan nilai"
          },
          {
            "zh": "Sub 只执行动作；Function 既执行动作又返回一个值，且必须声明返回值的数据类型",
            "en": "A Sub only performs actions; a Function performs actions and returns a value, so a data type for that value must be declared",
            "ms": "Sub hanya melakukan tindakan; Fungsi melakukan tindakan dan memulangkan nilai, jadi jenis data nilai itu mesti diisytiharkan"
          },
          {
            "zh": "Sub 必须写在窗体类中；Function 必须写在模块中",
            "en": "A Sub must be written in a form class; a Function must be written in a module",
            "ms": "Sub mesti ditulis dalam kelas borang; Fungsi mesti ditulis dalam modul"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义把一般过程分成两类：Sub 执行动作，Function 既执行动作又返回一个值，因此要在参数表后声明返回值的数据类型。B 把两者说反；A 错在 Function 可以有一个或多个参数；D 错在位置不是区别，两者都可以写在窗体或模块里。",
          "en": "The lecture divides general procedures into two kinds: a Sub performs actions, while a Function performs actions and returns a value, which is why its data type is declared after the parameter list. B reverses them, A is wrong because a Function can take one or more arguments, and D is wrong because location is not the distinction; either can be written in a form or a module.",
          "ms": "Kuliah membahagikan prosedur am kepada dua jenis: Sub melakukan tindakan, manakala Fungsi melakukan tindakan dan memulangkan nilai, sebab itu jenis datanya diisytiharkan selepas senarai parameter. B menterbalikkan kedua-duanya, A salah kerana Fungsi boleh menerima satu atau lebih argumen, dan D salah kerana tempat penulisan bukan perbezaannya; kedua-duanya boleh ditulis dalam borang atau modul."
        },
        "diff": 1,
        "topic": {
          "zh": "Sub 与 Function",
          "en": "Sub versus Function",
          "ms": "Sub berbanding Fungsi"
        }
      },
      {
        "id": "vb-05-q04",
        "type": "mcq",
        "q": {
          "zh": "按讲义列出的 Windows 菜单规范，下列哪一项正确？",
          "en": "According to the Windows menu standards listed in the lecture, which statement is correct?",
          "ms": "Menurut piawaian menu Windows yang disenaraikan dalam kuliah, pernyataan manakah betul?"
        },
        "opts": [
          {
            "zh": "菜单项不需要访问键，只要设置 ShortcutKeys 就够了",
            "en": "Menu items do not need access keys; setting ShortcutKeys is enough",
            "ms": "Item menu tidak memerlukan kekunci akses; menetapkan ShortcutKeys sudah memadai"
          },
          {
            "zh": "File 菜单放在最右端，Help 放在最左端",
            "en": "The File menu goes at the right end and Help at the left end",
            "ms": "Menu File diletakkan di hujung kanan dan Help di hujung kiri"
          },
          {
            "zh": "File 菜单中不应出现 Exit，退出命令应放在 Edit 菜单里",
            "en": "Exit should not appear in the File menu; the exit command belongs in the Edit menu",
            "ms": "Exit tidak sepatutnya ada dalam menu File; arahan keluar perlu diletakkan dalam menu Edit"
          },
          {
            "zh": "File 菜单放在菜单栏最左端，其最后一项是 Exit；若有 Help，则放在最右端",
            "en": "The File menu goes at the left end of the menu bar and ends with the Exit command; Help, if included, goes at the right end",
            "ms": "Menu File diletakkan di hujung kiri bar menu dan diakhiri dengan arahan Exit; Help, jika ada, diletakkan di hujung kanan"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "讲义规定：File 菜单放最左端并以 Exit 命令结束，Help 若包含则放最右端，同时要设置键盘访问键、按标准使用快捷键。B 把两端对调；C 把 Exit 移出 File；A 取消了访问键，都违反讲义列出的规范。",
          "en": "The lecture requires the File menu at the left end of the menu bar, ending with the Exit command, with Help at the right end if included, and it also asks for keyboard access keys and standard shortcut keys. B swaps the two ends, C moves Exit out of File, and A drops the access keys, so all three break the stated standards.",
          "ms": "Kuliah menetapkan menu File di hujung kiri bar menu dan diakhiri dengan arahan Exit, manakala Help diletakkan di hujung kanan jika ada, serta menghendaki kekunci akses papan kekunci dan kekunci pintasan mengikut piawaian. B menukar kedua-dua hujung, C memindahkan Exit keluar daripada File, dan A membuang kekunci akses, jadi ketiga-tiganya melanggar piawaian tersebut."
        },
        "diff": 2,
        "topic": {
          "zh": "Windows 菜单规范",
          "en": "Windows menu standards",
          "ms": "Piawaian menu Windows"
        }
      },
      {
        "id": "vb-05-q05",
        "type": "mcq",
        "q": {
          "zh": "要为某个控件提供右键弹出的快捷菜单，应添加哪个组件？它与普通菜单有什么不同？",
          "en": "To give a control a shortcut menu that pops up on right-click, which component should be added, and how does it differ from an ordinary menu?",
          "ms": "Untuk memberikan sesuatu kawalan menu pintasan yang muncul apabila klik kanan, komponen manakah perlu ditambah, dan bagaimanakah ia berbeza daripada menu biasa?"
        },
        "opts": [
          {
            "zh": "MenuStrip；它没有顶层菜单，只有菜单项",
            "en": "MenuStrip; it has no top-level menu, only menu items",
            "ms": "MenuStrip; ia tidak mempunyai menu peringkat atas, hanya item menu"
          },
          {
            "zh": "ContextMenuStrip；它没有顶层菜单，只有菜单项",
            "en": "ContextMenuStrip; it has no top-level menu, only menu items",
            "ms": "ContextMenuStrip; ia tidak mempunyai menu peringkat atas, hanya item menu"
          },
          {
            "zh": "ContextMenuStrip；它的第一项必须是 File 菜单",
            "en": "ContextMenuStrip; its first item must be the File menu",
            "ms": "ContextMenuStrip; item pertamanya mesti menu File"
          },
          {
            "zh": "ToolStrip；它只能包含分隔条",
            "en": "ToolStrip; it can contain only separator bars",
            "ms": "ToolStrip; ia hanya boleh mengandungi bar pemisah"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "右键弹出的叫上下文菜单（快捷键菜单），要添加 ContextMenuStrip 组件，它出现在组件栏里，而且没有顶层菜单、只有菜单项；一个应用可以有多个上下文菜单。MenuStrip 是菜单栏用的容器；File 放在第一项是菜单栏的规范，不适用于上下文菜单；ToolStrip 也不只放分隔条。",
          "en": "The right-click menu is a context menu, created by adding a ContextMenuStrip component, which appears in the component tray and has no top-level menu, only menu items; an application may have several context menus. MenuStrip is the container for a menu bar, the File-first rule applies to the menu bar rather than a context menu, and a ToolStrip is not limited to separator bars.",
          "ms": "Menu klik kanan ialah menu konteks, dicipta dengan menambah komponen ContextMenuStrip yang muncul dalam dulang komponen dan tidak mempunyai menu peringkat atas, hanya item menu; sesuatu aplikasi boleh mempunyai beberapa menu konteks. MenuStrip ialah bekas untuk bar menu, peraturan File dahulu terpakai pada bar menu dan bukan menu konteks, dan ToolStrip tidak terhad kepada bar pemisah."
        },
        "diff": 2,
        "topic": {
          "zh": "上下文菜单",
          "en": "Context menus",
          "ms": "Menu konteks"
        }
      },
      {
        "id": "vb-05-q06",
        "type": "multi",
        "q": {
          "zh": "调用过程并传入参数时，哪些条件必须满足？（多选）",
          "en": "When calling a procedure and passing arguments, which conditions must be met? (Select all that apply.)",
          "ms": "Apabila memanggil prosedur dan menghantar argumen, syarat manakah mesti dipenuhi? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "参数的个数必须一致",
            "en": "The number of arguments must match",
            "ms": "Bilangan argumen mesti sepadan"
          },
          {
            "zh": "参数的顺序必须一致",
            "en": "The sequence of arguments must match",
            "ms": "Urutan argumen mesti sepadan"
          },
          {
            "zh": "实参名必须与过程中形参名完全相同",
            "en": "The argument names must be exactly the same in the call and in the procedure",
            "ms": "Nama argumen mesti sama tepat dalam panggilan dan dalam prosedur"
          },
          {
            "zh": "参数的数据类型必须一致",
            "en": "The data type of the arguments must match",
            "ms": "Jenis data argumen mesti sepadan"
          }
        ],
        "answer": [
          0,
          1,
          3
        ],
        "explain": {
          "zh": "讲义要求参数的个数、顺序和数据类型都必须匹配，这样传入的值才能正确落到对应的参数上。C 不成立：讲义明确说参数名在两处不必相同，名字只是过程内部的标签，真正起约束作用的是个数、顺序和类型。",
          "en": "The lecture requires the number, sequence and data type of the arguments to match so that each passed value lands on the right parameter. C is false: the lecture says explicitly that the argument name need not be the same in both places, since the name is only a local label and the real constraints are number, sequence and type.",
          "ms": "Kuliah menghendaki bilangan, urutan dan jenis data argumen sepadan supaya setiap nilai yang dihantar sampai kepada parameter yang betul. C tidak benar: kuliah menyatakan dengan jelas bahawa nama argumen tidak perlu sama di kedua-dua tempat, kerana nama hanyalah label dalaman dan kekangan sebenar ialah bilangan, urutan dan jenis."
        },
        "diff": 2,
        "topic": {
          "zh": "实参与形参的匹配",
          "en": "Matching arguments to parameters",
          "ms": "Padanan argumen dengan parameter"
        }
      },
      {
        "id": "vb-05-q07",
        "type": "tf",
        "q": {
          "zh": "Sub 过程中的代码不会自行执行，必须由另一个过程调用才会运行。",
          "en": "The code in a Sub procedure does not run by itself; it executes only when called from another procedure.",
          "ms": "Kod dalam prosedur Sub tidak berjalan dengan sendirinya; ia hanya dilaksanakan apabila dipanggil daripada prosedur lain."
        },
        "answer": true,
        "explain": {
          "zh": "讲义指出：要使用 Sub 过程，必须从另一个过程调用它；Sub 中的代码除非被调用，否则不会执行。例如 ChangeTitleButton_Click 中调用 SelectColor(originalColor)。事件过程由 VB 在事件发生时调用，本质上也是“被调用”。",
          "en": "The lecture says that to use a Sub procedure you call it from another procedure, and that code in a Sub cannot be executed unless it is called, as when ChangeTitleButton_Click calls SelectColor(originalColor). Event procedures are called by VB when the event occurs, which is also a call.",
          "ms": "Kuliah menyatakan bahawa untuk menggunakan prosedur Sub anda memanggilnya daripada prosedur lain, dan kod dalam Sub tidak boleh dilaksanakan melainkan dipanggil, seperti apabila ChangeTitleButton_Click memanggil SelectColor(originalColor). Prosedur peristiwa dipanggil oleh VB apabila peristiwa berlaku, yang juga merupakan satu panggilan."
        },
        "diff": 1,
        "topic": {
          "zh": "Sub 过程必须被调用",
          "en": "A Sub must be called",
          "ms": "Sub mesti dipanggil"
        }
      },
      {
        "id": "vb-05-q08",
        "type": "fill",
        "q": {
          "zh": "通用颜色对话框关闭后，用户选中的颜色保存在该对话框组件的哪个属性中？",
          "en": "After the common colour dialog closes, the colour the user selected is stored in which property of that dialog component?",
          "ms": "Selepas kotak dialog warna biasa ditutup, warna yang dipilih oleh pengguna disimpan dalam sifat manakah pada komponen dialog itu?"
        },
        "answer": [
          "Color",
          "Color property",
          "ColorDialog1.Color",
          "Warna",
          "颜色"
        ],
        "explain": {
          "zh": "选中的颜色保存在 Color 属性中，可以再赋给别的对象，例如 TitleLabel.BackColor = ColorDialog1.Color。调用 ShowDialog 之前先把 Color 设成原值，对话框打开时就会预选当前颜色；若用户按 Cancel，属性保持原样。",
          "en": "The selected colour is stored in the Color property and can then be assigned to another object, for example TitleLabel.BackColor = ColorDialog1.Color. Setting Color to the existing value before ShowDialog makes the current colour preselected, and if the user clicks Cancel the property settings stay unchanged.",
          "ms": "Warna yang dipilih disimpan dalam sifat Color dan kemudian boleh diberikan kepada objek lain, contohnya TitleLabel.BackColor = ColorDialog1.Color. Menetapkan Color kepada nilai sedia ada sebelum ShowDialog menjadikan warna semasa dipilih terlebih dahulu, dan jika pengguna menekan Cancel tetapan sifat kekal tidak berubah."
        },
        "diff": 2,
        "topic": {
          "zh": "ColorDialog 的 Color 属性",
          "en": "The Color property of ColorDialog",
          "ms": "Sifat Color ColorDialog"
        }
      }
    ],
    "vb-06": [
      {
        "id": "vb-06-q01",
        "type": "mcq",
        "q": {
          "zh": "对非模态窗体与模态窗体调用 Close 方法，结果有什么不同？",
          "en": "What difference does the Close method make for a modeless form compared with a modal form?",
          "ms": "Apakah perbezaan kesan kaedah Close terhadap borang tanpa modal berbanding borang modal?"
        },
        "opts": [
          {
            "zh": "非模态窗体被销毁并从内存中移除；模态窗体只是被隐藏",
            "en": "The modeless form is destroyed and removed from memory; the modal form is only hidden",
            "ms": "Borang tanpa modal dimusnahkan dan dikeluarkan daripada ingatan; borang modal hanya disembunyikan"
          },
          {
            "zh": "两者都被销毁并从内存中移除",
            "en": "Both are destroyed and removed from memory",
            "ms": "Kedua-duanya dimusnahkan dan dikeluarkan daripada ingatan"
          },
          {
            "zh": "两者都只是被隐藏，实例仍留在内存中",
            "en": "Both are only hidden and their instances stay in memory",
            "ms": "Kedua-duanya hanya disembunyikan dan instansnya kekal dalam ingatan"
          },
          {
            "zh": "非模态窗体只是被隐藏；模态窗体被销毁",
            "en": "The modeless form is only hidden; the modal form is destroyed",
            "ms": "Borang tanpa modal hanya disembunyikan; borang modal dimusnahkan"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义说 Close 对非模态窗体与模态窗体的行为不同：非模态窗体被销毁、实例从内存移除；模态窗体只是被隐藏。B、C 把两者当成同一种行为，D 把两者的结果对调。Hide 方法则是隐藏并保留实例，与本题问的 Close 不同。",
          "en": "The lecture says Close behaves differently for the two kinds: a modeless form is destroyed and its instance removed from memory, while a modal form is only hidden. B and C treat both alike, and D swaps the two outcomes. The Hide method hides a form while keeping its instance, which is not what Close does.",
          "ms": "Kuliah menyatakan Close berkelakuan berbeza bagi kedua-dua jenis: borang tanpa modal dimusnahkan dan instansnya dikeluarkan daripada ingatan, manakala borang modal hanya disembunyikan. B dan C menyamakan kedua-duanya, dan D menukar kedua-dua hasil itu. Kaedah Hide menyembunyikan borang sambil mengekalkan instansnya, berbeza daripada Close."
        },
        "diff": 3,
        "topic": {
          "zh": "Close 对两种窗体的不同行为",
          "en": "How Close differs for the two kinds of form",
          "ms": "Kesan Close pada dua jenis borang"
        }
      },
      {
        "id": "vb-06-q02",
        "type": "mcq",
        "q": {
          "zh": "多窗体项目中，某个模块级变量需要被同一项目的其他窗体直接访问。应使用哪个访问级别关键字？",
          "en": "In a multiform project, a module-level variable must be directly accessible from other forms in the same project. Which access-level keyword should be used?",
          "ms": "Dalam projek berbilang borang, sesuatu pemboleh ubah peringkat modul perlu diakses terus oleh borang lain dalam projek yang sama. Kata kunci tahap akses manakah perlu digunakan?"
        },
        "opts": [
          {
            "zh": "Private",
            "en": "Private",
            "ms": "Private"
          },
          {
            "zh": "Friend",
            "en": "Friend",
            "ms": "Friend"
          },
          {
            "zh": "Public",
            "en": "Public",
            "ms": "Public"
          },
          {
            "zh": "Static",
            "en": "Static",
            "ms": "Static"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "Friend 允许同一项目的其他窗体访问该变量，讲义还特别说不建议用 Public 做多窗体共享。Private 只允许在声明它的类（窗体）内访问；Public 会让所有其他程序都能访问；Static 决定的是变量的生存期而不是访问级别。",
          "en": "Friend allows other forms in the same project to access the variable, and the lecture specifically advises against using Public for multi-form access. Private allows access only inside the class or form where it is declared, Public exposes it to all other programs, and Static governs lifetime rather than access level.",
          "ms": "Friend membolehkan borang lain dalam projek yang sama mengakses pemboleh ubah itu, dan kuliah khusus menasihatkan agar Public tidak digunakan untuk perkongsian berbilang borang. Private hanya membenarkan akses dalam kelas atau borang tempat ia diisytiharkan, Public mendedahkannya kepada semua program lain, dan Static mengawal tempoh hayat, bukan tahap akses."
        },
        "diff": 2,
        "topic": {
          "zh": "多窗体变量的访问级别",
          "en": "Access level for multiform variables",
          "ms": "Tahap akses pemboleh ubah berbilang borang"
        }
      },
      {
        "id": "vb-06-q03",
        "type": "mcq",
        "q": {
          "zh": "窗体第一次显示时，Load、Activated、Paint 三个事件的先后顺序是什么？",
          "en": "When a form is shown for the first time, in what order do the Load, Activated and Paint events occur?",
          "ms": "Apabila borang dipaparkan buat pertama kali, dalam urutan manakah peristiwa Load, Activated dan Paint berlaku?"
        },
        "opts": [
          {
            "zh": "Load → Paint → Activated",
            "en": "Load → Paint → Activated",
            "ms": "Load → Paint → Activated"
          },
          {
            "zh": "Activated → Load → Paint",
            "en": "Activated → Load → Paint",
            "ms": "Activated → Load → Paint"
          },
          {
            "zh": "Load → Activated → Paint",
            "en": "Load → Activated → Paint",
            "ms": "Load → Activated → Paint"
          },
          {
            "zh": "Paint → Load → Activated",
            "en": "Paint → Load → Activated",
            "ms": "Paint → Load → Activated"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义的窗体事件顺序是 Load、Activated、Paint、Deactivate、FormClosing、FormClosed。Load 在窗体第一次显示前发生，通常只有一次；Activated 在控制权转给窗体时发生；Paint 在窗体任何部分被重绘时发生。其余选项都把 Activated 或 Paint 放到了 Load 之前。",
          "en": "The lecture's sequence is Load, Activated, Paint, Deactivate, FormClosing, FormClosed. Load occurs before the form is first displayed and usually only once, Activated occurs when control passes to the form, and Paint occurs whenever any portion of the form is redrawn. The other options place Activated or Paint before Load.",
          "ms": "Urutan dalam kuliah ialah Load, Activated, Paint, Deactivate, FormClosing, FormClosed. Load berlaku sebelum borang dipaparkan buat pertama kali dan biasanya sekali sahaja, Activated berlaku apabila kawalan berpindah kepada borang, dan Paint berlaku apabila mana-mana bahagian borang dilukis semula. Pilihan lain meletakkan Activated atau Paint sebelum Load."
        },
        "diff": 2,
        "topic": {
          "zh": "窗体事件的顺序",
          "en": "Sequence of form events",
          "ms": "Urutan peristiwa borang"
        }
      },
      {
        "id": "vb-06-q04",
        "type": "mcq",
        "q": {
          "zh": "要让项目启动时先显示自己做的启动画面，按讲义应怎样设置，并且不应改动什么？",
          "en": "To show your own splash screen when the project starts, what should be set according to the lecture, and what should not be changed?",
          "ms": "Untuk memaparkan skrin pembuka anda sendiri apabila projek bermula, apakah yang perlu ditetapkan menurut kuliah, dan apakah yang tidak patut diubah?"
        },
        "opts": [
          {
            "zh": "在代码中用 SplashForm.Show() 显示，不必改动任何项目属性",
            "en": "Call SplashForm.Show() in code and leave all project properties unchanged",
            "ms": "Panggil SplashForm.Show() dalam kod dan biarkan semua sifat projek tidak berubah"
          },
          {
            "zh": "把 Startup object 改成启动画面窗体；不要改动 Splash screen 设置",
            "en": "Change Startup object to the splash form; do not change the Splash screen setting",
            "ms": "Tukar Startup object kepada borang skrin pembuka; jangan ubah tetapan Splash screen"
          },
          {
            "zh": "把 Shutdown mode 改成启动画面窗体；不要改动 Startup object",
            "en": "Change Shutdown mode to the splash form; do not change Startup object",
            "ms": "Tukar Shutdown mode kepada borang skrin pembuka; jangan ubah Startup object"
          },
          {
            "zh": "在 Project Designer 的 Splash screen 下拉列表中选中该窗体；不要改动 Startup object 与 Shutdown mode",
            "en": "Select that form in the Splash screen drop-down list of the Project Designer; do not change Startup object or Shutdown mode",
            "ms": "Pilih borang itu dalam senarai juntai bawah Splash screen di Project Designer; jangan ubah Startup object atau Shutdown mode"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "讲义的做法是：从 Project 菜单打开 Project Designer，把 Splash screen 下拉列表设为新建的启动画面窗体，并要求不要改动 Startup object 或 Shutdown mode。这样启动画面会在启动窗体加载时显示，并在启动窗体激活时消失；把启动画面设成 Startup object 会改变整个启动与关闭流程。",
          "en": "The lecture opens the Project Designer from the Project menu, sets the Splash screen drop-down to the new splash form, and says not to change Startup object or Shutdown mode. The splash then appears while the startup form loads and disappears when that form activates; making the splash the Startup object would change the whole start-up and shutdown flow.",
          "ms": "Kuliah membuka Project Designer dari menu Project, menetapkan senarai Splash screen kepada borang skrin pembuka baharu, dan meminta agar Startup object atau Shutdown mode tidak diubah. Skrin pembuka kemudian muncul semasa borang permulaan dimuatkan dan hilang apabila borang itu aktif; menjadikan skrin pembuka sebagai Startup object akan mengubah keseluruhan aliran permulaan dan penutupan."
        },
        "diff": 2,
        "topic": {
          "zh": "启动画面的设置",
          "en": "Setting up the splash screen",
          "ms": "Menetapkan skrin pembuka"
        }
      },
      {
        "id": "vb-06-q05",
        "type": "mcq",
        "q": {
          "zh": "某个过程需要在多次调用之间保留计数器的值。按讲义应如何声明这个局部变量？",
          "en": "A procedure must keep a counter's value between successive calls. According to the lecture, how should this local variable be declared?",
          "ms": "Sesuatu prosedur perlu mengekalkan nilai pembilang antara panggilan berturut-turut. Menurut kuliah, bagaimanakah pemboleh ubah tempatan ini perlu diisytiharkan?"
        },
        "opts": [
          {
            "zh": "用 Const 声明，使计数器的值不能被修改",
            "en": "Declare it with Const so the counter's value cannot be changed",
            "ms": "Isytiharkan dengan Const supaya nilai pembilang tidak boleh diubah"
          },
          {
            "zh": "用 Dim 声明为局部变量，每次调用都会保留上一次的值",
            "en": "Declare it as a local variable with Dim; each call keeps the value from the previous call",
            "ms": "Isytiharkan sebagai pemboleh ubah tempatan dengan Dim; setiap panggilan mengekalkan nilai panggilan sebelumnya"
          },
          {
            "zh": "用 Static 声明为静态局部变量，它的值在项目运行期间保留",
            "en": "Declare it as a static local variable with Static; its value is retained for the life of the project",
            "ms": "Isytiharkan sebagai pemboleh ubah tempatan statik dengan Static; nilainya kekal sepanjang hayat projek"
          },
          {
            "zh": "用 Public 声明，使它成为其他窗体的全局变量",
            "en": "Declare it with Public so it becomes a global variable for other forms",
            "ms": "Isytiharkan dengan Public supaya ia menjadi pemboleh ubah global untuk borang lain"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "Static 用于声明局部或块级变量，并让它在项目运行期间一直保留值，正适合跨调用累加的计数器。Dim 声明的局部变量每次调用都会重置；Const 的值根本不能改；Public 管的是访问级别、且只用于模块级变量，不解决“跨调用保留值”。",
          "en": "Static declares local or block-level variables whose value is retained for the life of the project, which suits a counter accumulated across calls. A Dim local variable is reset on every call, a Const value cannot change at all, and Public is an access level for module-level variables that does not provide retention between calls.",
          "ms": "Static mengisytiharkan pemboleh ubah tempatan atau peringkat blok yang nilainya kekal sepanjang hayat projek, sesuai untuk pembilang yang dijumlahkan merentas panggilan. Pemboleh ubah tempatan Dim ditetapkan semula pada setiap panggilan, nilai Const tidak boleh berubah sama sekali, dan Public ialah tahap akses untuk pemboleh ubah peringkat modul yang tidak mengekalkan nilai antara panggilan."
        },
        "diff": 2,
        "topic": {
          "zh": "Static 变量",
          "en": "Static variables",
          "ms": "Pemboleh ubah Static"
        }
      },
      {
        "id": "vb-06-q06",
        "type": "multi",
        "q": {
          "zh": "关于模态窗体，下列哪些说法是正确的？（多选）",
          "en": "Which of the following statements about a modal form are correct? (Select all that apply.)",
          "ms": "Pernyataan manakah tentang borang modal yang betul? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "在用户响应并关闭该模态窗体之前，其他程序代码无法执行",
            "en": "No other program code can execute until the user responds to and closes the modal form",
            "ms": "Tiada kod program lain boleh dilaksanakan sehingga pengguna bertindak balas terhadap borang modal itu dan menutupnya"
          },
          {
            "zh": "ShowDialog 方法以模态方式显示窗体",
            "en": "The ShowDialog method displays a form modally",
            "ms": "Kaedah ShowDialog memaparkan borang secara modal"
          },
          {
            "zh": "用户通常通过单击按钮来响应该模态窗体",
            "en": "The user usually responds to the modal form by clicking a button",
            "ms": "Pengguna biasanya bertindak balas terhadap borang modal itu dengan mengklik butang"
          },
          {
            "zh": "用户可以不响应这个模态窗体，直接切换到项目中的另一个窗体",
            "en": "The user may leave the modal form unanswered and switch to another form in the project",
            "ms": "Pengguna boleh membiarkan borang modal itu tanpa jawapan dan bertukar ke borang lain dalam projek"
          }
        ],
        "answer": [
          0,
          1,
          2
        ],
        "explain": {
          "zh": "模态窗体要求用户必须作出响应：其他代码要等它被关闭后才继续，响应方式通常是点击按钮，而显示它用的是 ShowDialog。D 描述的其实是非模态（用 Show 显示）的行为，用户那样做正是模态窗体所禁止的。",
          "en": "A modal form demands a response: other code waits until it is closed, the response is usually a button click, and ShowDialog is what displays it. D actually describes modeless behaviour, displayed with Show, which is exactly what a modal form prevents.",
          "ms": "Borang modal menuntut tindak balas: kod lain menunggu sehingga ia ditutup, tindak balasnya biasanya klik butang, dan ShowDialog yang memaparkannya. D sebenarnya menerangkan tingkah laku tanpa modal yang dipaparkan dengan Show, iaitu perkara yang dihalang oleh borang modal."
        },
        "diff": 2,
        "topic": {
          "zh": "模态窗体",
          "en": "Modal forms",
          "ms": "Borang modal"
        }
      },
      {
        "id": "vb-06-q07",
        "type": "tf",
        "q": {
          "zh": "多窗体项目中，每个窗体是一个独立的文件，但多个窗体共用同一个类。",
          "en": "In a multiform project, each form is a separate file, but several forms share the same class.",
          "ms": "Dalam projek berbilang borang, setiap borang ialah fail yang berasingan, tetapi beberapa borang berkongsi kelas yang sama."
        },
        "answer": false,
        "explain": {
          "zh": "讲义说每个窗体既是独立的文件，也是独立的类。前半句对，后半句错：正因为每个窗体有自己的类，窗体之间才要通过 Show 或 ShowDialog 互相调用，跨窗体共享的模块级变量也要声明为 Friend。",
          "en": "The lecture says each form is a separate file and a separate class. The first half is right and the second half is wrong: because each form has its own class, forms call one another through Show or ShowDialog, and a module-level variable shared across forms must be declared Friend.",
          "ms": "Kuliah menyatakan setiap borang ialah fail yang berasingan dan kelas yang berasingan. Separuh pertama betul dan separuh kedua salah: kerana setiap borang mempunyai kelasnya sendiri, borang memanggil satu sama lain melalui Show atau ShowDialog, dan pemboleh ubah peringkat modul yang dikongsi merentas borang mesti diisytiharkan sebagai Friend."
        },
        "diff": 2,
        "topic": {
          "zh": "窗体文件与窗体类",
          "en": "Form files and form classes",
          "ms": "Fail borang dan kelas borang"
        }
      },
      {
        "id": "vb-06-q08",
        "type": "fill",
        "q": {
          "zh": "小型项目的启动画面一闪而过。代码可以在启动窗体的 Load 事件中调用哪个方法，暂停 5000 毫秒以延长显示？（写方法名）",
          "en": "For a small project the splash screen disappears too quickly. Which method can be called in the startup form's Load event to pause for 5000 milliseconds and hold the splash longer? (Give the method name.)",
          "ms": "Bagi projek kecil, skrin pembuka hilang terlalu cepat. Kaedah manakah boleh dipanggil dalam peristiwa Load borang permulaan untuk berhenti selama 5000 milisaat dan menahan skrin pembuka lebih lama? (Berikan nama kaedah.)"
        },
        "answer": [
          "Thread.Sleep",
          "Sleep",
          "System.Threading.Thread.Sleep"
        ],
        "explain": {
          "zh": "讲义建议在项目启动窗体的 Load 事件过程中调用 System.Threading.Thread.Sleep()，例如 System.Threading.Thread.Sleep(5000)，其中 5000 是毫秒，也就是 5 秒。它暂停当前线程，让启动画面停留得久一点；这段内容属于补充信息，不在教材正文里。",
          "en": "The lecture suggests calling System.Threading.Thread.Sleep() in the Load event procedure of the project's startup form, for example System.Threading.Thread.Sleep(5000), where 5000 is milliseconds, or 5 seconds. It pauses the current thread so the splash stays visible longer; this is additional information not in the textbook itself.",
          "ms": "Kuliah mencadangkan panggilan System.Threading.Thread.Sleep() dalam prosedur peristiwa Load bagi borang permulaan projek, contohnya System.Threading.Thread.Sleep(5000), dengan 5000 ialah milisaat, iaitu 5 saat. Ia menghentikan benang semasa supaya skrin pembuka kekal lebih lama; maklumat ini tambahan dan bukan daripada teks buku."
        },
        "diff": 2,
        "topic": {
          "zh": "延长启动画面的显示",
          "en": "Holding the splash screen",
          "ms": "Menahan skrin pembuka"
        }
      }
    ],
    "vb-07": [
      {
        "id": "vb-07-q01",
        "type": "mcq",
        "q": {
          "zh": "列表框中当前没有任何项目被选中时，SelectedIndex 属性的值是什么？",
          "en": "When no item in a list box is currently selected, what is the value of the SelectedIndex property?",
          "ms": "Apabila tiada item dalam kotak senarai dipilih, apakah nilai sifat SelectedIndex?"
        },
        "opts": [
          {
            "zh": "-1",
            "en": "-1",
            "ms": "-1"
          },
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
            "zh": "Items.Count",
            "en": "Items.Count",
            "ms": "Items.Count"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义明确指出：没有任何列表项被选中时，SelectedIndex 为 -1；在代码中把它设为 -1 也可以取消全部选中。0 表示选中第一项，1 表示选中第二项，Items.Count 是项目总数、总比最大索引大 1，三者都不表示“无选中”。",
          "en": "The lecture states that when no list item is selected the SelectedIndex property is -1, and setting it to -1 in code deselects all items. A value of 0 means the first item is selected, 1 means the second, and Items.Count is the total number of items, always one more than the highest index, so none of them means no selection.",
          "ms": "Kuliah menyatakan bahawa apabila tiada item senarai dipilih, sifat SelectedIndex bernilai -1, dan menetapkannya kepada -1 dalam kod menyahpilih semua item. Nilai 0 bermaksud item pertama dipilih, 1 bermaksud item kedua, dan Items.Count ialah jumlah item yang sentiasa satu lebih daripada indeks tertinggi, jadi ketiga-tiganya bukan penanda tiada pilihan."
        },
        "diff": 1,
        "topic": {
          "zh": "SelectedIndex 为 -1",
          "en": "SelectedIndex of -1",
          "ms": "SelectedIndex bernilai -1"
        }
      },
      {
        "id": "vb-07-q02",
        "type": "mcq",
        "q": {
          "zh": "某列表框的 Items.Count 为 8。它的最大有效 SelectedIndex 是多少？",
          "en": "A list box has Items.Count equal to 8. What is its highest valid SelectedIndex?",
          "ms": "Sesuatu kotak senarai mempunyai Items.Count bersamaan 8. Apakah SelectedIndex sah yang tertinggi?"
        },
        "opts": [
          {
            "zh": "8",
            "en": "8",
            "ms": "8"
          },
          {
            "zh": "7",
            "en": "7",
            "ms": "7"
          },
          {
            "zh": "9",
            "en": "9",
            "ms": "9"
          },
          {
            "zh": "0",
            "en": "0",
            "ms": "0"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "索引从 0 开始，8 个项目占用的索引是 0 到 7，所以最大有效 SelectedIndex 是 7。讲义强调 Items.Count 总比最大可能索引大 1；8 是项目数而不是合法索引，9 已越界，0 是第一项的索引。",
          "en": "Indexes begin at 0, so eight items occupy indexes 0 through 7 and the highest valid SelectedIndex is 7. The lecture stresses that Items.Count is always one more than the highest possible index; 8 is the item count rather than a valid index, 9 is out of range, and 0 is the index of the first item.",
          "ms": "Indeks bermula dengan 0, jadi lapan item menggunakan indeks 0 hingga 7 dan SelectedIndex tertinggi yang sah ialah 7. Kuliah menegaskan Items.Count sentiasa satu lebih daripada indeks tertinggi yang mungkin; 8 ialah bilangan item dan bukan indeks sah, 9 di luar julat, dan 0 ialah indeks item pertama."
        },
        "diff": 1,
        "topic": {
          "zh": "Items.Count 与最大索引",
          "en": "Items.Count and the highest index",
          "ms": "Items.Count dan indeks tertinggi"
        }
      },
      {
        "id": "vb-07-q03",
        "type": "mcq",
        "q": {
          "zh": "下列哪种循环的循环体至少会执行一次，因为条件是在循环末尾测试的？",
          "en": "Which loop always executes its body at least once because the condition is tested at the bottom?",
          "ms": "Gelung manakah yang sentiasa melaksanakan badannya sekurang-kurangnya sekali kerana syarat diuji di bahagian bawah?"
        },
        "opts": [
          {
            "zh": "Do Until ... Loop",
            "en": "Do Until ... Loop",
            "ms": "Do Until ... Loop"
          },
          {
            "zh": "Do While ... Loop",
            "en": "Do While ... Loop",
            "ms": "Do While ... Loop"
          },
          {
            "zh": "Do ... Loop Until",
            "en": "Do ... Loop Until",
            "ms": "Do ... Loop Until"
          },
          {
            "zh": "For ... Next",
            "en": "For ... Next",
            "ms": "For ... Next"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "条件放在循环顶部的叫前测（pretest），Do While ... Loop 与 Do Until ... Loop 可能一次都不执行；条件放在末尾的叫后测（posttest），Do ... Loop While 与 Do ... Loop Until 至少执行一次。For ... Next 也会先测试计数变量，初值已超过终值时循环体不执行。",
          "en": "A condition at the top gives a pretest loop, so Do While ... Loop and Do Until ... Loop may execute zero times; a condition at the bottom gives a posttest loop, so Do ... Loop While and Do ... Loop Until run at least once. For ... Next also tests its counter first, so when the initial value already exceeds the test value the body does not run.",
          "ms": "Syarat di bahagian atas menghasilkan gelung ujian awal (pretest), jadi Do While ... Loop dan Do Until ... Loop mungkin tidak dilaksanakan langsung; syarat di bahagian bawah menghasilkan gelung ujian akhir (posttest), jadi Do ... Loop While dan Do ... Loop Until berjalan sekurang-kurangnya sekali. For ... Next juga menguji pembilang dahulu, jadi apabila nilai awal sudah melebihi nilai ujian badannya tidak dilaksanakan."
        },
        "diff": 2,
        "topic": {
          "zh": "前测与后测循环",
          "en": "Pretest and posttest loops",
          "ms": "Gelung ujian awal dan ujian akhir"
        }
      },
      {
        "id": "vb-07-q04",
        "type": "mcq",
        "q": {
          "zh": "用 DrawString 把一行文字送到打印页时，参数的顺序是什么？",
          "en": "When DrawString sends a line of text to the printed page, what is the order of its arguments?",
          "ms": "Apabila DrawString menghantar satu baris teks ke halaman cetakan, apakah urutan argumennya?"
        },
        "opts": [
          {
            "zh": "要打印的字符串、X 坐标、Y 坐标、字体、画笔",
            "en": "the string to print, the X coordinate, the Y coordinate, the font, the brush",
            "ms": "rentetan yang dicetak, koordinat X, koordinat Y, fon, berus"
          },
          {
            "zh": "字体、要打印的字符串、X 坐标、Y 坐标、画笔",
            "en": "the font, the string to print, the X coordinate, the Y coordinate, the brush",
            "ms": "fon, rentetan yang dicetak, koordinat X, koordinat Y, berus"
          },
          {
            "zh": "X 坐标、Y 坐标、要打印的字符串、字体、画笔",
            "en": "the X coordinate, the Y coordinate, the string to print, the font, the brush",
            "ms": "koordinat X, koordinat Y, rentetan yang dicetak, fon, berus"
          },
          {
            "zh": "要打印的字符串、字体、画笔、X 坐标、Y 坐标",
            "en": "the string to print, the font, the brush, the X coordinate, the Y coordinate",
            "ms": "rentetan yang dicetak, fon, berus, koordinat X, koordinat Y"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "讲义给出的一般形式是 DrawString(StringToPrint, Font, Brush, Xcoordinate, Ycoordinate)，例子如 e.Graphics.DrawString(\"My text string\", MyFont, Brushes.Black, 100.0, 100.0)。也就是说先写内容，再写字体和画笔，最后才是坐标；其余选项都把画笔或坐标的位置挪动了。",
          "en": "The general form is DrawString(StringToPrint, Font, Brush, Xcoordinate, Ycoordinate), for example e.Graphics.DrawString(\"My text string\", MyFont, Brushes.Black, 100.0, 100.0). The text comes first, then the font and brush, and only then the coordinates; the other options move the brush or the coordinates out of place.",
          "ms": "Bentuk umumnya ialah DrawString(StringToPrint, Font, Brush, Xcoordinate, Ycoordinate), contohnya e.Graphics.DrawString(\"My text string\", MyFont, Brushes.Black, 100.0, 100.0). Teks didahulukan, kemudian fon dan berus, dan barulah koordinat; pilihan lain memindahkan berus atau koordinat dari tempatnya."
        },
        "diff": 2,
        "topic": {
          "zh": "DrawString 的参数",
          "en": "DrawString arguments",
          "ms": "Argumen DrawString"
        }
      },
      {
        "id": "vb-07-q05",
        "type": "mcq",
        "q": {
          "zh": "要打印多页，应在 PrintPage 事件中把哪个属性设为 True？",
          "en": "To print more than one page, which property should be set to True in the PrintPage event?",
          "ms": "Untuk mencetak lebih daripada satu halaman, sifat manakah perlu ditetapkan kepada True dalam peristiwa PrintPage?"
        },
        "opts": [
          {
            "zh": "HasMorePages",
            "en": "HasMorePages",
            "ms": "HasMorePages"
          },
          {
            "zh": "PrintPage",
            "en": "PrintPage",
            "ms": "PrintPage"
          },
          {
            "zh": "MarginBounds",
            "en": "MarginBounds",
            "ms": "MarginBounds"
          },
          {
            "zh": "DrawString",
            "en": "DrawString",
            "ms": "DrawString"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "PrintDocument 的 PrintPage 事件每页触发一次（回调），把 PrintPageEventArgs 的 HasMorePages 设为 True 就表示还有下一页要打印。PrintPage 是事件名，MarginBounds 是描述页边距的属性，DrawString 是往页面上写字符串的方法，三者都不是“继续打印”的开关。",
          "en": "The PrintDocument's PrintPage event fires once for each page as a callback, and setting HasMorePages on the PrintPageEventArgs to True tells the document that another page follows. PrintPage is the event's name, MarginBounds is a property describing page margins, and DrawString is the method that writes a string onto the page; none of them is the continue-printing switch.",
          "ms": "Peristiwa PrintPage bagi PrintDocument dicetuskan sekali bagi setiap halaman sebagai panggilan balik, dan menetapkan HasMorePages pada PrintPageEventArgs kepada True memberitahu dokumen bahawa masih ada halaman berikutnya. PrintPage ialah nama peristiwa, MarginBounds ialah sifat yang menerangkan margin halaman, dan DrawString ialah kaedah menulis rentetan pada halaman; ketiga-tiganya bukan suis untuk meneruskan cetakan."
        },
        "diff": 2,
        "topic": {
          "zh": "多页打印",
          "en": "Printing multiple pages",
          "ms": "Mencetak berbilang halaman"
        }
      },
      {
        "id": "vb-07-q06",
        "type": "multi",
        "q": {
          "zh": "关于 Items 集合的方法，下列哪些说明是正确的？（多选）",
          "en": "Which of the following descriptions of the Items collection's methods are correct? (Select all that apply.)",
          "ms": "Huraian kaedah koleksi Items manakah yang betul? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "Items.RemoveAt(0) 删除索引位置 0 上的项目",
            "en": "Items.RemoveAt(0) removes the item at index position 0",
            "ms": "Items.RemoveAt(0) membuang item pada kedudukan indeks 0"
          },
          {
            "zh": "Items.Remove(\"My School\") 按文字内容删除项目",
            "en": "Items.Remove(\"My School\") removes an item by its text",
            "ms": "Items.Remove(\"My School\") membuang item mengikut teksnya"
          },
          {
            "zh": "Items.Insert(0, \"Harvard\") 删除第一项并用新值替换",
            "en": "Items.Insert(0, \"Harvard\") deletes the first item and replaces it with the new value",
            "ms": "Items.Insert(0, \"Harvard\") membuang item pertama dan menggantikannya dengan nilai baharu"
          },
          {
            "zh": "Items.Clear() 清空列表框或组合框中的全部项目",
            "en": "Items.Clear() clears all items from the list box or combo box",
            "ms": "Items.Clear() mengosongkan semua item dalam kotak senarai atau kotak kombo"
          },
          {
            "zh": "Items.Count 返回当前选中项目的文字",
            "en": "Items.Count returns the text of the currently selected item",
            "ms": "Items.Count memulangkan teks item yang sedang dipilih"
          }
        ],
        "answer": [
          0,
          1,
          3
        ],
        "explain": {
          "zh": "RemoveAt 按索引删除，Remove 按文字删除，Clear 清空整个集合，这三项与讲义一致。Insert 是在指定索引位置插入新项目，不会删除原有项目；Count 返回的是项目总数，选中项的文字要读 Text 属性。",
          "en": "RemoveAt removes by index, Remove removes by text, and Clear empties the whole collection, all as the lecture describes. Insert adds a new item at the given index position without deleting anything, and Count gives the total number of items while the selected item's text comes from the Text property.",
          "ms": "RemoveAt membuang mengikut indeks, Remove membuang mengikut teks, dan Clear mengosongkan seluruh koleksi, semuanya seperti dalam kuliah. Insert menambah item baharu pada kedudukan indeks yang diberi tanpa membuang apa-apa, dan Count memberikan jumlah item manakala teks item yang dipilih diambil daripada sifat Text."
        },
        "diff": 2,
        "topic": {
          "zh": "Items 集合的方法",
          "en": "Methods of the Items collection",
          "ms": "Kaedah koleksi Items"
        }
      },
      {
        "id": "vb-07-q07",
        "type": "tf",
        "q": {
          "zh": "组合框有 TextChanged 事件，而列表框没有这个事件。",
          "en": "A combo box has a TextChanged event, while a list box does not have this event.",
          "ms": "Kotak kombo mempunyai peristiwa TextChanged, manakala kotak senarai tidak mempunyai peristiwa ini."
        },
        "answer": true,
        "explain": {
          "zh": "讲义在讲列表框与组合框的事件时说明：用户向组合框输入文字时触发 TextChanged，而列表框没有 TextChanged 事件。两者都有 Enter、Leave 等焦点事件，所以不能因为都有 Enter/Leave 就推断它们的事件完全一样。",
          "en": "Discussing list box and combo box events, the lecture says TextChanged occurs when the user types text into a combo box, and a list box does not have a TextChanged event. Both do have focus events such as Enter and Leave, so sharing those does not mean their event sets are identical.",
          "ms": "Semasa membincangkan peristiwa kotak senarai dan kotak kombo, kuliah menyatakan TextChanged berlaku apabila pengguna menaip teks dalam kotak kombo, dan kotak senarai tidak mempunyai peristiwa TextChanged. Kedua-duanya mempunyai peristiwa fokus seperti Enter dan Leave, jadi persamaan itu tidak bermakna set peristiwa mereka sama."
        },
        "diff": 1,
        "topic": {
          "zh": "TextChanged 事件",
          "en": "The TextChanged event",
          "ms": "Peristiwa TextChanged"
        }
      },
      {
        "id": "vb-07-q08",
        "type": "fill",
        "q": {
          "zh": "Do/Loop 循环中，循环体的一次执行被称为什么？",
          "en": "In a Do/Loop, one single execution of the statements in the loop is called what?",
          "ms": "Dalam gelung Do/Loop, satu pelaksanaan tunggal pernyataan dalam gelung dipanggil apa?"
        },
        "answer": [
          "iteration",
          "迭代",
          "lelaran"
        ],
        "explain": {
          "zh": "讲义把循环体的一次执行称为一次迭代（iteration），循环正是由若干次迭代组成。Do/Loop 用于事先不知道迭代次数的情况，由 While 或 Until 条件决定何时结束，所以不能像 For/Next 那样用次数来定义。",
          "en": "The lecture calls one single execution of the statements in the loop an iteration, and a loop consists of a number of iterations. A Do/Loop is used when the number of iterations is unknown in advance and ends according to a While or Until condition, so it is not defined by a count the way For/Next is.",
          "ms": "Kuliah memanggil satu pelaksanaan tunggal pernyataan dalam gelung sebagai satu lelaran, dan gelung terdiri daripada beberapa lelaran. Do/Loop digunakan apabila bilangan lelaran tidak diketahui terlebih dahulu dan berakhir mengikut syarat While atau Until, jadi ia tidak ditakrifkan dengan kiraan seperti For/Next."
        },
        "diff": 1,
        "topic": {
          "zh": "迭代",
          "en": "Iteration",
          "ms": "Lelaran"
        }
      }
    ],
    "vb-08": [
      {
        "id": "vb-08-q01",
        "type": "mcq",
        "q": {
          "zh": "执行 Dim A(25) As Integer 后，数组 A 共有多少个元素？",
          "en": "After Dim A(25) As Integer executes, how many elements does array A have?",
          "ms": "Selepas Dim A(25) As Integer dilaksanakan, berapakah bilangan elemen dalam tatasusunan A?"
        },
        "opts": [
          {
            "zh": "26 个（下标 0 到 25）",
            "en": "26 (subscripts 0 through 25)",
            "ms": "26 (subskrip 0 hingga 25)"
          },
          {
            "zh": "25 个（下标 1 到 25）",
            "en": "25 (subscripts 1 through 25)",
            "ms": "25 (subskrip 1 hingga 25)"
          },
          {
            "zh": "24 个（下标 0 到 23）",
            "en": "24 (subscripts 0 through 23)",
            "ms": "24 (subskrip 0 hingga 23)"
          },
          {
            "zh": "0 个，还需用 ReDim 设定大小",
            "en": "0, because ReDim is still needed to set the size",
            "ms": "0, kerana ReDim masih diperlukan untuk menetapkan saiz"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "括号里的 25 是上界，下界默认是 0，所以元素下标是 0 到 25，共 26 个。Dim 同时分配存储空间，并把数值元素初始化为 0、字符串元素初始化为空串；25 只是最大下标而不是元素个数，ReDim 用于调整已经声明为无大小的数组。",
          "en": "The 25 in the parentheses is the upper subscript and the lower subscript defaults to 0, so the subscripts run from 0 to 25, which is 26 elements. Dim also allocates the storage and initializes numeric elements to 0 and string elements to the empty string; 25 is the highest subscript rather than the count, and ReDim is for resizing an array whose size was left open.",
          "ms": "Nombor 25 dalam kurungan ialah subskrip atas dan subskrip bawah secara lalai ialah 0, jadi subskripnya 0 hingga 25, iaitu 26 elemen. Dim juga memperuntukkan storan dan menetapkan elemen berangka kepada 0 serta elemen rentetan kepada rentetan kosong; 25 ialah subskrip tertinggi dan bukan bilangan elemen, manakala ReDim digunakan untuk menyesuaikan tatasusunan yang saiznya dibiarkan terbuka."
        },
        "diff": 1,
        "topic": {
          "zh": "数组元素个数",
          "en": "Number of array elements",
          "ms": "Bilangan elemen tatasusunan"
        }
      },
      {
        "id": "vb-08-q02",
        "type": "mcq",
        "q": {
          "zh": "Dim NameString(2, 3) As String 建立多少个元素？行、列下标各是什么范围？",
          "en": "How many elements does Dim NameString(2, 3) As String create, and what are the row and column subscript ranges?",
          "ms": "Berapakah elemen yang dicipta oleh Dim NameString(2, 3) As String, dan apakah julat subskrip baris serta lajur?"
        },
        "opts": [
          {
            "zh": "6 个元素：行 0–2，列 0–3",
            "en": "6 elements: rows 0–2 and columns 0–3",
            "ms": "6 elemen: baris 0–2 dan lajur 0–3"
          },
          {
            "zh": "12 个元素：行 0–2，列 0–3",
            "en": "12 elements: rows 0–2 and columns 0–3",
            "ms": "12 elemen: baris 0–2 dan lajur 0–3"
          },
          {
            "zh": "12 个元素：行 0–1，列 0–3",
            "en": "12 elements: rows 0–1 and columns 0–3",
            "ms": "12 elemen: baris 0–1 dan lajur 0–3"
          },
          {
            "zh": "9 个元素：行 0–3，列 0–2",
            "en": "9 elements: rows 0–3 and columns 0–2",
            "ms": "9 elemen: baris 0–3 dan lajur 0–2"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "第一个下标是最大行号 2，所以有 0、1、2 三行；第二个下标是最大列号 3，所以有 0 到 3 四列；3 × 4 = 12 个元素。行在前、列在后且都从 0 开始，因此 A 的元素数、C 的行范围和 D 的行列范围都不对。",
          "en": "The first subscript is the highest row number, 2, giving rows 0, 1 and 2; the second is the highest column number, 3, giving columns 0 through 3; 3 × 4 = 12 elements. The row comes first and the column second, both starting at 0, so A has the wrong count, C the wrong row range and D the wrong row and column ranges.",
          "ms": "Subskrip pertama ialah nombor baris tertinggi, iaitu 2, memberikan baris 0, 1 dan 2; subskrip kedua ialah nombor lajur tertinggi, iaitu 3, memberikan lajur 0 hingga 3; 3 × 4 = 12 elemen. Baris didahulukan dan lajur kedua, kedua-duanya bermula dengan 0, jadi A salah bilangan, C salah julat baris dan D salah julat baris serta lajur."
        },
        "diff": 2,
        "topic": {
          "zh": "二维数组的下标",
          "en": "Subscripts of a two-dimensional array",
          "ms": "Subskrip tatasusunan dua dimensi"
        }
      },
      {
        "id": "vb-08-q03",
        "type": "mcq",
        "q": {
          "zh": "关于 Structure 的声明，下列哪一项符合讲义？",
          "en": "Which statement about declaring a Structure matches the lecture?",
          "ms": "Pernyataan manakah tentang pengisytiharan Structure yang selaras dengan kuliah?"
        },
        "opts": [
          {
            "zh": "Structure 默认是 Private，可以声明在过程内部",
            "en": "A Structure is Private by default and may be declared inside a procedure",
            "ms": "Structure secara lalai bersifat Private dan boleh diisytiharkan dalam prosedur"
          },
          {
            "zh": "Structure 必须声明在过程内部，且默认是 Private",
            "en": "A Structure must be declared inside a procedure and is Private by default",
            "ms": "Structure mesti diisytiharkan dalam prosedur dan secara lalai bersifat Private"
          },
          {
            "zh": "Structure 默认是 Public，不能声明在过程内部，通常放在文件顶部与模块级声明一起",
            "en": "A Structure is Public by default, cannot be declared inside a procedure, and is usually placed at the top of the file with the module-level declarations",
            "ms": "Structure secara lalai bersifat Public, tidak boleh diisytiharkan dalam prosedur, dan biasanya diletakkan di bahagian atas fail bersama pengisytiharan peringkat modul"
          },
          {
            "zh": "Structure 必须放在单独的 .vb 文件中，不能与模块级声明同处",
            "en": "A Structure must be placed in a separate .vb file and cannot share a place with module-level declarations",
            "ms": "Structure mesti diletakkan dalam fail .vb yang berasingan dan tidak boleh berada bersama pengisytiharan peringkat modul"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "结构把多个字段组合起来，相当于定义一种新的数据类型；它默认是 Public，不能声明在过程内部，一般都放在文件顶部与模块级声明一起，也可以放到单独文件里。A、B 说它必须在过程内且默认 Private，D 则把“可以”说成“必须”。",
          "en": "A structure combines several fields and is like defining a new data type; it is Public by default, cannot be declared inside a procedure, and is generally placed at the top of the file with the module-level declarations, though it may also go in a separate file. A and B wrongly put it inside a procedure and make it Private, while D turns may into must.",
          "ms": "Struktur menggabungkan beberapa medan dan seperti mentakrifkan jenis data baharu; ia secara lalai Public, tidak boleh diisytiharkan dalam prosedur, dan biasanya diletakkan di bahagian atas fail bersama pengisytiharan peringkat modul, walaupun ia juga boleh diletakkan dalam fail berasingan. A dan B salah meletakkannya dalam prosedur dan menjadikannya Private, manakala D menukar boleh kepada mesti."
        },
        "diff": 2,
        "topic": {
          "zh": "Structure 的声明规则",
          "en": "Rules for declaring a Structure",
          "ms": "Peraturan pengisytiharan Structure"
        }
      },
      {
        "id": "vb-08-q04",
        "type": "mcq",
        "q": {
          "zh": "关于用 For Each/Next 遍历数组，下列哪一项正确？",
          "en": "Which statement about traversing an array with For Each/Next is correct?",
          "ms": "Pernyataan manakah tentang merentasi tatasusunan dengan For Each/Next yang betul?"
        },
        "opts": [
          {
            "zh": "For Each 只能用于二维数组，不能用于一维数组",
            "en": "For Each works only on two-dimensional arrays, not on one-dimensional arrays",
            "ms": "For Each hanya berfungsi pada tatasusunan dua dimensi, bukan satu dimensi"
          },
          {
            "zh": "每两个元素循环一次；元素变量必须是 Integer；只能用 Exit Do 退出",
            "en": "One pass per two elements; the element variable must be Integer; only Exit Do can leave the loop",
            "ms": "Satu pusingan bagi setiap dua elemen; pemboleh ubah elemen mesti Integer; hanya Exit Do boleh keluar"
          },
          {
            "zh": "元素变量必须使用数组名；循环次数由 Items.Count 决定",
            "en": "The element variable must be the array's name; the number of passes is set by Items.Count",
            "ms": "Pemboleh ubah elemen mesti nama tatasusunan; bilangan pusingan ditentukan oleh Items.Count"
          },
          {
            "zh": "每个元素循环一次；元素变量应与数组元素同类型或声明为 Object；可用 Exit For 提前退出",
            "en": "One pass per element; the element variable must match the array's element type or be Object; Exit For can leave the loop early",
            "ms": "Satu pusingan bagi setiap elemen; pemboleh ubah elemen mesti sama jenis dengan elemen tatasusunan atau Object; Exit For boleh keluar lebih awal"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "For Each/Next 逐个取出元素的值赋给元素变量，每个元素循环一次；元素变量要与数组元素同类型，或声明为 Object，最好在 For Each 语句里声明成块级变量；需要提前结束就用 Exit For。B 的次数与退出语句都错，C 混淆了数组名与元素变量，A 限制了它本来支持的一维数组。",
          "en": "For Each/Next assigns each element's value to the element variable in turn, one pass per element; the variable must match the element type or be Object, best declared in the For Each statement as a block-level variable, and Exit For ends the loop early. B has the wrong count and exit statement, C confuses the array name with the element variable, and A rules out one-dimensional arrays, which it does support.",
          "ms": "For Each/Next memberikan nilai setiap elemen kepada pemboleh ubah elemen secara bergilir, satu pusingan bagi setiap elemen; pemboleh ubah mesti sama jenis dengan elemen atau Object, lebih baik diisytiharkan dalam pernyataan For Each sebagai pemboleh ubah peringkat blok, dan Exit For menamatkan gelung lebih awal. B salah bilangan dan pernyataan keluar, C mengelirukan nama tatasusunan dengan pemboleh ubah elemen, dan A mengecualikan tatasusunan satu dimensi yang sebenarnya disokong."
        },
        "diff": 2,
        "topic": {
          "zh": "For Each/Next",
          "en": "For Each/Next",
          "ms": "For Each/Next"
        }
      },
      {
        "id": "vb-08-q05",
        "type": "mcq",
        "q": {
          "zh": "用列表框配合数组做表格查找时，为什么代码中要先判断 SelectedIndex <> -1？",
          "en": "When using a list box with an array for a table look up, why does the code first test SelectedIndex <> -1?",
          "ms": "Apabila menggunakan kotak senarai bersama tatasusunan untuk carian jadual, mengapakah kod menguji SelectedIndex <> -1 terlebih dahulu?"
        },
        "opts": [
          {
            "zh": "因为 SelectedIndex 只在设计时有效，运行时必须重新赋值",
            "en": "Because SelectedIndex is valid only at design time and must be reassigned at run time",
            "ms": "Kerana SelectedIndex hanya sah pada masa reka bentuk dan mesti ditetapkan semula pada masa jalan"
          },
          {
            "zh": "因为 SelectedIndex 从 1 开始计数，需要先减 1",
            "en": "Because SelectedIndex counts from 1 and must first have 1 subtracted",
            "ms": "Kerana SelectedIndex bermula dari 1 dan perlu ditolak 1 terlebih dahulu"
          },
          {
            "zh": "因为 -1 表示用户选中了最后一项",
            "en": "Because -1 means the user selected the last item",
            "ms": "Kerana -1 bermaksud pengguna memilih item terakhir"
          },
          {
            "zh": "因为无选中时 SelectedIndex 为 -1，直接拿它作下标会越界",
            "en": "Because -1 means nothing is selected, and using it as a subscript would go out of range",
            "ms": "Kerana -1 bermaksud tiada pilihan, dan menggunakannya sebagai subskrip akan menyebabkan ralat di luar julat"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "列表索引从 0 开始，-1 是“没有选中”的标记，不是合法下标，直接用来访问数组会越界。讲义先判断 <> -1，再把这个索引当作数组下标，无选中时则弹出提示；B、C 误解了索引起点和 -1 的含义，A 说它只在设计时有效也不对，它在运行时正是取值来源。",
          "en": "List indexes start at 0, and -1 is the marker for no selection rather than a valid subscript, so using it to index the array would go out of range. The lecture tests <> -1 first, then uses the index as the array subscript and shows a message when nothing is selected; B and C misread the index origin and the meaning of -1, and A is wrong because the property is read at run time.",
          "ms": "Indeks senarai bermula dengan 0, dan -1 ialah penanda tiada pilihan, bukan subskrip yang sah, jadi menggunakannya untuk mengindeks tatasusunan akan menyebabkan ralat di luar julat. Kuliah menguji <> -1 dahulu, kemudian menggunakan indeks itu sebagai subskrip tatasusunan dan memaparkan mesej apabila tiada pilihan; B dan C salah faham asal indeks dan maksud -1, dan A salah kerana sifat itu dibaca pada masa jalan."
        },
        "diff": 3,
        "topic": {
          "zh": "表格查找中的 -1 判断",
          "en": "The -1 test in table look up",
          "ms": "Ujian -1 dalam carian jadual"
        }
      },
      {
        "id": "vb-08-q06",
        "type": "multi",
        "q": {
          "zh": "关于数组下标，下列哪些说法是正确的？（多选）",
          "en": "Which of the following statements about array subscripts are correct? (Select all that apply.)",
          "ms": "Pernyataan manakah tentang subskrip tatasusunan yang betul? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "下标总是从 0 开始",
            "en": "Subscripts always begin at zero",
            "ms": "Subskrip sentiasa bermula dengan sifar"
          },
          {
            "zh": "下界默认是 1，除非使用 ReDim",
            "en": "The lower subscript defaults to 1 unless ReDim is used",
            "ms": "Subskrip bawah secara lalai ialah 1 kecuali ReDim digunakan"
          },
          {
            "zh": "VB 会把非整数下标取整，越界下标会抛出异常",
            "en": "VB rounds a non-integer subscript, and an out-of-range subscript throws an exception",
            "ms": "VB membundarkan subskrip bukan integer, dan subskrip di luar julat menyebabkan pengecualian"
          },
          {
            "zh": "下标可以是常量、变量或数值表达式",
            "en": "A subscript may be a constant, a variable or a numeric expression",
            "ms": "Subskrip boleh berupa pemalar, pemboleh ubah atau ungkapan berangka"
          },
          {
            "zh": "下标必须是命名常量，不能使用变量",
            "en": "A subscript must be a named constant; variables are not allowed",
            "ms": "Subskrip mesti pemalar bernama; pemboleh ubah tidak dibenarkan"
          }
        ],
        "answer": [
          0,
          2,
          3
        ],
        "explain": {
          "zh": "讲义规定下标从 0 开始，可以是常量、变量或数值表达式，必须为整数而 VB 会对非整数取整，越界则抛出异常，所以 A、C、D 正确。下界默认是 0 而不是 1，B 错；下标完全可以用变量，例如用 SelectedIndex 作下标，E 也错。",
          "en": "The lecture says subscripts always begin at 0, may be constants, variables or numeric expressions, must be integers with VB rounding fractional ones, and throw an exception when out of range, so A, C and D are right. The lower bound defaults to 0 rather than 1, so B is wrong, and variables are allowed, as when SelectedIndex is used as a subscript, so E is wrong too.",
          "ms": "Kuliah menyatakan subskrip sentiasa bermula dengan 0, boleh berupa pemalar, pemboleh ubah atau ungkapan berangka, mesti integer dengan VB membundarkan nilai pecahan, dan melontar pengecualian apabila di luar julat, jadi A, C dan D betul. Subskrip bawah lalai ialah 0 dan bukan 1, jadi B salah, dan pemboleh ubah dibenarkan, seperti apabila SelectedIndex digunakan sebagai subskrip, jadi E juga salah."
        },
        "diff": 2,
        "topic": {
          "zh": "下标规则",
          "en": "Subscript rules",
          "ms": "Peraturan subskrip"
        }
      },
      {
        "id": "vb-08-q07",
        "type": "tf",
        "q": {
          "zh": "允许在括号中写出上界的同时用 { } 给出初始值，例如 Dim A(5) As Integer = {1, 2, 3}。",
          "en": "It is legal to give an upper subscript in the parentheses and supply initial values in braces at the same time, for example Dim A(5) As Integer = {1, 2, 3}.",
          "ms": "Adalah sah untuk menulis subskrip atas dalam kurungan dan pada masa yang sama memberikan nilai awal dalam pendakap, contohnya Dim A(5) As Integer = {1, 2, 3}."
        },
        "answer": false,
        "explain": {
          "zh": "讲义说元素可以在 Dim 语句中赋初值，但不能同时声明上界和初值，所以 Dim A(5) As Integer = {1, 2, 3} 不合法。正确写法是 Dim A() As Integer = {1, 2, 3}，让元素个数由初值列表决定。",
          "en": "The lecture says elements may be given initial values in the Dim statement, but you cannot declare an upper subscript and initial values together, so Dim A(5) As Integer = {1, 2, 3} is not legal. The correct form is Dim A() As Integer = {1, 2, 3}, letting the initial-value list determine the number of elements.",
          "ms": "Kuliah menyatakan elemen boleh diberi nilai awal dalam pernyataan Dim, tetapi subskrip atas dan nilai awal tidak boleh dinyatakan serentak, jadi Dim A(5) As Integer = {1, 2, 3} tidak sah. Bentuk yang betul ialah Dim A() As Integer = {1, 2, 3}, yang membiarkan senarai nilai awal menentukan bilangan elemen."
        },
        "diff": 2,
        "topic": {
          "zh": "数组的初始化语法",
          "en": "Array initialisation syntax",
          "ms": "Sintaks permulaan tatasusunan"
        }
      },
      {
        "id": "vb-08-q08",
        "type": "fill",
        "q": {
          "zh": "结构中含有数组元素时，不能在 Structure 内写出元素个数，应在过程内用哪条语句确定数组大小？",
          "en": "When a structure contains an array element, the number of elements cannot be given inside the Structure. Which statement is used inside a procedure to set the array's size?",
          "ms": "Apabila sesuatu struktur mengandungi elemen tatasusunan, bilangan elemen tidak boleh dinyatakan di dalam Structure. Pernyataan manakah digunakan di dalam prosedur untuk menetapkan saiz tatasusunan itu?"
        },
        "answer": [
          "ReDim",
          "Re Dim",
          "ReDim statement"
        ],
        "explain": {
          "zh": "讲义说明 VB 不允许在 Structure 声明中写出数组元素个数，要在过程内用 ReDim 设定大小，例如 ReDim houseWaresSalesDetail.SaleDecimal(6)。之后通过点号访问该数组元素，如 HouseWaresSalesDetail.SaleDecimal(DayIndexInteger)。",
          "en": "The lecture explains that VB does not allow the number of array elements to be declared inside a Structure; ReDim inside a procedure sets the size, as in ReDim houseWaresSalesDetail.SaleDecimal(6). The array element is then reached through dot notation, as in HouseWaresSalesDetail.SaleDecimal(DayIndexInteger).",
          "ms": "Kuliah menerangkan bahawa VB tidak membenarkan bilangan elemen tatasusunan diisytiharkan di dalam Structure; ReDim di dalam prosedur menetapkan saiznya, seperti ReDim houseWaresSalesDetail.SaleDecimal(6). Elemen tatasusunan itu kemudian dicapai melalui notasi titik, seperti HouseWaresSalesDetail.SaleDecimal(DayIndexInteger)."
        },
        "diff": 2,
        "topic": {
          "zh": "ReDim 与结构中的数组",
          "en": "ReDim for an array in a structure",
          "ms": "ReDim untuk tatasusunan dalam struktur"
        }
      }
    ],
    "vb-09": [
      {
        "id": "vb-09-q01",
        "type": "mcq",
        "q": {
          "zh": "在 ADO.NET 的三个主要对象中，哪个负责在数据源与数据集之间传递数据，并生成访问或更新数据所用的 SQL 语句？",
          "en": "Among the three main ADO.NET objects, which one passes data between the data source and the dataset and generates the SQL statements used to access or update data?",
          "ms": "Antara tiga objek utama ADO.NET, yang manakah memindahkan data antara sumber data dan set data serta menjana pernyataan SQL untuk mengakses atau mengemas kini data?"
        },
        "opts": [
          {
            "zh": "BindingSource",
            "en": "BindingSource",
            "ms": "BindingSource"
          },
          {
            "zh": "TableAdapter",
            "en": "TableAdapter",
            "ms": "TableAdapter"
          },
          {
            "zh": "DataSet",
            "en": "DataSet",
            "ms": "DataSet"
          },
          {
            "zh": "DataGridView",
            "en": "DataGridView",
            "ms": "DataGridView"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "BindingSource 建立与真实数据（特定文件和/或服务器）的链接；TableAdapter 负责检索和更新数据，并生成访问或更新数据所用的 SQL 语句；DataSet 保存实际数据。DataGridView 只是显示绑定表中数据的控件，不负责传递数据或生成 SQL。",
          "en": "BindingSource establishes the link to the actual data, a specific file and/or server; TableAdapter handles retrieving and updating data and generates the SQL statements used to access or update it; DataSet contains the actual data. DataGridView is only the control that displays the bound table's data and neither transfers data nor generates SQL.",
          "ms": "BindingSource menetapkan pautan kepada data sebenar, iaitu fail dan/atau pelayan tertentu; TableAdapter mengendalikan pengambilan dan pengemaskinian data serta menjana pernyataan SQL untuk mengakses atau mengemas kininya; DataSet menyimpan data sebenar. DataGridView hanyalah kawalan yang memaparkan data jadual terikat dan tidak memindahkan data atau menjana SQL."
        },
        "diff": 2,
        "topic": {
          "zh": "TableAdapter 的职责",
          "en": "Role of the TableAdapter",
          "ms": "Peranan TableAdapter"
        }
      },
      {
        "id": "vb-09-q02",
        "type": "mcq",
        "q": {
          "zh": "关于 DataSet，下列哪一项正确？",
          "en": "Which statement about a DataSet is correct?",
          "ms": "Pernyataan manakah tentang DataSet yang betul?"
        },
        "opts": [
          {
            "zh": "它只能包含一张表，也不能保存表间关系",
            "en": "It can contain only one table and cannot store relationships between tables",
            "ms": "Ia hanya boleh mengandungi satu jadual dan tidak boleh menyimpan hubungan antara jadual"
          },
          {
            "zh": "它始终与数据源保持活动连接，因此数据永远不会失效",
            "en": "It always keeps an active connection to the data source, so the data can never become stale",
            "ms": "Ia sentiasa mengekalkan sambungan aktif kepada sumber data supaya data tidak pernah luput"
          },
          {
            "zh": "它是内存中的临时数据，且 ADO.NET 的数据集是断开的",
            "en": "It is temporary data in memory, and ADO.NET datasets are disconnected",
            "ms": "Ia data sementara dalam ingatan, dan set data ADO.NET bersifat terputus"
          },
          {
            "zh": "它负责生成 SQL 语句并把数据直接写入数据库",
            "en": "It generates SQL statements and writes data directly into the database",
            "ms": "Ia menjana pernyataan SQL dan menulis data terus ke pangkalan data"
          }
        ],
        "answer": 2,
        "explain": {
          "zh": "讲义把 DataSet 定义为存放在内存中的临时数据，并强调 ADO.NET 的数据集是断开的：内存里的数据副本不与数据源保持活动连接。它还可以包含多张表和它们之间的关系；生成 SQL、更新数据是 TableAdapter 的职责，所以 A、B、D 都不对。",
          "en": "The lecture defines a dataset as a temporary set of data stored in memory and stresses that ADO.NET datasets are disconnected: the copy in memory does not keep an active connection to the data source. It may also contain multiple tables and relationships, while generating SQL and updating data is the TableAdapter's job, so A, B and D are wrong.",
          "ms": "Kuliah mentakrifkan set data sebagai set data sementara yang disimpan dalam ingatan dan menegaskan bahawa set data ADO.NET bersifat terputus: salinan dalam ingatan tidak mengekalkan sambungan aktif kepada sumber data. Ia juga boleh mengandungi beberapa jadual dan hubungan, manakala penjanaan SQL dan pengemaskinian data ialah tugas TableAdapter, jadi A, B dan D salah."
        },
        "diff": 2,
        "topic": {
          "zh": "断开的数据集",
          "en": "Disconnected datasets",
          "ms": "Set data terputus"
        }
      },
      {
        "id": "vb-09-q03",
        "type": "mcq",
        "q": {
          "zh": "讲义在比较 XML 与 HTML 时指出，二者最重要的区别之一是什​么？",
          "en": "When the lecture compares XML with HTML, what is one of the most important differences?",
          "ms": "Apabila kuliah membandingkan XML dengan HTML, apakah salah satu perbezaan terpenting?"
        },
        "opts": [
          {
            "zh": "XML 不能被任何文本编辑器打开",
            "en": "XML cannot be opened by any text editor",
            "ms": "XML tidak boleh dibuka oleh mana-mana penyunting teks"
          },
          {
            "zh": "XML 的标签必须使用 HTML 已经定义好的固定标签",
            "en": "XML tags must use the fixed tags already defined by HTML",
            "ms": "Tag XML mesti menggunakan tag tetap yang telah ditetapkan oleh HTML"
          },
          {
            "zh": "XML 只能存放数值，不能存放文字",
            "en": "XML can store only numbers, not text",
            "ms": "XML hanya boleh menyimpan nombor dan tidak boleh menyimpan teks"
          },
          {
            "zh": "XML 的标签不是预先定义的，可以按字段名自行命名",
            "en": "XML tags are not predefined and may be named after the fields",
            "ms": "Tag XML tidak ditetapkan terlebih dahulu dan boleh dinamakan mengikut medan"
          }
        ],
        "answer": 3,
        "explain": {
          "zh": "讲义说 XML 数据是以标签标识的文本、类似 HTML 标签，但 XML 的标签不像 HTML 那样预先定义，可以按字段名命名。XML 可以存放文字与数值、任何文本编辑器都能打开，另有 schema 描述字段、类型和约束，所以 A、B、C 都与讲义相反。",
          "en": "The lecture says XML data are text identified by tags similar to HTML tags, but tags in XML are not predefined as they are in HTML and can identify fields by name. XML can hold text as well as numbers, any text editor can open it, and a schema describes its fields, types and constraints, so A, B and C contradict the lecture.",
          "ms": "Kuliah menyatakan data XML ialah teks yang dikenal pasti oleh tag serupa tag HTML, tetapi tag XML tidak ditetapkan terlebih dahulu seperti dalam HTML dan boleh mengenal pasti medan mengikut nama. XML boleh menyimpan teks dan juga nombor, mana-mana penyunting teks boleh membukanya, dan skema menerangkan medan, jenis serta kekangannya, jadi A, B dan C bercanggah dengan kuliah."
        },
        "diff": 2,
        "topic": {
          "zh": "XML 标签",
          "en": "XML tags",
          "ms": "Tag XML"
        }
      },
      {
        "id": "vb-09-q04",
        "type": "mcq",
        "q": {
          "zh": "在 Query Builder 中把某字段的 Sort Type 设为 Ascending 后，自动生成的 SQL 语句会增加哪个子句？",
          "en": "After setting a field's Sort Type to Ascending in the Query Builder, which clause is added to the automatically generated SQL statement?",
          "ms": "Selepas menetapkan Sort Type sesuatu medan kepada Ascending dalam Query Builder, klausa manakah ditambah pada pernyataan SQL yang dijana secara automatik?"
        },
        "opts": [
          {
            "zh": "ORDER BY",
            "en": "ORDER BY",
            "ms": "ORDER BY"
          },
          {
            "zh": "SORT BY",
            "en": "SORT BY",
            "ms": "SORT BY"
          },
          {
            "zh": "GROUP BY",
            "en": "GROUP BY",
            "ms": "GROUP BY"
          },
          {
            "zh": "WHERE",
            "en": "WHERE",
            "ms": "WHERE"
          }
        ],
        "answer": 0,
        "explain": {
          "zh": "讲义说排序是在为数据集选择数据的查询中完成的；把 Sort Type 设为 Ascending 后，SQL 语句会加上 ORDER BY 子句。SQL 并没有 SORT BY 子句；GROUP BY 用于分组汇总，WHERE 用于筛选记录，二者都不会让结果按升序排列。",
          "en": "The lecture says sorting is done in the query that selects data for the dataset, and setting Sort Type to Ascending makes the SQL statement include an ORDER BY clause. SQL has no SORT BY clause; GROUP BY groups rows for aggregates and WHERE filters records, and neither orders the result ascending.",
          "ms": "Kuliah menyatakan pengisihan dilakukan dalam pertanyaan yang memilih data untuk set data, dan menetapkan Sort Type kepada Ascending menyebabkan pernyataan SQL menyertakan klausa ORDER BY. SQL tidak mempunyai klausa SORT BY; GROUP BY mengumpulkan baris untuk agregat dan WHERE menapis rekod, dan kedua-duanya tidak mengisih hasil secara menaik."
        },
        "diff": 2,
        "topic": {
          "zh": "用 ORDER BY 排序",
          "en": "Sorting with ORDER BY",
          "ms": "Pengisihan dengan ORDER BY"
        }
      },
      {
        "id": "vb-09-q05",
        "type": "mcq",
        "q": {
          "zh": "讲义给出的 LINQ 查询一般形式中，三个关键运算符是什么？",
          "en": "In the general form of a LINQ query given in the lecture, what are the three key operators?",
          "ms": "Dalam bentuk umum pertanyaan LINQ yang diberikan dalam kuliah, apakah tiga pengendali utama?"
        },
        "opts": [
          {
            "zh": "Select、Where、Order By",
            "en": "Select, Where and Order By",
            "ms": "Select, Where dan Order By"
          },
          {
            "zh": "From、In、Select",
            "en": "From, In and Select",
            "ms": "From, In dan Select"
          },
          {
            "zh": "From、Join、Group By",
            "en": "From, Join and Group By",
            "ms": "From, Join dan Group By"
          },
          {
            "zh": "Dim、As、New",
            "en": "Dim, As and New",
            "ms": "Dim, As dan New"
          }
        ],
        "answer": 1,
        "explain": {
          "zh": "讲义明确说查询中的关键运算符是 From、In 和 Select，一般形式为 Dim 变量 = From 项目 In 对象 Select 字段列表，例子查的是 Process.GetProcesses 的进程名与启动时间。Where、Order By、Join、Group By 只是可能出现的附加子句；Dim、As、New 是声明语句的组成部分，不是查询运算符。",
          "en": "The lecture says the key operators in the query are From, In and Select, with the general form Dim variable = From item In object Select list, and the example queries process names and start times from Process.GetProcesses. Where, Order By, Join and Group By are optional extra clauses, while Dim, As and New belong to declaration statements rather than the query.",
          "ms": "Kuliah menyatakan pengendali utama dalam pertanyaan ialah From, In dan Select, dengan bentuk umum Dim pemboleh ubah = From item In objek Select senarai, dan contohnya menanyakan nama proses serta masa mula daripada Process.GetProcesses. Where, Order By, Join dan Group By hanyalah klausa tambahan, manakala Dim, As dan New ialah bahagian pernyataan pengisytiharan, bukan pengendali pertanyaan."
        },
        "diff": 2,
        "topic": {
          "zh": "LINQ 的关键运算符",
          "en": "Key LINQ operators",
          "ms": "Pengendali utama LINQ"
        }
      },
      {
        "id": "vb-09-q06",
        "type": "multi",
        "q": {
          "zh": "关于 Web 数据库应用，下列哪些说法与讲义一致？（多选）",
          "en": "Which of the following statements about Web database applications agree with the lecture? (Select all that apply.)",
          "ms": "Pernyataan manakah tentang aplikasi pangkalan data Web yang selaras dengan kuliah? (Pilih semua yang berkenaan.)"
        },
        "opts": [
          {
            "zh": "Web 窗体在两次回送之间会自动保留各控件的值，与 Windows 窗体一样",
            "en": "A Web form automatically keeps the values of its controls between postbacks, just like a Windows form",
            "ms": "Borang Web menyimpan nilai kawalannya secara automatik antara postback, sama seperti borang Windows"
          },
          {
            "zh": "用户每次从列表中选择，都会发生一次回送（postback），页面只带着所选数据重新显示",
            "en": "Each time the user makes a selection from a list, a postback occurs and the page redisplays with only the selected data",
            "ms": "Setiap kali pengguna membuat pilihan daripada senarai, postback berlaku dan halaman dipaparkan semula dengan data yang dipilih sahaja"
          },
          {
            "zh": "Web 应用的安全要求比 Windows 应用严格得多，需要用户身份验证",
            "en": "Security for Web applications is much tighter than for Windows applications and user authentication is required",
            "ms": "Keselamatan aplikasi Web jauh lebih ketat daripada aplikasi Windows dan pengesahan pengguna diperlukan"
          },
          {
            "zh": "Web 页面是无状态的：每次显示时它都是一张新的页面",
            "en": "Web pages are stateless: each time a page displays it is a new page",
            "ms": "Halaman Web bersifat tanpa keadaan: setiap kali dipaparkan, ia ialah halaman baharu"
          }
        ],
        "answer": [
          1,
          2,
          3
        ],
        "explain": {
          "zh": "讲义说 Web 页面是无状态的、每次显示都是新页面；每次从列表选择都会产生回送，页面只带着所选数据重新显示；Web 数据库应用的安全要求更严，通常需要身份验证。A 恰恰与“无状态”相反：正因为每次都是新页面，控件值不会像 Windows 窗体那样自动保留。",
          "en": "The lecture says Web pages are stateless and each display is a new page; every selection from a list causes a postback and the page redisplays with only the selected data; security is tighter and authentication is usually required. A contradicts statelessness: precisely because each display is a new page, control values are not retained automatically as in a Windows form.",
          "ms": "Kuliah menyatakan halaman Web bersifat tanpa keadaan dan setiap paparan ialah halaman baharu; setiap pilihan daripada senarai menyebabkan postback dan halaman dipaparkan semula dengan data yang dipilih sahaja; keselamatan lebih ketat dan pengesahan biasanya diperlukan. A bercanggah dengan sifat tanpa keadaan: kerana setiap paparan ialah halaman baharu, nilai kawalan tidak dikekalkan secara automatik seperti dalam borang Windows."
        },
        "diff": 3,
        "topic": {
          "zh": "Web 应用的无状态与回送",
          "en": "Statelessness and postback",
          "ms": "Sifat tanpa keadaan dan postback"
        }
      },
      {
        "id": "vb-09-q07",
        "type": "tf",
        "q": {
          "zh": "要把数据库项目移到另一台电脑，只要在项目仍打开于 IDE 时复制整个文件夹即可。",
          "en": "To move a database project to another computer, you only need to copy the whole folder while the project is still open in the IDE.",
          "ms": "Untuk memindahkan projek pangkalan data ke komputer lain, anda hanya perlu menyalin keseluruhan folder semasa projek masih dibuka dalam IDE."
        },
        "answer": false,
        "explain": {
          "zh": "讲义要求先把项目在 IDE 中关闭，再复制完整文件夹到另一台电脑或位置；Web 项目则用 Windows 资源管理器复制解决方案文件夹。项目仍打开时复制可能得到被锁定或不完整的文件，所以“只要……即可”的说法是错的。",
          "en": "The lecture requires the project to be closed in the IDE first, then the complete folder copied to the other computer or location; for Web projects you copy the solution folder with Windows Explorer. Copying while the project is open may capture locked or incomplete files, so the only need to copy formulation is wrong.",
          "ms": "Kuliah menghendaki projek ditutup dalam IDE terlebih dahulu, kemudian keseluruhan folder disalin ke komputer atau lokasi lain; bagi projek Web, folder penyelesaian disalin menggunakan Windows Explorer. Menyalin semasa projek masih dibuka mungkin menyalin fail yang terkunci atau tidak lengkap, jadi dakwaan hanya perlu menyalin itu salah."
        },
        "diff": 2,
        "topic": {
          "zh": "移动数据库项目",
          "en": "Moving database projects",
          "ms": "Memindahkan projek pangkalan data"
        }
      },
      {
        "id": "vb-09-q08",
        "type": "fill",
        "q": {
          "zh": "除 XML 数据文件外，通常还有一个文件描述字段、数据类型与约束（如必填字段），ADO.NET 用它验证数据。这个文件叫什么？",
          "en": "Besides the XML data file there is normally a file that describes the fields, data types and constraints such as required fields, and ADO.NET validates data against it. What is this file called?",
          "ms": "Selain fail data XML, biasanya terdapat fail yang menerangkan medan, jenis data dan kekangan seperti medan wajib, dan ADO.NET mengesahkan data terhadapnya. Apakah nama fail ini?"
        },
        "answer": [
          "XML schema",
          "schema",
          "skema",
          "xsd"
        ],
        "explain": {
          "zh": "XML 架构（schema）描述字段、数据类型以及必填字段之类的约束，ADO.NET 依据它验证数据并检查约束冲突。新增数据源时，解决方案资源管理器里会出现 .xsd 文件，它就是这份 XML 架构定义。",
          "en": "The XML schema describes the fields, data types and constraints such as required fields, and ADO.NET validates data against it and checks for constraint violations. When a new data source is added, an .xsd file appears in Solution Explorer, and that file is the XML schema definition.",
          "ms": "Skema XML menerangkan medan, jenis data dan kekangan seperti medan wajib, dan ADO.NET mengesahkan data terhadapnya serta menyemak pelanggaran kekangan. Apabila sumber data baharu ditambah, fail .xsd muncul dalam Solution Explorer, dan fail itu ialah takrif skema XML tersebut."
        },
        "diff": 2,
        "topic": {
          "zh": "XML 架构",
          "en": "XML schema",
          "ms": "Skema XML"
        }
      }
    ]
  }
};
