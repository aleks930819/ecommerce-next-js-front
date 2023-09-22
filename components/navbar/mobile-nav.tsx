"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AlignJustify, Link, X } from "lucide-react";

import { Category } from "@/types";

import MainNav from "../main-nav/main-nav";
import HamburgerMenu from "../ui/hamburger-menu";
import IconButton from "../ui/icon-button";
import NavbarActions from "./navbar-actions";
import { useRouter } from "next/navigation";

interface MobileNavProps {
  categories: Category[];
}

const linkCategories = [
  {
    label: "Men",
    href: "/category/",
  },
];

const MobileNav = ({ categories }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();

  return (
    <div className={`flex lg:hidden justify-end items-center `}>
      <IconButton
        className='dark:bg-gray-800 hover:bg-transparent text-lg bg-transparent '
        onClick={toggleMenu}
        icon={<AlignJustify size={40} />}
      />

      <Dialog
        open={isOpen}
        onClose={toggleMenu}
        className={`relative z-50 lg:hidden `}
      >
        <div className='fixed inset-0 overflow-y-auto bg-black/50' />
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <Dialog.Panel
            className='relative ml-auto flex h-full w-full max-w-xs
             flex-col overflow-y-auto
              dark:bg-gray-800
             bg-white py-4 pb-6 shadow-xl
            '
          >
            <div className='absolute top-2 right-2'>
              <IconButton
                className='text-black dark:text-white bg-transparent'
                onClick={toggleMenu}
                icon={<X size={30} />}
              />
            </div>

            <div className='flex flex-col gap-4 px-4 mt-6'>
              {
                <ul className='flex flex-col gap-4 text-lg'>
                  {linkCategories.map((linkCategory) => (
                    <li key={linkCategory.href}>
                      <h2 className='dark:text-white text-start  text-2xl font-bold hover:text-gray-400 mb-4'>
                        {linkCategory.label}
                      </h2>
                      {categories.map((category) => (
                        <li key={category.id} className='mb-4 pb-1 border-b'>
                          <button
                            aria-label='Go to category page'
                            onClick={() => {
                              router.push(`/category/${category.id}`);
                              toggleMenu();
                            }}
                          >
                            {category.name.toUpperCase()}
                          </button>
                        </li>
                      ))}
                    </li>
                  ))}
                </ul>
              }
              <NavbarActions
                className=' justify-start -ml-4'
                toggleMenu={toggleMenu}
                isMobile={true}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileNav;
