import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { lerp } from '@/lib/utils';

/**
 * Soft radial glow that trails the cursor across the whole page.
 * Runs on its own rAF loop writing transforms directly — zero re-renders.
 * Desktop-only (skips coarse pointers) and respects reduced motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.opacity = '1';
    };

    const tick = () => {
      x = lerp(x, targetX, 0.08);
      y = lerp(y, targetY, 0.08);
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background:
          'radial-gradient(circle, rgb(109 124 255 / 0.07) 0%, rgb(139 92 246 / 0.04) 35%, transparent 70%)',
      }}
    />
  );
}
