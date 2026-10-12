import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { galleryData } from '../data/gallery'

/* ─── Lightbox Fullscreen ────────────────────────────────────────── */
type LightboxProps = {
  localityId: string
  imageIdx: number
  onClose: () => void
  onNavigate: (idx: number) => void
}

function Lightbox({ localityId, imageIdx, onClose, onNavigate }: LightboxProps) {
  const locality = galleryData.find((l) => l.id === localityId)!
  const images = locality.images
  const currentImg = images[imageIdx]
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && images.length > 1) onNavigate((imageIdx + 1) % images.length)
      if (e.key === 'ArrowLeft' && images.length > 1) onNavigate((imageIdx - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [imageIdx, images.length, onClose, onNavigate])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || images.length <= 1) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 48) {
      if (delta < 0) onNavigate((imageIdx + 1) % images.length)
      else onNavigate((imageIdx - 1 + images.length) % images.length)
    }
    touchStartX.current = null
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Cerrar imagen ampliada (Escape)"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-arrow lightbox-arrow-left"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate((imageIdx - 1 + images.length) % images.length)
          }}
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div className="lightbox-img-container" onClick={(e) => e.stopPropagation()}>
        <img
          src={currentImg.src}
          alt={currentImg.alt}
          className="lightbox-img"
        />
        <p className="lightbox-caption">{currentImg.alt}</p>
      </div>

      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-arrow lightbox-arrow-right"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate((imageIdx + 1) % images.length)
          }}
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <p className="lightbox-counter" onClick={(e) => e.stopPropagation()}>
        {imageIdx + 1} / {images.length}
      </p>
    </div>
  )
}

/* ─── Coverflow Gallery ──────────────────────────────────────────── */
export function GalleryCoverflow() {
  const [searchParams] = useSearchParams()
  const initialLocality = useMemo(() => {
    const lugar = searchParams.get('lugar')
    if (lugar) {
      const found = galleryData.find((l) => l.id === lugar)
      if (found) return found.id
    }
    return galleryData[0].id
  }, [searchParams])

  const [activeLocality, setActiveLocality] = useState(initialLocality)
  const [activeImage, setActiveImage] = useState(0)
  const [prevLocality, setPrevLocality] = useState(initialLocality)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)

  // Reset image on locality change
  if (activeLocality !== prevLocality) {
    setPrevLocality(activeLocality)
    setActiveImage(0)
  }

  // Update locality from URL param when navigating
  useEffect(() => {
    const lugar = searchParams.get('lugar')
    if (lugar) {
      const found = galleryData.find((l) => l.id === lugar)
      if (found && found.id !== activeLocality) {
        setActiveLocality(found.id)
      }
    }
  }, [searchParams, activeLocality])

  const locality = galleryData.find((l) => l.id === activeLocality)!
  const images = locality.images
  const total = images.length

  const goTo = useCallback(
    (idx: number) => setActiveImage(((idx % total) + total) % total),
    [total]
  )

  // Keyboard nav (only when lightbox closed)
  useEffect(() => {
    if (lightboxOpen || total <= 1) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(activeImage + 1)
      if (e.key === 'ArrowLeft') goTo(activeImage - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, activeImage, goTo, total])

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 48) {
      if (delta < 0) goTo(activeImage + 1)
      else goTo(activeImage - 1)
    }
    touchStartX.current = null
  }

  // Compute coverflow transforms for each image
  const getItemStyle = (index: number): React.CSSProperties => {
    const diff = index - activeImage

    if (diff === 0) {
      return {
        transform: 'translateX(-50%) rotateY(0deg) scale(1)',
        left: '50%',
        opacity: 1,
        zIndex: 3,
        filter: 'brightness(1)',
      }
    }

    if (diff === 1 || (diff === -(total - 1) && total > 2)) {
      return {
        transform: 'translateX(calc(-50% + 42%)) rotateY(-5deg) scale(0.85)',
        left: '50%',
        opacity: 0.65,
        zIndex: 2,
        filter: 'brightness(0.9)',
      }
    }

    if (diff === -1 || (diff === (total - 1) && total > 2)) {
      return {
        transform: 'translateX(calc(-50% - 42%)) rotateY(5deg) scale(0.85)',
        left: '50%',
        opacity: 0.65,
        zIndex: 2,
        filter: 'brightness(0.9)',
      }
    }

    // All others hidden behind
    const direction = diff > 0 ? 1 : -1
    return {
      transform: `translateX(calc(-50% + ${direction * 80}%)) scale(0.7)`,
      left: '50%',
      opacity: 0,
      zIndex: 1,
      pointerEvents: 'none',
    }
  }

  const isActive = (i: number) => i === activeImage
  const isPrev = (i: number) => {
    const diff = i - activeImage
    return diff === -1 || (diff === (total - 1) && total > 2)
  }
  const isNext = (i: number) => {
    const diff = i - activeImage
    return diff === 1 || (diff === -(total - 1) && total > 2)
  }

  return (
    <div className="gallery-layout-container">
      {/* Locality tabs */}
      <nav className="locality-tabs-bar" aria-label="Localidades de la galería">
        <div className="locality-tabs">
          {galleryData.map((l) => (
            <button
              key={l.id}
              type="button"
              className={`locality-tab ${l.id === activeLocality ? 'active' : ''}`}
              onClick={() => setActiveLocality(l.id)}
              aria-current={l.id === activeLocality ? 'true' : undefined}
            >
              {l.name}
            </button>
          ))}
        </div>
      </nav>

      {/* Coverflow area */}
      <div
        className="coverflow-wrap"
        onTouchStart={total > 1 ? onTouchStart : undefined}
        onTouchEnd={total > 1 ? onTouchEnd : undefined}
      >
        {total === 1 ? (
          /* Single photo — uses the exact same consistent active frame */
          <div className="coverflow-stage single-mode">
            <div
              className="coverflow-single"
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setLightboxOpen(true)
              }}
              aria-label="Ver imagen ampliada"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                loading="lazy"
                className="coverflow-single-img"
                style={{ objectPosition: images[0].previewPosition || 'center center' }}
              />
              <button
                type="button"
                className="coverflow-expand-btn"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxOpen(true)
                }}
                aria-label="Ver fotografía completa"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Multiple photos — coverflow with identical frame size */
          <div className="coverflow-stage">
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`coverflow-item ${isActive(i) ? 'active' : ''} ${isPrev(i) ? 'prev' : ''} ${isNext(i) ? 'next' : ''}`}
                style={getItemStyle(i)}
                onClick={() => {
                  if (isActive(i)) return
                  goTo(i)
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{ objectPosition: img.previewPosition || 'center center' }}
                />
                {isActive(i) && (
                  <button
                    type="button"
                    className="coverflow-expand-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxOpen(true)
                    }}
                    aria-label="Ver fotografía completa"
                  >
                    <Maximize2 size={16} />
                  </button>
                )}
              </div>
            ))}

            {/* Arrows */}
            <button
              type="button"
              className="coverflow-arrow coverflow-arrow-left"
              onClick={() => goTo(activeImage - 1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="coverflow-arrow coverflow-arrow-right"
              onClick={() => goTo(activeImage + 1)}
              aria-label="Foto siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        )}

        {/* Counter */}
        <p className="coverflow-counter" aria-live="polite" aria-atomic="true">
          {activeImage + 1} / {total}
        </p>
      </div>

      {lightboxOpen && (
        <Lightbox
          localityId={activeLocality}
          imageIdx={activeImage}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveImage}
        />
      )}
    </div>
  )
}
