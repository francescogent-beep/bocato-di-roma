export interface MenuItem {
  name: string
  price: string
  description: string
  vegetarian?: boolean
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

// BOCATOS
export const bocatos: MenuItem[] = [
  {
    name: 'Imperfecto',
    price: '9€',
    description: 'Tomate San Marzano DOP, mortadela de Bologna IGP, mozzarella di bufala Campana DOP, pistacho, rúcula, parmesano y pesto.',
  },
  {
    name: 'Carbonara',
    price: '7,90€',
    description: 'Fior di latte, guanciale, yema de huevo, queso pecorino DOP y pimienta negra.',
  },
  {
    name: 'Tartufato',
    price: '7,90€',
    description: 'Salsa de trufa, queso taleggio, speck, fior di latte, huevo frito y pecorino DOP.',
  },
  {
    name: 'Cicciolina',
    price: '7,90€',
    description: 'Ciccioli Napoletano, ricota, pimienta, tarallo y limón.',
  },
  {
    name: 'Polpette',
    price: '7,90€',
    description: 'Sofrito casero de tomate, albóndigas, fior di latte y gorgonzola.',
  },
  {
    name: 'Melanzane',
    price: '7,90€',
    description: 'Sofrito casero de tomate, berenjena frita, albahaca, fior di latte, mozzarella di bufala Campana DOP y parmesano.',
    vegetarian: true,
  },
  {
    name: 'Diavolo',
    price: '7€',
    description: 'Salsa de tomate, nduja Calabrese, spianata Calabrese, queso taleggio y miel picante.',
    spicy: true,
  },
  {
    name: 'Capitano',
    price: '7€',
    description: 'Prosciutto cotto y caciocavallo.',
  },
  {
    name: 'Sorrento',
    price: '7,90€',
    description: 'Crema de ricotta y albahaca, tomate semiseco, mozzarella di Bufala Campana DOP, olivas leccino, alcaparras y ralladura de limón.',
    vegetarian: true,
  },
]

// MURCIA STYLE
export const murciaStyle: MenuItem[] = [
  {
    name: 'El Chato',
    price: '7€',
    description: 'Crema de queso fresco de cabra El Roano, queso azul El Roano, salchicha fina de Chato Murciano y almendra picada.',
  },
  {
    name: 'Emperifollá',
    price: '7€',
    description: 'Crema de queso fresco de cabra El Roano con sobrasada de Chato Murciano, chorizo de Chato, mermelada de melocotones de Cieza y queso de cabra El Roano.',
  },
]

// ENTRANTES
export const entrantes: MenuItem[] = [
  {
    name: 'Arancini Trufa',
    price: '2,50€',
    description: 'Bola de arroz frita con relleno de trufa.',
    vegetarian: true,
  },
  {
    name: 'Arancini Nduja Calabrese',
    price: '2,50€',
    description: 'Bola de arroz frita con nduja calabresa.',
  },
  {
    name: 'Arancini Parmigiana di Melanzane',
    price: '2,50€',
    description: 'Bola de arroz frita con berenjena a la parmesana.',
    vegetarian: true,
  },
  {
    name: 'Fritatine Cacio e Pepe',
    price: '2,50€',
    description: 'Tortita napolitana de pasta con queso pecorino y pimienta negra.',
    vegetarian: true,
  },
  {
    name: 'Olivas all\'Ascolana',
    price: '3,90€',
    description: 'Olivas rellenas de carne, rebozadas y fritas. 5 unidades.',
  },
]

// BEBIDAS
export const bebidas: MenuItem[] = [
  { name: 'Refrescos', price: '1,50€', description: 'Coca-Cola, Fanta, Sprite' },
  { name: 'Agua 500ml', price: '1,20€', description: 'Agua mineral natural' },
  { name: 'Cerveza', price: '1,50€', description: 'Cerveza de barril' },
  { name: 'Alhambra 1925 Mini', price: '2,00€', description: 'Cerveza premium española' },
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

export const menuCategories: MenuCategory[] = [
  {
    id: 'bocatos',
    title: 'Bocatos',
    subtitle: 'Pan fermentado 24h, horneado al momento',
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
  'unnamed.webp',
  'unnamed (1).webp',
  'unnamed (2).webp',
  'unnamed (3).webp',
  'unnamed (4).webp',
  'unnamed (5).webp',
  'unnamed (6).webp',
  'unnamed (7).webp',
  'unnamed (8).webp',
  'unnamed (9).webp',
  'unnamed (10).webp',
  'unnamed (11).webp',
  'unnamed (12).webp',
  'unnamed (13).webp',
  '2025-11-05.webp',
  '2025-12-14.webp',
  '2025-12-14 (1).webp',
]

export const GLOVO_URL = 'https://glovoapp.com/es/es/murcia/stores/bocato-di-roma-murcia?content=menu-c.2958601997&section=bocatos-s.6285422442'
