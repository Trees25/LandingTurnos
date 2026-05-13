import { CalendarDays, ExternalLink } from 'lucide-react'

const DEMO_URL = 'https://trees-turnos.netlify.app'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
              <CalendarDays size={15} className="text-sky-400" />
            </div>
            <span className="font-semibold text-white text-sm">Sistema de Turnos</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { label: 'Demo', href: DEMO_URL, external: true },
              { label: 'Características', href: '#features' },
              { label: 'Industrias', href: '#industries' },
              { label: 'Contacto', href: '#contact' },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
              >
                {l.label}
                {l.external && <ExternalLink size={11} />}
              </a>
            ))}
          </nav>

          {/* Credit */}
          <p className="text-slate-600 text-sm">
            Desarrollado por{' '}
            <a href="https://www.treestech.dev" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors font-medium">
              TreesTech
            </a>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-700 text-xs">© {new Date().getFullYear()} Sistema de Turnos · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
