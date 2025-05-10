
"use client";

import { useState, useEffect } from 'react';
import type { Movie } from '@/lib/types';
import { generateMovieRecommendations } from '@/ai/flows/generate-movie-recommendations';
import { mockMovies } from '@/data/movies'; 
import { MovieCard } from './MovieCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useTranslation } from '@/hooks/useTranslation';

interface RelatedMoviesProps {
  currentMovie: Movie;
}

export function RelatedMovies({ currentMovie }: RelatedMoviesProps) {
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      try {
        const aiInput = {
          // Viewing history and genres could also be translated if the AI model is language-sensitive
          // For now, sending them in English as the model likely expects that.
          viewingHistory: `User has shown interest in "${currentMovie.title}".`,
          genres: currentMovie.genres.join(', '),
        };
        const result = await generateMovieRecommendations(aiInput);
        
        const recommendedTitles = result.recommendations
          .split('\n')
          .map(title => title.replace(/^- /, '').trim())
          .filter(title => title.length > 0 && title.toLowerCase() !== currentMovie.title.toLowerCase());

        const matchedMovies = recommendedTitles
          .map(title => mockMovies.find(m => m.title.toLowerCase() === title.toLowerCase()))
          .filter((movie): movie is Movie => !!movie)
          .slice(0, 5); 

        setRecommendations(matchedMovies);
      } catch (e) {
        console.error("Failed to fetch recommendations:", e);
        setError(t('relatedMovies.error'));
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, [currentMovie, t]); // Added t to dependency array

  return (
    <Card className="mt-12 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary">{t('relatedMovies.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-2 text-muted-foreground">{t('relatedMovies.loading')}</p>
          </div>
        )}
        {error && !isLoading && (
           <Alert variant="destructive">
             <AlertTitle>{t('reviewForm.errorToastTitle')}</AlertTitle> {/* Using generic error title */}
             <AlertDescription>{error}</AlertDescription>
           </Alert>
        )}
        {!isLoading && !error && recommendations.length === 0 && (
          <p className="text-muted-foreground">{t('relatedMovies.noRecommendations')}</p>
        )}
        {!isLoading && !error && recommendations.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {recommendations.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
