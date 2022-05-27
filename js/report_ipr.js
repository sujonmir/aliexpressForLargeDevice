$(document).ready(function() {
 
  $("#banner_slider").owlCarousel({
	navigation : false, // Show next and prev buttons
 	slideSpeed : 300,
    paginationSpeed : 400,
 	items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
    loop:true,
    autoplay:true,
    autoplayHoverPause: true,
    nav:true,
 
  });
  
  $("#faq_slider").owlCarousel({
	navigation : false, // Show next and prev buttons
 	slideSpeed : 200,
    paginationSpeed : 400,
 	items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
    loop:false,
    autoplay:true,
    autoplayHoverPause: true,
    nav:true,
 
  });


  $("#faq_slider").each(function(){
	$('.owl-dot').each(function(){
	$(this).text($(this).index()+1+"/5");
	});
  })
  
 
});