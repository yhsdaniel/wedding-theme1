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
    fontFamily: {
      'greatvibes': ['Great Vibes', 'san-serif'],
      'parisienne': ['Parisienne', 'sans-serif']
    },
    gridTemplateColumns: {
      'autoGrid': 'repeat(auto-fill, minmax(150px, 1fr))'
    },
    columns: {
      'gridGallery': '150px 2'
    }
  },
  plugins: [],
}

