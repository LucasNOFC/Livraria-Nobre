export default {
  content: [
    './index.html',
    './src/**/*.{html, js,jsx,ts,tsx}',
  ],
  safelist: [
    "text-purple-600",
    "bg-purple-600",
    "text-amber-800",
    "bg-amber-800",
    "text-red-950",
    "bg-red-950",
    "text-rose-900",
    "bg-rose-900",
    "flex-row",
    "flex-row-reverse"
  ],
  theme: {
    extend: {
      screens: {
        'vsm' : '100px',
      }
    },
  },
  plugins: [],
};