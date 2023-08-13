"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import useCart from "@/hooks/user-cart";

import Button from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import axios from "axios";

const Summary = () => {
  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);

  useEffect(() => {
    const status = searchParams.get("status");

    if (status === "success") {
      toast.success("Order placed successfully");
      removeAll();
    }

    if (status === "canceled") {
      toast.error("Order canceled");
    }
  }, [searchParams, removeAll]);

  const onCheckOut = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );
    window.location = response.data.url;
  };

  return (
    <div className='mt-16 rounded-lg bg-gray-200 dark:bg-gray-800 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium dark:text-white'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-400 dark:border-white pt-4'>
          <div className='text-base font-medium dark:text-white'>
            Order Total
          </div>
          <div className='text-base font-medium dark:text-white'>
            {formatPrice(totalPrice)}
          </div>
        </div>
        <Button
          onClick={onCheckOut}
          className='w-full mt-6
        dark:bg-gray-700 dark:text-white
        '
        >
          <span>Checkout</span>
        </Button>
      </div>
    </div>
  );
};

export default Summary;
