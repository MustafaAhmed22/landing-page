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
 
*/
const navigationBar = document.querySelector('#navbar__list')
const sections =Array.from(document.querySelectorAll('section')) 

// build the nav

let navSections =[];
    for(section of sections){
        const sectionNav_set = section.dataset.nav;
        const sectionId = section.id;
        navSections += `<li><a class ='menu__link' href="#${sectionId}">
        ${sectionNav_set}</a></li>`;
    }

    navigationBar.innerHTML =navSections;


function removeSectionActive(section){
    section.classList.remove('your-active-class')
    section.style.backgroundColor ='backgroundColor : linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);'
}

function addSectionActive(addclass, section){
    if(addclass){
        section.classList.add('your-active-class')
        section.style.backgroundColor = 'black'
    }

}

function viewPort(section){
    return section.getBoundingClientRect().top >= 0
    }
    
 let port = (offsetElement)=>offsetElement < 150 && offsetElement >= -150 ;
/*
function sectionActive (){
sections.forEach(section=>{
    let offsetElement = viewPort(section)
    port(offsetElement)

    removeSectionActive(section)
    addSectionActive(port(offsetElement) ,section)
})
}
*/
function sectionActiveClass(){
    for(section of sections){
        var offsetElement = viewPort(section)
        if(offsetElement){

            if(!section.classList.contains('your-active-class')){
                port(offsetElement)
                    section.classList.add('your-active-class')
               // addSectionActive(port(offsetElement) ,section)
            }else{
                section.classList.remove('your-active-class')
               // removeSectionActive(section)
            }
        }
    }
}
document.addEventListener('scroll' , sectionActiveClass)
