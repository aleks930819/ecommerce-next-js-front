import { Banknote, Home, Truck } from "lucide-react";
import CartFormInput from "./cart-form-input";
import CartFormCheckBox from "./cart-form-check-box";

const CartForm = () => {
  return (
    <form className='w-full max-w-lg mb-4'>
      <div className='flex items-center mb-4'>
        <h2>SHIPPING ADDRESS</h2>
        <span className='ml-2 mb-auto'>
          <Home size={22} />
        </span>
      </div>

      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3'>
          <CartFormInput
            inputId='grid-first-name'
            label='First Name'
            placeholder='John'
          />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <CartFormInput
            inputId='grid-last-name'
            label='Last Name'
            placeholder='Doe'
          />
        </div>
      </div>
      <div className='w-full   mb-4'>
        <CartFormInput
          inputId='grid-address'
          label='Address'
          placeholder='2631 Diamond Cove'
        />
      </div>
      <div className='w-full   mb-4'>
        <CartFormInput
          inputId='grid-phone'
          label='Phone'
          placeholder='+322 322 55'
          type='phone'
        />
      </div>

      <div className='flex items-center mt-10 mb-4 '>
        <h2>SHIPPING METHODS</h2>
        <span className='ml-2 mb-auto'>
          <Truck size={22} />
        </span>
      </div>
      <div className='flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700'>
        <CartFormCheckBox
          htmlFor='bordered-checkbox-1'
          label='Standard Shipping (Free)'
        />
      </div>
      <div className='flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700'>
        <CartFormCheckBox
          htmlFor='bordered-checkbox-2'
          label='Express Shipping (+$12)'
        />
      </div>

      <div className='flex items-center mt-10 mb-4 '>
        <h2>PAYING METHODS</h2>
        <span className='ml-2 mb-auto'>
          <Banknote size={22} />
        </span>
      </div>

      <div className='flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700'>
        <CartFormCheckBox
          htmlFor='bordered-checkbox-3'
          label='With Credit Card'
        />
      </div>
      <div className='flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700'>
        <CartFormCheckBox
          htmlFor='bordered-checkbox-4'
          label='When Receiving the Package'
        />
      </div>
    </form>
  );
};

export default CartForm;
