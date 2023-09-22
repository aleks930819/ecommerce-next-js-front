"use client";

import { MouseEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { Expand, ShoppingCart, Heart } from "lucide-react";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import noImage from "@/assets/images/no-image-available.png";

import { Product } from "@/types";

import { cn, formatPrice } from "@/lib/utils";
import useCart, { CartItem } from "@/hooks/user-cart";

import IconButton from "@/components/ui/icon-button";
import ClientOnly from "@/components/client-only/client-only";
import useWishList from "@/hooks/use-wishlist";
import { useQuickViewStore } from "@/hooks/use-qickview";
import useWindowDimension from "@/hooks/useWindowDemension";

interface ProductCardProps {
  data: Product;
  index?: number;
  animated?: boolean;
}

const ProductCard = ({ data, index, animated }: ProductCardProps) => {
  const [showImage, setShowImage] = useState(data?.images[0]?.url);

  const router = useRouter();
  const cart = useCart();
  const { items, addItem } = useWishList();
  const openQuickView = useQuickViewStore((state) => state.openQuickView);
  const setProduct = useQuickViewStore((state) => state.setProduct);

  let variants;

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const handleClickRedirect = () => {
    router.push(`/product/${data.id}`);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = () => {
    cart.addItem(data as CartItem);
  };

  const changeImageOnHover = () => {
    setShowImage(data?.images[1]?.url);
  };

  const changeImageOnLeave = () => {
    setShowImage(data?.images[0]?.url);
  };

  const isItemInTheWishList = items?.some((item) => item.id === data.id);

  if (animated && index) {
    variants = {
      hidden: { opacity: 0, y: 0 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: index * 0.1 },
      },
    };
  }

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={inView && animated ? "visible" : "hidden"}
      ref={ref}
      // onMouseEnter={changeImageOnHover}
      // onMouseLeave={changeImageOnLeave}
      className='group bg-white group cursor-pointer rounded-xl border  p-3 space-y-4
    dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700
     transition duration-150 ease-in-out hover:shadow-x
    '
    >
      <div
        className='aspect-square roundex-xl bg-gray-100 relative
     
      '
      >
        <Image
          src={showImage || noImage}
          alt={data?.name}
          width={300}
          height={300}
          loading='lazy'
          className='object-cover w-full h-full sm:group-hover:hidden   transition duration-1000 ease-in-out'
          onClick={handleClickRedirect}
        />

        <Image
          src={data?.images[1]?.url || noImage}
          alt={data?.name}
          width={300}
          height={300}
          loading='lazy'
          onClick={handleClickRedirect}
          className='hidden sm:group-hover:block object-cover w-full h-full absolute top-0 left-0   transition duration-1000 ease-in-out'
        />
        <div className='hidden sm:block opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
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
    </motion.div>
  );
};

export default ProductCard;
