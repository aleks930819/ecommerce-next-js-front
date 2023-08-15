import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  data: any;
  category: string;
}

const CategoryCard = ({ data, category }: CategoryCardProps) => {
  const categoryName = `${category}'s ${data.name}`;

  return (
    <Link
      href={`/category/{category}/${data?.id}`}
      key={data.name}
      className='
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
    '
    >
      <li className='relative'>
        <figure className='w-full h-80 rounded-lg overflow-hidden shadow-lg relative'>
          <Image
            src={data.categoryImage}
            alt='category'
            width={300}
            height={300}
            className='w-full h-full object-cover'
          />

          <span className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 py-4'>
            <h3 className='text-xl font-semibold'>
              {categoryName.toUpperCase()}
            </h3>
          </span>
        </figure>
      </li>
    </Link>
  );
};

export default CategoryCard;
