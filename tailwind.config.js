/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Navy Blue
          light: '#1e293b',
        },
        accent: {
          DEFAULT: '#d4af37', // Gold
          light: '#f3e5ab',
          hover: '#bfa13d',
        },
        text: {
          DEFAULT: '#334155',
          light: '#94a3b8',
        },
        bg: '#f8fafc',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        'DEFAULT': '300ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'ease',
      },
    },
  },
  plugins: [],
}
