import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { useRotatingIndex } from '@/hooks/useRotatingIndex';
import { useParallax } from '@/hooks/useParallax';
import { scrollToId } from '@/lib/scroll';
import { AuroraBackground } from '@/components/animations/AuroraBackground';
import { Magnetic } from '@/components/animations/Magnetic';
import { Reveal } from '@/components/animations/Reveal';
import { StaggerText } from '@/components/animations/StaggerText';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export function Hero() {
  const roleIndex = useRotatingIndex(profile.roles.length);
  const orbRef = useParallax<HTMLDivElement>(-0.12);

  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-svh flex-col justify-center overflow-hidden">
      <AuroraBackground grid />

      {/* floating decorative elements */}
      <div ref={orbRef} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[12%] top-[22%] h-2 w-2 rounded-full bg-accent-cyan/70 animate-float" />
        <div className="absolute left-[10%] top-[58%] h-3 w-3 rounded-full bg-accent-violet/50 animate-float-slow" />
        <div className="absolute right-[22%] bottom-[24%] h-1.5 w-1.5 rounded-full bg-accent-blue/70 animate-float [animation-delay:-3s]" />
        <div className="absolute left-[20%] top-[26%] h-16 w-16 rounded-2xl border border-line/60 rotate-12 animate-float-slow [animation-delay:-5s]" />
        <div className="absolute right-[8%] bottom-[38%] h-20 w-20 rounded-full border border-line/40 animate-float [animation-delay:-2s]" />
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

        <h1 className="font-display font-semibold tracking-tight">
          <StaggerText
            text={`Hi, I’m ${profile.name}.`}
            className="block text-4xl leading-[1.06] text-white sm:text-6xl md:text-7xl lg:text-8xl"
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
    </section>
  );
}
