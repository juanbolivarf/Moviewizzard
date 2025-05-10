
"use client";

import { useState, useMemo, useEffect } from 'react';
import type { Movie, MovieFilters } from '@/lib/types';
import { mockMovies, getAllGenres } from '@/data/movies';
import { MovieList } from '@/components/movies/MovieList';
import { MovieSearch } from '@/components/movies/MovieSearch';
import { MovieFilter } from '@/components/movies/MovieFilter';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/hooks/useTranslation';
import { APP_NAME } from './constants'; // For dynamic title

export default function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [isLoadingMovies, setIsLoadingMovies] = useState(true);
  const [filters, setFilters] = useState<MovieFilters>({
    sortBy: 'releaseDateDesc',
  });

  const { t, isLoading: isLoadingTranslations, currentLocale } = useTranslation();

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMovies(mockMovies);
      setGenres(getAllGenres()); // Assuming genres are not language-dependent for now
      setIsLoadingMovies(false);
    }, 500); 
  }, []);

  useEffect(() => {
    if (!isLoadingTranslations) {
      document.title = t('documentTitles.home', { appName: t('appName') });
    }
  }, [isLoadingTranslations, t, currentLocale]);


  const handleFiltersChange = (newFilters: Partial<MovieFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredAndSortedMovies = useMemo(() => {
    let processedMovies = [...movies];

    if (filters.searchTerm) {
      processedMovies = processedMovies.filter(movie =>
        movie.title.toLowerCase().includes(filters.searchTerm!.toLowerCase())
      );
    }

    if (filters.genre) {
      processedMovies = processedMovies.filter(movie =>
        movie.genres.includes(filters.genre!)
      );
    }

    if (filters.sortBy) {
      processedMovies.sort((a, b) => {
        switch (filters.sortBy) {
          case 'releaseDateDesc':
            return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
          case 'releaseDateAsc':
            return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
          case 'titleAsc':
            return a.title.localeCompare(b.title);
          case 'titleDesc':
            return b.title.localeCompare(a.title);
          case 'ratingDesc':
            return (b.averageRating || 0) - (a.averageRating || 0);
          case 'ratingAsc':
            return (a.averageRating || 0) - (b.averageRating || 0);
          default:
            return 0;
        }
      });
    }

    return processedMovies;
  }, [movies, filters]);

  if (isLoadingMovies || isLoadingTranslations) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <Skeleton className="h-10 w-full md:w-1/2" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-10 w-48" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-[300px] w-full aspect-[2/3]" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 p-4 bg-card rounded-lg shadow">
        <MovieSearch 
          searchTerm={filters.searchTerm || ''} 
          onSearchTermChange={(term) => handleFiltersChange({ searchTerm: term })} 
        />
        <MovieFilter 
          genres={genres} 
          filters={filters} 
          onFiltersChange={handleFiltersChange} 
        />
      </div>
      <MovieList movies={filteredAndSortedMovies} />
    </div>
  );
}
