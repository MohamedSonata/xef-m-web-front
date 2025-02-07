const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/screen-mirroring',
        'features/device-control',
        'features/file-transfer',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/troubleshooting',
        'guides/performance',
      ],
    },
  ],
};

export default sidebars; 