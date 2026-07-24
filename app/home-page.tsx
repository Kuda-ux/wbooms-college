'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  FlaskConical,
  BookOpen,
  Beaker,
  Calculator,
  Globe,
  Users,
  GraduationCap,
  Award,
  Heart,
  Shield,
  Handshake,
  Target,
  Star,
  ArrowRight,
  Send,
  MessageCircle,
  CheckCircle,
  Microscope,
  History,
  Landmark,
  Globe2,
  UserCircle,
  Briefcase,
} from 'lucide-react';
import {
  allImages,
  administrationImages,
  scienceImages,
  formalImages,
  sportsImages,
  galleryTabs,
  type GalleryCategory,
} from './data/gallery';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Academics', id: 'academics' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Admissions', id: 'admissions' },
  { label: 'Contact', id: 'contact' },
];

const values = [
  { key: 'Commitment', icon: Target },
  { key: 'Integrity', icon: Shield },
  { key: 'Empathy', icon: Heart },
  { key: 'Team Work', icon: Users },
  { key: 'Accountability', icon: CheckCircle },
  { key: 'Discipline', icon: Award },
  { key: 'Honesty', icon: Star },
  { key: 'Respect', icon: Handshake },
];

const charter = [
  'Always friendly & business bound',
  'Serve parents/visitors promptly',
  'Polite telephone manners & updated records',
  'Informative reception & notice boards',
];

const subjects = [
  { name: 'Mathematics', category: 'Sciences', icon: Calculator },
  { name: 'Combined Science', category: 'Sciences', icon: FlaskConical },
  { name: 'Biology', category: 'Sciences', icon: Microscope },
  { name: 'Physics', category: 'Sciences', icon: Beaker },
  { name: 'Chemistry', category: 'Sciences', icon: FlaskConical },
  { name: 'Computer Studies', category: 'Sciences', icon: BookOpen },
  { name: 'English Language', category: 'Languages & Humanities', icon: BookOpen },
  { name: 'Shona', category: 'Languages & Humanities', icon: Globe2 },
  { name: 'History', category: 'Languages & Humanities', icon: History },
  { name: 'Geography', category: 'Languages & Humanities', icon: MapPin },
  { name: 'Heritage Studies', category: 'Languages & Humanities', icon: Landmark },
  { name: 'Sociology', category: 'Languages & Humanities', icon: UserCircle },
  { name: 'Commerce', category: 'Commercials', icon: Briefcase },
  { name: 'Principles of Accounts', category: 'Commercials', icon: Calculator },
];

const subjectFilters = ['All', 'Sciences', 'Languages & Humanities', 'Commercials'];

const categoryMap: Record<Exclude<GalleryCategory, 'all'>, Set<string>> = {
  science: new Set(scienceImages),
  formal: new Set(formalImages),
  sports: new Set(sportsImages),
};

function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'accent' | 'ghost';
}) {
  const variants = {
    primary:
      'bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-lg shadow-royal-600/30 hover:from-royal-700 hover:to-royal-900 hover:-translate-y-0.5 focus:ring-royal-600',
    outline:
      'rounded-full border-2 border-white/80 bg-white/10 px-7 text-white backdrop-blur hover:bg-white/20 focus:ring-white',
    accent:
      'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-lg shadow-accent-600/30 hover:from-accent-700 hover:to-accent-800 hover:-translate-y-0.5 focus:ring-accent-600',
    ghost:
      'rounded-full bg-royal-50 text-royal-600 hover:bg-royal-100 hover:-translate-y-0.5',
  };
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:hover:translate-y-0',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='mb-12 max-w-3xl'
    >
      {eyebrow && (
        <span className='mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-royal-600'>
          <span className='h-1.5 w-8 rounded-full bg-gradient-to-r from-royal-600 to-gold-500' />
          {eyebrow}
        </span>
      )}
      <h2 className='text-3xl font-bold text-royal-800 sm:text-4xl lg:text-5xl'>{title}</h2>
      <div className='mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-royal-600 via-gold-500 to-accent-600' />
      {subtitle && <p className='mt-4 text-lg text-slate-600'>{subtitle}</p>}
    </motion.div>
  );
}

function ApplyForm({ onClose }: { onClose?: () => void }) {
  const [form, setForm] = useState({
    studentName: '',
    formLevel: 'Form 1',
    parentName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.studentName || !form.parentName || !form.phone) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setTimeout(() => onClose?.(), 2500);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-2'>
        <label className='block text-sm font-medium text-slate-700'>
          Student Name
          <input
            required
            type='text'
            className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
            value={form.studentName}
            onChange={(e) => setForm({ ...form, studentName: e.target.value })}
            placeholder='Full name'
          />
        </label>
        <label className='block text-sm font-medium text-slate-700'>
          Form Level
          <select
            className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
            value={form.formLevel}
            onChange={(e) => setForm({ ...form, formLevel: e.target.value })}
          >
            <option>Form 1</option>
            <option>Form 2</option>
            <option>Form 3</option>
            <option>Form 4</option>
          </select>
        </label>
      </div>
      <div className='grid gap-4 sm:grid-cols-2'>
        <label className='block text-sm font-medium text-slate-700'>
          Parent / Guardian Name
          <input
            required
            type='text'
            className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
            value={form.parentName}
            onChange={(e) => setForm({ ...form, parentName: e.target.value })}
            placeholder='Parent / guardian full name'
          />
        </label>
        <label className='block text-sm font-medium text-slate-700'>
          Phone Number
          <input
            required
            type='tel'
            className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder='+263 ...'
          />
        </label>
      </div>
      <label className='block text-sm font-medium text-slate-700'>
        Email (optional)
        <input
          type='email'
          className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder='email@example.com'
        />
      </label>
      <label className='block text-sm font-medium text-slate-700'>
        Message (optional)
        <textarea
          rows={3}
          className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder='Any additional information'
        />
      </label>
      {status === 'success' && (
        <p className='rounded-lg bg-green-50 p-3 text-sm text-green-700'>
          Application received. We will contact you shortly with next steps.
        </p>
      )}
      {status === 'error' && (
        <p className='rounded-lg bg-red-50 p-3 text-sm text-red-700'>
          Something went wrong. Please try again or call us directly.
        </p>
      )}
      <div className='flex flex-col gap-3 sm:flex-row'>
        <Button type='submit' disabled={status === 'submitting'} className='w-full sm:w-auto'>
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </Button>
        {onClose && (
          <Button type='button' variant='ghost' onClick={onClose} className='w-full sm:w-auto'>
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <label className='block text-sm font-medium text-slate-700'>
        Your Name
        <input
          required
          type='text'
          className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>
      <label className='block text-sm font-medium text-slate-700'>
        Email
        <input
          type='email'
          className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>
      <label className='block text-sm font-medium text-slate-700'>
        Message
        <textarea
          required
          rows={4}
          className='mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-royal-600 focus:ring-royal-600'
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>
      {status === 'success' && (
        <p className='rounded-lg bg-green-50 p-3 text-sm text-green-700'>Message sent. Thank you.</p>
      )}
      {status === 'error' && (
        <p className='rounded-lg bg-red-50 p-3 text-sm text-red-700'>Failed to send. Please call instead.</p>
      )}
      <Button type='submit' disabled={status === 'submitting'} className='w-full sm:w-auto'>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [applyOpen, setApplyOpen] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [subjectFilter, setSubjectFilter] = useState('All');
  const [activeGallery, setActiveGallery] = useState<GalleryCategory>('all');
  const [openCharter, setOpenCharter] = useState<number | null>(null);

  const heroImages = useMemo(() => [...formalImages, ...administrationImages, ...sportsImages], []);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  }

  const filteredSubjects =
    subjectFilter === 'All' ? subjects : subjects.filter((s) => s.category === subjectFilter);

  const filteredGallery =
    activeGallery === 'all'
      ? allImages
      : allImages.filter((img) => categoryMap[activeGallery].has(img.src));

  return (
    <div className='min-h-screen bg-white' id='home'>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-royal-100/20 bg-white/95 py-2.5 shadow-lg shadow-royal-900/5 backdrop-blur-2xl'
            : 'border-white/10 bg-transparent py-4'
        )}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <a href='#home' onClick={() => scrollTo('home')} className='group flex items-center gap-3'>
            <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-500 bg-white shadow-md transition-transform group-hover:scale-105'>
              <Image src='/logo.jpeg' alt='W Booms College logo' fill className='object-contain p-1' sizes='48px' />
            </div>
            <div className='flex flex-col'>
              <span className={cn('font-heading text-lg font-bold leading-none tracking-wide transition-colors sm:text-xl', scrolled ? 'text-royal-800' : 'text-white')}>
                W BOOMS COLLEGE
              </span>
              <span className={cn('mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors', scrolled ? 'text-slate-500' : 'text-white/70')}>
                Kwekwe, Zimbabwe
              </span>
            </div>
          </a>
          <div className='hidden items-center gap-8 lg:flex'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  'relative py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors',
                  scrolled ? 'text-slate-700 hover:text-royal-600' : 'text-white/90 hover:text-white',
                  'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full'
                )}
              >
                {link.label}
              </button>
            ))}
            <Button variant={scrolled ? 'primary' : 'outline'} onClick={() => setApplyOpen(true)} className='px-6 py-2 text-sm'>
              Apply Now <ChevronRight className='ml-1 h-4 w-4' />
            </Button>
          </div>
          <button
            className={cn(
              'inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden',
              scrolled ? 'text-slate-700 hover:bg-royal-50' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileOpen(true)}
            aria-label='Open menu'
          >
            <Menu className='h-6 w-6' />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className='fixed inset-0 z-[60] bg-royal-950 p-6 lg:hidden'
          >
            <div className='flex items-center justify-between'>
              <span className='font-heading text-xl font-bold tracking-wide text-white'>W BOOMS</span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label='Close menu'
                className='rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
              >
                <X className='h-6 w-6' />
              </button>
            </div>
            <div className='mt-12 flex flex-col gap-6'>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className='group flex items-center justify-between text-left text-2xl font-bold text-white transition-colors hover:text-gold-400'
                >
                  {link.label}
                  <ChevronRight className='h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-400' />
                </button>
              ))}
              <Button
                variant='outline'
                onClick={() => setApplyOpen(true)}
                className='mt-6 w-full border-white/30 bg-white/10 py-3 text-white hover:bg-white/20 hover:text-white'
              >
                Apply Now
              </Button>
            </div>
            <div className='absolute bottom-8 left-6 right-6'>
              <p className='text-sm text-white/50'>© {new Date().getFullYear()} W Booms College</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className='relative flex min-h-screen items-center justify-center overflow-hidden'>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className='absolute inset-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className='absolute inset-0'
            >
              <Image
                src={heroImages[heroIndex]}
                alt='W Booms College campus life'
                fill
                className='object-cover'
                priority={heroIndex === 0}
                sizes='100vw'
                style={{ filter: 'brightness(0.75) contrast(1.05)' }}
              />
              <div className='absolute inset-0 bg-gradient-to-br from-royal-950/95 via-royal-900/90 to-royal-800/70' />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className='relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-36 text-left text-white sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='max-w-3xl'
          >
            <span className='mb-4 inline-block rounded-full border border-gold-400/50 bg-gradient-to-r from-royal-900/60 to-royal-800/40 px-5 py-2 text-sm font-semibold tracking-wider text-gold-300 text-shadow backdrop-blur-md shadow-lg'>
              Ministry Reg. No: IC/Midlands/335
            </span>
            <h1 className='font-heading text-5xl font-black leading-[1.05] tracking-tight text-shadow-xl drop-shadow-2xl sm:text-6xl lg:text-7xl'>
              Together We Light <span className='text-gold-300 text-shadow-lg'>the Nation</span>
            </h1>
            <p className='mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/95 text-shadow sm:text-xl'>
              Forward Ever, Backwards Never. Quality Independent Secondary Education in Kwekwe, Zimbabwe.
            </p>
            <div className='mt-8 flex flex-col justify-start gap-4 sm:flex-row'>
              <Button onClick={() => scrollTo('academics')} className='gap-2'>
                Explore Academics <ChevronRight className='h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                onClick={() => scrollTo('admissions')}
                className='border-white text-white hover:bg-white/10 hover:text-white'
              >
                Book School Visit
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='glass-panel mx-auto mt-16 grid max-w-4xl gap-4 rounded-3xl p-5 sm:grid-cols-2 lg:grid-cols-4'
          >
            {[
              ['Established', '2010'],
              ['Ministry Reg. No', 'IC/Midlands/335'],
              ['Exam Board', 'ZIMSEC (O-Level)'],
              ['Curriculum', '14 Subjects, Forms 1-4'],
            ].map(([label, value]) => (
              <div key={label} className='rounded-xl bg-white/10 p-3 text-left text-shadow transition-colors hover:bg-white/15'>
                <p className='text-xs font-medium uppercase tracking-wider text-white/80'>{label}</p>
                <p className='mt-1 font-heading text-lg font-bold text-white'>{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='py-20 sm:py-28' id='leadership'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='premium-card relative overflow-hidden rounded-3xl shadow-2xl'
            >
              <div className='aspect-[4/5] w-full sm:aspect-square'>
                <Image
                  src={administrationImages[0] || '/logo.jpeg'}
                  alt='Headmaster and prefects'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
              </div>
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-royal-900/90 to-transparent p-6'>
                <p className='font-heading text-xl font-bold text-white'>Headmaster & Leadership</p>
                <p className='text-sm text-white/80'>W Booms College, Kwekwe</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className='text-sm font-semibold uppercase tracking-widest text-royal-600'>Welcome</span>
              <h2 className='mt-2 font-heading text-3xl font-bold text-royal-800 sm:text-4xl'>
                A Word From the Headmaster
              </h2>
              <p className='mt-6 text-lg leading-relaxed text-slate-600'>
                At W Booms College we are committed to academic excellence, discipline and the holistic character
                building of every learner. Our dedicated staff, structured curriculum and strong values create an
                environment where young people are empowered to become responsible citizens and future leaders.
              </p>
              <p className='mt-4 text-lg leading-relaxed text-slate-600'>
                We believe that when learners are challenged, supported and inspired, they rise to light the nation.
              </p>
              <div className='mt-8 flex gap-4'>
                <Button onClick={() => scrollTo('about')} variant='outline'>
                  Our Values
                </Button>
                <Button onClick={() => setApplyOpen(true)}>Apply Online</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-slate-50 py-20 sm:py-28' id='about'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='About Us'
            title='Vision, Mission & Core Values'
            subtitle='We exist to provide quality independent secondary education rooted in discipline, excellence and service.'
          />

          <div className='grid gap-6 md:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='premium-card rounded-2xl p-8'
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-md'>
                <Target className='h-6 w-6' />
              </div>
              <h3 className='font-heading text-2xl font-bold text-royal-800'>Vision</h3>
              <p className='mt-3 text-slate-600'>
                To be a leading independent secondary school producing disciplined, academically excellent and morally
                upright citizens who contribute positively to the nation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='premium-card rounded-2xl p-8'
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-md'>
                <Globe className='h-6 w-6' />
              </div>
              <h3 className='font-heading text-2xl font-bold text-royal-800'>Mission</h3>
              <p className='mt-3 text-slate-600'>
                To provide a learner-centred, values-driven education that develops intellectual competence, practical
                skills and character through dedicated teaching, modern resources and strong community partnership.
              </p>
            </motion.div>
          </div>

          <div className='mt-16'>
            <h3 className='mb-8 text-center font-heading text-2xl font-bold text-royal-800'>Core Values</h3>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.key}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className='premium-card group rounded-2xl p-6'
                  >
                    <div className='mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-md group-hover:from-royal-700 group-hover:to-royal-900'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <p className='font-heading font-semibold text-royal-800'>{v.key}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className='mt-16'>
            <h3 className='mb-8 text-center font-heading text-2xl font-bold text-royal-800'>Our Promise to You</h3>
            <div className='mx-auto max-w-3xl space-y-3'>
              {charter.map((item, i) => (
                <div
                  key={i}
                  className='rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md'
                >
                  <button
                    onClick={() => setOpenCharter(openCharter === i ? null : i)}
                    className='flex w-full items-center justify-between text-left'
                  >
                    <span className='font-medium text-royal-800'>{item}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-royal-600 transition-transform',
                        openCharter === i && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openCharter === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className='overflow-hidden'
                      >
                        <p className='pt-3 text-sm text-slate-600'>
                          We commit to upholding this standard in every interaction with parents, learners and visitors.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-28' id='academics'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Academics'
            title='Curriculum & Subjects'
            subtitle='14 ZIMSEC O-Level subjects across Forms 1-4, taught by dedicated educators in two streams per form.'
          />

          <div className='mb-10 flex flex-wrap gap-2'>
            {subjectFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSubjectFilter(filter)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  subjectFilter === filter
                    ? 'bg-royal-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div layout className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            <AnimatePresence>
              {filteredSubjects.map((subject, i) => {
                const Icon = subject.icon;
                return (
                  <motion.div
                    key={subject.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className='premium-card flex items-start gap-4 rounded-2xl p-6'
                  >
                    <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-800 text-white shadow-md'>
                      <Icon className='h-6 w-6' />
                    </div>
                    <div>
                      <h4 className='font-heading text-lg font-semibold text-royal-800'>{subject.name}</h4>
                      <p className='text-sm text-slate-500'>{subject.category}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='mt-16 rounded-3xl bg-gradient-to-br from-royal-700 via-royal-800 to-royal-900 p-8 text-center text-white shadow-2xl sm:p-12'
          >
            <GraduationCap className='mx-auto h-12 w-12 text-gold-400' />
            <h3 className='mt-4 font-heading text-2xl font-bold'>End-of-Form-4 ZIMSEC Ordinary Level Examination</h3>
            <p className='mx-auto mt-4 max-w-2xl text-white/80'>
              Our learners write the ZIMSEC O-Level examinations prepared through rigorous academics, continuous
              assessment and dedicated revision programmes. We celebrate consistent improvement and learner success.
            </p>
          </motion.div>
        </div>
      </section>

      <section className='bg-slate-50 py-20 sm:py-28' id='gallery'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Student Life'
            title='Moments That Define Us'
            subtitle='A glimpse into practical learning, formal identity and co-curricular life at W Booms College.'
          />

          <div className='mb-8 flex flex-wrap gap-2'>
            {galleryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveGallery(tab.key)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  activeGallery === tab.key
                    ? 'bg-royal-600 text-white'
                    : 'bg-white text-slate-700 shadow-sm hover:bg-royal-50'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div layout className='columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3'>
            <AnimatePresence>
              {filteredGallery.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className='premium-card group relative cursor-zoom-in overflow-hidden rounded-2xl break-inside-avoid'
                  onClick={() => setLightbox(img.src)}
                >
                  <div className='relative w-full' style={{ paddingBottom: i % 3 === 0 ? '120%' : i % 3 === 1 ? '80%' : '100%' }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-110'
                      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    />
                  </div>
                  <div className='absolute inset-0 flex items-end bg-gradient-to-t from-royal-900/90 via-royal-900/20 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100'>
                    <span className='rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm'>
                      {img.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className='py-20 sm:py-28' id='admissions'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                eyebrow='Admissions'
                title='Enrol at W Booms College'
                subtitle='Join a community of excellence. Complete the online application form and our admissions team will guide you through the next steps.'
              />
              <div className='space-y-6 text-slate-600'>
                <p>
                  We enrol learners from Form 1 to Form 4. Our admissions process is straightforward, transparent and
                  designed to give every learner a fair opportunity to access quality education.
                </p>
                <ul className='space-y-3'>
                  {[
                    'Complete the online application form',
                    'Receive an acknowledgement with reference number',
                    'Attend an admissions interview / assessment',
                    'Finalise enrolment and secure a place',
                  ].map((step, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <span className='mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-royal-100 text-xs font-bold text-royal-600'>
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <Button variant='accent' onClick={() => setApplyOpen(true)} className='mt-4 gap-2'>
                  <Send className='h-4 w-4' /> Apply Online Now
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='premium-card rounded-2xl p-6 sm:p-8'
            >
              <h3 className='mb-6 font-heading text-2xl font-bold text-royal-800'>Online Application Form</h3>
              <ApplyForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-slate-50 py-20 sm:py-28' id='contact'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading
            eyebrow='Contact'
            title='Get in Touch'
            subtitle='We would love to hear from you. Visit us, call, email or send a message.'
          />

          <div className='grid gap-8 lg:grid-cols-2'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='space-y-4'
            >
              <div className='premium-card flex items-start gap-4 rounded-2xl p-5'>
                <MapPin className='mt-1 h-6 w-6 shrink-0 text-royal-600' />
                <div>
                  <h4 className='font-heading font-semibold text-royal-800'>Physical Address</h4>
                  <p className='mt-1 text-slate-600'>
                    Stand 2358, Mbizo 11, Kwekwe, Midlands Province, Zimbabwe
                    <br />
                    <span className='text-sm text-slate-500'>
                      GPS: 18°55′0″S, 29°50′0″E
                    </span>
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm'>
                <Phone className='mt-1 h-6 w-6 shrink-0 text-royal-600' />
                <div>
                  <h4 className='font-heading font-semibold text-royal-800'>Phone</h4>
                  <p className='mt-1 text-slate-600'>+263 773 870 090</p>
                </div>
              </div>
              <a
                href='https://wa.me/263773466514?text=Hello%20W%20Booms%20College%2C%20I%20would%20like%20to%20inquire%20about%20admissions.'
                target='_blank'
                rel='noreferrer'
                className='flex items-start gap-4 rounded-2xl bg-green-50 p-5 shadow-sm transition-all hover:-translate-y-1 hover:bg-green-100'
              >
                <MessageCircle className='mt-1 h-6 w-6 shrink-0 text-green-700' />
                <div>
                  <h4 className='font-heading font-semibold text-green-800'>WhatsApp</h4>
                  <p className='mt-1 text-green-700'>+263 773 466 514</p>
                </div>
              </a>
              <div className='flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm'>
                <Mail className='mt-1 h-6 w-6 shrink-0 text-royal-600' />
                <div>
                  <h4 className='font-heading font-semibold text-royal-800'>Email</h4>
                  <p className='mt-1 text-slate-600'>wboomskk@gmail.com</p>
                </div>
              </div>
              <div className='flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm'>
                <Clock className='mt-1 h-6 w-6 shrink-0 text-royal-600' />
                <div>
                  <h4 className='font-heading font-semibold text-royal-800'>School Hours</h4>
                  <p className='mt-1 text-slate-600'>07:30 – 16:00 (Mon – Fri)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='space-y-8'
            >
              <div className='overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm'>
                <iframe
                  title='W Booms College location'
                  src='https://www.openstreetmap.org/export/embed.html?bbox=29.80%2C-18.95%2C29.87%2C-18.88&layer=mapnik&marker=-18.9167%2C29.8333'
                  className='h-80 w-full'
                  loading='lazy'
                />
              </div>
              <div className='premium-card rounded-2xl p-6 sm:p-8'>
                <h3 className='mb-4 font-heading text-xl font-bold text-royal-800'>Send us a message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className='relative bg-royal-950 pb-8 pt-16 text-white'>
        <div className='absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-royal-600 via-gold-500 to-accent-600' />
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <div className='flex items-center gap-3'>
                <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-500 bg-white'>
                  <Image src='/logo.jpeg' alt='W Booms College logo' fill className='object-contain p-1' sizes='48px' />
                </div>
                <span className='font-heading text-lg font-bold'>W BOOMS COLLEGE</span>
              </div>
              <p className='mt-4 text-sm text-white/80'>Together We Light the Nation.</p>
              <p className='text-sm text-white/60'>Forward Ever, Backwards Never.</p>
              <div className='mt-6 flex gap-3'>
                <a
                  href='https://www.facebook.com/WBoomsCollegeKwekwe'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Facebook'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'
                >
                  <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'><path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/></svg>
                </a>
                <a
                  href='https://wa.me/263773466514?text=Hello%20W%20Booms%20College'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='WhatsApp'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'
                >
                  <MessageCircle className='h-5 w-5' />
                </a>
                <a
                  href='mailto:admin@wbooms.ac.zw'
                  aria-label='Email'
                  className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'
                >
                  <Mail className='h-5 w-5' />
                </a>
              </div>
            </div>
            <div>
              <h4 className='font-heading text-sm font-semibold uppercase tracking-wider text-gold-400'>Quick Links</h4>
              <ul className='mt-4 space-y-2 text-sm text-white/80'>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollTo(link.id)} className='transition-colors hover:text-white'>
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={() => setApplyOpen(true)} className='transition-colors hover:text-white'>Apply Online</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-heading text-sm font-semibold uppercase tracking-wider text-gold-400'>Contact</h4>
              <ul className='mt-4 space-y-3 text-sm text-white/80'>
                <li className='flex items-start gap-3'>
                  <MapPin className='mt-0.5 h-4 w-4 shrink-0 text-gold-400' />
                  <span>Stand 2358, Mbizo 11, Kwekwe, Zimbabwe</span>
                </li>
                <li className='flex items-center gap-3'>
                  <Phone className='h-4 w-4 shrink-0 text-gold-400' />
                  <span>+263 773 870 090</span>
                </li>
                <li className='flex items-center gap-3'>
                  <Clock className='h-4 w-4 shrink-0 text-gold-400' />
                  <span>Mon–Fri: 08:00–16:30</span>
                </li>
                <li className='flex items-center gap-3'>
                  <Mail className='h-4 w-4 shrink-0 text-gold-400' />
                  <span>admin@wbooms.ac.zw</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-heading text-sm font-semibold uppercase tracking-wider text-gold-400'>Admissions</h4>
              <p className='mt-4 text-sm text-white/80'>Enrolment is open for Forms 1–4. Apply online or visit us for a guided tour.</p>
              <Button onClick={() => setApplyOpen(true)} className='mt-5 px-5 py-2 text-xs'>
                Apply Online
              </Button>
            </div>
          </div>
          <div className='mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50'>
            © {new Date().getFullYear()} W Booms College. Ministry Reg. No: IC/Midlands/335. All rights reserved.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {applyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[70] flex items-center justify-center bg-royal-900/70 p-4 backdrop-blur-sm'
            onClick={() => setApplyOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className='max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl border border-royal-100/30 sm:p-8'
            >
              <div className='mb-6 flex items-center justify-between'>
                <h3 className='font-heading text-2xl font-bold text-royal-800'>Online Application</h3>
                <button onClick={() => setApplyOpen(false)} aria-label='Close'>
                  <X className='h-6 w-6 text-slate-500' />
                </button>
              </div>
              <ApplyForm onClose={() => setApplyOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={lightbox}
              alt='Gallery preview'
              className='max-h-screen max-w-full rounded-lg object-contain shadow-2xl'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
