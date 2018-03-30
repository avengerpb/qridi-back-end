var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const db = mongoose.createConnection(dbURI);
// var data;
var model = require('../../schema/modelUser')
var Schema = mongoose.Schema;


//Defining the schema
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

var Polardata = mongoose.model('Polardata', UserSchema);
//Store User information
function storeUser(data){

  var Pdata = new Polardata();
  for (var key in data) {
    Pdata[key] = data[key];
}
    db.collection('Users').save(Pdata);
}

function register(newUser, callback){
  db.collection('Users').findOne({
		$or: [
			{'username': newUser.username},
			{'email': newUser.email}
		]
	}, (err, user) => {
		if(err) throw err;
		if(!user) {
			db.collection('Users').insert(newUser, (err, user) => {
				if(err) { throw err; }
				return callback('Register success');
			});
		} else {
			if(user.username == newUser.username) {
				return callback('Register failed: Existed name');
			}
			if(user.email == newUser.email){
				return callback('Register failed: Existed email');
			}
		}
		});
}

function login(req, callback){
  db.collection('Users').findOne({
		$or: [
			{'email': req.body.email_uname},
			{'username': req.body.email_uname}
		]
	}, (err, user) => {
		if(err) throw err;
		if(!user) {
			return callback(0);
		} else {
			let checkPass = bcrypt.compareSync(req.body.password, user.password);
			if(checkPass == false){
				return callback(1);
			} else {
				return callback(user);
				// session = req.session;
				// session.user = user;
				const token = jwt.sign(user, 'secret', {
					expiresIn: 604800 //1 week
				});
			}
		}
	});
}

module.exports.storeUser = storeUser;
module.exports.register = register;
module.exports.login = login;
