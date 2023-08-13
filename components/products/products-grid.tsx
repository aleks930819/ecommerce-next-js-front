"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { Product } from "@/types";

import ProductCard from "./product-card";

interface ProductsGridProps {
  products: Product[];
}

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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
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
    <section className='lg:col-span-4 mt-10 sm:mt-0' ref={ref}>
      <motion.ul
        variants={container}
        animate={isVisible ? "visible" : "hidden"}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
      >
        {products.map((product) => (
          <motion.li key={product.id} variants={item}>
            <ProductCard data={product} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProductsGrid;
