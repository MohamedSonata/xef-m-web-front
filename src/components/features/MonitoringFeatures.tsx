'use client';

import { motion } from 'framer-motion';
import { Battery, MemoryStick, HardDrive, Wifi } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2
    }
  }
};

const monitoringFeatures = [
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Battery Analytics",
    description: "Real-time battery monitoring with health tracking, usage patterns, and smart notifications for optimal battery life.",
    metrics: ["Health Status", "Charging Cycles", "Usage Patterns", "Temperature"]
  },
  {
    icon: <MemoryStick className="w-8 h-8" />,
    title: "RAM Management",
    description: "Advanced memory monitoring and optimization to keep your device running smoothly.",
    metrics: ["Usage Stats", "App Memory", "Background Tasks", "Memory Cleanup"]
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Storage Insights",
    description: "Comprehensive storage analysis with smart recommendations for space optimization.",
    metrics: ["Space Usage", "Large Files", "Unused Apps", "Cache Analysis"]
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Network Monitor",
    description: "Track network performance and data usage with detailed insights and alerts.",
    metrics: ["Speed Test", "Data Usage", "Signal Strength", "Connection Quality"]
  }
];

export function MonitoringFeatures() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Advanced Device Monitoring
          </motion.h2>
          <motion.p 
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get real-time insights into your device&apos;s performance with our comprehensive monitoring tools.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {monitoringFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-[var(--card-purple)]/10 backdrop-blur-sm rounded-xl p-6 
                         transition-all duration-500
                         before:absolute before:inset-0 before:rounded-xl before:-z-10
                         before:bg-gradient-to-r before:from-transparent before:via-[var(--gradient-start)]/10 before:to-transparent
                         before:opacity-0 before:transition-opacity before:duration-500
                         hover:before:opacity-100
                         after:absolute after:inset-[1px] after:rounded-xl after:-z-10
                         after:bg-[var(--background)] after:transition-all
                         hover:shadow-[0_0_15px_-8px_var(--gradient-mid)]
                         hover:scale-[1.02]"
            >
              <div className="relative z-10 flex items-start gap-4">
                <motion.div 
                  className="text-[var(--gradient-mid)] p-2 rounded-lg 
                            bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/5
                            transition-colors duration-300 
                            group-hover:from-[var(--gradient-start)]/20 group-hover:to-[var(--gradient-end)]/10"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {feature.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300
                               text-white group-hover:text-[var(--gradient-end)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-4">{feature.description}</p>
                  <motion.div 
                    className="grid grid-cols-2 gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    {feature.metrics.map((metric, idx) => (
                      <motion.div 
                        key={metric}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="text-sm text-[var(--text-secondary)] flex items-center gap-2
                                 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)] 
                                     transition-transform duration-300 group-hover:scale-150" />
                        {metric}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 