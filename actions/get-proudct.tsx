import { Product } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/products`;

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  return data;
};
