import ddddurkColors from "@ddddurk/colors/colors/colors.json";
import type { Config } from "tailwindcss";
import tailwindColors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./content/**/*.mdx",
    "./node_modules/@ddddurk/ui/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.tsx"
  ],
  theme: {
    colors: {
      black: ddddurkColors.black.black,
      cyan: ddddurkColors.cyan,
      gray: tailwindColors.stone,
      green: ddddurkColors.green,
      pink: ddddurkColors.pink,
      white: ddddurkColors.white.white
    }
  }
};

export default config;
