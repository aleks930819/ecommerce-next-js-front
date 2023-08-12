import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import Container from "@/components/ui/container";
import Billboard from "@/components/bilboard/bilboard";
import ProductList from "@/components/products/product-list";
import CookieConsent from "@/components/ui/cookies-consent";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("7d921dca-6d31-4cce-87f5-68e61bef7082");

  return (
    <>
      <Container>
        <div className='space-y-10 pb-10 '>
          <Billboard data={billboard} />
        </div>
        <section className='flex flex-col gap-y-8 mb-10 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' items={products} />
        </section>
      </Container>

      <CookieConsent />
    </>
  );
};

export default HomePage;
