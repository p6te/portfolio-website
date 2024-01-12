import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(#B16CEA, #FFA84B)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, #B16CEA,#B16CEA)",
        "gradient-primary":
          "linear-gradient(90deg, #B16CEA,#FF5E69,#FF8A56,#FFA84B)",
      },
      colors: {
        gradient: "linear-gradient(90deg, #B16CEA,#FF5E69,#FF8A56,#FFA84B)",
        blur: {
          1: "#ffffff1e",
          2: "#ffffff33",
        },
      },
      backgroundBlur:
        "radial-gradient(circle at center,rgba(var(#B16CEA), 0.8) 0,rgba(var(#B16CEA), 0) 50%) no-repeat",
    },
  },
  plugins: [],
};
export default config;
