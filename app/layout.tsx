import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

import Providers from './providers';
import './globals.css';
import { getSession } from '@/auth';
import { AppHeader } from '@/components/page/header/app-header';

const inter = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'shrtstack',
  description: 'Simplify Your Stack, Shorten Your Launch'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/app/favicon.ico' />
      </head>
      <Providers session={session}>
        <body className={inter.className}>
          <AppHeader />
          {children}
        </body>
      </Providers>
    </html>
  );
}
