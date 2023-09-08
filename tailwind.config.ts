import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#1b1b1f",
        onBackground: "#e3e2e6",
      },
      fontFamily: { serif: "Noto Serif JP" },
      animation: {
        "infinity-scroll-left__first":
          "infinity-scroll-left__first 40s infinite linear 0.5s both",
        "infinity-scroll-left__second":
          "infinity-scroll-left__second 40s infinite linear 0.5s both",
      },
      keyframes: {
        "infinity-scroll-left__first": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },
        "infinity-scroll-left__second": {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
