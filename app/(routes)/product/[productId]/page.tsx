import React from "react";

import { getProducts } from "@/actions/get-products";
import { getProduct } from "@/actions/get-proudct";

import Container from "@/components/ui/container";
import ProductCard from "@/components/products/product-card";
import ProductDetails from "@/components/products/product-details";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const filteredProducts = suggestedProducts.filter(
    (suggestedProduct) => suggestedProduct.id !== product.id
  );

  return (
    <section className='h-full'>
      <Container>
        {/* PRODUCT */}
        <ProductDetails product={product} />
        {/* SUGGESTED PRODUCTS */}

        <div className='mt-10 mb-10'>
          {filteredProducts.length === 0 && (
            <>
              <h2 className='text-2xl font-bold pb-4'>
                <strong>YOU MIGHT ALSO LIKE</strong>
              </h2>
              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {filteredProducts.map((product) => (
                  <li key={product.id}>
                    <ProductCard data={product} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ProductPage;
