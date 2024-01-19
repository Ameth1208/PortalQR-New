/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e99df",
        btnHover: "#1d4ed8",
      },

      borderWidth: {
        1: "1px",
      },
      borderColor: (theme) => ({
        DEFAULT: theme("colors.gray.200", "currentColor"),
        "custom-gray": "#F7F7F8",
      }),
      boxShadow: {
        custom:
          "0px 0.5px 0.5px #EFEFEF, 0px 1px 0.5px rgba(239, 239, 239, 0.5)",
      },
    },
  },
  plugins: [],
};
