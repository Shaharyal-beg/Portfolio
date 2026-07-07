import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/constants/nav';
import { profile } from '@/data/profile';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { scrollToId } from '@/lib/scroll';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

const OBSERVED_IDS = NAV_LINKS.map((l) => l.id);

/**
 * Floating glass navbar: hides on scroll down, reveals on scroll up,
 * highlights the active section, and expands into a mobile overlay menu.
 */
export function Navbar() {
  const { direction, atTop } = useScrollDirection();
  const active = useActiveSection(OBSERVED_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const hidden = direction === 'down' && !atTop && !menuOpen;

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500',
          hidden ? '-translate-y-24 opacity-0' : 'translate-y-0 opacity-100',
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'flex w-full max-w-3xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500',
            atTop && !menuOpen ? 'border border-transparent' : 'glass-strong shadow-[0_8px_40px_rgb(0_0_0/0.5)]',
          )}
        >
          <button
            onClick={() => go('home')}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 font-display text-sm font-semibold tracking-tight text-white"
            aria-label="Go to top"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan text-[11px] font-bold text-white">
              {profile.name
                .split(' ')
                .map((w) => w[0])
                .join('')}
            </span>
            <span className="hidden sm:inline">{profile.firstName}</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm transition-colors duration-300',
                    active === link.id ? 'text-white' : 'text-muted hover:text-white',
                  )}
                >
                  {active === link.id && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-white/[0.07] shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)]"
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go('contact')}
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90 md:inline-flex"
            >
              Let’s talk
            </button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
            >
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        aria-hidden={!menuOpen}
        className={cn(
          'fixed inset-0 z-40 flex flex-col justify-center bg-bg/90 px-8 backdrop-blur-2xl transition-all duration-500 md:hidden',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <ul className="space-y-2">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.id}
              className="overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => go(link.id)}
                tabIndex={menuOpen ? 0 : -1}
                className={cn(
                  'block w-full py-2 text-left font-display text-4xl font-semibold tracking-tight transition-all duration-500',
                  active === link.id ? 'text-gradient' : 'text-white',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                )}
                style={{ transitionDelay: menuOpen ? `${100 + i * 60}ms` : '0ms' }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-faint">{profile.email}</p>
      </div>
    </>
  );
}
