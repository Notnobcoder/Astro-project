/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D4D4D",
      },
      fontFamily: {
        manrope: "Manrope",
        poppins: "Poppins",
        jost: ["var(--font-jost)"],
      },
    },
  },
  plugins: [],
};
