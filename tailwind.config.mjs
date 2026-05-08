/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2563eb',
          600: '#1565c0',
          700: '#1148a0',
          800: '#0d3b80',
          900: '#0a2d62',
          950: '#051d42',
        },
        accent: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        warm: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', 'Arial', 'sans-serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        accent:  ['"Barlow"', '"Arial"', 'sans-serif'],
      },
      boxShadow: {
        'soft':       '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        'card':       '0 4px 30px rgba(0,0,0,0.08)',
        'card-hover': '0 10px 50px rgba(0,0,0,0.18)',
        'glow':       '0 0 30px rgba(21,101,192,0.3)',
        'glow-lg':    '0 0 60px rgba(21,101,192,0.2)',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease both',
        'fade-in':     'fadeIn 0.9s ease both',
        'float':       'float 4s ease-in-out infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
        'slide-right': 'slideRight 0.5s ease both',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #030712 0%, #0a2d62 50%, #051d42 100%)',
        'blue-diagonal':    'linear-gradient(135deg, #1565c0 0%, #2563eb 100%)',
        'dark-section':     'linear-gradient(180deg, #111827 0%, #0f172a 100%)',
        'brand-gradient':   'linear-gradient(135deg, #1148a0 0%, #1565c0 50%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
};
