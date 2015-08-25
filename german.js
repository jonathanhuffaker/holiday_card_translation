//second iife

var translate = (function(old_translate){

	var transToGerman = {
		"merry":"frohe", 
		"christmas":"Weihnachten", 
		"and":"und", 
		"happy":"glückliches",
		"new":"neues", 
		"year":"jahr"
	}

	old_translate.getTransToGerman = function(input) {
		return transToGerman[input]
	}

	return old_translate

})(translate);

