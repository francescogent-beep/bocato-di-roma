'use client'
import { StaggerChildren, StaggerItem } from './StaggerChildren'
import { MenuItem } from '@/lib/data'

interface Props {
  items: MenuItem[]
}

export function AnimatedMenuList({ items }: Props) {
  return (
    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <StaggerItem key={item.name}>
          <div className="border-b border-[#9F1429]/20 pb-4 last:border-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-bold uppercase text-[#361E1E] tracking-wide flex items-center gap-2">
                {item.name}
                {item.vegetarian && (
                  <span title="Vegetariano" className="text-sm">🌿</span>
                )}
                {item.spicy && (
                  <span title="Picante" className="text-sm">🌶️</span>
                )}
              </h3>
              <span className="font-bold text-[#9F1429] whitespace-nowrap flex-shrink-0">
                {item.price}
              </span>
            </div>
            <p className="text-[#361E1E]/75 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  )
}
