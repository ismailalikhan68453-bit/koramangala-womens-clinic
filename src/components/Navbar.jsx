import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, CalendarPlus } from 'lucide-react'
import { navLinks, clinic } from '../data/clinic'

export default function Navbar({ dark, toggleDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 md:h-20 items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }} className="flex items-center gap-2.5 group">
          <span className="grid place-items-center w-10 h-10 rounded-2xl bg-primary text-white shadow-soft group-hover:scale-105 transition-transform">
            <HeartPulseIcon />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white">Koramangala</span>
            <span className="text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-primary">Women's Clinic</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
                className="link-underline px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="grid place-items-center w-10 h-10 rounded-full text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="#appointment"
            onClick={(e) => { e.preventDefault(); handleNav('#appointment') }}
            className="hidden sm:inline-flex btn-primary text-sm"
          >
            <CalendarPlus size={18} /> Book Appointment
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full text-slate-700 dark:text-slate-200 hover:bg-primary/10 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800`}
      >
        <ul className="container-px py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href) }}
                className="block px-3 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#appointment"
              onClick={(e) => { e.preventDefault(); handleNav('#appointment') }}
              className="btn-primary w-full"
            >
              <CalendarPlus size={18} /> Book Appointment
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

function HeartPulseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 3 6 2-4.5 1.5 2.5h4.27" />
    </svg>
  )
}
