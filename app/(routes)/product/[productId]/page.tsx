import React from "react";

import { getProduct } from "@/actions/get-proudct";

import Container from "@/components/ui/container";
import ProductDetails from "@/components/products/product-details";
import SudgestedProducts from "@/components/sudgested-products/sudgested-products";
import { getProducts } from "@/actions/get-products";
import { Product } from "@/types";

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

  const { products: sudgestedProducts } = await getProducts({
    categoryId: product?.category.id,
    limit: 4,
  });

  console.log(sudgestedProducts);

  const filteredProducts = sudgestedProducts?.filter(
    (suggestedProduct: Product) => suggestedProduct.id !== product.id
  );

  return (
    <section className='h-full'>
      <Container>
        {/* PRODUCT */}
        <ProductDetails product={product} />
        {/* SUGGESTED PRODUCTS */}

        {filteredProducts.length > 0 && (
          <SudgestedProducts data={filteredProducts} />
        )}
      </Container>
    </section>
  );
};

export default ProductPage;
