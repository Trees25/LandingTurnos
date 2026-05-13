import { motion } from 'framer-motion'
import { Zap, Globe2, ShieldCheck, FileText, Smartphone, Users } from 'lucide-react'

const stats = [
  { icon: Globe2,      value: '100% Web',     label: 'Sin instalaciones' },
  { icon: Zap,         value: 'En segundos',  label: 'Planificá una semana' },
  { icon: ShieldCheck, value: 'Por roles',    label: 'Acceso diferenciado' },
  { icon: Smartphone,  value: 'Responsive',   label: 'Funciona en móvil' },
  { icon: FileText,    value: 'Export PDF',   label: 'Planillas imprimibles' },
  { icon: Users,       value: 'Multi-equipo', label: 'Varios sectores' },
]

export default function StatsBar() {
  return (
    <section className="relative py-12 border-y border-white/5" style={{ background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                <Icon size={18} className="text-sky-400" />
              </div>
              <span className="text-white font-bold text-sm">{value}</span>
              <span className="text-slate-500 text-xs">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
