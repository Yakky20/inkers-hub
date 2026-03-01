export default function TalentCycleSection() {
  return (
    <section className="py-32 px-6 relative bg-white dark:bg-navy-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold tracking-tight text-navy-dark dark:text-white mb-4">
            The Talent Intelligence Cycle
          </h2>
          <p className="text-charcoal dark:text-slate-300">
            A seamless bridge from community to global career opportunities.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-100 dark:bg-white/5 -translate-y-1/2 -z-10" />

          {/* Step 1 */}
          <div className="bg-white dark:bg-navy-dark p-10 rounded-3xl w-full max-w-sm text-center border border-slate-200 dark:border-white/10 card-shadow group hover:border-primary/50 transition-all">
            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black mx-auto mb-6">
              1
            </div>
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block">groups</span>
            <h4 className="text-2xl font-bold mb-4 text-navy-dark dark:text-white">Community Engine</h4>
            <p className="text-charcoal dark:text-slate-300 text-sm leading-relaxed">
              Where talent begins. Collaborative learning, peer networking, and early mentoring.
            </p>
          </div>

          {/* Step 2 — highlighted */}
          <div className="bg-white dark:bg-navy-dark p-10 rounded-3xl w-full max-w-sm text-center border-2 border-primary card-shadow shadow-primary/10 scale-110 z-10">
            <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-black mx-auto mb-6">
              2
            </div>
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block">psychology</span>
            <h4 className="text-2xl font-bold mb-4 text-navy-dark dark:text-white">Readiness Engine</h4>
            <p className="text-charcoal dark:text-slate-300 text-sm leading-relaxed">
              AI-driven assessments and human vetting to generate unique Readiness Scores.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-navy-dark p-10 rounded-3xl w-full max-w-sm text-center border border-slate-200 dark:border-white/10 card-shadow group hover:border-primary/50 transition-all">
            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black mx-auto mb-6">
              3
            </div>
            <span className="material-symbols-outlined text-5xl text-primary mb-6 block">shopping_cart</span>
            <h4 className="text-2xl font-bold mb-4 text-navy-dark dark:text-white">Recruiter Marketplace</h4>
            <p className="text-charcoal dark:text-slate-300 text-sm leading-relaxed">
              Global companies hire vetted talent directly based on data-backed performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
