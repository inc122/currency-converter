/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "transparent": "#00000000",
      "green-50": "#F0FDF4",
      "green-200": "#B9F8CF",
      "green-700": "#008236",
      "blue-50": "#EFF6FF",
      "blue-100": "#DBEAFE",
      "blue-200": "#BEDBFF",
      "blue-400": "#51A2FF",
      "blue-700": "#1447E6",
      "neutral-50": "#FAFAFA",
      "neutral-100": "#F5F5F5",
      "neutral-200": "#E5E5E5",
      "neutral-250": "#E7E7E7",
      "neutral-300": "#D4D4D4",
      "neutral-400": "#DEDEDE",
      "neutral-500": '#737373',
      "red-50": '#FEF2F2',
      "red-200": '#FFC9C9',
      "red-700": '#C10007',
      "white": '#ffffff',
      "white-tranparent": '#ffffffc0'
    },
    borderRadius: {
      "2xs": '4px',
      "xs": '8px',
      "sm": '12px',
      "lg": "16px",
      "full": "999999px"
    },
    screens: {
      "sm": '480px',
      "lg": '1024px'
    }
  },
  plugins: [],
}

