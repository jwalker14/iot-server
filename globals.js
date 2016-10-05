//LIBRARIES
jwt = require('jwt-simple');
Promise = require('promise');
crypto = require('crypto');
bcrypt = require('bcrypt');
bodyParser 	= require('body-parser');
morgan 			= require('morgan');
randtoken = require('rand-token');
cookieParser = require('cookie-parser');
NodeRSA = require('node-rsa');
passport = require('passport');
cors = require('cors');

// VARIOUS SETTINGS
settings = require('./config/settings.js')

// RESTFUL SERVICES
rest = require('express')();
RESTfulServices = require('http').Server(rest);
rest.set('superSecret', settings.crypto.secret);

//bodyparser
rest.use(bodyParser.urlencoded({extended:true}));
rest.use(bodyParser.json());
rest.use(cookieParser());
rest.use(morgan('dev'));
rest.use(cors());
rest.use(passport.initialize());

//passport stuff
passport.serializeUser(function(user,done){
	done(null, user._id);
})

passport.deserializeUser(function(id, done){
	User.findById(id, function(err, user){
		done(err,user)
	})
})

// DB STUFF
Mongoose = require('./classes/Mongoose.js')
mongoose = new Mongoose(settings)

// MODELS
User = require('./classes/User.js')