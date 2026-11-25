
import json, os, re
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
raw = json.load(open(os.path.join(WS,'_extract','raw.json'), encoding='utf-8'))
for rec in raw:
    if rec['subject']!='sadm': continue
    if 'CHAP' not in rec['file'] and 'CHP' not in rec['file']: continue
    t = rec['items'][0]['text']
    lines=[' '.join(l.split()) for l in t.split('\n')]
    lines=[l for l in lines if l]
    # find 'Chapter N'
    for i,l in enumerate(lines):
        if re.fullmatch(r'Chapter\s+\d+', l, re.I):
            print(f"{rec['file']:35s} -> " + ' | '.join(lines[i+1:i+4])[:120])
            break
