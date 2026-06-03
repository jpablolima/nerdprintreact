/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- importante para Vite + React
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1625",
        secondary: "#c4f25c",
        neutral: "#ffffff",
      },
      keyframes: {
        keyframes: {
          keyframes: {
            float: {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-10px)" },
            },
            fadeIn: {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          },
          animation: {
            float: "float 4s ease-in-out infinite",
            fadeIn: "fadeIn 0.6s ease forwards",
          },
          float: {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
        animation: {
          float: "float 4s ease-in-out infinite",
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
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
