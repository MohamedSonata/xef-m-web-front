export default function Footer() {
  return (
    <footer className="w-full bg-[var(--card-purple)]/30 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-center items-center">
          <p className="text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Xefro Dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 