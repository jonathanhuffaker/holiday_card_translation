// var test = alert("test");
// console.log(test);
//above is just a test to make sure we had linked our file correctly

$(document).ready(function(){
	//on click  example below was a test and works 
	$("#submit").click(function(){
		console.log("your jquery button click worked");
		
		//i think we can use a jquery to array function as opposed to split
		//, but used the below so that it doesnt matter the case
		var $usersInput = $("#input").val().toLowerCase().split(" ");
		console.log($usersInput);

	//-------Everything above works -------------------------
		
		//trying to get it to convert - no errors in console but not working
		// var $BlankforOutput = function() {
		// ("#output").html(translate($usersInput));
		// return $BlankforOutput;
		// console.log($BlankforOutput); 
		// };
		

	//if button is selected we will translate to spanish or german
	//The below works but when german is slected "one small spanish victory" appears in console
		console.log($("#langButton").val());
		if ($("#langButton").val() === "Spanish") {

			console.log("One small spanish victory");
			$("#output").html(translate.getTransToSpanish($usersInput));
		}  else if ($("#langButton").val() === "German") {
			console.log ("One small German Victory");
		} else {
			alert("Keep trying");
		}

		$("#output").html();	
	});

});







// var $spanishChecked = $("input:checked").text(true);
	// var $spanishChecked = $("germanButton :checked").text();
	// var $germanChecked = $("germanButton :checked").text();
	
// console.log("success, button was checked");

//not sure where i was going with the below on saturday so commenting out for time being

// var holidayGreeting = {
// 	langDefault = "english";
// 	langSpan = "spanish";
// 	langGerm = "german";
// }
