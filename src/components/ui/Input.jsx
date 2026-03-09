import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
            {...props}
        />
    );
});
Input.displayName = "Input";
