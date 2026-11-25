
import sys, os, json, io, traceback
sys.path.insert(0, r'C:\Users\ROG STRIX\Desktop\classnote\.pylibs')
import pymupdf
from pptx import Presentation
from pptx.util import Emu

WS = r'C:\Users\ROG STRIX\Desktop\classnote'
OUT = os.path.join(WS, '_extract')
os.makedirs(OUT, exist_ok=True)

def iter_files():
    for sub in ['00p','cs','dcn','os','sadm','vb']:
        d = os.path.join(WS, sub)
        for f in sorted(os.listdir(d)):
            if f.lower().endswith(('.pdf','.pptx')):
                yield sub, f, os.path.join(d, f)

def extract_pdf(p):
    doc = pymupdf.open(p)
    pages = []
    for i, page in enumerate(doc):
        t = page.get_text('text')
        pages.append({'n': i+1, 'text': t})
    doc.close()
    return pages

def extract_pptx(p):
    prs = Presentation(p)
    slides = []
    for i, slide in enumerate(prs.slides):
        parts = []
        for shp in slide.shapes:
            try:
                if shp.has_text_frame:
                    txt = shp.text_frame.text.strip()
                    if txt: parts.append(txt)
                if shp.has_table:
                    for row in shp.table.rows:
                        cells = [c.text.strip() for c in row.cells]
                        parts.append(' | '.join(cells))
            except Exception:
                pass
        notes = ''
        try:
            if slide.has_notes_slide:
                notes = slide.notes_slide.notes_text_frame.text.strip()
        except Exception:
            pass
        slides.append({'n': i+1, 'text': '\n'.join(parts), 'notes': notes})
    return slides

index = []
for sub, fname, full in iter_files():
    rec = {'subject': sub, 'file': fname, 'kind': 'pdf' if fname.lower().endswith('.pdf') else 'pptx'}
    try:
        items = extract_pdf(full) if rec['kind']=='pdf' else extract_pptx(full)
        rec['count'] = len(items)
        rec['items'] = items
        rec['ok'] = True
        total_chars = sum(len(x['text']) for x in items)
        rec['chars'] = total_chars
    except Exception as e:
        rec['ok'] = False
        rec['error'] = str(e)
        rec['items'] = []
    index.append(rec)
    print(f"{sub}/{fname}: {rec.get('count','ERR')} pages, {rec.get('chars',0)} chars", flush=True)

with open(os.path.join(OUT,'raw.json'),'w',encoding='utf-8') as fh:
    json.dump(index, fh, ensure_ascii=False)
print('DONE total files:', len(index))
