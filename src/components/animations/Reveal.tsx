import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Entrance offset in px (positive = rises from below). */
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  scale?: number;
  blur?: boolean;
}

/**
 * Scroll-reveal wrapper: fades/slides children in when they enter the
 * viewport. CSS-transition based — swap internals for framer-motion's
 * `motion.div` + `whileInView` once installed, API can stay the same.
 */
export function Reveal({
  children,
  className,
  y = 28,
  x = 0,
  delay = 0,
  duration = 0.9,
  once = true,
  scale = 1,
  blur = false,
}: RevealProps) {
  const { ref, inView } = useInView({ once });

  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0) scale(1)' : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
    filter: blur ? (inView ? 'blur(0)' : 'blur(10px)') : undefined,
    transition: `opacity ${duration}s var(--ease-out-expo) ${delay}s, transform ${duration}s var(--ease-out-expo) ${delay}s${
      blur ? `, filter ${duration}s var(--ease-out-expo) ${delay}s` : ''
    }`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}
