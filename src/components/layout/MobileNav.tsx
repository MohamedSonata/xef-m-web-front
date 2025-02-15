'use client';
import Image from "next/image";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { NAV_ITEMS, ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  Zap,
  BookOpen,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Settings,
  MonitorSmartphone,
  MousePointer,
  FileSymlink,
  Download,
  Building2,
  CreditCard,
  HelpCircle
} from 'lucide-react';

// Helper function to get icon for a route
const getRouteIcon = (path: string) => {
  switch (path) {
    case '/features':
      return <Zap className="w-5 h-5" />;
    case '/solution':
      return <Building2 className="w-5 h-5" />;
    case '/pricing':
      return <CreditCard className="w-5 h-5" />;
    case '/documentation':
      return <BookOpen className="w-5 h-5" />;
    case '/support':
      return <HelpCircle className="w-5 h-5" />;
    default:
      return null;
  }
};

// Helper function to get icon for subroutes
const getSubRouteIcon = (path: string) => {
  switch (path) {
    case '/documentation/getting-started':
      return <Download className="w-4 h-4" />;
    case '/documentation/screen-mirroring':
      return <MonitorSmartphone className="w-4 h-4" />;
    case '/documentation/device-control':
      return <MousePointer className="w-4 h-4" />;
    case '/documentation/file-transfer':
      return <FileSymlink className="w-4 h-4" />;
    default:
      return null;
  }
};

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (path: string) => {
    setExpandedItems(prev =>
      prev.includes(path)
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button - Updated positioning */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 flex items-center justify-center"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-center items-center gap-1.5">
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
            className="fixed inset-0 z-40 bg-gradient-to-b from-[var(--gradient-start)] to-[var(--gradient-end)]"
          >
            {/* Add header with app name */}
            <div className="sticky top-0 backdrop-blur-sm z-10 p-4 border-b border-white/10 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
              <div className="flex items-center ">
                <Link

                  href={ROUTES.HOME}

                  className="flex items-center gap-2 relative group"

                >

                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />

                  <Image

                    src="/xef.png"

                    alt="Xefro Mirror Logo"

                    width={60}

                    height={60}

                    className="object-contain relative z-10"

                  />

                </Link>
                <Link href={ROUTES.HOME} className="text-2xl font-bold font-audiowide uppercase ">

                  Xefro Mirror

                </Link>
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <motion.div
                    className="text-white/70"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </button> */}
              </div>
            </div>

            <nav className="flex flex-col p-8 pt-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.path} className="py-2">
                  <div
                    className={cn(
                      "flex items-center justify-between py-2.5 px-3 rounded-lg transition-all duration-200",
                      item.subRoutes && "cursor-pointer hover:bg-white/5",
                      !item.subRoutes && "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                    onClick={() => item.subRoutes && toggleExpanded(item.path)}
                  >
                    <Link
                      href={item.path}
                      onClick={(e) => {
                        if (item.subRoutes) {
                          e.preventDefault();
                        } else {
                          setIsOpen(false);
                        }
                      }}
                      className="flex items-center gap-3 flex-1"
                    >
                      <span className="text-white/70">
                        {getRouteIcon(item.path)}
                      </span>
                      <span className="text-sm font-medium text-white/70 hover:text-white">
                        {item.label}
                      </span>
                    </Link>

                    {item.subRoutes && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-white/50 transition-transform duration-200",
                          expandedItems.includes(item.path) && "rotate-180"
                        )}
                      />
                    )}
                  </div>

                  {item.subRoutes && (
                    <div className={cn(
                      "overflow-hidden transition-all duration-200 ml-4",
                      expandedItems.includes(item.path)
                        ? "max-h-96 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    )}>
                      {item.subRoutes.map((subRoute) => (
                        <Link
                          key={subRoute.path}
                          href={subRoute.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center py-2.5 px-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg"
                        >
                          <span className="mr-3 text-white/70">
                            {getSubRouteIcon(subRoute.path)}
                          </span>
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