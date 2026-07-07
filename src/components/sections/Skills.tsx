import { skillCategories } from '@/data/skills';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Chip } from '@/components/ui/Chip';

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for modern products."
          description="Technologies and practices I use daily to ship fast, reliable, beautiful software."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 2) * 0.12} y={32}>
              <TiltCard maxTilt={4} className="h-full">
                <GlassCard spotlight className="h-full p-7 md:p-8">
                  <span className="font-display text-sm font-semibold text-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{category.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill.name}>
                        <Chip>{skill.name}</Chip>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
