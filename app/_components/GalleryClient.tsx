'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { allImages, scienceImages, formalImages, sportsImages, type GalleryCategory } from '../data/gallery';
import { SectionHeading } from './SectionHeading';
import { cn } from '../_lib/utils';

const tabs: { key: GalleryCategory; label: string; count: number }[] = [
  { key: 'all', label: 'All Photos', count: allImages.length },
  { key: 'science', label: 'Practical Science Labs', count: scienceImages.length },
  { key: 'formal', label: 'Leadership & Prefects', count: formalImages.length },
  { key: 'sports', label: 'Sports & Casual Wear', count: sportsImages.length },
];

const categoryMeta: Record<Exclude<GalleryCategory, 'all'>, { label: string }> = {
  science: { label: 'Science Lab' },
  formal: { label: 'Leadership' },
  sports: { label: 'Sports' },
};

export function GalleryClient() {
  const [active, setActive] = useState<GalleryCategory>('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categoryMap = useMemo(
    () => ({
      science: new Set(scienceImages),
      formal: new Set(formalImages),
      sports: new Set(sportsImages),
    }),
    []
  );

  const filtered = useMemo(
    () => (active === 'all' ? allImages : allImages.filter((img) => categoryMap[active].has(img.src))),
    [active, categoryMap]
  );

  const currentIndex = useMemo(() => {
    if (!lightbox) return -1;
    return filtered.findIndex((img) => img.src === lightbox);
  }, [lightbox, filtered]);

  const getCategory = useCallback(
    (src: string) => {
      if (categoryMap.science.has(src)) return 'science';
      if (categoryMap.formal.has(src)) return 'formal';
      if (categoryMap.sports.has(src)) return 'sports';
      return null;
    },
    [categoryMap]
  );

  const next = useCallback(() => {
    if (currentIndex < 0 || !lightbox) return;
    const idx = (currentIndex + 1) % filtered.length;
    setLightbox(filtered[idx].src);
  }, [currentIndex, filtered, lightbox]);

  const prev = useCallback(() => {
    if (currentIndex < 0 || !lightbox) return;
    const idx = (currentIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[idx].src);
  }, [currentIndex, filtered, lightbox]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, next, prev]);

  return (
    <>
      <section className='relative overflow-hidden bg-charcoal py-32 text-white sm:py-40'>
        <div className='absolute inset-0 opacity-20' style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #EAB308 0%, transparent 25%), radial-gradient(circle at 80% 70%, #0D47A1 0%, transparent 25%)' }} />
        <div className='relative z-10 mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8'>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className='mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400'>
              <span className='h-1.5 w-8 rounded-full bg-gold-500' />
              Captured Moments
            </span>
            <h1 className='font-heading text-5xl font-black leading-tight sm:text-6xl lg:text-7xl'>
              School <span className='text-gold-400'>Gallery</span>
            </h1>
            <p className='mt-6 max-w-2xl text-lg text-slate-300'>
              A curated showcase of science experiments, leadership ceremonies, sports action, and everyday life at W Booms College.
            </p>
          </motion.div>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Browse' title='Our School Life' subtitle='Filter by category and click any image to open the full-screen experience.' />

          <div className='mt-10 flex flex-wrap justify-center gap-3'>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  'group inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-sm font-semibold transition-all',
                  active === tab.key
                    ? 'bg-royal-600 text-white shadow-lg shadow-royal-600/20'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-royal-200 hover:bg-royal-50'
                )}
              >
                {tab.label}
                <span
                  className={cn(
                    'rounded-full px-2.5 py-0.5 text-xs font-bold transition-colors',
                    active === tab.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  )}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <motion.div layout className='mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <AnimatePresence mode='popLayout'>
              {filtered.map((img, i) => {
                const category = getCategory(img.src);
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    key={img.src}
                    onClick={() => setLightbox(img.src)}
                    className='group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 shadow-md'
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className='object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    />
                    <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                    <div className='pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100'>
                      <div className='flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md shadow-xl transition-transform duration-300 group-hover:scale-100 scale-75'>
                        <ZoomIn className='h-7 w-7 text-white' />
                      </div>
                    </div>
                    <div className='pointer-events-none absolute bottom-0 left-0 right-0 p-5 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 translate-y-4'>
                      {category && (
                        <span className='inline-block rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal'>
                          {categoryMeta[category].label}
                        </span>
                      )}
                      <p className='mt-2 font-heading text-lg font-bold text-white'>W Booms College</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && currentIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4'
            onClick={() => setLightbox(null)}
          >
            <button
              className='absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20'
              onClick={() => setLightbox(null)}
              aria-label='Close lightbox'
            >
              <X className='h-6 w-6' />
            </button>

            <button
              className='absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-8'
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label='Previous image'
            >
              <ChevronLeft className='h-7 w-7' />
            </button>

            <button
              className='absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-8'
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label='Next image'
            >
              <ChevronRight className='h-7 w-7' />
            </button>

            <div className='relative z-10 w-full max-w-6xl' onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={lightbox}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className='relative aspect-[4/3] w-full'
                >
                  <Image
                    src={lightbox}
                    alt='Gallery preview'
                    fill
                    className='object-contain'
                    sizes='100vw'
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className='mt-4 flex items-center justify-between text-white'>
                <p className='font-heading text-lg font-semibold'>W Booms College Gallery</p>
                <p className='text-sm text-white/70'>
                  {currentIndex + 1} <span className='mx-1'>/</span> {filtered.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
