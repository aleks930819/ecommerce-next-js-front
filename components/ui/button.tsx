import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, type = "button", className, ...props }, ref) => {
    const classes = cn(
      `flex justify-center items-center gap-2
    px-4 py-2 rounded-md bg-black text-white dark:bg-gray-800  text-sm font-medium  hover:bg-gray-900 transition-colors
     disabled:opacity-50 disabled:cursor-not-allowed`,
      className
    );

    return (
      <button
        aria-disabled={disabled}
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;

Button.displayName = "Button";
