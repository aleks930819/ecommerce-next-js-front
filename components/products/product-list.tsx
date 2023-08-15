"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const containerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className='space-y-4 mb-28' ref={ref}>
      <h3
        className='text-2xl sm:text-4xl font-bold text-gray-800
      dark:text-white transition-colors duration-150 ease-in-out
      '
      >
        {title}
      </h3>
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <motion.ul
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
          variants={container}
          initial='hidden'
          animate={isVisible ? "visible" : "hidden"}
        >
          {items.map((item) => (
            <motion.li
              variants={containerItem}
              key={item.id}
              className={cn(" transition duration-700 ease-in-out")}
            >
              <ProductCard data={item} />
            </motion.li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default ProductList;
