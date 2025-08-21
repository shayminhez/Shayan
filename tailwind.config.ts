import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}","./content/**/*.{ts,tsx,json}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Helvetica','Arial','Apple Color Emoji','Segoe UI Emoji']
      },
      colors: { bg:"#0b0c10", card:"rgba(255,255,255,0.06)", glass:"rgba(255,255,255,0.08)"},
      boxShadow: { soft: "0 4px 24px rgba(0,0,0,0.25)" },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: [],
};
export default config;
