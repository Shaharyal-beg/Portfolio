import type { CSSProperties, ElementType } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface StaggerTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay before the first word starts. */
  delay?: number;
  /** Delay between consecutive words. */
  stagger?: number;
  once?: boolean;
}

/**
 * Splits text into words and slides each up from behind an overflow mask,
 * one after another — the classic Awwwards headline entrance.
 */
export function StaggerText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.055,
  once = true,
}: StaggerTextProps) {
  const { ref, inView } = useInView({ once });
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {words.map((word, i) => {
        const style: CSSProperties = {
          transform: inView ? 'translateY(0)' : 'translateY(110%)',
          transition: `transform 0.85s var(--ease-out-expo) ${delay + i * stagger}s`,
          willChange: 'transform',
        };
        return (
          <span
            key={`${word}-${i}`}
            aria-hidden="true"
            className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
          >
            <span className="inline-block" style={style}>
              {word}
              {i < words.length - 1 ? ' ' : ''}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
