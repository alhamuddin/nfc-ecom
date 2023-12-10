import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#22c55e",

          secondary: "#f8ff3d",

          accent: "#d3e570",

          neutral: "#362d39",

          "base-100": "#f4f5f5",

          info: "#3369d7",

          success: "#5fd8ce",

          warning: "#f87171",

          error: "#991b1b",
        },
      },
    ],
  },
};

export default config;
