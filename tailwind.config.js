/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        '80': '0.8',
        '90': '0.9',
      },
      keyframes: {
        'fadeIn': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        'slash-drop': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-200px)',
            fontSize: '3em',
            fontWeight: '900'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)',
            fontSize: '3em',
            fontWeight: '900'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) rotate(25deg)',
            fontSize: '1em',
            fontWeight: '300'
          }
        },
        'wordLeft': {
          '0%, 10%': {
            transform: 'translateX(0)'
          },
          '50%, 60%': {
            transform: 'translateX(-50px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'wordRight': {
          '0%, 10%': {
            transform: 'translateX(0)'
          },
          '50%, 60%': {
            transform: 'translateX(50px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'shake': {
          '0%, 100%': { transform: 'scaleX(1.2) rotate(-2deg)' },
          '25%': { transform: 'scaleX(1.2) rotate(2deg)' },
          '50%': { transform: 'scaleX(1.2) rotate(-1deg)' },
          '75%': { transform: 'scaleX(1.2) rotate(1deg)' }
        },
        heartPop: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' }
        },
        heartRing: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '100%': { transform: 'scale(2)', opacity: 0 }
        }
      },
      animation: {
        'slash-drop': 'slash-drop 2s ease forwards',
        'fadeIn': 'fadeIn 1.6s ease forwards',
        heartPop: 'heartPop 0.3s ease-out',
        heartRing: 'heartRing 0.5s ease-out'
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-rose-500',
    'text-gray-800',
    {
      pattern: /opacity-(80|90)/,
    },
  ],
}