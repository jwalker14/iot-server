settings = require('./config/settings.js')
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
HashMap = require('hashmap');
async = require("async");

ArrayList = require('./classes/ArrayList.js');

Queue = require('./classes/Queue.js');
Graph = require('node-dijkstra')
fs = require("fs")


// VARIOUS SETTINGS


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


//Automata Processor
Automaton = require('./classes/Automaton.js');

// MODELS
User = require('./classes/User.js')
ThingSchema = require('./classes/Thing.js').schema
Thing = require('./classes/Thing.js').class