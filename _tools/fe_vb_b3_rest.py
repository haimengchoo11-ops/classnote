    h3("考场 6 步画法")
    numbered([
        "先画**外框**，写 form title；在右上角写 frmWorkshop。",
        "把输入分成 2–3 个 **GroupBox**：Participant / Programme / Workshop。",
        "每个输入：左边 Label，右边 TextBox / MaskedTextBox / ComboBox；固定格式用 MaskedTextBox。",
        "互斥选项（Diploma / Degree / Master）放进同一个 GroupBox 的 RadioButton；多选才用 CheckBox。",
        "底部放 Button：Add（默认）、Clear、Exit；输出用 Label，设 BorderStyle。",
        "在每个控件旁边写 Name；在图下方列 5–6 个关键属性（Mask、DropDownStyle、Checked、AcceptButton 等）。"])

    h3("如果 case study 换掉，怎么套")
    table(["题目说", "你画什么", "关键属性"],
          [["enter name / address", "TextBox（address 可 Multiline）", "MaxLength、Multiline、ScrollBars"],
           ["fixed format IC / phone / date", "MaskedTextBox", "Mask（如 000000-00-0000 / 00/00/0000）"],
           ["choose ONE", "RadioButton in GroupBox，或 ComboBox", "Checked、DropDownStyle = DropDownList"],
           ["choose MANY", "CheckBox，或 ListBox with MultiExtended", "Checked、SelectionMode"],
           ["show output / total", "Label（只读）或 ReadOnly TextBox", "BorderStyle、TextAlign、ReadOnly"],
           ["trigger action", "Button", "Text、Enabled、AcceptButton / CancelButton"],
           ["list of records", "ListBox / DataGridView", "Items、DataSource、ReadOnly"]],
          widths=[5.6, 6.4, 5.0], size=8.2)

    h3("考场提醒", color=AMBER)
    bullets([
        "**RadioButton 必须放进 GroupBox。** 全部直接放在 form 上会变成同一组，只能选一个， programme 题直接丢分。",
        "**固定格式不要用普通 TextBox。** 题目说 A0000000、IC、phone、date，就是提示你用 MaskedTextBox + Mask。",
        "**Label 不是输入。** 让用户输入就用 TextBox / MaskedTextBox；只显示结果才用 Label。",
        "**控件名不要留 TextBox1。** 用 txtName、mtxtStudentID、cboWorkshop、radDiploma，阅卷人一眼能对上。",
        "**画完检查 AcceptButton / CancelButton。** 这是“Windows 标准界面”的送分点。"])


def b4():
    h2("Database CRUD（10 分）", "B4")
    question_box("Access Database — Add / Delete / Next / Previous / Save", "10",
                 "A Microsoft Access database Workshop.accdb contains a table Participants with fields ParticipantID, Name, Programme, Workshop and Fee. The form is bound with WorkshopDataSet, ParticipantsBindingSource and ParticipantsTableAdapter.",
                 ["Write the Click event procedures for:",
                  "(a)  Add  (2M)",
                  "(b)  Delete  (2M)",
                  "(c)  Next  (1M)",
                  "(d)  Previous  (1M)",
                  "(e)  Save  (4M)"])

    h3("先认对象：谁负责什么")
    table(["Object", "职责", "在本章代码里"],
          [["DataSet", "内存中的临时数据（disconnected）", "WorkshopDataSet"],
           ["BindingSource", "连接 data source，负责导航和当前记录", "ParticipantsBindingSource"],
           ["TableAdapter", "检索 / 更新数据，生成 SQL", "ParticipantsTableAdapter"],
           ["Bound controls", "显示当前记录的字段", "txtParticipantID, txtName, ..."]],
          widths=[3.2, 8.0, 5.8], size=8.5)

    h3("(a) Add（2M）")
    code_block(r'''Private Sub btnAdd_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnAdd.Click

    ParticipantsBindingSource.AddNew()
    txtParticipantID.Focus()
End Sub''', "AddNew 只是在 dataset 里准备一条新记录，尚未写入 Access")

    h3("(b) Delete（2M）")
    code_block(r'''Private Sub btnDelete_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnDelete.Click

    If MessageBox.Show("Delete this record?", "Confirm", _
            MessageBoxButtons.YesNo, MessageBoxIcon.Warning) = DialogResult.Yes Then
        ParticipantsBindingSource.RemoveCurrent()
    End If
End Sub''', "先确认，再 RemoveCurrent")

    h3("(c) Next / (d) Previous（各 1M）")
    code_block(r'''Private Sub btnNext_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnNext.Click
    ParticipantsBindingSource.MoveNext()
End Sub

Private Sub btnPrevious_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnPrevious.Click
    ParticipantsBindingSource.MovePrevious()
End Sub''', "BindingSource 自带 MoveNext / MovePrevious")

    h3("(e) Save（4M）")
    code_block(r'''Private Sub btnSave_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnSave.Click

    Try
        Me.Validate()
        ParticipantsBindingSource.EndEdit()
        ParticipantsTableAdapter.Update(WorkshopDataSet.Participants)

        MessageBox.Show("Record saved.", "Save", _
                        MessageBoxButtons.OK, MessageBoxIcon.Information)
    Catch ex As Exception
        MessageBox.Show("Unable to save: " & ex.Message, "Error", _
                        MessageBoxButtons.OK, MessageBoxIcon.Error)
    End Try
End Sub''', "Validate -> EndEdit -> Update -> 提示")

    h3("每一行在做什么")
    table(["Statement", "作用", "考试为什么要写"],
          [["Me.Validate()", "触发表单上的验证", "让必填/格式错误在保存前暴露"],
           ["EndEdit()", "把当前编辑提交到 dataset", "不加的话，最后一个 textbox 的修改可能没进 dataset"],
           ["TableAdapter.Update(...)", "把 dataset 的 changes 写回 Access", "真正保存；只有 EndEdit 不够"],
           ["Try / Catch", "捕获数据库/约束错误", "4M 里的错误处理分"]],
          widths=[4.6, 6.4, 6.0], size=8.4)

    h3("评分点（10M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Add", "2", "AddNew + focus"],
           ["Delete", "2", "确认对话框 + RemoveCurrent"],
           ["Next", "1", "MoveNext"],
           ["Previous", "1", "MovePrevious"],
           ["Save", "4", "Validate + EndEdit + Update + Try/Catch"]],
          widths=[4.4, 1.6, 11.0], size=8.8, align_center_cols=(1,))

    h3("Access / 数据库细节")
    bullets([
        "**.accdb 的连接字符串**：Provider=Microsoft.ACE.OLEDB.12.0;Data Source=|DataDirectory|\\Workshop.accdb。",
        "**.mdb 的旧连接**：Provider=Microsoft.Jet.OLEDB.4.0；考试如果只写对象名，不写连接字符串也可以。",
        "**把 Access 文件放进项目**：Solution Explorer -> 文件属性 -> Copy to Output Directory = Copy if newer。",
        "**如果题目用 TableAdapterManager**：保存可写 ParticipantsTableAdapterManager.UpdateAll(WorkshopDataSet)。",
        "**Position 显示**（可选）：lblPosition.Text = (ParticipantsBindingSource.Position + 1) & \" / \" & ParticipantsBindingSource.Count。"])

    h3("考场提醒", color=AMBER)
    bullets([
        "**AddNew 不等于 Save。** 它只在内存里加一行；不调用 Update，关闭程序就没了。",
        "**RemoveCurrent 不等于 Delete 文件。** 它从 dataset 移除当前记录；Update 后才从 Access 删除。",
        "**不要用 RemoveAt。** BindingSource 用 RemoveCurrent()；RemoveAt 是 ListBox/DataTable 的写法。",
        "**Delete 一定要 confirm。** 没有 MessageBox 的 Yes/No，2M 里至少丢 1M。",
        "**Save 的 4M 拆开写。** Validate（1）+ EndEdit（1）+ Update（1）+ Try/Catch（1），不要只写一行 Update。"])


# main
if __name__ == '__main__':
    setup_document()
    cover()
    page_intro()
    part_a()
    part_b()
    doc.save(OUT)
    print(OUT)
