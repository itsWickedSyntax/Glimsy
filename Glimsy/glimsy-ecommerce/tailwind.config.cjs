module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#f59e0b',
        },
        dark: {
          background: '#1f2937',
          text: '#ffffff',
          primary: '#fbbf24',
        },
      },
    },
  },
  plugins: [],
};