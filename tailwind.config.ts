import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ─── Brand Accent ───────────────────────────────────────────
        accent: {
          DEFAULT: '#2563EB',
          dark: '#3B82F6',
          subtle: '#EFF6FF',
          'subtle-dark': '#1E3A5F',
          foreground: '#FFFFFF',
        },
        // ─── Neutrals ───────────────────────────────────────────────
        bg: {
          DEFAULT: '#F8F9FC',
          dark: '#0A0D14',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#111827',
          elevated: '#F1F5F9',
          'elevated-dark': '#1E293B',
        },
        text: {
          primary: '#0F172A',
          'primary-dark': '#F1F5F9',
          muted: '#64748B',
          'muted-dark': '#94A3B8',
        },
        border: {
          DEFAULT: '#E2E8F0',
          dark: '#1E293B',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Modular scale 1.25 (Major Third) base 1rem
        xs:   ['0.64rem',  { lineHeight: '1.5' }],
        sm:   ['0.8rem',   { lineHeight: '1.5' }],
        base: ['1rem',     { lineHeight: '1.7' }],
        lg:   ['1.25rem',  { lineHeight: '1.6' }],
        xl:   ['1.563rem', { lineHeight: '1.4' }],
        '2xl':['1.953rem', { lineHeight: '1.3' }],
        '3xl':['2.441rem', { lineHeight: '1.2' }],
        '4xl':['3.052rem', { lineHeight: '1.1' }],
        '5xl':['3.815rem', { lineHeight: '1.05' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        card: '1rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04)',
        'card-hover': '0 20px 40px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.08)',
        accent: '0 4px 20px rgba(37,99,235,.25)',
        'accent-lg': '0 8px 32px rgba(37,99,235,.35)',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        'pulse-border': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up':       'fade-up 0.6s ease-out-expo forwards',
        'fade-in':       'fade-in 0.5s ease-out forwards',
        'gradient-shift':'gradient-shift 4s ease infinite',
        'pulse-border':  'pulse-border 2.5s ease-in-out infinite',
        'float':         'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
