import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';

import Providers from './providers';
import './globals.css';
import { getSession } from '@/auth';
import { AppHeader } from '@/components/page/app-header';

const inter = Schibsted_Grotesk({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <AppHeader />
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
