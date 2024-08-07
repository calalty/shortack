import { TextLink } from '../../ui/link';
import Image from 'next/image';
import theStack from '../../../images/the-stack.png';
import { Pancake } from '../../../icons/pancake';
import React from 'react';

export const Hero = () => {
  return (
    <section className='h-[calc(100vh+4.625rem)] flex flex-col justify-center items-center mx-auto max-w-6xl px-6 sm:px-12'>
      <div className='text-center flex flex-col items-center'>
        <h1 className='font-bold text-6xl md:text-8xl'>
          your stack, <br className='md:hidden' />{' '}
          <span className='md:ml-6 relative'>
            shorter.
            <svg
              className='absolute -bottom-1 left-0 w-full fill-shortstack-primary'
              viewBox='0 0 120 9'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M111.14 4.80617C106.893 4.80617 102.646 4.86135 98.3987 4.79112C94.9931 4.73593 91.5875 4.43995 88.177 4.40484C85.2295 4.37474 82.2621 4.38476 79.3345 4.6958C73.1855 5.34296 67.0664 6.30115 60.9125 6.90818C57.95 7.19915 55.0523 6.71253 52.1645 5.55868C47.4545 3.6774 42.5702 4.58543 37.7755 5.56871C34.9773 6.14061 32.2041 6.82791 29.4059 7.3647C26.9214 7.84129 24.7108 7.3948 22.6943 5.5938C20.6629 3.77774 18.044 4.22924 15.694 4.7861C12.2785 5.58877 8.93762 6.71754 5.57686 7.75099C3.47078 8.39814 1.56883 7.97173 0.284274 6.09547C-0.138934 5.47841 -0.0343748 4.27439 0.239465 3.48677C0.35398 3.15566 1.71819 2.8697 2.20613 3.13559C3.76453 3.98342 5.12875 3.4065 6.57761 2.97507C10.8396 1.70583 15.1115 0.346299 19.6273 0.732587C21.0911 0.858005 22.7541 1.19915 23.8893 2.03694C26.1945 3.74263 28.5645 3.42154 31.029 2.99512C35.2761 2.25766 39.5032 1.38978 43.7651 0.767707C46.9367 0.306168 50.0535 0.702485 53.1006 1.89145C56.9194 3.3764 60.9274 2.99513 64.8657 2.53861C71.4479 1.77607 77.9951 0.607165 84.5922 0.0703747C88.2367 -0.225612 91.951 0.501807 95.6404 0.597125C100.57 0.722543 105.504 0.652309 110.438 0.722543C112.982 0.757661 115.541 0.812849 118.065 1.10382C118.772 1.18409 119.803 2.03693 119.952 2.70416C120.256 4.04864 119.046 4.14396 118.041 4.19915C115.745 4.3346 113.45 4.48007 111.155 4.62556C111.155 4.68576 111.15 4.74596 111.145 4.80115L111.14 4.80617Z'></path>
            </svg>
          </span>
        </h1>

        <p className='mt-8 md:text-2xl md:max-w-xl max-w-xs opacity-75'>
          focus on innovation, and let us handle the rest.
        </p>
        <div className='mt-8 flex justify-center gap-4'>
          <TextLink className='gap-2 md:text-2xl py-6' variant='shortstack' size='lg' url='/'>
            start stack
          </TextLink>
        </div>
      </div>

      <Image
        className='relative z-40 mt-12 rounded-xl border border-secondary bg-white shadow-2xl'
        src={theStack}
        alt=''
        width={700}
        height={454}
      />
    </section>
  );
};
