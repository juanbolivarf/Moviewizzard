
import Image from 'next/image';
import type { Movie } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, UserCircle, Video } from 'lucide-react';
import { StarRating } from './StarRating';

interface MovieDetailsSectionProps {
  movie: Movie;
}

export function MovieDetailsSection({ movie }: MovieDetailsSectionProps) {
  const backdropHint = movie.genres.length > 0 ? movie.genres[0].toLowerCase() + " scene" : "movie scene";
  const posterHint = movie.genres.length > 0 ? movie.genres[0].toLowerCase() + " poster" : "movie poster";

  return (
    <div className="mb-8">
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
        {movie.backdropUrl ? (
          <Image
            src={movie.backdropUrl}
            alt={`Backdrop for ${movie.title}`}
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            data-ai-hint={backdropHint.substring(0,20)} // Keep hint short
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-50" />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-2 shadow-xl">
            {movie.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((genre) => (
              <Badge key={genre} variant="secondary" className="text-sm bg-opacity-70 backdrop-blur-sm">
                {genre}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4 lg:col-span-3">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg shadow-xl w-full"
            data-ai-hint={posterHint.substring(0,20)} // Keep hint short
          />
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <div className="mb-6 space-y-3">
            <div className="flex items-center text-lg">
              <CalendarDays className="h-5 w-5 mr-2 text-muted-foreground" />
              <span className="font-medium">Release Date:</span>
              <span className="ml-2 text-foreground">
                {new Date(movie.releaseDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            {movie.director && (
              <div className="flex items-center text-lg">
                <Video className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="font-medium">Director:</span>
                <span className="ml-2 text-foreground">{movie.director}</span>
              </div>
            )}
            {movie.duration && (
              <div className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                <span className="font-medium">Duration:</span>
                <span className="ml-2 text-foreground">{movie.duration}</span>
              </div>
            )}
            {movie.averageRating && (
               <div className="flex items-center text-lg">
                <StarRating rating={movie.averageRating} size={20} readOnly />
                <span className="ml-2 text-foreground">({movie.averageRating.toFixed(1)})</span>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-semibold mb-3 text-primary">Synopsis</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">{movie.synopsis}</p>

          {movie.cast && movie.cast.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Cast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {movie.cast.map((actor) => (
                  <div key={actor.name} className="flex items-center p-3 bg-card rounded-lg shadow">
                    {actor.imageUrl ? (
                      <Image
                        src={actor.imageUrl}
                        alt={actor.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-3 object-cover"
                        data-ai-hint="person portrait"
                      />
                    ) : (
                      <UserCircle className="h-12 w-12 rounded-full mr-3 text-muted-foreground" />
                    )}
                    <div>
                      <p className="font-semibold text-card-foreground">{actor.name}</p>
                      <p className="text-sm text-muted-foreground">{actor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          
          {movie.images && movie.images.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.images.map((src, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <Image 
                      src={src} 
                      alt={`${movie.title} gallery image ${index + 1}`} 
                      width={600} 
                      height={400} 
                      className="aspect-video object-cover hover:scale-105 transition-transform duration-300"
                      data-ai-hint="movie still" 
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
