

$(".nicemenu").nicemenu();

$(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        margin: 10
    });
});

$(document).ready(function () {
    $(".owl-carousel2").owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        margin: 5
    });
});

$(document).ready(function () {
    $(".owl-carousel-ps").owlCarousel({
        items: 1,
        nav: true
    });
});
// ----------------------------------------//
function myConfirmationFunction() {
  var cm= confirm("You're going to delete this item from cart!");
  if(cm == true){
	  document.getElementById("removesec").remove();
  }
}
/* $(document).ready(function () {
    $("#deleatsec").click(function () {
        $("#removesec").remove();
    });
	
}); */


// auto load new price/ old price /percentage etc
setInterval(function () {
    var oldPrice = document.getElementById("oldprice").innerText;
    var percentPrice = document.getElementById("percentprice").innerText;
    var newPrice = (oldPrice * percentPrice) / 100;
    var selPrice = oldPrice - newPrice
    document.getElementById("newprice").innerText = selPrice.toFixed(2);
    var qnt1 = document.getElementById('quantity1').value;
    if (qnt1 > 1) {
        document.querySelector(".minus-btn1").removeAttribute("disabled");
        document.querySelector(".minus-btn1").classList.remove("disabled")
    } else if (qnt1 == 1) {
        document.querySelector(".minus-btn1").setAttribute("disabled", "disabled")
    }
}, 1);

function maincheckbox() {
    setInterval(function () {
        var abc = document.getElementById("maincheck");
        var oldPrice = document.getElementById("oldprice").innerText;
        var percentPrice = document.getElementById("percentprice").innerText;
        var shippingPrice = document.getElementById("shipping").value = 28.77;
        var newPrice = (oldPrice * percentPrice) / 100;
        var emptyValue = 0.00;
        var selPrice = oldPrice - newPrice
        var quantity1Value = document.getElementById("quantity1").value;
        var subtotalPrice = selPrice * quantity1Value;
        var totalPriceSS = (subtotalPrice + shippingPrice);
        if (abc.checked == false) {
            document.getElementById("check1").checked = false;
            document.getElementById("check2").checked = false;
            document.getElementById("subtotal").innerText = emptyValue.toFixed(2);
            document.getElementById("shipingsub").innerText = emptyValue.toFixed(2);
            document.getElementById("alltotal").innerText = emptyValue.toFixed(2);
            document.getElementById("btn-text").innerText = 'Buy(0)';
        } else if (abc.checked == true) {
            document.getElementById("check1").checked = true;
            document.getElementById("check2").checked = true;
            document.getElementById("subtotal").innerText = selPrice.toFixed(2);
            document.getElementById("subtotal").innerText = subtotalPrice.toFixed(2);
            document.getElementById("shipingsub").innerText = shippingPrice.toFixed(2);
            document.getElementById("alltotal").innerText = totalPriceSS.toFixed(2);
            document.getElementById("btn-text").innerText = 'Buy(1)';
        }
    }, 1);
}

function maincheckbox1() {
    setInterval(function () {
        var abcd = document.getElementById("check1");
        var oldPrice = document.getElementById("oldprice").innerText;
        var percentPrice = document.getElementById("percentprice").innerText;
        var shippingPrice = document.getElementById("shipping").value = 28.77;
        var newPrice = (oldPrice * percentPrice) / 100;
        var emptyValue = 0.00;
        var selPrice = oldPrice - newPrice
        var quantity1Value = document.getElementById("quantity1").value;
        var subtotalPrice = selPrice * quantity1Value;
        var totalPriceSS = (subtotalPrice + shippingPrice);
        if (abcd.checked == false) {
            document.getElementById("check2").checked = false;
            document.getElementById("subtotal").innerText = emptyValue.toFixed(2);
            document.getElementById("shipingsub").innerText = emptyValue.toFixed(2);
            document.getElementById("alltotal").innerText = emptyValue.toFixed(2);
            document.getElementById("btn-text").innerText = 'Buy(0)';
        } else if (abcd.checked == true) {
            document.getElementById("check2").checked = true;
            document.getElementById("subtotal").innerText = selPrice.toFixed(2);
            document.getElementById("subtotal").innerText = subtotalPrice.toFixed(2);
            document.getElementById("shipingsub").innerText = shippingPrice.toFixed(2);
            document.getElementById("alltotal").innerText = totalPriceSS.toFixed(2);
            document.getElementById("btn-text").innerText = 'Buy(1)';
        }
    }, 1);
}

function maincheckbox2() {
    setInterval(function () {
        var abcde = document.getElementById("check2");
        var oldPrice = document.getElementById("oldprice").innerText;
        var percentPrice = document.getElementById("percentprice").innerText;
        var shippingPrice = document.getElementById("shipping").value = 28.77;
        var newPrice = (oldPrice * percentPrice) / 100;
        var emptyValue = 0.00;
        var selPrice = oldPrice - newPrice
        var quantity1Value = document.getElementById("quantity1").value;
        var subtotalPrice = selPrice * quantity1Value;
        var totalPriceSS = (subtotalPrice + shippingPrice);
        if (abcde.checked == false) {
            document.getElementById("subtotal").innerText = emptyValue.toFixed(2);
            document.getElementById("shipingsub").innerText = emptyValue.toFixed(2);
            document.getElementById("alltotal").innerText = emptyValue.toFixed(2);
            document.getElementById("btn-text").innerText = 'Buy(0)';
        } else if (abcde.checked == true) {
            document.getElementById("subtotal").innerText = selPrice.toFixed(2);
            document.getElementById("subtotal").innerText = subtotalPrice.toFixed(2);
            document.getElementById("shipingsub").innerText = shippingPrice.toFixed(2);
            document.getElementById("alltotal").innerText = totalPriceSS.toFixed(2);
            document.getElementById("btn-text").innerText = 'Buy(1)';
        }
    }, 1);
}



//setting default attribute to disabled of minus button
document.querySelector(".minus-btn1").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount

//plus button
document.querySelector(".plus-btn1").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity1").value;

    //input value increment by 1
    valueCount++;

    //setting increment input value
    document.getElementById("quantity1").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn1").removeAttribute("disabled");
        document.querySelector(".minus-btn1").classList.remove("disabled")
    }

    //calling price function
    priceTotal()
})

//minus button
document.querySelector(".minus-btn1").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity1").value;

    //input value increment by 1
    valueCount--;

    //setting increment input value
    document.getElementById("quantity1").value = valueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn1").setAttribute("disabled", "disabled")
    }

    //calling price function
    priceTotal()
})