'use client';

import { features } from '@/lib/consts';
import { useState } from 'react';

const TEXT_SHORTSTACK_PRIMARY = 'text-shortstack-primary';
const DEFAULT_HOVER_TEXT = 'Tech,';

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
      className='grid grid-cols-1 md:grid-cols-5 m-8 border border-black/10'
    >
      <div className='col-span-1 md:col-span-2 border border-black/10 p-5'>
        <div className='h-full w-full flex items-center justify-center'>
          <h2 className='text-left text-3xl'>
            Your
            <span
              className={`${animationClass} ${hoveredColor} relative inline-block font-black ml-[0.35rem]`}
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
