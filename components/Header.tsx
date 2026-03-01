'use client'

import { useState } from 'react'
import JoinModal from './JoinModal'

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleTheme = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6">
      <header className="max-w-7xl mx-auto glass-light dark:bg-[#0f0f0f]/90 rounded-full px-6 h-16 flex items-center justify-between shadow-lg border border-black/5 dark:border-white/10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.119cad41.png" alt="Inkers Hub" className="h-9 w-auto object-contain" />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#community"
            className="text-sm font-semibold text-charcoal dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Community
          </a>
          <a
            href="#solutions"
            className="text-sm font-semibold text-charcoal dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold text-charcoal dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined dark:hidden">dark_mode</span>
            <span className="material-symbols-outlined hidden dark:block text-white">light_mode</span>
          </button>
          {/* <button className="text-sm font-bold text-charcoal dark:text-slate-300 hover:text-primary transition-all">
            Login
          </button> */}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-navy-dark dark:bg-white dark:text-navy-dark text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-black dark:hover:bg-slate-200 transition-all"
          >
            Join Now
          </button>
        </div>
      </header>
      <JoinModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
