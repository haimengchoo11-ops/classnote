
import json, os, re
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
man = json.load(open(os.path.join(WS,'data','manifest.json'), encoding='utf-8'))
BOIL = re.compile(r'(cengage|intended for use|may be different|utm\.my|prepared by|thank you|mcgraw|all rights reserved|this edition)', re.I)
os.makedirs(os.path.join(WS,'_extract','outline'), exist_ok=True)
for sub, chs in man.items():
    buf=[]
    for c in chs:
        p = os.path.join(WS,'_extract','txt',sub,c['id']+'.txt')
        txt = open(p, encoding='utf-8').read()
        lines=[]
        for raw in txt.split('\n'):
            l=' '.join(raw.split())
            if not l or l.startswith('----- [') or l.startswith('#'): continue
            if BOIL.search(l): continue
            if re.fullmatch(r'[\d\W]{1,6}', l): continue
            if len(l)<4: continue
            # keep heading-ish lines: short, or start with bullet/section numbering
            if len(l) <= 96:
                lines.append(l)
        # dedupe consecutive
        ded=[]
        for l in lines:
            if not ded or ded[-1]!=l: ded.append(l)
        buf.append('# ' + c['id'] + ' :: ' + c['title'] + '  (%s)' % c['file'])
        buf.append('\n'.join(ded[:90]))
        buf.append('')
    out = '\n'.join(buf)
    open(os.path.join(WS,'_extract','outline',sub+'.txt'),'w',encoding='utf-8').write(out)
    print(sub, len(out), 'chars')
