import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');

function imageTags(source) {
  return [...source.matchAll(/<img\b[^>]*>/gs)].map(([tag]) => tag);
}

test('homepage images have useful labels and a single H1', () => {
  const images = imageTags(page);
  assert.ok(images.length >= 1, 'homepage must have at least one image');
  for (const tag of images) {
    const alt = tag.match(/\balt\s*=\s*(?:(["'])(.*?)\1|\{([^}]+)\})/s);
    assert.ok(alt && (alt[2] || alt[3] || '').trim(), `image lacks a useful alt label: ${tag}`);
  }
  assert.equal((page.match(/<h1\b/g) || []).length, 1, 'homepage must render exactly one H1');
});

test('homepage has canonical metadata and an intentional title', () => {
  assert.match(page, /alternates:\s*\{\s*canonical\s*\}/);
  const title = layout.match(/default:\s*(["'])(.*?)\1/s)?.[2];
  assert.ok(title, 'default metadata title was not found');
  assert.ok(title.length >= 30 && title.length <= 60, `default title length ${title.length} is outside 30 to 60 characters`);
});
