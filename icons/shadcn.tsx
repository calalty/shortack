import { SVGProps } from 'react';

export const ShadcnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    stroke='none'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 256 256'
  >
    <path d='M0 0h256v256H0z' stroke='none' />
    <path
      stroke={props.fill}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='16'
      d='m208 128-80 80M192 40 40 192'
    />
  </svg>
);
