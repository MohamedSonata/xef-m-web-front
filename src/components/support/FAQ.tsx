'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What is Xefro Mirror?",
    answer: "Xefro Mirror is a professional screen mirroring solution that allows you to mirror your phone screen to your PC with advanced monitoring capabilities."
  },
  {
    question: "Which devices are supported?",
    answer: "Xefro Mirror supports both Android and iOS devices. For Android, version 5.0 and above is supported. For iOS, version 11.0 and above is supported."
  },
  {
    question: "How do I install Xefro Mirror?",
    answer: "Download the app from our website, run the installer, and follow the setup wizard. You'll also need to install our mobile app from your device's app store."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, index) => (
        <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="font-medium">{item.question}</span>
            <ChevronDown 
              className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="overflow-hidden"
              >
                <p className="p-4 pt-0 text-[var(--text-secondary)]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
} 