import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import Container from "@/components/ui/container";
import ProductList from "@/components/products/product-list";
import CookieConsent from "@/components/ui/cookies-consent";
import MainBillboard from "@/components/ui/main-billboard";
import Services from "@/components/services/services";

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
        <section className='flex flex-col  mb-10 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-center text-2xl lg:text-4xl font-semibold'>
            Our Latest Products
          </h2>
          <ProductList items={products} />
          <Services />
        </section>
      </Container>

      <CookieConsent />
    </>
  );
};

export default HomePage;
