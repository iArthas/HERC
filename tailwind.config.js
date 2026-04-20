/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema Claro
        light: {
          bg: '#ffffff',
          bg_secondary: '#f5f7fa',
          bg_tertiary: '#e8ecf1',
          text: '#1a1a1a',
          text_secondary: '#4a4a4a',
          text_tertiary: '#7a7a7a',
          border: '#e0e0e0',
        },
        // Tema Oscuro
        dark: {
          bg: '#0f0f14',
          bg_secondary: '#1a1a23',
          bg_tertiary: '#2a2a35',
          text: '#ffffff',
          text_secondary: '#e0e0e0',
          text_tertiary: '#a0a0a0',
          border: '#3a3a45',
        },
        // Acentos
        accent: {
          primary: '#0099ff',
          secondary: '#00d4ff',
        },
      },
      animation: {
        'float': 'float 20s linear infinite',
        'shimmer': 'shimmer 3s infinite',
        'scan': 'scan 4s infinite',
        'slide-in-up': 'slideInUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        slideInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0, 180, 255, 0.4)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(0, 180, 255, 0.6)' },
        },
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'lg': '0 16px 48px rgba(0, 0, 0, 0.16)',
        'dark-sm': '0 2px 8px rgba(0, 0, 0, 0.32)',
        'dark-md': '0 8px 24px rgba(0, 0, 0, 0.48)',
        'dark-lg': '0 16px 48px rgba(0, 0, 0, 0.64)',
        'glow': '0 0 30px rgba(0, 180, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
