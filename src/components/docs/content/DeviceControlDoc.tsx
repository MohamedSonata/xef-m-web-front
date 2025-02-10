'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';
import { FaSyncAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CodeBlock } from '@/components/ui/CodeBlock';
import Image from 'next/image';

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

export default function DeviceControlDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">DeviceControlDoc Guide</h2>
      <Alert variant="info">
        Learn how to DeviceControlDoc files between devices using Xefro Mirror
      </Alert>
      <div className="space-y-8">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaSyncAlt className="mr-2" /> Basic DeviceControlDoc
            </h3>
            <p>
              Follow these simple steps to seamlessly transfer your files between devices. 
              Ensure both devices are connected to the same network for optimal performance.
            </p>
          </motion.div>
        </section>
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaCogs className="mr-2" /> Advanced Features
            </h3>
            <p>
              Discover the advanced capabilities of DeviceControlDoc, including 
              encrypted transfers, multi-device support, and more. Customize your 
              settings to enhance your file transfer experience.
            </p>
          </motion.div>
        </section>
      </div>

      <motion.section 
        variants={cardVariants}
        className="space-y-8 bg-[var(--card-purple)]/10 rounded-xl p-8 border border-[var(--gradient-start)]/20"
      >
        <h3 className="text-2xl font-bold">Quick Start Guide</h3>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Install DeviceControlDoc",
              description: "Download and install DeviceControlDoc on both your source device and target display.",
              command: "Ensure you have the latest version of DeviceControlDoc installed for the best experience.",
              image: "/images/xefro_mirror_video_thumb.png"
            },

            {
              step: 2,
              title: "Connect Devices",
              description: "Launch DeviceControlDoc and connect your devices using a secure connection.",
              command: "Once connected, you can start transferring your files.",
              image: "/images/xefro_mirror_video_thumb.png"
            },
            {
              step: 3,
              title: "Start Transfer",
              description: "Begin transferring your files with customizable settings.",
              command: "Select the files you want to transfer and click 'Start'.",
              image: "/images/xefro_mirror_video_thumb.png"
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
                <Image 
                  src={item.image} 
                  alt="Description" 
                  className="rounded-lg shadow-md" 
                  width={500}
                  height={300}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 