import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Enables the cursor-tracking spotlight (pair with TiltCard, which sets the CSS vars). */
  spotlight?: boolean;
}

/** Glass surface with hover border glow and optional cursor spotlight. */
export function GlassCard({ children, className, spotlight = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-line bg-surface/80 transition-colors duration-500 hover:border-line-strong',
        className,
      )}
    >
      {spotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(500px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgb(139 92 246 / 0.08), transparent 55%)',
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
