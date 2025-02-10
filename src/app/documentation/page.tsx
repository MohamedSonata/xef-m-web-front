import { Metadata } from 'next';
import React from 'react';
import { PageHero } from "@/components/shared/PageHero";
import { DocCard } from "@/components/docs/DocCard";
import { getAllDocs } from '@/lib/docs';

export const metadata: Metadata = {
  title: 'Documentation - Xefro Mirror',
  description: 'Learn how to use Xefro Mirror with our comprehensive documentation.',
};

export default async function DocumentationPage() {
  const docs = await getAllDocs();

  return (
    <div className="pt-16">
      <PageHero 
        title="Documentation"
        description="Learn how to use Xefro Mirror with our comprehensive documentation."
      />
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <div
              key={doc.slug}
              className="group relative bg-[var(--card-purple)]/10 backdrop-blur-sm rounded-xl
                       transition-all duration-500
                       before:absolute before:inset-0 before:rounded-xl before:-z-10
                       before:bg-gradient-to-r before:from-transparent before:via-[var(--gradient-start)]/10 before:to-transparent
                       before:opacity-0 before:transition-opacity before:duration-500
                       hover:before:opacity-100
                       after:absolute after:inset-[1px] after:rounded-xl after:-z-10
                       after:bg-[var(--background)] after:transition-all
                       hover:shadow-[0_0_15px_-8px_var(--gradient-end)]
                       hover:border hover:border-[var(--gradient-end)]"
            >
              <DocCard 
                title={doc.title}
                description={doc.description}
                href={`/documentation/${doc.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 