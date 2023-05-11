import type { Config } from 'tailwindcss'

export default  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
        chick : {
          primary: '241 222 102',
          secondary: '189 173 102',
          primary_dark: '242 235 190',
          secondary_dark: '220 217 190',
        },
        fox : {
          primary: '196 100 6',
          secondary: '97 76 55',
          primary_dark: '213 183 125',
          secondary_dark: '172 121 61',
        },
        monkey : {
          primary: '105 67 46',
          secondary: '77 43 30',
          primary_dark: '164 140 125',
          secondary_dark: '213 188 175',
        },
        frog : {
          primary: '78 116 13',
          secondary: '107 105 34',
          primary_dark: '113 162 31',
          secondary_dark: '174 184 82',
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config

