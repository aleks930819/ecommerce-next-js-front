import { getCategories } from "@/actions/get-categories";

import Container from "@/components/ui/container";
import CategoryCard from "./category-card";

const Category = async ({ category }: { category: string }) => {
  const categories = await getCategories();

  console.log(categories);

  return (
    <section className=' py-10 mt-10 mb-10'>
      <Container>
        <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {categories.map((data, index) => (
            <CategoryCard data={data} key={index} category={category} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Category;
