
# -*- coding: utf-8 -*-
import json, os, sys, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from manifest import MANIFEST

WS = r'C:\Users\ROG STRIX\Desktop\classnote'
raw = json.load(open(os.path.join(WS,'_extract','raw.json'), encoding='utf-8'))
byfile = {}
for rec in raw:
    byfile.setdefault(rec['subject'], {})[rec['file']] = rec

TXT = os.path.join(WS,'_extract','txt')
RAWDIR = os.path.join(WS,'data','raw')
os.makedirs(TXT, exist_ok=True); os.makedirs(RAWDIR, exist_ok=True)

summary = {}
DIRALIAS = {'oop': '00p'}
for sub, cfg in MANIFEST.items():
    srcdir = DIRALIAS.get(sub, sub)
    lines = []
    for cid, num, title, fname in cfg['files']:
        rec = byfile.get(srcdir, {}).get(fname)
        if rec is None:
            print('!! MISSING', sub, fname); continue
        d = os.path.join(TXT, sub); os.makedirs(d, exist_ok=True)
        buf = [f"# {cid} | Chapter {num}: {title}", f"# source: {sub}/{fname}  ({rec['count']} slides/pages)", ""]
        for it in rec['items']:
            buf.append(f"----- [{it['n']}] -----")
            buf.append(it['text'].strip())
            if it.get('notes'):
                buf.append("[notes] " + it['notes'])
            buf.append("")
        txt = '\n'.join(buf)
        open(os.path.join(d, cid + '.txt'), 'w', encoding='utf-8').write(txt)
        lines.append({'id': cid, 'num': num, 'title': title, 'file': f"{srcdir}/{fname}",
                      'count': rec['count'], 'chars': len(txt)})
        print(f"{cid}: {rec['count']} items -> {len(txt)} chars")
    summary[sub] = lines

json.dump(summary, open(os.path.join(WS,'data','manifest.json'),'w',encoding='utf-8'), ensure_ascii=False, indent=1)
print('OK subjects:', len(MANIFEST), 'chapters:', sum(len(v) for v in summary.values()))
