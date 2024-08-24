import React from 'react';
import { PricingCard } from '../../ui/pricing-card';
import { CheckCircledIcon, CheckIcon, Cross1Icon, CrossCircledIcon } from '@radix-ui/react-icons';
import { Pancake } from '@/icons/pancake';

export const Pricing = () => (
  <section className='w-full m-auto py-28'>
    <h1 className='text-center font-semibold md:text-5xl mb-8'>
      Choose The Stack <br /> That <span className='text-shortstack-primary'>Works</span> For You
    </h1>
    <div className='max-w-4xl flex w-full m-auto gap-8'>
      <PricingCard
        additionalClassNames={{
          root: 'w-full',
          description: 'text-4xl font-semibold text-black mt-2 pb-4 border-b-2 border-secondary',
          header: 'pb-0 px-6 pt-6 mb-4'
        }}
        title='Basic Plan'
        price='£9.99'
        checklist={{
          className: 'flex items-center gap-2',
          items: [
            { icon: <CheckCircledIcon />, label: 'Access to basic features' },
            { icon: <CheckCircledIcon />, label: 'Email support' },
            { icon: <CrossCircledIcon />, label: 'No ads' }
          ]
        }}
        footer={{
          description: {
            text: 'Pay once. Use forever.',
            className: 'text-sm'
          },
          button: {
            className: 'gap-2',
            variant: 'secondary',
            size: 'lg',
            url: '/subscribe/basic',
            label: 'start stack'
          }
        }}
      />

      <PricingCard
        additionalClassNames={{
          root: 'w-full',
          description: 'text-4xl font-semibold text-black mt-2 pb-4 border-b-2 border-secondary',
          header: 'pb-0 px-6 pt-6 mb-4'
        }}
        title='Pro Plan'
        price='£29.99'
        checklist={{
          className: 'flex items-center gap-2',
          items: [
            { icon: <CheckCircledIcon />, label: 'All basic features' },
            { icon: <CheckCircledIcon />, label: 'Priority support' },
            { icon: <CheckCircledIcon />, label: 'No ads' }
          ]
        }}
        footer={{
          description: {
            text: 'Pay once. Use forever.',
            className: 'text-sm'
          },
          button: {
            className: 'gap-2',
            variant: 'shortstack',
            size: 'lg',
            url: '/subscribe/pro',
            label: 'start stack'
          }
        }}
      />
    </div>
  </section>
);
