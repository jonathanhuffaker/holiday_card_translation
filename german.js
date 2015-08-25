//second iife

var Translate = (function(oldtranslate){

	var transToGerman = {
		"merry":"frohe", 
		"christmas":"Weihnachten", 
		"and":"und", 
		"happy":"glückliches",
		"new":"neues", 
		"year":"jahr"
	}


	oldtranslate.getTransToGerman = function(input) {
		return transToGerman[input];
	}

	return oldtranslate;

})(Translate);
