import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

import Container from "@/components/ui/container";
import ProductList from "@/components/products/product-list";
import CookieConsent from "@/components/ui/cookies-consent";
import MainBillboard from "@/components/ui/main-billboard";
import Services from "@/components/services/services";
import News from "@/components/news/news";

export const revalidate = 1;

const HomePage = async () => {
  const { products } = await getProducts({
    limit: 4,
  });

  console.log(products);

  const billboard = await getBillboard("c6f110c6-759c-4205-9871-d1daeea1fbbf");

  return (
    <>
      <MainBillboard url={billboard.imageUrl} />
      <Container>
        <div className='space-y-10 pb-10 '></div>
        <section className='flex flex-col  mb-20 px-4 sm:px-6 lg:px-8'>
          <h2 className='text-center text-2xl lg:text-4xl font-semibold'>
            Our Latest Products
          </h2>
          <ProductList items={products} />
          <News />
          <Services />
        </section>
      </Container>

      <CookieConsent />
    </>
  );
};

export default HomePage;
