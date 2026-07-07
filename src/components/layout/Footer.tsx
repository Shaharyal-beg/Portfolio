import { NAV_LINKS } from '@/constants/nav';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { scrollToId } from '@/lib/scroll';
import { Magnetic } from '@/components/animations/Magnetic';
import { Icon } from '@/components/ui/Icon';

export function Footer() {
  return (
    <footer className="relative border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold tracking-tight text-white">
              {profile.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{profile.tagline}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-faint">
              <Icon name="map-pin" className="h-3.5 w-3.5" />
              {profile.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToId(link.id)}
                    className="text-sm text-muted transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <Magnetic key={social.name} strength={8}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:text-white"
                >
                  <Icon name={social.icon} className="h-4.5 w-4.5" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {profile.name}. Crafted with care.
          </p>
          <Magnetic strength={10}>
            <button
              onClick={() => scrollToId('home')}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:text-white"
            >
              <Icon name="arrow-up" className="h-4 w-4" />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
