
from pathlib import Path
base = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_docx.py")
app = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_appendix.py")
text = base.read_text(encoding="utf-8")
marker = "\n# main\n"
if marker not in text:
    raise SystemExit("main marker missing")
prefix, main = text.split(marker, 1)
new = prefix + app.read_text(encoding="utf-8") + "\n# main\n" + main
new = new.replace("    part_c()\n    doc.save(OUT)", "    part_c()\n    appendix()\n    doc.save(OUT)")
base.write_text(new, encoding="utf-8")
print("combined", len(new), len(new.encode("utf-8")))
