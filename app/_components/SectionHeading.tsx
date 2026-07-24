'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/_lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = false, light = false, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', centered && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <span className='mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-royal-600'>
          <span className='h-1.5 w-8 rounded-full bg-gradient-to-r from-royal-600 to-gold-500' />
          {eyebrow}
        </span>
      )}
      <h2 className={cn('text-3xl font-bold sm:text-4xl lg:text-5xl', light ? 'text-white' : 'text-charcoal')}>
        {title}
      </h2>
      <div className={cn('mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-royal-600 to-gold-500', centered && 'mx-auto')} />
      {subtitle && (
        <p className={cn('mt-4 max-w-2xl text-lg', centered && 'mx-auto', light ? 'text-white/80' : 'text-slate-600')}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
