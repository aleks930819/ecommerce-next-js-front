import React from "react";

import { getProducts } from "@/actions/get-products";
import { getProduct } from "@/actions/get-proudct";

import Container from "@/components/ui/container";
import ProductCard from "@/components/products/product-card";
import ProductDetails from "@/components/products/product-details";
import SudgestedProducts from "@/components/sudgested-products/sudgested-products";

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

  return (
    <section className='h-full'>
      <Container>
        {/* PRODUCT */}
        <ProductDetails product={product} />
        {/* SUGGESTED PRODUCTS */}
        <SudgestedProducts categoryId={product?.category?.id} />
      </Container>
    </section>
  );
};

export default ProductPage;
