// Global variables
const menuopen = document.querySelector('.header__hamburger')

const sidebar = document.querySelector('.sidebar')
const menuclose = document.querySelector('.sidebar__closebutton')
const headertarget = document.querySelector("header");


// Open Sidebar menu on mobile layout
menuopen.addEventListener('click', () => {
    sidebar.style.display = 'block'
    menuclose.style.display = 'block'
})

// Close sidebar menu on mobile layout
menuclose.addEventListener('click', () => {
    sidebar.style.display = 'none'
    menuclose.style.display = 'none'

})

window.onscroll = function() {
    scrollFunction()
};
    

function scrollFunction() {
    // let logotarget = document.getElementById("logo");
    // let placeholder = document.getElementById("header-placeholder");


    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {

        // headertarget.style.padding = "15px 10px";
        headertarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        // headertarget.style.height = '6rem'

        // placeholder.style.height = '6rem'

        
        // logotarget.style.fontSize = "15px";
    } else {

        // headertarget.style.padding = "25px 10px";
        headertarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        // headertarget.style.height = '7rem'

        // placeholder.style.height = '7rem'


        // logotarget.style.fontSize = "35px";
    }
}