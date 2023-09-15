"use client";

import { X } from "lucide-react";

import useCheckoutMenu from "@/hooks/use-checkout";

import { useClickAway } from "@uidotdev/usehooks";
import Button from "@/components/ui/button";
import useCart from "@/hooks/user-cart";
import { Product } from "@/types";
import CheckoutMenuItem from "./checkout-menu-item";
import ClientOnly from "../client-only/client-only";

const CheckoutMenu = () => {
  const isOpen = useCheckoutMenu((state) => state.isOpen);
  const cartItems = useCart((state) => state.items);
  const closeCheckoutMenu = useCheckoutMenu((state) => state.closeCheckoutMenu);

  const ref = useClickAway(() => {
    closeCheckoutMenu();
  });

  const totalPriceOfItems = cartItems.reduce((acc, item: Product) => {
    return Number(acc) + Number(item.price);
  }, 0);

  return (
    <ClientOnly>
      {isOpen && (
        <div className='fixed top-0 z-40  left-0 w-full h-full bg-black/80  transition-opacity duration-500' />
      )}

      <div
        ref={ref as any}
        className={`w-[25vw] z-50
        fixed h-screen flex flex-col justify-between px-3 dark:bg-gray-800 bg-white dark:text-white text-black   top-0 right-0 transition duration-500 ease-in-out transform overflow-y-auto ${
          isOpen ? "translate-x-0 " : "translate-x-full "
        }`}
      >
        <div className='flex items-center justify-between'>
          <h2 className='text-3xl font-bold  text-start pt-10 pb-10'>
            Shopping Bag
          </h2>
          <button
            aria-label='Close checkout menu'
            className=''
            onClick={() => closeCheckoutMenu()}
          >
            <X size={24} />
          </button>
        </div>

        {/* ITEMS IN THE CART */}
        <div className='w-full flex flex-col gap-5 items-center justify-center  mb-auto border-t pt-5 pb-5'>
          {cartItems.map((item: Product) => {
            return <CheckoutMenuItem product={item} key={item.id} />;
          })}
        </div>

        {/* TOTAL PRICE  AND CHECKOUT MENU ACTIONS*/}
        <div className='pb-5'>
          <p className='w-full flex justify-between'>
            <span className=' font-semibold'>Total: </span>
            <span className=' font-bold'>$ {totalPriceOfItems}</span>
          </p>
          {/* CHECKOUT MENU ACTIONS */}
          <div className=' flex flex-col gap-4 mt-4'>
            <Button
              aria-label='Checkout'
              className='dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white bg-black text-white hover:bg-black/90 transition-colors  duration-200 ease-in-out'
            >
              Checkout
            </Button>
            <Button
              aria-label='View shopping cart'
              className='dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white bg-black text-white  hover:bg-black/90 transition-colors duration-200 ease-in-out'
            >
              View shopping cart
            </Button>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default CheckoutMenu;
