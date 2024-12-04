/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Poppins" ,"sans-serif"],
        arial:["Arial" , "sans-serif"],
        inter:["Inter" , "sans-serif"]
      },
      fontWeight: {
        superlight:100,
        extralight:200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        superbold : 900
      },
      fontStyle:{
        italic: 'italic',
        normal: 'normal',
      },
      borderWidth: {
        '1': '1px', 
      },
    },
  },
  plugins: [],
}

