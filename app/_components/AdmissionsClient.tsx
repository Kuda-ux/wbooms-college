'use client';

import { motion } from 'framer-motion';
import { Check, FileText, Baby, MapPinned, Landmark, Wallet, Smartphone, CreditCard, Banknote } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ApplyForm } from './ApplyForm';

const requirements = [
  { icon: FileText, label: 'Grade 7 Result Slip', body: 'A certified copy of the final Grade 7 results slip.' },
  { icon: Baby, label: 'Birth Certificate', body: 'A clear photocopy of the learner’s birth certificate.' },
  { icon: MapPinned, label: 'Proof of Residence', body: 'A utility bill or letter confirming the learner’s residential address.' },
];

const fees = [
  { item: 'Registration', price: '$20', note: 'Once-off on enrolment' },
  { item: 'Uniform Pack', price: '$115', note: 'Shirts, tie, trousers/skirt, blazer, t-shirt, sun hat, tracksuit, ID & report covers' },
  { item: 'Tuition Fees (Day Students)', price: '$140 / term', note: 'Per term' },
  { item: 'Monthly Payment Option', price: '$50 / $45 / $45', note: 'Month 1 / Month 2 / Month 3' },
  { item: 'School Jersey', price: '$16', note: 'Optional winter wear' },
  { item: 'Anorak', price: '$30', note: 'Optional winter wear' },
];

const payments = [
  { icon: Landmark, title: 'Bank Transfer', body: 'Ecobank — Southerton Branch | W. Booms College | Acc No: 5775400009896' },
  { icon: Smartphone, title: 'EcoCash', body: '0782 838 814 (Makore T)' },
  { icon: Wallet, title: 'InnBucks', body: '0773 870 090 (Makore T)' },
  { icon: Banknote, title: 'Mukuru', body: 'Makore Tendai | ID: 50-113545T50 | Phone: 0773 870 090' },
  { icon: CreditCard, title: 'Deposit Reference', body: 'Use "Learner’s Full Name + Class" as the reference on every deposit.' },
];

export function AdmissionsClient() {
  return (
    <>
      <section className='bg-royal-700 py-24 text-white sm:py-32'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='font-heading text-4xl font-black sm:text-5xl lg:text-6xl'>Admissions & Fees</h1>
          <p className='mt-6 max-w-2xl text-lg text-royal-100'>
            Transparent costs, simple entry requirements, and a secure online enrolment process for 2026.
          </p>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Entry Requirements' title='What You Need to Enrol' subtitle='Form 1 applicants should bring the following documents for registration.' />
          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            {requirements.map(({ icon: Icon, label, body }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className='premium-card rounded-2xl p-8 text-center'
              >
                <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal-50'>
                  <Icon className='h-7 w-7 text-royal-600' />
                </div>
                <h3 className='mt-5 font-heading text-lg font-bold text-charcoal'>{label}</h3>
                <p className='mt-2 text-slate-600'>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='2026 Fees' title='Cost Breakdown' subtitle='All amounts are quoted in USD. Optional items can be purchased separately.' />
          <div className='mt-12 overflow-hidden rounded-3xl bg-white shadow-sm'>
            <table className='w-full text-left text-sm'>
              <thead className='bg-royal-700 text-white'>
                <tr>
                  <th className='px-6 py-4 font-heading font-semibold'>Item</th>
                  <th className='px-6 py-4 font-heading font-semibold'>Cost</th>
                  <th className='px-6 py-4 font-heading font-semibold'>Notes</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                {fees.map((fee) => (
                  <tr key={fee.item} className='hover:bg-slate-50'>
                    <td className='px-6 py-4 font-medium text-charcoal'>{fee.item}</td>
                    <td className='px-6 py-4 font-bold text-royal-700'>{fee.price}</td>
                    <td className='px-6 py-4 text-slate-600'>{fee.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Payment Methods' title='How to Pay' subtitle='Choose the most convenient option and always include the learner’s name and class as reference.' />
          <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {payments.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className='premium-card rounded-2xl p-6'
              >
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-royal-50'>
                  <Icon className='h-6 w-6 text-royal-600' />
                </div>
                <h3 className='mt-4 font-heading text-lg font-bold text-charcoal'>{title}</h3>
                <p className='mt-2 text-sm text-slate-600 leading-relaxed'>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-softslate py-20 sm:py-24'>
        <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
          <SectionHeading centered eyebrow='Apply Online' title='2026 Enrolment Form' subtitle='Complete the form below. Our admissions team will contact you within two working days.' />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='premium-card mt-12 rounded-3xl p-6 sm:p-10'
          >
            <ApplyForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
