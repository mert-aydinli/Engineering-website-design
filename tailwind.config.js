/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    screens:{
      tablet: '580px',
      laptop: '940px',
      large: '1200px',
      xl: '1440px',
      
    },

    container: {
      center: true,
      screens:{
        
        normal : '1440px',
      }

    },


    extend: {
      
      fontFamily: {
        inter: ['Inter', 'serif'],
        poppins: ['Poppins', 'serif'],
      },

      colors: {
        'customgray-25': '#FCFCFD',
        'customgray-50': '#F9FAFB',
        'customgray-100': '#F2F4F7',
        'customgray-200': '#E4E7EC',
        'customgray-300': '#D0D5DD',
        'customgray-400': '#98A2B3',
        'customgray-500': '#667085',
        'customgray-600': '#475467',
        'customgray-700': '#344054',
        'customgray-800': '#1D2939',
        'customgray-900': '#101828',
      },

    },
  },
  plugins: [],
}

