import { profile } from '@/data/profile';
import { Reveal } from '@/components/animations/Reveal';
import { CountUp } from '@/components/animations/CountUp';
import { useParallax } from '@/hooks/useParallax';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon } from '@/components/ui/Icon';

export function About() {
  const portraitRef = useParallax<HTMLDivElement>(0.06);

  return (
    <section id="about" aria-label="About me" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Turning complex problems into refined products."
        />

        <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Portrait / identity card */}
          <div ref={portraitRef}>
            <Reveal x={-24} y={0}>
              <div className="relative mx-auto max-w-sm">
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent-blue/40 via-accent-violet/30 to-accent-cyan/40 blur-lg opacity-60"
                />
                <div className="relative overflow-hidden rounded-3xl border border-line bg-surface">
                  {profile.avatar ? (
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      loading="lazy"
                      width={448}
                      height={560}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    /* Elegant monogram placeholder until /public/avatar.jpg exists */
                    <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-surface via-surface-2 to-surface">
                      <span className="font-display text-8xl font-bold text-gradient">
                        {profile.name
                          .split(' ')
                          .map((w) => w[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 glass-strong p-4">
                    <p className="font-display text-sm font-semibold text-white">{profile.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{profile.role} · {profile.location}</p>
                  </div>
                </div>
                <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl glass-strong animate-float">
                  <Icon name="sparkle" className="h-6 w-6 text-accent-cyan" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Story + stats */}
          <div>
            <div className="space-y-5">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.12} y={24}>
                  <p className="text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
              {profile.stats.map((stat, i) => (
                <div key={stat.label} className="bg-surface p-6">
                  <Reveal delay={i * 0.1} y={16}>
                    <p className="font-display text-3xl font-semibold text-gradient md:text-4xl">
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-xs leading-snug text-faint">{stat.label}</p>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
