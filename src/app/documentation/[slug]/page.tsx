/* eslint-disable @typescript-eslint/no-unused-vars */
import { Metadata } from 'next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
import { DOC_ROUTES, type DocRoute } from '@/constants/routes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DocNavigation } from '@/components/docs/DocNavigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from './loading';
import { DocContent } from '@/components/docs/DocContent';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  // Use DOC_ROUTES to ensure we only generate valid routes
  return Object.keys(DOC_ROUTES).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  
  if (!DOC_ROUTES[slug as DocRoute]) {
    return {
      title: 'Not Found',
      description: 'The requested documentation page could not be found.',
    };
  }

  const route = DOC_ROUTES[slug as DocRoute];
  return {
    title: `${route.label} - Xefro Mirror Documentation`,
    description: route.description,
  };
}

export default async function DocumentationPage(props: PageProps) {
  const { slug } = await props.params;
  
  return (
    <Suspense fallback={<Loading />}>
      <DocContent slug={slug} />
    </Suspense>
  );
}

// Add this to force dynamic behavior
export const dynamic = 'force-dynamic';
