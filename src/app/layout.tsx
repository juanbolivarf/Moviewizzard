
import type { Metadata } from 'next';
import './globals.css';
import { APP_NAME } from './constants'; // APP_NAME is still used for static metadata
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { AppProviders } from '@/components/providers/AppProviders';
import { DynamicTitle } from '@/components/layout/DynamicTitle';

export const metadata: Metadata = {
  // Static metadata will primarily use the default language (English)
  // or be generic if dynamic updates are too complex for the current scope.
  title: {
    default: APP_NAME, // From constants.ts
    template: `%s | ${APP_NAME}`,
  },
  description: `Discover and review your favorite movies on ${APP_NAME}.`,
};

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
 <link rel="stylesheet" href="/styles.css"></link>
        <AppProviders>
          <DynamicTitle />
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
