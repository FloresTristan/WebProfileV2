import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    styled: true,
    themes: [
      "light", "dark", "cupcake", "garden", "wireframe", "lofi", "pastel", "lemonade", "winter", 
      "synthwave", "luxury", "black", "dim", 
      "retro", "cyberpunk", "aqua", "valentine", 
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
} satisfies Config;
