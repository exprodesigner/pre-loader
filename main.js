
var preLoader = document.getElementById("pre-loader");
window.onload =()=>{
    setTimeout(function(){
        preLoader.style.opacity ='0';
 
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


