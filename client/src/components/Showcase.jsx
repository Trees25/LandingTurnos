import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDays, Users, History, UserCircle } from 'lucide-react'

import imgPlanner from '../assets/image.webp'
import imgTeam from '../assets/image (1).webp'
import imgHistory from '../assets/image (2).webp'
import imgEmployee from '../assets/image (3).webp'

const tabs = [
  {
    id: 'planner',
    icon: CalendarDays,
    label: 'Planilla semanal',
    badge: 'Admin',
    badgeColor: 'bg-sky-500/20 text-sky-300',
    desc: 'El administrador arrastra fichas de turno (Mañana, Tarde, Noche, Franco) a la grilla semanal y las asigna a cada miembro del equipo. Guardá un borrador o publicá directamente.',
    img: imgPlanner,
  },
  {
    id: 'team',
    icon: Users,
    label: 'Gestión del equipo',
    badge: 'Admin',
    badgeColor: 'bg-sky-500/20 text-sky-300',
    desc: 'Cargá empleados con su nombre, DNI y número de matrícula. Asignales hospital o sucursal, sector y rol. Filtrá y buscá fácilmente para gestionar equipos grandes.',
    img: imgTeam,
  },
  {
    id: 'history',
    icon: History,
    label: 'Historial',
    badge: 'Admin',
    badgeColor: 'bg-sky-500/20 text-sky-300',
    desc: 'Todas las planillas publicadas organizadas por mes. Descargá cualquier planilla histórica en PDF o editá el borrador del mes en curso.',
    img: imgHistory,
  },
  {
    id: 'employee',
    icon: UserCircle,
    label: 'Vista del empleado',
    badge: 'Empleado',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
    desc: 'Cada empleado ve su propio calendario mensual con los turnos que le fueron asignados. Acceso personal, sin ver los datos del resto del equipo.',
    img: imgEmployee,
  },
]

export default function Showcase() {
  const [active, setActive] = useState(0)

  return (
    <section id="showcase" className="py-24 relative" style={{ background: 'rgba(255,255,255,0.012)' }}>
      <div className="absolute inset-0 radial-glow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">El sistema por dentro</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Cada rol tiene su <span className="text-gradient">propia vista</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Desde la planificación del administrador hasta el calendario personal del empleado.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto justify-start md:justify-center gap-2 mb-6 pb-1 no-scrollbar">
          {tabs.map(({ id, icon: Icon, label, badge, badgeColor }, i) => (
            <button
              key={id}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active === i
                ? 'bg-sky-500 text-slate-900 shadow-lg shadow-sky-500/30'
                : 'glass-card text-slate-400 hover:text-white hover:border-sky-500/25'
                }`}
            >
              <Icon size={15} />
              {label}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${active === i ? 'bg-slate-900/25 text-slate-900' : badgeColor
                }`}>
                {badge}
              </span>
            </button>
          ))}
        </div>

        {/* Tab description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="text-center text-slate-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed"
          >
            {tabs[active].desc}
          </motion.p>
        </AnimatePresence>

        {/* Browser frame + screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-sky-500/6 blur-3xl rounded-3xl pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser chrome */}
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

            {/* Screenshot with fade transition */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={tabs[active].img}
                  alt={tabs[active].label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="w-full block object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-slate-400 text-xs mt-5">
          * Las capturas muestran el sistema configurado para el sector de enfermería como ejemplo.
          El sistema es adaptable a cualquier rubro y organización.
        </p>
      </div>
    </section>
  )
}
