import React from "react";

import { Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const SocialIncons = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-4", className)}>
      <button className='bg-black dark:bg-white dark:text-gray-600 text-white px-4 py-2 rounded-lg'>
        <Facebook size={24} />
      </button>
      <button className='bg-black dark:bg-white dark:text-gray-600 text-white px-4 py-2 rounded-lg'>
        <Instagram size={24} />
      </button>
    </div>
  );
};

export default SocialIncons;
