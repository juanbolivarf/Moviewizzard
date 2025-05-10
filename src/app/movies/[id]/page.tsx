
"use client"; 

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import type { Movie, Review } from '@/lib/types';
import { getMovieById } from '@/data/movies';
import { getReviewsByMovieId } from '@/data/reviews'; // Removed addMockReview as it's unused
import { MovieDetailsSection } from '@/components/movies/MovieDetailsSection';
import { ReviewList } from '@/components/movies/ReviewList';
import { ReviewForm } from '@/components/movies/ReviewForm';
import { RelatedMovies } from '@/components/movies/RelatedMovies';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/hooks/useTranslation';
import { APP_NAME } from '@/app/constants';


export default function MovieDetailPage() {
  const params = useParams();
  const movieId = params.id as string;
  const { t, isLoading: isLoadingTranslations, currentLocale } = useTranslation();

  const [movie, setMovie] = useState<Movie | null | undefined>(undefined); 
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoadingMovieData, setIsLoadingMovieData] = useState(true);

  useEffect(() => {
    if (movieId) {
      setIsLoadingMovieData(true);
      setTimeout(() => {
        const foundMovie = getMovieById(movieId);
        setMovie(foundMovie);
        if (foundMovie) {
          setReviews(getReviewsByMovieId(movieId));
        }
        setIsLoadingMovieData(false);
      }, 300);
    }
  }, [movieId]);

  useEffect(() => {
    if (!isLoadingTranslations && movie) {
      document.title = t('documentTitles.movieDetail', { movieTitle: movie.title, appName: t('appName') });
    } else if (!isLoadingTranslations && movie === null) {
      document.title = t('movieDetails.movieNotFoundTitle') + ` | ${t('appName')}`;
    }
  }, [isLoadingTranslations, movie, t, currentLocale]);

  const handleReviewSubmit = (newReviewData: Omit<Review, 'id' | 'createdAt' | 'userAvatar' | 'movieId'>) => {
    if (movie) {
      const newReview: Review = {
        ...newReviewData,
        movieId: movie.id,
        id: `r_new_${Date.now()}`,
        createdAt: new Date().toISOString(),
        userAvatar: `https://picsum.photos/100/100?random=${Math.floor(Math.random() * 100)}`,
      };
      setReviews(prevReviews => [newReview, ...prevReviews]); 
    }
  };
  
  if (isLoadingMovieData || isLoadingTranslations) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-10 w-32 mb-6" /> 
        <Skeleton className="h-96 w-full rounded-lg" /> 
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <Skeleton className="w-full aspect-[2/3] rounded-lg" />
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-8 w-1/4 mt-4" />
            <Skeleton className="h-40 w-full" />
          </div>
        </div>
        <Skeleton className="h-1 w-full my-8" />
        <Skeleton className="h-8 w-1/3 mb-4" />
        <div className="space-y-4">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  if (movie === null) {
    return (
      <div className="text-center py-10">
        <Alert variant="destructive" className="max-w-md mx-auto">
          <AlertTitle>{t('movieDetails.movieNotFoundTitle')}</AlertTitle>
          <AlertDescription>
            {t('movieDetails.movieNotFoundDescription')}
          </AlertDescription>
        </Alert>
         <Button asChild variant="link" className="mt-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('movieDetails.goBackHome')}
            </Link>
          </Button>
      </div>
    );
  }
  
  if (!movie) return null; 

  return (
    <div className="max-w-6xl mx-auto">
      <Button asChild variant="outline" className="mb-6 group">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> {t('movieDetails.backToMovies')}
        </Link>
      </Button>

      <MovieDetailsSection movie={movie} />

      <Separator className="my-12" />

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-semibold mb-6 text-primary">{t('movieDetails.reviewsAndOpinions')}</h2>
          <ReviewForm movieId={movie.id} onReviewSubmit={handleReviewSubmit} />
          <Separator className="my-8" />
          <ReviewList reviews={reviews} />
        </div>
        <div className="lg:col-span-1">
          {/* RelatedMovies component will be rendered here if needed, currently placed below */}
        </div>
      </div>
      
      <RelatedMovies currentMovie={movie} />
    </div>
  );
}
