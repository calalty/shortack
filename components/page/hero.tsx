import {
  ArrowRightIcon,
  DoubleArrowDownIcon,
  GitHubLogoIcon,
  StarFilledIcon,
  StarIcon
} from '@radix-ui/react-icons';
import { TextLink } from '../ui/link';

export const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center bg-white'>
      <div className='container mx-auto text-center md:px-12 flex flex-col items-center'>
        <h1 className='font-black md:text-7xl'>
          Simplify Your <span className='bg-shortstack-primary px-2'>Stack</span> <br />
          <span>Shorten Your Launch</span>
        </h1>
        <p className='mt-6 text-xl opacity-75 max-w-2xl'>
          Our ready-to-use boilerplate integrates the latest technologies, allowing you to build,
          test, and deploy faster than ever before. Focus on innovation, and let us handle the rest.
        </p>
        <div className='mt-12 flex justify-center gap-4'>
          <TextLink className='gap-1' variant='shortstack' size='lg' url='/'>
            Get Stack Now <ArrowRightIcon className='w-5 h-5' />
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
      <div className='w-full flex justify-center items-center gap-1 font-bold py-6'>
        <DoubleArrowDownIcon width={16} className='mt-1' />
        <span>Learn more</span>
      </div>
    </section>
  );
};
