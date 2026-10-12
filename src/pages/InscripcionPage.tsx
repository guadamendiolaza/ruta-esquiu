import { REGISTRATION_URL, WHATSAPP_URL, siteConfig } from '../config/site'

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.979-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.18-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.3-.019-.463.132-.613.136-.134.301-.351.451-.527.151-.176.2-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.234-.244-.588-.493-.508-.677-.518-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.9.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.351zM12.04 2C6.54 2 2.08 6.46 2.08 11.96c0 1.92.54 3.71 1.48 5.23L2 22l4.96-1.52c1.47.88 3.18 1.38 5.08 1.38 5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.2c-1.62 0-3.13-.48-4.4-1.31l-.32-.21-2.95.9.95-2.87-.23-.35c-.94-1.32-1.44-2.92-1.44-4.6 0-4.63 3.77-8.4 8.4-8.4s8.4 3.77 8.4 8.4-3.77 8.44-8.4 8.44z" />
    </svg>
  )
}

export function InscripcionPage() {
  return (
    <div className="page-inscripcion">
      <div className="container inscripcion-layout">
        <div className="inscripcion-copy">
          <p className="section-eyebrow">Inscripción</p>
          <h1 className="inscripcion-title">
            Este camino también<br /> puede ser el tuyo
          </h1>
          <p className="inscripcion-date">{siteConfig.eventDate}</p>
          <p className="inscripcion-includes">
            Transporte · Almuerzo · Seguro · Guía y acompañamiento
          </p>
        </div>

        <div className="inscripcion-card">
          <a
            className="button button-primary inscripcion-cta"
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscribirme a la Ruta Esquiú
          </a>

          <a
            className="button button-outline inscripcion-cta inscripcion-whatsapp-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>Consultar por WhatsApp</span>
          </a>

          <div className="qr-section">
            <img
              src="/assets/branding/qr-inscripcion.png"
              alt="Código QR para acceder al formulario de inscripción"
              className="qr-img"
              width="150"
              height="150"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <p className="qr-label">Escaneá para inscribirte</p>
          </div>
        </div>
      </div>
    </div>
  )
}
