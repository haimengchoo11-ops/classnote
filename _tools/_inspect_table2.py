
from docx import Document
doc=Document(r"C:\Users\ROG STRIX\Desktop\classnote\vb\FE_VBNet_特化题型.docx")
for i,t in enumerate(doc.tables):
    txt=t.cell(0,0).text
    if '错误写法' in txt:
        print('table',i,'cols',len(t.columns),'rows',len(t.rows),'style',t.style.name)
        for r in t.rows[:2]:
            print('cells',len(r.cells), [c.text[:20] for c in r.cells], [c.width.cm if c.width else None for c in r.cells])
        print(t._tbl.xml[:2500])
        break
