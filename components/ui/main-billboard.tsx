"use client";
import React, { useState } from "react";

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const MainBillboard = ({ url }: { url: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='h-screen z-0'>
      <div className='h-full w-full relative flex items-center '>
        <div className='absolute inset-0'>
          <Image
            src={url}
            alt='Main Image'
            layout='fill'
            objectFit='cover '
            className='h-full w-full object-cover -z-10 filter brightness-50'
          />
        </div>
        <div
          className={`flex  h-full  flex-col mt-[50vh] ml-[10px] lg:ml-[100px] w-full lg:w-[40%]
          ${isHovered ? "hovered" : ""}`}
        >
          <h2 className='text-2xl lg:text-4xl  font-extrabold text-white mb-5 animate-slide-in-top'>
            Discover the Latest Trends
          </h2>

          <div>
            <button
              aria-label='Shop Now'
              title='Go to categories'
              onClick={() => {
                router.push("/categories");
              }}
              className='flex items-center  text-white gap-2 border py-4 px-2 text-base sm:text-lg rounded-sm animate-pop-up overflow-hidden'
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-transition ${isHovered ? "hide" : ""}`}>
                Shop Now
              </span>
              <span
                aria-hidden={isHovered}
                className={`arrow-transition ${isHovered ? "move" : ""}`}
              >
                <MoveRight size={22} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBillboard;
