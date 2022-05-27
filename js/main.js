$(document).ready(function () {
    $(".owl-carousel-topranking").owlCarousel({
        items: 1,
        nav: true,
        dots: false
    });
});




$('#basic').flagStrap();
$('#language__').flagStrap({
	countries: {
        "GB": "UK English",
        "BD": "Bengali",
        "US": "US English",

    },
    placeholder: {
            value: '',
            text: 'Please select Language'
        }
});
$('#curency_').flagStrap({
	 countries: {
        "AU": "AUD- Australian Dollar",
        "BD": "BDT- Bangladeshi Taka",
        "US": "USD- United States Dollar"
    },
    placeholder: {
            value: '',
            text: 'Please select Currency'
        }
});
// the `name` attribute for the actual `select` input
inputName: "country";

// The bootstrap 'class' for this dropdown
buttonSize: "btn-md";

// The bootstrap 'class' for this drop down
buttonType: "btn-default";

// The `margin` between `flag` and `text label`
labelMargin: "10px";

// <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>able or full height drop down
scrollable: true;

// `max-height` for the scrollable drop down
scrollableHeight: "250px";

// Only show specific countries
// countries: '{"US": "United States","CA": "Canada"}'>

window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar-wrap");
    header.classList.toggle("sticky", window.scrollY > 100);
})

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

$(document).ready(function(){
  $(".owl-carousel3").owlCarousel({
      items: 2,
      loop: true,
      nav:true,
      margin: 5,
      autoplay: true
  });
});
