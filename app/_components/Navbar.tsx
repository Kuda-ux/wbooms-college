'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/app/_lib/utils';
import { Button } from './ui/Button';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
          transparent
            ? 'border-white/10 bg-transparent py-4'
            : 'border-royal-100/20 bg-white/95 py-2.5 shadow-sm shadow-royal-900/5 backdrop-blur-2xl'
        )}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <Link href='/' className='group flex items-center gap-3' onClick={() => setMobileOpen(false)}>
            <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent-600 bg-white p-0.5 shadow-md shadow-accent-600/20 transition-transform group-hover:scale-105'>
              <Image
                src='/logo.jpeg'
                alt='W Booms College logo'
                fill
                className='rounded-full object-contain p-0.5'
                sizes='48px'
                style={{ filter: 'contrast(1.08) saturate(1.1)' }}
              />
            </div>
            <div className='flex flex-col'>
              <span className={cn('font-heading text-lg font-bold leading-none tracking-wide transition-colors sm:text-xl', transparent ? 'text-white' : 'text-charcoal')}>
                W BOOMS COLLEGE
              </span>
              <span className={cn('mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors', transparent ? 'text-white/70' : 'text-slate-500')}>
                Kwekwe, Zimbabwe
              </span>
            </div>
          </Link>

          <div className='hidden items-center gap-8 lg:flex'>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors',
                    transparent ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-royal-600',
                    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full',
                    active && 'text-royal-600 after:w-full'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href='/admissions'>
              <Button className='px-5 py-2 text-xs'>
                Apply Now <ChevronRight className='ml-1 h-4 w-4' />
              </Button>
            </Link>
          </div>

          <button
            className={cn(
              'inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden',
              transparent ? 'text-white hover:bg-white/10' : 'text-charcoal hover:bg-royal-50'
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
            className='fixed inset-0 z-[60] bg-royal-800 p-6 lg:hidden'
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className='group flex items-center justify-between text-left text-2xl font-bold text-white transition-colors hover:text-gold-400'
                >
                  {link.label}
                  <ChevronRight className='h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-400' />
                </Link>
              ))}
              <Link href='/admissions' onClick={() => setMobileOpen(false)}>
                <Button variant='outline' className='mt-6 w-full border-white/30 bg-white/10 py-3 text-white hover:bg-white/20 hover:text-white'>
                  Apply Now
                </Button>
              </Link>
            </div>
            <div className='absolute bottom-8 left-6 right-6'>
              <p className='text-sm text-white/50'>© {new Date().getFullYear()} W Booms College</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
