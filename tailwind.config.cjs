/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        card: "200px",
        longerCard: "300px",
      },
      height: {
        card: "200px",
      },
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "base-100": "#18181b",
          "base-200": "#393941",
          "base-content": "#b8b9c1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
