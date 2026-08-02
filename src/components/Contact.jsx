import { Phone, Mail, MapPin, Clock, Navigation, MessageCircle } from 'lucide-react'
import { clinic } from '../data/clinic'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section-py bg-white dark:bg-slate-950">
      <div className="container-px">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title mt-3 text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We're here to answer your questions and provide the care you need.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info */}
          <Reveal className="space-y-5">
            <InfoCard icon={MapPin} title="Clinic Address">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {clinic.address.line1}<br />
                {clinic.address.line2}<br />
                {clinic.address.line3}
              </p>
            </InfoCard>

            <InfoCard icon={Clock} title="Clinic Timing">
              <p className="text-slate-600 dark:text-slate-300">{clinic.hours}</p>
            </InfoCard>

            <div className="grid sm:grid-cols-2 gap-5">
              <a href={`tel:${clinic.phoneRaw}`} className="card p-5 flex items-center gap-3 hover:shadow-soft hover:-translate-y-0.5 group">
                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-primary text-white group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </span>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Call Us</div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">{clinic.phone}</div>
                </div>
              </a>

              <a href={`mailto:${clinic.email}`} className="card p-5 flex items-center gap-3 hover:shadow-soft hover:-translate-y-0.5 group">
                <span className="grid place-items-center w-11 h-11 rounded-2xl bg-primary text-white group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </span>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Email Us</div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm break-all">{clinic.email}</div>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={clinic.mapsLink} target="_blank" rel="noreferrer" className="btn-primary">
                <Navigation size={18} /> Get Directions
              </a>
              <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noreferrer" className="btn-outline">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={120} className="rounded-3xl overflow-hidden shadow-soft ring-1 ring-slate-100 dark:ring-slate-800 min-h-[420px]">
            <iframe
              title="Koramangala Women's Clinic location"
              src={clinic.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="card p-5 flex items-start gap-4">
      <span className="grid place-items-center w-11 h-11 rounded-2xl bg-secondary text-primary shrink-0">
        <Icon size={20} />
      </span>
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}
