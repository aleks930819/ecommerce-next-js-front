"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";

import IconButton from "./icon-button";
import Button from "./button";
import Filter from "./filter";

interface MobilerFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobilerFilter = ({ sizes, colors }: MobilerFilterProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className='lg:hidden'>
      <Button
        className='flex items-center justify-between w-full
        dark:bg-gray-800  dark:hover:bg-gray-800 text-lg
        '
        onClick={toggleOpen}
      >
        Filters
        <Plus size={20} />
        <Dialog
          open={open}
          onClose={toggleOpen}
          className='relative z-40 lg:hidden'
        >
          <div className='fixed inset-0 overflow-y-auto bg-black/50' />
          <div className='fixed inset-0 flex items-center justify-center z-50'>
            <Dialog.Panel
              className='relative ml-auto flex h-full w-full max-w-xs
             flex-col overflow-y-auto
              dark:bg-gray-800
             bg-white py-4 pb-6 shadow-xl
            '
            >
              <div className='flex items-center justify-between px-4'>
                <IconButton
                  className='dark:bg-gray-100 dark:hover:bg-gray-300 bg-black text-white dark:text-gray-800  hover:bg-black/80'
                  onClick={toggleOpen}
                  icon={<X size={20} />}
                />
              </div>

              <div className='flex flex-col gap-4 px-4 mt-4'>
                <Filter name='Sizes' valueKey='sizeId' data={sizes} />
                <Filter name='Colors' valueKey='colorId' data={colors} />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Button>
    </div>
  );
};

export default MobilerFilter;
