/* eslint-disable react/jsx-key */
import { AWSIcon } from '@/icons/aws';
import { MySQLIcon } from '@/icons/mysql';
import { NextIcon } from '@/icons/next';
import { PostgreSQLIcon } from '@/icons/postgresql';
import { ResendIcon } from '@/icons/resend';
import { SanityIcon } from '@/icons/sanity';
import { ShadcnIcon } from '@/icons/shadcn';
import { ShieldIcon } from '@/icons/shield';
import { StorybookIcon } from '@/icons/storybook';
import { StripeIcon } from '@/icons/stripe';
import { TailwindCssIcon } from '@/icons/tailwindcss';
import { TypescriptIcon } from '@/icons/typescript';
import { VercelIcon } from '@/icons/vercel';

const iconBaseClass = 'fill-black transition-all duration-500';

export const features = [
  {
    title: <NextIcon className={iconBaseClass} width={44} />,
    value: 'Next.js,',
    color: 'text-black',
    url: 'https://nextjs.org/docs'
  },
  {
    title: <ShieldIcon className={`group-hover:fill-shield ${iconBaseClass}`} width={44} />,
    value: 'NextAuth,',
    color: 'text-shield',
    url: 'https://next-auth.js.org/'
  },
  {
    title: <TypescriptIcon className={`group-hover:fill-typescript ${iconBaseClass}`} width={44} />,
    value: 'TypeScript,',
    color: 'text-typescript',
    url: 'https://www.typescriptlang.org/docs/'
  },
  {
    title: (
      <TailwindCssIcon className={`group-hover:fill-tailwind-css ${iconBaseClass}`} width={44} />
    ),
    value: 'Tailwind,',
    color: 'text-tailwind-css',
    url: 'https://v2.tailwindcss.com/docs'
  },
  {
    title: <MySQLIcon className={`group-hover:fill-my-sql ${iconBaseClass}`} width={44} />,
    value: 'MySQL,',
    color: 'text-my-sql',
    url: 'https://dev.mysql.com/doc/'
  },
  {
    title: (
      <PostgreSQLIcon className={`group-hover:fill-postgre-sql ${iconBaseClass}`} width={44} />
    ),
    value: 'PostgreSQL,',
    color: 'text-postgre-sql',
    url: 'https://www.postgresql.org/docs/'
  },
  {
    title: <ShadcnIcon className={`fill-none stroke-black ${iconBaseClass}`} width={44} />,
    value: 'Shadcn,',
    color: 'text-black',
    url: 'https://ui.shadcn.com/docs'
  },
  {
    title: <StripeIcon className={`group-hover:fill-stripe ${iconBaseClass}`} width={64} />,
    value: 'Stripe,',
    color: 'text-stripe',
    url: 'https://docs.stripe.com/?locale=en-GB'
  },
  {
    title: <ResendIcon className={`group-hover:fill-resend ${iconBaseClass}`} width={72} />,
    value: 'Resend,',
    color: 'text-resend',
    url: 'https://resend.com/docs/introduction'
  },
  {
    title: <VercelIcon className={iconBaseClass} width={44} />,
    value: 'Vercel,',
    color: 'text-black',
    url: 'https://vercel.com/docs'
  },
  {
    title: <StorybookIcon className={`group-hover:fill-storybook ${iconBaseClass}`} width={44} />,
    value: 'Storybook,',
    color: 'text-storybook',
    url: 'https://storybook.js.org/docs'
  },
  {
    title: <SanityIcon className={`group-hover:fill-sanity ${iconBaseClass}`} width={72} />,
    value: 'Sanity,',
    color: 'text-sanity',
    url: 'https://www.sanity.io/docs'
  },
  {
    title: <AWSIcon className={`group-hover:fill-aws ${iconBaseClass}`} width={50} />,
    value: 'AWS,',
    color: 'text-aws',
    url: 'https://docs.aws.amazon.com/'
  }
];

export const stackIcons = [
  <StripeIcon className='fill-white' width={32} height={32} />,
  <NextIcon className='fill-white' width={32} height={32} />,
  <TailwindCssIcon className='fill-white' width={32} height={32} />,
  <ShieldIcon className='fill-white' width={32} height={32} />,
  <StorybookIcon className='fill-white' width={32} height={32} />,
  <SanityIcon className='fill-white' width={32} height={32} />,
  <TypescriptIcon className='fill-white' width={32} height={32} />,
  <AWSIcon className='fill-white' width={32} height={32} />,
  <MySQLIcon className='fill-white' width={32} height={32} />,
  <PostgreSQLIcon className='fill-white' width={32} height={32} />,
  <ResendIcon className='fill-white' width={32} />,
  <ShadcnIcon className='fill-white' width={32} />,
  <VercelIcon className='fill-white' width={32} />
];
