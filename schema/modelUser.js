var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	'polar-user-id':{type: Number},
	'member-id':{type:String},
	'registration-date': {type:String},
	'first-name':{type:String},
	'last-name':{type:String},
	'birthdate':{type:String},
	'gender': {type:String},
	'weight':{type:String},
	'height': {type:String},
	'field':{type:String}
});

module.exports.UserSchema = UserSchema;
