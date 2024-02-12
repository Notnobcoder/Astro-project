/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        prime: "#f8f4f0",
        primary: "#4D4D4D",
        textPrimary: "#181818",
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
