import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  description?: string;
}

interface DocNavigationProps {
  prev?: NavItem;
  next?: NavItem;
}

export function DocNavigation({ prev, next }: DocNavigationProps) {
  return (
    <div className="border-t border-white/10 mt-16 py-8">
      <div className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={prev.href}
            className={cn(
              "flex-1 group flex flex-col p-4 rounded-lg",
              "border border-white/10 hover:border-white/20",
              "transition-all duration-200 hover:bg-white/5"
            )}
          >
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </div>
            <p className="font-medium mt-2 group-hover:text-white">{prev.title}</p>
            {prev.description && (
              <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">
                {prev.description}
              </p>
            )}
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {next ? (
          <Link
            href={next.href}
            className={cn(
              "flex-1 group flex flex-col items-end p-4 rounded-lg text-right",
              "border border-white/10 hover:border-white/20",
              "transition-all duration-200 hover:bg-white/5"
            )}
          >
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <p className="font-medium mt-2 group-hover:text-white">{next.title}</p>
            {next.description && (
              <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">
                {next.description}
              </p>
            )}
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
} 