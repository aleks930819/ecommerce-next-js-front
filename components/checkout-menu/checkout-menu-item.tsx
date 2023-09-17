import React, { useState } from "react";
import Image from "next/image";

import { Minus, Plus, X } from "lucide-react";

import { Product } from "@/types";
import useCart, { CartItem } from "@/hooks/user-cart";

interface CheckoutMenuItemProps {
  product: CartItem;
}

const CheckoutMenuItem = ({ product }: CheckoutMenuItemProps) => {
  const removeItem = useCart((state) => state.removeItem);
  const increaseItemQuantity = useCart((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useCart((state) => state.decreaseItemQuantity);

  return (
    <div className='flex w-full justify-between'>
      <div className='flex gap-4 items-center'>
        <button>
          <X size={24} onClick={() => removeItem(product.id)} />
        </button>
        <figure
          className='
        w-16 h-16 rounded-md bg-gray-100 relative overflow-hidden
        '
        >
          <Image
            src={product.images[0].url}
            className='object-cover w-full'
            fill
            alt={product.name}
          />
        </figure>
        <div className='flex flex-col'>
          <p>{product.name}</p>
          <p>
            <strong>$ {product.price}</strong>
          </p>
        </div>
      </div>
      <div className='flex gap-2 justify-between items-center w-24 px-2 bg-primary-4'>
        <button
          onClick={() => {
            decreaseItemQuantity(product.id);
          }}
          aria-label='Decrement quantity'
        >
          <Minus size={16} />
        </button>
        <p>
          <strong>{product.cartItemQuantity}</strong>
        </p>
        <button
          onClick={() => {
            increaseItemQuantity(product.id);
          }}
          aria-label='Increment quantity'
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default CheckoutMenuItem;
