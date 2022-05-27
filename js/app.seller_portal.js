window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
})


$(document).ready(function() {
    $(".owl-carousel1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ['<img src="images/owl-navicon.png" alt="" />','<img src="images/owl-navicon.png" alt="" />',]
    });
});
