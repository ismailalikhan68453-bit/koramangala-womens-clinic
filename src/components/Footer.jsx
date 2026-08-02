import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react'
import { clinic, navLinks, services } from '../data/clinic'

export default function Footer() {
  const scrollTo = (id) => () => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8">
      <div className="container-px">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-2xl bg-primary text-white">
                <Heart size={20} className="fill-white" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-bold text-white">Koramangala</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-primary-100">Women's Clinic</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Trusted women's healthcare in the heart of Koramangala, Bengaluru since 1997. Compassionate, ethical, and personalized care for every woman.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid place-items-center w-9 h-9 rounded-full bg-white/5 text-slate-300 hover:bg-primary hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button onClick={scrollTo(l.href)} className="text-slate-400 hover:text-primary transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 8).map((s) => (
                <li key={s.title}>
                  <button onClick={scrollTo('#services')} className="text-slate-400 hover:text-primary transition-colors text-left">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400">{clinic.address.line1} {clinic.address.line3}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary shrink-0" />
                <a href={`tel:${clinic.phoneRaw}`} className="text-slate-400 hover:text-primary transition-colors">{clinic.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary shrink-0" />
                <a href={`mailto:${clinic.email}`} className="text-slate-400 hover:text-primary transition-colors break-all">{clinic.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400">{clinic.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Koramangala Women's Clinic. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          Made with <Heart size={11} className="inline fill-primary text-primary" /> for women's healthcare
        </p>
      </div>
    </footer>
  )
}
