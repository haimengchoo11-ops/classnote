
import json, os, re
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
raw = json.load(open(os.path.join(WS,'_extract','raw.json'), encoding='utf-8'))
for rec in raw:
    print('='*70)
    print(f"{rec['subject']} :: {rec['file']} ({rec['count']} items, {rec.get('chars',0)} chars)")
    items = rec['items']
    # print first non-empty line of each of first 6 items + a scan of all first-lines
    lines = []
    for it in items:
        t = (it['text'] or '').strip()
        first = next((l.strip() for l in t.split('\n') if l.strip()), '')
        lines.append(first)
    # dedupe consecutive
    ded = []
    for l in lines:
        if not ded or ded[-1] != l:
            ded.append(l)
    print('  TOC-guess:', ' | '.join(ded[:28])[:900])
