import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ViewTransition } from 'react';
import { Toaster } from 'sonner';
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
      <Head>
        <link rel='icon' href='./icon.svg' type='image/svg+xml' />
      </Head>
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
          <Analytics />
        </body>
      </ViewTransition>
    </html>
  );
}
