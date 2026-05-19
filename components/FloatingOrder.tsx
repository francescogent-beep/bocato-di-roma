'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GLOVO_URL } from '@/lib/data'

export function FloatingOrder() {
  const [visible, setVisible] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (y > 200) {
        setVisible(y < lastY)
      } else {
        setVisible(true)
      }
      setLastY(y)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  // Glovo button hidden — return null to re-enable, remove this line
  return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={GLOVO_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-[#FEB428] text-[#361E1E] font-bold uppercase tracking-widest text-xs px-5 py-3 shadow-2xl flex items-center gap-2"
          style={{ boxShadow: '0 4px 24px rgba(254,180,40,0.5)' }}
          aria-label="Pedir en Glovo"
        >
          {/* Pulse ring */}
          <span
            className="absolute inset-0"
            style={{
              animation: 'pulse-ring 2s ease-out infinite',
              background: '#FEB428',
              opacity: 0,
              borderRadius: 0,
            }}
          />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
          </svg>
          Pedir Ahora
        </motion.a>
      )}
    </AnimatePresence>
  )
}
