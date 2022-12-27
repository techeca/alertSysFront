/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    'bg-green-500',
    'bg-green-600',
    'hover:bg-green-600',
    'hover:bg-red-600',
    'hover:bg-indigo-600',
    'bg-red-500',
    'bg-red-600',
    'border-red-500',
    'text-red-500',
    'text-indigo-700'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
