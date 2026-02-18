import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: "#0f0f10",
        gold: "#d4af37",
        slatePremium: "#16181d"
      },
      boxShadow: {
        glow: "0 0 30px rgba(212,175,55,0.2)"
      }
    }
  },
  plugins: []
} satisfies Config;
