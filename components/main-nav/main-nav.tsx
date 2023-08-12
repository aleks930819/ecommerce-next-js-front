"use client";

import React from "react";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className='mx-6 mr-auto flex justify-center items-center space-x-4 lg:space-x-6'>
      {routes.map((route: any) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            `text-sm font-medium trainsition-colors hover:text-black 
             dark:text-white dark:hover:text-white
            `,
            route.active ? "text-black" : "text-gray-500"
          )}
        >
          {route.label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
