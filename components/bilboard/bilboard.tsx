import React from "react";

import { Billboard as BillboardType } from "@/types";
import { cn } from "@/lib/utils";

interface BillboardProps {
  data: BillboardType;
}

const Billboard = ({ data }: BillboardProps) => {
  return (
    <div className='overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className='relative h-screen w-full overflow-hidden bg-cover'
      >
        <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
          <div
            className={cn(
              `font-bold text-xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs
           bg-gray-200 p-6 rounded-xl tansition duration-150 ease-in-out
            dark:bg-gray-800 dark:text-white
           `,
              "popFromBottomText"
            )}
          >
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
