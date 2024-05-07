import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '478px',
        'xxl-1200':'1200px',
        'x-1-1150':'1150px',
        'x-2-1100':'1100px',
        'x-3-885':'885px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-linear": "linear-gradient(0deg, rgba(8,9,9,1) 48%, rgba(90,97,97,1) 100%, rgba(90,97,97,1) 100%, rgba(133,185,186,1) 100%)",
          "lineraaa": "linear-gradient(0deg, rgba(8,9,9,1) 48%, rgba(90,97,97,1) 100%, rgba(8,9,9,0) 99%, rgba(133,185,186,1) 100%)",
      },
      boxShadow: {
        custom: '10px 10px 50px 50px rgba(0,0,0,0.75) inset',
      },
    },
  },
  plugins: [],
};
export default config;
