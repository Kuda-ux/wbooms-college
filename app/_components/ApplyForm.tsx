'use client';

import { useState } from 'react';
import { cn } from '@/app/_lib/utils';
import { Button } from './ui/Button';

interface ApplyFormProps {
  onClose?: () => void;
  className?: string;
}

export function ApplyForm({ onClose, className }: ApplyFormProps) {
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

  const inputClass =
    'mt-1 block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-charcoal placeholder:text-slate-400 focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600';

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-4', className)}>
      <div className='grid gap-4 sm:grid-cols-2'>
        <label className='block text-sm font-medium text-slate-700'>
          Student Name
          <input
            required
            type='text'
            className={inputClass}
            value={form.studentName}
            onChange={(e) => setForm({ ...form, studentName: e.target.value })}
            placeholder='Full name'
          />
        </label>
        <label className='block text-sm font-medium text-slate-700'>
          Form Level
          <select
            className={inputClass}
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
            className={inputClass}
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
            className={inputClass}
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
          className={inputClass}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder='email@example.com'
        />
      </label>
      <label className='block text-sm font-medium text-slate-700'>
        Message (optional)
        <textarea
          rows={3}
          className={inputClass}
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
