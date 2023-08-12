"use client";

import { Expand, Bookmark, ShoppingCart, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Product } from "@/types";

import { formatPrice } from "@/lib/utils";

import IconButton from "@/components/ui/icon-button";
import ClientOnly from "../client-only/client-only";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  const handleClickRedirect = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div
      onClick={handleClickRedirect}
      className='bg-white group cursor-pointer rounded-xl border  p-3 space-y-4
    dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700
     transition duration-150 ease-in-out hover:shadow-x
    '
    >
      <div className='aspect-square roundex-xl bg-gray-100 relative'>
        <Image
          src={data?.images?.[0].url}
          alt={data?.name}
          fill
          className='aspect-square roundex-xl'
          objectFit='cover'
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-4 justify-center'>
            <IconButton
              onClick={() => {}}
              icon={<Expand size={24} className='text-gray-600' />}
            />

            <IconButton
              onClick={() => {}}
              icon={
                <Heart
                  size={24}
                  className='text-gray-600 hover:text-red-600 transition-colors duration-150 ease-in-out'
                />
              }
            />

            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={24} className='text-gray-600' />}
            />
          </div>
        </div>
      </div>
      <article>
        <p
          className='text-gray-800 text-lg font-bold
        dark:text-white transition-colors duration-150 ease-in-out
        '
        >
          {data.name}
        </p>
        <p>
          <span
            className='text-gray-800 text-base font-bold italic
        dark:text-white transition-colors duration-150 ease-in-out
          '
          >
            {formatPrice(data.price)}
          </span>
        </p>
      </article>
    </div>
  );
};

export default ProductCard;
