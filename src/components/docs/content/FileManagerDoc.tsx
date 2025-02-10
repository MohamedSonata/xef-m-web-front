/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Alert } from '@/components/ui/Alert';
import { 
  Copy, 
  Trash2, 
  FolderOpen, 
  ExternalLink, 
  PlayCircle, 
  Scissors,
  Wifi,
  FileSearch
} from 'lucide-react';

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
    icon: <Copy className="w-8 h-8" />,
    title: "File Operations",
    description: "Basic and advanced file operations with intuitive interface",
    metrics: ["Copy/Paste", "Move Files", "Delete", "Rename"]
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Smart Browse",
    description: "Efficient file browsing with search and filter capabilities",
    metrics: ["Quick Search", "File Filter", "Sort Options", "Preview"]
  },
  {
    icon: <PlayCircle className="w-8 h-8" />,
    title: "Media Support",
    description: "Built-in media preview and playback functionality",
    metrics: ["Image Preview", "Video Player", "Audio Player", "Documents"]
  }
];

const Metadata = ({ title, description }: { title: string; description: string }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title, description]);
  return null;
};

export default function FileManagerDoc() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-16"
    >
      <Metadata
        title="File Manager - Xefro Mirror"
        description="Learn how to manage files between devices using Xefro Mirror's File Manager"
      />

      <motion.section 
        variants={cardVariants}
        className="text-center space-y-6"
      >
        <p className="text-xl text-white-500 max-w-2xl mx-auto"
          style={{ color: '#FFFFFFFF', fontWeight: 'bold' }}
        >
          Transfer and manage files between your devices seamlessly with advanced file management capabilities.
        </p>

        <Alert variant="info" className="text-orange-500 max-w-3xl mx-auto border-[var(--gradient-start)]/30 bg-[var(--card-purple)]/10">
          <Wifi className="inline-block mr-2" />
          Files are transferred securely over your local network for maximum speed and privacy.
        </Alert>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8"
      >
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
        <h3 className="text-2xl font-bold">File Management Guide</h3>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Connect Devices",
              description: "Ensure both devices are connected to the same network",
              command: "Open Xefro Mirror on both devices and verify network connection"
            },
            {
              step: 2,
              title: "Access File Manager",
              description: "Navigate to the File Manager section in Xefro Mirror",
              command: "Click on the File Manager icon in the navigation menu to start managing files"
            },
            {
              step: 3,
              title: "Transfer Files",
              description: "Select files and choose your desired operation:",
              command: "Copy, Move, Delete, or Open files with external apps. Drag and drop is supported for easy file transfer."
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