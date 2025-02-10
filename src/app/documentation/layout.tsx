import { PageLayout } from "@/components/layout/PageLayout";
import { DocsLayout } from '@/components/docs/DocsLayout';
import { Suspense } from 'react';
import Loading from './[slug]/loading';

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <DocsLayout>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </DocsLayout>
    </PageLayout>
  );
} 