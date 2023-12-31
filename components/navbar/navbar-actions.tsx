"use client";

import React from "react";
import { useTheme } from "next-themes";

import { ShoppingBag, Globe, Sun, Moon, Heart } from "lucide-react";

import useCart from "@/hooks/user-cart";
import useCheckoutMenu from "@/hooks/use-checkout";

import Button from "@/components/ui/button";
import ClientOnly from "@/components/client-only/client-only";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NavbarActions = ({
  className,
  toggleMenu,
  isMobile = false,
}: {
  className?: string;
  toggleMenu?: () => void;
  isMobile?: boolean;
}) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const cart = useCart();
  const openCheckoutMenu = useCheckoutMenu((state) => state.openCheckoutMenu);

  const handleWishlistClick = () => {
    router.push("/wishlist");
    if (isMobile && toggleMenu) {
      toggleMenu();
    }
  };

  const handleCartClick = () => {
    if (isMobile && toggleMenu) {
      toggleMenu();
      router.push("/cart");
    } else {
      openCheckoutMenu();
    }
  };

  return (
    <ClientOnly>
      <div
        className={
          "-ml-4 sm:ml-auto flex gap-4  sm:gap-0 flex-col sm:flex-row  w-full justify-start items-start sm:justify-end sm:items-end mt-5 sm:mt-0 "
        }
      >
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Toggle ${theme === "dark" ? "Light" : "Dark"} Mode`}
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
          aria-label='Current Language'
          title='Current Language'
          className='bg-transparent text-black border gap-0
      border-none hover:bg-transparent hover:text-black transition-colors
       dark:text-white dark:border-white
      '
        >
          <Globe size={20} />
          <span className='ml-2'>EN</span>
        </Button>
        <Button
          onClick={handleWishlistClick}
          aria-label='Wishlist'
          className='bg-transparent text-black border gap-0
      border-none hover:bg-transparent hover:text-black transition-colors
       dark:text-white dark:border-white
      '
        >
          <Heart size={20} />
          <span className='ml-2'>Wishlist</span>
        </Button>

        <Button
          onClick={handleCartClick}
          aria-label={`Open Cart with ${cart.items.length} items`}
          className='bg-transparent text-black 
      dark:text-white sm:dark:border-white 
       hover:bg-transparent hover:text-black transition-colors'
        >
          <ShoppingBag size={20} />
          <span>{cart.items.length}</span>
        </Button>
      </div>
    </ClientOnly>
  );
};

export default NavbarActions;
