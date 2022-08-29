/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          default: "#f55661",
          dark: '#2a2f33',
          dark2: '#31363b',
          dark3: '#393d42',
          home: '#f5f7f8',
          published: '#acacac',
          scheduled: '#3ac183',
          needApproval: '#f7bf38',
          error: '#fb6450',
          notes: '#67b1f2',
          deepGray: '#959595',
        },
      },
    },
  },
  plugins: [],
}