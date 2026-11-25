
import json, os, re
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
raw = json.load(open(os.path.join(WS,'_extract','raw.json'), encoding='utf-8'))
SKIP = re.compile(r'(cengage|intended for use|may be different|utm\.my|PREPARED BY|THANK YOU|McGraw-Hill|All Rights Reserved|^\d+$|^[\d\-\s\.]+$)', re.I)
def head(rec, n=3):
    got=[]
    for it in rec['items'][:n]:
        for l in it['text'].split('\n'):
            l=' '.join(l.split())
            if len(l)<5 or SKIP.search(l): continue
            got.append(l)
    return got

for sub in ['dcn','sadm','vb']:
    print('#'*75); print('SUBJECT', sub)
    for rec in raw:
        if rec['subject']!=sub: continue
        h = head(rec, 4)
        print(f"\n  >> {rec['file']}")
        for x in h[:5]: print("      "+x[:150])
