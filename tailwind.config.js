/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base:    '#0d1117',
        surface: '#161b22',
        accent:  '#6366f1',
        cyan:    '#06b6d4',
        muted:   '#8b949e',
        border:  'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'accent-gradient': 'linear-gradient(135deg, #6366f1, #06b6d4)',
      },
      boxShadow: {
        'glow':    '0 0 24px rgba(99,102,241,0.25)',
        'glow-sm': '0 0 12px rgba(99,102,241,0.18)',
      },
    },
  },
  plugins: [],
}
