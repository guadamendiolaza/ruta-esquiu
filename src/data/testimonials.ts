export type Testimonial = {
  name: string
  role: string
  quote: string
  image: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Participante primera edición',
    role: 'Historia y memoria',
    quote: 'Una experiencia que conecta la historia del territorio con la emoción de caminarlo junto a la comunidad.',
    image: '/assets/esquiu/testimonio-01.svg',
  },
  {
    name: 'Participante primera edición',
    role: 'Recuerdo colectivo',
    quote: 'No fue solo un recorrido: fue volver a mirar el norte cordobés con otro sentido, más profundo y humano.',
    image: '/assets/esquiu/testimonio-02.svg',
  },
  {
    name: 'Participante primera edición',
    role: 'Patrimonio y comunidad',
    quote: 'La mezcla entre historia, paisaje y acompañamiento hizo que cada parada cobrara una presencia muy real.',
    image: '/assets/esquiu/testimonio-03.svg',
  },
]
