/* eslint-disable @next/next/no-img-element */
import { getProduct } from "@/actions/get-proudct";
import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};

export const generateImage = async ({ params }: { params: any }) => {
  const product = await getProduct(params.productId);

  return new ImageResponse(
    (
      <div tw='relative flex w-full h-full flex items-center justify-center'>
        <div tw='aboslute flex inset-0'>
          <img
            src={product?.images[0]?.url + "&w=1200&h=630"}
            alt={product?.name}
            tw='flex flex-1'
          />
        </div>
        {/* <div tw='flex flex-col tex'>
          <h1 tw='text-white text-3xl font-bold'>{product?.name}</h1>
          <p tw='text-white text-lg'>{product?.description}</p>
        </div> */}
      </div>
    ),
    size
  );
};
