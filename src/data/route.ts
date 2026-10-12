export type RouteStop = {
  id: string
  name: string
  subtitle: string
  description: string
  approxTime: string
  heritage: string
  connection: string
  photo: string
  detailPhoto?: string
  photoPosition?: string
}

export const routeStops: RouteStop[] = [
  {
    id: 'cordoba',
    name: 'Córdoba',
    subtitle: 'Encuentro en las escalinatas de la Catedral de Córdoba',
    description:
      'El recorrido comienza con el encuentro en la ciudad y la memoria histórica que marca el inicio de un camino pensado desde la comunidad, la fe y la identidad regional.',
    approxTime: '07:00',
    heritage: 'Catedral de Córdoba y centro histórico',
    connection: 'Es el punto de partida del recorrido y la primera mirada sobre la historia que conecta con Esquiú.',
    photo: '/assets/recorrido/cordoba-catedral.jpg',
    detailPhoto: '/assets/recorrido/cordoba-catedral.jpg',
    photoPosition: 'center 40%',
  },
  {
    id: 'jesus-maria',
    name: 'Jesús María',
    subtitle: 'Primer tramo del recorrido',
    description:
      'La ruta se desplaza por el paisaje cordobés con la calma de un camino que integra territorio, cultura y memoria viva del norte provincial.',
    approxTime: '08:30',
    heritage: 'Paisaje rural y arquitectura del norte cordobés',
    connection: 'Un tramo de tránsito donde la geografía y la tradición se vuelven parte del relato del recorrido.',
    photo: '/assets/recorrido/jesus-maria.jpg',
    detailPhoto: '/assets/recorrido/jesus-maria.jpg',
    photoPosition: 'center center',
  },
  {
    id: 'avellaneda',
    name: 'Avellaneda',
    subtitle: 'Santuario de Nuestra Señora del Rosario',
    description:
      'En este punto la espiritualidad y la tradición local se vuelven visibles, conectando la vida religiosa del territorio con la dimensión humana de Esquiú.',
    approxTime: '10:00',
    heritage: 'Santuario de Nuestra Señora del Rosario',
    connection: 'El santuario representa un eje espiritual y cultural del trayecto, cercano a la memoria de Esquiú.',
    photo: '/assets/recorrido/avellaneda-santuario.jpg',
    detailPhoto: '/assets/recorrido/avellaneda-estatua.jpg',
    photoPosition: 'center 45%',
  },
  {
    id: 'san-jose-de-la-dormida',
    name: 'San José de la Dormida',
    subtitle: 'Parroquia de San José',
    description:
      'La comunidad y el patrimonio local abren una mirada cercana a la historia religiosa y social del territorio recorrido por Esquiú.',
    approxTime: '12:00',
    heritage: 'Parroquia de San José',
    connection: 'Un momento de contemplación y vínculo con la vida de las comunidades del norte.',
    photo: '/assets/recorrido/san-jose-dormida.jpg',
    detailPhoto: '/assets/recorrido/san-jose-dormida.jpg',
    photoPosition: 'center 35%',
  },
  {
    id: 'villa-tulumba',
    name: 'Villa Tulumba',
    subtitle: 'Almuerzo y recorrido histórico por el pueblo',
    description:
      'Aquí la experiencia se vuelve más cercana: paisaje, historia local y encuentro con las huellas materiales y humanas del recorrido.',
    approxTime: '13:00',
    heritage: 'Arquitectura y espacios patrimoniales del pueblo',
    connection: 'Un lugar de descanso, observación y continuidad del relato del camino.',
    photo: '/assets/recorrido/villa-tulumba.jpg',
    detailPhoto: '/assets/recorrido/villa-tulumba.jpg',
    photoPosition: 'center 40%',
  },
  {
    id: 'villa-de-maria',
    name: 'Villa de María de Río Seco',
    subtitle: 'Casa-Museo Leopoldo Lugones y Cerro El Romero',
    description:
      'La jornada culmina en un punto cargado de cultura, memoria y paisaje, cerrando la ruta con una mirada contemplativa y emocional.',
    approxTime: '15:40',
    heritage: 'Casa-Museo Leopoldo Lugones y Cerro El Romero',
    connection: 'Punto final del camino: historia, memoria, naturaleza y legado compartido.',
    photo: '/assets/recorrido/rio-seco.jpg',
    detailPhoto: '/assets/recorrido/cerro-romero.jpg',
    photoPosition: 'center 40%',
  },
]
