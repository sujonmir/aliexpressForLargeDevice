$(".nicemenu").nicemenu();
$(document).ready(function() {
function animate() {
	let quality_overview = $('.quality_overview');
	quality_overview.toggleClass('active');
	quality_overview.toggleClass('reActive');
}
setInterval(animate, 12000)
window.onscroll = function () {  
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; 
        if (scrollTop > 250 && scrollTop < 450 ) {
            $(".con1_text").css('font-size','42px');
            $(".con1_text").css('color', '#000');
        }else{
            $(".con1_text").css('font-size','38px');
            $(".con1_text").css('color','#646464');
        }
        if (scrollTop > 450 && scrollTop < 605 ) {
            $(".mf_title_1").css('font-size','42px');
            $(".mf_title_1").css('color', '#000');
        }else{
            $(".mf_title_1").css('font-size','38px');
            $(".mf_title_1").css('color','#646464');
        }
        if (scrollTop > 800 && scrollTop < 1400 ) {
            $(".a2").css('font-size','42px');
            $(".a2").css('color', '#000');
        }else{
			$(".a2").css('font-size','38px');
            $(".a2").css('color','#646464');
        }
        if (scrollTop > 1800 && scrollTop < 2400 ) {
			$(".a3").css('font-size','42px');
            $(".a3").css('color', '#000');
        }else{
			$(".a3").css('font-size','38px');
            $(".a3").css('color','#646464');
        }
        if (scrollTop > 2400 && scrollTop < 2800 ) {
			$(".a4").css('font-size','42px');
            $(".a4").css('color','#000');
        }else{
			$(".a4").css('font-size','38px');
            $(".a4").css('color','#646464');
        }
        if (scrollTop > 2800 && scrollTop < 3400 ) {
			$(".a5").css('font-size','42px');
            $(".a5").css('color','#000');
        }else{
			$(".a5").css('font-size','38px');
            $(".a5").css('color','#646464');
        }
        if (scrollTop > 3400 && scrollTop < 3800 ) {
			$(".a6").css('font-size','42px');
            $(".a6").css('color','#000');
        }else{
			$(".a6").css('font-size','38px');
            $(".a6").css('color','#646464');
        }
    }
});

