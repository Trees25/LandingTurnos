import { motion } from 'framer-motion'
import { CalendarDays, Users, ShieldCheck, FileDown, Smartphone, Zap } from 'lucide-react'

const features = [
  {
    icon: CalendarDays,
    title: 'Planificación visual',
    desc: 'Arrastrá fichas de turno a la grilla semanal. Visualizá quién trabaja cada día de un vistazo.',
  },
  {
    icon: Users,
    title: 'Gestión del equipo',
    desc: 'Agregá empleados, asignales hospital y sector, y buscalos fácilmente con filtros.',
  },
  {
    icon: ShieldCheck,
    title: 'Acceso por roles',
    desc: 'Admin planifica y publica. Empleados solo ven sus turnos asignados. Control total.',
  },
  {
    icon: FileDown,
    title: 'Exportación a PDF',
    desc: 'Descargá la planilla mensual en PDF para imprimir o compartir con el equipo.',
  },
  {
    icon: Smartphone,
    title: 'Funciona en móvil',
    desc: 'Diseño responsive que funciona en celular, tablet y PC sin instalar nada.',
  },
  {
    icon: Zap,
    title: 'Historial de planillas',
    desc: 'Accedé a todas las planillas publicadas anteriores. Organizadas por mes y sector.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">Características</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Todo lo que necesitás,<br />
            <span className="text-gradient">sin lo que no necesitás</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Sin configuraciones complejas. Entrás, cargás tu equipo y empezás a planificar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 card-hover cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-sky-400" />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
