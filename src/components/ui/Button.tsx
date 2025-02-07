'use client';

import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  asChild?: boolean;
}

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg relative overflow-hidden',
  {
    variants: {
      variant: {
        primary: [
          'text-white',
          'before:absolute before:inset-0',
          'before:bg-gradient-to-r before:from-[var(--gradient-start)] before:via-[var(--gradient-mid)] before:to-[var(--gradient-end)]',
          'hover:before:opacity-90',
          'after:absolute after:inset-0',
          'after:bg-gradient-to-r after:from-[var(--gradient-end)] after:via-[var(--gradient-mid)] after:to-[var(--gradient-start)]',
          'after:opacity-0 hover:after:opacity-100',
          'after:transition-opacity after:duration-300',
          'shadow-lg shadow-[var(--gradient-start)]/20'
        ],
        secondary: [
          'bg-[var(--button-secondary)]',
          'hover:bg-white/20',
          'text-white',
          'border',
          'border-white/20'
        ]
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, asChild = false, ...props }, ref) => {
    const [isChecking, setIsChecking] = useState(false);
    const Comp = asChild ? Slot : "button";

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.onClick) {
        setIsChecking(true);
        document.body.style.cursor = 'wait';
        try {
          await props.onClick(e);
        } finally {
          setIsChecking(false);
          document.body.style.cursor = 'default';
        }
      }
    };

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }), 
          (loading || isChecking) ? 'opacity-70 cursor-wait' : '',
          props.disabled ? 'opacity-50 cursor-not-allowed' : ''
        )}
        disabled={props.disabled || loading || isChecking}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">
          {(loading || isChecking) && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isChecking ? 'Checking...' : props.children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants }; 
