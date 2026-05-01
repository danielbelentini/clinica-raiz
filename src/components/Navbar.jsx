import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/implantes', label: 'Implantes' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header>
      <nav
        aria-label="Navegação principal"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled || menuOpen ? '#ffffff' : 'rgba(255,255,255,0.97)',
          boxShadow: scrolled ? '0 1px 24px rgba(27,43,75,0.08)' : 'none',
          borderBottom: '1px solid #EEF1F7',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" aria-label="Clínica Raiz — página inicial" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: '#1B2B4B' }}>
              <span className="font-bold text-sm" style={{ color: '#C47B5F' }}>R</span>
            </div>
            <span className="font-bold text-base tracking-tight" style={{ color: '#1B2B4B' }}>
              Clínica Raiz
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none items-center m-0 p-0">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm font-medium no-underline transition-colors duration-200"
                  style={{ color: pathname === l.to ? '#C47B5F' : '#1B2B4B', opacity: pathname === l.to ? 1 : 0.7 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/implantes#contato" className="hidden md:inline-block btn-primary !py-2.5 !px-5 text-xs">
            Agendar Avaliação
          </Link>

          {/* Hamburguer */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 border-0 bg-transparent cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#1B2B4B', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
            <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#1B2B4B', opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 transition-all duration-300" style={{ background: '#1B2B4B', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: '#EEF1F7', background: '#ffffff' }}>
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-medium no-underline"
                style={{ color: pathname === l.to ? '#C47B5F' : '#1B2B4B' }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/implantes#contato" className="btn-primary text-center mt-2">
              Agendar Avaliação
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
