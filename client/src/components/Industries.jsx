import { motion } from 'framer-motion'
import { HeartPulse, UtensilsCrossed, Factory, ShieldAlert, ShoppingBag, GraduationCap } from 'lucide-react'

const industries = [
  { icon: HeartPulse,      color: 'text-rose-400',   bg: 'bg-rose-500/10 border-rose-500/20',   name: 'Salud',       desc: 'Hospitales, clínicas y centros médicos con guardias rotativas por servicio.' },
  { icon: UtensilsCrossed, color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/20', name: 'Gastronomía', desc: 'Mozos, cocina y barra con turnos partidos y días de descanso variables.' },
  { icon: Factory,         color: 'text-sky-400',    bg: 'bg-sky-500/10 border-sky-500/20',     name: 'Manufactura', desc: 'Plantas industriales con líneas de producción en turnos rotativos.' },
  { icon: ShieldAlert,     color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', name: 'Seguridad', desc: 'Personal de guardia con coberturas de 24hs y puestos diferenciados.' },
  { icon: ShoppingBag,     color: 'text-emerald-400',bg: 'bg-emerald-500/10 border-emerald-500/20', name: 'Retail',  desc: 'Comercios con cajeros y repositores organizados por sucursal y turno.' },
  { icon: GraduationCap,   color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', name: 'Educación', desc: 'Instituciones con preceptores y personal no docente en distintos horarios.' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">Industrias</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Adaptado a <span className="text-gradient">tu rubro</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-lg mx-auto">
            El sistema es flexible y funciona para cualquier organización que trabaje con turnos rotativos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map(({ icon: Icon, color, bg, name, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 flex gap-4 card-hover cursor-default"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${bg}`}>
                <Icon size={20} className={color} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
