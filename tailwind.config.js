/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        dyslexic: ['OpenDyslexic', 'Comic Sans MS', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        primary: {
          DEFAULT: '#6366f1', // Indigo-500
          hover: '#4f46e5', // Indigo-600
          light: '#818cf8',
          dark: '#4338ca',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#0ea5e9', // Sky-500
          hover: '#0284c7', // Sky-600
          light: '#38bdf8',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#f43f5e', // Rose-500
          hover: '#e11d48',
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#10b981', // Emerald-500
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#f59e0b', // Amber-500
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'neon-primary': '0 0 20px rgba(99, 102, 241, 0.4)',
        'neon-secondary': '0 0 20px rgba(14, 165, 233, 0.4)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
