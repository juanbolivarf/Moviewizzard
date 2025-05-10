
"use client";

import { useState, useEffect } from 'react';
import type { Movie } from '@/lib/types';
import { generateMovieRecommendations } from '@/ai/flows/generate-movie-recommendations';
import { mockMovies } from '@/data/movies'; // Assuming access to all movies for matching
import { MovieCard } from './MovieCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface RelatedMoviesProps {
  currentMovie: Movie;
}

export function RelatedMovies({ currentMovie }: RelatedMoviesProps) {
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      try {
        const aiInput = {
          viewingHistory: `User has shown interest in "${currentMovie.title}".`,
          genres: currentMovie.genres.join(', '),
        };
        const result = await generateMovieRecommendations(aiInput);
        
        // The AI returns a string of movie titles. We need to parse it and match.
        // This is a simplified parsing logic.
        const recommendedTitles = result.recommendations
          .split('\n')
          .map(title => title.replace(/^- /, '').trim())
          .filter(title => title.length > 0 && title.toLowerCase() !== currentMovie.title.toLowerCase());

        // Match titles with mockMovies data
        const matchedMovies = recommendedTitles
          .map(title => mockMovies.find(m => m.title.toLowerCase() === title.toLowerCase()))
          .filter((movie): movie is Movie => !!movie)
          .slice(0, 5); // Limit to 5 recommendations

        setRecommendations(matchedMovies);
      } catch (e) {
        console.error("Failed to fetch recommendations:", e);
        setError("Could not load recommendations at this time.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, [currentMovie]);

  return (
    <Card className="mt-12 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-primary">You Might Also Like</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-2 text-muted-foreground">Loading recommendations...</p>
          </div>
        )}
        {error && !isLoading && (
           <Alert variant="destructive">
             <AlertTitle>Error</AlertTitle>
             <AlertDescription>{error}</AlertDescription>
           </Alert>
        )}
        {!isLoading && !error && recommendations.length === 0 && (
          <p className="text-muted-foreground">No specific recommendations found at this time.</p>
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
