// import { IconBattery, IconStorage, IconNetwork, IconMemory }
//  from '../icons'; // You'll need to create these

export default function Features() {
  const features = [
    {
    //   icon: <IconBattery className="w-8 h-8" />,
      title: "Battery Monitoring",
      description: "Real-time battery health tracking and usage analytics with smart notifications."
    },
    {
    //   icon: <IconStorage className="w-8 h-8" />,
      title: "Storage Management",
      description: "Monitor storage usage, clean junk files, and optimize space with detailed insights."
    },
    {
    //   icon: <IconNetwork className="w-8 h-8" />,
      title: "Network Stats",
      description: "Track data usage, network speed, and connection quality in real-time."
    },
    {
    //   icon: <IconMemory className="w-8 h-8" />,
      title: "RAM Optimization",
      description: "Monitor and optimize memory usage for better device performance."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Advanced Device Monitoring
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Get complete control over your device with our comprehensive monitoring tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[var(--card-purple)]/10 backdrop-blur-sm 
                         rounded-xl p-6 
                         transition-all duration-500 ease-out
                         hover:transform hover:scale-105
                         before:absolute before:inset-0 before:rounded-xl
                         before:border before:border-transparent before:transition-all
                         before:duration-500 hover:before:border-[var(--gradient-start)]
                         after:absolute after:inset-0 after:rounded-xl
                         after:border after:border-transparent
                         hover:after:border-[var(--gradient-end)]
                         hover:after:delay-150"
            >
              <div className="relative z-10">
                <div className="mb-4 text-[var(--gradient-mid)]">
                  {/* {feature.icon} */}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[var(--gradient-end)] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm group-hover:text-white/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 