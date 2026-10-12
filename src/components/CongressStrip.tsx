export function CongressStrip() {
  return (
    <div className="congress-strip">
      <div className="container congress-strip-inner">
        <img
          src="/assets/branding/logo-congreso.png"
          alt="Logo del III Congreso Académico Beato Mamerto Esquiú"
          className="congress-logo"
          loading="lazy"
        />
        <p className="congress-text">
          La Ruta Esquiú se realiza en el marco del{' '}
          <strong>III Congreso Académico Beato Mamerto Esquiú</strong>
          {' '}· Córdoba · 27 y 28 de noviembre de 2026.
        </p>
      </div>
    </div>
  )
}
