// REST
require('./globals.js')
var fs = require("fs")
// START THE MQTT SERVER
Mosca = require('./classes/Mosca.js');
mosca = new Mosca(settings)

var key = new NodeRSA({b: 256})
console.log(key.generateKeyPair())
var publicComponents = key.exportKey('components-public');
console.log(fs.writeFile('./public.txt', publicComponents.n.toString()));
// var u = new User()

//Turn On RESTful services
rest.get('/api/v1', function(req, res){
	res.send("RESTful Services")

  // var salt = bcrypt.genSaltSync(10);
  // var hash = bcrypt.hashSync('supersecret', salt);

  // var user = new User({
  //   first_name: 'Jason',
  //   last_name: 'Walker',
  //   email: 'jwalker14@me.com',
  //   pw: hash,
  //   salt: salt
  // })

  // user.save()
})

//AUTHORIZE HERE
rest.get('/api/v1/authorize', function(req, res){

})

rest.get('/api/v1/device/authorize', function(req,res){

})


//CANT PASS UNTIL AUTHED
rest.use(function(req,res,next){
	return res.status(403).send({
		success: false,
		message: 'NOT HAPPENING'
	})
})


//USERS
rest.get('/api/v1/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

//get a list of devices
rest.route('/api/v1/devices')
	.get(function(req, res){

	})
	.post(function(req, res){

	})

//get a single device
rest.route('/api/v1/device/:id')	//match all routes
	.get(function(req, res){		// GET THE REQUESTED DEVICE

	})
	.put(function(req, res){		// PUT WHOLE DEVICE MODEL

	})
	.patch(function(req,res){		// PUT ONLY CHANGED ATTRIBUTES (just implement the same)

	})
	.delete(function(req, res){	// DELETE THE SPECIFIED DEVICE

	})

RESTfulServices.listen(settings.RESTful.port, function(){
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