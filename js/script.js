const constants = {
   THEME_STORAGE_KEY: 'theme',
   TAB_STORAGE_KEY: 'tab'
}
const htmlEl = document.querySelector("html")
const tabContent = document.querySelector(".app__tabs__content")

const tab = {
   active: 'projects',
   skills: document.getElementById('skills'),
   projects: document.getElementById('projects')
}


/**
 * Get & set local state
 */

const REGISTER_CONSTANTS = () => {

   for (const constant in constants) {
      const localConstant = localStorage.getItem(constants[constant])

      //check if it's first time visit
      if (localConstant === null) {
         if (constant[constant] === 'theme') {
            REGISTER_THEME_MODE()
         }
      }
      else {
         constants[constant] === 'theme'
            ? htmlEl.classList.add(localConstant)
            : REGISTER_TAB(localConstant)
      }
   }
}


/**
 *  Theming & control
 */

const REGISTER_THEME_MODE = () => {

   // check the device prefrence and match app theme to it. Save in memory for next visit
   if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      SET_DARK_MODE()
   }
   else {
      SET_LIGHT_MODE()
   }

}

const SET_DARK_MODE = () => {
   if (htmlEl.classList.contains('light')) {
      htmlEl.classList.remove('light')
   }

   htmlEl.classList.add("dark");
   localStorage.setItem(constants.THEME_STORAGE_KEY, "dark");
}

const SET_LIGHT_MODE = () => {
   if (htmlEl.classList.contains('dark')) {
      htmlEl.classList.remove('dark')
   }

   htmlEl.classList.add("light");
   localStorage.setItem(constants.THEME_STORAGE_KEY, "light");
}

const SWITCH_MODE = (ipnut) => {
   ipnut.checked
      ? SET_LIGHT_MODE()
      : SET_DARK_MODE()
}


/**
 * Tabs control
 */

const SWITCH_TAB = (incomingTab, el_src) => {

   if (incomingTab === 'projects') {
      //update state
      tab.active = 'projects'

      //if the change was triggered by an element interaction
      if (el_src === 'el') {

         //start transition
         tabContent.classList.add('in-transition')

         //change tab
         setTimeout(() => {
            SHOW_PROJECTS_TAB()

            //end transition
            tabContent.classList.remove('in-transition')
         }, 500);
      }
      else {
         SHOW_PROJECTS_TAB()
      }
   }
   else {
      //upate state
      tab.active = 'skills'

      //if the change was triggered by an element interaction
      if (el_src === 'el') {

         //start transition
         tabContent.classList.add('in-transition')

         //change tab
         setTimeout(() => {
            SHOW_SKILLS_TAB()

            //end transition
            tabContent.classList.remove('in-transition')
         }, 500);
      }
      else {
         SHOW_SKILLS_TAB()
      }
   }
}

const REGISTER_TAB = (tab) => {
   SWITCH_TAB(tab)
}

const SHOW_PROJECTS_TAB = () => {
   //upate DOM
   tab.skills.classList.remove('shown')
   tab.projects.classList.add('shown')

   //update localstorage
   localStorage.setItem(constants.TAB_STORAGE_KEY, 'projects')
}

const SHOW_SKILLS_TAB = () => {
   //update DOM
   tab.projects.classList.remove('shown')
   tab.skills.classList.add('shown')

   //update localstorage
   localStorage.setItem(constants.TAB_STORAGE_KEY, 'skills')
}

document.addEventListener('DOMContentLoaded', () => {
   REGISTER_CONSTANTS()
}, false);

//Add pressed state to CTA buttons
document.querySelectorAll('.app__cta__button').forEach(button => {
   button.addEventListener('mousedown', () => {
      button.classList.add('pressed')
   })
});

document.querySelectorAll('.app__cta__button').forEach(button => {
   button.addEventListener('mouseup', () => {
      button.classList.remove('pressed')
   })
});

