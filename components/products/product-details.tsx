"use client";

import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";

import { Facebook, Heart, Instagram, ShoppingCart } from "lucide-react";

import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types";

import noImage from "@/assets/images/no-image-available.png";

import { useClickOutside } from "@/hooks/useClickOutside";
import useWindowDimension from "@/hooks/useWindowDemension";
import Button from "../ui/button";
import useCart from "@/hooks/user-cart";
import useWishList from "@/hooks/use-wishlist";

interface ProductDetailsProps {
  product: Product;
}

const FullScreenImage = ({
  image,
  showFullImageOnTheScreen,
  fullScreenImageRef,
}: {
  image: string;
  showFullImageOnTheScreen: () => void;
  fullScreenImageRef: React.RefObject<HTMLDivElement>;
}) => {
  useClickOutside(fullScreenImageRef, showFullImageOnTheScreen);

  const { width, height } = useWindowDimension();

  const isMobile = width < 640;

  return (
    <div
      ref={fullScreenImageRef}
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center px-6 '
    >
      <div className={cn("w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] ")}>
        <Image
          alt='image'
          src={image}
          className='object-cover w-full h-full'
          width={!isMobile ? 750 : 500}
          height={!isMobile ? 750 : 500}
        />
      </div>
    </div>
  );
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [showImage, setShowImage] = useState(product?.images[0]?.url);
  const [showFullImage, setShowFullImage] = useState(false);

  const cart = useCart((state) => state.addItem);
  const { items, addItem } = useWishList();

  const fullScreenImageRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (image: string) => {
    setShowImage(image);
  };

  const isItemInTheWishList = items.some((item) => item.id === product.id);

  return (
    <>
      <div className='mt-10 flex flex-col lg:flex-row gap-10 h-full border-b  dark:border-white pb-5'>
        {/* PRODUCT IMAGE */}
        <div>
          <div
            className='gap-4
           overflow-hidden
          flex px-6 flex-col lg:flex-row  items-center justiy-center'
          >
            <div
              className='
          lg:h-[450px] lg:w-[450px]
          h-[300px] w-[300px]
          border border-gray-300
          cursor-pointer
          hover:border-gray-500
          transition
          duration-300
          ease-in-out
        '
            >
              <Image
                src={showImage || noImage}
                alt={product?.name}
                width={450}
                height={450}
                className='object-cover w-full h-full
                 hover:cursor-zoom-in
                '
                onClick={() => setShowFullImage(true)}
              />
            </div>
            {/* PRODUCT IMAGES */}
            <div className='flex  flex-row lg:flex-col mt-4 gap-2 items-center justify-center'>
              {product?.images.map((image) => (
                <figure
                  key={image?.id}
                  className='lg:h-[150px] lg:w-[150px]
                 h-[100px] w-[100px]
              border border-gray-300
              cursor-pointer
              hover:border-gray-500
              transition
              duration-300
              ease-in-out
              '
                  onClick={() => handleImageChange(image?.url)}
                >
                  <Image
                    src={image?.url}
                    alt={product?.name}
                    width={150}
                    height={150}
                    className='object-cover w-full h-full
                '
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT REVIEW */}
        <div>
          <h1 className='text-2xl font-bold pb-4'>
            <strong>{product?.name}</strong>
          </h1>
          <p className='pb-4'>{product?.description}</p>
          <p className='pb-4'>
            <strong>
              Price:
              {formatPrice(product?.price)}
            </strong>
          </p>
          <p className='pb-4'>
            <strong>COLOR: </strong>
            {product?.color?.name.toLocaleUpperCase()}
          </p>
          <p className='pb-4'>
            <strong>SIZE: </strong>
            {product?.size?.name.toLocaleUpperCase()}
          </p>

          <div className='pb-6 flex justify-start items-center gap-4'>
            <Button
              aria-label='Add item to cart'
              className='px-8 py-2 gap-4
             dark:bg-gray-100 dark:text-gray-600
             dark:hover:bg-gray-300'
              onClick={() => cart(product)}
            >
              ADD TO CART
              <ShoppingCart size={24} />
            </Button>
            <Button
              onClick={() => addItem(product)}
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

          <div className='flex gap-4'>
            <button
              className='bg-black
          
            dark:bg-white dark:text-gray-600 text-white px-4 py-2 rounded-lg'
            >
              <Facebook size={24} />
            </button>
            <button className='bg-black dark:bg-white dark:text-gray-600 text-white px-4 py-2 rounded-lg'>
              <Instagram size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* FULL SCREEN IMAGE */}
      {showFullImage && (
        <FullScreenImage
          fullScreenImageRef={fullScreenImageRef}
          image={showImage}
          showFullImageOnTheScreen={() => setShowFullImage(false)}
        />
      )}
    </>
  );
};

export default ProductDetails;
