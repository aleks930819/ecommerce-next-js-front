import { getProduct } from "@/actions/get-proudct";

export const size = {
  width: 1200,
  height: 630,
};

export const generateImage = async ({ params }: { params: any }) => {
  const product = await getProduct(params.productId);

  return {
    file: product?.images[0]?.url,
    size,
  };
};
