import { Product } from "@/types";

import qs from "query-string";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  gender?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  // TODO: FIX THE QUERY

  let gender;
  if (query.gender === "women" || query.gender === "FEMALE") {
    gender = "FEMALE";
  } else if (query.gender === "men" || query.gender === "MALE") {
    gender = "MALE";
  }

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      gender,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const response = await fetch(url);

  const data = await response.json();

  return data;
};
