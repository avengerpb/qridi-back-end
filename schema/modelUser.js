var Schema = require('mongoose');
var userSchema = Schema (
	{
	fname: String,
	lname: String,
	address: String,
 	bod: Date,
	email: String,
	gender: String,
	occupation: String,
	height: int,
	weight: double,
	trainningBackground: String,
	telephone: String,
	avatar: String,
	nickname: String,
	hash_pass: String,
	});

module.exports = db.model('userModel', userSchema);
