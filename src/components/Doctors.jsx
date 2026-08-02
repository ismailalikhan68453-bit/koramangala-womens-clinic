import { CalendarPlus, GraduationCap, Briefcase, Stethoscope } from 'lucide-react'
import { doctors } from '../data/clinic'
import { images } from '../data/images'
import Reveal from './Reveal'

export default function Doctors() {
  const scrollTo = (id) => () => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="doctors" className="section-py bg-secondary/40 dark:bg-slate-900/40">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Our Specialists</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">Meet Our Experienced Doctors</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A trusted team of specialists dedicated to your health and wellbeing.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <article className="card group overflow-hidden hover:shadow-soft hover:-translate-y-1.5 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={images.doctors[i].photo}
                    alt={d.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 chip text-xs">
                    <Stethoscope size={12} /> {d.specialization}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{d.name}</h3>
                  <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <GraduationCap size={15} className="text-primary" />
                      <span>{d.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={15} className="text-primary" />
                      <span>{d.experience} Experience</span>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{d.bio}</p>
                  <button
                    onClick={scrollTo('#appointment')}
                    className="btn-outline mt-5 w-full text-sm py-2.5"
                  >
                    <CalendarPlus size={16} /> Book Appointment
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
