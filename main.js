// var test = alert("test");
// console.log(test);
//above is just a test to make sure we had linked our file correctly

$(document).ready(function(){

//on click alert example below was a test and works - commenting out
$("#submit").click(function(){
	console.log("your jquery button click worked");
	
	//i think we can use a jquery to array function as opposed to split
	//, but used the below so that it doesnt matter the case
	
	var $usersInput = $("#input").val().toLowerCase().split(" ");
	console.log($usersInput);
	
//-------Everything above works -------------------------


	var $spanishChecked = $("#spanishButton :checked").text();
	var $germanChecked = $("germanButton :checked").text();
	
// console.log("success, button was checked");

//if button is selected we will translate to spanish or german
if ($spanishChecked === ":checked") {
	var $spanishOutput = ($usersInput).prependTo("#output");
	// console.log(translate(getTransToSpanish)).prependTo();

	$("#output").html($usersInput);
}else {
	alert("If your seeing this alert then no text was added to the page. At lest this alert is not a syntax error");
}

// 	alert("Success, your test worked. You selected translate to spanish");
// }


	});
});





//not sure where i was going with the below so commenting out for time being

// var holidayGreeting = {
// 	langDefault = "english";
// 	langSpan = "spanish";
// 	langGerm = "german";
// }
