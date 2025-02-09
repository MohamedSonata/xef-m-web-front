'use client';
import { DOC_ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'getting-started', title: DOC_ROUTES['getting-started'].label },
      { slug: 'screen-mirroring', title: DOC_ROUTES['screen-mirroring'].label },
      { slug: 'file-transfer', title: DOC_ROUTES['file-transfer'].label },
      { slug: 'device-control', title: DOC_ROUTES['device-control'].label },
    ]
  },
  {
    title: 'Documentation',
    items: [
      { slug: 'features', title: DOC_ROUTES['features'].label },
      { slug: 'guides', title: DOC_ROUTES['guides'].label },
      { slug: 'troubleshooting', title: DOC_ROUTES['troubleshooting'].label },
      { slug: 'performance', title: DOC_ROUTES['performance'].label },
    ]
  }
] as const;

export function DocSidebar() {
  const pathname = usePathname();
  const currentSlug = pathname.split('/').pop();

  return (
    <div className="w-full max-w-[14rem] flex-shrink-0">
      <nav className="sticky top-24 flex flex-col gap-8">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="font-medium text-[var(--text-secondary)]">
              {section.title}
            </h4>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <Link
                  key={item.slug}
                  href={DOC_ROUTES[item.slug].path}
                  className={cn(
                    'rounded px-3 py-1.5 text-[0.9375rem] transition-colors',
                    currentSlug === item.slug
                      ? 'bg-[var(--accent)] text-[var(--accent-foreground)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text)]'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}