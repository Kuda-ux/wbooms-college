'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { PageHero } from './PageHero';
import { ContactForm } from './ContactForm';

const contacts = [
  { icon: MapPin, label: 'Address', value: 'Stand 2358, Mbizo 11, Kwekwe, Midlands Province, Zimbabwe' },
  { icon: Phone, label: 'Phone', value: '+263 773 870 090 / 071 368 7669' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+263 773 466 514', href: 'https://wa.me/263773466514?text=Hello%20W%20Booms%20College' },
  { icon: Mail, label: 'Email', value: 'wboomskk@gmail.com', href: 'mailto:wboomskk@gmail.com' },
  { icon: Clock, label: 'School Hours', value: '07:30 – 16:00 (Mon – Fri)' },
];

export function ContactClient() {
  return (
    <>
      <PageHero
        eyebrow='Get in Touch'
        title='Contact Us'
        highlight='Us'
        subtitle='Reach out for admissions, enquiries, or a school visit. Our team is ready to help.'
      />

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-12 lg:grid-cols-3'>
            <div className='lg:col-span-1 space-y-4'>
              {contacts.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className='premium-card rounded-2xl p-5'
                >
                  <div className='flex items-start gap-4'>
                    <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal-50'>
                      <Icon className='h-5 w-5 text-royal-600' />
                    </div>
                    <div>
                      <p className='text-xs font-semibold uppercase tracking-wider text-slate-500'>{label}</p>
                      {href ? (
                        <a href={href} className='mt-1 block font-medium text-charcoal hover:text-royal-600'>
                          {value}
                        </a>
                      ) : (
                        <p className='mt-1 font-medium text-charcoal'>{value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='premium-card rounded-3xl p-6 sm:p-10 lg:col-span-2'
            >
              <h2 className='font-heading text-2xl font-bold text-charcoal'>Send a Message</h2>
              <p className='mt-2 text-slate-600'>Fill in the form and we will respond as soon as possible.</p>
              <div className='mt-6'>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Find Us' title='Our Location' subtitle='Located in Mbizo 11, Kwekwe, in the Midlands Province of Zimbabwe.' />
          <div className='mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm'>
            <iframe
              title='W Booms College location map'
              src='https://www.openstreetmap.org/export/embed.html?bbox=29.80%2C-18.95%2C29.87%2C-18.88&layer=mapnik&marker=-18.9167%2C29.8333'
              className='h-96 w-full'
              loading='lazy'
            />
          </div>
        </div>
      </section>
    </>
  );
}
