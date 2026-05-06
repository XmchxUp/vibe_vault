import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vault: {
          void: "#05070D",
          night: "#090D16",
          panel: "rgba(255, 255, 255, 0.06)",
          line: "rgba(255, 255, 255, 0.14)",
          text: "#F4F7FB",
          muted: "#8B94A7",
          cyan: "#00E5FF",
          pink: "#FF2BD6",
          lime: "#B6FF3B",
          amber: "#FFD166",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Sora",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 229, 255, 0.28)",
        "pink-glow": "0 0 54px rgba(255, 43, 214, 0.22)",
      },
      backgroundImage: {
        "radial-cyan":
          "radial-gradient(circle at 50% 20%, rgba(0, 229, 255, 0.2), transparent 32rem)",
        "radial-pink":
          "radial-gradient(circle at 85% 12%, rgba(255, 43, 214, 0.16), transparent 28rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
