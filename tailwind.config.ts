import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      chick: '#4E740D',
      fox: '# C46406',
      monkey: '#69432E ',
      frog: '#4E740D ',
      transparent: colors.transparent,
    },
    fontFamily: {
      sans: ['Montserrat', ...fontFamily.sans],
      mono: [...fontFamily.mono],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      md: '1.33rem',
      xl: '1.8rem',
      '2xl': '8rem',
    },
    extend: {
      colors: {
        neutral: colors.neutral,
        white: colors.white,
        teal: colors.teal,
        'purple-500': colors.purple[500],
        orange: colors.orange,
        gray: colors.gray,
      },
      animation: {
        text: 'text 4s ease-in-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      cursor: {
        fox: "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🦊</text></svg>\"), pointer",
        frog: "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🐸</text></svg>\"), pointer",
        chick:
          "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🐤</text></svg>\"), pointer",
        monkey:
          "url(\"data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size: 24px'><text y='20'>🐵</text></svg>\"), pointer",
      },
    },
  },
  plugins: [],
} satisfies Config;
