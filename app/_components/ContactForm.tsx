'use client';

import { useState } from 'react';
import { cn } from '@/app/_lib/utils';
import { Button } from './ui/Button';

export function ContactForm({ className }: { className?: string }) {
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

  const inputClass =
    'mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-charcoal placeholder:text-slate-400 focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600';

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <label className='block text-sm font-medium text-slate-700'>
        Your Name
        <input
          required
          type='text'
          className={inputClass}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder='Your full name'
        />
      </label>
      <label className='block text-sm font-medium text-slate-700'>
        Email
        <input
          type='email'
          className={inputClass}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder='email@example.com'
        />
      </label>
      <label className='block text-sm font-medium text-slate-700'>
        Message
        <textarea
          required
          rows={4}
          className={inputClass}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder='How can we help?'
        />
      </label>
      {status === 'success' && (
        <p className='rounded-lg bg-green-50 p-3 text-sm text-green-700'>Message sent. Thank you for contacting W Booms College.</p>
      )}
      {status === 'error' && (
        <p className='rounded-lg bg-red-50 p-3 text-sm text-red-700'>Failed to send. Please call or WhatsApp us directly.</p>
      )}
      <Button type='submit' disabled={status === 'submitting'} className='w-full sm:w-auto'>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
