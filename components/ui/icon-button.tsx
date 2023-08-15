import { cn } from "@/lib/utils";

import React, { MouseEventHandler } from "react";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon: React.ReactNode;
}

const IconButton = ({
  onClick,
  className,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out",
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
