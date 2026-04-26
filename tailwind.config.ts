import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#09090B",
        "bg-surface": "#111113",
        "bg-raised": "#18181B",
        "border-dim": "#27272A",
        "border-bright": "#3F3F46",
        "text-hi": "#FAFAFA",
        "text-mid": "#A1A1AA",
        "text-lo": "#52525B",
        accent: "#2563EB",
        "accent-hover": "#1D4ED8",
        "accent-dim": "#1E3A5F",
        success: "#16A34A",
        warning: "#CA8A04",
        danger: "#DC2626",
        "code-bg": "#0D0D0F",
        "code-border": "#1F1F23",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
