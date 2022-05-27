(function($) {
    'use strict'

    $(document).ready(function() {
        $(".small_img").hover(function() {
            $(".big_img").attr('src', $(this).attr('src'));
        });
    });

    $(document).ready(function() {
        $(".m-img").on('click', function() {
            $(".big_img").attr('src', $(this).attr('src'));
        });
    });

    $(document).ready(function() {
        $(".big_img").imagezoomsl({
            zoomrange: [3, 3]
        });
    });


    //setting default attribute to disabled of minus button
    document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

    //taking value to increment decrement input value
    var valueCount

    //taking price value in variable
    var price = document.getElementById("price").innerText;


    //plus button
    document.querySelector(".plus-btn").addEventListener("click", function() {
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
        priceTotal();
    });

    //minus button
    document.querySelector(".minus-btn").addEventListener("click", function() {
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
    });

})(jQuery);
