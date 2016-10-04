//requires
var Edge = require('./Edge.js');
var ArrayList = require('./ArrayList.js');

//PRIVATE
var data = {};


//CLASS
function Vertex(l, atts){
	this.label = l
	this.neighborhood = new ArrayList()
	this.attributes = atts || {}
}

Vertex.prototype.getLabel = function(){
	 return this.label
};

Vertex.prototype.setLabel = function(l){
		this.label = l
		return this.label == l
};

Vertex.prototype.addNeighbor = function(e){
	if(this.neighborhood.indexOfEdge(e.functionName) > -1){
		return false
	}
	this.neighborhood.push(e)
	return true
};

Vertex.prototype.containsNeighbor = function(e){
	//something is wrong with this function
	this.neighborhood.forEach(function(el){
		if(e == el.functionName){
			console.log('true')
			return true
		}
		else{
			console.log('false')
			return false
		}
	})
};

Vertex.prototype.getNeighbor = function(idx){
		return this.neighborhood[idx]
};

Vertex.prototype.removeNeighbor = function(idx){
	var removed = this.neighborhood[idx]
	var arr1 = this.neighborhood.slice(0,idx)
	var arr2 = this.neighborhood.slice(idx+1, this.neighborhood.length)
	this.neighborhood = arr1.concat(arr2);
	return removed
};

Vertex.prototype.getNeighborCount = function(){
	 return this.neighborhood.length
};

Vertex.prototype.getNeighbors = function(){
	 return this.neighborhood
};

module.exports = Vertex