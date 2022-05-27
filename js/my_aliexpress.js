

$("#mystore").click(function(){
  $("#favorite").hide();
});
$("#mystore1").click(function(){
  $("#favorite2").hide();
});

$("#mystore2").click(function(){
  $("#favorite1").hide();
});

// tap
$(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
  $('.nav-tabs a').on('shown.bs.tab', function(event){
    var x = $(event.target).text();         // active tab
    var y = $(event.relatedTarget).text();  // previous tab
    $(".act span").text(x);
    $(".prev span").text(y);
  });
});

