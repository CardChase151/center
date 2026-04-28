/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0E0E10',
          900: '#1A1A1C',
          800: '#26262A',
          700: '#3A3A3F',
        },
        bone: {
          50:  '#FAF8F4',
          100: '#F5F1EA',
          200: '#EAE3D6',
          300: '#D6CCB8',
        },
        clay: {
          400: '#C46844',
          500: '#B5532A',
          600: '#9A4421',
        },
        gold: {
          400: '#D4B05A',
          500: '#C9A24A',
          600: '#A6843A',
        },
        taupe: {
          400: '#A89E92',
          500: '#8C8276',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        prose2: '68ch',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
