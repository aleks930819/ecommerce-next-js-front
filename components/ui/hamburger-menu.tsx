"use client";

import React, { useState } from "react";

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-300`;
  return (
    <button
      className='flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group
       dark:border-white 
      '
      onClick={toggleMenu}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;
