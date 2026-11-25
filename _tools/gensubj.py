
import json, os
WS = r'C:\Users\ROG STRIX\Desktop\classnote'
man = json.load(open(os.path.join(WS,'data','manifest.json'), encoding='utf-8'))
ORDER = ['oop','cs','dcn','os','sadm','vb']
js = "window.CN_SUBJECT_ORDER=%s;window.CN_MANIFEST=%s;" % (
    json.dumps(ORDER), json.dumps(man, ensure_ascii=False, separators=(',',':')))
open(os.path.join(WS,'data','subjects.js'),'w',encoding='utf-8').write(js)
print('subjects.js written', len(js), 'bytes')
for k in ORDER:
    print(k, len(man[k]), 'chapters')
