var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const db = mongoose.createConnection(dbURI);

//update User information
function upsert(data){
    db.collection('Users').insert(data);
  });
}

function register(newUser){
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
				console.log('Registration succeed!');
			});
		} else {
			if(user.username == newUser.username) {
				console.log('This username has already existed!');
			}
			if(user.email == newUser.email){
				console.log('This email has already existed!');
			}
		}
		});
}

function login(req){
  db.collection('Users').findOne({
		$or: [
			{'email': req.body.email_uname},
			{'username': req.body.email_uname}
		]
	}, (err, user) => {
		if(err) throw err;
		if(!user) {
			console.log("User doesn't exist");
		} else {
			let checkPass = bcrypt.compareSync(req.body.password, user.password);
			if(checkPass == false){
				console.log('Wrong password!');
			} else {
				console.log('Logged in');
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
