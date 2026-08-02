import {
  Award, UserCheck, HeartHandshake, Microscope, User, Building2,
  Wallet, Home, CalendarCheck, Smile,
} from 'lucide-react'
import { whyChooseUs } from '../data/clinic'
import Reveal from './Reveal'

const iconMap = {
  Award, UserCheck, HeartHandshake, Microscope, User, Building2,
  Wallet, Home, CalendarCheck, Smile,
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py bg-secondary/40 dark:bg-slate-900/40">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">A Clinic You Can Trust</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            For over 25 years, families across Bengaluru have trusted us with their health.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyChooseUs.map((w, i) => {
            const Icon = iconMap[w.icon] || Award
            return (
              <Reveal key={w.title} delay={(i % 5) * 70}>
                <div className="card group p-6 text-center h-full hover:shadow-soft hover:-translate-y-1">
                  <div className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-100 leading-snug">{w.title}</h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
