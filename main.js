
var preLoader = document.getElementById("pre-loader");
window.onload =()=>{
    setTimeout(function(){
        preLoader.style.display ='none';
 
}, 1500);
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
    menu.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = "flex";

});

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = "none";
    menuBtn.style.display = "flex";

});



const paymentBuyBtn = document.querySelectorAll(".product-cart");
const paymentCloseBtn = document.getElementById("paymentCloseButton");
const paymentPage = document.getElementById("paymentHeader");


paymentBuyBtn.forEach((item) => {
    item.addEventListener('click', () => {
        paymentPage.style.display = 'flex';

    })
});

paymentCloseBtn.addEventListener('click', () => {
    paymentPage.style.display ='none'
}) 


















