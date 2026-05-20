import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ReviewCard } from '@/components/ReviewCard'
import { StencilBorder } from '@/components/StencilBorder'
import { FadeUp } from '@/components/FadeUp'
import { StaggerChildren, StaggerItem } from '@/components/StaggerChildren'
import { Marquee } from '@/components/Marquee'
import { HeroContent } from '@/components/HeroContent'
import { StampSeal, ItalianBadge, VintageArrow, PaintDrip } from '@/components/Stickers'
import { bocatos, reviews, GLOVO_URL, foodImages } from '@/lib/data'
import { getWebSiteSchema, getFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://bocatodiroma.com',
  },
}

export default function HomePage() {
  const featuredBocatos = bocatos.slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
      />

      {/* HERO */}
      <HeroContent />

      {/* MARQUEE STRIP between hero and narrative */}
      <Marquee bgColor="#361E1E" textColor="#FEB428" />

      {/* QUÉ ES UN BOCATO */}
      <FadeUp delay={0.1}>
        <section className="bg-[#F4E6CE] py-16 px-6 relative paper-spots" aria-labelledby="bocato-heading">
          <div className="max-w-5xl mx-auto">
            <StencilBorder color="#9F1429" className="p-6 md:p-10 relative">
              {/* Stamp seal decoration — top right */}
              <div
                className="absolute top-4 right-4 z-10 hidden md:block"
                style={{ transform: 'rotate(12deg)', color: '#9F1429' }}
                aria-hidden="true"
              >
                <StampSeal text="DOP" subtext="Origen Protegido" size={80} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                    El producto
                  </p>
                  <h2
                    id="bocato-heading"
                    className="font-stencil text-[#361E1E] text-3xl md:text-4xl mb-4 leading-tight"
                  >
                    MASA FERMENTADA MÍNIMO 72H
                  </h2>
                  <div className="checker-tape mb-4" />
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-4">
                    Llevamos el alma de las calles romanas a Murcia. El bocato romano es un pan redondo,
                    de masa fermentada durante un mínimo de 72 horas al estilo romano, horneado al momento y relleno con lo mejor de Italia.
                  </p>
                  <p className="text-[#361E1E]/80 text-base leading-relaxed mb-6">
                    Ingredientes con denominación de origen protegida (DOP) e indicación geográfica protegida (IGP):
                    mozzarella di bufala Campana, mortadela di Bologna, tomate San Marzano... y el sabor de siempre.
                  </p>
                  <div className="ornament-divider" />
                  <p className="text-[#9F1429] font-bold italic text-lg mt-2 uppercase tracking-wide">
                    "Acho che Bello"
                  </p>
                </div>
                <div className="relative">
                  {/* Italian badge decoration near image */}
                  <div
                    className="absolute -top-4 -left-4 z-10 hidden md:block"
                    style={{ transform: 'rotate(-8deg)' }}
                    aria-hidden="true"
                  >
                    <ItalianBadge line1="ROMA x" line2="MURCIA" line3="EST. 2025" size={75} />
                  </div>

                  <div className="relative h-72 md:h-96 overflow-hidden" style={{ transform: 'rotate(1deg)' }}>
                    <Image
                      src="/images/unnamed.webp"
                      alt="Bocato romano de Bocato di Roma — masa fermentada mínimo 72 horas"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-2 pointer-events-none">
                      <span className="corner-tl" style={{ color: '#FEB428' }} />
                      <span className="corner-tr" style={{ color: '#FEB428' }} />
                      <span className="corner-bl" style={{ color: '#FEB428' }} />
                      <span className="corner-br" style={{ color: '#FEB428' }} />
                    </div>
                  </div>

                  {/* Arrow pointing toward the photo */}
                  <div
                    className="absolute bottom-4 -left-8 hidden md:block"
                    style={{ color: '#9F1429' }}
                    aria-hidden="true"
                  >
                    <VintageArrow direction="right" size={50} />
                  </div>
                </div>
              </div>
            </StencilBorder>
          </div>

          {/* Checker tape stripe */}
          <div className="checker-tape mt-16" />
        </section>
      </FadeUp>

      {/* MENU PREVIEW */}
      <section
        className="bg-[#361E1E] py-16 px-6 texture-noise relative"
        aria-labelledby="carta-heading"
      >
        {/* Paint drip decorative top border */}
        <div className="absolute top-0 left-0 right-0 w-full opacity-20 pointer-events-none" aria-hidden="true">
          <PaintDrip color="#FEB428" className="w-full h-12" />
        </div>

        {/* Brand sticker — bottom left paste-up */}
        <div
          className="absolute bottom-4 left-3 z-10 hidden md:block pointer-events-none"
          style={{ transform: 'rotate(-8deg)', opacity: 0.7 }}
          aria-hidden="true"
        >
          <Image src="/stickers/2.png" alt="" width={70} height={93} className="object-cover" />
        </div>

        {/* Artesanal stamp — top right */}
        <div
          className="absolute top-6 right-6 z-10 hidden md:block"
          style={{ transform: 'rotate(-10deg)', color: '#FEB428' }}
          aria-hidden="true"
        >
          <StampSeal text="ARTESANAL" subtext="72H FERMENTO" size={85} />
        </div>

        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0.1}>
            <div className="text-center mb-10">
              <h2
                id="carta-heading"
                className="font-stencil text-[#FEB428] text-4xl md:text-6xl mb-2"
                style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
              >
                LA CARTA
              </h2>
              <p className="text-white/60 uppercase tracking-widest text-xs">
                Bocatos romanos artesanales · Ingredientes DOP e IGP
              </p>
              <div className="ornament-divider mt-3" />
            </div>
          </FadeUp>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {featuredBocatos.map((bocato) => (
              <StaggerItem key={bocato.name}>
                <div className="relative border border-[#FEB428]/20 p-5 hover:border-[#FEB428]/50 transition-colors">
                  <span className="corner-tl" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <span className="corner-tr" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <span className="corner-bl" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <span className="corner-br" style={{ color: '#FEB428', opacity: 0.4 }} />
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[#FEB428] font-bold uppercase tracking-wider text-lg">
                      {bocato.name}
                    </h3>
                    <span className="text-[#9F1429] font-bold text-lg bg-[#FEB428]/10 px-2 py-0.5 rounded">
                      {bocato.price}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {bocato.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-block bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-colors"
            >
              Ver Carta Completa →
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <FadeUp delay={0.1}>
        <section className="bg-[#F4E6CE] py-16 px-6 relative" aria-labelledby="reviews-heading">
          {/* Brand sticker paste-up — top right corner */}
          <div
            className="absolute top-4 right-2 z-10 hidden md:block pointer-events-none"
            style={{ transform: 'rotate(7deg)', opacity: 0.65 }}
            aria-hidden="true"
          >
            <Image src="/stickers/4.png" alt="" width={75} height={100} className="object-cover" />
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="reviews-heading"
                className="font-stencil text-[#9F1429] text-4xl md:text-5xl mb-2"
              >
                LO QUE DICEN
              </h2>
              <p className="text-[#361E1E]/60 uppercase tracking-widest text-xs">
                Reseñas reales de Google
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            <StaggerChildren className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin">
              {reviews.map((review) => (
                <StaggerItem key={review.author}>
                  <ReviewCard review={review} />
                </StaggerItem>
              ))}
            </StaggerChildren>

            <div className="text-center mt-10">
              <a
                href="https://www.google.com/maps/search/Bocato+di+Roma+Murcia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest px-10 py-4 text-sm border-2 border-[#361E1E] hover:bg-white transition-colors"
                style={{ transform: 'rotate(-1.5deg)', display: 'inline-flex' }}
              >
                <span aria-hidden="true">★</span>
                Déjanos tu Reseña en Google
                <span aria-hidden="true">★</span>
              </a>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* ABOUT US PREVIEW */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#9F1429] py-16 px-6 relative overflow-hidden texture-noise"
          aria-labelledby="nosotros-heading"
        >
          {/* Background stencil text decoration */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-stencil text-white/5 whitespace-nowrap"
              style={{ fontSize: 'clamp(6rem, 20vw, 18rem)', letterSpacing: '0.05em' }}
            >
              ROMA
            </span>
          </div>

          {/* Brand sticker paste-up — bottom right */}
          <div
            className="absolute bottom-6 right-3 z-20 hidden md:block pointer-events-none"
            style={{ transform: 'rotate(10deg)', opacity: 0.72 }}
            aria-hidden="true"
          >
            <Image src="/stickers/5.png" alt="" width={68} height={91} className="object-cover" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: image */}
            <div className="relative h-72 md:h-96 overflow-hidden" style={{ transform: 'rotate(-1.5deg)' }}>
              <Image
                src="/images/unnamed (4).webp"
                alt="El equipo de Bocato di Roma en Murcia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Vintage amber overlay strip at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#FEB428] py-2 px-4">
                <p className="text-[#361E1E] font-stencil text-sm uppercase tracking-widest text-center">
                  Roma → Murcia · Est. 2025
                </p>
              </div>
              <div className="absolute inset-2 pointer-events-none">
                <span className="corner-tl" style={{ color: '#FEB428' }} />
                <span className="corner-tr" style={{ color: '#FEB428' }} />
                <span className="corner-bl" style={{ color: '#FEB428' }} />
                <span className="corner-br" style={{ color: '#FEB428' }} />
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <p className="text-[#FEB428] uppercase tracking-[0.3em] text-xs font-bold mb-2">
                Chi Siamo
              </p>
              <h2
                id="nosotros-heading"
                className="font-stencil text-white text-3xl md:text-4xl mb-4 leading-tight"
              >
                ROMA EN EL CORAZÓN,<br />MURCIA EN EL ALMA
              </h2>
              <div className="checker-tape mb-4" />
              <p className="text-white/80 text-base leading-relaxed mb-4">
                Bocato di Roma nació del amor por las calles de Roma y la pasión por los productos
                italianos auténticos. Cada bocato es una ventana a esas noches en las que el mejor
                plan era parar en la esquina y comer algo brutal.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                Ingredientes DOP e IGP, masa fermentada mínimo 72 horas, horno a tope. Sin atajos. Sin trampa.
                Solo producto italiano de verdad, con actitud de calle.
              </p>
              <div className="ornament-divider mb-6" />
              <Link
                href="/nosotros"
                className="inline-block border-2 border-[#FEB428] text-[#FEB428] font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-[#FEB428] hover:text-[#361E1E] transition-colors"
              >
                Nuestra Historia →
              </Link>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* GALLERY PREVIEW */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#361E1E] py-16 px-6 texture-noise relative overflow-hidden"
          aria-labelledby="gallery-heading"
        >
          {/* Brand sticker paste-up — top left */}
          <div
            className="absolute top-3 left-2 z-10 hidden md:block pointer-events-none"
            style={{ transform: 'rotate(-9deg)', opacity: 0.68 }}
            aria-hidden="true"
          >
            <Image src="/stickers/6.png" alt="" width={65} height={87} className="object-cover" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">Fotogalería</p>
              <h2
                id="gallery-heading"
                className="font-stencil text-[#FEB428] text-4xl md:text-5xl mb-2"
                style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.5)' }}
              >
                SCATTI DI STRADA
              </h2>
              <p className="text-white/50 uppercase tracking-widest text-xs">
                Fotos reales · Sin filtros de estudio
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            {/* Polaroid grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {foodImages.slice(0, 6).map((img, i) => {
                const rotations = [-2, 1.5, -1, 2.5, -1.5, 1]
                return (
                  <div
                    key={img}
                    className="polaroid bg-white p-3 pb-8 shadow-xl"
                    style={{ transform: `rotate(${rotations[i]}deg)` }}
                  >
                    <div className="relative h-40 md:h-52 overflow-hidden">
                      <Image
                        src={`/images/${img}`}
                        alt={`Bocato di Roma — foto ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    {i === 0 && (
                      <p className="text-[#361E1E] text-center text-xs font-bold uppercase tracking-wider mt-2 opacity-60">
                        El Imperfecto
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="text-center">
              <Link
                href="/galeria"
                className="inline-block border-2 border-[#FEB428] text-[#FEB428] font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#FEB428] hover:text-[#361E1E] transition-colors"
              >
                Ver Galería Completa →
              </Link>
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>

      {/* LOCATION + MAP */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#FEB428] py-16 px-6 texture-noise relative overflow-hidden"
          aria-labelledby="location-heading"
        >
          {/* Italian badge — top right */}
          <div
            className="absolute top-4 right-4 z-10 opacity-90 hidden md:block"
            style={{ transform: 'rotate(10deg)' }}
            aria-hidden="true"
          >
            <ItalianBadge line1="BOCATO" line2="DI ROMA" line3="MURCIA" size={100} bgColor="#9F1429" textColor="#FEB428" />
          </div>

          {/* Stamp seal — bottom left */}
          <div
            className="absolute bottom-4 left-4 z-10 hidden md:block"
            style={{ transform: 'rotate(-6deg)', color: '#361E1E' }}
            aria-hidden="true"
          >
            <StampSeal text="ACHO QUE" subtext="BELLO" size={70} />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2
                id="location-heading"
                className="font-stencil text-[#9F1429] leading-none mb-4"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textShadow: '2px 2px 0px rgba(0,0,0,0.15)' }}
              >
                ACHO CHE BELLO
              </h2>
              <p className="text-[#361E1E] font-bold uppercase tracking-widest text-sm md:text-base mb-6">
                Gran Vía Alfonso X, 2-A · Murcia · +34 652 47 33 45
              </p>
              <div className="checker-tape mb-6" />
              <Link
                href="/contacto"
                className="inline-block bg-[#9F1429] text-white font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-[#361E1E] transition-colors"
              >
                Cómo Llegar →
              </Link>
            </div>

            {/* Google Maps embed */}
            <div className="relative" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="absolute inset-0 pointer-events-none z-10">
                <span className="corner-tl" style={{ color: '#9F1429' }} />
                <span className="corner-tr" style={{ color: '#9F1429' }} />
                <span className="corner-bl" style={{ color: '#9F1429' }} />
                <span className="corner-br" style={{ color: '#9F1429' }} />
              </div>
              <iframe
                src="https://maps.google.com/maps?q=Bocato+di+Roma+Murcia&hl=es&z=17&output=embed"
                width="100%"
                height="380"
                style={{ border: '3px solid #9F1429', display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bocato di Roma en Google Maps — Gran Vía Alfonso X, 2-A, Murcia"
                aria-label="Mapa de ubicación de Bocato di Roma en Murcia"
              />
            </div>
          </div>
        </section>
      </FadeUp>

      {/* FAQS */}
      <FadeUp delay={0.1}>
        <section
          className="bg-[#F4E6CE] py-16 px-6 paper-spots relative"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#9F1429] uppercase tracking-[0.3em] text-xs font-bold mb-2">FAQ</p>
              <h2
                id="faq-heading"
                className="font-stencil text-[#361E1E] text-4xl md:text-5xl mb-2"
              >
                PREGUNTATE
              </h2>
              <p className="text-[#361E1E]/60 uppercase tracking-widest text-xs">
                Las dudas más frecuentes
              </p>
              <div className="ornament-divider mt-3" />
            </div>

            <div className="space-y-3">
              {[
                {
                  q: '¿Qué es un bocato romano?',
                  a: 'El bocato romano es un pan redondo de origen romano, con masa fermentada durante un mínimo de 72 horas al estilo romano, horneado al momento en horno a alta temperatura. Se rellena con ingredientes italianos de denominación de origen protegida (DOP) e indicación geográfica protegida (IGP). Piensa en una focaccia de barrio con alma de calle.',
                },
                {
                  q: '¿Hay opciones sin gluten o vegetarianas?',
                  a: 'La masa de bocato contiene gluten — sin excepciones, es parte del proceso artesanal. Sí tenemos bocatos vegetarianos: Melanzane y Sorrento. Consulta con nosotros si tienes otras alergias; somos pequeños y podemos hablar del tema tranquilamente.',
                },
                {
                  q: '¿Es necesario reservar?',
                  a: 'Somos un local de street food con ritmo de barra. No tomamos reservas — ven, pide y en minutos tienes tu bocato. Si hay espera, será corta y vale la pena.',
                },
                {
                  q: '¿Cuál es el horario?',
                  a: 'Martes: 19:00–23:00. Miércoles y Jueves: 13:00–16:00 y 18:30–23:30. Viernes: 13:00–16:00 y 18:30–00:30. Sábado: 13:00–16:30 y 18:30–00:00. Domingo: 13:30–16:00 y 19:00–23:30. Lunes: cerrado.',
                },
                {
                  q: '¿Dónde puedo aparcar?',
                  a: 'Estamos en Gran Vía Alfonso X el Sabio, 2-A — pleno centro de Murcia. Los parkings públicos más cercanos son el de Plaza de la Universidad y el de Avenida de la Libertad. En coche, en bici, a pie o en la moto de tu abuela: llegarás.',
                },
                {
                  q: '¿Puedo pedir a domicilio?',
                  a: 'Sí, estamos en Glovo para que te llegue el bocato donde estés en Murcia. Aunque la experiencia completa es en local, ¿qué te vamos a decir?',
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-[#9F1429]/30 bg-white/60 overflow-hidden"
                >
                  <summary className="cursor-pointer flex items-center justify-between px-5 py-4 text-[#361E1E] font-bold uppercase tracking-wide text-sm list-none select-none hover:bg-[#9F1429]/5 transition-colors">
                    <span>{q}</span>
                    <span
                      className="font-stencil text-[#9F1429] text-xl ml-4 flex-shrink-0 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-1 border-t border-[#9F1429]/20">
                    <p className="text-[#361E1E]/80 text-sm leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
          <div className="checker-tape mt-12" />
        </section>
      </FadeUp>
    </>
  )
}
