/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      primary: "Inter, system-ui",
    },
    extend: {
      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #cfbbfa 10%, #48079d)",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideInUp: "slideInUp 1s ease forwards",
        upDown: "upDown 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "white",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "white",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
