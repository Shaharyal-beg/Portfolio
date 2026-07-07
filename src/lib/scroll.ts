/**
 * Smooth-scroll to a section by id.
 *
 * Uses native smooth scrolling (html { scroll-behavior: smooth } +
 * scroll-padding-top handles the navbar offset). If you later install
 * Lenis (`npm install lenis`), route this through lenis.scrollTo instead —
 * this is the single choke point for programmatic scrolling.
 */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
