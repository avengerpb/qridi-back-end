var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//User schema
var UserSchema = new Schema({
	'polar-user-id':{
		type: Number,
		required:false},
	'member-id':{
		type:String,
		required:false},
	'registration-date':{
		type:String,
		required:false},
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
		required:false}
}, {collection : 'Users' });

//Physical information Schema
var PhysicalInfoSchema= new Schema({
	"id":{
		type: Number,
		required:false},
	"transaction-id":{
		type:Number,
		required:false},
	"created":{
		type:Date,
		required:false},
	"polar-user":{
		type:String,
		required:false},
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
},{ collection : 'Physical' });

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
},{ collection : 'Activity' });

//Activity schema
var ExerciseSchema =new Schema({
	"upload-time":{
		type:String,
		required:false},
	"id":{
		type:Number,
		required:false},
	"polar-user":{
		type:String,
		required:false},
	"transaction-id":{
		type:Number,
		required:false},
	"device":{
		type:String,
		required:false},
	"start-time":{
		type:String,
		required:false},
	"start-time":{
		type:String,
		required:false},
	"calories":{
		type:Number,
		required:false},
	"distance":{
		type:Number,
		required:false},
	"heart-rate":{
    "average": {
			type:Number,
			required:false } ,
    "maximum": {
			type:Number,
			required:false}
		},
	"training-load":{
		type:Number,
		required:false},
	"sport":{
		type:String,
		required:false},
	"has-route":{
		type:Boolean,
		required:false},
	"club-id":{
		type:Number,
		required:false},
	"club-name":{
		type:String,
		required:false},
	"detailed-sport-info":{
		type:String,
		required:false},
},{collection : 'Exercise' });

module.exports.UserSchema = UserSchema;
module.exports.PhysicalInfoSchema = PhysicalInfoSchema;
module.exports.ActivitySchema = ActivitySchema;
module.exports.ExerciseSchema = ExerciseSchema;
