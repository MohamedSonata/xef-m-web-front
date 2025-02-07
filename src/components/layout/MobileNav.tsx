'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/routes';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-40 bg-[var(--background)]"
          >
            <nav className="flex flex-col p-8 pt-24">
              {NAV_ITEMS.map((item) => (
                <div key={item.path} className="py-2">
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-white/90"
                  >
                    {item.label}
                  </Link>
                  
                  {item.subRoutes && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.subRoutes.map((subRoute) => (
                        <Link
                          key={subRoute.path}
                          href={subRoute.path}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-[var(--text-secondary)] hover:text-white"
                        >
                          {subRoute.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 