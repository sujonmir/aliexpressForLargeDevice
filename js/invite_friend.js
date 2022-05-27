function show(){
    document.getElementById('sidebar').classList.toggle('active');
	var c= document.getElementById('tb_close').children;
	c[0].classList.toggle('tb_close');
	c[0].classList.toggle('tb_line');
	c[1].classList.toggle('tb_close');
	c[1].classList.toggle('tb_line');
	c[2].classList.toggle('tb_close');
	c[2].classList.toggle('tb_line');
}
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}