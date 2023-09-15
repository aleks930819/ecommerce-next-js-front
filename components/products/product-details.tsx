"use client";

import Image from "next/image";

import React, { useRef, useState } from "react";

import ReactImageMagnify from "react-image-magnify";

import { Facebook, Heart, Instagram, ShoppingCart } from "lucide-react";

import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types";

import noImage from "@/assets/images/no-image-available.png";

import { useClickOutside } from "@/hooks/useClickOutside";
import useWindowDimension from "@/hooks/useWindowDemension";
import useCart from "@/hooks/user-cart";
import useWishList from "@/hooks/use-wishlist";

import Button from "@/components/ui/button";
import SocialIncons from "../social-icons/social-icons";
import ProductDetailsActions from "./product-details-actions";

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

  const fullScreenImageRef = useRef<HTMLDivElement>(null);

  const handleImageChange = (image: string) => {
    setShowImage(image);
  };

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
              PRICE:
              {formatPrice(product?.price)}
            </strong>
          </p>
          <p className='pb-4'>
            <strong>COLOR: </strong> {product?.color?.name.toLocaleUpperCase()}
          </p>
          <p className='pb-4'>
            <strong>SIZE: </strong>
            {product?.size?.name.toLocaleUpperCase()}
          </p>

          <p className='pb-4'>
            <strong>QUANTITY: </strong>
            {product?.quantity}
          </p>

          <ProductDetailsActions product={product} />
          <SocialIncons />
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
