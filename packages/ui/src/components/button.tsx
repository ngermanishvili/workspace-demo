import React from 'react';
import { cn } from '../utils/utils';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'default' | 'sm' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
                    variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
                    variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
                    variant === 'outline' && 'border border-gray-300 hover:bg-gray-100',
                    size === 'default' && 'h-10 py-2 px-4 text-sm',
                    size === 'sm' && 'h-8 px-3 text-xs',
                    size === 'lg' && 'h-12 px-6 text-base',
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';