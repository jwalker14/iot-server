function Mongoose(settings){
	this.mg = require('mongoose')
	this.mg.Promise = global.Promise
	this.mg.connect(settings.mongo.uri, function(){
		console.log("Mongo up")
	});
}

Mongoose.prototype = {

}

module.exports = Mongoose