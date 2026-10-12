import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="hero" aria-label="Portada Ruta Esquiú">
      {/* Text column */}
      <div className="hero-text-col">
        <div className="hero-medallion" aria-hidden="true">
          <img
            src="/assets/branding/esquiu-retrato.png"
            alt=""
            className="hero-medallion-img"
          />
        </div>

        <h1 className="hero-title">Ruta Esquiú</h1>

        <p className="hero-subtitle">
          Tras las huellas de su legado<br className="hero-br" /> en el Norte Cordobés
        </p>

        <p className="hero-date">Sábado 28 de noviembre de 2026</p>

        <p className="hero-phrase">
          Un recorrido por la historia, la fe y la memoria del norte cordobés.
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" to="/inscripcion">
            Reservá tu lugar
          </Link>
          <Link className="button button-ghost" to="/recorrido">
            Descubrí el recorrido
          </Link>
        </div>
      </div>

      {/* Photo column */}
      <div className="hero-photo-col">
        <img
          src="/assets/recorrido/esquiu-estatua-portada.jpg"
          alt="Estatua de Fray Mamerto Esquiú en el Norte Cordobés"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}
