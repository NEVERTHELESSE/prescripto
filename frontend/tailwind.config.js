/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "var(--bgcolor)",
        fgcolor: "var(--fgcolor)",
        overColor: "var(--overColor)",
        primaryColor: "var(--primaryColor)",
        hoverCoverColor: "var(--hoverCoverColor)",
        coverColor: "var(--coverColor)",
        secondaryColor: "var(--secondaryColor)",
      },
    },
  },
  plugins: [],
};
