window.CN_CODE = window.CN_CODE || {};
window.CN_CODE["oop"] = {
  id: "oop", lang: "java",
  exercises: [
    {
      id: "oop-03-e1", chapter: "oop-03", lang: "java", diff: 1,
      title: { zh: "循环求和", en: "Sum with a loop", ms: "Hasil tambah dengan gelung" },
      prompt: {
        zh: "读入一个整数 n，输出 1 到 n 的累加和。要求用 for 循环完成，不要用公式。",
        en: "Read an integer n and print the sum from 1 to n. Use a for loop, not the closed-form formula.",
        ms: "Baca integer n dan cetak hasil tambah 1 hingga n. Gunakan gelung for, bukan formula tertutup."
      },
      starter: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n\n        // TODO: 用循环累加 1..n，然后输出结果\n\n    }\n}",
      tests: [
        { name: "n = 10", stdin: "10", out: "55" },
        { name: "n = 1", stdin: "1", out: "1" },
        { name: "n = 100", stdin: "100", out: "5050" }
      ],
      hint: { zh: "把累加变量初始化为 0，循环变量从 1 走到 n。", en: "Initialise an accumulator to 0 and let the loop variable run from 1 to n.", ms: "Mulakan pemboleh ubah pengumpul dengan 0 dan biarkan pemboleh ubah gelung berjalan dari 1 hingga n." },
      solution: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int sum = 0;\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}"
    },
    {
      id: "oop-03-e2", chapter: "oop-03", lang: "java", diff: 2,
      title: { zh: "方法：素数判断", en: "Method: primality test", ms: "Kaedah: ujian perdana" },
      prompt: {
        zh: "写一个方法 isPrime(int n) 判断素数，然后用它输出 1 到 50 之间的所有素数，用单个空格分隔，最后换行。",
        en: "Write a method isPrime(int n), then use it to print every prime between 1 and 50 on one line, separated by single spaces.",
        ms: "Tulis kaedah isPrime(int n), kemudian gunakannya untuk mencetak semua nombor perdana antara 1 hingga 50 dalam satu baris, dipisahkan dengan satu ruang."
      },
      starter: "public class Main {\n\n    static boolean isPrime(int n) {\n        // TODO: 小于 2 不是素数；用 i * i <= n 来判断\n        return false;\n    }\n\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 50; i++) {\n            if (isPrime(i)) {\n                // TODO: 追加到 sb，注意第一个数前面不要空格\n            }\n        }\n        System.out.println(sb);\n    }\n}",
      tests: [
        { name: "1..50", stdin: "", out: "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47" }
      ],
      hint: { zh: "只需试除到 sqrt(n)：一旦 i*i > n 就可以停。拼接时用 sb.length() > 0 判断要不要加空格。", en: "Only trial-divide up to sqrt(n): stop once i*i > n. When joining, use sb.length() > 0 to decide whether to add a space.", ms: "Hanya bahagi cubaan sehingga sqrt(n): berhenti apabila i*i > n. Semasa menggabung, gunakan sb.length() > 0 untuk menentukan sama ada perlu ruang." },
      solution: "public class Main {\n\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= 50; i++) {\n            if (isPrime(i)) {\n                if (sb.length() > 0) sb.append(' ');\n                sb.append(i);\n            }\n        }\n        System.out.println(sb);\n    }\n}"
    },
    {
      id: "oop-03-e3", chapter: "oop-03", lang: "java", diff: 2,
      title: { zh: "数组：最大、最小、平均", en: "Array: max, min, average", ms: "Tatasusunan: maks, min, purata" },
      prompt: {
        zh: "第一行读入 n，第二行读入 n 个整数。输出三个值：最大值、最小值、平均值（保留两位小数），用空格分隔。",
        en: "Read n on the first line, then n integers on the second. Print the maximum, minimum and average (2 decimal places), separated by spaces.",
        ms: "Baca n pada baris pertama, kemudian n integer pada baris kedua. Cetak nilai maksimum, minimum dan purata (2 tempat perpuluhan), dipisahkan dengan ruang."
      },
      starter: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextInt();\n\n        // TODO: 求最大值、最小值、总和，再按 \"max min avg\" 格式输出\n\n    }\n}",
      tests: [
        { name: "3 8 1 9 4", stdin: "5\n3 8 1 9 4", out: "9 1 5.00" },
        { name: "single", stdin: "1\n7", out: "7 7 7.00" },
        { name: "negatives", stdin: "4\n-5 -2 -9 -1", out: "-1 -9 -4.25" }
      ],
      hint: { zh: "先把 max 和 min 都设成 a[0]，再遍历比较。平均值用 System.out.printf(\"%d %d %.2f%n\", ...)。", en: "Set both max and min to a[0] first, then scan. Use System.out.printf(\"%d %d %.2f%n\", ...) for the average.", ms: "Tetapkan kedua-dua max dan min kepada a[0] dahulu, kemudian imbas. Gunakan System.out.printf(\"%d %d %.2f%n\", ...) untuk purata." },
      solution: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        for (int i = 0; i < n; i++) a[i] = sc.nextInt();\n\n        int max = a[0], min = a[0], sum = 0;\n        for (int x : a) {\n            if (x > max) max = x;\n            if (x < min) min = x;\n            sum += x;\n        }\n        System.out.printf(\"%d %d %.2f%n\", max, min, (double) sum / n);\n    }\n}"
    },
    {
      id: "oop-04-e1", chapter: "oop-04", lang: "java", diff: 1,
      title: { zh: "类与对象：圆", en: "Classes and objects: a circle", ms: "Kelas dan objek: bulatan" },
      prompt: {
        zh: "定义 Circle 类（字段 radius、方法 area() 与 perimeter()）。读入半径 r，创建对象并输出 Area 与 Perimeter，各保留两位小数。",
        en: "Define a Circle class (field radius, methods area() and perimeter()). Read the radius r, create an object and print Area and Perimeter to 2 decimal places.",
        ms: "Takrifkan kelas Circle (medan radius, kaedah area() dan perimeter()). Baca jejari r, cipta objek dan cetak Area dan Perimeter hingga 2 tempat perpuluhan."
      },
      starter: "import java.util.Scanner;\n\nclass Circle {\n    private double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    double area() {\n        // TODO: 返回 πr²\n        return 0;\n    }\n\n    double perimeter() {\n        // TODO: 返回 2πr\n        return 0;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        Circle c = new Circle(r);\n        System.out.printf(\"Area=%.2f Perimeter=%.2f%n\", c.area(), c.perimeter());\n    }\n}",
      tests: [
        { name: "r = 5", stdin: "5", out: "Area=78.54 Perimeter=31.42" },
        { name: "r = 1", stdin: "1", out: "Area=3.14 Perimeter=6.28" }
      ],
      hint: { zh: "用 Math.PI，面积是 πr²，周长是 2πr。注意字段声明为 private 时，要通过方法访问。", en: "Use Math.PI: area is πr² and perimeter is 2πr. With a private field, access it through methods.", ms: "Gunakan Math.PI: luas ialah πr² dan perimeter ialah 2πr. Dengan medan private, akses melalui kaedah." },
      solution: "import java.util.Scanner;\n\nclass Circle {\n    private double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    double area() {\n        return Math.PI * radius * radius;\n    }\n\n    double perimeter() {\n        return 2 * Math.PI * radius;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double r = sc.nextDouble();\n        Circle c = new Circle(r);\n        System.out.printf(\"Area=%.2f Perimeter=%.2f%n\", c.area(), c.perimeter());\n    }\n}"
    },
    {
      id: "oop-04-e2", chapter: "oop-04", lang: "java", diff: 2,
      title: { zh: "静态字段：对象计数", en: "Static field: counting objects", ms: "Medan statik: mengira objek" },
      prompt: {
        zh: "定义 Student 类，含静态字段 count。每创建一个 Student 对象 count 加 1。创建三个学生后输出 \"Total students: 3\" 的形式。",
        en: "Define a Student class with a static field count. Each new Student increments count. After creating three students, print the number in the form \"Total students: 3\".",
        ms: "Takrifkan kelas Student dengan medan statik count. Setiap Student baharu menambah count. Selepas mencipta tiga pelajar, cetak nombor dalam bentuk \"Total students: 3\"."
      },
      starter: "class Student {\n    static int count = 0;\n    String name;\n\n    Student(String name) {\n        this.name = name;\n        // TODO: 让 count 加 1\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Student(\"Ali\");\n        new Student(\"Mei\");\n        new Student(\"Raj\");\n        // TODO: 输出 Total students: <count>\n\n    }\n}",
      tests: [
        { name: "three students", stdin: "", out: "Total students: 3" }
      ],
      hint: { zh: "静态字段属于类而不是对象，用 Student.count 访问。", en: "A static field belongs to the class, not to an object; access it as Student.count.", ms: "Medan statik milik kelas, bukan objek; akses sebagai Student.count." },
      solution: "class Student {\n    static int count = 0;\n    String name;\n\n    Student(String name) {\n        this.name = name;\n        count++;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        new Student(\"Ali\");\n        new Student(\"Mei\");\n        new Student(\"Raj\");\n        System.out.println(\"Total students: \" + Student.count);\n    }\n}"
    },
    {
      id: "oop-05-e1", chapter: "oop-05", lang: "java", diff: 2,
      title: { zh: "字符串：反转与元音统计", en: "Strings: reverse and count vowels", ms: "Rentetan: songsang dan kira vokal" },
      prompt: {
        zh: "读入一行文本，输出两样东西：反转后的字符串，以及其中元音字母（a e i o u，不分大小写）的个数，中间用空格分隔。",
        en: "Read one line of text and print the reversed string followed by the number of vowels (a e i o u, case-insensitive), separated by a space.",
        ms: "Baca satu baris teks dan cetak rentetan yang disongsangkan diikuti bilangan vokal (a e i o u, tidak kira huruf besar/kecil), dipisahkan dengan ruang."
      },
      starter: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n\n        // TODO: 反转字符串，数元音，输出 \"<reversed> <count>\"\n\n    }\n}",
      tests: [
        { name: "hello", stdin: "hello", out: "olleh 2" },
        { name: "Java", stdin: "Java", out: "avaJ 2" },
        { name: "xyz", stdin: "xyz", out: "zyx 0" }
      ],
      hint: { zh: "反转可用 new StringBuilder(s).reverse() 或从后往前遍历。数元音时先把字符转成小写。", en: "Reverse with new StringBuilder(s).reverse() or by looping backwards. Lowercase each character before testing for vowels.", ms: "Songsangkan dengan new StringBuilder(s).reverse() atau dengan gelung ke belakang. Tukar setiap aksara kepada huruf kecil sebelum menguji vokal." },
      solution: "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String reversed = new StringBuilder(s).reverse().toString();\n        int vowels = 0;\n        for (char c : s.toLowerCase().toCharArray()) {\n            if (\"aeiou\".indexOf(c) >= 0) vowels++;\n        }\n        System.out.println(reversed + \" \" + vowels);\n    }\n}"
    },
    {
      id: "oop-06-e1", chapter: "oop-06", lang: "java", diff: 2,
      title: { zh: "继承与多态", en: "Inheritance and polymorphism", ms: "Pewarisan dan polimorfisme" },
      prompt: {
        zh: "定义父类 Person（字段 name、方法 describe()），子类 Student 继承 Person 并增加 score 字段，用 @Override 改写 describe() 返回 \"Tom is a student with score 90\" 这种格式。用 Person 类型的变量指向 Student 对象并输出 describe()。",
        en: "Define a superclass Person (field name, method describe()), and a subclass Student that adds score and overrides describe() with @Override to return a string like \"Tom is a student with score 90\". Hold a Student in a Person variable and print describe().",
        ms: "Takrifkan kelas induk Person (medan name, kaedah describe()), dan subkelas Student yang menambah score serta mengatasi describe() dengan @Override untuk memulangkan teks seperti \"Tom is a student with score 90\". Simpan Student dalam pemboleh ubah Person dan cetak describe()."
      },
      starter: "class Person {\n    String name;\n\n    Person(String name) { this.name = name; }\n\n    String describe() { return name; }\n}\n\nclass Student extends Person {\n    int score;\n\n    Student(String name, int score) {\n        super(name);\n        this.score = score;\n    }\n\n    // TODO: 用 @Override 改写 describe()\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Student(\"Tom\", 90);\n        System.out.println(p.describe());\n    }\n}",
      tests: [
        { name: "Tom 90", stdin: "", out: "Tom is a student with score 90" }
      ],
      hint: { zh: "子类构造方法第一行必须调用 super(name)。这就是动态绑定：编译时看 Person，运行时执行 Student 的版本。", en: "The subclass constructor must call super(name) first. That is dynamic binding: the compiler sees Person, the runtime runs Student's version.", ms: "Pembina subkelas mesti memanggil super(name) dahulu. Itulah pengikatan dinamik: pengkompil melihat Person, masa jalan menjalankan versi Student." },
      solution: "class Person {\n    String name;\n\n    Person(String name) { this.name = name; }\n\n    String describe() { return name; }\n}\n\nclass Student extends Person {\n    int score;\n\n    Student(String name, int score) {\n        super(name);\n        this.score = score;\n    }\n\n    @Override\n    String describe() {\n        return name + \" is a student with score \" + score;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person p = new Student(\"Tom\", 90);\n        System.out.println(p.describe());\n    }\n}"
    },
    {
      id: "oop-07-e1", chapter: "oop-07", lang: "java", diff: 2,
      title: { zh: "接口：多态求面积", en: "Interfaces: polymorphic area", ms: "Antara muka: luas polimorfik" },
      prompt: {
        zh: "定义接口 Shape（方法 area()），让 Circle 和 Rectangle 分别实现它。把两个对象放进 Shape 数组，累加面积后输出 \"Total area = 23.14\"。",
        en: "Define a Shape interface with area(), and implement it in Circle and Rectangle. Put both into a Shape array, sum the areas and print \"Total area = 23.14\".",
        ms: "Takrifkan antara muka Shape dengan area(), dan laksanakannya dalam Circle dan Rectangle. Letakkan kedua-duanya dalam tatasusunan Shape, jumlahkan luas dan cetak \"Total area = 23.14\"."
      },
      starter: "interface Shape {\n    double area();\n}\n\nclass Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n\n    public double area() {\n        // TODO: 返回 πr²\n        return 0;\n    }\n}\n\nclass Rectangle implements Shape {\n    double w, h;\n    Rectangle(double w, double h) { this.w = w; this.h = h; }\n\n    public double area() {\n        // TODO: 返回 w * h\n        return 0;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = { new Circle(1), new Rectangle(4, 5) };\n        double total = 0;\n        // TODO: 累加面积并输出\n\n    }\n}",
      tests: [
        { name: "circle r=1 + rect 4x5", stdin: "", out: "Total area = 23.14" }
      ],
      hint: { zh: "接口里的方法默认是 public abstract，实现时不能降低可见性，要写 public double area()。", en: "Interface methods are public abstract; an implementation must not reduce visibility, so write public double area().", ms: "Kaedah antara muka adalah public abstract; pelaksanaan tidak boleh mengurangkan keterlihatan, jadi tulis public double area()." },
      solution: "interface Shape {\n    double area();\n}\n\nclass Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    public double area() { return Math.PI * r * r; }\n}\n\nclass Rectangle implements Shape {\n    double w, h;\n    Rectangle(double w, double h) { this.w = w; this.h = h; }\n    public double area() { return w * h; }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape[] shapes = { new Circle(1), new Rectangle(4, 5) };\n        double total = 0;\n        for (Shape s : shapes) total += s.area();\n        System.out.printf(\"Total area = %.2f%n\", total);\n    }\n}"
    }
  ]
};
