//second iife

var Translate = (function(oldtranslate){

	var transToGerman = {
		"merry":"frohe ", 
		"christmas":"Weihnachten ", 
		"and":"und ", 
		"happy":"glückliches ",
		"new":"neues ", 
		"year":"jahr "
	}



	oldtranslate.getTransToGerman = function(input) {
		var translation2=[];
		input.forEach(function(word) {
			translation2 += transToGerman[word];
		});

		return translation2;
	}
	return Translate;

})(Translate);

