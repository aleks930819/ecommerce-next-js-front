import React from "react";

// TODO: fix the types
interface CartFormCheckBoxProps {
  name?: string;
  label?: string;
  value?: string;
  htmlFor?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CartFormCheckBox = ({
  label,
  htmlFor,
  checked,
  onChange,
}: CartFormCheckBoxProps) => {
  return (
    <>
      <input
        id={htmlFor}
        type='checkbox'
        defaultValue=''
        checked={checked}
        onChange={onChange}
        name='bordered-checkbox'
        className='w-4 h-4  bg-gray-100 border-gray-300 roundeddark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor={htmlFor}
        className='w-full py-4 ml-2 text-base font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
    </>
  );
};

export default CartFormCheckBox;
