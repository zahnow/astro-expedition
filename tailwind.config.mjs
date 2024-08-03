/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Futura", "Futura PT", "Kumbh Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
