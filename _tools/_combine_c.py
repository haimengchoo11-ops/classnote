
from pathlib import Path
base = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_docx.py")
c1 = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_c1.py")
c2 = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_c2.py")
text = base.read_text(encoding="utf-8")
marker = "\n# main\n"
if marker not in text:
    raise SystemExit("main marker missing")
prefix, main = text.split(marker, 1)
part_c = c1.read_text(encoding="utf-8") + c2.read_text(encoding="utf-8")
part_c = part_c.replace("    c1()\n", "    c1()\n    c2()\n", 1)
new = prefix + part_c + "\n# main\n" + main
new = new.replace("    part_b()\n    doc.save(OUT)", "    part_b()\n    part_c()\n    doc.save(OUT)")
base.write_text(new, encoding="utf-8")
print("combined", len(new), "bytes", len(new.encode("utf-8")))
