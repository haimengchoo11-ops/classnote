
from pathlib import Path
p = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_docx.py")
s = p.read_text(encoding="utf-8")

def rep(old, new):
    global s
    if old not in s:
        raise SystemExit("NOT FOUND: " + old[:100])
    s = s.replace(old, new, 1)

# Allow long code blocks to flow across pages instead of leaving huge blanks.
old = """    trPr = t.rows[0]._tr.get_or_add_trPr()
    if keep:
        cant = OxmlElement("w:cantSplit")
        cant.set(qn("w:val"), "true")
        trPr.append(cant)

    p = c.paragraphs[0]
    pf = p.paragraph_format
    pf.space_before = Pt(0)
    pf.space_after = Pt(0)
    pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
    pf.line_spacing = Pt(10.4)

    lines = code.strip("\\n").split("\\n")"""
new = """    lines = code.strip("\\n").split("\\n")
    trPr = t.rows[0]._tr.get_or_add_trPr()
    if keep and len(lines) <= 18:
        cant = OxmlElement("w:cantSplit")
        cant.set(qn("w:val"), "true")
        trPr.append(cant)

    p = c.paragraphs[0]
    pf = p.paragraph_format
    pf.space_before = Pt(0)
    pf.space_after = Pt(0)
    pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
    pf.line_spacing = Pt(10.4)
"""
rep(old, new)

# Shorter C1 question (no code block markers in the replacement).
rep('''                 "A training centre wants a form to manage workshop topics. The form contains cboTopic (ComboBox), txtNewTopic (TextBox), lstAvailable and lstSelected (ListBoxes), lblTopic and lblCount (Labels), and buttons btnAdd, btnRemove, btnSort, btnTransfer, btnReturn, btnClear and btnExit.",
                 ["(a)  Form_Load: fill cboTopic and lstAvailable with VB.NET, Java, Python and Database.  (2M)",
                  "(b)  btnAdd_Click: add txtNewTopic to both lists; reject blank and duplicate.  (3M)",
                  "(c)  btnRemove_Click: remove the selected item from lstAvailable.  (2M)",
                  "(d)  btnSort_Click: sort lstAvailable alphabetically.  (2M)",
                  "(e)  btnTransfer_Click / btnReturn_Click: move the selected item between the two lists.  (4M)",
                  "(f)  cboTopic_SelectedIndexChanged: display the selected topic in lblTopic and update the counts.  (2M)"])''',
'''                 "A training centre needs a form to manage workshop topics using cboTopic, txtNewTopic, lstAvailable, lstSelected, lblTopic and lblCount.",
                 ["(a)  Form_Load: fill both lists.  (2M)",
                  "(b)  Add: reject blank / duplicate; add to both lists.  (3M)",
                  "(c)  Remove the selected item.  (2M)",
                  "(d)  Sort lstAvailable alphabetically.  (2M)",
                  "(e)  Transfer the selected item between lists.  (4M)",
                  "(f)  Show the selected topic and update counts.  (2M)"])''')

p.write_text(s, encoding="utf-8")
print("patched", len(s), len(s.encode("utf-8")))
