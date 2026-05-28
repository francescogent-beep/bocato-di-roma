'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ImageParallax
 * Adds a subtle parallax effect to any image container tagged with
 * data-parallax="true". The inner <img> drifts slower than the scroll.
 *
 * Usage: wrap your image div with data-parallax="true"
 */
export function ImageParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-parallax="true"]').forEach((el) => {
        const inner = el.querySelector<HTMLElement>('img')
        if (!inner) return
        gsap.fromTo(
          inner,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.7,
            },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return null
}
