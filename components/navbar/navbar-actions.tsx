"use client";

import React from "react";
import { useTheme } from "next-themes";

import { ShoppingBag, Globe, Sun, Moon } from "lucide-react";

import Button from "@/components/ui/button";
import ClientOnly from "@/components/client-only/client-only";

const NavbarActions = () => {
  const { theme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <div className='ml-auto flex w-full justify-end items-end '>
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label='Toggle Dark Mode'
          className='bg-transparent text-black border gap-0

          dark:text-white dark:border-white
      border-none hover:bg-transparent hover:text-black transition-colors
      '
        >
          {theme === "dark" ? (
            <Sun size={20} className='dark:text-white' />
          ) : (
            <Moon size={20} className='dark:text-white' />
          )}
          <span className='ml-2'>{theme === "dark" ? "Light" : "Dark"}</span>
        </Button>

        <Button
          aria-label='Change Language'
          className='bg-transparent text-black border gap-0
      border-none hover:bg-transparent hover:text-black transition-colors
       dark:text-white dark:border-white
      '
        >
          <Globe size={20} />
          <span className='ml-2'>EN</span>
        </Button>

        <Button
          aria-label='Open Cart'
          className='bg-transparent text-black border
      dark:text-white dark:border-white
      border-black hover:bg-transparent hover:text-black transition-colors'
        >
          <ShoppingBag size={20} />
          <span>0</span>
        </Button>
      </div>
    </ClientOnly>
  );
};

export default NavbarActions;
