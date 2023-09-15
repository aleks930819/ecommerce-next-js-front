"use client";

import { X } from "lucide-react";

import useCheckoutMenu from "@/hooks/use-checkout";

import { useClickAway } from "@uidotdev/usehooks";
import Button from "@/components/ui/button";

const CheckoutMenu = () => {
  const isOpen = useCheckoutMenu((state) => state.isOpen);
  const closeCheckoutMenu = useCheckoutMenu((state) => state.closeCheckoutMenu);

  const ref = useClickAway(() => {
    closeCheckoutMenu();
  });

  return (
    <>
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
          <button className='' onClick={() => closeCheckoutMenu()}>
            <X size={24} />
          </button>
        </div>

        {/* ITEMS IN THE CART */}
        <div className='w-full flex flex-col gap-5 items-center justify-center  mb-auto border-t pt-5 pb-5'>
          {/* <CheckoutMenuItem initialQuantity={1} maxQuantity={10} />
          <CheckoutMenuItem initialQuantity={4} maxQuantity={10} /> */}
        </div>

        {/* TOTAL PRICE  AND CHECKOUT MENU ACTIONS*/}
        <div className='pb-5'>
          <p className='w-full flex justify-between'>
            <span className=' font-semibold'>Total: </span>
            <span className=' font-bold'>$ 0.00</span>
          </p>
          {/* CHECKOUT MENU ACTIONS */}
          <div className=' flex flex-col gap-4 mt-4'>
            <Button
              aria-label='Checkout'
              className='bg-black text-white hover:bg-gray-900 transition-colors'
            >
              Checkout
            </Button>
            <Button aria-label='View shopping cart'>View shopping cart</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutMenu;
