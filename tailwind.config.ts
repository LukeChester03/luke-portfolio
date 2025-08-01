import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrains-mono)",
    },
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#f5f5f7",
        accent: {
          DEFAULT: "#0071e3",
          hover: "#005bb5",
        },
        textPrimary: "#1d1d1f",
        textSecondary: "#3a3a3c",
        borderGray: "#e5e5e7",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, #ebf8ff 100%)",
        "full-gradient": `linear-gradient(
      to bottom,
      #ffffff 0%,
      #fef3c7 15%,
      #d1fae5 30%,
      #e0f2fe 45%,
      #f3e8ff 60%,
      #fde2e4 75%,
      #fff1f2 90%,
      #ffffff 100%
    )`,
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "pulse-gentle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        "pulse-gentle": "pulse-gentle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
