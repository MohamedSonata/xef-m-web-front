import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';

// Primary font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

// Alternative primary font option
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

// Monospace font for code or technical content
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
});

// Add viewport export for theme color
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://xefromirror.com'),
  title: {
    template: '%s | Xefro Mirror',
    default: 'Xefro Mirror - Screen Mirroring Solution',
  },
  description: "Professional screen mirroring solution with advanced device monitoring capabilities",
  keywords: [
    'screen mirroring',
    'device monitoring',
    'phone to pc',
    'android mirroring',
    'ios mirroring',
    'remote control',
    'device management'
  ],
  authors: [{ name: 'Xefro Dev Team' }],
  creator: 'Xefro',
  publisher: 'Xefro Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: 'Xefro Mirror',
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xefromirror.com',
    siteName: 'Xefro Mirror',
    title: 'Xefro Mirror - Professional Screen Mirroring Solution',
    description: 'Mirror your phone screen to PC with advanced monitoring capabilities',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xefro Mirror Preview'
      }
    ],
  },
  
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Xefro Mirror - Professional Screen Mirroring Solution',
    description: 'Mirror your phone screen to PC with advanced monitoring capabilities',
    creator: '@XefroMirror',
    images: ['/twitter-image.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

// Root layout (Server Component by default)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="icon" 
          href={`/favicon.ico?v=${process.env.NEXT_PUBLIC_APP_VERSION}`}
          sizes="any"
          type="image/x-icon"
        />
        <meta name="custom-protocol" content="xefromirror://" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} antialiased min-h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
