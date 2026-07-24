'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Shield, Heart, Users, CheckCircle, Award, Star, Handshake } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PageHero } from './PageHero';
import { formalImages, administrationImages } from '../data/gallery';

const values = [
  { key: 'Commitment', icon: Target, text: 'We are dedicated to the success and well-being of every learner.' },
  { key: 'Integrity', icon: Shield, text: 'Honesty and strong moral principles guide all our actions.' },
  { key: 'Empathy', icon: Heart, text: 'We listen, understand, and support each member of our community.' },
  { key: 'Team Work', icon: Users, text: 'Collaboration between learners, staff, and parents drives achievement.' },
  { key: 'Accountability', icon: CheckCircle, text: 'We take ownership of our responsibilities and results.' },
  { key: 'Discipline', icon: Award, text: 'Order, respect, and self-control form the backbone of our school culture.' },
  { key: 'Honesty', icon: Star, text: 'Truthfulness in words and deeds is expected from everyone.' },
  { key: 'Respect', icon: Handshake, text: 'We honour the dignity, diversity, and rights of all people.' },
];

const charterItems = [
  { title: 'Friendly, business-bound service', body: 'Every parent, learner, and visitor is received with warmth, courtesy, and professionalism at all times.' },
  { title: 'Prompt service to parents & visitors', body: 'Queries are attended to promptly during school hours and directed to the right office without unnecessary delays.' },
  { title: 'Polite telephone manners', body: 'All telephone communication is handled politely, and accurate messages are passed to the relevant staff immediately.' },
  { title: 'Updated records', body: 'Learner, academic, and financial records are kept secure, up to date, and readily available when required.' },
  { title: 'Informative reception & notice boards', body: 'Notice boards, handbooks, and assemblies are used to keep the school community well informed.' },
];

export function AboutClient() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow='About Us'
        title='About W Booms College'
        highlight='W Booms College'
        subtitle='A Ministry-registered independent secondary school lighting the way for learners in Kwekwe and beyond.'
      />

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl'
            >
              <Image src={formalImages[0] || '/logo.jpeg'} alt='W Booms College identity' fill className='object-cover' sizes='(max-width: 1024px) 100vw, 50vw' />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className='mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-royal-600'>
                <span className='h-1.5 w-8 rounded-full bg-gradient-to-r from-royal-600 to-gold-500' /> History & Identity
              </span>
              <h2 className='font-heading text-3xl font-bold text-charcoal sm:text-4xl'>A Tradition of Excellence</h2>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                W Booms College was established in 2010 and is registered with the Ministry of Primary and Secondary Education
                (Reg. No: IC/Midlands/335). We have grown into a trusted centre for ZIMSEC Ordinary Level education,
                serving families across Kwekwe with a balanced blend of academic rigour and character development.
              </p>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                Our identity is rooted in the belief that education is more than examination results — it is about raising
                responsible, confident, and capable young people prepared for tertiary study and the world of work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Our Purpose' title='Vision & Mission' subtitle='We exist to nurture lifelong learners and ethical leaders.' />
          <div className='mt-12 grid gap-8 md:grid-cols-2'>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='premium-card rounded-3xl p-8'>
              <h3 className='font-heading text-2xl font-bold text-royal-700'>Vision</h3>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                To be a leading independent secondary school that produces academically excellent, morally upright, and
                socially responsible citizens who positively transform their communities.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className='premium-card rounded-3xl p-8'>
              <h3 className='font-heading text-2xl font-bold text-royal-700'>Mission</h3>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                To provide a holistic, learner-centred education anchored on discipline, Christian values, innovation, and
                respect, preparing every learner for the challenges and opportunities of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Values' title='What We Stand For' subtitle='Eight values that shape every learner and educator at W Booms College.' />
          <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {values.map(({ key, icon: Icon, text }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className='premium-card rounded-2xl p-6 text-center'
              >
                <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-royal-50'>
                  <Icon className='h-6 w-6 text-royal-600' />
                </div>
                <h4 className='mt-4 font-heading text-lg font-bold text-charcoal'>{key}</h4>
                <p className='mt-2 text-sm text-slate-600'>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Promise' title='Our Client Charter' subtitle='What parents and students can expect from us every day.' />
          <div className='mt-12 mx-auto max-w-3xl space-y-4'>
            {charterItems.map((item, i) => (
              <div key={i} className='premium-card rounded-2xl overflow-hidden'>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className='flex w-full items-center justify-between p-5 text-left font-heading font-semibold text-charcoal hover:text-royal-600'
                >
                  {item.title}
                  <ChevronDown className={`h-5 w-5 text-royal-600 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className='overflow-hidden'
                    >
                      <p className='px-5 pb-5 text-slate-600'>{item.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
