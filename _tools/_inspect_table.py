
from docx import Document
from docx.oxml.ns import qn
import re
doc=Document(r"C:\Users\ROG STRIX\Desktop\classnote\vb\FE_VBNet_特化题型.docx")
for i,t in enumerate(doc.tables):
    txt=t.cell(0,0).text
    if 'Toolbox' in txt:
        print('table',i,'style',t.style.name)
        print(t._tbl.xml[:4000])
        break
