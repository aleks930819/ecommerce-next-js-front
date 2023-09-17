"use client";

import { X } from "lucide-react";

import useCheckoutMenu from "@/hooks/use-checkout";

import { useClickAway } from "@uidotdev/usehooks";
import Button from "@/components/ui/button";
import useCart, { CartItem } from "@/hooks/user-cart";
import { Product } from "@/types";
import CheckoutMenuItem from "./checkout-menu-item";
import ClientOnly from "../client-only/client-only";
import { useRouter } from "next/navigation";

const CheckoutMenu = () => {
  const isOpen = useCheckoutMenu((state) => state.isOpen);
  const cartItems = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const totalCartItemsPrice = useCart((state) => state.totalCartItemsPrice);
  const closeCheckoutMenu = useCheckoutMenu((state) => state.closeCheckoutMenu);
  const router = useRouter();

  const ref = useClickAway(() => {
    closeCheckoutMenu();
  });

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
          {cartItems.length === 0 && (
            <p className='text-center text-xl font-semibold'>
              Your cart is empty
            </p>
          )}
          {cartItems.map((item: CartItem) => {
            return <CheckoutMenuItem product={item} key={item.id} />;
          })}
        </div>

        {/* TOTAL PRICE  AND CHECKOUT MENU ACTIONS*/}
        <div className='pb-5'>
          <p className='w-full flex justify-between'>
            <span className=' font-semibold'>Total: </span>
            <span className=' font-bold'>$ {totalCartItemsPrice}</span>
          </p>
          {/* CHECKOUT MENU ACTIONS */}
          <div className=' flex flex-col gap-4 mt-4'>
            <Button
              onClick={() => {
                closeCheckoutMenu();
                router.push("/cart");
              }}
              aria-label='View shopping cart'
              className='dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white bg-black text-white  hover:bg-black/90 transition-colors duration-200 ease-in-out'
            >
              View shopping cart
            </Button>

            <Button
              onClick={removeAll}
              aria-label='View shopping cart'
              className='dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white bg-black text-white  hover:bg-black/90 transition-colors duration-200 ease-in-out'
            >
              Clear shopping cart
            </Button>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default CheckoutMenu;
