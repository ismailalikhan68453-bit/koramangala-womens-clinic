import { useState, useEffect, useCallback } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/clinic'
import { images } from '../data/images'
import Reveal from './Reveal'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section id="testimonials" className="section-py bg-secondary/40 dark:bg-slate-900/40">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">What Our Patients Say</h2>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">Rated 5/5 by our patients</span>
          </div>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto">
          <div className="relative card p-8 md:p-12 shadow-soft">
            <Quote size={48} className="absolute top-6 right-6 text-primary/15" />

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full shrink-0 px-1">
                    <div className="flex items-center gap-4">
                      <img
                        src={images.testimonials[i].avatar}
                        alt={t.name}
                        loading="lazy"
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">{t.role}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-1">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mt-4 text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
                      "{t.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index ? 'w-8 bg-primary' : 'w-2.5 bg-primary/25 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Previous" className="grid place-items-center w-10 h-10 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={next} aria-label="Next" className="grid place-items-center w-10 h-10 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
