import { MetaData, Product } from "@/types";

import qs from "query-string";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  gender?: string;
  limit?: number;
  page?: number | string;
  isFeatured?: boolean;
}

export const getProducts = async (
  query: Query
): Promise<{ products: Product[]; meta_data: MetaData }> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      limit: query.limit || 12,
      page: query.page || 1,
    },
  });

  console.log(url);

  const response = await fetch(url);

  const data = await response.json();

  return data;
};
