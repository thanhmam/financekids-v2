/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        xu: {
          green: "#16C172",
          "green-dark": "#0E9E5C",
          "green-100": "#E3F7EC",
          "green-300": "#7BE0A8",
          ink: "#15392A",
          muted: "#5B7065",
          caption: "#9AA89E",
          line: "#ECF1E6",
          "line-subtle": "#DDE6D6",
          bg: "#F4F8EF",
          gold: "#FFC93C",
          "gold-dark": "#E8A317",
          "gold-shadow": "#C98A12",
          streak: "#FF8A3D",
          gems: "#8B5CF6",
          life: "#FF5366",
          info: "#2BA3FF",
        },
      },
      fontFamily: {
        baloo: ["'Baloo 2'", "cursive"],
        nunito: ["'Nunito'", "sans-serif"],
        kids: ["'Nunito'", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pop": "pop 0.3s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "tada": "tada 1s ease-in-out",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pop: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "70%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        tada: {
          "0%": { transform: "scale(1)" },
          "10%, 20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%, 50%, 70%, 90%": { transform: "scale(1.1) rotate(3deg)" },
          "40%, 60%, 80%": { transform: "scale(1.1) rotate(-3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
      },
    },
  },
  plugins: [],
};
