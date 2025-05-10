
"use client";
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'en' | 'es';

interface LanguageContextType {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  isLoadingLocale: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [isLoadingLocale, setIsLoadingLocale] = useState(true);

  useEffect(() => {
    // This effect runs only on the client
    setIsLoadingLocale(true);
    const storedLocale = localStorage.getItem('locale') as Locale | null;
    if (storedLocale) {
      setLocale(storedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') {
        setLocale('es');
      } else {
        setLocale('en'); // Default to English if not Spanish or no stored locale
      }
    }
    setIsLoadingLocale(false);
  }, []);

  useEffect(() => {
    // This effect runs only on the client after locale is determined
    if (!isLoadingLocale) {
        localStorage.setItem('locale', locale);
        document.documentElement.lang = locale;
    }
  }, [locale, isLoadingLocale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, isLoadingLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
