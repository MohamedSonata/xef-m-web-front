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
      { label: 'File Transfer', path: '/documentation/file-transfer' },
    ]
  },
  { 
    path: ROUTES.SUPPORT, 
    label: "Support",
    description: "Help and Support",
  },
] as const; 