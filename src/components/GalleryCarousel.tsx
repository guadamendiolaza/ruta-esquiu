import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { galleryData } from '../data/gallery'

type LightboxProps = {
  localityId: string
  imageIdx: number
  onClose: () => void
  onNavigate: (idx: number) => void
}

function Lightbox({ localityId, imageIdx, onClose, onNavigate }: LightboxProps) {
  const locality = galleryData.find((l) => l.id === localityId)!
  const images = locality.images
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((imageIdx + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((imageIdx - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [imageIdx, images.length, onClose, onNavigate])

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Imagen ampliada"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X size={18} />
      </button>

      <button
        type="button"
        className="lightbox-arrow lightbox-arrow-left"
        onClick={(e) => { e.stopPropagation(); onNavigate((imageIdx - 1 + images.length) % images.length) }}
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={22} />
      </button>

      <img
        src={images[imageIdx].src}
        alt={images[imageIdx].alt}
        className="lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        className="lightbox-arrow lightbox-arrow-right"
        onClick={(e) => { e.stopPropagation(); onNavigate((imageIdx + 1) % images.length) }}
        aria-label="Imagen siguiente"
      >
        <ChevronRight size={22} />
      </button>

      <p className="lightbox-counter" onClick={(e) => e.stopPropagation()}>
        {imageIdx + 1} / {images.length}
      </p>
    </div>
  )
}

export function GalleryCarousel() {
  const [activeLocality, setActiveLocality] = useState(galleryData[0].id)
  const [activeImage, setActiveImage] = useState(0)
  const [prevLocality, setPrevLocality] = useState(galleryData[0].id)

  // Reset image index when locality changes (derived during render, no effect needed)
  if (activeLocality !== prevLocality) {
    setPrevLocality(activeLocality)
    setActiveImage(0)
  }
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const locality = galleryData.find((l) => l.id === activeLocality)!
  const images = locality.images
  const total = images.length

  const goTo = useCallback(
    (idx: number) => setActiveImage((idx + total) % total),
    [total]
  )

  // Keyboard nav when lightbox is closed
  useEffect(() => {
    if (lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(activeImage + 1)
      if (e.key === 'ArrowLeft') goTo(activeImage - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, activeImage, goTo])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 48) {
      if (delta < 0) goTo(activeImage + 1)
      else goTo(activeImage - 1)
    }
    touchStartX.current = null
  }

  return (
    <div className="gallery-carousel">
      {/* Locality selector */}
      <nav className="gallery-localities" aria-label="Localidades">
        {galleryData.map((l) => (
          <button
            key={l.id}
            type="button"
            className={`gallery-locality-btn ${l.id === activeLocality ? 'active' : ''}`}
            onClick={() => setActiveLocality(l.id)}
            aria-current={l.id === activeLocality ? 'true' : undefined}
          >
            {l.name}
          </button>
        ))}
      </nav>

      {/* Main viewer */}
      <div
        className="gallery-viewer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="gallery-main-img-wrap">
          <img
            key={images[activeImage].src}
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            className="gallery-main-img"
            loading="lazy"
          />

          {/* Fullscreen button */}
          <button
            type="button"
            className="gallery-fullscreen-btn"
            onClick={() => setLightboxOpen(true)}
            aria-label="Ver imagen ampliada"
          >
            <Maximize2 size={16} />
          </button>
        </div>

        {/* Navigation arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-left"
              onClick={() => goTo(activeImage - 1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="gallery-arrow gallery-arrow-right"
              onClick={() => goTo(activeImage + 1)}
              aria-label="Foto siguiente"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Counter */}
        <p className="gallery-counter" aria-live="polite" aria-atomic="true">
          {activeImage + 1} / {total}
        </p>
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="gallery-thumbs" role="list" aria-label="Miniaturas">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`gallery-thumb ${i === activeImage ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`${locality.name} foto ${i + 1}`}
              role="listitem"
            >
              <img src={img.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}

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
