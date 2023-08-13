"use client";

import React from "react";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
  className?: string;
}

const MainNav = ({ data, className }: MainNavProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className='mx-6 mr-auto flex  gap-4 sm:gap-0 flex-col sm:flex-row justify-center items-center space-x-4 lg:space-x-6'>
      {routes.map((route: any) => (
        <Link
          href={route.href}
          key={route.href}
          className={cn(
            `sm:text-sm font-medium trainsition-colors hover:text-black dark:text-white dark:hover:text-white text-lg text-start
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
