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
    label: "Women",
    href: "/category/women",
  },
  {
    label: "Men",
    href: "/category/men",
  },
];

const MobileNav = ({ categories }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const router = useRouter();

  return (
    <div className='flex lg:hidden justify-end items-center'>
      <IconButton
        className='dark:bg-gray-800 hover:bg-transparent text-lg bg-transparent'
        onClick={toggleMenu}
        icon={<AlignJustify size={40} />}
      />
      <Dialog
        open={isOpen}
        onClose={toggleMenu}
        className='relative z-40 lg:hidden'
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
            <div className='flex items-center justify-between px-4'>
              <IconButton
                className='dark:bg-gray-100 mb-10 dark:hover:bg-gray-300 bg-black text-white dark:text-gray-800  hover:bg-black/80'
                onClick={toggleMenu}
                icon={<X size={20} />}
              />
            </div>

            <div className='flex flex-col gap-4 px-4 mt-4'>
              {
                <ul className='flex flex-col gap-4 text-lg'>
                  {linkCategories.map((linkCategory) => (
                    <li key={linkCategory.href}>
                      <span className='dark:text-white text-xl font-bold hover:text-gray-400 mb-4'>
                        {linkCategory.label}
                      </span>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() =>
                              router.push(
                                `/category/${linkCategory.label.toLocaleLowerCase()}?categoryId=${
                                  category.id
                                }`
                              )
                            }
                          >
                            {category.name.toUpperCase()}
                          </button>
                        </li>
                      ))}
                    </li>
                  ))}
                </ul>
              }
              <NavbarActions />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default MobileNav;
