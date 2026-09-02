import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: 'var(--color-accent)',
          subtle: 'var(--color-accent-subtle)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          dark: 'var(--color-bg)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          dark: 'var(--color-surface)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          'primary-dark': 'var(--color-text-primary)',
          muted: 'var(--color-text-muted)',
          'muted-dark': 'var(--color-text-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          dark: 'var(--color-border)',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
}

export default config
