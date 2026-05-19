export function getRestaurantSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'FoodEstablishment'],
    name: 'Bocato di Roma',
    description:
      'Restaurante de bocatos napoletanos artesanales en el centro de Murcia. Masa fermentada 24h con ingredientes DOP y IGP italianos.',
    url: 'https://bocatodiroma.com',
    telephone: '+34652473345',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gran Vía Alfonso X el Sabio, 2-A',
      addressLocality: 'Murcia',
      postalCode: '30008',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.9877903,
      longitude: -1.132029,
    },
    servesCuisine: ['Italian', 'Italiana', 'Street Food', 'Neapolitan'],
    priceRange: '€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: '19:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '13:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: '18:30',
        closes: '23:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '13:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: '18:30',
        closes: '23:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '13:00',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '18:30',
        closes: '00:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '13:00',
        closes: '16:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '18:30',
        closes: '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '13:30',
        closes: '16:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '19:00',
        closes: '23:30',
      },
    ],
    sameAs: [
      'https://www.instagram.com/bocatodiroma',
      'https://www.facebook.com/bocatodiroma',
    ],
    image: 'https://bocatodiroma.com/logo.png',
    hasMap: 'https://maps.google.com/?cid=bocato+di+roma+murcia',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '5',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Blanca Farnós' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: '¡Increíbles! Muy buenos ingredientes y muy bien elaborados.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Mariarita Abramo' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: '¡Nunca he probado algo tan bueno en Murcia! Polpette y Frittatina cacio e pepe fueron increíbles.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Jorge Martínez' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'El mejor de la historia. Me pedí la Emperifollá y estaba increíble.',
      },
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bocato di Roma',
    url: 'https://bocatodiroma.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://bocatodiroma.com/menu?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getMenuSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'La Carta — Bocato di Roma',
    url: 'https://bocatodiroma.com/menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Bocatos Napoletanos',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Imperfecto', offers: { '@type': 'Offer', price: '9.00', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Carbonara', offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Tartufato', offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Cicciolina', offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Polpette', offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Melanzane', offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Diavolo', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Capitano', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Sorrento', offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Bocatos Murcia Style',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'El Chato', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Emperifollá', offers: { '@type': 'Offer', price: '7.00', priceCurrency: 'EUR' } },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Entrantes',
        hasMenuItem: [
          { '@type': 'MenuItem', name: 'Arancini Trufa', offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Arancini Nduja Calabrese', offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Arancini Parmigiana di Melanzane', offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: 'Fritatine Cacio e Pepe', offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' } },
          { '@type': 'MenuItem', name: "Olivas all'Ascolana", offers: { '@type': 'Offer', price: '3.90', priceCurrency: 'EUR' } },
        ],
      },
    ],
  }
}

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es un bocato napoletano?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El bocato napoletano es un pan redondo de masa fermentada durante 24 horas, horneado al momento en horno a alta temperatura y relleno con ingredientes italianos de denominación de origen protegida (DOP) e indicación geográfica protegida (IGP).',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde está Bocato di Roma en Murcia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bocato di Roma está en Gran Vía Alfonso X el Sabio, 2-A (esquina con Calle Enrique Villar), 30008 Murcia. Estamos en pleno centro de la ciudad.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el horario de Bocato di Roma?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Martes: 19:00-23:00. Miércoles y Jueves: 13:00-16:00 y 18:30-23:30. Viernes: 13:00-16:00 y 18:30-00:30. Sábado: 13:00-16:30 y 18:30-00:00. Domingo: 13:30-16:00 y 19:00-23:30. Lunes: cerrado.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Se puede pedir Bocato di Roma a domicilio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, Bocato di Roma está disponible en Glovo para pedidos a domicilio en Murcia.',
        },
      },
    ],
  }
}
