import { StaticPage } from "@/types";

const HOST = process.env.NEXT_PUBLIC_API_URL;

const URL = `${HOST}/static`;

export const getStaticPage = async (slug: string): Promise<StaticPage[]> => {
  const response = await fetch(`${URL}/${slug}`);
  const data = await response.json();
  return data;
};
