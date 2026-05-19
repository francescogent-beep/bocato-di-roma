import { Review } from '@/lib/data'
import { StencilBorder } from './StencilBorder'

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <StencilBorder
      color="#9F1429"
      className="bg-[#FAF3E5] min-w-[280px] max-w-[320px] flex-shrink-0 snap-start"
    >
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-[#FEB428] text-lg">★</span>
        ))}
      </div>
      <p className="text-[#361E1E] text-sm leading-relaxed mb-4 italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="text-[#9F1429] font-bold text-sm uppercase tracking-wider">
        — {review.author}
      </p>
    </StencilBorder>
  )
}
