/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "mercury" : "#419EBB",
        "venus" : "#EDA249",
        "earth" : "#6F2ED6",
        "mars" : "#D14C32",
        "jupiter" : "#D83A34",
        "saturn" : "#CD5120",
        "uranus" : "#1EC2A4",
        "neptune" : "#2D68F0"
      }
    },
  },
  plugins: [],
};
