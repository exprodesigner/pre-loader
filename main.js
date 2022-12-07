
var preLoader = document.getElementById("pre-loader");
window.onload =()=>{
    setTimeout(function(){
        preLoader.style.display ='none';
 
}, 2000);
}



$(document).ready(() => {
    $('#slideShow .slick').slick({
        autoplay:true,
        autoplaySpeed:3000,
        speed:500,
        dots:true,
    });
   
});



$(".carousel").flickity({
    wrapAround: true,
    pageDots: false
});



const menuBtn = document.getElementById('mobileMenuButton');
const closeBtn = document.getElementById('closeButton');
const menu = document.getElementById('mobileNavBar');


menuBtn.addEventListener('click', () => {
    menu.style.display='flex';
    closeBtn.style.display="flex";

});

closeBtn.addEventListener('click', () => {
    menu.style.display='none';
    menuBtn.style.display="flex";

});



