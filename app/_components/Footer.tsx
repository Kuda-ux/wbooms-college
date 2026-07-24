import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className='relative bg-royal-800 pb-8 pt-16 text-white'>
      <div className='absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-royal-600 via-gold-500 to-accent-600' />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <div className='flex items-center gap-3'>
              <div className='relative h-12 w-12 overflow-hidden rounded-full border-2 border-accent-600 bg-white p-0.5'>
                <Image
                  src='/logo.jpeg'
                  alt='W Booms College logo'
                  fill
                  className='rounded-full object-contain p-0.5'
                  sizes='48px'
                />
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
                <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
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
              <a href='mailto:wboomskk@gmail.com' aria-label='Email' className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20'>
                <Mail className='h-5 w-5' />
              </a>
            </div>
          </div>

          <div>
            <h4 className='font-heading text-sm font-semibold uppercase tracking-wider text-gold-400'>Quick Links</h4>
            <ul className='mt-4 space-y-2 text-sm text-white/80'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className='transition-colors hover:text-white'>
                    {link.label}
                  </Link>
                </li>
              ))}
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
                <span>Mon–Fri: 07:30–16:00</span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='h-4 w-4 shrink-0 text-gold-400' />
                <span>wboomskk@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-heading text-sm font-semibold uppercase tracking-wider text-gold-400'>Admissions</h4>
            <p className='mt-4 text-sm text-white/80'>Enrolment is open for Forms 1–4. Apply online or visit us for a guided tour.</p>
            <Link href='/admissions'>
              <button className='mt-5 inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20'>
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50'>
          © {new Date().getFullYear()} W Booms College. Ministry Reg. No: IC/Midlands/335. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
