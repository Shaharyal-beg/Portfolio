import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  children: ReactNode;
  className?: string;
}

/** Small rounded tag for skills, tech, and labels. */
export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted transition-colors duration-300 hover:border-line-strong hover:text-white',
        className,
      )}
    >
      {children}
    </span>
  );
}
