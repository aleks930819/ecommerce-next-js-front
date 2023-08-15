"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Category } from "@/types";

import useCategory from "@/hooks/use-category";

import BottomNav from "@/components/navbar/bottom-nav";

interface MainNavProps {
  data: Category[];
  className?: string;
}

const MainNav = ({ data, className }: MainNavProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const setCategory = useCategory((state) => state.setCategory);

  const [activeCategory, setActiveCategory] = React.useState("");
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const menRef = React.useRef<HTMLLIElement>(null);
  const womanRef = React.useRef<HTMLLIElement>(null);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const handleToggleMenu = (category: any) => {
    setActiveCategory(category.label);
    setToggleMenu(!toggleMenu);
  };

  const categories = [
    {
      label: "Women",
      links: routes,
      href: "/category/women",
      ref: womanRef,
    },
    {
      label: "Men",
      links: routes,
      href: "/category/men",
      ref: menRef,
    },
  ];

  return (
    <nav className='mx-6 mr-auto flex  gap-4 sm:gap-0 flex-col sm:flex-row justify-center items-center space-x-4 lg:space-x-6'>
      <ul className='flex gap-2'>
        {categories.map((category) => (
          <li
            onMouseEnter={() => {
              setCategory(category.label);
              handleToggleMenu(category);
            }}
            key={category.href}
            className={cn(
              `
             cursor-pointer
            sm:text-sm font-medium trainsition-colors hover:text-black dark:text-white dark:hover:text-gray-400 text-lg text-start
            `,
              pathname === category.href
                ? "text-black dark:text-gray-400"
                : "text-gray-500"
            )}
          >
            {category.label.toUpperCase()}
          </li>
        ))}
      </ul>

      {toggleMenu && (
        <BottomNav
          categories={data}
          isOpen={toggleMenu}
          activeCategory={activeCategory}
          onClose={() => setToggleMenu(false)}
        />
      )}
    </nav>
  );
};

export default MainNav;
