import { Metadata } from 'next';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { notFound } from 'next/navigation';
import { DocNavigation } from '@/components/docs/DocNavigation';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocPage({ params }: Props) {
  try {
    const resolePArams = await params;
    const doc = await getDocBySlug(resolePArams.slug);
    const allDocs = await getAllDocs();
    
    // Find current doc index
    const currentIndex = allDocs.findIndex(d => d.slug === resolePArams.slug);
    
    // Get prev and next docs
    const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : undefined;
    const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : undefined;

    return (
      <article className="max-w-4xl mx-auto pt-16 px-4">
        <div className="space-y-8">
          {/* Header */}
          <header className="border-b border-white/10 pb-8">
            <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>
            <p className="text-lg text-[var(--text-secondary)]">{doc.description}</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-[var(--text-secondary)]">
              <time>Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}</time>
            </div>
          </header>

          {/* Content */}
          <div 
            className="markdown-content space-y-6"
            dangerouslySetInnerHTML={{ __html: doc.htmlContent }} 
          />

          {/* Navigation */}
          <DocNavigation 
            prev={prevDoc ? {
              title: prevDoc.title,
              description: prevDoc.description,
              href: `/documentation/${prevDoc.slug}`
            } : undefined}
            next={nextDoc ? {
              title: nextDoc.title,
              description: nextDoc.description,
              href: `/documentation/${nextDoc.slug}`
            } : undefined}
          />
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolePArams =await params;
    const doc = await getDocBySlug(resolePArams.slug);
    
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