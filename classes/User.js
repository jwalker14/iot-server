//mongoose.Schema is a global variable



/**
 * User Class
 * @param {[object/string]} data object of user data or string of user ID
 */
function User(data){
	// save the model to the class
	this.model = mongoose.mg.model('User', this.schema)
	// if the data is an object then create a new user model
	if(typeof(data) == "object"){
		this.user = new this.model(data)
	}
	if(typeof(data) == 'string'){
		this.id = data
		this.user = null
		othis = this
		this.model.findOne({
			_id: data
		}, function(err, user){
			if(err) throw err;
			othis.user = user
		})
	}
	else{
		//not a user_id
	}
}
/**
 * Methods and Extra Variables of the User Class
 * @type {Object}
 */
User.prototype = {
	/**
	 * Mongoose Schema for User
	 * @type {Mongoose}
	 */
	schema: new mongoose.mg.Schema({
		first_name: {type: String, required: [true, 'First name is required.']},
		last_name: {type: String, required: [true, 'Last name is required.']},
		email: {type: String, required: [true, 'Email is required.']},
		pw: {type: String, required: [true, 'Password is required.']},
		last_login: {type: Date, default: Date.now},
		confirmed_at: {type: Date},
	}),
	getAttribute: function(attr){
		return this.user[attr]
	},
	setAttribute: function(k,v){
		this.user[k] = v
		this.user.save()
	},
	isNew: function(){
		if(this.id != null)
			return this.id
		else
			return null
	},
	/**
	 * Checks if the current user model is valid
	 * @return {boolean/object} true if validateSync returns no errors otherwise return those errors
	 */
	validate: function(){
			if(this.user.validateSync() == undefined)
				return true
			else
				return this.user.validateSync()
	},
	/**
	 * Save the user
	 * @return {boolean} if current user is valid then save and return true else return false
	 */
	save: function(){
		if(this.validate()){
			this.user.save(function (err,user) {
			  if (err) console.log(err);
			})
			return true
		}
		else
			return false
	},
	authenticate: function(email, pw){

	}
}

module.exports = User