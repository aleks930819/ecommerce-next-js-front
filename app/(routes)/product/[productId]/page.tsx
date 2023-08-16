import React from "react";

import { getProduct } from "@/actions/get-proudct";

import Container from "@/components/ui/container";
import ProductDetails from "@/components/products/product-details";
import SudgestedProducts from "@/components/sudgested-products/sudgested-products";
import { getProducts } from "@/actions/get-products";

interface ProductPageProps {
  params: {
    productId: string;
  };
  searchParams: {
    categoryId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);

  const sudgestedProducts = await getProducts({
    isFeatured: true,
    categoryId: product?.category.id,
    gender: product?.gender,
  });

  const filteredProducts = sudgestedProducts.filter(
    (suggestedProduct) => suggestedProduct.id !== product.id
  );

  return (
    <section className='h-full'>
      <Container>
        {/* PRODUCT */}
        <ProductDetails product={product} />
        {/* SUGGESTED PRODUCTS */}
        <SudgestedProducts data={filteredProducts} />
      </Container>
    </section>
  );
};

export default ProductPage;
