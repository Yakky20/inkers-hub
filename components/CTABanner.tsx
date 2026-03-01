export default function CTABanner() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-primary rounded-[32px] overflow-hidden p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Decorative blobs */}
          <div className="absolute -top-24 -left-24 size-96 bg-white/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 size-96 bg-accent/20 blur-[100px] rounded-full" />

          {/* Left */}
          <div className="relative z-10 lg:w-3/5 space-y-8">
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Ready to expand your engineering team?
            </h2>
            <p className="text-white/80 text-xl max-w-xl font-medium leading-relaxed">
              Stop sifting through hundreds of unqualified applications. Get matched with pre-vetted, top-tier African
              engineering talent in less than 48 hours.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-white text-primary px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-black/10 hover:scale-105 transition-all">
                Start Hiring Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all">
                Speak to an Expert
              </button>
            </div>
          </div>

          {/* Right — Testimonial card */}
          <div className="relative z-10 lg:w-2/5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl float">
              <div className="flex items-center gap-4 mb-6">
                <img
                  alt="Sarah Jenkins - Senior UX Lead"
                  className="size-16 rounded-2xl object-cover border-2 border-white/20 shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZAftZNez2ju-B4BlFqxLFzGM7Xw41N0eresULThbnUxk4LKKH3F3Wr8SgLhMpJ8iXoyDnOhPmg53ufBaKjQhE7suqyCJA3tU_4FYPbza2cKaebLtLCgTQWAmJeOL500iLaaHHdodPbMCOY1_X4YJqiif9yDrAc7lzytenxiTSyjZiq75V2wukUOQIcWH2h6m206jWgmtN5Zk9KlZOVulm5NA1tUxkZWGAKibVBBODJUfOxzDAdvW6FoN1okmikf3Cc8NKTfpCNh8"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-lg">Sarah Jenkins</h4>
                    <span className="material-symbols-outlined text-[18px] text-white fill-1">verified</span>
                  </div>
                  <p className="text-white/60 text-sm font-semibold">Senior UX Lead</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-white text-sm italic leading-relaxed">
                    &ldquo;Inkers Hub matched me with a high-growth startup in just 3 days. The process was completely
                    seamless and transparent.&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm fill-1">
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-widest">
                    3-Day Placement Success
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
