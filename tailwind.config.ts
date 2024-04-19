import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm':'390px',
        'smd':'450px'
      },
      colors: {
        'color1': '#27BF9B',
        'color2': '#FBBC05',
        'color3': '#262626',
      },
    },
  },
  plugins: [],
};
export default config;
