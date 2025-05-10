
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { StarRating } from './StarRating';
import type { Review } from '@/lib/types';
import { Loader2 } from 'lucide-react';

const reviewSchema = z.object({
  rating: z.number().min(1, "Rating is required").max(5),
  comment: z.string().min(10, "Comment must be at least 10 characters").max(1000, "Comment must be 1000 characters or less"),
  userName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be 50 characters or less"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  movieId: string;
  onReviewSubmit: (review: Review) => void;
}

export function ReviewForm({ movieId, onReviewSubmit }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ReviewFormData>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      comment: "",
      userName: "",
    },
  });

  const onSubmit: SubmitHandler<ReviewFormData> = async (data) => {
    setIsSubmitting(true);
    // In a real app, this would be an API call
    // For now, we simulate it and use the mock addReview function logic
    try {
      const newReviewData = {
        movieId,
        userName: data.userName,
        rating: data.rating,
        comment: data.comment,
      };
      // Simulate adding review
      const newReview: Review = {
        ...newReviewData,
        id: `r${Date.now()}`, // Temporary ID
        createdAt: new Date().toISOString(),
        userAvatar: `https://picsum.photos/100/100?random=${Math.floor(Math.random() * 1000)}`,
      };
      
      onReviewSubmit(newReview);
      toast({ title: "Review submitted!", description: "Thanks for your feedback." });
      form.reset();
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit review.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow bg-card">
        <h3 className="text-xl font-semibold text-card-foreground">Write a Review</h3>
        
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your name" {...field} className="bg-background h-10" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Rating</FormLabel>
              <FormControl>
                <StarRating rating={field.value} onRatingChange={field.onChange} size={28} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts about the movie..."
                  {...field}
                  rows={5}
                  className="bg-background"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Review
        </Button>
      </form>
    </Form>
  );
}
