"use client";
import React, { useState } from "react";

import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

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
      <div
        className='h-full w-full relative flex items-center '
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "20% 20%",
        }}
      >
        <div
          className={`flex  h-full  flex-col mt-[50vh] ml-[10px] lg:ml-[100px] w-full lg:w-[40%]
          ${isHovered ? "hovered" : ""}`}
        >
          <h2 className='text-3xl lg:text-4xl  font-extrabold text-white mb-5 animate-slide-in-top'>
            Discover the Latest Trends
          </h2>

          <div>
            <button
              aria-label='go to categories button'
              onClick={() => {
                router.push("/categories");
              }}
              className='flex items-center  text-white gap-2 border py-4 px-2 text-lg rounded-sm animate-pop-up overflow-hidden'
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <span className={`text-transition ${isHovered ? "hide" : ""}`}>
                Shop Now
              </span>
              <span className={`arrow-transition ${isHovered ? "move" : ""}`}>
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
