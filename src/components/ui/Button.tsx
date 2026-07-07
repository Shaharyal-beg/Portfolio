import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Magnetic } from '@/components/animations/Magnetic';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'outline' | 'ghost';

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 select-none';

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-white text-black hover:bg-white/90 hover:shadow-[0_0_32px_rgb(255_255_255/0.25)]',
  outline:
    'border border-line-strong text-white hover:border-white/40 hover:bg-white/5',
  ghost: 'text-muted hover:text-white hover:bg-white/5',
};

const SIZES = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: keyof typeof SIZES;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Pill button/link with optional magnetic hover. */
export function Button({
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(BASE, VARIANTS[variant], SIZES[size], className);

  const element =
    rest.href !== undefined ? (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    ) : (
      <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    );

  return magnetic ? <Magnetic>{element}</Magnetic> : element;
}
