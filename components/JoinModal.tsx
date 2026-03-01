'use client'

import { useEffect, useRef, useState } from 'react'

interface JoinModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [barAnimated, setBarAnimated] = useState(false)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setStatus('idle')
      setFirstName('')
      setEmail('')
      setErrorMsg('')
      setBarAnimated(false)
      const t = setTimeout(() => setBarAnimated(true), 200)
      firstInputRef.current?.focus()
      return () => clearTimeout(t)
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
    if (!firstName.trim() || !email.trim()) return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
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
      <div className="relative w-full max-w-md bg-white dark:bg-[#0f0f0f] rounded-3xl border border-slate-200 dark:border-white/10 card-shadow p-8 z-10 animate-modal-in">

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
            <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-5xl text-green-500 fill-1">check_circle</span>
            </div>
            <h3 className="text-2xl font-extrabold text-navy-dark dark:text-white tracking-tight">
              You&apos;re on the list!
            </h3>
            <p className="text-charcoal/70 dark:text-slate-400 leading-relaxed">
              We&apos;ll reach out when we&apos;re ready for you. Stay tuned — something extraordinary is coming.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-3 bg-primary hover:bg-accent text-white font-bold rounded-2xl transition-all"
            >
              Got it!
            </button>
          </div>
        ) : (
          <>
            {/* ── Header ── */}
            <div className="flex items-start gap-4 mb-6">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl text-primary">rocket_launch</span>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-navy-dark dark:text-white tracking-tight leading-tight">
                  Be First In Line
                </h2>
                <p className="text-sm text-charcoal/70 dark:text-slate-400 mt-1 leading-relaxed">
                  Subscribe to receive updates on our progress. We&apos;ll notify you when we launch.
                </p>
              </div>
            </div>

            {/* ── Progress Tracker ── */}
            <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-charcoal/50 dark:text-slate-500">
                  Platform Development Progress
                </span>
                <span className="text-lg font-black text-primary">10%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-primary rounded-full transition-all duration-1000 ease-out ${barAnimated ? 'w-[10%]' : 'w-0'}`}
                />
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="material-symbols-outlined text-sm text-primary fill-1">construction</span>
                <span className="text-xs font-semibold text-charcoal/60 dark:text-slate-400">
                  We&apos;re building something extraordinary
                </span>
              </div>
            </div>

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-charcoal/60 dark:text-slate-400 uppercase tracking-wider mb-2">
                  First Name
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="e.g. Kofi"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm font-medium text-navy-dark dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50"
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
                  className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-sm font-medium text-navy-dark dark:text-white placeholder:text-charcoal/30 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50"
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
                disabled={status === 'loading' || !firstName.trim() || !email.trim()}
                className="w-full bg-primary hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Notify Me When You Launch
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-charcoal/40 dark:text-slate-600">
                No spam, ever. Unsubscribe at any time.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
