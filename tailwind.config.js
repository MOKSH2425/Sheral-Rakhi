/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kraft: {
          DEFAULT: "#B8935F",
          dark: "#8C6B42",
          light: "#D4B483",
        },
        paper: {
          DEFAULT: "#F3E9D2",
          warm: "#EFE0BE",
          white: "#FAF5E9",
        },
        ink: {
          DEFAULT: "#3B2E22",
          soft: "#5C4A38",
        },
        rust: {
          DEFAULT: "#A6522C",
          light: "#C97148",
        },
        teal: {
          DEFAULT: "#4F6D63",
          light: "#6E8C80",
        },
        gold: {
          DEFAULT: "#C89B3C",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        hand: ["Caveat", "cursive"],
        type: ["'Special Elite'", "monospace"],
        body: ["'Work Sans'", "sans-serif"],
      },
      boxShadow: {
        paper: "0 2px 4px rgba(59,46,34,0.15), 0 8px 24px rgba(59,46,34,0.18)",
        tape: "0 1px 2px rgba(59,46,34,0.25)",
      },
    },
  },
  plugins: [],
}
