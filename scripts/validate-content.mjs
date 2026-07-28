import fs from 'node:fs';
import path from 'node:path';

let failures = 0;
for (const type of ['research', 'alternatives']) {
  const directory = path.join(process.cwd(), 'content', type);
  for (const name of fs.readdirSync(directory).filter((file) => /\.mdx?$/.test(file))) {
    const raw = fs.readFileSync(path.join(directory, name), 'utf8');
    const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    for (const field of ['title', 'description', 'category', 'publishedAt', 'verifiedAt', 'image']) {
      if (!new RegExp(`^${field}:\\s*\\S`, 'm').test(frontmatter?.[1] || '')) {
        console.error(`${name}: missing ${field}`);
        failures++;
      }
    }
    if ((raw.match(/^#\s+/gm) || []).length) {
      console.error(`${name}: body must not contain H1`);
      failures++;
    }
    if ((raw.match(/^##\s+/gm) || []).length < 3) {
      console.error(`${name}: needs at least three H2 sections`);
      failures++;
    }
    const prose = raw
      .replace(/^---[\s\S]*?---/, '')
      .replace(/^\|(?:\s*:?-{3,}:?\s*\|)+\s*$/gm, '');
    if (/—|--/.test(prose)) {
      console.error(`${name}: dash hygiene failure`);
      failures++;
    }
    if (type === 'research' && (raw.match(/^\d+\.\s+\[[^\]]+\]\(https?:\/\//gm) || []).length < 10) {
      console.error(`${name}: research requires at least 10 sources`);
      failures++;
    }
  }
}
if (failures) process.exit(1);
console.log('Content validation passed.');
