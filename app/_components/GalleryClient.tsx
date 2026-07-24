'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { allImages, scienceImages, formalImages, sportsImages, type GalleryCategory } from '../data/gallery';
import { SectionHeading } from './SectionHeading';

type Tab = { key: GalleryCategory; label: string };

const tabs: Tab[] = [
  { key: 'all', label: 'All Photos' },
  { key: 'science', label: 'Practical Science Labs' },
  { key: 'formal', label: 'Leadership & Prefects' },
  { key: 'sports', label: 'Sports & Casual Wear' },
];

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

  return (
    <>
      <section className='bg-royal-700 py-24 text-white sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='font-heading text-4xl font-black sm:text-5xl lg:text-6xl'>School Gallery</h1>
          <p className='mt-6 max-w-2xl text-lg text-royal-100'>
            Moments from the classroom, the laboratory, leadership events, and the sports field.
          </p>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Explore' title='Our School Life' subtitle='Browse snapshots of science labs, leadership, and sports at W Booms College.' />

          <div className='mt-10 flex flex-wrap justify-center gap-2'>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === tab.key ? 'bg-royal-600 text-white' : 'bg-white text-slate-600 hover:bg-softslate border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div layout className='mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3'>
            <AnimatePresence mode='popLayout'>
              {filtered.map((img) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={img.src}
                  onClick={() => setLightbox(img.src)}
                  className='mb-4 block w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm break-inside-avoid'
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    className='w-full object-cover transition-transform duration-500 hover:scale-105'
                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4'
            onClick={() => setLightbox(null)}
          >
            <button
              className='absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20'
              onClick={() => setLightbox(null)}
              aria-label='Close lightbox'
            >
              <X className='h-6 w-6' />
            </button>
            <div className='relative h-full max-h-[85vh] w-full max-w-5xl'>
              <Image
                src={lightbox}
                alt='Gallery preview'
                fill
                className='object-contain'
                sizes='100vw'
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
