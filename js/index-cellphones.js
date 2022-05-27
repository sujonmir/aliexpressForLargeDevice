//sidebar fixed position

$(window).scroll(function(){
	if ($(this).scrollTop()<2250) {
		$("#main_siderbar").addClass("sidebar_js");;
	}else{
		$("#main_siderbar").removeClass("sidebar_js");
	}
});

//toltip script
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
//price range onmouseover 

	
	var minInput = document.getElementById('minInput');
	var maxInput = document.getElementById('maxInput');
function price1L(){
	minInput.value = 1;
	maxInput.value = 1.32;
}
function price2L(){
	minInput.value = 1.32;
	maxInput.value = 2.15;
}
function price3L(){
	minInput.value = 2.15;
	maxInput.value = 4.16;
}
function price4L(){
	minInput.value = 4.16;
	maxInput.value = 10.78;
}
function price5L(){
	minInput.value = 10.78;
	maxInput.value = '';
}






//pagination
let options = {
        numberPerPage:1, //Cantidad de datos por pagina
        goBar:true, //Barra donde puedes digitar el numero de la pagina al que quiere ir
        pageCounter:true, //Contador de paginas, en cual estas, de cuantas paginas
    };

    let filterOptions = {
        el:'#searchBox' //Caja de texto para filtrar, puede ser una clase o un ID
    };

    paginate.init('.myTable',options,filterOptions);
       