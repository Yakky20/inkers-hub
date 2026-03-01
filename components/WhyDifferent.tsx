export default function WhyDifferent() {
  const rows = [
    { feature: 'Vetting Process', board: 'Self-reported', inkers: 'Human + AI Scoring' },
    { feature: 'Talent Quality', board: 'Variable', inkers: 'Top 3%' },
    { feature: 'Matching Speed', board: 'Weeks', inkers: '24-48 Hours' },
    { feature: 'Post-Hiring Support', board: 'None', inkers: 'Success Coaching' },
  ]

  return (
    <section className="py-16 md:py-32 px-6 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase">The Advantage</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-navy-dark dark:text-white">
            Why We&apos;re Different
          </h2>
          <p className="text-charcoal dark:text-slate-300 text-lg sm:text-xl leading-relaxed opacity-80">
            Traditional job boards vs. The Inkers Hub Advantage
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f0f0f] card-shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
                  <th className="p-4 sm:p-6 md:p-8 text-sm font-bold uppercase tracking-wider text-charcoal/60 dark:text-slate-400">
                    Feature
                  </th>
                  <th className="p-4 sm:p-6 md:p-8 text-sm font-bold uppercase tracking-wider text-charcoal/60 dark:text-slate-400">
                    Job Boards
                  </th>
                  <th className="p-4 sm:p-6 md:p-8 text-sm font-bold uppercase tracking-wider text-navy-dark dark:text-white bg-primary/5">
                    Inkers Hub
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                {rows.map((row) => (
                  <tr key={row.feature}>
                    <td className="p-4 sm:p-6 md:p-8 font-bold text-navy-dark dark:text-white">{row.feature}</td>
                    <td className="p-4 sm:p-6 md:p-8 text-charcoal dark:text-slate-300">{row.board}</td>
                    <td className="p-4 sm:p-6 md:p-8 font-bold text-navy-dark dark:text-white bg-primary/5">{row.inkers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
