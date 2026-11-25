
from docx import Document
doc=Document(r"C:\Users\ROG STRIX\Desktop\classnote\vb\FE_VBNet_特化题型.docx")
t=[t for t in doc.tables if '错误写法' in t.cell(0,0).text][0]
for i,r in enumerate(t.rows):
    print(i, len(r.cells), [c.width.cm if c.width else None for c in r.cells], [c.text[:12] for c in r.cells])
print('grid', len(t._tbl.tblGrid.gridCol_lst), [gc.w.cm for gc in t._tbl.tblGrid.gridCol_lst])
