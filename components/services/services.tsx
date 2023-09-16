import React from "react";
import { Truck, Undo2, CreditCard, MessagesSquare } from "lucide-react";

const ServicesItem = ({
  icon,
  text,
  mainHeading,
}: {
  icon: React.ReactNode;
  text: string;
  mainHeading: string;
}) => {
  return (
    <div className='flex flex-col  items-center '>
      <div className='flex items-center justify-center  mb-4'>{icon}</div>
      <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2'>
        {mainHeading}
      </h3>
      <p className='text-gray-700 dark:text-gray-200'>{text}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className='py-6 lg:py-12 bg-gray-200 dark:bg-gray-800  mb-20 lg:mx-6'>
      <div className='max-w-7xl mx-auto w-full px-2 lg:px-6'>
        <ul className='flex flex-col lg:flex-row lg:justify-between  items-center gap-5'>
          <li className=''>
            <ServicesItem
              icon={<Truck size={50} />}
              mainHeading='Free shipping'
              text='Free shipping on orders over $100'
            />
          </li>

          <li className=''>
            <ServicesItem
              icon={<Undo2 size={50} />}
              mainHeading='Returns'
              text='Free returns within 30 days'
            />
          </li>

          <li className=''>
            <ServicesItem
              icon={<CreditCard size={50} />}
              mainHeading='Secure payment'
              text='Secure payment with Stripe'
            />
          </li>

          <li className=''>
            <ServicesItem
              mainHeading='Customer support'
              icon={<MessagesSquare size={50} />}
              text='Customer support via email'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
