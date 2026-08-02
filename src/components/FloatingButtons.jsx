import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle, Phone, CalendarPlus } from 'lucide-react'
import { clinic } from '../data/clinic'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const toAppointment = () => document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* Side stack */}
      <div className="fixed right-4 sm:right-6 bottom-24 sm:bottom-28 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${clinic.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid place-items-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-soft hover:scale-110 transition-transform"
        >
          <MessageCircle size={22} />
        </a>
        <a
          href={`tel:${clinic.phoneRaw}`}
          aria-label="Call now"
          className="grid place-items-center w-12 h-12 rounded-full bg-primary text-white shadow-soft hover:scale-110 transition-transform"
        >
          <Phone size={20} />
        </a>
      </div>

      {/* Sticky book appointment (mobile) */}
      <button
        onClick={toAppointment}
        className="sm:hidden fixed left-4 right-4 bottom-4 z-40 btn-primary w-auto shadow-soft"
      >
        <CalendarPlus size={18} /> Book Appointment
      </button>

      {/* Back to top */}
      <button
        onClick={toTop}
        aria-label="Back to top"
        className={`fixed left-4 sm:left-6 bottom-24 sm:bottom-28 z-40 grid place-items-center w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-soft transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={22} />
      </button>
    </>
  )
}
