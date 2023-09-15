"use client";

import qs from "query-string";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "./button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filter = ({ valueKey, name, data }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
      console.log("yes");
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const sizesID = "07f0e8b4-7709-4396-b946-adc723a83737";

  return (
    <div className='mb-8'>
      <h3 className='text-lg font-semibold'>{name}</h3>
      <hr className='my-4' />
      <div className='flex flex-wrap gap-2'>
        {data.map((item) => (
          <div key={item.id} className='flex items-center'>
            <Button
              className={cn(
                `px-4 py-2 rounded-md text-sm font-medium
                hover:bg-gray-900 transition-colors hover:text-white
                dark:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                disabled:opacity-50 disabled:cursor-not-allowed
                
                `,
                selectedValue === item.id
                  ? "dark:bg-gray-700 text-white bg-black"
                  : "bg-gray-100 text-gray-900"
              )}
              onClick={() => onClick(item.id)}
            >
              {item.id === sizesID
                ? item.value.toUpperCase()
                : item.name.toUpperCase()}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
