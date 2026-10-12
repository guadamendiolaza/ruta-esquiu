export const REGISTRATION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScWr3_D4WDDZNAIEo1-L1gKg50vRMP2WAG_EE4uQgHla00qfg/viewform'

export const WHATSAPP_NUMBER = '5493515511400'
export const WHATSAPP_DISPLAY = '3515511400'
export const WHATSAPP_MESSAGE =
  'Hola, quisiera consultar sobre la Ruta Esquiú del 28 de noviembre.'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export const siteConfig = {
  siteName: 'Ruta Esquiú',
  title: 'Ruta Esquiú | Tras las huellas de su legado en el Norte Cordobés',
  description:
    'Ruta Esquiú invita a recorrer el norte cordobés junto a la memoria de Fray Mamerto Esquiú, con historia, patrimonio, comunidad y espiritualidad.',
  eventDate: 'Sábado 28 de noviembre de 2026',
  eventDateLong: '28 de noviembre de 2026',
  congress: 'III Congreso Académico Beato Mamerto Esquiú',
  congressLocation: 'Córdoba',
  organizer: 'Equipo de Investigación sobre Fray Mamerto Esquiú (UCC)',
  university: 'Universidad Católica de Córdoba',
  whatsappNumber: WHATSAPP_DISPLAY,
  whatsappNumberInternational: WHATSAPP_NUMBER,
  whatsappUrl: WHATSAPP_URL,
  canonical: 'https://rutaesquiu.com/',
  ogImage: '/assets/branding/esquiu-retrato.png',
  navItems: [
    { label: 'Inicio', href: '/' },
    { label: 'Recorrido', href: '/recorrido' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Inscripción', href: '/inscripcion' },
  ],
}
