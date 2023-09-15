"use client";

import Button from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className='flex h-screen px-4  justify-center items-center'>
      <div className='text-center'>
        <h1 className='font-black text-5xl'>
          {error.message || "Someting went wrong"}
        </h1>

        <Button
          onClick={() => reset()}
          type='button'
          className='flex justify-center items-center m-auto mt-10 px-6 py-4 text-lg'
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
