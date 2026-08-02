import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '../data/clinic'
import Reveal from './Reveal'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-py bg-white dark:bg-slate-950">
      <div className="container-px max-w-3xl">
        <Reveal className="text-center mb-14">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Have a question? We've answered the most common ones below.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={i} delay={i * 50}>
                <div className={`card overflow-hidden transition-all ${isOpen ? 'shadow-soft ring-1 ring-primary/20' : ''}`}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">{f.q}</span>
                    <span className={`grid place-items-center w-8 h-8 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-secondary text-primary'}`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
