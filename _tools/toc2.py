
import json, os, re
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
raw = json.load(open(os.path.join(WS,'_extract','raw.json'), encoding='utf-8'))
BOILER = ['2012 Cengage Learning','This edition is intended','may be different from','PREPARED BY','www.utm.my','THANK YOU','DDWC 3343','DDWD 2663','Chapter 9','Learning Outcomes','Objectives']
def clean(t):
    out=[]
    for l in t.split('\n'):
        l=l.strip()
        if not l: continue
        if any(b.lower() in l.lower() for b in BOILER): continue
        if re.fullmatch(r'[\d\-\s\.\|]+', l): continue
        if len(l)<3: continue
        out.append(l)
    return out

targets = [('dcn','CHAPTER 1'),('dcn','CHAPTER 3'),('sadm','CHAP1_SADM'),('sadm','CHP3_SADM'),('vb','ch01'),('cs','CHAPTER 5')]
for sub, key in targets:
    rec = next(r for r in raw if r['subject']==sub and key in r['file'])
    print('#'*80)
    print(rec['subject'], rec['file'])
    for it in rec['items'][:14]:
        c = clean(it['text'])
        if not c: continue
        print(f"  --p{it['n']}: " + ' // '.join(c[:6])[:400])
