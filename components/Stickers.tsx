// Rubber stamp effect: circle with text around the outside
export function StampSeal({
  text,
  subtext,
  size = 100,
  className = '',
}: {
  text: string
  subtext?: string
  size?: number
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 2.5" opacity="0.8" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <text x="50" y="46" textAnchor="middle" fill="currentColor" fontSize="13" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">{text}</text>
      {subtext && (
        <text x="50" y="62" textAnchor="middle" fill="currentColor" fontSize="8" fontFamily="sans-serif" letterSpacing="2" opacity="0.8">{subtext}</text>
      )}
      <text x="50" y="78" textAnchor="middle" fill="currentColor" fontSize="7" fontFamily="sans-serif" letterSpacing="3" opacity="0.6">&#9733; &#9733; &#9733;</text>
    </svg>
  )
}

// Arrow sticker (like vintage poster arrows)
export function VintageArrow({
  direction = 'right',
  size = 60,
  className = '',
}: {
  direction?: 'left' | 'right' | 'down'
  size?: number
  className?: string
}) {
  const paths: Record<string, string> = {
    right: 'M10 50 L70 50 M55 30 L75 50 L55 70',
    left: 'M90 50 L30 50 M45 30 L25 50 L45 70',
    down: 'M50 10 L50 70 M30 55 L50 75 L70 55',
  }
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Vintage Italian-style banner ribbon
export function BannerRibbon({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Left fold */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: '14px solid transparent',
          borderBottom: '14px solid transparent',
          borderRight: '10px solid currentColor',
          opacity: 0.7,
        }}
      />
      <div className="px-4 py-1.5 bg-current">
        <span
          style={{
            color: 'var(--color-text, #FEB428)',
            fontFamily: 'sans-serif',
            fontWeight: 900,
            fontSize: 11,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.15em',
            mixBlendMode: 'difference' as const,
          }}
        >
          {text}
        </span>
      </div>
      {/* Right fold */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: '14px solid transparent',
          borderBottom: '14px solid transparent',
          borderLeft: '10px solid currentColor',
          opacity: 0.7,
        }}
      />
    </div>
  )
}

// Paint drip / splash element
export function PaintDrip({ color = '#9F1429', className = '' }: { color?: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 L200,0 L200,15 Q190,35 180,15 Q170,0 160,18 Q150,38 140,18 Q125,0 110,22 Q100,38 90,22 Q75,0 60,28 Q50,42 40,28 Q25,8 10,30 Q5,38 0,30 Z"
        fill={color}
      />
    </svg>
  )
}

// Vintage price tag sticker
export function PriceTag({
  price,
  label,
  className = '',
}: {
  price: string
  label?: string
  className?: string
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: '#FEB428',
        border: '2px solid #361E1E',
        padding: '4px 10px 4px 14px',
        display: 'inline-block',
      }}
    >
      {/* Hole punch */}
      <div
        style={{
          position: 'absolute',
          left: 4,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 6,
          height: 6,
          borderRadius: '50%',
          border: '1.5px solid #361E1E',
          background: 'white',
        }}
      />
      <div style={{ color: '#361E1E', fontWeight: 900, fontSize: 16, fontFamily: 'sans-serif', lineHeight: 1 }}>{price}</div>
      {label && (
        <div style={{ color: '#361E1E', fontWeight: 600, fontSize: 8, fontFamily: 'sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {label}
        </div>
      )}
    </div>
  )
}

// Italian vintage circular logo badge
export function ItalianBadge({
  line1,
  line2,
  line3,
  size = 90,
  bgColor = '#9F1429',
  textColor = '#FEB428',
  className = '',
}: {
  line1: string
  line2: string
  line3?: string
  size?: number
  bgColor?: string
  textColor?: string
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill={bgColor} />
      <circle cx="50" cy="50" r="44" fill="none" stroke={textColor} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" fill="none" stroke={textColor} strokeWidth="0.8" strokeDasharray="2 3" />
      <text x="50" y="36" textAnchor="middle" fill={textColor} fontSize="7" fontFamily="sans-serif" letterSpacing="3">{line1}</text>
      <text x="50" y="54" textAnchor="middle" fill={textColor} fontSize="16" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">{line2}</text>
      {line3 && (
        <text x="50" y="68" textAnchor="middle" fill={textColor} fontSize="7" fontFamily="sans-serif" letterSpacing="2">{line3}</text>
      )}
      <text x="50" y="82" textAnchor="middle" fill={textColor} fontSize="8" fontFamily="sans-serif">&#9670; &#9670; &#9670;</text>
    </svg>
  )
}
