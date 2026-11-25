

# ----------------------------------------------------------------------------
# Appendix
# ----------------------------------------------------------------------------
def appendix():
    h1("Appendix · 考前最后 10 分钟", page_break=True, kicker_text="Appendix")
    para("这一部分不引入新知识，只把最容易忘、最容易混、最容易被扣分的点压缩成一张清单。进考场前看这一页就够了。")

    h2("A · 20 个必背片段", "A")
    table(["Must-know", "Code / rule"],
          [["Variable", "Dim qty As Integer"],
           ["Constant", "Const TAX_RATE As Decimal = 0.06D"],
           ["Static local", "Static count As Integer"],
           ["Structure", "Structure Student ... End Structure"],
           ["2D array", "Dim a(3, 3) As String   ' 4 × 4"],
           ["Parse", "Decimal.Parse(txtPrice.Text)"],
           ["TryParse", "If Not Decimal.TryParse(txtPrice.Text, price) Then ..."],
           ["ToString", "total.ToString(\"C2\")"],
           ["If / ElseIf", "If ... Then ... ElseIf ... Else ... End If"],
           ["Select Case", "Select Case code ... Case \"A\" ... Case Else ... End Select"],
           ["MessageBox + result", "Dim ans As DialogResult = MessageBox.Show(..., MessageBoxButtons.YesNo, MessageBoxIcon.Warning)"],
           ["For / Next", "For i As Integer = 0 To lst.Items.Count - 1 ... Next"],
           ["For Each", "For Each item As String In lst.Items ... Next"],
           ["SelectedIndex", "If lst.SelectedIndex <> -1 Then ..."],
           ["List add/remove/sort", "Items.Add(x) / Items.RemoveAt(i) / Array.Sort(arr)"],
           ["Modal / modeless", "Form2.ShowDialog()  /  Form2.Show()"],
           ["Cross-form variable", "Friend total As Decimal"],
           ["DB navigation", "BindingSource.AddNew / RemoveCurrent / MoveNext / MovePrevious"],
           ["DB save", "BindingSource.EndEdit()  then  TableAdapter.Update(DataSet.Table)"],
           ["Try / Catch", "Try ... Catch ex As Exception ... End Try"]],
          widths=[4.6, 12.0], size=7.9, first_col_bold=True)

    h2("B · 60 秒检查清单", "B")
    table(["Check", "If wrong, you lose..."],
          [["Array upper bound = 元素个数 − 1", "2D array 整题"],
           ["Structure 有 End Structure，且不在 Sub 里", "Structure 4M"],
           ["If 有 End If；For 有 Next；Select 有 End Select", "语法分"],
           ["SelectedIndex 先检查 −1，再 RemoveAt", "运行时错误 + Remove 分"],
           ["循环上限是 Count − 1，不是 Count", "越界"],
           ["金额用 Decimal，输出用 C2", "计算/格式分"],
           ["MessageBox 参数顺序 text, caption, buttons, icon", "输出分"],
           ["跨 form 用 Friend，不用 Private", "Multiform 2M"],
           ["ShowDialog 才是 modal；Show 是 modeless", "Modal 题"],
           ["Save 必须 EndEdit + Update，不是只 Update", "Database 4M"],
           ["Delete 要 Yes/No 确认，再 RemoveCurrent", "Delete 1–2M"],
           ["Clear / Exit 按钮有代码，不是装饰", "完整分"]],
          widths=[9.6, 7.0], size=8.2)

    h2("C · 三语术语速查", "C")
    table(["English", "Bahasa Melayu", "中文"],
          [["variable", "pemboleh ubah", "变量"],
           ["constant", "pemalar", "常量"],
           ["scope", "skop", "作用域"],
           ["lifetime", "hayat", "生命周期"],
           ["array", "tatasusunan", "数组"],
           ["structure", "struktur", "结构"],
           ["element", "elemen", "元素"],
           ["subscript / index", "subskrip / indeks", "下标 / 索引"],
           ["menu", "menu", "菜单"],
           ["modal", "modal", "模态"],
           ["modeless", "bukan modal", "非模态"],
           ["database", "pangkalan data", "数据库"],
           ["record", "rekod", "记录"],
           ["field", "medan", "字段"],
           ["table", "jadual", "表"],
           ["query", "pertanyaan", "查询"],
           ["binding source", "sumber pengikatan", "绑定源"],
           ["dataset", "set data", "数据集"],
           ["table adapter", "penyesuai jadual", "表适配器"],
           ["validation", "pengesahan", "验证"]],
          widths=[5.4, 5.8, 5.4], size=8.0)

    h2("D · 10 个最常见丢分点", "D")
    table(["错误写法", "正确写法", "为什么"],
          [["Dim a(4, 4) 表示 4×4", "Dim a(3, 3)", "声明写最高下标，不是元素个数"],
           ["For i = 1 To 4", "For i = 0 To 3", "VB 数组从 0 开始"],
           ["SelectedIndex = 0 当作没选", "SelectedIndex = -1", "−1 才是没有选中"],
           ["Form2.Show() 当作 modal", "Form2.ShowDialog()", "Show 是非模态"],
           ["Private total 跨 form 用", "Friend total", "Private 只限本 form"],
           ["Save 只写 Update", "EndEdit + Update", "最后一个编辑可能还没进 dataset"],
           ["BindingSource.RemoveAt", "RemoveCurrent()", "RemoveAt 是 ListBox/DataTable"],
           ["TextBox.Text * qty", "Decimal.Parse(TextBox.Text) * qty", "Text 是 String"],
           ["total.ToString(\"F2\") 当货币", "total.ToString(\"C2\")", "C2 才有货币符号"],
           ["RadioButton 直接放 form", "放进 GroupBox", "否则全部互斥"]],
          widths=[6.0, 6.0, 4.6], size=8.1)

    callout("最后一句话",
            "Part A 先排除；Part B 先声明；Part C 先控件表。每道题都写 End If / Next / End Sub，别把会做的分留在草稿纸上。",
            fill=GREEN_BG, bar=GREEN, title_color=GREEN)


