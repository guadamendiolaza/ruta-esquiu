export function VideoSection() {
  return (
    <section className="video-section" aria-label="Video de la experiencia">
      <div className="container">
        <div className="video-frame-wrap">
          <iframe
            src="https://www.youtube.com/embed/xI3Ns3vh9V0?si=6x_0D0-4S8kQfXkQ"
            title="Ruta Esquiú — video de la experiencia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <p className="video-caption">
          Historia · comunidad · patrimonio · memoria
        </p>
      </div>
    </section>
  )
}
