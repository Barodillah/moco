import React from 'react';

export const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-brand text-background hover:bg-brand-dark",
        secondary: "bg-brand-light/10 text-brand hover:bg-brand-light/20",
        outline: "border border-border hover:bg-background",
        ghost: "hover:bg-brand-light/10 hover:text-brand",
    };

    const sizes = {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 text-sm",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
    };

    return (
        <button
            ref={ref}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
});
Button.displayName = "Button";
