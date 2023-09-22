import jeans from "../../../public/images/categories/jeans.jpg";
import jackets from "../../../public/images/categories/jackets.jpg";
import tShirts from "../../../public/images/categories/t-shirts.jpg";
import accessories from "../../../public/images/categories/accessories.jpg";
import CategoriesItem from "@/components/categories/cateogires-item";

const categories = {
  tShirts: {
    name: "T-Shirts",
    image: tShirts,
    categoryId: "b3b6071a-9a48-4bf8-8bbe-46587381cefc",
  },
  jackets: {
    name: "Jackets",
    image: jackets,
    categoryId: "86eab628-b3ea-48bc-bfce-fd134be6f511",
  },
  jeans: {
    name: "Jeans",
    image: jeans,
    categoryId: "09cc1b64-6043-4aed-a1a2-c5f71e8cc296",
  },
  accessories: {
    name: "Accessories",
    image: accessories,
    categoryId: "c276faa4-a27b-4fd8-9e9e-55452768baa9",
  },
};

const CategoriesPage = () => {
  return (
    <section className='max-w-7xl  mx-auto pb-20 pt-20'>
      <div className='grid grid-cols-2 p-4 gap-4 lg:p-0 lg:grid-cols-4 lg:gap-8'>
        <CategoriesItem
          image={categories.tShirts.image}
          name={categories.tShirts.name}
          path={`/category/${categories.tShirts.categoryId}`}
        />
        <CategoriesItem
          image={categories.jackets.image}
          name={categories.jackets.name}
          path={`/category/${categories.jackets.categoryId}`}
        />
        <CategoriesItem
          image={categories.jeans.image}
          name={categories.jeans.name}
          path={`/category/${categories.jeans.categoryId}`}
        />
        <CategoriesItem
          image={categories.accessories.image}
          name={categories.accessories.name}
          path={`/category/${categories.accessories.categoryId}`}
        />
      </div>
    </section>
  );
};

export default CategoriesPage;
