import React from 'react';

export const GuideLines = () => (
  <div className='absolute h-full w-full top-0 left-0'>
    <div className='grid grid-cols-4 relative max-w-screen-lg h-full my-o mx-auto'>
      <div className='bg-primary/5 w-[1px]' />
      <div className='w-[1px] bg-gradient-to-b from-primary/10 to-transparent bg-[length:1px_8px]'></div>
      <div className='w-[1px] bg-gradient-to-b from-primary/10 to-transparent bg-[length:1px_8px]'></div>
      <div className='w-[1px] bg-gradient-to-b from-primary/10 to-transparent bg-[length:1px_8px]'></div>
      <div className='bg-primary/5 w-[1px] absolute top-0 right-0 h-full' />
    </div>
  </div>
);
