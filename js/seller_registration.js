function $(a) {
	return document.querySelector(a);
}
let select_country_toggle = $('#select_country_toggle');
select_country_toggle.onclick = function() {
	let select_country_toggle_content = $('#select_country_toggle_content');
	this.classList.toggle('active')
	select_country_toggle_content.classList.toggle('active');
}
let individualRadioBtn =  $('#individual');
let businessRadioBtn =  $('#business');
individualRadioBtn.onclick = function() {
	$('#short_info').innerText = 'Individual will need Personal Identity card and at least 18 years old in order to sell as Individual on Daraz';
}
businessRadioBtn.onclick = function() {
	$('#short_info').innerText = 'Please make sure you have active Business License in order to sell on Daraz as a Corporate';
}
function show(a) {
	$(a).style.visibility = 'visible';
}
function hide(a) {
	$(a).style.visibility = 'hidden';
}
//form input field
let mobile_num = $('#mobile_num'),
	pwd = $('#pwd'),
	confirm_pwd = $('#confirm_pwd'),
	email = $('#email'),
	shop_name = $('#shop_name');
//error messages selector
let mobile_num_error_message = $('.mobile_num_error_message'),
	pwd_error_message = $('.pwd_error_message'),
	confirm_pwd_error_message = $('.confirm_pwd_error_message'),
	email_error_message = $('.email_error_message'),
	shop_name_error_message = $('.shop_name_error_message'),
	formSubmit = $('#seller_regi_iar_form');
//error messages
let mobileerror_message = true,
	pwd_message = true,
	confirm_error_message = true,
	email_validate_error_message = true,
	shop_error_message = true;
//hide all the error messages by default
hide('.mobile_num_error_message'),
hide('.pwd_error_message'),
hide('.confirm_pwd_error_message'),
hide('.email_error_message'),
hide('.shop_name_error_message');
mobile_num.onkeyup = function() {
	mobileNumValidate()
}
pwd.onkeyup = function() {
	passwordValidate()
}
confirm_pwd.onkeyup = function() {
	confirmPasswordValidate()
}
shop_name.onkeyup = function() {
	shopNameValidate()
}
email.onkeyup = function() {
	emailValidate()
}
function mobileNumValidate() {
	let userMobileNum = mobile_num.value;
	if(userMobileNum.length == '') {
	   mobile_num_error_message.innerText = 'The item can not be empty';
	   show('.mobile_num_error_message');
	   mobile_num.focus()
	   mobileerror_message = false
	   return false;
	} else if(userMobileNum.indexOf(1) != 0) {
		mobile_num_error_message.innerText = 'Mobile format incorrect';
		 show('.mobile_num_error_message');
		 mobile_num.focus()
		 mobileerror_message = false
		 return false;
	} else if(userMobileNum.length > 10 || userMobileNum.length < 10) {
		show('.mobile_num_error_message');
		mobile_num.focus()
		mobile_num_error_message.innerText = 'Please enter at least 10 digits';
		mobileerror_message = false
		return false;
	} else {
		hide('.mobile_num_error_message');
		mobileerror_message = true
		return true;
	}
}
function passwordValidate() {
	let password = pwd.value;
    let upperCaseLetters = /[A-Z]/g;
	let lowerCaseLetters = /[a-z]/g;
	let numbers = /[0-9]/g;
	let symbols = /[$-/:-?{-~!"^_`\[\]]/;
	if(password.length == '') {
		pwd_error_message.innerText = 'The item can not be empty'
		show('.pwd_error_message')
		pwd.focus()
		pwd_message = false
		return false
	} else if(!(password.match(upperCaseLetters) && password.match(lowerCaseLetters) && password.match(numbers) && password.match(symbols)) && password.length < 8) {
		pwd_error_message.innerText = 'At least 8 characters,including 1 letter, 1 number and 1 symbol.'
		show('.pwd_error_message')
		pwd.focus()
		pwd_message = false
		return false
	} else {
		hide('.pwd_error_message')
		pwd_message = true
		return true;
	}
}
function confirmPasswordValidate() {
	let pwdVal = pwd.value;
	let confirmPwdVal = confirm_pwd.value;
	if(confirmPwdVal.length == '') {
		confirm_pwd_error_message.innerText = 'The item can not be empty'
		show('.confirm_pwd_error_message')
		confirm_pwd.focus()
		confirm_error_message = false;
		return false
	} else if(confirmPwdVal != pwdVal) {
		confirm_pwd_error_message.innerText = 'Password doesn\'t matched'
		show('.confirm_pwd_error_message')
		confirm_pwd.focus()
		confirm_error_message = false;
		return false
	} else {
		hide('.confirm_pwd_error_message')
		confirm_error_message = true;
		return true;
	}
}
function emailValidate() {
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	let emailVal = email.value;
	if(emailVal == '') {
		email_error_message.innerText = 'The item can not be empty'
		show('.email_error_message'),
		email.focus();
		email_validate_error_message = false;
		return false;
	} else if(emailVal.match(pattern)) {
		hide('.email_error_message')
		email_validate_error_message = true;
		return true
	}
	else {
		email_error_message.innerText = 'Please enter valid email address'
		show('.email_error_message'),
		email.focus();
		email_validate_error_message = false;
		return false;
		return false
	}
}
function shopNameValidate() {
	let shop_name_val = shop_name.value
	if(shop_name_val.length == '') {
		shop_name_error_message.innerText = 'The item can not be empty'
		show('.shop_name_error_message');
		shop_name.focus()
		shop_error_message = false
		return false
	} else {
		hide('.shop_name_error_message');
		shop_error_message = true
		return true
	}
}
let checkbox = $('#toggle_chk');
let checkbox_error_msg = $('.checkbox_error_msg')
function formValidate() {
	mobileerror_message = true;
	pwd_message = true;
	confirm_error_message = true;
	email_validate_error_message = true;
	shop_error_message = true;
	mobileNumValidate()
	passwordValidate()
	confirmPasswordValidate()
	shopNameValidate()
	emailValidate()
	if((mobileerror_message == true) && (pwd_message == true) && (confirm_error_message == true) && (email_validate_error_message == true) && (shop_error_message == true)) {
		return true;
		alert('form will submited')
	} else {
		return false;
	}
}
