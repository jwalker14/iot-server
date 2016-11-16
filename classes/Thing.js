//mongoose.Schema is a global variable
//THING SCHEMA
var Schema = mongoose.mg.Schema({
	name: {type: String, required: [true, 'Thing Name is required.']},
	description: {type: String},
	subscriptions: {type: [String]},
	graph: mongoose.mg.Schema.Types.Mixed,
	data: [mongoose.mg.Schema.Types.Mixed]
})


//CLASS
function Thing(objectID){

}

Thing.prototype = {

}

module.exports = {class: Thing, schema: mongoose.mg.model('Thing', Schema)}