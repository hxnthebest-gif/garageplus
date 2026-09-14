import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060608",
        foreground: "#f5f5f7",
        studio: {
          950: "#040405",
          900: "#08080a",
          850: "#0d0e12",
          800: "#13141a",
          700: "#1c1d24",
          600: "#272832",
          500: "#525363",
          400: "#8e8f9e",
          300: "#c2c3cf",
          200: "#e4e4eb",
          100: "#f5f5f8"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Courier New", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        extrawide: "0.3em",
      }
    },
  },
  plugins: [],
};
export default config;
