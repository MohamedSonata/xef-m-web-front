interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="w-full pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-[var(--gradient-start)] rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-0 right-4 w-72 h-72 bg-[var(--gradient-end)] rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-center">
            {title}
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto text-center">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
} 