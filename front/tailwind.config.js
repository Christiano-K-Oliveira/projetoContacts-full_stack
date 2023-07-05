/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
    '.src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        1: "24px",
        2: "20px",
        3: "18px",
        4: "16px",
        5: "14px",
        6: "12px",
      },
      borderRadius: {
        50: "50%",
      },
      colors: {
        gray: {
          0: "#0B0D0D",
          1: "#212529",
          2: "#495057",
          3: "#868E96",
          4: "#ADB5BD",
          5: "#CED4DA",
          6: "#DEE2E6",
          7: "#E9ECEF",
          8: "#F1F3F5",
          9: "#F8F9FA",
          10: "#FDFDFD",
          50: "rgba(0, 0, 0, 0.5)"
        },
        white: {
          fixed: "#FFFFFF",
        },
        brand: {
          1: "#00a9d4",
          2: "#1c3166",
          3: "#69d2cd",
        },
      },
    },
  },
  plugins: [],
}
