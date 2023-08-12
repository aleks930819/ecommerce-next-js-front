import Link from "next/link";

import { useState } from "react";

import { getCategories } from "@/actions/get-categories";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav/main-nav";
import NavbarActions from "./navbar-actions";
import HamburgerMenu from "../ui/hamburger-menu";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header
      className='border-b  py-6  bg-white dark:bg-gray-800
     dark:border-gray-800 transition-colors duration-150 ease-in-out
    w-full shadow-md'
    >
      <Container>
        {/* DEKSTOP MENU */}
        <div className=' hidden lg:flex justify-between items-center'>
          <Link href='/'>
            <p className='text-2xl font-bold font-serif'>UrbanTrend Emporium</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
        {/* MOBILE MENU */}
        {/* TODO: Create the mobile nav menu */}
        <div className='flex lg:hidden justify-end items-center'>
          <HamburgerMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
