export default function ChallengeSection() {
  const cards = [
    {
      icon: 'timer',
      title: 'Screening Burnout',
      desc: 'Recruiters spend 60% of their time filtering unqualified resumes. We automate the vetting process.',
    },
    {
      icon: 'visibility_off',
      title: 'Lack of Visibility',
      desc: 'Elite African talent remains hidden from global eyes. We put you in front of decision makers.',
    },
    {
      icon: 'gpp_maybe',
      title: 'Unverified Skills',
      desc: "Degrees aren't enough. Our readiness engine verifies real-world output and technical depth.",
    },
    {
      icon: 'hub',
      title: 'Fragmented Ecosystem',
      desc: 'No single home for growth and networking. Inkers Hub is the unified professional solution.',
    },
  ]

  return (
    <section className="py-32 px-6 bg-surface-light dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase">The Challenge</h2>
          <h3 className="text-5xl font-bold tracking-tight text-navy-dark dark:text-white">
            The Talent Gap We Bridge
          </h3>
          <p className="text-charcoal dark:text-slate-300 text-xl leading-relaxed">
            Traditional hiring in emerging markets is broken. We provide the transparency both sides deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group p-10 rounded-3xl bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 card-shadow hover:border-primary/30 transition-all duration-500"
            >
              <div className="size-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-navy-dark dark:text-white">{card.title}</h4>
              <p className="text-charcoal dark:text-slate-300 text-base leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
