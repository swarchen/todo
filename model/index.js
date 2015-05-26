var mongoose = require('mongoose');


//default setting
var config = require('../config/local');

//require schema
var itemSchema = require('./item').itemSchema(mongoose);


//define model
var Item = mongoose.model('Item', itemSchema);


//Exports
exports.Item = Item;


//connect to mongoDB
mongoose.connect('mongodb://' + config.mongo.host + '/' + config.mongo.database);