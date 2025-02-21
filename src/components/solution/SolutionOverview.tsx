'use client';

import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Shield, Users, Zap, Globe, Server, Lock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Device Control",
    description: "Remote device management with enterprise-grade security and access controls.",
    features: ["Screen mirroring", "Remote actions", "Secure connection", "Access logs"]
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Advanced Monitoring",
    description: "Comprehensive device monitoring and real-time data collection capabilities.",
    features: ["System metrics", "Performance tracking", "Event logging", "Status alerts"]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Powerful Actions",
    description: "Execute remote actions and manage devices with precision and reliability.",
    features: ["Partition dumping", "System commands", "File transfer", "Device control"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cross-Platform Support",
    description: "Seamless compatibility across different device types and operating systems.",
    features: ["Android support", "Multi-device", "Real-time sync", "Custom protocols"]
  }
];

export function SolutionOverview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Enterprise-Ready Solution
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Built for businesses that need reliable, secure, and scalable screen mirroring capabilities.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
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
                       hover:shadow-[0_0_15px_-8px_var(--gradient-mid)]"
            >
              <div className="relative z-10">
                <div className="text-[var(--gradient-mid)] p-3 rounded-lg 
                            bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/5
                            transition-colors duration-300 
                            group-hover:from-[var(--gradient-start)]/20 group-hover:to-[var(--gradient-end)]/10
                            inline-block mb-4"
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300
                             text-white group-hover:text-[var(--gradient-end)]">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">{benefit.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {benefit.features.map((feature, idx) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="text-sm text-[var(--text-secondary)] flex items-center gap-2
                               transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)]
                                   transition-transform duration-300 group-hover:scale-150" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 