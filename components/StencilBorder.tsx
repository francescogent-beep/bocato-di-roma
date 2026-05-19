interface StencilBorderProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export function StencilBorder({ children, color = '#9F1429', className = '' }: StencilBorderProps) {
  return (
    <div className={`relative p-8 ${className}`}>
      <span className="corner-tl" style={{ color }} />
      <span className="corner-tr" style={{ color }} />
      <span className="corner-bl" style={{ color }} />
      <span className="corner-br" style={{ color }} />
      {children}
    </div>
  )
}
