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
  // TODO: FIX THE QUERY
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  // const url = `${URL}?${qs.stringify(query)}`;

  console.log(url);

  console.log(query);

  const response = await fetch(url);

  const data = await response.json();

  console.log(data.length);

  return data;
};
