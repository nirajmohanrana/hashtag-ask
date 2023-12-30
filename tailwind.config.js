/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#111827",
        primary: "#00d3ff",
        secondary: "#2193b0",
        accent: "#e23237",
        "toast-bg": "#57C1EA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        gradient: "gradient 4s linear infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
      transitionTimingFunction: {
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  plugins: [],
};
