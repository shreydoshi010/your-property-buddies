import type { Config } from "tailwindcss";

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
          light: "#81C784",
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
        mobile: "480px", // Mobile screens, from 480px
        tablet: "768px", // Tablet screens, from 768px
        laptop: "1024px", // Laptop screens, from 1024px
        desktop: "1280px", // Desktop screens, from 1280px
      },
    },
  },
  plugins: [],
} satisfies Config;
