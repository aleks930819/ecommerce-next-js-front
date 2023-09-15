import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import { Product } from "@/types";

import useWishList from "@/hooks/use-wishlist";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/user-cart";

interface WishlistItemProps {
  data: Product;
}

const WishlistItem = ({ data }: WishlistItemProps) => {
  const removeItem = useWishList((state) => state.removeItem);
  const addItem = useCart((state) => state.addItem);

  const router = useRouter();

  const removeItemFromTheWishlist = () => {
    removeItem(data.id);
    toast.success(`${data.name} removed from wishlist`);
  };

  const onAddToCart = () => {
    addItem(data);
  };

  return (
    <li className='flex flex-col mb-10'>
      <div className='relative overflow-hidden'>
        <figure className='aspect-square rounded-xl bg-gray-100 relative'>
          <Image
            className='object-cover w-full h-full hover:scale-105 transition duration-300 ease-in-out
            '
            width={400}
            loading='lazy'
            height={400}
            alt='product image'
            src={data?.images?.[0].url}
          />
        </figure>
        <IconButton
          onClick={removeItemFromTheWishlist}
          aria-label='Remove item from the wishlist'
          icon={<X size={18} />}
          className='top-4 right-4 focus:outline-none focus:ring-2 hover:bg-black/80 dark:hover:bg-gray-800/80 focus:ring-offset-2 focus:ring-gray-800 absolute p-1.5 bg-black dark:bg-gray-800 text-white'
        />
      </div>
      <div className='flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8'>
        <div className='w-full'>
          <button
            aria-label="View product's details"
            onClick={() => router.push(`/product/${data.id}`)}
            className='
             transition-all duration-300 ease-in-out
            focus:outline-none  focus:ring-offset-2   dark:text-white text-black w-full tracking-tight py-4 text-lg leading-4 hover:bg-black hover:text-white  dark:bg-transparent dark:border-white dark:hover:bg-gray-800 bg-white border border-gray-800 dark:hover:text-white'
          >
            More information
          </button>
        </div>
        <div className='w-full'>
          <button
            aria-label='Add item to the cart'
            onClick={onAddToCart}
            className='
            transition-all duration-300 ease-in-out
            
            focus:outline-none  border dark:border-black border-gray-800 text-white w-full tracking-tight py-4 text-lg leading-4 hover:bg-black/80 bg-black  dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default WishlistItem;
