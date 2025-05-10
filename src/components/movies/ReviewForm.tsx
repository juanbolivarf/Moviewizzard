
"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Changed Textarea for name to Input
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { StarRating } from './StarRating';
import type { Review } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const reviewSchema = z.object({
  rating: z.number().min(1, "Rating is required").max(5), // Error messages can also be translated if needed
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
  const { t } = useTranslation();
  
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
    try {
      const newReviewData = {
        movieId,
        userName: data.userName,
        rating: data.rating,
        comment: data.comment,
      };
      const newReview: Review = {
        ...newReviewData,
        id: `r${Date.now()}`,
        createdAt: new Date().toISOString(),
        userAvatar: `https://picsum.photos/100/100?random=${Math.floor(Math.random() * 1000)}`,
      };
      
      onReviewSubmit(newReview);
      toast({ title: t('reviewForm.successToastTitle'), description: t('reviewForm.successToastDescription') });
      form.reset();
    } catch (error) {
      toast({ title: t('reviewForm.errorToastTitle'), description: t('reviewForm.errorToastDescription'), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow bg-card">
        <h3 className="text-xl font-semibold text-card-foreground">{t('reviewForm.writeReview')}</h3>
        
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('reviewForm.yourName')}</FormLabel>
              <FormControl>
                <Input placeholder={t('reviewForm.yourName')} {...field} className="bg-background" />
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
              <FormLabel>{t('reviewForm.yourRating')}</FormLabel>
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
              <FormLabel>{t('reviewForm.yourReview')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('reviewForm.yourReview')}
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
          {isSubmitting ? t('reviewForm.submitting') : t('reviewForm.submit')}
        </Button>
      </form>
    </Form>
  );
}
