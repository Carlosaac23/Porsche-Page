import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import { ViewTransition } from 'react';
import './globals.css';

const interSans = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Porsche',
  description: 'A Minimalist Porsche Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ViewTransition>
        <body
          className={`${interSans.className} px-8 antialiased sm:px-12 md:px-20 lg:px-22 xl:px-28 2xl:px-40`}
        >
          <Toaster
            toastOptions={{
              style: {
                background: '#0a0a0a',
                color: '#fafafa',
                borderColor: '#262626',
              },
            }}
          />
          {children}
        </body>
      </ViewTransition>
    </html>
  );
}
