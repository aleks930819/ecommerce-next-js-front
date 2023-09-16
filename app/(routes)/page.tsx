import { MoveRight } from "lucide-react";

import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import Container from "@/components/ui/container";
import ProductList from "@/components/products/product-list";
import CookieConsent from "@/components/ui/cookies-consent";
import MainBillboard from "@/components/ui/main-billboard";

export const revalidate = 1;

const HomePage = async () => {
  const { products, pages } = await getProducts({
    isFeatured: false,
    limit: 4,
  });

  const billboard = await getBillboard("9f448bbd-f914-42fa-b578-bb7a2b6097b1");

  return (
    <>
      <MainBillboard url={billboard.imageUrl} />
      <Container>
        <div className='space-y-10 pb-10 '></div>
        <section className='flex flex-col gap-y-8 mb-10 px-4 sm:px-6 lg:px-8'>
          <ProductList items={products} />
        </section>
      </Container>

      <CookieConsent />
    </>
  );
};

export default HomePage;
