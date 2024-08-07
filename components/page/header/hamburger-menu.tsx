import React, { Dispatch, SetStateAction, useState } from 'react';

const hamburgerStyles = {
  closed:
    'flex w-8 h-1 bg-black rounded-full transition-all duration-150 relative before:content-[""] before:absolute before:w-8 before:h-1 before:bg-black before:rounded-full before:-translate-y-2 before:transition-all before:duration-150 after:content-[""] after:absolute after:w-8 after:h-1 after:bg-black after:rounded-full after:translate-y-2 after:transition-all after:duration-150',
  open: 'flex w-8 h-0 bg-black rounded-full transition-all duration-150 relative before:content-[""] before:absolute before:w-8 before:h-1 before:bg-black before:rounded-full before:translate-y-0 before:rotate-45 before:transition-all before:duration-150 after:content-[""] after:absolute after:w-8 after:h-1 after:bg-black after:rounded-full after:translate-y-0 after:-rotate-45 after:transition-all after:duration-150'
};

type HamburgerMenu = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const HamburgerMenu = ({ isOpen, setIsOpen }: HamburgerMenu) => (
  <div className='cursor-pointer p-2 md:hidden' onClick={() => setIsOpen(!isOpen)}>
    <button className={isOpen ? hamburgerStyles.open : hamburgerStyles.closed}></button>
  </div>
);
