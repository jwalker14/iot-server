// GLOBAL VARIABLES
require('./globals.js')

// START THE MQTT SERVER
Mosca = require('./classes/Mosca.js');
mosca = new Mosca(settings)


/**
 *
 *
 * ROUTES
 *
 *
 */

rest.get('/api/v1', function(req, res){
	res.send("RESTful Services")

})

//PLACE WHERE AUTHENTICATION WOULD BE IMPLEMENTED
// rest.get('/api/v1/authorize', function(req, res){

// })

// rest.get('/api/v1/device/authorize', function(req,res){

// })

//USERS
rest.get('/api/v1/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

//DEVICE ROUTES
rest.route('/api/v1/devices')
	.get(function(req, res){

	})
	.post(function(req, res){

	})

//SINGLE DEVICE ROUTES
rest.route('/api/v1/device/:id')	//match all routes
	.get(function(req, res){		// GET THE REQUESTED DEVICE
		ap = new Automaton(req.params.id); //ignore this name please
		ap.M.findOne({_id: req.params.id}, function(err, model){
			if(err) handleError(err);
			res.send(model)
		})
	})
	.put(function(req, res){		// UPDATE WHOLE DEVICE MODEL

	})
	.patch(function(req,res){		// UPDATE ONLY CHANGED ATTRIBUTES (just implement the same)

	})
	.delete(function(req, res){	// DELETE THE SPECIFIED DEVICE

	})


// Trigger an action
rest.route('/api/v1/device/:id/action/:action')
	.get(function(req, res){
		mosca.server.publish({
			topic: req.params.id + '/transition/' + req.params.action,
			payload: ''
		}, function(){
			res.send("Pushed")
		})
	})


//Turn the restful service on
RESTfulServices.listen(settings.RESTful.port, function(){
	console.log('RESTful port 3000')
})
