$(document).ready(function(){

    /*owl-carousel-slider*/
     $(".slider-active").owlCarousel({
        loop:false,
        items:12,
        margin:10,
        mouseDrag:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:8
            }
        }
     });
      
    /*owl-carousel-slider*/

})