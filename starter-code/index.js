console.log('hi')


const nav = document.querySelector(".primary-navigation");
// console.log(nav)
const navToggle = document.querySelector('.mobile-nav-toggle');

// when someone clicks hamburger buton 
navToggle.addEventListener('click', ()=>{

  const visibility = nav.getAttribute("data-visible") ;

  // if the nav closed - opon 
  if(visibility === "false"){
    nav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
  } else {
// if open - close 
nav.setAttribute("data-visible", false)
navToggle.setAttribute("aria-expanded", false) 
  }
//   console.log(visibility)
//console.log(navToggle.getAttribute('aria-expanded'))
})
function populate(data){
  const role = data.crew[0].role;
  console.log(role)
}