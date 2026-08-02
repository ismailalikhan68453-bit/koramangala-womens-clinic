import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Doctors from './components/Doctors'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefersDark
    setDark(isDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const pct = height > 0 ? (scrollTop / height) * 100 : 0
      if (bar) bar.style.width = `${pct}%`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Loader
  useEffect(() => {
    const loader = document.getElementById('loader')
    if (!loader) return
    const t = setTimeout(() => {
      loader.style.opacity = '0'
      setTimeout(() => loader.remove(), 400)
    }, 600)
    return () => clearTimeout(t)
  }, [])

  const toggleDark = () => setDark((v) => !v)

  return (
    <div className="page-enter">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Doctors />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
