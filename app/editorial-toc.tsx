'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; text: string; level?: 2 | 3 };

function TocLinks({ items, activeId }: { items: TocItem[]; activeId: string }) {
  return <ol className="editorial-toc-list">
    {items.map((item) => <li className={item.level === 3 ? 'toc-subitem' : undefined} key={item.id}>
      <a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined}>{item.text}</a>
    </li>)}
  </ol>;
}

export function EditorialToc({ items, family }: { items: TocItem[]; family: 'Blog' | 'Research' | 'Alternatives' }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items.map(({ id }) => document.getElementById(id)).filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length || !('IntersectionObserver' in window)) return;
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.isIntersecting ? visible.set(entry.target.id, entry.boundingClientRect.top) : visible.delete(entry.target.id);
      if (visible.size) setActiveId([...visible].sort((a, b) => a[1] - b[1])[0][0]);
      else {
        const passed = headings.filter((heading) => heading.getBoundingClientRect().top < 150);
        if (passed.length) setActiveId(passed.at(-1)!.id);
      }
    }, { rootMargin: '-112px 0px -62% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;
  return <>
    <aside className="editorial-sidebar" aria-label={`${family} article navigation`}>
      <nav aria-label="On this page"><strong>On this page</strong><TocLinks items={items} activeId={activeId} /></nav>
      <div className="editorial-sidebar-context">
        <strong>Use this guide</strong>
        <p>Review scope, evidence, ownership, and handoffs before making a staffing decision.</p>
        <a href={`/${family.toLowerCase()}`}>Browse all {family.toLowerCase()}</a>
        <a className="btn primary" href="/contact-us">Plan your offshore team</a>
      </div>
    </aside>
    <details className="editorial-mobile-toc">
      <summary>On this page</summary>
      <nav aria-label="On this page"><TocLinks items={items} activeId={activeId} /></nav>
    </details>
  </>;
}
