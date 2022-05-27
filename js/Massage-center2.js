// massage-header
$(document).ready(function(){
    $('.message-header').on('click',function(){
        $('#chat-hide').toggle();
    })
})
// massage-header

// service-header
$(document).ready(function(){
    $('.Service-header').on('click',function(){
        $('#sr-hide').toggle();
    })
})
// service-header

// setting-header
$('document').ready(function(){
    $('.setting-header').on('click',function(){
        $('#st-hide').toggle();
    })
})
// setting-header
function myFunction() {
  var myobj = document.getElementById("demo");
  myobj.remove();
}

// icon changer
$('.single-option').on('click', icon);

function icon(e) {
  $(this).find('.fa').toggleClass('fa fa-plus fa fa-minus');
}
// icon changer