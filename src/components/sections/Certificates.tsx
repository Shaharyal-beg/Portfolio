import { certificates } from '@/data/certificates';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Icon } from '@/components/ui/Icon';

export function Certificates() {
  return (
    <section id="certificates" aria-label="Certificates" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Credentials & recognition."
          description="Certifications in progress — this space is reserved for what’s next."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <Reveal key={`${cert.title}-${i}`} delay={i * 0.1} y={28}>
              <GlassCard className="h-full p-6">
                {cert.placeholder ? (
                  /* "Coming soon" treatment for placeholder entries */
                  <div className="flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl shimmer-surface">
                      <Icon name="award" className="h-5 w-5 text-faint" />
                    </div>
                    <div className="mt-5 h-4 w-3/4 rounded shimmer-surface" />
                    <div className="mt-3 h-3 w-1/2 rounded shimmer-surface" />
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-faint">Coming soon</p>
                  </div>
                ) : (
                  <div className="flex h-full flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.03]">
                      <Icon name="award" className="h-5 w-5 text-accent-cyan" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {cert.issuer}
                      {cert.date ? <span className="text-faint"> · {cert.date}</span> : null}
                    </p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm text-accent-cyan transition-colors hover:text-white"
                      >
                        View credential
                        <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
