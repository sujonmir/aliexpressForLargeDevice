function myform(){
	var fname = document.getElementById('fname');
	var fnameValue = document.getElementById('fname').value;
	var lname = document.getElementById('lname');
	var lnameValue = document.getElementById('lname').value;
	var radio1 = document.getElementById('male');
	var radio1Value = radio1.value;
	var radio2 = document.getElementById('female');
	var radio2Value = radio2.value;
	var address = document.getElementById('address');
	var addressValue = document.getElementById('address').value;
	var city = document.getElementById('city');
	var cityValue = document.getElementById('city').value;
	var phone = document.getElementById('phone');
	var phoneValue = phone.value;
	var phoneValueLength = phone.value.length;
	var pos0 = phoneValue.indexOf('0');
	var pos1 = phoneValue.indexOf('1');
	var name_error = document.getElementById('name_error');
	var gender_error = document.getElementById('gender_error');
	var address_error = document.getElementById('address_error');
	var city_error = document.getElementById('city_error');
	var phone_error = document.getElementById('phone_error');
	
	if( fnameValue == "" || lnameValue == "" || (radio1.checked != true && radio2.checked != true )|| addressValue == "" || cityValue == "" || phoneValue == "" || phoneValueLength !=11 || isNaN(phoneValue) || pos0 != 0 || pos1 != 1){
		if (fnameValue == "") {
			fname.focus();
			name_error.innerHTML ='<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Please enter your first name';
			name_error.style.background = "#fde8e9";
			name_error.style.border = " 1px solid #e321217d";
		} else if(lnameValue == ""){
			lname.focus();
			
			name_error.innerHTML ='<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Please enter your user name';
			name_error.style.background = "#fde8e9";
			name_error.style.border = " 1px solid #e321217d";
		
		} else if(radio1.checked != true && radio2.checked != true  ){
			gender_error.innerHTML ='<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Please select your gender.';
			name_error.style.display = 'none';
			phone_error.style.display = 'none';

			gender_error.style.background = "#fde8e9";
			gender_error.style.border = " 1px solid #e321217d";
			


		} else if(addressValue == "" ){
			address.focus();
			name_error.style.display = 'none';
			address_error.innerHTML ='<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Please enter your address';
			gender_error.style.display = 'none';
			address_error.style.background = "#fde8e9";
			address_error.style.border = " 1px solid #e321217d";
		
		} else if( cityValue == ""){
			city.focus();
			city_error.innerHTML ='<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Please enter your city';
			name_error.style.display = 'none';
			address_error.style.display = 'none';
			gender_error.style.display = 'none';
			phone_error.style.display = 'none';
			city_error.style.background = "#fde8e9";
			city_error.style.border = " 1px solid #e321217d";

		
		} 
		else if(phoneValue == "" || phoneValueLength !=11 || isNaN(phoneValue) || pos0 != 0 || pos1 != 1){

			if(phoneValue == ""){
				phone.focus();
				phone_error.innerHTML = '<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Please enter phone number';
				
			} else{
				phone.focus();
				phone_error.innerHTML = '<i class="fas fa-times" style="width:20px; height:20px; color:white; background:#e33013; padding:3px; text-align:center; border-radius:50%;"></i> Phone Number Invaild';
			}
			name_error.style.display = 'none';
			gender_error.style.display = 'none';
			city_error.style.display = 'none';
			address_error.style.display = 'none';
			phone_error.style.background = "#fde8e9";
			phone_error.style.border = " 1px solid #e321217d";
			
		} 
	
		return false;

	} else{
	alert('SignUp Completed');
	return true;

	}
}