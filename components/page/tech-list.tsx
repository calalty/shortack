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

const stackIcons = [
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
  <ShadcnIcon className='stroke-white' width={32} />,
  <VercelIcon className='fill-white' width={32} />
];

export const TechList = () => (
  <section className='w-full flex justify-center bg-black p-4 mt-20'>
    <ul className='flex flex-wrap list-none justify-center items-center gap-x-4 gap-y-6 max-w-96'>
      {stackIcons.map((icon, index) => (
        <li key={index}>{icon}</li>
      ))}
    </ul>
  </section>
);
