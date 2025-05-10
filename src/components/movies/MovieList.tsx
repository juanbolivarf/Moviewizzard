
"use client";
import type { Movie } from '@/lib/types';
import { MovieCard } from './MovieCard';
import { useTranslation } from '@/hooks/useTranslation';

interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  const { t } = useTranslation();

  if (movies.length === 0) {
    return <p className="text-center text-muted-foreground py-8">{t('movieList.noMoviesFound')}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
