
"use client";
import { useEffect, useState, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Locale } from '@/contexts/LanguageContext';

// Helper to get nested values from an object using a dot-separated string
function getNestedValue(obj: any, path: string): string | undefined {
  if (!obj) return undefined;
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

interface Translations {
  [key: string]: string | Translations;
}

export const useTranslation = () => {
  const { locale, isLoadingLocale } = useLanguage();
  const [translations, setTranslations] = useState<Translations | null>(null);
  const [isLoadingTranslations, setIsLoadingTranslations] = useState(true);

  useEffect(() => {
    if (isLoadingLocale) {
      return; // Don't load translations until locale is determined
    }

    const loadTranslations = async (currentLocale: Locale) => {
      setIsLoadingTranslations(true);
      try {
        const module = await import(`../locales/${currentLocale}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Could not load translations for locale: ${currentLocale}`, error);
        // Fallback to English if current locale fails
        if (currentLocale !== 'en') {
          try {
            const fallbackModule = await import(`../locales/en.json`);
            setTranslations(fallbackModule.default);
          } catch (e) {
            console.error(`Could not load fallback English translations`, e);
            setTranslations({});
          }
        } else {
          setTranslations({}); // Empty if English itself fails
        }
      } finally {
        setIsLoadingTranslations(false);
      }
    };

    loadTranslations(locale);
  }, [locale, isLoadingLocale]);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    if (isLoadingLocale || isLoadingTranslations || !translations) {
      // Return a placeholder or the key itself during loading
      return params ? `${key} (loading...)` : key;
    }
    let value = getNestedValue(translations, key);

    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" not found or not a string for locale "${locale}".`);
      return key; // Return the key if not found or not a string
    }

    if (params) {
      Object.keys(params).forEach(paramKey => {
        const regex = new RegExp(`{${paramKey}}`, 'g');
        value = (value as string).replace(regex, String(params[paramKey]));
      });
    }
    return value as string;
  }, [translations, isLoadingTranslations, isLoadingLocale, locale]);

  return { t, currentLocale: locale, isLoading: isLoadingLocale || isLoadingTranslations };
};
