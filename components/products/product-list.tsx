"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

import { Product } from "@/types";
import NoResults from "../ui/no-results";
import ProductCard from "./product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList = ({ title, items }: ProductListProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className='space-y-4'>
      <h3
        className='text-4xl font-bold text-gray-800
      dark:text-white transition-colors duration-150 ease-in-out
      '
      >
        {title}
      </h3>
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                "opacity-0 transition duration-1000 ease-in-out",
                isVisible && "opacity-1 animate-fadeInUp"
              )}
              ref={ref}
            >
              <ProductCard data={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
