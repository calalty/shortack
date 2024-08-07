'use client';

import React from 'react';
import { AWSIcon } from '../../../icons/aws';
import { Neon } from '../../../icons/neon';
import { NextIcon } from '../../../icons/next';
import { PlanetScale } from '../../../icons/planetscale';
import { ResendIcon } from '../../../icons/resend';
import { SanityIcon } from '../../../icons/sanity';
import { ShadcnIcon } from '../../../icons/shadcn';
import { ShieldIcon } from '../../../icons/shield';
import { StorybookIcon } from '../../../icons/storybook';
import { StripeIcon } from '../../../icons/stripe';
import { TailwindCssIcon } from '../../../icons/tailwindcss';
import { TypescriptIcon } from '../../../icons/typescript';
import { VercelIcon } from '../../../icons/vercel';

import { useState } from 'react';

const TEXT_SHORTSTACK_PRIMARY = 'text-shortstack-primary';
const DEFAULT_HOVER_TEXT = 'Tech,';

const iconBaseClass = 'fill-black transition-all duration-500';

const features = [
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
    title: <PlanetScale className={iconBaseClass} width={44} />,
    value: 'PlanetScale,',
    color: 'text-black',
    url: 'https://dev.mysql.com/doc/'
  },
  {
    title: <Neon className={`group-hover:fill-neon ${iconBaseClass}`} width={44} />,
    value: 'Neon,',
    color: 'text-neon',
    url: 'https://www.postgresql.org/docs/'
  },
  {
    title: (
      <ShadcnIcon
        className={`stroke-black ${iconBaseClass.replace('fill-black', 'fill-none')}`}
        width={44}
      />
    ),
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

export const FeatureTags = () => {
  const [hoveredValue, setHoveredValue] = useState<string>(DEFAULT_HOVER_TEXT);
  const [animationClass, setAnimationClass] = useState<string>('');
  const [hoveredColor, setHoveredColor] = useState<string>(TEXT_SHORTSTACK_PRIMARY);

  const handleMouseEvent = (
    value: string = DEFAULT_HOVER_TEXT,
    color: string = TEXT_SHORTSTACK_PRIMARY
  ) => {
    if (value !== hoveredValue) {
      setAnimationClass('flip-out');
      setTimeout(() => {
        setHoveredValue(value);
        setHoveredColor(color);
        setAnimationClass('flip-in');
      }, 150);
    }
  };

  return (
    <div
      onMouseLeave={() => handleMouseEvent()}
      className='grid grid-cols-1 md:grid-cols-5 m-auto border border-black/10 container p-0'
    >
      <div className='col-span-1 md:col-span-2 border border-black/10 p-5'>
        <div className='h-full w-full flex items-center justify-center'>
          <h2 className='text-left text-3xl font-black'>
            Your
            <span
              className={`${animationClass} ${hoveredColor} relative inline-block font-bold ml-[0.35rem]`}
            >
              <span className='absolute left-0 -bottom-[0.4rem]'>{hoveredValue}</span>
            </span>
            <br />
            Your Stack.
          </h2>
        </div>
      </div>
      {features.map(({ title, value, color, url }) => (
        <a
          key={value}
          onMouseEnter={() => handleMouseEvent(value, color)}
          href={url}
          target='_blank'
          className='flex justify-center items-center border border-black/10 h-40 group'
          rel='noopener noreferrer'
        >
          {title}
        </a>
      ))}
    </div>
  );
};
