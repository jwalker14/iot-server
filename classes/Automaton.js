function Automaton(M){
	//Temp Values
	this.machine = null
	this.nodes = null
	this.node_graph = null
	this.paths = null

	//Add the model..
	if(typeof(M) == "string"){
		//EXISTING MODEL
		this._id = M
		var promise = this.fetch(this._id)
	}
	else{
		//NEW MODEL
		this.machine = M
		this.nodes = []
		this.node_graph = {}
		for(var k in this.machine.states){
			if(this.node_graph[k] == undefined){
				this.node_graph[k] = {}
			}
			for(var l in this.machine.states[k].transitions){
				this.node_graph[k][l] = 1
			}

			this.nodes.push(k)
		}
		this.route = new Graph(this.node_graph)
		this.computePaths()

		this.model = new this.M({
			machine: this.machine,
			nodes: this.nodes,
			node_graph: this.node_graph,
			paths: this.paths
  	})

  	this.save()
	}
}


Automaton.prototype = {
	M: mongoose.mg.model('Automaton', mongoose.mg.Schema({
		machine: mongoose.mg.Schema.Types.Mixed,
		nodes: [mongoose.mg.Schema.Types.Mixed],
		node_graph: mongoose.mg.Schema.Types.Mixed,
		paths: mongoose.mg.Schema.Types.Mixed
	}, {
	  toObject: {
	  virtuals: true
	  },
	  toJSON: {
	  virtuals: true
	  }
	})),

	computePaths: function(){
		var paths = {}
		var count = 0
		for(var i = 0; i < this.nodes.length; i++){
			for(var j = 0; j < this.nodes.length; j++){
				// get the path from i to j
				var path = this.route.path(this.nodes[i], this.nodes[j]);
				// the path will be null if it is trying to get a path to itself. i.e. 1->1
				if(path != null){
					path_label = this.nodes[i] + '-' + this.nodes[j]
					// create a null Q variable
					var Q = null
					// console.log("i = " + i + "j = " + j + "k = " + k)
					for(var k = 0; k < path.length - 1; k++){
						// create the label
						label = path[k] + '-' + path[k+1]
						fname = this.machine.states[path[k]].transitions[path[k+1]].fname
						dependency = this.machine.states[path[k]].transitions[path[k+1]].dependency
						// THIS IF STATEMENT SHOULD BE HANDLED IN THE QUEUE CLASS.
						if(Q == null){
							if(dependency != undefined){
								Q = new Queue('dep', dependency)
								Q.enqueue(label, fname)
							}
							else{
								Q = new Queue(label, fname)
							}
						}
						else{
							if(dependency != undefined){
								Q.enqueue('dep', dependency)
							}
							Q.enqueue(label, fname)
						}
					}
					paths[path_label] = Q.toArray()
					this.paths = paths
				}
			}
		}
	},

	getPaths: function(){
		return this.paths;
	},

	getPath: function(from, to){
		var label = from + '-' + to
		return this.paths[label]
	},

	fetch: function(id){
		var MOD = null
		this.M.findOne({_id: id}, function(err, model){
			if(err) handleError(err);
			MOD = model
			console.log(MOD)
		})
		console.log(MOD)
	},

	save: function(){

	}
}

module.exports = Automaton ;