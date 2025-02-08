import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DocNavigation } from '@/components/docs/DocNavigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  try {
    const { slug } = await props.params;
    const doc = await getDocBySlug(slug);
    return {
      title: `${doc.title} - Xefro Mirror Documentation`,
      description: doc.description,
    };
  } catch {
    return {
      title: 'Not Found',
      description: 'The requested documentation page could not be found.',
    };
  }
}

export default async function DocumentationPage(props: PageProps) {
  try {
    const { slug } = await props.params;
    await props.searchParams;
    const doc = await getDocBySlug(slug);

    const DocComponent = doc.component;
    
    return (
      <article className="max-w-4xl mx-auto pt-16 px-4">
        <div className="space-y-8">
          <header className="border-b border-white/10 pb-8">
            <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>
            <p className="text-lg text-[var(--text-secondary)]">{doc.description}</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--text-secondary)]">
              <time>Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}</time>
            </div>
          </header>

          <div className="markdown-content space-y-6">
            <DocComponent />
          </div>
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
