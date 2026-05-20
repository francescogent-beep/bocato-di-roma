import Link from 'next/link'
import Image from 'next/image'
import { GLOVO_URL } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-[#361E1E] text-white pt-12 pb-6" role="contentinfo">
      <div className="checker-tape mb-8" />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

        {/* Brand */}
        <div>
          <Image
            src="/one-line-yellow-bocato-di-roma-logo.svg"
            alt="Bocato di Roma"
            width={200}
            height={69}
            className="mb-3"
          />
          <p className="text-white/70 text-sm leading-relaxed mb-3">
            Street food napoletano en el corazón de Murcia. Masa fermentada mínimo 72h, ingredientes DOP e IGP.
          </p>
          <p className="text-[#FEB428] text-sm font-bold italic uppercase tracking-wider">
            "Veni Vidi y Comí"
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[#FEB428] font-bold uppercase tracking-widest text-sm mb-4">
            Navegar
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/menu" className="text-white/80 hover:text-[#FEB428] transition-colors uppercase tracking-wide">
                La Carta
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-white/80 hover:text-[#FEB428] transition-colors uppercase tracking-wide">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/galeria" className="text-white/80 hover:text-[#FEB428] transition-colors uppercase tracking-wide">
                Galería
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-white/80 hover:text-[#FEB428] transition-colors uppercase tracking-wide">
                Contacto y Horarios
              </Link>
            </li>
            {/* Glovo link hidden — uncomment to re-enable
            <li>
              <a
                href={GLOVO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#FEB428] transition-colors uppercase tracking-wide"
              >
                Pedir en Glovo
              </a>
            </li>
            */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#FEB428] font-bold uppercase tracking-widest text-sm mb-4">
            Visítanos
          </h3>
          <address
            className="not-italic text-sm space-y-2"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <p className="text-white/80" itemProp="streetAddress">
              Gran Vía Alfonso X el Sabio, 2-A
            </p>
            <p className="text-white/80">
              <span itemProp="addressLocality">Murcia</span>,{' '}
              <span itemProp="postalCode">30008</span>{' '}
              <span itemProp="addressCountry">España</span>
            </p>
            <p>
              <a
                href="tel:+34652473345"
                className="text-[#FEB428] hover:text-white transition-colors font-bold tracking-wider"
              >
                +34 652 47 33 45
              </a>
            </p>
          </address>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.instagram.com/bocatodiroma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FEB428] transition-colors text-sm uppercase tracking-widest"
              aria-label="Instagram de Bocato di Roma"
            >
              Instagram
            </a>
            <span className="text-white/30">·</span>
            <a
              href="https://www.facebook.com/bocatodiroma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#FEB428] transition-colors text-sm uppercase tracking-widest"
              aria-label="Facebook de Bocato di Roma"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="checker-tape mb-6" />
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40 uppercase tracking-widest">
        <p>© BOCATO DI ROMA MURCIA MMXXV</p>
        <p>@bocatodiroma · bocatodiroma.com</p>
      </div>
    </footer>
  )
}
