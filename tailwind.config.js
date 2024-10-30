module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1024': { 'max': '1024px' }, 
        "500": { 'max': '500px'}
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(#6541fd, #3d31ee);"
      },
    },
  },
  plugins: [],
}