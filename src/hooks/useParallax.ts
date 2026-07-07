import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Translate an element vertically as it moves through the viewport.
 * `speed` is the parallax factor: positive drifts up, negative down.
 * Writes transform directly (no React re-renders per frame).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.15) {
  const ref = useRef<T>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (viewportCenter - elementCenter) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [speed, reduced]);

  return ref;
}
