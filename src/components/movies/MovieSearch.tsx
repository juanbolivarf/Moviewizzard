
"use client";

import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import type React from 'react';
import { useTranslation } from "@/hooks/useTranslation";

interface MovieSearchProps {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

export function MovieSearch({ searchTerm, onSearchTermChange }: MovieSearchProps) {
  const { t } = useTranslation();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(event.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder={t('movieSearch.placeholder')}
        value={searchTerm}
        onChange={handleInputChange}
        className="pl-10 pr-4 py-2 rounded-lg shadow-sm"
        aria-label={t('movieSearch.placeholder')}
      />
    </div>
  );
}
