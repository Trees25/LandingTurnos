import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import screenshotPlanner from '../assets/image.webp'

const DEMO_URL = 'https://trees-turnos.netlify.app'
const WA_URL = 'https://wa.me/5492646620954'

const WORDS = ['hospitales', 'restaurantes', 'fábricas', 'seguridad', 'comercios', 'clínicas']

const SHIFTS = [
  { label: 'Mañana', color: 'bg-sky-500 text-white' },
  { label: 'Tarde', color: 'bg-orange-400 text-white' },
  { label: 'Noche', color: 'bg-indigo-500 text-white' },
  { label: 'Franco', color: 'bg-slate-500 text-white' },
]

const ROWS = [
  { name: 'Ana García', shifts: [0, null, 1, 0, null, 3, null] },
  { name: 'Carlos López', shifts: [null, 2, null, 1, 1, null, 0] },
  { name: 'María Sosa', shifts: [1, 1, 0, null, 2, null, 3] },
]

const DAYS = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM']

function SystemMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="absolute inset-0 bg-sky-500/8 blur-3xl rounded-3xl" />
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ background: 'rgba(255,255,255,0.02)' }}>
        {/* Browser bar */}
        <div className="bg-[#0d1526] border-b border-white/5 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 bg-[#1e293b] rounded h-5 flex items-center px-3">
            <span className="text-[10px] text-slate-500">trees-turnos.netlify.app</span>
          </div>
        </div>

        {/* App UI */}
        <div className="bg-[#f7fdf4] p-4">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-slate-700">📅 Planilla semanal</span>
              <span className="text-[10px] text-slate-400">· Semana 11 may — 17 may</span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-green-700 text-white">Guardar</span>
          </div>

          {/* Chips */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {SHIFTS.map(s => (
              <span key={s.label} className={`${s.color} text-[9px] font-bold px-2 py-0.5 rounded-full`}>{s.label}</span>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[520px]">
              <div className="grid grid-cols-8 gap-1 mb-1">
                <div className="text-[9px] font-bold text-slate-400 uppercase">Empleado</div>
                {DAYS.map((d, i) => (
                  <div key={d} className="text-[9px] font-bold text-slate-400 uppercase text-center">{d}<br /><span className="text-slate-300">{11 + i}</span></div>
                ))}
              </div>
              {ROWS.map(row => (
                <div key={row.name} className="grid grid-cols-8 gap-1 py-1.5 border-t border-slate-100/50">
                  <div className="text-[9px] font-semibold text-slate-700 truncate pr-1">{row.name}</div>
                  {row.shifts.map((s, i) => (
                    <div key={i} className={`rounded text-[8px] font-bold text-center py-0.5 ${s !== null ? SHIFTS[s].color + ' opacity-80' : 'bg-transparent'}`}>
                      {s !== null ? SHIFTS[s].label : ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-card"
        >
          <Sparkles size={13} className="text-sky-400" />
          <span className="text-xs font-medium text-sky-300">Demo disponible ahora mismo — sin registro</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
        >
          Planificá turnos para{' '}
          <span className="inline-flex flex-col overflow-hidden" style={{ height: '1.15em', verticalAlign: 'bottom' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.32, ease: 'easeInOut' }}
                className="text-gradient"
              >
                {WORDS[idx]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />sin complicaciones
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="text-lg text-slate-400 max-w-xl leading-relaxed"
        >
          Organizá y publicá horarios de trabajo desde cualquier dispositivo, para cualquier rubro. Sin planillas de Excel, sin errores.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={DEMO_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold text-sm transition-all duration-200 glow-btn hover:scale-105"
          >
            Ver Demo en vivo <ExternalLink size={15} />
          </a>
          <a
            href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-card hover:bg-white/5 text-white font-semibold text-sm transition-all duration-200 hover:border-sky-500/30"
          >
            Quiero el mío personalizado <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full mt-8"
        >
          <SystemMockup />
        </motion.div>
      </div>
    </section>
  )
}
