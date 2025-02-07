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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <DocCard 
              key={doc.slug}
              title={doc.title}
              description={doc.description}
              href={`/documentation/${doc.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 