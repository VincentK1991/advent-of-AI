/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF0',
          100: '#FBF9E1',
          200: '#F7F3C3',
        },
        evergreen: {
          900: '#052E16',
          950: '#022C22',
        },
        burgundy: {
          800: '#991B1B',
          900: '#7F1D1D',
        }
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: []
};
