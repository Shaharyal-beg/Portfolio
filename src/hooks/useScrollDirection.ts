import { useEffect, useState } from 'react';

interface ScrollState {
  direction: 'up' | 'down';
  /** True while the page is scrolled less than `topOffset`. */
  atTop: boolean;
}

/** Track scroll direction (with a small delta threshold to avoid jitter). */
export function useScrollDirection(threshold = 8, topOffset = 80): ScrollState {
  const [state, setState] = useState<ScrollState>({ direction: 'up', atTop: true });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const atTop = y < topOffset;
      if (Math.abs(y - lastY) >= threshold) {
        const direction = y > lastY ? 'down' : 'up';
        lastY = y;
        setState((prev) =>
          prev.direction === direction && prev.atTop === atTop ? prev : { direction, atTop },
        );
      } else {
        setState((prev) => (prev.atTop === atTop ? prev : { ...prev, atTop }));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, topOffset]);

  return state;
}
