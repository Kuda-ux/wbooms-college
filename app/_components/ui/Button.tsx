'use client';

import { cn } from '@/app/_lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost' | 'accent';
  asChild?: boolean;
};

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  const variants = {
    primary:
      'bg-royal-600 text-white shadow-md shadow-royal-600/20 hover:bg-royal-700 focus:ring-royal-600',
    outline:
      'border-2 border-royal-600/90 bg-white text-royal-600 hover:bg-royal-50 focus:ring-royal-600',
    ghost: 'bg-royal-50 text-royal-600 hover:bg-royal-100',
    accent:
      'bg-accent-600 text-white shadow-md shadow-accent-600/20 hover:bg-accent-700 focus:ring-accent-600',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:hover:translate-y-0',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
