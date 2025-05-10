
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { APP_NAME } from '@/app/constants'; // For fallback or parts of title

export function DynamicTitle() {
  const { t, isLoading, currentLocale } = useTranslation();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoading) return;

    let pageTitle = t('documentTitles.default', { appName: t('appName') });

    if (pathname === '/') {
      pageTitle = t('documentTitles.home', { appName: t('appName') });
    } else if (pathname.startsWith('/movies/')) {
      // For movie detail pages, the title is typically set by the page itself
      // This component can set a generic one or be enhanced to fetch movie title
      // For now, we let specific page components handle their detailed titles if needed
      // or use a placeholder. The page.tsx for movie details would ideally set its own title.
      // Fallback to default app name if movie title isn't available here.
      // This part might need to be handled within the [id]/page.tsx for specific movie title
    }
    
    document.title = pageTitle;

  }, [pathname, t, isLoading, currentLocale, APP_NAME]);

  return null; // This component does not render anything
}
