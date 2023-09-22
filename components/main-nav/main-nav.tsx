"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Category } from "@/types";

import useCategory from "@/hooks/use-category";

import BottomNav from "@/components/navbar/bottom-nav";
import Link from "next/link";

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
      label: "Men",
      links: routes,
      href: "/category/",
      ref: menRef,
    },
  ];

  return (
    <nav className='mx-6 mr-auto flex   gap-4 sm:gap-0 flex-col sm:flex-row justify-center items-center space-x-4 lg:space-x-6'>
      <ul className='flex gap-2'>
        <li>
          <Link href='/categories'>CATEGORIES</Link>
        </li>
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
