setInterval(function () {
    var qnt = document.getElementById('quantity').value;
    var priceval = document.getElementById("price").innerText;
    var qntPriceval = qnt * priceval;
    var qntPriceval1 = qntPriceval.toFixed(2);
    var shipVal = 28.77
    var tolval = qntPriceval + shipVal
    var totalPriceIntoValue = tolval.toFixed(2);
    document.getElementById("ps-price").innerText = qntPriceval1;
    document.getElementById("total-price").innerText = totalPriceIntoValue;
    document.getElementById("total-price1").innerText = totalPriceIntoValue;
    // document.querySelector(".minus-btn").removeAttribute("disabled");
    // document.querySelector(".minus-btn").classList.remove("disabled")
        if (qnt > 1) {
            document.querySelector(".minus-btn").removeAttribute("disabled");
            document.querySelector(".minus-btn").classList.remove("disabled")
        } else if (qnt == 1) {
            document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
        }
}, 1);
//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount

//taking price value in variable
var price = document.getElementById("price").innerText;
var shipValue = 28.77
var shipText = document.getElementById("shipping").innerText;

//price calculation function
function priceTotal() {
    var priceIntoValue = valueCount * price;
    var totalPriceIntoValue = priceIntoValue.toFixed(2);
    document.getElementById("ps-price").innerText = totalPriceIntoValue;

    var priceShipping = priceIntoValue + shipValue;
    var totalPrice = priceShipping.toFixed(2);

    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("total-price1").innerText = totalPrice;


    document.getElementById("shippingvalue").innerText = shipText;
}

//plus button
document.querySelector(".plus-btn").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount++;

    //setting increment input value
    document.getElementById("quantity").value = valueCount;

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }

    //calling price function
    priceTotal()
})

//minus button
document.querySelector(".minus-btn").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount--;

    //setting increment input value
    document.getElementById("quantity").value = valueCount

    if (valueCount == 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }

    //calling price function
    priceTotal()
})





// --------------------------form validation -------------------------

function orderconfirm() {
    var nameForm = document.getElementById('sp-name');
    var nameValue = document.getElementById('sp-name').value;

    var numberForm = document.getElementById('sp-number');
    var numberValue = document.getElementById('sp-number').value;

    var addressForm = document.getElementById('sp-address');
    var addressValue = document.getElementById('sp-address').value;

    var zipForm = document.getElementById('inputZip');
    var zipValue = document.getElementById('inputZip').value;

    var name = document.getElementById('name-text');
    var address = document.getElementById('phone-text');
    var city = document.getElementById('address-text');
    var postcode = document.getElementById('zip-text');

    if (nameValue == "" || nameValue.length < 2 || nameValue.length > 16) {
        document.getElementById("name-text").innerHTML = "Please enter a Contact Name.";
        document.getElementById("phone-text").innerHTML = "Please enter mobile phone number";
        document.getElementById("address-text").innerHTML = "Please enter an Address";
        document.getElementById("zip-text").innerHTML = "Please enter a ZIP/Postal Code";

        nameForm.focus();
        nameForm.style.border = "1px solid #e32c2b";
        numberForm.style.border = "1px solid #e32c2b";
        addressForm.style.border = "1px solid #e32c2b";
        zipForm.style.border = "1px solid #e32c2b";

        return false;
    } else if (numberValue == "" || numberValue.length < 11) {
        document.getElementById("name-text").innerHTML = "Success Contact Name.";
        document.getElementById("name-text").style.color = "#2bb573";
        document.getElementById("phone-text").innerHTML = "Please enter mobile phone number";
        document.getElementById("address-text").innerHTML = "Please enter an Address";
        document.getElementById("zip-text").innerHTML = "Please enter a ZIP/Postal Code";

        numberForm.focus();
        nameForm.style.border = "1px solid #2bb573";
        numberForm.style.border = "1px solid #e32c2b";
        addressForm.style.border = "1px solid #e32c2b";
        zipForm.style.border = "1px solid #e32c2b";
        return false;
    } else if (addressValue == "" || addressValue.length < 5) {
        document.getElementById("name-text").innerHTML = "Success Contact Name.";
        document.getElementById("name-text").style.color = "#2bb573";
        document.getElementById("phone-text").innerHTML = "Please enter mobile phone number";
        document.getElementById("phone-text").style.color = "#2bb573";
        document.getElementById("address-text").innerHTML = "Please enter an Address";
        document.getElementById("zip-text").innerHTML = "Please enter a ZIP/Postal Code";

        addressForm.focus();
        nameForm.style.border = "1px solid #2bb573";
        numberForm.style.border = "1px solid #2bb573";
        addressForm.style.border = "1px solid #e32c2b";
        zipForm.style.border = "1px solid #e32c2b";
        return false;
    } else if (zipValue == "" || zipValue.length < 4 || zipValue.length > 5) {
        document.getElementById("name-text").innerHTML = "Success Contact Name.";
        document.getElementById("name-text").style.color = "#2bb573";
        document.getElementById("phone-text").innerHTML = "Please enter mobile phone number";
        document.getElementById("phone-text").style.color = "#2bb573";
        document.getElementById("address-text").innerHTML = "Please enter an Address";
        document.getElementById("address-text").style.color = "#2bb573";
        document.getElementById("zip-text").innerHTML = "Please enter a ZIP/Postal Code";

        zipForm.focus();
        nameForm.style.border = "1px solid #2bb573";
        numberForm.style.border = "1px solid #2bb573";
        addressForm.style.border = "1px solid #2bb573";
        zipForm.style.border = "1px solid #e32c2b";
        return false;
    } else {
        document.getElementById("name-text").innerHTML = "Success Contact Name.";
        document.getElementById("name-text").style.color = "#2bb573";
        document.getElementById("phone-text").innerHTML = "Please enter mobile phone number";
        document.getElementById("phone-text").style.color = "#2bb573";
        document.getElementById("address-text").innerHTML = "Please enter an Address";
        document.getElementById("address-text").style.color = "#2bb573";
        document.getElementById("zip-text").innerHTML = "Please enter a ZIP/Postal Code";
        document.getElementById("zip-text").style.color = "#2bb573";

        nameForm.style.border = "1px solid #2bb573";
        numberForm.style.border = "1px solid #2bb573";
        addressForm.style.border = "1px solid #2bb573";
        zipForm.style.border = "1px solid #2bb573";
        return true;
    }

}


$(document).ready(function () {
    $("#show").click(function () {
        $(this).css("display", "none");
        $("#Przelewy24").css("display", "block");
        $("#WebMoney").css("display", "block");
        $("#Mobile-Payment").css("display", "block");
        $("#QIWI-Account").css("display", "block");
        $("#PayU").css("display", "block");
        $("#Sofort-Bank").css("display", "block");
        $("#Bancontact").css("display", "block");
        $("#Online-Banks").css("display", "block");
        $("#YooMoney").css("display", "block");
    });
});