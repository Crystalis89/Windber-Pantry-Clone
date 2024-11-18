window.onscroll = function() {
    scrollFunction()
};
    

function scrollFunction() {
    let headertarget = document.querySelector("header");
    let logotarget = document.getElementById("logo");
    let placeholder = document.getElementById("header-placeholder");


    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {

        headertarget.style.padding = "15px 10px";
        headertarget.style.opacity = '0.95';
        headertarget.style.height = '6rem'

        placeholder.style.height = '6rem'

        
        logotarget.style.fontSize = "15px";
    } else {

        headertarget.style.padding = "25px 10px";
        headertarget.style.opacity = '1';
        headertarget.style.height = '7rem'

        placeholder.style.height = '7rem'


        logotarget.style.fontSize = "35px";
    }
}