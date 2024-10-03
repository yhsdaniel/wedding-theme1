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
      'cover': 'cover',
      '50%': '50%',
      '95%': '95%'
    },
    boxShadow: {
      'whiteShadow': '0px 0px 5px 0px rgba(255, 255, 255, .7)'
    }
  },
  plugins: [],
}

