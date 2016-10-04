//LIBRARIES
jwt = require('jwt-simple');
Promise = require('promise');
crypto = require('crypto');

// VARIOUS SETTINGS
settings = require('./config/settings.js')

// RESTFUL SERVICES
rest = require('express')();
RESTfulServices = require('http').Server(rest);

// DB STUFF
Mongoose = require('./classes/Mongoose.js')
mongoose = new Mongoose(settings)

// MODELS
User = require('./classes/User.js')