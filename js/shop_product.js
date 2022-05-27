$(document).ready(function(){
  $(".group-item").click(function(){
  	$(this).children().toggleClass("fa-minus-square fa-plus-square")
  });
  $(".sp_hflastb").click(function(){
  	$(".sp_controller").toggleClass("fa-chevron-up fa-chevron-down")
  });
  $(".dropdown_base").hover(function(){
  	$(".sp_db_icon").children().toggleClass("fa-chevron-down fa-chevron-up");
  	$(".dropdown").show()
  });
  $(".dp2_base").hover(function(){
  	$(".dp2").show()
  });
});
$(document).click(function(){
  $(".dropdown").hide();
  $(".dp2").hide();
});