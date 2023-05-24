import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    {
      pattern: /cursor-(fox|frog|chick|monkey)/,
    },
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        primary_dark: 'rgb(var(--color-primary_dark) / <alpha-value>)',
        secondary_dark: 'rgb(var(--color-secondary_dark) / <alpha-value>)',
        gradient: 'var(--color-gradient)',
        gradient_dark: 'var(--color-gradient_dark)',
        chick: {
          primary: '241 222 102',
          secondary: '189 173 102',
          primary_dark: '242 235 190',
          secondary_dark: '220 217 190',
        },
        fox: {
          primary: '196 100 6',
          secondary: '97 76 55',
          primary_dark: '213 183 125',
          secondary_dark: '172 121 61',
        },
        monkey: {
          primary: '105 67 46',
          secondary: '77 43 30',
          primary_dark: '164 140 125',
          secondary_dark: '213 188 175',
        },
        frog: {
          primary: '78 116 13',
          secondary: '107 105 34',
          primary_dark: '113 162 31',
          secondary_dark: '174 184 82',
        },
        neutral: colors.neutral,
      },
      fontFamily: {
        sans: ['Courier'],
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
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      md: '1.33rem',
      xl: '1.8rem',
      '4xl': '8rem',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
