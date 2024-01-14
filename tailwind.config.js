/** @type {import('tailwindcss').Config} */
module.exports = {
   
   darkMode: 'class',
   
   content: ["./*.html", "./js/*.js"],


   theme: {
      extend: {
         colors: {
            'tcd-yellow': '#F0A315',
            'tcd-off-white': '#E9EBEC',
            'tcd-grey': '#3D3D3D',
            'tcd-grey-2': '#575757',
            'tcd-grey-3': '#D7D7D7',
            'tcd-navy': '#0C151D',  
            'tcd-off-white-2': '#A3ABB2'
         }  
      },
   },
   plugins: [],
}

