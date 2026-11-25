
import sys, os, json
sys.path.insert(0, r'C:\Users\ROG STRIX\Desktop\classnote\.pylibs')
import pymupdf
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
OUT = os.path.join(WS, '_extract', 'txt', 'tests')
os.makedirs(OUT, exist_ok=True)
TARGETS = [
 ('sadm', 'Revision Test 1 SADM.pdf'),
 ('sadm', 'Revision Test 1 SADM chp 1,2,3,4,5 sample theories questions.pdf'),
 ('vb', 'ExampleTest1Q1.pdf'),
 ('vb', 'ExampleTest1Q2.pdf'),
 ('vb', 'CHAPTER 4 - PART 1 EXAMPLE.pdf'),
]
for sub, f in TARGETS:
    p = os.path.join(WS, sub, f)
    doc = pymupdf.open(p)
    parts = []
    for i, page in enumerate(doc):
        parts.append('----- [%d] -----' % (i+1))
        parts.append(page.get_text('text').strip())
    doc.close()
    txt = '\n'.join(parts)
    name = (f.replace('.pdf','').replace(' ','_').replace(',','')) + '.txt'
    open(os.path.join(OUT, name), 'w', encoding='utf-8').write(txt)
    print(f"{f} -> {len(txt)} chars")
    print(txt[:700])
    print('...')
