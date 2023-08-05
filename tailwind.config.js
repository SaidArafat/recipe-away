/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#09814A",
      gray: "#F8F9FB",
      white: "#fff",
      black: "#070709",
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
    extend: {},
  },
  plugins: [],
};
