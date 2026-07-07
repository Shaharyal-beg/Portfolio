import { useRef, type ReactNode, type MouseEvent } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  maxTilt?: number;
}

/**
 * 3D perspective tilt on hover. Also exposes the cursor position as
 * `--spotlight-x/--spotlight-y` CSS vars for spotlight/glare effects.
 */
export function TiltCard({ children, className, maxTilt = 6 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--spotlight-x', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--spotlight-y', `${(py * 100).toFixed(1)}%`);
    if (reduced) return;
    const tiltX = (py - 0.5) * -2 * maxTilt;
    const tiltY = (px - 0.5) * 2 * maxTilt;
    el.style.transform = `perspective(900px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn('transition-transform duration-300 ease-out [transform-style:preserve-3d]', className)}
    >
      {children}
    </div>
  );
}
