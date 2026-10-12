import { GalleryCoverflow } from '../components/GalleryCoverflow'

export function GaleriaPage() {
  return (
    <div className="page-galeria">
      <div className="container galeria-topbar">
        <div className="galeria-topbar-left">
          <h1 className="galeria-title">Galería</h1>
          <span className="galeria-label">Instantáneas del camino</span>
        </div>
      </div>

      <div className="container galeria-main-wrap">
        <GalleryCoverflow />
      </div>

      <div className="galeria-bottom-divider" aria-hidden="true" />
    </div>
  )
}
