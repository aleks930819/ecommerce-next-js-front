"use client";

import { Product } from "@/types";

import ProductCard from "./product-card";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <section className='lg:col-span-4 mt-10 sm:mt-0'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product, i) => (
          <ProductCard data={product} key={product.id} index={i} animated />
        ))}
      </ul>
    </section>
  );
};

export default ProductsGrid;
