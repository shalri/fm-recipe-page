/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "rp-nutmeg": "hsl(14, 45%, 36%)",
        "rp-dark-raspberry": "hsl(332, 51%, 32%)",
        // Neutral
        "rp-white": "hsl(0, 0%, 100%)",
        "rp-rose-white": "hsl(330, 100%, 98%)",
        "rp-eggshell": "hsl(30, 54%, 90%)",
        "rp-light-grey": "hsl(30, 18%, 87%)",
        "rp-wenge-brown": "hsl(30, 10%, 34%)",
        "rp-dark-charcoal": "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        "young-serif": ["Young Serif", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        body: "16px",
      },
      fontWeight: {
        regular: 400,
        semibold: 600,
        bold: 700,
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
