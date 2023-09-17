import Link from "next/link";
import Image from "next/image";

import { Category } from "@/types";
import { cn } from "@/lib/utils";

const manImage =
  "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
const womanImage =
  "https://images.unsplash.com/photo-1495385794356-15371f348c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=370&q=80";

interface BottomNavProps {
  categories: Category[];
  isOpen: boolean;
  activeCategory: string;
  onClose: () => void;
}

const BottomNav = ({
  categories,
  isOpen,
  activeCategory,
  onClose,
}: BottomNavProps) => {
  return (
    <div
      onMouseLeave={onClose}
      className={cn(
        `max-w-[100%]  p-10 m-0 dark:bg-gray-700 bg-gray-200 w-full absolute h-0 top-20  right-0 z-30 min-h-[300px] flex justify-between py-4  rounded-md`,
        isOpen ? " animate-fadeInDown " : ""
      )}
    >
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className='dark:text-white text-xl font-bold hover:text-gray-400 mb-2
             dark:hover:text-gray-300 transition duration-300 ease-in-out
            '
          >
            <Link href={`/category/${category.id}`}>
              {category.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      <figure className='w-[200px] h-full relative rounded-md shadow-md'>
        <Image
          src={manImage}
          alt='image'
          width={200}
          height={200}
          className='object-cover rounded-md shadow-md w-full h-full'
        />
      </figure>
    </div>
  );
};

export default BottomNav;
