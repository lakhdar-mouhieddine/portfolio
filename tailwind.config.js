/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgLight: 'rgb(var(--color-bgLight) / <alpha-value>)',
        bgCard: 'rgb(var(--color-bgCard) / <alpha-value>)',
        borderSubtle: 'rgb(var(--color-borderSubtle) / <alpha-value>)',
        accentNavy: 'rgb(var(--color-accentNavy) / <alpha-value>)',
        accentTeal: 'rgb(var(--color-accentTeal) / <alpha-value>)',
        textMain: 'rgb(var(--color-textMain) / <alpha-value>)',
        textMuted: 'rgb(var(--color-textMuted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
