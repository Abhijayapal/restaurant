/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      fontFamily:['Bona Nova SC','sans-serif'],
    },
    colors: {
  
      darkblue:'#191d32',
      lightviolet:'#e0b1cb',
      medium:'#be95c4',
      high:'#d9c6d6',
      newpinkviolet:'#e5989b',
      blue:'#282F44',
      
      last2:'#9A8C98',
      footer:'#4C516D',
      navyblue:'#002244',
      colordark:'#221720',
      colormedium:'#9a6a94',
      colorlight:'#ccb3c8',
      colorgold:'#a1749b',
      colorgolden:'#3a2737',
    },
  },
  plugins: [],
};


