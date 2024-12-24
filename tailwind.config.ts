import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4D4B2F",
          light: "#77722E",
          dark: "#388E3C",   
        },
        secondary: {
          DEFAULT: "#F6B100",
          light: "#F7C033",
          dark: "#AC7B00",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: { min: "320px", max: "480px" },
        md: { min: "481px", max: "768px" },
        xl: { min: "769px", max: "1024px" },
        xxl: { min: "1025px", max: "1600px" },
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addUtilities } = api;
      const newUtilities = {
        ".D_p1": {
          "@apply font-normal text-[20px] leading-[28px]": {},
        },
        ".D_p2": {
          "@apply font-normal text-[18px] leading-[26px]": {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
