var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const db = mongoose.createConnection(dbURI);
// var data;
var model = require('../../schema/modelUser')
var Schema = mongoose.Schema;


var Usermodel = mongoose.model('Usermodel', model.UserSchema);
var Activitymodel = mongoose.model('Activitymodel', model.ActivitySchema);
var Physicalmodel = mongoose.model('Physicalmodel', model.PhysicalInfoSchema);
var Exercisemodel = mongoose.model('Exercisemodel', model.ExerciseSchema);
//Store User information
function storeUser(data){

  var User = new Usermodel();
  for (var key in data) {
    User[key] = data[key];
}
    db.collection('Users').save(User);
}

function storeActivity(data){

  var Activity = new Activitymodel();
  for (var key in data) {
    Activity[key] = data[key];
}
    db.collection('Activity').save(Activity);
}

function storePhysical(data){

  var Physical = new Physicalmodel();
  for (var key in data) {
    Physical[key] = data[key];
}

    db.collection('Physical').save(Physical);
}

function storeExercise(data){

  var Exercise = new Exercisemodel();
  for (var key in data) {
    Exercise[key] = data[key];
}

    db.collection('Exercise').save(Exercise);
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
module.exports.storePhysical = storePhysical;
module.exports.storeActivity = storeActivity;
module.exports.storeExercise = storeExercise;
module.exports.register = register;
module.exports.login = login;
