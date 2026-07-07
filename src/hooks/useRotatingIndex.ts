import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/** Cycle 0..length-1 on an interval (pauses when reduced motion is on). */
export function useRotatingIndex(length: number, intervalMs = 2800): number {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced || length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [length, intervalMs, reduced]);

  return index;
}
