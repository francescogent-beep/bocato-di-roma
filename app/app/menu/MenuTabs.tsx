'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MenuCategory } from '@/lib/data'

interface MenuTabsProps {
  categories: MenuCategory[]
}

export default function MenuTabs({ categories }: MenuTabsProps) {
  const [activeId, setActiveId] = useState<string>(categories[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(cat.id)
            }
          })
        },
        { rootMargin: '-130px 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [categories])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -130
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-[68px] z-30 bg-[#361E1E] shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex gap-1 overflow-x-auto py-2">
        {categories.map((cat) => {
          const isActive = cat.id === activeId
          return (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`relative flex-shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded ${
                isActive ? 'tab-active' : 'tab-inactive'
              }`}
            >
              {cat.title}
              {isActive && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FEB428]"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
