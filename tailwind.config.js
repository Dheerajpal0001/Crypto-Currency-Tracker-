/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 0.2s linear infinite',
        'bounce-custom': 'bounce-custom 2s infinite',
      },
      keyframes: {
        'bounce-custom': {
          '0%, 100%': {
            transform: 'translateY(-4%)', // Customize this value
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}