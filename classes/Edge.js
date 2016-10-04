//CLASS DEF
function Edge(v,l, atts){
	this.weight = 1;
	this.toState = v
	this.label = l
	this.attributes = atts || {}
};

Edge.prototype.getDest = function(){
	 return this.toState
};

Edge.prototype.setDest = function(v){
	return this.toState
};

Edge.prototype.getWeight = function(){
	 return this.weight
};

Edge.prototype.setWeight = function(w){
	 this.weight = w
};

Edge.prototype.getLabel = function(){
	 return this.label
};

Edge.prototype.setlabel = function(l){
	 this.label = l
};



module.exports = Edge