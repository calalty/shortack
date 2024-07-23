import { stackIcons } from '@/lib/consts';

export const TechList = () => (
  <section className='w-full flex justify-center bg-black p-4 mt-20'>
    <ul className='flex flex-wrap list-none justify-center items-center gap-x-4 gap-y-6 max-w-96'>
      {stackIcons.map((icon, index) => (
        <li key={index}>{icon}</li>
      ))}
    </ul>
  </section>
);
