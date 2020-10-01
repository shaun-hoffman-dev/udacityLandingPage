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

const navList = document.getElementById('navbar__list');
const headingList = document.getElementsByTagName('h2');
const sectionList = document.getElementsByTagName('section');

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the nav
for (let i = 0; i<headingList.length; i++){
    let navTitle = headingList[i].textContent;
    let navItem = document.createElement('li');
    let parentElementId = headingList[i].parentElement.parentElement.id;
    
    navItem.classList.add("menu__link");
    navItem.innerHTML = `${navTitle}`;
    navItem.addEventListener('click',()=>
        document.getElementById(parentElementId).scrollIntoView(
        {behavior: 'smooth'}));
    navList.appendChild(navItem);
}

// Add class 'active' to section when near top of viewport
function checkActive(){
    for (let i = 0; i<sectionList.length; i++){
        let sectionTop = sectionList[i].getBoundingClientRect().top;
        if (sectionTop <= 400 && sectionTop >= -400){
            sectionList[i].classList.add('your-active-class');
        } else {
            sectionList[i].classList.remove('your-active-class');
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active
window.addEventListener('scroll', function(e){
    checkActive();
  });

