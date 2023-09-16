import Image from "next/image";

import tShirts from "/public/images/t-shirts.jpg";
import jeans from "/public/images/jeans.jpg";

const NewsItem = ({
  image,
  text,
  buttonAction,
}: {
  image: string;
  text: string;
  buttonAction: string;
}) => {
  return (
    <div
      className='flex flex-col
       hover:scale-105 transition-all duration-150
      justify-center items-center bg-cover bg-center bg-no-repeat h-96 w-full lg:w-1/2 relative'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>
      <div className='absolute left-2 lg:left-10 top-10 h-full z-10 text-start'>
        <h3 className='text-2xl lg:text-4xl font-semibold text-gray-100 dark:text-white mb-4'>
          {text}
        </h3>
        <button
          className='px-6 py-3 bg-gray-200 text-black dark:bg-white dark:text-black rounded-sm font-bold
        hover:bg-gray-300 transition-colors duration-250 ease-in-out
         dark:hover:bg-black dark:hover:text-white
        '
        >
          {buttonAction}
        </button>
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
        />
        <NewsItem
          image={jeans.src}
          text='25% off on Jeans'
          buttonAction='Shop Now'
        />
      </div>
    </div>
  );
};

export default News;
