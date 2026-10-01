/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inconsolata', 'monospace'],
        mono: ['Inconsolata', 'JetBrains Mono', 'monospace'],
        brand: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          950: '#07070a',
          900: '#0a0a0f',
          850: '#0f0f17',
          800: '#14141f',
          700: '#1e1e2d',
          600: '#2d2d3f',
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
