export default function FooterSection() {
  return (
    <footer className="bg-white dark:bg-navy-dark text-charcoal dark:text-slate-300 py-20 px-6 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-slate-100 dark:border-white/10 pb-16">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center size-10 bg-primary/10 rounded-xl">
            <svg className="text-primary size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-navy-dark dark:text-white uppercase tracking-tighter">
            Inkers Hub
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-10 text-sm font-semibold">
          <a href="#" className="text-charcoal dark:text-slate-300 hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-charcoal dark:text-slate-300 hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-charcoal dark:text-slate-300 hover:text-primary transition-colors">
            Contact Us
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium">
        <p className="text-charcoal/60 dark:text-slate-400">© 2025 Inkers Hub. Empowering African Excellence.</p>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-charcoal dark:text-slate-300">
            <span className="material-symbols-outlined text-lg">language</span>
            Lagos, Nigeria
          </span>
          <div className="size-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-lg text-charcoal dark:text-white">share</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
