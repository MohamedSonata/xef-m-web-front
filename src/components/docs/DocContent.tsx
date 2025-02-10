import { getDocBySlug } from '@/lib/docs';
import { DOC_ROUTES, type DocRoute } from '@/constants/routes';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DocContentProps {
  slug: string;
}

export async function DocContent({ slug }: DocContentProps) {
//   // Add artificial delay to simulate loading (remove in production)
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
  const doc = await getDocBySlug(slug);
  
  if (!DOC_ROUTES[slug as DocRoute]) {
    notFound();
  }

  const DocComponent = doc.component;

  // Determine the current, next, and previous routes
  const routeKeys = Object.keys(DOC_ROUTES);
  const currentIndex = routeKeys.indexOf(slug);
  const prevSlug = currentIndex > 0 ? routeKeys[currentIndex - 1] : null;
  const nextSlug = currentIndex < routeKeys.length - 1 ? routeKeys[currentIndex + 1] : null;
  const prevTitle = prevSlug ? DOC_ROUTES[prevSlug as DocRoute].label : '';
  const nextTitle = nextSlug ? DOC_ROUTES[nextSlug as DocRoute].label : '';

  return (
    <article className="max-w-4xl mx-auto pt-16 px-4">
      <div className="mb-5 space-y-8">
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

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 mb-32">
          <Link
            href={prevSlug ? `/documentation/${prevSlug}` : '#'}
            className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 ${
              !prevSlug ? 'opacity-50 cursor-not-allowed' : ''
            } w-full sm:w-auto justify-center sm:justify-start`}
            aria-disabled={!prevSlug}
          >
            <span className="mr-2">← Previous</span>
            <span className="text-xs text-gray-200 truncate max-w-[100px] sm:max-w-[150px]">
              {prevTitle}
            </span>
          </Link>
          <Link
            href={nextSlug ? `/documentation/${nextSlug}` : '#'}
            className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150 ${
              !nextSlug ? 'opacity-50 cursor-not-allowed' : ''
            } w-full sm:w-auto justify-center sm:justify-start`}
            aria-disabled={!nextSlug}
          >
            <span className="mr-2">Next →</span>
            <span className="text-xs text-gray-200 truncate max-w-[100px] sm:max-w-[150px]">
              {nextTitle}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
} 