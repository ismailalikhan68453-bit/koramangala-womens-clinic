import { CalendarPlus, Phone, ArrowRight, Star } from 'lucide-react'
import { clinic, stats } from '../data/clinic'
import { images } from '../data/images'

export default function Hero() {
  const scrollTo = (id) => () => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-white to-white dark:from-primary/10 dark:via-slate-950 dark:to-slate-950" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute top-40 -left-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl -z-10" />

      <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        <div className="animate-fade-up">
          <span className="chip mb-6">
            <Star size={14} className="fill-primary text-primary" />
            Trusted Women's Healthcare Since 1997
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-slate-900 dark:text-white">
            Compassionate Women's <span className="text-primary">Healthcare</span> Since 1997
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Providing trusted Obstetrics, Gynecology, Dermatology, and Plastic Surgery services with personalized care in the heart of Koramangala, Bengaluru.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={scrollTo('#appointment')} className="btn-primary">
              <CalendarPlus size={18} /> Book Appointment
            </button>
            <a href={`tel:${clinic.phoneRaw}`} className="btn-outline">
              <Phone size={18} /> Call Now
            </a>
            <button onClick={scrollTo('#about')} className="btn-ghost">
              Learn More <ArrowRight size={16} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative animate-scale-in">
          <div className="relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-primary/10">
            <img
              src={images.hero}
              alt={images.heroAlt}
              loading="eager"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-4 sm:left-6 card p-4 pr-6 flex items-center gap-3 shadow-soft animate-float">
            <div className="grid place-items-center w-12 h-12 rounded-2xl bg-primary text-white">
              <HeartPulseIcon />
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white text-sm">25+ Years of Excellence</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">In Women's Healthcare</div>
            </div>
          </div>

          {/* Top-right badge */}
          <div className="absolute -top-4 -right-2 sm:right-6 card px-4 py-3 shadow-soft">
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary" />
              ))}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">1000s of Happy Patients</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeartPulseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 3 6 2-4.5 1.5 2.5h4.27" />
    </svg>
  )
}
