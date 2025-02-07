import Link from 'next/link';

interface DocCardProps {
  title: string;
  description: string;
  href: string;
}

export function DocCard({ title, description, href }: DocCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </Link>
  );
} 