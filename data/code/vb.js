window.CN_CODE = window.CN_CODE || {};
window.CN_CODE["vb"] = {
  id: "vb", lang: "vb",
  exercises: [
    {
      id: "vb-03-e1", chapter: "vb-03", lang: "vb", diff: 1,
      title: { zh: "变量与计算：总价", en: "Variables and calculations: total price", ms: "Pemboleh ubah dan pengiraan: jumlah harga" },
      prompt: {
        zh: "依次读入单价（Decimal）和数量（Integer），计算总额并按两位小数输出成 \"Total = 50.00\" 的格式。",
        en: "Read a unit price (Decimal) and a quantity (Integer), compute the total and print it to 2 decimal places as \"Total = 50.00\".",
        ms: "Baca harga seunit (Decimal) dan kuantiti (Integer), kira jumlah dan cetak hingga 2 tempat perpuluhan sebagai \"Total = 50.00\"."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim price As Decimal = Decimal.Parse(Console.ReadLine())\n        Dim qty As Integer = Integer.Parse(Console.ReadLine())\n\n        ' TODO: 计算 total 并按 F2 格式输出\n\n    End Sub\nEnd Module",
      tests: [
        { name: "12.5 x 4", stdin: "12.5\n4", out: "Total = 50.00" },
        { name: "3.99 x 3", stdin: "3.99\n3", out: "Total = 11.97" }
      ],
      hint: { zh: "金额要用 Decimal 而不是 Single/Double，避免浮点误差。格式化用 total.ToString(\"F2\")。", en: "Money should use Decimal rather than Single/Double to avoid floating-point error. Format with total.ToString(\"F2\").", ms: "Wang harus menggunakan Decimal dan bukan Single/Double untuk mengelakkan ralat titik terapung. Format dengan total.ToString(\"F2\")." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim price As Decimal = Decimal.Parse(Console.ReadLine())\n        Dim qty As Integer = Integer.Parse(Console.ReadLine())\n\n        Dim total As Decimal = price * qty\n        Console.WriteLine(\"Total = \" & total.ToString(\"F2\"))\n    End Sub\nEnd Module"
    },
    {
      id: "vb-03-e2", chapter: "vb-03", lang: "vb", diff: 2,
      title: { zh: "Decimal.Round 的舍入规则", en: "How Decimal.Round actually rounds", ms: "Cara Decimal.Round membundarkan" },
      prompt: {
        zh: "读入一个 Decimal，用 Decimal.Round 保留 0 位小数后输出（不带小数点）。注意 VB 用的是银行家舍入：正好 .5 时取最近的偶数。",
        en: "Read a Decimal, round it to 0 decimal places with Decimal.Round and print it (no decimal point). Note VB uses banker's rounding: an exact .5 goes to the nearest even digit.",
        ms: "Baca Decimal, bundarkan kepada 0 tempat perpuluhan dengan Decimal.Round dan cetak (tanpa titik perpuluhan). Perhatikan VB menggunakan pembundaran jurubank: .5 tepat pergi ke digit genap terdekat."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim v As Decimal = Decimal.Parse(Console.ReadLine())\n\n        ' TODO: 用 Decimal.Round 舍入到 0 位，再用 F0 格式输出\n\n    End Sub\nEnd Module",
      tests: [
        { name: "2.5", stdin: "2.5", out: "2" },
        { name: "3.5", stdin: "3.5", out: "4" },
        { name: "2.5001", stdin: "2.5001", out: "3" }
      ],
      hint: { zh: "Decimal.Round(2.5D, 0) 得到 2 而不是 3，这就是常考的银行家舍入；而 2.5001 离 3 更近，所以得 3。", en: "Decimal.Round(2.5D, 0) gives 2, not 3 - that is the banker's rounding students always trip on. 2.5001 is closer to 3, so it gives 3.", ms: "Decimal.Round(2.5D, 0) memberi 2, bukan 3 - itulah pembundaran jurubank yang selalu mengelirukan. 2.5001 lebih hampir kepada 3, jadi ia memberi 3." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim v As Decimal = Decimal.Parse(Console.ReadLine())\n        Console.WriteLine(Decimal.Round(v, 0).ToString(\"F0\"))\n    End Sub\nEnd Module"
    },
    {
      id: "vb-04-e1", chapter: "vb-04", lang: "vb", diff: 1,
      title: { zh: "If…ElseIf 成绩等级", en: "If...ElseIf grade bands", ms: "Gred If...ElseIf" },
      prompt: {
        zh: "读入分数（0-100），按 80 及以上 A、70-79 B、60-69 C、其余 F 判定，输出 \"Grade = A\"。",
        en: "Read a mark (0-100) and grade it: 80+ is A, 70-79 is B, 60-69 is C, otherwise F. Print \"Grade = A\".",
        ms: "Baca markah (0-100) dan gredkan: 80+ ialah A, 70-79 ialah B, 60-69 ialah C, selain itu F. Cetak \"Grade = A\"."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim mark As Integer = Integer.Parse(Console.ReadLine())\n        Dim grade As String\n\n        ' TODO: 用 If / ElseIf / Else 判断等级\n\n        Console.WriteLine(\"Grade = \" & grade)\n    End Sub\nEnd Module",
      tests: [
        { name: "85", stdin: "85", out: "Grade = A" },
        { name: "72", stdin: "72", out: "Grade = B" },
        { name: "60", stdin: "60", out: "Grade = C" },
        { name: "40", stdin: "40", out: "Grade = F" }
      ],
      hint: { zh: "顺序很重要：从上往下判断，第一个成立的分支就执行，所以只需写 >= 80、>= 70、>= 60。", en: "Order matters: conditions are tested from the top and the first true branch wins, so you only need >= 80, >= 70, >= 60.", ms: "Urutan penting: syarat diuji dari atas dan cabang pertama yang benar diambil, jadi anda hanya perlu >= 80, >= 70, >= 60." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim mark As Integer = Integer.Parse(Console.ReadLine())\n        Dim grade As String\n\n        If mark >= 80 Then\n            grade = \"A\"\n        ElseIf mark >= 70 Then\n            grade = \"B\"\n        ElseIf mark >= 60 Then\n            grade = \"C\"\n        Else\n            grade = \"F\"\n        End If\n\n        Console.WriteLine(\"Grade = \" & grade)\n    End Sub\nEnd Module"
    },
    {
      id: "vb-04-e2", chapter: "vb-04", lang: "vb", diff: 2,
      title: { zh: "Select Case 与区间判断", en: "Select Case with ranges", ms: "Select Case dengan julat" },
      prompt: {
        zh: "读入 1-7 表示星期几。1 和 7 输出 Weekend，2 到 6 输出 Weekday，其他数字输出 Invalid。要求用 Select Case 实现。",
        en: "Read 1-7 for a weekday number. Print Weekend for 1 and 7, Weekday for 2-6, and Invalid for anything else. Use a Select Case.",
        ms: "Baca 1-7 untuk nombor hari. Cetak Weekend untuk 1 dan 7, Weekday untuk 2-6, dan Invalid untuk yang lain. Gunakan Select Case."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim d As Integer = Integer.Parse(Console.ReadLine())\n\n        ' TODO: 用 Select Case，注意多值 Case 和 Case ... To ... 的写法\n\n    End Sub\nEnd Module",
      tests: [
        { name: "1", stdin: "1", out: "Weekend" },
        { name: "3", stdin: "3", out: "Weekday" },
        { name: "7", stdin: "7", out: "Weekend" },
        { name: "9", stdin: "9", out: "Invalid" }
      ],
      hint: { zh: "多值写法是 Case 1, 7；区间写法是 Case 2 To 6；兜底用 Case Else。", en: "Multiple values: Case 1, 7. A range: Case 2 To 6. The catch-all: Case Else.", ms: "Berbilang nilai: Case 1, 7. Julat: Case 2 To 6. Penampan: Case Else." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim d As Integer = Integer.Parse(Console.ReadLine())\n\n        Select Case d\n            Case 1, 7\n                Console.WriteLine(\"Weekend\")\n            Case 2 To 6\n                Console.WriteLine(\"Weekday\")\n            Case Else\n                Console.WriteLine(\"Invalid\")\n        End Select\n    End Sub\nEnd Module"
    },
    {
      id: "vb-05-e1", chapter: "vb-05", lang: "vb", diff: 2,
      title: { zh: "Function 过程：阶乘", en: "Function procedure: factorial", ms: "Prosedur Fungsi: faktorial" },
      prompt: {
        zh: "写一个 Function 过程 Factorial(n) 返回 n!（返回类型用 Long），读入 n 后输出 \"Factorial of 5 = 120\"。",
        en: "Write a Function procedure Factorial(n) that returns n! (return type Long), read n and print \"Factorial of 5 = 120\".",
        ms: "Tulis prosedur Fungsi Factorial(n) yang memulangkan n! (jenis pulangan Long), baca n dan cetak \"Factorial of 5 = 120\"."
      },
      starter: "Module Program\n    Function Factorial(n As Integer) As Long\n        ' TODO: 累乘 1..n 并 Return\n\n    End Function\n\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n        Console.WriteLine(\"Factorial of \" & n & \" = \" & Factorial(n))\n    End Sub\nEnd Module",
      tests: [
        { name: "5", stdin: "5", out: "Factorial of 5 = 120" },
        { name: "10", stdin: "10", out: "Factorial of 10 = 3628800" }
      ],
      hint: { zh: "Function 与 Sub 的区别就在这里：Function 用 Return 把值送回调用处，Sub 不返回值。", en: "This is exactly where Function differs from Sub: a Function returns a value with Return, a Sub returns nothing.", ms: "Di sinilah Function berbeza daripada Sub: Fungsi memulangkan nilai dengan Return, Sub tidak memulangkan apa-apa." },
      solution: "Module Program\n    Function Factorial(n As Integer) As Long\n        Dim result As Long = 1\n        For i As Integer = 2 To n\n            result *= i\n        Next\n        Return result\n    End Function\n\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n        Console.WriteLine(\"Factorial of \" & n & \" = \" & Factorial(n))\n    End Sub\nEnd Module"
    },
    {
      id: "vb-07-e1", chapter: "vb-07", lang: "vb", diff: 1,
      title: { zh: "For 循环累加", en: "Accumulating with a For loop", ms: "Pengumpulan dengan gelung For" },
      prompt: {
        zh: "读入整数 n，用 For/Next 循环求 1 到 n 的和，输出 \"Sum = 5050\"。",
        en: "Read an integer n, use a For/Next loop to add 1 through n, and print \"Sum = 5050\".",
        ms: "Baca integer n, gunakan gelung For/Next untuk menambah 1 hingga n, dan cetak \"Sum = 5050\"."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n        Dim sum As Integer = 0\n\n        ' TODO: For i = 1 To n 累加\n\n        Console.WriteLine(\"Sum = \" & sum)\n    End Sub\nEnd Module",
      tests: [
        { name: "100", stdin: "100", out: "Sum = 5050" },
        { name: "1", stdin: "1", out: "Sum = 1" },
        { name: "0", stdin: "0", out: "Sum = 0" }
      ],
      hint: { zh: "n = 0 时循环体一次都不执行，这正好检验 For 的循环条件。", en: "With n = 0 the loop body never runs - a good check that you understand the For condition.", ms: "Dengan n = 0 badan gelung tidak berjalan langsung - semakan baik bahawa anda faham syarat For." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n        Dim sum As Integer = 0\n\n        For i As Integer = 1 To n\n            sum += i\n        Next\n\n        Console.WriteLine(\"Sum = \" & sum)\n    End Sub\nEnd Module"
    },
    {
      id: "vb-07-e2", chapter: "vb-07", lang: "vb", diff: 1,
      title: { zh: "循环输出乘法表", en: "Print a times table with a loop", ms: "Cetak jadual sifir dengan gelung" },
      prompt: {
        zh: "读入整数 n，输出 n 的乘法表前 5 行，格式为 \"7 x 1 = 7\"（每行一个）。",
        en: "Read an integer n and print the first 5 lines of its times table in the form \"7 x 1 = 7\", one per line.",
        ms: "Baca integer n dan cetak 5 baris pertama jadual sifirnya dalam bentuk \"7 x 1 = 7\", satu setiap baris."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n\n        ' TODO: For i = 1 To 5 输出 \"n x i = 乘积\"\n\n    End Sub\nEnd Module",
      tests: [
        { name: "7", stdin: "7", out: "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35" },
        { name: "3", stdin: "3", out: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15" }
      ],
      hint: { zh: "注意 VB 里 & 既能拼字符串也能拼数字，乘法要写 (n * i) 才不会和字符串拼接混淆。", en: "In VB, & joins both strings and numbers; write (n * i) so the multiplication is not confused with concatenation.", ms: "Dalam VB, & menyambung rentetan dan nombor; tulis (n * i) supaya pendaraban tidak dikelirukan dengan cantuman." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n\n        For i As Integer = 1 To 5\n            Console.WriteLine(n & \" x \" & i & \" = \" & (n * i))\n        Next\n    End Sub\nEnd Module"
    },
    {
      id: "vb-08-e1", chapter: "vb-08", lang: "vb", diff: 2,
      title: { zh: "数组：最大值与平均值", en: "Arrays: maximum and average", ms: "Tatasusunan: maksimum dan purata" },
      prompt: {
        zh: "第一行读入个数 n，接下来 n 行每行一个整数。用数组保存后输出两行：\"Max = 40\" 和 \"Average = 25.00\"（平均值保留两位小数）。",
        en: "Read n on the first line, then n integers, one per line. Store them in an array and print two lines: \"Max = 40\" and \"Average = 25.00\" (2 decimal places).",
        ms: "Baca n pada baris pertama, kemudian n integer, satu setiap baris. Simpan dalam tatasusunan dan cetak dua baris: \"Max = 40\" dan \"Average = 25.00\" (2 tempat perpuluhan)."
      },
      starter: "Module Program\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n        Dim a(n - 1) As Integer\n\n        ' TODO: 读入 n 个数到数组，求最大值与平均值并输出\n\n    End Sub\nEnd Module",
      tests: [
        { name: "10 20 30 40", stdin: "4\n10\n20\n30\n40", out: "Max = 40\nAverage = 25.00" },
        { name: "single", stdin: "1\n7", out: "Max = 7\nAverage = 7.00" }
      ],
      hint: { zh: "Dim a(n - 1) 声明的是 0 到 n-1 共 n 个元素——这正是常考的下标陷阱。", en: "Dim a(n - 1) declares elements 0 to n-1, that is n elements - exactly the subscript trap that gets tested.", ms: "Dim a(n - 1) mengisytiharkan elemen 0 hingga n-1, iaitu n elemen - itulah perangkap subskrip yang selalu diuji." },
      solution: "Module Program\n    Sub Main(args As String())\n        Dim n As Integer = Integer.Parse(Console.ReadLine())\n        Dim a(n - 1) As Integer\n\n        For i As Integer = 0 To n - 1\n            a(i) = Integer.Parse(Console.ReadLine())\n        Next\n\n        Dim sum As Integer = 0\n        Dim mx As Integer = a(0)\n        For Each x As Integer In a\n            sum += x\n            If x > mx Then mx = x\n        Next\n\n        Console.WriteLine(\"Max = \" & mx)\n        Console.WriteLine(\"Average = \" & (sum / n).ToString(\"F2\"))\n    End Sub\nEnd Module"
    }
  ]
};
