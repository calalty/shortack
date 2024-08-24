import { FeatureCards } from './feature-cards';
import { MapIcon } from 'lucide-react';

export const Features = () => {
  return (
    <section className='flex flex-col my-32 gap-20'>
      <div className='flex flex-col gap-6'>
        <h2 className='flex items-center bg-primary gap-2 text-white font-normal w-min py-2 px-6 rounded-full mx-auto'>
          <MapIcon className='h-5 w-5' /> Solution
        </h2>
        <p className='text-3xl text-center'>Powerful Features.</p>
        <p className='text-xl font-light opacity-75 text-center max-w-lg mx-auto'>
          Effortlessly build and scale with a robust stack, featuring intuitive tools for seamless
          app development.
        </p>
      </div>
      <FeatureCards />
    </section>
  );
};
