/*Filename: script.js
Purpose: Enquiry form validation
Target html: enquiry.html
Author: Rachel May, Dexter Ho, Angel Ling, Noor
Date Written: 23 October 2020
*/

//Rachel
var gErrorMsg = "";

//function to check validity of first name input
function checkFname(){
	
	var Fname = document.getElementById("fname").value;
	var pattern = /[a-zA-Z]+$/; //name can only contain letters and spaces
	var FnameOK = false;
	
	
	if ((!Fname=="") && (Fname.length<=25) && pattern.test(Fname)){
		FnameOK = true;
	}
	
	else{
		if (Fname==""){
				gErrorMsg += "First name cannot be empty\n"
		}
		
		else if (!pattern.test(Fname)){
			gErrorMsg += "First name must only contain alphabetical characters\n"
		}
		
		else if (Fname.length>25){
			gErrorMsg += "First name must be 25 characters or less\n"
		}
	}
	return FnameOK;
}


//function to check validity of last name
function checkLname(){
	
	var Lname = document.getElementById("lname").value;
	var pattern = /[a-zA-Z\s]+$/;
	var LnameOK = false;
	
	if ((!Lname=="") && (Lname.length <= 25) && (pattern.test(Lname))){
		LnameOK = true;
	}
	
	else{
		if (Lname==""){
				gErrorMsg += "Last name cannot be empty\n"
		}
			
		else if (!pattern.test(Lname)){
			gErrorMsg += "Last name must only contain alphabetical characters\n"
		}
		
		else if (Lname.length>25){
			gErrorMsg += "Last name must be 25 characters or less\n"
		}
		
	}
	return LnameOK;
	
}

//function to check validity of email
function checkEmail(){
	
	var email = document.getElementById("email").value;
	pattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.-]{1,4}$/;
	var emailOK = false;
	
	
	if ((!email == "") && (pattern.test(email))){
		emailOK = true;
	}
	
	else{
		if (email == ""){
			gErrorMsg += "Email cannot be empty\n"
		}
		
		else if (!pattern.test(email)){
			gErrorMsg += "Please enter a valid email address (Must contain '@' and '.')\n"
		}
	}
	return emailOK;
}

//function to check validity of street name
function checkStreet(){
	
	var street = document.getElementById("street").value;
	var pattern = /[a-zA-Z0-9\s]$/;
	var streetOK = false;
	
	if ((!street == "") && (pattern.test(street)) && (street.length <= 40)){
		streetOK = true;
	}
	
	else{
		if (street == ""){
			gErrorMsg += "Street name cannot be empty\n"
		}
		
		else if (!pattern.test(street)){
			gErrorMsg += "Please enter a valid street name (No special characters)\n"
		}
	
		else if (street.length>40){
			gErrorMsg += "Street name must be 40 characters or less\n"
		}
	}
	return streetOK;
}
	

//function to check validity of city input
function checkCity(){
	var city = document.getElementById("city").value;
	var pattern = /[a-zA-z]+$/;
	var cityOK = false;
	
	if ((!city=="") && (pattern.test(city)) && (city.length <= 20)){
		cityOK = true;
	}
	
	else{
		if (city==""){
			gErrorMsg += "City cannot be empty\n"
		}
		
		else if (!pattern.test(city)){
			gErrorMsg += "Please enter a valid city name (No special characters)\n"
		}
	
		else if (city.length>20){
			gErrorMsg += "City name must be 20 characters or less\n"
		}
	}
	return cityOK;
}

//function to check if state is selected
function checkState(){
	var state = document.getElementById("state").value;
	var selected = false;
	
	if (state == ""){
		gErrorMsg += "A state must be selected\n"
	}
	
	else{
		selected = true;
	}
	return selected;
}

//function to check if postcode is valid
function checkPcode(){
	var postcode = document.getElementById("postcode").value;
	var pattern = /\d+$/;
	var PcodeOK = false;
	
	if ((postcode.length == 5) && (!postcode.length==0) && pattern.test(postcode)){
		PcodeOK = true;
	}
	
	else{
		//returns true if postcode is an illegal number
		if (isNaN(postcode)){
			gErrorMsg += "Postcode should only contain numbers\n"
		}
		else if (postcode.length==0){
			gErrorMsg += "Postcode cannot be empty\n"
		}
		
		else {
			if ((postcode.length > 5) || (postcode.length < 5)){
			gErrorMsg += "Postcode must be 5 digits\n"
			}
		}
	}
	return PcodeOK;
}


//function to check if phone number is valid
function checkPNum(){
	var phonenum = document.getElementById("phone").value;
	var pattern = /[0-9+$]/;
	var phoneOK = false;
	
	if ((!phonenum=="") && (pattern.test(phonenum)) && (phonenum.length <= 10)) {
		var phoneOK = true;
	}
	
	else{
		if (phonenum=="") {
			gErrorMsg += "Phone number cannot be empty\n"
		}
		
		else if (!pattern.test(phonenum)){
			gErrorMsg += "Phone number should only contain digits\n"
		}
		
		else if (phonenum.length > 10){
			gErrorMsg += "Phone number should be 10 digits or less\n"
		}
	}
	return phoneOK;
}

//function to check if product is selected
function checkProduct(){
	var products = document.getElementById("products").value;
	var productOK = false;
	
	if (products == ""){
		gErrorMsg += "Product must be selected\n"
	}
	
	else{
		productOK = true;
	}
	return productOK;
}

//function to ensure Subject field is not empty
function checkSubject(){
	var subject = document.getElementById("subject").value;
	var subjectOK = false;
	
	if (!subject == ""){
		subjectOK = true;
	}
	
	else{
		if (subject == ""){
			gErrorMsg += "Subject field cannot be empty\n"
		}
	}
	return subjectOK;
}


//function to check whether date selected is valid
//also checks whether date selected is in the past
function checkDate(){
	var date = document.getElementById("date").value;
	var current_date = new Date(); //get current date;
	var user_date = new Date(date); //format date input by the user into the same format as the current date
	var dateOK = false;
	
	if (current_date > user_date){
		gErrorMsg += "The appointment date cannot be a past or current date\n"
	}
	
	else if (date == ""){
		gErrorMsg += "Appointment date must be selected\n"
	}

	else{
		dateOK = true;
	}
	return dateOK;
}
 
//function to validate time
function checkTime(){
	var time = document.getElementById("time").value;
	var timeOK = false;
	
	if (time == ""){
		gErrorMsg += "Appointment time must be selected\n"
	}
	
	else{
		timeOK = true;
	}
	return timeOK;
}

//function to check that all input of the form is valid
function validateForm(){
	"use strict"
	var allValid = false;
	
	var FnameValid = checkFname();
	var LnameValid = checkLname();
	var EmailValid = checkEmail();
	var StreetValid = checkStreet();
	var CityValid = checkCity();
	var StateValid = checkState();
	var PcodeValid = checkPcode();
	var PnumValid = checkPNum();
	var ProductValid = checkProduct();
	var SubjectValid = checkSubject();
	var DateValid = checkDate();
	var TimeValid = checkTime();
	
	if (FnameValid && LnameValid && EmailValid && StreetValid && CityValid && StateValid && PcodeValid && PnumValid && ProductValid && SubjectValid && DateValid && TimeValid){
		allValid = true;
	}
	
	else{
		alert(gErrorMsg);
		gErrorMsg = "";
		allValid = false;
	}
	return allValid;
}

//Dexter

function SubjectTransfer(){
	
	var v = products.selectedIndex; // v is the index of the selected item in the selection list
	
	// This is the array of options that can be selected
	var Options = [ " ","Graphic Minimalism", "Moody and Organic", "Refined Neutrals", "Electic Nook",
"Rustic Terracotta", "Moody Hues", "Relaxed Minimalism", "Golden Hour", "Textured Layers", 
"Woven Traditional", "Luxe Neutrals", "California Cool", "Earthy Layers", "Easy Neutrals", 
"Moody Parisian", "Moody Ebony", "Dirty Rustic", "Lavish White", "Modern Auburn", 
"Classic Vintage"]
	
	// Depending on which selection is made, the index of the selected item is used to get the output from the array
	document.getElementById("subject").value = "RE: Enquiry on "+Options[v]+" Set";
}


//Angel
//navbar's dropdown lists
//product
function pdropdown(){
    var arr_product = ["Dining Room", "Living Room", "Bedroom", "Office"];
    var arr_plink = ["product1.html", "product2.html", "product3.html", "product4.html"];
    var productList = document.getElementsByTagName('li')[0];

    //create ul element and set attributes
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'dropdownlist');

    for(i = 0; i < arr_product.length; i++){
        //create a element and set attributes
        var a = document.createElement('a');
        a.setAttribute('href', arr_plink[i]);

        //create li element
        var li = document.createElement('li');
        a.innerHTML = arr_product[i];

        //append all elements together
        ul.appendChild(li);
        li.appendChild(a);
    }
    productList.appendChild(ul);
}

//about
function adropdown(){
    var arr_about = ["Rachel", "Angel", "Noor", "Dexter"];
    var arr_alink = ["aboutme1.html", "aboutme2.html", "aboutme3.html", "aboutme4.html"];
    var aboutList = document.getElementsByTagName('li')[6];

    //create ul element and set attributes
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'dropdownlist');

    for(i = 0; i < arr_about.length; i++){
        //create a element and set attributes
        var a = document.createElement('a');
        a.setAttribute('href', arr_alink[i]);

        //create li element
        var li = document.createElement('li');
        a.innerHTML =arr_about[i];

        //append all elements together
        ul.appendChild(li);
        li.appendChild(a);
    }
    aboutList.appendChild(ul);
}

//enquiry
function edropdown(){
    var p_optgroup = ["Dining Room Furniture", "Living Room Furniture", "Bedroom Furniture", "Office Furniture"];
    var s_option = ["Graphic Minimalism", "Moody and Organic", "Refined Neutrals", "Electic Nook", "Rustic Terracotta", "Moody Hues", "Relaxed Minimalism", "Golden Hour", "Textured Layers", "Woven Traditional", "Luxe Neutrals", "California Cool", "Earthy Layers", "Easy Neutrals", "Moody Parisian", "Moody Ebony", "Dirty Rustic", "Lavish White", "Modern Auburn", "Classic Vintage"];
    var s_value = ["graphic_minimalism", "moody_and_organic", "refined_neutrals", "electic_nook", "rustic_terracotta", "moody_hues", "relaxed_minimalism", "golden_hour", "textured_layers", "woven_traditional", "luxe_neutrals", "california_cool", "earthy_layers", "easy_neutrals" ,"modern_parisian", "moody_ebony", "dirty_rustic", "lavish_white", "modern_auburn", "classic_vintage"];
    var selectList = document.getElementById('products');
	
	
	var selectLabel = document.createElement('option');
	selectLabel.setAttribute('label', 'Select a product');
	selectList.appendChild(selectLabel);

    //to divide the s_option array to each optgroup
    //total s_option = 20
    var n = 4

    //create optgroup element and set attribute
    for(i = 0; i < p_optgroup.length; i++){
        var optgroup = document.createElement('optgroup');
        optgroup.setAttribute('label', p_optgroup[i]);
        selectList.appendChild(optgroup);

        //create option element and set attribute
        for(j = 0; j < s_option.length / n; j++){
            var option = document.createElement('option');
            option.setAttribute('value', s_value[j]);
            option.innerHTML += s_option[j];
            optgroup.appendChild(option);    
        }
        //to remove first 5 elements in the array everytime when loop
        s_option.splice(0, 5);
        s_value.splice(0, 5);
        //minus 1 everytime when loop
        n = n - 1
    }
}

	
//dropdown list for states
function sdropdown(){
	var states = ["Johor", "Kedah", "Kelantan", "Malacca", "Negeri Sembilan", "Pahang", "Penang", "Perak", "Perlis", "Sabah", "Sarawak", "Selangor", "Terengganu", "Kuala Lumpur", "Labuan", "Putrajaya"];
	var state_list = document.getElementById('state');
	
	var initial = document.createElement('option');
	initial.setAttribute('label', 'Please select a state');
	state_list.append(initial);
	
	for(i=0; i<states.length; i++){
		var select_state = document.createElement('option');
		select_state.setAttribute('value', states[i]);
		select_state.innerHTML += states[i];
		state_list.appendChild(select_state);
	}
	
	
}

//Noor & Rachel 
//Transfer between web pages
function ptransfer(p_name){
//store the product in a local storage then transfer the value to subject field
	if (typeof(Storage) !== "undefined") {
		localStorage.product = p_name;
	}			
	
	else{
		alert("Sorry, your browser does not support Web Storage");
	}
	
}

//Fill the subject input field
function transfer(){
	
	var product = localStorage.getItem("product");
	document.getElementById("subject").value =  "RE: Enquiry on " +  product + " Set";

}


//Ensure the product list is selected also
function selectList(){
	//array with all the product names
	var fproductList = [ " ","Graphic Minimalism", "Moody and Organic", "Refined Neutrals", "Electic Nook", "Rustic Terracotta", "Moody Hues", "Relaxed Minimalism", 
	"Golden Hour", "Textured Layers", "Woven Traditional", "Luxe Neutrals", "California Cool", "Earthy Layers", "Easy Neutrals", "Moody Parisian", "Moody Ebony",
	"Dirty Rustic", "Lavish White", "Modern Auburn", "Classic Vintage"];

	var selections = document.getElementById("products");
	var x = 0;
		
	for (var i=0; i<fproductList.length; i++){
		if (localStorage.product == fproductList[i]){ //checking if the local storage is the same as the item in the array
			x = fproductList.indexOf(fproductList[i]);
		}
	}
	
	selections.selectedIndex = x; //assign the selected product list to the same product stored in the local storage

}

function init(){
	
	var validate_form = document.getElementById("detail");
	validate_form.onsubmit = validateForm;
	
	var options = document.getElementById("products"); //Gets the selection list element
	options.addEventListener("click", SubjectTransfer); //When selection list is clicked, SubjectTransfer function will run
	
	
}


window.onload = function(){
    pdropdown();
    adropdown();
    currentPage();
	edropdown();
	sdropdown();
	init();
	transfer();
	selectList();
}