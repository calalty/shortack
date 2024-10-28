import React from 'react';
import { AlertTriangle, CheckCircleIcon, ZapIcon } from 'lucide-react';
import { Tabs } from '@/components/ui/tabs';
import { LightningBoltIcon } from '@radix-ui/react-icons';

const painPoints = [
  { description: 'Set up emails', time: '4 hrs' },
  { description: 'Design landing page', time: '6 hrs' },
  { description: 'Handle Stripe webhooks', time: '4 hrs' },
  { description: 'Add SEO tags', time: '2 hrs' },
  { description: 'Apply for Google OAuth', time: '1 hr' },
  { description: 'Configure DNS records', time: '3 hrs' },
  { description: 'Set up protected API routes', time: '2 hrs' }
];

const painFreeSolutions = [
  { description: 'Automated email setup', time: '30 mins' },
  { description: 'Pre-designed landing page templates', time: '1 hr' },
  { description: 'Integrated Stripe support', time: '30 mins' },
  { description: 'SEO best practices built-in', time: '15 mins' },
  { description: 'Easy OAuth configuration', time: '20 mins' },
  { description: 'Auto DNS configuration', time: '10 mins' },
  { description: 'Protected API routes setup', time: '25 mins' }
];

export const Problem = () => {
  return (
    <section className='bg-gradient-to-t from-secondary to-white'>
      <div className='container px-4 text-center max-w-6xl mx-auto pb-32'>
        <div className='flex flex-col gap-6 mb-20'>
          <h2 className='flex items-center bg-primary gap-2 text-white font-normal w-min py-2 px-6 rounded-full mx-auto'>
            <LightningBoltIcon className='h-5 w-5' /> Surge
          </h2>
          <p className='text-3xl text-center'>Instant Impact</p>
          <p className='text-xl font-light opacity-75 max-w-lg mx-auto'>
            Discover how our solution simplifies your startup journey by addressing common
            challenges effectively. See the difference with our pre-built features designed to save
            you time and effort.
          </p>
        </div>
        <Tabs
          additionalClassNames={{
            tabsList: 'mb-8 rounded-full px-2 py-6 bg-white border-primary/15 border h-12 gap-2',
            tabsTrigger:
              'rounded-full bg-transparent py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-white text-primary'
          }}
          defaultValue='pain'
          tabs={[
            {
              value: 'pain',
              label: (
                <span className='flex items-center gap-2'>
                  <AlertTriangle size={16} /> Pain Points
                </span>
              ),
              children: (
                <ul className='flex flex-col mx-auto gap-3 p-6 bg-red-100 rounded-2xl w-[28rem] shadow-md'>
                  {painPoints.map(({ description, time }) => (
                    <li className='flex gap-2 w-full justify-center' key={description}>
                      <p className='text-lg text-center'>
                        <span className='font-semibold mr-1'>{time}</span>
                        <span>{description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              value: 'pain-free',
              label: (
                <span className='flex items-center gap-2'>
                  <CheckCircleIcon size={16} /> Pain Free
                </span>
              ),
              children: (
                <ul className='flex flex-col mx-auto gap-3  p-6 bg-green-100 rounded-2xl w-[28rem] shadow-md'>
                  {painFreeSolutions.map(({ description, time }) => (
                    <li className='flex gap-2 w-full justify-center' key={description}>
                      <p className='text-lg text-center'>
                        <span className='font-semibold mr-1'>{time}</span>
                        <span>{description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              )
            }
          ]}
        />
      </div>
    </section>
  );
};
