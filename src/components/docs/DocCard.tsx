import Link from 'next/link';

interface DocCardProps {
  title: string;
  description: string;
  href: string;
}

export function DocCard({ title, description, href }: DocCardProps) {
  return (
    <Link href={href} className="block p-6">
      <div className="relative z-10 space-y-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-[var(--gradient-end)]">
          {title}
        </h3>
        <p className="text-[var(--text-secondary)]">{description}</p>
        
        <div className="flex items-center text-sm text-[var(--text-secondary)] transition-transform duration-300 group-hover:translate-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)] mr-2" />
          Read more
        </div>
      </div>
    </Link>
  );
} 