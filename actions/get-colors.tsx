import { Color } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
