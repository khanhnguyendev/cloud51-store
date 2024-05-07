import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|card|chip|code|image|input|kbd|link|modal|navbar|snippet|toggle|tabs|ripple|spinner|popover).js",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 2s ease-in-out infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
