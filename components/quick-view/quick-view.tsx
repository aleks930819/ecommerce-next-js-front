"use client";

import Link from "next/link";
import { Timer, Star, Facebook, Youtube, Instagram, Heart } from "lucide-react";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useClickAway } from "@uidotdev/usehooks";

import { useQuickViewStore } from "@/hooks/use-qickview";

import ClientOnly from "@/components/client-only/client-only";
import SocialIncons from "@/components/social-icons/social-icons";
import Button from "@/components/ui/button";
import ProductDetailsActions from "../products/product-details-actions";
import useCart from "@/hooks/user-cart";
import useWishList from "@/hooks/use-wishlist";

// import ProductDetailsActions from "@/components/product-details/product-details-actions";
// import ToolTip from "../ui/tooltip";
// import ButtonIcon from "../ui/button-icon";
// import CardLogos from "../ui/card-logos";
// import SocialLinks from "../ui/social-links";

const QuickView = () => {
  const isOpen = useQuickViewStore((state) => state.isOpen);
  const onClose = useQuickViewStore((state) => state.closeQuickView);
  const product = useQuickViewStore((state) => state.product);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const swiperRef = useRef<any>(null);

  const onImageClick = (i: number) => {
    setActiveImageIndex(i);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(i);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      const interval = setTimeout(() => {
        setActiveImageIndex(0);
        swiperRef.current?.swiper.slideTo(0);
      }, 600);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [isOpen]);

  const ref = useClickAway(() => {
    onClose();
  });

  if (!product) {
    return null;
  }

  return (
    <ClientOnly>
      <div
        className={`fixed top-0 z-50 left-0 w-full justify-center flex items-center   h-full bg-black/80  transition-opacity duration-500
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      >
        <div
          ref={ref as any}
          className={`w-full h-[90vh] lg:w-[70vw] overflow-auto transition py-2 duration-500 mx-auto ease-in-out transform bg-white text-black dark:bg-gray-700 dark:text-white flex flex-col  px-3 z-50
         ${isOpen ? "translate-y-0" : "translate-y-[-100%]"}`}
        >
          <div className='flex flex-col gap-2 lg:flex-row lg:gap-10'>
            {/* PRODUCT IMAGES */}
            <div className='relative'>
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                modules={[Navigation]}
                className='aspect-square w-full h-[300px] lg:w-[450px] lg:h-[500px] overflow-hidden'
              >
                {product.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={image.url}
                      alt={product.name}
                      fill
                      className='object-cover '
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* <div className='absolute top-0 right-10 z-50 p-2  flex flex-col gap-2'>
                <button
                  aria-label='add to wishlist'
                  className='opacity-100'
                  onClick={() => {}}
                >
                  <Heart size={25} />
                </button>
              </div> */}
              <div
                className='flex gap-2 mt-2 flex-wrap
               max-w-[450px] overflow-x-auto
              '
              >
                {product.images.map((image, i) => (
                  <div
                    key={i}
                    className={`relative h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] overflow-hidden cursor-pointer
                    ${
                      i === activeImageIndex
                        ? "border-2 border-primary-2"
                        : "border-2 border-transparent"
                    }
                    `}
                    onClick={() => onImageClick(i)}
                  >
                    <Image
                      src={image.url}
                      alt={product.name}
                      fill
                      className='object-cover object-center'
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* PRODUCT INFO */}
            <div className='flex flex-col items-start  '>
              <h2 className='text-2xl lg:text-3xl font-bold  text-start mb-4 pt-2'>
                <Link href='/' className='hover:text-primary-2 hover:underline'>
                  {product.name}
                </Link>
              </h2>
              <p className='text-gray-5 mb-4'>{product.description}</p>

              <div className='flex flex-col pb-4 lg:pb-0 gap-5 lg:gap-0 lg:flex-row items-center justify-between w-full'>
                <ProductDetailsActions product={product} className='pb-0' />
                <SocialIncons />
              </div>
              {/* PRODUCT ACTIONS */}
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default QuickView;
