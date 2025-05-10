
export interface Movie {
  id: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  synopsis: string;
  posterUrl: string;
  backdropUrl?: string;
  cast: { name: string; role: string; imageUrl?: string }[];
  genres: string[];
  director?: string;
  averageRating?: number;
  images?: string[]; // Other promotional images
  duration?: string; // e.g., "2h 15m"
}

export interface Review {
  id: string;
  movieId: string;
  userName: string;
  userAvatar?: string;
  rating: number; // 1-5 stars
  comment: string;
  createdAt: string; // ISO date string
}

export type MovieFilters = {
  searchTerm?: string;
  genre?: string;
  sortBy?: 'releaseDateDesc' | 'releaseDateAsc' | 'titleAsc' | 'titleDesc' | 'ratingDesc' | 'ratingAsc';
};
