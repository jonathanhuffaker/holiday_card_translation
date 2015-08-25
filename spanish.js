//first iife

var Translate = (function(){


	var transToSpanish = {
		"merry":"alegre ", 
		"christmas":"Navidad ", 
		"and":"y ", 
		"happy":"feliz ",
		"new":"nuevo ", 
		"year":"ano "
	}

	return {
		getTransToSpanish: function(arrayOfWords) {
			var translation = "";

			arrayOfWords.forEach(function(word) {
				translation += transToSpanish[word];
			});


			return translation;
		}
    }

})();