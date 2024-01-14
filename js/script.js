const THEME_STORAGE_KEY = 'theme'
const htmlEl = document.querySelector("html")

const REGISTER_THEME_MODE = () => {
   const theme = localStorage.getItem(THEME_STORAGE_KEY);

   //check if it's first time visit, then act accordingly 
   if (theme === null) {

      // if it is, check the device prefrence and match app theme to it. Save in memory for next visit
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
         SET_DARK_MODE()
      }
      else {
         SET_LIGHT_MODE()
      }

   } else {
      //if it's not, check saved app theme and set
      htmlEl.classList.add(theme);
   }

   console.log(localStorage.getItem(THEME_STORAGE_KEY));
}

const SET_DARK_MODE = () => {
   if(htmlEl.classList.contains('light')) {
      htmlEl.classList.remove('light')
   }

   htmlEl.classList.add("dark");
   localStorage.setItem(THEME_STORAGE_KEY, "dark");

   console.log(localStorage.getItem(THEME_STORAGE_KEY, "light"));
}

const SET_LIGHT_MODE = () => {
   if(htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark')
   }

   htmlEl.classList.add("light");
   localStorage.setItem(THEME_STORAGE_KEY, "light");   

   console.log(localStorage.getItem(THEME_STORAGE_KEY, "light"));
}
document.onload = REGISTER_THEME_MODE()

const SWITCH_MODE = (ipnut) => {
   ipnut.checked
      ? SET_LIGHT_MODE()
      : SET_DARK_MODE()
}

