import {
  Baby, Stethoscope, Heart, ShieldAlert, ClipboardCheck, HeartHandshake,
  Smile, Activity, Flower2, Sparkles, Droplet, Sun, Microscope, ScanFace,
  Hand, Wind, Zap, Waves, Scissors, Star, ShieldPlus, ArrowRight,
} from 'lucide-react'
import { services } from '../data/clinic'
import Reveal from './Reveal'

const iconMap = {
  Baby, Stethoscope, Heart, ShieldAlert, ClipboardCheck, HeartHandshake,
  Smile, Activity, Flower2, Sparkles, Droplet, Sun, Microscope, ScanFace,
  Hand, Wind, Zap, Waves, Scissors, Star, ShieldPlus,
}

export default function Services() {
  const scrollTo = (id) => () => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="services" className="section-py bg-white dark:bg-slate-950">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">Comprehensive Women's Healthcare</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            From pregnancy and gynecology to dermatology and plastic surgery — expert care for every stage of life.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Stethoscope
            return (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <article className="card group p-6 hover:shadow-soft hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="grid place-items-center w-12 h-12 rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={scrollTo('#appointment')}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all self-start"
                  >
                    Learn More <ArrowRight size={15} />
                  </button>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
