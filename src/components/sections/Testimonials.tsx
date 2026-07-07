import { testimonials } from '@/data/testimonials';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Icon } from '@/components/ui/Icon';

export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from collaborators."
          description="What the people I build with say about working together."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={`${testimonial.name}-${i}`} delay={i * 0.12} y={32}>
              <TiltCard maxTilt={4} className="h-full">
                <GlassCard spotlight className="flex h-full flex-col p-7">
                  <Icon name="quote" className="h-7 w-7 text-accent-violet/70" strokeWidth={1.2} />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-violet/30 font-display text-sm font-semibold text-white">
                      {testimonial.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-white">{testimonial.name}</span>
                      <span className="block text-xs text-faint">
                        {testimonial.role}
                        {testimonial.company ? ` · ${testimonial.company}` : ''}
                      </span>
                    </span>
                    {testimonial.placeholder && (
                      <span className="ml-auto rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-faint">
                        Sample
                      </span>
                    )}
                  </figcaption>
                </GlassCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
