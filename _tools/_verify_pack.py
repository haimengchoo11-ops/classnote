
from docx import Document
from pathlib import Path
import re
p = Path(r"C:\Users\ROG STRIX\Desktop\classnote\vb\FE_VBNet_特化题型.docx")
d = Document(p)
text = "\n".join([x.text for x in d.paragraphs] + [c.text for t in d.tables for r in t.rows for c in r.cells])
print("paragraphs", len(d.paragraphs), "tables", len(d.tables), "chars", len(text))
checks = ["Part A", "Part B", "Part C", "Appendix", "studentInfo(3, 3)", "Structure Student", "ShowDialog", "ParticipantsBindingSource.AddNew", "Mini Market", "20 个必背片段"]
for c in checks:
    print(("OK " if c in text else "MISS "), c)
for bad in ["A A ·", "B B ·", "C C ·", "D D ·", "B0 B0", "B1 B1", "B2 B2", "B3 B3", "B4 B4"]:
    print(("BAD " if bad in text else "clean "), bad)
pdf = Path(r"C:\Users\ROG STRIX\Desktop\classnote\vb\FE_VBNet_特化题型.pdf")
b = pdf.read_bytes()
print("pdf sig", b[:8], "size", len(b))
print("page objects", len(re.findall(rb"/Type\s*/Page\b", b)))
