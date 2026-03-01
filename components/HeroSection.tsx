'use client'

import { useState } from 'react'
import JoinModal from './JoinModal'

const AVATAR_1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnh8OGAbbmGANvmOLOJ2tTABSU1uZfLdnkuvsj3yLdQHURT8rf6nEExDXS4SiWo6s6PhdOlFk0GgtuYYX9Ag3sJtb_lV66m7jcWYYEUO63-5zteka6Ej_62ihQhfTWrxHKPdzM4VTbSaTo31VM_SB7x3BNbzuwv3lgVBkULMDcMg1Ye4JalA5xLf-iBjH8ZJwlAsRchm8UVe4OB6k9I62xE7SrPD0yMd4qtxs3f5Jv3m4qT30RKeYmibh0ZtH1Kp6uUz4aadbPxFw'
const AVATAR_2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ0sm_NqHMOZFj7LRs-QAZ5wpN47VZJ9LxyAdyGOZxk4-ZY4LGjmi4YNO5hoHewyDBXKLLBH_UT6RHRCr9-9e-vT7xGspd9wHCUo1ELv1n0nbfWBLyrWlL-DWU1fc4HIJUTRY45biAxFA4mLpy_C1rgiW9iOGhXtggwP-KwpQ1tq_b0V297s_TEyCy93j4y-Uf31Gnu_zyVW1n8gXPtWMIdGOLm3EjFMDBHsxnbPvHPgFl-35y4e93MuOoXh-OIC95wLWpiN8TElw'
const SARAH_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrzIT8WJIBHpDYEzcdvrMjNGFhrKPLwfuJtNtiMixVNnzJi-gr5lSRabOtLR4G3SEYHaL5MTtM3o4JnHCLPZVqLpUwHx9yf1FeP4vsNISJxCW4YJhprCyZA4vSHnnKRUHN1shOCcYI5M4BVyq-krFEmZPS_2RJIpkf1VOPBq0Zr2P_nqB13jQAQR8phUUmM7P-N7tRwZD9tjmw1MRV9ASn5FXs3KLMH3YiCPxLwqfTrn5k-qIy6jc8NNC4yrvYAq_AyIlJvZz_cWM'

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="hero-pattern min-h-screen flex flex-col justify-center relative pt-24 pb-14 md:pt-32 md:pb-20 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 size-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 size-[500px] bg-accent/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* ─── Left Column ─── */}
        <div className="space-y-8 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm text-charcoal dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-primary text-sm fill-1">verified</span>
            #1 Talent Marketplace in Africa
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-navy-dark dark:text-white">
            From Job Hunters <br />
            <span className="text-primary text-glow-red">to the Hunted</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-charcoal/80 dark:text-slate-300 max-w-xl leading-relaxed font-medium">
            Inkers Hub connects top-tier African professionals with global opportunities using data-backed readiness
            scores to surface the top 1% of talent.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => setModalOpen(true)} className="bg-primary hover:bg-accent transition-all text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 flex items-center gap-2 group">
              Hire Top Talent
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button onClick={() => setModalOpen(true)} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-charcoal dark:text-white px-8 py-4 rounded-2xl text-lg font-bold">
              Join as Talent
            </button>
          </div>

          {/* Social proof */}
          {/* <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              <img
                alt="African Professional"
                className="size-11 rounded-full border-2 border-white dark:border-navy-dark object-cover shadow-sm"
                src={AVATAR_1}
              />
              <img
                alt="African Professional"
                className="size-11 rounded-full border-2 border-white dark:border-navy-dark object-cover shadow-sm"
                src={AVATAR_2}
              />
              <img
                alt="African Professional"
                className="size-11 rounded-full border-2 border-white dark:border-navy-dark object-cover shadow-sm"
                src={AVATAR_1}
              />
              <div className="size-11 rounded-full bg-slate-50 dark:bg-white/10 border-2 border-white dark:border-navy-dark flex items-center justify-center text-[10px] font-extrabold text-charcoal dark:text-white shadow-sm">
                +12k
              </div>
            </div>

            <div className="w-px h-10 bg-slate-200 dark:bg-white/10" />

            <div className="flex flex-col justify-center">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px] fill-1">
                    star
                  </span>
                ))}
              </div>
              <span className="text-xs font-bold text-navy-dark dark:text-white mt-0.5">4.9/5 Rating</span>
            </div>
          </div> */}
        </div>

        {/* ─── Right Column — Floating Visual ─── */}
        <div className="relative h-[320px] sm:h-[480px] lg:h-[700px] flex items-center justify-center lg:justify-end">
          <div className="relative size-[280px] sm:size-[380px] lg:size-[550px]">
            {/* Orbit rings */}
            <div className="absolute inset-0 border-2 border-primary/15 rounded-full" />
            <div className="absolute inset-20 border-2 border-primary/10 rounded-full" />

            {/* Center score */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="size-64 rounded-full bg-primary/5 blur-3xl absolute" />
              <div className="bg-white dark:bg-[#0f0f0f] size-28 sm:size-36 lg:size-44 rounded-full flex items-center justify-center border border-slate-100 dark:border-white/10 shadow-2xl relative">
                <div className="text-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-dark dark:text-white tracking-tighter">4.9</span>
                  <p className="text-[10px] text-charcoal dark:text-slate-400 font-bold uppercase tracking-widest mt-1">
                    Avg Vetting
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 1 — AI Engine */}
            <div
              className="hidden lg:block absolute -top-12 -left-6 z-30 glass-light p-5 rounded-3xl shadow-2xl w-64 float"
              style={{ animationDelay: '0s' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">psychology</span>
                </div>
                <div className="relative size-10">
                  <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                    <circle
                      className="text-slate-100 dark:text-white/5"
                      cx="18" cy="18" fill="none" r="16"
                      stroke="currentColor" strokeWidth="3"
                    />
                    <circle
                      className="text-primary spinning"
                      cx="18" cy="18" fill="none" r="16"
                      stroke="currentColor" strokeDasharray="100" strokeDashoffset="30"
                      strokeLinecap="round" strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs font-bold text-navy-dark dark:text-white uppercase tracking-tight">
                Inkers AI Engine
              </p>
              <h4 className="text-lg font-extrabold text-navy-dark dark:text-white mt-1">Scanning 200+ Profiles</h4>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[10px] font-black px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                  98% ACCURACY
                </span>
              </div>
            </div>

            {/* Floating Card 2 — Sarah Jenkins */}
            <div
              className="hidden lg:block absolute top-8 -right-24 z-30 glass-light p-6 rounded-3xl shadow-2xl w-72 float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  alt="Sarah Jenkins"
                  className="size-14 rounded-2xl object-cover border-2 border-primary/20"
                  src={SARAH_IMG}
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="font-bold text-navy-dark dark:text-white">Sarah Jenkins</p>
                    <span className="material-symbols-outlined text-[16px] text-primary fill-1">verified</span>
                  </div>
                  <p className="text-xs font-semibold text-charcoal/60 dark:text-slate-400">Senior UX Lead</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-charcoal dark:text-slate-300">
                  <span>Reliability</span>
                  <span className="text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs fill-1">workspace_premium</span>
                    Premium
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[96%]" />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                  <span className="text-[11px] font-bold text-navy-dark dark:text-white">
                    &lt; 2 Hours response rate
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 3 — Hub Stats */}
            <div
              className="hidden lg:block absolute -bottom-10 -left-10 z-30 glass-light p-6 rounded-3xl shadow-2xl w-64 float"
              style={{ animationDelay: '2s' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-navy-dark dark:bg-white text-white dark:text-navy-dark flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">database</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-charcoal/60 dark:text-slate-400 uppercase tracking-tighter">
                    Hub Stats
                  </p>
                  <p className="text-xl font-black text-navy-dark dark:text-white">42,500+</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="text-charcoal/60 dark:text-slate-400">Talent Readiness</span>
                  <span className="text-primary">94%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[94%]" />
                </div>
              </div>
            </div>

            {/* Floating pill — Kofi Mensah */}
            <div
              className="hidden lg:flex absolute top-[45%] -left-32 z-20 bg-white dark:bg-[#0f0f0f] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 dark:border-white/10 items-center gap-2 float"
              style={{ animationDelay: '0.5s' }}
            >
              <div
                className="size-7 rounded-full bg-cover bg-center border border-slate-100 dark:border-white/10"
                style={{ backgroundImage: `url('${AVATAR_1}')` }}
              />
              <span className="text-xs font-bold text-navy-dark dark:text-white">Kofi Mensah</span>
              <span className="material-symbols-outlined text-[16px] text-primary fill-1">verified</span>
            </div>

            {/* Floating pill — Amina J. */}
            <div
              className="hidden lg:flex absolute bottom-12 -right-16 z-20 bg-white dark:bg-[#0f0f0f] px-4 py-2.5 rounded-full shadow-lg border border-slate-100 dark:border-white/10 items-center gap-2 float"
              style={{ animationDelay: '1.5s' }}
            >
              <div
                className="size-7 rounded-full bg-cover bg-center border border-slate-100 dark:border-white/10"
                style={{ backgroundImage: `url('${AVATAR_2}')` }}
              />
              <span className="text-xs font-bold text-navy-dark dark:text-white">Amina J.</span>
              <span className="material-symbols-outlined text-[16px] text-primary fill-1">verified</span>
            </div>
          </div>
        </div>
      </div>

      <JoinModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ─── Trusted By ─── */}
      {/* <div className="max-w-7xl mx-auto mt-24 w-full">
        <p className="text-center text-[10px] font-bold text-charcoal/40 dark:text-slate-500 uppercase tracking-[0.4em] mb-10">
          Trusted by Global Innovators
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale dark:invert transition-all duration-700">
          {['MICROSOFT', 'STRIPE', 'PAYSTACK', 'GOOGLE', 'FLUTTERWAVE'].map((brand) => (
            <span key={brand} className="text-xl font-black tracking-tighter italic text-navy-dark dark:text-white">
              {brand}
            </span>
          ))}
        </div>
      </div> */}
    </section>
  )
}
