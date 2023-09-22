import React from "react";

import { getProduct } from "@/actions/get-proudct";
import { getProducts } from "@/actions/get-products";

import { Product } from "@/types";

import Container from "@/components/ui/container";
import ProductDetails from "@/components/products/product-details";
import SudgestedProducts from "@/components/sudgested-products/sudgested-products";

export const generateMetadata = async ({ params }: { params: any }) => {
  const product = await getProduct(params.productId);

  return {
    title: product?.name,
    description: product?.description.substring(0, 120),
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_URL}/product/${product?.id}`,
      title: product?.name,
      description: product?.description.substring(0, 120),
      image: product?.images[0]?.url,
      images: product?.images[0]?.url,
      site_name: "UrbanTrend Emporium",
    },
  };
};

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

  const filteredProducts = sudgestedProducts?.filter(
    (suggestedProduct: Product) => suggestedProduct.id !== product.id
  );

  return (
    <>
      <section className='h-full'>
        <Container>
          {/* PRODUCT */}
          <ProductDetails
            product={product}
            showBottomBorder={filteredProducts.length > 0}
          />
          {/* SUGGESTED PRODUCTS */}
          {filteredProducts.length > 0 && (
            <SudgestedProducts data={filteredProducts} />
          )}
        </Container>
      </section>
    </>
  );
};

export default ProductPage;
