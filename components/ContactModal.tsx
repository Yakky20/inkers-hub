'use client'

import { useEffect, useRef, useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const SUBJECTS = [
  'Hiring Talent',
  'Joining as Talent',
  'Partnership Opportunity',
  'Press & Media',
  'General Enquiry',
]

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setStatus('idle')
      setFullName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setErrorMsg('')
      setTimeout(() => firstInputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !email.trim() || !subject || !message.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          subject,
          message: message.trim(),
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.')
      setStatus('error')
    }
  }

  const isValid = fullName.trim() && email.trim() && subject && message.trim()

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0f0f0f] rounded-3xl border border-slate-200 dark:border-white/10 card-shadow p-8 z-10 animate-modal-in">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 size-9 flex items-center justify-center rounded-full text-charcoal/50 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-charcoal dark:hover:text-white transition-all"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {status === 'success' ? (
          /* ── Success State ── */
          <div className="text-center py-6 space-y-4">
            <div className="size-20 rounded-full bg-navy-dark/10 dark:bg-white/10 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-5xl text-navy-dark dark:text-white fill-1">mark_email_read</span>
            </div>
            <h3 className="text-2xl font-extrabold text-navy-dark dark:text-white tracking-tight">
              Message received!
            </h3>
            <p className="text-charcoal/70 dark:text-slate-400 leading-relaxed">
              Thanks for reaching out. Our team will get back to you within <span className="font-bold text-navy-dark dark:text-white">24–48 hours</span>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 bg-navy-dark dark:bg-white dark:text-navy-dark text-white font-bold rounded-2xl hover:bg-black dark:hover:bg-slate-200 transition-all"
            >
              Got it!
            </button>
          </div>
        ) : (
          <>
            {/* ── Header ── */}
            <div className="flex items-start gap-4 mb-6">
              <div className="size-12 rounded-2xl bg-navy-dark/10 dark:bg-white/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl text-navy-dark dark:text-white">support_agent</span>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-dark dark:text-white tracking-tight leading-tight">
                  Let&apos;s Talk
                </h2>
                <p className="text-sm text-charcoal/70 dark:text-slate-400 mt-1 leading-relaxed">
                  Got a question or want to work together? We&apos;re all ears.
                </p>
              </div>
            </div>

            {/* ── Contact Channels ── */}
            <div className="mb-6 flex items-center gap-3 flex-wrap">
              {[
                { icon: 'schedule', text: 'Replies in 24–48h' },
                { icon: 'verified_user', text: 'Confidential' },
                { icon: 'language', text: 'Lagos, Nigeria' },
              ].map((chip) => (
                <span
                  key={chip.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] font-bold text-charcoal/70 dark:text-slate-400 uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined text-sm">{chip.icon}</span>
                  {chip.text}
                </span>
              ))}
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal/60 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kofi Mensah"
                    required
                    disabled={status === 'loading'}
                    className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm font-medium text-navy-dark dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy-dark/40 dark:focus:border-white/30 focus:ring-2 focus:ring-navy-dark/10 dark:focus:ring-white/10 transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-charcoal/60 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    disabled={status === 'loading'}
                    className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm font-medium text-navy-dark dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy-dark/40 dark:focus:border-white/30 focus:ring-2 focus:ring-navy-dark/10 dark:focus:ring-white/10 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal/60 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <div className="relative">
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    className="w-full appearance-none rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm font-medium text-navy-dark dark:text-white focus:outline-none focus:border-navy-dark/40 dark:focus:border-white/30 focus:ring-2 focus:ring-navy-dark/10 dark:focus:ring-white/10 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <option value="" disabled className="dark:bg-[#0f0f0f]">Select a topic…</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s} className="dark:bg-[#0f0f0f]">{s}</option>
                    ))}
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 dark:text-slate-500 pointer-events-none text-lg">
                    expand_more
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal/60 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind…"
                  required
                  rows={4}
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm font-medium text-navy-dark dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-slate-600 focus:outline-none focus:border-navy-dark/40 dark:focus:border-white/30 focus:ring-2 focus:ring-navy-dark/10 dark:focus:ring-white/10 transition-all disabled:opacity-50 resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-2xl px-4 py-3">
                  <span className="material-symbols-outlined text-base fill-1">error</span>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !isValid}
                className="w-full bg-navy-dark dark:bg-white dark:text-navy-dark hover:bg-black dark:hover:bg-slate-200 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-navy-dark/10"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-charcoal/40 dark:text-slate-600">
                We&apos;ll never share your details with anyone.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
