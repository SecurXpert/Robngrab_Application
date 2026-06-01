/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/App/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
  // Force legacy color functions to avoid oklch() issues
  corePlugins: {
    preflight: true,
  },
  future: {
    // Disable any features that might use oklch
    enableLayers: false,
  },
}
