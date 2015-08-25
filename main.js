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
		// var spanOutput;
	//-------Everything above works -------------------------
		
	
		
	//if button is selected we will translate to spanish or german
	//The below works but when german is slected "one small spanish victory" appears in console
		
		if ($("#langButton:checked").val() === "Spanish") {
			console.log("One small spanish victory");
			// spanOutput = $("#output").html(translate.getTransToSpanish($usersInput));
			$("#output").html(Translate.getTransToSpanish($usersInput));
		
		}  else if ($("#langButton:checked").val() === "German") {
			console.log ("One small German Victory");
			$("#output").html(Translate.getTransToGerman($usersInput));
		} else {
			alert("Keep trying");
		}

		// $("#output").html();	
	});

});







