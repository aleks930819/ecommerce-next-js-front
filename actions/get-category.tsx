import { Category } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  return data;
};
