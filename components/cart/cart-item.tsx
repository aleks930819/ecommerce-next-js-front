"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import useCart, { CartItem } from "@/hooks/user-cart";

import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import CheckoutMenuActions from "@/components/checkout-menu/checkout-menu-actions";
import IconButton from "@/components/ui/icon-button";

interface CartItemProps {
  data: CartItem;
}

const CartItem = ({ data }: CartItemProps) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
    toast.success(`${data.name} removed from cart`);
  };

  return (
    <li className='flex py-6 border-b'>
      <div className='relative  h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48'>
        <Image
          fill
          src={data?.images?.[0].url}
          alt={data?.name}
          objectFit='cover'
          className='rounded-md'
        />
      </div>
      <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
        <div
          className='absolute z-10 right-0 top-0
            
        '
        >
          <IconButton
            aria-label='Remove item from the cart'
            className='dark:bg-gray-200 dark:text-black bg-black text-white
            hover:bg-gray-800 hover:text-white transition-colors
            '
            onClick={onRemove}
            icon={<X size={24} />}
          />
        </div>
        <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
          <div className='flex justify-between'>
            <p className='text-lg font-semibold '>
              <strong>{data?.name}</strong>
            </p>
          </div>
          <div className='mt-1 flex text-sm'>
            <p>{data.color.name.toUpperCase()}</p>
            <p className='ml-4 border-l pl-4 '>
              {data.size.name.toUpperCase()}
            </p>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <p className='text-base pt-2 font-bold '>
              Price: <strong>{formatPrice(data.price)}</strong>
            </p>
            <div>
              <CheckoutMenuActions
                product={data}
                className='bg-black  dark:bg-gray-700 text-white px-4 py-1 '
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
