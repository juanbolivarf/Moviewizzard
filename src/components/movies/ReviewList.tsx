
"use client";

import type { Review } from '@/lib/types';
import { ReviewItem } from './ReviewItem';
import { useTranslation } from '@/hooks/useTranslation';

interface ReviewListProps {
  reviews: Review[];
}

export function ReviewList({ reviews }: ReviewListProps) {
  const { t } = useTranslation();

  if (reviews.length === 0) {
    return <p className="text-muted-foreground italic">{t('reviewList.noReviews')}</p>;
  }

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}
