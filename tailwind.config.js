/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- importante para Vite + React
  ],
  theme: {
    extend: {},
    animation: {
      "gradient-pulse": "gradientPulse 10s ease infinite",
    },
    keyframes: {
      gradientPulse: {
        "0%, 100%": { "background-position": "0% 50%" },
        "50%": { "background-position": "100% 50%" },
      },
    },
    backgroundSize: {
      "200%": "200% 200%",
    },
  },
  plugins: [],
};
