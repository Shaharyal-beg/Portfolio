import { Reveal } from '@/components/animations/Reveal';
import { StaggerText } from '@/components/animations/StaggerText';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

/** Consistent animated header used by every section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={cn('mb-14 md:mb-20', centered && 'text-center', className)}>
      <Reveal y={16}>
        <span
          className={cn(
            'mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted',
          )}
        >
          <Icon name="sparkle" className="h-3.5 w-3.5 text-accent-cyan" />
          {eyebrow}
        </span>
      </Reveal>
      <StaggerText
        as="h2"
        text={title}
        className={cn(
          'block max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl',
          centered && 'mx-auto',
        )}
      />
      {description && (
        <Reveal delay={0.25} y={20}>
          <p className={cn('mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg', centered && 'mx-auto')}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
