import React from "react";
import Image from "next/image";

import { X } from "lucide-react";

import useCart, { CartItem } from "@/hooks/user-cart";
import CheckoutMenuActions from "./checkout-menu-actions";

interface CheckoutMenuItemProps {
  product: CartItem;
}

const CheckoutMenuItem = ({ product }: CheckoutMenuItemProps) => {
  const removeItem = useCart((state) => state.removeItem);

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
            <strong>$ {Number(product.price).toFixed(2)}</strong>
          </p>
        </div>
      </div>
      <CheckoutMenuActions product={product} />
    </div>
  );
};

export default CheckoutMenuItem;
