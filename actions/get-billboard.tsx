import { Billboard, Category } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/billboards`;

export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();
  return data;
};
