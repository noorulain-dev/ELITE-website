/*Filename: enhancements.js
Purpose: Javascript for Website enhancements
Target html: enquiry.html
Author: Rachel May, Dexter Ho, Angel Ling, Noor
Date Written: 23 October 2020
*/


//Dexter
function runOnScroll(){ //Change position of logo on navigation bar

	// If the page has been scrolled past 80px and width of the browser is more than 800px this will run
	if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && window.innerWidth > 800){
		document.getElementById("JLogo").style.float = "left";
		document.getElementById("JLogo").style.width = "25%";
		document.getElementById("JNav").style.width = "75%";
		document.getElementById("JNav").style.marginLeft = "25%";
	}
	else { // Reverts everything at top of page
		document.getElementById("JLogo").style.float = "none";
		document.getElementById("JLogo").style.zIndex = "1";
		document.getElementById("JLogo").style.width = "100%";
		document.getElementById("JNav").style.width = "100%";
		document.getElementById("JNav").style.marginLeft = "0";
	}
}


//Rachel
var gIndex = 0; //initialize gIndex to 0

function slideShow(i){
	
	var slideimgs = document.getElementsByClassName("slides");

	for (var x=0; x<slideimgs.length; x++){
		slideimgs[x].style.display = "none"; //hides all the images 
	}
	
	gIndex += i
	
	if (gIndex > slideimgs.length-1){ 
		gIndex = 0; //resets the gIndex to 0 if the value exceeds 4
	}
	
	if (gIndex < 0){
		gIndex = slideimgs.length-1 //resets the gIndex value to the last index of the array
	}
	
	slideimgs[gIndex].style.display = "block";
}


//Dexter and Rachel
function FormPreview(){
	//Gets the values of required input elements 
	var a = document.getElementById("fname").value;
	var b = document.getElementById("lname").value;
	var c = document.getElementById("email").value;
	var d = document.getElementById("street").value;
	var e = document.getElementById("city").value;
	var f = document.getElementById("state").value;
	var g = document.getElementById("postcode").value;
	var h = document.getElementById("phone").value;
	var i = document.getElementById("products").value;
	var j = document.getElementById("subject").value;
	var l = document.getElementById("date").value;
	var m = document.getElementById("time").value;
	
	var FormInputs = [a,b,c,d,e,f,g,h,i,j,l,m]; //store value into arrays
	var FormShow = document.getElementById("fields").getElementsByTagName("p");
	
	var n;
	for (n = 0; n < 12; n++){
		if (FormInputs[n].length == 0){
			FormShow[n].innerHTML = "NIL"; //display "NIL" is there input field has no value
		}
		
		else{
			FormShow[n].innerHTML = FormInputs[n];
		}
	}
	
	//This is the gray area behind the form submission preview box
	document.getElementById("preview_box").style.display = "block";
	//The div containing the form submission preview items
	document.getElementById("form_preview").style.display = "block";

	
	
	//The X at the top right of the form preview box
	var close_btn = document.getElementById("close_box");
	close_btn.onclick = function(){
		document.getElementById("preview_box").style.display= "none"; //when X is clicked, hides the form submission preview
		document.getElementById("form_preview").style.display = "none";
	}
}

//Hides the gray area and form submission preview box when called
function Close(){
	document.getElementById("preview_box").style.display= "none"; 
	document.getElementById("form_preview").style.display = "none";
}


//Noor
function displayDateTime(){
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	var today = year + "-" + month + "-" + day;

	var currentTime = date.getHours() + ':' + date.getMinutes();
	
	document.getElementById('date').value = today;
	document.getElementById('time').value = currentTime;
}
	
	
//Angel
//highlight the current page based on URL
//extract the file name from a URL 
function extractPageName(hrefString){
	var arr = hrefString.split('/');
	return (arr.length < 2) ? hrefString : arr[arr.length - 2].toLowerCase() + arr[arr.length - 1].toLowerCase();               
}
// search through all the links in array, if one points to the same file, apply the 
//class .active to it and to its parent
function setActiveNav(arr, crtPage){
	for(i = 0; i < arr.length; i++){
		if(extractPageName(arr[i].href) == crtPage){
			if (arr[i].parentNode.tagName != "NAV"){
				arr[i].className = "active";
				arr[i].parentNode.className = "active";
			}
		}
	}
}
//active page
function currentPage(){
	hrefString = document.location.href ? document.location.href : document.location;

	if (document.getElementById("JNav") != null){
		setActiveNav(document.getElementById("JNav").getElementsByTagName("a"), extractPageName(hrefString));
	}
}

window.onscroll = function() {runOnScroll()}; //Runs the function on scroll


window.addEventListener("load", function(){
	displayDateTime();

})