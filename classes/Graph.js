var HashMap = require('hashmap');
var Queue = require('./Queue.js');
//Reference: http://www.dreamincode.net/forums/topic/377473-graph-data-structure-tutorial/

//TAKES ArrayList V,E
function Graph(){
	this.vertices = new HashMap()
	this.edges = new HashMap()
}

Graph.prototype = {
	toString: function(){
		var pairs = new HashMap()
		this.vertices.forEach(function(v,k){
			var thispair = []
			// console.log(v.getNeighbors())
			v.getNeighbors().forEach(function(e){
				thispair.push(e.toState.getLabel())
			})
			pairs.set(v.getLabel(), thispair)
		})
		var str = '\n--PRINTING GRAPH PAIR TABLE--  \n'
		pairs.forEach(function(v,k){
			str += k + ' | '
			v.forEach(function(e, i){
				str += e
				if(i+1 != v.length)
					str += ','
			})
			str += '\n'
		})
		return str
	},

	getSource: function(){
		return this.source;
	},

	setSource: function(l){
		this.source = this.vertices.get(l)
	},

	addVertex: function(V){
		this.vertices.set(V.getLabel(), V)
		othis = this //the next loop is scoped so we can't access 'this'
		V.getNeighbors().forEach(function(e){
			othis.edges.set(e.getLabel(), e)
		})

		if(this.vertices.count() == 1){
			this.source = this.vertices.get(V.getLabel())
		}
	},

	removeVertex: function(l){
		v = this.vertices.get(l) //get the vertex
		vnh = v.getNeighbors() //get the edges
		othis = this

		vnh.forEach(function(e){						//remove any outgoing edges from the vertex
			othis.edges.remove(e.getLabel())
		}) //correct
		var removed
		this.vertices.forEach(function(v,k){	// remove any edge that is going to the remove vertex
			v.getNeighbors().forEach(function(e){
				if(e.toState.label == l){
					var indx = v.getNeighbors().indexOfEdge(e.getLabel()) //get the indx
					othis.edges.remove(v.getNeighbors()[indx].getLabel())// remove it if there is something wrong then it's here
					v.neighborhood.splice(indx, 1)
				}
			})
		})
		this.vertices.remove(v.getLabel())		//finally remove the vertex
	},

	hasVertex: function(l){
		return this.vertices.has(l)
	},

	addEdge: function(E, from){
		this.edges.set(E.getLabel(), E) //add to HashMap
		return this.vertices.get(from).addNeighbor(E) //add to vertex ArrayList
	},

	removeEdge: function(l){
		this.edges.remove(l)
		this.vertices.forEach(function(v,k){
			if(v.getNeighbors().indexOfEdge(l) > -1){
				v.getNeighbors().splice(v.getNeighbors().indexOfEdge(l), 1)
			}
		})
	},

	hasEdge: function(l){
		return this.edges.has(l)
	},

	makeGraph: function(){

	},

	makeVertex: function(l, atts){
		return new Vertex(l,atts)
	},

	makeEdge: function(v,l,atts){
		return new Edge(v,l,atts)
	},

	getEdges: function(){
		return this.edges
	},

	getVertices: function(){
		return this.vertices
	},

	getNeighbors: function(l){
		return this.vertices.get(l).getNeighbors()
	},


	//THIS WILL BE USED FOR VALIDATION
	isValid: function(){
		if(!checkCorners())
			return false
		// cycles
		// corners
		// traps: 1 -> 2, 2 -> 4 (is linear and trap because 4 can't go anywhere)
	},

	checkCorners: function(){
		return this.vertices.forEach(function(v,k){
			if(v.getNeighbors().length = 0)
				return false
			return true
		})
	},

	//SHORTEST PATH ALGORITHMS Rec: ALL PAIRS SHORTEST PATH
	floydWarshall: function(){

	}
}



module.exports = Graph