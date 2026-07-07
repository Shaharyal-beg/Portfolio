import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/** Animate a number from 0 to `target` once `start` becomes true. */
export function useCountUp(target: number, start: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }

    let raf = 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      // ease-out-expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, reduced]);

  return value;
}
