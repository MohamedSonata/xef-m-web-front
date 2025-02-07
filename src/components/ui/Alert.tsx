import React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'error' | 'success';
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ 
  children, 
  variant = 'info',
  className 
}) => {
  return (
    <div className={cn(
      "p-4 rounded-lg border",
      {
        'bg-blue-500/10 border-blue-500/20 text-blue-700': variant === 'info',
        'bg-yellow-500/10 border-yellow-500/20 text-yellow-700': variant === 'warning',
        'bg-red-500/10 border-red-500/20 text-red-700': variant === 'error',
        'bg-green-500/10 border-green-500/20 text-green-700': variant === 'success',
      },
      className
    )}>
      {children}
    </div>
  );
}; 