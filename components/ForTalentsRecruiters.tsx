export default function ForTalentsRecruiters() {
  return (
    <section className="py-32 px-6 bg-surface-light dark:bg-[#0a0f1a] border-y border-slate-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* For Talents */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="size-16 rounded-3xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                <span className="material-symbols-outlined text-white text-3xl">person</span>
              </div>
              <h2 className="text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight">For Talents</h2>
            </div>

            <div className="relative pl-12 space-y-16">
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-white/10" />

              {[
                {
                  title: 'Create & Connect',
                  desc: 'Build your professional profile and join a vibrant ecosystem of African creators and experts.',
                },
                {
                  title: 'Get Vetted',
                  desc: 'Complete AI-powered assessments and project-based reviews to verify your real-world technical depth.',
                },
                {
                  title: 'Be Hunted',
                  desc: 'Let your data speak for itself. Top global recruiters search our marketplace for your specific Readiness Score.',
                },
              ].map((item) => (
                <div key={item.title} className="relative group">
                  <div className="absolute -left-12 top-1.5 size-7 rounded-full bg-primary border-4 border-white dark:border-navy-dark shadow-sm z-10" />
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-navy-dark dark:text-white group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-lg text-charcoal/80 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-navy-dark dark:text-white hover:border-primary/30 transition-all flex items-center gap-3 group">
                Build your Talent Profile
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* For Recruiters */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="size-16 rounded-3xl bg-navy-dark dark:bg-white flex items-center justify-center shadow-xl shadow-navy-dark/10">
                <span className="material-symbols-outlined text-white dark:text-navy-dark text-3xl">corporate_fare</span>
              </div>
              <h2 className="text-4xl font-extrabold text-navy-dark dark:text-white tracking-tight">For Recruiters</h2>
            </div>

            <div className="relative pl-12 space-y-16">
              <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-white/10" />

              {[
                {
                  title: 'Define Needs',
                  desc: 'Specify technical requirements and cultural fit parameters for your upcoming projects or roles.',
                },
                {
                  title: 'Data-First Selection',
                  desc: 'Filter talent using Inkers AI scores. Skip the guesswork and focus only on verified top-tier performers.',
                },
                {
                  title: 'Zero-Risk Hire',
                  desc: 'Onboard talent with confidence backed by our comprehensive intelligence reports and trial frameworks.',
                },
              ].map((item) => (
                <div key={item.title} className="relative group">
                  <div className="absolute -left-12 top-1.5 size-7 rounded-full bg-navy-dark/30 dark:bg-white/30 border-4 border-white dark:border-navy-dark shadow-sm z-10" />
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold text-navy-dark dark:text-white">{item.title}</h4>
                    <p className="text-lg text-charcoal/80 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-navy-dark dark:bg-white text-white dark:text-navy-dark rounded-2xl font-bold hover:bg-black dark:hover:bg-slate-200 transition-all flex items-center gap-3 group">
                Start Hiring Talent
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
