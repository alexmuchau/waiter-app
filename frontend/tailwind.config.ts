import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#DDAA55",
          blur: {
            DEFAULT: "rgba(221, 170, 85, 0.15)",
            using: "rgba(221, 170, 85, 0.3)"
          }
        }
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#DDAA55",
            secondary: "var(--background)"
          }
        },
        dark: {
          colors: {
            primary: "#DDAA55",
          }
        }
      }
    })
  ],
};
export default config;
