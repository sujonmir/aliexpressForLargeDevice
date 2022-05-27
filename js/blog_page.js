$(document).ready(function() {
	$('.slick-carousel').slick({
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1
	});
	
	let navbar = $('.blog_page_iar_navigationBar')
    window.addEventListener("scroll", function() {
	let scrollTop = window.pageYoffset || document.documentElement.scrollTop;
    if(scrollTop >= 256) {
          navbar.css('width', '100%');
     } else if(scrollTop < 256) {
		navbar.css('width', '100%'); 
	 }
    })
  
	$('.blog_page_iar_carousel').scrollWatchMapTo('nav ul li')
})