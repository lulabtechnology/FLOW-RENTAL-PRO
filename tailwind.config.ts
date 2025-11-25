import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f5e6d3",
        "flow-cream": "#fdf6ec",
        "flow-brown": "#3a2b20",
        "flow-orange": "#c96637",
        "flow-dark": "#111827",
        "flow-teal": "#0f766e"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15,23,42,0.18)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
