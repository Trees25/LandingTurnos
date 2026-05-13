import { motion } from 'framer-motion'
import { ExternalLink, MessageCircle } from 'lucide-react'

const DEMO_URL = 'https://trees-turnos.netlify.app'
const WA_URL   = 'https://wa.me/5402646620954'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56,189,248,0.1) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6">
            <span className="text-xs font-semibold text-sky-400">Disponible ahora</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
            ¿Querés verlo{' '}
            <span className="text-gradient">en acción?</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Probá el sistema ahora mismo sin registro. Si te interesa una versión propia, personalizada para tu empresa, hablanos por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-900 font-bold text-base transition-all duration-200 glow-btn hover:scale-105"
            >
              Abrir Demo <ExternalLink size={17} />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card hover:bg-white/5 text-white font-semibold text-base transition-all duration-200 hover:border-sky-500/30"
            >
              <MessageCircle size={17} className="text-green-400" />
              Quiero el mío personalizado
            </a>
          </div>

          {/* Small print */}
          <p className="mt-8 text-slate-600 text-sm">
            La demo es pública · Sin tarjeta de crédito · Sin compromisos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
