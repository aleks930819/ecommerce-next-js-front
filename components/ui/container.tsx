import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  );
};

export default Container;
