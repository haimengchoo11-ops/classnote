
from pathlib import Path
base = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_docx.py")
rest = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_b3_rest.py")
text = base.read_text(encoding="utf-8")
marker = '    h3("考场 6 步画法")'
if marker not in text:
    raise SystemExit("marker not found")
prefix = text.split(marker, 1)[0]
new = prefix + rest.read_text(encoding="utf-8")
base.write_text(new, encoding="utf-8")
print("combined", len(new), "bytes", len(new.encode("utf-8")))
