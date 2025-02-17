'use client';

import { useState, useEffect } from 'react';
import ChatPage from '@/app/xefro_ai/page';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // After first render, set isFirstLoad to false
    setIsFirstLoad(false);
  }, []);

  const containerVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Floating Button Container */}
      <motion.div
        className="fixed bottom-6 right-6 flex items-center gap-2 z-50"
        variants={containerVariants}
        initial={isFirstLoad ? "initial" : false}
        animate="animate"
      >
        {/* AI Text */}
        <motion.span 
          className="text-lg font-semibold bg-gradient-to-r from-[#57346b] via-[#7c3aed] to-[#f68f56] text-white pl-4 pr-4 py-1 rounded-full shadow-lg"
          variants={pulseVariants}
          animate="animate"
        >
          Xefro AI
        </motion.span>
        
        {/* Floating Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#57346b] via-[#7c3aed] to-[#f68f56] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:opacity-90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={pulseVariants}
          animate="animate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-     [80vh] relative"    
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              
              {/* Chat interface */}
           
                <ChatPage />
           
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 