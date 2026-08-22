import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0B0D10",
        ivory: "#F5F0E6",
        bronze: "#B8763E",
        bronzeLight: "#D6A05F",
        steel: "#4A5568",
        steelLight: "#8792A2",
        success: "#5C8A66",
        line: "#2A2D33",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
