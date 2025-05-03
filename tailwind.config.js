/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#14532D',
        'light-green': '#A7F3D0',
        'soft-black': '#1F2937',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        'super-wide': '.15em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'extra-loose': '2.5',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      typography: {
        DEFAULT: {
          css: {
            'font-family': 'var(--font-geist-sans)',
            'font-size': '1rem',
            'line-height': '1.5',
            'letter-spacing': '0',
            'color': '#333',
          },
        },
        lg: {
          css: {
            'font-size': '1.125rem',
            'line-height': '1.6',
          },
        },
        xl: {
          css: {
            'font-size': '1.25rem',
            'line-height': '1.7',
          },
        },
        '2xl': {
          css: {
            'font-size': '1.5rem',
            'line-height': '1.8',
          },
        },
      },
    },
  },
  plugins: [],
}
