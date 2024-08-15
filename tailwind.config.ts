import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      heading: "5rem",
      nav: "2rem",
      body: "1.25rem",
      accent: "1.25rem",
      subheading: "1.5rem",
      work: "3.5rem",
      mobheading: "2.25rem",
      mobnav: "1.25rem",
      mobbody: "0.75rem",
      mobaccent: "0.875rem",
      mobsubheading: "1rem",
      mobwork: "2.5rem",
      mdheading: "3rem",
      mdsubheading: "1.25rem",
    },
    extend: {
      colors: {
        prim: "#DCDCDD",
        txt: "#000000",
      },
      letterSpacing: {
        tight: "-.035em",
      },
    },
  },
  plugins: [],
};
export default config;
