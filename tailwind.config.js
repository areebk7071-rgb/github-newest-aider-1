/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d' },
        sage: { 50: '#f6f7f4', 100: '#e8ebe2', 200: '#d1d7c5', 300: '#b3bda0', 400: '#95a17b', 500: '#7a8762', 600: '#5f6b4d', 700: '#4a543d', 800: '#3d4534', 900: '#343b2e' },
        sand: { 50: '#faf8f5', 100: '#f3efe8', 200: '#e8e0d3', 300: '#d4c7b3', 400: '#bfad93', 500: '#ab9778', 600: '#9a8468', 700: '#7f6c55', 800: '#6a5a48', 900: '#584b3e' },
        terracotta: { 50: '#fdf5f0', 100: '#fae8dc', 200: '#f4ceb5', 300: '#ecae86', 400: '#e28a57', 500: '#d9703a', 600: '#c4582c', 700: '#a34428', 800: '#843726', 900: '#6c2f22' },
        charcoal: { 50: '#f7f7f6', 100: '#e8e8e6', 200: '#d1d1cd', 300: '#b0b0a9', 400: '#8d8d84', 500: '#73736a', 600: '#5d5d56', 700: '#4d4d47', 800: '#42423d', 900: '#3a3a36' },
        warm: { 50: '#fefdfb', 100: '#fdf9f3', 200: '#faf2e5', 300: '#f5e6d0', 400: '#eed5b3', 500: '#e5c193', 600: '#d4a66e', 700: '#c08c52', 800: '#9e7243', 900: '#815e39' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
