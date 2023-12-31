import Image from "next/image";

import tShirts from "/public/images/t-shirts.jpg";
import jeans from "/public/images/jeans.jpg";
import Link from "next/link";

const NewsItem = ({
  image,
  text,
  buttonAction,
  to,
}: {
  image: string;
  text: string;
  buttonAction: string;
  to: string;
}) => {
  return (
    <div
      className='flex flex-col
       lg:hover:scale-105 transition-all duration-150
      justify-center items-center bg-cover bg-center bg-no-repeat h-96 w-full lg:w-1/2 relative'
    >
      <Image
        src={image}
        alt={text}
        width={300}
        height={300}
        className='object-cover object-center h-full w-full'
      />
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>
      <div className='absolute left-2 lg:left-10 top-10 h-full z-10 text-start'>
        <h3 className='text-2xl lg:text-4xl font-semibold text-gray-100 dark:text-white mb-4'>
          {text}
        </h3>
        <Link
          href={to}
          className='px-6 py-3 bg-gray-200 text-black dark:bg-white dark:text-black rounded-sm font-bold
        hover:bg-gray-300 transition-colors duration-250 ease-in-out
         dark:hover:bg-black dark:hover:text-white
        '
        >
          {buttonAction}
        </Link>
      </div>
    </div>
  );
};

const News = () => {
  return (
    <div className='max-w-7xl mx-auto w-full mb-20  lg:px-1'>
      <div className='flex flex-col lg:flex-row lg:justify-between  items-center gap-5'>
        <NewsItem
          image={tShirts.src}
          text='New T-Shirts Collection'
          buttonAction='Explore Now'
          to={"/category/b3b6071a-9a48-4bf8-8bbe-46587381cefc"}
        />
        <NewsItem
          image={jeans.src}
          text='25% off on Jeans'
          buttonAction='Shop Now'
          to={"/category/09cc1b64-6043-4aed-a1a2-c5f71e8cc296"}
        />
      </div>
    </div>
  );
};

export default News;
