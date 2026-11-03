export type InlineMarkdownToken =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string };

const unsafeUrlCharacters = /[\\\u0000-\u001f\u007f]/;

export function safeInlineHref(value: string): string | null {
  if (!value || unsafeUrlCharacters.test(value)) return null;
  if (value.startsWith('/')) {
    return value.startsWith('//') ? null : value;
  }
  if (!/^https?:\/\//.test(value)) return null;
  try {
    const url = new URL(value);
    if ((url.protocol !== 'http:' && url.protocol !== 'https:') || url.username || url.password) return null;
    return value;
  } catch {
    return null;
  }
}

export function parseInlineMarkdownLinks(text: string): InlineMarkdownToken[] {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const tokens: InlineMarkdownToken[] = [];
  let cursor = 0;
  for (const match of text.matchAll(pattern)) {
    const href = safeInlineHref(match[2]);
    if (!href) continue;
    const start = match.index ?? 0;
    if (start > cursor) tokens.push({ type: 'text', value: text.slice(cursor, start) });
    tokens.push({ type: 'link', label: match[1], href });
    cursor = start + match[0].length;
  }
  if (cursor < text.length) tokens.push({ type: 'text', value: text.slice(cursor) });
  return tokens.length ? tokens : [{ type: 'text', value: text }];
}
