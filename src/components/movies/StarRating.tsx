
"use client";

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  size?: number;
  className?: string;
  readOnly?: boolean;
}

export function StarRating({
  rating,
  onRatingChange,
  size = 24,
  className,
  readOnly = false,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={cn(
            "transition-colors",
            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
            !readOnly && "cursor-pointer hover:text-yellow-300"
          )}
          onClick={() => !readOnly && onRatingChange?.(star)}
          aria-label={readOnly ? `${rating} out of 5 stars` : `Rate ${star} star`}
        />
      ))}
    </div>
  );
}
