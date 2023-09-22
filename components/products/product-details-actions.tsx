import React from "react";
import Button from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

import { cn } from "@/lib/utils";

import { Product } from "@/types";

import useWishList from "@/hooks/use-wishlist";
import useCart from "@/hooks/user-cart";

interface ProductDetailsActionsProps {
  product: Product;
  className?: string;
}

const ProductDetailsActions = ({
  product,
  className,
}: ProductDetailsActionsProps) => {
  const cart = useCart((state) => state.addItem);
  const { items, addItem } = useWishList();
  const isItemInTheWishList = items.some((item) => item.id === product.id);

  return (
    <div
      className={cn("pb-6 flex justify-start items-center gap-4", className)}
    >
      <Button
        aria-label='Add item to cart'
        className='px-8 py-2 gap-4
     dark:bg-gray-100 dark:text-gray-600
     dark:hover:bg-gray-300'
        onClick={() => cart(product as any)}
      >
        ADD TO CART
        <ShoppingCart size={24} />
      </Button>
      <Button
        onClick={() => addItem(product as any)}
        className='cursor-pointer group bg-gray-400
   hover:bg-gray-400 dark:bg-gray-100 dark:hover:bg-gray-200
    text-center p-2 rounded-full '
      >
        <Heart
          size={24}
          aria-label='Add item to the wishlist'
          className={cn(
            "text-gray-600",
            "hover:fill-gray-600",
            "transition-colors duration-150 ease-in-out",
            isItemInTheWishList && "fill-gray-600"
          )}
        />
      </Button>
    </div>
  );
};

export default ProductDetailsActions;
