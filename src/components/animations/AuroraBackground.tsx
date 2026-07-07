import { cn } from '@/lib/utils';

interface AuroraBackgroundProps {
  className?: string;
  /** Adds the faint dot grid layer (used in the hero). */
  grid?: boolean;
}

/**
 * Ambient animated backdrop: drifting gradient orbs + optional grid + grain.
 * Purely decorative — GPU-composited transforms only, aria-hidden.
 */
export function AuroraBackground({ className, grid = false }: AuroraBackgroundProps) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {grid && <div className="absolute inset-0 bg-grid mask-fade-y opacity-60" />}
      <div className="absolute -top-1/4 left-[8%] h-[34rem] w-[34rem] rounded-full bg-accent-violet/18 blur-[130px] animate-aurora" />
      <div className="absolute top-[15%] right-[5%] h-[28rem] w-[28rem] rounded-full bg-accent-blue/14 blur-[120px] animate-aurora-slow" />
      <div className="absolute bottom-[-20%] left-[35%] h-[30rem] w-[30rem] rounded-full bg-accent-cyan/10 blur-[140px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute inset-0 noise opacity-[0.05]" />
    </div>
  );
}
