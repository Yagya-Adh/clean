import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(25px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "-translateX(25px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in",
        fadeOut: "fadeOut 1.5s ease-out",
        fadeInUp: "fadeInUp .8s ease-in",
        faceInLeft: "faceInLeft .8 ease-in",
        fadeInRight: "fadeInRight .8 ease-in",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        clean: {
          black: {
            10: "#050505",
          },
          sliver: {
            10: "#e7e7e9",
          },
          green: {
            10: "#c1e4c4",
          },
          yellow: {
            10: "#dbec62",
          },
          smoke: {
            white: "#F5F5F5F5",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
