import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routeStops } from '../data/route'
import { galleryData } from '../data/gallery'

/** Map route stop id → gallery locality id */
const galleryIdMap: Record<string, string> = {
  'cordoba': 'cordoba',
  'jesus-maria': 'jesus-maria',
  'avellaneda': 'avellaneda',
  'san-jose-de-la-dormida': 'san-jose-dormida',
  'villa-tulumba': 'villa-tulumba',
  'villa-de-maria': 'villa-maria-rio-seco',
}

export function RouteStory() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const total = routeStops.length
  const stop = routeStops[currentIdx]
  const galleryId = galleryIdMap[stop.id] ?? stop.id
  const hasGallery = galleryData.some((l) => l.id === galleryId && l.images.length > 0)

  const prevIdx = (currentIdx - 1 + total) % total
  const nextIdx = (currentIdx + 1) % total

  const goTo = useCallback(
    (nextI: number) => {
      if (transitioning) return
      setTransitioning(true)
      setTimeout(() => {
        setCurrentIdx((nextI + total) % total)
        setTransitioning(false)
      }, 260)
    },
    [transitioning, total]
  )

  const goPrev = useCallback(() => goTo(currentIdx - 1), [currentIdx, goTo])
  const goNext = useCallback(() => goTo(currentIdx + 1), [currentIdx, goTo])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [goNext, goPrev])

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 48) {
      if (delta < 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  return (
    <div className="route-story-container">
      {/* Locality tabs bar with differentiated sand/cream editorial background */}
      <nav className="locality-tabs-bar" aria-label="Paradas del recorrido">
        <div className="locality-tabs">
          {routeStops.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`locality-tab ${i === currentIdx ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-current={i === currentIdx ? 'true' : undefined}
            >
              {s.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Split viewer */}
      <div
        className="route-viewer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Photo */}
        <div className={`route-photo-col ${transitioning ? 'fading' : ''}`}>
          <img
            key={stop.id + '-photo'}
            src={stop.photo}
            alt={stop.name}
            className="route-photo"
            style={{ objectPosition: stop.photoPosition || 'center center' }}
          />
        </div>

        {/* Text panel */}
        <div className="route-text-col">
          <div className={`route-text-inner ${transitioning ? 'fading' : ''}`}>
            <h2 className="route-locality">{stop.name}</h2>
            <p className="route-time-label" aria-label={`Horario aproximado: ${stop.approxTime}`}>
              {stop.approxTime}
            </p>
            <p className="route-subtitle-text">{stop.subtitle}</p>
            <p className="route-desc">{stop.description}</p>

            {hasGallery && (
              <Link
                to={`/galeria?lugar=${galleryId}`}
                className="route-gallery-link"
              >
                Ver galería de {stop.name}
                <ArrowRight size={15} />
              </Link>
            )}

            {/* Nav controls */}
            <div className="route-nav-controls">
              <button
                type="button"
                className="route-nav-btn prev"
                onClick={goPrev}
                aria-label={`Parada anterior: ${routeStops[prevIdx].name}`}
              >
                <span className="route-nav-btn-label">
                  <ChevronLeft size={14} /> Anterior
                </span>
                <span className="route-nav-btn-name">{routeStops[prevIdx].name}</span>
              </button>

              <button
                type="button"
                className="route-nav-btn next"
                onClick={goNext}
                aria-label={`Siguiente parada: ${routeStops[nextIdx].name}`}
              >
                <span className="route-nav-btn-label">
                  Siguiente <ChevronRight size={14} />
                </span>
                <span className="route-nav-btn-name">{routeStops[nextIdx].name}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
