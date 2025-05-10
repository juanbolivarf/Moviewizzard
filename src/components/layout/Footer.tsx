
"use client";

import { useTranslation } from '@/hooks/useTranslation';

export function Footer() {
  const { t, isLoading } = useTranslation();
  const currentYear = new Date().getFullYear();

  if (isLoading) {
    return (
      <footer className="py-6 md:px-8 md:py-0 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t('general.loading')}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t('footer.copyright', { year: currentYear, appName: t('appName') })}
        </p>
        {/* Add social media links or other footer content here */}
      </div>
    </footer>
  );
}
