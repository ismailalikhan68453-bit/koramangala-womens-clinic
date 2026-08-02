import { CheckCircle2 } from 'lucide-react'
import { clinic, timeline } from '../data/clinic'
import { images } from '../data/images'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section-py bg-white dark:bg-slate-950">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft ring-1 ring-slate-100 dark:ring-slate-800">
              <img
                src={images.about}
                alt={images.aboutAlt}
                loading="lazy"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 card p-5 shadow-soft">
              <div className="text-4xl font-bold text-primary">1997</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Year Established</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="section-eyebrow">About Us</span>
            <h2 className="section-title mt-3 text-slate-900 dark:text-white">
              About Koramangala Women's Clinic
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
              Koramangala Women's Clinic has been delivering compassionate and comprehensive healthcare for women since 1997. Founded by Dr. S. C. Rajendran and Dr. Shashikala Rajendran, the clinic is dedicated to providing personalized, ethical, and high-quality medical care.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our experienced team combines advanced medical technology with patient-centered treatment to support women through every stage of life—from adolescence and pregnancy to menopause and beyond.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Personalized, ethical, and high-quality care",
                "Advanced medical technology and modern infrastructure",
                "Care for every stage of a woman's life",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-slate-700 dark:text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="card px-5 py-3">
                <div className="text-sm text-slate-500 dark:text-slate-400">Founders</div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">{clinic.founders.join(" & ")}</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-20 md:mt-28">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title mt-3 text-slate-900 dark:text-white">A Legacy of Care Since 1997</h2>
          </Reveal>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            <div className="space-y-8 md:space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`md:flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-8">
                      <div className="card p-6 hover:shadow-soft hover:-translate-y-1">
                        <div className="text-primary font-bold text-lg">{t.year}</div>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{t.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t.text}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex md:w-0 items-center justify-center relative">
                      <span className="w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-950 shadow-soft" />
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
