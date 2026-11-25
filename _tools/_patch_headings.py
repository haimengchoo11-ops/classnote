
from pathlib import Path
p = Path(r"C:\Users\ROG STRIX\Desktop\classnote\_tools\fe_vb_docx.py")
s = p.read_text(encoding="utf-8")
for old, new in [
    ('h2("A · 20 个必背片段", "A")', 'h2("20 个必背片段", "A")'),
    ('h2("B · 60 秒检查清单", "B")', 'h2("60 秒检查清单", "B")'),
    ('h2("C · 三语术语速查", "C")', 'h2("三语术语速查", "C")'),
    ('h2("D · 10 个最常见丢分点", "D")', 'h2("10 个最常见丢分点", "D")'),
]:
    if old not in s:
        raise SystemExit("not found: " + old)
    s = s.replace(old, new, 1)
p.write_text(s, encoding="utf-8")
print("headings fixed")
