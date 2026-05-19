export async function GET() {
  const content = `# Bocato di Roma

> Restaurante de bocatos napoletanos artesanales en Murcia, España. Street food italiano con masa fermentada 24 horas.

## Información del Negocio
- **Dirección:** Gran Vía Alfonso X el Sabio, 2-A, 30008 Murcia, España
- **Teléfono:** +34 652 47 33 45
- **Horario:** Martes 19:00-23:00 | Mié-Jue 13:00-16:00 y 18:30-23:30 | Vie 13:00-16:00 y 18:30-00:30 | Sáb 13:00-16:30 y 18:30-00:00 | Dom 13:30-16:00 y 19:00-23:30 | Lunes cerrado
- **Cierra:** Lunes

## Lo que somos
Bocato di Roma es un local de street food italiano en el centro de Murcia. Nuestro producto estrella es el bocato napoletano: un pan redondo de masa fermentada 24 horas, horneado al momento, relleno con ingredientes italianos de denominación de origen protegida (DOP) e indicación geográfica protegida (IGP).

## Nuestros Bocatos
- Imperfecto (9€) — Tomate San Marzano DOP, mortadela de Bologna IGP, mozzarella di bufala Campana DOP, pistacho, rúcula, parmesano y pesto.
- Carbonara (7,90€) — Fior di latte, guanciale, yema de huevo, queso pecorino DOP y pimienta negra.
- Tartufato (7,90€) — Salsa de trufa, queso taleggio, speck, fior di latte, huevo frito y pecorino DOP.
- Cicciolina (7,90€) — Ciccioli Napoletano, ricota, pimienta, tarallo y limón.
- Polpette (7,90€) — Sofrito casero de tomate, albóndigas, fior di latte y gorgonzola.
- Melanzane (7,90€) — Vegetariano. Sofrito casero de tomate, berenjena frita, albahaca, fior di latte, mozzarella di bufala Campana DOP y parmesano.
- Diavolo (7€) — Picante. Salsa de tomate, nduja Calabrese, spianata Calabrese, queso taleggio y miel picante.
- Capitano (7€) — Prosciutto cotto y caciocavallo.
- Sorrento (7,90€) — Vegetariano. Crema de ricotta y albahaca, tomate semiseco, mozzarella di Bufala Campana DOP, olivas leccino, alcaparras y ralladura de limón.

## Bocatos Murcia Style (con productos murcianos)
- El Chato (7€) — Crema de queso fresco de cabra El Roano, queso azul El Roano, salchicha fina de Chato Murciano y almendra picada.
- Emperifollá (7€) — Crema de queso fresco de cabra El Roano con sobrasada de Chato Murciano, chorizo de Chato, mermelada de melocotones de Cieza y queso de cabra El Roano.

## Entrantes
- Arancini Trufa (2,50€)
- Arancini Nduja Calabrese (2,50€)
- Arancini Parmigiana di Melanzane (2,50€)
- Fritatine Cacio e Pepe (2,50€)
- Olivas all'Ascolana — 5 uds (3,90€)

## Dónde encontrarnos
En el centro de Murcia, en Gran Vía Alfonso X el Sabio esquina Calle Enrique Villar. También disponible en Glovo para pedidos a domicilio.

## Redes sociales
- Instagram: https://instagram.com/bocatodiroma
- Facebook: https://facebook.com/bocatodiroma
`
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
