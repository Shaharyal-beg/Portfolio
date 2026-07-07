import { experience } from '@/data/experience';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Chip } from '@/components/ui/Chip';
import { Icon } from '@/components/ui/Icon';

export function Experience() {
  return (
    <section id="experience" aria-label="Work experience" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I’ve made an impact."
          description="Building banking portals and financial platforms trusted by multiple institutions."
        />

        <ol className="relative space-y-10 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent-blue/60 before:via-accent-violet/40 before:to-transparent md:space-y-14 md:before:left-1/2">
          {experience.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <li key={`${item.company}-${item.role}`} className="relative md:grid md:grid-cols-2 md:gap-14">
                {/* timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="absolute h-full w-full animate-ping rounded-full bg-accent-violet/40 [animation-duration:3s]" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet ring-4 ring-bg" />
                </span>

                {/* period label (desktop, opposite column) */}
                <div
                  className={`hidden items-start md:flex ${left ? 'order-2 justify-start' : 'order-1 justify-end'}`}
                >
                  <p className="pt-1 font-display text-sm font-medium tracking-wide text-faint">
                    {item.period}
                  </p>
                </div>

                <div className={`pl-8 md:pl-0 ${left ? 'order-1' : 'order-2'}`}>
                  <Reveal x={left ? -24 : 24} y={16}>
                    <GlassCard className="p-6 md:p-7">
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-faint md:hidden">
                        {item.period}
                      </p>
                      <div className="mt-2 flex items-start justify-between gap-4 md:mt-0">
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm text-accent-cyan">
                            {item.company}
                            {item.type ? <span className="text-faint"> · {item.type}</span> : null}
                          </p>
                        </div>
                        <span className="mt-1 hidden shrink-0 text-faint sm:block">
                          <Icon name="briefcase" className="h-5 w-5" />
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                            <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.tech.map((tech) => (
                          <li key={tech}>
                            <Chip>{tech}</Chip>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
