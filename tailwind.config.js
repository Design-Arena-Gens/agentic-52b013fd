/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7ff",
          100: "#deeaff",
          200: "#bed1ff",
          300: "#93b0ff",
          400: "#6487ff",
          500: "#3e62ff",
          600: "#2746db",
          700: "#1d36ac",
          800: "#1b318a",
          900: "#1c2d6e"
        }
      },
      fontFamily: {
        sans: ["'Inter var'", "Inter", "system-ui", "sans-serif"],
        display: ["'Poppins'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 12px 50px -12px rgba(62, 98, 255, 0.35)"
      },
      backgroundImage: {
        'grid-light': "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
