var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//User schema
var UserSchema = new Schema({
	'polar-user-id':{
		type: Number,
		reqired:false},
	'member-id':{
		type:String,
		reqired:false},
	'registration-date':{
		type:String,
		reqiured:false},
	'first-name':{
		type:String,
		required:false},
	'last-name':{
		type:String,
		required:false},
	'birthdate':{
		type:Date,
		required:false},
	'gender': {
		type:String,
		required:false},
	'weight':{
		type:Number,
		required:false},
	'height': {
		type:Number,
		required:false},
	'field':{
		type:String,
		reqiured:false}
});

//Physical information Schema
var PhysicalInfoSchema= new schema({
	"id":{
		type: Number,
		required:false},
	"transaction-id":{
		type:Number,
		required:false},
	"created":{
		type:Date,
		required:false}
	"polar-user":{
		type:String,
		required:false}
	"weight":{
		type:Number,
		required:false},
	"height":{
		type:Number,
		required:false},
	"maximum-heart-rate":{
		type:Number,
		required:false},
	"resting-heart-rate":{
		type:Number,
		required:false},
	"aerobic-threshold":{
		type:Number,
		required:false},
	"anaerobic-threshold":{
		type:Number,
		required:false},
	"vo2-max":{
		type:Number,
		required:false},
	"weight-source":{
		type:String,
		required:false}
});

//Activity schema
var ActivitySchema =new Schema({
	"id":{
		type:Number,
		required:false},
	"polar-user":{
		type:String,
		required:false},
	"transaction-id":{
		type:Number,
		required:false},
	"date":{
		type:Date,
		required:false},
	"created":{
		type:Date,
		required:false},
	"calories":{
		type:Number,
		required:false},
	"active-calories":{
		type:Number,
		required:false},
	"duration":{
		type:String,
		required:false},
	"active-steps":{
		type:Number,
		required:false}
});

module.exports.UserSchema = UserSchema;
module.exports.PhysicalInfoSchema = PhysicalInfoSchema;
module.exports.ActivitySchema = ActivitySchema;
