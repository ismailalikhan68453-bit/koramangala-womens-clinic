import { useState } from 'react'
import { CalendarPlus, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { doctors } from '../data/clinic'
import { supabase } from '../lib/supabaseClient'
import Reveal from './Reveal'

export default function Appointment() {
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    preferred_doctor: '',
    preferred_date: '',
    preferred_time: '',
    reason: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.full_name.trim() || !form.phone.trim()) {
      setStatus('error')
      setErrorMsg('Please provide at least your name and phone number.')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    const { error } = await supabase.from('appointments').insert([form])
    if (error) {
      setStatus('error')
      setErrorMsg('Something went wrong while booking. Please try again or call us directly.')
      return
    }
    setStatus('success')
    setForm({
      full_name: '', phone: '', email: '', preferred_doctor: '',
      preferred_date: '', preferred_time: '', reason: '', message: '',
    })
  }

  return (
    <section id="appointment" className="section-py bg-primary text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container-px relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
              Book Appointment
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Schedule Your Visit
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed max-w-md">
              Fill in your details and our team will confirm your appointment. For urgent queries, call us directly — we're here to help.
            </p>

            <ul className="mt-8 space-y-3 text-white/90">
              {[
                "Quick confirmation by our front desk",
                "Choose your preferred doctor and time",
                "Compassionate, confidential care",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card p-6 md:p-8 text-slate-800 dark:text-slate-100 shadow-soft">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Appointment Request Sent</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Thank you! Our team will contact you shortly to confirm your appointment.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-6"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="full_name" value={form.full_name} onChange={handleChange} required placeholder="Your name" />
                    <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 ..." />
                    <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
                    <SelectField label="Preferred Doctor" name="preferred_doctor" value={form.preferred_doctor} onChange={handleChange} options={doctors.map((d) => d.name)} />
                    <Field label="Preferred Date" name="preferred_date" type="date" value={form.preferred_date} onChange={handleChange} />
                    <Field label="Preferred Time" name="preferred_time" type="time" value={form.preferred_time} onChange={handleChange} />
                  </div>
                  <div className="mt-4">
                    <Field label="Reason for Visit" name="reason" value={form.reason} onChange={handleChange} placeholder="e.g. Pregnancy check-up" />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any additional information..."
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-200 px-4 py-3 text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full mt-6 disabled:opacity-70">
                    {status === 'loading' ? (
                      <><Loader2 size={18} className="animate-spin" /> Booking...</>
                    ) : (
                      <><CalendarPlus size={18} /> Book Appointment</>
                    )}
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      >
        <option value="">Any available doctor</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}
