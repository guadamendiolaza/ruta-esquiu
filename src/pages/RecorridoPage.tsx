import { RouteStory } from '../components/RouteStory'

export function RecorridoPage() {
  return (
    <div className="page-recorrido">
      <div className="container recorrido-topbar">
        <div className="recorrido-topbar-left">
          <h1 className="recorrido-title">Recorrido</h1>
          <span className="recorrido-label">Capítulos del viaje</span>
        </div>
      </div>

      <div className="container recorrido-main-wrap">
        <RouteStory />
      </div>

      <div className="recorrido-bottom-divider" aria-hidden="true" />
    </div>
  )
}
