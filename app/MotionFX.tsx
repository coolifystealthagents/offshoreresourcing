'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = [
  'main > section:not(.home-hero):not(.directory-hero)',
  'main .service-card',
  'main .directory-grid article',
  'main .research-library-card',
  'main .editorial-index-library .card',
  'main .scenario-grid article',
  'main .related-grid a',
  'main .accountability-grid article',
  'main .process-list li',
  'main .home-review-band .review-card',
].join(',');

export default function MotionFX() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups: Array<() => void> = [];

    const header = document.querySelector<HTMLElement>('.nav');
    const progress = document.querySelector<HTMLElement>('.scroll-progress');

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        if (progress) progress.style.transform = `scaleX(${value})`;
        if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));
    onScroll();

    /* Reveal sections without ever risking permanently hidden copy. */
    const revealItems: HTMLElement[] = [];
    if (!reduce) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        }
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.03 });

      const prepare = () => {
        document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((item) => {
          if (item.closest('.home-hero') || item.closest('.directory-hero')) return;
          const rect = item.getBoundingClientRect();
          revealItems.push(item);
          if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
            item.classList.add('is-revealed');
          } else {
            item.classList.add('will-reveal');
            observer.observe(item);
          }
        });
      };

      requestAnimationFrame(prepare);
      cleanups.push(() => observer.disconnect());
    }

    const failsafe = window.setTimeout(() => {
      revealItems.forEach((item) => item.classList.add('is-revealed'));
    }, 1600);
    cleanups.push(() => window.clearTimeout(failsafe));

    /* Cursor tilt for 3D stage and feature cards. */
    if (finePointer && !reduce) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((element) => {
        let frame = 0;
        const move = (event: PointerEvent) => {
          if (frame) return;
          frame = requestAnimationFrame(() => {
            frame = 0;
            const rect = element.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            element.style.setProperty('--ry', `${(x * 7).toFixed(2)}deg`);
            element.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`);
            element.style.setProperty('--px', `${(x * 12).toFixed(2)}px`);
            element.style.setProperty('--py', `${(y * 10).toFixed(2)}px`);
          });
        };
        const leave = () => {
          element.style.setProperty('--ry', '0deg');
          element.style.setProperty('--rx', '0deg');
          element.style.setProperty('--px', '0px');
          element.style.setProperty('--py', '0px');
        };
        element.addEventListener('pointermove', move);
        element.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          element.removeEventListener('pointermove', move);
          element.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => {
      root.classList.remove('motion-ready');
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
