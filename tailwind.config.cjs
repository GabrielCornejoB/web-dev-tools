/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fill, 288px)",
      },
      gridAutoRows: {
        custom: "10px",
      },
      gridRowEnd: {
        sm: "span 17",
        md: "span 19",
        lg: "span 21",
      },
      width: {
        card: "300px",
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
          "base-content": "#b8b9c1",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
