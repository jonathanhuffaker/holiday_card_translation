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


// 	oldtranslate.getTransToGerman = function(input) {
// 		return transToGerman[input];
// 	}

// 	return oldtranslate;

// })(Translate);


	return {
		getTransToGerman: function(arrayOfWords) {
			var translation = "";

			arrayOfWords.forEach(function(word) {
				translation += transToGerman[word];
			});
		 return translation;
		}
	}

})(Translate);
