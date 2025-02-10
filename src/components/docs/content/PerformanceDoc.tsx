/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Alert } from '@/components/ui/Alert';
import { Activity, Cpu, Clock,MemoryStick, Gauge, Battery, Smartphone, Zap } from 'lucide-react';
import {
  LineChart,
  Line,

  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

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

const performanceMetrics = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "CPU Usage",
    description: "Optimized CPU utilization for smooth performance",
    metrics: ["5-15% CPU Usage", "Multi-core Support", "Thread Management", "Process Priority"]
  },
  {
    icon: <MemoryStick className="w-8 h-8" />,
    title: "Memory Management",
    description: "Efficient memory handling for stable operation",
    metrics: ["150MB Base Usage", "Dynamic Allocation", "Cache Management", "Memory Cleanup"]
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Battery Impact",
    description: "Minimal battery consumption during operation",
    metrics: ["Power Optimization", "Background Tasks", "Sleep Mode", "Energy Profiles"]
  }
];

// Sample performance data for charts
const performanceData = [
  { time: '0s', cpu: 10, memory: 120, latency: 15 },
  { time: '10s', cpu: 15, memory: 150, latency: 18 },
  { time: '20s', cpu: 12, memory: 140, latency: 16 },
  { time: '30s', cpu: 18, memory: 160, latency: 20 },
  { time: '40s', cpu: 14, memory: 145, latency: 17 },
];

const Metadata = ({ title, description }: { title: string; description: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title, description]);
  return null;
};

export default function PerformanceDoc() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16"
    >
      <Metadata
        title="Performance Metrics - Xefro Mirror"
        description="Understanding performance impacts and optimization in Xefro Mirror"
      />

      <motion.section
        variants={cardVariants}
        className="text-center space-y-6"
      >
        <p className="text-xl text-white-500 max-w-2xl mx-auto"
          style={{ color: '#FFFFFFFF', fontWeight: 'bold' }}
        >
          Monitor and optimize performance metrics for the best experience with Xefro Mirror
        </p>

        <Alert variant="info" className="text-orange-500 max-w-3xl mx-auto border-[var(--gradient-start)]/30 bg-[var(--card-purple)]/10">
          <Activity className="inline-block mr-2" />
          Performance metrics are collected locally and never shared without your consent
        </Alert>
      </motion.section>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
        {performanceMetrics.map((metric) => (
          <motion.div
            key={metric.title}
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
                {metric.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[var(--gradient-end)]">
                {metric.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{metric.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {metric.metrics.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-[var(--text-secondary)] flex items-center gap-2
                             transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)]" />
                    {item}
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
        <h3 className="text-2xl font-bold">Real-time Performance Metrics</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#8884d8" name="CPU %" />
              <Line type="monotone" dataKey="memory" stroke="#82ca9d" name="Memory (MB)" />
              <Line type="monotone" dataKey="latency" stroke="#ffc658" name="Latency (ms)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      <motion.section
        variants={cardVariants}
        className="space-y-8 bg-[var(--card-purple)]/10 rounded-xl p-8 border border-[var(--gradient-start)]/20"
      >
        <h3 className="text-2xl font-bold">Optimization Tips</h3>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Screen Mirroring Optimization",
              description: "Optimize screen mirroring performance with these settings:",
              command: "Resolution: 1080p | Framerate: 30fps | Quality: Balanced | Encoding: Hardware"
            },
            {
              step: 2,
              title: "File Transfer Performance",
              description: "Maximize file transfer speeds:",
              command: "Buffer Size: 8MB | Concurrent Transfers: 2 | Compression: Enabled"
            },
            {
              step: 3,
              title: "Background Processes",
              description: "Manage background processes for better performance:",
              command: "Close unused apps | Disable unnecessary services | Clear app cache regularly"
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