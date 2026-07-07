import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}

/**
 * Infinite horizontal marquee. Content is rendered twice and the track
 * translates -50%, so the loop is seamless regardless of content width.
 */
export function Marquee({ children, className, reverse = false }: MarqueeProps) {
  return (
    <div className={cn('overflow-hidden mask-fade-x', className)}>
      {/* no gap on the track itself — each half carries pr-6 so -50% lands exactly on the seam */}
      <div
        className={cn(
          'flex w-max items-center motion-reduce:animate-none',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
      >
        <div className="flex items-center gap-6 pr-6">{children}</div>
        <div className="flex items-center gap-6 pr-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
