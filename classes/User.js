//mongoose.Schema is a global variable
var Schema = mongoose.mg.Schema({
	first_name: {type: String, required: [true, 'First name is required.']},
	last_name: {type: String, required: [true, 'Last name is required.']},
	email: {type: String, required: [true, 'Email is required.']},
	pw: {type: String, required: [true, 'Password is required.']},
	last_login: {type: Date, default: Date.now},
	confirmed_at: {type: Date},
  salt: {type: String, require: [true, 'Salt is required']}
})

module.exports = mongoose.mg.model('User', Schema)