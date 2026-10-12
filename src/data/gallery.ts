export type GalleryImage = {
  src: string
  alt: string
  previewPosition?: string
}

export type GalleryLocality = {
  id: string
  name: string
  images: GalleryImage[]
}

export const galleryData: GalleryLocality[] = [
  {
    id: 'cordoba',
    name: 'Córdoba',
    images: [
      {
        src: '/assets/galeria/cordoba/cordoba-01-grupo-catedral.jpg',
        alt: 'Grupo frente a la Catedral de Córdoba',
        previewPosition: 'center 35%',
      },
    ],
  },
  {
    id: 'jesus-maria',
    name: 'Jesús María',
    images: [
      {
        src: '/assets/galeria/jesus-maria/jesus-maria-01.jpg',
        alt: 'Jesús María',
        previewPosition: 'center center',
      },
    ],
  },
  {
    id: 'avellaneda',
    name: 'Avellaneda',
    images: [
      { src: '/assets/galeria/avellaneda/avellaneda-01.jpg', alt: 'Avellaneda 1' },
      { src: '/assets/galeria/avellaneda/avellaneda-02.jpg', alt: 'Avellaneda 2' },
      { src: '/assets/galeria/avellaneda/avellaneda-03.jpg', alt: 'Avellaneda 3' },
      { src: '/assets/galeria/avellaneda/avellaneda-04.jpg', alt: 'Avellaneda 4' },
      { src: '/assets/galeria/avellaneda/avellaneda-05.jpg', alt: 'Avellaneda 5' },
      { src: '/assets/galeria/avellaneda/avellaneda-06.jpg', alt: 'Avellaneda 6' },
      { src: '/assets/galeria/avellaneda/avellaneda-07.jpg', alt: 'Santuario de Avellaneda' },
    ],
  },
  {
    id: 'san-jose-dormida',
    name: 'San José de la Dormida',
    images: [
      { src: '/assets/galeria/san-jose-dormida/san-jose-dormida-01.jpg', alt: 'San José de la Dormida 1' },
      { src: '/assets/galeria/san-jose-dormida/san-jose-dormida-02.jpg', alt: 'San José de la Dormida 2' },
      { src: '/assets/galeria/san-jose-dormida/san-jose-dormida-03.jpg', alt: 'San José de la Dormida 3' },
      { src: '/assets/galeria/san-jose-dormida/san-jose-dormida-04.jpg', alt: 'San José de la Dormida 4' },
      { src: '/assets/galeria/san-jose-dormida/san-jose-dormida-05.jpg', alt: 'San José de la Dormida 5' },
      { src: '/assets/galeria/san-jose-dormida/san-jose-dormida-06.jpg', alt: 'Parroquia de San José' },
    ],
  },
  {
    id: 'villa-tulumba',
    name: 'Villa Tulumba',
    images: [
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-01.jpg', alt: 'Villa Tulumba 1' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-02.jpg', alt: 'Villa Tulumba 2' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-03.jpg', alt: 'Villa Tulumba 3' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-04.jpg', alt: 'Villa Tulumba 4' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-05.jpg', alt: 'Villa Tulumba 5' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-06.jpg', alt: 'Villa Tulumba 6' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-07.jpg', alt: 'Villa Tulumba 7' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-08.jpg', alt: 'Villa Tulumba 8' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-09.jpg', alt: 'Villa Tulumba 9' },
      { src: '/assets/galeria/villa-tulumba/villa-tulumba-10.jpg', alt: 'Villa Tulumba 10' },
    ],
  },
  {
    id: 'villa-maria-rio-seco',
    name: 'Villa de María de Río Seco',
    images: [
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-01.jpg', alt: 'Villa de María de Río Seco 1' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-02.jpg', alt: 'Villa de María de Río Seco 2' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-03.jpg', alt: 'Villa de María de Río Seco 3' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-04.jpg', alt: 'Villa de María de Río Seco 4' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-05.jpg', alt: 'Villa de María de Río Seco 5' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-06.jpg', alt: 'Villa de María de Río Seco 6' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-07.jpg', alt: 'Villa de María de Río Seco 7' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-08.jpg', alt: 'Villa de María de Río Seco 8' },
      { src: '/assets/galeria/villa-maria-rio-seco/villa-maria-rio-seco-09.jpg', alt: 'Cerro El Romero' },
    ],
  },
]
