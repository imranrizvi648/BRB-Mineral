/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "left-fade-pattern": `
          radial-gradient(#7b7f85 1px, transparent 1px),
          linear-gradient(to right, #f1f5f5 0%, #ffffff 60%, transparent 100%)
        `,
      },
      maskImage: {
        "left-curve": "radial-gradient(circle at left center, black 60%, transparent 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".mask-left-curve": {
          maskImage: theme("maskImage.left-curve"),
          WebkitMaskImage: theme("maskImage.left-curve"),
        }
      });
    }
  ]
};
