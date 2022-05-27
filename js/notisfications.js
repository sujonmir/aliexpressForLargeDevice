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

// increment
		let addBtn = document.querySelector('#add');
		let subBtn = document.querySelector('#sub');
		let qty = document.querySelector('#qtyBox');
		
		addBtn.addEventListener('click',()=>{
			qty.value = parseInt(qty.value) + 1;
		});

		subBtn.addEventListener('click',()=>{
			if (qty.value <= 0) {
				qty.value = 0;
			}
			else{
				qty.value = parseInt(qty.value) - 1;
			}
		});

// decrement

// icon changer
$('.single-option').on('click', icon);

function icon(e) {
  $(this).find('.fa').toggleClass('fa fa-plus fa fa-minus');
}
// icon changer