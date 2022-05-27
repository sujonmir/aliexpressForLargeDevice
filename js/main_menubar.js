// window.addEventListener("scroll", function () {
//     var header = document.querySelector(".navbar-wrap");
//     header.classList.toggle("sticky", window.scrollY > 100);
// })

$(".nicemenu").nicemenu();

$(document).ready(function() {
    $(".owl-carousel1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        margin: 10
    });
});

$(document).ready(function() {
    $(".owl-carousel2").owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 5
    });
});
