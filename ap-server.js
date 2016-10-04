// REST
require('./globals.js')

// START THE MQTT SERVER
Mosca = require('./classes/Mosca.js');
mosca = new Mosca(settings)

// var u = new User()

//Turn On RESTful services
rest.get('/', function(reqq, res){
	res.send("RESTful Services")
})

rest.get('/users', function(req, res) {
  new User().model.find({}, function(err, users) {
    res.json(users);
  });
});

RESTfulServices.listen(3000, function(){
	console.log('listening on *:3000')
})


// //Setup AP
// var AutomataProcessor = require('./AutomataProcessor/automata-processor.js');
// //INCLUDE DATA STRUCTURES
// var DS = require('./classes/DataStructures.js');

// //CREATE STATES



// // TESTING
// var s1 = new DS.Vertex(1)
// var s2 = new DS.Vertex(2)
// var s3 = new DS.Vertex(3)
// var s4 = new DS.Vertex(4)

// s1.addNeighbor(new DS.Edge(s2, "fun1", {functionName: 'transition_1'}))
// s1.addNeighbor(new DS.Edge(s3, "fun3", {functionName: 'transition_3'}))
// s1.addNeighbor(new DS.Edge(s4, "fun2", {functionName: 'transition_2'}))
// s2.addNeighbor(new DS.Edge(s4, "fun6", {functionName: 'transition_6'}))
// s3.addNeighbor(new DS.Edge(s2, "fun4", {functionname: 'transition_4'}))
// s4.addNeighbor(new DS.Edge(s1, "fun5", {functionName: 'transition_5'}))

// var g = new DS.Graph()
// g.addVertex(s1)
// g.addVertex(s2)
// g.addVertex(s3)
// g.addVertex(s4)

// g.removeVertex(3)
// // g.removeEdge("fun1")
// // g.checkCorners()
// console.log(g.toString())

// var Q = new DS.Queue(8)
// console.log(Q.toString())

// // console.log(v.containsNeighbor(new Edge(1,'5','function name')))