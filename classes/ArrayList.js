//overrite some basic array functions for this application

//http://www.ecma-international.org/ecma-262/5.1/#sec-15.4

var ArrayList = Array

ArrayList.prototype.indexOfEdge = function(l){
	var i = 0;
	var found = false;
	while(i < this.length){
		if(l == this[i].label){
			return i
		}
		i++
	}
	return -1
};

ArrayList.prototype.indexOfVertex = function(l){
	var i = 0;
	var found = false;
	while(i < this.length){
		if(l == this[i].getLabel()){
			return i
		}
		i++
	}
	return -1
};

module.exports = ArrayList