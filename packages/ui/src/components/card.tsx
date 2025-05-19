import React from 'react';
import { cn } from '../utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden',
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('p-4 border-b border-gray-200', className)}
                {...props}
            />
        );
    }
);
CardHeader.displayName = 'CardHeader';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('p-4', className)}
                {...props}
            />
        );
    }
);
CardBody.displayName = 'CardBody';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('p-4 border-t border-gray-200', className)}
                {...props}
            />
        );
    }
);
CardFooter.displayName = 'CardFooter';