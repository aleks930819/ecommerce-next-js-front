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
import Pagination from "@/components/pagination/pagination";

export const revalidate = 1;

interface CatgegoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
    categoryId: string;
    page: string;
  };
}

const CategoryPage = async ({ params, searchParams }: CatgegoryPageProps) => {
  const { products, meta_data } = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
    page: searchParams.page || 1,
    limit: 12,
  });

  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <div>
      <ClientOnly>
        <Container>
          {/* <Billboard data={category?.billboard} /> */}
          <div className='px-4 sm:px-6 lg:px-8 pb-24 mt-10'>
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
            <Pagination
              categoryId={params.categoryId}
              currentPage={meta_data?.current_page}
              totalPages={meta_data?.total_pages}
            />
          </div>
        </Container>
      </ClientOnly>
    </div>
  );
};

export default CategoryPage;
