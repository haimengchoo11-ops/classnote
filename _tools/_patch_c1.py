
from pathlib import Path
p = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_docx.py")
s = p.read_text(encoding="utf-8")

def rep(old, new):
    global s
    if old not in s:
        raise SystemExit("NOT FOUND: " + old[:100])
    s = s.replace(old, new, 1)

rep("""                 "A training centre wants a form to manage workshop topics. The form contains cboTopic (ComboBox), txtNewTopic (TextBox), lstAvailable and lstSelected (ListBoxes), lblTopic and lblCount (Labels), and buttons btnAdd, btnRemove, btnSort, btnTransfer, btnReturn, btnClear and btnExit.",
                 ["(a)  Form_Load: fill cboTopic and lstAvailable with VB.NET, Java, Python and Database.  (2M)",
                  "(b)  btnAdd_Click: add txtNewTopic to both lists; reject blank and duplicate.  (3M)",
                  "(c)  btnRemove_Click: remove the selected item from lstAvailable.  (2M)",
                  "(d)  btnSort_Click: sort lstAvailable alphabetically.  (2M)",
                  "(e)  btnTransfer_Click / btnReturn_Click: move the selected item between the two lists.  (4M)",
                  "(f)  cboTopic_SelectedIndexChanged: display the selected topic in lblTopic and update the counts.  (2M)"])""",
"""                 "A training centre needs a form to manage workshop topics using cboTopic, txtNewTopic, lstAvailable, lstSelected, lblTopic and lblCount.",
                 ["(a)  Form_Load: fill both lists.  (2M)",
                  "(b)  Add: reject blank / duplicate; add to both lists.  (3M)",
                  "(c)  Remove the selected item.  (2M)",
                  "(d)  Sort lstAvailable alphabetically.  (2M)",
                  "(e)  Transfer the selected item between lists.  (4M)",
                  "(f)  Show the selected topic and update counts.  (2M)"])""")

rep("""        lstAvailable.Items.RemoveAt(lstAvailable.SelectedIndex)
        UpdateCounts()
    End Sub

    Private Sub btnSort_Click(ByVal sender As System.Object, _""",
"""        lstAvailable.Items.RemoveAt(lstAvailable.SelectedIndex)
        UpdateCounts()
    End Sub""", "RemoveAt(SelectedIndex)；先检查 -1")

    code_block(r'''    Private Sub btnSort_Click(ByVal sender As System.Object, _""")

rep("""        UpdateCounts()
    End Sub""", "RemoveAt(SelectedIndex)；Sort 用数组 + Array.Sort")""",
"""        UpdateCounts()
    End Sub""", "Sort 用数组 + Array.Sort")""")

rep("""        lstSelected.SelectedIndex = lstSelected.Items.Count - 1
        UpdateCounts()
    End Sub

    Private Sub btnReturn_Click(ByVal sender As System.Object, _""",
"""        lstSelected.SelectedIndex = lstSelected.Items.Count - 1
        UpdateCounts()
    End Sub""", "先取 SelectedItem，再 RemoveAt，再 Add")

    code_block(r'''    Private Sub btnReturn_Click(ByVal sender As System.Object, _""")

rep("""        UpdateCounts()
    End Sub""", "先取 SelectedItem，再 RemoveAt，再 Add；顺序不能反")""",
"""        UpdateCounts()
    End Sub""", "Return：先取 SelectedItem，再 RemoveAt，再 Add")""")

rep("""        lblCount.Text = "Available: " & _
                        lstAvailable.Items.Count.ToString() & _
                        "    Selected: " & _
                        lstSelected.Items.Count.ToString()
    End Sub

    Private Sub btnClear_Click(ByVal sender As System.Object, _""",
"""        lblCount.Text = "Available: " & _
                        lstAvailable.Items.Count.ToString() & _
                        "    Selected: " & _
                        lstSelected.Items.Count.ToString()
    End Sub""", "SelectedIndex >= 0；Count 用 ToString 拼接")

    code_block(r'''    Private Sub btnClear_Click(ByVal sender As System.Object, _""")

rep("""        Me.Close()
    End Sub
End Class""", "SelectedIndex >= 0；Count 用 ToString 拼接")""",
"""        Me.Close()
    End Sub
End Class""", "Clear 确认 + Exit 关闭")""")

p.write_text(s, encoding="utf-8")
print("patched", len(s), len(s.encode("utf-8")))
