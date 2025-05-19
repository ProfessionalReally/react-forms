import React from "react";

type ButtonProps = {
    type?: 'submit' | 'button';
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({type = "submit", className = "", children, ...props}, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                {...props}
                className={
                    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " +
                    "font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:cursor-not-allowed " +
                    "disabled:opacity-50 " +
                    className
                }
            >
                {children}
            </button>
        );
    }
);


