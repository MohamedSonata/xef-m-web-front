import { docs } from '@/lib/docs';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'getting-started', title: 'Introduction' },
      { slug: 'screen-mirroring', title: 'Screen Mirroring' },
      { slug: 'file-transfer', title: 'File Transfer' },
    ]
  },
  {
    title: 'Documentation',
    items: [
      { slug: 'features', title: 'Features' },
      { slug: 'guides', title: 'Guides' },
      { slug: 'troubleshooting', title: 'Troubleshooting' },
    ]
  }
];

// Validate that all routes in sections exist in docs
const validRoutes = Object.keys(docs);
sections.forEach(section => {
  section.items.forEach(item => {
    if (!validRoutes.includes(item.slug)) {
      console.warn(`Warning: Route '${item.slug}' in sidebar does not exist in docs`);
    }
  });
});

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
                  href={`/documentation/${item.slug}`}
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