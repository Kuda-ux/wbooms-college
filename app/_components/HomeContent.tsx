'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Award, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import { heroImages, administrationImages } from '../data/gallery';
import { Button } from './ui/Button';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { icon: Calendar, label: 'Established', value: '2010' },
  { icon: Award, label: 'Examination Board', value: 'ZIMSEC O-Level' },
  { icon: BookOpen, label: 'Subjects Offered', value: '14 ZIMSEC Subjects' },
];

const filteredHero = heroImages.filter((_, i) => i % 4 === 0).slice(0, 4);

export function HomeContent() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % filteredHero.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section className='relative flex min-h-screen items-center justify-center overflow-hidden'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className='absolute inset-0'
          >
            <Image
              src={filteredHero[heroIndex]}
              alt='W Booms College students and campus life'
              fill
              className='object-cover'
              priority={heroIndex === 0}
              sizes='100vw'
              style={{ filter: 'brightness(0.7) contrast(1.05)' }}
            />
            <div className='absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/25' />
          </motion.div>
        </AnimatePresence>

        <div className='relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 text-white sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className='max-w-3xl'
          >
            <span className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-md'>
              <span className='h-2 w-2 rounded-full bg-gold-500' />
              Quality independent education in Kwekwe, Zimbabwe
            </span>
            <h1 className='font-heading text-5xl font-black leading-[1.05] tracking-tight text-shadow-xl sm:text-6xl lg:text-7xl'>
              Together We <span className='text-gold-400'>Light</span> the Nation
            </h1>
            <p className='mt-6 max-w-xl text-lg font-light leading-relaxed text-white/90 text-shadow sm:text-xl'>
              Quality independent secondary education in Kwekwe, Zimbabwe. Forward Ever, Backwards Never.
            </p>
            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <Link href='/admissions'>
                <Button className='gap-2 px-7 py-3 text-sm'>
                  Apply Online <ChevronRight className='h-4 w-4' />
                </Button>
              </Link>
              <Link href='/academics'>
                <Button variant='outline' className='border-white/80 bg-white/10 px-7 py-3 text-sm text-white hover:bg-white/20'>
                  Explore Academics <ArrowRight className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className='mt-16 grid max-w-2xl gap-4 sm:grid-cols-3'
          >
            {highlights.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className='rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/15'
              >
                <Icon className='h-6 w-6 text-gold-400' />
                <p className='mt-2 text-xs font-medium uppercase tracking-wider text-white/60'>{label}</p>
                <p className='font-heading text-lg font-bold text-white'>{value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce'>
          <div className='h-1.5 w-12 rounded-full bg-white/40' />
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            centered
            eyebrow='Our Message'
            title='A Word From W Booms College'
            subtitle='A warm welcome from W Booms College, where excellence, discipline, and character are cultivated every day.'
          />
          <div className='mt-12 grid items-center gap-10 lg:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl lg:mx-0'
            >
              <Image
                src={administrationImages[0] || filteredHero[0]}
                alt='W Booms College leadership and student life'
                fill
                className='object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='premium-card rounded-3xl p-8 lg:p-10'
            >
              <h3 className='font-heading text-2xl font-bold text-royal-800'>Welcome to W Booms College</h3>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                We are a registered independent secondary school in Kwekwe, dedicated to academic excellence,
                discipline, and holistic development. Our learners are equipped with the knowledge, skills, and
                values needed to become responsible citizens and future leaders.
              </p>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                Through our qualified staff, modern teaching methods, and a strong value system, we continue to
                light the path for every learner who walks through our gates.
              </p>
              <p className='mt-6 font-heading text-lg font-semibold text-royal-700'>— W Booms College</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='relative overflow-hidden rounded-3xl bg-royal-700 px-6 py-14 text-center text-white shadow-xl sm:px-12 lg:py-20'>
            <div className='absolute inset-0 opacity-25' style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #EAB308 0%, transparent 30%), radial-gradient(circle at 80% 70%, #0D47A1 0%, transparent 30%)' }} />
            <div className='absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5' />
            <div className='absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5' />
            <div className='relative z-10'>
              <h2 className='font-heading text-3xl font-bold sm:text-4xl'>2026 Admissions Are Open</h2>
              <p className='mx-auto mt-4 max-w-2xl text-lg text-royal-100'>
                Enrol your child for Form 1 to Form 4. Places are limited — secure a place today through our online application portal.
              </p>
              <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
                <Link href='/admissions'>
                  <Button className='bg-white text-royal-700 hover:bg-royal-50'>Apply Now</Button>
                </Link>
                <Link href='/contact'>
                  <Button variant='outline' className='border-white/70 text-white hover:bg-white/10'>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
