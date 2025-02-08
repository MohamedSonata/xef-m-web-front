/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion } from 'framer-motion';
import { FolderOpen, Copy, Trash2, Edit3, ExternalLink } from 'lucide-react';

const fileFeatures = [
  {
    icon: <FolderOpen className="w-8 h-8" />,
    title: "File Operations",
    description: "Complete control over your files with intuitive management tools.",
    capabilities: [
      "Move files between folders",
      "Copy files across devices",
      "Delete unwanted content",
      "Create new directories"
    ]
  },
  {
    icon: <Edit3 className="w-8 h-8" />,
    title: "External Editing",
    description: "Edit files directly using your preferred desktop applications.",
    capabilities: [
      "Open in default apps",
      "Auto-sync changes",
      "Version history",
      "Quick preview"
    ]
  },
  {
    icon: <ExternalLink className="w-8 h-8" />,
    title: "Cross-Device Access",
    description: "Seamless access to your mobile files from any device.",
    capabilities: [
      "Wireless transfer",
      "Secure access",
      "Multiple devices",
      "Real-time sync"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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

export function FileManagement() {
  return (
    <section className="py-20 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Advanced File Management
          </motion.h2>
          <motion.p 
            className="text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Manage your mobile files with desktop-like convenience and powerful features.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fileFeatures.map((feature, index) => (
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
              <div className="relative z-10">
                <motion.div 
                  className="text-[var(--gradient-mid)] mb-4
                            bg-gradient-to-br from-[var(--gradient-start)]/10 to-[var(--gradient-end)]/5 p-2 rounded-lg
                            transition-colors duration-300 
                            group-hover:from-[var(--gradient-start)]/20 group-hover:to-[var(--gradient-end)]/10"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300
                             text-white group-hover:text-[var(--gradient-end)]">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
                    <motion.li 
                      key={capability}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="text-sm text-[var(--text-secondary)] flex items-center gap-2
                               transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)]
                                   transition-transform duration-300 group-hover:scale-150" />
                      {capability}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 