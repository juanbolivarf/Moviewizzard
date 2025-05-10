
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import type { MovieFilters } from "@/lib/types";

interface MovieFilterProps {
  genres: string[];
  filters: MovieFilters;
  onFiltersChange: (newFilters: Partial<MovieFilters>) => void;
}

export function MovieFilter({ genres, filters, onFiltersChange }: MovieFilterProps) {
  const handleGenreChange = (genre: string) => {
    onFiltersChange({ genre: genre === "all" ? undefined : genre });
  };

  const handleSortChange = (sortBy: MovieFilters['sortBy']) => {
    onFiltersChange({ sortBy });
  };

  const sortOptions: { value: MovieFilters['sortBy']; label: string }[] = [
    { value: "releaseDateDesc", label: "Release Date (Newest)" },
    { value: "releaseDateAsc", label: "Release Date (Oldest)" },
    { value: "titleAsc", label: "Title (A-Z)" },
    { value: "titleDesc", label: "Title (Z-A)" },
    { value: "ratingDesc", label: "Rating (Highest)" },
    { value: "ratingAsc", label: "Rating (Lowest)" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div>
        <Label htmlFor="genre-filter" className="mb-1 block text-sm font-medium text-muted-foreground">Genre</Label>
        <Select value={filters.genre || "all"} onValueChange={handleGenreChange}>
          <SelectTrigger id="genre-filter" className="w-full sm:w-[180px] rounded-lg shadow-sm">
            <SelectValue placeholder="Filter by genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genres</SelectItem>
            {genres.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="sort-by" className="mb-1 block text-sm font-medium text-muted-foreground">Sort By</Label>
        <Select value={filters.sortBy || "releaseDateDesc"} onValueChange={handleSortChange as (value: string) => void}>
          <SelectTrigger id="sort-by" className="w-full sm:w-[220px] rounded-lg shadow-sm">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map(option => (
              <SelectItem key={option.value} value={option.value!}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
