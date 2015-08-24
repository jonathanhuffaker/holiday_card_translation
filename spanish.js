//first iife

var translate = (function(){


var transToSpanish = {
"merry":"alegre", 
"christmas":"Navidad", 
"and":"y", 
"happy":"feliz",
"new":"nuevo", 
"year":"ano"
}

return {
	getTransToSpanish: function(input) {
		return transToSpanish[input]
	}
  }

})();