import type { Project } from '@/types';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Chip } from '@/components/ui/Chip';
import { Icon } from '@/components/ui/Icon';

/* Deterministic gradient cover for projects without an image yet. */
const COVERS = [
  'from-accent-blue/30 via-accent-violet/20 to-transparent',
  'from-accent-violet/30 via-accent-cyan/15 to-transparent',
  'from-accent-cyan/25 via-accent-blue/20 to-transparent',
];

function ProjectCover({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} preview`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    );
  }
  return (
    <div
      className={`relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-gradient-to-br ${COVERS[index % COVERS.length]}`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
      <span className="relative font-display text-5xl font-bold tracking-tight text-white/10 transition-all duration-700 group-hover:scale-110 group-hover:text-white/20 md:text-6xl">
        {project.title
          .split(' ')
          .map((w) => w[0])
          .join('')}
      </span>
      {project.year && (
        <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs text-muted">
          {project.year}
        </span>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work I’m proud of."
          description="From full-stack e-commerce to enterprise banking platforms — a mix of personal and professional builds."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 0.12}
              y={36}
              className={project.featured && i === 0 ? 'md:col-span-2' : undefined}
            >
              <TiltCard maxTilt={3} className="h-full">
                <GlassCard spotlight className="h-full">
                  <ProjectCover project={project} index={i} />
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {project.title}
                      </h3>
                      <div className="flex shrink-0 items-center gap-2">
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} source code`}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:text-white"
                          >
                            <Icon name="github" className="h-4 w-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live site`}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-line-strong hover:bg-white hover:text-black"
                          >
                            <Icon name="arrow-up-right" className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Chip>{tag}</Chip>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
