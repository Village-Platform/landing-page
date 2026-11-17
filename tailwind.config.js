/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: { 950: '#031F17', 900: '#0B3727', 800: '#124A35', 700: '#1A5E45', 600: '#23765A' },
        mint: { 300: '#6EE7B7', 400: '#34D399', 500: '#10B981', 600: '#059669', 700: '#047857' },
        cream: { 50: '#FDFBF6', 100: '#FAF5EC', 200: '#F4ECD9', 300: '#E9DCBE' },
        clay: { 500: '#C8763D', 600: '#A85F2C' },
      },
      fontFamily: {
        display: ['"Readex Pro"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(3,31,23,.04), 0 8px 24px -8px rgba(3,31,23,.12)',
        lift: '0 2px 4px rgba(3,31,23,.05), 0 24px 48px -16px rgba(3,31,23,.25)',
        glow: '0 0 0 1px rgba(16,185,129,.35), 0 12px 40px -8px rgba(16,185,129,.45)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(50%)' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
