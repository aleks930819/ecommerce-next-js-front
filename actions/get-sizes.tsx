import { Size } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
