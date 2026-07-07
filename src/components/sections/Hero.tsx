import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { useRotatingIndex } from '@/hooks/useRotatingIndex';
import { useMouseParallax } from '@/hooks/useMouseParallax';
import { scrollToId } from '@/lib/scroll';
import { AuroraBackground } from '@/components/animations/AuroraBackground';
import { Magnetic } from '@/components/animations/Magnetic';
import { Reveal } from '@/components/animations/Reveal';
import { StaggerText } from '@/components/animations/StaggerText';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

/* Floating glass badges orbiting the hero (desktop only). */
const FLOATING_TECH = [
  { label: 'React.js', className: 'right-[14%] top-[24%] animate-float' },
  { label: 'Next.js', className: 'right-[6%] top-[48%] animate-float-slow [animation-delay:-4s]' },
  { label: 'Tailwind CSS', className: 'right-[20%] bottom-[22%] animate-float [animation-delay:-2.5s]' },
];

export function Hero() {
  const roleIndex = useRotatingIndex(profile.roles.length);
  const nearLayer = useMouseParallax<HTMLDivElement>(26);
  const farLayer = useMouseParallax<HTMLDivElement>(-14);

  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      <AuroraBackground grid />

      {/* light beams sweeping down the grid lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[18%] top-0 h-40 w-px bg-gradient-to-b from-transparent via-accent-cyan/50 to-transparent animate-beam" />
        <span className="absolute left-[52%] top-0 h-52 w-px bg-gradient-to-b from-transparent via-accent-violet/50 to-transparent animate-beam [animation-delay:-2.4s] [animation-duration:9s]" />
        <span className="absolute left-[81%] top-0 h-36 w-px bg-gradient-to-b from-transparent via-accent-blue/50 to-transparent animate-beam [animation-delay:-5s] [animation-duration:8s]" />
      </div>

      {/* rotating gradient arc anchored off the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 top-1/2 hidden h-[44rem] w-[44rem] -translate-y-1/2 rounded-full opacity-40 animate-spin-slow lg:block"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgb(109 124 255 / 0.55) 40deg, rgb(34 211 238 / 0.4) 80deg, transparent 130deg)',
          maskImage: 'radial-gradient(closest-side, transparent calc(100% - 2px), black calc(100% - 1px))',
          WebkitMaskImage: 'radial-gradient(closest-side, transparent calc(100% - 2px), black calc(100% - 1px))',
        }}
      />

      {/* far depth layer — drifts against the cursor */}
      <div ref={farLayer} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute left-[20%] top-[26%] h-16 w-16 rounded-2xl border border-line/60 rotate-12 animate-float-slow [animation-delay:-5s]" />
        <span className="absolute right-[8%] bottom-[38%] h-20 w-20 rounded-full border border-line/40 animate-float [animation-delay:-2s]" />
        <span className="absolute left-[8%] top-[16%] h-1 w-1 rounded-full bg-white/50 animate-twinkle" />
        <span className="absolute left-[38%] top-[12%] h-1.5 w-1.5 rounded-full bg-accent-cyan/60 animate-twinkle [animation-delay:-1.2s]" />
        <span className="absolute right-[30%] top-[20%] h-1 w-1 rounded-full bg-white/40 animate-twinkle [animation-delay:-2.1s]" />
        <span className="absolute left-[14%] bottom-[20%] h-1 w-1 rounded-full bg-accent-violet/60 animate-twinkle [animation-delay:-0.6s]" />
        <span className="absolute right-[12%] bottom-[16%] h-1.5 w-1.5 rounded-full bg-white/30 animate-twinkle [animation-delay:-2.8s]" />
      </div>

      {/* near depth layer — drifts with the cursor */}
      <div ref={nearLayer} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute right-[12%] top-[22%] h-2 w-2 rounded-full bg-accent-cyan/70 animate-float" />
        <span className="absolute left-[10%] top-[58%] h-3 w-3 rounded-full bg-accent-violet/50 animate-float-slow" />
        <span className="absolute right-[22%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-accent-blue/70 animate-float [animation-delay:-3s]" />
        {FLOATING_TECH.map((tech) => (
          <span
            key={tech.label}
            className={`absolute hidden items-center gap-2 rounded-full glass px-4 py-2 font-display text-xs font-medium text-muted shadow-[0_8px_32px_rgb(0_0_0/0.4)] xl:flex ${tech.className}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
            {tech.label}
          </span>
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <Reveal y={14}>
          <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </Reveal>

        <h1 className="relative font-display font-semibold tracking-tight">
          {/* soft glow bloom behind the headline */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-16 h-72 w-72 rounded-full bg-accent-violet/15 blur-[100px] animate-pulse-soft"
          />
          <StaggerText
            mode="chars"
            text={`Hi, I’m ${profile.name}.`}
            className="relative block text-4xl leading-[1.06] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          />
          <span className="mt-3 block text-4xl leading-[1.06] sm:text-6xl md:text-7xl lg:text-8xl" aria-live="off">
            {/* rotating role ticker */}
            <span className="inline-block h-[1.15em] overflow-hidden align-bottom">
              <span
                className="block transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)]"
                style={{ transform: `translateY(-${roleIndex * 1.15}em)` }}
              >
                {profile.roles.map((role) => (
                  <span key={role} className="block h-[1.15em] text-gradient-animated">
                    {role}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </h1>

        <Reveal delay={0.5} y={24}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.7} y={24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button onClick={() => scrollToId('projects')} size="lg">
              View my work
              <Icon name="arrow-right" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            {profile.resumeUrl ? (
              <Button href={profile.resumeUrl} download variant="outline" size="lg">
                Download CV
                <Icon name="download" className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={() => scrollToId('contact')} variant="outline" size="lg">
                Get in touch
              </Button>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.9} y={16}>
          <div className="mt-12 flex items-center gap-3">
            {socials.map((social) => (
              <Magnetic key={social.name} strength={8}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:bg-white/5 hover:text-white"
                >
                  <Icon name={social.icon} className="h-4.5 w-4.5" />
                </a>
              </Magnetic>
            ))}
            <span className="ml-2 hidden items-center gap-1.5 text-sm text-faint sm:flex">
              <Icon name="map-pin" className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <button
          onClick={() => scrollToId('about')}
          aria-label="Scroll to About"
          className="flex h-14 w-9 items-start justify-center rounded-full border border-line-strong p-2 text-muted transition-colors hover:text-white"
        >
          <span className="h-2 w-1 rounded-full bg-current animate-scroll-dot" />
        </button>
      </div>

      {/* bottom fade into the next section */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </section>
  );
}
