import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface CategoriesItemProps {
  image: StaticImageData;
  name: string;
  path: string;
}

const CategoriesItem = ({ image, name, path }: CategoriesItemProps) => {
  return (
    <Link
      href={path}
      className='relative flex group justify-center items-center h-96 cursor-pointer overflow-hidden'
    >
      <Image
        src={image}
        alt={name}
        className='object-cover object-center h-full'
      />
      <div
        className='absolute w-full h-full bg-gray-800 opacity-30'
        aria-hidden='true'
      />
      <h2 className='absolute text-center w-full transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0  px-4 py-2 bg-black/90 dark:bg-gray-600/90 text-3xl font-bold text-white hover:transform-none'>
        {name}
      </h2>
    </Link>
  );
};

export default CategoriesItem;
