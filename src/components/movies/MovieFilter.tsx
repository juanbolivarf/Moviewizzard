
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
import { useTranslation } from "@/hooks/useTranslation";

interface MovieFilterProps {
  genres: string[];
  filters: MovieFilters;
  onFiltersChange: (newFilters: Partial<MovieFilters>) => void;
}

export function MovieFilter({ genres, filters, onFiltersChange }: MovieFilterProps) {
  const { t } = useTranslation();

  const handleGenreChange = (genre: string) => {
    onFiltersChange({ genre: genre === "all" ? undefined : genre });
  };

  const handleSortChange = (sortBy: MovieFilters['sortBy']) => {
    onFiltersChange({ sortBy });
  };

  // Genre display names could also be translated if genres themselves were keys
  // For now, genres are assumed to be language-agnostic or pre-translated if needed.

  const sortOptions: { value: MovieFilters['sortBy']; labelKey: string }[] = [
    { value: "releaseDateDesc", labelKey: "movieFilter.releaseDateDesc" },
    { value: "releaseDateAsc", labelKey: "movieFilter.releaseDateAsc" },
    { value: "titleAsc", labelKey: "movieFilter.titleAsc" },
    { value: "titleDesc", labelKey: "movieFilter.titleDesc" },
    { value: "ratingDesc", labelKey: "movieFilter.ratingDesc" },
    { value: "ratingAsc", labelKey: "movieFilter.ratingAsc" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div>
        <Label htmlFor="genre-filter" className="mb-1 block text-sm font-medium text-muted-foreground">{t('movieFilter.genre')}</Label>
        <Select value={filters.genre || "all"} onValueChange={handleGenreChange}>
          <SelectTrigger id="genre-filter" className="w-full sm:w-[180px] rounded-lg shadow-sm">
            <SelectValue placeholder={t('movieFilter.genre')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('movieFilter.allGenres')}</SelectItem>
            {genres.map((genre) => (
              <SelectItem key={genre} value={genre}>
                {genre} {/* Assuming genre names are fine as is, or would need translation mapping */}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="sort-by" className="mb-1 block text-sm font-medium text-muted-foreground">{t('movieFilter.sortBy')}</Label>
        <Select value={filters.sortBy || "releaseDateDesc"} onValueChange={handleSortChange as (value: string) => void}>
          <SelectTrigger id="sort-by" className="w-full sm:w-[220px] rounded-lg shadow-sm">
            <SelectValue placeholder={t('movieFilter.sortBy')} />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map(option => (
              <SelectItem key={option.value} value={option.value!}>
                {t(option.labelKey)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
