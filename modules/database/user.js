var mongoose = require('mongoose');
var dbURI = 'mongodb://swf:12345@ds233748.mlab.com:33748/qridi';
const db = mongoose.createConnection(dbURI);

//update User information
function upsert(data){
  db.collection('Users').update(
    {data},{data},{upsert: true});
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
			db.User.insert(newUser, (err, user) => {
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

module.exports.upsert = upsert;
module.exports.register = register;
