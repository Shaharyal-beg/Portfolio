import { techStackRowA, techStackRowB } from '@/data/techstack';
import { Marquee } from '@/components/animations/Marquee';
import { Reveal } from '@/components/animations/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { TechItem } from '@/types';

function TechPill({ item }: { item: TechItem }) {
  return (
    <span className="flex items-center gap-3 rounded-full border border-line bg-surface px-6 py-3 font-display text-sm font-medium text-muted transition-colors duration-300 hover:border-line-strong hover:text-white md:text-base">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" />
      {item.name}
    </span>
  );
}

export function TechStack() {
  return (
    <section id="stack" aria-label="Tech stack" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="The tools behind the work."
          align="center"
        />
      </div>

      <Reveal y={24}>
        <div className="space-y-5">
          <Marquee>
            {techStackRowA.map((item) => (
              <TechPill key={item.name} item={item} />
            ))}
          </Marquee>
          <Marquee reverse>
            {techStackRowB.map((item) => (
              <TechPill key={item.name} item={item} />
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
