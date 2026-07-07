import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Animated stat number that counts up when scrolled into view. */
export function CountUp({ value, suffix = '', className, duration }: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const current = useCountUp(value, inView, duration);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {current}
      {suffix}
    </span>
  );
}
