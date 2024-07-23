import {
  DoubleArrowDownIcon,
  GitHubLogoIcon,
  StarFilledIcon,
  StarIcon
} from '@radix-ui/react-icons';
import { TextLink } from '../ui/link';
import { TechList } from './tech-list';

export const Hero = () => {
  return (
    <section className='h-[calc(100vh-5.5rem)] flex flex-col justify-center'>
      <div className='container mx-auto text-center md:px-12 flex flex-col items-center'>
        <h1 className='font-bold text-gray-440 md:text-8xl'>
          Simplify Your <span className='text-shortstack-primary'>Stack</span> <br />
          <span className='font-black'>Shorten Your Launch</span>
        </h1>
        <p className='mt-6 text-lg text-gray-600 md:text-2xl max-w-2xl'>
          Our streamlined, ready-to-use boilerplate integrates the latest technologies, allowing you
          to build, test, and deploy faster than ever before. Focus on innovation, and let us handle
          the rest.
        </p>
        <div className='mt-14 flex justify-center gap-4'>
          <TextLink variant='shortstack' size='lg' url='/'>
            Get Stack
          </TextLink>
          <TextLink variant='secondary' size='lg' url='/'>
            <div className='flex items-center gap-2'>
              <span>440</span>
              <StarIcon className='mt-[2px]' />
              <span>on</span>
              <GitHubLogoIcon className='mt-[2px]' />
            </div>
          </TextLink>
        </div>
        <div className='flex w-full justify-center mt-6 items-center'>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarFilledIcon key={index} />
          ))}
          <span className='ml-2'>
            <strong>4.8</strong>/5 based on 340 reviews
          </span>
        </div>
      </div>
      <TechList />
      <div className='w-full flex justify-center items-center gap-1 font-bold py-6'>
        <DoubleArrowDownIcon width={16} className='mt-1' />
        <span>Learn more</span>
      </div>
    </section>
  );
};
