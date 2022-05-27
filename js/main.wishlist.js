

		function min(){
			var d = document.getElementById('display2');
			var dValue = display2.value;
			d.value = dValue -1;
		}
		function max(){
			var e = document.getElementById('display2');
			var eValue = parseInt(display2.value);
			e.value = eValue + 1;
		}

$("#remove").click(function(){
  $("#dear1").hide();
});
$("#remove2").click(function(){
  $(".dear2").hide();
});
$("#remove3").click(function(){
  $(".dear3").hide();
});
$("#remove4").click(function(){
  $(".dear4").hide();
});