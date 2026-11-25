

# ----------------------------------------------------------------------------
# Part C
# ----------------------------------------------------------------------------
def part_c():
    h1("Part C · 2 道 Programming（30 分）", page_break=True, kicker_text="Part C · Programming")
    para("Part C 不是“写越多越好”，而是“每个要求都找到对应的事件/方法”。先列控件表，再写 5 个事件：Load、Add、Remove、Sort、Transfer。代码短而全，比长而乱更容易拿分。")

    h2("15 分题怎么给分", "C0")
    table(["评分点", "常见分值", "你要让阅卷人看到什么"],
          [["GUI / 控件名", "3", "控件类型对、Name 有意义、关键属性对"],
           ["Load / 初始值", "2", "Form_Load 填 Items、设 SelectedIndex"],
           ["核心逻辑", "5", "Add / Remove / Sort / Transfer 或 discount / total"],
           ["输入验证", "2", "空值、非数字、SelectedIndex = -1、付款不足"],
           ["输出 / 格式", "2", "MessageBox、ToString(\"C2\")、 receipt"],
           ["Clear / Exit / 收尾", "1", "清空、关闭、End Sub"]],
          widths=[4.6, 2.4, 10.0], size=8.7, align_center_cols=(1,))

    c1()


def c1():
    h2("ListBox / ComboBox Topic Manager（15 分）", "C1")
    question_box("Workshop Topic Manager", "15",
                 "A training centre wants a form to manage workshop topics. The form contains cboTopic (ComboBox), txtNewTopic (TextBox), lstAvailable and lstSelected (ListBoxes), lblTopic and lblCount (Labels), and buttons btnAdd, btnRemove, btnSort, btnTransfer, btnReturn, btnClear and btnExit.",
                 ["(a)  Form_Load: fill cboTopic and lstAvailable with VB.NET, Java, Python and Database.  (2M)",
                  "(b)  btnAdd_Click: add txtNewTopic to both lists; reject blank and duplicate.  (3M)",
                  "(c)  btnRemove_Click: remove the selected item from lstAvailable.  (2M)",
                  "(d)  btnSort_Click: sort lstAvailable alphabetically.  (2M)",
                  "(e)  btnTransfer_Click / btnReturn_Click: move the selected item between the two lists.  (4M)",
                  "(f)  cboTopic_SelectedIndexChanged: display the selected topic in lblTopic and update the counts.  (2M)"])

    h3("控件表（先写这个，再写代码）")
    table(["Control", "Type", "Key properties / purpose"],
          [["cboTopic", "ComboBox", "DropDownStyle = DropDownList; Items = VB.NET, Java, Python, Database"],
           ["txtNewTopic", "TextBox", "MaxLength = 30; 输入新 topic"],
           ["lstAvailable", "ListBox", "可用 topic；SelectionMode = One"],
           ["lstSelected", "ListBox", "已选 topic；SelectionMode = One"],
           ["lblTopic / lblCount", "Label", "显示当前选择 / 两个列表的数量"],
           ["btnAdd / btnRemove / btnSort", "Button", "Add / Remove / Sort"],
           ["btnTransfer / btnReturn", "Button", "-> 移到右边 / <- 移回左边"],
           ["btnClear / btnExit", "Button", "Clear both / Close form"]],
          widths=[4.4, 2.8, 9.8], size=8.5)

    h3("Step 1 · Form_Load：填两个列表（2M）")
    code_block(r'''Public Class TopicForm
    Private Sub TopicForm_Load(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles MyBase.Load

        cboTopic.Items.Add("VB.NET")
        cboTopic.Items.Add("Java")
        cboTopic.Items.Add("Python")
        cboTopic.Items.Add("Database")

        lstAvailable.Items.Add("VB.NET")
        lstAvailable.Items.Add("Java")
        lstAvailable.Items.Add("Python")
        lstAvailable.Items.Add("Database")

        cboTopic.SelectedIndex = 0
        UpdateCounts()
    End Sub''', "Form_Load 只执行一次；SelectedIndex = 0 选中第一项")

    h3("Step 2 · Add：验证空值 + 重复（3M）")
    code_block(r'''    Private Sub btnAdd_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnAdd.Click

        Dim newTopic As String = txtNewTopic.Text.Trim()

        If newTopic = "" Then
            MessageBox.Show("Please enter a topic.", "Validation", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtNewTopic.Focus()
            Exit Sub
        End If

        If cboTopic.Items.IndexOf(newTopic) >= 0 Then
            MessageBox.Show("This topic already exists.", "Duplicate", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtNewTopic.SelectAll()
            txtNewTopic.Focus()
            Exit Sub
        End If

        cboTopic.Items.Add(newTopic)
        lstAvailable.Items.Add(newTopic)
        txtNewTopic.Clear()
        txtNewTopic.Focus()
        UpdateCounts()
    End Sub''', "Trim -> 空值 -> 重复 -> 加到两个列表")

    h3("Step 3 · Remove + Sort（4M）")
    code_block(r'''    Private Sub btnRemove_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnRemove.Click

        If lstAvailable.SelectedIndex = -1 Then
            MessageBox.Show("Please select a topic to remove.", _
                            "No Selection", MessageBoxButtons.OK, _
                            MessageBoxIcon.Warning)
            Exit Sub
        End If

        lstAvailable.Items.RemoveAt(lstAvailable.SelectedIndex)
        UpdateCounts()
    End Sub

    Private Sub btnSort_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnSort.Click

        If lstAvailable.Items.Count = 0 Then Exit Sub

        Dim items(lstAvailable.Items.Count - 1) As String
        For i As Integer = 0 To lstAvailable.Items.Count - 1
            items(i) = lstAvailable.Items(i).ToString()
        Next i

        Array.Sort(items)
        lstAvailable.Items.Clear()
        For Each item As String In items
            lstAvailable.Items.Add(item)
        Next

        UpdateCounts()
    End Sub''', "RemoveAt(SelectedIndex)；Sort 用数组 + Array.Sort")

    h3("Step 4 · Transfer / Return：两列表互搬（4M）")
    code_block(r'''    Private Sub btnTransfer_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnTransfer.Click

        If lstAvailable.SelectedIndex = -1 Then
            MessageBox.Show("Select a topic to transfer.", "No Selection", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            Exit Sub
        End If

        Dim topic As String = lstAvailable.SelectedItem.ToString()

        If lstSelected.Items.IndexOf(topic) >= 0 Then
            MessageBox.Show("This topic is already selected.", "Duplicate", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            Exit Sub
        End If

        lstAvailable.Items.RemoveAt(lstAvailable.SelectedIndex)
        lstSelected.Items.Add(topic)
        lstSelected.SelectedIndex = lstSelected.Items.Count - 1
        UpdateCounts()
    End Sub

    Private Sub btnReturn_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnReturn.Click

        If lstSelected.SelectedIndex = -1 Then
            MessageBox.Show("Select a topic to return.", "No Selection", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            Exit Sub
        End If

        Dim topic As String = lstSelected.SelectedItem.ToString()
        lstSelected.Items.RemoveAt(lstSelected.SelectedIndex)
        lstAvailable.Items.Add(topic)
        lstAvailable.SelectedIndex = lstAvailable.Items.Count - 1
        UpdateCounts()
    End Sub''', "先取 SelectedItem，再 RemoveAt，再 Add；顺序不能反")

    h3("Step 5 · ComboBox 选择 + 数量（2M）")
    code_block(r'''    Private Sub cboTopic_SelectedIndexChanged( _
            ByVal sender As System.Object, ByVal e As System.EventArgs) _
            Handles cboTopic.SelectedIndexChanged

        If cboTopic.SelectedIndex >= 0 Then
            lblTopic.Text = "Selected topic: " & _
                            cboTopic.SelectedItem.ToString()
        End If
        UpdateCounts()
    End Sub

    Private Sub UpdateCounts()
        lblCount.Text = "Available: " & _
                        lstAvailable.Items.Count.ToString() & _
                        "    Selected: " & _
                        lstSelected.Items.Count.ToString()
    End Sub

    Private Sub btnClear_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnClear.Click

        If MessageBox.Show("Clear both lists?", "Confirm", _
                MessageBoxButtons.YesNo, MessageBoxIcon.Question) = _
                DialogResult.Yes Then
            lstAvailable.Items.Clear()
            lstSelected.Items.Clear()
            UpdateCounts()
        End If
    End Sub

    Private Sub btnExit_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub
End Class''', "SelectedIndex >= 0；Count 用 ToString 拼接")

    h3("评分点（15M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Form_Load", "2", "两个列表都有 4 个 topic；SelectedIndex = 0"],
           ["Add", "3", "Trim、空值、重复、两个列表都 add"],
           ["Remove", "2", "SelectedIndex = -1 检查 + RemoveAt"],
           ["Sort", "2", "数组 + Array.Sort + 清空 + 加回"],
           ["Transfer / Return", "4", "取 SelectedItem、RemoveAt、Add、防重复"],
           ["SelectedIndexChanged / counts", "2", "lblTopic + Items.Count"]],
          widths=[5.4, 1.6, 10.0], size=8.6, align_center_cols=(1,))

    h3("考场写法（按顺序抄）")
    numbered([
        "先写 **Form_Load**：两个列表各 4 个 item，cboTopic.SelectedIndex = 0。",
        "写 **Add**：Trim -> 空值检查 -> IndexOf >= 0 -> Items.Add 两次。",
        "写 **Remove**：SelectedIndex = -1 检查 -> RemoveAt。",
        "写 **Sort**：Dim items(Count - 1) -> For 复制 -> Array.Sort -> Clear -> For 加回。",
        "写 **Transfer / Return**：取 SelectedItem -> 防重复 -> RemoveAt -> Add -> 选中新项。",
        "最后写 **SelectedIndexChanged / UpdateCounts / Clear / Exit**。"])

    h3("考场提醒", color=AMBER)
    bullets([
        "**SelectedIndex 没有选中是 -1，不是 0。** 先检查 -1，再 RemoveAt；否则运行时错误。",
        "**RemoveAt 用 index，Remove 用 text。** Items.RemoveAt(lstAvailable.SelectedIndex) 最稳。",
        "**先取 SelectedItem 再 RemoveAt。** 顺序反了，SelectedItem 会变成下一项或 Nothing。",
        "**Count 比最大 index 大 1。** 循环写 0 To Items.Count - 1；不要写 0 To Count。",
        "**Sort 不要只写 Sorted = True 就结束。** 如果题目要求“写代码排序”，用数组 + Array.Sort 更能拿分。",
        "**Transfer 要防重复。** 两边都有同一个 topic 时，先 IndexOf >= 0 再提示。"])


