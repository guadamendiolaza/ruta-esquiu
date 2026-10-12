import { Hero } from '../components/Hero'
import { VideoSection } from '../components/VideoSection'
import { IncludesSection } from '../components/IncludesSection'
import { CongressStrip } from '../components/CongressStrip'

export function HomePage() {
  return (
    <>
      <Hero />

      {/* Intro */}
      <section id="intro" className="intro-section" aria-label="Sobre la experiencia">
        <div className="container intro-inner">
          <div className="intro-label">
            <p className="section-eyebrow">La experiencia</p>
          </div>
          <div className="intro-body">
            <h2 className="intro-heading">
              Un camino con memoria,<br /> territorio y sentido
            </h2>
            <p className="intro-text">
              Ruta Esquiú invita a recorrer los paisajes, los pueblos y la memoria viva del norte
              cordobés. Un camino pensado para caminar junto a la historia, la fe y la comunidad
              que guarda el legado de Fray Mamerto Esquiú.
            </p>
          </div>
        </div>
      </section>

      <VideoSection />
      <IncludesSection />
      <CongressStrip />
    </>
  )
}
