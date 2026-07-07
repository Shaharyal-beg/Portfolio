import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';

interface GhostTextProps {
  text: string;
  className?: string;
  /** Horizontal travel in viewport-width units as the section scrolls by. */
  travel?: number;
}

/**
 * Huge outlined background lettering that glides horizontally, driven by
 * the section's scroll progress through the viewport. Decorative only.
 */
export function GhostText({ text, className, travel = 18 }: GhostTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the element enters from below, 1 when it leaves above
      const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
      const shift = (progress - 0.5) * travel;
      el.style.transform = `translate3d(${shift.toFixed(2)}vw, 0, 0)`;
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
    };
  }, [travel, reduced]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 select-none overflow-hidden',
        className,
      )}
    >
      <span
        ref={ref}
        className="block whitespace-nowrap font-display text-[18vw] font-bold uppercase leading-none tracking-tight text-stroke-ghost will-change-transform md:text-[13vw]"
      >
        {text}
      </span>
    </div>
  );
}
