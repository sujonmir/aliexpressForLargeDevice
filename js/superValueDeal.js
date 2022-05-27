$(".item").click(function(event){
    $(".item").removeClass('active');
    $(this).addClass('active');
});

$(".product-img").click(function(event){
    $(".product-img").removeClass('img-border');
    $(this).addClass('img-border');
});

// shrink when scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1305 || document.documentElement.scrollTop > 1305) {
    document.getElementById("new-cont").style.width= "1522px";
    document.getElementById("new-cont").style.marginLeft= "-205px";
    document.getElementById("border-rds").style.borderRadius= "0px";
    document.getElementById("new-cont").style.borderLeft= "190px solid #fff";
    document.getElementById("new-cont").style.borderRight= "130px solid #fff";
    document.getElementById("logo").style.backgroundColor= "#fff";
  } else {
    document.getElementById("new-cont").style.width = "1200px";
    document.getElementById("border-rds").style.borderRadius= "10px";
    document.getElementById("new-cont").style.borderLeft= "0";
    document.getElementById("new-cont").style.borderRight= "0";
    document.getElementById("new-cont").style.marginLeft= "0";
    document.getElementById("logo").style.backgroundColor= "#fff";
  }
}