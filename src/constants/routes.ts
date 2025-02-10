type Route = {
  path: string;
  label: string;
  description?: string;
  icon?: string;
  isExternal?: boolean;
  subRoutes?: Route[];
};

export const ROUTES = {
  HOME: '/',
  FEATURES: '/features',
  SOLUTION: '/solution',
  PRICING: '/pricing',
  DOCUMENTATION: '/documentation',
  DOWNLOAD: '/download',
  SUPPORT: '/support',
} as const;

export const NAV_ITEMS: Route[] = [

  { 
    path: ROUTES.FEATURES, 
    label: "Features",
    description: "Discover all powerful features",
  },
  { 
    path: ROUTES.SOLUTION, 
    label: "Solution",
    description: "Enterprise solutions",
  },
  { 
    path: ROUTES.PRICING, 
    label: "Pricing",
    description: "Plans and pricing",
  },
  // { 
  //   path: ROUTES.BLOG, 
  //   label: "Blog",
  //   description: "Latest news and updates",
  // },
  {
    label: 'Documentation',
    path: ROUTES.DOCUMENTATION,
    subRoutes: [
      { label: 'Getting Started', path: '/documentation/getting-started' },
      { label: 'Screen Mirroring', path: '/documentation/screen-mirroring' },
      { label: 'Device Control', path: '/documentation/device-control' },
      { label: 'File Manager', path: '/documentation/file-manager' },
    ]
  },
  { 
    path: ROUTES.SUPPORT, 
    label: "Support",
    description: "Help and Support",
  },
] as const; 

export const DOC_ROUTES = {
  'getting-started': {
    path: '/documentation/getting-started',
    label: 'Getting Started',
    description: 'Learn how to get started with Xefro Mirror'
  },
  'screen-mirroring': {
    path: '/documentation/screen-mirroring',
    label: 'Screen Mirroring',
    description: 'Learn how to mirror your device screen'
  },
  'device-control': {
    path: '/documentation/device-control',
    label: 'Device Control',
    description: 'Learn how to control your devices remotely'
  },
  'file-manager': {
    path: '/documentation/file-manager',
    label: 'File Manager',
    description: 'Learn how to manage files between devices'
  },
  
  // 'features': {
  //   path: '/documentation/features',
  //   label: 'Features',
  //   description: 'Explore Xefro Mirror features'
  // },
  // 'guides': {
  //   path: '/documentation/guides',
  //   label: 'Guides',
  //   description: 'Detailed guides for Xefro Mirror'
  // },
  'performance': {
    path: '/documentation/performance',
    label: 'Performance',
    description: 'Optimize your Xefro Mirror performance'
  },
  'troubleshooting': {
    path: '/documentation/troubleshooting',
    label: 'Troubleshooting',
    description: 'Common issues and their solutions'
  },
 
} as const;

export type DocRoute = keyof typeof DOC_ROUTES; 