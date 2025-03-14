'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Alert } from '@/components/ui/Alert';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Smartphone, Monitor, Wifi, Check, Zap, Layout, Shield } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const iconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const features = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Multi-Device Support",
    description: "Mirror screens from iOS, Android, Windows, and macOS devices",
    metrics: ["iOS Support", "Android Support", "Windows App", "macOS App"]
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "4K Resolution",
    description: "Crystal clear mirroring with support for up to 4K resolution",
    metrics: ["60 FPS", "HDR Support", "4K Quality", "Auto-adjust"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Zero Lag",
    description: "Advanced optimization for real-time mirroring with minimal latency",
    metrics: ["Low Latency", "Buffer Control", "Frame Sync", "Audio Sync"]
  }
];

// Custom component to handle metadata
const Metadata = ({ title, description }: { title: string; description: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title, description]);
  return null;
};

export default function ScreenMirroringDoc() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16"
    >
      <Metadata
        title="Screen Mirroring - Xefro Mirror"
        description="Learn how to use Xefro Mirror's screen mirroring features for seamless device connectivity"
      />

      <motion.section 
        variants={cardVariants}
        
        className="text-center space-y-6"
      >
        {/* <h2 className="text-4xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
          Screen Mirroring
        </h2> */}
        
        <p className="text-xl text-white-500 max-w-2xl mx-auto"
        style={{ color: '#FFFFFFFF' ,fontWeight:'bold'}}
        >
          
          Mirror your device&apos;s screen to any compatible display with ultra-low latency and crystal-clear quality.
        </p>

        <Alert variant="info" className="text-orange-500 max-w-3xl mx-auto border-[var(--gradient-start)]/30 bg-[var(--card-purple)]/10"
        
        >
          <Wifi className="inline-block mr-2" />
          For optimal performance, ensure both devices are connected to the same Wi-Fi network.
        </Alert>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        {/* Features Section Comps */}
        {features.map((feature) => (
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
                     hover:shadow-[0_0_15px_-8px_var(--gradient-end)]
                     hover:border hover:border-[var(--gradient-end)]"
          >
            <div className="relative z-10 space-y-4">
              <motion.div 
                variants={iconVariants}
                className="text-[var(--gradient-mid)] p-2 rounded-lg 
                          bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/5"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[var(--gradient-end)]">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{feature.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {feature.metrics.map((metric) => (
                  <div 
                    key={metric}
                    className="text-sm text-[var(--text-secondary)] flex items-center gap-2
                             transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)]" />
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.section 
        variants={cardVariants}
        className="space-y-8 bg-[var(--card-purple)]/10 rounded-xl p-8 border border-[var(--gradient-start)]/20"
      >
        {/* Quick Start Guide */}
        <h3 className="text-2xl font-bold">Quick Start Guide</h3>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Install Xefro Mirror",
              description: "Download and install Xefro Mirror on both your source device and target display.",
              command: "Make sure you have the latest version of Xefro Mirror installed to get the best experience."
            },
            {
              step: 2,
              title: "Connect Devices",
              description: "Launch Xefro Mirror and connect your devices using USB-Cable",
              command: "Once connected,Make Sure Enabling Developer Options on your Source Device and enable USB Debugging, you can start mirroring your screen."
            },
            {
              step: 3,
              title: "Start Mirroring",
              description: "Begin mirroring your screen with customizable quality settings & Window Position,Keep Screen Awake,Enable Touches:",
              command: "Once connected, you can start mirroring your screen by tapping on the Source Device and select the Target Display And Click On 'START' Mirroring Button."

            }
          ].map((item) => (
            <motion.div
              key={item.step}
              variants={cardVariants}
              className="flex gap-4 items-start group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--gradient-start)] text-white flex items-center justify-center">
                {item.step}
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold group-hover:text-[var(--gradient-end)] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[var(--text-secondary)]">{item.description}</p>
                <CodeBlock language="bash">
                  {item.command}
                </CodeBlock>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
} 