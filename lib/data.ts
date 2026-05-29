export interface MenuItem {
  name: string
  price: string
  description: string
  image?: string
  vegetarian?: boolean
  vegan?: boolean
  spicy?: boolean
}

export interface MenuCategory {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export interface Review {
  author: string
  rating: number
  text: string
}

export interface HoursEntry {
  day: string
  hours: string
  closed?: boolean
}

// BOCATO DEL MES
export const bocatoDelMes: MenuItem[] = [
  {
    name: 'Arancia in Vespa',
    price: 'Pregunta en barra',
    description: 'Masa napolitana fermentada 72 horas con ingredientes de temporada de un rincón distinto de Italia. Este mes — notas cítricas, frescor mediterráneo, actitud de quien llega en vespa y no pide perdón. Disponible mientras haya stock.',
    image: '/images/arancia-bocato.svg',
  },
]

// BOCATOS
export const bocatos: MenuItem[] = [
  {
    name: 'Imperfecto',
    price: '9€',
    description: 'Tomate San Marzano DOP, mortadela de Bologna IGP, mozzarella di bufala Campana DOP, pistacho, rúcula, parmesano y pesto.',
    image: '/images/imperfecto.png',
  },
  {
    name: 'Carbonara',
    price: '7,90€',
    description: 'Fior di latte, guanciale, yema de huevo, queso pecorino DOP y pimienta negra.',
    image: '/images/carbonara.png',
  },
  {
    name: 'Tartufato',
    price: '7,90€',
    description: 'Salsa de trufa, queso taleggio, speck, fior di latte, huevo frito y pecorino DOP.',
    image: '/images/tartufato.png',
  },
  {
    name: 'Cicciolina',
    price: '7,90€',
    description: 'Ciccioli Napoletano, ricota, pimienta, tarallo y limón.',
    image: '/images/cicciolina.png',
  },
  {
    name: 'Polpette',
    price: '7,90€',
    description: 'Sofrito casero de tomate, albóndigas, fior di latte y gorgonzola.',
    image: '/images/polpette.png',
  },
  {
    name: 'Melanzane',
    price: '7,90€',
    description: 'Sofrito casero de tomate, berenjena frita, albahaca, fior di latte, mozzarella di bufala Campana DOP y parmesano.',
    vegetarian: true,
    vegan: true,
  },
  {
    name: 'Diavolo',
    price: '7,90€',
    description: 'Salsa de tomate, nduja Calabrese, spianata Calabrese, queso taleggio y miel picante.',
    image: '/images/diavolo.png',
    spicy: true,
  },
  {
    name: 'Capitano',
    price: '7€',
    description: 'Prosciutto cotto y caciocavallo.',
    image: '/images/capitano.png',
  },
  {
    name: 'Sorrento',
    price: '7,90€',
    description: 'Crema de ricotta y albahaca, tomate semiseco, mozzarella di Bufala Campana DOP, olivas leccino, alcaparras y ralladura de limón.',
    image: '/images/sorrento.png',
    vegetarian: true,
    vegan: true,
  },
  {
    name: '4 Formaggi',
    price: '7,90€',
    description: 'Tomate San Marzano, fior di latte, taleggio, gorgonzola y parmesano.',
    vegetarian: true,
  },
]

// MURCIA STYLE
export const murciaStyle: MenuItem[] = [
  {
    name: 'El Chato',
    price: '8,50€',
    description: 'Crema de queso fresco de cabra El Roano, queso azul El Roano, salchicha fina de Chato Murciano y almendra picada.',
  },
  {
    name: 'Emperifollá',
    price: '9€',
    description: 'Crema de queso fresco de cabra El Roano con sobrasada de Chato Murciano, chorizo de Chato, mermelada de melocotones de Cieza y queso de cabra El Roano.',
    image: '/images/emperifolla.png',
  },
]

// ENTRANTES
export const entrantes: MenuItem[] = [
  {
    name: 'Arancini Trufa',
    price: '2,50€',
    description: 'Croqueta de risotto con relleno de trufa.',
    vegetarian: true,
  },
  {
    name: 'Arancini Nduja Calabrese',
    price: '2,50€',
    description: 'Croqueta de risotto con nduja calabresa.',
  },
  {
    name: 'Arancini Parmigiana di Melanzane',
    price: '2,50€',
    description: 'Croqueta de risotto con berenjena a la parmesana.',
    vegetarian: true,
  },
  {
    name: 'Fritatine Cacio e Pepe',
    price: '2,50€',
    description: 'Croqueta de pasta napolitana con queso pecorino y pimienta negra.',
    vegetarian: true,
  },
  {
    name: 'Olivas all\'Ascolana',
    price: '3,90€',
    description: 'Olivas rellenas de carne, rebozadas y fritas. 6 unidades.',
  },
]

// BEBIDAS
export const bebidas: MenuItem[] = [
  { name: 'Refrescos', price: '1,50€', description: 'Coca-Cola, Fanta, Sprite, Nestea, Aquarius' },
  { name: 'Agua 500ml', price: '1,20€', description: 'Agua mineral natural' },
  { name: 'San Pellegrino Limonata', price: '2,50€', description: 'Refresco italiano de limón' },
  { name: 'San Pellegrino Aranciata', price: '2,50€', description: 'Refresco italiano de naranja' },
  { name: 'San Pellegrino Aranciata Amara', price: '2,50€', description: 'Refresco italiano de naranja amarga' },
  { name: 'San Pellegrino Limone & Menta', price: '2,50€', description: 'Refresco italiano de limón y menta' },
  { name: 'San Pellegrino Chinotto', price: '2,50€', description: 'Refresco italiano de chinotto' },
  { name: 'Peroni', price: '3,00€', description: 'Cerveza italiana clásica' },
  { name: 'Peroni Nastro Azzurro', price: '3,00€', description: 'Cerveza italiana premium' },
  { name: 'Peroni Doppio Malto', price: '3,00€', description: 'Cerveza italiana doble malta' },
  { name: 'Moretti', price: '3,00€', description: 'Cerveza italiana Birra Moretti' },
  { name: 'Moretti Rossa', price: '3,50€', description: 'Cerveza italiana tipo lager roja' },
  { name: 'Ichnusa Non Filtrata', price: '3,50€', description: 'Cerveza sarda no filtrada' },
]


// POSTRES
export const postres: MenuItem[] = [
  {
    name: 'Tiramisú de la Nonna',
    price: '3,90€',
    description: 'Receta casera de la abuela — mascarpone, bizcochos empapados en café, cacao amargo.',
    vegetarian: true,
  },
  {
    name: 'Cannolis',
    price: '3,90€',
    description: '2 unidades. Masa crujiente rellena de ricotta dulce al estilo siciliano.',
    vegetarian: true,
  },
]

export const menuCategories: MenuCategory[] = [
  {
    id: 'bocato-del-mes',
    title: 'Bocato del Mes',
    subtitle: 'Cada mes un nuevo producto de un rincón distinto de Italia · Disponible mientras haya stock',
    items: bocatoDelMes,
  },
  {
    id: 'bocatos',
    title: 'Bocatos',
    subtitle: 'Masa fermentada napolitana mínimo 72h · Horno napolitano auténtico',
    items: bocatos,
  },
  {
    id: 'murcia-style',
    title: 'Murcia Style',
    subtitle: 'Bocatos con productos murcianos de proximidad',
    items: murciaStyle,
  },
  {
    id: 'entrantes',
    title: 'Entrantes',
    subtitle: 'Para compartir o empezar',
    items: entrantes,
  },
  {
    id: 'postres',
    title: 'Postres',
    subtitle: 'Dulce final italiano',
    items: postres,
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    subtitle: 'Italianas y locales',
    items: bebidas,
  },
]

export const reviews: Review[] = [
  {
    author: 'Parejita de PICO FINO',
    rating: 5,
    text: '¡¡5 ESTRELLAS SON POCAS!! Un trocito de Italia en el centro de Murcia no tiene precio. Ingredientes frescos y mano de obra italiana.',
  },
  {
    author: 'Blanca Farnós',
    rating: 5,
    text: '¡Increíbles! Confunde mucho, puede dar aspecto de comida rápida pero para nada. Muy buenos ingredientes y muy bien elaborados.',
  },
  {
    author: 'Mariarita Abramo',
    rating: 5,
    text: '¡Nunca he probado algo tan bueno en Murcia! Yo he comido una Polpette y Frittatina cacio e pepe y fueron increíbles.',
  },
  {
    author: 'Entre REDES y REALIDADES',
    rating: 5,
    text: 'Es un sitio pequeño pero muy original y acogedor, la atención fue de primera y la comida espectacular.',
  },
  {
    author: 'Jorge Martínez',
    rating: 5,
    text: 'El mejor de la historia. Me pedí la Emperifollá y estaba increíble.',
  },
]

export const businessHours: HoursEntry[] = [
  { day: 'Lunes', hours: 'Cerrado', closed: true },
  { day: 'Martes', hours: '19:00 – 23:00' },
  { day: 'Miércoles', hours: '13:00 – 16:00  ·  18:30 – 23:30' },
  { day: 'Jueves', hours: '13:00 – 16:00  ·  18:30 – 23:30' },
  { day: 'Viernes', hours: '13:00 – 16:00  ·  18:30 – 00:30' },
  { day: 'Sábado', hours: '13:00 – 16:30  ·  18:30 – 00:00' },
  { day: 'Domingo', hours: '13:30 – 16:00  ·  19:00 – 23:30' },
]

export const foodImages = [
  // Named bocatos — caption matches name
  'imperfecto.png',
  'carbonara.png',
  'tartufato.png',
  'cicciolina.png',
  'polpette.png',
  'diavolo.png',
  'capitano.png',
  'sorrento.png',
  'emperifolla.png',
  'arancini.webp',
  // Atmospheric / date-named — fun captions
  '2025-11-05.webp',
  'unnamed (2).webp',
  'unnamed (3).webp',
  'unnamed (5).webp',
  'unnamed (6).webp',
]
