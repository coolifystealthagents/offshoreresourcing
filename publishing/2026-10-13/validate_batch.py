from pathlib import Path
from PIL import Image
import hashlib,json,re,subprocess,sys
ROOT=Path(__file__).resolve().parents[2];DATE='2026-10-13';errors=[]
def check(v,m):
 if not v:errors.append(m)
m=json.loads((ROOT/'publishing/2026-10-13/manifest.json').read_text());arts=m['articles'];blogs=[x for x in arts if x['section']=='Blog'];research=[x for x in arts if x['section']=='Research']
check(m['site']=='OffshoreResourcing.com','site');check(m['repository']=='coolifystealthagents/offshoreresourcing','repo');check(m['branch']=='main','branch');check(m['baseSha']=='a5c5f4459fc1a91ff19286e6ed6ee873db3d2970','immutable base');check(m['publicationDate']==DATE,'date');check(len(blogs)==12 and len(research)==5 and len(arts)==17,'counts');check(len({x['slug'] for x in arts})==17 and len({x['title'] for x in arts})==17,'unique identities')
for x in arts:check(not re.search(r'2026|October\s+13|Oct(?:ober)?\.?\s+13',x['title'],re.I),f'date title {x["slug"]}')
js="import('./app/daily-blog-2026-10-13.ts').then(m=>console.log(JSON.stringify(m.dailyBlogOct13Posts)))"
try:bp=json.loads(subprocess.check_output(['node','-e',js],cwd=ROOT,text=True))
except Exception as e:errors.append(f'Blog module import: {e}');bp=[]
check(len(bp)==12,'Blog module count');by={x['slug']:x for x in bp};paragraphs=[]
for a in blogs:
 x=by.get(a['slug']);check(bool(x),f'Blog missing {a["slug"]}')
 if not x:continue
 check(x['title']==a['title'],f'Blog title {a["slug"]}');check(x['publishedAt']==DATE,f'Blog date {a["slug"]}');check(x['image']=='/'+a['thumbnailPath'].removeprefix('public/'),f'Blog hero {a["slug"]}')
 ps=[p for s in x['details']['sections'] for p in s['paragraphs']];check(len(ps)==20,f'Blog sections {a["slug"]}');check(all(len(re.findall(r"\b[\w’-]+\b",p))>=55 for p in ps),f'Blog paragraph depth {a["slug"]}');check(len(re.findall(r"\b[\w’-]+\b",' '.join(ps)))>=1100,f'Blog depth {a["slug"]}');check(len(x['details']['sources'])==4 and all(s['url'].startswith('https://') for s in x['details']['sources']),f'Blog sources {a["slug"]}');paragraphs+=ps
newpaths={str(ROOT/a['sourcePath']) for a in research}
for a in research:
 p=ROOT/a['sourcePath'];check(p.exists(),f'Research missing {a["slug"]}')
 if not p.exists():continue
 raw=p.read_text();head,body=raw.split('---',2)[1:];check(f'title: {a["title"]}' in head,f'Research title {a["slug"]}');check(f'publishedAt: {DATE}' in head and f'verifiedAt: {DATE}' in head,f'Research dates {a["slug"]}');check(f'image: /images/october-13/{a["slug"]}.webp' in head,f'Research hero {a["slug"]}')
 urls=re.findall(r'^\d+\. \[[^]]+\]\((https://[^)]+)\)$',body,re.M);check(len(urls)==10 and len(set(urls))==10,f'Research sources {a["slug"]}');check(len(re.findall(r"\b[\w’-]+\b",body))>=1350,f'Research depth {a["slug"]}');check('## Related research' in body and body.count('](/research/')>=3,f'Research related {a["slug"]}')
 paragraphs += [q.strip() for q in re.split(r'\n\s*\n',body) if len(q.split())>=45 and not q.startswith(('##','- ','1. ','2. ','3. ','4. ','5. ','6. ','7. ','8. ','9. ','10. '))]
def norm(s):return re.sub(r'[^a-z0-9]+',' ',s.lower()).strip()
seen=set()
for p in paragraphs:
 n=norm(p);check(n not in seen,f'duplicate new prose {n[:80]}');seen.add(n)
old=set()
for base in [ROOT/'content/research']:
 for p in base.glob('*.md'):
  if str(p) in newpaths:continue
  for q in re.split(r'\n\s*\n',p.read_text(errors='ignore')):
   if len(q.split())>=45:old.add(norm(q))
for p in paragraphs:check(norm(p) not in old,f'existing prose collision {norm(p)[:80]}')
data=(ROOT/'app/data.ts').read_text();route=(ROOT/'app/blog/[slug]/page.tsx').read_text();rr=(ROOT/'app/research/[slug]/page.tsx').read_text();bi=(ROOT/'app/blog/page.tsx').read_text();ri=(ROOT/'app/research/page.tsx').read_text()
check("daily-blog-2026-10-13" in data and '...dailyBlogOct13Posts' in data,'Blog registry');check('dailyBlogOct13Details' in route and 'dailyBlogOct13Posts' in route,'Blog route');check('blogPosts' in bi and 'publishedAt' in bi,'Blog index/date');check("getDocument('research'" in rr and 'ContentArticle' in rr,'Research route');check('getDocuments("research")' in ri and 'publishedAt' in ri,'Research index/date')
base=subprocess.check_output(['git','show',f'{m["baseSha"]}:app/data.ts'],cwd=ROOT,text=True)
for a in arts:check(a['slug'] not in base and a['title'] not in base,f'base collision {a["slug"]}')
hashes=set()
for a in arts:
 p=ROOT/a['thumbnailPath'];check(p.exists(),f'image {a["slug"]}')
 if p.exists():
  im=Image.open(p);check(im.size==(1200,630) and im.format=='WEBP',f'image format {a["slug"]}');b=p.read_bytes();check(a['title'].encode() in b,f'exact title metadata {a["slug"]}');hashes.add(hashlib.sha256(b).hexdigest())
 check(hashlib.sha256((ROOT/a['sourcePath']).read_bytes()).hexdigest()==a['sha256'],f'source hash {a["slug"]}')
check(len(hashes)==17,'image uniqueness')
if errors:
 print('FAIL');print('\n'.join('- '+x for x in errors));sys.exit(1)
print(f'PASS OffshoreResourcing October 13: 12 Blog + 5 Research, visible dates, date-free titles, 10 authoritative HTTPS sources per Research, separate routes/indexes/related content, 17 unique exact-title 1200x630 WebP thumbnails, immutable-base collision audit, source hashes, depth, and zero duplicate substantive prose.')
