var mosca = require('mosca');


//CLASS TO START THE MQTT SERVER
function Mosca(){

	this.ascoltatore = {
	  //using ascoltatore
	  type: 'mongo',
	  url: settings.mongo.uri,
	  pubsubCollection: 'MQTT',
	  mongo: {}
	},

	this.settings = {
		post: 1883,
		backend: this.ascoltatore
	},

	//Create the server
	this.server = new mosca.Server(this.settings)
	//get some listener functions
	this.server.on('clientConnected', this.clientConnected);
	this.server.on('clientDisconnecting', this.clientDisconnecting);
	this.server.on('clientDisconnected', this.clientDisconnected);
	this.server.on('published', this.published);
	this.server.on('delivered', this.delivered);
	this.server.on('subscribed', this.subscribed);
	this.server.on('unsubscribed', this.unsubscribed);
	// fired when a message is received
	//when the server is ready let us know please
	this.server.on('ready', this.setup);
}


Mosca.prototype = {
	setup: function(){
		console.log('Mosca server is up and running');
	},

	clientConnected: function(client){
		console.log('connected', client.id)
	},

	clientDisconnecting: function(client){
		console.log('disconnecting', client.id)
	},

	clientDisconnected: function(client){
		console.log('disconnected', client.id)
	},

	published: function(packet, client){
		console.log('published', packet)
		console.log('from', client)
	},

	delivered: function(packet, client){
		console.log('delivered', packet)
		console.log('to', client)
	},

	subscribed: function(topic, client){
		console.log(client, 'subscribed')
		console.log('to', topic)
	},

	unsubscribed: function(topic, client){
		console.log(client, 'unsubscribed')
		console.log('from', topic)
	}

}


module.exports = Mosca