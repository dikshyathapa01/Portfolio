'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 disabled:cursor-not-allowed disabled:opacity-70';

  const variants = {
    primary:
      'bg-gradient-to-r from-stone-700 to-stone-600 text-white shadow-[0_12px_28px_rgba(87,83,78,0.34)] hover:from-stone-800 hover:to-stone-700 dark:from-stone-300 dark:to-stone-200 dark:text-stone-950 dark:hover:from-stone-200 dark:hover:to-stone-100',
    secondary:
      'bg-gradient-to-r from-stone-100 to-stone-200/80 text-stone-800 shadow-[0_10px_24px_rgba(87,83,78,0.12)] hover:from-stone-200 hover:to-stone-200 dark:from-stone-800/80 dark:to-stone-700/70 dark:text-stone-100 dark:hover:from-stone-700 dark:hover:to-stone-700',
    outline:
      'border border-stone-300/90 bg-white/65 text-stone-700 hover:bg-stone-50/90 dark:border-stone-500/50 dark:bg-stone-900/30 dark:text-stone-200 dark:hover:bg-stone-900/50',
  };

  const sizes = {
    sm: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm',
    md: 'px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-2.5 sm:py-3.5 text-base sm:text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
