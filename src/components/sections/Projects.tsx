import type { Project } from '@/types';
import { projects } from '@/data/projects';
import { GhostText } from '@/components/animations/GhostText';
import { Reveal } from '@/components/animations/Reveal';
import { TiltCard } from '@/components/animations/TiltCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Chip } from '@/components/ui/Chip';
import { Icon } from '@/components/ui/Icon';

/* Deterministic gradient accent for projects without an image yet. */
const COVERS = [
  'from-accent-blue/30 via-accent-violet/20 to-transparent',
  'from-accent-violet/30 via-accent-cyan/15 to-transparent',
  'from-accent-cyan/25 via-accent-blue/20 to-transparent',
];

function monogram(title: string): string {
  return title
    .split(' ')
    .map((w) => w[0])
    .join('');
}

function ProjectLinks({ project }: { project: Project }) {
  return (
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
  );
}

/* Featured project: side-by-side split keeps the section short. */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <TiltCard maxTilt={2}>
      <GlassCard spotlight>
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="relative h-52 overflow-hidden md:h-auto md:min-h-[19rem]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="view-pan h-full w-full object-cover"
              />
            ) : (
              <div className={`view-pan flex h-full w-full items-center justify-center bg-gradient-to-br ${COVERS[0]}`}>
                <span className="font-display text-6xl font-bold tracking-tight text-white/10 md:text-7xl">
                  {monogram(project.title)}
                </span>
              </div>
            )}
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
            <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs text-white">
              Featured
            </span>
            {project.year && (
              <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs text-muted">
                {project.year}
              </span>
            )}
          </div>
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>
              <ProjectLinks project={project} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {project.description}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </TiltCard>
  );
}

/* Remaining projects: compact tiles — no tall cover, just a gradient badge. */
function CompactProject({ project, index }: { project: Project; index: number }) {
  return (
    <TiltCard maxTilt={4} className="h-full">
      <GlassCard spotlight className="flex h-full flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${COVERS[index % COVERS.length]} font-display text-sm font-bold text-white/70`}
          >
            {monogram(project.title)}
          </span>
          <ProjectLinks project={project} />
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          {project.year && <span className="text-xs text-faint">{project.year}</span>}
        </div>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
      </GlassCard>
    </TiltCard>
  );
}

export function Projects() {
  const [first, ...rest] = projects;

  return (
    <section id="projects" aria-label="Projects" className="relative py-28 md:py-36">
      {/* scroll-driven ghost lettering behind the section */}
      <GhostText text="Selected Work" className="top-8 md:top-4" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work I’m proud of."
          description="From full-stack e-commerce to enterprise banking platforms — a mix of personal and professional builds."
        />

        {first && (
          <Reveal y={36}>
            <FeaturedProject project={first} />
          </Reveal>
        )}

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 0.1} y={28}>
              <CompactProject project={project} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
