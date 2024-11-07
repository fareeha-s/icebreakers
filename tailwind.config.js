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
        }
      },
      animation: {
        'slash-drop': 'slash-drop 2s ease forwards',
        'fadeIn': 'fadeIn 1.6s ease forwards'
      }
    },
  },
  plugins: [],
}