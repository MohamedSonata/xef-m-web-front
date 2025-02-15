import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
        audiowide: ['Audiowide', 'cursive'],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
    // colors: {

    //   primary: {

    //     DEFAULT: 'var(--primary)',

    //     // ...// other shades if needed

    //   }

    // }
  },
  plugins: [
    typography
  ],
}; 