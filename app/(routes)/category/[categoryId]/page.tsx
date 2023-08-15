import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";

import Billboard from "@/components/bilboard/bilboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import Filter from "@/components/ui/filter";
import ProductsGrid from "@/components/products/products-grid";
import MobilerFilter from "@/components/ui/mobile-filter";
import ClientOnly from "@/components/client-only/client-only";

export const revalidate = 1;

interface CatgegoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    categoryId: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CatgegoryPageProps) => {
  const gender = params.categoryId;

  const products = await getProducts({
    categoryId: searchParams.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    gender,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(searchParams.categoryId);

  return (
    <div>
      <ClientOnly>
        <Container>
          <Billboard data={category?.billboard} />
          <div className='px-4 sm:px-6 lg:px-8 pb-24'>
            <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
              {/* Mobile Filters */}
              <MobilerFilter colors={colors} sizes={sizes} />
              {/* Dekstop Filters */}
              <div className='hidden lg:block'>
                <Filter valueKey='sizeId' name='Sizes' data={sizes} />
                <Filter valueKey='colorId' name='Colors' data={colors} />
              </div>
              {/* Products */}
              {products.length === 0 && <NoResults />}
              <ProductsGrid products={products} />
            </div>
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
};

export default CategoryPage;
