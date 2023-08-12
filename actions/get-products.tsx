import { Product } from "@/types";

import qs from "query-string";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringify({
    url: URL,
    query: {
      colorId: query.colorId,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
