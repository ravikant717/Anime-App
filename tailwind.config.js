/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}" // ← Add this if using expo-router
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        ratingBox: "#221F3D",
        searchBar: "#0F0D23",
        text: "#9CA4AB",
        darkAccent: "#AB8BFF",
        accentText: "#A8B5DB",
        secondaryText: "#D6C7FF",
      },
    },
  },
  plugins: [],
}