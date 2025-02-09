export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto pt-16 px-4 animate-pulse">
      <div className="space-y-8">
        <div className="border-b border-white/10 pb-8">
          <div className="h-10 w-2/3 bg-gray-700 rounded mb-4" />
          <div className="h-6 w-full bg-gray-700 rounded" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-700 rounded" />
          <div className="h-4 w-5/6 bg-gray-700 rounded" />
          <div className="h-4 w-4/6 bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
} 