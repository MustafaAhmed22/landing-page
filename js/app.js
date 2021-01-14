/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigationBar = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section')
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let navSections ='';
    sections.forEach(section =>{
        
        const sectionNav_set = section.dataset.nav;
        navSections += `<li><a class ='menu__link' href="#${section.id}">
        ${sectionNav_set}</a></li>`;
    })
    navigationBar.innerHTML =navSections;



// Add class 'active' to section when near top of viewport
const offset = section =>{
    return Math.floor(section.getBoundingClientRect().top)
}
// Scroll to anchor ID using scrollTO event
const remove = section =>{
    section.classList.remove('your-active-class')
}
const add = (addClass ,section) =>{
    if(addClass){
        section.classList.add('your-active-class')

    }
}

const sectionActive = ()=>{
sections.forEach(section=>{
    const offsetElement = offset(section)
    port = ()=>offsetElement < 150 && offsetElement >= -150 ;
    remove(section)
    add(port() ,section)
})
}
window.addEventListener('scroll',sectionActive)
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


