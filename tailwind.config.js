/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollTop: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 }
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
  },
  plugins: [],
}

