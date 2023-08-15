"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

import IconButton from "@/components/ui/icon-button";

const ContactUsButton = () => {
  const [showContactUsMessage, setShowContactUsMessage] = useState(false);

  console.log(showContactUsMessage);
  return (
    <>
      <IconButton
        onMouseEnter={() => setShowContactUsMessage(true)}
        onMouseLeave={() => setShowContactUsMessage(false)}
        className='fixed z-90 bottom-8 left-8 dark:bg-gray-600 bg-black w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-black/80 hover:bg-gray-700 hover:drop-shadow-2xl hover:animate-bounce duration-300'
        icon={<Mail size={40} />}
      />

      {showContactUsMessage && (
        <div className='fixed z-90 bottom-8 left-8 dark:bg-gray-600 bg-black w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-black/80 hover:bg-gray-700 hover:drop-shadow-2xl hover:animate-bounce duration-300'>
          <p className='text-white'>Contact Us</p>
        </div>
      )}
    </>
  );
};

export default ContactUsButton;
