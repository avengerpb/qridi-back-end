var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const db = mongoose.createConnection(dbURI);

//update User information
function upsert(data){
    db.collection('Users').insert(data);
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
			return callback("User doesn't exist");
		} else {
			let checkPass = bcrypt.compareSync(req.body.password, user.password);
			if(checkPass == false){
				return callback('Wrong password!');
			} else {
				return callback('Logged in');
				// session = req.session;
				// session.user = user;
				const token = jwt.sign(user, 'secret', {
					expiresIn: 604800 //1 week
				});
			}
		}
	});
}

module.exports.upsert = upsert;
module.exports.register = register;
module.exports.login = login;
