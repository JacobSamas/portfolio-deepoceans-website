/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepOcean: {
          DEFAULT: "#002B5B",
          light: "#005A9C",
          dark: "#001F3F",
        },
      },
    },
  },
  plugins: [],
};