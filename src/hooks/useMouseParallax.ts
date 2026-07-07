import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';
import { lerp } from '@/lib/utils';

/**
 * Drift an element with the cursor for a layered depth effect.
 * `depth` is the max offset in px (negative moves against the cursor).
 * Writes transforms on its own rAF loop — no React re-renders.
 * Desktop-only (skips coarse pointers) and respects reduced motion.
 */
export function useMouseParallax<T extends HTMLElement = HTMLDivElement>(depth = 20) {
  const ref = useRef<T>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      // -1..1 relative to viewport center
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      x = lerp(x, targetX, 0.06);
      y = lerp(y, targetY, 0.06);
      el.style.transform = `translate3d(${(x * depth).toFixed(2)}px, ${(y * depth).toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [depth, reduced]);

  return ref;
}
