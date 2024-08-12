'use client';

import { Shortack } from '../../../icons/shortack';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { ListItem } from '../../ui/navigation-menu';
import { Header } from '../../ui/header';
import Link from 'next/link';
import React, { useState } from 'react';
import { HamburgerMenu } from './hamburger-menu';
import { signIn } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export const AppHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const REDUCED_HEADER_FOOTER_URLS = ['/login'];

  return (
    <>
      <Header
        reducedHeader={REDUCED_HEADER_FOOTER_URLS.some(path => pathname === path)}
        menu={<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        navigationItems={{
          items: [
            {
              title: 'Docs',
              children: (
                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  <li className='row-span-3'>
                    <NavigationMenuLink asChild>
                      <Link
                        className='flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                        href='/'
                      >
                        <div className='mb-2 mt-4 text-lg font-medium'>
                          <strong>shrtstack</strong>
                        </div>
                        <p className='text-sm leading-tight text-muted-foreground'>
                          A comprehensive Next.js boilerplate to kickstart your SaaS project. Fast,
                          flexible, and easy to use.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href='/docs/getting-started' title='Getting Started'>
                    Step-by-step guide to start using <strong>shrtstack</strong>.
                  </ListItem>
                  <ListItem href='/docs/features' title='Features'>
                    Explore all the features and integrations available.
                  </ListItem>
                  <ListItem href='/docs/faq' title='FAQ'>
                    Frequently asked questions about using <strong>shrtstack</strong>.
                  </ListItem>
                </ul>
              )
            },
            { link: { name: 'Pricing', url: '/pricing' } },
            { link: { name: 'Blog', url: '/blog' } },
            { link: { name: 'Contact', url: '/contact' } }
          ]
        }}
        actionLinks={[
          { variant: 'secondary', children: 'Sign up', onClick: () => signIn() },
          { variant: 'shortstack', children: 'Sign in', onClick: () => signIn() }
        ]}
        logo={<Shortack />}
      />

      {isOpen && (
        <nav className='md:hidden fixed inset-0 top-[3.625rem] bg-white flex flex-col z-50'></nav>
      )}
    </>
  );
};
