import { useState } from 'react'
import { X } from 'lucide-react'
import { images } from '../data/images'
import Reveal from './Reveal'

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section-py bg-white dark:bg-slate-950">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">Inside Our Clinic</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A modern, comfortable environment designed for your wellbeing.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.gallery.map((g, i) => (
            <Reveal
              key={g.label}
              delay={(i % 4) * 70}
              className={i === 0 || i === 6 ? 'col-span-2 row-span-1' : ''}
            >
              <button
                onClick={() => setActive(g)}
                className="group relative block w-full h-full overflow-hidden rounded-2xl ring-1 ring-slate-100 dark:ring-slate-800"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 || i === 6 ? 'h-56 md:h-64' : 'h-40 md:h-48'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-semibold text-sm">{g.label}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <button
            aria-label="Close"
            className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <figure className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.label} className="w-full max-h-[80vh] object-contain rounded-2xl" />
            <figcaption className="mt-3 text-center text-white font-medium">{active.label}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
