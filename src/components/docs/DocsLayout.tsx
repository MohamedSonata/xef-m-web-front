'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { 
  BookOpen, 
  Zap, 
  Settings,
  ChevronDown,
  MonitorSmartphone,
  MousePointer,
  FileSymlink,
  Menu,
  X
} from 'lucide-react';

interface DocNavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  items?: DocNavItem[];
}

interface DocSidebarItemProps {
  item: DocNavItem;
  level?: number;
}

const docNavItems: DocNavItem[] = [
  {
    title: 'Getting Started',
    href: '/documentation/getting-started',
    icon: <BookOpen className="w-5 h-8" />,
  },
  {
    title: 'Features',
    href: '/documentation/features',
    icon: <Zap className="w-5 h-5" />,
    items: [
      { 
        title: 'Screen Mirroring', 
        href: '/documentation/screen-mirroring',
        icon: <MonitorSmartphone className="w-4 h-4" />
      },
      { 
        title: 'Device Control', 
        href: '/documentation/device-control',
        icon: <MousePointer className="w-4 h-4" />
      },
      { 
        title: 'File Manager', 
        href: '/documentation/file-manager',
        icon: <FileSymlink className="w-4 h-4" />
      },
    ],
  },
  {
    title: 'Advanced',
    href: '/documentation/guides',
    icon: <Settings className="w-4 h-4" />,
    items: [
      { title: 'Performance', href: '/documentation/performance' },
      { title: 'Troubleshooting', href: '/documentation/troubleshooting' },
    ],
  },
];

const DocSidebarItem: React.FC<DocSidebarItemProps> = ({ item, level = 0 }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const hasItems = item.items && item.items.length > 0;
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={cn("flex flex-col", level > 0 && "ml-4")}>
      <div 
        onClick={() => hasItems && setIsExpanded(!isExpanded)}
        className={cn(
          "flex items-center justify-between py-2.5 px-3 rounded-lg transition-all duration-200",
          hasItems && "cursor-pointer hover:bg-white/5",
          isActive && !hasItems && "bg-white/10 text-white",
          !isActive && !hasItems && "text-white/70 hover:text-white hover:bg-white/5"
        )}
      >
        <Link
          href={item.href}
          className="flex items-center gap-3 flex-1"
          onClick={(e: React.MouseEvent) => hasItems && e.preventDefault()}
        >
          {item.icon && (
            <span className={cn(
              "transition-colors",
              isActive ? "text-white" : "text-white/70"
            )}>
              {item.icon}
            </span>
          )}
          <span className={cn(
            "text-sm font-medium",
            isActive ? "text-white" : "text-white/70 hover:text-white"
          )}>
            {item.title}
          </span>
        </Link>
        
        {hasItems && (
          <ChevronDown 
            className={cn(
              "w-4 h-4 text-white/50 transition-transform duration-200",
              isExpanded && "rotate-180"
            )} 
          />
        )}
      </div>
      
      {hasItems && item.items && (
        <div className={cn(
          "overflow-hidden transition-all duration-200",
          isExpanded ? "max-h-96 opacity-100 mt-1" : "max-h-0 opacity-0"
        )}>
          {item.items.map((subItem) => (
            <DocSidebarItem 
              key={subItem.href} 
              item={subItem} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--background)]">
      {/* Mobile menu button - shown only when sidebar is closed */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-24 left-4 z-40 lg:hidden bg-[var(--gradient-start)] p-2 rounded-lg shadow-lg hover:bg-[var(--gradient-start)]/80 transition-colors"
        >
          <Menu className="w-5 h-5 text-white/70" />
        </button>
      )}

      <div className="flex pt-20">
        {/* Sidebar */}
        <div className={cn(
          "w-72 border-r border-white/10",
          "fixed h-[calc(100vh-5rem)] top-20 z-30 transition-transform duration-300",
          "lg:translate-x-0 overflow-y-auto",
          isSidebarOpen ? "translate-x-0 bg-gradient-to-b from-[var(--gradient-start)] to-[var(--gradient-end)]" : "-translate-x-full"
        )}>
          <div className="sticky top-0 backdrop-blur-sm z-10 p-4 border-b border-white/10 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Documentation</h2>
              {/* Mobile menu button - shown only when sidebar is open */}
              {isSidebarOpen && (
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden p-2 rounded-lg bg-[var(--gradient-start)] hover:bg-[var(--gradient-start)]/80 bg-[var(--gradient-end)] transition-colors group"
                >
                  <X className="w-5 h-5 text-white/70 group-hover:rotate-90 transition-transform duration-200" />
                </button>
              )}
            </div>
          </div>
          <nav className="p-4 pt-2">
            {docNavItems.map((item) => (
              <DocSidebarItem key={item.href} item={item} />
            ))}
          </nav>
        </div>

        {/* Main content */}
        <main className={cn(
          "flex-1 transition-all duration-300",
          isSidebarOpen ? "lg:pl-72" : "lg:pl-0"
        )}>
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}; 
