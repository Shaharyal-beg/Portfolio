import { useState } from 'react';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { AuroraBackground } from '@/components/animations/AuroraBackground';
import { Magnetic } from '@/components/animations/Magnetic';
import { Reveal } from '@/components/animations/Reveal';
import { StaggerText } from '@/components/animations/StaggerText';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — mailto link still works
    }
  };

  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden py-28 md:py-40">
      <AuroraBackground />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal y={14}>
          <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </Reveal>

        <StaggerText
          as="h2"
          text="Let’s build something exceptional together."
          className="block font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        />

        <Reveal delay={0.3} y={24}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Have a project in mind, a role to fill, or just want to talk frontend?
            My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.5} y={24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${profile.email}`} size="lg">
              <Icon name="mail" className="h-4 w-4" />
              {profile.email}
            </Button>
            <Button onClick={copyEmail} variant="outline" size="lg" aria-live="polite">
              <Icon name={copied ? 'check' : 'copy'} className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy email'}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.7} y={20}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted">
            {profile.phone && (
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Icon name="phone" className="h-4 w-4" />
                {profile.phone}
              </a>
            )}
            <span className="flex items-center gap-2">
              <Icon name="map-pin" className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.85} y={16}>
          <div className="mt-10 flex items-center justify-center gap-3">
            {socials.map((social) => (
              <Magnetic key={social.name} strength={8}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:bg-white/5 hover:text-white"
                >
                  <Icon name={social.icon} />
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
