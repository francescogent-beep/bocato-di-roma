'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function MobileStickyBar() {
  const [cartaVisible, setCartaVisible] = useState(false)

  useEffect(() => {
    const threshold = window.innerHeight * 0.8
    const onScroll = () => setCartaVisible(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none"
      style={{
        zIndex: 50,
        paddingBottom: 'max(env(safe-area-inset-bottom), 20px)',
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <motion.div
        layout
        className="flex items-center gap-3 pointer-events-auto"
        style={{
          background: 'rgba(20, 10, 10, 0.72)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 100,
          padding: '6px 6px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
      >
        {/* Call button — always visible */}
        <a
          href="tel:+34652473345"
          aria-label="Llamar a Bocato di Roma"
          className="flex items-center gap-2 active:scale-95 transition-transform"
          style={{
            background: '#9F1429',
            borderRadius: 100,
            padding: '12px 22px',
            color: '#fff',
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(159,20,41,0.5)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
          </svg>
          Llamar
        </a>

        {/* La Carta button — appears after scrolling past hero */}
        <AnimatePresence>
          {cartaVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, width: 0 }}
              animate={{ opacity: 1, scale: 1, width: 'auto' }}
              exit={{ opacity: 0, scale: 0.8, width: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              style={{ overflow: 'hidden' }}
            >
              <Link
                href="/menu"
                className="flex items-center gap-2 active:scale-95 transition-transform"
                style={{
                  background: '#FEB428',
                  borderRadius: 100,
                  padding: '12px 22px',
                  color: '#361E1E',
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 8px rgba(254,180,40,0.4)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
                La Carta
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  )
}
