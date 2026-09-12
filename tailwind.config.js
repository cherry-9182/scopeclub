/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070713',
          900: '#0b0b1c',
          800: '#101028',
          700: '#161634',
          600: '#1e1e42',
          500: '#262650',
          400: '#32325e',
          300: '#42427a',
        },
        ash: {
          100: '#f0f0ff',
          200: '#d4d4f0',
          300: '#a8a8d0',
          400: '#8080b0',
          500: '#606090',
          600: '#484870',
        },
        cyan: {
          300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2',
        },
        blue: {
          300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb',
        },
        pink: {
          300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777',
        },
        amber: {
          300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706',
        },
        violet: {
          300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed',
        },
        emerald: {
          300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'wider-2': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'scan': 'scan 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'aurora': 'aurora 14s ease-in-out infinite',
        'aurora-2': 'aurora2 18s ease-in-out infinite',
        'aurora-3': 'aurora3 16s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeDown: { '0%': { opacity: '0', transform: 'translateY(-30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideIn: { '0%': { opacity: '0', transform: 'translateX(-20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
        pulseSoft: { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        glow: { '0%, 100%': { opacity: '0.3' }, '50%': { opacity: '0.6' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        aurora: {
          '0%,100%': { transform: 'translate(-10%, -10%) scale(1)' },
          '33%': { transform: 'translate(10%, 5%) scale(1.15)' },
          '66%': { transform: 'translate(-5%, 10%) scale(0.95)' },
        },
        aurora2: {
          '0%,100%': { transform: 'translate(10%, 10%) scale(1.1)' },
          '50%': { transform: 'translate(-10%, -5%) scale(0.9)' },
        },
        aurora3: {
          '0%,100%': { transform: 'translate(-5%, 15%) scale(0.95)' },
          '50%': { transform: 'translate(15%, -10%) scale(1.2)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-lg': '64px 64px',
        'grid-sm': '32px 32px',
      },
    },
  },
  plugins: [],
};
