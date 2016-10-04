require('../globals.js')
var assert = require('assert');

var user = new User('57f163032b427308a7414044')
describe('User', function() {
  describe('isNew()', function() {
    it('should return id when user_id is passed as param for new User()', function() {
      assert.equal('57f163032b427308a7414044', user.isNew());
    });

    it('show return null when user_id is not passed as param for new User', function(){
    	var user = new User()
    	assert.equal(null, user.isNew());
    })
  });

  describe('validate()', function(){
  	it('pass if validation fails without first name', function(){
  		var user = new User({
  			last_name: 'Walker',
  			email: 'jwalker14@me.com',
  			pw: 'askdjnjbsdfa'
  		})
  		var error = user.validate()
    	assert.ok(error.errors['first_name']);
  	})
  	it('pass if validation fails without last name', function(){
  		var user = new User({
  			first_name: 'Jason',
  			email: 'jwalker14@me.com',
  			pw: 'askdjnjbsdfa'
  		})
  		var error = user.validate()
    	assert.ok(error.errors['last_name']);
  	})
  	it('pass if validation fails without email', function(){
  		var user = new User({
  			first_name: 'Jason',
  			last_name: 'Walker',
  			pw: 'askdjnjbsdfa'
  		})
  		var error = user.validate()
    	assert.ok(error.errors['email']);
  	})
  	it('pass if validation fails without password', function(){
  		var user = new User({
  			first_name: 'Jason',
  			last_name: 'Walker',
  			email: 'jwalker14@me.com',
  		})
  		var error = user.validate()
    	assert.ok(error.errors['pw']);
  	})
  	it('pass if validation succeeds without all input', function(){
  		var user = new User({
  			first_name: 'Jason',
  			last_name: 'Walker',
  			email: 'jwalker14@me.com',
  			pw: 'askdjnjbsdfa'
  		})
  		var valid = user.validate()
    	assert.equal(valid, true);
  	})
  })

	describe('save()', function(){
		it('should return true for saved user', function(){
			var user = new User({
				first_name: 'Jason',
				last_name: 'Walker',
				email: 'jwalker14@me.com',
				pw: 'askdjnjbsdfa'
			})
			assert.equal(user.save(), true)
		})
	})
	describe('getAttribue()', function(){
		it('should return Jason for getAttribute("first_name")', function(){
			assert.equal(user.getAttribute('first_name'), 'Thomas')
		})
		it('should return Walker for getAttribute("last_name")', function(){
			assert.equal(user.getAttribute('last_name'), 'Walker')
		})
		it('should return jwalker14@me.com for getAttribute("email")', function(){
			assert.equal(user.getAttribute('email'), 'jwalker14@me.com')
		})
		it('should return askdjnjbsdfa for getAttribute("pw")', function(){
			assert.equal(user.getAttribute('pw'), 'askdjnjbsdfa')
		})
	})
	describe('setAttribute(k,v)', function(){
		it('should set the user attribute key as the value')
	})
});