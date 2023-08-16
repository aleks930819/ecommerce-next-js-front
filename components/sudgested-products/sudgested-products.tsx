"use client";

import { getProducts } from "@/actions/get-products";
import ProductCard from "@/components/products/product-card";
import useCategory from "@/hooks/use-category";
import { useEffect } from "react";

const SudgestedProducts = ({ categoryId }: { categoryId: string }) => {
  const category = useCategory((state) => state.category);

  console.log(category);

  useEffect(() => {
    const fetchProducts = async () => {
      const suggestedProducts = await getProducts({
        categoryId: categoryId,
      });

      const filteredProducts = suggestedProducts.filter(
        (suggestedProduct) => suggestedProduct.id !== categoryId
      );
    };
  }, []);

  return (
    <div className='mt-10 mb-10'>
      <h2 className='text-2xl font-bold pb-4'>
        <strong>YOU MIGHT ALSO LIKE</strong>
      </h2>
      {/* <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductCard data={product} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SudgestedProducts;
