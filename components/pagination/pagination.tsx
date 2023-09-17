"use client";

import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Pagination = ({
  currentPage,
  totalPages,
  categoryId,
}: {
  currentPage: number;
  totalPages: number;
  categoryId: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  if (totalPages === 1 || totalPages === 0) {
    return null;
  }

  const handleNextPage = () => {
    router.push(`/category/${categoryId}?page=${Number(page) + 1}`);
  };

  const handlePrevPage = () => {
    router.push(`/category/${categoryId}?page=${Number(page) - 1}`);
  };

  const handlePage = (page: number) => {
    router.push(`/category/${categoryId}?page=${page}`);
  };

  return (
    <div className='flex items-center justify-center mt-10'>
      <div className='flex rounded-md'>
        <button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          className={` ${
            currentPage === 1 ? "opacity-50" : ""
          } disabled:opacity-50 bg-black text-white dark:bg-gray-800 dark:text-white px-4 py-2 rounded-l-md focus:outline-none mr-4`}
        >
          <span>
            <span className='sr-only'>Previous</span>
            <ChevronLeft size={22} />
          </span>
        </button>
        <div className='flex gap-2'>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => handlePage(i + 1)}>
              <span
                className={`${
                  currentPage === i + 1
                    ? "border-2 border-black text-dark dark:border-gray-700 "
                    : ""
                }
                 text-lg px-4  py-2
                `}
              >
                {i + 1}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`${
            currentPage === totalPages ? "opacity-50" : ""
          } disabled:opacity-50 bg-black text-white dark:bg-gray-800 dark:text-white px-4 py-2 rounded-r-md focus:outline-none ml-4`}
        >
          <span>
            <span className='sr-only'>Next</span>
            <ChevronRight size={22} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
