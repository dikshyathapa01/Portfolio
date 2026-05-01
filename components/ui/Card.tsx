'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -7, scale: 1.012 } : undefined}
      transition={{ duration: 0.28 }}
      className={cn(
        'rounded-2xl border border-stone-200/75 bg-gradient-to-br from-white/96 to-stone-50/70 p-5 shadow-[0_18px_45px_rgba(25,20,17,0.11)] ring-1 ring-white/60 transition-all dark:border-stone-600/45 dark:bg-gradient-to-br dark:from-stone-900/78 dark:to-stone-800/50 dark:text-slate-100 dark:ring-stone-200/8 sm:rounded-3xl sm:p-7 md:p-8',
        hover && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
