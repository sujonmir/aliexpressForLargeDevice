function myformsubmit3(){
    var emailEmail = document.getElementById('email3');
    var emailValue = document.getElementById('email3').value;

    var passPass = document.getElementById('password3');
    var passValue = document.getElementById('password3').value;

    var messageform = document.getElementById('messageform');
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+![a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (emailValue == "") {
        document.getElementById("messageform").innerHTML = "Please Enter Your Email Address or Member ID";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        messageform.style.display = "block";
        return false;
    } else if (emailValue.indexOf ('@') <= 2) {
        document.getElementById("messageform").innerHTML = "Invalid 3 of letter @ position";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        messageform.style.display = "block";
        return false;
    } else if (emailValue.search (/[1-9]/) == -1) {
        document.getElementById("messageform").innerHTML = "Email most be use (1-9) number";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        messageform.style.display = "block";
        return false;
    } else if ((emailValue.charAt(emailValue.length - 4) != '.') && (emailValue.charAt(emailValue.length - 3) != '.')) {
        document.getElementById("messageform").innerHTML = "Invalid '.com/.bd' position";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        messageform.style.display = "block";
        return false;
    } else if (regx.test(emailValue)) {
        document.getElementById("messageform").innerHTML = "The character cannot be used in Email ";
        emailEmail.focus();
        emailEmail.style.border = "1px solid red";
        messageform.style.display = "block";
        return false;
    } else if (passValue == ""){
        document.getElementById("messageform").innerHTML = "Password filed is empty";
        passPass.focus();
        passPass.style.border = "1px solid red";
        messageform.style.display = "block";

        emailEmail.style.border = "1px solid #ddd";
        return false;
    } else if ((passValue.length <= 5) || (passValue.length >= 21) ) {
        document.getElementById("messageform").innerHTML = "Password most be use 6 - 20 number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        messageform.style.display = "block";
        emailEmail.style.border = "1px solid #ddd";
        return false;
    } else if (passValue.search (/[1-9]/) == -1) {
        document.getElementById("messageform").innerHTML = "Password most be use (1-9) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        messageform.style.display = "block";
        emailEmail.style.border = "1px solid #ddd";
        return false;
    } else if (passValue.search (/[a-z]/) == -1) {
        document.getElementById("messageform").innerHTML = "Password most be use (a-z) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        messageform.style.display = "block";
        emailEmail.style.border = "1px solid #ddd";
        return false;
    } else if (passValue.search (/[A-Z]/) == -1) {
        document.getElementById("messageform").innerHTML = "Password most be use (A-Z) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        messageform.style.display = "block";
        emailEmail.style.border = "1px solid #ddd";
        return false;
    } else if (passValue.search (/[!\@\#\$\%\&\*\=]/) == -1) {
        document.getElementById("messageform").innerHTML = "Password most be use (!, @, #, $, %, &, *, =) number";
        passPass.focus();
        passPass.style.border = "1px solid red";
        messageform.style.display = "block";
        emailEmail.style.border = "1px solid #ddd";
        return false;
    } else {
        document.getElementById("messageform").innerHTML = "Register Successfull";
        passPass.focus();
        passPass.style.border = "1px solid green";
        messageform.style.display = "block";
        messageform.style.color = "greem";
        return true;
    }

}