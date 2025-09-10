/** @type {import('tailwindcss').Config} */

const tailwindConfig = {
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [],
};

export default tailwindConfig;