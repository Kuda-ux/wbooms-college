'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Award, Calendar, BookOpen, ArrowRight, Star, Shield, Users, GraduationCap, FlaskConical, Briefcase, Microscope } from 'lucide-react';
import { heroImages, administrationImages, scienceImages, sportsImages, formalImages } from '../data/gallery';
import { Button } from './ui/Button';
import { SectionHeading } from './SectionHeading';

const highlights = [
  { icon: Calendar, label: 'Established', value: '2010' },
  { icon: Award, label: 'Examination Board', value: 'ZIMSEC O-Level' },
  { icon: BookOpen, label: 'Subjects Offered', value: '14 ZIMSEC Subjects' },
];

const filteredHero = heroImages.filter((_, i) => i % 4 === 0).slice(0, 4);

const features = [
  { icon: GraduationCap, label: 'Academic Excellence', body: 'A ZIMSEC Ordinary Level curriculum with 14 subjects taught by qualified, passionate teachers.' },
  { icon: Shield, label: 'Discipline & Values', body: 'A structured environment built on respect, integrity, accountability, and Christian principles.' },
  { icon: Users, label: 'Small Class Sizes', body: 'Two streams per form allow teachers to give each learner the attention they deserve.' },
  { icon: FlaskConical, label: 'Modern Learning', body: 'Practical science labs, digital tools, and a hands-on approach that makes learning come alive.' },
  { icon: Star, label: 'Holistic Development', body: 'Leadership, sports, and cultural activities develop well-rounded, confident young people.' },
  { icon: Briefcase, label: 'Career Pathways', body: 'Balanced subject choices in sciences, humanities, languages, and commercials for future success.' },
];

const curriculum = [
  { icon: FlaskConical, label: 'Sciences & Technology', body: 'Mathematics, Combined Science, Biology, Physics, Chemistry, Computer Studies', href: '/academics', color: 'bg-blue-50 text-royal-600' },
  { icon: BookOpen, label: 'Humanities & Languages', body: 'English, Shona, History, Geography, Heritage Studies, Sociology', href: '/academics', color: 'bg-amber-50 text-gold-500' },
  { icon: Briefcase, label: 'Commercials', body: 'Commerce, Principles of Accounts and practical business-focused subjects', href: '/academics', color: 'bg-emerald-50 text-emerald-600' },
  { icon: Microscope, label: 'ZIMSEC O-Level', body: 'Four years of secondary education from Form 1 to Form 4', href: '/academics', color: 'bg-rose-50 text-rose-600' },
];

const lifeImages = [
  { src: scienceImages[0], label: 'Science Labs', href: '/gallery' },
  { src: sportsImages[0], label: 'Sports & Culture', href: '/gallery' },
  { src: formalImages[0], label: 'Leadership', href: '/gallery' },
];

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
          <SectionHeading centered eyebrow='Why Us' title='Why Choose W Booms College' subtitle='We combine academic rigour, strong values, and personal attention to help every learner succeed.' />
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {features.map(({ icon: Icon, label, body }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className='premium-card rounded-2xl p-8'
              >
                <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-royal-50 text-royal-600'>
                  <Icon className='h-7 w-7' />
                </div>
                <h3 className='mt-5 font-heading text-xl font-bold text-charcoal'>{label}</h3>
                <p className='mt-3 text-slate-600 leading-relaxed'>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Curriculum' title='Our Curriculum at a Glance' subtitle='A broad, balanced ZIMSEC programme that keeps sciences, humanities, languages, and commercials in view.' />
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {curriculum.map(({ icon: Icon, label, body, href, color }, i) => (
              <Link href={href} key={label}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className='premium-card group h-full rounded-2xl p-6'
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='mt-4 font-heading text-lg font-bold text-charcoal group-hover:text-royal-600'>{label}</h3>
                  <p className='mt-2 text-sm text-slate-600 leading-relaxed'>{body}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Student Life' title='Beyond the Classroom' subtitle='A glimpse of practical science labs, sports, and leadership moments that shape our learners.' />
          <div className='mt-12 grid gap-6 sm:grid-cols-3'>
            {lifeImages.map(({ src, label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={href} className='group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-lg'>
                  <Image src={src} alt={label} fill className='object-cover transition-transform duration-700 group-hover:scale-110' sizes='(max-width: 640px) 100vw, 33vw' />
                  <div className='absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-5'>
                    <h3 className='font-heading text-xl font-bold text-white'>{label}</h3>
                    <p className='mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gold-400'>View Gallery <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' /></p>
                  </div>
                </Link>
              </motion.div>
            ))}
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
              <h2 className='font-heading text-3xl font-bold sm:text-4xl'>2027 Admissions Are Open</h2>
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
