//All orders pages

$(document).ready(function(){
	
	$('#arrow').click(function(){
		$('.fas').toggleClass('fa-angle-up fa-angle-down');
	});
});

//manage feedback page

$(document).ready(function(){
	$('.closeIcon').click(function(){
		$('.guidelines').css("display", "none");
	});
});