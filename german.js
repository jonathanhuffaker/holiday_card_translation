var translate = (function(translate){


var transToGerman = {
"merry":"frohe", 
"christmas":"Weihnachten", 
"and":"und", 
"happy":"glückliches",
"new":"neues", 
"year":"jahr"
}

return {
	getTransToGerman: function(input) {
		return transToGerman[input]
	}
  }

})(translate);