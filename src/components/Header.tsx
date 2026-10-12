import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Ruta Esquiú — volver a inicio">
          <span className="brand-mark">RUTA</span>
          <span className="brand-name">ESQUIÚ</span>
        </Link>

        <nav
          className={`main-nav ${menuOpen ? 'nav-open' : ''}`}
          aria-label="Navegación principal"
          id="main-nav"
        >
          {siteConfig.navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
          {/* Mobile direct CTA inside drawer */}
          <Link
            className="button button-primary mobile-drawer-btn"
            to="/inscripcion"
            onClick={() => setMenuOpen(false)}
          >
            Reservar lugar
          </Link>
        </nav>

        <div className="nav-actions">
          <Link
            className="button button-primary nav-button"
            to="/inscripcion"
            onClick={() => setMenuOpen(false)}
          >
            Reservar lugar
          </Link>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="nav-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  )
}
