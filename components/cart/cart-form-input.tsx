import React from "react";

import { cn } from "@/lib/utils";

interface CartFormInputProps {
  label: string;
  inputId: string;
  placeholder: string;
  type?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const CartFormInput = ({
  label,
  inputId,
  labelClassName,
  inputClassName,
  placeholder,
  type = "text",
}: CartFormInputProps) => {
  return (
    <div>
      <label
        className='block uppercase tracking-wide  text-xs font-bold mb-2'
        htmlFor={inputId}
      >
        {label}
      </label>
      <input
        className='appearance-none block w-full bg-white dark:bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        id={inputId}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CartFormInput;
