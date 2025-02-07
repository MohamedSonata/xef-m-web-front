import React from 'react';
import { cn } from '@/lib/utils';

interface DocSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const DocSection: React.FC<DocSectionProps> = ({
  title,
  description,
  children,
  className
}) => {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}; 