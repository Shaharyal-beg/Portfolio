import { useRef, type ReactNode, type MouseEvent } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Max translation in px toward the cursor. */
  strength?: number;
}

/** Magnetic hover: the wrapped element gently follows the cursor, then springs back. */
export function Magnetic({ children, className, strength = 14 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    el.style.transform = `translate3d(${relX * strength}px, ${relY * strength}px, 0)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn('inline-block transition-transform duration-300 ease-out', className)}
    >
      {children}
    </div>
  );
}
