import { WHATSAPP_URL, WHATSAPP_DISPLAY, siteConfig } from '../config/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/assets/branding/logo-ucc.png"
            alt="Logo Universidad Católica de Córdoba"
            width="44"
            height="44"
          />
          <div className="footer-brand-text">
            <p className="footer-university">{siteConfig.university}</p>
            <p className="footer-team">{siteConfig.organizer}</p>
          </div>
        </div>

        <div className="footer-contact">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
            aria-label={`Consultar por WhatsApp al ${WHATSAPP_DISPLAY}`}
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>

        <p className="footer-copy">© Ruta Esquiú 2026</p>
      </div>
    </footer>
  )
}
