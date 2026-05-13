import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Menu, X, ExternalLink } from 'lucide-react'

const DEMO_URL = 'https://trees-turnos.netlify.app'
const navLinks = [
  { label: 'Características', href: '#features' },
  { label: 'Cómo funciona', href: '#how' },
  { label: 'Industrias', href: '#industries' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/5' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center group-hover:bg-sky-500/30 transition-colors">
            <CalendarDays size={17} className="text-sky-400" />
          </div>
          <span className="font-semibold text-white text-sm tracking-tight">Sistema de Turnos</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold text-sm transition-all duration-200 glow-btn hover:scale-105"
        >
          Acceder al Sistema <ExternalLink size={13} />
        </a>

        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass border-t border-white/5 md:hidden"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-slate-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-sky-500 text-slate-900 font-semibold text-sm">
              Acceder al Sistema <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
