
import Link from 'next/link';
import Image from 'next/image';
import type { Movie } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const posterHint = movie.title.toLowerCase().includes("godfather") ? "mafia movie" :
                     movie.title.toLowerCase().includes("dark knight") ? "superhero movie" :
                     movie.title.toLowerCase().includes("pulp fiction") ? "crime film" :
                     movie.genres.length > 0 ? movie.genres[0].toLowerCase() : "movie poster";

  return (
    <Link href={`/movies/${movie.id}`} className="group block">
      <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
        <CardHeader className="p-0 relative">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            width={400}
            height={600}
            className="w-full h-auto object-cover aspect-[2/3] group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={posterHint}
          />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-lg font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
            {movie.title}
          </CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            {new Date(movie.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          {movie.averageRating && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-4 w-4 mr-1.5 text-yellow-400 fill-yellow-400" />
              {movie.averageRating.toFixed(1)}
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0">
           <div className="flex flex-wrap gap-1">
            {movie.genres.slice(0, 2).map(genre => (
              <Badge key={genre} variant="secondary" className="text-xs">{genre}</Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
