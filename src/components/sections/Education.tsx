import { education } from '@/data/education';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Icon } from '@/components/ui/Icon';

export function Education() {
  return (
    <section id="education" aria-label="Education" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education" title="Where it all started." />

        <div className="grid gap-5">
          {education.map((item, i) => (
            <Reveal key={item.institution} delay={i * 0.1} y={28}>
              <GlassCard className="p-7 md:p-9">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-5">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-line bg-gradient-to-br from-accent-blue/15 to-accent-violet/15">
                      <Icon name="graduation" className="h-6 w-6 text-accent-cyan" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {item.degree}
                        {item.field ? ` in ${item.field}` : ''}
                      </h3>
                      <p className="mt-1.5 text-sm text-accent-cyan">{item.institution}</p>
                      {item.details && (
                        <ul className="mt-4 space-y-2">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                              <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="shrink-0 text-left md:text-right">
                    <p className="font-display text-sm font-medium text-white">{item.period}</p>
                    {item.location && <p className="mt-1 text-sm text-faint">{item.location}</p>}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
