
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(r"C:\Users\ROG STRIX\Desktop\classnote")
OUT = ROOT / "vb" / "_assets"
OUT.mkdir(parents=True, exist_ok=True)
SEGOE = r"C:\Windows\Fonts\segoeui.ttf"
SEGOE_B = r"C:\Windows\Fonts\segoeuib.ttf"
CONSOLA = r"C:\Windows\Fonts\consola.ttf"
def font(path, size): return ImageFont.truetype(path, size)

W, H = 1700, 1180
img = Image.new("RGB", (W, H), (238, 235, 245))
d = ImageDraw.Draw(img)
d.rounded_rectangle([80, 60, 1620, 1120], radius=18, fill=(0, 0, 0, 25))
d.rounded_rectangle([60, 40, 1600, 1100], radius=16, fill=(255, 255, 255), outline=(180, 170, 205), width=2)
d.rounded_rectangle([60, 40, 1600, 110], radius=16, fill=(91, 33, 182))
d.rectangle([60, 80, 1600, 110], fill=(91, 33, 182))
d.text((95, 58), "IT Workshop Registration", font=font(SEGOE_B, 30), fill=(255, 255, 255))
for i, ch in enumerate(["\u2014", "\u25a1", "\u00d7"]):
    x = 1480 + i * 38
    d.text((x, 55), ch, font=font(SEGOE_B, 26), fill=(237, 233, 254))

def label(x, y, text, size=22, color=(51, 65, 85), bold=False):
    d.text((x, y), text, font=font(SEGOE_B if bold else SEGOE, size), fill=color)
def textbox(x, y, w, h=44, text="", focus=False):
    d.rectangle([x, y, x + w, y + h], fill=(255, 255, 255), outline=(124, 58, 237) if focus else (148, 163, 184), width=3 if focus else 2)
    if text: d.text((x + 12, y + 9), text, font=font(SEGOE, 21), fill=(100, 116, 139))
def group(x, y, w, h, title):
    d.rounded_rectangle([x, y, x + w, y + h], radius=10, fill=(250, 248, 255), outline=(167, 139, 250), width=2)
    tw = d.textlength(title, font=font(SEGOE_B, 19))
    d.rectangle([x + 22, y - 13, x + 22 + tw + 22, y + 13], fill=(255, 255, 255))
    d.text((x + 33, y - 12), title, font=font(SEGOE_B, 19), fill=(91, 33, 182))
def radio(x, y, text, checked=False):
    d.ellipse([x, y, x + 26, y + 26], fill=(255, 255, 255), outline=(100, 116, 139), width=2)
    if checked: d.ellipse([x + 6, y + 6, x + 20, y + 20], fill=(124, 58, 237))
    d.text((x + 38, y - 1), text, font=font(SEGOE, 21), fill=(51, 65, 85))
def checkbox(x, y, text, checked=False):
    d.rectangle([x, y, x + 26, y + 26], fill=(255, 255, 255), outline=(100, 116, 139), width=2)
    if checked: d.line([(x + 5, y + 14), (x + 11, y + 20), (x + 22, y + 6)], fill=(124, 58, 237), width=4)
    d.text((x + 38, y - 1), text, font=font(SEGOE, 21), fill=(51, 65, 85))
def button(x, y, w, h, text, primary=True):
    d.rounded_rectangle([x, y, x + w, y + h], radius=8, fill=(124, 58, 237) if primary else (243, 240, 250), outline=(124, 58, 237) if primary else (167, 139, 250), width=2)
    tw = d.textlength(text, font=font(SEGOE_B, 20))
    d.text((x + (w - tw) / 2, y + (h - 24) / 2 - 1), text, font=font(SEGOE_B, 20), fill=(255, 255, 255) if primary else (91, 33, 182))
def combo(x, y, w, text):
    d.rounded_rectangle([x, y, x + w, y + 44], radius=5, fill=(255, 255, 255), outline=(148, 163, 184), width=2)
    d.text((x + 12, y + 9), text, font=font(SEGOE, 21), fill=(51, 65, 85))
    d.polygon([(x + w - 30, y + 17), (x + w - 12, y + 17), (x + w - 21, y + 29)], fill=(100, 116, 139))
def listbox(x, y, w, h, items):
    d.rectangle([x, y, x + w, y + h], fill=(255, 255, 255), outline=(148, 163, 184), width=2)
    for i, t in enumerate(items): d.text((x + 12, y + 9 + i * 34), t, font=font(SEGOE, 20), fill=(51, 65, 85))

group(80, 150, 720, 250, "Participant")
label(105, 185, "Name", 20, bold=True); textbox(235, 177, 520, text="Nur Aisyah")
label(105, 250, "Student ID", 20, bold=True); textbox(235, 242, 230, text="A1234567")
label(105, 315, "Phone", 20, bold=True); textbox(235, 307, 230, text="012-3456789")
label(500, 315, "Email", 20, bold=True); textbox(585, 307, 170, text="...")


group(830, 150, 700, 250, "Programme")
radio(860, 190, "Diploma", True)
radio(860, 245, "Degree")
radio(860, 300, "Master")
label(1120, 190, "Year / Semester", 20, bold=True)
combo(1120, 223, 330, "2026 / 01")

group(80, 440, 720, 190, "Workshop Selection")
label(105, 475, "Workshop", 20, bold=True)
combo(235, 467, 520, "VB.NET")
label(235, 520, "Items: VB.NET / Java / Python", 16, (100, 116, 139))
checkbox(105, 565, "Vegetarian meal", True)

group(830, 440, 700, 190, "Fee")
label(860, 478, "Workshop fee", 20); label(1410, 478, "RM 80.00", 20)
label(860, 518, "Meal surcharge", 20); label(1410, 518, "RM 15.00", 20)
label(860, 565, "Total fee", 22, (91, 33, 182), True); label(1410, 565, "RM 95.00", 24, (91, 33, 182), True)

d.rounded_rectangle([80, 675, 1530, 735], radius=8, fill=(245, 243, 250), outline=(196, 181, 253), width=2)
label(100, 691, "Status:", 21, (91, 33, 182), True)
label(190, 691, "Ready. Select a workshop and click Add.", 21, (71, 85, 105))

button(80, 785, 190, 56, "Add")
button(290, 785, 190, 56, "Clear", False)
button(500, 785, 190, 56, "Exit", False)

label(80, 890, "Selected workshops", 22, (51, 65, 85), True)
listbox(80, 930, 1450, 110, ["VB.NET \u2014 12 Jan 2026", "Java \u2014 19 Jan 2026"])

d.rounded_rectangle([80, 1060, 1530, 1080], radius=4, fill=(254, 243, 199))
d.text((92, 1059), "Event: btnAdd_Click  |  btnClear_Click  |  btnExit_Click", font=font(CONSOLA, 17), fill=(146, 64, 14))

img.save(OUT / "fe-gui.png", quality=95)
print("saved", OUT / "fe-gui.png")
