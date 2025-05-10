
import Link from 'next/link';
import { Clapperboard } from 'lucide-react';
import { APP_NAME } from '@/app/constants';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Clapperboard className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block text-lg">
            {APP_NAME}
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4">
          {/* Add navigation links here if needed, e.g., Genres, Top Rated */}
          {/* <Button variant="ghost" asChild>
            <Link href="/genres">Genres</Link>
          </Button> */}
        </nav>
        {/* Add User authentication button or profile dropdown here */}
        {/* <Button variant="outline">Sign In</Button> */}
      </div>
    </header>
  );
}

