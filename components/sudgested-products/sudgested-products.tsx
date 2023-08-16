import { Product } from "@/types";

import ProductCard from "@/components/products/product-card";

const SudgestedProducts = ({ data }: { data: Product[] }) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className='mt-10 mb-10'>
      <h2 className='text-2xl font-bold pb-4'>
        <strong>YOU MIGHT ALSO LIKE</strong>
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {data.map((product) => (
          <li key={product.id}>
            <ProductCard data={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SudgestedProducts;
