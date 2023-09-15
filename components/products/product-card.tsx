"use client";
import { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { Expand, Bookmark, ShoppingCart, Heart } from "lucide-react";

import noImage from "@/assets/images/no-image-available.png";

import { Product } from "@/types";

import { cn, formatPrice } from "@/lib/utils";
import useCart from "@/hooks/user-cart";

import IconButton from "@/components/ui/icon-button";
import ClientOnly from "@/components/client-only/client-only";
import useWishList from "@/hooks/use-wishlist";
import { useQuickViewStore } from "@/hooks/use-qickview";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const [showImage, setShowImage] = useState(data?.images[0]?.url);

  const router = useRouter();
  const cart = useCart();
  const { items, addItem } = useWishList();
  const openQuickView = useQuickViewStore((state) => state.openQuickView);
  const setProduct = useQuickViewStore((state) => state.setProduct);

  const handleClickRedirect = () => {
    router.push(`/product/${data.id}`);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = () => {
    cart.addItem(data);
  };

  const changeImageOnHover = () => {
    setShowImage(data?.images[1]?.url);
  };

  const changeImageOnLeave = () => {
    setShowImage(data?.images[0]?.url);
  };

  const isItemInTheWishList = items?.some((item) => item.id === data.id);

  return (
    <div
      onMouseEnter={changeImageOnHover}
      onMouseLeave={changeImageOnLeave}
      className='bg-white group cursor-pointer rounded-xl border  p-3 space-y-4
    dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700
     transition duration-150 ease-in-out hover:shadow-x
    '
    >
      <div className='aspect-square roundex-xl bg-gray-100 relative'>
        <Image
          src={showImage || noImage}
          alt={data?.name}
          fill
          className='aspect-square roundex-xl'
          objectFit='cover'
          onClick={handleClickRedirect}
        />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-4 justify-center'>
            <IconButton
              onClick={() => {
                setProduct(data);
                openQuickView();
              }}
              icon={<Expand size={24} className='text-gray-600' />}
            />
            <IconButton
              onClick={() => addItem(data)}
              aria-label='Add item to the wishlist'
              icon={
                <Heart
                  size={24}
                  className={cn(
                    "text-gray-600",
                    "hover:fill-gray-600",
                    "transition-colors duration-150 ease-in-out",
                    isItemInTheWishList && "fill-gray-600"
                  )}
                />
              }
            />

            <IconButton
              aria-label='Add item to cart'
              onClick={onAddToCart}
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
