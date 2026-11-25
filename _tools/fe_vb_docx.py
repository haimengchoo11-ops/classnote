
# -*- coding: utf-8 -*-
"""Build the VB.NET FE targeted question pack (DOCX)."""
from pathlib import Path
import re

from docx import Document
from docx.shared import Cm, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_LINE_SPACING
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

ROOT = Path(r"C:\Users\ROG STRIX\Desktop\classnote")
ASSETS = ROOT / "vb" / "_assets"
OUT = ROOT / "vb" / "FE_VBNet_特化题型.docx"

PURPLE = "5B21B6"
PURPLE_MID = "7C3AED"
PURPLE_LIGHT = "F3E8FF"
PURPLE_PALE = "FAF8FF"
INK = "1E1B2E"
GRAY = "64748B"
MUTED = "94A3B8"
BORDER = "D8CFEA"
CODE_BG = "F6F3FB"
AMBER = "B45309"
AMBER_BG = "FFFBEB"
GREEN = "047857"
GREEN_BG = "ECFDF5"
BLUE = "1D4ED8"
BLUE_BG = "EFF6FF"
RED = "B91C1C"

BODY_FONT = "Calibri"
EA_FONT = "Microsoft YaHei"
CODE_FONT = "Consolas"
CONTENT_W = 17.0


def set_run_font(run, name=BODY_FONT, size=None, bold=None, italic=None, color=None):
    run.font.name = name
    rPr = run._element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts")
        rPr.append(rFonts)
    rFonts.set(qn("w:ascii"), name)
    rFonts.set(qn("w:hAnsi"), name)
    rFonts.set(qn("w:eastAsia"), EA_FONT if name != CODE_FONT else "Microsoft YaHei")
    if size is not None:
        run.font.size = Pt(size)
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic
    if color is not None:
        run.font.color.rgb = RGBColor.from_string(color)


def shade_run(run, fill):
    rPr = run._element.get_or_add_rPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), fill)
    rPr.append(shd)


def add_rich(paragraph, text, size=10.5, color=INK, bold=False, italic=False):
    """Add text with inline code and bold support."""
    parts = re.split("(\x60[^\x60]*\x60)", str(text))
    for part in parts:
        if not part:
            continue
        if part.startswith("\x60") and part.endswith("\x60") and len(part) >= 2:
            r = paragraph.add_run(part[1:-1])
            set_run_font(r, CODE_FONT, size=max(8.2, size - 0.8), color=PURPLE, bold=False)
            shade_run(r, "F3E8FF")
            continue
        for seg in re.split(r"(\*\*[^*]+\*\*)", part):
            if not seg:
                continue
            is_bold = seg.startswith("**") and seg.endswith("**") and len(seg) >= 4
            r = paragraph.add_run(seg[2:-2] if is_bold else seg)
            set_run_font(r, BODY_FONT, size=size, color=color, bold=(bold or is_bold), italic=italic)


def para(text="", size=10.5, color=INK, bold=False, italic=False, align=None,
         space_before=0, space_after=4, line=1.22, indent=None, first=None,
         keep_with_next=False):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.space_before = Pt(space_before)
    pf.space_after = Pt(space_after)
    pf.line_spacing = line
    if indent is not None:
        pf.left_indent = Cm(indent)
    if first is not None:
        pf.first_line_indent = Cm(first)
    if align is not None:
        p.alignment = align
    if keep_with_next:
        pf.keep_with_next = True
    if text:
        add_rich(p, text, size=size, color=color, bold=bold, italic=italic)
    return p


def kicker(text, color=PURPLE_MID):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(text.upper())
    set_run_font(r, BODY_FONT, 8.5, bold=True, color=color)
    r.font.small_caps = True
    return p


def h1(text, page_break=True, kicker_text=None):
    if page_break:
        doc.add_page_break()
    if kicker_text:
        kicker(kicker_text)
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(10)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(text)
    set_run_font(r, BODY_FONT, 22, bold=True, color=PURPLE)
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "10")
    bottom.set(qn("w:space"), "5")
    bottom.set(qn("w:color"), PURPLE_MID)
    pBdr.append(bottom)
    pPr.append(pBdr)
    return p


def h2(text, number=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(16)
    p.paragraph_format.space_after = Pt(5)
    p.paragraph_format.keep_with_next = True
    if number is not None:
        r = p.add_run(f"{number}  ")
        set_run_font(r, BODY_FONT, 16, bold=True, color=PURPLE_MID)
    r = p.add_run(text)
    set_run_font(r, BODY_FONT, 15.5, bold=True, color=INK)
    return p


def h3(text, color=PURPLE):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(text)
    set_run_font(r, BODY_FONT, 11.5, bold=True, color=color)
    return p


def bullets(items, size=10.2, indent=0.5):
    for it in items:
        p = doc.add_paragraph()
        pf = p.paragraph_format
        pf.left_indent = Cm(indent)
        pf.first_line_indent = Cm(-0.42)
        pf.space_before = Pt(0)
        pf.space_after = Pt(2.5)
        pf.line_spacing = 1.18
        r = p.add_run("\u2022  ")
        set_run_font(r, BODY_FONT, size, bold=True, color=PURPLE_MID)
        add_rich(p, it, size=size)


def numbered(items, size=10.2):
    for n, it in enumerate(items, 1):
        p = doc.add_paragraph()
        pf = p.paragraph_format
        pf.left_indent = Cm(0.62)
        pf.first_line_indent = Cm(-0.62)
        pf.space_before = Pt(0)
        pf.space_after = Pt(2.5)
        pf.line_spacing = 1.18
        r = p.add_run(f"{n}.  ")
        set_run_font(r, BODY_FONT, size, bold=True, color=PURPLE_MID)
        add_rich(p, it, size=size)


def set_cell_shading(cell, fill):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), fill)
    tcPr.append(shd)


def set_cell_border(cell, color=BORDER, sz=4, edges=("top", "left", "bottom", "right"), val="single"):
    tcPr = cell._tc.get_or_add_tcPr()
    tcBorders = tcPr.first_child_found_in("w:tcBorders")
    if tcBorders is None:
        tcBorders = OxmlElement("w:tcBorders")
        tcPr.append(tcBorders)
    for edge in edges:
        el = tcBorders.find(qn("w:" + edge))
        if el is None:
            el = OxmlElement("w:" + edge)
            tcBorders.append(el)
        el.set(qn("w:val"), val)
        el.set(qn("w:sz"), str(sz))
        el.set(qn("w:space"), "0")
        el.set(qn("w:color"), color)


def set_cell_margins(cell, top=0.08, bottom=0.08, left=0.14, right=0.14):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = tcPr.first_child_found_in("w:tcMar")
    if tcMar is None:
        tcMar = OxmlElement("w:tcMar")
        tcPr.append(tcMar)
    for name, val in (("top", top), ("bottom", bottom), ("start", left), ("end", right)):
        node = tcMar.find(qn("w:" + name))
        if node is None:
            node = OxmlElement("w:" + name)
            tcMar.append(node)
        node.set(qn("w:w"), str(int(val * 567)))
        node.set(qn("w:type"), "dxa")


def set_table_fixed(table, widths_cm):
    tbl = table._tbl
    tblPr = tbl.tblPr
    tblW = tblPr.first_child_found_in("w:tblW")
    if tblW is None:
        tblW = OxmlElement("w:tblW")
        tblPr.append(tblW)
    tblW.set(qn("w:type"), "dxa")
    tblW.set(qn("w:w"), str(int(sum(widths_cm) * 567)))
    layout = OxmlElement("w:tblLayout")
    layout.set(qn("w:type"), "fixed")
    tblPr.append(layout)
    for row in table.rows:
        for i, w in enumerate(widths_cm):
            row.cells[i].width = Cm(w)
    grid = tbl.tblGrid
    if grid is not None:
        for i, gc in enumerate(grid.gridCol_lst):
            if i < len(widths_cm):
                gc.w = Cm(widths_cm[i])


def no_borders(t):
    tblPr = t._tbl.tblPr
    borders = OxmlElement("w:tblBorders")
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        el = OxmlElement("w:" + edge)
        el.set(qn("w:val"), "nil")
        borders.append(el)
    tblPr.append(borders)


def table(headers, rows, widths, size=8.8, header_fill=PURPLE, zebra=True,
          first_col_bold=False, align_center_cols=(), header_size=8.6):
    t = doc.add_table(rows=1, cols=len(headers))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    t.allow_autofit = False
    set_table_fixed(t, widths)

    hdr = t.rows[0]
    trPr = hdr._tr.get_or_add_trPr()
    tblHeader = OxmlElement("w:tblHeader")
    tblHeader.set(qn("w:val"), "true")
    trPr.append(tblHeader)
    for i, htext in enumerate(headers):
        c = hdr.cells[i]
        set_cell_shading(c, header_fill)
        set_cell_border(c, color=header_fill, sz=4)
        set_cell_margins(c, 0.09, 0.09, 0.13, 0.13)
        c.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
        p = c.paragraphs[0]
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.line_spacing = 1.0
        if i in align_center_cols:
            p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r = p.add_run(str(htext))
        set_run_font(r, BODY_FONT, header_size, bold=True, color="FFFFFF")

    for ri, rowdata in enumerate(rows):
        row = t.add_row()
        for i, val in enumerate(rowdata):
            c = row.cells[i]
            set_cell_border(c, color=BORDER, sz=4)
            set_cell_margins(c, 0.075, 0.075, 0.13, 0.13)
            if zebra and ri % 2 == 1:
                set_cell_shading(c, "FAF8FF")
            c.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
            p = c.paragraphs[0]
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.12
            if i in align_center_cols:
                p.alignment = WD_ALIGN_PARAGRAPH.CENTER
            add_rich(p, str(val), size=size, bold=(first_col_bold and i == 0))
    return t


def callout(title, lines, fill=AMBER_BG, bar=AMBER, title_color=AMBER, width=CONTENT_W):
    t = doc.add_table(rows=1, cols=1)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    t.allow_autofit = False
    set_table_fixed(t, [width])
    c = t.rows[0].cells[0]
    set_cell_shading(c, fill)
    set_cell_border(c, color=fill, sz=4, edges=("top", "bottom", "right"))
    set_cell_border(c, color=bar, sz=18, edges=("left",))
    set_cell_margins(c, 0.14, 0.14, 0.28, 0.2)
    p = c.paragraphs[0]
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(title)
    set_run_font(r, BODY_FONT, 9.2, bold=True, color=title_color)
    r.font.small_caps = True
    if isinstance(lines, str):
        lines = [lines]
    for ln in lines:
        pp = c.add_paragraph()
        pp.paragraph_format.space_before = Pt(0)
        pp.paragraph_format.space_after = Pt(1)
        pp.paragraph_format.line_spacing = 1.18
        add_rich(pp, ln, size=9.8, color=INK)
    return t


def code_block(code, caption=None, lang="VB.NET", keep=True):
    if caption:
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(6)
        p.paragraph_format.space_after = Pt(2)
        p.paragraph_format.keep_with_next = True
        r = p.add_run(caption)
        set_run_font(r, BODY_FONT, 8.8, bold=True, color=GRAY)
        r2 = p.add_run("   " + lang)
        set_run_font(r2, CODE_FONT, 7.6, color=MUTED)

    t = doc.add_table(rows=1, cols=1)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    t.allow_autofit = False
    set_table_fixed(t, [CONTENT_W])
    c = t.rows[0].cells[0]
    set_cell_shading(c, CODE_BG)
    set_cell_border(c, color=CODE_BG, sz=4, edges=("top", "bottom", "right"))
    set_cell_border(c, color=PURPLE_MID, sz=16, edges=("left",))
    set_cell_margins(c, 0.13, 0.13, 0.24, 0.16)
    lines = code.strip("\n").split("\n")
    trPr = t.rows[0]._tr.get_or_add_trPr()
    if keep and len(lines) <= 18:
        cant = OxmlElement("w:cantSplit")
        cant.set(qn("w:val"), "true")
        trPr.append(cant)

    p = c.paragraphs[0]
    pf = p.paragraph_format
    pf.space_before = Pt(0)
    pf.space_after = Pt(0)
    pf.line_spacing_rule = WD_LINE_SPACING.EXACTLY
    pf.line_spacing = Pt(10.4)

    for li, line in enumerate(lines):
        r = p.add_run(line if line else " ")
        if line.strip().startswith("'"):
            set_run_font(r, CODE_FONT, 8.1, color="6B7280", italic=True)
        else:
            set_run_font(r, CODE_FONT, 8.1, color="1F2937")
        if li < len(lines) - 1:
            p.add_run().add_break()
    return t


def question_box(title, marks, intro, parts):
    t = doc.add_table(rows=1, cols=1)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    t.allow_autofit = False
    set_table_fixed(t, [CONTENT_W])
    c = t.rows[0].cells[0]
    set_cell_shading(c, PURPLE_PALE)
    set_cell_border(c, color=BORDER, sz=4, edges=("top", "bottom", "right"))
    set_cell_border(c, color=PURPLE_MID, sz=22, edges=("left",))
    set_cell_margins(c, 0.18, 0.16, 0.3, 0.22)

    p = c.paragraphs[0]
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    r = p.add_run("CASE STUDY")
    set_run_font(r, BODY_FONT, 8.2, bold=True, color=PURPLE_MID)
    r.font.small_caps = True
    r2 = p.add_run(f"    {marks} MARKS")
    set_run_font(r2, BODY_FONT, 8.2, bold=True, color=AMBER)

    p = c.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(4)
    r = p.add_run(title)
    set_run_font(r, BODY_FONT, 12.5, bold=True, color=INK)
    p.paragraph_format.keep_with_next = True

    p = c.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.line_spacing = 1.18
    add_rich(p, intro, size=9.8)

    for part in parts:
        pp = c.add_paragraph()
        pp.paragraph_format.left_indent = Cm(0.42)
        pp.paragraph_format.first_line_indent = Cm(-0.42)
        pp.paragraph_format.space_before = Pt(0)
        pp.paragraph_format.space_after = Pt(2)
        pp.paragraph_format.line_spacing = 1.16
        add_rich(pp, part, size=9.8)
    return t


def hr():
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(6)
    pPr = p._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), "6")
    bottom.set(qn("w:space"), "1")
    bottom.set(qn("w:color"), BORDER)
    pBdr.append(bottom)
    pPr.append(pBdr)


def add_page_number(paragraph):
    run = paragraph.add_run()
    fld1 = OxmlElement("w:fldChar"); fld1.set(qn("w:fldCharType"), "begin")
    instr = OxmlElement("w:instrText"); instr.set(qn("xml:space"), "preserve"); instr.text = " PAGE "
    fld2 = OxmlElement("w:fldChar"); fld2.set(qn("w:fldCharType"), "separate")
    t = OxmlElement("w:t"); t.text = "1"
    fld3 = OxmlElement("w:fldChar"); fld3.set(qn("w:fldCharType"), "end")
    run._r.append(fld1); run._r.append(instr); run._r.append(fld2); run._r.append(t); run._r.append(fld3)
    set_run_font(run, BODY_FONT, 8.5, color=MUTED)


def setup_document():
    global doc
    doc = Document()
    sec = doc.sections[0]
    sec.page_height = Cm(29.7)
    sec.page_width = Cm(21.0)
    sec.left_margin = Cm(2.0)
    sec.right_margin = Cm(2.0)
    sec.top_margin = Cm(1.8)
    sec.bottom_margin = Cm(1.7)
    sec.header_distance = Cm(0.9)
    sec.footer_distance = Cm(0.9)
    sec.different_first_page_header_footer = True

    st = doc.styles["Normal"]
    st.font.name = BODY_FONT
    st.font.size = Pt(10.5)
    st.font.color.rgb = RGBColor.from_string(INK)
    rPr = st.element.get_or_add_rPr()
    rFonts = rPr.find(qn("w:rFonts"))
    if rFonts is None:
        rFonts = OxmlElement("w:rFonts"); rPr.append(rFonts)
    rFonts.set(qn("w:ascii"), BODY_FONT)
    rFonts.set(qn("w:hAnsi"), BODY_FONT)
    rFonts.set(qn("w:eastAsia"), EA_FONT)
    st.paragraph_format.line_spacing = 1.22
    st.paragraph_format.space_after = Pt(4)

    hp = sec.header.paragraphs[0]
    hp.paragraph_format.space_after = Pt(0)
    hp.paragraph_format.tab_stops.add_tab_stop(Cm(CONTENT_W), alignment=2)
    r = hp.add_run("ClassNote  \u00b7  VB.NET FE 特化题型")
    set_run_font(r, BODY_FONT, 8.2, color=GRAY)
    r = hp.add_run("\tPPD Final Exam Pack")
    set_run_font(r, BODY_FONT, 8.2, color=MUTED)
    pPr = hp._p.get_or_add_pPr()
    pBdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single"); bottom.set(qn("w:sz"), "4")
    bottom.set(qn("w:space"), "4"); bottom.set(qn("w:color"), BORDER)
    pBdr.append(bottom); pPr.append(pBdr)

    fp = sec.footer.paragraphs[0]
    fp.paragraph_format.space_before = Pt(0)
    fp.paragraph_format.tab_stops.add_tab_stop(Cm(CONTENT_W), alignment=2)
    r = fp.add_run("VB.NET  \u00b7  FE Targeted Question Pack")
    set_run_font(r, BODY_FONT, 8.0, color=MUTED)
    r = fp.add_run("\t")
    set_run_font(r, BODY_FONT, 8.0, color=MUTED)
    add_page_number(fp)

    sec.first_page_header.paragraphs[0].text = ""
    sec.first_page_footer.paragraphs[0].text = ""

    cp = doc.core_properties
    cp.title = "VB.NET FE 特化题型 \u00b7 PPD Final Exam Pack"
    cp.subject = "Targeted question types for VB.NET final exam"
    cp.author = "ClassNote"
    cp.keywords = "VB.NET, FE, PPD, MCQ, structured, programming, revision"
    cp.comments = "Generated from the learner's FE tips and Bradley VB 2010 chapters."
    return doc



# ----------------------------------------------------------------------------
# cover + orientation
# ----------------------------------------------------------------------------
def cover():
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(0)
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.add_run().add_picture(str(ASSETS / "fe-cover.png"), width=Cm(CONTENT_W))

    para("", space_after=10)
    kicker("CLASS NOTE  /  FE SPRINT PACK")
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2)
    p.paragraph_format.space_after = Pt(2)
    r = p.add_run("VB.NET FE 特化题型")
    set_run_font(r, BODY_FONT, 31, bold=True, color=PURPLE)
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(12)
    r = p.add_run("按 Part A / B / C 反推的 21 个题型 · 答案 · 完整代码")
    set_run_font(r, BODY_FONT, 13.5, color=GRAY)

    t = doc.add_table(rows=1, cols=3)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    set_table_fixed(t, [5.55, 5.55, 5.55])
    stats = [("15", "MCQ", "Part A · 30 marks"),
             ("4", "STRUCTURED", "Part B · 40 marks"),
             ("2", "PROGRAMMING", "Part C · 30 marks")]
    for i, (num, label, sub) in enumerate(stats):
        c = t.rows[0].cells[i]
        set_cell_shading(c, PURPLE_PALE)
        set_cell_border(c, color=PURPLE_LIGHT, sz=8)
        set_cell_margins(c, 0.2, 0.2, 0.25, 0.25)
        p = c.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(num)
        set_run_font(r, BODY_FONT, 25, bold=True, color=PURPLE)
        p2 = c.add_paragraph()
        p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p2.paragraph_format.space_after = Pt(0)
        r = p2.add_run(label)
        set_run_font(r, BODY_FONT, 8.2, bold=True, color=PURPLE_MID)
        p3 = c.add_paragraph()
        p3.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p3.paragraph_format.space_after = Pt(0)
        r = p3.add_run(sub)
        set_run_font(r, BODY_FONT, 7.8, color=GRAY)

    para("", space_after=8)
    callout("Read this first",
            ["这一册是根据你提供的 FE Tips、Chapter 1–9 讲义与 lab exercise 方向整理的**预测型题型包**，不是原题。考试范围以讲师最后确认为准。",
             "用法：先做 Part A 的 15 题 → 对答案 → 用 Part B/C 的模板默写一遍 → 最后只看 Appendix 的必背清单。"],
            fill=BLUE_BG, bar=BLUE, title_color=BLUE)

    para("", space_after=18)
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.space_after = Pt(0)
    r = p.add_run("2026 / 27  ·  ClassNote  ·  VB.NET Programming")
    set_run_font(r, BODY_FONT, 8.8, color=MUTED)


def page_intro():
    h1("开始之前：把 Tips 变成得分点", page_break=True, kicker_text="Orientation")
    para("这份 pack 不按章节从第一页讲到最后一页，而是按**考试会怎么问**来组织。每个考点都对应四件事：① 预测题干；② 标准答案骨架；③ 评分点；④ 最容易丢分的细节。")

    h2("考试结构（按你给的分数）", "01")
    table(["Part", "题型", "题数", "分数", "每题", "建议时间", "核心策略"],
          [["A", "Multiple Choice", "15", "30", "2", "25–30 min", "先排除绝对词，再计算 / trace"],
           ["B", "Subjective", "4", "40", "10", "45–50 min", "先声明，再逻辑，最后 MessageBox"],
           ["C", "Programming", "2", "30", "15", "40–45 min", "先控件表，再写事件过程"]],
          widths=[1.2, 3.1, 1.3, 1.3, 1.2, 2.6, 4.9],
          size=8.6, align_center_cols=(0, 2, 3, 4))

    h2("命题反推：FE Tips → 最可能怎么问", "02")
    table(["Chapter", "FE Tip", "最可能问法", "Part", "优先级"],
          [["1", "VS IDE；writing the code", "Which window / Which type of error", "A", "★★★"],
           ["2", "GroupBox；MaskedTextBox", "Purpose of GroupBox / Which property sets a mask", "A", "★★★"],
           ["3", "Scope & lifetime；convert to String", "Static local / C2 vs F2", "A", "★★★"],
           ["4", "If, conditions；enhanced MessageBox", "AndAlso / DialogResult + icon", "A", "★★★"],
           ["5", "MenuStrip Items；modal & modeless", "Which collection / ShowDialog", "A", "★★★"],
           ["6", "Variables & constants in multiform", "Friend vs Private / Friend Const", "A", "★★★"],
           ["7", "SelectedIndex；For/Next", "-1 when none / how many iterations", "A", "★★★"],
           ["8", "2D array；Structure", "Declare 4×4 / read each row / define struct", "B", "★★★"],
           ["9", "Database CRUD (Access)", "Add, Delete, Next, Previous, Save", "B", "★★★"],
           ["7", "ListBox / ComboBox", "Add, remove, sort, transfer", "C", "★★★"],
           ["3–4", "Transaction calculation", "Decimal + If + discount + change", "C", "★★★"]],
          widths=[1.5, 4.2, 6.8, 1.3, 1.6],
          size=8.5, align_center_cols=(0, 3, 4))

    h2("三条使用规则", "03")
    numbered([
        "**先写声明，再写画面。** 变量、数组、结构、控件名先列出来，再写事件过程；阅卷人按点找分。",
        "**每一分都写出来。** 即使逻辑没写完，声明、注释、MessageBox、输入验证都有分；空着一定 0 分。",
        "**代码要能读。** 缩进、命名、End If / Next / End Sub 对齐；VB 的语法分往往就藏在这些收尾里。"])

    callout("One-sentence strategy",
            "Part A 用“排除 + 定义”拿满；Part B 用“声明 + 循环 + MessageBox”套模板；Part C 用“控件表 + 5 个事件”稳稳拿分。",
            fill=GREEN_BG, bar=GREEN, title_color=GREEN)

    h2("本册导航", "04")
    table(["Section", "内容", "考场用途"],
          [["Part A", "15 道预测 MCQ + 答案 + 陷阱表", "刷题、补概念"],
           ["Part B", "2D array / Structure / GUI / Database 四道 10 分题", "背答题骨架"],
           ["Part C", "List & Combo 转接 / Transaction 计算两道 15 分题", "背完整程序"],
           ["Appendix", "必背 20 条 + 60 秒检查清单 + 术语表", "考前最后 10 分钟"]],
          widths=[2.2, 9.2, 5.6], size=8.8, first_col_bold=True)

    h2("三天冲刺安排", "05")
    table(["Day", "做什么", "当天产出"],
          [["Day 1", "Part A 15 题 + 对答案；把 A3 的 10 个陷阱抄一遍", "能解释每个错项为什么错"],
           ["Day 2", "Part B 四题：B1/B2 默写；B3 画 GUI；B4 写 CRUD 五个按钮", "四题骨架能在 12 分钟内写完"],
           ["Day 3", "Part C 两题：先写控件表，再写事件；最后看 Appendix", "C1/C2 主体能在 15 分钟内写完"]],
          widths=[1.6, 11.2, 4.2], size=8.6, align_center_cols=(0,))

    h2("阅卷人怎么给分", "06")
    table(["答案里出现什么", "大概分数", "说明"],
          [["正确声明 / 控件名 / 结构", "2–3", "Dim、Const、Structure、控件 Name 写对就先拿分"],
           ["正确的主逻辑", "3–4", "For/Next、If/ElseIf、SelectedIndex、SQL/Update"],
           ["正确输出", "1–2", "MessageBox / Label / ToString(\"C2\")"],
           ["验证 / 错误处理", "1–2", "Try/Catch、SelectedIndex = -1、付款不足"],
           ["收尾 / 命名 / 注释", "0.5–1", "End If、Next、End Sub、缩进、有意义的名字"]],
          widths=[5.4, 2.2, 9.4], size=8.6, align_center_cols=(1,))

    callout("答题顺序（Part B / C 通用）",
            "先写控件表或声明 → 再写主逻辑 → 最后补 MessageBox、验证和收尾。不要从第一行开始即兴写；阅卷人找的是“点”，不是行数。",
            fill=GREEN_BG, bar=GREEN, title_color=GREEN)


# ----------------------------------------------------------------------------
# Part A
# ----------------------------------------------------------------------------
def mcq(num, chapter, question, opts):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(7)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.keep_with_next = True
    r = p.add_run(f"Q{num}")
    set_run_font(r, BODY_FONT, 10.5, bold=True, color=PURPLE)
    r = p.add_run(f"  [{chapter}]   ")
    set_run_font(r, BODY_FONT, 7.8, bold=True, color=MUTED)
    add_rich(p, question, size=10.0, bold=False)

    t = doc.add_table(rows=2, cols=2)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.autofit = False
    set_table_fixed(t, [8.25, 8.25])
    no_borders(t)
    try:
        t.style = doc.styles["Normal Table"]
    except KeyError:
        pass
    for row in t.rows:
        trPr = row._tr.get_or_add_trPr()
        cant = OxmlElement("w:cantSplit")
        cant.set(qn("w:val"), "true")
        trPr.append(cant)
        for cc in row.cells:
            set_cell_border(cc, color="FFFFFF", sz=4,
                            edges=("top", "left", "bottom", "right"), val="single")
    for i, opt in enumerate(opts):
        c = t.rows[i // 2].cells[i % 2]
        set_cell_margins(c, 0.015, 0.015, 0.55, 0.08)
        p = c.paragraphs[0]
        p.paragraph_format.space_before = Pt(0)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.line_spacing = 1.08
        if i // 2 == 0:
            p.paragraph_format.keep_with_next = True
        r = p.add_run("ABCD"[i] + ".  ")
        set_run_font(r, BODY_FONT, 9.2, bold=True, color=PURPLE_MID)
        add_rich(p, opt, size=9.2)


def part_a():
    h1("Part A · 15 道预测 MCQ（30 分）", page_break=True, kicker_text="Part A · Multiple Choice")
    para("先遮住答案做一遍，目标 12/15 以上。每题 2 分，建议 1.5 分钟以内；超过 2 分钟先标记，回头再算。下面 15 题严格按你给的 8 个 chapter 分配：Chap 1–6 各 2 题，Chap 7 共 3 题。")

    h2("15 题的分布", "A0")
    table(["Chapter", "题号", "考什么", "为什么一定考"],
          [["1", "Q1–Q2", "IDE 窗口；三种 error", "FE Tip 明确写“VS environment / writing the code”"],
           ["2", "Q3–Q4", "GroupBox 容器；MaskedTextBox 的 Mask", "两个控件各有一个必考属性/用途"],
           ["3", "Q5–Q6", "Static 的 lifetime；ToString 的 C2/F2", "scope & lifetime + convert to string"],
           ["4", "Q7–Q8", "AndAlso 短路；MessageBox 多按钮 + icon", "If conditions + enhanced message boxes"],
           ["5", "Q9–Q10", "MenuStrip.Items；Checked 属性", "menustrip items collection"],
           ["5–6", "Q11–Q13", "ShowDialog；Friend；Friend Const", "modal/modeless + multiform variables/constants"],
           ["7", "Q14–Q15", "SelectedIndex = -1；For/Next Step", "the selected index property + for/next loops"]],
          widths=[1.6, 2.4, 6.9, 6.1], size=8.5, align_center_cols=(0, 1))

    h2("预测题", "A1")
    mcq(1, "Chap 1", "Which window in the Visual Studio IDE is used to change the Text property of a selected control?", ["Toolbox", "Solution Explorer", "Properties Window", "Error List"])
    mcq(2, "Chap 1", "A program runs without any error message but displays the wrong total. Which type of error is this?", ["Syntax error", "Run-time error", "Logic error", "Compilation error"])
    mcq(3, "Chap 2", "What is the main purpose of a GroupBox?", ["To display a list of values for selection", "To group related controls, especially radio buttons, into one container", "To enforce an input mask on a text box", "To provide a drop-down menu"])
    mcq(4, "Chap 2", "Which property of a MaskedTextBox specifies a pattern such as 00/00/0000?", ["Text", "Mask", "MaxLength", "PasswordChar"])
    mcq(5, "Chap 3", "A local variable is declared with Static inside a button's Click event. Which statement is correct?", ["It is destroyed when the procedure ends.", "It keeps its value between calls to the procedure.", "It can be accessed from every form in the project.", "It must be declared with Const."])
    mcq(6, "Chap 3", "total is a Decimal. Which expression displays it as currency with two decimal places?", ['total.ToString("F2")', 'total.ToString("C2")', 'total.ToString("N0")', 'total.ToString("P2")'])
    mcq(7, "Chap 4", "If age >= 18 AndAlso hasIC = True Then — why is AndAlso preferred over And?", ["It evaluates both sides every time.", "It stops evaluating when the left side is False.", "It converts both sides to String.", "It reverses the condition."])
    mcq(8, "Chap 4", "Which code displays a warning icon and Yes/No buttons, and stores the user's choice?", ['MessageBox.Show("Delete?", "Confirm", MessageBoxButtons.YesNo)', 'Dim ans As DialogResult = MessageBox.Show("Delete?", "Confirm", MessageBoxButtons.YesNo, MessageBoxIcon.Warning)', 'MessageBox.Show("Delete?", "Confirm", MessageBoxIcon.Warning)', 'Dim ans As DialogResult = MessageBox.Show("Delete?", "Confirm")'])
    mcq(9, "Chap 5", "Which collection holds the top-level items of a MenuStrip?", ["Controls", "Items", "MenuItems", "Nodes"])
    mcq(10, "Chap 5", "Which property of a menu item displays a tick (✓) beside it?", ["Checked", "Enabled", "Visible", "ShortcutKeys"])
    mcq(11, "Chap 5", "Which method displays Form2 so that the user must close it before returning to Form1?", ["Form2.Show()", "Form2.ShowDialog()", "Form2.Hide()", "Form2.Activate()"])
    mcq(12, "Chap 6", "A module-level variable in Form1 must be read by Form2 in the same project. Which declaration is most appropriate?", ["Dim total As Decimal inside Form1_Load", "Private total As Decimal at module level in Form1", "Friend total As Decimal at module level in Form1", "Static total As Decimal inside Button1_Click"])
    mcq(13, "Chap 6", "Where should a constant used by all forms in a multiform project be declared?", ["Inside the Form1_Load procedure", "At module level with Friend Const or Public Const", "Inside a Button_Click procedure with Dim", "In the Form2 designer"])
    mcq(14, "Chap 7", "A ListBox contains five items and the user has not selected anything. What is SelectedIndex?", ["0", "4", "5", "-1"])
    mcq(15, "Chap 7", "How many times does the body execute? For i As Integer = 1 To 5 Step 2", ["2", "3", "4", "5"])

    h2("答案与陷阱", "A2")
    table(["Q", "Ans", "Why（一句话）", "Trap"],
          [["1", "C", "Properties Window 改属性；Toolbox 是加控件", "Toolbox vs Properties"],
           ["2", "C", "能跑但结果错 = logic error", "没有报错 ≠ 没有错误"],
           ["3", "B", "GroupBox 是容器，让同一组 RadioButton 互斥", "它不会自动让控件只读"],
           ["4", "B", "Mask 决定格式；MaxLength 只管长度", "Mask vs TextMaskFormat"],
           ["5", "B", "Static 局部变量：scope 仍在过程内，lifetime 到程序结束", "scope ≠ lifetime"],
           ["6", "B", "C2 = currency + 2 decimals", "F2 没有货币符号；N0 没有小数"],
           ["7", "B", "AndAlso 左侧 False 就短路，不再算右侧", "OrElse 是左侧 True 就短路"],
           ["8", "B", "必须接 DialogResult，且 icon 是第 4 个参数", "参数顺序：text, caption, buttons, icon"],
           ["9", "B", "MenuStrip.Items；子菜单才是 DropDownItems", "不要选 Controls"],
           ["10", "A", "Checked 显示 ✓；Enabled=False 只是变灰", "Checked vs Enabled"],
           ["11", "B", "ShowDialog 是 modal，会阻塞", "Show 是 modeless"],
           ["12", "C", "Friend 让同一 project 的其他 form 访问", "Private 只限本 form"],
           ["13", "B", "Const 放 module level，其他 form 才能用", "写在事件里只有局部 scope"],
           ["14", "D", "没有选中时 SelectedIndex = -1", "0 是第一项，不是“没选”"],
           ["15", "B", "i = 1, 3, 5，共 3 次", "5 会执行；下一个 7 才停"]],
          widths=[0.9, 1.0, 9.0, 6.1], size=8.0, align_center_cols=(0, 1))

    h2("MCQ 高频陷阱（考前 2 分钟看）", "A3")
    bullets([
        "**SelectedIndex**：没有选中 = −1；第一项 = 0；最后一项 = Items.Count − 1。",
        "**Items.Count vs 最大索引**：5 个 items → Count = 5，最大 SelectedIndex = 4。",
        "**C2 vs F2**：C2 显示货币（RM / $，视 culture）；F2 只固定两位小数，不带货币符号。",
        "**Friend vs Private**：跨 form 用 Friend（或 Public，但不推荐）；Private 只限本 form。",
        "**Show vs ShowDialog**：Show 非模态，可同时操作多窗体；ShowDialog 模态，必须先处理当前窗体。",
        "**MenuStrip**：顶层用 Items；某个菜单项的子项用 DropDownItems。",
        "**MaskedTextBox**：格式用 Mask；MaxLength 只限制字符数，不保证格式。",
        "**Static**：scope 仍在 procedure 内，lifetime 延长到程序结束；不要把它当成“全局变量”。",
        "**AndAlso / OrElse**：短路求值；And / Or 两边都算。",
        "**MessageBox**：参数顺序是 text, caption, buttons, icon, defaultButton；要拿返回值必须声明 DialogResult。"])

    callout("Part A 目标",
            "15 题最多错 3 题。遇到“Which is NOT”“All of the above”先圈关键词；遇到代码 trace 先在草稿纸写 i 的值，不要心算。",
            fill=AMBER_BG, bar=AMBER, title_color=AMBER)



# ----------------------------------------------------------------------------
# Part B
# ----------------------------------------------------------------------------
def part_b():
    h1("Part B · 4 道 Structured（40 分）", page_break=True, kicker_text="Part B · Structured")
    para("Part B 的四题不是四篇作文，而是四个**固定骨架**。每题 10 分，通常按“声明 → 输入/赋值 → 处理 → 输出”给分；先把骨架写出来，再补细节，比从第一行开始即兴写更稳。")

    h2("10 分题的通用骨架", "B0")
    table(["骨架", "题目里对应什么", "常见分数"],
          [["① 声明", "Dim / Const / Structure / 控件 Name", "2–4"],
           ["② 输入或赋值", "Parse / TryParse / 数组赋值 / With", "2–3"],
           ["③ 处理", "For/Next / If / SelectedIndex / SQL", "3–4"],
           ["④ 输出", "MessageBox / Label / ToString(\"C2\")", "1–2"],
           ["⑤ 收尾", "End If / Next / End Sub / End Structure", "包含在以上"]],
          widths=[3.0, 10.4, 3.6], size=8.8, align_center_cols=(2,))
    callout("Part B 的底线",
            "就算循环写不完整，也要把声明、数组/结构、MessageBox 写出来；这些是阅卷人最先找的“点”。空着一定 0 分。",
            fill=BLUE_BG, bar=BLUE, title_color=BLUE)

    b1()
    b2()
    b3()
    b4()


def b1():
    h2("2D Array + For/Next + MessageBox（10 分）", "B1")
    question_box("Student Information Table", "10",
                 "A programme coordinator keeps the following details for four students. The data is stored in a two-dimensional array.",
                 ["(a)  Declare a two-dimensional array named studentInfo that can store FOUR students and FOUR fields.  (2M)",
                  "(b)  Write the Form_Load event procedure to enter the data in Table B1 into the array.  (4M)",
                  "(c)  Write the btnDisplay_Click event procedure. Use a For/Next loop to read each row and display one student's information in a MessageBox.  (4M)"])
    para("Table B1 — each cell is studentInfo(row, col)", size=8.2, color=GRAY, space_before=4, space_after=2, keep_with_next=True)
    table(["row / col", "0", "1", "2", "3"],
          [["0", "S001", "Nur Aisyah", "Diploma IT", "85.5"],
           ["1", "S002", "Lim Wei Jie", "Diploma CS", "78"],
           ["2", "S003", "Farah Nadia", "Degree IT", "91"],
           ["3", "S004", "Arjun Kumar", "Degree CS", "66.5"]],
          widths=[2.0, 2.2, 4.6, 4.6, 2.6], size=8.8, align_center_cols=(0, 1, 4))

    h3("Step 1 · 先决定上下界（2M）")
    para("题目要 4 个学生 × 4 个字段。VB 的数组声明写的是**最高下标**，不是元素个数，所以两个下标都写 3：")
    code_block('Dim studentInfo(3, 3) As String', "声明 4 行 × 4 列")
    para("这行会建立 4 × 4 = 16 个元素：行下标 0–3，列下标 0–3。写 (4, 4) 会变成 5 × 5；写 (3, 4) 会变成 4 行 × 5 列，都是常见丢分点。", space_before=3)

    h3("Step 2 · Form_Load 填入 16 个元素（4M）")
    code_block(r'''Private Sub StudentForm_Load(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles MyBase.Load

    studentInfo(0, 0) = "S001"
    studentInfo(0, 1) = "Nur Aisyah"
    studentInfo(0, 2) = "Diploma IT"
    studentInfo(0, 3) = "85.5"

    studentInfo(1, 0) = "S002"
    studentInfo(1, 1) = "Lim Wei Jie"
    studentInfo(1, 2) = "Diploma CS"
    studentInfo(1, 3) = "78"

    studentInfo(2, 0) = "S003"
    studentInfo(2, 1) = "Farah Nadia"
    studentInfo(2, 2) = "Degree IT"
    studentInfo(2, 3) = "91"

    studentInfo(3, 0) = "S004"
    studentInfo(3, 1) = "Arjun Kumar"
    studentInfo(3, 2) = "Degree CS"
    studentInfo(3, 3) = "66.5"
End Sub''', "Form_Load：每行 4 个字段")

    h3("Step 3 · 外层读行 + 内层读列 + 每行一个 MessageBox（4M）")
    code_block(r'''Private Sub btnDisplay_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnDisplay.Click

    Dim labels() As String = {"Student ID", "Name", "Programme", "Mark"}

    For row As Integer = 0 To studentInfo.GetUpperBound(0)
        Dim info As String = ""
        For col As Integer = 0 To studentInfo.GetUpperBound(1)
            info &= labels(col) & ": " & studentInfo(row, col) & _
                    Environment.NewLine
        Next col

        MessageBox.Show(info, "Student " & (row + 1).ToString(), _
                        MessageBoxButtons.OK, MessageBoxIcon.Information)
    Next row
End Sub''', "嵌套 For/Next：4 个 MessageBox，不是 16 个")

    para("关键点：MessageBox 放在**内层循环之后、外层循环之内**，所以每个学生弹一次；如果放在内层循环里，会弹 16 次。GetUpperBound(0) 返回 3，不是 4。", space_before=3)

    h3("Step 4 · 如果题目再加 2M：平均分")
    code_block(r'''Dim total As Decimal = 0
For row As Integer = 0 To studentInfo.GetUpperBound(0)
    total += Decimal.Parse(studentInfo(row, 3))
Next row

Dim average As Decimal = total / (studentInfo.GetUpperBound(0) + 1)
lblAverage.Text = average.ToString("F2")''', "用 upper bound + 1 求人数，不要硬写 / 4")

    h3("评分点（10M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["2D 数组声明", "2", "studentInfo(3, 3)，两个下标都对"],
           ["Form_Load 赋值", "3", "4 行 × 4 字段都有值，字符串/数字放对列"],
           ["外层 + 内层 For/Next", "2", "0 到 GetUpperBound，行列不颠倒"],
           ["MessageBox 输出", "2", "每个学生一次，title/icon 合理"],
           ["格式与收尾", "1", "Environment.NewLine、Next、End Sub"]],
          widths=[5.0, 1.8, 10.2], size=8.6, align_center_cols=(1,))

    h3("考场提醒", color=AMBER)
    bullets([
        "**先写声明再写数据。** Dim studentInfo(3, 3) As String 单独一行，不要和赋值混在一起。",
        "**下标不要从 1 开始。** VB 数组从 0 开始；For row = 1 To 4 既漏第一行又越界。",
        "**行列不要倒。** studentInfo(row, col) 第一个是行，第二个是列；studentInfo(col, row) 会读错字段。",
        "**GetUpperBound(0) = 3，GetLength(0) = 4。** 一个返回最高下标，一个返回元素个数。",
        "**MessageBox 放对层。** 外层循环内、内层循环后；否则弹窗次数错。"])


def b2():
    h2("Structure Declaration（10 分）", "B2")
    question_box("Student Structure", "10",
                 "A student record has five fields: StudentID (String), Name (String), Programme (String), Age (Integer) and Mark (Decimal).",
                 ["(a)  Define a structure named Student with the five fields.  (4M)",
                  "(b)  Declare an array named students to store THREE students.  (2M)",
                  "(c)  Write the Form_Load event to assign the data in Table B2 using With...End With.  (2M)",
                  "(d)  Write the btnDisplay_Click event to display each student's details in a MessageBox using a For/Next loop.  (2M)"])
    para("Table B2 — Student records", size=8.2, color=GRAY, space_before=4, space_after=2, keep_with_next=True)
    table(["StudentID", "Name", "Programme", "Age", "Mark"],
          [["S001", "Nur Aisyah", "Diploma IT", "19", "85.5"],
           ["S002", "Lim Wei Jie", "Diploma CS", "20", "78"],
           ["S003", "Farah Nadia", "Degree IT", "19", "91"]],
          widths=[2.4, 4.6, 4.4, 1.8, 2.4], size=8.6, align_center_cols=(0, 3, 4))

    h3("Step 1 · Structure 声明（4M）")
    code_block(r'''Structure Student
    Dim StudentID As String
    Dim Name As String
    Dim Programme As String
    Dim Age As Integer
    Dim Mark As Decimal
End Structure''', "放在 module level，不能放在 Sub/Function 里")
    para("Structure 默认是 Public，通常放在文件顶部（module-level declarations），不要写在按钮事件里面。每个字段用 Dim 字段名 As 类型，最后必须有 End Structure。", space_before=3)

    h3("Step 2 · 声明 3 个元素的数组 + 赋值（2M + 2M）")
    code_block(r'''Public Class StudentForm
    Dim students(2) As Student

    Private Sub StudentForm_Load(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles MyBase.Load

        With students(0)
            .StudentID = "S001"
            .Name = "Nur Aisyah"
            .Programme = "Diploma IT"
            .Age = 19
            .Mark = 85.5D
        End With

        With students(1)
            .StudentID = "S002"
            .Name = "Lim Wei Jie"
            .Programme = "Diploma CS"
            .Age = 20
            .Mark = 78D
        End With

        With students(2)
            .StudentID = "S003"
            .Name = "Farah Nadia"
            .Programme = "Degree IT"
            .Age = 19
            .Mark = 91D
        End With
    End Sub
End Class''', "Dim students(2) = 3 个元素（下标 0–2）")

    callout("Structure vs Class（选择题也可能考）",
            ["**Structure 是值类型**：赋值时复制整个值；适合“一条记录”的小数据。",
             "**Class 是引用类型**：两个变量可以指向同一个对象；适合有方法、继承的实体。",
             "本题只要求“组合多个字段”，用 Structure 最直接；若题目要求方法/继承，才用 Class。"],
            fill=BLUE_BG, bar=BLUE, title_color=BLUE)

    h3("Step 3 · For/Next 显示（2M）")
    code_block(r'''Private Sub btnDisplay_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnDisplay.Click

    For i As Integer = 0 To students.GetUpperBound(0)
        Dim info As String = _
            "Student ID: " & students(i).StudentID & Environment.NewLine & _
            "Name: " & students(i).Name & Environment.NewLine & _
            "Programme: " & students(i).Programme & Environment.NewLine & _
            "Age: " & students(i).Age.ToString() & Environment.NewLine & _
            "Mark: " & students(i).Mark.ToString("F2")

        MessageBox.Show(info, "Student " & (i + 1).ToString(), _
                        MessageBoxButtons.OK, MessageBoxIcon.Information)
    Next i
End Sub''', "点号访问：students(i).字段名")

    h3("评分点（10M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Structure / End Structure", "2", "关键字拼写、成对出现"],
           ["五个字段与类型", "2", "String / Integer / Decimal 不错"],
           ["Array of structure", "2", "Dim students(2) As Student"],
           ["With 赋值", "2", ".字段 = 值，三个学生都有"],
           ["For/Next 显示", "2", "点号访问、MessageBox、收尾"]],
          widths=[5.0, 1.8, 10.2], size=8.6, align_center_cols=(1,))

    h3("考场提醒", color=AMBER)
    bullets([
        "**Structure 不能写在事件过程里。** 放在 Public Class 外或文件顶部；写在 Sub 里直接 0 分。",
        "**数组写 (2) 不是 (3)。** Dim students(2) As Student 才是 3 个元素；写 3 会多一个空元素。",
        "**点号方向不要反。** 正确是 students(i).Name；不是 students.Name(i)，也不是 Student(i).Name。",
        "**Decimal 字面量加 D。** 85.5D 避免类型推断问题；Age 用 Integer，不要加引号。",
        "**With 里面用 .字段。** 不要重复写 students(0).字段；With 结束后才能写下一个学生。"])

    callout("B1 vs B2：什么时候用哪一个",
            ["**2D array**：所有字段同一种类型（这里都是 String），用两个下标 [row, col]，两层 For/Next。",
             "**Array of structure**：字段类型不同（String + Integer + Decimal），用一个下标 + 点号 .字段，一层 For/Next。",
             "题目说“table / rows and columns / same type” → 2D array；题目说“record / fields / different types” → Structure。"],
            fill=GREEN_BG, bar=GREEN, title_color=GREEN)




def b3():
    h2("GUI Drawing（10 分）", "B3")
    question_box("Workshop Registration Form", "10",
                 "A training centre needs a workshop registration form with the following controls.",
                 ["•  participant name (TextBox)",
                  "•  student ID in the format A0000000 (MaskedTextBox)",
                  "•  programme: Diploma / Degree / Master (RadioButtons)",
                  "•  workshop: VB.NET / Java / Python (ComboBox)",
                  "•  vegetarian meal (CheckBox)",
                  "•  fee display (Label)",
                  "•  Add, Clear and Exit buttons",
                  "Draw the GUI and label every control with a suitable name. State the important properties.  (10M)"])
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(2)
    p.add_run().add_picture(str(ASSETS / "fe-gui.png"), width=Cm(16.4))
    para("Suggested layout — 控件名前缀只是习惯，考试时写清楚即可。", size=8.0, color=GRAY, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=6)

    h3("Control table（把这张表背成模板）")
    table(["Control", "Name", "Type", "Important properties"],
          [["Form", "frmWorkshop", "Form", "Text = IT Workshop Registration; StartPosition = CenterScreen"],
           ["Participant group", "grpParticipant", "GroupBox", "Text = Participant"],
           ["Name label / input", "lblName / txtName", "Label / TextBox", "Text = Name: ; MaxLength = 50"],
           ["Student ID label / input", "lblStudentID / mtxtStudentID", "Label / MaskedTextBox", "Mask = A0000000; PromptChar = _"],
           ["Programme group", "grpProgramme", "GroupBox", "Text = Programme"],
           ["Programme choices", "radDiploma / radDegree / radMaster", "RadioButton", "Text; radDiploma.Checked = True"],
           ["Workshop label / input", "lblWorkshop / cboWorkshop", "Label / ComboBox", "DropDownStyle = DropDownList; Items = VB.NET, Java, Python"],
           ["Meal option", "chkVegetarian", "CheckBox", "Text = Vegetarian meal"],
           ["Fee output", "lblFee", "Label", "BorderStyle = FixedSingle; TextAlign = MiddleCenter"],
           ["Action buttons", "btnAdd / btnClear / btnExit", "Button", "Text = &Add / &Clear / E&xit"],
           ["Form behaviour", "frmWorkshop", "Form", "AcceptButton = btnAdd; CancelButton = btnExit"]],
          widths=[3.6, 5.0, 3.1, 5.3], size=7.9)

    h3("评分点（10M）")
    table(["评分点", "分值", "怎么拿"],
          [["所有 required controls 都画出来", "4", "缺一个扣 0.5–1；TextBox / MaskedTextBox / RadioButton / ComboBox / CheckBox / Label / Button 都要有"],
           ["分组与布局", "2", "GroupBox 把 programme 和 participant 分开；标签左、输入右；按钮底部"],
           ["控件命名与关键属性", "2", "前缀 + 有意义的名字；Mask、DropDownStyle、Checked、AcceptButton"],
           ["Tab 顺序 / 访问键 / 接受-取消按钮", "1", "TabIndex 从上到下；&Add、&Clear、E&xit"],
           ["整洁与完整", "1", "不重叠、不压字、有标题；Clear/Exit 不是装饰"]],
          widths=[6.2, 1.5, 9.3], size=8.3, align_center_cols=(1,))

    h3("考场 6 步画法")
    numbered([
        "先画**外框**，写 form title；在右上角写 frmWorkshop。",
        "把输入分成 2–3 个 **GroupBox**：Participant / Programme / Workshop。",
        "每个输入：左边 Label，右边 TextBox / MaskedTextBox / ComboBox；固定格式用 MaskedTextBox。",
        "互斥选项（Diploma / Degree / Master）放进同一个 GroupBox 的 RadioButton；多选才用 CheckBox。",
        "底部放 Button：Add（默认）、Clear、Exit；输出用 Label，设 BorderStyle。",
        "在每个控件旁边写 Name；在图下方列 5–6 个关键属性（Mask、DropDownStyle、Checked、AcceptButton 等）。"])

    h3("如果 case study 换掉，怎么套")
    table(["题目说", "你画什么", "关键属性"],
          [["enter name / address", "TextBox（address 可 Multiline）", "MaxLength、Multiline、ScrollBars"],
           ["fixed format IC / phone / date", "MaskedTextBox", "Mask（如 000000-00-0000 / 00/00/0000）"],
           ["choose ONE", "RadioButton in GroupBox，或 ComboBox", "Checked、DropDownStyle = DropDownList"],
           ["choose MANY", "CheckBox，或 ListBox with MultiExtended", "Checked、SelectionMode"],
           ["show output / total", "Label（只读）或 ReadOnly TextBox", "BorderStyle、TextAlign、ReadOnly"],
           ["trigger action", "Button", "Text、Enabled、AcceptButton / CancelButton"],
           ["list of records", "ListBox / DataGridView", "Items、DataSource、ReadOnly"]],
          widths=[5.6, 6.4, 5.0], size=8.2)

    h3("考场提醒", color=AMBER)
    bullets([
        "**RadioButton 必须放进 GroupBox。** 全部直接放在 form 上会变成同一组，只能选一个， programme 题直接丢分。",
        "**固定格式不要用普通 TextBox。** 题目说 A0000000、IC、phone、date，就是提示你用 MaskedTextBox + Mask。",
        "**Label 不是输入。** 让用户输入就用 TextBox / MaskedTextBox；只显示结果才用 Label。",
        "**控件名不要留 TextBox1。** 用 txtName、mtxtStudentID、cboWorkshop、radDiploma，阅卷人一眼能对上。",
        "**画完检查 AcceptButton / CancelButton。** 这是“Windows 标准界面”的送分点。"])


def b4():
    h2("Database CRUD（10 分）", "B4")
    question_box("Access Database — Add / Delete / Next / Previous / Save", "10",
                 "A Microsoft Access database Workshop.accdb contains a table Participants with fields ParticipantID, Name, Programme, Workshop and Fee. The form is bound with WorkshopDataSet, ParticipantsBindingSource and ParticipantsTableAdapter.",
                 ["Write the Click event procedures for:",
                  "(a)  Add  (2M)",
                  "(b)  Delete  (2M)",
                  "(c)  Next  (1M)",
                  "(d)  Previous  (1M)",
                  "(e)  Save  (4M)"])

    h3("先认对象：谁负责什么")
    table(["Object", "职责", "在本章代码里"],
          [["DataSet", "内存中的临时数据（disconnected）", "WorkshopDataSet"],
           ["BindingSource", "连接 data source，负责导航和当前记录", "ParticipantsBindingSource"],
           ["TableAdapter", "检索 / 更新数据，生成 SQL", "ParticipantsTableAdapter"],
           ["Bound controls", "显示当前记录的字段", "txtParticipantID, txtName, ..."]],
          widths=[3.2, 8.0, 5.8], size=8.5)

    h3("(a) Add（2M）")
    code_block(r'''Private Sub btnAdd_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnAdd.Click

    ParticipantsBindingSource.AddNew()
    txtParticipantID.Focus()
End Sub''', "AddNew 只是在 dataset 里准备一条新记录，尚未写入 Access")

    h3("(b) Delete（2M）")
    code_block(r'''Private Sub btnDelete_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnDelete.Click

    If MessageBox.Show("Delete this record?", "Confirm", _
            MessageBoxButtons.YesNo, MessageBoxIcon.Warning) = DialogResult.Yes Then
        ParticipantsBindingSource.RemoveCurrent()
    End If
End Sub''', "先确认，再 RemoveCurrent")

    h3("(c) Next / (d) Previous（各 1M）")
    code_block(r'''Private Sub btnNext_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnNext.Click
    ParticipantsBindingSource.MoveNext()
End Sub

Private Sub btnPrevious_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnPrevious.Click
    ParticipantsBindingSource.MovePrevious()
End Sub''', "BindingSource 自带 MoveNext / MovePrevious")

    h3("(e) Save（4M）")
    code_block(r'''Private Sub btnSave_Click(ByVal sender As System.Object, _
        ByVal e As System.EventArgs) Handles btnSave.Click

    Try
        Me.Validate()
        ParticipantsBindingSource.EndEdit()
        ParticipantsTableAdapter.Update(WorkshopDataSet.Participants)

        MessageBox.Show("Record saved.", "Save", _
                        MessageBoxButtons.OK, MessageBoxIcon.Information)
    Catch ex As Exception
        MessageBox.Show("Unable to save: " & ex.Message, "Error", _
                        MessageBoxButtons.OK, MessageBoxIcon.Error)
    End Try
End Sub''', "Validate -> EndEdit -> Update -> 提示")

    h3("每一行在做什么")
    table(["Statement", "作用", "考试为什么要写"],
          [["Me.Validate()", "触发表单上的验证", "让必填/格式错误在保存前暴露"],
           ["EndEdit()", "把当前编辑提交到 dataset", "不加的话，最后一个 textbox 的修改可能没进 dataset"],
           ["TableAdapter.Update(...)", "把 dataset 的 changes 写回 Access", "真正保存；只有 EndEdit 不够"],
           ["Try / Catch", "捕获数据库/约束错误", "4M 里的错误处理分"]],
          widths=[4.6, 6.4, 6.0], size=8.4)

    h3("评分点（10M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Add", "2", "AddNew + focus"],
           ["Delete", "2", "确认对话框 + RemoveCurrent"],
           ["Next", "1", "MoveNext"],
           ["Previous", "1", "MovePrevious"],
           ["Save", "4", "Validate + EndEdit + Update + Try/Catch"]],
          widths=[4.4, 1.6, 11.0], size=8.8, align_center_cols=(1,))

    h3("Access / 数据库细节")
    bullets([
        "**.accdb 的连接字符串**：Provider=Microsoft.ACE.OLEDB.12.0;Data Source=|DataDirectory|\\Workshop.accdb。",
        "**.mdb 的旧连接**：Provider=Microsoft.Jet.OLEDB.4.0；考试如果只写对象名，不写连接字符串也可以。",
        "**把 Access 文件放进项目**：Solution Explorer -> 文件属性 -> Copy to Output Directory = Copy if newer。",
        "**如果题目用 TableAdapterManager**：保存可写 ParticipantsTableAdapterManager.UpdateAll(WorkshopDataSet)。",
        "**Position 显示**（可选）：lblPosition.Text = (ParticipantsBindingSource.Position + 1) & \" / \" & ParticipantsBindingSource.Count。"])

    h3("考场提醒", color=AMBER)
    bullets([
        "**AddNew 不等于 Save。** 它只在内存里加一行；不调用 Update，关闭程序就没了。",
        "**RemoveCurrent 不等于 Delete 文件。** 它从 dataset 移除当前记录；Update 后才从 Access 删除。",
        "**不要用 RemoveAt。** BindingSource 用 RemoveCurrent()；RemoveAt 是 ListBox/DataTable 的写法。",
        "**Delete 一定要 confirm。** 没有 MessageBox 的 Yes/No，2M 里至少丢 1M。",
        "**Save 的 4M 拆开写。** Validate（1）+ EndEdit（1）+ Update（1）+ Try/Catch（1），不要只写一行 Update。"])



# ----------------------------------------------------------------------------
# Part C
# ----------------------------------------------------------------------------
def part_c():
    h1("Part C · 2 道 Programming（30 分）", page_break=True, kicker_text="Part C · Programming")
    para("Part C 不是“写越多越好”，而是“每个要求都找到对应的事件/方法”。先列控件表，再写 5 个事件：Load、Add、Remove、Sort、Transfer。代码短而全，比长而乱更容易拿分。")

    h2("15 分题怎么给分", "C0")
    table(["评分点", "常见分值", "你要让阅卷人看到什么"],
          [["GUI / 控件名", "3", "控件类型对、Name 有意义、关键属性对"],
           ["Load / 初始值", "2", "Form_Load 填 Items、设 SelectedIndex"],
           ["核心逻辑", "5", "Add / Remove / Sort / Transfer 或 discount / total"],
           ["输入验证", "2", "空值、非数字、SelectedIndex = -1、付款不足"],
           ["输出 / 格式", "2", "MessageBox、ToString(\"C2\")、 receipt"],
           ["Clear / Exit / 收尾", "1", "清空、关闭、End Sub"]],
          widths=[4.6, 2.4, 10.0], size=8.7, align_center_cols=(1,))

    c1()
    c2()


def c1():
    h2("ListBox / ComboBox Topic Manager（15 分）", "C1")
    question_box("Workshop Topic Manager", "15",
                 "A training centre needs a form to manage workshop topics using cboTopic, txtNewTopic, lstAvailable, lstSelected, lblTopic and lblCount.",
                 ["(a)  Form_Load: fill both lists.  (2M)",
                  "(b)  Add: reject blank / duplicate; add to both lists.  (3M)",
                  "(c)  Remove the selected item.  (2M)",
                  "(d)  Sort lstAvailable alphabetically.  (2M)",
                  "(e)  Transfer the selected item between lists.  (4M)",
                  "(f)  Show the selected topic and update counts.  (2M)"])

    h3("控件表（先写这个，再写代码）")
    table(["Control", "Type", "Key properties / purpose"],
          [["cboTopic", "ComboBox", "DropDownStyle = DropDownList; Items = VB.NET, Java, Python, Database"],
           ["txtNewTopic", "TextBox", "MaxLength = 30; 输入新 topic"],
           ["lstAvailable", "ListBox", "可用 topic；SelectionMode = One"],
           ["lstSelected", "ListBox", "已选 topic；SelectionMode = One"],
           ["lblTopic / lblCount", "Label", "显示当前选择 / 两个列表的数量"],
           ["btnAdd / btnRemove / btnSort", "Button", "Add / Remove / Sort"],
           ["btnTransfer / btnReturn", "Button", "-> 移到右边 / <- 移回左边"],
           ["btnClear / btnExit", "Button", "Clear both / Close form"]],
          widths=[4.4, 2.8, 9.8], size=8.5)

    h3("Step 1 · Form_Load：填两个列表（2M）")
    code_block(r'''Public Class TopicForm
    Private Sub TopicForm_Load(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles MyBase.Load

        cboTopic.Items.Add("VB.NET")
        cboTopic.Items.Add("Java")
        cboTopic.Items.Add("Python")
        cboTopic.Items.Add("Database")

        lstAvailable.Items.Add("VB.NET")
        lstAvailable.Items.Add("Java")
        lstAvailable.Items.Add("Python")
        lstAvailable.Items.Add("Database")

        cboTopic.SelectedIndex = 0
        UpdateCounts()
    End Sub''', "Form_Load 只执行一次；SelectedIndex = 0 选中第一项")

    h3("Step 2 · Add：验证空值 + 重复（3M）")
    code_block(r'''    Private Sub btnAdd_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnAdd.Click

        Dim newTopic As String = txtNewTopic.Text.Trim()

        If newTopic = "" Then
            MessageBox.Show("Please enter a topic.", "Validation", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtNewTopic.Focus()
            Exit Sub
        End If

        If cboTopic.Items.IndexOf(newTopic) >= 0 Then
            MessageBox.Show("This topic already exists.", "Duplicate", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtNewTopic.SelectAll()
            txtNewTopic.Focus()
            Exit Sub
        End If

        cboTopic.Items.Add(newTopic)
        lstAvailable.Items.Add(newTopic)
        txtNewTopic.Clear()
        txtNewTopic.Focus()
        UpdateCounts()
    End Sub''', "Trim -> 空值 -> 重复 -> 加到两个列表")

    h3("Step 3 · Remove + Sort（4M）")
    code_block(r'''    Private Sub btnRemove_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnRemove.Click

        If lstAvailable.SelectedIndex = -1 Then
            MessageBox.Show("Please select a topic to remove.", _
                            "No Selection", MessageBoxButtons.OK, _
                            MessageBoxIcon.Warning)
            Exit Sub
        End If

        lstAvailable.Items.RemoveAt(lstAvailable.SelectedIndex)
        UpdateCounts()
    End Sub

    Private Sub btnSort_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnSort.Click

        If lstAvailable.Items.Count = 0 Then Exit Sub

        Dim items(lstAvailable.Items.Count - 1) As String
        For i As Integer = 0 To lstAvailable.Items.Count - 1
            items(i) = lstAvailable.Items(i).ToString()
        Next i

        Array.Sort(items)
        lstAvailable.Items.Clear()
        For Each item As String In items
            lstAvailable.Items.Add(item)
        Next

        UpdateCounts()
    End Sub''', "RemoveAt(SelectedIndex)；Sort 用数组 + Array.Sort")

    h3("Step 4 · Transfer / Return：两列表互搬（4M）")
    code_block(r'''    Private Sub btnTransfer_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnTransfer.Click

        If lstAvailable.SelectedIndex = -1 Then
            MessageBox.Show("Select a topic to transfer.", "No Selection", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            Exit Sub
        End If

        Dim topic As String = lstAvailable.SelectedItem.ToString()

        If lstSelected.Items.IndexOf(topic) >= 0 Then
            MessageBox.Show("This topic is already selected.", "Duplicate", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            Exit Sub
        End If

        lstAvailable.Items.RemoveAt(lstAvailable.SelectedIndex)
        lstSelected.Items.Add(topic)
        lstSelected.SelectedIndex = lstSelected.Items.Count - 1
        UpdateCounts()
    End Sub

    Private Sub btnReturn_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnReturn.Click

        If lstSelected.SelectedIndex = -1 Then
            MessageBox.Show("Select a topic to return.", "No Selection", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            Exit Sub
        End If

        Dim topic As String = lstSelected.SelectedItem.ToString()
        lstSelected.Items.RemoveAt(lstSelected.SelectedIndex)
        lstAvailable.Items.Add(topic)
        lstAvailable.SelectedIndex = lstAvailable.Items.Count - 1
        UpdateCounts()
    End Sub''', "先取 SelectedItem，再 RemoveAt，再 Add；顺序不能反")

    h3("Step 5 · ComboBox 选择 + 数量（2M）")
    code_block(r'''    Private Sub cboTopic_SelectedIndexChanged( _
            ByVal sender As System.Object, ByVal e As System.EventArgs) _
            Handles cboTopic.SelectedIndexChanged

        If cboTopic.SelectedIndex >= 0 Then
            lblTopic.Text = "Selected topic: " & _
                            cboTopic.SelectedItem.ToString()
        End If
        UpdateCounts()
    End Sub

    Private Sub UpdateCounts()
        lblCount.Text = "Available: " & _
                        lstAvailable.Items.Count.ToString() & _
                        "    Selected: " & _
                        lstSelected.Items.Count.ToString()
    End Sub

    Private Sub btnClear_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnClear.Click

        If MessageBox.Show("Clear both lists?", "Confirm", _
                MessageBoxButtons.YesNo, MessageBoxIcon.Question) = _
                DialogResult.Yes Then
            lstAvailable.Items.Clear()
            lstSelected.Items.Clear()
            UpdateCounts()
        End If
    End Sub

    Private Sub btnExit_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub
End Class''', "SelectedIndex >= 0；Count 用 ToString 拼接")

    h3("评分点（15M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Form_Load", "2", "两个列表都有 4 个 topic；SelectedIndex = 0"],
           ["Add", "3", "Trim、空值、重复、两个列表都 add"],
           ["Remove", "2", "SelectedIndex = -1 检查 + RemoveAt"],
           ["Sort", "2", "数组 + Array.Sort + 清空 + 加回"],
           ["Transfer / Return", "4", "取 SelectedItem、RemoveAt、Add、防重复"],
           ["SelectedIndexChanged / counts", "2", "lblTopic + Items.Count"]],
          widths=[5.4, 1.6, 10.0], size=8.6, align_center_cols=(1,))

    h3("考场写法（按顺序抄）")
    numbered([
        "先写 **Form_Load**：两个列表各 4 个 item，cboTopic.SelectedIndex = 0。",
        "写 **Add**：Trim -> 空值检查 -> IndexOf >= 0 -> Items.Add 两次。",
        "写 **Remove**：SelectedIndex = -1 检查 -> RemoveAt。",
        "写 **Sort**：Dim items(Count - 1) -> For 复制 -> Array.Sort -> Clear -> For 加回。",
        "写 **Transfer / Return**：取 SelectedItem -> 防重复 -> RemoveAt -> Add -> 选中新项。",
        "最后写 **SelectedIndexChanged / UpdateCounts / Clear / Exit**。"])

    h3("考场提醒", color=AMBER)
    bullets([
        "**SelectedIndex 没有选中是 -1，不是 0。** 先检查 -1，再 RemoveAt；否则运行时错误。",
        "**RemoveAt 用 index，Remove 用 text。** Items.RemoveAt(lstAvailable.SelectedIndex) 最稳。",
        "**先取 SelectedItem 再 RemoveAt。** 顺序反了，SelectedItem 会变成下一项或 Nothing。",
        "**Count 比最大 index 大 1。** 循环写 0 To Items.Count - 1；不要写 0 To Count。",
        "**Sort 不要只写 Sorted = True 就结束。** 如果题目要求“写代码排序”，用数组 + Array.Sort 更能拿分。",
        "**Transfer 要防重复。** 两边都有同一个 topic 时，先 IndexOf >= 0 再提示。"])




def c2():
    h2("Transaction Calculation（15 分）", "C2")
    question_box("Mini Market Checkout", "15",
                 "A mini market checkout program reads item name, unit price, quantity, member status (CheckBox) and amount paid. It calculates the bill and displays a receipt.",
                 ["Discount rules:",
                  "•  gross < RM100: 0%",
                  "•  RM100 to RM299.99: 5%",
                  "•  RM300 and above: 10%",
                  "Members receive an additional 5% discount on the amount after the first discount.",
                  "SST of 6% is charged on the amount after all discounts.",
                  "The payment must be enough; calculate the change. Validate numeric input and display a receipt in a MessageBox.  (15M)"])

    h3("先算一遍：把公式和数字对齐")
    table(["Step", "Formula", "Example (price 25.90, qty 12, member)"],
          [["Gross", "price × quantity", "25.90 × 12 = 310.80"],
           ["Discount 1", "gross × 10%", "31.08"],
           ["After discount 1", "gross − discount 1", "279.72"],
           ["Member extra", "after 1 × 5%", "13.99"],
           ["Net", "gross − total discount", "310.80 − 45.07 = 265.73"],
           ["SST", "net × 6%", "15.94"],
           ["Total", "net + SST", "281.67"],
           ["Change", "paid − total", "300.00 − 281.67 = 18.33"]],
          widths=[4.2, 5.2, 7.6], size=8.5)

    h3("Step 1 · 输入验证（3M）")
    code_block(r'''Public Class CheckoutForm
    Private Sub btnCalculate_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnCalculate.Click

        Dim price As Decimal
        Dim qty As Integer
        Dim paid As Decimal

        If Not Decimal.TryParse(txtPrice.Text, price) _
                OrElse price <= 0D Then
            MessageBox.Show("Enter a valid unit price.", "Input Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtPrice.Focus()
            Exit Sub
        End If

        If Not Integer.TryParse(txtQuantity.Text, qty) _
                OrElse qty <= 0 Then
            MessageBox.Show("Enter a valid quantity.", "Input Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtQuantity.Focus()
            Exit Sub
        End If''', "TryParse + OrElse 短路的组合；不要直接 Parse")

    h3("Step 2 · Gross -> Discount -> SST -> Total（8M）")
    code_block(r'''        Dim gross As Decimal = price * qty
        Dim rate As Decimal

        If gross >= 300D Then
            rate = 0.1D
        ElseIf gross >= 100D Then
            rate = 0.05D
        Else
            rate = 0D
        End If

        Dim discount As Decimal = Decimal.Round(gross * rate, 2)

        If chkMember.Checked Then
            discount += Decimal.Round((gross - discount) * 0.05D, 2)
        End If

        Dim net As Decimal = gross - discount
        Dim sst As Decimal = Decimal.Round(net * 0.06D, 2)
        Dim total As Decimal = net + sst''', "先算第一段 discount，再用 gross - discount 算 member")

    h3("Step 3 · Payment -> Change -> Receipt（4M）")
    code_block(r'''        If Not Decimal.TryParse(txtPaid.Text, paid) Then
            MessageBox.Show("Enter a valid payment amount.", "Input Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtPaid.Focus()
            Exit Sub
        End If

        If paid < total Then
            MessageBox.Show("Payment is not enough. Total is " & _
                            total.ToString("C2"), "Payment Error", _
                            MessageBoxButtons.OK, MessageBoxIcon.Warning)
            txtPaid.Focus()
            Exit Sub
        End If

        Dim change As Decimal = paid - total

        Dim receipt As String = _
            "MINI MARKET" & Environment.NewLine & _
            "------------------------------" & Environment.NewLine & _
            "Item      : " & txtItem.Text & Environment.NewLine & _
            "Price     : " & price.ToString("C2") & Environment.NewLine & _
            "Quantity  : " & qty.ToString() & Environment.NewLine & _
            "Gross     : " & gross.ToString("C2") & Environment.NewLine & _
            "Discount  : -" & discount.ToString("C2") & Environment.NewLine & _
            "Net       : " & net.ToString("C2") & Environment.NewLine & _
            "SST (6%)  : " & sst.ToString("C2") & Environment.NewLine & _
            "TOTAL     : " & total.ToString("C2") & Environment.NewLine & _
            "Paid      : " & paid.ToString("C2") & Environment.NewLine & _
            "Change    : " & change.ToString("C2")

        MessageBox.Show(receipt, "Payment Receipt", _
                        MessageBoxButtons.OK, MessageBoxIcon.Information)
        lblTotal.Text = total.ToString("C2")
    End Sub''', "C2 格式：total.ToString(\"C2\")；换行用 Environment.NewLine")

    h3("Step 4 · Clear / Exit（1M）")
    code_block(r'''    Private Sub btnClear_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnClear.Click
        txtItem.Clear()
        txtPrice.Clear()
        txtQuantity.Clear()
        txtPaid.Clear()
        chkMember.Checked = False
        lblTotal.Text = "RM 0.00"
        txtItem.Focus()
    End Sub

    Private Sub btnExit_Click(ByVal sender As System.Object, _
            ByVal e As System.EventArgs) Handles btnExit.Click
        Me.Close()
    End Sub
End Class''', "清空输入 + 重置 CheckBox + 焦点回到第一项")

    h3("Sample receipt")
    code_block(r'''MINI MARKET
------------------------------
Item      : A4 Paper
Price     : RM 25.90
Quantity  : 12
Gross     : RM 310.80
Discount  : -RM 45.07
Net       : RM 265.73
SST (6%)  : RM 15.94
TOTAL     : RM 281.67
Paid      : RM 300.00
Change    : RM 18.33''', "SAMPLE OUTPUT", lang="TEXT")

    h3("评分点（15M）")
    table(["评分点", "分值", "阅卷人看什么"],
          [["Validate price / quantity", "2", "TryParse + > 0 + 友好 MessageBox"],
           ["Gross", "1", "price * qty，用 Decimal"],
           ["Discount rules", "4", "If / ElseIf / Else，三档正确"],
           ["Member extra 5%", "1", "在 gross - discount 之后算"],
           ["SST + total", "3", "net * 6%，total = net + SST"],
           ["Payment + change", "2", "paid < total 检查，change = paid - total"],
           ["Receipt", "1", "MessageBox + C2 + 换行"],
           ["Clear / Exit", "1", "清空、重置、关闭"]],
          widths=[5.0, 1.6, 10.4], size=8.5, align_center_cols=(1,))

    h3("如果 case study 换成别的 transaction")
    table(["场景", "核心公式", "容易考的点"],
          [["Hotel booking", "nights × room rate + extra bed − deposit", "seasonal surcharge、deposit、balance"],
           ["Restaurant bill", "qty × price + 10% service charge + 6% tax", "service charge 先于 tax"],
           ["Tuition fee", "credit hours × rate + international surcharge − discount", "international 10%、discount 只一次"],
           ["Parking / utility", "units × rate，tiered rates", "If / ElseIf 分段，类似 electricity bill"]],
          widths=[4.6, 8.0, 4.4], size=8.4)

    h3("考场提醒", color=AMBER)
    bullets([
        "**金额一律 Decimal。** 不要用 Integer（会丢小数）或 Double（会有浮点误差）。",
        "**先验证再算。** TryParse 失败就 Exit Sub；不要先乘再报错。",
        "**Discount 顺序不要反。** 先按 gross 算第一段，再用 gross - discount 算 member 的 5%。",
        "**SST 是在 net 之后。** 不是 gross × 6%；题目说 after all discounts，就按 net 算。",
        "**付款不足要先检查。** If paid < total Then ... Exit Sub；不要先减出负数。",
        "**输出用 C2 + Environment.NewLine。** 一行一个字段，receipt 才像 receipt。"])




# ----------------------------------------------------------------------------
# Appendix
# ----------------------------------------------------------------------------
def appendix():
    h1("Appendix · 考前最后 10 分钟", page_break=True, kicker_text="Appendix")
    para("这一部分不引入新知识，只把最容易忘、最容易混、最容易被扣分的点压缩成一张清单。进考场前看这一页就够了。")

    h2("20 个必背片段", "A")
    table(["Must-know", "Code / rule"],
          [["Variable", "Dim qty As Integer"],
           ["Constant", "Const TAX_RATE As Decimal = 0.06D"],
           ["Static local", "Static count As Integer"],
           ["Structure", "Structure Student ... End Structure"],
           ["2D array", "Dim a(3, 3) As String   ' 4 × 4"],
           ["Parse", "Decimal.Parse(txtPrice.Text)"],
           ["TryParse", "If Not Decimal.TryParse(txtPrice.Text, price) Then ..."],
           ["ToString", "total.ToString(\"C2\")"],
           ["If / ElseIf", "If ... Then ... ElseIf ... Else ... End If"],
           ["Select Case", "Select Case code ... Case \"A\" ... Case Else ... End Select"],
           ["MessageBox + result", "Dim ans As DialogResult = MessageBox.Show(..., MessageBoxButtons.YesNo, MessageBoxIcon.Warning)"],
           ["For / Next", "For i As Integer = 0 To lst.Items.Count - 1 ... Next"],
           ["For Each", "For Each item As String In lst.Items ... Next"],
           ["SelectedIndex", "If lst.SelectedIndex <> -1 Then ..."],
           ["List add/remove/sort", "Items.Add(x) / Items.RemoveAt(i) / Array.Sort(arr)"],
           ["Modal / modeless", "Form2.ShowDialog()  /  Form2.Show()"],
           ["Cross-form variable", "Friend total As Decimal"],
           ["DB navigation", "BindingSource.AddNew / RemoveCurrent / MoveNext / MovePrevious"],
           ["DB save", "BindingSource.EndEdit()  then  TableAdapter.Update(DataSet.Table)"],
           ["Try / Catch", "Try ... Catch ex As Exception ... End Try"]],
          widths=[4.6, 12.0], size=7.9, first_col_bold=True)

    h2("60 秒检查清单", "B")
    table(["Check", "If wrong, you lose..."],
          [["Array upper bound = 元素个数 − 1", "2D array 整题"],
           ["Structure 有 End Structure，且不在 Sub 里", "Structure 4M"],
           ["If 有 End If；For 有 Next；Select 有 End Select", "语法分"],
           ["SelectedIndex 先检查 −1，再 RemoveAt", "运行时错误 + Remove 分"],
           ["循环上限是 Count − 1，不是 Count", "越界"],
           ["金额用 Decimal，输出用 C2", "计算/格式分"],
           ["MessageBox 参数顺序 text, caption, buttons, icon", "输出分"],
           ["跨 form 用 Friend，不用 Private", "Multiform 2M"],
           ["ShowDialog 才是 modal；Show 是 modeless", "Modal 题"],
           ["Save 必须 EndEdit + Update，不是只 Update", "Database 4M"],
           ["Delete 要 Yes/No 确认，再 RemoveCurrent", "Delete 1–2M"],
           ["Clear / Exit 按钮有代码，不是装饰", "完整分"]],
          widths=[9.6, 7.0], size=8.2)

    h2("三语术语速查", "C")
    table(["English", "Bahasa Melayu", "中文"],
          [["variable", "pemboleh ubah", "变量"],
           ["constant", "pemalar", "常量"],
           ["scope", "skop", "作用域"],
           ["lifetime", "hayat", "生命周期"],
           ["array", "tatasusunan", "数组"],
           ["structure", "struktur", "结构"],
           ["element", "elemen", "元素"],
           ["subscript / index", "subskrip / indeks", "下标 / 索引"],
           ["menu", "menu", "菜单"],
           ["modal", "modal", "模态"],
           ["modeless", "bukan modal", "非模态"],
           ["database", "pangkalan data", "数据库"],
           ["record", "rekod", "记录"],
           ["field", "medan", "字段"],
           ["table", "jadual", "表"],
           ["query", "pertanyaan", "查询"],
           ["binding source", "sumber pengikatan", "绑定源"],
           ["dataset", "set data", "数据集"],
           ["table adapter", "penyesuai jadual", "表适配器"],
           ["validation", "pengesahan", "验证"]],
          widths=[5.4, 5.8, 5.4], size=8.0)

    h2("10 个最常见丢分点", "D")
    table(["错误写法", "正确写法", "为什么"],
          [["Dim a(4, 4) 表示 4×4", "Dim a(3, 3)", "声明写最高下标，不是元素个数"],
           ["For i = 1 To 4", "For i = 0 To 3", "VB 数组从 0 开始"],
           ["SelectedIndex = 0 当作没选", "SelectedIndex = -1", "−1 才是没有选中"],
           ["Form2.Show() 当作 modal", "Form2.ShowDialog()", "Show 是非模态"],
           ["Private total 跨 form 用", "Friend total", "Private 只限本 form"],
           ["Save 只写 Update", "EndEdit + Update", "最后一个编辑可能还没进 dataset"],
           ["BindingSource.RemoveAt", "RemoveCurrent()", "RemoveAt 是 ListBox/DataTable"],
           ["TextBox.Text * qty", "Decimal.Parse(TextBox.Text) * qty", "Text 是 String"],
           ["total.ToString(\"F2\") 当货币", "total.ToString(\"C2\")", "C2 才有货币符号"],
           ["RadioButton 直接放 form", "放进 GroupBox", "否则全部互斥"]],
          widths=[6.0, 6.0, 4.6], size=8.1)

    callout("最后一句话",
            "Part A 先排除；Part B 先声明；Part C 先控件表。每道题都写 End If / Next / End Sub，别把会做的分留在草稿纸上。",
            fill=GREEN_BG, bar=GREEN, title_color=GREEN)



# main
if __name__ == '__main__':
    setup_document()
    cover()
    page_intro()
    part_a()
    part_b()
    part_c()
    appendix()
    doc.save(OUT)
    print(OUT)
