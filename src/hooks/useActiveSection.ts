import { useEffect, useState } from 'react';

/**
 * Track which page section currently occupies the viewport.
 * `ids` must match rendered element ids, in document order.
 *
 * Sections are lazy-loaded, so elements may not exist on first run —
 * missing ids are retried briefly until every section has mounted.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const visibility = new Map<string, number>();
    const observed = new Set<string>();
    let retryTimer = 0;
    let retries = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActive(best);
      },
      { threshold: [0.1, 0.25, 0.5], rootMargin: '-15% 0px -35% 0px' },
    );

    const observeAvailable = () => {
      for (const id of ids) {
        if (observed.has(id)) continue;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      }
      if (observed.size < ids.length && retries < 25) {
        retries += 1;
        retryTimer = window.setTimeout(observeAvailable, 200);
      }
    };

    observeAvailable();
    return () => {
      observer.disconnect();
      window.clearTimeout(retryTimer);
    };
  }, [ids]);

  return active;
}
