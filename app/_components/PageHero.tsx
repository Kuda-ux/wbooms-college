'use client';

import { motion } from 'framer-motion';
import { cn } from '../_lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function PageHero({ eyebrow, title, highlight, subtitle, align = 'left' }: PageHeroProps) {
  const before = highlight ? title.split(highlight) : [title];

  return (
    <section className='relative overflow-hidden bg-charcoal py-28 text-white sm:py-36'>
      <div
        className='absolute inset-0 opacity-25'
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #EAB308 0%, transparent 25%), radial-gradient(circle at 80% 70%, #0D47A1 0%, transparent 25%)',
        }}
      />
      <div
        className={cn(
          'relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8',
          align === 'center' && 'text-center'
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className='mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400'>
            <span className='h-1.5 w-8 rounded-full bg-gold-500' />
            {eyebrow}
          </span>
          <h1 className='font-heading text-5xl font-black leading-tight sm:text-6xl lg:text-7xl'>
            {before[0]}
            {highlight && <span className='text-gold-400'>{highlight}</span>}
            {before[1]}
          </h1>
          {subtitle && (
            <p className={cn('mt-6 max-w-2xl text-lg text-slate-300', align === 'center' && 'mx-auto')}>
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
