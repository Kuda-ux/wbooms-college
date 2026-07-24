'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, FlaskConical, Microscope, Beaker, BookOpen, Globe2, History, MapPin, Landmark, UserCircle, Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const subjects = [
  { name: 'Mathematics', category: 'Sciences & Technology', icon: Calculator },
  { name: 'Combined Science', category: 'Sciences & Technology', icon: FlaskConical },
  { name: 'Biology', category: 'Sciences & Technology', icon: Microscope },
  { name: 'Physics', category: 'Sciences & Technology', icon: Beaker },
  { name: 'Chemistry', category: 'Sciences & Technology', icon: FlaskConical },
  { name: 'Computer Studies', category: 'Sciences & Technology', icon: BookOpen },
  { name: 'English Language', category: 'Humanities & Languages', icon: BookOpen },
  { name: 'Shona', category: 'Humanities & Languages', icon: Globe2 },
  { name: 'History', category: 'Humanities & Languages', icon: History },
  { name: 'Geography', category: 'Humanities & Languages', icon: MapPin },
  { name: 'Heritage Studies', category: 'Humanities & Languages', icon: Landmark },
  { name: 'Sociology', category: 'Humanities & Languages', icon: UserCircle },
  { name: 'Commerce', category: 'Commercials', icon: Briefcase },
  { name: 'Principles of Accounts', category: 'Commercials', icon: Calculator },
];

const filters = ['All', 'Sciences & Technology', 'Humanities & Languages', 'Commercials'];

export function AcademicsClient() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? subjects : subjects.filter((s) => s.category === filter);

  return (
    <>
      <section className='bg-royal-700 py-24 text-white sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='font-heading text-4xl font-black sm:text-5xl lg:text-6xl'>Academics</h1>
          <p className='mt-6 max-w-2xl text-lg text-royal-100'>
            A comprehensive ZIMSEC Ordinary Level curriculum delivered across two streams from Form 1 to Form 4.
          </p>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Curriculum' title='14 ZIMSEC Subjects' subtitle='Learners are exposed to sciences, humanities, languages, and commercials to build a well-rounded academic foundation.' />

          <div className='mt-10 flex flex-wrap justify-center gap-2'>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  filter === f ? 'bg-royal-600 text-white' : 'bg-white text-slate-600 hover:bg-softslate border border-slate-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
          >
            {filtered.map((subject, i) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  key={subject.name}
                  className='premium-card group rounded-2xl p-6'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 transition-colors group-hover:bg-royal-600 group-hover:text-white'>
                    <Icon className='h-6 w-6 text-royal-600 transition-colors group-hover:text-white' />
                  </div>
                  <h3 className='mt-4 font-heading text-lg font-bold text-charcoal'>{subject.name}</h3>
                  <p className='mt-1 text-sm text-slate-500'>{subject.category}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className='premium-card rounded-3xl p-8'>
              <div className='flex h-14 w-14 items-center justify-center rounded-full bg-royal-600 text-white'>
                <GraduationCap className='h-7 w-7' />
              </div>
              <h3 className='mt-6 font-heading text-2xl font-bold text-charcoal'>ZIMSEC Ordinary Level</h3>
              <p className='mt-4 text-slate-600 leading-relaxed'>
                Our learners sit for the Zimbabwe School Examinations Council (ZIMSEC) Ordinary Level examinations at the end of Form 4.
                The curriculum is structured to develop critical thinking, practical skills, and examination confidence through
                continuous assessment, revision clinics, and supervised study.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className='space-y-6'>
              <div className='premium-card rounded-2xl p-6'>
                <h4 className='font-heading text-lg font-bold text-royal-700'>Forms 1 to 4</h4>
                <p className='mt-2 text-slate-600'>Four years of secondary education with two streams per form for focused attention.</p>
              </div>
              <div className='premium-card rounded-2xl p-6'>
                <h4 className='font-heading text-lg font-bold text-royal-700'>2 Streams Per Form</h4>
                <p className='mt-2 text-slate-600'>Smaller class sizes allow teachers to track progress and address individual learner needs.</p>
              </div>
              <div className='premium-card rounded-2xl p-6'>
                <h4 className='font-heading text-lg font-bold text-royal-700'>14 Subjects</h4>
                <p className='mt-2 text-slate-600'>A broad subject offering that keeps sciences, humanities, languages, and commercials in balance.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
