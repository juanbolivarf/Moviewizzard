
"use client";

import Link from 'next/link';
import { Clapperboard, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';

export function Header() {
  const { locale, setLocale, isLoadingLocale } = useLanguage();
  const { t, isLoading: isLoadingTranslations } = useTranslation();

  const toggleLang = () => {
    setLocale(prevLocale => prevLocale === 'en' ? 'es' : 'en');
  };

  const isLoading = isLoadingLocale || isLoadingTranslations;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Clapperboard className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg">
            {isLoading ? "..." : t('appName')}
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4">
          {/* Add navigation links here if needed */}
        </nav>
        <Button variant="ghost" onClick={toggleLang} disabled={isLoading} className="gap-2">
          <Languages className="h-4 w-4" />
          {isLoading ? "..." : (locale === 'en' ? 'Español' : 'English')}
        </Button>
        {/* Add User authentication button or profile dropdown here */}
        {/* <Button variant="outline">Sign In</Button> */}
      </div>
    </header>
  );
}
