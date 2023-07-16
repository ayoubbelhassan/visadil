/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {
 
      fontFamily:{
        Cairo:['Cairo', 'sans-serif']
      },
      backgroundImage:{
        homebg:'url("./assets/homebg.png")',
        vtt:'url("./assets/vtt1.png")',
      },
      colors: {
        customColor: '#FFD08B',
        yel: '#FBAD15',
        ble: '#0049AA',
      },
    },
  },
  plugins: [],
}