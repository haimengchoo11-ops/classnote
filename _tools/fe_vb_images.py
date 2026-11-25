
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import math

ROOT = Path(r"C:\Users\ROG STRIX\Desktop\classnote")
OUT = ROOT / "vb" / "_assets"
OUT.mkdir(parents=True, exist_ok=True)

PURPLE = (91, 33, 182)
DARK = (30, 20, 55)
VIOLET = (124, 58, 237)
LIGHT = (245, 243, 250)
AMBER = (245, 158, 11)
GREEN = (5, 150, 105)

def font(path, size):
    return ImageFont.truetype(path, size)

MSYH = r"C:\Windows\Fonts\msyh.ttc"
SEGOE = r"C:\Windows\Fonts\segoeui.ttf"
SEGOE_B = r"C:\Windows\Fonts\segoeuib.ttf"
CONSOLA = r"C:\Windows\Fonts\consola.ttf"

# ---------- cover banner ----------
W, H = 1800, 640
img = Image.new("RGB", (W, H), DARK)
d = ImageDraw.Draw(img)
for y in range(H):
    t = y / H
    r = int(30 + (91 - 30) * t)
    g = int(20 + (33 - 20) * t)
    b = int(55 + (182 - 55) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# decorative grid
for x in range(0, W, 60):
    d.line([(x, 0), (x, H)], fill=(255, 255, 255, 10), width=1)
for y in range(0, H, 60):
    d.line([(0, y), (W, y)], fill=(255, 255, 255, 10), width=1)

# translucent circles
overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
od = ImageDraw.Draw(overlay)
od.ellipse([1250, -220, 1900, 430], fill=(168, 85, 247, 55))
od.ellipse([1400, 300, 1900, 800], fill=(59, 130, 246, 35))
img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")
d = ImageDraw.Draw(img)

# left accent bar
d.rounded_rectangle([70, 90, 84, 550], radius=7, fill=(167, 139, 250))

d.text((125, 92), "CLASSNOTE  /  VB.NET PROGRAMMING", font=font(SEGOE_B, 28), fill=(196, 181, 253))
d.text((120, 150), "FE 特化题型", font=font(MSYH, 96), fill=(255, 255, 255))
d.text((125, 268), "PPD Final Exam · Targeted Question Pack", font=font(SEGOE_B, 40), fill=(233, 213, 255))
d.text((125, 335), "15 MCQ   ·   4 Structured   ·   2 Programming", font=font(MSYH, 34), fill=(221, 214, 254))
d.text((125, 410), "按 Part A / B / C 反推题型 · 含标准答案、完整代码与评分点", font=font(MSYH, 28), fill=(203, 213, 225))

# right code card
card = [1180, 120, 1690, 520]
d.rounded_rectangle(card, radius=22, fill=(24, 17, 46), outline=(139, 92, 246), width=2)
d.text((1220, 150), "Dim exam As New Plan", font=font(CONSOLA, 26), fill=(167, 139, 250))
lines = [
    ("exam.PartA", "15 x 2 marks", (196, 181, 253)),
    ("exam.PartB", "4 x 10 marks", (196, 181, 253)),
    ("exam.PartC", "2 x 15 marks", (196, 181, 253)),
    ("exam.Strategy", '"targeted practice"', (134, 239, 172)),
]
y = 215
for k, v, c in lines:
    d.text((1220, y), k, font=font(CONSOLA, 25), fill=c)
    d.text((1470, y), "=", font=font(CONSOLA, 25), fill=(148, 163, 184))
    d.text((1500, y), v, font=font(CONSOLA, 23), fill=(226, 232, 240))
    y += 58
d.text((1220, 455), "' predict -> template -> code", font=font(CONSOLA, 23), fill=(148, 163, 184))

img.save(OUT / "fe-cover.png", quality=95)

# ---------- GUI wireframe ----------
W, H = 1700, 1180
img = Image.new("RGB", (W, H), (238, 235, 245))
d = ImageDraw.Draw(img)
# page shadow
d.rounded_rectangle([80, 60, 1620, 1120], radius=18, fill=(0, 0, 0, 25))
# window
d.rounded_rectangle([60, 40, 1600, 1100], radius=16, fill=(255, 255, 255), outline=(180, 170, 205), width=2)
# title bar
d.rounded_rectangle([60, 40, 1600, 110], radius=16, fill=(91, 33, 182))
d.rectangle([60, 80, 1600, 110], fill=(91, 33, 182))
d.text((95, 58), "IT Workshop Registration", font=font(SEGOE_B, 30), fill=(255, 255, 255))
# window buttons
for i, ch in enumerate(["_", "□", "×"]):
    x = 1480 + i * 38
    d.text((x, 55), ch, font=font(SEGOE_B, 26), fill=(237, 233, 254))

# helper
def label(x, y, text, size=22, color=(51, 65, 85), bold=False):
    d.text((x, y), text, font=font(SEGOE_B if bold else SEGOE, size), fill=color)

def textbox(x, y, w, h=44, text="", focus=False):
    d.rectangle([x, y, x + w, y + h], fill=(255, 255, 255), outline=(124, 58, 237) if focus else (148, 163, 184), width=3 if focus else 2)
    if text:
        d.text((x + 12, y + 9), text, font=font(SEGOE, 21), fill=(100, 116, 139))

def group(x, y, w, h, title):
    d.rounded_rectangle([x, y, x + w, y + h], radius=10, fill=(250, 248, 255), outline=(167, 139, 250), width=2)
    d.rectangle([x + 18, y - 12, x + 18 + (len(title) * 13) + 28, y + 12], fill=(255, 255, 255))
    d.text((x + 30, y - 12), title, font=font(SEGOE_B, 19), fill=(91, 33, 182))

def radio(x, y, text, checked=False):
    d.ellipse([x, y, x + 26, y + 26], fill=(255, 255, 255), outline=(100, 116, 139), width=2)
    if checked:
        d.ellipse([x + 6, y + 6, x + 20, y + 20], fill=(124, 58, 237))
    d.text((x + 38, y - 1), text, font=font(SEGOE, 21), fill=(51, 65, 85))

def checkbox(x, y, text, checked=False):
    d.rectangle([x, y, x + 26, y + 26], fill=(255, 255, 255), outline=(100, 116, 139), width=2)
    if checked:
        d.line([(x + 5, y + 14), (x + 11, y + 20), (x + 22, y + 6)], fill=(124, 58, 237), width=4)
    d.text((x + 38, y - 1), text, font=font(SEGOE, 21), fill=(51, 65, 85))

def button(x, y, w, h, text, primary=True):
    d.rounded_rectangle([x, y, x + w, y + h], radius=8, fill=(124, 58, 237) if primary else (243, 240, 250), outline=(124, 58, 237) if primary else (167, 139, 250), width=2)
    tw = d.textlength(text, font=font(SEGOE_B, 20))
    d.text((x + (w - tw) / 2, y + (h - 24) / 2 - 1), text, font=font(SEGOE_B, 20), fill=(255, 255, 255) if primary else (91, 33, 182))

def combo(x, y, w, text, open_=False):
    d.rounded_rectangle([x, y, x + w, y + 44], radius=5, fill=(255, 255, 255), outline=(148, 163, 184), width=2)
    d.text((x + 12, y + 9), text, font=font(SEGOE, 21), fill=(51, 65, 85))
    d.polygon([(x + w - 30, y + 17), (x + w - 12, y + 17), (x + w - 21, y + 29)], fill=(100, 116, 139))
    if open_:
        d.rectangle([x, y + 46, x + w, y + 46 + 112], fill=(255, 255, 255), outline=(148, 163, 184), width=2)
        for i, t in enumerate(["VB.NET", "Java", "Python"]):
            d.text((x + 12, y + 54 + i * 34), t, font=font(SEGOE, 20), fill=(51, 65, 85))

def listbox(x, y, w, h, items):
    d.rectangle([x, y, x + w, y + h], fill=(255, 255, 255), outline=(148, 163, 184), width=2)
    for i, t in enumerate(items):
        d.text((x + 12, y + 9 + i * 34), t, font=font(SEGOE, 20), fill=(51, 65, 85))

# header
label(95, 140, "Participant Information", 24, (91, 33, 182), True)
group(80, 185, 720, 250, "Participant")
label(105, 220, "Name", 20, bold=True); textbox(235, 212, 520, text="Nur Aisyah")
label(105, 285, "Student ID", 20, bold=True); textbox(235, 277, 230, text="A1234567")
label(105, 350, "Phone", 20, bold=True); textbox(235, 342, 230, text="012-3456789")
label(500, 350, "Email", 20, bold=True); textbox(585, 342, 170, text="...")

group(830, 185, 700, 250, "Programme")
radio(860, 225, "Diploma", True)
radio(860, 280, "Degree")
radio(860, 335, "Master")
label(1120, 225, "Year / Semester", 20, bold=True)
combo(1120, 258, 330, "2026 / 01", False)

group(80, 465, 720, 200, "Workshop Selection")
label(105, 500, "Workshop", 20, bold=True)
combo(235, 492, 520, "VB.NET", True)
checkbox(105, 575, "Vegetarian meal", True)

group(830, 465, 700, 200, "Fee")
label(860, 505, "Workshop fee", 20)
label(860, 548, "Meal surcharge", 20)
label(860, 600, "Total fee", 22, (91, 33, 182), True)
label(1410, 505, "RM 80.00", 20)
label(1410, 548, "RM 15.00", 20)
label(1410, 600, "RM 95.00", 24, (91, 33, 182), True)

# output strip
d.rounded_rectangle([80, 700, 1530, 760], radius=8, fill=(245, 243, 250), outline=(196, 181, 253), width=2)
label(100, 716, "Status:", 21, (91, 33, 182), True)
label(190, 716, "Ready. Select a workshop and click Add.", 21, (71, 85, 105))

# buttons
button(80, 805, 190, 56, "Add")
button(290, 805, 190, 56, "Clear", False)
button(500, 805, 190, 56, "Exit", False)
button(1220, 805, 310, 56, "Add to Selected List", True)

# selected list
label(80, 900, "Selected workshops", 22, (51, 65, 85), True)
listbox(80, 940, 1450, 110, ["VB.NET — 12 Jan 2026", "Java — 19 Jan 2026"])

# callouts
d.rounded_rectangle([1170, 150, 1540, 175], radius=4, fill=(254, 243, 199))
d.text((1185, 150), "Mask: A0000000", font=font(CONSOLA, 20), fill=(146, 64, 14))
d.rounded_rectangle([1170, 180, 1540, 205], radius=4, fill=(254, 243, 199))
d.text((1185, 180), "DropDownStyle: DropDownList", font=font(CONSOLA, 20), fill=(146, 64, 14))

img.save(OUT / "fe-gui.png", quality=95)
print("saved", OUT / "fe-cover.png", OUT / "fe-gui.png")
