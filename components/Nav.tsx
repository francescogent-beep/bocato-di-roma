'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { GLOVO_URL } from '@/lib/data'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#9F1429] shadow-lg"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="checker-tape" />
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/one-line-yellow-bocato-di-roma-logo.svg"
            alt="Bocato di Roma — Logo"
            width={148}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/menu"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            La Carta
          </Link>
          <Link
            href="/galeria"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            Galería
          </Link>
          <Link
            href="/nosotros"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            Contacto
          </Link>
          {/* Glovo button hidden — uncomment to re-enable
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest text-sm px-4 py-2 rounded hover:bg-white transition-colors"
          >
            Pedir Ahora
          </a>
          */}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#FEB428] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#7a0f1e] border-t border-[#FEB428]/30 px-4 py-4 flex flex-col gap-3">
          <Link
            href="/menu"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm py-2 border-b border-[#FEB428]/20"
            onClick={() => setOpen(false)}
          >
            La Carta
          </Link>
          <Link
            href="/galeria"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm py-2 border-b border-[#FEB428]/20"
            onClick={() => setOpen(false)}
          >
            Galería
          </Link>
          <Link
            href="/nosotros"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm py-2 border-b border-[#FEB428]/20"
            onClick={() => setOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-[#FEB428] font-bold uppercase tracking-widest text-sm py-2 border-b border-[#FEB428]/20"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
          {/* Glovo button hidden — uncomment to re-enable
          <a
            href={GLOVO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest text-sm px-4 py-3 rounded text-center mt-1"
          >
            Pedir Ahora — Glovo
          </a>
          */}
        </div>
      )}
    </nav>
  )
}
