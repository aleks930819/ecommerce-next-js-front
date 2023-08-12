"use client";

import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";

import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types";

import noImage from "@/assets/images/no-image-available.png";
import { useClickOutside } from "@/hooks/useClickOutside";
import useWindowDimension from "@/hooks/useWindowDemension";

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
      className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center'
    >
      <div className={cn("w-[500px] h-[500px] sm:w-[700px] sm:h-[700px]")}>
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
      <div className='mt-10 flex gap-10 h-full'>
        {/* PRODUCT IMAGE */}
        <div>
          <div className='gap-4 flex  items-center justiy-center'>
            <div
              className='
          h-[450px] w-[450px]
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
                className='object-cover w-full h-full'
                onClick={() => setShowFullImage(true)}
              />
            </div>
            {/* PRODUCT IMAGES */}
            <div className='flex  flex-col mt-4 gap-2 items-center justify-center'>
              {product?.images.map((image) => (
                <figure
                  key={image?.id}
                  className='h-[150px] w-[150px]
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
                    className='object-cover
                 w-full h-full
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
