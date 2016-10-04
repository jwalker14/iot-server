function Mongoose(settings){
	this.mg = require('mongoose')
	this.mg.Promise = global.Promise
	this.mg.connect('mongodb://' + settings.mongo.hostname + ":" + settings.mongo.port + '/' + settings.mongo.db);
}

Mongoose.prototype = {

}

module.exports = Mongoose