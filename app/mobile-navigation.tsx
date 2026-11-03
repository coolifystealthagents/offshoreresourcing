'use client';

import { useRef } from 'react';

export function MobileNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => menu.current?.removeAttribute('open');

  return <details className="mobile-navigation" ref={menu}>
    <summary aria-label="Navigation menu"><span aria-hidden="true" /></summary>
    <nav aria-label="Mobile navigation">
      <a href="/" onClick={close}>Home</a>
      <a href="/services" onClick={close}>Services</a>
      <a href="/contact-us" onClick={close}>Contact Us</a>
    </nav>
  </details>;
}
