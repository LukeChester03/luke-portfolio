import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./Components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        primary: "#ffffff", // background white
        secondary: "#f5f5f7", // very light gray background or surfaces
        accent: {
          DEFAULT: "#0071e3", // Apple-style blue accent
          hover: "#005bb5", // slightly darker blue for hover states
        },
        textPrimary: "#1d1d1f", // dark gray (near black) text
        textSecondary: "#3a3a3c", // medium gray text for secondary info
        borderGray: "#e5e5e7", // subtle border gray
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
