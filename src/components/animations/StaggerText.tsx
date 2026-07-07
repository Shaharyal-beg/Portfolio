import { Fragment, type CSSProperties, type ElementType } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface StaggerTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay before the first unit starts. */
  delay?: number;
  /** Delay between consecutive units (words or chars). */
  stagger?: number;
  /** 'words' slides word-by-word; 'chars' letter-by-letter with a slight rotation. */
  mode?: 'words' | 'chars';
  once?: boolean;
}

/**
 * Splits text and slides each unit up from behind an overflow mask,
 * one after another — the classic Awwwards headline entrance.
 */
export function StaggerText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger,
  mode = 'words',
  once = true,
}: StaggerTextProps) {
  const { ref, inView } = useInView({ once });
  const words = text.split(' ');
  const step = stagger ?? (mode === 'chars' ? 0.028 : 0.055);

  let unit = 0;

  const unitStyle = (index: number): CSSProperties => ({
    transform: inView
      ? 'translateY(0) rotate(0deg)'
      : `translateY(110%) rotate(${mode === 'chars' ? 6 : 0}deg)`,
    transition: `transform 0.85s var(--ease-out-expo) ${delay + index * step}s`,
    willChange: 'transform',
  });

  return (
    <Tag ref={ref} className={cn(className)} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={`${word}-${wi}`}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {mode === 'chars' ? (
              word.split('').map((char, ci) => (
                <span
                  key={ci}
                  className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
                >
                  <span className="inline-block origin-bottom-left" style={unitStyle(unit++)}>
                    {char}
                  </span>
                </span>
              ))
            ) : (
              <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
                <span className="inline-block" style={unitStyle(unit++)}>
                  {word}
                </span>
              </span>
            )}
          </span>
          {wi < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  );
}
