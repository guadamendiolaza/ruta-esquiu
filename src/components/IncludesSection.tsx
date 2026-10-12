import { Car, Utensils, Shield, MapPin } from 'lucide-react'

const items = [
  {
    Icon: Car,
    title: 'Transporte',
    desc: 'Traslado cómodo durante todo el recorrido.',
  },
  {
    Icon: Utensils,
    title: 'Almuerzo',
    desc: 'Pausa de encuentro y convivencia en el camino.',
  },
  {
    Icon: Shield,
    title: 'Seguro',
    desc: 'Cobertura para vivir la experiencia con tranquilidad.',
  },
  {
    Icon: MapPin,
    title: 'Guía y acompañamiento',
    desc: 'Recorrido pensado para comprender cada lugar.',
  },
]

export function IncludesSection() {
  return (
    <section className="includes-section" aria-label="Qué incluye">
      <div className="container">
        <p className="section-eyebrow">Qué incluye</p>
        <div className="includes-strip">
          {items.map(({ Icon, title, desc }) => (
            <div key={title} className="include-item">
              <div className="include-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="include-title">{title}</h3>
              <p className="include-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
