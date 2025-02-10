'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Alert } from '@/components/ui/Alert';
// import { CodeBlock } from '@/components/ui/CodeBlock';

const gettingStartedSteps = [
  {
    icon: '📥',
    title: 'Download and Install',
    description: 'Get the latest version of Xefro Mirror for your devices.',
    details: [
      'Visit the official website',
      'Choose the correct version for your OS',
      'Follow the installation instructions'
    ]
  },
  {
    icon: '🔗',
    title: 'Connect Your Devices',
    description: 'Ensure your devices are properly connected.',
    details: [
      'Use a USB cable or connect via Wi-Fi',
      'Enable necessary permissions on your devices',
      'Check for stable connections'
    ]
  },
  {
    icon: '🚀',
    title: 'Start Using Xefro Mirror',
    description: 'Begin mirroring and controlling your devices.',
    details: [
      'Open the app on both devices',
      'Select the device you want to mirror',
      'Adjust settings for optimal performance'
    ]
  }
];

const overviewContent = {
  icon: '🔍',
  title: 'Overview',
  description: 'Xefro Mirror allows you to seamlessly mirror and control your devices.',
  details: [
    'Follow our getting started guides to learn about all the features and capabilities.',
    'After installation, check out our features section to learn about:',
    'Screen Mirroring',
    'Device Control',
    'File Transfer',
    'Advanced Settings'
  ]
};

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

export default function GettingStartedDoc() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div 
      variants={cardVariants} className="">
        {/* <h1 className="text-4xl font-bold mb-4">Getting Started</h1> */}
        <p className="text-xl text-white-500 font-bold">
          Everything you need to know to get started with Xefro Mirror.
        </p>
      </motion.div>

      <Alert variant="info" className="text-orange-500 max-w-3xl mx-auto border-[var(--gradient-start)]/30 bg-[var(--card-purple)]/10">
        Welcome to Xefro Mirror! Let&apos;s get you set up with the basics.
      </Alert>

      <motion.div variants={containerVariants} className="grid gap-6 md:grid-cols-3">
        {gettingStartedSteps.map((step, index) => (
          <motion.div
            key={index}
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
              <div className="text-3xl">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white group-hover:text-[var(--gradient-end)]">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{step.description}</p>
              <ul className="list-disc pl-5 text-[var(--text-secondary)]">
                {step.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Overview Section Component */}
      <motion.div variants={cardVariants} className="group relative bg-[var(--card-purple)]/10 backdrop-blur-sm rounded-xl p-6 mt-12">
        <div className="relative z-10 space-y-4">
          <div className="text-3xl">{overviewContent.icon}</div>
          <h2 className="text-2xl font-bold text-white group-hover:text-[var(--gradient-end)]">
            {overviewContent.title}
          </h2>
          <p className="text-[var(--text-secondary)]">{overviewContent.description}</p>
          <ul className="list-disc pl-5 text-[var(--text-secondary)]">
            {overviewContent.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
} 