import Category from "@/components/category/category";
import React from "react";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { category } = params;

  return (
    <section>
      <Category category={category} />
    </section>
  );
};

export default CategoryPage;
