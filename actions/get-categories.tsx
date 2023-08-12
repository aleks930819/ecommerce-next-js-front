import { Category } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
