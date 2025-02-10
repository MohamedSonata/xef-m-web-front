export default function LoadingSimulator() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="group relative bg-[var(--card-purple)]/10 backdrop-blur-sm rounded-xl
                   transition-all duration-500
                   before:absolute before:inset-0 before:rounded-xl before:-z-10
                   before:bg-gradient-to-r before:from-transparent before:via-[var(--gradient-start)]/10 before:to-transparent
                   before:opacity-0 before:transition-opacity before:duration-500
                   hover:before:opacity-100
                   after:absolute after:inset-[1px] after:rounded-xl after:-z-10
                   after:bg-[var(--background)] after:transition-all
                   hover:shadow-[0_0_15px_-8px_var(--gradient-end)]
                   hover:border hover:border-[var(--gradient-end)]"
        >
          <div className="p-6 space-y-4">
            {/* Title skeleton with shimmer */}
            <div className="relative h-7 w-3/4 bg-[var(--gradient-start)]/5 rounded-md overflow-hidden">
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, var(--gradient-start)/10, transparent)',
                  animation: 'shimmer 2s infinite'
                }}
              />
            </div>
            
            {/* Description skeleton with shimmer */}
            <div className="space-y-2">
              <div className="relative h-4 w-full bg-[var(--gradient-start)]/5 rounded-md overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--gradient-start)/10, transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
              </div>
              <div className="relative h-4 w-5/6 bg-[var(--gradient-start)]/5 rounded-md overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--gradient-start)/10, transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
              </div>
              <div className="relative h-4 w-4/6 bg-[var(--gradient-start)]/5 rounded-md overflow-hidden">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--gradient-start)/10, transparent)',
                    animation: 'shimmer 2s infinite'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 