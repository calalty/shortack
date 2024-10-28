import { TechTags } from './tech-tags';
import { CpuIcon } from 'lucide-react';
export const Tech = () => (
  <section className='px-4 text-center mx-auto py-32'>
    <div className='flex flex-col gap-6 mb-20'>
      <h2 className='flex items-center bg-primary gap-2 text-white font-normal w-min py-2 px-6 rounded-full mx-auto'>
        <CpuIcon className='h-5 w-5' /> Technology
      </h2>
      <p className='text-3xl text-center'>Stack Overview</p>
      <p className='text-xl font-light opacity-75 text-center max-w-lg mx-auto'>
        Our tech stack bridges innovation and efficiency, paving the way for groundbreaking
        applications.
      </p>
    </div>
    <TechTags />
  </section>
);
