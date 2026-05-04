import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0F1E35', color: '#94a3b8' }} className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: '#243660' }}>
              <span className="font-bold text-xs" style={{ color: '#C47B5F' }}>R</span>
            </div>
            <span className="font-bold text-sm text-white">Clínica Raiz</span>
          </div>
          <p className="text-sm leading-relaxed">Especialistas em implantodontia.<br />Devolvemos sua capacidade de sorrir.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Navegação</h3>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {[['/', 'Home'], ['/sobre', 'Sobre'], ['/implantes', 'Implantes']].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-sm hover:text-white transition-colors no-underline" style={{ color: '#94a3b8' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-3">Contato</h3>
          <p className="text-sm mb-1">Seg a Sex: 08h às 19h</p>
          <p className="text-sm mb-2">Sábado: 08h às 14h</p>
          <a href="https://wa.me/5511999921543" className="text-sm font-semibold no-underline transition-colors" style={{ color: '#C47B5F' }}>
            (11) 99992-1543
          </a>
        </div>
      </div>

      <div className="border-t pt-6 text-center text-xs" style={{ borderColor: '#243660' }}>
        © {new Date().getFullYear()} Clínica Raiz. Todos os direitos reservados.
      </div>
    </footer>
  )
}
