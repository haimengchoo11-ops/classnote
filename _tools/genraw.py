
# -*- coding: utf-8 -*-
import json, os
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
raw = json.load(open(os.path.join(WS,'_extract','raw.json'), encoding='utf-8'))
man = json.load(open(os.path.join(WS,'data','manifest.json'), encoding='utf-8'))
DIR2SUB = {'00p':'oop'}
byfile = {}
for rec in raw:
    byfile[(DIR2SUB.get(rec['subject'],rec['subject']), rec['file'])] = rec

os.makedirs(os.path.join(WS,'data','raw'), exist_ok=True)
total=0
for sub, chs in man.items():
    out = {}
    for c in chs:
        dirname = c['file'].split('/')[0]
        fname = c['file'].split('/',1)[1]
        rec = byfile[(sub if False else DIR2SUB.get(dirname,dirname), fname)] if False else byfile.get((sub, fname))
        if rec is None:
            for (s,f),r in byfile.items():
                if f == fname: rec = r; break
        pages=[]
        for it in rec['items']:
            pages.append({'n': it['n'], 't': (it['text'] or '').strip()})
        out[c['id']] = pages
    js = "window.CN_RAW=window.CN_RAW||{};window.CN_RAW[%s]=%s;" % (
        json.dumps(sub), json.dumps(out, ensure_ascii=False, separators=(',',':')))
    open(os.path.join(WS,'data','raw',sub+'.js'),'w',encoding='utf-8').write(js)
    sz = len(js); total += sz
    print(f"{sub}: {len(out)} chapters, {sz//1024} KB")
print('total raw KB:', total//1024)
