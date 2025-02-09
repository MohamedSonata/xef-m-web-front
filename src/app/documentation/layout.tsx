

import { PageLayout } from "@/components/layout/PageLayout";
import { DocsLayout } from '@/components/docs/DocsLayout';

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <DocsLayout>{children}</DocsLayout>
    </PageLayout>
  );
} 