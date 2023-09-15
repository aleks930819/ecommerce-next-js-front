import React, { useState } from "react";
import Image from "next/image";

import { Minus, Plus, X } from "lucide-react";

import { Product } from "@/types";
import useCart from "@/hooks/user-cart";

interface CheckoutMenuItemProps {
  product: Product;
}

const CheckoutMenuItem = ({ product }: CheckoutMenuItemProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const removeItem = useCart((state) => state.removeItem);

  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const onIncrement = () => {
    if (quantity < 30) {
      setQuantity((prev) => prev + 1);
    }
  };

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
        <button onClick={onDecrement} aria-label='Decrement quantity'>
          <Minus size={16} />
        </button>
        <p>
          <strong>{quantity}</strong>
        </p>
        <button onClick={onIncrement} aria-label='Increment quantity'>
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default CheckoutMenuItem;
