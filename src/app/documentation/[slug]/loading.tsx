export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto pt-16 px-4">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-8">
          <div className="h-10 w-2/3 bg-gray-700 rounded mb-4 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <div className="h-6 w-full bg-gray-700 rounded relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={`h-4 bg-gray-700 rounded relative overflow-hidden ${
                i === 0 ? 'w-full' : i === 1 ? 'w-5/6' : 'w-4/6'
              }`}
            >
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 