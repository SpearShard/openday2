// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Intuit CIT Open Day',
  description: 'CIT’s First Open Day Tech Fest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav>
          <Link href="/" className="text-xl font-bold">
            INTUIT CIT
          </Link>
          <div>
            <Link href="/" className="active">
              HOME
            </Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/book-a-stall">BOOK A STALL</Link>
            <Link href="/rsvp">RSVP</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}