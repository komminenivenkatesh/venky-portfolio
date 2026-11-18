/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        mono: ['Inconsolata', 'JetBrains Mono', 'monospace'],
        brand: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        pure: '#000000',
        dark: {
          950: '#030305',
          900: '#07070a',
          850: '#0c0c12',
          800: '#12121a',
          700: '#1b1b26',
          600: '#282838',
        },
        accent: {
          DEFAULT: '#7317cf',
          light: '#8f2be6',
          glow: 'rgba(115, 23, 207, 0.4)',
        },
        cyan: {
          accent: '#06b6d4',
          glow: 'rgba(6, 182, 212, 0.3)',
        },
        badge: '#2563eb',
        spotify: '#1db954',
      },
      boxShadow: {
        'glow-purple': '0 0 25px rgba(115, 23, 207, 0.45)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glow-spotify': '0 0 20px rgba(29, 185, 84, 0.35)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'equalizer': 'equalizer 1.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
