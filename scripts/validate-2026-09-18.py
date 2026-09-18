from pathlib import Path
import json
import re
import runpy

m = runpy.run_path("scripts/generate-2026-09-18.py")
topics = m["topics"]
article = m["article"]
assert len(topics) == 12, f"expected 12 topics, found {len(topics)}"
slugs = [t["slug"] for t in topics]
assert len(set(slugs)) == 12, "duplicate slug in batch"

manifest = json.loads(Path(".paperclip/daily-content/2026-09-18/blog.json").read_text())
assert manifest["required"] == 12 and len(manifest["articles"]) == 12
assert manifest["publicationDate"] == "2026-09-18" and manifest["timezone"] == "UTC"

generated = Path("app/daily-blog-2026-09-18.ts").read_text()
page = Path("app/blog/[slug]/page.tsx").read_text()
data = Path("app/data.ts").read_text()
for t in topics:
    words = len(re.findall(r"\b[\w’'-]+\b", t["title"] + " " + t["excerpt"] + " " + " ".join(p for _, ps in article(t) for p in ps)))
    assert words >= 900, f"{t['slug']} has only {words} substantive words"
    assert generated.count(f'slug: "{t["slug"]}"') == 1
    assert f'/blog/{t["slug"]}' in json.dumps(manifest)
    html = Path(f'.next/server/app/blog/{t["slug"]}.html')
    assert html.exists(), f"missing built page for {t['slug']}"
    body = html.read_text()
    assert t["title"] in body
    assert f'https://offshoreresourcing.com/blog/{t["slug"]}' in body
    assert '2026-09-18' in body and 'datePublished' in body
    assert 'Sources and further reading' in body and 'request a role plan' in body

assert "dailyBlogSep18Posts" in data
assert "dailyBlogSep18Details" in page
print("validated 12 September 18 Blog articles: word count, unique routes, metadata, sources, CTA, and static output")
