import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Inkers Hub - African Talent Intelligence & Recruitment Ecosystem',
  description:
    'Inkers Hub connects top-tier African professionals with global opportunities using data-backed readiness scores to surface the top 1% of talent.',
  openGraph: {
    title: 'Inkers Hub - African Talent Intelligence & Recruitment Ecosystem',
    description:
      'Inkers Hub connects top-tier African professionals with global opportunities using data-backed readiness scores to surface the top 1% of talent.',
    url: 'https://inkershub.com',
    images: [{ url: 'https://inkershub.com/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inkers Hub - African Talent Intelligence & Recruitment Ecosystem',
    description:
      'Inkers Hub connects top-tier African professionals with global opportunities using data-backed readiness scores to surface the top 1% of talent.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-navy-dark text-charcoal dark:text-slate-200 antialiased selection:bg-primary/20">
        {children}
      </body>
    </html>
  )
}
