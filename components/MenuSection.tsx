import { MenuCategory } from '@/lib/data'
import { StencilBorder } from './StencilBorder'
import { AnimatedMenuList } from './AnimatedMenuList'

interface MenuSectionProps {
  category: MenuCategory
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="py-8">
      <div className="mb-6">
        <h2 className="font-stencil text-3xl md:text-4xl text-[#9F1429] mb-1 uppercase">
          {category.title}
        </h2>
        {category.subtitle && (
          <p className="text-[#361E1E]/70 text-sm uppercase tracking-widest">
            {category.subtitle}
          </p>
        )}
        <div className="ornament-divider mt-2" />
      </div>

      <StencilBorder color="#9F1429" className="p-4 md:p-6">
        <AnimatedMenuList items={category.items} />
      </StencilBorder>
    </section>
  )
}
