'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * ScrollAnimations
 * Drop this once on the homepage (or any page) and it wires up
 * GSAP ScrollTrigger effects to data-anim attributes.
 *
 * Usage in JSX:
 *   data-anim="stamp"     → heading slams in from large scale, slight rotation snap
 *   data-anim="fade-up"   → element fades up from 40px below
 *   data-anim="fade-left" → slides in from the right
 *   data-anim="parallax"  → inner image moves slower than scroll (wrap img in div with this attr)
 *   data-anim="reveal"    → masked reveal wipe (text or block)
 */
export function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── STAMP IN ─────────────────────────────────────────────────────
      // Headings that punch in — scale down from big + slight rotation snap
      gsap.utils.toArray<HTMLElement>('[data-anim="stamp"]').forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.35, rotation: -2, opacity: 0, transformOrigin: 'left center' },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── FADE UP ───────────────────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-anim="fade-up"]').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.04, // slight stagger if multiple in a row
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── FADE LEFT (slide from right) ──────────────────────────────────
      gsap.utils.toArray<HTMLElement>('[data-anim="fade-left"]').forEach((el) => {
        gsap.fromTo(
          el,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── PARALLAX (image slower than scroll) ───────────────────────────
      // Apply to a container div; the first img/div inside will shift
      gsap.utils.toArray<HTMLElement>('[data-anim="parallax"]').forEach((el) => {
        const inner = el.querySelector<HTMLElement>('img, [data-parallax-inner]')
        if (!inner) return
        gsap.fromTo(
          inner,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      // ── REVEAL WIPE ───────────────────────────────────────────────────
      // Clip-path wipe from left to right
      gsap.utils.toArray<HTMLElement>('[data-anim="reveal"]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.9,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── CHECKER TAPE SLIDE IN ─────────────────────────────────────────
      gsap.utils.toArray<HTMLElement>('.checker-tape').forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.6,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── STAGGER CHILDREN ──────────────────────────────────────────────
      // Add data-anim="stagger" to a parent to stagger animate all direct children
      gsap.utils.toArray<HTMLElement>('[data-anim="stagger"]').forEach((parent) => {
        const children = parent.children
        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return null
}
