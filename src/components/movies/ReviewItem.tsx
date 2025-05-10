
import type { Review } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { StarRating } from './StarRating';
import { formatDistanceToNow } from 'date-fns';

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  const timeAgo = formatDistanceToNow(new Date(review.createdAt), { addSuffix: true });

  return (
    <Card className="mb-4 shadow-sm">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={review.userAvatar} alt={review.userName} data-ai-hint="user avatar" />
            <AvatarFallback>{review.userName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-card-foreground">{review.userName}</p>
            <p className="text-xs text-muted-foreground">{timeAgo}</p>
          </div>
          <div className="ml-auto">
            <StarRating rating={review.rating} size={16} readOnly />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-foreground/90 whitespace-pre-line">{review.comment}</p>
      </CardContent>
    </Card>
  );
}
