/*
	The 20th Theatre WebSite
	Author: Jun Ma
	Date:050217
	Filename: contact.js
	
	Supporting File: none
	
*/

//reset function
$("#reset").click(function(){
/* 	$("#fName").val("");
	$("#lName").val("");
	$("#phone").val("");
	$("#email").val("");
	$("#comments").val("");
	$( "#call" ).prop( "checked" ); */
	window.location.replace("contactus.htm");
});
//submin function
$("#submit").click(function(){
	
var confirmInfo =  "Frist Name is: " + $("#fName").val() + "; " +
					"Last Name is: " + $("#lName").val() + "; " +
					"Phone Number is: " + $("#phone").val() + "; " +
					"Email is: " + $("#email").val() + "; " +
					"Comments is: " + $("#comments").val();
alert(confirmInfo);
});