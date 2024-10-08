/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollTop: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        }
      },
      animation: {
        scrollTop: 'scrollTop 1s linear forwards'
      }
    },
    backgroundSize: {
      'cover': 'cover'
    },
    boxShadow: {
      'whiteShadow': '0px 0px 8px 0px rgba(255, 255, 255, .7) inset',
      'md': '0px 1px 2px 0px rgb(255 255 255 / 0.1)'
    },
    gridTemplateColumns: {
      'minmax01fr': 'repeat(3, minmax(0, 1fr))'
    },
    fontFamily: {
      'greatvibes': ['Great Vibes', 'san-serif']
    }
  },
  plugins: [],
}

