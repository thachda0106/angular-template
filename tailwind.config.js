/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
