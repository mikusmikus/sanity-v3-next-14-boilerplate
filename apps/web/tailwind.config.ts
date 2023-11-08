import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const spacing = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i).reduce(
    (acc, val) => {
      acc[val] = `${(val * 4) / 16}rem`;
      return acc;
    },
    {}
  );

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      primary: {
        800: '#661B0A',
        600: '#A83800',
        500: '#E04A00',
        400: '#EF7234',
        300: '#F39568',
        200: '#FFDBC9',
      },
      secondary: {
        800: '#000026',
        600: '#090042',
        500: '#1C125F',
        400: '#594EA6',
        300: '#9F98CD',
        200: '#D2CDEE',
      },
      neutral: {
        800: '#0F0F0F',
        600: '#2D2D2D',
        500: '#69696D',
        400: '#BABAC4',
        300: '#E1E1E5',
        200: '#F1F1F3',
        '000': '#FFFFFF',
      },
      semantic: {
        'success-text': '#0D4D2E',
        'success-icon': '#18A165',
        'success-bg': '#DCF9EC',

        'warning-text': '#8F4300',
        'warning-icon': '#F29600',
        'warning-bg': '#FFF5D1',

        'error-text': '#610000',
        'error-icon': '#A01C33',
        'error-bg': '#F5E0E3',
      },
    },
    fontFamily: {
      manrope: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: spacing(13, 100),
      backgroundImage: {
        'pattern-04': "url('/images/image-blurred-bg-04.png')",
      },
      borderRadius: {
        1: '0.25rem',
        2: '0.5rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
};
export default config;
