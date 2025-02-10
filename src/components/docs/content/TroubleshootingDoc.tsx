'use client';
import React from 'react';
import { Alert } from '@/components/ui/Alert';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function TroubleshootingDoc() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Troubleshooting Guide</h2>
      <Alert variant="warning">
        If you encounter any issues while using our screen mirroring solution, 
        check these common problems and their solutions below.
      </Alert>

      <motion.section 
        variants={cardVariants}
        className="space-y-8 bg-[var(--card-purple)]/10 rounded-xl p-8 border border-[var(--gradient-start)]/20"
      >
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Connection Issues",
              items: [
                "Ensure both devices are connected to the same WiFi network",
                "Check if your firewall is blocking the connection",
                "Try restarting both devices",
                "Verify that screen sharing is enabled in your system settings"
              ]
            },
            {
              step: 2,
              title: "Performance Issues",
              items: [
                "Lower the screen resolution in the app settings",
                "Reduce frame rate if supported by your device",
                "Close background applications on both devices",
                "Check CPU and memory usage on your device"
              ]
            },
            {
              step: 3,
              title: "Audio Sync Issues",
              items: [
                "Check audio output settings on both devices",
                "Verify audio drivers are up to date",
                "Try toggling audio source in the app settings",
                "Adjust audio buffer size if available"
              ]
            }
          ].map((section) => (
            <motion.div
              key={section.step}
              variants={cardVariants}
              className="flex gap-4 items-start group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--gradient-start)] text-white flex items-center justify-center">
                {section.step}
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-semibold group-hover:text-[var(--gradient-end)] transition-colors">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-[var(--text-secondary)]">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--gradient-end)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Alert variant="info" className="mt-6">
        If you continue to experience issues after trying these solutions, 
        please contact our support team or check our community forums for additional help.
      </Alert>
    </div>
  );
} 