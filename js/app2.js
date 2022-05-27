setInterval(function () {
    var qntt = document.getElementById('quantity').value;
    if (qntt < 99) {
        var element = document.getElementById("left-value");
        element.classList.add("mystyle");
        pricetoggle.innerHTML = "1445"
        var element = document.getElementById("right-value");
        element.classList.remove("mystyle");
    } else if (qntt > 99) {
        var element = document.getElementById("right-value");
        element.classList.add("mystyle");
        pricetoggle.innerHTML = "1394"
        var element = document.getElementById("left-value");
        element.classList.remove("mystyle");
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled")
    }
}, 1);