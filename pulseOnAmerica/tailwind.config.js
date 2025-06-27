// =========================================================================
// File: frontend/tailwind.config.js
// Description: This is the main configuration file for Tailwind CSS.
//              The 'content' array tells Tailwind which files to scan for
//              CSS class names. This is the most important part.
// =========================================================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}